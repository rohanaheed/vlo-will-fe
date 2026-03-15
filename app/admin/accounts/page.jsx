import React from "react";
import Header from "@/components/common/Header";
import ChevronLeft from "@/components/assets/images/ChevronLeftBlack.svg";
import Image from "next/image";
import billing from "./billing/page.jsx";
export default function Accounts() {
  return (
    <div>
      <Header title="Accounts" />
      <div className="flex items-center gap-2 lg:max-w-[calc-(100%-250px)] lg:ml-75 mt-16 text-black bg-white py-2.5 px-6">
        <p className="text-sm text-text-2">Accounts</p>
        <Image
          src={ChevronLeft}
          alt="media"
          width={20}
          height={20}
          className="rotate-180"
        />
        <p className="text-sm text-text-2 font-bold">Billing</p>
      </div>
      <div className="mt-6 md:mt-6 pb-3 md:pb-6 text-black">
        <main className="lg:max-w-[calc-(100%-300px)] lg:ml-80.5 m-3 mb-0 md:m-6 md:mb-0 bg-white p-3 md:p-6 rounded-md border border-[#E6E6E6]">
          <billing />
        </main>
      </div>
    </div>
  );
}
