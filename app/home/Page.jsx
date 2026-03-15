"use client";
import React from "react";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import searchIcon from "@/components/assets/images/SearchIconWhite.svg";
import video from "@/components/assets/images/video.svg";
import ThuderIcon from "@/components/assets/images/ThuderIcon.svg";
import FastIcon from "@/components/assets/images/FastIcon.svg";
import LawyerIcon from "@/components/assets/images/LawyerIcon.svg";
import AddSquareIcon from "@/components/assets/images/AddSquareIcon.svg";
import docIcon from "@/components/assets/images/Doc.svg";
import OpticalIcon from "@/components/assets/images/OpticalIcon.svg";
import checkIcon from "@/components/assets/images/CheckIcon1.svg";
import Slider from "@/components/common/slider";
import SliderBg1 from "@/components/assets/images/SliderBg1.png";
import PersonalPage from "./personalpage/Page";
import Corporate from "./corporate/Page";
import BorderTick from "@/components/assets/images/BorderTick.svg";
import user1 from "@/components/assets/images/User1.svg";
import user2 from "@/components/assets/images/User2.svg";
import user3 from "@/components/assets/images/User3.svg";
import Image from "next/image";
import FAQ from "@/components/common/FAQ";
import faqBg from "@/components/assets/images/FAQ.svg";
import PlayButton from "@/components/assets/images/PlayButton.svg";
import VideoArrow from "@/components/assets/images/VideoArrow.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
function Page() {
  const [value, setValue] = useState("");
  const [button, setButton] = useState("property");
  const [tab, setTab] = useState("personal");
  const [tab1, setTab1] = useState("annual");
  const router = useRouter();

  const sliderContent = [
    {
      image: SliderBg1,
      quote:
        "I needed a tenancy agreement urgently and late at night. The process was straightforward, and I had a professional document ready in minutes.",
      author: "Sarah Jenkins",
      role: "Landlord",
      location: "London, UK",
      rating: 5,
    },
    {
      image: SliderBg1,
      quote:
        "As a small business owner, I can't always afford a solicitor. this platform gives me peace of mind with lawyer-approved templates.",
      author: "Michael Chen",
      role: "Small Business Owner",
      location: "Manchester, UK",
      rating: 5,
    },
    {
      image: SliderBg1,
      quote:
        "Incredible service! The guided questionnaire made sure I didn't miss any important details in my will. Highly recommended.",
      author: "Emma Thompson",
      role: "Teacher",
      location: "Birmingham, UK",
      rating: 5,
    },
  ];
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
      <div className=" bg-white">
        <UserHeader />
        <div className="bg-[url('@/components/assets/images/SliderBg1.svg')] p-4 pt-20 md:pt-30 pb-18 md:pb-24 bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto  max-lg:flex flex-col-reverse lg:grid grid-cols-[1fr_560px] gap-8">
            <div className="">
              <h1 className="text-[20px] md:text-[40px] lg:text-[60px] font-semi-bold text-main">
                Professional legal documents — ready in minutes
              </h1>
              <p className="text-[14px] md:text-[16px] lg:text-[20px] font-normal text-text-5 mt-6">
                Choose a template, answer a few simple questions and download a
                UK-compliant document in minutes. Simple, reliable and written
                or reviewed by qualified lawyers.
              </p>
              <div className="flex md:flex-row flex-col items-center gap-2 w-full mt-12">
                <input
                  type="text"
                  placeholder="Search hundreds of documents..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="rounded-lg bg-white border-black/16 text-text-7 w-full p-2.75 outline-0 border hover:border-main focus:border-main"
                />
                <button className="flex items-center justify-center cursor-pointer min-w-[212px] w-full md:w-[212px] md:max-w-[212px] gap-2 bg-main text-white py-2.75 rounded-md whitespace-nowrap">
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <p className="font-semibold">Browse templates</p>
                </button>
              </div>
              <div className="flex items-center flex-wrap gap-2 mt-3">
                <button
                  onClick={() => setButton("property")}
                  className={`rounded-lg p-2.75 max-md:w-full border hover:border-main focus:border-main transition-all duration-300 cursor-pointer ${button === "property" ? "bg-[#ECF6FF] text-main border-main" : "border-black/16 hover:bg-[#ECF6FF] bg-white hover:text-main text-text-7"}`}
                >
                  Property & Tenancy
                </button>
                <button
                  onClick={() => setButton("business")}
                  className={`rounded-lg p-2.75 max-md:w-full border hover:border-main focus:border-main transition-all duration-300 cursor-pointer ${button === "business" ? "bg-[#ECF6FF] text-main border-main" : "border-black/16 hover:bg-[#ECF6FF] bg-white hover:text-main text-text-7"}`}
                >
                  Business & Services
                </button>
                <button
                  onClick={() => setButton("employment")}
                  className={`rounded-lg p-2.75 max-md:w-full border hover:border-main focus:border-main transition-all duration-300 cursor-pointer ${button === "employment" ? "bg-[#ECF6FF] text-main border-main" : "border-black/16 hover:bg-[#ECF6FF] bg-white hover:text-main text-text-7"}`}
                >
                  Employment & HR
                </button>
                <button
                  onClick={() => setButton("personal")}
                  className={`rounded-lg p-2.75 max-md:w-full border hover:border-main focus:border-main transition-all duration-300 cursor-pointer ${button === "personal" ? "bg-[#ECF6FF] text-main border-main" : "border-black/16 hover:bg-[#ECF6FF] bg-white hover:text-main text-text-7"}`}
                >
                  Personal & Family
                </button>
                <button
                  onClick={() => setButton("finance")}
                  className={`rounded-lg p-2.75 max-md:w-full border hover:border-main focus:border-main transition-all duration-300 cursor-pointer ${button === "finance" ? "bg-[#ECF6FF] text-main border-main" : "border-black/16 hover:bg-[#ECF6FF] bg-white hover:text-main text-text-7"}`}
                >
                  Finance & Loans
                </button>
                <button
                  onClick={() => setButton("legal")}
                  className={`rounded-lg p-2.75 max-md:w-full border hover:border-main focus:border-main transition-all duration-300 cursor-pointer ${button === "legal" ? "bg-[#ECF6FF] text-main border-main" : "border-black/16 hover:bg-[#ECF6FF] bg-white hover:text-main text-text-7"}`}
                >
                  Legal & Compliance
                </button>
                <button
                  onClick={() => setButton("more")}
                  className={`rounded-lg p-2.75 max-md:w-full border hover:border-main focus:border-main transition-all duration-300 cursor-pointer ${button === "more" ? "bg-[#ECF6FF] text-main border-main" : "border-black/16 hover:bg-[#ECF6FF] bg-white hover:text-main text-text-7"}`}
                >
                  More
                </button>
              </div>
            </div>
            <div className="relative h-full">
              <div className="w-full h-full">
                <Image
                  src={video}
                  alt="video"
                  className="w-full max-h-[700px] lg:min-h-full lg:max-h-[640px] object-cover "
                />
              </div>
              <div className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={PlayButton}
                  alt="PlayButton"
                  width={128}
                  height={128}
                  className="md:w-32 md:h-32 w-12 h-12"
                />
              </div>
              <div className="absolute bottom-0 left-0 -translate-x-12 -translate-y-10 min-[1180px]:-translate-y-5">
                <Image
                  src={VideoArrow}
                  alt="VideoArrow"
                  width={158}
                  height={134}
                  className="w-full h-full max-lg:hidden"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 max-w-[1200px] mx-auto py-18 md:py-24 bg-white grid min-[1000px]:grid-cols-[30%_69%] grid-cols-1 gap-4">
          <div className="">
            <div className="rounded-full bg-[#ECF6FF] inline-flex items-center justify-center p-3.5">
              <Image src={ThuderIcon} alt="ThuderIcon" width={28} height={28} />
            </div>
            <h1 className="text-[36px] font-semibold text-text-1 mt-5">
              Key benefits
            </h1>
            <p className="text-lg font-normal text-text-5 mt-5">
              Fast, simple and reliable — just like our documents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-[#fafafa] p-3 md:p-6">
              <div className="rounded-xl bg-main inline-flex items-center justify-center p-3">
                <Image src={FastIcon} alt="FastIcon" width={24} height={24} />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-text-1">
                  Fast — create in minutes
                </h3>
                <p className="text-base font-normal text-text-5 mt-2">
                  Answer a guided questionnaire; your document is generated
                  automatically and ready to download.
                </p>
              </div>
            </div>
            <div className="bg-[#fafafa] p-3 md:p-6">
              <div className="rounded-xl bg-main inline-flex items-center justify-center p-3">
                <Image src={LawyerIcon} alt="FastIcon" width={24} height={24} />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-text-1">
                  Lawyer-sourced template
                </h3>
                <p className="text-base font-normal text-text-5 mt-2">
                  Templates are drafted or reviewed by qualified solicitors and
                  kept up to date with jurisdictional changes.
                </p>
              </div>
            </div>
            <div className="bg-[#fafafa] p-3 md:p-6">
              <div className="rounded-xl bg-main inline-flex items-center justify-center p-3">
                <Image
                  src={AddSquareIcon}
                  alt="FastIcon"
                  width={24}
                  height={24}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-text-1">
                  Fully customisable
                </h3>
                <p className="text-base font-normal text-text-5 mt-2">
                  Edit any section, add clauses and download as Word or PDF —
                  then sign or share securely.
                </p>
              </div>
            </div>
            <div className="bg-[#fafafa] p-3 md:p-6">
              <div className="rounded-xl bg-main inline-flex items-center justify-center p-3">
                <Image
                  src={OpticalIcon}
                  alt="FastIcon"
                  width={24}
                  height={24}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-text-1">
                  Optional legal review
                </h3>
                <p className="text-base font-normal text-text-5 mt-2">
                  For added peace of mind, request a lawyer review or bespoke
                  drafting service.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 lg:py-24 md:py-18 py-8 max-w-[1200px] mx-auto">
          <div className="max-w-md">
            <h1 className="text-[36px] font-semibold text-text-1 mt-5">
              How it works
            </h1>
            <p className="text-lg font-normal text-text-5 mt-2">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className=" px-6 py-4 border-l-4 border-[#587C9F]">
                <h1 className="text-xl font-semibold text-text-1">
                  Step 1 — Pick the document
                </h1>
                <p className="text-base font-normal text-text-5 mt-2">
                  Complete a short guided form. We use your answers to populate
                  the document automatically.
                </p>
              </div>
              <div className=" px-6 py-4 border-l-4 border-[#F5F5F5]">
                <h1 className="text-xl font-semibold text-text-1">
                  Step 2 — Answer a few questions
                </h1>
                <p className="text-base font-normal text-text-5 mt-2">
                  Search or browse our library of templates (wills, tenancy,
                  contracts, business forms).
                </p>
              </div>
              <div className=" px-6 py-4 border-l-4 border-[#F5F5F5]">
                <h1 className="text-xl font-semibold text-text-1">
                  Step 3 — Customise & review
                </h1>
                <p className="text-base font-normal text-text-5 mt-2">
                  Make edits add clauses or request a legal review. Documents
                  are downloadable in Word or PDF.
                </p>
              </div>
              <div className=" px-6 py-4 border-l-4 border-[#F5F5F5]">
                <h1 className="text-xl font-semibold text-text-1">
                  Step 4 — Save, sign or share
                </h1>
                <p className="text-base font-normal text-text-5 mt-2">
                  Save your document to your account, print or share a secure
                  link. Use e-signatures where available.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F5F5] p-6">
              <Image
                src={docIcon}
                alt="docIcon"
                width={100}
                height={100}
                className="min-w-full min-h-full object-cover object-left"
              />
            </div>
          </div>
        </div>
        <div className="px-4 max-w-[1200px] mx-auto">
          <h1 className="text-[36px] font-semibold text-text-1 mt-5">
            What Do You Want to Accomplish Today?
          </h1>
          <p className="text-xl font-normal text-text-5 mt-5">
            Select an option to get tailored legal forms and guidance in just a
            few minutes.
          </p>
        </div>
        <div className="px-4 max-w-[1200px] mx-auto">
          <div className="flex p-0.75 bg-[#FAFAFA] rounded-xl border border-black/16 mt-8">
            <button
              className={`${tab === "personal" ? "bg-main text-white" : "bg-white text-text-1"} p-2.5 rounded-xl w-full cursor-pointer transition-all duration-300`}
              onClick={() => setTab("personal")}
            >
              Personal
            </button>
            <button
              className={`${tab === "corporate" ? "bg-main text-white" : "bg-white text-text-1"} p-2.5 rounded-xl w-full cursor-pointer transition-all duration-300`}
              onClick={() => setTab("corporate")}
            >
              Corporate
            </button>
          </div>
        </div>
        <div className="px-4 max-w-[1200px] mx-auto">
          {tab === "personal" && <PersonalPage />}
          {tab === "corporate" && <Corporate />}
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 pt-18 md:pt-24 items-center gap-8 p-4">
          <div>
            <h1 className=" text-xl md:text-[36px] lg:text-[48px] font-semibold text-text-1">
              Why choose DocNet?
            </h1>
            <div>
              <div className="flex items-center gap-2 mt-8">
                <div className="bg-[#ECF6FF] rounded-full p-2">
                  <Image
                    src={checkIcon}
                    alt="checkIcon"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5"
                  />
                </div>
                <p className="text-lg font-normal text-text-5 mt-2">
                  <span className="font-bold">Reliable —</span> All documents
                  are built to meet legal standards.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <div className="bg-[#ECF6FF] rounded-full p-2">
                  <Image
                    src={checkIcon}
                    alt="checkIcon"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5"
                  />
                </div>
                <p className="text-lg font-normal text-text-5 mt-2">
                  <span className="font-bold">Affordable —</span> No hourly fees
                  or appointments required.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <div className="bg-[#ECF6FF] rounded-full p-2">
                  <Image
                    src={checkIcon}
                    alt="checkIcon"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5"
                  />
                </div>
                <p className="text-lg font-normal text-text-5 mt-2">
                  <span className="font-bold">Fast —</span> Create and download
                  your document in less than 10 minutes.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <div className="bg-[#ECF6FF] rounded-full p-2">
                  <Image
                    src={checkIcon}
                    alt="checkIcon"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5"
                  />
                </div>
                <p className="text-lg font-normal text-text-5 mt-2">
                  <span className="font-bold">Accessible —</span> Available
                  online 24/7 from any device.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <div className="bg-[#ECF6FF] rounded-full p-2">
                  <Image
                    src={checkIcon}
                    alt="checkIcon"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5"
                  />
                </div>
                <p className="text-lg font-normal text-text-5 mt-2">
                  <span className="font-bold">Supportive —</span> Our friendly
                  team is always ready to help.
                </p>
              </div>
            </div>
          </div>
          <div className="h-[600px] w-full relative overflow-hidden">
            <Slider data={sliderContent} />
            <div className="bg-main text-center pt-18 md:pt-24 pb-40">
              <div className="max-w-md mx-auto">
                <h1 className="lg:text-[36px] md:text-2xl text-xl font-semibold text-white mt-5">
                  DocNet by the Numbers
                </h1>
                <p className="mt-5 lg:text-xl md:text-lg text-base font-normal text-[#F3F3F3]">
                  Real results from users who trust{" "}
                  <span className="font-semibold">DocNet Ltd</span> to create,
                  customise and manage legal documents quickly and securely.
                </p>
              </div>
              <div className="bg-cover bg-center bg-no-repeat p-4">
                <div>
                  <h1 className="text-3xl font-bold text-white">25,000+</h1>
                  <h2 className="text-xl text-white">
                    Legal documents created
                  </h2>
                  <p className="text-white mt-2">
                    Documents generated across wills, tenancy, business and
                    more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main text-center pt-12 md:pt-24 pb-40">
        <div className="max-w-[768px] mx-auto">
          <h1 className="text-center lg:text-[36px] md:text-2xl text-xl font-semibold text-white">
            DocNet by the Numbers
          </h1>
          <p className="mt-5 lg:text-xl md:text-lg text-base font-normal text-[#F3F3F3]">
            Real results from users who trust{" "}
            <span className="font-semibold">DocNet Ltd</span> to create,
            customise and manage legal documents quickly and securely.
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-4 bg lg:p-14 md:p-10 p-6 translate-y-[-100px]">
          <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
            <h1 className="text-3xl font-bold text-main">25,000+</h1>
            <h2 className="text-lg mt-3 font-semibold text-text-1">
              Legal documents created
            </h2>
            <p className="text-base font-normal text-text-5 mt-2">
              Documents generated across wills, tenancy, business and more.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
            <h1 className="text-3xl font-bold text-main">12,300+</h1>
            <h2 className="text-lg mt-3 font-semibold text-text-1">
              Registered users
            </h2>
            <p className="text-base font-normal text-text-5 mt-2">
              Active accounts who've saved drafts or completed documents.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
            <h1 className="text-3xl font-bold text-main">4.8/5</h1>
            <h2 className="text-lg mt-3 font-semibold text-text-1">
              Average customer rating
            </h2>
            <p className="text-base font-normal text-text-5 mt-2">
              Based on user reviews for ease, accuracy and support.
            </p>
          </div>
        </div>
        <div className="lg:py-24 md:py-18 py-8 border-t border-black/16 max-md:-mt-9">
          <div className="max-w-[768px] w-full mx-auto">
            <p className="text-center md:text-base text-sm font-normal text-main mt-2">
              Pricing
            </p>
            <h1 className="text-center lg:text-[36px] md:text-2xl text-xl font-semibold text-text-1 mt-3">
              DocNet Subscription Plans
            </h1>
            <p className="text-center md:text-lg lg:text-xl text-base font-normal text-text-5 mt-2">
              Get instant access to every legal document you need — create,
              edit, sign, and download anytime.
            </p>
            <p className="text-center md:text-base text-sm font-normal text-text-5 mt-5">
              <span className="font-semibold">Note:</span> All prices include
              VAT Subscriptions renew automatically unless cancelled before
              renewal date.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto mt-12 px-4">
            {/* Single Document */}
            <div
              onClick={() => setTab1("single")}
              className={`border border-black/10 rounded-2xl cursor-pointer flex flex-col shadow ${tab1 === "single" ? "bg-[#ECF6FF] border-main" : ""}`}
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
              onClick={() => setTab1("monthly")}
              className={`border border-black/10 rounded-2xl flex flex-col shadow cursor-pointer ${tab1 === "monthly" ? "bg-[#ECF6FF] border-main" : ""}`}
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
                  Perfect if you need several documents or ongoing access.
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
              onClick={() => setTab1("annual")}
              className={`border border-black/10 rounded-2xl flex flex-col shadow cursor-pointer ${tab1 === "annual" ? "bg-[#ECF6FF] border-main" : ""}`}
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
        <div className="px-4 md:px-6 lg:px-8">
          <h1 className="text-text-1 text-xl md:text-2xl lg:text-[36px] font-semibold">
            Frequently asked questions
          </h1>
          <p className="text-text-5 text-sm md:text-base lg:text-xl mt-5">
            Find quick answers to common questions about creating, updating, and
            managing your legal documents with DocNet.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:mt-16 mt-8">
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
        <div className=" px-4 lg:my-24 md:my-16 my-12 ">
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
                Didn't find what you were looking for? Chat with our support
                team — we're here to help.
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
      <Footer />
    </>
  );
}

export default Page;
