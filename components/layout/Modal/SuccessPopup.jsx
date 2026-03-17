import React from "react";
import Image from "next/image";
import CrossIcon from "@/components/assets/images/CrossIcon.svg";
import ModelTickIcon from "@/components/assets/images/ModelTickIcon.svg";

function SuccessPopup({ heading, onClose, onConfirm, pera, button }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full md:max-w-[480px] p-6 text-black flex flex-col items-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer p-1 rounded-full transition-colors hover:bg-gray-100"
        >
          <Image src={CrossIcon} alt="close" width={24} height={24} />
        </button>

        <div className="mt-4 mb-5">
          <Image
            src={ModelTickIcon}
            alt="success"
            width={150}
            height={150}
            className="w-32 h-32 md:w-[150px] md:h-[150px]"
          />
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-black mb-2 text-center">
          {heading}
        </h2>
        <p className="text-sm text-text-5 text-center mb-8 px-4">{pera}</p>

        <button
          onClick={onConfirm || onClose}
          className="w-full rounded-lg cursor-pointer bg-main text-white py-2.5 font-bold text-base hover:bg-main/85 transition-all shadow-sm"
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default SuccessPopup;
