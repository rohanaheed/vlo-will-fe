import React, { useState } from "react";
import Image from "next/image";
import SingleLayerIcon from "@/components/assets/images/SingleLayerIcon.svg";
import MultiLayerIcon from "@/components/assets/images/MultiLayerIcon.svg";
import ThunderIcon from "@/components/assets/images/ThunderIcon.svg";
import CrossIcon from "@/components/assets/images/CrossIcon.svg";
import ChangeIcon from "@/components/assets/images/ChangeIcon.svg";

const plans = [
  {
    id: "single",
    name: "Single Document",
    price: "Pay as you go",
    description: "Ideal if you only need one document.",
    icon: SingleLayerIcon,
  },
  {
    id: "monthly",
    name: "Monthly Plan",
    price: "£29/month",
    description: "Perfect if you need several documents or ongoing access.",
    icon: MultiLayerIcon,
  },
  {
    id: "annual",
    name: "Annual Plan",
    price: "£59/month",
    description: "Best value for individuals and small businesses.",
    icon: ThunderIcon,
  },
];

function ChangeSubscriptionPlanPopup({ isOpen, onClose, onConfirm }) {
  const [selectedPlan, setSelectedPlan] = useState("single");

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
                            src={ChangeIcon}
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

            <h2 className="text-lg font-semibold text-text-1 mb-1 mt-12">
              Change your plan
            </h2>
            <p className="text-sm text-text-5">
              Flexible pricing that grows with you.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`flex items-start gap-4 p-4 py-3.5 border rounded-xl cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? "border-main border-2 "
                    : "border-black/10 hover:border-black/20"
                }`}
              >
                <div className="border p-1.75 border-black/10 rounded-lg flex items-center justify-center shrink-0">
                  <Image
                    src={plan.icon}
                    alt={plan.name}
                    width={16}
                    height={16}
                  />
                </div>
                <div className="flex-1 -mt-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm text-text-4">
                      {plan.name}{" "}
                      <span className="text-text-5 text-sm ml-1">
                        {plan.price}
                      </span>
                    </p>
                    <div>
                      <input
                        type="checkbox"
                        className="w-4 h-4 cursor-pointer accent-main"
                        checked={selectedPlan === plan.id}
                        readOnly
                      />
                    </div>
                  </div>
                  <p className="text-sm text-text-5">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={onClose}
              className="flex-1 py-2.25 px-4 border border-black/10 rounded-xl font-semibold text-black hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => onConfirm(selectedPlan)}
              className="flex-1 py-2.25 px-4 bg-main text-white rounded-xl font-semibold hover:bg-main/90 transition-colors cursor-pointer"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeSubscriptionPlanPopup;
