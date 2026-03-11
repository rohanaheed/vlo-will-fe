import React, { useState } from "react";
import Image from "next/image";
import Alice from "@/components/assets/images/Alice.svg";
import PaperclipIcon from "@/components/assets/images/PinIconBLue.svg";

// Inline Icons for ListItem
const StarIcon = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "#FBBF24" : "none"}
    stroke={filled ? "#FBBF24" : "#9CA3AF"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);
const Tag1OutlineIcon = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    fill={filled ? "#F97316" : "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.499 3.8335C12.685 3.8335 12.8588 3.87405 13.0254 3.95752C13.1926 4.0413 13.3249 4.15391 13.4297 4.29639L17.707 9.99951L13.4326 15.6997L13.4297 15.7046C13.3249 15.8475 13.1923 15.9598 13.0254 16.0435C12.8591 16.1268 12.6857 16.1669 12.5 16.1665H2.66699L7.06641 10.3003L7.29102 10.0005L7.06641 9.69971L2.66602 3.8335H12.499Z"
      stroke={filled ? "#F97316" : "#9CA3AF"}
      strokeLinejoin="round"
      strokeWidth={filled ? "1" : "1"}
    />
  </svg>
);
const CheckIcon = ({ checked }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={checked ? "#E5E7EB" : "none"}
    stroke={checked ? "#E5E7EB" : "#D1D5DB"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="4" />
    {checked && (
      <polyline points="8 12 11 15 16 9" stroke="#9CA3AF" strokeWidth="3" />
    )}
  </svg>
);

const EmailListItem = ({
  email,
  onClick,
  isSelected,
  PinIconBLue,
  Tag1Icon,
}) => {
  const [isStarred, setIsStarred] = useState(email.isStarred || false);
  const [isPinned, setIsPinned] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleStarClick = (e) => {
    e.stopPropagation();
    setIsStarred(!isStarred);
  };

  const handlePinClick = (e) => {
    e.stopPropagation();
    setIsPinned(!isPinned);
  };

  const handleCheckClick = (e) => {
    e.stopPropagation();
    setIsChecked(!isChecked);
  };
  return (
    <div
      onClick={() => onClick(email)}
      className={`p-4 border border-[#E4E4E7] flex flex-col gap-2 cursor-pointer transition-colors ${isSelected ? "bg-[#f1f7fe] rounded-lg border border-[#3b82f6]" : "hover:bg-gray-50 rounded-lg"}`}
      style={isSelected ? { borderWidth: "2px" } : undefined}
    >
      <div className="flex justify-between items-start w-full">
        {/* Left Side: Avatar & Name */}
        <div className="flex flex-col gap-2">
          <Image
            src={Alice}
            alt={email.sender}
            width={24}
            height={24}
            className="rounded-full object-cover"
          />
          <span className="font-semibold text-text-1 truncate">
            {email.sender}
          </span>
        </div>

        {/* Right Side: Icons & Time */}
        <div className="flex flex-col items-end gap-1.5 mt-0.5">
          <div className="flex items-center gap-1.5 ml-1">
            <button
              onClick={handleStarClick}
              className="hover:bg-gray-100 p-0.5 rounded cursor-pointer transition-colors"
            >
              <StarIcon filled={isStarred} />
            </button>
            <button
              onClick={handlePinClick}
              className="hover:bg-gray-100 p-0.5 rounded cursor-pointer transition-colors"
            >
              {Tag1Icon ? (
                <Tag1OutlineIcon filled={isPinned} />
              ) : PinIconBLue ? (
                <Image
                  src={PinIconBLue}
                  alt="Pin"
                  width={18}
                  height={18}
                  className={`transition-all ${isPinned ? "" : ""}`}
                />
              ) : (
                <div
                  className={`w-4 h-4 rounded-sm ${isPinned ? "bg-orange-500" : "bg-gray-300"}`}
                />
              )}
            </button>
            <input
              type="checkbox"
              className="w-5 h-5 accent-main cursor-pointer bg-transparent border border-[#C9CFD2]"
            />
          </div>
          <span className="text-xs text-text-7 whitespace-nowrap">
            {email.time}
          </span>
        </div>
      </div>

      {/* Subject and Snippet */}
      <div className="flex flex-col">
        <h4 className="text-xs text-text-1 mb-2 truncate">{email.subject}</h4>
        <p className="text-sm text-text-7 line-clamp-2 mb-2">{email.snippet}</p>

        {/* Tags */}
        <div className="flex items-center gap-2">
          {email.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-sm px-3.5 py-0.5 rounded-full font-medium ${
                idx === 0 ? "bg-text-1 text-white" : "bg-[#F4F4F5] text-text-1"
              }`}
            >
              {tag}
            </span>
          ))}
          {email.hasAttachment && (
            <button className="hover:bg-gray-100 cursor-pointer p-1 rounded-full ml-1">
              <Image
                src={PaperclipIcon}
                alt="Attachment"
                width={24}
                height={24}
                className="w-6"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailListItem;
