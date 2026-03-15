"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import SearchIconGray from "@/components/assets/images/SearchIconGray.svg";
import searchIcon from "@/components/assets/images/SearchIconBlack.svg";
import calenderIcon from "@/components/assets/images/CalendarIcon.svg";
import copyIcon from "@/components/assets/images/CopyIcon.svg";
import CustomizeIcon from "@/components/assets/images/CustomizeIcon.svg";
import CommonTable from "@/components/common/CommonTable";
import Commondropdown1 from "@/components/common/Commondropdown1";
import TableEyeIcon from "@/components/assets/images/TableEyeIcon.svg";
import TableEditIccon from "@/components/assets/images/TableEditIccon.svg";
import DeleteIcon from "@/components/assets/images/DeleteIcon.svg";
import DotMenuIcon from "@/components/assets/images/DotMenuIcon.svg";

const Personal = () => {
  const [data, setData] = useState(
    Array(8)
      .fill(null)
      .map((_, i) => ({
        id: i,
        name: i % 2 === 0 ? "Child Travel Consent" : "Separation Agreement",
        type: "Personal Matters",
        createDate: "01/02/2025",
        lastUpdated: "01/02/2025",
        status: i % 2 === 0 ? "Inactive" : "Active",
        selected: i % 2 !== 0,
      })),
  );
  const dateInputRef = useRef(null);

  const handleStatusChange = (statusValue, rowIndex) => {
    const newData = [...data];
    newData[rowIndex].status =
      statusValue.label || statusValue.value || statusValue;
    setData(newData);
  };

  const statusOptions = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
    { label: "Draft", value: "Draft" },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#32D583] text-white border-transparent";
      case "Inactive":
        return "bg-[#98A2B3] text-white border-transparent";
      case "Draft":
        return "bg-[#F2F4F7] text-[#344054] border-[#D0D5DD]";
      default:
        return "bg-gray-200 text-black border-transparent";
    }
  };

  const [activeSubTab, setActiveSubTab] = useState("Business & Corporate");
  const [statusTab, setStatusTab] = useState("All");
  const [selectedLetter, setSelectedLetter] = useState("A");

  const subTabs = [
    { name: "Business & Corporate", count: 3 },
    { name: "Employment & HR", count: 7 },
    { name: "Contracts & Agreements (General)", count: 6 },
    { name: "Real Estate & Rental", count: 6 },
  ];

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const columns = [
    {
      header: "Document Name",
      sortable: true,
      accessor: "name",
      render: (row) => (
        <div className="flex items-center gap-2">
          <span className="text-sm text-black">{row.name}</span>
        </div>
      ),
    },
    {
      header: "Type",
      sortable: true,
      accessor: "type",
      render: (row) => <span className="text-sm text-black">{row.type}</span>,
    },
    {
      header: "Create Date",
      sortable: true,
      accessor: "createDate",
      render: (row) => (
        <span className="text-sm text-black">{row.createDate}</span>
      ),
    },
    {
      header: "Last Updated",
      sortable: true,
      accessor: "lastUpdated",
      render: (row) => (
        <span className="text-sm text-black">{row.lastUpdated}</span>
      ),
    },
    {
      header: "Status",
      sortable: true,
      accessor: "status",
      render: (row, index) => (
        <div className="w-[115px]">
          <Commondropdown1
            options={statusOptions}
            value={row.status}
            onChange={(selected) => handleStatusChange(selected, index)}
            className="w-[115px]!"
            triggerClassName={`w-full! h-[32px]! rounded-full! py-[4px]! px-[12px]! gap-[8px] font-medium text-xs border! flex! items-center! justify-between! whitespace-nowrap ${getStatusStyle(row.status)}`}
            dropdownClassName="!w-full"
            textColor={row.status === "Draft" ? "text-[#344054]" : "text-white"}
            optionTextColor="text-black"
            direction={index >= 5 ? "up" : "down"}
            iconClassName={row.status === "Draft" ? "" : "brightness-0 invert"}
          />
        </div>
      ),
    },
    {
      header: "Action",
      accessor: "action",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button className="p-1.5 cursor-pointer border border-gray-200 rounded-lg hover:bg-gray-50">
            <Image src={TableEyeIcon} alt="view" width={16} height={16} />
          </button>
          <button className="p-1.5 cursor-pointer border border-gray-200 rounded-lg hover:bg-gray-50">
            <Image src={TableEditIccon} alt="edit" width={16} height={16} />
          </button>
          <button className="p-1.5 cursor-pointer border border-gray-200 rounded-lg hover:bg-gray-50">
            <Image src={DeleteIcon} alt="delete" width={16} height={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between overflow-x-auto mb-6 border-b border-black/16">
        <div className="flex gap-6">
          {subTabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveSubTab(tab.name)}
              className={`whitespace-nowrap cursor-pointer pb-2 text-sm font-semibold flex items-center gap-2 transition-all ${activeSubTab === tab.name ? "text-main border-b-2 border-main" : "text-gray-400"}`}
            >
              {tab.name}
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${activeSubTab === tab.name ? "bg-[#E6F0F9] text-main" : "bg-gray-100 text-gray-400"}`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <button className="cursor-pointer">
          <Image
            src={DotMenuIcon}
            alt="delete"
            width={16}
            height={16}
            className="min-w-6"
          />
        </button>
      </div>

      <div className="flex items-center gap-6 mb-4 border-b border-black/16">
        <div className="flex gap-4 w-full">
          {["All", "Draft", "Publish"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusTab(s)}
              className={`text-base cursor-pointer p-2 font-semibold ${statusTab === s ? "text-main border-b border-main" : "text-text-7"}`}
            >
              {s}
            </button>
          ))}
        </div>
        <button className="cursor-pointer">
          <Image
            src={DotMenuIcon}
            alt="delete"
            width={16}
            height={16}
            className="min-w-6"
          />
        </button>
      </div>

      <div className="flex md:flex-row flex-col md:items-center gap-2 mb-4">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search by document name or category..."
            className="w-full focus:border-black border text-base border-black/16 outline-0 p-4 py-2.75 pr-12 rounded-lg"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-4">
            <Image src={searchIcon} alt="media" width={20} height={20} />
          </div>
        </div>
        <div className="relative flex items-center">
          <div
            className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer"
            onClick={() => dateInputRef.current?.showPicker()}
          >
            <Image src={calenderIcon} alt="calendar" width={20} height={20} />
          </div>
          <input
            type="date"
            ref={dateInputRef}
            name=""
            id=""
            className="w-full text-[#404040] focus:border-black border text-base border-black/16 outline-0 py-2.25 pt-3.25 pr-0 pl-14 rounded-lg [&::-webkit-calendar-picker-indicator]:hidden text-center"
            style={{ colorScheme: "light" }}
          />
        </div>
        <div className="group inline-block self-end border border-[#D5D7DA] p-2.75 rounded-lg cursor-pointer hover:bg-(--color-main) hover:border-(--color-main) hover:text-white transition-colors">
          <Image
            src={copyIcon}
            alt="media"
            width={24}
            height={24}
            className="min-w-6 group-hover:brightness-0 group-hover:invert transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`w-10 h-12 flex cursor-pointer items-center justify-center border rounded-lg transition-all ${selectedLetter === letter ? "bg-[#ECF6FF] text-main border-main" : "text-text-7 border-[#D5D7DA] hover:border-main hover:text-main hover:bg-[#ECF6FF]"}`}
          >
            {letter}
          </button>
        ))}
      </div>

      <CommonTable columns={columns} data={data} selectable={true} />
    </div>
  );
};

export default Personal;
