"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/common/Header";
import CommonDropdown from "@/components/common/Commondropdown";
import CommonDropdown1 from "@/components/common/Commondropdown1";
import CommonTable from "@/components/common/CommonTable";
import CustomDateRangePicker from "@/components/common/CustomDateRangePicker";
import OverviewUsericon from "@/components/assets/images/OverviewUsericon.svg";
import OverviewDocumenticon from "@/components/assets/images/OverviewDocumenticon.svg";
import OverviewSupporticon from "@/components/assets/images/OverviewSupporticon.svg";
import OverviewSubscriptionicon from "@/components/assets/images/OverviewSubscriptionicon.svg";
import RevenueIcon from "@/components/assets/images/RevenueIcon.svg";
import ArrowUpGreen from "@/components/assets/images/ArrowUpGreen.svg";
import ArrowDownRed from "@/components/assets/images/ArrowDownRed.svg";
import UserIcon from "@/components/assets/images/UserIcon.svg";
import CopyIcon from "@/components/assets/images/CopyIcon.svg";

export default function ReportsAnalytics() {
  const [timeFilter, setTimeFilter] = useState("This Month");
  const [dateRange, setDateRange] = useState({
    startDate: new Date(2025, 1, 10),
    endDate: new Date(2026, 1, 10),
  });

  const timeOptions = [
    { label: "This Month", value: "This Month" },
    { label: "This Year", value: "This Year" },
  ];

  const overviewData = [
    {
      title: "Total Users",
      value: "5,420",
      change: "12%",
      isPositive: true,
      icon: OverviewUsericon,
      bgColor: "bg-main",
      iconBg: "bg-main/20",
    },
    {
      title: "Document Created",
      value: "3,145",
      change: "12%",
      isPositive: true,
      icon: OverviewDocumenticon,
      bgColor: "bg-[#B38B00]",
      iconBg: "bg-[#B38B00]/20",
    },
    {
      title: "Open Support Tickets",
      value: "14",
      change: "37.8%",
      isPositive: false,
      icon: OverviewSupporticon,
      bgColor: "bg-main",
      iconBg: "bg-main/20",
    },
    {
      title: "Active Subscriptions",
      value: "812",
      change: "12%",
      isPositive: true,
      icon: OverviewSubscriptionicon,
      bgColor: "bg-[#7B61FF]",
      iconBg: "bg-[#7B61FF]/20",
    },
    {
      title: "Total Revenue",
      value: "£4,560",
      change: "37.8%",
      isPositive: false,
      icon: RevenueIcon,
      bgColor: "bg-[#058AC4]",
      iconBg: "bg-[#058AC4]/20",
    },
  ];

  const chartOptions = [{ label: "This Month", value: "This Month" }];

  const reportColumns = [
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
          <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden shrink-0">
            <Image src={UserIcon} alt="User" width={32} height={32} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-sm text-text-1 truncate">
              {row.user}
            </span>
            <span className="text-xs text-text-4 truncate">{row.email}</span>
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
        <span className="text-text-4 text-sm font-medium">
          {row.outstanding}
        </span>
      ),
    },
    {
      header: "Priority",
      accessor: "priority",
      sortable: true,
      render: (row) => (
        <span
          className={`px-4 py-1.25 inline-block text-center rounded-full text-sm font-semibold text-white w-24 ${row.priority === "High" ? "bg-[#F97316]" : row.priority === "Medium" ? "bg-[#FACC15]" : "bg-[#3B82F6]"}`}
        >
          {row.priority}
        </span>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      sortable: true,
      render: (row) => (
        <span
          className={`px-4 py-1.25 inline-block text-center rounded-full text-sm font-semibold text-white w-24 ${row.status === "Paid" ? "bg-[#34C759]" : row.status === "Unpaid" ? "bg-[#EB5757]" : row.status === "Sent" ? "bg-[#3B82F6]" : "bg-[#6B7280]"}`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const reportData = [
    {
      id: "INV-2211",
      user: "Amy Diaz",
      email: "testing@gmail.com",
      ref: "ADM/1026.00",
      issueDate: "17/01/2025",
      dueDate: "17/01/2025",
      amount: "£696.00",
      outstanding: "£696.00",
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
      priority: "High",
      status: "Sent",
    },
  ];

  return (
    <div className="mt-16 md:mt-22 pb-6 text-black bg-[#F9FAFB] min-h-screen">
      <Header title="Reports & Analytics" />
      <main className="lg:max-w-[calc-(100%-300px)] lg:ml-80.5 m-3 mb-0 md:m-6 md:mb-0 bg-white p-3 md:p-6 rounded-md border border-[#E6E6E6]">
        <div className="mb-7.5">
          <h1 className="text-xl font-semibold text-text-1">
            Reports & Analytics
          </h1>
          <p className="text-base text-text-1 mt-1">
            View, generate, and export reports across all modules. Use filters
            to drill into user activity, subscriptions, billing, documents,
            tickets, and overall system usage.
          </p>
        </div>

        {/* Overview Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-text-1">Overview</h2>
          <div className="w-40">
            <CommonDropdown
              options={timeOptions}
              value={timeFilter}
              onChange={setTimeFilter}
            />
          </div>
        </div>

        {/* Metric Cards */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
          <div className="rounded-lg p-4 border border-black/16">
            <div className="inline-flex items-center gap-2 bg-[var(--color-main)] rounded-full p-2">
              <div className="bg-[var(--color-main)] rounded-full p-2">
                <Image
                  src={OverviewUsericon}
                  alt="media"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xs font-semibold">Total Users</h3>
              <h1 className="text-2xl font-semibold mt-1">5,420</h1>
              <div className="inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1">
                <Image src={ArrowUpGreen} alt="media" width={16} height={16} />
                <p className="text-xs text-[#83BF6E]">
                  12 <span className="text-black/50">This Month</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg p-4 border border-black/16">
            <div className="inline-flex items-center gap-2 bg-[#9A7200] rounded-full p-2">
              <div className="bg-[#B38B00] rounded-full p-2">
                <Image
                  src={OverviewDocumenticon}
                  alt="media"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xs font-semibold">Document Created</h3>
              <h1 className="text-2xl font-semibold mt-1">3,145</h1>
              <div className="inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1">
                <Image src={ArrowUpGreen} alt="media" width={16} height={16} />
                <p className="text-xs text-[#83BF6E]">
                  12 <span className="text-black/50">Growth This Month</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg p-4 border border-black/16">
            <div className="inline-flex items-center gap-2 bg-[#B71C1C] rounded-full p-2">
              <div className="bg-[#DC3545] rounded-full p-2">
                <Image
                  src={OverviewSubscriptionicon}
                  alt="media"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xs font-semibold">Open Support Tickets</h3>
              <h1 className="text-2xl font-semibold mt-1">14</h1>
              <div className="inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1">
                <Image src={ArrowDownRed} alt="media" width={16} height={16} />
                <p className="text-xs text-[#FF383C]">
                  37.8% <span className="text-black/50">This Month</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg p-4 border border-black/16">
            <div className="inline-flex items-center gap-2 bg-[#836CFF] rounded-full p-2">
              <div className="bg-[#9285FF] rounded-full p-2">
                <Image
                  src={OverviewSubscriptionicon}
                  alt="media"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xs font-semibold">Active Subscriptions</h3>
              <h1 className="text-2xl font-semibold mt-1">812</h1>
              <div className="inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1">
                <Image src={ArrowUpGreen} alt="media" width={16} height={16} />
                <p className="text-xs text-[#83BF6E]">
                  12 <span className="text-black/50"> Growth This Month</span>
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg p-4 border border-black/16">
            <div className="inline-flex items-center gap-2 bg-[#095D83] rounded-full p-2">
              <div className="bg-[#058AC4] rounded-full p-2">
                <Image src={RevenueIcon} alt="media" width={24} height={24} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xs font-semibold">Total Revenue</h3>
              <h1 className="text-2xl font-semibold mt-1">£4,560</h1>
              <div className="inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1">
                <Image src={ArrowDownRed} alt="media" width={16} height={16} />
                <p className="text-xs text-[#FF383C]">
                  37.8% <span className="text-black/50">This Month</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mb-8">
          {/* Revenue Collected Chart */}
          <div className="p-6 border border-black/10 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-black">
                Revenue Collected Vs. Time Billed
              </h3>
              <div className="w-32">
                <CommonDropdown
                  options={chartOptions}
                  value="This Month"
                  className="whitespace-nowrap h-10!"
                />
              </div>
            </div>
            <div className="h-[250px] relative mt-4">
              {/* Mock Chart SVG */}
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <path
                  d="M 0 150 Q 50 140 100 160 T 200 130 T 300 140 T 400 120"
                  fill="none"
                  stroke="#0F5A96"
                  strokeWidth="2"
                />
                <path
                  d="M 0 160 Q 50 120 100 140 T 200 100 T 300 130 T 400 80"
                  fill="none"
                  stroke="#27AE60"
                  strokeWidth="2"
                />
                <g className="text-[10px] fill-text-4">
                  <text x="0" y="195">
                    Jan
                  </text>
                  <text x="40" y="195">
                    Feb
                  </text>
                  <text x="80" y="195">
                    Mar
                  </text>
                  <text x="120" y="195">
                    Apr
                  </text>
                  <text x="160" y="195">
                    May
                  </text>
                  <text x="200" y="195">
                    Jun
                  </text>
                  <text x="240" y="195">
                    Jul
                  </text>
                  <text x="280" y="195">
                    Aug
                  </text>
                  <text x="320" y="195">
                    Sep
                  </text>
                  <text x="360" y="195">
                    Oct
                  </text>
                </g>
              </svg>
              {/* Tooltip Mock */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-black text-white p-2 rounded text-[10px] shadow-xl">
                <p className="font-bold">Time Billed</p>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                  400 hrs
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6 text-xs font-bold justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#0F5A96]"></div>Revenue
                Collected
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#27AE60]"></div>Time
                Billed
              </div>
            </div>
          </div>

          {/* Paid Vs. Overdue Chart */}
          <div className="p-6 border border-black/10 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-black">Paid Vs. Overdue</h3>
              <div className="w-32">
                <CommonDropdown
                  options={chartOptions}
                  value="This Month"
                  className="whitespace-nowrap h-10!"
                />
              </div>
            </div>
            <div className="h-[250px] flex items-end justify-between gap-4 px-4">
              {[120, 80, 100, 150, 130, 110].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-1 group"
                >
                  <div
                    className="w-full bg-red-100 rounded-t-sm relative overflow-hidden"
                    style={{ height: `${h / 2}px` }}
                  >
                    <div className="absolute inset-0 bg-[#EB5757]"></div>
                  </div>
                  <div
                    className="w-full bg-green-100 rounded-b-sm relative overflow-hidden"
                    style={{ height: `${h / 1.5}px` }}
                  >
                    <div className="absolute inset-0 bg-[#27AE60]"></div>
                  </div>
                  <span className="text-[10px] font-bold text-text-4 mt-2">
                    {50 * (i + 1)}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-6 text-xs font-bold justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#27AE60]"></div>Paid
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#EB5757]"></div>Overdue
              </div>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="p-6 border border-black/10 rounded-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-black">
                Invoice Status Distribution
              </h3>
              <div className="w-32">
                <CommonDropdown
                  options={chartOptions}
                  value="This Month"
                  className="whitespace-nowrap h-10!"
                />
              </div>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#E5E7EB"
                    strokeWidth="20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#27AE60"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="138"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#3B82F6"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="200"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#FACC15"
                    strokeWidth="20"
                    strokeDasharray="251.2"
                    strokeDashoffset="230"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                {[
                  { label: "Paid", value: "45%", color: "bg-[#27AE60]" },
                  { label: "Send", value: "25%", color: "bg-[#3B82F6]" },
                  { label: "Partial", value: "18%", color: "bg-[#FACC15]" },
                  { label: "Overdue", value: "9%", color: "bg-[#EB5757]" },
                  { label: "Draft", value: "3%", color: "bg-[#6B7280]" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-xs font-bold"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${item.color}`}
                      ></div>
                      <span className="text-text-4">{item.label}</span>
                    </div>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-4">Date</label>
            <CustomDateRangePicker
              startDate={dateRange.startDate}
              endDate={dateRange.endDate}
              onChange={(update) => setDateRange(update)}
              className="h-11 shadow-none border-black/16"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-4">Module</label>
            <CommonDropdown1
              options={[
                {
                  label: "User, Subscription, Billing, Tickets, Documents",
                  value: "all",
                },
              ]}
              value="all"
              className="border-black/10!"
              triggerClassName="py-2.5! h-11!"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-4">Status</label>
            <CommonDropdown1
              options={[
                { label: "Active, Inactive, Pending, Completed", value: "all" },
              ]}
              value="all"
              className=" border-black/10!"
              triggerClassName="py-2.5! h-11!"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-4">User Role</label>
            <CommonDropdown1
              options={[{ label: "Select User Role", value: "" }]}
              value=""
              placeholder="Select User Role"
              className=" border-black/10!"
              triggerClassName="py-2.5! h-11!"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-4">
              Subscription Type
            </label>
            <CommonDropdown1
              options={[{ label: "Select Subscription Type", value: "" }]}
              value=""
              placeholder="Select Subscription Type"
              className=" border-black/10!"
              triggerClassName="py-2.5! h-11!"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-4">
              Document Category
            </label>
            <CommonDropdown1
              options={[{ label: "Select Document Category", value: "" }]}
              value=""
              placeholder="Select Document Category"
              className="border-black/10!"
              triggerClassName="py-2.5! h-11!"
            />
          </div>
        </div>

        {/* Generate Button */}
        <button className="w-full bg-main text-white py-2.5 rounded-lg cursor-pointer font-bold text-base hover:bg-main/90 shadow-lg shadow-main/20 transition-all mb-6">
          Generate Report
        </button>

        {/* Generated Report Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-text-1">
            Generated Report
          </h2>
          <div className="group inline-block self-end border border-[#D5D7DA] p-2.75 rounded-lg cursor-pointer hover:bg-(--color-main) hover:border-(--color-main) hover:text-white transition-colors">
            <Image
              src={CopyIcon}
              alt="Copy"
              width={24}
              height={24}
              className="min-w-6 group-hover:brightness-0 group-hover:invert transition-colors"
            />
          </div>
        </div>

        <div className="mb-8">
          <CommonTable
            columns={reportColumns}
            data={reportData}
            headerClassName="bg-[#0A2647] px-6 py-4"
            headerTextClassName="text-white font-bold text-sm"
            selectable={true}
          />
        </div>

        {/* Summary Stats */}
        <div className="">
          <h4 className="text-xl font-bold text-text-1 mb-2">Stats:</h4>
          <ul className="flex flex-col gap-3 list-disc ml-8">
            <li className="text-xl font-medium text-text-1">
              Total Revenue:{" "}
              <span className="font-bold text-text-1">$128,540</span>
            </li>
            <li className="text-xl font-medium text-text-1">
              Pending Invoices:{" "}
              <span className="font-bold text-text-1">14</span>
            </li>
            <li className="text-xl font-medium text-text-1">
              Refunded: <span className="font-bold text-text-1">$2,340</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
