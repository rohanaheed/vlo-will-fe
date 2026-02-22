import React from "react";
import Image from "next/image";
import CrossIcon from "@/components/assets/images/CrossIcon.svg";
import CreditCardIcon from "@/components/assets/images/CreditCardNotes.svg";
import masterCard from "@/components/assets/images/DabitCard.svg";

function UpdatePayemntMethod({ isOpen, onClose, onUpdate }) {
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
            <div className="inline-flex">
              <div className="p-6 border border-black/3 rounded-full absolute top-0 left-0 -translate-x-[100px] -translate-y-[100px]">
                <div className="p-6 border border-black/5 rounded-full">
                  <div className="p-6 border border-black/7 rounded-full">
                    <div className="p-6 border border-black/8 rounded-full">
                      <div className="p-6 border border-black/9 rounded-full">
                        <div className="p-3 border border-black/9 rounded-xl flex items-center justify-center">
                          <Image
                            src={CreditCardIcon}
                            alt="change"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-lg mt-12 font-semibold text-text-1 mb-1">
              Update payment method
            </h2>
            <p className="text-sm text-text-5">Update your card details.</p>
          </div>

          <div className="">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-text-4 mb-1.5">
                  Name on card
                </label>
                <input
                  type="text"
                  placeholder="Olivia Rhye"
                  className="w-full px-3 py-2.5 border border-black/10 rounded-lg text-black outline-none focus:border-main transition-colors text-sm"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-text-4 mb-1.5">
                  Expiry
                </label>
                <input
                  type="text"
                  placeholder="06 / 2025"
                  className="w-full px-3 py-2.5 border border-black/10 rounded-lg text-black outline-none focus:border-main transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-text-4 mb-1.5">
                  Card number
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Image
                      src={masterCard}
                      alt="mastercard"
                      width={24}
                      height={16}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    className="w-full pl-11 pr-3 py-2.5 text-black border border-black/10 rounded-lg outline-none focus:border-main transition-colors text-sm"
                  />
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-text-4 mb-1.5">
                  CVV
                </label>
                <input
                  type="password"
                  placeholder="..."
                  className="w-full px-3 py-2.5 text-black border border-black/10 rounded-lg outline-none focus:border-main transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-4 mb-1.5">
                Billing Address
              </label>
              <input
                type="text"
                placeholder="45 Queen Street, London, UK"
                className="w-full px-3 py-2.5 text-black border border-black/10 rounded-lg outline-none focus:border-main transition-colors text-sm"
              />
            </div>
            <p className="text-sm font-medium text-text-4 mt-2 mb-1.5">
              Set as Default Payment Method
            </p>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="default-card"
                className="w-4 h-4 mt-0.5 cursor-pointer accent-main rounded-lg border-black/10"
              />
              <label
                htmlFor="default-card"
                className="text-text-5 cursor-pointer"
              >
                Yes, make this my default card (optional)
              </label>
            </div>
          </div>

          <div className="flex gap-3 mt-8 pt-8 border-t border-black/16">
            <button
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-black/16 rounded-lg font-semibold text-black hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={onUpdate}
              className="flex-1 py-2 px-4 bg-main text-white rounded-lg font-semibold hover:bg-main/90 transition-colors cursor-pointer"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePayemntMethod;
