"use client";
import React from "react";
import { useState } from "react";
import search from "@/components/assets/images/SearchIconBlack.svg";
import Image from "next/image";
import doc from "@/components/assets/images/DocumentIconWhite.svg";
import document from "@/components/assets/images/DocumentIcon.svg";
import Editnotes from "@/components/assets/images/EditNotesIcon.svg";
import Signature from "@/components/assets/images/SignatureIcon.svg";
import Guide from "@/components/assets/images/GuideIcon.svg";
import Support from "@/components/assets/images/SupportIcon.svg";
import QualityCheck from "@/components/assets/images/QualityCheck.svg";
import Home from "@/components/assets/images/HomeIcon.svg";
import CreditCardnotes from "@/components/assets/images/CreditCardNotes.svg";
import Ticket from "@/components/assets/images/Tickect.svg";
import StarReview from "@/components/assets/images/StarReview.svg";
import FeedbackIcon from "@/components/assets/images/FeedbackIcon.svg";
import ShakeHandIcon from "@/components/assets/images/ShakeHandIcon.svg";
import GlobalUserIcon from "@/components/assets/images/GloabalUserIcon.svg";
function overview() {
  const [tab1, setTab1] = useState("document");
  const [tab2, setTab2] = useState("reviews");
  return (
    <div>
      <h1 className="text-text-1 text-xl font-semibold md:text-2xl lg:text-4xl">
        Member Benefits
      </h1>
      <p className="text-text-5 text-sm font-normal md:text-base lg:text-xl">
        Find all the legal documents you need in seconds.
      </p>
      <div className="mt-6 flex max-md:flex-col gap-4 md:gap-9 ">
        <div className=" border border-black/16 rounded-xl p-4 md:p-6">
          <div className="flex max-lg:flex-col lg:items-center gap-4">
            <h1 className="text-text-1 text-xl font-semibold max-[1040px]:text-2xl min-[1040px]:text-4xl">
              Features and Services
            </h1>
            <div className="relative w-full lg:max-w-[380px]">
              <input
                type="text"
                placeholder="Search"
                className="border border-black/16 rounded-lg p-2.75 w-full text-text-7"
              />
              <Image
                src={search}
                alt="search"
                width={24}
                height={24}
                className="absolute right-2.5 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-[#fafafa]">
              <div className="bg-main rounded-lg inline-flex items-center justify-center p-2.5">
                <Image
                  src={doc}
                  alt="doc"
                  width={24}
                  height={24}
                  className="min-w-6 min-h-6"
                />
              </div>

              <h1 className="text-text-1 mt-4 text-lg font-semibold md:text-xl">
                Extensive Document Library
              </h1>
              <p className="text-text-5 mt-2 text-sm font-normal">
                Access a wide range of professional, ready-to-use legal
                templates for personal and business needs.
              </p>
            </div>
            <div className="p-4 bg-[#fafafa]">
              <div className="bg-main rounded-lg inline-flex items-center justify-center p-2.5">
                <Image
                  src={Editnotes}
                  alt="doc"
                  width={24}
                  height={24}
                  className="min-w-6 min-h-6"
                />
              </div>

              <h1 className="text-text-1 mt-4 text-lg font-semibold md:text-xl">
                Unlimited Editing & Revisions
              </h1>
              <p className="text-text-5 mt-2 text-sm font-normal">
                Make changes anytime with full flexibility. Update your
                documents as your circumstances change.
              </p>
            </div>
            <div className="p-4 bg-[#fafafa]">
              <div className="bg-main rounded-lg inline-flex items-center justify-center p-2.5">
                <Image
                  src={Signature}
                  alt="doc"
                  width={24}
                  height={24}
                  className="min-w-6 min-h-6"
                />
              </div>

              <h1 className="text-text-1 mt-4 text-lg font-semibold md:text-xl">
                Fast, Secure eSignatures
              </h1>
              <p className="text-text-5 mt-2 text-sm font-normal">
                Sign documents electronically with ease, ensuring quick and
                secure transactions.
              </p>
            </div>
            <div className="p-4 bg-[#fafafa]">
              <div className="bg-main rounded-lg inline-flex items-center justify-center p-2.5">
                <Image
                  src={Guide}
                  alt="doc"
                  width={24}
                  height={24}
                  className="min-w-6 min-h-6"
                />
              </div>

              <h1 className="text-text-1 mt-4 text-lg font-semibold md:text-xl">
                Guides & Legal Resources
              </h1>
              <p className="text-text-5 mt-2 text-sm font-normal">
                Get step-by-step help and practical advice through our free
                articles and how-to guides.
              </p>
            </div>
            <div className="p-4 bg-[#fafafa]">
              <div className="bg-main rounded-lg inline-flex items-center justify-center p-2.5">
                <Image
                  src={Support}
                  alt="doc"
                  width={24}
                  height={24}
                  className="min-w-6 min-h-6"
                />
              </div>

              <h1 className="text-text-1 mt-4 text-lg font-semibold md:text-xl">
                Dedicated Support
              </h1>
              <p className="text-text-5 mt-2 text-sm font-normal">
                Reach our friendly support team by live chat or phone whenever
                you need help.
              </p>
            </div>
            <div className="p-4 bg-[#fafafa]">
              <div className="bg-main rounded-lg inline-flex items-center justify-center p-2.5">
                <Image
                  src={QualityCheck}
                  alt="doc"
                  width={24}
                  height={24}
                  className="min-w-6 min-h-6"
                />
              </div>

              <h1 className="text-text-1 mt-4 text-lg font-semibold md:text-xl">
                DocNet Quality Guarantee
              </h1>
              <p className="text-text-5 mt-2 text-sm font-normal">
                Every document is reviewed and approved by legal professionals
                to ensure accuracy and compliance.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-black/16 rounded-xl p-3 md:p-6 min-w-[350px]">
            <h1 className="text-text-5 text-lg md:text-xl font-semibold">
              Quick Links
            </h1>
            <div
              onClick={() => setTab1("home")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] hover:font-semibold hover:text-main transition-all duration-200 text-sm mt-6 p-3 flex gap-3 items-center ${tab1 === "home" ? "text-main font-semibold bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={Home}
                alt="home"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <p>Home</p>
            </div>
            <div
              onClick={() => setTab1("document")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] hover:text-main hover:font-semibold transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab1 === "document" ? "text-main font-semibold bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={document}
                alt="document"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <p>My Documents</p>
            </div>
            <div
              onClick={() => setTab1("billing")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] hover:text-main hover:font-semibold transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab1 === "billing" ? "text-main font-semibold bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={CreditCardnotes}
                alt="billing"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <p>Billing History</p>
            </div>
            <div
              onClick={() => setTab1("ticket")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] hover:text-main hover:font-semibold transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab1 === "ticket" ? "text-main font-semibold bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={Ticket}
                alt="ticket"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <p>Tickets</p>
            </div>
          </div>
          <div className="border border-black/16 rounded-xl p-3 md:p-6 md:mt-9 mt-4">
            <h1 className="text-text-5 text-lg md:text-xl font-semibold">
              Need Something Else?
            </h1>
            <p className="text-text-5 font-normal">
              Explore more tools and resources tailored to your needs.
            </p>
            <div
              onClick={() => setTab2("reviews")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] transition-all duration-200 text-sm mt-6 p-3 flex gap-3 items-center ${tab2 === "reviews" ? "bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={StarReview}
                alt="home"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <div>
                <h1 className="text-text-1 font-medium">Customer Reviews</h1>
                <p className="text-black/50 text-sm">
                  See what others are saying about their DocNet experience.
                </p>
              </div>
            </div>
            <div
              onClick={() => setTab2("feedback")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab2 === "feedback" ? "bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={FeedbackIcon}
                alt="home"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <div>
                <h1 className="text-text-1 font-medium">Share Feedback</h1>
                <p className="text-black/50 text-sm">
                  Tell us what you think — your input helps us improve.
                </p>
              </div>
            </div>
            <div
              onClick={() => setTab2("business")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab2 === "business" ? "bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={ShakeHandIcon}
                alt="home"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <div>
                <h1 className="text-text-1 font-medium">Business Solutions</h1>
                <p className="text-black/50 text-sm">
                  Discover DocNet for teams, firms, and organisations.
                </p>
              </div>
            </div>
            <div
              onClick={() => setTab2("Affiliate")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab2 === "Affiliate" ? "bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={GlobalUserIcon}
                alt="home"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <div>
                <h1 className="text-text-1 font-medium">Affiliate Programme</h1>
                <p className="text-black/50 text-sm">
                  Partner with us and eam by promoting DocNet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default overview;
