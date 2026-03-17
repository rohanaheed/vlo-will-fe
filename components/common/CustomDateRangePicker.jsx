"use client";
import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Image from "next/image";
import CalendarIcon from "../assets/images/CalendarIcon.svg";

const CustomInput = forwardRef(
  ({ value, onClick, placeholder, className }, ref) => (
    <div
      className={`flex items-center justify-between gap-2 border border-gray-300 rounded-lg px-3 cursor-pointer bg-white min-w-[200px] w-full ${className || "py-3.75"}`}
      onClick={onClick}
      ref={ref}
    >
      <span className="text-[#33383F] mt-0.5 text-sm whitespace-nowrap">
        {value && value.length > 0 ? value : placeholder}
      </span>
      <Image src={CalendarIcon} alt="Calendar" width={20} height={20} />
    </div>
  ),
);

CustomInput.displayName = "CustomInput";

const CustomDateRangePicker = ({ startDate, endDate, onChange, className }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      customInput={<CustomInput className={className} />}
      placeholderText="10/02/2026 - 10/02/2026"
      dateFormat="dd/MM/yyyy"
      wrapperClassName="w-full"
    />
  );
};

export default CustomDateRangePicker;
