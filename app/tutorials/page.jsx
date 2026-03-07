"use client";
import React, { useState } from "react";
import Header from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import video from "@/components/assets/images/video.svg";
import PlayButton from "@/components/assets/images/PlayButton.svg";
import VideoArrow from "@/components/assets/images/VideoArrow.svg";
import searchIcon from "@/components/assets/images/SearchIconWhite.svg";
import PlayButton1 from "@/components/assets/images/PlayButton1.svg";
import tutorialimage1 from "@/components/assets/images/tutorialimage1.svg";
import tutorialimage from "@/components/assets/images/tutorialimage.svg";
import tutorialimage2 from "@/components/assets/images/tutorialimage2.svg";
import tick from "@/components/assets/images/CheckIcon1.svg";
import ArrowBack from "@/components/assets/images/ArrowBack.svg";
import Commondropdown from "../../components/common/Commondropdown1";
import UkFlag from "@/components/assets/images/UkFlag.svg";
import USFlag from "@/components/assets/images/USFlag.svg";
import AUFlag from "@/components/assets/images/AUFlag.svg";
import CAFlag from "@/components/assets/images/CAFlag.svg";
import Slider1 from "@/components/common/Slider1";
import Faq from "@/components/common/FAQ";
import faqIllustration from "@/components/assets/images/FAQ.svg";
import eventimage9 from "@/components/assets/images/eventimage9.svg";
import eventimage10 from "@/components/assets/images/eventimage10.svg";
import eventimage11 from "@/components/assets/images/eventimage11.svg";
import eventimage12 from "@/components/assets/images/eventimage12.svg";
const countryCodes = [
  { label: "+44", value: "+44", icon: UkFlag },
  { label: "+1", value: "+1_US", icon: USFlag },
  { label: "+61", value: "+61", icon: AUFlag },
  { label: "+1", value: "+1_CA", icon: CAFlag },
];
const page = () => {
  const [value, setValue] = useState("");
  const [button, setButton] = useState("property");
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);

  return (
    <div>
      <Header />
      <main>
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-20 md:pt-30 pb-18 md:pb-24 bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto  max-lg:flex flex-col-reverse lg:grid grid-cols-[1fr_560px] gap-10">
            <div className="flex flex-col justify-center">
              <p className="text-main font-semibold mb-6">LawNest Tutorials</p>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-main">
                Explore Tutorials by Category
              </h1>
              <p className="text-sm md:text-base lg:text-xl font-normal text-text-5 mt-6">
                Learn how to create, edit, and manage your legal documents step
                by step — with easy video guides and written tutorials.
              </p>
              <div className="flex md:flex-row flex-col items-center gap-2 w-full mt-12">
                <input
                  type="text"
                  placeholder="Search Tutorials"
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
                  <p className="font-semibold">Browses</p>
                </button>
              </div>
              <div className="flex items-center flex-wrap gap-2 mt-3">
                <button
                  onClick={() => setButton("property")}
                  className={`rounded-lg p-2.75 max-md:w-full border hover:border-main focus:border-main transition-all duration-300 cursor-pointer ${button === "property" ? "bg-[#ECF6FF] text-main border-main" : "border-black/16 hover:bg-[#ECF6FF] bg-white hover:text-main text-text-7"}`}
                >
                  Wills & Estate Planning
                </button>
                <button
                  onClick={() => setButton("business")}
                  className={`rounded-lg p-2.75 max-md:w-full border hover:border-main focus:border-main transition-all duration-300 cursor-pointer ${button === "business" ? "bg-[#ECF6FF] text-main border-main" : "border-black/16 hover:bg-[#ECF6FF] bg-white hover:text-main text-text-7"}`}
                >
                  Business & Corporate
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
                  Property & Tenancy
                </button>
                <button
                  onClick={() => setButton("legal")}
                  className={`rounded-lg p-2.75 max-md:w-full border hover:border-main focus:border-main transition-all duration-300 cursor-pointer ${button === "legal" ? "bg-[#ECF6FF] text-main border-main" : "border-black/16 hover:bg-[#ECF6FF] bg-white hover:text-main text-text-7"}`}
                >
                  Finance & Transactions
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 md:mt-16 max-w-[1200px] mx-auto max-[1200px]:px-4">
          <div className="max-md:order-2">
            <p className="text-main font-semibold mb-3">Introduction</p>
            <h2 className="text-2xl md:text-4xl font-semibold text-text-1 mb-12">
              Master LawNest in Minutes
            </h2>
            <p className="text-text-5 text-base md:text-lg">
              Whether you're creating your first Will, setting up a business, or
              managing contracts, our tutorials walk you through every step.
              Learn at your own pace with short, practical lessons designed for
              individuals, entrepreneurs, and legal professionals.
            </p>
          </div>
          <div className="max-md:order-1 max-md:max-h-[300px]">
            <Image
              src={tutorialimage}
              alt="Master LawNest in Minutes"
              className="w-full h-auto max-md:max-h-[300px]"
            />
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto max-[1200px]:px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-text-1 mb-10 mt-10 md:mt-16">
            Featured Guides & Video Tutorials
          </h2>

          {/* Featured Tutorial */}
          <div className="flex flex-col group cursor-pointer mb-16">
            <div className="relative w-full h-[300px] md:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden mb-6 bg-gray-100">
              <Image
                src={tutorialimage1}
                alt="Featured Video"
                className="object-cover transition-transform duration-300 scale-110"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={PlayButton}
                  alt="PlayButton"
                  width={128}
                  height={128}
                  className="md:w-24 md:h-24 w-12 h-12"
                />
              </div>
            </div>
            <p className="text-main text-sm font-semibold mb-3">
              Olivia Rhye • 18 November 2025
            </p>
            <div className="flex justify-between items-start gap-4 mb-3">
              <h3 className="text-2xl md:text-3xl font-semibold text-text-1">
                How to Create a Will Online
              </h3>
            </div>
            <p className="text-text-5 text-lg mb-6 max-w-3xl">
              Learn how to complete your Will on LawNest, choose executors, and
              add beneficiaries with ease.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 text-sm font-semibold px-2.5 py-0.5 rounded-full text-main">
                <Image src={PlayButton1} alt="Play" className="w-4 h-4" /> Watch
                Tutorial
              </span>
              <span className="flex items-center gap-1.5 text-sm font-medium px-2.5 py-0.5 rounded-full text-main bg-[#ECF6FF] border border-[#587C9F]">
                3 minutes
              </span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                id: 1,
                author: "Virtual Workshop • 20 November 2025",
                title: "Editing and Downloading Your Document",
                excerpt:
                  "A quick guide on customising, saving, and printing your completed documents from your dashboard.",
                tag1: "Watch Tutorial",
                tag2: "3 minutes",
              },
              {
                id: 2,
                author: "Online Webinar • 12 December 2025",
                title: "Creating a Business Agreement",
                excerpt:
                  "Step-by-step tutorial on generating professional business contracts with LawNest smart templates.",
                tag1: "Watch video",
                tag2: "7 minutes",
              },
              {
                id: 3,
                author: "Expert Talk • 9 January 2026",
                title: "Using eSignatures in LawNest",
                excerpt:
                  "Learn how to securely sign and share your legal documents digitally.",
                tag1: "Watch video",
                tag2: "4 minutes",
              },
              {
                id: 4,
                author: "Virtual Workshop • 20 November 2025",
                title: "Editing and Downloading Your Document",
                excerpt:
                  "A quick guide on customising, saving, and printing your completed documents from your dashboard.",
                tag1: "Watch Tutorial",
                tag2: "3 minutes",
              },
              {
                id: 5,
                author: "Online Webinar • 12 December 2025",
                title: "Creating a Business Agreement",
                excerpt:
                  "Step-by-step tutorial on generating professional business contracts with LawNest smart templates.",
                tag1: "Watch video",
                tag2: "7 minutes",
              },
              {
                id: 6,
                author: "Expert Talk • 9 January 2026",
                title: "Using eSignatures in LawNest",
                excerpt:
                  "Learn how to securely sign and share your legal documents digitally.",
                tag1: "Watch video",
                tag2: "4 minutes",
              },
            ].map((post) => (
              <div key={post.id} className="flex flex-col group cursor-pointer">
                <div className="relative w-full h-[240px] rounded-xl overflow-hidden mb-5 bg-gray-100">
                  <Image
                    src={tutorialimage1}
                    alt={post.title}
                    className="object-cover transition-transform duration-300 scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src={PlayButton}
                      alt="PlayButton"
                      width={128}
                      height={128}
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-1 pb-4">
                  <p className="text-main text-sm font-semibold mb-2">
                    {post.author}
                  </p>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-text-1">
                      {post.title}
                    </h3>
                  </div>
                  <p className="text-text-5 text-base">{post.excerpt}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="flex items-center gap-1.5 text-sm font-semibold px-2.5 py-0.5 rounded-full text-main">
                    <Image src={PlayButton1} alt="Play" className="w-5 h-5" />{" "}
                    {post.tag1}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-medium px-2.5 py-0.5 rounded-full text-main bg-[#ECF6FF] border border-[#587C9F]">
                    {post.tag2}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button className="flex max-md:w-full max-md:justify-center text-sm font-medium cursor-pointer gap-1 px-3 py-1.75 border border-black/16 rounded-lg text-text-2 hover:bg-gray-50 transition-colors">
              <Image src={ArrowBack} alt="Previous" className="w-5 h-5" />
              Previous
            </button>

            <div className="flex items-center justify-between gap-px md:max-w-[292px] w-full text-sm font-medium text-text-2 overflow-auto">
              <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg bg-[#FAFAFA] text-text-1">
                1
              </button>
              <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg hover:bg-[#FAFAFA] transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg hover:bg-[#FAFAFA] transition-colors">
                3
              </button>
              <span className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center">
                ...
              </span>
              <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg hover:bg-[#FAFAFA] transition-colors">
                8
              </button>
              <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg hover:bg-[#FAFAFA] transition-colors">
                9
              </button>
              <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg hover:bg-[#FAFAFA] transition-colors">
                10
              </button>
            </div>

            <button className="flex items-center justify-center max-md:w-full cursor-pointer gap-1 px-3 py-1.75 border border-black/16 rounded-lg text-sm font-semibold text-text-4 hover:bg-[#FAFAFA] transition-colors">
              Next
              <Image
                src={ArrowBack}
                alt="Next"
                className="w-5 h-5 rotate-180"
              />
            </button>
          </div>
        </div>

        {/* Step-by-Step Guides Section */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative min-[1001px]:order-last">
              <Image
                src={tutorialimage2}
                alt="Step-by-Step Guides"
                fill
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:mx-auto max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] max-[1001px]:px-4 min-[1001px]:mr-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:py-14 min-[1001px]:pl-4">
              <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-6">
                Step-by-Step Guides
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                Every tutorial includes screenshots, instructions, and tips from
                our legal team so you can create accurate, compliant documents
                with confidence.
              </p>
              <h3 className="font-semibold text-text-1 text-xl md:text-3xl mb-6">
                Example Topics:
              </h3>
              <ul className="space-y-4 pl-4">
                {[
                  "Adding your personal details correctly",
                  "Choosing the right document type",
                  "Reviewing and editing your draft",
                  "Saving and sharing your final version",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                      <Image src={tick} alt="check" width={12} height={10} />
                    </div>
                    <span className="text-base md:text-lg text-text-5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-16 lg:py-24">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-1 mb-5">
              Frequently asked questions
            </h2>
            <p className="text-text-5 text-lg md:text-xl">
              Find quick answers to common questions about creating, updating,
              and managing your legal documents with LawNest.
            </p>
          </div>
          <div className="flex flex-col min-[1001px]:flex-row gap-6 md:gap-12 items-center">
            <div className="flex-1 w-full pt-4 flex flex-col justify-center ">
              <Faq
                value={[
                  {
                    id: 1,
                    question: "Are the tutorials free to access?",
                    answer: "Yes, all tutorials are free for registered users.",
                  },
                  {
                    id: 2,
                    question: "Do I need prior legal knowledge?",
                    answer:
                      "No. Each tutorial is written in plain English and easy to follow.",
                  },
                  {
                    id: 3,
                    question: "Can I request a new tutorial?",
                    answer:
                      "Absolutely. Use the feedback form at the bottom of this page to suggest topics.",
                  },
                ]}
              />
            </div>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden min-[1001px]:w-[450px] shrink-0">
              <Image
                src={faqIllustration}
                alt="FAQ Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-18 lg:py-24">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-text-1 mb-5">
              Want More Tutorials?
            </h2>
            <p className="text-text-5 text-lg md:text-xl mb-8 md:mb-16">
              Tell us what you’d like to learn next. We’re always adding new
              guides to help you get the most out of LawNest.
            </p>
          </div>
          <div className="grid grid-cols-1 min-[1000px]:grid-cols-2 gap-4">
            {/* Left Column: Form */}
            <div className="lg:pr-4">
              <form className="flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-4 mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-4 mb-1.5">
                    What type of feedback are you sharing? *
                  </label>
                  <input
                    type="text"
                    placeholder="General Feedback / Document Quality / Support Experience / Website Us..."
                    className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-4 mb-1.5">
                    Service *
                  </label>
                  <input
                    type="text"
                    placeholder="Select Service"
                    className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-4 mb-1.5">
                    Reference / Invoice No *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Reference / Invoice No"
                    className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-4 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="support@lawnest.co.uk"
                    className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-4 mb-1.5">
                    Phone number
                  </label>
                  <div className="flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-xl px-2 focus-within:border-black">
                    <Commondropdown
                      options={countryCodes}
                      value={selectedCode}
                      onChange={setSelectedCode}
                      className="border-none! w-fit gap-1! text-[#667085] shadow-none! whitespace-nowrap py-0! pr-0! px-1.5! bg-transparent!"
                      dropdownClassName="w-[100px]!"
                      imageClassName="!w-4 !h-4"
                    />
                    <input
                      type="tel"
                      className="flex-1 w-full bg-white text-black border-none outline-none py-2.5 pl-1 pr-2 text-base placeholder:text-gray-400"
                      placeholder="7890 123456"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-4 mb-1.5">
                    Your Review *
                  </label>
                  <textarea
                    placeholder="Leave us a message..."
                    rows="4"
                    className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col items-center mb-3">
                  <h3 className="text-2xl md:text-4xl font-semibold text-text-1 mb-6">
                    Star Rating (1—5)
                  </h3>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-8 h-8 cursor-pointer transition-transform"
                        viewBox="0 0 24 24"
                        fill={star === 1 ? "#FDB022" : "none"}
                        stroke={star === 1 ? "#FDB022" : "#D1D5DB"}
                        strokeWidth="1.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-1.81.688l1.15 5.423c.125.591-.564 1.054-1.077.747l-4.708-2.822a.562.562 0 00-.584 0l-4.708 2.822c-.513.307-1.202-.156-1.077-.747l1.15-5.423a.563.563 0 00-.181-.688l-4.204-3.602c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full cursor-pointer bg-main text-white font-semibold rounded-lg py-3 hover:bg-main/85 transition-all"
                >
                  Submit Review
                </button>
              </form>
            </div>

            {/* Right Column: Stats Image Panel */}
            <div className="bg md:h-auto relative overflow-hidden md:min-h-[800px]">
              {/* Background subtle overlay */}
              <div className="absolute inset-0 bg-black/5" />
              <div className="relative z-10 px-6 py-6 min-[1000px]:p-16 flex flex-col gap-8 h-full justify-center">
                <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-xl px-6 py-9 text-center shadow-sm">
                  <h1 className="text-3xl md:text-6xl font-bold text-main mb-2">
                    25,000+
                  </h1>
                  <h2 className="text-lg font-semibold text-text-1 mb-3">
                    Legal documents created
                  </h2>
                  <p className="font-normal text-text-5">
                    Documents generated across wills, tenancy, business and
                    more.
                  </p>
                </div>

                <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-xl px-6 py-9 text-center shadow-sm">
                  <h1 className="text-3xl md:text-6xl font-bold text-main mb-3">
                    12,300+
                  </h1>
                  <h2 className="text-lg font-semibold text-text-1 mb-2">
                    Registered users
                  </h2>
                  <p className="font-normal text-text-5">
                    Active accounts who've saved drafts or completed documents.
                  </p>
                </div>

                <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-xl px-6 py-9 text-center shadow-sm">
                  <h1 className="text-3xl md:text-6xl font-bold text-main mb-2">
                    4.8/5
                  </h1>
                  <h2 className="text-lg font-semibold text-text-1 mb-3">
                    Average customer rating
                  </h2>
                  <p className="font-normal text-text-5">
                    Based on user reviews for ease, accuracy and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
