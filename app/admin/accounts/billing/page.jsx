"use client";
import React, { useState } from "react";
import Dashboard from "./tabs/dashboard";
import Invoices from "./tabs/invoices";

export default function Billing() {
  const [activeTab, setActiveTab] = useState("Dashboard");

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

        {activeTab === "Dashboard" && <Dashboard />}
        {activeTab === "Invoices" && <Invoices />}
        {activeTab !== "Dashboard" && activeTab !== "Invoices" && (
          <div className="flex items-center justify-center py-20 text-text-4 font-medium italic">
            {activeTab} tab content coming soon...
          </div>
        )}
      </div>
    </main>
  );
}
