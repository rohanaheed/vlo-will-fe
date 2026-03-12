"use client";
import React, { useState } from "react";
import Image from "next/image";
import ArrowBack from "@/components/assets/images/ArrowBack.svg";
import UserIcon from "@/components/assets/images/UserIcon.svg";
import ArrowUpGreen from "@/components/assets/images/ArrowUpGreen.svg";
import TableEyeIcon from "@/components/assets/images/TableEyeIcon.svg";
import DownloadIcon from "@/components/assets/images/DownloadIcon.svg";
import SendIcon from "@/components/assets/images/SendIcon1.svg";
import dotsIcon from "@/components/assets/images/dots.svg";
import ChevronUp from "@/components/assets/images/ChevronTopWhite.svg";
import DotMenuIcon from "@/components/assets/images/DotMenuIcon.svg";
import SearchIcon from "@/components/assets/images/SearchIcon.svg";
import CommonTable from "@/components/common/CommonTable";
import ArrowFillDownWhite from "@/components/assets/images/ArrowFillDownWhite.svg";

const ViewDetail = ({ ticket, onBack }) => {
  const attachmentColumns = [
    {
      header: "File Name",
      accessor: "name",
      sortable: true,
    },
    {
      header: "Uploaded By",
      accessor: "uploader",
      sortable: true,
    },
    {
      header: "Date",
      accessor: "date",
      sortable: true,
    },
    {
      header: "Action",
      accessor: "action",
      render: (row) => (
        <div className="flex items-center justify-start gap-2">
          <button className="p-1.5 border border-[#D5D7DA] rounded-lg hover:bg-[#D5D7DA] transition-all cursor-pointer">
            <Image src={TableEyeIcon} alt="view" width={18} height={18} />
          </button>
          <button className="p-1.5 border border-[#D5D7DA] rounded-lg hover:bg-[#D5D7DA] transition-all cursor-pointer">
            <Image src={DownloadIcon} alt="download" width={18} height={18} />
          </button>
        </div>
      ),
    },
  ];

  const timeline = [
    { date: "15/9/2025, 08:12 AM", activity: "Ticket assigned to Sarah." },
    { date: "14/9/2025, 10:12 AM", activity: "Support replied to the user." },
    { date: "14/9/2025, 09:45 AM", activity: "Ticket created by user." },
  ];

  const attachments = [
    {
      name: "error_screenshot.png",
      uploader: "User",
      date: "29/03/2025 10:09 Pm",
    },
    {
      name: "system_log.pdf",
      uploader: "Support",
      date: "29/03/2025 10:09 Pm",
    },
  ];

  const initialConversation = [
    {
      sender: "User",
      message: "Unable to download my will document.",
      time: "09:21",
      date: "Yesterday",
      isMe: true,
      subMessage:
        "Could you please help me with this? I've tried multiple browsers.",
    },
    {
      sender: "Support",
      message: "We're checking the issue.",
      time: "09:21",
      isSupport: true,
    },
    {
      sender: "User",
      message: "Thank God I found you.",
      time: "09:21",
    },
    {
      sender: "User",
      message: "Unable to download my will document.",
      time: "09:21",
    },
    {
      sender: "Support",
      message: "We have forwarded this to the technical team.",
      time: "09:21",
      isSupport: true,
    },
    {
      sender: "Support",
      message: "We're checking the issue.",
      time: "09:21",
      isSupport: true,
      date: "14/09/2025, 09:45 AM",
      isMe: true,
      subMessage: "We have forwarded this to the technical team.",
      emoji: "😊",
    },
    {
      sender: "User",
      message: "I'm unable to download my will document. It shows an error.",
      time: "09:22",
      emoji: "👍",
    },
    {
      sender: "Support",
      message: "We have forwarded this to the technical team.",
      time: "09:22",
      isSupport: true,
      isMe: true,
      subMessage: "We're currently processing your request.",
    },
    {
      sender: "Support",
      message: "Thanks for reporting this. We're checking the issue.",
      time: "09:22",
      isSupport: true,
    },
  ];

  const [messages, setMessages] = useState(initialConversation);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      sender: "User",
      message: inputValue,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      isSupport: true,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-[calc(100vh-115px)] md:min-h-[calc(100vh-165px)] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="cursor-pointer p-2 rounded-full hover:bg-white transition-all"
        >
          <Image src={ArrowBack} alt="back" width={24} height={24} />
        </button>
        <h1 className="text-lg font-bold text-[#1A2232]">
          Ticket View Details
        </h1>
      </div>
      <div className="border border-black/16 rounded-2xl mt-6 p-4 md:p-6 flex-1 flex flex-col">
        {/* User Info Card */}
        <div className="bg-white rounded-2xl">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center border border-black/8">
                <Image src={UserIcon} alt="avatar" width={32} height={32} />
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-semibold text-text-1">
                  Ahmed Khan
                </h2>
                <p className="text-sm text-text-4 "> ahmedekhan@gmail.com</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm flex-1">
              <div className="flex flex-col gap-2.5">
                <p className="text-text-3">
                  Ticket ID: <span className="font-bold">13548</span>
                </p>
                <p className="text-text-3">
                  Subject:{" "}
                  <span className="font-bold">Unable to download PDF</span>
                </p>
                <p className="text-text-3">
                  Category: <span className="font-bold">Document Issues</span>
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-text-3">Priority:</p>
                  <span className="bg-[#F57C00] flex justify-center items-center gap-1 text-white text-sm px-2.5 w-25 py-1.25 rounded-full font-semibold">
                    <Image src={ChevronUp} alt="media" width={11} height={11} />
                    High
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-text-3">Status:</p>
                  <span className="bg-[#6366F1] w-25 flex justify-center items-center text-white text-sm px-2 py-1.25 rounded-full font-semibold">
                    In Progress
                  </span>
                </div>
                <p className="text-text-3">
                  Created On:{" "}
                  <span className="font-bold">14/9/2025 at 09:45 AM</span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-text-3">
                  Account Status: <span className="font-bold">Active</span>
                </p>
                <p className="text-text-3">
                  Subscription Type:{" "}
                  <span className="font-bold">Monthly Plan</span>
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-text-3">
                    Amount: <span className="font-bold">£0</span>
                  </p>
                  <p className="text-text-4 text-xs px-1.5 ml-4 py-0.25 rounded-md font-medium border border-black/16 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17B26A]"></span>
                    Paid
                  </p>
                </div>
                <p className="text-text-3">
                  Payment Date: <span className="font-bold">12/07/2024</span>
                </p>
                <p className="text-text-3">
                  Total Tickets: <span className="font-bold">5</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Ticket Timeline */}
          <div className="flex flex-col">
            <div className="bg-main px-2.5 py-2">
              <h3 className="text-white text-base md:text-xl font-semibold">
                Ticket Timeline
              </h3>
            </div>
            <div className="pt-4 md:pt-6">
              {timeline.map((item, i) => (
                <ul key={i} className="space-y-4 list-disc">
                  <li className="flex items-start gap-2 text-base text-text-1 font-bold">
                    <span className="text-text-4 text-regular flex items-center">
                      {item.date} :
                    </span>
                    <span className="text-text-4 text-regular">
                      {item.activity}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          {/* Ticket Description */}
          <div className="flex flex-col">
            <div className="bg-main px-2.5 py-2">
              <h3 className="text-white text-base md:text-xl font-semibold">
                Ticket Description
              </h3>
            </div>
            <div className="pt-4 md:pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-base font-bold text-text-1 min-w-[200px] lg:min-w-[300px]">
                  Issue Description
                </p>
                <p className="text-base font-medium text-text-1">
                  "I'm unable to download my will document. It shows a technical
                  error message every time."
                </p>
              </div>
            </div>
          </div>

          {/* Attachments */}
          <div className="flex flex-col">
            <div className="bg-main px-2.5 py-2">
              <h3 className="text-white text-base md:text-xl font-semibold">
                Attachments
              </h3>
            </div>
            <div className="mt-6">
              <CommonTable
                columns={attachmentColumns}
                data={attachments}
                selectable={false}
                headerClassName="bg-[#F3F5F7]"
                headerTextClassName="text-black"
                sortIconColor="black"
                headerSeparatorClassName="bg-black"
                bodyTextClassName="text-text-3"
              />
            </div>
          </div>

          {/* Conversation History */}
          <div className="flex flex-col flex-1 min-h-0 min-w-0">
            <div className="bg-main px-2.5 py-2 shrink-0 mb-6">
              <h3 className="text-white text-base md:text-xl font-semibold">
                Conversation History
              </h3>
            </div>

            <div className="flex flex-col flex-1 min-h-0 border border-black/16 rounded-lg mt-0">
              {/* Chat Messages */}
              <div className="flex flex-1 flex-col min-h-0">
                <div className="flex max-md:flex-col gap-4 md:items-center justify-between border-b py-5 px-4 md:px-6 border-black/16">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#F4F4F5] rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src="https://ui-avatars.com/api/?name=Sales+Network"
                        alt="sales"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-lg md:text-xl text-black whitespace-nowrap">
                        Sales Network
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-end">
                    <div className="p-2 bg-main cursor-pointer rounded-full hover:bg-main/85 transition-all">
                      <Image
                        src={SearchIcon}
                        alt="search"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div className="p-2 cursor-pointer rounded-full hover:bg-gray-100 transition-all">
                      <Image
                        src={DotMenuIcon}
                        alt="dots"
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto max-h-[500px] md:max-h-[800px] scrollbar-hide flex flex-col-reverse gap-8 md:px-8 px-4 py-6">
                  {[...messages].reverse().map((msg, i) => (
                    <div key={i} className="flex flex-col gap-6">
                      <div
                        className={`flex ${msg.isSupport ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] md:max-w-[70%] flex flex-col gap-1 relative`}
                        >
                          {/* Bubble Tail */}
                          {msg.isSupport ? (
                            <div className="absolute -right-1 bottom-0 text-[#ECF6FF]">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M0 20 C 4 20 20 20 20 20 C 20 20 20 4 16 0 C 16 0 4 16 0 20 Z" />
                              </svg>
                            </div>
                          ) : (
                            <div className="absolute -left-[11px] bottom-0 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M20 20 C 16 20 0 20 0 20 C 0 20 0 4 4 0 C 4 0 16 16 20 20 Z" />
                              </svg>
                              {/* Overlay to hide border where tail meets bubble */}
                              <div className="absolute bottom-0 left-[11px] w-[3px] h-[10px] bg-white"></div>
                            </div>
                          )}

                          <div
                            className={`px-2.5 py-1.25 rounded-xl text-sm relative ${
                              msg.isSupport
                                ? "bg-[#ECF6FF] border border-black/6 text-black rounded-br-none"
                                : "bg-white border border-black/6 text-black rounded-bl-none"
                            }`}
                          >
                            {msg.isMe && (
                              <div
                                className={`bg-[#F3F5F7] rounded-lg p-2 mb-2 border-[#FF0000] ${msg.isSupport ? "border-r-4 text-left" : "border-l-4 text-left"}`}
                              >
                                <p className="text-sm font-bold text-[#FF0000] mb-0.5">
                                  You
                                </p>
                                <p className="text-xs text-[#232626]">
                                  {msg.message}
                                </p>
                              </div>
                            )}
                            <p className="leading-relaxed text-[14px]">
                              {msg.isMe ? msg.subMessage : msg.message}
                            </p>
                            <div className="flex relative items-center justify-between gap-1 mt-1.5">
                              {msg.emoji && (
                                <div className="bg-white absolute bottom-0 translate-y-3.5 border border-[#F0E9DF] rounded-full px-1.5 py-0.5 flex items-center justify-center shadow-sm -ml-1 mt-1">
                                  <span className="text-[12px]">
                                    {msg.emoji}
                                  </span>
                                </div>
                              )}
                              <div className="flex items-center gap-1 ml-auto">
                                <span className="text-[11px] text-black/50">
                                  {msg.time}
                                </span>
                                {msg.isSupport && (
                                  <div className="flex">
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M2 12L7 17L13 11"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M9 12L14 17L20 11"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {msg.date && (
                        <div className="flex justify-center">
                          <span className="text-xs font-bold text-black border border-black/16 px-4 py-0.5 min-w-25 flex justify-center items-center rounded-full">
                            {msg.date}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-4 md:p-6">
                  <div className="relative flex items-center border border-black/16 rounded-xl px-4 py-2.75 focus-within:border-main focus-within:ring-1 focus-within:ring-main transition-all">
                    <input
                      type="text"
                      placeholder="Type a message"
                      className="flex-1 bg-transparent outline-none text-[14px] w-full text-text-1"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyPress}
                    />
                    <div className="flex items-center gap-3 ml-2">
                      <button className="cursor-pointer text-text-7 hover:text-[#1A2232] transition-colors">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                          <line x1="9" y1="9" x2="9.01" y2="9" />
                          <line x1="15" y1="9" x2="15.01" y2="9" />
                        </svg>
                      </button>
                      <button className="cursor-pointer text-text-7 hover:text-[#1A2232] transition-colors">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#003366"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                        </svg>
                      </button>
                      <div className="w-px h-5 bg-gray-600"></div>
                      <button
                        onClick={handleSendMessage}
                        className="cursor-pointer text-text-1 hover:text-main transition-colors"
                      >
                        <Image
                          src={SendIcon}
                          alt="send"
                          width={20}
                          height={20}
                          className=""
                        />
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex max-md:flex-col flex-wrap items-center gap-3 mt-4">
                    <button className="bg-main max-md:w-full text-white px-5 py-2.25 rounded-full text-sm hover:bg-main/85 transition-all cursor-pointer">
                      Close Ticket
                    </button>
                    <button className="bg-main max-md:w-full text-white px-5 py-2.25 rounded-full text-sm hover:bg-main/85 transition-all cursor-pointer">
                      Merge Ticket
                    </button>
                    <button className="bg-main max-md:w-full text-white px-5 py-2.25 rounded-full text-sm hover:bg-main/85 transition-all cursor-pointer">
                      Assign Ticket
                    </button>
                    <div className="relative group max-md:w-full">
                      <button className="bg-main max-md:w-full justify-center text-white px-5 py-2.25 rounded-full text-sm hover:bg-main/85 transition-all cursor-pointer flex items-center gap-2">
                        Update Status
                        <Image
                          src={ArrowFillDownWhite}
                          alt="arrow"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                    <button className="bg-main max-md:w-full text-white px-5 py-2.25 rounded-full text-sm hover:bg-main/85 transition-all cursor-pointer">
                      Add Note
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ViewDetail;
