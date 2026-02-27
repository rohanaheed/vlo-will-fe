"use client";
import React, { useState } from "react";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CommonTable from "@/components/common/CommonTable";

import arrowback from "@/components/assets/images/ArrowBack.svg";

import ChevronDownDoubleIcon from "@/components/assets/images/ChevronDownDoubleIcon.svg";
import ChevronUpDoubleIcon from "@/components/assets/images/ChevronUpDouble.svg";
import ChevronUpWhite from "@/components/assets/images/ChevronUpWhite.svg";
import { useRouter } from "next/navigation";
import PinIcon from "@/components/assets/images/PinIcon.svg";
import CommonDropdown from "@/components/common/Commondropdown1";
import Calendar from "@/components/assets/images/CalendarIcon1.svg";

function page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    subject: "",
    category: null,
    priority: {
      label: "High",
      value: "high",
      icon: ChevronUpDoubleIcon,
      color: "bg-[#F57C00]",
    },
    mainIssue: null,
    description: "",
    experience: "Helpful",
    rating: 1,
  });

  const categoryOptions = [
    { label: "Billing", value: "billing" },
    { label: "Technical", value: "technical" },
    { label: "Account", value: "account" },
  ];

  const priorityOptions = [
    {
      label: "High",
      value: "high",
      icon: ChevronUpDoubleIcon,
      color: "bg-[#F57C00]",
    },
    {
      label: "Medium",
      value: "medium",
      icon: ChevronUpWhite,
      color: "bg-[#FBC02D]",
    },
    { label: "Low", value: "low", icon: ChevronUpWhite, color: "bg-[#388E3C]" },
  ];

  const issueOptions = [
    { label: "Template wasn't right", value: "template" },
    { label: "Editor was hard to use", value: "editor" },
    { label: "Bug or error occurred", value: "bug" },
    { label: "Pricing/Plan", value: "pricing" },
    { label: "Other...", value: "other" },
  ];

  const StarIcon = ({ filled, onClick }) => (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "#FFB400" : "none"}
      stroke={filled ? "#FFB400" : "#D1D5DB"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 md:w-11 md:h-11 cursor-pointer transition-transform hover:scale-110 active:scale-95"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

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
              onClick={() => router.push("/tickets")}
              className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Image src={arrowback} alt="arrowback" width={24} height={24} />
            </button>
            <h2 className="text-black text-lg md:text-xl font-bold">
              Create New Ticket
            </h2>
          </div>

          <div className="border border-black/16 rounded-xl md:p-8 p-4 mt-6 bg-white shadow-sm">
            <div className="space-y-6">
              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-text-4 mb-1.5">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Unable to download PDF"
                  className="w-full border text-text-1 border-black/16 rounded-lg px-3.5 py-2.75 text-sm outline-none focus:border-main transition-colors"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-text-4 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <CommonDropdown
                  options={categoryOptions}
                  value={formData.category}
                  onChange={(val) =>
                    setFormData({ ...formData, category: val })
                  }
                  placeholder="Select Category"
                  className="py-2.75!"
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium text-text-4 mb-2">
                  Priority <span className="text-red-500">*</span>
                </label>
                <CommonDropdown
                  options={priorityOptions}
                  value={formData.priority}
                  onChange={(val) =>
                    setFormData({ ...formData, priority: val })
                  }
                  placeholder="Select Priority"
                  className="py-2.75!"
                  renderSelected={(val) => (
                    <div
                      className={`${val.color} text-white flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold`}
                    >
                      <Image src={val.icon} alt="icon" width={11} height={7} />
                      {val.label}
                    </div>
                  )}
                  renderOption={(val) => (
                    <div
                      className={`${val.color} text-white flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold`}
                    >
                      <Image src={val.icon} alt="icon" width={11} height={7} />
                      {val.label}
                    </div>
                  )}
                />
              </div>

              {/* Main Issue */}
              <div>
                <label className="block text-sm font-medium text-text-4 mb-2">
                  What was the main issue?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <CommonDropdown
                  options={issueOptions}
                  value={formData.mainIssue}
                  onChange={(val) =>
                    setFormData({ ...formData, mainIssue: val })
                  }
                  placeholder="Template wasn't right /Template wasn't right Editor was hard to use/Bug or error occurred Pricing/Plan/Other..."
                  className="py-2.75!"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-text-4 mb-2">
                  Please describe the issue in your own words:{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  placeholder={`Hi [Client Name],

Please find attached your invoice. Let us know if you have any questions.

Thank you,

LawNest UK Billing Team`}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full h-32 border shadow border-black/16 text-text-1 rounded-lg px-3.5 py-2.75 text-sm outline-none focus:border-main transition-colors resize-none"
                />
              </div>

              {/* Attachment */}
              <div className="flex items-center gap-2 cursor-pointer text-text-5 transition-colors">
                <Image src={PinIcon} alt="pin" width={24} height={24} />
                <span className="">Attach invoice PDF</span>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-semibold text-text-4 mb-1.5">
                  How was your experience with our support team?
                </label>
                <div className="flex flex-wrap gap-6">
                  {["Helpful", "Average", "Slow or unhelpful"].map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={formData.experience === opt}
                        onChange={() =>
                          setFormData({ ...formData, experience: opt })
                        }
                        className="w-5 h-5 accent-main rounded-lg border-black/16"
                      />
                      <span className="text-text-5 group-hover:text-text-4 transition-colors">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Section */}
              <div className="text-center">
                <h3 className="text-2xl md:text-4xl font-semibold text-black mb-5">
                  How would you rate any other part of your experience?
                </h3>
                <div className="flex justify-center gap-2 mb-2 md:mb-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      filled={star <= formData.rating}
                      onClick={() => setFormData({ ...formData, rating: star })}
                    />
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex md:flex-row flex-col-reverse items-center gap-4 pt-4 md:pb-6">
                <button
                  onClick={() => router.push("/tickets")}
                  className="flex-1 py-2 border w-full border-black/16 rounded-lg text-black font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => router.push("/tickets")}
                  className="flex-1 py-2 bg-main w-full border border-main text-white rounded-lg font-semibold hover:bg-main/90 transition-colors cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
