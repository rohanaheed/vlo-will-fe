import React from "react";
import Image from "next/image";
import ModelTickIcon from "@/components/assets/images/ModelTickIcon.svg";
import CrossIcon from "@/components/assets/images/CrossIcon.svg";

function PaymentModal({ onClose, onDashboard, onViewInvoice }) {
  return (
    <div className="fixed modal inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl w-full md:max-w-[500px] p-6 shadow-xl relative flex flex-col items-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <Image src={CrossIcon} alt="Close" width={24} height={24} />
        </button>

        <div className="mt-4 mb-4">
          <Image src={ModelTickIcon} alt="Success" width={150} height={150} />
        </div>

        <h2 className="text-xl font-bold text-black text-center mb-2">
          Your payment has been Paid successfully.
        </h2>

        <p className="text-black text-center text-sm mb-5">
          Thank you for your payment! Your subscription is now active, and your
          invoice has been emailed to you.
        </p>

        <div className="text-sm self-start">
          <p className="font-bold text-black mb-4">Payment Details:</p>
          <div className="space-y-2">
            <div className="flex text-xs">
              <span className="font-semibold text-black">Invoice ID:</span>
              <span className="text-black">INV-2025-0012</span>
            </div>
            <div className="flex text-xs">
              <span className="font-semibold text-black">Amount Paid:</span>
              <span className="text-black">£144.00 GBP</span>
            </div>
            <div className="flex text-xs">
              <span className="font-semibold text-black">Payment Method:</span>
              <span className="text-black">Visa •••• 2456</span>
            </div>
            <div className="flex text-xs">
              <span className="font-semibold text-black">Payment Date:</span>
              <span className="text-black">28/10/2025</span>
            </div>
            <div className="flex text-xs">
              <span className="font-semibold text-black">Status:</span>
              <span className="font-medium text-black">Paid</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-center text-black mb-4 mt-5 ">
          Need help? Contact our billing team at{" "}
          <a href="mailto:billing@docnet.uk">billing@docnet.uk</a>
        </p>

        <div className="flex w-full gap-3 mt-8">
          <button
            onClick={onDashboard || onClose}
            className="flex-1 py-2.25 border shadow cursor-pointer border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            Go to Dashboard
          </button>
          <button
            onClick={onViewInvoice}
            className="flex-1 py-2.25 shadow cursor-pointer bg-[#0B2C4F] text-white rounded-lg font-semibold hover:bg-[#0B2C4F]/90 transition-colors"
          >
            View Invoice
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
