"use client";
import React, { useState } from "react";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CommonTable from "@/components/common/CommonTable";

import arrowback from "@/components/assets/images/ArrowBack.svg";

import ChevronDownDoubleIcon from "@/components/assets/images/ChevronUpWhite.svg";
import ChevronUpDoubleIcon from "@/components/assets/images/ChevronUpWhite.svg";
import ChevronUpWhite from "@/components/assets/images/ChevronUpWhite.svg";
import { useRouter } from "next/navigation";
import PinIcon from "@/components/assets/images/PinIcon.svg";
import CommonDropdown from "@/components/common/Commondropdown1";
import Calendar from "@/components/assets/images/CalendarIcon1.svg";
import downloadIcon from "@/components/assets/images/DownloadIcon.svg";
import userIcon from "@/components/assets/images/UserIcon.svg";
import TableEyeIcon from "@/components/assets/images/TableEyeIcon.svg";

const SortIcon = () => (
  <svg
    width="10"
    height="12"
    viewBox="0 0 10 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 0L9.33013 4.5H0.669873L5 0Z" fill="#181D27" />
    <path d="M5 12L0.669873 7.5H9.33013L5 12Z" fill="#181D27" />
  </svg>
);

function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    subject: "",
    category: null,
    priority: {
      label: "High",
      value: "high",
      icon: ChevronUpDoubleIcon,
      color: "bg-[#F57C00]",
    },
    mainIssue: null,
    description: "",
    experience: "Helpful",
    rating: 1,
  });

  const PriorityBadge = ({ priority }) => {
    const config = {
      High: {
        bg: "bg-[#F57C00]",
        icon: ChevronUpDoubleIcon,
        color: "text-white",
      },
      Medium: {
        bg: "bg-[#FBC02D]",
        icon: ChevronUpWhite,
        color: "text-white",
      },
      Low: { bg: "bg-[#388E3C]", icon: ChevronUpWhite, color: "text-white" },
      Critical: {
        bg: "bg-[#D32F2F]",
        icon: ChevronUpDoubleIcon,
        color: "text-white",
      },
      Lowest: {
        bg: "bg-[#1976D2]",
        icon: ChevronDownDoubleIcon,
        color: "text-white",
      },
    };

    const { bg, icon, color } = config[priority] || config.Medium;

    return (
      <div
        className={`${bg} ${color} flex items-center justify-center gap-2 min-w-25 px-3 py-1.25 rounded-full`}
      >
        <Image src={icon} alt={priority} width={11} height={7} className="" />
        <span className="text-sm font-semibold">{priority}</span>
      </div>
    );
  };

  const StatusBadge = ({ status }) => {
    const config = {
      New: { bg: "bg-[#3B82F6]", color: "text-white" },
      "In Progress": { bg: "bg-[#6366F1]", color: "text-white" },
      Pending: { bg: "bg-[#FACC15]", color: "text-white" },
      Escalated: { bg: "bg-[#F97316]", color: "text-white" },
      Resolved: { bg: "bg-[#34C759]", color: "text-white" },
      Closed: { bg: "bg-[#6B7280]", color: "text-white" },
      Respond: { bg: "bg-[#14B8A6]", color: "text-white" },
      "On Hold": { bg: "bg-[#8B5CF6]", color: "text-white" },
      Cancelled: { bg: "bg-[#FF0000]", color: "text-white" },
      Open: { bg: "bg-[#60A5FA]", color: "text-white" },
    };

    const { bg, color } = config[status] || {
      bg: "bg-gray-200",
      color: "text-black",
    };

    return (
      <div
        className={`${bg} ${color} flex items-center text-sm font-semibold justify-center px-3 py-1.25 rounded-full w-fit`}
      >
        <span className="text-sm font-semibold">{status}</span>
      </div>
    );
  };

  const attachmentColumns = [
    {
      header: "File Name",
      accessor: "fileName",
      sortable: true,
      render: (row) => (
        <span className="text-sm font-medium text-text-4">{row.fileName}</span>
      ),
    },
    {
      header: "Uploaded By",
      accessor: "uploadedBy",
      sortable: true,
      render: (row) => (
        <span className="text-sm font-medium text-text-4">
          {row.uploadedBy}
        </span>
      ),
    },
    {
      header: "Date",
      accessor: "date",
      sortable: true,
      render: (row) => (
        <span className="text-sm font-medium text-text-4">{row.date}</span>
      ),
    },
    {
      header: "Action",
      accessor: "action",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer border border-[#EAECF0]">
            <Image src={TableEyeIcon} alt="view" width={16} height={16} />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer border border-[#EAECF0]">
            <Image src={downloadIcon} alt="download" width={16} height={16} />
          </button>
        </div>
      ),
    },
  ];

  const attachmentData = [
    {
      fileName: "error_screenshot.png",
      uploadedBy: "User",
      date: "29/03/2025 10:09 Pm",
    },
    {
      fileName: "system_log.pdf",
      uploadedBy: "Support",
      date: "29/03/2025 10:09 Pm",
    },
  ];

  const categoryOptions = [
    { label: "Billing", value: "billing" },
    { label: "Technical", value: "technical" },
    { label: "Account", value: "account" },
  ];

  const priorityOptions = [
    {
      label: "High",
      value: "high",
      icon: ChevronUpDoubleIcon,
      color: "bg-[#F57C00]",
    },
    {
      label: "Medium",
      value: "medium",
      icon: ChevronUpWhite,
      color: "bg-[#FBC02D]",
    },
    { label: "Low", value: "low", icon: ChevronUpWhite, color: "bg-[#388E3C]" },
  ];

  const issueOptions = [
    { label: "Template wasn't right", value: "template" },
    { label: "Editor was hard to use", value: "editor" },
    { label: "Bug or error occurred", value: "bug" },
    { label: "Pricing/Plan", value: "pricing" },
    { label: "Other...", value: "other" },
  ];

  const StarIcon = ({ filled, onClick }) => (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "#FFB400" : "none"}
      stroke={filled ? "#FFB400" : "#D1D5DB"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 md:w-11 md:h-11 cursor-pointer transition-transform hover:scale-110 active:scale-95"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <UserHeader />
      </div>
      <div className="">
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-5 md:pb-10 bg-cover bg-center">
          <h1 className="text-text-1 text-center text-2xl md:text-4xl lg:text-6xl font-semibold">
            Tickets
          </h1>
          <p className="text-text-5 mt-6 text-center text-base lg:text-xl">
            example_1235@gmail.com
          </p>
        </div>
        <div className="mt-6 md:mt-18 lg:mt-24 max-[1200px]:px-4 max-w-[1200px] mx-auto border-b border-black/16 md:pb-16 pb-8 lg:pb-24">
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/tickets")}
              className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Image src={arrowback} alt="arrowback" width={24} height={24} />
            </button>
            <h2 className="text-black text-lg md:text-xl font-bold">
              Preview Ticket Details
            </h2>
          </div>

          <div className="border border-black/16 rounded-xl md:p-6 p-4 mt-6 bg-white shadow-sm mb-16">
            {/* Header Profile Section */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center overflow-hidden0">
                <Image src={userIcon} alt="user" width={32} height={32} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-text-1">
                  Ahmed Khan
                </h3>
                <p className="text-sm text-text-4 mt-1">ahmadkhan@gmail.com</p>
              </div>
            </div>

            {/* Ticket Info & Account Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:mb-6 mb-4 text-sm">
              <div className="space-y-4 flex flex-col justify-between">
                <div className="flex items-center">
                  <span className="text-text-3">Ticket ID: </span>
                  <span className="font-bold text-text-3 ml-1">123584</span>
                </div>
                <div className="flex items-center">
                  <span className="text-text-3">Subject:</span>
                  <span className="font-bold text-text-3 ml-1">
                    Unable to download PDF
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-text-3">Category:</span>
                  <span className="font-bold text-text-3 ml-1">
                    Document Issues
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-text-3 mr-1">Priority:</span>
                  <PriorityBadge priority="High" />
                </div>
                <div className="flex items-center">
                  <span className="text-text-3 mr-1">Status:</span>
                  <StatusBadge status="In Progress" />
                </div>
                <div className="flex items-center">
                  <span className="text-text-3">Created On:</span>
                  <span className="font-bold text-black ml-1">
                    14/9/2025 at 09:45 AM
                  </span>
                </div>
              </div>

              <div className="space-y-4 flex flex-col justify-between">
                <div className="flex items-center">
                  <span className="text-text-3">Account Status:</span>
                  <span className="font-bold text-black ml-1">Active</span>
                </div>
                <div className="flex items-center">
                  <span className="text-text-3">Subscription Type:</span>
                  <span className="font-bold text-black ml-1">
                    Monthly Plan
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-text-3">Amount:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-black">£0</span>
                    <span className="inline-flex items-center gap-1 border border-black/16 bg-white rounded-lg px-2 py-0.5 text-xs text-text-4">
                      <span className="w-1.5 h-1.5 bg-[#34C759] rounded-full mt-0.5"></span>
                      Paid
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-text-3">Payment Date:</span>
                  <span className="font-bold text-black ml-1">12/07/2024</span>
                </div>
                <div className="flex items-center">
                  <span className="text-text-3">Total Tickets:</span>
                  <span className="font-bold text-black ml-1">5</span>
                </div>
              </div>
            </div>

            {/* Ticket Timeline Section */}
            <div className="mb-6">
              <div className="bg-main text-white px-4 py-3 md:text-xl text-lg font-semibold mb-6 md:mb-7.5">
                Ticket Timeline
              </div>
              <ul className="list-disc pl-8 space-y-3 text-sm text-text-1">
                <li>
                  <strong className="text-text-1">15/9/2025, 08:12 AM:</strong>{" "}
                  <span className="text-text-1">Ticket assigned to Sarah.</span>
                </li>
                <li>
                  <strong className="text-text-1">14/9/2025, 10:12 AM:</strong>{" "}
                  <span className="text-text-1">
                    Support replied to the user.
                  </span>
                </li>
                <li>
                  <strong className="text-text-1">14/9/2025, 09:45 AM:</strong>{" "}
                  <span className="text-text-1">Ticket created by user.</span>
                </li>
              </ul>
            </div>

            {/* Ticket Description Section */}
            <div className="mb-6">
              <div className="bg-main text-white px-4 py-3 font-semibold mb-6">
                Ticket Description
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 px-4 text-sm mt-6">
                <div className="font-bold text-black">Issue Description</div>
                <div className="text-text-4 font-medium">
                  "I'm unable to download my will document. It shows a technical
                  error message every time."
                </div>
              </div>
            </div>

            {/* Attachments Section */}
            <div>
              <div className="bg-main text-white px-4 py-3 font-semibold mb-6">
                Attachments
              </div>
              <CommonTable
                data={attachmentData}
                columns={attachmentColumns}
                selectable={false}
                headerclass="bg-[#F3F5F7] !text-black"
                border="!bg-black/30"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
