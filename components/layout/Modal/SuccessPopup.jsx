"use client";
import React from "react";
import CrossIcon from "@/components/assets/images/CrossIcon.svg";
import Image from "next/image";
import ModelTickIcon from "@/components/assets/images/ModelTickIcon.svg";

function SuccessPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full md:max-w-[400px] shadow-xl overflow-hidden animate-slideInUp">
        <div className="p-6 relative text-center">
          <button
            onClick={onClose}
            className="absolute right-5 top-4 rounded-lg transition-colors cursor-pointer"
          >
            <Image src={CrossIcon} alt="close" width={24} height={24} />
          </button>

          <div className="mt-8 mb-5 flex justify-center">
            <div className="relative inline-flex">
              {/* Ripple Effect */}
              <div className="rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src={ModelTickIcon}
                  alt="success"
                  width={150}
                  height={150}
                  className=""
                />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-text-1 mb-2">
            Card Updated Successfully
          </h2>
          <p className="text-sm text-black mb-11">
            Your payment details have been securely updated and set as default.
          </p>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-main text-white rounded-lg font-semibold hover:bg-main/90 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPopup;
