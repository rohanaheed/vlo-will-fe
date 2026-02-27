"use client";
import React, { useState } from "react";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CommonTable from "@/components/common/CommonTable";

import arrowback from "@/components/assets/images/ArrowBack.svg";
import addicon from "@/components/assets/images/AddIcon.svg";

import search from "@/components/assets/images/SearchIconBlack.svg";
import ChevronDownDoubleIcon from "@/components/assets/images/ChevronDownDoubleIcon.svg";
import ChevronUpDoubleIcon from "@/components/assets/images/ChevronUpDouble.svg";
import ChevronUpWhite from "@/components/assets/images/ChevronUpWhite.svg";
import ArrowTopGreen from "@/components/assets/images/ArrowTopGreen.svg";
import { useRouter } from "next/navigation";
import Ticket1 from "@/components/assets/images/Ticket1.svg";
import ProgressIcon from "@/components/assets/images/ProgressIcon.svg";
import TaskIcon from "@/components/assets/images/TaskIcon.svg";
import copy from "@/components/assets/images/CopyIcon.svg";
import TableEyeIcon from "@/components/assets/images/TableEyeIcon.svg";
import Calendar from "@/components/assets/images/CalendarIcon1.svg";
function page() {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());

  const tableData = [
    {
      id: "TK-1221",
      issue: "Unable to download PDF",
      updated: "29/03/2025 10:09 Pm",
      complete: 50,
      priority: "High",
      status: "New",
    },
    {
      id: "TK-1221",
      issue: "Billing query",
      updated: "29/03/2025 10:09 Pm",
      complete: 50,
      priority: "Low",
      status: "In Progress",
    },
    {
      id: "TK-1221",
      issue: "Login issue",
      updated: "29/03/2025 10:09 Pm",
      complete: 50,
      priority: "Medium",
      status: "Pending",
    },
    {
      id: "TK-1221",
      issue: "Unable to download PDF",
      updated: "29/03/2025 10:09 Pm",
      complete: 50,
      priority: "Lowest",
      status: "Escalated",
    },
    {
      id: "TK-1221",
      issue: "Billing query",
      updated: "29/03/2025 10:09 Pm",
      complete: 50,
      priority: "Critical",
      status: "Resolved",
    },
    {
      id: "TK-1221",
      issue: "Login issue",
      updated: "29/03/2025 10:09 Pm",
      complete: 50,
      priority: "High",
      status: "Closed",
    },
    {
      id: "TK-1221",
      issue: "Unable to download PDF",
      updated: "29/03/2025 10:09 Pm",
      complete: 50,
      priority: "Low",
      status: "Respond",
    },
    {
      id: "TK-1221",
      issue: "Billing query",
      updated: "29/03/2025 10:09 Pm",
      complete: 50,
      priority: "Medium",
      status: "On Hold",
    },
    {
      id: "TK-1221",
      issue: "Login issue",
      updated: "29/03/2025 10:09 Pm",
      complete: 100,
      priority: "Lowest",
      status: "Cancelled",
    },
    {
      id: "TK-1221",
      issue: "Unable to download PDF",
      updated: "29/03/2025 10:09 Pm",
      complete: 0,
      priority: "Critical",
      status: "Open",
    },
    {
      id: "TK-1221",
      issue: "Billing query",
      updated: "29/03/2025 10:09 Pm",
      complete: 100,
      priority: "Critical",
      status: "Closed",
    },
    {
      id: "TK-1221",
      issue: "Login issue",
      updated: "29/03/2025 10:09 Pm",
      complete: 50,
      priority: "Critical",
      status: "Closed",
    },
  ];

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
        className={`${bg} ${color} flex items-center justify-center gap-2 px-3 py-1.25 rounded-full w-fit min-w-25`}
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
        className={`${bg} ${color} flex items-center justify-center px-3 py-1.25 rounded-full min-w-25`}
      >
        <span className="text-sm font-semibold">{status}</span>
      </div>
    );
  };

  const columns = [
    {
      header: "Ticket ID",
      accessor: "id",
      sortable: true,
      render: (row) => (
        <span className="text-sm font-medium text-text-4">{row.id}</span>
      ),
    },
    {
      header: "Issue",
      accessor: "issue",
      sortable: true,
      render: (row) => (
        <span className="text-sm font-medium text-text-4">{row.issue}</span>
      ),
    },
    {
      header: "Last Updated",
      accessor: "updated",
      sortable: true,
      render: (row) => (
        <span className="text-sm font-medium text-text-4">{row.updated}</span>
      ),
    },
    {
      header: "Complete %",
      accessor: "complete",
      sortable: true,
      render: (row) => (
        <div className="flex items-center gap-3 min-w-40">
          <div className="flex-1 h-2 bg-[#E4E7EC] rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${row.complete === 100 ? "bg-[#34C759]" : row.complete === 0 ? "bg-transparent" : "bg-[#34C759]"}`}
              style={{
                width: `${row.complete}%`,
                backgroundColor:
                  row.complete === 0
                    ? "transparent"
                    : row.complete === 100
                      ? "#FF0000"
                      : "#34C759",
              }}
            ></div>
          </div>
          <span className="text-sm font-medium text-text-4">
            {row.complete}%
          </span>
        </div>
      ),
    },
    {
      header: "Priority",
      accessor: "priority",
      sortable: true,
      render: (row) => <PriorityBadge priority={row.priority} />,
    },
    {
      header: "Status",
      accessor: "status",
      sortable: true,
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: "Action",
      accessor: "action",
      render: () => (
        <div className="flex items-center justify-center">
          <button
            onClick={() => router.push("/tickets/view-ticket")}
            className="p-1.25 hover:bg-gray-100 rounded-lg cursor-pointer border border-black/16"
          >
            <Image src={TableEyeIcon} alt="view" width={20} height={20} />
          </button>
        </div>
      ),
    },
  ];

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="flex items-center gap-2 border border-black/16 rounded-lg p-3.25 cursor-pointer whitespace-nowrap max-md:w-full"
      onClick={onClick}
      ref={ref}
    >
      <Image src={Calendar} alt="calendar" width={20} height={20} />
      <span className="text-text-7 text-sm font-semibold">{value}</span>
    </button>
  ));

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
              onClick={() => router.push("/")}
              className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Image src={arrowback} alt="arrowback" width={24} height={24} />
            </button>
            <h2 className="text-black text-lg md:text-xl font-bold">Tickets</h2>
          </div>
          <div className="border border-black/16 rounded-lg md:p-6 p-3 mt-6">
            <div className="flex md:items-center gap-2 justify-between whitespace-nowrap flex-col md:flex-row"></div>
            <div className="grid min-[1000px]:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
              <div className="border border-black/16 rounded-xl p-4 bg-white">
                <div className="bg-[#3B82F6] p-2 rounded-full inline-flex border-8 border-[#3473DA]">
                  <Image
                    src={Ticket1}
                    alt="open"
                    width={11}
                    height={16}
                    className="min-w-4 min-h-4"
                  />
                </div>
                <div className="mt-4">
                  <h1 className="text-2xl text-black font-semibold">5</h1>
                  <p className="text-xs text-black font-semibold mt-1">Open</p>
                </div>
                <div className="mt-1 flex items-center gap-3 w-full">
                  <div className="flex-1 h-2 bg-[#E4E7EC] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#3B82F6] rounded-full"
                      style={{ width: `50%` }}
                    ></div>
                  </div>
                  <p className="text-sm font-medium text-text-4">50%</p>
                </div>
                <div className="mt-1 inline-flex items-center gap-1 bg-[#FCFCFC] p-1 rounded-lg">
                  <Image
                    src={ArrowTopGreen}
                    alt="growth"
                    width={16}
                    height={16}
                  />
                  <p className="text-[#83BF6E] text-xs font-medium">
                    12% <span className="text-text-5">This Month</span>
                  </p>
                </div>
              </div>

              <div className="border border-black/16 rounded-xl p-4 bg-white">
                <div className="bg-[#FACC15] p-2 border-8 border-[#E5BB14] rounded-full inline-flex">
                  <Image
                    src={ProgressIcon}
                    alt="progress"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="mt-4">
                  <h1 className="text-2xl text-black font-semibold">2</h1>
                  <p className="text-xs text-black font-semibold mt-1">
                    In Progress
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-3 w-full">
                  <div className="flex-1 h-2 bg-[#E4E7EC] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FFC107] rounded-full"
                      style={{ width: `50%` }}
                    ></div>
                  </div>
                  <p className="text-sm font-medium text-text-4">50%</p>
                </div>
                <div className="mt-1 inline-flex items-center gap-1 bg-[#FCFCFC] p-1 rounded-lg">
                  <Image
                    src={ArrowTopGreen}
                    alt="growth"
                    width={16}
                    height={16}
                  />
                  <p className="text-[#83BF6E] text-xs font-medium">
                    12% <span className="text-text-5">Growth This Month</span>
                  </p>
                </div>
              </div>

              <div className="border border-black/16 rounded-xl p-4 bg-white">
                <div className="bg-[#34C759] p-2 border-8 border-[#2FAE4F] rounded-full inline-flex">
                  <Image src={TaskIcon} alt="resolved" width={16} height={16} />
                </div>
                <div className="mt-4">
                  <h1 className="text-2xl text-black font-semibold">3</h1>
                  <p className="text-xs text-black font-semibold mt-1">
                    Resolved
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-3 w-full">
                  <div className="flex-1 h-2 bg-[#E4E7EC] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#34C759] rounded-full"
                      style={{ width: `100%` }}
                    ></div>
                  </div>
                  <p className="text-sm font-medium text-text-4">100%</p>
                </div>
                <div className="mt-1 inline-flex items-center gap-1 bg-[#FCFCFC] p-1 rounded-lg">
                  <Image
                    src={ArrowTopGreen}
                    alt="growth"
                    width={16}
                    height={16}
                  />
                  <p className="text-[#83BF6E] text-xs font-medium">
                    12% <span className="text-text-5">Growth This Month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-7.5">
              <h1 className="text-text-1 text-lg md:text-xl font-bold">
                Tickets
              </h1>
              <button
                onClick={() => router.push("/tickets/create-new-ticket")}
                className="max-md:w-full flex justify-center items-center gap-2 bg-main hover:bg-main/85 transition-all duration-300 text-white p-2 px-4 rounded-lg cursor-pointer"
              >
                <Image src={addicon} alt="addicon" width={24} height={24} />
                <p className="text-semibold text-sm">Create New</p>
              </button>
            </div>
            <div className="mt-6 flex max-md:flex-col gap-4">
              <div className="gap-2 w-full border border-black/16 rounded-lg p-2.25 relative">
                <Image
                  src={search}
                  alt="search"
                  width={24}
                  height={24}
                  className="absolute top-1/2 right-4 -translate-y-1/2"
                />

                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full outline-none text-black text-lg font-semibold pr-10"
                />
              </div>
              <div className="min-w-fit">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<CustomInput />}
                  wrapperClassName="w-full"
                />
              </div>
            </div>
            <div className="mt-8">
              <CommonTable
                data={tableData}
                columns={columns}
                selectable={false}
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
