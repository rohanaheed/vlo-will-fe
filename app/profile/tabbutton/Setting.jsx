"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import document from "@/components/assets/images/DocumentIcon.svg";
import Home from "@/components/assets/images/HomeIcon.svg";
import CreditCardnotes from "@/components/assets/images/CreditCardNotes.svg";
import Ticket from "@/components/assets/images/Tickect.svg";
import StarReview from "@/components/assets/images/StarReview.svg";
import FeedbackIcon from "@/components/assets/images/FeedbackIcon.svg";
import ShakeHandIcon from "@/components/assets/images/ShakeHandIcon.svg";
import GlobalUserIcon from "@/components/assets/images/GloabalUserIcon.svg";
import email from "@/components/assets/images/EmailIcon.svg";
import lock from "@/components/assets/images/LockIcon1.svg";
import card from "@/components/assets/images/CardIcon.svg";
import userSetting from "@/components/assets/images/UserSettingIcon.svg";
import edit from "@/components/assets/images/EditIconBlueFill.svg";
import visa from "@/components/assets/images/Visa.svg";
import UpdateEmailModal from "@/components/layout/Modal/UpdateEmail";
import PasswordUpdatePopup from "@/components/layout/Modal/PasswordUpdatePopup";
import DeleteAccountModal from "@/components/layout/Modal/DeleteAccount";
import EmailSuccessModal from "@/components/layout/Modal/SuccessPopup";
import PasswordSuccessModal from "@/components/layout/Modal/SuccessPopup";
import DeleteSuccessModal from "@/components/layout/Modal/SuccessRedPopup";

function overview() {
  const [tab1, setTab1] = useState("document");
  const [tab2, setTab2] = useState("reviews");
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEmailSuccessModalOpen, setIsEmailSuccessModalOpen] = useState(false);
  const [isPasswordSuccessModalOpen, setIsPasswordSuccessModalOpen] =
    useState(false);
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] =
    useState(false);

  const handleUpdateEmail = () => {
    setIsEmailModalOpen(false);
    setIsEmailSuccessModalOpen(true);
  };

  const handleUpdatePassword = () => {
    setIsPasswordModalOpen(false);
    setIsPasswordSuccessModalOpen(true);
  };

  const handleDeleteAccount = () => {
    setIsDeleteModalOpen(false);
    setIsDeleteSuccessModalOpen(true);
  };
  return (
    <div>
      <h1 className="text-text-1 text-xl font-semibold md:text-2xl lg:text-4xl">
        Account Settings
      </h1>
      <p className="text-text-5 text-sm font-normal md:text-base lg:text-xl">
        Manage your account information, security preferences, and billing
        details.
      </p>
      <div className="mt-6 flex max-md:flex-col gap-4 md:gap-9 ">
        <div className="flex-1 border border-black/16 rounded-lg md:min-w-[450px] p-3 md:p-6 space-y-4">
          {/* Email Section */}
          <div className="bg-[#FAFAFA] rounded-lg p-3 md:p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-main rounded-lg flex items-center justify-center">
                <Image
                  src={email}
                  alt="email"
                  width={20}
                  height={20}
                  className="invert brightness-0 md:w-6 md:h-6"
                />
              </div>
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="bg-main hover:bg-main/85 text-white px-3 py-2 md:py-3.25 rounded-lg text-base md:text-xl cursor-pointer whitespace-nowrap"
              >
                Update Email
              </button>
            </div>
            <h3 className="text-xl font-semibold text-text-1 mb-2">
              Email Address
            </h3>
            <p className="text-text-5 font-bold mb-2">
              john.smith@smithlegal.co.uk
            </p>
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
              <span className=" text-text-5">
                Include me in special offers and news
              </span>
            </label>
          </div>

          {/* Password Section */}
          <div className="bg-[#FAFAFA] rounded-xl p-4 md:p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-main rounded-lg flex items-center justify-center">
                <Image
                  src={lock}
                  alt="password"
                  width={20}
                  height={20}
                  className="invert brightness-0 md:w-6 md:h-6"
                />
              </div>
              <button
                onClick={() => setIsPasswordModalOpen(true)}
                className="bg-main hover:bg-main/85 text-white px-3 py-2 md:py-3.25 rounded-lg text-base md:text-xl cursor-pointer whitespace-nowrap"
              >
                Update Password
              </button>
            </div>
            <h3 className="text-xl font-semibold text-text-1 mb-2">
              Password Update
            </h3>
            <p className="text-text-5">Request a password reset email</p>
          </div>

          {/* Payment Information Section */}
          <div className="bg-[#FAFAFA] rounded-xl p-4 md:p-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-main rounded-lg flex items-center justify-center mb-4">
              <Image
                src={card}
                alt="payment"
                width={20}
                height={20}
                className="invert brightness-0 md:w-6 md:h-6"
              />
            </div>
            <h3 className="text-xl font-semibold text-text-1 mb-2">
              Payment Information
            </h3>
            <div className="space-y-3">
              {[1, 2].map((_, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.25 border border-black/16 bg-white rounded-lg gap-2"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={visa}
                      alt="visa"
                      width={46}
                      height={32}
                      className=""
                    />
                    <span className="text-sm text-[#2A2A33] ">
                      4855 **** **** ****
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 md:gap-8">
                    <span className="text-sm text-[#2A2A33]">04/24</span>
                    <span className="text-sm text-[#2A2A33]">Vako Shvili</span>
                    <button className="cursor-pointer">
                      <Image
                        src={edit}
                        alt="edit"
                        width={24}
                        height={24}
                        className="w-6"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delete Account Section */}
          <div className="bg-[#FAFAFA] rounded-xl p-4 md:p-6 relative">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-main rounded-lg flex items-center justify-center">
                <Image
                  src={userSetting}
                  alt="delete account"
                  width={20}
                  height={20}
                  className="invert brightness-0 md:w-6 md:h-6"
                />
              </div>
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="bg-main hover:bg-main/85 text-white px-3 py-2 md:py-3.25 rounded-lg text-base md:text-xl cursor-pointer whitespace-nowrap"
              >
                Delete Account
              </button>
            </div>
            <h3 className="text-xl font-semibold text-text-1 mb-2">
              Delete Account
            </h3>
            <p className="text-text-5 text-xs md:text-sm">
              Permanently delete all files and close account
            </p>
          </div>
        </div>
        <div>
          <div className="border border-black/16 rounded-xl p-3 md:p-6 min-w-[30%]">
            <h1 className="text-text-5 text-lg md:text-xl font-semibold">
              Quick Links
            </h1>
            <div
              onClick={() => setTab1("home")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] hover:font-semibold hover:text-main transition-all duration-200 text-sm mt-6 p-3 flex gap-3 items-center ${tab1 === "home" ? "text-main font-semibold bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={Home}
                alt="home"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <p>Home</p>
            </div>
            <div
              onClick={() => setTab1("document")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] hover:text-main hover:font-semibold transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab1 === "document" ? "text-main font-semibold bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={document}
                alt="document"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <p>My Documents</p>
            </div>
            <div
              onClick={() => setTab1("billing")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] hover:text-main hover:font-semibold transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab1 === "billing" ? "text-main font-semibold bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={CreditCardnotes}
                alt="billing"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <p>Billing History</p>
            </div>
            <div
              onClick={() => setTab1("ticket")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] hover:text-main hover:font-semibold transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab1 === "ticket" ? "text-main font-semibold bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={Ticket}
                alt="ticket"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <p>Tickets</p>
            </div>
          </div>
          <div className="border border-black/16 rounded-xl p-3 md:p-6 md:mt-9 mt-4">
            <h1 className="text-text-5 text-lg md:text-xl font-semibold">
              Need Something Else?
            </h1>
            <p className="text-text-5 font-normal">
              Explore more tools and resources tailored to your needs.
            </p>
            <div
              onClick={() => setTab2("reviews")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] transition-all duration-200 text-sm mt-6 p-3 flex gap-3 items-center ${tab2 === "reviews" ? "bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={StarReview}
                alt="home"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <div>
                <h1 className="text-text-1 font-medium">Customer Reviews</h1>
                <p className="text-black/50 text-sm">
                  See what others are saying about their DocNet experience.
                </p>
              </div>
            </div>
            <div
              onClick={() => setTab2("feedback")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab2 === "feedback" ? "bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={FeedbackIcon}
                alt="home"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <div>
                <h1 className="text-text-1 font-medium">Share Feedback</h1>
                <p className="text-black/50 text-sm">
                  Tell us what you think — your input helps us improve.
                </p>
              </div>
            </div>
            <div
              onClick={() => setTab2("business")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab2 === "business" ? "bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={ShakeHandIcon}
                alt="home"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <div>
                <h1 className="text-text-1 font-medium">Business Solutions</h1>
                <p className="text-black/50 text-sm">
                  Discover DocNet for teams, firms, and organisations.
                </p>
              </div>
            </div>
            <div
              onClick={() => setTab2("Affiliate")}
              className={`cursor-pointer rounded-lg hover:bg-[#ECF6FF] transition-all duration-200 text-sm mt-0.5 p-3 flex gap-3 items-center ${tab2 === "Affiliate" ? "bg-[#ECF6FF]" : "text-black/50"}`}
            >
              <Image
                src={GlobalUserIcon}
                alt="home"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
              <div>
                <h1 className="text-text-1 font-medium">Affiliate Programme</h1>
                <p className="text-black/50 text-sm">
                  Partner with us and eam by promoting DocNet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateEmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        onUpdate={handleUpdateEmail}
      />
      <PasswordUpdatePopup
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onUpdate={handleUpdatePassword}
      />
      <DeleteAccountModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDeleteAccount}
      />
      <EmailSuccessModal
        isOpen={isEmailSuccessModalOpen}
        onClose={() => setIsEmailSuccessModalOpen(false)}
        heading="Successfully updated email"
        description="Your email address has been updated successfully."
        button="Closed"
      />
      <PasswordSuccessModal
        isOpen={isPasswordSuccessModalOpen}
        onClose={() => setIsPasswordSuccessModalOpen(false)}
        heading="Successfully updated Password"
        description="Your password has been changed successfully."
        button="Closed"
      />
      <DeleteSuccessModal
        isOpen={isDeleteSuccessModalOpen}
        onClose={() => setIsDeleteSuccessModalOpen(false)}
        heading="Account Deleted Successfully"
        description="Your account has been deleted successfully. We're sorry to see you go."
        button="Closed"
      />
    </div>
  );
}

export default overview;
