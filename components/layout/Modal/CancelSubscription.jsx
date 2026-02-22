import React from "react";
import CrossIcon from "@/components/assets/images/CrossIcon.svg";
import Image from "next/image";

function CancelSubscription({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full md:max-w-[480px] shadow-xl overflow-hidden animate-slideInUp">
        <div className="p-6 relative">
          <button
            onClick={onClose}
            className="absolute right-5 top-4 rounded-lg transition-colors cursor-pointer"
          >
            <Image src={CrossIcon} alt="close" width={24} height={24} />
          </button>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-text-1 mb-5">
              Cancel Subscription
            </h2>
            <div className="space-y-3">
              <p className="text-sm text-text-5">
                Are you sure you want to cancel your subscription? You'll lose
                access to premium documents, saved drafts, and editing tools
                once your billing period ends.
              </p>
              <p className="text-sm text-text-5">
                We'd hate to see you go. Would you like to tell us why you're
                cancelling?
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={onClose}
              className="flex-1 py-2.25 px-4 border border-black/10 rounded-xl font-semibold text-black hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 py-2.5 px-4 bg-main text-white rounded-xl font-semibold hover:bg-main/90 transition-colors cursor-pointer"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CancelSubscription;
