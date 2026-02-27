"use client";

import React, { useState } from "react";
import Header from "../../components/common/UserHeader";
import Footer from "../../components/common/Footer";
import searchIcon from "@/components/assets/images/SearchIconWhite.svg";
import Image from "next/image";
import ArrowRightBlueIcon from "@/components/assets/images/ArrowRightBlueIcon.svg";
const documentsData = [
  {
    category: "A",
    items: [
      {
        title: "Affidavit",
        description: "A sworn written statement used as evidence in court.",
      },
      {
        title: "Agency Agreement",
        description:
          "Defines a relationship where one party acts on behalf of another.",
      },
      {
        title: "Amending Agreement",
        description: "Modifies or updates an existing contract.",
      },
      {
        title: "Assignment of Copyright",
        description: "Transfers copyright ownership from one party to another.",
      },
      {
        title: "Assignment of Partnership Interest",
        description: "Transfers a partner's ownership interest in a business.",
      },
      {
        title: "Articles of Association",
        description: "Outlines company management and shareholder rights.",
      },
    ],
  },
  {
    category: "B",
    items: [
      {
        title: "Bill of Sale",
        description: "Proves the sale and transfer of ownership for goods.",
      },
      {
        title: "Board Resolution",
        description:
          "Records decisions made by a company's board of directors.",
      },
      {
        title: "Business Plan",
        description:
          "Outlines goals, strategy, and structure for a new or existing business.",
      },
      {
        title: "Business Transfer Agreement",
        description: "Sets out terms for transferring business ownership.",
      },
      {
        title: "Buy and Sell Agreement",
        description:
          "Defines terms when business partners buy or sell ownership shares.",
      },
    ],
  },
  {
    category: "C",
    items: [
      {
        title: "Cease and Desist Letter",
        description: "Demands that someone stop illegal or harmful activity.",
      },
      {
        title: "Child Medical Consent",
        description: "Grants permission for medical care of a minor.",
      },
      {
        title: "Child Travel Consent",
        description:
          "Authorizes a child to travel without one or both parents.",
      },
      {
        title: "Codicil",
        description:
          "Makes changes to an existing will without rewriting the whole document.",
      },
      {
        title: "Commercial Lease Agreement",
        description: "Defines terms for renting business property.",
      },
      {
        title: "Complaint Letter",
        description:
          "Formally raises an issue or dissatisfaction with a service.",
      },
      {
        title: "Confidentiality Agreement (NDA)",
        description: "Protects private information shared between parties.",
      },
      {
        title: "Consulting Agreement",
        description:
          "Defines terms for providing professional consulting services.",
      },
    ],
  },
  {
    category: "D",
    items: [
      {
        title: "Debt Settlement Letter",
        description: "Outlines an agreement to settle an outstanding debt.",
      },
      {
        title: "Disciplinary Procedure Policy",
        description: "Sets procedures for handling employee misconduct.",
      },
      {
        title: "Distribution Agreement",
        description:
          "Defines terms for product distribution between supplier and distributor.",
      },
    ],
  },
  {
    category: "E",
    items: [
      {
        title: "Employee Handbook",
        description:
          "Contains company policies, expectations, and procedures for staff.",
      },
      {
        title: "Employment Contract",
        description:
          "Defines rights and responsibilities between employer and employee.",
      },
      {
        title: "Event Management Agreement",
        description: "Sets terms for organizing or hosting an event.",
      },
    ],
  },
  {
    category: "F",
    items: [
      {
        title: "Financial Statement (Personal)",
        description: "Summarizes an individual's assets, income, and debts.",
      },
      {
        title: "Funeral Planning Form",
        description:
          "Outlines preferences for funeral arrangements and wishes.",
      },
    ],
  },
  {
    category: "G",
    items: [
      {
        title: "Generative AI Policy",
        description: "Establishes company rules for using AI responsibly.",
      },
      {
        title: "Hire Employees Guide",
        description:
          "Helps businesses onboard new employees legally and effectively.",
      },
      {
        title: "Holiday Rental Agreement",
        description: "Sets terms for renting property for short stays.",
      },
    ],
  },
  {
    category: "I",
    items: [
      {
        title: "Independent Contractor Agreement",
        description: "Defines terms for freelance or self-employed work.",
      },
      {
        title: "Intellectual Property Assignment",
        description: "Transfers IP ownership from creator to another party.",
      },
      {
        title: "Invoice Template",
        description:
          "Provides a format for billing clients for goods or services.",
      },
    ],
  },
  {
    category: "J",
    items: [
      {
        title: "Job Offer Letter",
        description:
          "Officially offers employment and summarizes key job terms.",
      },
      {
        title: "Joint Venture Agreement",
        description:
          "Outlines terms for two or more parties to collaborate on a project.",
      },
    ],
  },
  {
    category: "L",
    items: [
      {
        title: "Last Will and Testament",
        description:
          "Outlines how your estate should be distributed after death.",
      },
      {
        title: "Law Partnership Agreement",
        description:
          "Defines rights and obligations between law firm partners.",
      },
      {
        title: "Letter of Demand",
        description: "Requests payment of an overdue debt before legal action.",
      },
      {
        title: "Living Will",
        description:
          "States your medical treatment preferences if you become incapacitated.",
      },
      {
        title: "Loan Agreement",
        description:
          "Details terms for borrowing and repayment between lender and borrower.",
      },
    ],
  },
  {
    category: "M",
    items: [
      {
        title: "Medical Power of Attorney",
        description:
          "Appoints someone to make health decisions on your behalf.",
      },
    ],
  },
  {
    category: "N",
    items: [
      {
        title: "Non-Disclosure Agreement (NDA)",
        description: "Prevents sharing of confidential information.",
      },
    ],
  },
  {
    category: "O",
    items: [
      {
        title: "Officer Resignation Letter",
        description: "Formal resignation notice for company officers.",
      },
    ],
  },
  {
    category: "P",
    items: [
      {
        title: "Partnership Agreement",
        description: "Defines terms between business partners.",
      },
      {
        title: "Power of Attorney",
        description:
          "Authorizes someone to act on your behalf in legal or financial matters.",
      },
      {
        title: "Privacy policy",
        description:
          "Explains how a business collects and uses personal information.",
      },
      {
        title: "Probate Form",
        description: "Helps manage estate distribution after someone's death.",
      },
      {
        title: "Promissory Note",
        description: "Written promise to repay borrowed money.",
      },
    ],
  },
  {
    category: "Q",
    items: [
      {
        title: "Quality Assurance (QA) Report",
        description: "A document detailing the results of quality testing.",
      },
      {
        title: "Questionnaire",
        description: "A list of written questions for gathering information.",
      },
      {
        title: "Quitclaim Deed",
        description: "A legal document used to transfer property ownership.",
      },
      {
        title: "Quotation (Quote)",
        description:
          "A document stating the estimated cost for goods or services.",
      },
    ],
  },
  {
    category: "R",
    items: [
      {
        title: "Receipt",
        description:
          "A document acknowledging that a payment has been received.",
      },
      {
        title: "Recommendation Letter",
        description: "A letter endorsing someone's abilities or character.",
      },
      {
        title: "Reference Manual",
        description: "A document providing detailed information on a subject.",
      },
      {
        title: "Registration Form",
        description: "A document for signing up or enrolling in something.",
      },
      {
        title: "Release Form",
        description:
          "A legal document giving permission for something, like using an image.",
      },
      {
        title: "Report",
        description:
          "A detailed account of an event, situation, or investigation.",
      },
      {
        title: "Request for Proposal (RFP)",
        description: "A document soliciting bids from potential suppliers.",
      },
      {
        title: "Resignation Letter",
        description:
          "A formal document announcing an employee's decision to leave a job.",
      },
      {
        title: "Resume / CV (Curriculum Vitae)",
        description:
          "A document summarizing a person's work experience and skills.",
      },
    ],
  },
  {
    category: "S",
    items: [
      {
        title: "Separation Agreement",
        description: "Outlines terms for separating from a spouse or partner.",
      },
      {
        title: "Service Agreement",
        description: "Defines scope and terms for service-based work.",
      },
      {
        title: "Shareholders Agreement",
        description: "Sets rights and duties of company shareholders.",
      },
      {
        title: "Sickness Absence Policy",
        description: "Outlines procedures for handling employee sick leave.",
      },
      {
        title: "Social Media Policy",
        description: "Defines workplace rules for social media use.",
      },
      {
        title: "Software License Agreement",
        description: "Grants rights to use software under specific conditions.",
      },
      {
        title: "Stock Transfer Form",
        description: "Transfers ownership of company shares.",
      },
      {
        title: "Sublet Agreement",
        description: "Defines terms for subleasing rented property.",
      },
    ],
  },
  {
    category: "T",
    items: [
      {
        title: "Terms & Conditions",
        description: "Sets website or service usage terms.",
      },
      {
        title: "Trust Deed",
        description: "Establishes terms for managing assets held in trust.",
      },
    ],
  },
  {
    category: "U",
    items: [
      {
        title: "UCC Filing",
        description:
          "A legal document filed to give public notice of a security interest in personal property.",
      },
      {
        title: "User Guide / User Manual",
        description: "Instructions on how to use a product or service.",
      },
      {
        title: "Utility Bill",
        description:
          "An invoice for essential services like electricity, water, or gas.",
      },
    ],
  },
  {
    category: "V",
    items: [
      {
        title: "Visa",
        description:
          "An official document or stamp in a passport permitting entry into a country.",
      },
      {
        title: "Volunteer Agreement",
        description:
          "A document outlining the role and responsibilities of a volunteer.",
      },
    ],
  },
  {
    category: "W",
    items: [
      {
        title: "Website Privacy Notice",
        description: "Explains how personal data is collected and used online.",
      },
      {
        title: "Website Terms of Use",
        description: "Defines acceptable use and limitations for a website.",
      },
      {
        title: "Wills and Trusts",
        description: "General guidance on estate planning documents.",
      },
      {
        title: "Work Order Form",
        description: "Authorizes specific tasks or projects to be completed.",
      },
    ],
  },
  {
    category: "X",
    items: [
      {
        title: "X-ray Report",
        description: "A medical document interpreting an X-ray image.",
      },
    ],
  },
  {
    category: "Y",
    items: [
      {
        title: "Year-End Report",
        description:
          "A summary of an organization's performance over the fiscal year.",
      },
    ],
  },
  {
    category: "Z",
    items: [
      {
        title: "Zoning Permit",
        description:
          "An official document granting permission to use land in a certain way, as defined by local zoning laws.",
      },
    ],
  },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState(null);

  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );

  // Filter logic
  const filteredData = documentsData
    .map((categoryData) => {
      // Filter items within the category based on search term
      const filteredItems = categoryData.items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      // Return category only if it has matching items
      if (filteredItems.length > 0) {
        return { ...categoryData, items: filteredItems };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="w-full ">
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-20 md:pt-30 bg-cover bg-center">
          <div className="text-center max-w-[1200px] max-[1200px]:px-4 mx-auto pb-12">
            <h1 className="texl-xl md:text-3xl lg:text-5xl font-semibold mb-6 text-text-1">
              Find Any Document Instantly
            </h1>
            <p className="text-text-5 text-lg md:text-xl">
              Browse <strong>LawNest</strong> complete library of legal and
              business documents, listed alphabetically for your convenience.
              Use the search bar to quickly find exactly what you need — from
              wills and contracts to business forms and agreements.
            </p>
          </div>

          <div className="mb-8 max-w-[1200px] max-[1200px]:px-4 mx-auto">
            <div className="relative gap-4 flex sm:flex-row flex-col items-center overflow-hidden">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full bg-white py-3 px-4 focus:outline-none rounded-xl border border-black/16"
                  placeholder="Search by document name or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="min-w-fit max-sm:w-full">
                <button className="bg-main rounded-lg cursor-pointer flex items-center justify-center gap-2 text-white px-6 py-3 font-medium hover:bg-main/85 transition-colors max-sm:w-full">
                  <Image
                    src={searchIcon}
                    alt="searchIcon"
                    width={20}
                    height={20}
                  />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Alphabet Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 max-[1200px]:px-4 max-w-[1200px] mx-auto">
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() => {
                  setSelectedLetter(letter);
                  const element = document.getElementById(`category-${letter}`);
                  if (element) {
                    const y =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      120; // Offset for the fixed header
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className={`w-9.75 h-12 rounded-lg flex items-center cursor-pointer hover:bg-[#ECF6FF] hover:border-[#587C9F] hover:text-main transition-all duration-300 ease-in-out justify-center border ${
                  selectedLetter === letter
                    ? "bg-[#ECF6FF] text-main border-[#587C9F]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#113a7a] hover:text-[#113a7a]"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Document List */}
        <div className="max-[1200px]:px-4 max-w-[1200px] mx-auto">
          {filteredData.length > 0 ? (
            filteredData.map((categoryData) => (
              <div
                key={categoryData.category}
                id={`category-${categoryData.category}`}
                className="mb-10 w-full"
              >
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-11.5 h-12 text-main border border-[#587C9F] font-bold rounded-lg text-xl md:text-2xl ${
                      selectedLetter === categoryData.category
                        ? "bg-[#ECF6FF]"
                        : "bg-white"
                    }`}
                  >
                    {categoryData.category}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryData.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-main bg-[#fafafa] rounded-xl p-6 flex flex-col"
                    >
                      <h3 className="font-semibold text-lg md:text-xl mb-2 text-text-1">
                        {item.title}
                      </h3>
                      <p className="text-text-5 text-sm md:text-base mb-5">
                        {item.description}
                      </p>
                      <button className="text-main font-semibold flex items-center gap-1.5 cursor-pointer mt-auto">
                        Learn More
                        <Image
                          src={ArrowRightBlueIcon}
                          alt="ArrowRightBlueIcon"
                          width={16}
                          height={16}
                          className="min-w-4"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              No documents found matching your search.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
