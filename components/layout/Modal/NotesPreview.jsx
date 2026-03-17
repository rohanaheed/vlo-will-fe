"use client";
import React from "react";
import Image from "next/image";
import CloseIcon from "@/components/assets/images/CloseIcon.svg";

function NotesPreview({ note, onClose }) {
  if (!note) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-lg flex justify-center items-center z-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[480px] p-6 text-black">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-black">Preview</h2>
          <button
            onClick={onClose}
            className="cursor-pointer p-1 rounded-full transition-colors"
          >
            <Image src={CloseIcon} alt="close" width={20} height={20} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-text-1 mb-5">Title</h3>
            <p className="text-base text-text-1 ">{note.title}</p>
          </div>

          <div>
            <p className="text-base text-text-1 whitespace-pre-wrap">
              {note.description}
            </p>
          </div>

          <div className="">
            <p className="text-base text-text-1">
              Thanks, {note.createdBy?.name || "Emily"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesPreview;
