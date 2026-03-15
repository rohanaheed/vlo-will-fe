import React from "react";
import Image from "next/image";
import CloseIcon from "../assets/images/CloseIcon.svg";
import SuccessTickIcon from "../assets/images/SuccessTickIcon.svg";
function SuccessPopup({ heading, onClose, onConfirm, pera, button }) {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-lg flex justify-center items-center z-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full md:max-w-[480px] p-6 text-black flex flex-col items-center">
        <div className="w-full flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer p-1 rounded-full transition-colors hover:bg-gray-100"
          >
            <Image src={CloseIcon} alt="close" width={20} height={20} />
          </button>
        </div>

        <div className="mb-5">
          <Image
            src={SuccessTickIcon}
            alt="success"
            width={150}
            height={150}
            className="w-30 h-30 md:w-30 md:h-30"
          />
        </div>

        <h2 className="text-lg md:text-xl font-bold text-black mb-2 text-center">
          {heading}
        </h2>
        <p className="text-sm text-black text-center">{pera}</p>

        <button
          onClick={onConfirm}
          className="w-full mt-12 rounded-lg cursor-pointer bg-main text-white py-2.5 font-semibold hover:bg-main/85 transition-all shadow-sm"
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default SuccessPopup;
