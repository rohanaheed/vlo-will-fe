"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Header from "@/components/common/Header";
import Commondropdown from "@/components/common/Commondropdown";
import CommonTable from "@/components/common/CommonTable";
import CustomDateRangePicker from "@/components/common/CustomDateRangePicker";

// Icons
import OverviewDocumenticon from "@/components/assets/images/OverviewDocumenticon.svg";
import HumbleIconsAi from "@/components/assets/images/HumbleIconsAi.svg";
import TableEyeIcon from "@/components/assets/images/TableEyeIcon.svg";
import TableEditIccon from "@/components/assets/images/TableEditIccon.svg";
import DeleteIcon from "@/components/assets/images/DeleteIcon.svg";
import SearchIconGray from "@/components/assets/images/SearchIconGray.svg";
import searchIcon from "@/components/assets/images/SearchIconBlack.svg";
import calenderIcon from "@/components/assets/images/CalendarIcon.svg";
import copyIcon from "@/components/assets/images/CopyIcon.svg";
import CustomizeIcon from "@/components/assets/images/CustomizeIcon.svg";
import Personal from "./personal/page";
import Corporate from "./corporate/page";

const DocumentManagement = () => {
  const [isTab, setIsTab] = useState("Personal");
  const [netrevenuebutton, setNetrevenuebutton] = useState("Yearly");

  return (
    <div className="mt-16 md:mt-22 pb-6 text-black min-h-screen">
      <Header title="Document Management" />
      <main className="lg:max-w-[calc-(100%-300px)] lg:ml-80.5 m-3 mb-0 md:m-6 md:mb-0 bg-white p-3 md:p-6 rounded-md border border-[#E6E6E6]">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Documents
          </h1>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-main hover:bg-main/85 cursor-pointer text-white px-4 py-2.5 rounded-lg font-semibold text-sm">
              <Image src={HumbleIconsAi} alt="AI" width={18} height={18} />
              Make any form with AI
            </button>
            <button className="flex items-center gap-2 bg-main hover:bg-main/85 cursor-pointer text-white px-4 py-2.5 rounded-lg font-semibold text-sm">
              <span className="text-xl leading-none">+</span>
              Create New
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border gap-4 border-black/16 rounded-lg p-4 lg:grid-cols-3 mb-6 overflow-x-auto scrollbar-thin">
          <div className="bg-white flex items-center gap-4">
            <div className="p-1.5 bg-[#3CDE65] border-8 border-[#34C759] rounded-full">
              <Image
                src={OverviewDocumenticon}
                alt="Active"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500">
                Total Active Document
              </p>
              <h2 className="text-3xl font-bold text-gray-800">3,145</h2>
            </div>
          </div>
          <div className="bg-white flex items-center gap-4">
            <div className="p-1.5 bg-[#ACACAC] border-8 border-[#A0A0A0] rounded-full">
              <Image
                src={OverviewDocumenticon}
                alt="Inactive"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500">
                Total Inactive Document
              </p>
              <h2 className="text-3xl font-bold text-gray-800">3,145</h2>
            </div>
          </div>
          <div className=" flex items-center">
            <div className="flex items-center w-fit border border-[#D5D7DA] rounded-[11px] whitespace-nowrap">
              <button
                onClick={() => setNetrevenuebutton("Yearly")}
                className={`${netrevenuebutton === "Yearly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-text-7 border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
              >
                Yearly
              </button>
              <button
                onClick={() => setNetrevenuebutton("Quarterly")}
                className={`${netrevenuebutton === "Quarterly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-text-7 border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
              >
                Quarterly
              </button>
              <button
                onClick={() => setNetrevenuebutton("Monthly")}
                className={`${netrevenuebutton === "Monthly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-text-7 border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
              >
                Monthly
              </button>
              <button
                onClick={() => setNetrevenuebutton("Weekly")}
                className={`${netrevenuebutton === "Weekly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-text-7 border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
              >
                Weekly
              </button>
              <button
                onClick={() => setNetrevenuebutton("24 hours")}
                className={`${netrevenuebutton === "24 hours" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-text-7 border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
              >
                24 hours
              </button>
            </div>
          </div>
        </div>

        <div className=" overflow-hidden">
          <div className="flex bg-[#fafafa] border border-black/16 rounded-xl p-1">
            <button
              onClick={() => setIsTab("Personal")}
              className={`flex-1 py-2.5 cursor-pointer rounded-lg font-semibold text-base transition-all ${isTab === "Personal" ? "bg-main text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              Personal
            </button>
            <button
              onClick={() => setIsTab("Corporate")}
              className={`flex-1 py-2.5 cursor-pointer rounded-lg font-semibold text-base transition-all ${isTab === "Corporate" ? "bg-main text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              Corporate
            </button>
          </div>
          {isTab === "Personal" && <Personal />}
          {isTab === "Corporate" && <Corporate />}
        </div>
      </main>
    </div>
  );
};

export default DocumentManagement;
