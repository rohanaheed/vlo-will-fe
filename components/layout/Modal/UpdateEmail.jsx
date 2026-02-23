import cross from "@/components/assets/images/CrossIcon.svg";
import Image from "next/image";
import eye from "@/components/assets/images/EyeOpenIcon.png";
import eyeOff from "@/components/assets/images/EyeCloseIcon.png";
import { useState } from "react";

function UpdateEmail({ isOpen, onClose, onUpdate }) {
  const [showPassword, setShowPassword] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full md:max-w-[480px] shadow-xl overflow-hidden animate-slideInUp">
        <div className="p-6 relative text-left">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-semibold text-text-1">
              Update Email Address
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
                Current Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                readOnly
                className="w-full px-3 py-2.5 border border-black/16 rounded-lg text-base text-text-5 focus:outline-none"
                defaultValue="john.smith@smithlegal.co.uk"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-4 mb-1.5">
                New Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your new email address"
                className="w-full px-3 py-2.5 border border-black/16 rounded-lg text-base text-text-5 focus:outline-none focus:border-main transition-colors"
                defaultValue=""
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-4 mb-1.5">
                Password Confirmation <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password to confirm changes"
                  className="w-full px-3 py-2.5 border border-black/16 rounded-lg text-base text-text-5 focus:outline-none focus:border-main transition-colors pr-10"
                  defaultValue=""
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <Image
                    src={showPassword ? eye : eyeOff}
                    alt="toggle visibility"
                    width={20}
                    height={20}
                  />
                </button>
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
                Update Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmail;
