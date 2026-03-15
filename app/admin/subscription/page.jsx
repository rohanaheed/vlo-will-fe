"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/common/Header";
import CommonDropdown from "@/components/common/Commondropdown1";
import OverviewUsericon from "@/components/assets/images/OverviewUsericon.svg";
import OverviewDocumenticon from "@/components/assets/images/OverviewDocumenticon.svg";
import OverviewSupporticon from "@/components/assets/images/OverviewSupporticon.svg";
import ArrowUpGreen from "@/components/assets/images/ArrowUpGreen.svg";
import ArrowDownRed from "@/components/assets/images/ArrowDownRed.svg";
import RevenueIcon from "@/components/assets/images/RevenueIcon.svg";
import OverviewSubscriptionicon from "@/components/assets/images/OverviewSubscriptionicon.svg";
import Useroverview from "./useroverview/page";
function UserManagement() {
  const [selectedUser, setSelectedUser] = useState("usermanagement");
  const back = () => {
    setSelectedUser("usermanagement");
  };
  const [isTab, setIsTab] = useState("AllUser");
  const yearOptions = [
    { value: "This Year", label: "This Year" },
    { value: "This Month", label: "This Month" },
  ];
  const [year, setYear] = useState("This Year");
  return (
    <div className="mt-16 md:mt-22 pb-3 md:pb-6 text-black">
      <Header title="Subscription Management" />
      <main className="lg:max-w-[calc-(100%-300px)] h-full flex flex-col flex-1 lg:ml-80.5 m-3 mb-0 md:m-6 md:mb-0 bg-white p-3 md:p-6 rounded-md border border-[#E6E6E6]">
        <div className="flex flex-col flex-1 h-full">
          <Useroverview />
        </div>
      </main>
    </div>
  );
}

export default UserManagement;
