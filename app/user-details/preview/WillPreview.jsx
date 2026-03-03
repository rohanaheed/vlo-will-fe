"use client";
import React from "react";

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

const todayStr = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

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

const FONT = "'Times New Roman', Times, 'Georgia', serif";

const P = ({ children, className = "", indent = false }) => {
    // We'll wrap strong elements to render them at 13px instead
    const processChildren = (nodes) => {
        return React.Children.map(nodes, child => {
            if (child && child.type === 'strong') {
                return <strong style={{ fontSize: "13px" }}>{child.props.children}</strong>;
            }
            return child;
        });
    };
    return (
        <p style={{ fontFamily: FONT }} className={`text-[13px] leading-[1.8] text-gray-900 mb-2 ${indent ? "pl-6" : ""} ${className}`}>
            {processChildren(children)}
        </p>
    );
};

const Heading = ({ children, isMajor = false }) => (
    <div className={`mt-5 mb-2 ${isMajor ? 'text-center' : ''}`}>
        <p style={{ fontFamily: FONT }}
            className={`text-[15px] font-bold text-gray-900 ${isMajor ? 'uppercase tracking-widest' : ''}`}>
            {children}
        </p>
    </div>
);

const Clause = ({ n, children }) => (
    <div className="flex gap-2 mb-2" style={{ fontFamily: FONT }}>
        <span className="text-[13px] font-bold text-gray-900 min-w-[20px] flex-shrink-0">{n}.</span>
        <p className="text-[13px] leading-[1.8] text-gray-900">{children}</p>
    </div>
);

const Bullet = ({ children, className = "" }) => (
    <div className={`flex gap-2 mb-[5px] pl-4 ${className}`} style={{ fontFamily: FONT }}>
        <span className="text-[13px] text-gray-900 min-w-[10px] flex-shrink-0">&bull;</span>
        <p className="text-[13px] leading-[1.8] text-gray-900">{children}</p>
    </div>
);

const SectionRule = () => <div className="my-4" />;

function TestatorSection({ data, isLive }) {
    const name = data ? fmtName(data) : "[CLIENT FULL NAME]";
    const address = data ? fmtAddress(data) : "[FULL ADDRESS]";
    return (
        <div className={isLive ? "border-l-[2px] border-gray-300 pl-3" : ""}>
            <div className="text-center mb-6 mt-4">
                <p style={{ fontFamily: FONT }}
                    className="text-[14px] uppercase text-gray-900 mb-1 font-bold">
                    THIS IS THE LAST WILL AND TESTAMENT OF
                </p>
                <p style={{ fontFamily: FONT }}
                    className="text-[18px] font-bold uppercase text-gray-900 mb-2">
                    {name.toUpperCase()}
                </p>
            </div>
            <P>
                <strong>WHEREBY I</strong> <strong>{name}</strong> of {ph(address, "[FULL ADDRESS]")} <strong>REVOKE</strong> all former Wills and
                testamentary dispositions made by me and declare this to be my last will.
            </P>
            {data?.marriageClause === "yes" && (
                <P className="italic text-gray-600">
                    &ldquo;This Will is made in contemplation of my future marriage, and it shall remain
                    valid and effective after such marriage.&rdquo;
                </P>
            )}
        </div>
    );
}

function ExecutorSection({ data, isLive }) {
    if (!data) return null;
    const list = data.executorsList || [];
    const exec1 = list[0] ? (list[0].type === "professional"
        ? `${ph(list[0].firmName, "[Firm Name]")}, ${ph(list[0].role, "[Role]")}`
        : `${fmtName(list[0]) || "[Executor 1 Name]"}`)
        : "[Name and address of executor 1]";
    const exec2 = list[1] ? (list[1].type === "professional"
        ? `${ph(list[1].firmName, "[Firm Name]")}, ${ph(list[1].role, "[Role]")}`
        : `${fmtName(list[1]) || "[Executor 2 Name]"}`)
        : null;

    return (
        <div className={isLive ? "border-l-[2px] border-gray-300 pl-3" : ""}>
            <Heading>Appointment of Executors</Heading>
            <P>
                I APPOINT <strong>{exec1}</strong>
                {exec2 && <> and <strong>{exec2}</strong></>} as the Executors and
                Trustees of my Will.
            </P>
            <P>
                IN the subsequent clauses of this Will the expression my Trustees shall where the context admits mean
                and include the Trustee or Trustees hereof for the time being whether original additional or substituted.
            </P>
        </div>
    );
}

function SpouseSection({ data, testatorData, isLive, clauseStart = 1 }) {
    if (!data) return null;
    const marital = testatorData?.maritalStatus || "";
    const isMarried = ["Married", "Civil Partner"].some(s => marital.toLowerCase().includes(s.toLowerCase()));

    const sp = data.spouseList?.[0];
    const spName = sp ? fmtName(sp) : "[Name and address of husband/wife/partner]";
    const spAddr = sp ? fmtAddress(sp) : "";
    const spFull = spAddr ? `${spName} of ${spAddr}` : spName;

    const residualHeir = data.spouseList?.[0];
    const residualName = residualHeir ? fmtName(residualHeir) : "[Name and address of husband/wife/partner]";
    const residualAddr = residualHeir ? fmtAddress(residualHeir) : "[Name and address of husband/wife/partner]";
    let n = clauseStart;
    return (
        <div className={isLive ? "border-l-[2px] border-gray-300 pl-3" : ""}>
            <Heading>Spouse / Partner</Heading>
            {isMarried || isLive ? (
                <>
                    <Clause n={n++}>
                        Should I predecease my husband/wife/partner <strong>{spFull}</strong> then my
                        assets/share pass to him/her absolutely.
                    </Clause>
                    <Clause n={n++}>
                        Subject to the payment of my just debt funeral and testamentary expenses and any legacies,
                        I give the entire residue of my estate to <strong>{residualName}</strong> of{" "}
                        <strong>{residualAddr}</strong>
                    </Clause>
                </>
            ) : (
                <P className="italic text-gray-400">Spouse section not applicable (testator is not married/civil partner)</P>
            )}
        </div>
    );
}

function BeneficiariesSection({ data, isLive, clauseStart = 1 }) {
    if (!data) return null;
    const children = data.beneficiariesList || [];
    const others = data.beneficiaryDetailsList || [];
    const isTrustee = data.isTrustee;
    const powers = data.trusteePowers || {};
    const activePowers = Object.entries(POWER_LABELS).filter(([k]) => powers[k]);
    const allBeneficiaries = data.hasChildren ? [...children, ...others] : others;
    let n = clauseStart;
    return (
        <div className={isLive ? "border-l-[2px] border-gray-300 pl-3" : ""}>
            <Heading>Beneficiaries</Heading>
            {allBeneficiaries.length > 0 ? (
                allBeneficiaries.map((b, i) => (
                    <P key={i}>
                        {i + 1}. <strong>{fmtName(b)}</strong>
                        {b.relationship ? ` (${b.relationship})` : ""}
                        {b.dob ? ` — DOB: ${fmtDate(b.dob)}` : ""}
                        {fmtAddress(b) ? ` — ${fmtAddress(b)}` : ""}
                        {b.inheritanceAge ? ` — inherits at age ${b.inheritanceAge}` : ""}
                    </P>
                ))
            ) : (
                <P className="italic text-gray-400">[Beneficiary details will appear here]</P>
            )}

            {isTrustee && activePowers.length > 0 && (
                <>
                    <Heading>Trustee Powers</Heading>
                    <P><strong>MY Trustees</strong> shall have the following powers:</P>
                    {activePowers.map(([k, label]) => (
                        <Bullet key={k} className="text-[13px]">{label}</Bullet>
                    ))}
                    {powers.additionalPowers && <Bullet className="text-[13px]">{powers.additionalPowers}</Bullet>}
                    <Clause n={n++}>
                        I DECLARE that my Trustees may enter into any variation of the Trusts hereof at their absolute
                        discretion pursuant to the terms of the Finance Act 1978, the Capital Gains Tax Act 1989 and the
                        Capital Transfer Tax Act 1984 or any statutory modification thereof notwithstanding that any
                        beneficiary under this Will may be a minor and without the necessity of obtaining the consent of
                        any beneficiary.
                    </Clause>
                    <Clause n={n++}>
                        ANY of my Trustees who is a Solicitor Accountant or other professional or businessman may charge
                        and be paid (in priority to all other dispositions herein and free of capital taxes) all usual
                        professional and other fees for work done by him or his firm in connection with proving my Will
                        and executing its trusts including work outside the ordinary course of his profession or business
                        and work which he could or should have done personally had he not been a Solicitor Accountant or
                        other professional or businessman.
                    </Clause>
                </>
            )}
        </div>
    );
}

// Small reusable table for preview
function MiniTable({ cols, rows, caption }) {
    if (!rows || rows.length === 0) return null;
    return (
        <div className="mb-4">
            {caption && (
                <p style={{ fontFamily: FONT }} className="text-[13px] font-bold text-gray-800 uppercase tracking-widest mb-1 mt-3 border-l-2 border-gray-800 pl-1">
                    {caption}
                </p>
            )}
            <table className="w-full border-collapse" style={{ fontFamily: FONT, fontSize: "13px" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f0f0f0" }}>
                        {cols.map(c => (
                            <th key={c.key} style={{ color: "#1a1a1a", fontFamily: FONT, fontSize: "9px", letterSpacing: "0.05em", borderBottom: "1.5px solid #888" }}
                                className="text-left px-2 py-1 font-bold uppercase tracking-widest">
                                {c.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#f8f8f8" }}>
                            {cols.map(c => (
                                <td key={c.key} style={{ fontFamily: FONT, fontSize: "13px", color: "#1a1a1a", borderBottom: "0.5px solid #e0e0e0", borderRight: "0.5px solid #e0e0e0" }}
                                    className="px-2 py-1">
                                    {row[c.key] || <span style={{ color: "#aaa" }}>&mdash;</span>}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function AssetsSection({ data, isLive }) {
    if (!data) return null;
    const properties = data.assetsList || [];
    const banks = data.bankAccounts || [];
    const investments = data.investments || [];
    const valuables = data.valuableItems || [];
    const digital = data.digitalAssets || [];
    const intellectual = data.intellectualAssets || [];

    const hasAny = properties.length || banks.length || investments.length || valuables.length || digital.length || intellectual.length;

    return (
        <div className={isLive ? "border-l-[2px] border-gray-300 pl-3" : ""}>
            <Heading>Assets</Heading>

            <MiniTable
                caption="Real Property"
                cols={[
                    { key: "addr", header: "Address" },
                    { key: "ownership", header: "Ownership" },
                    { key: "value", header: "Est. Value" },
                    { key: "mortgage", header: "Mortgage" },
                ]}
                rows={properties.map(p => ({
                    addr: fmtAddress(p) || "—",
                    ownership: p.ownershipType || "—",
                    value: p.estimatedValue ? `£${p.estimatedValue}` : "—",
                    mortgage: p.hasMortgage === "yes" ? (p.mortgageLender || "Yes") : "None",
                }))}
            />

            <MiniTable
                caption="Bank Accounts"
                cols={[
                    { key: "bank", header: "Bank" },
                    { key: "type", header: "Account Type" },
                    { key: "number", header: "Account Number" },
                ]}
                rows={banks.map(b => ({
                    bank: b.bankName || "—",
                    type: b.accountType || "—",
                    number: b.accountNumber || "—",
                }))}
            />

            <MiniTable
                caption="Investments"
                cols={[
                    { key: "company", header: "Company / Fund" },
                    { key: "type", header: "Investment Type" },
                    { key: "policy", header: "Account / Policy No." },
                    { key: "managed", header: "Managed By" },
                    { key: "info", header: "Additional Info" },
                ]}
                rows={investments.map(inv => ({
                    company: inv.companyName || "—",
                    type: inv.investmentType || "—",
                    policy: inv.accountPolicyNumber || "—",
                    managed: inv.managedBy || "—",
                    info: inv.additionalInfo || "—",
                }))}
            />

            <MiniTable
                caption="Valuable Items"
                cols={[
                    { key: "category", header: "Category" },
                    { key: "desc", header: "Description" },
                ]}
                rows={valuables.map(v => ({
                    category: v.category || "—",
                    desc: v.itemDescription || "—",
                }))}
            />

            <MiniTable
                caption="Digital Assets"
                cols={[
                    { key: "type", header: "Type" },
                    { key: "platform", header: "Platform" },
                    { key: "accountId", header: "Account ID / Wallet" },
                ]}
                rows={digital.map(d => ({
                    type: d.assetType || "—",
                    platform: d.platformName || "—",
                    accountId: d.accountId || "—",
                }))}
            />

            <MiniTable
                caption="Intellectual Property"
                cols={[
                    { key: "type", header: "Type" },
                    { key: "title", header: "Title" },
                    { key: "status", header: "Status" },
                ]}
                rows={intellectual.map(ia => ({
                    type: ia.assetType || "—",
                    title: ia.title || "—",
                    status: ia.status || "—",
                }))}
            />

            {!hasAny && <P className="italic text-gray-400">[Asset details will appear here]</P>}
        </div>
    );
}

function LiabilitiesSection({ data, isLive }) {
    if (!data) return null;
    const list = data.liabilitiesList || data.liabilities || [];
    return (
        <div className={isLive ? "border-l-[2px] border-gray-300 pl-3" : ""}>
            <Heading>Liabilities &amp; Debts</Heading>
            <MiniTable
                cols={[
                    { key: "num", header: "#" },
                    { key: "creditor", header: "Creditor" },
                    { key: "type", header: "Debt Type" },
                    { key: "amount", header: "Amount" },
                ]}
                rows={list.map((l, i) => ({
                    num: String(i + 1),
                    creditor: l.creditorName || l.creditor || "—",
                    type: l.debtType || l.type || "—",
                    amount: l.amount ? `£${l.amount}` : "—",
                }))}
            />
            {list.length === 0 && <P className="italic text-gray-400">[Liabilities will appear here]</P>}
        </div>
    );
}

function GiftsSection({ data, isLive, clauseStart = 1 }) {
    if (!data) return null;
    const gifts = data.giftsList || [];
    const charities = data.charityDonations || [];
    const hasCharity = data.hasCharity === "yes";
    let n = clauseStart;

    return (
        <div className={isLive ? "border-l-[2px] border-gray-300 pl-3" : ""}>
            <Heading>Distribution of Residue</Heading>
            {gifts.map((g, i) => (
                <Clause key={i} n={n++}>
                    I give <strong>{ph(g.beneficiary)}</strong> {ph(g.description)} free of all taxes and duties and
                    linked to the retail price index from today and I declare that the receipt of the Treasurer, or
                    other authorised officer, shall be sufficient discharge of the same.
                </Clause>
            ))}
            {gifts.length === 0 && <P className="italic text-gray-400">[Gift details will appear here]</P>}

            <Clause n={n++}>
                To receive any gift or property under this Will a beneficiary must survive me for thirty (30) days.
                Beneficiaries of my estate residue will receive and share all of my property and assets not
                specifically bequeathed or otherwise required for the payment of any debts owed, including but not
                limited to, expenses associated with the probate of my Will, the payment of taxes, funeral expenses
                or any other expense resulting from the administration of my Will. The entire estate residue is to be
                divided between my designated beneficiaries with the beneficiaries receiving a share of the entire
                estate residue. All property given under this Will is subject to any encumbrances or liens attached
                to the property.
            </Clause>
            <Clause n={n++}>
                The entire residue of my estate will be transferred to my spouse, if they survive me for thirty (30)
                full days, for their own use absolutely.
            </Clause>

            {hasCharity && charities.length > 0 && (
                <>
                    <Heading>Charitable Donations</Heading>
                    {charities.map((c, i) => (
                        <P key={i}>
                            {ph(c.description || c.gift, "[gift description]")} percent/pounds of the residue of my real
                            and personal estate to <strong>{ph(c.charityName)}</strong>
                            {c.registeredNumber ? ` (Registered Charity No. ${c.registeredNumber})` : ""}.
                        </P>
                    ))}
                </>
            )}

            <Heading>General Provisions</Heading>
            <p style={{ fontFamily: FONT }} className="text-[8.5px] font-bold text-gray-700 mb-1">No Contest Provision</p>
            <Clause n={n++}>
                If any beneficiary under this Will contests in any court any of the provisions of this Will, then each
                and all such persons shall not be entitled to any devises, legacies, bequests, or benefits under this
                Will or any codicil hereto, and such interest or share in my estate shall be disposed of as if that
                contesting beneficiary had not survived me.
            </Clause>
            <p style={{ fontFamily: FONT }} className="text-[8.5px] font-bold text-gray-700 mb-1">Severability</p>
            <Clause n={n++}>
                If any provisions of this Will are deemed unenforceable, the remaining provisions will remain in full
                force and effect.
            </Clause>
        </div>
    );
}

function ResidualSection({ data, isLive, clauseStart = 1 }) {
    if (!data) return null;
    const list = data.residueList || [];
    let n = clauseStart;
    return (
        <div className={isLive ? "border-l-[2px] border-gray-300 pl-3" : ""}>
            <Heading>Wipeout Provision</Heading>
            <Clause n={n++}>
                Should my spouse predecease me, or fail to survive me for thirty (30) full days, then I HEREBY DIRECT
                that the residue of my estate or the amount remaining thereof be divided into one hundred (100) equal
                shares and to pay and transfer such shares as follows:
            </Clause>
            <div className="pl-4 mb-2">
                <P>a. 50 shares to be divided equally between my parents and siblings, or the survivors thereof, for
                    their own use absolutely, if all or any of them is then alive.</P>
                <P>PROVIDED HOWEVER, that if all of my parents and siblings shall predecease me, or surviving me die
                    before receiving their share of my estate, I DIRECT that their share of my estate or the amount
                    remaining shall be divided equally between my spouse&apos;s parents and siblings then alive for
                    their own use absolutely.</P>
                <P>b. 50 shares to be divided equally between my spouse&apos;s parents and siblings, or the survivors
                    thereof, for their own use absolutely, if all or any of them is then alive.</P>
                <P>PROVIDED HOWEVER, that if all of my spouse&apos;s parents and siblings shall predecease me, or
                    surviving me die before receiving their share of my estate, I DIRECT that their share of my estate
                    or the amount remaining shall be divided equally between my parents and siblings then alive for
                    their own use absolutely.</P>
            </div>
            {list.length > 0 && (
                <>
                    <Heading>Residuary Heirs</Heading>
                    {list.map((r, i) => (
                        <P key={i}>{i + 1}. <strong>{ph(r.fullName)}</strong> ({ph(r.relationship)}){r.description ? ` — ${r.description}` : ""}</P>
                    ))}
                </>
            )}
            <Heading>Individuals Omitted From Bequests</Heading>
            <Clause n={n++}>
                If I have omitted to leave property in this Will to one or more of my heirs as named above, the
                failure to do so is intentional.
            </Clause>
        </div>
    );
}

function FuneralSection({ data, isLive }) {
    if (!data) return null;
    const method = Array.isArray(data.burialMethod) ? data.burialMethod[0] : data.burialMethod;
    const organs = data.organPreferences || {};
    const activeOrgans = Object.entries(organs).filter(([, v]) => v === 'yes').map(([k]) => k);
    return (
        <div className={isLive ? "border-l-[2px] border-gray-300 pl-3" : ""}>
            <Heading>Funeral Wishes</Heading>
            {method && <P>Burial Preference: <strong>{method}</strong></P>}
            {data.hasLocationPreference === 'yes' && data.cityLocation && (
                <P>Burial Location: {data.cityLocation}</P>
            )}
            {data.specialRequests && <P className="italic">{data.specialRequests}</P>}

            {data.payFromEstate === 'yes' && (
                <P>Funeral Cost: To be paid from estate. Payment Priority: <strong>{data.paymentPriority || '—'}</strong></P>
            )}

            {data.hasFuneralInsurance === 'yes' && (
                <>
                    <Heading>Funeral Insurance</Heading>
                    <P>Provider: <strong>{ph(data.insuranceProvider)}</strong></P>
                    <P>Policy No.: {ph(data.policyNumber)}</P>
                    <P>Policyholder: {ph(data.policyholderTitle)} {ph(data.policyholderName)}</P>
                    <P>Coverage: {ph(data.coverageAmount)}</P>
                    {data.policyDocLocation && <P>Document Location: {data.policyDocLocation}</P>}
                </>
            )}

            {data.wantOrganDonation === 'yes' && (
                <>
                    <Heading>Organ Donation</Heading>
                    {data.donationType === 'all'
                        ? <P>I wish to donate <strong>ALL</strong> organs.</P>
                        : activeOrgans.length > 0
                            ? <P>Specific organs: <strong>{activeOrgans.join(', ')}</strong></P>
                            : null
                    }
                    {data.nhsRegistered === 'yes' && data.nhsReference && (
                        <P>NHS Organ Donor Register No.: {data.nhsReference}</P>
                    )}
                </>
            )}

            {!method && !data.cityLocation && !data.specialRequests && (
                <P className="italic text-gray-400">[Funeral wishes will appear here]</P>
            )}
        </div>
    );
}

function WitnessesSection({ data, isLive }) {
    if (!data) return null;
    const t = data.testator || {};
    const testatorFullName = [t.title, t.fullName].filter(Boolean).join(' ') || '[CLIENT FULL NAME]';
    const testatorDate = t.date ? fmtDate(t.date) : todayStr;
    const allWitnesses = [
        data.witness1 || {},
        data.witness2 || {},
        ...(data.extraWitnesses || [])
    ];

    return (
        <div className={isLive ? "border-l-[2px] border-gray-300 pl-3" : ""}>
            <Heading>Attestation</Heading>
            <P>IN WITNESS whereof I have hereunto set my hand to this Will on <strong>{testatorDate}</strong>.</P>
            <P>
                SIGNED by the said <strong>{testatorFullName}</strong> as and for his/her last Will and Testament
                in the presence of us both being present at the same time who at his/her request and in his/her
                presence and in the presence of each other have hereunto subscribed our names as witnesses.
            </P>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10">
                {allWitnesses.map((w, i) => (
                    <div key={i}>
                        <P><span className="font-semibold">Signature of Witness ({i + 1}):</span></P>
                        <div className="border-b border-gray-900 pb-1 mb-2" style={{ width: "80%" }}>
                            <P className="italic text-gray-700 m-0 min-h-[1.5rem]">{ph(w.signature, '')}</P>
                        </div>
                        <P>Full name: <strong>{[w.title, w.fullName].filter(Boolean).join(' ') || '___________________________'}</strong></P>
                        <P>Address: {ph(w.address, '___________________________')}</P>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Step label
const STEP_LABELS = {
    testator: "Testator",
    executor: "Executors",
    spouse: "Spouse / Partner",
    beneficiaries: "Beneficiaries",
    assets: "Assets",
    liabilities: "Liabilities",
    gifts: "Gifts & Donations",
    residual: "Residual Estate",
    funeral: "Funeral Wishes",
    witnesses: "Witnesses",
};

const STEP_ORDER = ["testator", "executor", "spouse", "beneficiaries", "assets", "liabilities", "gifts", "residual", "funeral", "witnesses"];

// Main WillPreview
function WillPreview({ currentStep, liveData, savedSteps = {}, mode = "step" }) {
    const isReview = currentStep === "review" || mode === "review";

    const testatorData = currentStep === "testator" ? liveData : savedSteps["testator"];

    // Compute sequential clause numbers across all active sections
    function computeClauseStarts(steps) {
        let n = 1;
        const starts = {};
        // Spouse: 2 clauses
        if (steps.spouse != null) { starts.spouse = n; n += 2; }
        // Beneficiaries — trustee powers add 2 extra clauses
        if (steps.beneficiaries != null) {
            starts.beneficiaries = n;
            const powers = steps.beneficiaries?.trusteePowers || {};
            const hasActivePowers = steps.beneficiaries?.isTrustee &&
                Object.values(powers).some(Boolean);
            if (hasActivePowers) n += 2;
        }
        // Gifts: each gift + 2 standard clauses + 2 general provisions
        if (steps.gifts != null) {
            starts.gifts = n;
            const giftCount = (steps.gifts?.giftsList || []).length;
            n += giftCount + 2 + 2; // gifts + survivorship + residue + no-contest + severability
        }
        // Residual: 2 clauses
        if (steps.residual != null) { starts.residual = n; n += 2; }
        return starts;
    }

    function renderSection(step, data, isLive = false, clauseStarts = {}) {
        if (data === null) return null; // skipped
        const props = { data, isLive };
        switch (step) {
            case "testator": return <TestatorSection key={step} {...props} />;
            case "executor": return <ExecutorSection key={step} {...props} />;
            case "spouse": return <SpouseSection key={step} data={data} testatorData={testatorData} isLive={isLive} clauseStart={clauseStarts.spouse || 1} />;
            case "beneficiaries": return <BeneficiariesSection key={step} {...props} clauseStart={clauseStarts.beneficiaries || 1} />;
            case "assets": return <AssetsSection key={step} {...props} />;
            case "liabilities": return <LiabilitiesSection key={step} {...props} />;
            case "gifts": return <GiftsSection key={step} {...props} clauseStart={clauseStarts.gifts || 1} />;
            case "residual": return <ResidualSection key={step} {...props} clauseStart={clauseStarts.residual || 1} />;
            case "funeral": return <FuneralSection key={step} {...props} />;
            case "witnesses": return <WitnessesSection key={step} {...props} />;
            default: return null;
        }
    }

    return (
        <div
            className="bg-white w-full"
            style={{ fontFamily: FONT }}
        >
            {isReview ? (
                // Full merged view — all non-skipped steps
                (() => {
                    const clauseStarts = computeClauseStarts(savedSteps);
                    return (
                        <div className="px-1">
                            {STEP_ORDER.map(step => {
                                const d = savedSteps[step];
                                if (d === undefined || d === null) return null;
                                return (
                                    <div key={step}>
                                        {renderSection(step, d, false, clauseStarts)}
                                        <SectionRule />
                                    </div>
                                );
                            })}

                            {(() => {
                                const t = savedSteps["testator"];
                                const name = t ? [t.title, t.fullName].filter(Boolean).join(" ") : "[CLIENT FULL NAME]";
                                return (
                                    <div className="text-center mt-32 mb-16">
                                        <p style={{ fontFamily: FONT }}
                                            className="text-[16px] font-bold uppercase text-gray-900 mb-12 tracking-wide">
                                            THE LAST WILL AND TESTAMENT
                                        </p>
                                        <p style={{ fontFamily: FONT }}
                                            className="text-[16px] font-bold uppercase text-gray-900 mb-12">
                                            OF
                                        </p>
                                        <p style={{ fontFamily: FONT }}
                                            className="text-[16px] font-bold uppercase text-gray-900">
                                            {name.toUpperCase()}
                                        </p>
                                    </div>
                                );
                            })()}
                        </div>
                    );
                })()
            ) : (
                // Step-specific view
                (() => {
                    const stepsForCount = { ...savedSteps, [currentStep]: liveData || {} };
                    const clauseStarts = computeClauseStarts(stepsForCount);
                    return (
                        <div>

                            {STEP_ORDER
                                .filter(s => s !== currentStep && savedSteps[s] !== undefined && savedSteps[s] !== null)
                                .map(s => (
                                    <div key={s} className="opacity-30 mb-1">
                                        <p style={{ fontFamily: FONT, letterSpacing: "0.06em" }}
                                            className="text-[7.5px] font-bold uppercase tracking-widest text-gray-500">
                                            Completed &mdash; {STEP_LABELS[s]}
                                        </p>
                                        <div className="border-t border-gray-100 my-1" />
                                    </div>
                                ))}

                            {currentStep !== "review" && (
                                <div className="rounded-sm p-2 border border-gray-200">
                                    <p style={{ fontFamily: FONT, letterSpacing: "0.06em" }}
                                        className="text-[7.5px] font-bold text-gray-500 uppercase tracking-widest mb-2 pb-1 border-b border-gray-200">
                                        Live Preview &mdash; {STEP_LABELS[currentStep] || currentStep}
                                    </p>
                                    {renderSection(currentStep, liveData || {}, true, clauseStarts)}
                                </div>
                            )}
                        </div>
                    );
                })()
            )}
        </div>
    );
}

export default WillPreview;
