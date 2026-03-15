"use client";
import React, { useState, useRef, useEffect } from "react";
import FillArrowDown from "../../components/assets/images/FillArrowDownBlack.svg";
import Image from "next/image";

function Commondropdown({
  options,
  value,
  onChange,
  placeholder = "Select",
  className,
  dropdownClassName,
  leftIcon,
  rightIcon,
  textColor = "text-text-3",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative`} ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-black border-[#D5D7DA] gap-2 bg-white rounded-lg px-3.5 py-2.25 flex items-center justify-between cursor-pointer border ${className}`}
      >
        <div className="flex items-center gap-2">
          {leftIcon && (
            <div className="shrink-0 flex items-center justify-center">
              {typeof leftIcon === "function" ? (
                leftIcon()
              ) : (
                <Image src={leftIcon} alt="icon" width={22} height={16} />
              )}
            </div>
          )}
          <span className={`text-sm ${textColor}`}>
            {value
              ? typeof value === "object"
                ? value.label
                : value
              : placeholder}
          </span>
          {rightIcon && (
            <div className="shrink-0 flex items-center justify-center">
              {typeof rightIcon === "function" ? rightIcon() : rightIcon}
            </div>
          )}
        </div>
        <Image
          src={FillArrowDown}
          alt="arrow"
          width={20}
          height={20}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div
          className={`${dropdownClassName} absolute top-full w-full whitespace-nowrap left-0 right-0 mt-1 bg-white border border-[#D5D7DA] rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto`}
        >
          {options && options.length > 0 ? (
            options.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`px-3.5 py-3.5 text-sm ${textColor} hover:bg-gray-50 cursor-pointer transition-colors flex items-center gap-2`}
              >
                {typeof option === "object" && option.icon && (
                  <div className="shrink-0 flex items-center justify-center">
                    <Image
                      src={option.icon}
                      alt="icon"
                      width={20}
                      height={14}
                    />
                  </div>
                )}
                {typeof option === "object" ? option.label : option}
              </div>
            ))
          ) : (
            <div className={`px-3.5 py-2.5 text-sm ${textColor} text-center`}>
              No options found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Commondropdown;
