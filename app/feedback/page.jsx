"use client";
import React, { useState } from "react";
import Header from "../../components/common/UserHeader";
import Footer from "../../components/common/Footer";
import Commondropdown from "../../components/common/Commondropdown1";
import Image from "next/image";
import UkFlag from "@/components/assets/images/UkFlag.svg";
import USFlag from "@/components/assets/images/USFlag.svg";
import AUFlag from "@/components/assets/images/AUFlag.svg";
import CAFlag from "@/components/assets/images/CAFlag.svg";

function page() {
  const countryCodes = [
    { label: "+44", value: "+44", icon: UkFlag },
    { label: "+1", value: "+1_US", icon: USFlag },
    { label: "+61", value: "+61", icon: AUFlag },
    { label: "+1", value: "+1_CA", icon: CAFlag },
  ];
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);

  return (
    <div>
      <Header />
      <main>
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-5 md:pb-10 bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center">
              <p className="text-main font-semibold mb-3">
                Share Your Feedback
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-text-1 mb-6">
                We Value Your Feedback
              </h1>
              <p className="text-text-5 text-lg md:text-xl mx-auto">
                Your thoughts help us improve. Whether it's about our documents,
                website experience, or customer support, we'd love to hear from
                you. results.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#fafafa]">
          <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-18 lg:py-24">
            <div>
              <p className="text-main font-semibold mb-3">Feedback Form</p>
              <h2 className="text-2xl md:text-4xl font-bold text-text-1 mb-5">
                Tell Us What You Think
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-8 md:mb-16">
                Have you used LawNest recently? We'd love to hear from you. Your
                feedback helps us improve our services and support more people
                like you.
              </p>
            </div>
            <div className="grid grid-cols-1 min-[1000px]:grid-cols-2 gap-4">
              {/* Left Column: Form */}
              <div className="lg:pr-4">
                <form className="flex flex-col gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      What type of feedback are you sharing? *
                    </label>
                    <input
                      type="text"
                      placeholder="General Feedback / Document Quality / Support Experience / Website Us..."
                      className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Service *
                    </label>
                    <input
                      type="text"
                      placeholder="Select Service"
                      className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Reference / Invoice No *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Reference / Invoice No"
                      className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="support@lawnest.co.uk"
                      className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Phone number
                    </label>
                    <div className="flex items-center w-full bg-white text-black border border-[#D5D7DA] rounded-xl px-2 focus-within:border-black">
                      <Commondropdown
                        options={countryCodes}
                        value={selectedCode}
                        onChange={setSelectedCode}
                        className="border-none! w-fit gap-1! text-[#667085] shadow-none! whitespace-nowrap py-0! pr-0! px-1.5! bg-transparent!"
                        dropdownClassName="w-[100px]!"
                        imageClassName="!w-4 !h-4"
                      />
                      <input
                        type="tel"
                        className="flex-1 w-full bg-white text-black border-none outline-none py-2.5 pl-1 pr-2 text-base placeholder:text-gray-400"
                        placeholder="7890 123456"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Your Review *
                    </label>
                    <textarea
                      placeholder="Leave us a message..."
                      rows="4"
                      className="w-full border bg-white border-[#D5D7DA] rounded-xl px-4 py-2.25 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main resize-none"
                    ></textarea>
                  </div>

                  <div className="flex flex-col items-center mb-3">
                    <h3 className="text-2xl md:text-4xl font-semibold text-text-1 mb-6">
                      Star Rating (1—5)
                    </h3>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-8 h-8 cursor-pointer transition-transform hover:scale-110"
                          viewBox="0 0 24 24"
                          fill={star === 1 ? "#FDB022" : "none"}
                          stroke={star === 1 ? "#FDB022" : "#D1D5DB"}
                          strokeWidth="1.5"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-1.81.688l1.15 5.423c.125.591-.564 1.054-1.077.747l-4.708-2.822a.562.562 0 00-.584 0l-4.708 2.822c-.513.307-1.202-.156-1.077-.747l1.15-5.423a.563.563 0 00-.181-.688l-4.204-3.602c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full cursor-pointer bg-main text-white font-semibold rounded-lg py-3 hover:bg-main/85 transition-all"
                  >
                    Submit Review
                  </button>
                </form>
              </div>

              {/* Right Column: Stats Image Panel */}
              <div className="bg md:h-auto relative overflow-hidden md:min-h-[800px]">
                {/* Background subtle overlay */}
                <div className="absolute inset-0 bg-black/5" />
                <div className="relative z-10 px-6 py-6 min-[1000px]:p-16 flex flex-col gap-8 h-full justify-center">
                  <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-xl px-6 py-9 text-center shadow-sm">
                    <h1 className="text-3xl md:text-6xl font-bold text-main mb-2">
                      25,000+
                    </h1>
                    <h2 className="text-lg font-semibold text-text-1 mb-3">
                      Legal documents created
                    </h2>
                    <p className="font-normal text-text-5">
                      Documents generated across wills, tenancy, business and
                      more.
                    </p>
                  </div>

                  <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-xl px-6 py-9 text-center shadow-sm">
                    <h1 className="text-3xl md:text-6xl font-bold text-main mb-3">
                      12,300+
                    </h1>
                    <h2 className="text-lg font-semibold text-text-1 mb-2">
                      Registered users
                    </h2>
                    <p className="font-normal text-text-5">
                      Active accounts who've saved drafts or completed
                      documents.
                    </p>
                  </div>

                  <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-xl px-6 py-9 text-center shadow-sm">
                    <h1 className="text-3xl md:text-6xl font-bold text-main mb-2">
                      4.8/5
                    </h1>
                    <h2 className="text-lg font-semibold text-text-1 mb-3">
                      Average customer rating
                    </h2>
                    <p className="font-normal text-text-5">
                      Based on user reviews for ease, accuracy and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default page;
