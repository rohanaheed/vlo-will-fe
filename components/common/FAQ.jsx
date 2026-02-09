"use client"
import React, { useState } from "react";

function FAQ({ value }) {
    const [openIndex, setOpenIndex] = useState(0);



    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="">
            <div className="space-y-6">
                {value && value.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-start text-left group"
                        >
                            <span className="text-base md:text-lg font-medium text-text-1 pr-8">
                                {item.id}. {item.question}
                            </span>
                            <span className="flex-shrink-0 mt-1 cursor-pointer border border-[#A4A7AE] rounded-full">
                                {openIndex === index ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#A4A7AE]">
                                        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#A4A7AE]">
                                        <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                )}
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-sm md:text-base font-normal text-text-5 leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;