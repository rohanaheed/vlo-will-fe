"use client";
import React from "react";
import Header from "@/components/common/Header";
import Support from "./support/page";
import Ticket from "./ticket/page";
import { useState } from "react";
export default function CustomerSupport() {
  const [view, setView] = useState(false);
  return (
    <div className="mt-16 md:mt-22 pb-6 text-black bg-[#F9FAFB] min-h-screen">
      <Header title="Customer Support" />
      <main className="lg:max-w-[calc(100%-300px)] lg:ml-80.5 m-3 mb-0 md:m-6 md:mb-0 bg-white p-3 md:p-6 rounded-md border border-[#E6E6E6]">
        {view ? <Ticket setView={setView} /> : <Support setView={setView} />}
      </main>
    </div>
  );
}
