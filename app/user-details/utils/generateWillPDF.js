import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

// Helpers
function fmtAddress(d) {
    if (!d) return "";
    return [d.buildingNumber, d.buildingName, d.street, d.town, d.city, d.county, d.postcode,
        d.country?.label || d.country].filter(Boolean).join(", ");
}
function fmtName(d) {
    if (!d) return "";
    return [d.title, d.fullName].filter(Boolean).join(" ");
}
function fmtDate(date) {
    if (!date) return "";
    try { return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); }
    catch { return ""; }
}
function ph(v, fb = "___________") { return v && String(v).trim() ? String(v).trim() : fb; }

const POWER_LABELS = {
    management: "Power of Management",
    investment: "Power of Investment",
    delegate: "Power to Delegate",
    property: "Power over Property",
    lendBorrow: "Power to Lend/Borrow",
    minors: "Power regarding Minors",
    advancements: "Power of Advancements",
    appropriateAssets: "Power to Appropriate Assets",
    majority: "Majority Decision Power",
    charge: "Power to Charge",
    nonInterestAccounts: "Power over Non-Interest Accounts",
};

// PageWriter
class PageWriter {
    constructor(pdfDoc, font, boldFont, italicFont, testName) {
        this.pdfDoc = pdfDoc;
        this.font = font;
        this.boldFont = boldFont;
        this.italicFont = italicFont;
        this.testName = testName;
        this.page = null;
        this.y = 0;
        this.margin = 60;
        this.W = 595;  // A4
        this.H = 842;
        this.lh = 18;
        this.fs = 13;
        this.pageNum = 0;
    }

    newPage(skipHeader = false) {
        this.page = this.pdfDoc.addPage([this.W, this.H]);
        this.y = this.H - this.margin - 20; // leave room for header
        this.pageNum++;
        
        if (!skipHeader) {
            const headerLeft = `Last Testament of ${this.testName}`;
            const headerRight = `${this.pageNum} | Page`;
            
            this.page.drawText(headerLeft, { x: this.margin, y: this.H - 40, size: 9, font: this.font, color: rgb(0.1, 0.1, 0.1) });
            const rw = this.font.widthOfTextAtSize(headerRight, 9);
            this.page.drawText(headerRight, { x: this.W - this.margin - rw, y: this.H - 40, size: 9, font: this.font, color: rgb(0.1, 0.1, 0.1) });
        }
    }

    checkSpace(n = 20) {
        if (this.y - n < this.margin) this.newPage();
    }

    drawText(text, { size = this.fs, bold = false, italic = false, color = rgb(0, 0, 0), indent = 0, firstLineIndent = 0, align = "left", maxWidth = null, dryRun = false } = {}) {
        const tokens = [];
        const parts = String(text).split(/(\*\*.*?\*\*)/g);
        for (let p of parts) {
            if (!p) continue;
            let isBold = bold;
            let content = p;
            if (p.startsWith("**") && p.endsWith("**")) {
                isBold = true;
                content = p.slice(2, -2);
            }
            const fontToUse = (isBold && italic) ? this.boldFont
                            : isBold ? this.boldFont 
                            : italic ? this.italicFont 
                            : this.font;
            const sizeToUse = isBold ? 13 : size; 

            const words = content.split(/(\s+)/);
            for (let w of words) {
                if (!w) continue;
                tokens.push({ text: w, font: fontToUse, size: sizeToUse });
            }
        }

        const maxW = maxWidth || (this.W - this.margin * 2 - indent);
        let lineX = firstLineIndent;
        let lineIdx = 0;
        const parsedLines = [[]];
        const lineWidths = [lineX];
        
        for (let i = 0; i < tokens.length; i++) {
            let t = tokens[i];
            
            if (t.text.includes('\n')) {
                const newlines = t.text.split('\n').length - 1;
                for (let k = 0; k < newlines; k++) {
                    parsedLines.push([]);
                    lineIdx++;
                    lineX = 0;
                    lineWidths.push(0);
                }
                continue;
            }

            let w = t.font.widthOfTextAtSize(t.text, t.size);
            
            // Break single words
            if (w > maxW && t.text.trim() !== '') {
                let currentChunk = "";
                let leftPieces = [];
                for (let char of t.text) {
                    if (t.font.widthOfTextAtSize(currentChunk + char, t.size) > maxW - 2) {
                        if (currentChunk.length === 0) {
                            leftPieces.push(char);
                        } else {
                            leftPieces.push(currentChunk);
                            currentChunk = char;
                        }
                    } else {
                        currentChunk += char;
                    }
                }
                if (currentChunk) leftPieces.push(currentChunk);
                
                const newTokens = leftPieces.map(p => ({ text: p, font: t.font, size: t.size }));
                tokens.splice(i, 1, ...newTokens);
                t = tokens[i];
                w = t.font.widthOfTextAtSize(t.text, t.size);
            }

            if (lineX + w > maxW && t.text.trim() !== '') {
                parsedLines.push([]);
                lineIdx++;
                lineX = 0;
                lineWidths.push(0);
                if (t.text.trim() === '') continue;
            }
            if (lineX === (lineIdx === 0 ? firstLineIndent : 0) && t.text.trim() === '') continue;
            
            parsedLines[lineIdx].push(t);
            lineX += w;
            lineWidths[lineIdx] = lineX;
        }

        for (let i = 0; i < parsedLines.length; i++) {
            const line = parsedLines[i];
            if (line.length === 0) continue;
            
            if (!dryRun) {
                this.checkSpace(Math.max(...line.map(t => t.size)) + 4);
                
                let cx = this.margin + indent + (i === 0 ? firstLineIndent : 0);
                if (align === "center") {
                    const totalTextW = lineWidths[i] - (i === 0 ? firstLineIndent : 0);
                    cx = (this.W - totalTextW) / 2;
                }

                for (const chunk of line) {
                    this.page.drawText(chunk.text, { x: cx, y: this.y, size: chunk.size, font: chunk.font, color });
                    cx += chunk.font.widthOfTextAtSize(chunk.text, chunk.size);
                }
                this.y -= this.lh;
            }
        }
        
        return parsedLines.filter(l => l.length > 0).length;
    }

    gap(n = 8) { this.y -= n; }

    hr(color = rgb(0.7, 0.7, 0.7)) {
        this.gap(10);
    }

    heading(text, uppercase = false) {
        this.gap(10);
        this.checkSpace(24);
        const dispText = uppercase ? text.toUpperCase() : text;
        this.drawText(dispText, { bold: true, size: 15, color: rgb(0, 0, 0) });
        this.gap(2);
    }

    para(text, { indent = 0, italic = false } = {}) {
        this.drawText(text, { size: 13, indent, italic });
        this.gap(5);
    }

    clause(n, text) {
        const prefix = `${n}. `;
        const prefixW = this.boldFont.widthOfTextAtSize(prefix, 13) + 2;
        this.checkSpace(20);
        
        this.page.drawText(prefix, { x: this.margin, y: this.y, size: 13, font: this.boldFont, color: rgb(0, 0, 0) });
        this.drawText(text, { size: 13, indent: prefixW });
        this.gap(5);
    }

    bullet(text) {
        const prefix = "\u2013  "; // en-dash
        const prefixW = this.font.widthOfTextAtSize(prefix, 13) + 2;
        this.checkSpace(20);
        
        this.page.drawText(prefix, { x: this.margin + 16, y: this.y, size: 13, font: this.font, color: rgb(0, 0, 0) });
        this.drawText(text, { size: 13, indent: 16 + prefixW });
        this.gap(3);
    }

    // Simple table
    table(rows, cols) {
        if (!rows.length) return;
        const totalW = this.W - this.margin * 2;
        const cellPad = 4;
        
        const drawHeader = () => {
            const headerRowH = 22;
            this.checkSpace(headerRowH + 4);
            let x = this.margin;
            for (const col of cols) {
                this.page.drawRectangle({ x, y: this.y - headerRowH + 2, width: col.width * totalW, height: headerRowH, color: rgb(0.93, 0.93, 0.95) });
                this.page.drawText(col.header, { x: x + cellPad, y: this.y - headerRowH + 8, size: 13, font: this.boldFont, color: rgb(0.2, 0.2, 0.2) });
                x += col.width * totalW;
            }
            this.y -= headerRowH;
        };
        
        drawHeader();

        // rows
        for (let i = 0; i < rows.length; i++) {
            let maxLines = 1;
            for (const col of cols) {
                const val = ph(rows[i][col.key], "—");
                const colW = col.width * totalW - cellPad * 2;
                const lines = this.drawText(val, { size: 13, maxWidth: colW, dryRun: true });
                if (lines > maxLines) maxLines = lines;
            }
            
            const rowH = (maxLines * this.lh) + 12;
            this.checkSpace(rowH);
            
            let x = this.margin;
            const startY = this.y;
            const rowColor = i % 2 === 0 ? rgb(1, 1, 1) : rgb(0.97, 0.97, 0.97);
            
            for (const col of cols) {
                const colW = col.width * totalW;
                this.page.drawRectangle({ x, y: startY - rowH + 2, width: colW, height: rowH, color: rowColor });
                // border
                this.page.drawRectangle({ x, y: startY - rowH + 2, width: colW, height: rowH, borderColor: rgb(0.85, 0.85, 0.85), borderWidth: 0.5 });
                
                const val = ph(rows[i][col.key], "—");
                const backupY = this.y;
                this.y = startY - 14; 
                this.drawText(val, { size: 13, maxWidth: colW - cellPad * 2, indent: x - this.margin + cellPad });
                
                this.y = backupY;
                x += colW;
            }
            this.y = startY - rowH;
        }
        this.gap(15);
    }
}

// PDF Generator
export async function generateWillPDF(savedSteps = {}, willLocation = "England") {
    const pdfDoc = await PDFDocument.create();
    const font      = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const boldFont  = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
    const italicFont = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

    // Testator data shortcut
    const testator   = savedSteps["testator"];
    const testName   = testator ? fmtName(testator) : "[CLIENT FULL NAME]";
    const testAddr   = testator ? fmtAddress(testator) : "[FULL ADDRESS]";
    const isMarried  = testator ? ["married", "civil partner"].some(s => (testator.maritalStatus || "").toLowerCase().includes(s)) : false;

    const w = new PageWriter(pdfDoc, font, boldFont, italicFont, testName);
    w.newPage();

    const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

    // Cover page
    w.gap(20);
    w.drawText("THIS IS THE LAST WILL AND TESTAMENT OF", { bold: true, size: 15, align: "center", color: rgb(0, 0, 0) });
    w.gap(10);
    w.drawText(testName.toUpperCase(), { bold: true, size: 15, align: "center", color: rgb(0, 0, 0) });
    w.gap(20);


    // OPENING DECLARATION
    w.para(`WHEREBY I **${testName}** of ${testAddr} **REVOKE** all former Wills and testamentary dispositions made by me and declare this to be my last will.`);

    if (testator?.marriageClause === "yes") {
        w.para(`"This Will is made in contemplation of my future marriage, and it shall remain valid and effective after such marriage."`, { italic: true });
    }

    // EXECUTORS
    if (savedSteps["executor"] !== null && savedSteps["executor"] !== undefined) {
        const ed   = savedSteps["executor"];
        const list = ed.executorsList || [];

        w.heading("Appointment of Executors");

        const execStr = list.map((ex) => {
            if (ex.type === "professional") return `${ph(ex.firmName)}, ${ph(ex.role)}`;
            const n = fmtName(ex) || "[Name]";
            const a = fmtAddress(ex) || ex.address || "";
            return a ? `${n} of ${a}` : n;
        });

        const appointStr = execStr.length === 0
            ? "[Name of executor 1]"
            : execStr.length === 1
                ? execStr[0]
                : `${execStr[0]} and ${execStr.slice(1).join(" and ")}`;

        w.para(`I APPOINT **${appointStr.replace(/ and /g, "** and **")}** as the Executors and Trustees of my Will.`);
        w.para("IN the subsequent clauses of this Will the expression my Trustees shall where the context admits mean and include the Trustee or Trustees hereof for the time being whether original additional or substituted.");
    }

    let clauseN = 0;
    const nc = () => ++clauseN;

    // SPOUSE
    if (savedSteps["spouse"] !== null && savedSteps["spouse"] !== undefined) {
        const sd = savedSteps["spouse"];
        if (isMarried || sd.hasSpouse) {
            w.heading("Spouse / Partner", true);
            const sp = sd.spouseList?.[0] || {};
            const spFull = fmtName(sp) ? `${fmtName(sp)}${fmtAddress(sp) ? " of " + fmtAddress(sp) : ""}` : "[Name and address of husband/wife/partner]";
            w.clause(nc(), `Should I predecease my husband/wife/partner **${spFull}** then my assets/share pass to him/her absolutely.`);
            w.clause(nc(), `Subject to the payment of my just debt funeral and testamentary expenses and any legacies, I give the entire residue of my estate to **${fmtName(sp) || "……name……"}** of ${fmtAddress(sp) || "……………address……………………"}`);
        }
    }

    // BENEFICIARIES
    if (savedSteps["beneficiaries"] !== null && savedSteps["beneficiaries"] !== undefined) {
        const bd       = savedSteps["beneficiaries"];
        const children = bd.beneficiariesList || [];
        const others   = bd.beneficiaryDetailsList || [];
        const charities = bd.charityList || [];
        const allBens  = bd.hasChildren ? [...children, ...others] : others;
        const powers   = bd.trusteePowers || {};
        const activePowers = Object.entries(POWER_LABELS).filter(([k]) => powers[k]);

        w.heading("Beneficiaries");
        if (allBens.length > 0) {
            const benNames = allBens.map(b => fmtName(b) || "my beneficiaries").join("** and **");
            w.clause(nc(), `If my partner and myself die together then all my property moveable and immoveable will go to **${benNames}** equally. The names of children/beneficiaries are:`);
            allBens.forEach((b, i) => {
                const addr = fmtAddress(b) || b.address || "";
                w.para(`${i + 1}) **${fmtName(b) || "[Name]"}**${b.dob ? ", date of birth " + fmtDate(b.dob) : ""}${addr ? " of " + addr : ""}`, { indent: 16 });
            });
        } else {
            w.clause(nc(), `If my partner and myself die together then all my property moveable and immoveable will go to **[Name of beneficiary]** equally. The names of children/beneficiaries are:`);
            w.para(`1) **[Name, date of birth and address of beneficiary]**`, { indent: 16 });
        }

        if (charities.length > 0) {
            w.heading("Charitable Beneficiaries");
            charities.forEach((c, i) => {
                w.para(`${i + 1}. **${ph(c.charityName)}** — Reg. No. ${ph(c.registeredNumber)} — ${ph(c.address)}`, { indent: 16 });
            });
        }

        if (bd.isTrustee && activePowers.length > 0) {
            w.heading("Trustee Powers");
            w.para("MY Trustees shall have the following powers:");
            activePowers.forEach(([, label]) => w.bullet(label));
            if (powers.additionalPowers) w.bullet(powers.additionalPowers);
            w.gap(4);
            w.clause(nc(), "I DECLARE that my Trustees may enter into any variation of the Trusts hereof at their absolute discretion pursuant to the terms of the Finance Act 1978, the Capital Gains Tax Act 1989 and the Capital Transfer Tax Act 1984 or any statutory modification thereof notwithstanding that any beneficiary under this Will may be a minor and without the necessity of obtaining the consent of any beneficiary.");
            w.clause(nc(), "ANY of my Trustees who is a Solicitor Accountant or other professional or businessman may charge and be paid (in priority to all other dispositions herein and free of capital taxes) all usual professional and other fees for work done by him or his firm in connection with proving my Will and executing its trusts including work outside the ordinary course of his profession or business and work which he could or should have done personally had he not been a Solicitor Accountant or other professional or businessman.");
        }
    }

    // ASSETS
    if (savedSteps["assets"] !== null && savedSteps["assets"] !== undefined) {
        const ad = savedSteps["assets"];
        w.heading("Disposition of Estate — Assets");

        const properties = ad.assetsList || [];
        if (properties.length > 0) {
            w.para("Real Property:");
            w.table(properties.map(p => ({
                addr: fmtAddress(p) || "—",
                ownership: ph(p.ownershipType),
                value: p.estimatedValue ? `£${p.estimatedValue}` : "—",
                mortgage: p.hasMortgage === "yes" ? ph(p.mortgageLender, "Yes") : "None"
            })), [
                { header: "Address", width: 0.4, key: "addr" },
                { header: "Ownership", width: 0.2, key: "ownership" },
                { header: "Est. Value", width: 0.2, key: "value" },
                { header: "Mortgage", width: 0.2, key: "mortgage" },
            ]);
        }

        const banks = ad.bankAccounts || [];
        if (banks.length > 0) {
            w.para("Bank Accounts:");
            w.table(banks.map(b => ({
                bank: ph(b.bankName),
                type: ph(b.accountType),
                number: ph(b.accountNumber, "—")
            })), [
                { header: "Bank", width: 0.4, key: "bank" },
                { header: "Account Type", width: 0.3, key: "type" },
                { header: "Account Number", width: 0.3, key: "number" },
            ]);
        }

        const investments = ad.investments || [];
        if (investments.length > 0) {
            w.para("Investments:");
            w.table(investments.map(inv => ({
                company: ph(inv.companyName),
                type: ph(inv.investmentType),
                policy: ph(inv.accountPolicyNumber, "—"),
                managed: ph(inv.managedBy, "—"),
                info: ph(inv.additionalInfo, "—")
            })), [
                { header: "Company / Fund", width: 0.25, key: "company" },
                { header: "Type", width: 0.2, key: "type" },
                { header: "Account / Policy No.", width: 0.2, key: "policy" },
                { header: "Managed By", width: 0.2, key: "managed" },
                { header: "Info", width: 0.15, key: "info" },
            ]);
        }

        const valuables = ad.valuableItems || [];
        if (valuables.length > 0) {
            w.para("Valuable Items:");
            w.table(valuables.map(v => ({
                category: ph(v.category),
                desc: ph(v.itemDescription)
            })), [
                { header: "Category", width: 0.35, key: "category" },
                { header: "Description", width: 0.65, key: "desc" },
            ]);
        }

        const digital = ad.digitalAssets || [];
        if (digital.length > 0) {
            w.para("Digital Assets:");
            w.table(digital.map(d => ({
                type: ph(d.assetType),
                platform: ph(d.platformName),
                accountId: ph(d.accountId, "—")
            })), [
                { header: "Type", width: 0.3, key: "type" },
                { header: "Platform", width: 0.35, key: "platform" },
                { header: "Account ID / Wallet", width: 0.35, key: "accountId" },
            ]);
        }

        const intellectual = ad.intellectualAssets || [];
        if (intellectual.length > 0) {
            w.para("Intellectual Property:");
            w.table(intellectual.map(ia => ({
                type: ph(ia.assetType),
                title: ph(ia.title),
                status: ph(ia.status, "—")
            })), [
                { header: "Type", width: 0.25, key: "type" },
                { header: "Title", width: 0.5, key: "title" },
                { header: "Status", width: 0.25, key: "status" },
            ]);
        }
    }

    // LIABILITIES
    if (savedSteps["liabilities"] !== null && savedSteps["liabilities"] !== undefined) {
        const ld  = savedSteps["liabilities"];
        const list = ld.liabilitiesList || ld.liabilities || [];
        w.heading("Liabilities / Debts");
        if (list.length > 0) {
            w.table(list.map(l => ({
                creditor: ph(l.creditorName || l.creditor),
                type: ph(l.debtType || l.type),
                amount: l.amount ? `£${l.amount}` : "—"
            })), [
                { header: "Creditor", width: 0.45, key: "creditor" },
                { header: "Debt Type", width: 0.3, key: "type" },
                { header: "Amount", width: 0.25, key: "amount" },
            ]);
        }
    }


    // GIFTS
    if (savedSteps["gifts"] !== null && savedSteps["gifts"] !== undefined) {
        const gd     = savedSteps["gifts"];
        const gifts  = gd.giftsList || [];
        const charities = gd.charityDonations || [];

        w.heading("Distribution of Residue");

        gifts.forEach((g, i) => {
            w.clause(nc(),
                `I give **${ph(g.beneficiary)}** ${ph(g.description)} free of all taxes and duties and linked to the retail price index from today and I declare that the receipt of the Treasurer, or other authorised officer, shall be sufficient discharge of the same.`
            );
        });

        w.clause(nc(),
            "To receive any gift or property under this Will a beneficiary must survive me for thirty (30) days. Beneficiaries of my estate residue will receive and share all of my property and assets not specifically bequeathed or otherwise required for the payment of any debts owed, including but not limited to, expenses associated with the probate of my Will, the payment of taxes, funeral expenses or any other expense resulting from the administration of my Will. The entire estate residue is to be divided between my designated beneficiaries with the beneficiaries receiving a share of the entire estate residue. All property given under this Will is subject to any encumbrances or liens attached to the property."
        );
        w.clause(nc(),
            "The entire residue of my estate will be transferred to my spouse, if they survive me for thirty (30) full days, for their own use absolutely."
        );

        if (gd.hasCharity === "yes" && charities.length > 0) {
            w.heading("Charitable Donations");
            charities.forEach((c) => {
                w.para(
                    `${ph(c.description || c.gift, "[gift description]")} percent/pounds of the residue of my real and personal estate to ${ph(c.charityName)}${c.registeredNumber ? " (Registered Charity No. " + c.registeredNumber + ")" : ""}.`
                );
            });
        }

        w.heading("General Provisions");
        w.para("No Contest Provision", { });
        w.clause(nc(),
            "If any beneficiary under this Will contests in any court any of the provisions of this Will, then each and all such persons shall not be entitled to any devises, legacies, bequests, or benefits under this Will or any codicil hereto, and such interest or share in my estate shall be disposed of as if that contesting beneficiary had not survived me."
        );
        w.para("Severability");
        w.clause(nc(),
            "If any provisions of this Will are deemed unenforceable, the remaining provisions will remain in full force and effect."
        );
    }

    // RESIDUAL
    if (savedSteps["residual"] !== null && savedSteps["residual"] !== undefined) {
        const rd   = savedSteps["residual"];
        const list = rd.residueList || [];

        w.heading("Wipeout Provision");
        w.clause(nc(),
            "Should my spouse predecease me, or fail to survive me for thirty (30) full days, then I HEREBY DIRECT that the residue of my estate or the amount remaining thereof be divided into one hundred (100) equal shares and to pay and transfer such shares as follows:"
        );
        w.para("a. 50 shares to be divided equally between my parents and siblings, or the survivors thereof, for their own use absolutely, if all or any of them is then alive.", { indent: 20 });
        w.para("PROVIDED HOWEVER, that if all of my parents and siblings shall predecease me, or surviving me die before receiving their share of my estate, I DIRECT that their share of my estate or the amount remaining shall be divided equally between my spouse's parents and siblings then alive for their own use absolutely.", { indent: 20 });
        w.para("b. 50 shares to be divided equally between my spouse's parents and siblings, or the survivors thereof, for their own use absolutely, if all or any of them is then alive.", { indent: 20 });
        w.para("PROVIDED HOWEVER, that if all of my spouse's parents and siblings shall predecease me, or surviving me die before receiving their share of my estate, I DIRECT that their share of my estate or the amount remaining shall be divided equally between my parents and siblings then alive for their own use absolutely.", { indent: 20 });

        if (list.length > 0) {
            w.heading("Residuary Heirs");
            list.forEach((r, i) => {
                w.para(`${i + 1}. ${ph(r.fullName)} (${ph(r.relationship)})${r.description ? " — " + r.description : ""}`, { indent: 16 });
            });
        }

        w.heading("Individuals Omitted From Bequests");
        w.clause(nc(), "If I have omitted to leave property in this Will to one or more of my heirs as named above, the failure to do so is intentional.");
    }

    // FUNERAL
    if (savedSteps["funeral"] !== null && savedSteps["funeral"] !== undefined) {
        const fd = savedSteps["funeral"];
        w.heading("Funeral Wishes");
        const method = Array.isArray(fd.burialMethod) ? fd.burialMethod[0] : fd.burialMethod;
        if (method) w.para(`Burial Preference: ${method}`);
        if (fd.hasLocationPreference === 'yes' && fd.cityLocation) w.para(`Burial Location: ${fd.cityLocation}`);
        if (fd.specialRequests) w.para(fd.specialRequests, { italic: true });
        if (fd.payFromEstate === 'yes') w.para(`Funeral Cost: To be paid from estate. Payment Priority: ${ph(fd.paymentPriority, '—')}`);

        if (fd.hasFuneralInsurance === 'yes') {
            w.heading("Funeral Insurance");
            w.para(`Provider: ${ph(fd.insuranceProvider)}`);
            w.para(`Policy No.: ${ph(fd.policyNumber)}`);
            w.para(`Policyholder: ${ph(fd.policyholderTitle)} ${ph(fd.policyholderName)}`);
            w.para(`Coverage Amount: ${ph(fd.coverageAmount)}`);
            if (fd.policyDocLocation) w.para(`Document Location: ${fd.policyDocLocation}`);
        }

        if (fd.wantOrganDonation === 'yes') {
            w.heading("Organ Donation");
            if (fd.donationType === 'all') {
                w.para('I wish to donate ALL organs.');
            } else {
                const organs = fd.organPreferences || {};
                const active = Object.entries(organs).filter(([, v]) => v === 'yes').map(([k]) => k);
                if (active.length > 0) w.para(`Specific organs: ${active.join(', ')}`);
            }
            if (fd.nhsRegistered === 'yes' && fd.nhsReference) {
                w.para(`NHS Organ Donor Register No.: ${fd.nhsReference}`);
            }
        }
    }

    // WITNESSES
    {
        const wd = savedSteps["witnesses"];
        const t = wd?.testator || {};
        const testatorSig = [t.title, t.fullName].filter(Boolean).join(' ') || testName;
        const signDate    = t.date ? fmtDate(t.date) : today;
        const allWitnesses = [
            wd?.witness1 || {},
            wd?.witness2 || {},
            ...(wd?.extraWitnesses || [])
        ];

        w.heading("Attestation");
        w.gap(8);
        w.para(`IN WITNESS whereof I have hereunto set my hand to this Will on ${signDate}.`);
        w.gap(4);
        w.para(`SIGNED by the said ${testatorSig} as and for his/her last Will and Testament in the presence of us both being present at the same time who at his/her request and in his/her presence and in the presence of each other have hereunto subscribed our names as witnesses.`);
        w.gap(20);

        // All witness signature lines in 2 columns
        w.checkSpace(90);
        const startY = w.y;
        const colW = (w.W - w.margin * 2) / 2;

        allWitnesses.forEach((wr, i) => {
            const row = Math.floor(i / 2);
            const col = i % 2;
            const x = w.margin + col * colW;
            const y = startY - row * 80;

            if (w.y < w.margin + 80 && col === 0 && row > 0) {
                w.newPage();
                w.y = w.H - w.margin;
            }

            const drawY = col === 0 || row === 0 ? y : w.y; // Keep track of wrapped Y
            const actualY = col === 1 && row > 0 && w.y === w.H - w.margin ? w.y - (row % Math.floor(startY/80)) * 80 : drawY;

            w.page.drawText(`Signature of Witness (${i + 1}):`, { x, y: actualY, size: 13, font: w.boldFont, color: rgb(0, 0, 0) });
            
            const lineY = actualY - 26;
            w.page.drawLine({ start: { x, y: lineY }, end: { x: x + 180, y: lineY }, thickness: 0.5, color: rgb(0, 0, 0) });
            
            if (wr.signature) {
                w.page.drawText(wr.signature, { x: x + 10, y: lineY + 2, size: 16, font: w.italicFont, color: rgb(0, 0, 0) });
            }
            
            const wName = [wr.title, wr.fullName].filter(Boolean).join(' ') || '___________________________';
            w.page.drawText(`Full name: `, { x, y: lineY - 18, size: 13, font: w.font, color: rgb(0, 0, 0) });
            w.page.drawText(wName, { x: x + w.font.widthOfTextAtSize("Full name: ", 13), y: lineY - 18, size: 13, font: w.boldFont, color: rgb(0, 0, 0) });
            
            w.y = lineY - 34;
            w.drawText(`Address: ${ph(wr.address, '___________________________')}`, { size: 13, indent: col * colW, maxWidth: colW - 20 });
        });
        w.y -= 25;
    }

    // BACK COVER
    w.newPage(true);
    w.y = w.H / 2 + 100; 
    w.drawText("THE LAST WILL AND TESTAMENT", { bold: true, size: 15, align: "center", color: rgb(0, 0, 0) });
    w.y -= 60;
    w.drawText("OF", { bold: true, size: 15, align: "center", color: rgb(0, 0, 0) });
    w.y -= 60;
    w.drawText(testName.toUpperCase(), { bold: true, size: 15, align: "center", color: rgb(0, 0, 0) });

    const pdfBytes = await pdfDoc.save();
    const blob     = new Blob([pdfBytes], { type: "application/pdf" });
    const url      = URL.createObjectURL(blob);
    const filename = `will_${Date.now()}.pdf`;
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return filename;
}
