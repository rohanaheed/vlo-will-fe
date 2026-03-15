"use client";
import React, { useState } from "react";
import BorderTick from "@/components/assets/images/CheckIcon1.svg";
import EditIconWhite from "@/components/assets/images/EditIconWhite.svg";
import DeleteIcon from "@/components/assets/images/DeleteIcon.svg";
import AddIcon from "@/components/assets/images/AddIcon.svg";
import CommonDropdown from "@/components/common/Commondropdown1";
import OverviewUsericon from "@/components/assets/images/OverviewUsericon.svg";
import OverviewDocumenticon from "@/components/assets/images/OverviewDocumenticon.svg";
import OverviewSupporticon from "@/components/assets/images/OverviewSupporticon.svg";
import ArrowUpGreen from "@/components/assets/images/ArrowUpGreen.svg";
import ArrowDownRed from "@/components/assets/images/ArrowDownRed.svg";
import RevenueIcon from "@/components/assets/images/RevenueIcon.svg";
import OverviewSubscriptionicon from "@/components/assets/images/OverviewSubscriptionicon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Page() {
  const [tab1, setTab1] = useState("annual");
  const router = useRouter();
  const back = () => {
    setSelectedUser("usermanagement");
  };
  const [selectedUser, setSelectedUser] = useState("usermanagement");
  const [isTab, setIsTab] = useState("AllUser");
  const yearOptions = [
    { value: "This Year", label: "This Year" },
    { value: "This Month", label: "This Month" },
  ];
  const [year, setYear] = useState("This Year");
  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex flex-col flex-1">
        {selectedUser === "usermanagement" && (
          <>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg md:text-xl font-bold">User Overview</h1>
              </div>
              <div>
                <CommonDropdown
                  options={yearOptions}
                  value={year}
                  onChange={setYear}
                  placeholder="Subscription Revenue"
                  dropdownClassName=""
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
              <div className="rounded-lg p-4 border border-black/16">
                <div className="inline-flex items-center gap-2 bg-main rounded-full p-2">
                  <div className="bg-main rounded-full p-2">
                    <Image
                      src={OverviewUsericon}
                      alt="media"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs font-semibold">Total Users</h3>
                  <h1 className="text-2xl font-semibold mt-1">5,420</h1>
                  <div className="inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1">
                    <Image
                      src={ArrowUpGreen}
                      alt="media"
                      width={16}
                      height={16}
                    />
                    <p className="text-xs text-[#83BF6E]">
                      12 <span className="text-black/50">This Month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-4 border border-black/16">
                <div className="inline-flex items-center gap-2 bg-[#9A7200] rounded-full p-2">
                  <div className="bg-[#B38B00] rounded-full p-2">
                    <Image
                      src={OverviewUsericon}
                      alt="media"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs font-semibold">Document Created</h3>
                  <h1 className="text-2xl font-semibold mt-1">3,145</h1>
                  <div className="inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1">
                    <Image
                      src={ArrowUpGreen}
                      alt="media"
                      width={16}
                      height={16}
                    />
                    <p className="text-xs text-[#83BF6E]">
                      12{" "}
                      <span className="text-black/50">Growth This Month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-4 border border-black/16">
                <div className="inline-flex items-center gap-2 bg-[#836CFF] rounded-full p-2">
                  <div className="bg-[#9285FF] rounded-full p-2">
                    <Image
                      src={OverviewSubscriptionicon}
                      alt="media"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs font-semibold">
                    Active Subscriptions
                  </h3>
                  <h1 className="text-2xl font-semibold mt-1">812</h1>
                  <div className="inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1">
                    <Image
                      src={ArrowUpGreen}
                      alt="media"
                      width={16}
                      height={16}
                    />
                    <p className="text-xs text-[#83BF6E]">
                      12{" "}
                      <span className="text-black/50"> Growth This Month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-6">
        <div className="flex max-sm:flex-col max-sm:items-start gap-2 items-center justify-between">
          <h1 className="text-lg md:text-xl font-bold">Subscriptions</h1>
          <button
            onClick={() => router.push("/subscription/add-subscription")}
            className="flex self-end items-center gap-2 bg-main hover:bg-main/85 cursor-pointer text-white px-4 py-2 rounded-lg font-semibold"
          >
            <Image src={AddIcon} alt="edit" width={20} height={20} />
            Add
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mt-4 md:mt-6">
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

            <div className="mt-8 flex gap-3 p-4 md:p-6 lg:p-8">
              <button
                onClick={() => router.push("#")}
                className="w-full bg-main hover:main/85 cursor-pointer text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src={EditIconWhite}
                    alt="edit"
                    width={24}
                    height={24}
                  />
                  Edit
                </div>
              </button>
              <button className="cursor-pointer min-w-12 h-12 flex items-center justify-center bg-white border border-black/10 text-text-1 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                <Image src={DeleteIcon} alt="edit" width={24} height={24} />
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

            <div className="mt-8 flex gap-3 p-4 md:p-6 lg:p-8">
              <button
                onClick={() => router.push("#")}
                className="w-full bg-main hover:main/85 cursor-pointer text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src={EditIconWhite}
                    alt="edit"
                    width={24}
                    height={24}
                  />
                  Edit
                </div>
              </button>
              <button className="cursor-pointer min-w-12 h-12 flex items-center justify-center bg-white border border-black/10 text-text-1 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                <Image src={DeleteIcon} alt="edit" width={24} height={24} />
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

            <div className="mt-8 flex gap-3 p-4 md:p-6 lg:p-8">
              <button
                onClick={() => router.push("#")}
                className="w-full bg-main hover:main/85 cursor-pointer text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src={EditIconWhite}
                    alt="edit"
                    width={24}
                    height={24}
                  />
                  Edit
                </div>
              </button>
              <button className="cursor-pointer min-w-12 h-12 flex items-center justify-center bg-white border border-black/10 text-text-1 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                <Image src={DeleteIcon} alt="edit" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
