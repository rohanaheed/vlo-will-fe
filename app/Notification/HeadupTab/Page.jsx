"use client";
import React, { useState } from "react";
import SearchIconGray from "../../../components/assets/images/SearchIconGray.svg";
import Image from "next/image";
import Commondropdown from "../../../components/common/Commondropdown";
import Copyicon from "../../../components/assets/images/CopyIcon.svg";
import CustomDateRangePicker from "../../../components/common/CustomDateRangePicker";
import CommonTable from "../../../components/common/CommonTable";
import ArrowUpwhite from "../../../components/assets/images/ArrowUpwhite.svg";
import DoubleArrowDown from "../../../components/assets/images/DoubleArrowDown.svg";
import user1 from "../../../components/assets/images/User1.svg";
import user2 from "../../../components/assets/images/User2.svg";
import user3 from "../../../components/assets/images/User3.svg";
import BusinessIcon from "../../../components/assets/images/BusinessIcon.svg";
import BusinessIcon2 from "../../../components/assets/images/BusinessIcon2.svg";
import BusinessIcon1 from "../../../components/assets/images/BusinessIcon1.svg";
import CustomizeIcon from "../../../components/assets/images/CustomizeIcon.svg";
const mockData = [
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:24 AM",
    customer: { name: "Amy Diaz", email: "testing@gmail.com", avatar: user1 },
    business: { name: "Legal Law Firm", domain: "getwarpspeed.com", icon: BusinessIcon },
    eventType: "Churn Risk",
    message: "Usage dropped by 70% compared to last month",
    priority: "High",
    actionLabel: "View Profile"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Natalia González", email: "contrastai.com", avatar: user2 },
    business: { name: "ContrastAI", domain: "contrastai.com", icon: BusinessIcon1 },
    eventType: "Signup Abandonment",
    message: "Usage dropped by 70% compared to last month",
    priority: "Medium",
    actionLabel: "Send Reminder"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Jennifer Hernandez", email: "testing@gmail.com", avatar: user3 },
    business: { name: "Convergence", domain: "convergence.io", icon: BusinessIcon2 },
    eventType: "Payment Failure",
    message: "Usage dropped by 70% compared to last month",
    priority: "High",
    actionLabel: "Retry Payment"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "testing@gmail.com", avatar: user1 },
    business: { name: "Warpspeed", domain: "getwarpspeed.com", icon: BusinessIcon },
    eventType: "Status",
    message: "Usage dropped by 70% compared to last month",
    priority: "Low",
    actionLabel: "View History"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "contrastai.com", avatar: user2 },
    business: { name: "ContrastAI", domain: "contrastai.com", icon: BusinessIcon1 },
    eventType: "Renewal Pending",
    message: "Usage dropped by 70% compared to last month",
    priority: "Lowest",
    actionLabel: "Contact Now"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "testing@gmail.com", avatar: user3 },
    business: { name: "Convergence", domain: "convergence.io", icon: BusinessIcon2 },
    eventType: "Churn Risk",
    message: "Usage dropped by 70% compared to last month",
    priority: "Critical",
    actionLabel: "View Profile"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "convergence.io", avatar: user3 },
    business: { name: "Convergence", domain: "convergence.io", icon: BusinessIcon2 },
    eventType: "Signup Abandonment",
    message: "Usage dropped by 70% compared to last month",
    priority: "Low",
    actionLabel: "Send Reminder"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "getwarpspeed.com", avatar: user1 },
    business: { name: "Warpspeed", domain: "getwarpspeed.com", icon: BusinessIcon },
    eventType: "Payment Failure",
    message: "Usage dropped by 70% compared to last month",
    priority: "Medium",
    actionLabel: "Retry Payment"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "testing@gmail.com", avatar: user2 },
    business: { name: "ContrastAI", domain: "contrastai.com", icon: BusinessIcon1 },
    eventType: "Status",
    message: "Usage dropped by 70% compared to last month",
    priority: "Lowest",
    actionLabel: "View History"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "testing@gmail.com", avatar: user3 },
    business: { name: "Convergence", domain: "convergence.io", icon: BusinessIcon2 },
    eventType: "Renewal Pending",
    message: "Usage dropped by 70% compared to last month",
    priority: "Critical",
    actionLabel: "Contact Now"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "testing@gmail.com", avatar: user1 },
    business: { name: "ContrastAI", domain: "contrastai.com", icon: BusinessIcon1 },
    eventType: "Churn Risk",
    message: "Usage dropped by 70% compared to last month",
    priority: "High",
    actionLabel: "View Profile"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "testing@gmail.com", avatar: user2 },
    business: { name: "ContrastAI", domain: "contrastai.com", icon: BusinessIcon1 },
    eventType: "Signup Abandonment",
    message: "Usage dropped by 70% compared to last month",
    priority: "Medium",
    actionLabel: "Send Reminder"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "testing@gmail.com", avatar: user3 },
    business: { name: "Convergence", domain: "convergence.io", icon: BusinessIcon2 },
    eventType: "Payment Failure",
    message: "Usage dropped by 70% compared to last month",
    priority: "High",
    actionLabel: "Retry Payment"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "testing@gmail.com", avatar: user1 },
    business: { name: "Convergence", domain: "convergence.io", icon: BusinessIcon2 },
    eventType: "Status",
    message: "Usage dropped by 70% compared to last month",
    priority: "Low",
    actionLabel: "View History"
  },
  {
    alertId: "HU-1021",
    dateTime: "17/01/2025, 10:00 PM",
    customer: { name: "Zula Adebe", email: "testing@gmail.com", avatar: user2 },
    business: { name: "Sisyphus", domain: "sisyphus.com", icon: BusinessIcon1 },
    eventType: "Renewal Pending",
    message: "Usage dropped by 70% compared to last month",
    priority: "Critical",
    actionLabel: "Contact Now"
  }
];

const priorityColors = {
  Critical: "bg-[#D32F2F] text-white",     // Custom Red
  High: "bg-[#F57C00] text-white",         // Custom Orange
  Medium: "bg-[#FBC02D] text-white",       // Custom Yellow
  Low: "bg-[#388E3C] text-white",          // Custom Green
  Lowest: "bg-[#1976D2] text-white",       // Custom Blue
};

function Page() {
  const [priority, setPriority] = useState("All");
  const [Status, setStatus] = useState("Unread / Read");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const priorityOptions = ["All", "High", "Medium", "Low"];
  const statuaOptions = ["Unread / Read", "Unread", "Read"];

  const columns = [
    {
      header: "Alert ID",
      accessor: "alertId",
      sortable: true,
      render: (row) => <span className="text-[#344054] text-[14px] font-medium">{row.alertId}</span>
    },
    {
      header: "Date/Time",
      accessor: "dateTime",
      sortable: true,
      sortValue: (row) => {
        const dateString = row.dateTime;
        if (!dateString) return 0;
        // Parse "17/01/2025, 10:00 PM"
        const [datePart, timePart] = dateString.split(', ');
        const [day, month, year] = datePart.split('/');
        let [time, modifier] = timePart.split(' ');
        let [hours, minutes] = time.split(':');

        if (modifier === 'PM' && hours !== '12') hours = parseInt(hours, 10) + 12;
        if (modifier === 'AM' && hours === '12') hours = 0;

        return new Date(year, month - 1, day, hours, minutes).getTime();
      }
    },
    {
      header: "Customer",
      accessor: "customer",
      sortable: true,
      sortValue: (row) => row.customer.name, // Sort by Name
      render: (row) => (
        <div className="flex items-center gap-3">
          {/* Placeholder for Avatar if Image fails or is static */}
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
            <Image src={row.customer.avatar} width={32} height={32} alt={row.customer.name} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[14px] font-semibold text-[#1A2232]">{row.customer.name}</span>
            <span className="text-[12px] font-normal tracking-[-0.006em] text-[#404040]">{row.customer.email}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Business",
      accessor: "business",
      sortable: true,
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100 shrink-0">
            <Image src={row.business.icon} width={20} height={20} alt={row.business.name} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[14px] font-semibold text-[#1A2232]">{row.business.name}</span>
            <span className="text-[12px] font-normal tracking-[-0.006em] text-[#404040]">{row.business.domain}</span>
          </div>
        </div>
      ),
    },
    { header: "Event Type", accessor: "eventType", sortable: true },
    { header: "Message", accessor: "message", sortable: true, render: (row) => <span className="truncate max-w-xs block" title={row.message}>{row.message}</span> },
    {
      header: "Priority",
      accessor: "priority",
      sortable: true,
      sortValue: (row) => {
        // Custom Rank for Priority
        const ranks = { "Critical": 0, "High": 1, "Medium": 2, "Low": 3, "Lowest": 4 };
        return ranks[row.priority] ?? 99;
      },
      render: (row) => (
        <span
          className={`flex items-center justify-center w-25 h-7.5 gap-2.5 rounded-[100px] py-1.5 px-1.5 font-semibold text-[14px] leading-[1.6] ${priorityColors[row.priority] || "bg-gray-100 text-gray-700"
            }`}
        >
          {row.priority === "Critical" && (
            <Image src={DoubleArrowDown} alt="critical" width={10} height={10} className="brightness-0 invert rotate-180" />
          )}
          {(row.priority === "High" || row.priority === "Low") && (
            <Image src={ArrowUpwhite} alt="up" width={10} height={10} className="brightness-0 invert" />
          )}
          {(row.priority === "Medium" || row.priority === "Lowest") && (
            <Image src={DoubleArrowDown} alt="down" width={10} height={10} className="brightness-0 invert" />
          )}
          {row.priority}
        </span>
      ),
    },
    {
      header: "Action",
      render: (row) => (
        <button className="flex items-center justify-center w-34.75 h-7.5 border border-[#D0D5DD] bg-white text-[#414651] text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
          {row.actionLabel || "View Profile"}
        </button>
      ),
    },
  ];

  return (
    <div className="text-black">
      <div className="flex items-center max-sm:flex-col max-sm:items-start max-sm:gap-4 justify-between mt-7.5">
        <h1 className="text-lg md:text-xl font-semibold ">
          Notifications List
        </h1>
        <div className="flex items-center gap-2 max-sm:self-end">
          <div className="group flex items-center gap-2 border border-[#D5D7DA] p-3 px-4 rounded-lg cursor-pointer hover:bg-[var(--color-main)] hover:text-white transition-colors">
            <Image src={CustomizeIcon} alt="customize" width={20} height={20} className="group-hover:brightness-0 group-hover:invert transition-colors" />
            <p className="text-sm font-semibold text-black group-hover:text-white transition-colors">Customize</p>
          </div>

          <div className="group border border-[#D5D7DA] p-2.5 rounded-lg cursor-pointer hover:bg-[var(--color-main)] hover:text-white transition-colors">
            <Image src={Copyicon} alt="media" width={24} height={24} className="min-w-6 group-hover:brightness-0 group-hover:invert transition-colors" />
          </div>
        </div>
      </div>
      <div className="mt-6 w-full grid grid-cols-1 min-[800px]:grid-cols-[45%_1fr] lg:grid-cols-2 2xl:flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 xl:gap-4">
        <div className="w-full relative lg:max-w-60 xl:max-w-93">
          <input
            type="text"
            placeholder=" Email / ID"
            className="w-full focus:border-black border text-base border-black/16 outline-0 p-4 py-3.5 pr-12 rounded-lg"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-4">
            <Image src={SearchIconGray} alt="media" width={20} height={20} />
          </div>
        </div>


        <div className="flex max-[800px]:flex-col gap-4 sm:gap-6 w-full md:w-auto md:justify-end">
          <div className="flex max-[800px]:flex-col min-[800px]:items-center gap-2">
            <p className="text-sm font-medium">Priority</p>
            <Commondropdown
              options={priorityOptions}
              value={priority}
              onChange={setPriority}
              className="max-[800px]:w-full w-30 xl:w-40"
            />
          </div>
          <div className="flex max-[800px]:flex-col min-[800px]:items-center gap-2">
            <p className="text-sm font-medium">Status</p>
            <Commondropdown
              options={statuaOptions}
              value={Status}
              onChange={setStatus}
              className="max-[800px]:w-full w-33 xl:w-40 whitespace-nowrap"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto max-[800px]:justify-between">
          <div className="w-full md:max-w-65">
            <CustomDateRangePicker
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => setDateRange(update)}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <CommonTable
          columns={columns}
          data={mockData}
          selectable={true}
          onSelectionChange={(selected) => console.log("Selected:", selected)}
        />
      </div>
    </div>
  );
}

export default Page;
