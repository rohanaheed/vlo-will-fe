"use client";
import React, { useState, useRef, useEffect } from "react";
import FillArrowDown from "../../components/assets/images/ChevronLeftBlack.svg";
import Image from "next/image";

function Commondropdown({
  options,
  imageClassName,
  arrowClassName,
  buttonClassName,
  textClassName,
  value,
  onChange,
  placeholder = "Select",
  className,
  dropdownClassName,
  renderSelected,
  renderOption,
  truncate = true,
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
        className={`${className} border w-full border-[#D5D7DA] gap-2 bg-white rounded-lg px-3.5 py-2.25 flex items-center justify-between cursor-pointer`}
      >
        <div
          className={`flex items-center gap-2 ${truncate ? "min-w-0 flex-1" : ""}`}
        >
          {renderSelected && value ? (
            renderSelected(value)
          ) : (
            <>
              {value && typeof value === "object" && value.icon && (
                <Image
                  src={value.icon}
                  alt="icon"
                  width={20}
                  height={20}
                  className={`${imageClassName} rounded-full object-cover`}
                />
              )}
              <span
                className={`text-sm ${truncate ? "truncate" : ""} ${value ? textClassName || "text-black" : "text-text-7"}`}
              >
                {value
                  ? typeof value === "object"
                    ? value.label
                    : value
                  : placeholder}
              </span>
            </>
          )}
        </div>
        <Image
          src={FillArrowDown}
          alt="arrow"
          width={20}
          height={20}
          className={`transition-transform duration-200 ${isOpen ? "rotate-90" : "-rotate-90"} ${arrowClassName}`}
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
                style={
                  option?.value === value?.value ? { color: "#000000" } : {}
                }
                className={`${buttonClassName} px-3.5 py-2.5 text-sm hover:bg-zinc-200 cursor-pointer transition-colors flex items-center gap-2 text-black`}
              >
                {renderOption ? (
                  renderOption(option)
                ) : (
                  <>
                    {typeof option === "object" && option.icon && (
                      <Image
                        src={option.icon}
                        alt="icon"
                        width={20}
                        height={20}
                        className={`${imageClassName} rounded-full object-cover`}
                      />
                    )}
                    {typeof option === "object" ? option.label : option}
                  </>
                )}
              </div>
            ))
          ) : (
            <div className="px-3.5 py-2.5 text-sm text-text-7 text-center">
              No options found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Commondropdown;
