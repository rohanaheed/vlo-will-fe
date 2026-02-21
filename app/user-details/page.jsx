"use client";
import React from "react";
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
import { useState } from "react";
import Testatot from "./forms/Testatot";
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
import DabitCard from "@/components/assets/images/DabitCard.svg";
import Editor from "./Editor.jsx";
import ShareModal from "@/components/layout/Modal/ShareMoadal";
import DocumentSent from "@/components/layout/Modal/DocumentSent";
import ShareFeedbackModal from "../../components/layout/Modal/ShareFeedbackModal.jsx";
import FeedbackSentModal from "../../components/layout/Modal/FeedbackSentModal.jsx";
import PaymentModal from "../../components/layout/Modal/PaymentModal.jsx";
function Page() {
  const [tab, setTab] = useState("overview");
  const [tab1, settab1] = useState("testator");
  const [isEditor, setIsEditor] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [willLocation, setWillLocation] = useState("England");
  const [tab2, setTab2] = useState("annual");
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isShareFeedbackModalOpen, setIsShareFeedbackModalOpen] =
    useState(false);
  const [isFeedbackSentModalOpen, setIsFeedbackSentModalOpen] = useState(false);
  const [isDocumentSentOpen, setIsDocumentSentOpen] = useState(false);
  const [paymentData, setPaymentData] = useState({
    fname: "",
    mname: "",
    lname: "",
    cardno: "",
    ccv: "",
    expiry: "",
    billingzip: "",
  });

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  const handleSave = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex < steps.length - 1) {
      setCompletedSteps((prev) => [...new Set([...prev, currentIndex])]);
      settab1(steps[currentIndex + 1]);
    }
  };

  const handleSkip = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex < steps.length - 1) {
      settab1(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex > 0) {
      settab1(steps[currentIndex - 1]);
    }
  };

  const handleStepClick = (stepIndex) => {
    settab1(steps[stepIndex]);
  };
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [page, setPage] = useState(1);
  const totalPages = 2;
  const [isFullScreen, setIsFullScreen] = useState(false);

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
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
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
                />
              )}
              {tab1 === "executor" && (
                <Executors
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                />
              )}
              {tab1 === "spouse" && (
                <Spouse
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                />
              )}
              {tab1 === "beneficiaries" && (
                <Beneficiaries
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                />
              )}
              {tab1 === "assets" && (
                <Assets
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                />
              )}
              {tab1 === "liabilities" && (
                <Liabilities
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                />
              )}
              {tab1 === "gifts" && (
                <Gifts
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                />
              )}
              {tab1 === "residual" && (
                <Residual
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                />
              )}
              {tab1 === "funeral" && (
                <Funeral
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                />
              )}
              {tab1 === "witnesses" && (
                <Witnesses
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                />
              )}
              {tab1 === "review" && (
                <Review
                  onSave={handleSave}
                  onSkip={handleSkip}
                  onBack={handleBack}
                  onEditor={() => setIsEditor(true)}
                  onShare={() => setIsShareFeedbackModalOpen(true)}
                />
              )}

              <div className="bg-[#fafafa] border border-black/16 rounded-2xl">
                <div className="flex items-center justify-between bg-white  p-4 rounded-t-2xl shadow-lg">
                  <div className="flex items-center  gap-1 cursor-pointer">
                    <p className="text-xs text-black">Update Preview</p>
                    <Image src={Refresh} alt="refresh" width={16} height={16} />
                  </div>
                  <div onClick={toggleFullScreen} className="cursor-pointer">
                    <Image
                      src={ExpandIcon}
                      alt="refresh"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                <div className="overflow-hidden flex justify-center items-center bg-[#fafafa] transition-all ">
                  <div
                    style={{
                      transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                      transition: "transform 0.3s ease",
                      transformOrigin: "center center",
                    }}
                    className="w-full h-full flex items-center justify-center px-4"
                  >
                    <Image
                      src={StampPaper}
                      alt="stamp"
                      width={1000}
                      height={1000}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-b-2xl flex items-center justify-center gap-4 z-10 relative">
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
                  <div className="w-px h-6 bg-[#BDBDC7]"></div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={UpDownIcon}
                      alt="resize"
                      width={24}
                      height={24}
                      className="cursor-pointer hover:opacity-80"
                      onClick={() => {
                        setZoom(100);
                        setRotation(0);
                      }}
                    />
                    <Image
                      src={RotateIcon}
                      alt="rotate"
                      width={24}
                      height={24}
                      className="cursor-pointer hover:opacity-80"
                      onClick={handleRotate}
                    />
                  </div>
                  <div className="w-px h-6 bg-[#BDBDC7]"></div>
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
                    {/* Single Document */}
                    <div
                      onClick={() => setTab2("single")}
                      className={`border border-black/10 rounded-2xl cursor-pointer flex flex-col shadow ${tab2 === "single" ? "bg-[#ECF6FF] border-main" : ""}`}
                    >
                      <div className="p-4 md:p-6 lg:p-8">
                        <h3 className="md:text-lg text-base font-semibold text-text-5">
                          Single Document
                        </h3>
                        <div className="mt-4 flex items-baseline">
                          <span className="md:text-base text-xs font-medium text-text-5 mr-1">
                            From
                          </span>
                          <span className="lg:text-[60px] md:text-[45px] text-[30px] font-semibold text-text-1">
                            £10
                          </span>
                        </div>
                        <p className="text-text-5 md:text-base text-sm mt-4">
                          Ideal if you only need one document.
                        </p>
                      </div>
                      <div className="mt-6 border-t border-black/10 pt-6 p-4 md:p-6 lg:p-8 flex-1">
                        <p className="text-sm font-semibold text-text-1 mb-4">
                          Includes:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="">
                              <Image
                                src={BorderTick}
                                alt="check"
                                width={20}
                                height={20}
                                className="w-6 h-6"
                              />
                            </div>
                            <span className="text-text-5 text-sm">
                              One-time creation and download
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="">
                              <Image
                                src={BorderTick}
                                alt="check"
                                width={20}
                                height={20}
                                className="w-6 h-6"
                              />
                            </div>
                            <span className="text-text-5 text-sm">
                              Editable before download
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="">
                              <Image
                                src={BorderTick}
                                alt="check"
                                width={20}
                                height={20}
                                className="w-6 h-6"
                              />
                            </div>
                            <span className="text-text-5 text-sm">
                              Secure 30-day access for updates
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-8 space-y-3 p-4 md:p-6 lg:p-8">
                        <button
                          onClick={() => router.push("/create-your-will")}
                          className="w-full bg-[#0B2C4F] cursor-pointer text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                          Create Now
                        </button>
                        <button className="w-full cursor-pointer bg-white border border-black/10 text-text-1 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                          Chat to sales
                        </button>
                      </div>
                    </div>

                    {/* Monthly Plan */}
                    <div
                      onClick={() => setTab2("monthly")}
                      className={`border border-black/10 rounded-2xl flex flex-col shadow cursor-pointer ${tab2 === "monthly" ? "bg-[#ECF6FF] border-main" : ""}`}
                    >
                      <div className="p-4 md:p-6 lg:p-8">
                        <div className="flex justify-between items-start">
                          <h3 className="md:text-lg text-base font-semibold text-text-5">
                            Monthly Plan
                          </h3>
                          <span className="inline-block px-3 py-1 rounded-full border border-main text-main text-xs md:text-sm font-semibold bg-[#ECF6FF]">
                            Popular
                          </span>
                        </div>
                        <div className="mt-4 flex items-baseline">
                          <span className="lg:text-[60px] md:text-[45px] text-[30px] font-semibold text-text-1">
                            £29
                          </span>
                          <span className="md:text-base text-xs font-medium text-text-5 mr-1">
                            / month
                          </span>
                        </div>
                        <p className="text-text-5 md:text-base text-sm mt-4">
                          Perfect if you need several documents or ongoing
                          access.
                        </p>
                      </div>
                      <div className="mt-6 border-t border-black/10 pt-6 flex-1 p-4 md:p-6 lg:p-8">
                        <p className="text-sm font-semibold text-text-1 mb-4">
                          Includes:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="">
                              <Image
                                src={BorderTick}
                                alt="check"
                                width={20}
                                height={20}
                                className="w-6 h-6"
                              />
                            </div>
                            <span className="text-text-5 text-sm">
                              Unlimited document creation and editing
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="">
                              <Image
                                src={BorderTick}
                                alt="check"
                                width={20}
                                height={20}
                                className="w-6 h-6"
                              />
                            </div>
                            <span className="text-text-5 text-sm">
                              Full access to all legal templates
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="">
                              <Image
                                src={BorderTick}
                                alt="check"
                                width={20}
                                height={20}
                                className="w-6 h-6"
                              />
                            </div>
                            <span className="text-text-5 text-sm">
                              Download in Word or PDF
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="">
                              <Image
                                src={BorderTick}
                                alt="check"
                                width={20}
                                height={20}
                                className="w-6 h-6"
                              />
                            </div>
                            <span className="text-text-5 text-sm">
                              Secure online storage
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="">
                              <Image
                                src={BorderTick}
                                alt="check"
                                width={20}
                                height={20}
                                className="w-6 h-6"
                              />
                            </div>
                            <span className="text-text-5 text-sm">
                              eSignature included
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-8 space-y-3 p-4 md:p-6 lg:p-8">
                        <button
                          onClick={() => router.push("/create-your-will")}
                          className="w-full bg-[#0B2C4F] cursor-pointer text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                          Start Free Trial
                        </button>
                        <button className="w-full bg-white cursor-pointer border border-black/10 text-text-1 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                          Chat to sales
                        </button>
                      </div>
                    </div>

                    {/* Annual Plan */}
                    <div
                      onClick={() => setTab2("annual")}
                      className={`border border-black/10 rounded-2xl flex flex-col shadow cursor-pointer ${tab2 === "annual" ? "bg-[#ECF6FF] border-main" : ""}`}
                    >
                      <div className="p-4 md:p-6 lg:p-8">
                        <h3 className="md:text-lg text-base font-semibold text-text-5">
                          Annual Plan
                        </h3>
                        <div className="mt-4 flex items-baseline">
                          <span className="lg:text-[60px] md:text-[45px] text-[30px] font-semibold text-text-1">
                            £59.88
                          </span>
                          <span className="md:text-base text-xs font-medium text-text-5 ml-1">
                            / year
                          </span>
                        </div>
                        <div className="">
                          <span className="inline-block px-3 py-1 rounded-full border border-main text-main text-xs md:text-sm font-semibold bg-[#ECF6FF]">
                            Save 80% compared to monthly
                          </span>
                        </div>

                        <p className="text-text-5 md:text-base text-sm mt-4">
                          Best value for individuals and small businesses.
                        </p>
                      </div>
                      <div className="mt-6 border-t border-black/10 pt-6 flex-1 p-4 md:p-6 lg:p-8">
                        <p className="text-sm font-semibold text-text-1 mb-4">
                          Includes:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <div className="mt-0.5 min-w-5">
                              <div className="">
                                <Image
                                  src={BorderTick}
                                  alt="check"
                                  width={20}
                                  height={20}
                                  className="w-6 h-6"
                                />
                              </div>
                            </div>
                            <span className="text-text-5 text-sm">
                              Everything in the Monthly Plan, plus.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="mt-0.5 min-w-5">
                              <div className="">
                                <Image
                                  src={BorderTick}
                                  alt="check"
                                  width={20}
                                  height={20}
                                  className="w-6 h-6"
                                />
                              </div>
                            </div>
                            <span className="text-text-5 text-sm">
                              Priority customer support
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="mt-0.5 min-w-5">
                              <div className="">
                                <Image
                                  src={BorderTick}
                                  alt="check"
                                  width={20}
                                  height={20}
                                  className="w-6 h-6"
                                />
                              </div>
                            </div>
                            <span className="text-text-5 text-sm">
                              Early access to new templates
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="mt-0.5 min-w-5">
                              <div className="">
                                <Image
                                  src={BorderTick}
                                  alt="check"
                                  width={20}
                                  height={20}
                                  className="w-6 h-6"
                                />
                              </div>
                            </div>
                            <span className="text-text-5 text-sm">
                              Annual billing for complete peace of mind
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-8 space-y-3 p-4 md:p-6 lg:p-8">
                        <button
                          onClick={() => router.push("/create-your-will")}
                          className="w-full bg-[#0B2C4F] cursor-pointer text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                          Go Annual & Save
                        </button>
                        <button className="w-full bg-white border cursor-pointer border-black/10 text-text-1 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                          Chat to sales
                        </button>
                      </div>
                    </div>
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
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-4">
                    <div>
                      <label
                        htmlFor="fname"
                        className="text-text-4 text-sm font-medium mb-1.5"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        value={paymentData.fname}
                        onChange={handlePaymentChange}
                        placeholder="Olivia Rhye"
                        className="w-full text-text-1 border border-black/10 rounded-lg p-2 py-1.75 shadow"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="mname"
                        className="text-text-4 text-sm font-medium mb-1.5"
                      >
                        Middle Name
                      </label>
                      <input
                        type="text"
                        id="mname"
                        name="mname"
                        value={paymentData.mname}
                        onChange={handlePaymentChange}
                        placeholder="Olivia Rhye"
                        className="w-full text-text-1 border border-black/10 rounded-lg p-2 py-1.75 shadow"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lname"
                        className="text-text-4 text-sm font-medium mb-1.5"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        value={paymentData.lname}
                        onChange={handlePaymentChange}
                        placeholder="Olivia Rhye"
                        className="w-full text-text-1 border border-black/10 rounded-lg p-2 py-1.75 shadow"
                      />
                    </div>
                    <div className="relative">
                      <label
                        htmlFor="cardno"
                        className="text-text-4 text-sm font-medium mb-1.5"
                      >
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="cardno"
                          name="cardno"
                          value={paymentData.cardno}
                          onChange={handlePaymentChange}
                          placeholder="1234 5678 9012 3456"
                          className="w-full text-text-1 border border-black/10 rounded-lg pl-9 p-2 py-1.75 shadow"
                        />
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center">
                          <Image
                            src={DabitCard}
                            alt="DabitCard"
                            width={24}
                            height={18}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="ccv"
                        className="text-text-4 text-sm font-medium mb-1.5"
                      >
                        CCV
                      </label>
                      <input
                        type="password"
                        id="ccv"
                        name="ccv"
                        value={paymentData.ccv}
                        onChange={handlePaymentChange}
                        placeholder="..."
                        className="w-full text-text-1 border border-black/10 rounded-lg p-2 py-1.75 shadow"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="expiry"
                        className="text-text-4 text-sm font-medium mb-1.5"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        value={paymentData.expiry}
                        onChange={handlePaymentChange}
                        placeholder="06 / 2025"
                        className="w-full text-text-1 border border-black/10 rounded-lg p-2 py-1.75 shadow"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="billingzip"
                      className="text-text-4 text-sm font-medium mb-1.5"
                    >
                      Billing Zip
                    </label>
                    <input
                      type="text"
                      id="billingzip"
                      name="billingzip"
                      value={paymentData.billingzip}
                      onChange={handlePaymentChange}
                      placeholder="06 / 2025"
                      className="w-full text-text-1 border border-black/10 rounded-lg p-2 py-1.75 shadow"
                    />
                    <p className="text-red-500 text-sm mt-1.5">
                      Please enter a valid card's billing zip code.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setIsPaymentModalOpen(true)}
                      className="w-full bg-main cursor-pointer mt-4 text-white p-3 rounded-lg font-semibold hover:bg-main/85 transition-opacity"
                    >
                      Yes, start my membership
                    </button>
                  </div>
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
