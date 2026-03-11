import React, { useState } from "react";
import Image from "next/image";
import ArchiveIcon from "@/components/assets/images/ArchiveIcon.svg";
import SpamIcon from "@/components/assets/images/SpamIcon.svg";
import TrashIcon from "@/components/assets/images/TrashIcon.svg";
import ClockIconNotes from "@/components/assets/images/ClockIconNotes.svg";
import EyeIconBLue from "@/components/assets/images/EyeIconBLue.svg";
import AlarmIconOrange from "@/components/assets/images/AlarmIconOrange.svg";
import TagIconYellow from "@/components/assets/images/TagIconYellow.svg";
import MailClockIcon from "@/components/assets/images/MailClockIcon.png";
import InboxIcon from "@/components/assets/images/InboxBlack.svg";
import PrintAiIcon from "@/components/assets/images/PrintAiIcon.svg";
import SendIcon from "@/components/assets/images/SendIcon.svg";
import ArrowBottomToLeftDouble from "@/components/assets/images/ArrowBottomToLeftDouble.svg";
import ArrowBottomToLeft from "@/components/assets/images/ArrowBottomToLeft.svg";
import ArrowBottomToRight from "@/components/assets/images/ArrowBottomToRight.svg";

// Top action bar icons left to right
const MoreVerticalIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

// Reply Icons
const ReplyIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6B7280"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 17 4 12 9 7"></polyline>
    <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
  </svg>
);
const SparklesIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v18"></path>
    <path d="M3 12h18"></path>
    <path d="m18 6-12 12"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const EmailDetailPane = ({ email, onBack }) => {
  const [activeIcons, setActiveIcons] = useState({
    clockNotes: false,
    eye: true,
    alarm: true,
    tag: true,
    mailClock: true,
    star: true,
    inbox: false,
    print: false,
  });

  const toggleIcon = (key) => {
    setActiveIcons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Top Action Bar */}
      <div className="px-4 md:px-6 py-4 flex items-center justify-between border-b border-gray-100 overflow-x-auto custom-scrollbar">
        <div className="flex items-center gap-3">
          {/* Mobile Back Button */}
          <button
            className="md:hidden cursor-pointer p-2 mr-2 rounded text-gray-600"
            onClick={onBack}
          >
            <ChevronLeftIcon />
          </button>

          <div className="flex gap-3">
            <button className="p-1.5 cursor-pointer hover:text-gray-800 rounded transition-colors">
              <Image
                src={ArchiveIcon}
                alt="Archive"
                width={20}
                height={20}
                className="min-w-5"
              />
            </button>
            <button className="p-1.5 cursor-pointer hover:text-gray-800 rounded transition-colors">
              <Image
                src={SpamIcon}
                alt="Spam"
                width={20}
                height={20}
                className="min-w-5"
              />
            </button>
            <button className="p-1.5 cursor-pointer hover:text-gray-800 rounded transition-colors">
              <Image
                src={TrashIcon}
                alt="Trash"
                width={20}
                height={20}
                className="min-w-5"
              />
            </button>
          </div>

          <div className="w-0.5 h-6 bg-[#E4E4E7]"></div>

          <div className="flex whitespace-nowrap gap-3">
            <button
              onClick={() => toggleIcon("clockNotes")}
              className={`p-1.5 rounded cursor-pointer transition-colors ${activeIcons.clockNotes ? "" : ""}`}
            >
              <Image
                src={ClockIconNotes}
                alt="Clock"
                width={20}
                height={20}
                className="min-w-5"
              />
            </button>
            <button
              onClick={() => toggleIcon("eye")}
              className={`p-1.5 rounded cursor-pointer transition-colors ${activeIcons.eye ? "" : ""}`}
            >
              <Image
                src={EyeIconBLue}
                alt="Eye"
                width={20}
                height={20}
                className="min-w-5"
              />
            </button>
            <button
              onClick={() => toggleIcon("alarm")}
              className={`p-1.5 rounded cursor-pointer transition-colors ${activeIcons.alarm ? "" : ""}`}
            >
              <Image
                src={AlarmIconOrange}
                alt="Alarm"
                width={20}
                height={20}
                className="min-w-5"
              />
            </button>
            <button
              onClick={() => toggleIcon("tag")}
              className={`p-1.5 rounded cursor-pointer transition-colors ${activeIcons.tag ? "" : ""}`}
            >
              <Image
                src={TagIconYellow}
                alt="Tag"
                width={20}
                height={20}
                className="min-w-5"
              />
            </button>
            <button
              onClick={() => toggleIcon("star")}
              className={`p-1.5 rounded cursor-pointer transition-colors ${activeIcons.star ? "" : ""}`}
            >
              <StarIcon filled={activeIcons.star} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-3  ml-4">
          <button className="p-2 cursor-pointer rounded-full text-gray-500 hover:text-gray-800 transition-colors">
            <Image
              src={ArrowBottomToLeft}
              alt="Reply All"
              width={22}
              height={22}
              className="min-w-5.5"
            />
          </button>
          <button className="p-2 cursor-pointer rounded-full text-gray-500 hover:text-gray-800 transition-colors">
            <Image
              src={ArrowBottomToLeftDouble}
              alt="Reply All"
              width={22}
              height={22}
              className="min-w-5.5"
            />
          </button>
          <button className="p-2 cursor-pointer rounded-full text-gray-500 hover:text-gray-800 transition-colors">
            <Image
              src={ArrowBottomToRight}
              alt="Forward"
              width={22}
              height={22}
              className="min-w-5.5"
            />
          </button>
          <div className="h-6 w-0.5 bg-[#E4E4E7]"></div>
          <button className="p-2 cursor-pointer rounded-full text-black hover:text-gray-800 transition-colors">
            <MoreVerticalIcon />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-scroll custom-scrollbar p-4">
        {/* Email Header Component */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex gap-4">
            <div className="relative w-10.5 h-10.5 bg-[#F4F4F5] rounded-full flex justify-center items-center shrink-0">
              <img
                src={InboxIcon?.src || InboxIcon}
                alt="Inbox Avatar"
                className="w-5 rounded-full object-cover "
              />
            </div>
            <div>
              <h2 className="text-base font-semibold text-text-1 mb-2">
                {email.sender}
              </h2>
              <div className="text-xs text-text-1 mb-2">
                Re: {email.subject}
              </div>
              <div className="text-xs text-text-1">Re: sender@example.com</div>
            </div>
          </div>
          <div className="text-xs text-text-7 text-right">
            Mar 25, 2025, <br className="md:hidden" />
            1:15 PM
          </div>
        </div>

        {/* Email Body */}
        <div className="text-text-1 space-y-5">
          <p>{email.snippet}</p>
          <p>
            Hi, let's have a meeting tomorrow to discuss the project. I've been
            reviewing the project details and have some ideas I'd like to share.
            It's crucial that we align on our next steps to ensure the project's
            success.
          </p>
          <p>Thanks</p>
        </div>
      </div>

      {/* Reply Section */}
      <div className="p-4 md:p-6  mt-auto">
        <div className=" overflow-hidden flex flex-col">
          <textarea
            placeholder={`Reply ${email.sender}...`}
            className="w-full border text-text-1 focus:border-main border-black/16 rounded-xl py-5 px-4 min-h-[78px] md:min-h-[78] text-sm focus:outline-none resize-none"
          ></textarea>

          <div className="px-3 md:px-4 py-3 flex flex-wrap max-md:flex-col md:items-center justify-between gap-4">
            {/* Toggle Switch */}
            <label className="flex items-center cursor-pointer gap-3 ">
              <div className="relative ">
                <input
                  type="checkbox"
                  className="sr-only peer border border-black/16"
                />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-main"></div>
              </div>
              <span className="text-sm text-text-1 select-none whitespace-nowrap">
                Mute this thread
              </span>
            </label>

            <div className="flex max-sm:flex-col sm:items-center justify-between flex-1 md:flex-initial md:justify-end gap-2 md:gap-4 flex-wrap">
              <button className="text-xs font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors whitespace-nowrap ">
                <Image
                  src={PrintAiIcon}
                  alt="media"
                  width={22}
                  height={22}
                  className="min-w-5.5"
                />
                <span className=" text-sm text-text-1">
                  Reply with Smart Write
                </span>
              </button>

              <button className="bg-main flex justify-center  hover:bg-main/85 cursor-pointer text-white text-xs font-medium px-4 md:px-5 py-2 rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap ">
                Send
                <Image
                  src={SendIcon}
                  alt="Send"
                  width={14}
                  height={14}
                  className=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Extracted from above to use inside component if needed
const StarIcon = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "#FBBF24" : "none"}
    stroke={filled ? "#FBBF24" : "#FBBF24"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default EmailDetailPane;
