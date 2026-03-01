"use client";
import React, { useState } from "react";
import Refresh from "@/components/assets/images/RefreshIcon.svg";
import Image from "next/image";
import Commondropdown from "@/components/common/Commondropdown1.jsx";
import PlusBlueIcon from "@/components/assets/images/PlusBlueIcon.svg";
import CrossRedIcon from "@/components/assets/images/CrossRedIcon.svg";
import PrintIcon from "@/components/assets/images/PrintIcon.svg";
import EditIconBlue from "@/components/assets/images/EditIconBlue.svg";
import DownloadIconBlue from "@/components/assets/images/DownloadIconBlue.svg";
import ShareIconBlue from "@/components/assets/images/ShareIconBlue.svg";
import AddIcon from "@/components/assets/images/AddClipboardIcon.svg";

function Review({ onSave, onSkip, onBack, onEditor, onShare, onDownload, onPayment }) {
  const [isActive, setIsActive] = useState("create");

  return (
    <div className="bg-[#FAFAFA] rounded-lg p-6">
      <div className="flex items-center justify-between gap-4 flex-wrap w-full mb-5">
        <h2 className="lg:text-4xl text-2xl font-bold text-text-1">
          Review & Save
        </h2>
        <button className="text-black flex text-xs items-center gap-1 cursor-pointer">
          Auto Saved
          <Image
            src={Refresh}
            alt="Refresh"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </button>
      </div>

      <div className="">
        <p className="text-text-5 md:text-xl text-base">
          Review all sections carefully before finalizing.
        </p>
        <p className="text-text-5 md:text-xl text-base">
          You may edit, preview, and download your Will for signing or
          eSignature.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row items-center flex-wrap whitespace-nowrap gap-2 mt-4">
          <button
            onClick={() => setIsActive("print")}
            className={`${isActive === "print" ? "bg-main text-white border-main" : "text-main border-main hover:bg-main hover:text-white"} group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-[290px] md:shrink md:grow md:basis-[150px]`}
          >
            <Image
              src={PrintIcon}
              alt="Print"
              width={20}
              height={20}
              className={`${isActive === "print" ? "invert brightness-0" : "group-hover:invert group-hover:brightness-0"}`}
            />
            <span className="">Print</span>
          </button>
          <button
            onClick={() => {
              setIsActive("edit");
              onEditor();
            }}
            className={`${isActive === "edit" ? "bg-main text-white border-white" : "text-main border-main hover:bg-main hover:text-white"} group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-[290px] md:shrink md:grow md:basis-[150px]`}
          >
            <Image
              src={EditIconBlue}
              alt="Edit"
              width={20}
              height={20}
              className={`${isActive === "edit" ? "invert brightness-0" : "group-hover:invert group-hover:brightness-0"}`}
            />
            <span className="">Edit</span>
          </button>
          <button
            onClick={() => {
              setIsActive("download");
              if (onDownload) onDownload();
            }}
            className={`${isActive === "download" ? "bg-main text-white border-main" : "text-main border-main hover:bg-main hover:text-white"} group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-[230px] md:shrink md:grow md:basis-[150px]`}
          >
            <Image
              src={DownloadIconBlue}
              alt="Download"
              width={20}
              height={20}
              className={`${isActive === "download" ? "invert brightness-0" : "group-hover:invert group-hover:brightness-0"}`}
            />
            <span className="">Download Pdf</span>
          </button>
          <button
            onClick={() => {
              setIsActive("share");
              onShare();
            }}
            className={`${isActive === "share" ? "bg-main text-white border-main" : "text-main border-main hover:bg-main hover:text-white"} group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-[230px] md:shrink md:grow md:basis-[180px]`}
          >
            <Image
              src={ShareIconBlue}
              alt="Share"
              width={20}
              height={20}
              className={`${isActive === "share" ? "invert brightness-0" : "group-hover:invert group-hover:brightness-0"}`}
            />
            <span>Share</span>
          </button>
          <button
            onClick={() => {
              setIsActive("create");
              if (onPayment) onPayment();
            }}
            className={`${isActive === "create" ? "bg-main text-white border-main" : "text-main border-main hover:bg-main hover:text-white"} group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-[230px] md:shrink md:grow md:basis-[230px]`}
          >
            <Image
              src={AddIcon}
              alt="Create"
              width={24}
              height={24}
              className={`${isActive === "create" ? "invert brightness-0" : "brightness-0 group-hover:invert"}`}
            />
            Create My Will (28)
          </button>
        </div>

        {/* Legal Tip */}
        <div className="mt-4">
          <p className="text-sm font-bold text-text-5 mb-1">Legal Tip:</p>
          <p className="text-sm text-text-5">
            Review all details carefully before finalizing. You can return to
            edit any section at any time before signing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
