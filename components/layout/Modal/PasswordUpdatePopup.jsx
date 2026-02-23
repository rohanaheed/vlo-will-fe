import cross from "@/components/assets/images/CrossIcon.svg";
import tick from "@/components/assets/images/CheckIcon1.svg";
import Image from "next/image";
import eye from "@/components/assets/images/EyeOpenIcon.png";
import eyeOff from "@/components/assets/images/EyeCloseIcon.png";
import { useState } from "react";

function PasswordUpdatePopup({ isOpen, onClose, onUpdate }) {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full md:max-w-[480px] shadow-xl overflow-hidden animate-slideInUp">
        <div className="p-6 relative text-left">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-text-1">
              Update Password
            </h2>
            <div
              onClick={onClose}
              className="p-1 rounded-lg transition-colors cursor-pointer"
            >
              <Image src={cross} alt="close" width={24} height={24} />
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-4 mb-1.5">
                Current Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showCurrent ? "text" : "password"}
                  placeholder="Enter current password"
                  className="w-full px-3 py-2.5 border border-black/16 rounded-lg text-base text-text-5 focus:outline-none focus:border-main transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <Image
                    src={showCurrent ? eye : eyeOff}
                    alt="toggle visibility"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-4 mb-1.5">
                New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full px-3 py-2.5 border border-black/16 rounded-lg text-base text-text-5 focus:outline-none focus:border-main transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <Image
                    src={showNew ? eye : eyeOff}
                    alt="toggle visibility"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-4 mb-1.5">
                Confirm New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter new password"
                  className="w-full px-3 py-2.5 border border-black/16 rounded-lg text-base text-text-5 focus:outline-none focus:border-main transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <Image
                    src={showConfirm ? eye : eyeOff}
                    alt="toggle visibility"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-0.5 mt-2">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 p-1.5 rounded-full bg-[#ECF6FF]">
                  <Image
                    src={tick}
                    alt="tick"
                    width={10}
                    height={8}
                    className="min-w-2.5"
                  />
                </div>
                <div>
                  <p className="text-main">Password Policy:</p>
                  <p className="text-sm text-text-5">
                    Password must contain at least - 1 lowercase character, 1
                    number, 1 uppercase character, 1 special symbol, minimum 8
                    characters.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-11">
              <button
                onClick={onClose}
                className="flex-1 py-2.25 border border-black/16 text-text-5 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer text-base"
              >
                Cancel
              </button>
              <button
                onClick={onUpdate}
                className="flex-1 py-2.25 bg-main text-white rounded-lg font-semibold hover:bg-main/85 transition-colors cursor-pointer text-base"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordUpdatePopup;
