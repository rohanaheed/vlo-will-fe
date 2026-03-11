"use client";
import React, { useRef } from "react";
import Image from "next/image";
import OverviewDocumenticon from "@/components/assets/images/OverviewDocumenticon.svg";
import ArrowUpGreen from "@/components/assets/images/ArrowUpGreen.svg";
import SearchIconGray from "@/components/assets/images/SearchIconBlack.svg";
import CalendarIcon from "@/components/assets/images/CalendarIcon.svg";
import CopyIcon from "@/components/assets/images/CopyIcon.svg";
import TableEyeIcon from "@/components/assets/images/TableEyeIcon.svg";
import DownloadIcon from "@/components/assets/images/DownloadIcon.svg";
import CommonTable from "@/components/common/CommonTable";
import FolderIcon from "@/components/assets/images/FolderIcon.svg";
import PDFIcon from "@/components/assets/images/PDFIcon.svg";

function Page() {
  const dateInputRef = useRef(null);
  const [netrevenuebutton, setNetrevenuebutton] = React.useState("Yearly");
  const [expandedFolders, setExpandedFolders] = React.useState({
    "Default Bundle Section": true,
    "Family Case": true,
  });

  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const columns = [
    {
      header: "Name",
      accessor: "name",
      sortable: true,
      render: (row) => (
        <div className={`flex items-center gap-2 ${row.isChild ? "pl-8" : ""}`}>
          {row.type === "folder" ? (
            <div
              className="flex items-center gap-1.5 cursor-pointer"
              onClick={() => toggleFolder(row.name)}
            >
              <svg
                className={`w-4 h-4 text-[#1A2232] transition-transform duration-200 ${expandedFolders[row.name] ? "rotate-0" : "-rotate-90"}`}
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
              <Image src={FolderIcon} alt="folder" width={32} height={32} />
            </div>
          ) : (
            <Image src={PDFIcon} alt="pdf" width={32} height={32} />
          )}
          <span
            className={`text-sm font-semibold ${row.type === "folder" ? "text-black cursor-pointer" : "text-[#404040]"}`}
            onClick={
              row.type === "folder" ? () => toggleFolder(row.name) : undefined
            }
          >
            {row.name}
          </span>
        </div>
      ),
    },
    {
      header: "Product",
      accessor: "product",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-[#404040] font-medium">
          {row.product}
        </span>
      ),
    },
    {
      header: "Created Date",
      accessor: "createdDate",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-[#404040] font-medium">
          {row.createdDate}
        </span>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      sortable: true,
      render: (row) => (
        <span
          className={`px-4 py-1.5 inline-block text-center rounded-full text-xs font-semibold w-28 ${
            row.status === "Completed"
              ? "bg-[#34C759] text-white"
              : "bg-[#A0A0A0] text-white"
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

  const allData = [
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
      parentName: "Default Bundle Section",
      product: "Immigration",
      createdDate: "01/02/2025",
      status: "Completed",
    },
    {
      id: 3,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      parentName: "Default Bundle Section",
      product: "Criminal",
      createdDate: "01/02/2025",
      status: "Draft",
    },
    {
      id: 4,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      parentName: "Default Bundle Section",
      product: "Document Bundle",
      createdDate: "01/02/2025",
      status: "Completed",
    },
    {
      id: 5,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      parentName: "Default Bundle Section",
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
      parentName: "Family Case",
      product: "Criminal",
      createdDate: "01/02/2025",
      status: "Draft",
    },
    {
      id: 8,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      parentName: "Family Case",
      product: "Document Bundle",
      createdDate: "01/02/2025",
      status: "Completed",
    },
    {
      id: 9,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      parentName: "Family Case",
      product: "Family",
      createdDate: "01/02/2025",
      status: "Draft",
    },
    {
      id: 10,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      parentName: "Family Case",
      product: "Immigration",
      createdDate: "01/02/2025",
      status: "Completed",
    },
    {
      id: 11,
      name: "Articles of Incorporation",
      type: "file",
      isChild: true,
      parentName: "Family Case",
      product: "Criminal",
      createdDate: "01/02/2025",
      status: "Draft",
    },
  ];

  const data = React.useMemo(() => {
    return allData.filter((row) => {
      if (!row.isChild) return true;
      return expandedFolders[row.parentName];
    });
  }, [expandedFolders]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg md:text-xl font-bold">Documents</h1>

      {/* Stats Card */}
      <div className="border border-black/16 rounded-2xl p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#B38B00] p-2.5 rounded-full border-8 border-[#9A7200]">
            <Image
              src={OverviewDocumenticon}
              alt="documents"
              width={44}
              height={44}
              className=""
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

        <div className="overflow-x-auto scrollbar-thin">
          <div className="flex items-center w-fit border border-[#D5D7DA] rounded-[11px] whitespace-nowrap">
            <button
              onClick={() => setNetrevenuebutton("Yearly")}
              className={`${netrevenuebutton === "Yearly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
            >
              Yearly
            </button>
            <button
              onClick={() => setNetrevenuebutton("Quarterly")}
              className={`${netrevenuebutton === "Quarterly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setNetrevenuebutton("Monthly")}
              className={`${netrevenuebutton === "Monthly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
            >
              Monthly
            </button>
            <button
              onClick={() => setNetrevenuebutton("Weekly")}
              className={`${netrevenuebutton === "Weekly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
            >
              Weekly
            </button>
            <button
              onClick={() => setNetrevenuebutton("24 hours")}
              className={`${netrevenuebutton === "24 hours" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
            >
              24 hours
            </button>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex md:flex-row flex-col md:items-center gap-3">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full focus:border-black border text-base border-black/16 outline-0 p-4 py-2.75 pr-12 rounded-lg"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-4">
            <Image src={SearchIconGray} alt="search" width={20} height={20} />
          </div>
        </div>

        <div
          className="relative flex items-center min-w-[180px] cursor-pointer"
          onClick={() => dateInputRef.current?.showPicker()}
        >
          <div className="absolute left-3 z-10 pointer-events-none">
            <Image src={CalendarIcon} alt="calendar" width={20} height={20} />
          </div>
          <input
            type="date"
            ref={dateInputRef}
            className="w-full text-[#404040] focus:border-black border text-sm border-black/16 outline-0 py-3.25 pl-10 pr-3 rounded-lg cursor-pointer bg-white relative
            [&::-webkit-calendar-picker-indicator]:hidden"
            defaultValue="2025-09-01"
          />
        </div>

        <button className="p-2.75 border border-[#D5D7DA] rounded-lg hover:bg-(--color-main) hover:text-white group transition-all cursor-pointer">
          <Image
            src={CopyIcon}
            alt="export"
            width={24}
            height={24}
            className="group-hover:brightness-0 min-h-6 min-w-6 group-hover:invert transition-all"
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
