import React from "react";
import Image from "next/image";
import CloseIcon from "../../assets/images/CloseIcon.svg";

function DeletePopup({ heading, onClose, onConfirm, pera, button }) {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-lg flex justify-center items-center z-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full md:max-w-[480px] p-6 text-black">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold text-black">{heading}</h2>
          <button
            onClick={onClose}
            className="cursor-pointer p-1 rounded-full transition-colors"
          >
            <Image src={CloseIcon} alt="close" width={20} height={20} />
          </button>
        </div>

        <p className="text-sm text-text-5">{pera}</p>

        <div className="flex gap-3 mt-12">
          <button
            onClick={onClose}
            className="w-full rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 border border-black/16 py-2.25 font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="w-full rounded-lg cursor-pointer bg-[#FF383C] hover:bg-[#FF383C]/85 text-white transition-all duration-300 border border-black/16 py-2.25 font-semibold"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
