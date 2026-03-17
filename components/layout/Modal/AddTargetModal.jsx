import React, { useState } from "react";
import Image from "next/image";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import Commondropdown1 from "@/components/common/Commondropdown1";

function AddTargetModal({ onClose, onSave }) {
  const [hours, setHours] = useState(0);
  const [timePeriod, setTimePeriod] = useState("Day");

  const timePeriodOptions = [
    { label: "Day", value: "Day" },
    { label: "Week", value: "Week" },
    { label: "Month", value: "Month" },
    { label: "Year", value: "Year" },
  ];

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-lg flex justify-center items-center z-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full md:max-w-[480px] p-6 text-black">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold text-text-1 border-none">
            Set Target
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer p-1 rounded-full transition-colors hover:bg-gray-100"
          >
            <Image src={CloseIcon} alt="close" width={20} height={20} />
          </button>
        </div>

        <p className="text-sm text-text-3 mb-5">
          Specify a billing goal to track within the Billing tab of your
          Timesheet Calendar
        </p>

        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="flex flex-col gap-2.5">
            <label className="text-sm font-semibold text-text-3">Hours</label>
            <input
              type="text"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full px-4 py-3.5 rounded-lg border border-[#F2F2F2] outline-none text-sm transition-all focus:border-main"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="text-sm font-semibold text-text-3">
              Time Period
            </label>
            <Commondropdown1
              options={timePeriodOptions}
              value={timePeriod}
              onChange={setTimePeriod}
              className="text-sm!"
              triggerClassName="py-3.5!"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-full rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 border border-[#F2F2F2] py-3 font-bold text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ hours, timePeriod })}
            className="w-full rounded-lg cursor-pointer bg-main hover:bg-main/85 text-white transition-all duration-300 py-3 font-bold text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTargetModal;
