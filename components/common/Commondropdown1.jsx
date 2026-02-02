"use client"
import React, { useState, useRef, useEffect } from 'react'
import FillArrowDown from '../../components/assets/images/ChevronLeftBlack.svg'
import Image from 'next/image'

function Commondropdown({ options, value, onChange, placeholder = "Select", className, dropdownClassName }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} border w-full text-black border-[#D5D7DA] flex gap-2 bg-white rounded-lg px-3.5 py-2.25 flex items-center justify-between cursor-pointer`}
      >
        <span className={`text-sm ${value ? "text-[#181D27]" : "text-[#717680]"}`}>
          {value ? (typeof value === 'object' ? value.label : value) : placeholder}
        </span>
        <Image
          src={FillArrowDown}
          alt='arrow'
          width={20}
          height={20}
          className={`transition-transform duration-200 ${isOpen ? "rotate-90" : "-rotate-90"}`}
        />
      </div>

      {isOpen && (
        <div className={`${dropdownClassName} absolute top-full w-full whitespace-nowrap left-0 right-0 mt-1 bg-white border border-[#D5D7DA] rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto`}>
          {options && options.length > 0 ? (
            options.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  onChange(option)
                  setIsOpen(false)
                }}
                className='px-3.5 py-2.5 text-sm text-[#181D27] hover:bg-gray-50 cursor-pointer transition-colors'
              >
                {typeof option === 'object' ? option.label : option}
              </div>
            ))
          ) : (
            <div className='px-3.5 py-2.5 text-sm text-[#717680] text-center'>No options found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Commondropdown
