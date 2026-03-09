"use client";
import React, { useRef } from "react";
import Image from "next/image";
import OverviewDocumenticon from "@/components/assets/images/OverviewDocumenticon.svg";
import ArrowUpGreen from "@/components/assets/images/ArrowUpGreen.svg";
import SearchIconGray from "@/components/assets/images/SearchIconGray.svg";
import CalendarIcon from "@/components/assets/images/CalendarIcon.svg";
import CopyIcon from "@/components/assets/images/CopyIcon.svg";
import TableEyeIcon from "@/components/assets/images/TableEyeIcon.svg";
import DownloadIcon from "@/components/assets/images/DownloadIcon.svg";
import CommonTable from "@/components/common/CommonTable";

const FolderIcon = () => (
  <svg
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 20H4C2.89543 20 2 19.1046 2 18V6H22V18C22 19.1046 21.1046 20 20 20Z"
      fill="#FFC107"
    />
    <path
      d="M22 6H2V4C2 2.89543 2.89543 2 4 2H9.17157C9.70201 2 10.2107 2.21071 10.5858 2.58579L12.5858 4.58579C12.9609 4.96086 13.4696 5.17157 14 5.17157H20C21.1046 5.17157 22 6.06614 22 7.17157V6Z"
      fill="#F4B400"
    />
  </svg>
);

const PdfIcon = () => (
  <svg
    width="20"
    height="24"
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2V6C12 6.55228 12.4477 7 13 7H17"
      stroke="#F04438"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H15C16.1046 22 17 21.1046 17 20V7L12 2Z"
      stroke="#F04438"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="6" y="17" fill="#F04438" fontSize="6px" fontWeight="bold">
      PDF
    </text>
  </svg>
);

function Page() {
  const dateInputRef = useRef(null);

  const columns = [
    {
      header: "Name",
      accessor: "name",
      sortable: true,
      render: (row) => (
        <div className={`flex items-center gap-3 ${row.isChild ? "pl-8" : ""}`}>
          {row.type === "folder" ? <FolderIcon /> : <PdfIcon />}
          <span
            className={`text-sm font-medium ${row.type === "folder" ? "text-[#1A2232]" : "text-[#404040]"}`}
          >
            {row.name}
          </span>
          {row.type === "folder" && (
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div>
      ),
    },
    {
      header: "Product",
      accessor: "product",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-[#404040]">{row.product}</span>
      ),
    },
    {
      header: "Created Date",
      accessor: "createdDate",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-[#404040]">{row.createdDate}</span>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      sortable: true,
      render: (row) => (
        <span
          className={`px-4 py-1 inline-block text-center rounded-full text-xs font-medium w-28 ${
            row.status === "Completed"
              ? "bg-[#17B26A] text-white"
              : "bg-[#98A2B3] text-white"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "Action",
      accessor: "action",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button className="p-2 border border-[#D5D7DA] rounded-lg hover:bg-gray-50 cursor-pointer">
            <Image src={TableEyeIcon} alt="view" width={18} height={18} />
          </button>
          <button className="p-2 border border-[#D5D7DA] rounded-lg hover:bg-gray-50 cursor-pointer">
            <Image src={DownloadIcon} alt="download" width={18} height={18} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Default Bundle Section",
      type: "folder",
      product: "Family",
      createdDate: "01/02/2025",
      status: "Draft",
    },
    {
      id: 2,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      product: "Immigration",
      createdDate: "01/02/2025",
      status: "Completed",
    },
    {
      id: 3,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      product: "Criminal",
      createdDate: "01/02/2025",
      status: "Draft",
    },
    {
      id: 4,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      product: "Document Bundle",
      createdDate: "01/02/2025",
      status: "Completed",
    },
    {
      id: 5,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      product: "Family",
      createdDate: "01/02/2025",
      status: "Draft",
    },
    {
      id: 6,
      name: "Family Case",
      type: "folder",
      product: "Immigration",
      createdDate: "01/02/2025",
      status: "Completed",
    },
    {
      id: 7,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      product: "Criminal",
      createdDate: "01/02/2025",
      status: "Draft",
    },
    {
      id: 8,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      product: "Document Bundle",
      createdDate: "01/02/2025",
      status: "Completed",
    },
    {
      id: 9,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      product: "Family",
      createdDate: "01/02/2025",
      status: "Draft",
    },
    {
      id: 10,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      product: "Immigration",
      createdDate: "01/02/2025",
      status: "Completed",
    },
    {
      id: 11,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      product: "Criminal",
      createdDate: "01/02/2025",
      status: "Draft",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg md:text-xl font-bold">Documents</h1>

      {/* Stats Card */}
      <div className="border border-black/16 rounded-2xl p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#B5850B] p-4 rounded-2xl">
            <Image
              src={OverviewDocumenticon}
              alt="documents"
              width={32}
              height={32}
              className="brightness-0 invert"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1A2232]">
              Total Document Created
            </p>
            <h2 className="text-3xl font-bold text-[#1A2232]">3,145</h2>
            <div className="flex items-center gap-1 mt-1">
              <Image src={ArrowUpGreen} alt="growth" width={16} height={16} />
              <span className="text-xs font-semibold text-[#17B26A]">
                12%{" "}
                <span className="text-[#404040] font-normal">
                  Growth This Month
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {["Yearly", "Quarterly", "Monthly", "Weekly", "24 hours"].map(
            (tab) => (
              <button
                key={tab}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50 cursor-pointer"
              >
                {tab}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex md:flex-row flex-col md:items-center gap-3">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full focus:border-black border text-base border-black/16 outline-0 p-4 py-3 pr-12 rounded-lg"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-4">
            <Image src={SearchIconGray} alt="search" width={20} height={20} />
          </div>
        </div>

        <div className="relative flex items-center min-w-[200px]">
          <div
            className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer"
            onClick={() => dateInputRef.current?.showPicker()}
          >
            <Image src={CalendarIcon} alt="calendar" width={20} height={20} />
          </div>
          <input
            type="date"
            ref={dateInputRef}
            className="w-full text-[#404040] focus:border-black border text-base border-black/16 outline-0 py-3 pl-14 pr-4 rounded-lg [&::-webkit-calendar-picker-indicator]:hidden"
            defaultValue="2025-09-01"
          />
        </div>

        <button className="p-3 border border-[#D5D7DA] rounded-lg hover:bg-(--color-main) hover:text-white group transition-all cursor-pointer">
          <Image
            src={CopyIcon}
            alt="export"
            width={24}
            height={24}
            className="group-hover:brightness-0 group-hover:invert transition-all"
          />
        </button>
      </div>

      {/* Table */}
      <CommonTable
        columns={columns}
        data={data}
        selectable={true}
        onSelectionChange={() => {}}
      />
    </div>
  );
}

export default Page;
