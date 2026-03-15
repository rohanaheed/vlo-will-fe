import React from "react";
import Image from "next/image";
import {
  emailNavigation,
  secondaryNavigation,
  extraNavigation,
  labels,
} from "./mockData";
import InboxIcon from "@/components/assets/images/Inbox.svg";
import DraftIcon from "@/components/assets/images/DraftIcon.svg";
import SentIcon from "@/components/assets/images/SentIcon.svg";
import ScheduleIcon from "@/components/assets/images/ScheduleIcon.svg";
import SpamIcon from "@/components/assets/images/SpamIcon.svg";
import DeleteIconMail from "@/components/assets/images/DeleteIconMail.svg";
import ArchiveIcon from "@/components/assets/images/ArchiveIcon.svg";
import ReadRecepitsIcon from "@/components/assets/images/ReadRecepitsIcon.svg";
import AlarmIcon from "@/components/assets/images/AlarmIcon.svg";
import StarMailIcon from "@/components/assets/images/StarMailIcon.svg";
import GroupIcon from "@/components/assets/images/GroupIcon.svg";
import UpdatesIcon from "@/components/assets/images/UpdatesIcon.svg";
import ForumsIcon from "@/components/assets/images/ForumsIcon.svg";
import CartIcon from "@/components/assets/images/CartIcon.svg";
import TagIcon from "@/components/assets/images/TagIcon.svg";

// Inline Icons
const PlusIcon = () => (
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
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const FolderIcon = () => (
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
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

const DefaultIcon = () => (
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
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

const iconMap = {
  Inbox: InboxIcon,
  FileText: DraftIcon, // Mapping draft to filetext logic
  Send: SentIcon,
  Clock: ScheduleIcon,
  ShieldAlert: SpamIcon,
  Trash2: DeleteIconMail,
  Archive: ArchiveIcon,
  CheckSquare: ReadRecepitsIcon,
  BellRing: AlarmIcon,
  Sparkles: StarMailIcon,
  Users: GroupIcon,
  Info: UpdatesIcon,
  MessageSquare: ForumsIcon,
  ShoppingCart: CartIcon,
  Tag: TagIcon,
};

const NavItem = ({ item, activeId, onClick }) => {
  const Icon = iconMap[item.icon] || DefaultIcon;
  const isActive = activeId === item.id;

  // Protect specific SVG icons like Tag from being completely inverted or grayed out if requested
  const isProtectedIcon = item.name === "Promotions" || item.icon === "Tag";

  return (
    <button
      onClick={() => onClick(item.id)}
      className={`w-full cursor-pointer flex items-center justify-between text-black px-4 py-2 transition-colors ${isActive ? "bg-main text-white rounded-lg font-bold" : "text-black hover:bg-gray-50 hover:text-black rounded-lg"}`}
    >
      <div className="flex items-center gap-3">
        {typeof Icon === "function" ? (
          <Icon className={isActive ? "text-white" : "text-current"} />
        ) : (
          <Image
            src={Icon}
            alt={item.name}
            width={20}
            height={20}
            className={`transition-all ${isProtectedIcon && !isActive ? "" : isActive ? "invert brightness-0" : "brightness-0 contrast-100 opacity-100"}`}
          />
        )}
        <span>{item.name}</span>
      </div>
      {item.count > 0 && (
        <span className={isActive ? "font-bold" : ""}>{item.count}</span>
      )}
    </button>
  );
};

const LeftSidebar = ({ activeId, onTabChange }) => {
  return (
    <div className="w-[280px] border-r border-gray-200 h-full flex flex-col bg-white shrink-0 max-[1400px]:rounded-xl">
      <div
        className="overflow-y-auto flex-1 px-3 pb-6 flex flex-col gap-6 max-[1400px]:mt-4"
        style={{ scrollbarWidth: "thin" }}
      >
        {/* Main Nav */}
        <div className="flex flex-col gap-0.5">
          {emailNavigation.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              activeId={activeId}
              onClick={onTabChange}
            />
          ))}
        </div>

        <hr className="border-[#E4E4E7] h-[1.5px] ml-2 w-70" />

        {/* Secondary Nav */}
        <div className="flex flex-col gap-0.5">
          {secondaryNavigation.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              activeId={activeId}
              onClick={onTabChange}
            />
          ))}
        </div>

        <hr className="border-[#E4E4E7] h-[1.5px] ml-2 w-70" />

        {/* Extra Nav */}
        <div className="flex flex-col gap-0.5">
          {extraNavigation.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              activeId={activeId}
              onClick={onTabChange}
            />
          ))}
        </div>

        <hr className="border-[#E4E4E7] h-[1.5px] ml-2 w-70" />

        {/* Labels */}
        <div className="flex flex-col gap-1 px-4 mt-2">
          {labels.map((label, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between py-1.5 black cursor-pointer hover:text-gray-900 ${
                idx === labels.length - 1 ? "pl-7" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                {label.name === "Promotions" ? (
                  <Image
                    src={TagIcon}
                    alt="Promotions Tag"
                    width={18}
                    height={18}
                  />
                ) : (
                  <FolderIcon />
                )}
                <span>{label.name}</span>
              </div>
              <span>{label.count}</span>
            </div>
          ))}
        </div>

        <div className="-mt-4">
          <button className="w-full cursor-pointer bg-main hover:bg-main/85 text-white rounded-lg py-2 px-4 flex items-center justify-center gap-2 font-medium transition-colors text-sm">
            <PlusIcon />
            <span>Add Label</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
