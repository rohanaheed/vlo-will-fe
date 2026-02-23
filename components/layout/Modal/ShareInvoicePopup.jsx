import Image from "next/image";
import PinIcon from "@/components/assets/images/PinIcon.svg";
import CrossIcon from "@/components/assets/images/CrossIcon.svg";

function ShareInvoicePopup({ isOpen, onClose, onSend }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full md:max-w-[480px] shadow-xl overflow-hidden animate-slideInUp">
        <div className="p-6 relative text-left">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-semibold text-text-1">
              Share Invoice by Email
            </h2>
            <button
              onClick={onClose}
              className="p-1 rounded-lg transition-colors cursor-pointer"
            >
              <Image src={CrossIcon} alt="close" width={20} height={20} />
            </button>
          </div>

          <p className="text-sm text-text-5 mb-5">
            Send a PDF copy of this invoice directly to your client's inbox. You
            can include a short message and choose to send yourself a copy as
            well.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-4 mb-1.5">
                Recipient Email(s) <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="client@example.com"
                className="w-full px-3 py-2 border text-black border-black/16 rounded-lg focus:outline-none focus:border-main transition-colors"
                defaultValue="client@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-4 mb-1.5">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Invoice NV-2025-0012 from LawNest UK"
                className="w-full px-3 py-2 border text-black border-black/16 rounded-lg focus:outline-none focus:border-main transition-colors"
                defaultValue="Invoice NV-2025-0012 from LawNest UK"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-4 mb-1.5">
                Message (Optional) <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={7}
                placeholder={`Hi [Client Name],

Please find attached your invoice. Let us know if you have any questions.

Thank you,

LawNest UK Billing Team`}
                className="w-full px-3 py-2 border text-black border-black/16 rounded-lg focus:outline-none focus:border-main transition-colors mb-4"
                defaultValue={``}
              />
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-main bg-white transition-all checked:bg-main"
                  defaultChecked
                />
                <svg
                  className="pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-1.5">
                <Image src={PinIcon} alt="pin" width={16} height={16} />
                <span className="text-xs text-black/60 font-medium">
                  Attach invoice PDF
                </span>
              </div>
            </label>

            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-black/16 bg-white transition-all checked:bg-main checked:border-main"
                />
                <svg
                  className="pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-xs text-black/60 font-medium">
                Send a copy to my email (billing@lawnest.uk)
              </span>
            </label>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 border border-black/16 text-black rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer text-sm"
            >
              Cancel
            </button>
            <button
              onClick={onSend}
              className="flex-1 py-2.5 bg-main text-white rounded-lg font-semibold hover:bg-main/90 transition-colors cursor-pointer text-sm"
            >
              Send Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareInvoicePopup;
