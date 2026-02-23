import cross from "@/components/assets/images/CrossIcon.svg";
import Image from "next/image";

function DeleteAccount({ isOpen, onClose, onDelete }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full md:max-w-[540px] shadow-xl overflow-hidden animate-slideInUp">
        <div className="p-3 md:p-6 relative text-left">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-text-1">
              Delete Account
            </h2>
            <div
              onClick={onClose}
              className="p-1 rounded-lg transition-colors cursor-pointer"
            >
              <Image src={cross} alt="close" width={24} height={24} />
            </div>
          </div>

          <div className="">
            <p className="text-sm text-text-5">
              Deleting your account will permanently remove all your data,
              documents, and billing information from LawNest UK. This action
              cannot be undone.
            </p>

            <div className="flex gap-3 mt-11">
              <button
                onClick={onClose}
                className="flex-1 py-2.25 border border-black/16 text-text-5 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer text-base"
              >
                Cancel
              </button>
              <button
                onClick={onDelete}
                className="flex-1 py-2.25 bg-[#FF4444] text-white rounded-lg font-semibold hover:bg-[#EE3333] transition-colors cursor-pointer text-base"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
