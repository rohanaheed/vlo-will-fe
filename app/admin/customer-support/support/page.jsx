"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import SearchIconGray from "@/components/assets/images/SearchIconBlack.svg";
import CalendarIcon from "@/components/assets/images/CalendarIcon1.svg";
import CopyIcon from "@/components/assets/images/CopyIcon.svg";
import TableEyeIcon from "@/components/assets/images/TableEyeIcon.svg";
import ArrowUpGreen from "@/components/assets/images/ArrowUpGreen.svg";
import CommonTable from "@/components/common/CommonTable";
import TicketIcon from "@/components/assets/images/TicketIcon.svg";
import ProgressIcon from "@/components/assets/images/ProgressIcon.svg";
import ResolvedIcon from "@/components/assets/images/ResolvedIcon.svg";
import ArrowBottomToLeftDouble from "@/components/assets/images/ArrowBottomToLeftDouble.svg";
import ChevronTopWhite from "@/components/assets/images/ChevronTopWhite.svg";
import ChevronBottomDoubleWhite from "@/components/assets/images/ChevronBottomDoubleWhite.svg";
import ChevronTopDoubleWhite from "@/components/assets/images/ChevronTopDoubleWhite.svg";
import ViewDetail from "../ticket/page";

function Page({ onViewDetail }) {
  const dateInputRef = useRef(null);
  const [viewMode, setViewMode] = useState("list");
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleViewTicket = (ticket) => {
    if (onViewDetail) {
      onViewDetail(ticket);
    } else {
      setSelectedTicket(ticket);
      setViewMode("detail");
    }
  };

  const columns = [
    {
      header: "Ticket ID",
      accessor: "ticketId",
      sortable: true,
      render: (row) => (
        <span className="text-sm font-medium text-text-4">{row.ticketId}</span>
      ),
    },
    {
      header: "Issue",
      accessor: "issue",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-text-4 font-medium">{row.issue}</span>
      ),
    },
    {
      header: "Last Updated",
      accessor: "lastUpdated",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-text-4 font-medium">
          {row.lastUpdated}
        </span>
      ),
    },
    {
      header: "Complete %",
      accessor: "complete",
      sortable: true,
      render: (row) => (
        <div className="flex items-center gap-3 w-40">
          <div className="flex-1 h-1.5 bg-[#E4E7EC] rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${row.progressColor || "bg-[#17B26A]"}`}
              style={{ width: `${row.complete}%` }}
            ></div>
          </div>
          <span className="text-xs font-semibold text-[#404040]">
            {row.complete}%
          </span>
        </div>
      ),
    },
    {
      header: "Priority",
      accessor: "priority",
      sortable: true,
      render: (row) => {
        const priorityStyles = {
          High: "bg-[#F57C00]",
          Low: "bg-[#388E3C]",
          Medium: "bg-[#FBC02D]",
          Lowest: "bg-[#1976D2]",
          Critical: "bg-[#D32F2F]",
        };
        const priorityIcons = {
          Critical: ChevronTopDoubleWhite,
          High: ChevronTopWhite,
          Medium: ChevronBottomDoubleWhite,
          Low: ChevronTopWhite,
          Lowest: ChevronBottomDoubleWhite,
        };
        return (
          <span
            className={`px-3 py-1.25  rounded-full text-sm font-semibold text-white min-w-28.5 inline-flex items-center justify-center gap-1 uppercase ${priorityStyles[row.priority]}`}
          >
            <Image
              src={priorityIcons[row.priority]}
              alt={row.priority}
              width={12}
              height={12}
            />
            {row.priority}
          </span>
        );
      },
    },
    {
      header: "Status",
      accessor: "status",
      sortable: true,
      render: (row) => {
        const statusStyles = {
          New: "bg-[#3B82F6]",
          "In Progress": "bg-[#6366F1]",
          Pending: "bg-[#FACC15]",
          Escalated: "bg-[#F97316]",
          Resolved: "bg-[#34C759]",
          Closed: "bg-[#6B7280]",
          Respond: "bg-[#14B8A6]",
          "On Hold": "bg-[#8B5CF6]",
          Cancelled: "bg-[#FF0000]",
          Open: "bg-[#60A5FA]",
        };
        return (
          <span
            className={`px-4 py-1.25 inline-block text-center rounded-full text-sm font-semibold text-white w-28.5 ${statusStyles[row.status]}`}
          >
            {row.status}
          </span>
        );
      },
    },
    {
      header: "Action",
      accessor: "action",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleViewTicket(row)}
            className="p-1 border border-[#D5D7DA] rounded-lg hover:bg-[#D5D7DA] cursor-pointer"
          >
            <Image src={TableEyeIcon} alt="view" width={20} height={20} />
          </button>
          <button className="p-1 border border-[#D5D7DA] rounded-lg outline-0 hover:bg-[#D5D7DA] hover:text-white cursor-pointer group transition-all">
            <Image
              src={ArrowBottomToLeftDouble}
              alt="link"
              width={20}
              height={20}
            />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      ticketId: "TK-1221",
      issue: "Unable to download PDF",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 50,
      priority: "High",
      status: "New",
    },
    {
      id: 2,
      ticketId: "TK-1221",
      issue: "Billing query",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 50,
      priority: "Low",
      status: "In Progress",
    },
    {
      id: 3,
      ticketId: "TK-1221",
      issue: "Login issue",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 50,
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 4,
      ticketId: "TK-1221",
      issue: "Unable to download PDF",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 50,
      priority: "Lowest",
      status: "Escalated",
    },
    {
      id: 5,
      ticketId: "TK-1221",
      issue: "Billing query",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 50,
      priority: "Critical",
      status: "Resolved",
    },
    {
      id: 6,
      ticketId: "TK-1221",
      issue: "Login issue",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 50,
      priority: "High",
      status: "Closed",
    },
    {
      id: 7,
      ticketId: "TK-1221",
      issue: "Unable to download PDF",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 50,
      priority: "Low",
      status: "Respond",
    },
    {
      id: 8,
      ticketId: "TK-1221",
      issue: "Billing query",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 50,
      priority: "Medium",
      status: "On Hold",
    },
    {
      id: 9,
      ticketId: "TK-1221",
      issue: "Login issue",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 100,
      priority: "Lowest",
      status: "Cancelled",
      progressColor: "bg-[#D92D20]",
    },
    {
      id: 10,
      ticketId: "TK-1221",
      issue: "Unable to download PDF",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 0,
      priority: "Critical",
      status: "Open",
    },
    {
      id: 11,
      ticketId: "TK-1221",
      issue: "Billing query",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 100,
      priority: "Critical",
      status: "Closed",
    },
    {
      id: 12,
      ticketId: "TK-1221",
      issue: "Login issue",
      lastUpdated: "29/03/2025 10:09 PM",
      complete: 50,
      priority: "Critical",
      status: "Closed",
    },
  ];

  if (viewMode === "detail") {
    return (
      <ViewDetail ticket={selectedTicket} onBack={() => setViewMode("list")} />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="">
        <h1 className="text-xl font-semibold text-text-1">Support Tickets</h1>
        <p className="text-base text-text-1 mt-1">
          Track, assign, and resolve customer support tickets.
        </p>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          {
            label: "Open",
            count: 5,
            color: "bg-[#3B82F6]",
            borderColor: "border-[#3473DA]",
            icon: TicketIcon,
            progress: 50,
            progressColor: "bg-[#3B82F6]",
            growth: "This Month",
          },
          {
            label: "In-Progress",
            count: 2,
            color: "bg-[#FACC15]",
            borderColor: "border-[#E5BB14]",
            icon: ProgressIcon,
            progress: 50,
            progressColor: "bg-[#FACC15]",
            growth: "Growth This Month",
          },
          {
            label: "Resolved",
            count: 3,
            color: "bg-[#34C759]",
            borderColor: "border-[#2FAE4F]",
            icon: ResolvedIcon,
            progress: 100,
            progressColor: "bg-[#34C759]",
            growth: "Growth This Month",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="border border-black/16 rounded-lg p-4 flex flex-col"
          >
            <div className="flex items-center gap-4">
              <div
                className={`${card.color} p-1.5 rounded-full border-8 ${card.borderColor} shadow-sm`}
              >
                <Image
                  src={card.icon}
                  alt={card.label}
                  width={24}
                  height={24}
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl font-semibold">{card.count}</h2>
              <p className="text-xs font-semibold">{card.label}</p>
            </div>
            <div className="flex flex-col gap-2 mt-2.5">
              <div className="w-full bg-[#E4E7EC] rounded-full h-1.5 overflow-hidden">
                <div
                  className={`${card.progressColor} h-full rounded-full`}
                  style={{ width: `${card.progress}%` }}
                ></div>
              </div>
              <div className="inline-flex w-fit items-center gap-1 p-1 bg-[#FCFCFC]">
                <Image src={ArrowUpGreen} alt="growth" width={16} height={16} />
                <span className="text-xs text-[#34C759]">
                  12%{" "}
                  <span className="text-text-5 font-normal">{card.growth}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-bold">Tickets</h1>
      </div>

      {/* Filter Controls */}
      <div className="flex md:flex-row flex-col md:items-center gap-3">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full focus:border-main border text-base border-black/16 outline-0 p-4 py-2.75 pr-12 rounded-lg"
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
            className="w-full text-[#404040] focus:border-black border text-sm border-black/16 outline-0 py-3.25 pl-10 pr-3 rounded-lg cursor-pointer bg-white relative"
            style={{
              "-webkit-calendar-picker-indicator": "display: none",
            }}
            defaultValue="2025-09-01"
          />
        </div>

        <button className="p-2.75 border outline-0 inline-flex self-end border-[#D5D7DA] rounded-lg hover:bg-(--color-main) hover:border-(--color-main) hover:text-white group transition-all cursor-pointer">
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
      <CommonTable columns={columns} data={data} />
    </div>
  );
}

export default Page;
