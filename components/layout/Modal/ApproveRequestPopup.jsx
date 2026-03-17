import React from "react";
import Image from "next/image";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import UserIcon from "../../assets/images/UserIcon.svg";
import ChevronDown from "../../assets/images/FillArrowDownBlack.svg";

function ApproveRequestPopup({ onClose, onSubmit }) {
  const customer = {
    name: "Umay Fiaz",
    email: "testing@gmail.com",
    avatar: UserIcon,
  };

  const recipient = {
    name: "Amy Diaz",
    email: "testing@gmail.com",
    avatar: UserIcon,
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-1000 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full md:max-w-[480px] p-6 text-black">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold text-text-1">
            Approval Request
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer p-1 rounded-full transition-colors hover:bg-gray-100"
          >
            <Image src={CloseIcon} alt="close" width={20} height={20} />
          </button>
        </div>

        {/* Summary Details */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="grid grid-cols-2 items-center">
            <span className="text-base font-semibold text-text-1">
              Invoice Number:
            </span>
            <span className="text-sm font-medium text-text-1">
              IMM/1025.00/Nawaz
            </span>
          </div>
          <div className="grid grid-cols-2 items-start">
            <span className="text-base font-semibold text-text-1 mt-1">
              Customer:
            </span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
                <Image
                  src={customer.avatar}
                  alt={customer.name}
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-text-1">
                  {customer.name}
                </span>
                <span className="text-xs text-text-4">{customer.email}</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            <span className="text-base font-semibold text-text-1">
              Total Amount:
            </span>
            <span className="text-sm font-bold text-text-1 ">£00.00</span>
          </div>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col gap-4 mb-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-text-3">To</label>
            <div className="flex items-center justify-between border border-black/16 rounded-xl p-3 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gray-100 overflow-hidden border border-black/5">
                  <Image
                    src={recipient.avatar}
                    alt={recipient.name}
                    width={36}
                    height={36}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-text-1">
                    {recipient.name}
                  </span>
                  <span className="text-xs text-text-4">{recipient.email}</span>
                </div>
              </div>
              <Image src={ChevronDown} alt="down" width={20} height={20} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-text-3">From</label>
            <div className="flex items-center justify-between border border-black/16 rounded-xl p-3 py-1.5 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gray-100 overflow-hidden border border-black/5">
                  <Image
                    src={recipient.avatar}
                    alt={recipient.name}
                    width={36}
                    height={36}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-text-1">
                    {recipient.name}
                  </span>
                  <span className="text-xs text-text-4">{recipient.email}</span>
                </div>
              </div>
              <Image src={ChevronDown} alt="down" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* Note Field */}
        <div className="flex flex-col gap-1.5 mb-12">
          <label className="text-sm font-semibold text-text-3">Note</label>
          <input
            type="text"
            placeholder="write note"
            className="border border-black/16 rounded-xl p-3 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-main/50"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl cursor-pointer hover:bg-gray-100 transition-all duration-300 border border-black/16 py-2.5 font-bold text-sm text-text-1"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="flex-1 rounded-xl cursor-pointer bg-main hover:bg-main/90 text-white transition-all duration-300 py-2.5 font-bold text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApproveRequestPopup;
