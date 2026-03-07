"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import FAQ from "@/components/common/FAQ";
import faqBg from "@/components/assets/images/FAQ.svg";
import user1 from "@/components/assets/images/User1.svg";
import user2 from "@/components/assets/images/User2.svg";
import user3 from "@/components/assets/images/User3.svg";
import StampPaper from "@/components/assets/images/StampPaper1.svg";
import Image from "next/image";
import ProgressBar from "@/components/common/ProgressBar";
import ExpandIcon from "@/components/assets/images/ExpandIcon.svg";
import Testatot from "./forms/Testatot";
import WillPreview from "./preview/WillPreview";
import { generateWillPDF } from "./utils/generateWillPDF";
import Executors from "./forms/Executors";
import Spouse from "./forms/Spouse";
import Beneficiaries from "./forms/Beneficiaries";
import Assets from "./forms/Assets";
import Refresh from "@/components/assets/images/RefreshIcon.svg";
import UpDownIcon from "@/components/assets/images/UpDownIcon.svg";
import RotateIcon from "@/components/assets/images/RotateIcon.svg";
import FillArrowLeftIcon from "@/components/assets/images/FillArrowLeftIcon.svg";
import Liabilities from "./forms/Liabilities";
import Gifts from "./forms/Gifts";
import Residual from "./forms/Residual";
import Commondropdown from "@/components/common/Commondropdown1.jsx";
import Funeral from "./forms/Funeral";
import Witnesses from "./forms/Witnesses";
import Review from "./forms/Review";
import BorderTick from "@/components/assets/images/BorderTick.svg";

import Editor from "./Editor.jsx";
import ShareModal from "@/components/layout/Modal/ShareMoadal";
import DocumentSent from "@/components/layout/Modal/DocumentSent";
import ShareFeedbackModal from "../../components/layout/Modal/ShareFeedbackModal.jsx";
import FeedbackSentModal from "../../components/layout/Modal/FeedbackSentModal.jsx";
import PaymentModal from "../../components/layout/Modal/PaymentModal.jsx";
import { willStep, getStepData, statusBar, completeWill, savePdfPath } from "../services/willService";
import { getPackages, selectPackage } from "../services/packageService";
import toast from "react-hot-toast";
import Loader from "../../components/common/Loader.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./forms/CheckoutForm.jsx";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function Page() {
  const searchParams = useSearchParams();
  const willId = searchParams.get("willId");
  const [tab, setTab] = useState("overview");
  const [tab1, settab1] = useState("testator");
  const [isEditor, setIsEditor] = useState(false);
  // Will liveData and saved steps
  const [liveData, setLiveData] = useState(null);
  const [savedSteps, setSavedSteps] = useState({});

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [willLocation, setWillLocation] = useState("");
  const [tab2, setTab2] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loadingPackages, setLoadingPackages] = useState(false);
  const [selectingPackage, setSelectingPackage] = useState(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isShareFeedbackModalOpen, setIsShareFeedbackModalOpen] =
    useState(false);
  const [isFeedbackSentModalOpen, setIsFeedbackSentModalOpen] = useState(false);
  const [isDocumentSentOpen, setIsDocumentSentOpen] = useState(false);
  const [isPaid, setIsPaid] = useState(false);


  // Fetch packages from API
  useEffect(() => {
    const fetchPackages = async () => {
      setLoadingPackages(true);
      try {
        const res = await getPackages();
        const pkgs = res?.data?.packages || [];
        setPackages(pkgs);
        // Default select the yearly (annual) package
        const yearlyPkg = pkgs.find(p => p.billing_cycle === "yearly");
        if (yearlyPkg) setTab2(yearlyPkg.id);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      } finally {
        setLoadingPackages(false);
      }
    };
    fetchPackages();
  }, []);

  // Handle package selection
  const handleSelectPackage = async (packageId) => {
    if (!packageId || selectingPackage) return;
    setSelectingPackage(packageId);
    try {
      const res = await selectPackage(packageId);
      toast.success(res?.message || "Package selected successfully");
    } catch (error) {
      console.error("Failed to select package:", error);
      toast.error(error?.response?.data?.message || "Failed to select package");
    } finally {
      setSelectingPackage(null);
    }
  };

  // Steps mapping
  const steps = [
    "testator",
    "executor",
    "spouse",
    "beneficiaries",
    "assets",
    "liabilities",
    "gifts",
    "residual",
    "funeral",
    "witnesses",
    "review",
  ];

  const getCurrentStepIndex = () => steps.indexOf(tab1);

  // Map frontend camelCase form data to backend snake_case API fields per step
  const mapStepData = (stepIndex, data) => {
    if (!data) return {};
    switch (stepIndex) {
      case 0: // testator Step 1
        return {
          title: data.title || null,
          full_name: data.fullName || null,
          known_as: data.otherName || null,
          gender: data.gender ? data.gender.toLowerCase() : null,
          building_number: data.buildingNumber || null,
          building_name: data.buildingName || null,
          street: data.street || null,
          town: data.town || null,
          city: data.city || null,
          county: data.county || null,
          postcode: data.postcode || null,
          country: typeof data.country === 'object' ? data.country?.label : data.country || null,
          national_insurance_number: data.niNumber || null,
          date_of_birth: data.dob ? new Date(data.dob).toISOString().split('T')[0] : null,
          phone_country_code: typeof data.phoneCode === 'object' ? data.phoneCode?.value : data.phoneCode || null,
          phone: data.phone || null,
          email: data.email || null,
          marital_status: data.maritalStatus ? data.maritalStatus.toLowerCase().replace(/ /g, '_') : null,
          include_future_marriage_clause: data.marriageClause === 'yes',
          declaration_confirmed: data.declaration || false,
          jurisdiction_country: willLocation || null,
        };
      case 1: // executor Step 2
        return {
          executors: (data.executorsList || []).map(ex => ({
            executor_type: ex.type || 'individual',
            title: ex.title || null,
            full_name: ex.fullName?.trim() || null,
            relationship_to_testator: ex.relationship ? (ex.relationship.toLowerCase() === 'add' ? 'other' : ex.relationship.toLowerCase().replace(/-/g, '_').replace(/ /g, '_')) : null,
            business_name: ex.firmName?.trim() || null,
            role_title: ex.role ? (ex.role.toLowerCase() === 'add' ? 'other' : ex.role.toLowerCase()) : null,
            phone_country_code: typeof ex.phoneCode === 'object' ? ex.phoneCode?.value : ex.phoneCode || null,
            phone: ex.phone?.trim() || null,
            email: ex.email?.trim() || null,
            is_alternate: ex.isAlternate || false,
            is_backup: ex.isBackup || false,
          }))
        };
      case 2: // spouse Step 3
        return {
          is_spouse: data.hasSpouse ?? false,
          spouse: (data.spouseList || []).map(sp => ({
            title: sp.title || null,
            full_name: sp.fullName?.trim() || null,
            date_of_birth: sp.dob ? new Date(sp.dob).toISOString().split('T')[0] : null,
            relationship_to_testator: sp.relationship ? (sp.relationship.toLowerCase() === 'add' ? 'other' : sp.relationship.toLowerCase().replace(/-/g, '_').replace(/ /g, '_')) : null,
            building_number: sp.buildingNumber?.trim() || null,
            building_name: sp.buildingName?.trim() || null,
            street: sp.street?.trim() || null,
            town: sp.town?.trim() || null,
            city: sp.city?.trim() || null,
            county: sp.county?.trim() || null,
            postcode: sp.postcode?.trim() || null,
            country: typeof sp.country === 'object' ? sp.country?.label : sp.country || null,
            phone_country_code: typeof sp.phoneCode === 'object' ? sp.phoneCode?.value : sp.phoneCode || null,
            phone: sp.phone?.trim() || null,
          }))
        };
      case 3: {  // beneficiaries Step 4
        const mapRel = (r) => r ? (r.toLowerCase() === 'add' ? 'other' : r.toLowerCase().replace(/-/g, '_').replace(/ /g, '_')) : null;
        const mapAddr = (item) => ({
          building_number: item.buildingNumber?.trim() || null,
          building_name: item.buildingName?.trim() || null,
          street: item.
            street?.trim() || null,
          town: item.town?.trim() || null,
          city: item.city?.trim() || null,
          county: item.county?.trim() || null,
          postcode: item.postcode?.trim() || null,
          country: typeof item.country === 'object' ? item.country?.label : item.country || null,
        });
        return {
          have_children: data.hasChildren ?? false,
          children: (data.beneficiariesList || []).map(ch => ({
            title: ch.title || null,
            full_name: ch.fullName?.trim() || '',
            gender: ch.gender ? (ch.gender.toLowerCase() === 'add' ? 'other' : ch.gender.toLowerCase()) : null,
            date_of_birth: ch.dob ? new Date(ch.dob).toISOString().split('T')[0] : null,
            relationship_to_testator: mapRel(ch.relationship),
            ...mapAddr(ch),
            inheritance_age: ch.inheritanceAge ? parseInt(ch.inheritanceAge) : null,
          })),
          guardians: (data.guardiansList || []).map(g => ({
            title: g.title || null,
            full_name: g.fullName?.trim() || '',
            date_of_birth: g.dob ? new Date(g.dob).toISOString().split('T')[0] : null,
            relationship_to_testator: g.relationship?.trim() || '',
            ...mapAddr(g),
            phone_country_code: typeof g.phoneCode === 'object' ? g.phoneCode?.value : g.phoneCode || null,
            phone: g.phone?.trim() || null,
            email: g.email?.trim() || null,
            is_alternate: false,
          })),
          wants_backup: data.hasBackupGuardian ?? false,
          backupGuardians: (data.backupGuardiansList || []).map(bg => ({
            title: bg.title || null,
            full_name: bg.fullName?.trim() || '',
            role_type: 'backup_guardian',
            date_of_birth: bg.dob ? new Date(bg.dob).toISOString().split('T')[0] : null,
            relationship_to_testator: mapRel(bg.relationship),
            ...mapAddr(bg),
          })),
          trustees: (data.isTrustee && data.trusteeDetails) ? [{
            title: data.trusteeDetails.title || null,
            full_name: data.trusteeDetails.fullName?.trim() || '',
            role_type: 'trustee',
            date_of_birth: data.trusteeDetails.dob ? new Date(data.trusteeDetails.dob).toISOString().split('T')[0] : null,
            relationship_to_testator: mapRel(data.trusteeDetails.relationship),
            ...mapAddr(data.trusteeDetails),
            phone_country_code: typeof data.trusteeDetails.phoneCode === 'object' ? data.trusteeDetails.phoneCode?.value : data.trusteeDetails.phoneCode || null,
            phone: data.trusteeDetails.phone?.trim() || null,
            email: data.trusteeDetails.email?.trim() || null,
            include_all_general_powers: data.trusteePowers?.allPowers || false,
            power_of_management: data.trusteePowers?.management || false,
            power_of_investment: data.trusteePowers?.investment || false,
            power_to_delegate: data.trusteePowers?.delegate || false,
            power_in_relation_to_property: data.trusteePowers?.property || false,
            power_to_lend_and_borrow: data.trusteePowers?.lendBorrow || false,
            power_to_apply_income_for_minors: data.trusteePowers?.minors || false,
            power_to_make_advancements: data.trusteePowers?.advancements || false,
            power_to_appropriate_assets: data.trusteePowers?.appropriateAssets || false,
            power_to_act_by_majority: data.trusteePowers?.majority || false,
            power_to_charge: data.trusteePowers?.charge || false,
            power_to_invest_in_non_interest_accounts: data.trusteePowers?.nonInterestAccounts || false,
            additional_powers: data.trusteePowers?.additionalPowers?.trim() || null,
          }] : [],
          beneficiaries: (data.beneficiaryDetailsList || []).map(b => ({
            title: b.title || null,
            full_name: b.fullName?.trim() || '',
            relationship_to_testator: mapRel(b.relationship),
            ...mapAddr(b),
            phone_country_code: typeof b.phoneCode === 'object' ? b.phoneCode?.value : b.phoneCode || null,
            phone: b.telephone?.trim() || b.phone?.trim() || null,
            email: b.email?.trim() || null,
            is_alternate: false,
          })),
          has_charity: data.hasCharitableGifts ?? false,
          charities: (data.charityList || []).map(c => ({
            name: c.charityName?.trim() || '',
            registration_number: c.registeredNumber?.trim() || null,
            address: c.address?.trim() || null,
            gift_amount: c.gift ? parseFloat(c.gift) : null,
            gift_description: c.purpose?.trim() || null,
          })),
        };
      }
      case 4: // assets Step 5
        return {
          has_property: data.hasProperty ?? false,
          properties: (data.assetsList || []).map(p => ({
            building_number: p.buildingNumber?.trim() || null,
            building_name: p.buildingName?.trim() || null,
            street: p.street?.trim() || null,
            town: p.town?.trim() || null,
            city: p.city?.trim() || null,
            county: p.county?.trim() || null,
            postcode: p.postcode?.trim() || null,
            country: typeof p.country === 'object' ? p.country?.label : p.country || null,
            ownership_type: p.ownershipType ? p.ownershipType.toLowerCase().replace(/ /g, '_') : null,
            estimated_value: p.estimatedValue ? parseFloat(p.estimatedValue) : null,
            account_location: p.accountLocation?.trim() || null,
            is_mortgage: p.hasMortgage === 'yes',
            lender_name: p.hasMortgage === 'yes' ? (p.mortgageLender?.trim() || null) : null,
            note: p.note?.trim() || null,
          })),
          has_bank_account: data.hasBankAccount ?? false,
          bank_accounts: (data.bankAccounts || []).map(b => ({
            bank_name: b.bankName?.trim() || null,
            account_type: b.accountType ? b.accountType.toLowerCase() : null,
            account_number: b.accountNumber?.trim() || null,
            account_location: b.accountLocation?.trim() || null,
            additional_information: b.additionalInfo?.trim() || null,
          })),
          has_investment: data.hasInvestment ?? false,
          investments: (data.investments || []).map(i => ({
            company_or_fund_name: i.companyName?.trim() || null,
            investment_type: i.investmentType ? (i.investmentType.toLowerCase() === 'add' ? 'other' : i.investmentType.toLowerCase().replace(/ /g, '_')) : null,
            account_or_policy_number: i.accountPolicyNumber?.trim() || null,
            managed_by: i.managedBy?.trim() || null,
            additional_information: i.additionalInfo?.trim() || null,
          })),
          has_valuable_item: data.hasValuableItem ?? false,
          valuable_items: (data.valuableItems || []).map(v => ({
            category: v.category ? (v.category.toLowerCase() === 'add' ? 'other' : v.category.toLowerCase()) : null,
            description: v.itemDescription?.trim() || null,
            location: v.location?.trim() || null,
            additional_information: v.additionalInfo?.trim() || null,
          })),
          has_digital_asset: data.hasDigitalAsset ?? false,
          digital_assets: (data.digitalAssets || []).map(d => ({
            asset_type: d.assetType ? (d.assetType.toLowerCase() === 'add' ? 'other' : d.assetType.toLowerCase().replace(/ /g, '_')) : null,
            platform: d.platformName?.trim() || null,
            account_id: d.accountId?.trim() || null,
            additional_information: d.additionalInfo?.trim() || null,
          })),
          has_intellectual_asset: data.hasIntellectualAsset ?? false,
          intellectual_assets: (data.intellectualAssets || []).map(ia => ({
            asset_type: ia.assetType ? (ia.assetType.toLowerCase() === 'add' ? 'other' : ia.assetType.toLowerCase().replace(/ /g, '_')) : null,
            title: ia.title?.trim() || null,
            desciption: ia.description?.trim() || null,
            status: ia.status ? ia.status.toLowerCase().replace(/ /g, '_') : null,
          })),
        };
      case 5: // liabilities Step 6
        return {
          is_debtor: data.hasDebt === 'yes',
          debts: (data.liabilitiesList || []).map(d => ({
            creditor_name: d.creditorName?.trim() || null,
            type_of_debt: d.debtType ? (d.debtType.toLowerCase() === 'add' ? 'other' : d.debtType.toLowerCase().replace(/ /g, '_')) : null,
            outstanding_balance: d.amount ? parseFloat(String(d.amount).replace(/[^0-9.]/g, '')) : null,
            additional_information: d.additionalInfo?.trim() || null,
          })),
        };
      case 6: { // gifts Step 7
        const mapGiftVal = (v) => v ? (v.toLowerCase() === 'add' || v.toLowerCase() === 'add new' ? 'other' : v) : null;

        const individualGifts = data.giftsList || [];
        const charityDonations = data.charityDonations || [];
        const maxLength = Math.max(individualGifts.length, charityDonations.length);

        const mergedGifts = [];

        for (let i = 0; i < maxLength; i++) {
          const g = individualGifts[i];
          const c = charityDonations[i];

          mergedGifts.push({
            beneficiary_name: g?.beneficiary?.trim() || null,
            asset_type_beneficiary: mapGiftVal(g?.assetType),
            gift_type_beneficiary: mapGiftVal(g?.giftType),
            gift_description_beneficiary: g?.description?.trim() || null,
            additional_information_beneficiary: g?.additionalInfo?.trim() || null,

            is_charity: !!c,
            organization_name: c?.charityName?.trim() || null,
            asset_type_charity: mapGiftVal(c?.assetType),
            gift_type_charity: mapGiftVal(c?.giftType),
            gift_description_charity: c?.description?.trim() || null,
            additional_information_charity: c?.additionalInfo?.trim() || null,
          });
        }

        return { gifts: mergedGifts };
      }
      case 7: // residual Step 8
        return {
          residual_estates: (data.residueList || []).map(r => ({
            full_name: r.fullName?.trim() || null,
            relationship_to_testator: r.relationship ? (r.relationship.toLowerCase() === 'add' || r.relationship.toLowerCase() === 'add custom' ? 'other' : r.relationship.toLowerCase().replace(/-/g, '_').replace(/ /g, '_')) : null,
            description: r.description?.trim() || null,
            additional_information: r.additionalInfo?.trim() || null,
          })),
        };
      case 8: { // funeral Step 9
        const d = data;
        return {
          funeral: {
            body_disposition: (d.burialMethod || []).length > 0 ? d.burialMethod[0] === 'no-preference' ? 'no_preference' : d.burialMethod[0] : null,
            burial_location: d.hasLocationPreference === 'yes',
            location: d.hasLocationPreference === 'yes' ? (d.cityLocation?.trim() || null) : null,
            specific_request: d.specialRequests?.trim() || null,
            funeral_expense: d.payFromEstate === 'yes',
            payment_priority: d.payFromEstate === 'yes' ? (d.paymentPriority?.trim() || null) : null,
            provider_name: d.hasFuneralInsurance === 'yes' ? (d.insuranceProvider?.trim() || null) : null,
            policy_number: d.hasFuneralInsurance === 'yes' ? (d.policyNumber?.trim() || null) : null,
            title: d.hasFuneralInsurance === 'yes' ? (d.policyholderTitle || null) : null,
            holder_name: d.hasFuneralInsurance === 'yes' ? (d.policyholderName?.trim() || null) : null,
            coverage_amount: d.hasFuneralInsurance === 'yes' && d.coverageAmount ? parseFloat(String(d.coverageAmount).replace(/[^0-9.]/g, '')) : null,
            phone_country_code: d.hasFuneralInsurance === 'yes' ? (typeof d.phoneCode === 'object' ? d.phoneCode?.value : d.phoneCode || null) : null,
            phone: d.hasFuneralInsurance === 'yes' ? (d.telephone?.trim() || null) : null,
            email: d.hasFuneralInsurance === 'yes' && d.email?.trim() ? d.email.trim() : null,
            website_url: d.hasFuneralInsurance === 'yes' && d.websiteUrl?.trim() ? d.websiteUrl.trim() : null,
            document_location: d.hasFuneralInsurance === 'yes' ? (d.policyDocLocation?.trim() || null) : null,
            donate_organ: d.wantOrganDonation === 'yes',
            organ_donation_type: d.wantOrganDonation === 'yes' ? d.donationType : null,
            heart: d.wantOrganDonation === 'yes' ? d.organPreferences?.heart === 'yes' : false,
            lungs: d.wantOrganDonation === 'yes' ? d.organPreferences?.lungs === 'yes' : false,
            kidneys: d.wantOrganDonation === 'yes' ? d.organPreferences?.kidneys === 'yes' : false,
            liver: d.wantOrganDonation === 'yes' ? d.organPreferences?.liver === 'yes' : false,
            corneas: d.wantOrganDonation === 'yes' ? d.organPreferences?.corneas === 'yes' : false,
            pancreas: d.wantOrganDonation === 'yes' ? d.organPreferences?.pancreas === 'yes' : false,
            tissue: d.wantOrganDonation === 'yes' ? d.organPreferences?.tissue === 'yes' : false,
            small_bowel: d.wantOrganDonation === 'yes' ? d.organPreferences?.smallBowel === 'yes' : false,
            is_registered_donor: d.nhsRegistered === 'yes',
            reference_number: d.nhsRegistered === 'yes' ? (d.nhsReference?.trim() || null) : null,
            additional_notes: d.additionalNotes?.trim() || null,
          },
        };
      }
      case 9: { // witnesses Step 10
        const d = data;
        const mapWitness = (w) => ({
          title: w.title || null,
          full_name: w.fullName?.trim() || w.name?.trim() || '',
          building_number: w.buildingNumber?.trim() || null,
          building_name: w.buildingName?.trim() || null,
          street: w.street?.trim() || null,
          town: w.town?.trim() || null,
          city: w.city?.trim() || null,
          county: w.county?.trim() || null,
          postcode: w.postcode?.trim() || null,
          country: typeof w.country === 'object' ? w.country?.label : w.country || null,
          occupation: w.occupation?.trim() || null,
          witness_signature: w.signature?.trim() || null,
        });
        const allWitnesses = [];
        if (d.witness1?.fullName) allWitnesses.push(mapWitness(d.witness1));
        if (d.witness2?.fullName) allWitnesses.push(mapWitness(d.witness2));
        (d.extraWitnesses || []).forEach(ew => allWitnesses.push(mapWitness(ew)));
        return {
          title: d.testator?.title || null,
          full_name: d.testator?.fullName?.trim() || '',
          date: d.testator?.date ? new Date(d.testator.date).toISOString().split('T')[0] : null,
          have_witness: d.hasWitnesses === 'yes',
          witnesses: allWitnesses,
        };
      }
      default:
        return data;
    }
  };

  // Reverse map
  const reverseMapStepData = (stepIndex, data) => {
    if (!data) return null;
    switch (stepIndex) {
      case 0: // testator Step 1
        return {
          title: data.title || "",
          fullName: data.full_name || "",
          otherName: data.known_as || "",
          gender: data.gender ? data.gender.charAt(0).toUpperCase() + data.gender.slice(1) : "",
          buildingNumber: data.building_number || "",
          buildingName: data.building_name || "",
          street: data.street || "",
          town: data.town || "",
          city: data.city || "",
          county: data.county || "",
          postcode: data.postcode || "",
          country: data.country ? { label: data.country, value: data.country } : { label: "United Kingdom", value: "UK" },
          niNumber: data.national_insurance_number || "",
          dob: data.date_of_birth ? new Date(data.date_of_birth) : null,
          phoneCode: data.phone_country_code ? { label: data.phone_country_code, value: data.phone_country_code } : { label: "+44", value: "+44" },
          phone: data.phone || "",
          email: data.email || "",
          maritalStatus: data.marital_status ? data.marital_status.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "",
          marriageClause: data.include_future_marriage_clause ? 'yes' : 'no',
          declaration: data.declaration_confirmed || false,
        };
      case 1: // executor Step 2
        return {
          executorType: data.executors?.[0]?.executor_type || 'individual',
          executorsList: (data.executors || []).map(ex => ({
            type: ex.executor_type || 'individual',
            title: ex.title || "",
            fullName: ex.full_name || "",
            relationship: ex.relationship_to_testator
              ? ex.relationship_to_testator.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ').replace('Long Term', 'Long-term')
              : "",
            firmName: ex.business_name || "",
            role: ex.role_title ? ex.role_title.charAt(0).toUpperCase() + ex.role_title.slice(1) : "",
            phoneCode: ex.phone_country_code ? { label: ex.phone_country_code, value: ex.phone_country_code } : { label: "+44", value: "+44" },
            phone: ex.phone || "",
            email: ex.email || "",
            isAlternate: ex.is_alternate || false,
            isBackup: ex.is_backup || false,
          }))
        };
      case 2: // spouse Step 3
        return {
          hasSpouse: data.is_spouse ?? true,
          spouseList: (data.spouse || []).map(sp => ({
            id: sp.id || Date.now(),
            title: sp.title || "",
            fullName: sp.full_name || "",
            dob: sp.date_of_birth ? new Date(sp.date_of_birth) : null,
            relationship: sp.relationship_to_testator
              ? sp.relationship_to_testator.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ').replace('Long Term', 'Long-term')
              : "",
            buildingNumber: sp.building_number || "",
            buildingName: sp.building_name || "",
            street: sp.street || "",
            town: sp.town || "",
            city: sp.city || "",
            county: sp.county || "",
            postcode: sp.postcode || "",
            country: sp.country ? { label: sp.country, value: sp.country } : { label: "United Kingdom", value: "UK" },
            phoneCode: sp.phone_country_code ? { label: sp.phone_country_code, value: sp.phone_country_code } : { label: "+44", value: "+44" },
            phone: sp.phone || "",
          }))
        };
      case 3: { // beneficiaries Step 4
        const revRel = (r) => r ? r.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ').replace('Long Term', 'Long-term') : "";
        const revAddr = (item) => ({
          buildingNumber: item.building_number || "",
          buildingName: item.building_name || "",
          street: item.street || "",
          town: item.town || "",
          city: item.city || "",
          county: item.county || "",
          postcode: item.postcode || "",
          country: item.country ? { label: item.country, value: item.country } : { label: "United Kingdom", value: "UK" },
        });
        const trusteePower = (data.trustees || []).find(t => t.role_type === 'trustee');
        return {
          hasChildren: data.have_children ?? false,
          beneficiariesList: (data.children || []).map(ch => ({
            id: ch.id,
            title: ch.title || "",
            fullName: ch.full_name || "",
            gender: ch.gender ? ch.gender.charAt(0).toUpperCase() + ch.gender.slice(1) : "",
            dob: ch.date_of_birth ? new Date(ch.date_of_birth) : null,
            relationship: revRel(ch.relationship_to_testator),
            ...revAddr(ch),
            inheritanceAge: ch.inheritance_age ? `${ch.inheritance_age} years` : "",
          })),
          guardiansList: (data.guardians || []).map(g => ({
            id: g.id,
            title: g.title || "",
            fullName: g.full_name || "",
            dob: g.date_of_birth ? new Date(g.date_of_birth) : null,
            relationship: g.relationship_to_testator || "",
            ...revAddr(g),
            phoneCode: g.phone_country_code ? { label: g.phone_country_code, value: g.phone_country_code } : { label: "+44", value: "+44" },
            phone: g.phone || "",
            email: g.email || "",
          })),
          hasBackupGuardian: data.wants_backup ?? false,
          backupGuardiansList: (data.backupGuardians || []).map(bg => ({
            id: bg.id,
            role_type: bg.role_type || "",
            title: bg.title || "",
            fullName: bg.full_name || "",
            dob: bg.date_of_birth ? new Date(bg.date_of_birth) : null,
            relationship: revRel(bg.relationship_to_testator),
            ...revAddr(bg),
            phoneCode: bg.phone_country_code ? { label: bg.phone_country_code, value: bg.phone_country_code } : { label: "+44", value: "+44" },
            phone: bg.phone || "",
            email: bg.email || "",
          })),
          isTrustee: !!trusteePower,
          trusteeDetails: trusteePower ? {
            id: trusteePower.id || null,
            title: trusteePower.title || "",
            fullName: trusteePower.full_name || "",
            dob: trusteePower.date_of_birth ? new Date(trusteePower.date_of_birth) : null,
            relationship: revRel(trusteePower.relationship_to_testator),
            ...revAddr(trusteePower),
            phoneCode: trusteePower.phone_country_code ? { label: trusteePower.phone_country_code, value: trusteePower.phone_country_code } : { label: "+44", value: "+44" },
            phone: trusteePower.phone || "",
            email: trusteePower.email || "",
          } : {},
          isAlternateGuardian: (data.backupGuardians || []).length > 0,
          trusteePowers: trusteePower ? {
            allPowers: trusteePower.include_all_general_powers || false,
            management: trusteePower.power_of_management || false,
            investment: trusteePower.power_of_investment || false,
            delegate: trusteePower.power_to_delegate || false,
            property: trusteePower.power_in_relation_to_property || false,
            lendBorrow: trusteePower.power_to_lend_and_borrow || false,
            minors: trusteePower.power_to_apply_income_for_minors || false,
            advancements: trusteePower.power_to_make_advancements || false,
            appropriateAssets: trusteePower.power_to_appropriate_assets || false,
            majority: trusteePower.power_to_act_by_majority || false,
            charge: trusteePower.power_to_charge || false,
            nonInterestAccounts: trusteePower.power_to_invest_in_non_interest_accounts || false,
            additionalPowers: trusteePower.additional_powers || '',
          } : {},
          beneficiaryDetailsList: (data.beneficiaries || []).map(b => ({
            id: b.id,
            title: b.title || "",
            fullName: b.full_name || "",
            relationship: revRel(b.relationship_to_testator),
            ...revAddr(b),
            phoneCode: b.phone_country_code ? { label: b.phone_country_code, value: b.phone_country_code } : { label: "+44", value: "+44" },
            telephone: b.phone || "",
            email: b.email || "",
          })),
          hasCharitableGifts: data.has_charity ?? false,
          charityList: (data.charities || []).map(c => ({
            id: c.id,
            charityName: c.name || "",
            registeredNumber: c.registration_number || "",
            address: c.address || "",
            gift: c.gift_amount != null ? String(c.gift_amount) : "",
            purpose: c.gift_description || "",
          })),
        };
      }
      case 4: { // assets Step 5
        const capFirst = (s) => s ? s.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "";
        return {
          hasProperty: data.has_property ?? true,
          assetsList: (data.properties || []).map(p => ({
            id: p.id,
            buildingNumber: p.building_number || "",
            buildingName: p.building_name || "",
            street: p.street || "",
            town: p.town || "",
            city: p.city || "",
            county: p.county || "",
            postcode: p.postcode || "",
            country: p.country ? { label: p.country, value: p.country } : { label: "United Kingdom", value: "UK" },
            ownershipType: capFirst(p.ownership_type),
            estimatedValue: p.estimated_value != null ? String(p.estimated_value) : "",
            accountLocation: p.account_location || "",
            hasMortgage: p.is_mortgage ? 'yes' : 'no',
            mortgageLender: p.lender_name || "",
            note: p.note || "",
          })),
          hasBankAccount: data.has_bank_account ?? true,
          bankAccounts: (data.bank_accounts || []).map(b => ({
            id: b.id,
            bankName: b.bank_name || "",
            accountType: capFirst(b.account_type),
            accountNumber: b.account_number || "",
            accountLocation: b.account_location || "",
            additionalInfo: b.additional_information || "",
          })),
          hasInvestment: data.has_investment ?? true,
          investments: (data.investments || []).map(i => ({
            id: i.id,
            companyName: i.company_or_fund_name || "",
            investmentType: capFirst(i.investment_type),
            accountPolicyNumber: i.account_or_policy_number || "",
            managedBy: i.managed_by || "",
            additionalInfo: i.additional_information || "",
          })),
          hasValuableItem: data.has_valuable_item ?? true,
          valuableItems: (data.valuable_items || []).map(v => ({
            id: v.id,
            category: capFirst(v.category),
            itemDescription: v.description || "",
            location: v.location || "",
            additionalInfo: v.additional_information || "",
          })),
          hasDigitalAsset: data.has_digital_asset ?? true,
          digitalAssets: (data.digital_assets || []).map(d => ({
            id: d.id,
            assetType: capFirst(d.asset_type),
            platformName: d.platform || "",
            accountId: d.account_id || "",
            additionalInfo: d.additional_information || "",
          })),
          hasIntellectualAsset: data.has_intellectual_asset ?? true,
          intellectualAssets: (data.intellectual_assets || []).map(ia => ({
            id: ia.id,
            assetType: capFirst(ia.asset_type),
            title: ia.title || "",
            description: ia.desciption || "",
            status: capFirst(ia.status),
          })),
        };
      }
      case 5: // liabilities Step 6
        return {
          hasDebt: data.is_debtor ? 'yes' : 'no',
          liabilitiesList: (data.debts || []).map(d => ({
            id: d.id,
            creditorName: d.creditor_name || "",
            debtType: d.type_of_debt ? d.type_of_debt.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "",
            amount: d.amount != null ? String(d.amount) : "",
            additionalInfo: d.additional_information || "",
          })),
        };
      case 6: { // gifts Step 7
        const gifts = data.gifts || [];

        const indGifts = gifts
          .filter(g => g.beneficiary_name || g.asset_type_beneficiary || g.gift_type_beneficiary)
          .map(g => ({
            id: g.id,
            beneficiary: g.beneficiary_name || "",
            assetType: g.asset_type_beneficiary || "",
            giftType: g.gift_type_beneficiary || "",
            description: g.gift_description_beneficiary || "",
            additionalInfo: g.additional_information_beneficiary || "",
          }));

        const charGifts = gifts
          .filter(g => g.is_charity)
          .map(g => ({
            id: g.id,
            charityName: g.organization_name || "",
            assetType: g.asset_type_charity || "",
            giftType: g.gift_type_charity || "",
            description: g.gift_description_charity || "",
            additionalInfo: g.additional_information_charity || "",
          }));

        return {
          hasCharity: charGifts.length > 0 ? 'yes' : 'no',
          giftsList: indGifts,
          charityDonations: charGifts,
        };
      }
      case 7: // residual Step 8
        return {
          residueList: (data.residual_estates || []).map(r => ({
            id: r.id,
            fullName: r.full_name || "",
            relationship: r.relationship_to_testator ? r.relationship_to_testator.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "",
            description: r.description || "",
            additionalInfo: r.additional_information || "",
          })),
        };
      case 8: { // funeral Step 9
        const f = data.funeral || {};
        return {
          burialMethod: f.body_disposition ? [f.body_disposition === 'no_preference' ? 'no-preference' : f.body_disposition] : ['burial'],
          hasLocationPreference: f.burial_location ? 'yes' : 'no-preference',
          cityLocation: f.location || '',
          specialRequests: f.specific_request || '',
          payFromEstate: f.funeral_expense ? 'yes' : 'no',
          paymentPriority: f.payment_priority || '',
          hasFuneralInsurance: f.provider_name ? 'yes' : 'no',
          insuranceProvider: f.provider_name || '',
          policyNumber: f.policy_number || '',
          policyholderTitle: f.title || 'Mr',
          policyholderName: f.holder_name || '',
          coverageAmount: f.coverage_amount != null ? String(f.coverage_amount) : '',
          phoneCode: f.phone_country_code ? { label: f.phone_country_code, value: f.phone_country_code } : { label: '+44', value: '+44' },
          telephone: f.phone || '',
          email: f.email || '',
          websiteUrl: f.website_url || '',
          policyDocLocation: f.document_location || '',
          wantOrganDonation: f.donate_organ ? 'yes' : 'no',
          donationType: f.organ_donation_type || 'specific',
          organPreferences: {
            heart: f.heart ? 'yes' : 'no',
            lungs: f.lungs ? 'yes' : 'no',
            kidneys: f.kidneys ? 'yes' : 'no',
            liver: f.liver ? 'yes' : 'no',
            corneas: f.corneas ? 'yes' : 'no',
            pancreas: f.pancreas ? 'yes' : 'no',
            tissue: f.tissue ? 'yes' : 'no',
            smallBowel: f.small_bowel ? 'yes' : 'no',
          },
          nhsRegistered: f.is_registered_donor ? 'yes' : 'no',
          nhsReference: f.reference_number || '',
          additionalNotes: f.additional_notes || '',
        };
      }
      case 9: { // witnesses Step 10
        const witnesses = data.witnesses || [];
        const w1 = witnesses[0] || {};
        const w2 = witnesses[1] || {};
        const extras = witnesses.slice(2).map(ew => ({
          id: ew.id,
          title: ew.title || 'Mr',
          name: ew.full_name || '',
          buildingNumber: ew.building_number || '',
          buildingName: ew.building_name || '',
          street: ew.street || '',
          town: ew.town || '',
          city: ew.city || '',
          county: ew.county || '',
          postcode: ew.postcode || '',
          country: ew.country ? { label: ew.country, value: ew.country } : { label: 'United Kingdom', value: 'United Kingdom' },
          occupation: ew.occupation || '',
          signature: ew.witness_signature || '',
        }));
        const mapW = (w) => ({
          title: w.title || 'Mr',
          fullName: w.full_name || '',
          buildingNumber: w.building_number || '',
          buildingName: w.building_name || '',
          street: w.street || '',
          town: w.town || '',
          city: w.city || '',
          county: w.county || '',
          postcode: w.postcode || '',
          country: w.country ? { label: w.country, value: w.country } : { label: 'United Kingdom', value: 'United Kingdom' },
          occupation: w.occupation || '',
          signature: w.witness_signature || '',
        });
        return {
          testator: {
            title: data.title || 'Mr',
            fullName: data.full_name || '',
            date: data.date ? new Date(data.date) : null,
          },
          hasWitnesses: data.have_witness ? 'yes' : 'no',
          witness1: mapW(w1),
          witness2: mapW(w2),
          extraWitnesses: extras,
        };
      }
      default:
        return data;
    }
  };

  const handleSave = async () => {
    const currentIndex = getCurrentStepIndex();
    const currentStep = steps[currentIndex];
    const stepData = liveData || savedSteps[currentStep] || {};

    // Save step data
    if (willId) {
      try {
        const mappedData = mapStepData(currentIndex, stepData);
        const res = await willStep({
          willId,
          stepNumber: currentIndex + 1,
          data: {
            data: mappedData,
            action: "save_and_continue"
          }
        });
        console.log("Step saved:", res);
      } catch (error) {
        console.error("Step save error:", error);
        toast.error(error?.response?.data?.error?.message || "Failed to save step");
        return;
      }
    }

    // Live data for this step locally
    setSavedSteps(prev => ({ ...prev, [currentStep]: stepData }));
    setLiveData(null);
    if (currentIndex < steps.length - 1) {
      setCompletedSteps((prev) => [...new Set([...prev, currentIndex])]);
      settab1(steps[currentIndex + 1]);
    }
  };

  const handleSkip = async () => {
    const currentIndex = getCurrentStepIndex();
    const currentStep = steps[currentIndex];

    // Skip action
    if (willId) {
      try {
        const res = await willStep({
          willId,
          stepNumber: currentIndex + 1,
          data: {
            data: {},
            action: "skip_and_continue"
          }
        });
        console.log("Step skipped:", res);
      } catch (error) {
        console.error("Step skip error:", error);
        toast.error(error?.response?.data?.error?.message || "Failed to skip step");
        return;
      }
    }

    // Mark as skipped (null = excluded from PDF)
    setSavedSteps(prev => ({ ...prev, [currentStep]: null }));
    setLiveData(null);
    if (currentIndex < steps.length - 1) {
      settab1(steps[currentIndex + 1]);
    }
  };

  const handleBack = async () => {
    const currentIndex = getCurrentStepIndex();
    const currentStep = steps[currentIndex];
    const stepData = liveData || savedSteps[currentStep] || {};

    // Save current step data before going back
    if (willId && liveData) {
      try {
        const mappedData = mapStepData(currentIndex, stepData);
        await willStep({
          willId,
          stepNumber: currentIndex + 1,
          data: {
            data: mappedData,
            action: "save_and_back"
          }
        });
      } catch (error) {
        console.error("Step back error:", error);
      }
    }

    // Save current live data locally
    if (liveData) {
      setSavedSteps(prev => ({ ...prev, [currentStep]: liveData }));
    }
    setLiveData(null);

    // fetch previous step saved data
    if (currentIndex > 0) {
      const prevStepIndex = currentIndex - 1;
      const prevStep = steps[prevStepIndex];

      if (willId) {
        try {
          const res = await getStepData(willId, prevStepIndex + 1);
          const backendData = res?.data?.data;
          if (backendData && Object.keys(backendData).length > 0) {
            const formData = reverseMapStepData(prevStepIndex, backendData);
            setSavedSteps(prev => ({ ...prev, [prevStep]: formData }));
          }
        } catch (error) {
          console.error("Fetch prev step error:", error);
        }
      }

      settab1(prevStep);
    }
  };

  const handleDataChange = useCallback((data) => {
    setLiveData(data);
  }, []);

  const handlePaymentConfirm = async () => {
    setIsPaymentModalOpen(false);
    try {
      await generateWillPDF(savedSteps, willLocation);
    } catch (err) {
      console.error('PDF generation failed:', err);
    }
  };

  const handleStepClick = async (stepIndex) => {
    const stepName = steps[stepIndex];
    settab1(stepName);
    if (willId && !savedSteps[stepName]) {
      try {
        const res = await getStepData(willId, stepIndex + 1);
        if (res?.data?.data) {
          const mapped = reverseMapStepData(stepIndex, res.data.data);
          if (mapped) {
            setSavedSteps(prev => ({ ...prev, [stepName]: mapped }));
          }
        }
      } catch (error) {
        console.log('Step data not found, starting fresh:', error?.response?.status);
      }
    }
  };
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const previewRef = useRef(null);
  const previewScrollRef = useRef(null);

  const PAGE_HEIGHT = 842;

  // Calculate total pages from content height
  useEffect(() => {
    const calculatePages = () => {
      if (previewRef.current) {
        const contentHeight = previewRef.current.scrollHeight;
        const pages = Math.max(1, Math.ceil(contentHeight / PAGE_HEIGHT));
        setTotalPages(pages);
        setPage((prev) => Math.min(prev, pages));
      }
    };
    calculatePages();
    // Recalculate
    const timer = setTimeout(calculatePages, 300);
    return () => clearTimeout(timer);
  }, [tab1, savedSteps, liveData, zoom]);

  // Reset page
  useEffect(() => {
    setPage(1);
    if (previewScrollRef.current) {
      previewScrollRef.current.scrollTop = 0;
    }
  }, [tab1]);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleNextPage = () => {
    setPage((prev) => {
      const next = Math.min(prev + 1, totalPages);
      if (previewScrollRef.current) {
        previewScrollRef.current.scrollTo({
          top: (next - 1) * PAGE_HEIGHT * (zoom / 100),
          behavior: 'smooth'
        });
      }
      return next;
    });
  };

  const handlePrevPage = () => {
    setPage((prev) => {
      const next = Math.max(prev - 1, 1);
      if (previewScrollRef.current) {
        previewScrollRef.current.scrollTo({
          top: (next - 1) * PAGE_HEIGHT * (zoom / 100),
          behavior: 'smooth'
        });
      }
      return next;
    });
  };

  // Track scroll position
  const handlePreviewScroll = useCallback(() => {
    if (previewScrollRef.current) {
      const scrollTop = previewScrollRef.current.scrollTop;
      const currentPage = Math.floor(scrollTop / (PAGE_HEIGHT * (zoom / 100))) + 1;
      setPage(Math.min(Math.max(1, currentPage), totalPages));
    }
  }, [zoom, totalPages]);

  const getButtonText = (pkg) => {
    if (pkg.billing_cycle === "one_time") return "Create Now";

    if (pkg.billing_cycle === "monthly") return "Start Free Trial";

    if (pkg.billing_cycle === "yearly") return "Go Annual & Save";

    return `Select ${pkg.name}`;
  };

  const getDescription = (pkg) => {
    if (pkg.billing_cycle === 'one_time') return 'Ideal if you only need one document';
    if (pkg.billing_cycle === 'monthly') return 'Perfect if you need several documents or ongoing access';
    if (pkg.billing_cycle === 'yearly') return 'Best Value for individuals and small businesses';

    return;
  }
  const getPrice = (pkg) => {
    if (pkg.billing_cycle === 'one_time') return pkg.price_one_time;
    if (pkg.billing_cycle === 'monthly') return pkg.price_monthly;
    if (pkg.billing_cycle === 'yearly') return pkg.price_yearly;

    return;
  };
  const questions = [
    {
      id: 1,
      question: "Can I make my own Will online?",
      answer:
        "Yes, Using this form, you can create a legally valid Will by answering a few simple questions. Once generated, review and sign it according to the instructions provided.",
    },
    {
      id: 2,
      question: "Do I need a solicitor to make a Will?",
      answer:
        "Not necessarily. This document is designed for self-completion, though you may wish to seek legal advice if your estate is complex or involves international assets.",
    },
    {
      id: 3,
      question: "How often should I update my Will?",
      answer:
        "You should review your Will after major life events such as marriage, divorce, buying property, or the birth of a child.",
    },
    {
      id: 4,
      question: "What makes a Will legally valid?",
      answer:
        "Your Will must be signed and dated in the presence of two independent witnesses who also sign it in your presence.",
    },
    {
      id: 5,
      question: "Can I include digital assets in my Will?",
      answer:
        "Yes. You can list online accounts, cryptocurrency, or digital files as part of your estate.",
    },
  ];

  return (
    <>
      {isEditor ? (
        <Editor
          onEditor={() => {
            setIsEditor(false);
          }}
          onShare={() => setIsShareModalOpen(true)}
        />
      ) : (
        <div className="">
          <div className="max-w-[1200px] mx-auto">
            <UserHeader />
          </div>
          <div className="">
            <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-20 md:pt-30 pb-5 md:pb-10 bg-cover bg-center">
              <div className="max-w-[1200px] mx-auto">
                <h1 className="text-text-1 text-center text-2xl md:text-[45px] lg:text-[60px] font-semibold">
                  Create Your Will
                </h1>
                <p className="text-text-5 text-sm md:text-base lg:text-xl mt-6">
                  Make a legally valid Will in minutes. Protect your loved ones
                  and ensure your wishes are carried out with ease and
                  confidence.
                </p>
                <div className="flex items-center justify-between gap-4 mt-6 flex-wrap w-full">
                  <ProgressBar
                    currentStep={getCurrentStepIndex()}
                    completedSteps={completedSteps}
                    onStepClick={handleStepClick}
                  />
                </div>
              </div>
            </div>

            <div
              className={`${tab1 === "review" ? "grid-cols-1!" : ""} max-[1200px]:px-4 grid md:grid-cols-2 grid-cols-1 gap-9 max-w-[1200px] mx-auto items-start mb-6 p-4'`}
            >
              {tab1 === "testator" && (
                <Testatot
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                  onDataChange={handleDataChange}
                  initialData={savedSteps["testator"]}
                />
              )}
              {tab1 === "executor" && (
                <Executors
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                  onDataChange={handleDataChange}
                  initialData={savedSteps["executor"]}
                />
              )}
              {tab1 === "spouse" && (
                <Spouse
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                  onDataChange={handleDataChange}
                  initialData={savedSteps["spouse"]}
                />
              )}
              {tab1 === "beneficiaries" && (
                <Beneficiaries
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                  onDataChange={handleDataChange}
                  initialData={savedSteps["beneficiaries"]}
                />
              )}
              {tab1 === "assets" && (
                <Assets
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                  onDataChange={handleDataChange}
                  initialData={savedSteps["assets"]}
                />
              )}
              {tab1 === "liabilities" && (
                <Liabilities
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                  onDataChange={handleDataChange}
                  initialData={savedSteps["liabilities"]}
                />
              )}
              {tab1 === "gifts" && (
                <Gifts
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                  onDataChange={handleDataChange}
                  initialData={savedSteps["gifts"]}
                  savedSteps={savedSteps}
                />
              )}
              {tab1 === "residual" && (
                <Residual
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                  onDataChange={handleDataChange}
                  initialData={savedSteps["residual"]}
                />
              )}
              {tab1 === "funeral" && (
                <Funeral
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                  onDataChange={handleDataChange}
                  initialData={savedSteps["funeral"]}
                />
              )}
              {tab1 === "witnesses" && (
                <Witnesses
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                  onDataChange={handleDataChange}
                  initialData={savedSteps["witnesses"]}
                />
              )}
              {tab1 === "review" && (
                <>
                  <Review
                    onSave={handleSave}
                    onSkip={handleSkip}
                    onBack={handleBack}
                    onEditor={() => setIsEditor(true)}
                    onShare={() => setIsShareFeedbackModalOpen(true)}
                    isPaid={isPaid}
                    onDownload={async () => {
                      try {
                        const filename = await generateWillPDF(savedSteps, willLocation);
                        if (willId && filename) {
                          await savePdfPath(willId, filename);
                          toast.success("PDF downloaded and saved successfully");
                        }
                      } catch (error) {
                        console.error("Failed to download PDF:", error);
                        toast.error("Failed to download PDF");
                      }
                    }}
                    onCreateWill={async () => {
                      try {
                        const filename = await generateWillPDF(savedSteps, willLocation);
                        await completeWill({ willId, data: { pdf_path: filename } });
                        toast.success("Will created successfully!");
                      } catch (error) {
                        console.error("Failed to create will:", error);
                        toast.error(error?.response?.data?.message || "Failed to create will");
                      }
                    }}
                    onPayment={() => setIsPaymentModalOpen(true)}
                  />
                  {/* Full merged will preview at review step */}
                  <div className="bg-[#fafafa] border border-black/16 rounded-2xl sticky top-4 mt-0">
                    <div className="flex items-center justify-between bg-white p-4 rounded-t-2xl shadow-lg">
                      <p className="text-xs font-semibold text-black">Final Will Preview</p>
                      <div onClick={toggleFullScreen} className="cursor-pointer">
                        <Image src={ExpandIcon} alt="expand" width={16} height={16} />
                      </div>
                    </div>
                    <div ref={previewScrollRef} onScroll={handlePreviewScroll} className="overflow-y-auto max-h-[75vh] p-4">
                      <div ref={previewRef} style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left', width: `${10000 / zoom}%` }}>
                        <WillPreview
                          currentStep="review"
                          liveData={null}
                          savedSteps={savedSteps}
                          mode="review"
                        />
                      </div>
                    </div>
                    {/* Preview Toolbar */}
                    <div className="bg-white p-3 rounded-b-2xl border-t border-black/10 flex items-center justify-center gap-4">
                      <div className="flex items-center gap-3">
                        <button onClick={handleZoomOut} className="font-bold text-lg text-text-5 hover:text-black cursor-pointer">−</button>
                        <span className="text-xs text-text-4 font-semibold w-10 text-center">{zoom}%</span>
                        <button onClick={handleZoomIn} className="font-bold text-lg text-text-5 hover:text-black cursor-pointer">+</button>
                      </div>
                      <div className="w-px h-5 bg-[#E9EAEB]"></div>
                      <div className="flex items-center gap-3">
                        <div onClick={toggleFullScreen} className="cursor-pointer hover:opacity-80">
                          <Image src={ExpandIcon} alt="fullscreen" width={16} height={16} />
                        </div>
                        <div className="cursor-pointer hover:opacity-80" onClick={() => { setZoom(100); setRotation(0); }}>
                          <Image src={UpDownIcon} alt="fit" width={16} height={16} />
                        </div>
                      </div>
                      <div className="w-px h-5 bg-[#E9EAEB]"></div>
                      <div className="flex items-center gap-3">
                        <button onClick={handlePrevPage} disabled={page === 1} className={`transition-opacity ${page === 1 ? "opacity-30 cursor-not-allowed" : "hover:opacity-80 cursor-pointer"}`}>
                          <Image src={FillArrowLeftIcon} alt="prev" width={18} height={18} />
                        </button>
                        <span className="text-xs text-text-4 font-semibold">{page} / {totalPages}</span>
                        <button onClick={handleNextPage} disabled={page === totalPages} className={`rotate-180 transition-opacity ${page === totalPages ? "opacity-30 cursor-not-allowed" : "hover:opacity-80 cursor-pointer"}`}>
                          <Image src={FillArrowLeftIcon} alt="next" width={18} height={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Live Will Preview Panel */}
              {tab1 !== "review" && (
                <div className="bg-[#fafafa] border border-black/16 rounded-2xl sticky top-4">
                  <div className="flex items-center justify-between bg-white p-4 rounded-t-2xl shadow-lg">
                    <p className="text-xs font-semibold text-black">Live Preview</p>
                    <div onClick={toggleFullScreen} className="cursor-pointer">
                      <Image src={ExpandIcon} alt="expand" width={16} height={16} />
                    </div>
                  </div>
                  <div ref={tab1 !== "review" ? previewScrollRef : undefined} onScroll={tab1 !== "review" ? handlePreviewScroll : undefined} className="overflow-y-auto max-h-[75vh] p-4">
                    <div ref={tab1 !== "review" ? previewRef : undefined} style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left', width: `${10000 / zoom}%` }}>
                      <WillPreview
                        currentStep={tab1}
                        liveData={liveData}
                        savedSteps={savedSteps}
                        mode="step"
                      />
                    </div>
                  </div>
                  {/* Preview Toolbar */}
                  <div className="bg-white p-3 rounded-b-2xl border-t border-black/10 flex items-center justify-center gap-4">
                    <div className="flex items-center gap-3">
                      <button onClick={handleZoomOut} className="font-bold text-lg text-text-5 hover:text-black cursor-pointer">−</button>
                      <span className="text-xs text-text-4 font-semibold w-10 text-center">{zoom}%</span>
                      <button onClick={handleZoomIn} className="font-bold text-lg text-text-5 hover:text-black cursor-pointer">+</button>
                    </div>
                    <div className="w-px h-5 bg-[#E9EAEB]"></div>
                    <div className="flex items-center gap-3">
                      <div onClick={toggleFullScreen} className="cursor-pointer hover:opacity-80">
                        <Image src={ExpandIcon} alt="fullscreen" width={16} height={16} />
                      </div>
                      <div className="cursor-pointer hover:opacity-80" onClick={() => { setZoom(100); setRotation(0); }}>
                        <Image src={UpDownIcon} alt="fit" width={16} height={16} />
                      </div>
                    </div>
                    <div className="w-px h-5 bg-[#E9EAEB]"></div>
                    <div className="flex items-center gap-3">
                      <button onClick={handlePrevPage} disabled={page === 1} className={`transition-opacity ${page === 1 ? "opacity-30 cursor-not-allowed" : "hover:opacity-80 cursor-pointer"}`}>
                        <Image src={FillArrowLeftIcon} alt="prev" width={18} height={18} />
                      </button>
                      <span className="text-xs text-text-4 font-semibold">{page} / {totalPages}</span>
                      <button onClick={handleNextPage} disabled={page === totalPages} className={`rotate-180 transition-opacity ${page === totalPages ? "opacity-30 cursor-not-allowed" : "hover:opacity-80 cursor-pointer"}`}>
                        <Image src={FillArrowLeftIcon} alt="next" width={18} height={18} />
                      </button>
                    </div>
                  </div>

                  {/* Full Screen Overlay */}
                  {isFullScreen && (
                    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4">
                      <div className="absolute top-4 right-4 z-60">
                        <button
                          onClick={toggleFullScreen}
                          className="text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="w-full h-full flex-1 overflow-auto flex items-center justify-center relative">
                        <div
                          style={{
                            transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                            transition: "transform 0.3s ease",
                            transformOrigin: "center center",
                          }}
                          className="max-w-[90%] max-h-[80vh]"
                        >
                          <Image
                            src={StampPaper}
                            alt="stamp"
                            width={800}
                            height={800}
                            className="object-contain w-auto h-auto max-w-full max-h-full"
                          />
                        </div>
                      </div>
                      {/* Full Screen Toolbar */}
                      <div className="bg-white p-4 rounded-2xl flex items-center gap-6 mt-4 shadow-xl">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={handleZoomOut}
                            className="font-bold text-2xl text-text-5hover:text-black cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-sm text-text-4 font-semibold w-12 text-center">
                            {zoom}%
                          </span>
                          <button
                            onClick={handleZoomIn}
                            className="font-bold text-2xl text-text-5hover:text-black cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                        <div className="w-px h-6 bg-[#E9EAEB]"></div>
                        <div className="flex items-center gap-4">
                          <Image
                            src={UpDownIcon}
                            alt="resize"
                            width={20}
                            height={20}
                            className="cursor-pointer hover:opacity-80"
                            onClick={() => {
                              setZoom(100);
                              setRotation(0);
                            }}
                          />
                          <Image
                            src={RotateIcon}
                            alt="rotate"
                            width={20}
                            height={20}
                            className="cursor-pointer hover:opacity-80"
                            onClick={handleRotate}
                          />
                        </div>
                        <div className="w-px h-6 bg-[#E9EAEB]"></div>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={handlePrevPage}
                            disabled={page === 1}
                            className={`transition-opacity ${page === 1 ? "opacity-30 cursor-not-allowed" : "hover:opacity-80"}`}
                          >
                            <Image
                              src={FillArrowLeftIcon}
                              alt="prev"
                              width={24}
                              height={24}
                            />
                          </button>
                          <span className="text-sm text-text-4 font-semibold">
                            {page} / {totalPages}
                          </span>
                          <button
                            onClick={handleNextPage}
                            disabled={page === totalPages}
                            className={`rotate-180 transition-opacity ${page === totalPages ? "opacity-30 cursor-not-allowed" : "hover:opacity-80"}`}
                          >
                            <Image
                              src={FillArrowLeftIcon}
                              alt="next"
                              width={24}
                              height={24}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            {tab1 === "testator" && (
              <div className="md:mb-24 mx-4 mb-8 max-w-[1200px] min-[1200px]:mx-auto bg-[#fafafa] rounded-2xl p-6 mt-8">
                <h1 className="text-text-1 text-xl md:text-2xl lg:text-[36px] font-semibold mb-6">
                  Create your Will
                </h1>
                <p className="text-text-4 text-sm font-medium mb-1.5">
                  Where will this general be used?
                </p>
                <Commondropdown
                  options={["England", "Wales", "Scotland", "Northern Ireland"]}
                  value={willLocation}
                  onChange={(val) => setWillLocation(val)}
                  className="w-full bg-white text-text-4"
                />
              </div>
            )}
            {tab1 === "review" && (
              <>
                <div className="md:py-18 py-8 md:pt-24 pt-8 border-t border-black/16">
                  <div className="max-w-[768px] w-full mx-auto">
                    <p className="text-center md:text-base text-sm font-normal text-main mt-2">
                      Pricing
                    </p>
                    <h1 className="text-center lg:text-[36px] md:text-2xl text-xl font-semibold text-text-1 mt-3">
                      DocNet Subscription Plans
                    </h1>
                    <p className="text-center md:text-lg lg:text-xl text-base font-normal text-text-5 mt-2">
                      Get instant access to every legal document you need —
                      create, edit, sign, and download anytime.
                    </p>
                    <p className="text-center md:text-base text-sm font-normal text-text-5 mt-5">
                      <span className="font-semibold">Note:</span> All prices
                      include VAT Subscriptions renew automatically unless
                      cancelled before renewal date.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto mt-12 px-4">
                    {loadingPackages ? (
                      <div className="col-span-full text-center py-12">
                        <p className="text-text-5 text-base"><Loader /></p>
                      </div>
                    ) : packages.length > 0 ? (
                      [...packages].sort((a, b) => {
                        const order = { one_time: 0, monthly: 1, yearly: 2 };
                        return (order[a.billing_cycle] ?? 99) - (order[b.billing_cycle] ?? 99);
                      }).map((pkg) => {
                        const price = getPrice(pkg)
                        const cycle = pkg.billing_cycle === "monthly" ? "month" : "year";
                        const features = (() => {
                          try {
                            const parsed = typeof pkg.included_features === "string" ? JSON.parse(pkg.included_features) : pkg.included_features;
                            return Array.isArray(parsed) ? parsed : [];
                          } catch { return []; }
                        })();

                        return (
                          <div
                            key={pkg.id}
                            onClick={() => setTab2(pkg.id)}
                            className={`border rounded-2xl cursor-pointer flex flex-col shadow ${tab2 === pkg.id ? "bg-[#ECF6FF] border-main" : "border-black/10"}`}
                          >
                            <div className="p-4 md:p-6 lg:p-8">
                              <div className="flex justify-between items-start">
                                <h3 className="md:text-lg text-base font-semibold text-text-5">
                                  {pkg.name}
                                </h3>

                                {pkg.billing_cycle === "monthly" && (
                                  <span className="inline-block px-3 py-1 rounded-full border border-main text-main text-xs md:text-sm font-semibold bg-[#ECF6FF]">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <div className="mt-4 flex items-baseline">
                                {pkg.billing_cycle === "one_time" ? (
                                  <>
                                    <span className="md:text-base text-xs font-medium text-text-5 mr-1">From</span>
                                    <span className="lg:text-[60px] md:text-[45px] text-[30px] font-semibold text-text-1">£{price}</span>
                                  </>
                                ) : (
                                  <>
                                    <span className="lg:text-[60px] md:text-[45px] text-[30px] font-semibold text-text-1">
                                      £{price}
                                    </span>
                                    <span className="md:text-base text-xs font-medium text-text-5 ml-1">
                                      / {cycle}
                                    </span>
                                  </>
                                )}
                              </div>
                              {pkg.billing_cycle === "yearly" && pkg.discount && (
                                <span className="inline-block mt-2 px-3 py-1 rounded-full border border-main text-main text-xs md:text-sm font-semibold bg-[#ECF6FF]">
                                  Save {pkg.discount}% compared to monthly
                                </span>
                              )}
                              <p className="text-text-5 md:text-base text-sm mt-4">
                                {getDescription(pkg)}
                              </p>
                            </div>
                            {features.length > 0 && (
                              <div className="mt-6 border-t border-black/10 pt-6 flex-1 p-4 md:p-6 lg:p-8">
                                <p className="text-sm font-semibold text-text-1 mb-4">
                                  Includes:
                                </p>
                                <ul className="space-y-3">
                                  {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                      <div className="mt-0.5 min-w-5">
                                        <Image
                                          src={BorderTick}
                                          alt="check"
                                          width={20}
                                          height={20}
                                          className="w-6 h-6"
                                        />
                                      </div>
                                      <span className="text-text-5 text-sm">
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div className="mt-8 space-y-3 p-4 md:p-6 lg:p-8">
                              <button
                                onClick={(e) => { e.stopPropagation(); handleSelectPackage(pkg.id); }}
                                disabled={selectingPackage === pkg.id}
                                className="w-full bg-[#0B2C4F] cursor-pointer text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {selectingPackage === pkg.id ? "Starting..." : getButtonText(pkg)}
                              </button>
                              <button className="w-full bg-white border cursor-pointer border-black/10 text-text-1 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                Chat to sales
                              </button>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <p className="text-text-5 text-base">No packages available at the moment.</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="border max-w-[1200px] max-[1200px]:mx-4 min-[1200px]:mx-auto border-main bg-[#fafafa] p-4 md:p-6 md:mb-24 mb-8 rounded-xl">
                  <h1 className="text-text-1 text-xl md:text-2xl lg:text-[36px] font-semibold">
                    Enter your payment information
                  </h1>
                  <p className="md:text-base text-sm font-normal text-text-5 mt-5">
                    <span className="font-semibold">Note:</span> All prices
                    include VAT Subscriptions renew automatically unless
                    cancelled before renewal date.
                  </p>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm
                      onPaymentSuccess={() => {
                        setIsPaid(true);
                        setIsPaymentModalOpen(true);
                      }}
                      selectedBillingCycle={packages.find(p => p.id === tab2)?.billing_cycle}
                    />
                  </Elements>
                </div>
              </>
            )}
            <div className="md:pt-24 pt-8">
              <div className="px-4 md:px-6 lg:px-8 max-w-[1200px] mx-auto">
                <h1 className="text-text-1 text-xl md:text-2xl lg:text-[36px] font-semibold">
                  Frequently asked questions
                </h1>
                <p className="text-text-5 text-sm md:text-base lg:text-xl mt-5">
                  Find quick answers to common questions about creating,
                  updating, and managing your legal documents with DocNet.
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:mt-16 mt-8 ">
                  <FAQ value={questions} />
                  <Image
                    src={faqBg}
                    alt="faq"
                    width={100}
                    height={100}
                    className="w-full h-full object-fill max-md:row-start-1"
                  />
                </div>
              </div>
              <div className=" px-4 my-8 md:my-24 md:mt-16 max-w-[1200px] mx-auto">
                <div className="bg-[#FAFAFA] rounded-2xl py-8 p-4">
                  <div className="max-w-[768px] mx-auto">
                    <div className="flex items-center justify-center relative mt-10">
                      <div className="border-2 border-white rounded-full inline-block absolute left-1/2 -translate-x-[calc(50%+30px)]">
                        <Image
                          src={user1}
                          alt="media"
                          width={48}
                          height={48}
                          className=""
                        />
                      </div>
                      <div className="border-2 border-white rounded-full inline-block absolute left-1/2 -translate-x-1/2 z-10 -translate-y-2">
                        <Image
                          src={user2}
                          alt="media"
                          width={56}
                          height={56}
                          className=""
                        />
                      </div>
                      <div className="border-2 border-white rounded-full inline-block absolute left-1/2 -translate-x-[calc(50%-30px)]">
                        <Image
                          src={user3}
                          alt="media"
                          width={48}
                          height={48}
                          className=""
                        />
                      </div>
                    </div>
                    <h2 className="text-center mt-14 text-text-1 text-base md:text-xl font-semibold">
                      Still have questions?
                    </h2>
                    <p className="text-center text-text-5 text-sm md:text-lg mt-2">
                      Didn't find what you were looking for? Chat with our
                      support team — we're here to help.
                    </p>
                    <div className="flex justify-center items-center mt-4">
                      <button className="max-md:w-full cursor-pointer bg-[#0B2C4F] cursor pointer text-white p-3 mb-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                        Get in touch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1200px] -mt-20 md:-mt-10 mx-auto bg-white">
            <Footer />
          </div>
        </div>
      )}
      {isShareModalOpen && (
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => {
            setIsShareModalOpen(false);
          }}
          onSend={() => {
            setIsShareModalOpen(false);
            setIsDocumentSentOpen(true);
          }}
        />
      )}
      {isDocumentSentOpen && (
        <DocumentSent
          isOpen={isDocumentSentOpen}
          onClose={() => setIsDocumentSentOpen(false)}
        />
      )}
      {isShareFeedbackModalOpen && (
        <ShareFeedbackModal
          onClose={() => setIsShareFeedbackModalOpen(false)}
          onSubmit={() => {
            setIsShareFeedbackModalOpen(false);
            setIsFeedbackSentModalOpen(true);
          }}
        />
      )}
      {isFeedbackSentModalOpen && (
        <FeedbackSentModal
          isOpen={isFeedbackSentModalOpen}
          onClose={() => setIsFeedbackSentModalOpen(false)}
        />
      )}
      {isPaymentModalOpen && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
        />
      )}
    </>
  );
}

export default Page;
