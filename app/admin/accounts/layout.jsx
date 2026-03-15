"use client";
import React from "react";
import Header from "@/components/common/Header";
import Image from "next/image";
import ChevronLeft from "@/components/assets/images/ChevronLeftBlack.svg";
import { usePathname } from "next/navigation";

export default function AccountsLayout({ children }) {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);
  const currentPage = pathParts[pathParts.length - 1] || "overview";
  
  // Format title (e.g., "financial-insights" -> "Financial Insights")
  const formattedTitle = currentPage
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-black">
      <Header title="Accounts" />
      
      {/* Breadcrumb / Sub-Header */}
      <div className="flex items-center gap-2 lg:ml-75 mt-16 bg-white py-2.5 px-6 border-b border-[#E6E6E6]">
        <p className="text-sm text-[#212121]">Accounts</p>
        <Image
          src={ChevronLeft}
          alt="separator"
          width={20}
          height={20}
          className="rotate-180 opacity-50"
        />
        <p className="text-sm text-[#212121] font-bold">{formattedTitle}</p>
      </div>

      <main className="lg:ml-75 p-3 md:p-6 pb-20">
        {children}
      </main>
    </div>
  );
}
