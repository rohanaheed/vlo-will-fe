"use client";
import React, { useState } from "react";
import Image from "next/image";
import Commondropdown1 from "@/components/common/Commondropdown";
import CommonTable from "@/components/common/CommonTable";
import CustomDateRangePicker from "@/components/common/CustomDateRangePicker";
import copyIcon from "@/components/assets/images/CopyIcon.svg";
import ArrowUpGreen from "@/components/assets/images/ArrowUpGreen.svg";
import ArrowDownRed from "@/components/assets/images/ArrowDownRed.svg";
import PlusIcon from "@/components/assets/images/AddIcon.svg";
import UserIcon from "@/components/assets/images/UserIcon.svg";
import SearchIcon from "@/components/assets/images/SearchIconGray.svg";
import ChevronTopWhite from "@/components/assets/images/ChevronTopWhite.svg";
import ChevronBottomDoubleWhite from "@/components/assets/images/ChevronBottomDoubleWhite.svg";
import ChevronTopDoubleWhite from "@/components/assets/images/ChevronTopDoubleWhite.svg";
import AddIcon from "@/components/assets/images/AddIcon.svg";
import CustomizeIcon from "@/components/assets/images/CustomizeIcon.svg";
export default function Invoices() {
  const [timeFilter, setTimeFilter] = useState("This Month");
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const { startDate, endDate } = dateRange;

  const timeOptions = [
    { label: "This Month", value: "This Month" },
    { label: "Last Month", value: "Last Month" },
    { label: "This Year", value: "This Year" },
  ];

  return (
    <>
      {/* Invoice Overview */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-xl text-text-1 font-semibold">
            Invoice Overview
          </h2>
          <div className="w-32">
            <Commondropdown1
              options={timeOptions}
              value={timeFilter}
              onChange={setTimeFilter}
              className="text-xs! py-2!"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7 gap-3">
          <MiniMetricCard
            title="Total Outstanding"
            value="£0.00"
            count="(24)"
            color="text-black"
            borderColorClass="border-[#27AE60]"
            isPositive={false}
            change="37.8%"
          />
          <MiniMetricCard
            title="Unsent"
            value="£0.00"
            count="(4)"
            color="text-black"
            borderColorClass="border-[#828282]"
            isPositive={false}
            change="37.8%"
          />
          <MiniMetricCard
            title="Draft"
            value="£0.00"
            count="(6)"
            color="text-black"
            borderColorClass="border-[#828282]"
            isPositive={true}
            change="12%"
          />
          <MiniMetricCard
            title="Sent"
            value="£0.00"
            count="(6)"
            color="text-black"
            borderColorClass="border-[#3498DB]"
            isPositive={false}
            change="37.8%"
          />
          <MiniMetricCard
            title="Partial"
            value="£0.00"
            count="(6)"
            color="text-black"
            borderColorClass="border-[#F2994A]"
            isPositive={false}
            change="37.8%"
          />
          <MiniMetricCard
            title="Overdue"
            value="£0.00"
            count="(6)"
            color="text-black"
            borderColorClass="border-[#EB5757]"
            isPositive={false}
            change="37.8%"
          />
          <MiniMetricCard
            title="Paid"
            value="£0.00"
            count="(6)"
            color="text-black"
            borderColorClass="border-[#27AE60]"
            isPositive={true}
            change="12%"
          />
        </div>
      </div>

      {/* Invoices Management Section */}
      <div className="flex flex-col gap-6 mt-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <h2 className="text-lg whitespace-nowrap md:text-xl text-text-1 font-semibold">
            Invoices Management
          </h2>
          <div className="flex flex-wrap flex-col md:flex-row md:items-center gap-2 md:self-end md:justify-end">
            <button className="flex w-full md:w-fit justify-center cursor-pointer items-center gap-2 border border-[#E6E6E6] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50">
              <Image
                src={CustomizeIcon}
                alt="Customize"
                width={20}
                height={20}
              />
              Customise
            </button>
            <button className="flex items-center justify-center cursor-pointer gap-2 border border-[#E6E6E6] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50">
              Invoice Reminder
            </button>
            <button className="flex items-center justify-center cursor-pointer gap-2 border border-[#E6E6E6] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50">
              Uninvoiced fixed fee matters
            </button>
            <button className="flex items-center justify-center cursor-pointer gap-2 bg-main text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-main/90">
              <Image
                src={PlusIcon}
                alt="Add"
                width={16}
                height={16}
                className=""
              />
              Create New Invoice
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search, name, ref, invoice"
              className="w-full pl-2.5 pr-8.5 py-4 rounded-lg border border-[#E6E6E6] text-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image src={SearchIcon} alt="Search" width={16} height={16} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-text-1">Status:</span>
              <div className="w-36">
                <Commondropdown1
                  options={[{ label: "All", value: "All" }]}
                  value="All"
                  className="text-xs!"
                />
              </div>
            </div>
            <CustomDateRangePicker
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
            />
            <button className="p-3 w-fit self-end group border cursor-pointer hover:bg-main transition-all duration-300 ease-in-out hover:border-main border-[#E6E6E6] rounded-lg">
              <Image
                src={copyIcon}
                alt="Copy"
                width={28}
                height={28}
                className="min-w-7 group-hover:brightness-0 group-hover:invert transition-colors"
              />
            </button>
          </div>
        </div>

        {/* Invoices Table */}
        <CommonTable
          columns={invoiceColumns}
          data={invoiceData}
          headerClassName="bg-main"
          headerTextClassName="text-white"
          selectable={true}
        />
      </div>
    </>
  );
}

// Helper Components and Styles
function MiniMetricCard({
  title,
  value,
  count,
  color,
  isPositive,
  change,
  borderColorClass,
}) {
  return (
    <div
      className={`bg-white p-4 rounded-xl border ${borderColorClass || "border-[#E6E6E6]"} flex flex-col gap-2 min-w-[120px] shadow-sm`}
    >
      <p className="text-[13px] font-bold text-black uppercase tracking-wider">
        {title}
      </p>
      <div className="flex items-baseline justify-between gap-1">
        <h3 className={`text-lg md:text-2xl font-semibold ${color}`}>
          {value}
        </h3>
        <span className="text-lg md:text-2xl font-semibold">{count}</span>
      </div>
      <div
        className={`w-fit flex items-center gap-1 text-xs font-medium px-1 rounded-lg ${isPositive ? "bg-[#FCFCFC] text-[#027A48]" : "bg-[#FCFCFC] text-[#C01048]"}`}
      >
        <Image
          src={isPositive ? ArrowUpGreen : ArrowDownRed}
          alt=""
          width={10}
          height={10}
        />
        {change || "0%"}{" "}
        <span className="text-text-8 ml-1 text-xs font-medium">this month</span>
      </div>
    </div>
  );
}

const getPriorityStyle = (priority) => {
  switch (priority) {
    case "Critical":
      return "bg-[#D32F2F]";
    case "High":
      return "bg-[#F57C00]";
    case "Medium":
      return "bg-[#FBC02D]";
    case "Low":
      return "bg-[#388E3C]";
    case "Lowest":
      return "bg-[#1976D2]";
    default:
      return "bg-gray-500";
  }
};

const getStatusStyle = (status) => {
  switch (status) {
    case "Paid":
      return "bg-[#34C759]";
    case "Unpaid":
      return "bg-[#D32F2F]";
    case "Unsent":
      return "bg-[#6B7280]";
    case "Sent":
      return "bg-[#3B82F6]";
    case "Partial":
      return "bg-[#F97316]";
    case "Overdue":
      return "bg-[#D32F2F]";
    case "Rejected":
      return "bg-[#FF0000]";
    case "Draft":
      return "bg-[#6B7280]";
    case "Pending":
      return "bg-[#FACC15]";
    case "Cancelled":
      return "bg-[#FF0000]";
    case "Archived":
      return "bg-[#34C759]";
    default:
      return "bg-[#60A5FA]";
  }
};

const invoiceColumns = [
  {
    header: "Invoice No.",
    accessor: "id",
    sortable: true,
    render: (row) => (
      <span className="text-sm font-medium text-text-1">{row.id}</span>
    ),
  },
  {
    header: "User Name",
    accessor: "user",
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#F2F4F7] flex items-center justify-center overflow-hidden">
          <Image src={UserIcon} alt="User" width={32} height={32} />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm text-text-1">{row.user}</span>
          <span className="text-xs text-text-4">{row.email}</span>
        </div>
      </div>
    ),
  },
  {
    header: "Reference",
    accessor: "ref",
    sortable: true,
    render: (row) => (
      <span className="text-text-4 text-sm font-medium">{row.ref}</span>
    ),
  },
  {
    header: "Issue Date",
    accessor: "issueDate",
    sortable: true,
    render: (row) => (
      <span className="text-text-4 text-sm font-medium">{row.issueDate}</span>
    ),
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    sortable: true,
    render: (row) => (
      <span className="text-text-4 text-sm font-medium">{row.dueDate}</span>
    ),
  },
  {
    header: "Total Amount",
    accessor: "amount",
    sortable: true,
    render: (row) => (
      <span className="text-text-4 text-sm font-medium">{row.amount}</span>
    ),
  },
  {
    header: "Outstanding",
    accessor: "outstanding",
    sortable: true,
    render: (row) => (
      <span className="text-text-4 text-sm font-medium">{row.outstanding}</span>
    ),
  },
  {
    header: "Priority",
    accessor: "priority",
    render: (row) => {
      const priorityIcons = {
        Critical: ChevronTopDoubleWhite,
        High: ChevronTopWhite,
        Medium: ChevronBottomDoubleWhite,
        Low: ChevronTopWhite,
        Lowest: ChevronBottomDoubleWhite,
      };
      return (
        <span
          className={`px-3 py-1.25 rounded-full text-sm font-semibold text-white min-w-28 inline-flex items-center justify-center gap-1 uppercase ${getPriorityStyle(row.priority)}`}
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
    render: (row) => (
      <span
        className={`px-4 py-1.25 inline-block text-center rounded-full text-sm font-semibold text-white w-28.5 ${getStatusStyle(row.status)}`}
      >
        {row.status}
      </span>
    ),
  },
  {
    header: "Action",
    accessor: "action",
    render: () => (
      <button className="p-1.5 hover:bg-gray-100 rounded-md border border-black/16">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="4" r="1" fill="#828282" />
          <circle cx="8" cy="8" r="1" fill="#828282" />
          <circle cx="8" cy="12" r="1" fill="#828282" />
        </svg>
      </button>
    ),
  },
];

const invoiceData = [
  {
    id: "INV-2211",
    user: "Amy Diaz",
    email: "testing@gmail.com",
    ref: "ADM/1026.00",
    issueDate: "17/01/2025",
    dueDate: "17/01/2025",
    amount: "£696.00",
    outstanding: "£896.00",
    priority: "High",
    status: "Paid",
  },
  {
    id: "INV-2211",
    user: "Natalia González",
    email: "testing@gmail.com",
    ref: "ADM/1026.00",
    issueDate: "17/01/2025",
    dueDate: "17/01/2025",
    amount: "£696.00",
    outstanding: "£696.00",
    priority: "Low",
    status: "Unpaid",
  },
  {
    id: "INV-2211",
    user: "Jennifer Hernandez",
    email: "testing@gmail.com",
    ref: "ADM/1026.00",
    issueDate: "17/01/2025",
    dueDate: "17/01/2025",
    amount: "£696.00",
    outstanding: "£696.00",
    priority: "Medium",
    status: "Unsent",
  },
  {
    id: "INV-2211",
    user: "Zala Adebe",
    email: "testing@gmail.com",
    ref: "ADM/1026.00",
    issueDate: "17/01/2025",
    dueDate: "17/01/2025",
    amount: "£696.00",
    outstanding: "£696.00",
    priority: "Lowest",
    status: "Sent",
  },
  {
    id: "INV-2211",
    user: "Zala Adebe",
    email: "testing@gmail.com",
    ref: "ADM/1026.00",
    issueDate: "17/01/2025",
    dueDate: "17/01/2025",
    amount: "£696.00",
    outstanding: "£696.00",
    priority: "Critical",
    status: "Partial",
  },
  {
    id: "INV-2211",
    user: "Zala Adebe",
    email: "testing@gmail.com",
    ref: "ADM/1026.00",
    issueDate: "17/01/2025",
    dueDate: "17/01/2025",
    amount: "£696.00",
    outstanding: "£896.00",
    priority: "High",
    status: "Overdue",
  },
  {
    id: "INV-2211",
    user: "Zala Adebe",
    email: "testing@gmail.com",
    ref: "ADM/1026.00",
    issueDate: "17/01/2025",
    dueDate: "17/01/2025",
    amount: "£696.00",
    outstanding: "£696.00",
    priority: "Low",
    status: "Rejected",
  },
  {
    id: "INV-2211",
    user: "Zala Adebe",
    email: "testing@gmail.com",
    ref: "ADM/1026.00",
    issueDate: "17/01/2025",
    dueDate: "17/01/2025",
    amount: "£696.00",
    outstanding: "£696.00",
    priority: "Medium",
    status: "Draft",
  },
  {
    id: "INV-2211",
    user: "Zala Adebe",
    email: "testing@gmail.com",
    ref: "ADM/1026.00",
    issueDate: "17/01/2025",
    dueDate: "17/01/2025",
    amount: "£696.00",
    outstanding: "£696.00",
    priority: "Lowest",
    status: "Pending",
  },
  {
    id: "INV-2211",
    user: "Zala Adebe",
    email: "testing@gmail.com",
    ref: "ADM/1026.00",
    issueDate: "17/01/2025",
    dueDate: "17/01/2025",
    amount: "£696.00",
    outstanding: "£696.00",
    priority: "Low",
    status: "Cancelled",
  },
  {
    id: "INV-2211",
    user: "Zala Adebe",
    email: "testing@gmail.com",
    ref: "ADM/1026.00",
    issueDate: "17/01/2025",
    dueDate: "17/01/2025",
    amount: "£696.00",
    outstanding: "£696.00",
    priority: "Medium",
    status: "Archived",
  },
];
