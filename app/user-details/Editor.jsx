"use client";
import React, { useState } from "react";
import Refresh from "@/components/assets/images/RefreshIcon.svg";
import Image from "next/image";
import Commondropdown from "@/components/common/Commondropdown1.jsx";
import PlusBlueIcon from "@/components/assets/images/PlusBlueIcon.svg";
import CrossRedIcon from "@/components/assets/images/CrossRedIcon.svg";
import PrintIcon from "@/components/assets/images/PrintIcon.svg";
import DownloadIconBlue from "@/components/assets/images/DownloadIconBlue.svg";
import ShareIconBlue from "@/components/assets/images/ShareIconBlue.svg";
import EditIconBlue from "@/components/assets/images/CrossWhiteIcon.svg";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import ArrowBack from "@/components/assets/images/ArrowBack.svg";
import CopyIcon2 from "@/components/assets/images/CopyIcon2.svg";
import AlignLeft from "@/components/assets/images/AlignLeft.svg";
import SaveIcon from "@/components/assets/images/SaveIcon.svg";
import StampPage from "@/components/assets/images/Stamppage.svg";
import SearchIcon from "@/components/assets/images/SearchIconGray2.svg";
import CheveronDownGray from "@/components/assets/images/CheveronDownGray.svg";
import FillArrowLeftIcon from "@/components/assets/images/FillArrowLeftIcon.svg";
import Notes from "../../components/common/Notes";

const sidebarFields = [
  {
    title: "Personal Information",
    items: [
      "First Name",
      "Middle Name",
      "Last Name",
      "Full Legal Name",
      "Known Alias",
      "Suffix",
      "Title",
      "Date of Birth",
      "Gender",
      "Marital Status",
      "Nationality",
      "Occupation",
      "National Insurance Number",
      "Passport Number",
      "Document Upload",
      "Language Preference",
      "Preferred Pronouns",
    ],
  },
  {
    title: "Contact Information",
    items: [
      "Email Address",
      "Phone Number",
      "Mobile Number",
      "Alternate Phone",
      "Preferred Contact Method",
      "Address (in line)",
      "Mailing Address",
      "Emergency Contact Name",
      "Emergency Contact Number",
    ],
  },
  {
    title: "Company / Corporate Details",
    items: [
      "Company Name",
      "Trading Name",
      "Company Registration Number",
      "Business Type (LLC, Ltd, Partnership, etc.)",
      "Registered Business Address",
      "Trading Address",
      "Company Website",
      "Representative Name",
      "Position in Company",
      "Contact Email",
      "Contact Phone Number",
    ],
  },
  {
    title: "Matter Details",
    items: [
      "Matter Name",
      "Category",
      "Sub-Category",
      "Matter Description",
      "Date Matter Opened",
      "Matter Status",
      "Priority Level",
      "Caseworker",
      "Supervisor",
      "How Did You Hear About Us?",
      "Matter Reference Number",
      "Client Instructions",
      "Advice Given",
      "Chances of Success",
      "Agreed Plan of Action",
      "Weakness of Case",
      "Additional Information",
      "Key Dates",
    ],
  },
  {
    title: "Family / Dependents",
    items: [
      "Spouse/Partner Name",
      "Marriage Date",
      "Divorce Date",
      "Number of Children",
      "Children",
    ],
  },
  {
    title: "System and Workflow Fields",
    items: [
      "Assignee",
      "Reminder",
      "Notes",
      "Matter Participant",
      "Tags",
      "Status",
      "Workflow Stage / Milestone",
      "File Review",
    ],
  },
  {
    title: "Digital Inputs / Form Types",
    items: [
      "Single Line Text",
      "Multi Line Text (Paragraph)",
      "Drop Down",
      "Multi Select Dropdown",
      "Radio Buttons",
      "Checkboxes",
      "Date",
      "Date & Time",
      "Boolean",
      "Document Upload",
      "Number (Integer)",
      "Decimal",
      "Currency",
      "Rating (Stars, Score)",
      "Section Headers",
      "Hidden Fields",
      "Conditional Fields",
      "Repeatable Sections",
      "Logic-based Visibility",
      "Button",
    ],
  },
];

function Review({ onEditor, onShare }) {
  const [isActive, setIsActive] = useState("create");
  const [isTab, setIsTab] = useState("copy");
  const [page, setPage] = useState(1);
  const [isTab2, setIsTab2] = useState("Custom");
  const [openSection, setOpenSection] = useState(0);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? -1 : index);
  };
  return (
    <div className="h-screen">
      <div className="max-w-[1200px] mx-auto">
        <UserHeader />
      </div>
      <div className="min-h-[calc(100vh-64px)]">
        <div className=" bg-[url('@/components/assets/images/Background.svg')] bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto p-4 pt-20 md:pt-30 pb-5 md:pb-10">
            <div className="bg-[#FAFAFA] rounded-lg p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap w-full mb-5">
                <h2 className="lg:text-4xl text-2xl font-bold text-text-1">
                  Editor-Will
                </h2>
                <button className="text-black flex text-xs items-center gap-1 cursor-pointer">
                  Auto Saved
                  <Image
                    src={Refresh}
                    alt="Refresh"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </button>
              </div>

              <div className="">
                <p className="text-text-5 md:text-xl text-base">
                  Let the client verify all information before generating the
                  Will.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row items-center flex-wrap whitespace-nowrap gap-2 mt-4">
                  <button
                    onClick={() => setIsActive("print")}
                    className={`${isActive === "print" ? "bg-main text-white border-main" : "text-main border-main hover:bg-main hover:text-white"} group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-full md:shrink md:grow md:basis-[150px]`}
                  >
                    <Image
                      src={PrintIcon}
                      alt="Print"
                      width={20}
                      height={20}
                      className={`${isActive === "print" ? "invert brightness-0" : "group-hover:invert group-hover:brightness-0"}`}
                    />
                    <span className="">Print</span>
                  </button>

                  <button
                    onClick={() => setIsActive("download")}
                    className={`${isActive === "download" ? "bg-main text-white border-main" : "text-main border-main hover:bg-main hover:text-white"} group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-full md:shrink md:grow md:basis-[150px]`}
                  >
                    <Image
                      src={DownloadIconBlue}
                      alt="Download"
                      width={20}
                      height={20}
                      className={`${isActive === "download" ? "invert brightness-0" : "group-hover:invert group-hover:brightness-0"}`}
                    />
                    <span className="">Download Pdf</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsActive("share");
                      onShare();
                    }}
                    className={`${isActive === "share" ? "bg-main text-white border-main" : "text-main border-main hover:bg-main hover:text-white"} group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-full md:shrink md:grow md:basis-[180px]`}
                  >
                    <Image
                      src={ShareIconBlue}
                      alt="Share"
                      width={20}
                      height={20}
                      className={`${isActive === "share" ? "invert brightness-0" : "group-hover:invert group-hover:brightness-0"}`}
                    />
                    <span>Share</span>
                  </button>
                  <button
                    onClick={() => {
                      onEditor();
                    }}
                    className="bg-main text-white border-main group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-[290px] md:shrink md:grow md:basis-[150px]"
                  >
                    <Image
                      src={EditIconBlue}
                      alt="Edit"
                      width={20}
                      height={20}
                    />
                    <span className="">Exit Editor</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:py-24 md:py-16 py-8 w-full">
          <div className="flex gap-6 px-4 overflow-x-auto w-full">
            <div className="bg-[#fafafa] min-w-[250px] w-[250px] shrink-0 border-2 border-black/16 rounded-xl p-2">
              <div className="flex items-center gap-2 min-w-[250px]">
                <Image
                  src={ArrowBack}
                  alt="ArrowBack"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <h1 className="text-xs font-bold text-black">Pages</h1>
              </div>
              <div className="flex items-center gap-2 mt-2 border border-black/16 rounded-xl p-1">
                <div
                  onClick={() => setIsTab("copy")}
                  className={`flex group justify-center hover:bg-main transition-all duration-300 items-center gap-2 w-full p-2 rounded-lg cursor-pointer ${isTab === "copy" ? "bg-main" : ""}`}
                >
                  <Image
                    src={CopyIcon2}
                    alt="CopyIcon2"
                    width={24}
                    height={24}
                    className={`cursor-pointer w-6 h-6 ${isTab === "copy" ? "invert-0 brightness-100" : " group-hover:invert-0 group-hover:brightness-100 invert-1 brightness-0"}`}
                  />
                </div>
                <div
                  onClick={() => setIsTab("align")}
                  className={`flex group justify-center hover:bg-main transition-all duration-300 items-center gap-2 w-full p-2 rounded-lg cursor-pointer ${isTab === "align" ? "bg-main" : ""}`}
                >
                  <Image
                    src={AlignLeft}
                    alt="AlignLeft"
                    width={24}
                    height={24}
                    className={`cursor-pointer w-6 h-6 transition-all duration-300 ${isTab === "align" ? "invert" : "group-hover:invert"}`}
                  />
                </div>
                <div
                  onClick={() => setIsTab("save")}
                  className={`flex group justify-center hover:bg-main transition-all duration-300 items-center gap-2 w-full p-2 rounded-lg cursor-pointer ${isTab === "save" ? "bg-main" : ""}`}
                >
                  <Image
                    src={SaveIcon}
                    alt="SaveIcon"
                    width={24}
                    height={24}
                    className={`cursor-pointer w-6 h-6 transition-all duration-300 ${isTab === "save" ? "invert" : "group-hover:invert"}`}
                  />
                </div>
              </div>
              <div
                onClick={() => setPage(1)}
                className="mt-4 border rounded-xl flex flex-col items-center gap-2 cursor-pointer"
              >
                <div
                  className={`${page === 1 ? "border-black" : ""} border rounded-xl`}
                >
                  <Image
                    src={StampPage}
                    alt="StampPage"
                    width={218}
                    height={278}
                  />
                </div>
                <h1 className="text-sm font-medium text-black mt-1.5">1</h1>
              </div>
              <div
                onClick={() => setPage(2)}
                className="mt-4 border rounded-xl flex flex-col items-center gap-2 cursor-pointer"
              >
                <div
                  className={`${page === 2 ? "border-black" : ""} border rounded-xl`}
                >
                  <Image
                    src={StampPage}
                    alt="StampPage"
                    width={218}
                    height={278}
                  />
                </div>
                <h1 className="text-sm font-medium text-black mt-1.5">2</h1>
              </div>
              <div
                onClick={() => setPage(3)}
                className="mt-4 border rounded-xl flex flex-col items-center gap-2 cursor-pointer"
              >
                <div
                  className={`${page === 3 ? "border-black" : ""} border rounded-xl`}
                >
                  <Image
                    src={StampPage}
                    alt="StampPage"
                    width={218}
                    height={278}
                    className="w-[218px] h-[278px]"
                  />
                </div>
                <h1 className="text-sm font-medium text-black mt-1.5">3</h1>
              </div>
              <div className="flex items-center justify-center p-2 gap-2 mt-4 shadow-xl bg-white">
                <Image
                  src={FillArrowLeftIcon}
                  alt="FillArrowLeftIcon"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
                <h1 className="text-sm font-medium text-black">1 / 5</h1>
                <Image
                  src={FillArrowLeftIcon}
                  alt="FillArrowRightIcon"
                  width={24}
                  height={24}
                  className="cursor-pointer rotate-180"
                />
              </div>
            </div>

            <div className="w-full">
              <Notes />
            </div>
            <div className="border bg-[#fafafa] border-black/16 rounded-xl">
              <div className=" flex whitespace-nowrap text-black/50">
                <div
                  onClick={() => setIsTab2("action")}
                  className="cursor-pointer"
                >
                  <h1
                    className={`${isTab2 === "action" ? " font-semibold text-main border-main" : "text-black/60"} p-2 text-xs border-b-2 border-black/16`}
                  >
                    Action Blocks
                  </h1>
                </div>
                <div
                  onClick={() => setIsTab2("form")}
                  className="cursor-pointer"
                >
                  <h1
                    className={`${isTab2 === "form" ? " font-semibold text-main border-main" : "text-black/60"} p-2 text-xs border-b-2 border-black/16`}
                  >
                    Forms
                  </h1>
                </div>
                <div
                  onClick={() => setIsTab2("Custom")}
                  className="cursor-pointer"
                >
                  <h1
                    className={`${isTab2 === "Custom" ? " font-semibold text-main border-main" : "text-black/60"} p-2 text-xs border-b-2 border-black/16`}
                  >
                    Custom Fields
                  </h1>
                </div>
                <div
                  onClick={() => setIsTab2("Variables")}
                  className="cursor-pointer"
                >
                  <h1
                    className={`${isTab2 === "Variables" ? " font-semibold text-main border-main" : "text-black/60"} p-2 text-xs border-b-2 border-black/16`}
                  >
                    Variables
                  </h1>
                </div>
                <div
                  onClick={() => setIsTab2("Templates")}
                  className="cursor-pointer"
                >
                  <h1
                    className={`${isTab2 === "Templates" ? " font-semibold text-main border-main" : "text-black/60"} p-2 text-xs border-b-2 border-black/16`}
                  >
                    Templates
                  </h1>
                </div>
              </div>
              <div className="p-4 pt-0">
                <div className="relative bg-[#fafafa] z-10 ">
                  <Image
                    src={SearchIcon}
                    alt="Search"
                    width={20}
                    height={20}
                    className="w-5 h-5 absolute top-1/2 right-3 -translate-y-1/2"
                  />
                  <input
                    type="text"
                    placeholder="Search Custom Fields..."
                    className="w-full outline-none border rounded-lg bg-white border-black/16 text-black px-3 py-2.5 pr-10"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  {sidebarFields.map((section, index) => (
                    <div key={index} className="">
                      <button
                        onClick={() => toggleSection(index)}
                        className="flex items-center justify-between w-full cursor-pointer  p-2 hover:bg-black/5 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-black">
                            {section.title}
                          </span>
                        </div>
                        <Image
                          src={CheveronDownGray}
                          alt="Chevron"
                          width={16}
                          height={16}
                          className={`transition-transform duration-200 ${
                            openSection === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSection === index && (
                        <div className="flex flex-col gap-2 pl-2 cursor-pointer">
                          {section.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="bg-white border border-main rounded-lg p-3 py-2.5 flex items-center gap-3 cursor-move hover:border-main transition-colors group"
                            >
                              <span className="text-sm text-black font-medium">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Review;
