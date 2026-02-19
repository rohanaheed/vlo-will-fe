import React from "react";
import Image from "next/image";
import ModelTickIcon from "@/components/assets/images/ModelTickIcon.svg";

import CrossIcon from "@/components/assets/images/CrossIcon.svg";

function FeedbackSentModal({ onClose }) {
  return (
    <div className="fixed modal inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-md:mx-4 w-full md:w-125 p-6 shadow-xl relative flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute pt-2 top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <Image src={CrossIcon} alt="Close" width={24} height={24} />
        </button>
        <div className="mt-4">
          <Image src={ModelTickIcon} alt="Success" width={150} height={150} />
        </div>
        <h2 className="text-xl font-semibold text-black mt-5">
          Your feedback submitted Successfully!
        </h2>
        <p className="text-black text-center mt-2">
          Thanks for your feedback. Our team will review it shortly.
        </p>
        <button
          onClick={onClose}
          className="mt-8 px-6 py-2.5 w-full cursor-pointer bg-main text-white rounded-lg text-base font-semibold hover:bg-main/90 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default FeedbackSentModal;
