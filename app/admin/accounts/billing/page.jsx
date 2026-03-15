"use client";
import React, { useState } from "react";
import Image from "next/image";
import Commondropdown1 from "@/components/common/Commondropdown";
import CommonTable from "@/components/common/CommonTable";

// Icons
import ArrowUpGreen from "@/components/assets/images/ArrowUpGreen.svg";
import ArrowDownRed from "@/components/assets/images/ArrowDownRed.svg";
import PlusIcon from "@/components/assets/images/AddIcon.svg";
import ArrowLeftGray from "@/components/assets/images/ArrowLeftGray.svg";
import ArrowRightGray from "@/components/assets/images/ArrowRightGray.svg";

export default function Billing() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [timeFilter, setTimeFilter] = useState("This Month");

  const tabs = [
    "Dashboard",
    "Invoices",
    "Installments",
    "Credit Notes",
    "Time Bills",
    "VAT Reports",
    "Timesheet Calendar",
    "Expense",
    "Ledger",
    "Heads-Up",
  ];

  const timeOptions = [
    { label: "This Month", value: "This Month" },
    { label: "Last Month", value: "Last Month" },
    { label: "This Year", value: "This Year" },
  ];

  return (
    <main className="bg-white p-3 md:p-6 rounded-md border border-black/16">
      <div className="flex flex-col gap-6 bg-white">
        {/* Secondary Tabs */}
        <div className="flex items-center bg-white border-b border-main overflow-x-auto whitespace-nowrap scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 cursor-pointer rounded-t-xl transition-all ${
                activeTab === tab
                  ? "bg-main font-bold text-white shadow-sm"
                  : "text-text-8 hover:bg-main font-medium hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col gap-4 bg-[#ECF6FF] border border-[#ECF6FF] rounded-lg p-4">
          <h2 className="text-lg md:text-xl font-semibold">Quick Actions:</h2>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center cursor-pointer gap-2 bg-main text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-main/85">
              <Image
                src={PlusIcon}
                alt="Add Icon"
                width={12}
                height={12}
                className="min-w-5"
              />
              <p>Create Invoice</p>
            </button>
            <button className="flex items-center gap-2 cursor-pointer bg-main text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-main/85">
              <Image
                src={PlusIcon}
                alt="Add Icon"
                width={12}
                height={12}
                className="min-w-5"
              />
              <p>Add Credit Note</p>
            </button>
            <button className="flex items-center gap-2 cursor-pointer bg-main text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-main/85">
              View VAT Summary
            </button>
          </div>
        </div>

        {/* Billing & Revenue Overview */}
        <div className="flex flex-col ">
          <div className="flex items-center justify-between mb-7">
            <h2 className="text-lg md:text-xl text-text-1 font-semibold">
              Billing & Revenue Overview
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <OverviewCard
              title="Total Invoices issued"
              value="128"
              change="+12%"
              isPositive={true}
            />
            <OverviewCard
              title="Total Revenue Collected"
              value="£245,000"
              change="+12%"
              isPositive={true}
            />
            <OverviewCard
              title="Unapplied Credits"
              value="£4,200"
              change="-08%"
              isPositive={false}
            />
            <OverviewCard
              title="Billable Hours"
              value="480 hrs"
              change="-08%"
              isPositive={false}
            />
          </div>
        </div>

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

        {/* Timesheet Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border border-black/16 rounded-lg py-5 px-6">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-xl text-text-1 font-semibold">
                Timesheet
              </h2>
            </div>

            <div className="">
              <div className="flex items-center justify-between mb-4">
                <p className="text-base text-text-1 md:text-lg font-semibold">
                  January 10, 2025{" "}
                  <span className="text-text-5 font-normal block text-sm">
                    Friday
                  </span>
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 border border-[#E6E6E6] rounded-md">
                    <button className="p-2.25 border-r cursor-pointer border-[#E6E6E6] hover:bg-gray-50">
                      <Image
                        src={ArrowLeftGray}
                        alt="Arrow Left Gray"
                        width={12}
                        height={12}
                        className="min-w-5"
                      />
                    </button>
                    <span className="text-sm font-semibold">Month</span>
                    <button className="p-2.25 border-r cursor-pointer border-[#E6E6E6] hover:bg-gray-50 rotate-180">
                      <Image
                        src={ArrowRightGray}
                        alt="Arrow Right Gray"
                        width={12}
                        height={12}
                        className="min-w-5 rotate-180"
                      />
                    </button>
                  </div>
                  <div className="w-24">
                    <Commondropdown1
                      options={[{ label: "Billable", value: "Billable" }]}
                      value="Billable"
                      className="text-xs! py-2.25!"
                    />
                  </div>
                </div>
              </div>

              <div className="border border-[#E6E6E6] rounded-lg overflow-x-auto scrollbar-hide">
                <div className="min-w-[800px]">
                  <div className="grid grid-cols-8 bg-white border-b border-[#E6E6E6]">
                    {[
                      "Sun",
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                      "Total",
                    ].map((day) => (
                      <div
                        key={day}
                        className="p-3 text-center text-xs font-semibold text-text-5 border-r last:border-r-0 border-[#E6E6E6]"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-8 bg-[#E6E6E6] gap-px">
                    {Array.from({ length: 40 }).map((_, i) => {
                      const isTotalColumn = (i + 1) % 8 === 0;
                      const isNextMonth = i >= 30 && !isTotalColumn;
                      const dayNumber = i < 30 ? i + 1 : i - 29;

                      return (
                        <div
                          key={i}
                          className={`p-2 min-h-[85px] flex flex-col justify-between hover:bg-gray-50 cursor-pointer transition-colors ${isNextMonth ? "bg-[#F9FAFB]" : "bg-white"}`}
                        >
                          {!isTotalColumn ? (
                            <>
                              <span
                                className={`text-[11px] font-medium ${isNextMonth ? "text-[#BDBDBD]" : "text-text-5"}`}
                              >
                                {dayNumber}
                              </span>
                              <div className="flex-1 flex items-center justify-center pb-2">
                                <span className="text-sm md:text-base font-bold text-black text-center">
                                  £245,000
                                </span>
                              </div>
                            </>
                          ) : i === 39 ? (
                            <div className="h-full flex items-center justify-center">
                              <span className="text-sm md:text-base font-bold text-black">
                                £245,000
                              </span>
                            </div>
                          ) : (
                            <div className="h-full bg-white" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold text-right">
                Billable Monthly Total:{" "}
                <span className="text-main">£245,000.00</span>
              </p>
              <p className="text-[10px] text-text-8 text-right italic">
                * Billable includes flat fee time entries
              </p>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <p className="text-sm font-bold text-right">
                Monthly Total: <span className="text-main">480.0 hrs</span>
              </p>
              <p className="text-sm font-bold text-right">
                Billing Target: <span className="text-text-8">None</span>
              </p>
            </div>

            <div className="bg-main text-white rounded-xl overflow-hidden mt-4 shadow-lg">
              <div className="grid grid-cols-3 p-3 text-[10px] font-bold uppercase border-b border-white/10">
                <div className="col-span-1">Timesheet</div>
                <div className="text-center">Billable</div>
                <div className="text-right">Total</div>
              </div>
              <div className="flex flex-col divide-y divide-white/10">
                <TimesheetRow label="Today" billable="0.80" total="£1,598.80" />
                <TimesheetRow
                  label="This Week"
                  billable="0.80"
                  total="£480.08"
                />
                <TimesheetRow
                  label="This Month"
                  billable="0.80"
                  total="£1,090.80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-[#E6E6E6] flex flex-col gap-6 shadow-sm min-h-[350px]">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-text-1">
                Revenue Collected vs. Time Billed
              </h3>
              <div className="w-28">
                <Commondropdown1
                  options={timeOptions}
                  value={timeFilter}
                  onChange={setTimeFilter}
                  className="text-[11px]! py-2! whitespace-nowrap!"
                />
              </div>
            </div>
            <div className="flex items-center gap-5 text-[11px] font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-main shadow-sm"></span>
                <span className="text-text-5">Revenue Collected</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#27AE60] shadow-sm"></span>
                <span className="text-text-5">Time Billed</span>
              </div>
            </div>
            <div className="relative flex-1 mt-2">
              <svg
                className="w-full h-full drop-shadow-sm"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00264D" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#00264D" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#27AE60" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#27AE60" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line
                  x1="0"
                  y1="10"
                  x2="100"
                  y2="10"
                  stroke="#F2F2F2"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />
                <line
                  x1="0"
                  y1="20"
                  x2="100"
                  y2="20"
                  stroke="#F2F2F2"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />
                <line
                  x1="0"
                  y1="30"
                  x2="100"
                  y2="30"
                  stroke="#F2F2F2"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />

                {/* Area under lines */}
                <path
                  d="M0 35 Q 25 25, 50 30 T 100 10 L 100 40 L 0 40 Z"
                  fill="url(#grad1)"
                />
                <path
                  d="M0 38 Q 25 35, 50 32 T 100 25 L 100 40 L 0 40 Z"
                  fill="url(#grad2)"
                />

                {/* Main Lines */}
                <path
                  d="M0 35 Q 25 25, 50 30 T 100 10"
                  fill="none"
                  stroke="#00264D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0 38 Q 25 35, 50 32 T 100 25"
                  fill="none"
                  stroke="#27AE60"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex justify-between mt-3 text-[10px] text-text-5 uppercase font-bold px-1">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E6E6E6] flex flex-col gap-6 shadow-sm min-h-[350px]">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-text-1">
                Paid Vs. Overdue
              </h3>
              <div className="w-28">
                <Commondropdown1
                  options={timeOptions}
                  value={timeFilter}
                  onChange={setTimeFilter}
                  className="text-[11px]! py-2! whitespace-nowrap!"
                />
              </div>
            </div>
            <div className="flex items-center gap-5 text-[11px] font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#27AE60] shadow-sm"></span>{" "}
                <span className="text-text-5">Paid</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EB5757] shadow-sm"></span>{" "}
                <span className="text-text-5">Overdue</span>
              </div>
            </div>
            <div className="flex-1 flex items-end justify-between gap-3 mt-4">
              {[15, 30, 25, 40, 35, 10, 45, 50].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col gap-2 items-center group cursor-pointer"
                >
                  <div className="w-full flex flex-col-reverse gap-0.5 h-36 bg-[#F9FAFB]/50 rounded-t-lg overflow-hidden transition-all group-hover:bg-[#F9FAFB]">
                    <div
                      className="bg-[#27AE60] w-full rounded-t-[2px] transition-all group-hover:opacity-90"
                      style={{ height: `${h}%` }}
                    ></div>
                    <div
                      className="bg-[#EB5757] w-full transition-all group-hover:opacity-90"
                      style={{ height: `${h / 2}%` }}
                    ></div>
                  </div>
                  <span className="text-[9px] text-text-5 uppercase font-bold">
                    100
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E6E6E6] flex flex-col gap-6 shadow-sm min-h-[350px]">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-text-1">
                Invoice Status Distribution
              </h3>
              <div className="w-28">
                <Commondropdown1
                  options={timeOptions}
                  value={timeFilter}
                  onChange={setTimeFilter}
                  className="text-[11px]! py-2! whitespace-nowrap!"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-around gap-6 mt-2">
              <div className="relative w-36 h-36 md:w-44 md:h-44">
                <svg
                  viewBox="0 0 36 36"
                  className="w-full h-full transform -rotate-90 drop-shadow-md"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="transparent"
                    stroke="#F2F4F7"
                    strokeWidth="3.5"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="transparent"
                    stroke="#27AE60"
                    strokeWidth="4"
                    strokeDasharray="45 100"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="transparent"
                    stroke="#00264D"
                    strokeWidth="4"
                    strokeDasharray="25 100"
                    strokeDashoffset="-45"
                    strokeLinecap="round"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="transparent"
                    stroke="#F2994A"
                    strokeWidth="4"
                    strokeDasharray="10 100"
                    strokeDashoffset="-70"
                    strokeLinecap="round"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-bold text-text-5 uppercase tracking-wide">
                    Total
                  </span>
                  <span className="text-xl font-bold text-text-1">128</span>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 flex-1 w-full sm:w-auto">
                <StatusLegend label="Paid" percent="45%" color="bg-[#27AE60]" />
                <StatusLegend label="Send" percent="25%" color="bg-main" />
                <StatusLegend
                  label="Partial"
                  percent="10%"
                  color="bg-[#F2994A]"
                />
                <StatusLegend
                  label="Overdue"
                  percent="9%"
                  color="bg-[#EB5757]"
                />
                <StatusLegend label="Draft" percent="3%" color="bg-[#BDBDBD]" />
                <StatusLegend
                  label="Unsent"
                  percent="2%"
                  color="bg-[#4F4F4F]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overdue Invoices Table */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Overdue Invoices</h2>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search invoice, name, ref..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#E6E6E6] text-sm focus:outline-none focus:ring-1 focus:ring-main"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-text-8"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11 11L14 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="text-xs font-bold text-text-8 whitespace-nowrap">
                Status:
              </span>
              <div className="w-32">
                <Commondropdown1
                  options={[{ label: "All", value: "All" }]}
                  value="All"
                  className="text-xs!"
                />
              </div>
            </div>
          </div>

          <CommonTable
            columns={invoiceColumns}
            data={invoiceData}
            selectable={true}
            // headerClassName="bg-main border-y border-[#EAECF0]"
            // headerTextClassName="text-white"
            // headerSeparatorClassName="hidden"
            // sortIconColor="white"
            // bodyTextClassName="text-[#535862]"
          />
        </div>
      </div>
    </main>
  );
}

// Helpers
const getPriorityStyle = (priority) => {
  switch (priority) {
    case "High":
      return "bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]";
    case "Medium":
      return "bg-[#F2F4F7] text-[#344054] border-[#D0D5DD]";
    case "Low":
      return "bg-[#ECFDF3] text-[#027A48] border-[#ABEFC6]";
    default:
      return "bg-gray-50 text-gray-600 border-gray-200";
  }
};

const getInvoiceStatusStyle = (status) => {
  switch (status) {
    case "Paid":
      return "bg-[#ECFDF3] text-[#027A48]";
    case "Unpaid":
      return "bg-[#FFF1F3] text-[#C01048]";
    case "Unsent":
      return "bg-[#F2F4F7] text-[#344054]";
    case "Sent":
      return "bg-[#EFF8FF] text-[#175CD3]";
    default:
      return "bg-gray-50 text-gray-600";
  }
};

const invoiceColumns = [
  { header: "Invoice No.", accessor: "id" },
  {
    header: "User Name",
    accessor: "user",
    render: (row) => (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden"></div>
        <div className="flex flex-col">
          <span className="font-bold text-[#181D27]">{row.user}</span>
          <span className="text-[10px] opacity-60">{row.email}</span>
        </div>
      </div>
    ),
  },
  { header: "Reference", accessor: "ref" },
  {
    header: "Issue Date",
    accessor: "issueDate",
    render: (row) => (
      <div className="flex flex-col">
        <span>{row.issueDate}</span>
        <span className="text-[10px] opacity-60">{row.dueDate}</span>
      </div>
    ),
  },
  { header: "Total Amount", accessor: "amount" },
  { header: "Outstanding", accessor: "outstanding" },
  {
    header: "Priority",
    accessor: "priority",
    render: (row) => (
      <span
        className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getPriorityStyle(row.priority)}`}
      >
        {row.priority}
      </span>
    ),
  },
  {
    header: "Status",
    accessor: "status",
    render: (row) => (
      <span
        className={`px-3 py-1 rounded-full text-[10px] font-bold ${getInvoiceStatusStyle(row.status)}`}
      >
        {row.status}
      </span>
    ),
  },
  {
    header: "Action",
    accessor: "action",
    render: () => (
      <button className="p-1.5 hover:bg-gray-100 rounded-md">
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
    email: "amy@gmail.com",
    ref: "ADM/102501",
    issueDate: "17/01/2025",
    dueDate: "17/12/2025",
    amount: "£898.80",
    outstanding: "£898.80",
    priority: "High",
    status: "Paid",
  },
  {
    id: "INV-2212",
    user: "Natalie Doratou",
    email: "natatalie@gmail.com",
    ref: "ADM/102502",
    issueDate: "17/01/2025",
    dueDate: "17/12/2025",
    amount: "£898.80",
    outstanding: "£898.80",
    priority: "Low",
    status: "Unpaid",
  },
  {
    id: "INV-2213",
    user: "Jennifer Hernandez",
    email: "jennifer@gmail.com",
    ref: "ADM/102503",
    issueDate: "17/01/2025",
    dueDate: "17/12/2025",
    amount: "£898.80",
    outstanding: "£898.80",
    priority: "Medium",
    status: "Unsent",
  },
  {
    id: "INV-2214",
    user: "Zala Adebe",
    email: "zalaad@gmail.com",
    ref: "ADM/102504",
    issueDate: "17/01/2025",
    dueDate: "17/12/2025",
    amount: "£898.80",
    outstanding: "£898.80",
    priority: "High",
    status: "Sent",
  },
];

function StatusLegend({ label, percent, color }) {
  return (
    <div className="flex items-center justify-between text-xs font-semibold py-1 border-b border-[#F2F4F7] last:border-0 hover:bg-[#F9FAFB] transition-colors rounded px-1 cursor-default">
      <div className="flex items-center gap-2">
        <span className={`w-2.5 h-2.5 rounded-full shadow-sm ${color}`}></span>
        <span className="text-text-5">{label}</span>
      </div>
      <span className="text-text-1">{percent}</span>
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M7.5 9L4.5 6L7.5 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TimesheetRow({ label, billable, total }) {
  return (
    <div className="grid grid-cols-3 p-4 items-center gap-2">
      <div className="text-xs font-bold text-white/80">{label}</div>
      <div className="text-xs text-center font-medium opacity-90">
        {billable}
      </div>
      <div className="text-xs text-right font-bold">{total}</div>
    </div>
  );
}

function OverviewCard({ title, value, change, isPositive }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-[#E6E6E6] flex flex-col gap-2">
      <p className="text-[13px] font-bold text-black uppercase tracking-wider">
        {title}
      </p>
      <div className="flex items-end justify-between">
        <h3 className="text-lg md:text-2xl font-semibold">{value}</h3>
      </div>
      <div
        className={`w-fit flex items-center gap-1 text-xs font-medium px-1 rounded-lg ${isPositive ? "bg-[#FCFCFC] text-[#027A48]" : "bg-[#FCFCFC] text-[#C01048]"}`}
      >
        <Image
          src={isPositive ? ArrowUpGreen : ArrowDownRed}
          alt=""
          width={12}
          height={12}
        />
        {change}{" "}
        <span className="text-text-8 ml-1 text-xs font-medium">this month</span>
      </div>
    </div>
  );
}

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
