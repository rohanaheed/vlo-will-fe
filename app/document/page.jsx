"use client";
import React, { useState } from "react";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CommonTable from "@/components/common/CommonTable";

import arrowback from "@/components/assets/images/ArrowBack.svg";
import addicon from "@/components/assets/images/AddIcon.svg";
import upload from "@/components/assets/images/UploadIcon.svg";
import document from "@/components/assets/images/DocumentIconWhite.svg";
import pages from "@/components/assets/images/PagesIcon.svg";
import file from "@/components/assets/images/FileIcon.svg";
import search from "@/components/assets/images/SearchIconBlack.svg";
import copy from "@/components/assets/images/CopyIcon.svg";
import Calendar from "@/components/assets/images/CalendarIcon1.svg";
import FolderIcon from "@/components/assets/images/FolderIcon.svg";
import PDFIcon from "@/components/assets/images/PDFIcon.svg";
import TableEyeIcon from "@/components/assets/images/TableEyeIcon.svg";
import TableEditIcon from "@/components/assets/images/TableEditIccon.svg";
import DeleteIcon from "@/components/assets/images/DeleteIcon.svg";
import TableMenuIcon from "@/components/assets/images/TableMenuIcon.svg";
import ChevronDown from "@/components/assets/images/ChevronLeftBlack.svg";

function page() {
  const [startDate, setStartDate] = useState(new Date());
  const [expandedFolders, setExpandedFolders] = useState([
    "folder-1",
    "folder-2",
  ]);

  const tableData = [
    {
      id: "folder-1",
      name: "Default Bundle Section",
      product: "Family",
      date: "01/02/2025",
      size: "10.00 mb",
      type: "folder",
    },
    {
      id: "file-1",
      parentId: "folder-1",
      name: "Articles of Incorporation",
      product: "Immigration",
      date: "01/02/2025",
      size: "10.00 mb",
      type: "file",
    },
    {
      id: "file-2",
      parentId: "folder-1",
      name: "Articles of Incorporation",
      product: "Criminal",
      date: "01/02/2025",
      size: "10.00 mb",
      type: "file",
    },
    {
      id: "file-3",
      parentId: "folder-1",
      name: "Articles of Incorporation",
      product: "Document Bundle",
      date: "01/02/2025",
      size: "10.00 mb",
      type: "file",
    },
    {
      id: "file-4",
      parentId: "folder-1",
      name: "Articles of Incorporation",
      product: "Family",
      date: "01/02/2025",
      size: "10.00 mb",
      type: "file",
    },
    {
      id: "folder-2",
      name: "Family Case",
      product: "Immigration",
      date: "01/02/2025",
      size: "10.00 mb",
      type: "folder",
    },
    {
      id: "file-5",
      parentId: "folder-2",
      name: "Articles of Incorporation",
      product: "Criminal",
      date: "01/02/2025",
      size: "10.00 mb",
      type: "file",
    },
    {
      id: "file-6",
      parentId: "folder-2",
      name: "Articles of Incorporation",
      product: "Document Bundle",
      date: "01/02/2025",
      size: "10.00 mb",
      type: "file",
    },
    {
      id: "file-7",
      parentId: "folder-2",
      name: "Articles of Incorporation",
      product: "Family",
      date: "01/02/2025",
      size: "10.00 mb",
      type: "file",
    },
    {
      id: "file-8",
      parentId: "folder-2",
      name: "Articles of Incorporation",
      product: "Immigration",
      date: "01/02/2025",
      size: "10.00 mb",
      type: "file",
    },
    {
      id: "file-9",
      parentId: "folder-2",
      name: "Articles of Incorporation",
      product: "Criminal",
      date: "01/02/2025",
      size: "10.00 mb",
      type: "file",
    },
  ];

  const toggleFolder = (folderId) => {
    setExpandedFolders((prev) =>
      prev.includes(folderId)
        ? prev.filter((id) => id !== folderId)
        : [...prev, folderId],
    );
  };

  const visibleData = tableData.filter((row) => {
    if (!row.parentId) return true;
    return expandedFolders.includes(row.parentId);
  });

  const columns = [
    {
      header: "Name",
      accessor: "name",
      sortable: true,
      render: (row) => (
        <div
          className="inline-flex items-center w-fit gap-2 cursor-pointer"
          onClick={() => {
            if (row.type === "folder") toggleFolder(row.id);
          }}
        >
          {row.type === "folder" && (
            <Image
              src={ChevronDown}
              alt="chevron"
              width={16}
              height={16}
              className={`${
                expandedFolders.includes(row.id) ? "-rotate-90" : "-rotate-270"
              } transition-transform duration-300`}
            />
          )}
          <Image
            src={row.type === "folder" ? FolderIcon : PDFIcon}
            alt="icon"
            width={24}
            height={24}
          />
          <span
            className={`text-sm leading-none tracking-normal text-black mt-1 ${
              row.type === "file" ? "font-normal" : "font-semibold"
            }`}
          >
            {row.name}
          </span>
        </div>
      ),
    },
    {
      header: "Product",
      accessor: "product",
      sortable: true,
    },
    {
      header: "Last Modified",
      accessor: "date",
      sortable: true,
    },
    {
      header: "File Size",
      accessor: "size",
      sortable: true,
    },
    {
      header: "Action",
      accessor: "action",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-1.25 hover:bg-gray-100 rounded-lg cursor-pointer border border-black/16">
            <Image src={TableEyeIcon} alt="view" width={20} height={20} />
          </button>
          <button className="p-1.25 hover:bg-gray-100 rounded-lg cursor-pointer border border-black/16">
            <Image src={TableEditIcon} alt="edit" width={20} height={20} />
          </button>
          <button className="p-1.25 hover:bg-gray-100 rounded-lg cursor-pointer border border-black/16">
            <Image src={DeleteIcon} alt="delete" width={20} height={20} />
          </button>
          <button className="p-1.25 hover:bg-gray-100 rounded-lg cursor-pointer border border-black/16">
            <Image src={TableMenuIcon} alt="menu" width={20} height={20} />
          </button>
        </div>
      ),
    },
  ];

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="flex items-center gap-2 border border-black/16 rounded-lg p-3.25 cursor-pointer whitespace-nowrap w-full"
      onClick={onClick}
      ref={ref}
    >
      <Image src={Calendar} alt="calendar" width={20} height={20} />
      <span className="text-text-7 text-sm font-semibold">{value}</span>
    </button>
  ));

  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <UserHeader />
      </div>
      <div className="">
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-5 md:pb-10 bg-cover bg-center">
          <h1 className="text-text-1 text-center text-2xl md:text-4xl lg:text-6xl font-semibold">
            My Documents
          </h1>
          <p className="text-text-5 mt-6 text-center text-base lg:text-xl">
            example_1235@gmail.com
          </p>
        </div>
        <div className="mt-6 md:mt-18 lg:mt-24 max-[1200px]:px-4 max-w-[1200px] mx-auto border-b border-black/16 md:pb-16 pb-8 lg:pb-24">
          <div className="border border-black/16 rounded-lg md:p-6 p-3">
            <div className="flex md:items-center gap-2 justify-between whitespace-nowrap flex-col md:flex-row">
              <div className="flex items-center gap-2">
                <button className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Image
                    src={arrowback}
                    alt="arrowback"
                    width={24}
                    height={24}
                  />
                </button>
                <h2 className="text-black text-lg md:text-xl font-bold">
                  My Documents
                </h2>
              </div>
              <div className="flex sm:flex-row flex-col items-center gap-4">
                <button className="max-md:w-full flex justify-center items-center gap-2 bg-main hover:bg-main/85 transition-all duration-300 text-white p-2 px-4 rounded-lg cursor-pointer">
                  <Image src={addicon} alt="addicon" width={24} height={24} />
                  <p className="text-semibold text-sm">Add Document</p>
                </button>
                <button className="max-md:w-full flex justify-center items-center gap-2 bg-main hover:bg-main/85 transition-all duration-300 text-white p-2 px-4 rounded-lg cursor-pointer">
                  <Image src={addicon} alt="addicon" width={24} height={24} />
                  <p className="text-semibold text-sm">New Document</p>
                </button>
                <button className="max-md:w-full flex justify-center items-center gap-2 bg-main hover:bg-main/85 transition-all duration-300 text-white py-2.5 px-4 rounded-lg cursor-pointer">
                  <p className="text-semibold text-sm">e-Signature</p>
                </button>
              </div>
            </div>
            <div className="bg-[#fafafa] border border-black/16 rounded-lg flex flex-col items-center px-6 py-4 mt-6">
              <div className="bg-linear-to-b from-[#587C9F] to-transparent p-px rounded-full inline-flex">
                <div className="bg-white rounded-full p-1.5">
                  <div className="inline-flex items-center gap-2 bg-main rounded-full p-1.5">
                    <Image src={upload} alt="upload" width={16} height={16} />
                  </div>
                </div>
              </div>
              <p className="text-main text-sm font-semibold mt-3">
                Click to upload or
                <span className="text-text-5 font-normal"> drag and drop</span>
              </p>
              <p className="text-text-5 font-normal text-sm mt-1">
                Supported format PDF (Size. 100MB)
              </p>
            </div>
            <div className="mt-6 grid md:grid-cols-3 grid-cols-1 gap-3">
              <div className="flex items-center gap-2 border border-black/16 rounded-lg p-4">
                <div className="bg-main p-3 rounded-full inline-flex">
                  <Image src={document} alt="document" width={24} height={24} />
                </div>
                <div>
                  <p className="text-xs text-black font-semibold">Documents</p>
                  <p className="text-2xl text-black font-semibold">108</p>
                </div>
              </div>
              <div className="flex items-center gap-2 border border-black/16 rounded-lg p-4">
                <div className=" bg-[#C52534] p-1.5 rounded-full inline-flex">
                  <div className=" bg-[#DC3545] p-1.5 rounded-full ">
                    <Image
                      src={pages}
                      alt="pages"
                      width={24}
                      height={24}
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-black font-semibold">Pages</p>
                  <p className="text-2xl text-black font-semibold">250</p>
                </div>
              </div>
              <div className="flex items-center gap-2 border border-black/16 rounded-lg p-4">
                <div className=" bg-[#065BB6] p-1.5 rounded-full inline-flex">
                  <div className=" bg-[#137EE4] p-1.5 rounded-full ">
                    <Image
                      src={file}
                      alt="pages"
                      width={24}
                      height={24}
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-black font-semibold">File Size</p>
                  <p className="text-2xl text-black font-semibold">675.00 MB</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex max-md:flex-col gap-4">
              <div className="gap-2 w-full border border-black/16 rounded-lg p-2.25 relative">
                <Image
                  src={search}
                  alt="search"
                  width={24}
                  height={24}
                  className="absolute top-1/2 right-4 -translate-y-1/2"
                />

                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full outline-none text-black text-lg font-semibold pr-10"
                />
              </div>
              <div className="w-full">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={<CustomInput />}
                  wrapperClassName="w-full"
                />
              </div>
              <div className="inline-flex self-end items-center gap-2 cusror-pointer border border-black/16 rounded-lg p-2.75 cursor-pointer group hover:bg-main transition-all duration-300">
                <Image
                  src={copy}
                  alt="copy"
                  width={24}
                  height={24}
                  className="min-w-6 min-h-6 group-hover:brightness-200 group-hover:invert-1"
                />
              </div>
            </div>
            <div className="mt-8">
              <CommonTable
                data={visibleData}
                columns={columns}
                selectable={true}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
