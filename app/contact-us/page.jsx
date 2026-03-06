"use client";
import React, { useState, useRef } from "react";
import Header from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import email from "@/components/assets/images/MailIconWhite.svg";
import phone from "@/components/assets/images/PhoneIcon.svg";
import chat from "@/components/assets/images/ChatIconWhite.svg";
import LocationIcon from "@/components/assets/images/LocationIcon.svg";
import Image from "next/image";
import ContactUsimage from "@/components/assets/images/ContactUsimage.svg";
import upload from "@/components/assets/images/UploadIcon.svg";
import Commondropdown from "@/components/common/Commondropdown1";
import UkFlag from "@/components/assets/images/UkFlag.svg";
import USFlag from "@/components/assets/images/USFlag.svg";
import AUFlag from "@/components/assets/images/AUFlag.svg";
import CAFlag from "@/components/assets/images/CAFlag.svg";
import RecaptchaIcon from "@/components/assets/images/RecaptchaIcon.svg";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();
  const countryCodes = [
    { label: "+44", value: "+44", icon: UkFlag },
    { label: "+1", value: "+1_US", icon: USFlag },
    { label: "+61", value: "+61", icon: AUFlag },
    { label: "+1", value: "+1_CA", icon: CAFlag },
  ];
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <Header />
      <main>
        <div className="bg-[url('@/components/assets/images/Background.svg')]  bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto max-[1200px]:px-4 p-4 pt-25 md:pt-30 pb-12 md:pb-20">
            <div className=" w-full mx-auto text-center">
              <p className="font-semibold text-main mb-3">
                Contact Us — We're Here to Help
              </p>
              <h1 className="text-center lg:text-4xl md:text-2xl text-xl font-semibold text-text-1">
                Get in Touch with LawNest
              </h1>
              <p className="text-text-5 text-base md:text-lg mt-4">
                We're always ready to help you with any questions about your
                documents, subscriptions, or account. Whether you prefer chat,
                email, or a quick call — our support team is here for you.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] max-[1200px]:px-4 mx-auto lg:py-24 md:py-18 py-12">
          <div className="">
            <p className="text-base font-semibold text-main mb-3">Contact us</p>
            <h1 className="lg:text-4xl text-2xl font-semibold text-text-1">
              Have a question or need help getting started?
            </h1>
            <p className="md:text-xl text-lg font-normal text-text-5 mt-5">
              Our friendly support team is available via live chat, email, or
              phone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12 w-full">
            {/* Email Card */}
            <div className="bg-[#fafafa] p-4 md:p-6 flex flex-col items-start h-full">
              <div className="bg-[#0b294d] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Image src={email} alt="Email" width={24} height={24} />
              </div>
              <h2 className="text-xl font-bold text-text-1 mb-2">Email</h2>
              <p className="text-base text-text-5 mb-5">
                Our friendly team is here to help.
              </p>
              <p className="font-semibold text-main text-base cursor-pointer hover:underline">
                support@lawnest.co.uk
              </p>
            </div>

            {/* Live Chat Card */}
            <div className="bg-[#fafafa] p-4 md:p-6 flex flex-col items-start h-full">
              <div className="bg-[#0b294d] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Image src={chat} alt="Chat" width={24} height={24} />
              </div>
              <h2 className="md:text-xl text-lg font-semibold text-text-1 mb-2">
                Live chat
              </h2>
              <p className="text-base text-text-5 mb-5">
                Available Monday—Friday,
                <br />
                9am—6pm (GMT)
              </p>
              <p className="font-semibold text-main text-base cursor-pointer hover:underline">
                Start new chat
              </p>
            </div>

            {/* Visit Us Card */}
            <div className="bg-[#FAF9F9] p-4 md:p-6 flex flex-col items-start h-full">
              <div className="bg-[#0b294d] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Image
                  src={LocationIcon}
                  alt="Location"
                  width={24}
                  height={24}
                />
              </div>
              <h2 className="md:text-xl text-lg font-semibold text-text-1 mb-2">
                Visit us
              </h2>
              <p className="text-base text-text-5 mb-5">Visit our office HQ.</p>
              <p className="font-semibold text-main text-base cursor-pointer hover:underline">
                Dale House, Tiviot Dale,
                <br />
                Stockport, England, SK1
                <br />
                1TA
              </p>
            </div>

            {/* Call Us Card */}
            <div className="bg-[#fafafa] p-4 md:p-6 flex flex-col items-start h-full mb-12">
              <div className="bg-main w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Image src={phone} alt="Phone" width={24} height={24} />
              </div>
              <h2 className="md:text-xl text-lg font-semibold text-text-1 mb-2">
                Call us
              </h2>
              <p className="text-base text-text-5 mb-5">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="font-semibold text-main text-base cursor-pointer hover:underline">
                +44 20 1234 5678
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mt-10 md:mt-20">
            {/* Quick Message Form */}
            <div className="w-full flex flex-col justify-start max-md:order-2">
              <h2 className="text-2xl md:text-4xl font-semibold text-text-1 mb-5">
                Quick Message Form:
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-12">
                Our support team is here for you.
              </p>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full border bg-white border-black/16 rounded-lg px-4 py-2.5 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-colors shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Middle name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Middle name"
                      className="w-full border bg-white border-black/16 rounded-lg px-4 py-2.5 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-colors shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-4 mb-1.5">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full border bg-white border-black/16 rounded-lg px-4 py-2.5 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-colors shadow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-4 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="support@lawnest.co.uk"
                    className="w-full border bg-white border-black/16 rounded-lg px-4 py-2.5 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main transition-colors shadow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-4 mb-1.5">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center w-full bg-white text-black border border-black/16 rounded-lg px-2 focus-within:border-main focus-within:ring-1 focus-within:ring-main transition-colors shadow">
                    <Commondropdown
                      options={countryCodes}
                      value={selectedCode}
                      onChange={setSelectedCode}
                      className="border-none! w-fit gap-1! text-[#667085] shadow-none! whitespace-nowrap py-0! pr-0! px-1.5! bg-transparent!"
                      dropdownClassName="w-[100px]!"
                      imageClassName="!w-5 !h-5 rounded-full object-cover"
                    />
                    <input
                      type="tel"
                      className="flex-1 w-full bg-transparent text-black border-none outline-none py-2.5 pl-2 pr-2 text-base placeholder:text-gray-400"
                      placeholder="7890 123456"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-4 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Leave us a message..."
                    rows="4"
                    className="w-full border bg-white border-black/16 rounded-lg px-4 py-2.5 text-text-1 placeholder:text-gray-400 focus:outline-none focus:border-main focus:ring-1 focus:ring-main resize-none transition-colors shadow"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-4 mb-1.5">
                    Attachment
                  </label>
                  <div
                    onClick={handleUploadClick}
                    className="w-full border border border-black/16  rounded-lg px-4 py-6 text-center cursor-pointer flex flex-col items-center justify-center gap-2 transition-colors shadow"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".doc,.docx,.pdf,.jpg,.jpeg,.png,.gif"
                    />
                    <div className="bg-linear-to-b from-[#003366] to-transparent rounded-full p-0.25 w-10 h-10 flex items-center justify-center">
                      <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                        <div className="bg-main rounded-full p-2 w-7 h-7 flex items-center justify-center">
                          <Image
                            src={upload}
                            alt="upload"
                            width={14}
                            height={14}
                            className="min-w-4 min-h-4"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-text-5">
                      <span className="text-main font-semibold cursor-pointer">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-text-5">
                      Word, PDF, JPG, PNG or GIF (Max: 100MB)
                    </p>
                    {fileName && (
                      <p className="text-sm text-main font-medium mt-2 truncate w-full px-2">
                        Selected: {fileName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center py-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 rounded-xl accent-main border-black/16  text-main focus:ring-main"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-text-5 ml-3 cursor-pointer"
                  >
                    You agree to our friendly
                  </label>
                  <span
                    onClick={() => router.push("/privacy-policy")}
                    className="underline cursor-pointer text-sm text-text-5 ml-1"
                  >
                    privacy policy
                  </span>
                </div>

                {/* Recaptcha Placeholder */}
                <div className="flex max-w-[300px] gap-2 items-center justify-between p-2 border border-black/16 rounded-xs bg-[#F9F9F9] shadow">
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      name="robot"
                      id="robot"
                      className="w-7 h-7 cursor-pointer accent-main"
                    />
                    <label
                      htmlFor="robot"
                      className="text-text-4 text-sm cursor-pointer"
                    >
                      I'm not a robot
                    </label>
                  </div>
                  <div>
                    <Image
                      src={RecaptchaIcon}
                      width={45}
                      height={45}
                      alt="check"
                      className="min-w-12 min-h-12"
                    />
                    <p className="text-text-4 text-[8px] font-light mt-px">
                      Privacy - Terms
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full cursor-pointer bg-[#0B2C4F] text-white font-semibold rounded-lg py-3 mt-4 hover:bg-[#0B2C4F]/90 transition-all shadow-md"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Map Image Section */}
            <div className="w-full h-full max-md:max-w-[400px] mx-auto relative overflow-hidden max-md:order-1 ">
              <Image
                src={ContactUsimage}
                alt="Office Map Location"
                width={100}
                height={100}
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default ContactUs;
