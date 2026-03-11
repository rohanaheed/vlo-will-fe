import React from "react";
import DeleteTick from "../assets/images/DeleteTick.svg";
import Image from "next/image";
import CloseIcon from "../assets/images/CloseIcon.svg";
function SuccessfullDeletePopup({ heading, onClose, pera, button }) {
  return (
    <div>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-lg flex justify-center items-center z-100 p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-[480px] p-6 text-black text-center">
          <div className="flex justify-end mb-2">
            <button
              onClick={onClose}
              className="cursor-pointer p-1 rounded-full transition-colors hover:bg-gray-100"
            >
              <Image src={CloseIcon} alt="close" width={20} height={20} />
            </button>
          </div>

          <div className="flex flex-col items-center gap-5 mb-8">
            <div className=" flex items-center justify-center">
              <Image src={DeleteTick} alt="success" width={150} height={150} />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-lg md:text-xl font-semibold text-black">
                Deleted Successfully
              </h2>
              <p className="text-sm text-text-5 ">{pera}</p>
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={onClose}
              className="w-full rounded-lg cursor-pointer bg-[#FF383C] hover:bg-[#FF383C]/85 text-white transition-all duration-300 py-2.5 font-semibold shadow-sm"
            >
              Closed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessfullDeletePopup;
