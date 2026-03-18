"use client";
import React, { useState } from "react";
import Image from "next/image";
import ArrowBack from "@/components/assets/images/ArrowBack.svg";
import PinIcon from "@/components/assets/images/PinIcon.svg";
import deleteIcon from "@/components/assets/images/DeleteIcon.svg";
import PlusBlueIcon from "@/components/assets/images/PlusBlueIcon.svg";
import MinusIcon from "@/components/assets/images/MinusRemove.svg";
import PlusIcon from "@/components/assets/images/PlusIcon.svg";
import Commondropdown from "@/components/common/Commondropdown";
import CheveronDown from "@/components/assets/images/ChevronDown.svg";
import CloseIon1 from "@/components/assets/images/CloseIon1.svg";

// Sample Icons - Add your actual project SVGs here later
const DragHandleIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400 cursor-grab"
  >
    <circle cx="9" cy="5" r="1.5" fill="currentColor" />
    <circle cx="9" cy="12" r="1.5" fill="currentColor" />
    <circle cx="9" cy="19" r="1.5" fill="currentColor" />
    <circle cx="15" cy="5" r="1.5" fill="currentColor" />
    <circle cx="15" cy="12" r="1.5" fill="currentColor" />
    <circle cx="15" cy="19" r="1.5" fill="currentColor" />
  </svg>
);

const DocumentIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className="text-[#A4A7AE] shrink-0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className="text-gray-400"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const customFieldsData = [
  {
    title: "Personal Information",
    items: [
      "First Name",
      "Middle Name",
      "Last Name",
      "Full Legal Name",
      "Known Alias",
      "Suffix",
      "Title",
      "Date of Birth",
      "Gender",
      "Marital Status",
      "Nationality",
      "Occupation",
      "National Insurance Number",
      "Passport Number",
      "Document Upload",
      "Language Preference",
      "Preferred Pronouns",
    ],
  },
  {
    title: "Contact Information",
    items: [
      "Email Address",
      "Phone Number",
      "Mobile Number",
      "Alternate Phone",
      "Preferred Contact Method",
      "Address (Billing)",
      "Mailing Address",
      "Emergency Contact Name",
      "Emergency Contact Number",
    ],
  },
  {
    title: "Company / Corporate Details",
    items: [
      "Company Name",
      "Trading Name",
      "Company Registration Number",
      "Business Type (LLC, Ltd, Partnership, etc.)",
      "Registered Business Address",
      "Trading Address",
      "Company Website",
      "Representative Name",
      "Position in Company",
      "Contact Email",
      "Contact Phone Number",
    ],
  },
  {
    title: "Matter Details",
    items: [
      "Matter Name",
      "Category",
      "Sub-Category",
      "Matter Description",
      "Date Matter Opened",
      "Matter Status",
      "Priority Level",
      "Caseworker",
      "Supervisor",
      "How Did You Hear About Us?",
      "Matter Reference Number",
      "Client Instructions",
      "Advice Given",
      "Chances of Success",
      "Agreed Plan of Action",
      "Weakness of Case",
      "Additional Information",
      "Key Dates",
    ],
  },
  {
    title: "Family / Dependents",
    items: [
      "Spouse/Partner Name",
      "Marriage Date",
      "Divorce Date",
      "Number of Children",
      "Children",
      "Upload Document",
    ],
  },
  {
    title: "Financial Information",
    items: [
      "Employment Status",
      "Employer Name",
      "Start Date",
      "Job Title",
      "Salary",
      "Income Source",
      "Bank Details",
      "Upload Document",
    ],
  },
  {
    title: "Compliance / Risk Assessment",
    items: [
      "Conflict Check ",
      "Conflict Notes",
      "KYC Verified",
      "AML Checks",
      "Risk Rating",
      "Vulnerability Factors ",
      "Interpreter ",
      "Consent",
      "GDPR Consent",
      "ID Verification",
      "Upload Documents",
      "Decimal",
      "Deferred Task ",
    ],
  },
  {
    title: "System and Workflow Fields",
    items: [
      "Assignee",
      "Reminder",
      "Notes",
      "Matter Participant",
      "Tags",
      "Status",
      "Workflow Stage / Milestone",
      "File Review  ",
    ],
  },
  {
    title: "Digital Inputs / Form Types",
    items: [
      "Single Line Text",
      "Multi Line Text (Paragraph)",
      "Drop Down",
      "Multi Select Dropdown",
      "Radio Buttons",
      "Checkboxes",
      "Date",
      "Date & Time  ",
      "Boolean",
      "Document Upload",
      "Number (Integer)",
      "Decimal",
      "Currency",
      "Rating (Stars, Score)",
      "Section Headers",
      "Hidden Fields",
      "Conditional Fields",
      "Repeatable Sections",
      "Logic-based Visibility",
      "Button",
    ],
  },
];

const SidebarItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasItems = items && items.length > 0;

  return (
    <div className="">
      <button
        onClick={() => hasItems && setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full cursor-pointer p-2 rounded-lg transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm text-black">{title}</span>
        </div>
        {hasItems && (
          <span
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <Image
              src={CheveronDown}
              alt="CheveronDown"
              width={20}
              height={20}
            />
          </span>
        )}
      </button>

      {isOpen && hasItems && (
        <div className="flex flex-col gap-2 pl-2 cursor-pointer mt-1">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-main rounded-lg p-3 py-2.5 flex items-center gap-3 cursor-move hover:border-main transition-colors group"
            >
              <span className="text-sm text-black font-medium">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const questionsData = [
  {
    question: "How would you rate over all experience ease-of-use?",
    type: "text_answers",
    answers: ["Satisfied", "Neutral", "Not satisfied"],
  },
  {
    question: "What can we improve?",
    type: "text_answers",
    answers: ["Responsiveness", "Clarity of Instructions", "Documentation"],
  },
  {
    question: "How would you rate the clarity and accuracy of the documents?",
    type: "text_answers",
    answers: ["Excellent", "Good", "Fair", "Poor"],
  },
  {
    question: "How easy was it to navigate the website?",
    type: "text_answers",
    answers: ["Easy", "Manageable", "Difficult"],
  },
  {
    question: "How would you rate us overall ?",
    type: "rating",
    answers: [],
  },
  {
    question: "Your Review",
    type: "textarea",
    answers: [],
  },
];

const RatingOptionRow = ({ label, stars, score }) => (
  <div className="flex items-center gap-3 w-full">
    <div className="flex items-center gap-2 shrink-0">
      <button className="w-9 h-9 rounded-lg border border-[#FDA29B] flex items-center justify-center text-[#F04438] hover:bg-red-50 transition-colors bg-white">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div className="flex-1">
      <input
        type="text"
        defaultValue={label}
        className="w-full bg-white border border-[#D5D7DA] rounded-lg p-1.5 text-sm text-[#344054] outline-none focus:border-main shadow-sm"
      />
    </div>
    <div className="flex-1 max-w-[240px] h-[36px] bg-white border border-[#D5D7DA] rounded-lg px-3 flex items-center gap-2 shadow-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={i < stars ? "#FBBF24" : "none"}
          stroke={i < stars ? "#FBBF24" : "#D5D7DA"}
          strokeWidth="2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ))}
    </div>
    <div className="w-16">
      <input
        type="text"
        defaultValue={score}
        className="w-full bg-white border border-[#D5D7DA] rounded-lg p-2.5 text-sm text-[#344054] text-center outline-none focus:border-main shadow-sm"
      />
    </div>
  </div>
);

const QuestionFAQItem = ({ q, idx, onRemove }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex group relative">
      {/* FAQ Card */}
      <div className="flex-1 w-full bg-[#F3F5F7] border border-[#F3F5F7] rounded-[10px] p-4 relative">
        <div className="flex flex-col gap-4 pr-8">
          <div>
            <h3 className="text-[15px] font-medium text-[#1A2232] mb-2">
              Question
            </h3>
            <div className="relative">
              <input
                type="text"
                defaultValue={q.question}
                className="w-full bg-white border border-[#F4F4F4] rounded-[10px] p-3 text-sm text-text-1 focus:outline-none focus:ring-2 focus:ring-main font-medium"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="text-[15px] font-medium text-[#1A2232]">Answer</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    q.type === "rating" && setIsExpanded(!isExpanded)
                  }
                  className="w-8 h-8 rounded-[10px] cursor-pointer bg-white border border-[#E6E6E6] flex items-center justify-center hover:bg-gray-50 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                >
                  <Image
                    src={isExpanded ? CloseIon1 : PlusBlueIcon}
                    alt={isExpanded ? "Close" : "Add"}
                    width={16}
                    height={16}
                  />
                </button>
                <button className="w-8 h-8 rounded-[10px] cursor-pointer bg-white border border-[#E6E6E6] flex items-center justify-center hover:bg-red-50 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                  <Image src={deleteIcon} alt="Delete" width={16} height={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap ">
              {q.type === "text_answers" &&
                q.answers.map((ans, ansIdx) => (
                  <input
                    key={ansIdx}
                    type="text"
                    defaultValue={ans}
                    className="flex-1 w-full bg-white border border-[#F4F4F4] rounded-[10px] p-3 text-sm text-text-1 focus:outline-none focus:ring-2 focus:ring-main"
                  />
                ))}
              {q.type === "rating" && (
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center gap-1 w-full bg-white border border-[#F4F4F4] rounded-[10px] p-3 text-sm text-text-1 focus:outline-none focus:ring-2 focus:ring-main font-medium">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#FBBF24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    {[1, 2, 3, 4].map((star) => (
                      <svg
                        key={star}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#D5D7DA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                    <span className="ml-2 font-bold text-base">5.0</span>
                  </div>

                  {isExpanded && (
                    <div className="flex flex-col gap-6 w-full mt-2 animate-in fade-in duration-300">
                      {/* Options */}
                      <div className="flex items-center gap-6 flex-wrap text-[#344054] text-sm">
                        <span className="font-semibold text-sm">
                          Select Option:
                        </span>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-[#D5D7DA] text-main accent-main"
                          />
                          <span>Select All</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 rounded border-[#D5D7DA] text-main accent-main"
                          />
                          <span>Text Only Reviews</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-5 h-5 rounded border-[#D5D7DA] text-main accent-main"
                          />
                          <span>Star Ratings Only</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-[#D5D7DA] text-main accent-main"
                          />
                          <span>Text + Star Rating</span>
                        </label>
                      </div>

                      {/* Color Picker Row */}
                      <div className="flex items-center gap-4 text-sm text-[#344054]">
                        <span className="font-semibold">
                          Custom Colour for Stars
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#FBBF24] border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                          <div className="bg-white border border-[#D5D7DA] rounded-lg px-3 py-1.5 text-sm font-medium shadow-sm">
                            #7F56D9
                          </div>
                        </div>
                      </div>

                      {/* Rating Rows List */}
                      <div className="flex flex-col gap-3">
                        {[
                          { label: "Poor", stars: 1, score: "1.0" },
                          { label: "Fair", stars: 2, score: "2.0" },
                          { label: "Good", stars: 3, score: "3.0" },
                          { label: "Very Good", stars: 4, score: "4.0" },
                          { label: "Excellent", stars: 5, score: "5.0" },
                        ].map((row, i) => (
                          <RatingOptionRow key={i} {...row} />
                        ))}

                        <button className="flex justify-center items-center gap-2 bg-main text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-main/90 transition-all cursor-pointer w-fit mt-3">
                          <Image
                            src={PlusIcon}
                            alt="Add"
                            width={16}
                            height={16}
                          />{" "}
                          Add
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {q.type === "textarea" && (
                <textarea
                  placeholder="Write your comments here"
                  className="w-full bg-white border border-[#F4F4F4] rounded-[10px] p-3 text-sm text-text-1 focus:outline-none focus:ring-2 focus:ring-main min-h-[50px] resize-none"
                  rows={1}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile/Default Remove Button Position matching screenshot */}
        <button
          onClick={() => onRemove && onRemove(idx)}
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-[calc(50%+12px)] p-1 text-gray-400 hover:text-red-500 transition-colors"
        >
          <Image src={MinusIcon} alt="Remove" width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

const ViewDetail = ({ setShowTicketView }) => {
  const [questions, setQuestions] = useState(questionsData);
  const [selectedType, setSelectedType] = useState("Single / Star");

  const handleAddQuestion = () => {
    let newQuestion = {
      question: "What is your feedback?",
      type: "rating",
      answers: [],
    };

    if (selectedType === "Multiple Choice") {
      newQuestion = {
        question: "Please select an option",
        type: "text_answers",
        answers: ["Option 1", "Option 2", "Option 3"],
      };
    } else if (selectedType === "Text Area") {
      newQuestion = {
        question: "Your comments",
        type: "textarea",
        answers: [],
      };
    }

    setQuestions([...questions, newQuestion]);
  };

  const handleRemoveQuestion = (idx) => {
    setQuestions(questions.filter((_, i) => i !== idx));
  };

  return (
    <div className="">
      <div className="flex items-center gap-2 mb-11">
        <button
          onClick={() => setShowTicketView(false)}
          className="cursor-pointer p-2 rounded-full hover:bg-white transition-all"
        >
          <Image src={ArrowBack} alt="back" width={24} height={24} />
        </button>
        <h1 className="text-base font-bold text-black">Ticket View Details</h1>
      </div>
      <div className="flex flex-col-reverse xl:flex-row gap-6 bg-white w-full">
        {/* LEFT CONTENT: FORM BUILDER */}
        <div className="flex-1 flex flex-col border border-[#E6E6E6] rounded-xl p-4 md:p-4 bg-white">
          {/* Header */}
          <div className="flex flex-col 2xl:flex-row md:items-start justify-between mb-6 gap-4">
            <div className="max-w-[80%]">
              <h1 className="text-lg md:text-xl font-bold text-text-1 mb-4">
                Share your feedback
              </h1>
              <p className="text-sm text-black">
                We are committed to providing the highest level of customer
                care, and your feedback is the best way for us to know how we
                are doing. We would greatly appreciate it if you could provide
                feedback.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <Commondropdown
                options={["Single / Star", "Multiple Choice", "Text Area"]}
                value={selectedType}
                onChange={(val) => setSelectedType(val)}
                className="py-2! min-w-[140px]"
              />
              <button
                onClick={handleAddQuestion}
                className="flex justify-center items-center gap-2 bg-main text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-main/90 transition-all cursor-pointer"
              >
                <Image src={PlusIcon} alt="Add" width={16} height={16} /> Add
              </button>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-6">
            {questions.map((q, idx) => (
              <QuestionFAQItem
                key={idx}
                q={q}
                idx={idx}
                onRemove={handleRemoveQuestion}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4">
            <div className="flex items-center gap-2 mb-6 text-[#1A2232] text-sm font-semibold">
              <input
                type="checkbox"
                id="uploadFiles"
                className="w-5 h-5 rounded border-[#D5D7DA] text-main accent-main cursor-pointer"
              />
              <label
                htmlFor="uploadFiles"
                className="flex items-center text-base text-black gap-2 cursor-pointer"
              >
                <Image src={PinIcon} alt="Upload" width={24} height={24} />
                Upload Supporting Files (optional)
              </label>
            </div>

            <div className="flex items-center gap-4 mt-6 p-5 bg-[#ECF6FF]">
              <button className="bg-main hover:bg-main cursor-pointer text-white px-8 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md">
                Update
              </button>
              <button className="bg-white border border-main cursor-pointer text-main px-8 py-2.25 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-all">
                Back
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR: CUSTOM FIELDS */}
        <div className="w-full xl:w-[350px] shrink-0 bg-white border border-[#e6e6e6] flex flex-col h-fit rounded-[10px] overflow-hidden max-h-[85vh] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          {/* Tabs */}
          <div className="flex border-b border-[#e6e6e6]">
            <button className="flex-1 py-3 text-xs font-medium text-black/50 hover:text-main transition-colors cursor-pointer">
              Form
            </button>
            <button className="flex-1 py-3 text-xs font-bold text-main border-b-2 border-main cursor-pointer">
              Custom Fields
            </button>
          </div>

          {/* Search */}
          <div className="p-4 pt-4">
            <div className="relative z-10">
              <input
                type="text"
                placeholder="Search Custom Fields..."
                className="w-full outline-none border rounded-full bg-white border-black/16 text-black px-3 py-2.5 pr-10 text-sm"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </div>
            </div>
          </div>

          {/* Scrollable List */}
          <div className="flex-1 overflow-y-auto scrollbar-thin flex flex-col gap-2 p-4 pt-0 bg-white ">
            {customFieldsData.map((section, idx) => (
              <SidebarItem
                key={idx}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
