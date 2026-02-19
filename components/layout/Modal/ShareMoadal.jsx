import React, { useState } from "react";
import Image from "next/image";
import PinIcon from "@/components/assets/images/PinIcon.svg"; // Assuming PinIcon is the paperclip/attachment icon
import CrossIcon from "@/components/assets/images/CrossIcon.svg";

function ShareMoadal({ onClose, isOpen, onSend }) {
  const [formData, setFormData] = useState({
    recipient: "",
    subject: "Shared Document from DocNet UK",
    message: "",
    includeAttachment: true,
    sendCopy: false,
  });

  return (
    <div className="fixed modal inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-md:mx-4 w-full md:w-125 p-6 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-start border-gray-300 mb-5">
          <h2 className="text-lg font-semibold text-text-1">
            Share Document by Email
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <Image src={CrossIcon} alt="Close" width={24} height={24} />
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-text-5 mb-5">
          Send this document securely to one or more recipients via email. You
          can add a personal message and choose whether to receive a copy for
          your records.
        </p>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Recipient Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-text-4">
              Recipient Email(s) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="recipient@example.com"
              value={formData.recipient}
              onChange={(e) =>
                setFormData({ ...formData, recipient: e.target.value })
              }
              className="w-full shadow border border-[#D5D7DA] rounded-lg px-3 py-2.5 text-black text-sm focus:outline-none focus:border-main"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-text-4">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Shared Document from DocNet UK"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full shadow border border-[#D5D7DA] rounded-lg px-3 py-2.5 text-black text-sm focus:outline-none focus:border-main"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-text-4">
              Message (Optional) <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={6}
              value={formData.message}
              placeholder={`Hi [Recipient Name],\n\nI'm sharing a document with you via DocNet UK.\nPlease check the attached file.\n\nBest regards,\n\n[Your Name]\n\nDocNet UK`}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full shadow border border-[#D5D7DA] rounded-lg px-3 py-2.5 text-black text-sm focus:outline-none focus:border-main"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.includeAttachment}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    includeAttachment: e.target.checked,
                  })
                }
                className="w-5 h-5 text-main bg-main rounded border-gray-300 focus:ring-main"
              />
              <span className="text-text-5 flex items-center gap-1">
                <Image
                  src={PinIcon}
                  alt="Attachment"
                  width={16}
                  height={16}
                  className="opacity-60"
                />
                Include document attachment
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.sendCopy}
                onChange={(e) =>
                  setFormData({ ...formData, sendCopy: e.target.checked })
                }
                className="w-5 h-5 text-main bg-main rounded border-gray-300 focus:ring-main"
              />
              <span className="text-text-5">
                Send a copy to my email (billing@docnet.uk)
              </span>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 mt-8 pt-4">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 border cursor-pointer border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSend}
            className="flex-1 cursor-pointer py-2.5 bg-main text-white rounded-lg text-sm font-semibold hover:bg-main/90 transition-colors"
          >
            Send Document
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareMoadal;
