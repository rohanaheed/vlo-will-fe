"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import SearchIconGray from "@/components/assets/images/SearchIconBlack.svg";
import CalendarIcon from "@/components/assets/images/CalendarIcon.svg";
import CopyIcon from "@/components/assets/images/CopyIcon.svg";
import TableEyeIcon from "@/components/assets/images/TableEyeIcon.svg";
import TableEditIccon from "@/components/assets/images/TableEditIccon.svg";
import DeleteIcon from "@/components/assets/images/DeleteIcon.svg";
import UserIcon from "@/components/assets/images/UserIcon.svg";
import CommonTable from "@/components/common/CommonTable";
import PlusIcon from "@/components/assets/images/PlusIcon.svg";
import Notes from "@/components/common/Notes";
import NotesPreview from "@/components/common/NotesPreview";
import DeletePopup from "@/components/common/DeletePopup";
import SuccessfullDeletePopup from "@/components/common/SuccessfullDeletePopup";
function Page() {
  const dateInputRef = useRef(null);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const columns = [
    {
      header: "Title",
      accessor: "title",
      sortable: true,
      render: (row) => (
        <span className="text-sm font-medium text-text-4">{row.title}</span>
      ),
    },
    {
      header: "Description",
      accessor: "description",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-text-4 font-medium max-w-xs block truncate">
          {row.description}
        </span>
      ),
    },
    {
      header: "Date",
      accessor: "date",
      sortable: true,
      render: (row) => (
        <span className="text-sm text-text-4 font-medium">{row.date}</span>
      ),
    },
    {
      header: "Created By",
      accessor: "createdBy",
      sortable: true,
      render: (row) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
            <Image src={UserIcon} alt="user" width={32} height={32} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-[#1A2232]">
              {row.createdBy.name}
            </span>
            <span className="text-[10px] text-text-7">
              {row.createdBy.role}
            </span>
          </div>
        </div>
      ),
    },
    {
      header: "Action",
      accessor: "action",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button
            className="p-2 border border-[#D5D7DA] rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={() => {
              setSelectedNote(row);
              setIsPreviewOpen(true);
            }}
          >
            <Image src={TableEyeIcon} alt="view" width={18} height={18} />
          </button>
          <button className="p-2 border border-[#D5D7DA] rounded-lg hover:bg-gray-50 cursor-pointer">
            <Image src={TableEditIccon} alt="edit" width={18} height={18} />
          </button>
          <button
            className="p-2 border border-[#D5D7DA] rounded-lg hover:bg-gray-50 cursor-pointer"
            onClick={() => setIsDeleteOpen(true)}
          >
            <Image src={DeleteIcon} alt="delete" width={18} height={18} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      title: "Verified identity documents.",
      description: "User reported issue with draft will.",
      date: "28/03/2025",
      createdBy: { name: "Abdul Wahab", role: "Admin" },
    },
    {
      id: 2,
      title: "Verified identity documents.",
      description: "User reported issue with draft will.",
      date: "27/03/2025",
      createdBy: { name: "Abdul Wahab", role: "Admin" },
    },
    {
      id: 3,
      title: "Verified identity documents.",
      description: "User reported issue with draft will.",
      date: "20/03/2025",
      createdBy: { name: "Abdul Wahab", role: "Admin" },
    },
    {
      id: 4,
      title: "Verified identity documents.",
      description: "User reported issue with draft will.",
      date: "27/03/2025",
      createdBy: { name: "Abdul Wahab", role: "Admin" },
    },
    {
      id: 5,
      title: "Verified identity documents.",
      description: "User reported issue with draft will.",
      date: "28/03/2025",
      createdBy: { name: "Abdul Wahab", role: "Admin" },
    },
    {
      id: 6,
      title: "Verified identity documents.",
      description: "User reported issue with draft will.",
      date: "29/03/2025",
      createdBy: { name: "Abdul Wahab", role: "Admin" },
    },
    {
      id: 7,
      title: "Verified identity documents.",
      description: "User reported issue with draft will.",
      date: "27/03/2025",
      createdBy: { name: "Abdul Wahab", role: "Admin" },
    },
    {
      id: 8,
      title: "Verified identity documents.",
      description: "User reported issue with draft will.",
      date: "27/03/2025",
      createdBy: { name: "Abdul Wahab", role: "Admin" },
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-bold">Note</h1>
        <button
          onClick={() => setIsNotesOpen(true)}
          className="bg-(--color-main) flex items-center gap-2 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all cursor-pointer"
        >
          <Image src={PlusIcon} alt="add" width={20} height={20} /> Add Note
        </button>
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

        <button className="p-2.75 border inline-flex self-end border-[#D5D7DA] rounded-lg hover:bg-(--color-main) hover:text-white group transition-all cursor-pointer">
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
      <CommonTable
        columns={columns}
        data={data}
        selectable={true}
        onSelectionChange={() => {}}
      />
      {isNotesOpen && <Notes onClose={() => setIsNotesOpen(false)} />}
      {isPreviewOpen && (
        <NotesPreview
          note={selectedNote}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
      {isDeleteOpen && (
        <DeletePopup
          heading="Note Delete"
          pera="Are you sure you want to delete this note?"
          button="Delete"
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={() => {
            setIsDeleteOpen(false);
            setIsSuccessOpen(true);
          }}
        />
      )}
      {isSuccessOpen && (
        <SuccessfullDeletePopup
          pera="Your note has been deleted successfully."
          onClose={() => setIsSuccessOpen(false)}
        />
      )}
    </div>
  );
}

export default Page;
