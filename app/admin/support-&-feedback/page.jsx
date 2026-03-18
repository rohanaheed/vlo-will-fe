"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Header from "@/components/common/Header";
import CommonDropdown1 from "@/components/common/Commondropdown1";
import CommonDropdown from "@/components/common/Commondropdown";
import CommonTable from "@/components/common/CommonTable";
import CalendarIcon from "@/components/assets/images/CalendarIcon.svg";
import calenderIcon from "@/components/assets/images/CalendarIcon1.svg";
import DownloadIcon from "@/components/assets/images/DownloadIcon.svg";
import EditIcon from "@/components/assets/images/EditIconWhite.svg";
import UserIcon from "@/components/assets/images/UserIcon.svg";
import ArrowUpGreen from "@/components/assets/images/ArrowUpRight.svg";
import ArrowDownRed from "@/components/assets/images/ArrowDownRed.svg";
import StarReview from "@/components/assets/images/StarIcon.svg";
import searchIcon from "@/components/assets/images/SearchIconBlack.svg";
import copyIcon from "@/components/assets/images/CopyIcon.svg";
import TicketView from "./ticket-view/page";

export default function SupportFeedback() {
  const [timeFilter, setTimeFilter] = useState("This Month");
  const [trendFilter, setTrendFilter] = useState("Yearly");
  const [growthbutton, setGrowthbutton] = useState("Yearly");
  const dateInputRef = useRef(null);
  const [showTicketView, setShowTicketView] = useState(false);

  const overviewData = [
    {
      title: "Total Feedback Received",
      value: "1,248",
      change: "12%",
      isPositive: true,
    },
    {
      title: "Average Rating",
      value: "4.2 / 5",
      change: "12%",
      isPositive: true,
    },
    {
      title: "Positive Feedback",
      value: "78%",
      change: "37.8%",
      isPositive: false,
    },
    {
      title: "Feedback With Attachments",
      value: "163",
      change: "12%",
      isPositive: true,
    },
  ];

  const donutCharts = [
    {
      title: "Overall Experience - Ease Of Use",
      data: [
        { label: "Satisfied", value: "62%", color: "bg-[#27AE60]" },
        { label: "Neutral", value: "25%", color: "bg-[#3B82F6]" },
        { label: "Not Satisfied", value: "13%", color: "bg-[#EB5757]" },
      ],
    },
    {
      title: "Document Clarity & Accuracy",
      data: [
        { label: "Excellent", value: "48%", color: "bg-[#27AE60]" },
        { label: "Good", value: "32%", color: "bg-[#3B82F6]" },
        { label: "Fair", value: "15%", color: "bg-[#9E9E9E]" },
        { label: "Poor", value: "5%", color: "bg-[#EB5757]" },
      ],
    },
    {
      title: "Website Navigation",
      data: [
        { label: "Easy", value: "55%", color: "bg-[#27AE60]" },
        { label: "Manageable", value: "30%", color: "bg-[#3B82F6]" },
        { label: "Difficult", value: "15%", color: "bg-[#EB5757]" },
      ],
    },
    {
      title: "Improvement Areas Requested",
      data: [
        { label: "Responsiveness", value: "41%", color: "bg-[#0A2647]" },
        {
          label: "Clarity of instructions",
          value: "33%",
          color: "bg-[#F97316]",
        },
        { label: "Documentation", value: "26%", color: "bg-[#095D83]" },
      ],
    },
  ];

  const feedbackColumns = [
    {
      header: "User Name",
      accessor: "user",
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
      header: "Overall Rating",
      accessor: "rating",
      render: (row) => (
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={StarReview}
              alt="star"
              width={20}
              height={20}
              className={i < row.rating ? "" : "grayscale opacity-25"}
            />
          ))}
        </div>
      ),
    },
    { header: "Experience Ease of Use", accessor: "experience" },
    { header: "Document Clarity", accessor: "clarity" },
    { header: "Website Navigation", accessor: "navigation" },
    { header: "Improvement Area", accessor: "improvement" },
    {
      header: "Review",
      accessor: "review",
      render: (row) => (
        <p className="text-xs text-text-3 max-w-[200px] truncate">
          {row.review}
        </p>
      ),
    },
    { header: "Supporting File", accessor: "file" },
    { header: "Date", accessor: "date" },
  ];

  const feedbackData = [
    {
      user: "Amy Diaz",
      email: "testing@gmail.com",
      rating: 4,
      experience: "Satisfied",
      clarity: "Excellent",
      navigation: "Easy",
      improvement: "Responsiveness",
      review: "Very smooth experience.",
      file: "File.pdf",
      date: "28/08/2025",
    },
    {
      user: "Natalia González",
      email: "testing@gmail.com",
      rating: 3,
      experience: "Neutral",
      clarity: "Good",
      navigation: "Difficult",
      improvement: "Clarity of instructions",
      review: "Good but some steps were unclear.",
      file: "Image.jpg",
      date: "28/08/2025",
    },
    {
      user: "Jennifer Hernandez",
      email: "testing@gmail.com",
      rating: 3,
      experience: "Not satisfied",
      clarity: "Fair",
      navigation: "Manageable",
      improvement: "Documentation",
      review: "Hard to find some options.",
      file: "Screenshot.png",
      date: "28/08/2025",
    },
  ];

  return (
    <div className="mt-16 md:mt-22 pb-6 text-black bg-[#F9FAFB] min-h-screen">
      <Header title="Support & Feedback" />
      <main className="lg:max-w-[calc-(100%-300px)] lg:ml-80.5 m-3 mb-0 md:m-6 md:mb-0 bg-white p-3 md:p-6 rounded-md border border-[#E6E6E6]">
        {/* Page Header */}
        {showTicketView ? (
          <TicketView setShowTicketView={setShowTicketView} />
        ) : (
          <>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-xl font-semibold text-text-1">
                  User Feedback
                </h1>
                <p className="text-base text-text-1">
                  View ratings, comments, and suggestions submitted by users.
                </p>
              </div>
              <button
                onClick={() => setShowTicketView(true)}
                className="flex items-center gap-2 bg-main text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-main/90 transition-all cursor-pointer"
              >
                <Image src={EditIcon} alt="edit" width={18} height={18} />
                Edit Feedback Form
              </button>
            </div>

            {/* Overview Row */}
            <div className="flex items-center justify-between mb-7.5">
              <h2 className="md:text-xl text-lg font-semibold text-text-1">
                Overview
              </h2>
              <div className="w-40">
                <CommonDropdown
                  options={[{ label: "This Month", value: "This Month" }]}
                  value={timeFilter}
                  onChange={setTimeFilter}
                  className="py-2.25! text-black!"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
              {overviewData.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-black/8 rounded-lg py-4 px-6 bg-white"
                >
                  <span className="text-xs font-semibold text-black">
                    {item.title}
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-2xl font-semibold text-black">
                      {item.value}
                    </span>
                  </div>
                  <div className="flex w-fit mt-1 items-center gap-1 bg-gray-50 px-2 py-1 rounded-sm">
                    <Image
                      src={item.isPositive ? ArrowUpGreen : ArrowDownRed}
                      alt="arrow"
                      width={14}
                      height={14}
                    />
                    <span
                      className={`text-xs font-bold ${item.isPositive ? "text-green-500" : "text-red-500"}`}
                    >
                      {item.change}
                    </span>
                    <span className="text-[10px] text-text-4">This Month</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Performance Charts Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
              {donutCharts.map((chart, idx) => (
                <div key={idx} className="border border-black/8 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-black mb-8 h-10">
                    {chart.title}
                  </h3>
                  <div className="flex flex-col items-center gap-6">
                    <div className="relative w-32 h-32">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full -rotate-90"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="#F3F4F6"
                          strokeWidth="20"
                        />
                        {/* Simplified mock segments */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke={
                            chart.data[0].color.includes("27AE60")
                              ? "#27AE60"
                              : chart.data[0].color.includes("0A2647")
                                ? "#0A2647"
                                : "#3B82F6"
                          }
                          strokeWidth="20"
                          strokeDasharray="251.2"
                          strokeDashoffset="100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-full space-y-2">
                      {chart.data.map((seg, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between text-[11px] font-bold"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-3 h-3 rounded-full ${seg.color}`}
                            ></div>
                            <span className="text-text-4">{seg.label}</span>
                          </div>
                          <span className="text-text-1">{seg.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trend Reports Section */}
            <div className="border border-black/8 rounded-xl p-4 mb-6">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-5">
                <div className="overflow-x-auto scrollbar-thin">
                  <h2 className="text-xl md:text-[30px] font-semibold text-text-1">
                    Trend Reports
                  </h2>
                  <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-[6px] border border-[#D5D7DA]">
                    <Image
                      src={ArrowUpGreen}
                      alt="trend"
                      width={14}
                      height={14}
                    />
                    <span className="text-xs font-bold text-text-4">2.4%</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 self-end justify-end max-lg:flex-wrap">
                  <div className="self-end max-w-full">
                    <CommonDropdown
                      options={[
                        {
                          label: "Feedback submissions / Average rating trend",
                          value: "trend",
                        },
                      ]}
                      value="Feedback submissions / Average rating trend"
                      className="py-2.25! text-black!"
                    />
                  </div>
                  <div className="">
                    <div className="flex self-end items-center w-fit border border-[#D5D7DA] rounded-[11px] whitespace-nowrap">
                      <button
                        onClick={() => setGrowthbutton("Yearly")}
                        className={`${growthbutton === "Yearly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
                      >
                        Yearly
                      </button>
                      <button
                        onClick={() => setGrowthbutton("Quarterly")}
                        className={`${growthbutton === "Quarterly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
                      >
                        Quarterly
                      </button>
                      <button
                        onClick={() => setGrowthbutton("Monthly")}
                        className={`${growthbutton === "Monthly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setGrowthbutton("Weekly")}
                        className={`${growthbutton === "Weekly" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
                      >
                        Weekly
                      </button>
                      <button
                        onClick={() => setGrowthbutton("24 hours")}
                        className={`${growthbutton === "24 hours" ? "bg-white text-text-4 border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}
                      >
                        24 hours
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="h-[300px] w-full bg-[#fcfcfc] rounded-lg mt-4 flex items-end px-4 gap-1 overflow-hidden">
                  {/* Line chart mock background */}
                  <svg
                    viewBox="0 0 1000 300"
                    className="absolute top-16 left-0 w-full h-[240px]"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,250 L100,230 L200,240 L300,210 L400,225 L500,190 L600,205 L700,180 L800,185 L900,170 L1000,175"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                    />
                  </svg>
                  {/* Month labels mock */}
                  <div className="w-full flex justify-between absolute bottom-4 px-6 text-[10px] text-text-4 font-bold">
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-6 mt-12 text-[10px] font-bold">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>{" "}
                    2025
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#93C5FD]"></div>{" "}
                    2024
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#DBEAFE]"></div>{" "}
                    2023
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback List Section */}
            <div>
              <h2 className="text-xl font-bold text-text-1 mb-6">
                Feedback List
              </h2>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex md:flex-row flex-col md:items-center gap-2 mb-4 w-full">
                  <div className="w-full relative">
                    <input
                      type="text"
                      placeholder="Search by document name or category..."
                      className="w-full focus:border-black border text-base border-black/16 outline-0 p-4 py-2.25 pr-12 rounded-lg"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-4">
                      <Image
                        src={searchIcon}
                        alt="media"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="w-68">
                    <CommonDropdown
                      options={[{ label: "Select Rating (1-5)", value: "" }]}
                      value=""
                      placeholder="Select Rating (1-5)"
                      //   className="w-full! h-[32px]! rounded-full! py-[4px]! px-[12px]! gap-[8px] font-medium text-xs border! flex! items-center! justify-between! whitespace-nowrap"
                      className="whitespace-nowrap! w-68! h-[45px]!"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <div
                      className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer"
                      onClick={() => dateInputRef.current?.showPicker()}
                    >
                      <Image
                        src={calenderIcon}
                        alt="calendar"
                        width={20}
                        height={20}
                      />
                    </div>
                    <input
                      type="date"
                      ref={dateInputRef}
                      name=""
                      id=""
                      className="w-full text-text-4 focus:border-black border text-base border-black/16 outline-0 py-2.25 pr-0 pl-14 rounded-lg [&::-webkit-calendar-picker-indicator]:hidden text-center"
                      style={{ colorScheme: "light" }}
                    />
                  </div>
                  <div className="group inline-block self-end border border-[#D5D7DA] p-2.5 rounded-lg cursor-pointer hover:bg-(--color-main) hover:border-(--color-main) hover:text-white transition-colors">
                    <Image
                      src={copyIcon}
                      alt="media"
                      width={24}
                      height={24}
                      className="min-w-6 group-hover:brightness-0 group-hover:invert transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="">
                <CommonTable
                  columns={feedbackColumns}
                  data={feedbackData}
                  headerClassName="bg-[#0A2647] px-6 py-4"
                  headerTextClassName="text-white font-bold text-[13px]"
                  //   selectable={true}
                />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
