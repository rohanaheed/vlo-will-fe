"use client";
import React, { useRef } from "react";
import Image from "next/image";
import SearchIconGray from "@/components/assets/images/SearchIconBlack.svg";
import CalendarIcon from "@/components/assets/images/CalendarIcon.svg";
import CopyIcon from "@/components/assets/images/CopyIcon.svg";
import CommonTable from "@/components/common/CommonTable";

function Page() {
  const dateInputRef = useRef(null);

  const columns = [
    {
      header: "Date & Time",
      accessor: "dateTime",
      sortable: true,
      render: (row) => (
        <span className="text-sm font-medium text-text-4">{row.dateTime}</span>
      ),
    },
    {
      header: "Event",
      accessor: "event",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-text-4 font-medium">{row.event}</span>
      ),
    },
    {
      header: "IP Address",
      accessor: "ipAddress",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-text-4 font-medium">{row.ipAddress}</span>
      ),
    },
    {
      header: "Device",
      accessor: "device",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-text-4 font-medium">{row.device}</span>
      ),
    },
    {
      header: "Location",
      accessor: "location",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-text-4 font-medium">{row.location}</span>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      sortable: true,
      render: (row) => (
        <span
          className={`px-4 py-1.25 inline-block text-center rounded-full text-sm font-medium w-25 ${
            row.status === "Successful"
              ? "bg-[#34C759] text-white"
              : "bg-[#EA0000] text-white"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Login",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Failed",
    },
    {
      id: 2,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Subscription Renewed",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Successful",
    },
    {
      id: 3,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Document Uploaded",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Failed",
    },
    {
      id: 4,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Login",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Successful",
    },
    {
      id: 5,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Subscription Renewed",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Failed",
    },
    {
      id: 6,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Document Uploaded",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Successful",
    },
    {
      id: 7,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Login",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Failed",
    },
    {
      id: 8,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Subscription Renewed",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Successful",
    },
    {
      id: 9,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Document Uploaded",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Failed",
    },
    {
      id: 10,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Login",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Successful",
    },
    {
      id: 11,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Subscription Renewed",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Failed",
    },
    {
      id: 12,
      dateTime: "15/09/2025, 08:14 AM",
      event: "Document Uploaded",
      ipAddress: "110.93.12.87",
      device: "Chrome (Windows)",
      location: "London",
      status: "Successful",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-bold">Activity</h1>
      </div>

      {/* Filter Controls */}
      <div className="flex md:flex-row flex-col md:items-center gap-3">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full focus:border-black border text-base border-black/16 outline-0 p-4 py-2.75 pr-12 rounded-lg"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-4">
            <Image src={SearchIconGray} alt="search" width={20} height={20} />
          </div>
        </div>

        <div
          className="relative flex items-center min-w-[180px] cursor-pointer"
          onClick={() => dateInputRef.current?.showPicker()}
        >
          <div className="absolute left-3 z-10 pointer-events-none">
            <Image src={CalendarIcon} alt="calendar" width={20} height={20} />
          </div>
          <input
            type="date"
            ref={dateInputRef}
            className="w-full text-[#404040] focus:border-black border text-sm border-black/16 outline-0 py-3.25 pl-10 pr-3 rounded-lg cursor-pointer bg-white relative
            [&::-webkit-calendar-picker-indicator]:hidden"
            defaultValue="2025-09-01"
          />
        </div>

        <button className="p-2.75 border outline-0  inline-flex self-end border-[#D5D7DA] rounded-lg hover:bg-(--color-main) hover:border-(--color-main) hover:text-white group transition-all cursor-pointer">
          <Image
            src={CopyIcon}
            alt="export"
            width={24}
            height={24}
            className="group-hover:brightness-0 min-h-6 min-w-6 group-hover:invert transition-all"
          />
        </button>
      </div>

      {/* Table */}
      <CommonTable columns={columns} data={data} />
    </div>
  );
}

export default Page;
