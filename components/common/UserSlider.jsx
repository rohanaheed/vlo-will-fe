"use client";
import React, { useRef } from "react";
import Image from "next/image";
import ArrowRightGray from "@/components/assets/images/ArrowRightGray.svg";
import ArrowLeftGray from "@/components/assets/images/ArrowLeftGray.svg";
import ArrowTopCornerWhite from "@/components/assets/images/ArrowTopCornerWhite.svg";

function UserSlider({ data = [] }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mt-12">
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data.map((expert, index) => (
          <div
            key={index}
            className="shrink-0 w-[280px] md:w-[384px] snap-start relative group cursor-pointer"
          >
            <div
              className="w-full h-[370px] md:h-[480px] relative overflow-hidden"
              style={{ backgroundColor: expert.bgColor }}
            >
              {/* Expert Image */}
              <div className="absolute inset-0 flex justify-center items-end">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Gradient Overlay & Text Container */}
              <div className="absolute bottom-0 bg-black/30 backdrop-blur-lg flex flex-col justify-end p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-semibold text-xl md:text-3xl">
                    {expert.name}
                  </h3>
                  <Image
                    src={ArrowTopCornerWhite}
                    alt="arrow"
                    width={24}
                    height={24}
                    className=""
                  />
                </div>
                <p className="text-white text-base md:text-xl font-medium mb-1">
                  {expert.title}
                </p>
                <p className="text-white text-sm md:text-base pr-2">
                  {expert.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={scrollLeft}
          className="w-14 h-14 rounded-full border border-[#E9EAEB] flex items-center justify-center hover:bg-gray-50 transition cursor-pointer bg-white"
        >
          <Image src={ArrowLeftGray} alt="Previous" width={24} height={24} />
        </button>
        <button
          onClick={scrollRight}
          className="w-14 h-14 rounded-full border border-[#E9EAEB] flex items-center justify-center hover:bg-gray-50 transition cursor-pointer bg-white"
        >
          <Image src={ArrowRightGray} alt="Next" width={24} height={24} />
        </button>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `,
        }}
      />
    </div>
  );
}

export default UserSlider;
