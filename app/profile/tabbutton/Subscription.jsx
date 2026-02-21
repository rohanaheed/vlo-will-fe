"use client";
import React from "react";
import BorderTick from "@/components/assets/images/BorderTick.svg";
import Image from "next/image";
import { useState } from "react";
function subscription() {
  const [tab1, setTab1] = useState("annual");
  return (
    <div>
      <div className="border-t max-md:-mt-9">
        <div className="max-w-[768px] w-full mx-auto">
          <p className="text-center md:text-base text-sm font-normal text-main mt-2">
            Pricing
          </p>
          <h1 className="text-center lg:text-[36px] md:text-2xl text-xl font-semibold text-text-1 mt-3">
            DocNet Subscription Plans
          </h1>
          <p className="text-center md:text-lg lg:text-xl text-base font-normal text-text-5 mt-2">
            Get instant access to every legal document you need — create, edit,
            sign, and download anytime.
          </p>
          <p className="text-center md:text-base text-sm font-normal text-text-5 mt-5">
            <span className="font-semibold">Note:</span> All prices include VAT
            Subscriptions renew automatically unless cancelled before renewal
            date.
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
    </div>
  );
}

export default subscription;
