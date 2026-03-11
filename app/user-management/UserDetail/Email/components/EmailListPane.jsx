import React, { useState } from "react";
import EmailListItem from "./EmailListItem";
import Alice from "@/components/assets/images/Alice.svg";
import searchicongray from "@/components/assets/images/SearchIconGray1.svg";
import Refreash from "@/components/assets/images/Refreash.svg";
import PinIconBLue from "@/components/assets/images/PinIconBLue.svg";
import Tag1Icon from "@/components/assets/images/Tag1Icon.svg";
import FillArrowDown from "@/components/assets/images/FillArrowDown.svg";
import MenuIcon from "@/components/assets/images/MenuIcon.svg";
// Inline Icons
const SquareOutlineIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9CA3AF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);
const ChevronDownIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9CA3AF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
import Image from "next/image";

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5v14M5 12h14"></path>
  </svg>
);

const EmailListPane = ({
  folderName,
  emails,
  selectedEmailId,
  onEmailSelect,
  onToggleSidebar,
}) => {
  const [activeTab, setActiveTab] = useState("priority");
  const [activeTab1, setActiveTab1] = useState("mail");
  return (
    <div className="w-full h-full flex flex-col bg-white shrink-0">
      {/* Header */}
      <div className=" shrink-0">
        <div className="flex gap-4 whitespace-nowrap overflow-auto items-center justify-between mb-5 border-b border-black/16 px-4 pb-2">
          <div className="flex items-center gap-3">
            <button
              className="min-[1400px]:hidden cursor-pointer p-1.5 hover:bg-gray-100 rounded text-gray-600"
              onClick={onToggleSidebar}
            >
              <Image
                src={MenuIcon}
                alt="media"
                height={20}
                width={20}
                className="min-w-6"
              />
            </button>
            <h2 className="text-lg font-bold md:text-[22px] text-text-1 capitalize">
              {folderName.replace("_", " ")}
            </h2>
            <div className="flex bg-[#F3F3F4] rounded-lg p-1">
              <button
                onClick={() => setActiveTab1("mail")}
                className={`px-4.25 py-1.25 cursor-pointer text-sm rounded-lg ${activeTab1 === "mail" ? "bg-white text-text-1 font-medium" : "text-text-5 hover:text-gray-900"}`}
              >
                All mail
              </button>
              <button
                onClick={() => setActiveTab1("unread")}
                className={`px-4.25 py-1.25 cursor-pointer text-sm rounded-lg ${activeTab1 === "unread" ? "bg-white text-text-1 font-medium" : "text-text-5 hover:text-gray-900"}`}
              >
                Unread
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex gap-1 cursor-pointer">
              <input
                type="checkbox"
                className="accent-main min-w-5 h-5 border border-black/16 rounded-lg cursor-pointer"
              />
              <Image
                src={FillArrowDown}
                alt="Arrow Down"
                width={16}
                height={16}
                className="min-w-5"
              />
            </button>
            <button className="hover:bg-gray-100 cursor-pointer p-1.5 rounded flex items-center justify-center">
              <Image
                src={Refreash}
                alt="Refresh"
                width={16}
                height={16}
                className="min-w-4"
              />
            </button>
          </div>
        </div>
        <div className="px-4 shrink-0 mb-4">
          <button className="w-full cursor-pointer bg-main hover:bg-main/85 text-white rounded-lg py-2.5 px-4 flex items-center justify-center gap-2 font-medium transition-colors">
            <PlusIcon />
            <span>New Email</span>
          </button>
        </div>

        {/* Priority Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          <button
            onClick={() => setActiveTab("priority")}
            className={`flex-1 cursor-pointer flex items-center transition-all duration-300 justify-center gap-2 pb-3 text-sm border-b-2 ${
              activeTab === "priority"
                ? "border-main text-main font-bold"
                : "border-transparent text-black hover:text-main"
            }`}
          >
            Priority
            <span
              className={`w-6 h-6 flex  items-center justify-center rounded-lg bg-main text-white text-[15px] font-semibold`}
            >
              01
            </span>
          </button>
          <button
            onClick={() => setActiveTab("others")}
            className={`flex-1 flex items-center cursor-pointer justify-center gap-2 pb-3 text-sm transition-all duration-300 border-b-2 ${
              activeTab === "others"
                ? "border-main text-main font-bold"
                : "border-transparent text-black hover:text-main"
            }`}
          >
            Others
            <span
              className={`w-6 h-6 flex  items-center justify-center rounded-lg bg-main text-white text-[15px] font-semibold`}
            >
              01
            </span>
          </button>
        </div>

        {/* Search */}
        <div className="relative mx-4 mb-4">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Image src={searchicongray} alt="Search" width={18} height={18} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-4 outline-0 pr-10 py-2.25 border border-black/16 rounded-lg text-sm focus:outline-none focus:border-[#042B59] transition-all"
          />
        </div>
      </div>
      {/* Email List */}
      <div className="flex-1 px-4 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
        {emails.length === 0 ? (
          <div className="p-8 text-center text-sm text-gray-500">
            No emails found in this folder.
          </div>
        ) : (
          emails.map((email) => (
            <EmailListItem
              key={email.id}
              email={email}
              isSelected={selectedEmailId === email.id}
              onClick={() => onEmailSelect(email.id)}
              PinIconBLue={PinIconBLue}
              Tag1Icon={Tag1Icon}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default EmailListPane;
