"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/common/Header";
import CommonDropdown1 from "@/components/common/Commondropdown1";
import Notes from "@/components/common/CommonNotes";
import SuccessPopup from "@/components/common/SuccessPopup";
import DeletePopup from "@/components/common/DeletePopup";
import SuccessfullDeletePopup from "@/components/common/SuccessfullDeletePopup";
// Icons
import AddIcon from "@/components/assets/images/AddIcon.svg";
import ArrowLeft from "@/components/assets/images/ArrowLeft.svg";
import BorderTick from "@/components/assets/images/CheckIcon1.svg";
import TableEditIcon from "@/components/assets/images/TableEditIccon.svg";
import TableBinIcon from "@/components/assets/images/TableCopyicon.svg"; // Assuming this might be used for delete or similar based on name, actually let's use BinIcon if available or Trash
import BinIcon from "@/components/assets/images/BinIcon.svg";
import UkFlag from "@/components/assets/images/UkFlag.svg";
import ChevronDown from "@/components/assets/images/CheveronDownGray.svg";
import ArrowBack from "@/components/assets/images/ArrowBack.svg";
import deleteIcon from "@/components/assets/images/DeleteIcon.svg";
function AddSubscription() {
  const router = useRouter();

  // Form States
  const [subscriptionName, setSubscriptionName] = useState("Single Document");
  const [subscriptionType, setSubscriptionType] = useState("Paid Plan");
  const [currency, setCurrency] = useState("GBP - £");
  const [priceType, setPriceType] = useState("Monthly");
  const [price, setPrice] = useState("45");
  const [discount, setDiscount] = useState("10%");

  // Trial Settings
  const [trialPeriod, setTrialPeriod] = useState("30");
  const [notificationDays, setNotificationDays] = useState("7");
  const [trialMessage, setTrialMessage] = useState("Start 15 days free trial");
  const [status, setStatus] = useState("Active");

  // Modules & Features
  const [features, setFeatures] = useState([
    { id: 1, label: "One-time creation and download", checked: true },
    { id: 2, label: "Secure online storage", checked: true },
    { id: 3, label: "Editable before download", checked: true },
    { id: 4, label: "eSignature included", checked: true },
    { id: 5, label: "Secure 30-day access for updates", checked: true },
    { id: 6, label: "Everything in the Monthly Plan, plus.", checked: true },
    { id: 7, label: "Unlimited document creation and editing", checked: true },
    { id: 8, label: "Priority customer support", checked: true },
    { id: 9, label: "Full access to all legal templates", checked: true },
    { id: 10, label: "Early access to new templates", checked: true },
    { id: 11, label: "Download in Word or PDF", checked: false },
    {
      id: 12,
      label: "Annual billing for complete peace of mind",
      checked: true,
    },
  ]);

  // Description state
  const [description, setDescription] = useState("");
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isDeleteSuccessOpen, setIsDeleteSuccessOpen] = useState(false);
  const [featureToDelete, setFeatureToDelete] = useState(null);

  const typeOptions = [{ value: "Paid Plan", label: "Paid Plan" }];
  const priceTypeOptions = [
    { value: "Monthly", label: "Monthly" },
    { value: "Yearly", label: "Yearly" },
  ];
  const currencyOptions = [
    { value: "GBP - £", label: "GBP - £", icon: UkFlag },
  ];
  const discountOptions = [{ value: "10%", label: "10%" }];
  const statusOptions = [{ value: "Active", label: "Active" }];

  const InfoIcon = () => (
    <div className="w-5 h-5 rounded-full bg-black/50 text-white flex items-center justify-center text-sm font-bold cursor-help ml-1">
      ?
    </div>
  );

  return (
    <div className="mt-16 md:mt-22 pb-3 md:pb-6 text-black">
      <Header title="Subscription Management" />
      <main className="lg:max-w-[calc(100%-300px)] h-full flex flex-col flex-1 lg:ml-80.5 m-3 mb-0 md:m-6 md:mb-0 bg-white p-3 md:p-6 rounded-md border border-[#E6E6E6]">
        <div
          className="flex items-center gap-2 cursor-pointer mb-6 md:mb-11"
          onClick={() => router.back()}
        >
          <Image src={ArrowBack} alt="back" width={24} height={24} />
          <h1 className="text-lg md:text-xl font-bold">Add Subscription</h1>
        </div>
        <div className="border border-black/16 rounded-2xl p-4">
          {/* Back Navigation */}

          <div className="border-b pb-6 border-black/16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Subscription Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Subscription Name <span className="text-red-500 px-1">*</span>
                </label>
                <input
                  type="text"
                  value={subscriptionName}
                  onChange={(e) => setSubscriptionName(e.target.value)}
                  placeholder="Single Document"
                  className="border border-black/16 rounded-lg p-3 outline-none focus:border-main text-sm h-[50px]"
                />
              </div>

              {/* Subscription Type */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Subscription Type
                </label>
                <CommonDropdown1
                  options={typeOptions}
                  value={subscriptionType}
                  onChange={(val) => setSubscriptionType(val.value || val)}
                  leftIcon={InfoIcon}
                  textColor="text-text-3"
                  placeholder="Select Type"
                  className="w-full h-[50px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
              {/* Currency */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Subscription Currency{" "}
                  <span className="text-red-500 ml-0.5">*</span> <InfoIcon />
                </label>
                <CommonDropdown1
                  options={currencyOptions}
                  value={currency}
                  onChange={(val) => setCurrency(val.value || val)}
                  placeholder="GBP - £"
                  leftIcon={UkFlag}
                  textColor="text-text-3"
                  className="w-full h-[50px]"
                  dropdownClassName="max-h-[200px]"
                />
              </div>

              {/* Price */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Price <InfoIcon />
                </label>
                <div className="flex border border-black/16 rounded-lg h-[50px]">
                  <CommonDropdown1
                    options={priceTypeOptions}
                    value={priceType}
                    onChange={(val) => setPriceType(val.value || val)}
                    className="w-[110px] border-none! rounded-none! rounded-l-lg! border-r border-black/16! h-full"
                    textColor="text-text-3"
                    dropdownClassName="max-h-[200px]"
                  />
                  <div className="flex items-center pl-2 text-xs">£</div>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="flex-1 px-3 outline-none text-sm w-full rounded-r-lg h-[50px] -mt-px"
                  />
                </div>
              </div>

              {/* Discount */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Discount
                </label>
                <CommonDropdown1
                  options={discountOptions}
                  value={discount}
                  onChange={(val) => setDiscount(val.value || val)}
                  placeholder="10%"
                  textColor="text-text-3"
                  className="w-full h-[50px]"
                />
              </div>
            </div>

            {/* Trial Settings */}
            <h3 className="text-base font-bold mt-8 mb-4">Trial Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Trial Period <InfoIcon />
                </label>
                <input
                  type="number"
                  value={trialPeriod}
                  onChange={(e) => setTrialPeriod(e.target.value)}
                  className="border border-black/16 rounded-lg p-2.5 outline-none text-sm h-[50px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Notification Before Days
                </label>
                <input
                  type="number"
                  value={notificationDays}
                  onChange={(e) => setNotificationDays(e.target.value)}
                  className="border border-black/16 rounded-lg p-2.5 outline-none text-sm h-[50px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Trial Message shown on front page
                </label>
                <input
                  type="text"
                  value={trialMessage}
                  onChange={(e) => setTrialMessage(e.target.value)}
                  placeholder="Start 15 days free trial"
                  className="border border-black/16 rounded-lg p-2.5 outline-none text-sm h-[50px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4 md:mt-6">
              <label className="text-sm font-semibold text-text-3 flex items-center">
                Status
              </label>
              <CommonDropdown1
                options={statusOptions}
                value={status}
                onChange={(val) => setStatus(val.value || val)}
                placeholder="Active"
                textColor="text-text-3"
                className="w-full h-[50px]"
              />
            </div>
          </div>

          {/* Module Selection */}
          <div className="flex items-center justify-between mt-6">
            <h3 className="text-lg md:text-xl font-semibold">
              Select Module for the Subscription
            </h3>
            <button className="flex items-center cursor-pointer gap-2 bg-main text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-main/85">
              <Image
                src={AddIcon}
                alt="add"
                width={24}
                height={24}
                className="invert brightness-0"
              />
              Add
            </button>
          </div>

          {/* Included Features */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-6">
              Included Features
            </h3>
            <div className="grid grid-cols-1 ld:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center justify-between py-1"
                >
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={feature.checked}
                      onChange={() => {
                        const newFeatures = features.map((f) =>
                          f.id === feature.id
                            ? { ...f, checked: !f.checked }
                            : f,
                        );
                        setFeatures(newFeatures);
                      }}
                      className="w-4 h-4 cursor-pointer accent-main"
                    />
                    <span className="text-base text-text-1">
                      {feature.label}
                    </span>
                  </label>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsSuccessPopupOpen(true)}
                      className="p-1 px-2 border border-black/10 rounded-md hover:bg-gray-50 flex items-center justify-center h-8 w-8 cursor-pointer"
                    >
                      <Image
                        src={TableEditIcon}
                        alt="edit"
                        width={20}
                        height={20}
                        className="min-w-5 h-5"
                      />
                    </button>
                    <button
                      onClick={() => {
                        setFeatureToDelete(feature.id);
                        setIsDeletePopupOpen(true);
                      }}
                      className="p-1 px-2 border border-black/16 rounded-md hover:bg-red-50 flex items-center justify-center h-8 w-8 cursor-pointer"
                    >
                      <Image
                        src={deleteIcon}
                        alt="delete"
                        width={20}
                        height={20}
                        className="min-w-5 h-5"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-black/10 my-6" />

          {/* Extra Add-Ons */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Extra Add-Ons:
                </h3>
                <p className="text-sm">
                  Enhance your experience with Extra Add-Ons module and
                  features.
                </p>
              </div>
              <button className="flex cursor-pointer items-center gap-2 bg-main text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-main/85">
                <Image
                  src={AddIcon}
                  alt="add"
                  width={24}
                  height={24}
                  className="invert brightness-0"
                />
                Add
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Module
                </label>
                <CommonDropdown1
                  options={[]}
                  placeholder="Select Module"
                  textColor="text-text-3"
                  className="h-[50px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Feature
                </label>
                <CommonDropdown1
                  options={[]}
                  placeholder="Select Feature"
                  textColor="text-text-3"
                  className="h-[50px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Price <InfoIcon />
                </label>
                <div className="flex border border-black/16 rounded-lg h-[50px]">
                  <CommonDropdown1
                    options={priceTypeOptions}
                    placeholder="Monthly"
                    className="w-[100px] border-none! rounded-none! rounded-l-lg! border-r border-black/16! h-full"
                    textColor="text-text-3"
                    dropdownClassName="max-h-[200px]"
                  />
                  <div className="flex items-center pl-2 text-xs">£</div>
                  <input
                    type="number"
                    defaultValue="1000"
                    className="flex-1 px-2 outline-none text-xs w-full rounded-r-lg h-[50px] -mt-px"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Price <InfoIcon />
                </label>
                <div className="flex border border-black/16 rounded-lg h-[50px]">
                  <CommonDropdown1
                    options={priceTypeOptions}
                    placeholder="Yearly"
                    className="w-[100px] border-none! rounded-none! rounded-l-lg! border-r border-black/16! h-full "
                    textColor="text-text-3"
                    dropdownClassName="max-h-[200px]"
                  />
                  <div className="flex items-center pl-2 text-xs">£</div>
                  <input
                    type="number"
                    defaultValue="1000"
                    className="flex-1 px-2 outline-none text-xs w-full rounded-r-lg h-[50px] -mt-px"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text-3 flex items-center">
                  Discount
                </label>
                <CommonDropdown1
                  options={[]}
                  placeholder="10%"
                  textColor="text-text-3"
                  className="h-[50px]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <Notes
              label="Description"
              initialValue={description}
              onSave={setDescription}
              placeholder="Perfect if you need several documents or ongoing access."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex max-sm:flex-col items-center gap-3 bg-[#ECF6FF] p-4 md:p-6 rounded mt-6">
            <button className="bg-main cursor-pointer text-white max-sm:w-full px-6 py-2 rounded-lg font-semibold hover:bg-main/85 transition-colors shadow-sm">
              Save
            </button>
            <button
              className="border border-main cursor-pointer max-sm:w-full bg-white text-black px-6 py-1.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm"
              onClick={() => router.back()}
            >
              Back
            </button>
          </div>
        </div>
      </main>

      {isSuccessPopupOpen && (
        <SuccessPopup
          heading="Subscription Updated Successfully"
          pera="Your Subscription details have been securely updated and set as default."
          button="Done"
          onClose={() => setIsSuccessPopupOpen(false)}
          onConfirm={() => setIsSuccessPopupOpen(false)}
        />
      )}
      {isDeletePopupOpen && (
        <DeletePopup
          heading="Feature Delete"
          pera="Are you sure you want to delete this feature."
          button="Delete"
          onClose={() => setIsDeletePopupOpen(false)}
          onConfirm={() => {
            setFeatures(features.filter((f) => f.id !== featureToDelete));
            setIsDeletePopupOpen(false);
            setIsDeleteSuccessOpen(true);
          }}
        />
      )}

      {isDeleteSuccessOpen && (
        <SuccessfullDeletePopup
          heading="Feature Deleted Successfully"
          pera="Feature has been deleted successfully."
          button="Closed"
          onClose={() => setIsDeleteSuccessOpen(false)}
        />
      )}
    </div>
  );
}

export default AddSubscription;
