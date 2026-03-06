"use client";
import React, { useState } from "react";
import Header from "../../components/common/UserHeader";
import Footer from "../../components/common/Footer";
import Image from "next/image";
import Commondropdown from "../../components/common/Commondropdown1";
import UkFlag from "@/components/assets/images/UkFlag.svg";
import USFlag from "@/components/assets/images/USFlag.svg";
import AUFlag from "@/components/assets/images/AUFlag.svg";
import CAFlag from "@/components/assets/images/CAFlag.svg";
import tickIcon from "@/components/assets/images/CheckIcon1.svg";
import BusinessSolutionImage1 from "@/components/assets/images/BusinessSolutionImage1.svg";
import BusinessSolutionImage2 from "@/components/assets/images/BusinessSolutionImage2.svg";
import Faq from "@/components/common/FAQ";
import faqIllustration from "@/components/assets/images/FAQ.svg";
import ChatIcon from "@/components/assets/images/ChatIcon.svg";
import ThunderIcon from "@/components/assets/images/ThunderIcon.svg";
import EmployeeIcon from "@/components/assets/images/EmployeeIcon.svg";
import ChatSmileIcon from "@/components/assets/images/ChatSmileIcon.svg";
import MattersIcon from "@/components/assets/images/MattersIcon.svg";
import ChatHeartIcon from "@/components/assets/images/ChatHeartIcon.svg";
import SarahImage from "@/components/assets/images/Sarah.svg";
function Page() {
  const countryCodes = [
    { label: "+44", value: "+44", icon: UkFlag },
    { label: "+1", value: "+1_US", icon: USFlag },
    { label: "+61", value: "+61", icon: AUFlag },
    { label: "+1", value: "+1_CA", icon: CAFlag },
  ];
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);

  return (
    <div>
      <Header />
      <main>
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-12 md:pb-20 bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side */}
              <div className="">
                <p className="text-main font-semibold mb-3">
                  LawNest Business Solutions for
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0B2C4F] mb-6">
                  Modern Companies
                </h1>
                <p className="text-text-5 text-lg md:text-xl">
                  Empowering start-ups, SMEs and enterprises with professional
                  legal documents — fast, affordable and UK-compliant.
                </p>
              </div>

              {/* Right Side: Form */}
              <div className="bg-[#FAFAFA] p-4 md:p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-text-1 mb-8">
                  Let’s Talk Partnership
                </h2>
                <form className="flex flex-col gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.5 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Organisation Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter organisation name"
                      className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.5 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="support@lawnest.co.uk"
                      className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.5 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-xl px-2 focus-within:border-main focus-within:ring-1 focus-within:ring-main transition-colors">
                      <Commondropdown
                        options={countryCodes}
                        value={selectedCode}
                        onChange={setSelectedCode}
                        className="border-none! w-fit gap-1! text-[#667085] shadow-none! whitespace-nowrap py-0! pr-0! px-1.5! bg-transparent!"
                        dropdownClassName="w-[100px]!"
                        imageClassName="!w-5 !h-5 rounded-full object-cover"
                      />
                      <input
                        type="tel"
                        className="flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-2 pr-2 text-base placeholder:text-gray-400"
                        placeholder="7890 123456"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      placeholder="Leave us a message..."
                      rows="4"
                      className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.5 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main resize-none transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="w-full cursor-pointer bg-[#0B2C4F] text-white font-semibold rounded-xl py-3 mt-2 hover:bg-[#0B2C4F]/90 transition-all"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Text Left, Image Right */}
        <div className="mx-auto bg-white pt-10 md:pt-20">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative min-[1001px]:order-last">
              <Image
                src={BusinessSolutionImage1}
                alt="Why Choose LawNest"
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] max-[1001px]:px-4 min-[1001px]:mr-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:py-14 min-[1001px]:pl-4">
              <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-6">
                Why Choose LawNest for Your Business
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-12">
                Running a business means dealing with contracts, HR forms,
                partnerships, compliance and more. At LawNest we simplify that
                legal load. Our library of expert-reviewed templates lets you
                generate, customise and download the exact legal documents your
                business needs — without expensive lawyer fees.
              </p>
              <h3 className="font-bold text-text-1 text-xl mb-6">
                Key benefits:
              </h3>
              <ul className="space-y-4">
                {[
                  "Ready-to-use templates for business, HR, property and IP.",
                  "Guided forms: complete by answering questions, download in minutes.",
                  "UK-law compliant and updated regularly.",
                  "Transparent pricing, no surprise costs.",
                  "Secure online access 24/7.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                      <Image
                        src={tickIcon}
                        alt="check"
                        width={12}
                        height={10}
                      />
                    </div>
                    <span className="text-base text-text-5 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Image Left, Text Right */}
        <div className="mx-auto bg-white pb-10 md:pb-20">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative">
              <Image
                src={BusinessSolutionImage2}
                alt="LawNest Stands Out"
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 max-[1000px]:py-14 min-[1001px]:pr-4">
              <div className="max-w-[500px]">
                <h2 className="text-2xl md:text-4xl text-left font-semibold text-text-1 mb-8">
                  Why LawNest Stands Out
                </h2>
                <ul className="space-y-6">
                  {[
                    {
                      bold: "Legal-reviewed:",
                      text: "Every template is crafted or reviewed by practising solicitors.",
                    },
                    {
                      bold: "UK-focused:",
                      text: "All documents are designed for UK law, with adaptation for Scotland/Northern Ireland where needed.",
                    },
                    {
                      bold: "Always current:",
                      text: "We monitor legislation and update templates so you stay compliant.",
                    },
                    {
                      bold: "Trusted by businesses:",
                      text: "Hundreds of start-ups and SMEs use LawNest to reduce legal risk and cost.",
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                        <Image
                          src={tickIcon}
                          alt="check"
                          width={12}
                          height={10}
                        />
                      </div>
                      <span className="text-base text-text-5 leading-relaxed">
                        <strong className="text-text-1 font-semibold">
                          {item.bold}
                        </strong>{" "}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] max-[1200px]:px-4 mx-auto pb-12 md:pb-18 lg:pb-24">
          <h2 className="text-2xl md:text-4xl font-semibold text-text-1 mb-6 md:mb-12 lg:mb-16">
            Tailored Solutions by Use-Case
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Business Formation & Structure",
                icon: ChatIcon,
                desc: "Start your company the right way — articles of association, shareholder agreements, founding resolutions.",
              },
              {
                title: "Contract Management & Services",
                icon: ThunderIcon,
                desc: "From service agreements to subcontractor contracts, keep your business relationships clear and protected.",
              },
              {
                title: "Employment & HR Documents",
                icon: EmployeeIcon,
                desc: "Create employment contracts, staff policies and procedures, disciplinary frameworks — all in one place.",
              },
              {
                title: "Intellectual Property & Licensing",
                icon: ChatSmileIcon,
                desc: "Protect your brand, inventions and digital assets with licensing, IP assignment and copyright templates.",
              },
              {
                title: "Risk & Compliance",
                icon: MattersIcon,
                desc: "Manage risk with data-protection policies, supplier contracts, continuity planning and more.",
              },
              {
                title: "Real Estate & Leasing for Businesses",
                icon: ChatHeartIcon,
                desc: "Lease agreements, property management and tenancy documents geared to commercial use",
              },
            ].map((cat, idx) => (
              <div key={idx} className="">
                <div className="w-12 h-12 border border-[#E9EAEB] rounded-lg flex items-center justify-center mb-5">
                  <Image
                    src={cat.icon}
                    alt={cat.title}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="font-semibold text-xl text-text-1 mb-2">
                  {cat.title}
                </h3>
                <p className="text-text-5 mb-5">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="max-w-[1200px] mx-auto py-12 md:py-18 lg:py-24 ">
          <div className="bg-[#FAFAFA] py-12 md:py-18 lg:py-24 px-6 md:px-14 lg:px-20">
            <div className="px-4">
              <div className="flex flex-col min-[900px]:flex-row gap-8 md:gap-14 items-center">
                <div className="shrink-0">
                  <Image
                    src={SarahImage}
                    alt="Sarah Lee"
                    width={328}
                    height={328}
                    className="rounded-2xl object-cover w-[250px] md:w-[329px] shadow-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FDB022"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="#FDB022"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-text-1 font-medium mb-8">
                    “LawNest saved us hundreds of hours and thousands in legal
                    fees when launching our partnership agreements. Their forms
                    were exactly what we needed.”
                  </p>
                  <div>
                    <p className="text-text-1 font-semibold text-lg mb-1">
                      — Sarah Lee
                    </p>
                    <p className="text-text-5 text-base">
                      Co-founder of TechStart Ltd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-16 lg:py-24">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-1 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-text-5 text-sm md:text-base">
              Find quick answers to common questions about creating, updating,
              and managing your legal documents with LawNest.
            </p>
          </div>
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2 gap-6 md:gap-12 items-start">
            <div className="relative h-[250px] sm:h-[400px] md:h-[500px] overflow-hidden min-[1001px]:order-last">
              <Image
                src={faqIllustration}
                alt="FAQ Illustration"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div>
              <Faq
                value={[
                  {
                    id: 1,
                    question: " Can I edit the templates after download?",
                    answer:
                      "Yes. Downloaded documents are fully editable (Word/ PDF).",
                  },
                  {
                    id: 2,
                    question: " Are templates legally valid in the UK?",
                    answer:
                      "Yes, they are designed for UK jurisdiction and regularly reviewed by UK-based legal experts.",
                  },
                  {
                    id: 3,
                    question: " What if I only need one document?",
                    answer:
                      "No problem — you can buy single-use document licences with no subscription required.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default Page;
