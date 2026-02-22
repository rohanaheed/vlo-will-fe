"use client";
import React, { useState } from "react";
import Refresh from "@/components/assets/images/RefreshIcon.svg";
import Image from "next/image";
import Commondropdown from "@/components/common/Commondropdown1.jsx";
import PlusBlueIcon from "@/components/assets/images/PlusBlueIcon.svg";
import CrossRedIcon from "@/components/assets/images/CrossRedIcon.svg";
import PrintIcon from "@/components/assets/images/PrintIcon.svg";
import DownloadIconBlue from "@/components/assets/images/DownloadIconBlue.svg";
import ShareIconBlue from "@/components/assets/images/ShareIconBlue.svg";
import EditIconBlue from "@/components/assets/images/CrossWhiteIcon.svg";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import ArrowBack from "@/components/assets/images/ArrowBack.svg";
import CopyIcon2 from "@/components/assets/images/CopyIcon2.svg";
import AlignLeft from "@/components/assets/images/AlignLeft.svg";
import SaveIcon from "@/components/assets/images/SaveIcon.svg";
import StampPage from "@/components/assets/images/Stamppage.svg";
import SearchIcon from "@/components/assets/images/SearchIconGray2.svg";
import CheveronDownGray from "@/components/assets/images/CheveronDownGray.svg";
import FillArrowLeftIcon from "@/components/assets/images/FillArrowLeftIcon.svg";
import Notes from "@/components/common/Notes";
import QrCode from "@/components/assets/images/QrCode.svg";
import logo from "@/components/assets/images/Logo.svg";
import Signature from "@/components/assets/images/Signature.svg";

function page() {
  const [isActive, setIsActive] = useState("create");
  const onShare = () => console.log("Share clicked");
  const onEditor = () => console.log("Exit Editor clicked");

  return (
    <div className="h-screen">
      <div className="max-w-[1200px] mx-auto">
        <UserHeader />
      </div>
      <div className="min-h-[calc(100vh-64px)]">
        <div className=" bg-[url('@/components/assets/images/Background.svg')] bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto p-4 pt-20 md:pt-30">
            <div className="bg-[#FAFAFA] rounded-lg sm:p-6 p-3">
              <p className="text-lg font-semibold text-text-5">Annual Plan</p>
              <div className="flex items-center justify-between gap-4 flex-wrap w-full mb-5 mt-4">
                <h2 className="lg:text-4xl text-2xl font-bold text-text-1">
                  £59.88
                  <span className="font-medium text-base text-text-5">
                    / year
                  </span>
                </h2>
                <div className="px-3 py-1 bg-[#ECF6FF] border border-[#587C9F] rounded-full">
                  <p className="text-main text-sm font-medium">
                    Save 80% compared to monthly
                  </p>
                </div>
              </div>

              <div className="">
                <p className="text-text-5 md:text-xl text-base">
                  Let the client verify all information before generating the
                  Will.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row items-center flex-wrap whitespace-nowrap gap-2 mt-4">
                  <button
                    onClick={() => setIsActive("print")}
                    className={`${isActive === "print" ? "bg-main text-white border-main" : "text-main border-main hover:bg-main hover:text-white"} group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-full md:shrink md:grow md:basis-[150px]`}
                  >
                    <Image
                      src={PrintIcon}
                      alt="Print"
                      width={20}
                      height={20}
                      className={`${isActive === "print" ? "invert brightness-0" : "group-hover:invert group-hover:brightness-0"}`}
                    />
                    <span className="">Print</span>
                  </button>

                  <button
                    onClick={() => setIsActive("download")}
                    className={`${isActive === "download" ? "bg-main text-white border-main" : "text-main border-main hover:bg-main hover:text-white"} group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-full md:shrink md:grow md:basis-[150px]`}
                  >
                    <Image
                      src={DownloadIconBlue}
                      alt="Download"
                      width={20}
                      height={20}
                      className={`${isActive === "download" ? "invert brightness-0" : "group-hover:invert group-hover:brightness-0"}`}
                    />
                    <span className="">Download Pdf</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsActive("share");
                      onShare && onShare();
                    }}
                    className={`${isActive === "share" ? "bg-main text-white border-main" : "text-main border-main hover:bg-main hover:text-white"} group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-full md:shrink md:grow md:basis-[180px]`}
                  >
                    <Image
                      src={ShareIconBlue}
                      alt="Share"
                      width={20}
                      height={20}
                      className={`${isActive === "share" ? "invert brightness-0" : "group-hover:invert group-hover:brightness-0"}`}
                    />
                    <span>Share</span>
                  </button>
                  <button className="bg-main text-white border-main group flex items-center font-semibold justify-center gap-2 px-4 py-2.5 border-2 rounded-lg transition-colors cursor-pointer w-full md:max-w-[150px] md:shrink md:grow md:basis-[120px]">
                    <Image
                      src={EditIconBlue}
                      alt="Edit"
                      width={20}
                      height={20}
                    />
                    <span className="">Close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[900px] mx-auto px-4 md:mt-16 mtb-8 lg:mt-24 border-b border-black/16 md:pb-16 pb-8 lg:pb-24">
          <div className="sm:p-6 p-3 relative overflow-hidden">
            {/* Top blue/gray bar */}
            <div className="absolute top-0 left-0 right-0 h-3 flex">
              <div
                className="h-full bg-main"
                style={{
                  width: "66%",
                  clipPath: "polygon(0 0, 100% 0, 97% 100%, 0 100%)",
                }}
              ></div>
              <div
                className="h-full bg-[#EAECF0] flex-1 -ml-6"
                style={{
                  clipPath: "polygon(3% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              ></div>
            </div>

            {/* Header */}
            <div className="flex justify-between max-sm:flex-col gap-2 items-start mb-12.5 mt-4">
              <Image src={logo} alt="LawNest" width={99} height={20} />
              <div className="text-right  max-sm:text-right max-sm:self-end max-sm:w-full">
                <h2 className="text-2xl font-bold text-black mb-2">
                  Invoice Receipt
                </h2>
                <div className="space-y-2 text-sm text-black">
                  <p className=" font-bold">
                    <span className="font-normal"> Invoice ID: </span>
                    NV-2025-0012
                  </p>
                  <p>
                    <span className="font-normal">Date Issued: </span>
                    28/08/2025
                  </p>
                  <p>
                    <span className="font-normal">Billing Period: </span>
                    28/10/2025 - 27/10/2026
                  </p>
                </div>
              </div>
            </div>

            {/* Billing Details */}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mb-3">
              <div>
                <h3 className="text-sm font-bold text-black mb-4">
                  Billed from:
                </h3>
                <div className="text-sm text-black space-y-1">
                  <p className="font-bold text-xs text-black">LawNest.Co.</p>
                  <p className="text-xs text-black">Model45 Broadway</p>
                  <p className="text-xs text-black">
                    High Street Uxbridge UB8 1LD
                  </p>
                  <p className="text-xs text-black">
                    <span className="font-semibold">Phone:</span> +44 789 123456
                  </p>
                  <p className="text-xs text-black">
                    <span className="font-semibold">Email:</span>{" "}
                    billing@lawnest.co.uk
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:items-end">
                <div className="text-sm text-black space-y-1">
                  <h3 className="text-sm font-bold text-black mb-4">
                    Billed to:
                  </h3>
                  <p>
                    <span className="font-semibold text-xs">Name:</span> John
                    Smith
                  </p>
                  <p>
                    <span className="font-semibold text-xs">Company:</span>{" "}
                    Smith Legal Solutions
                  </p>
                  <p>
                    <span className="font-semibold text-xs">Email:</span>{" "}
                    john.smith@smithlegal.co.uk
                  </p>
                  <p>
                    <span className="font-semibold text-xs">Address:</span> 45
                    Queen Street, London, UK
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="mb-5">
              <h3 className="text-xs font-bold text-text-1 mb-5">
                Payment Summary
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-[#F3F5F7] whitespace-nowrap">
                  <thead>
                    <tr className="bg-[#F3F5F7] text-[10px] text-black text-left border-y border-[#F3F5F7]">
                      <th className="py-1.5 px-3 font-semibold">Description</th>
                      <th className="py-1.5 px-3 font-semibold">Quantity</th>
                      <th className="py-1.5 px-3 font-semibold">Unit Price</th>
                      <th className="py-1.5 px-3 font-semibold">VAT</th>
                      <th className="py-1.5 px-3 font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-black">
                    <tr className="">
                      <td className="py-2.75 text-xs px-3">
                        LawNest Pro Annual Subscription
                      </td>
                      <td className="py-2.75 text-xs px-3 text-black">1</td>
                      <td className="py-2.75 text-xs px-3 text-black">
                        £ 40.00
                      </td>
                      <td className="py-2.75 text-xs px-3 text-black whitespace-nowrap">
                        20% (£24.00)
                      </td>
                      <td className="py-2.75 text-xs px-3">£120.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-14.5">
              <div className="space-y-3">
                <div className="flex justify-end text-xs">
                  <span className="text-black">Subtotal: </span>
                  <span className="font-bold text-black">£120.00 </span>
                </div>
                <div className="flex justify-end text-xs">
                  <span className="text-black">Tax (20% VAT): </span>
                  <span className="font-bold text-black"> £24.00</span>
                </div>
                <div className="flex justify-end text-xs">
                  <span className="text-black">Total Paid: </span>
                  <span className="font-bold text-black">£144.00 GBP </span>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="mb-10 px-2">
              <h3 className="text-sm font-bold text-black mb-4">
                Payment Details:
              </h3>
              <div className="space-y-1 text-xs text-black">
                <p>
                  <span className="font-bold">Payment Method:</span> Visa ••••
                  2456
                </p>
                <p>
                  <span className="font-bold">Transaction ID:</span>{" "}
                  TXN-9F7A21B3
                </p>
                <p>
                  <span className="font-bold">Payment Date:</span> 28/10/2025
                </p>
                <p>
                  <span className="font-bold">Status:</span> Paid
                </p>
              </div>
            </div>

            {/* Graphics & Footer */}
            <div className="flex justify-between items-end mb-4.25">
              <div className="w-24">
                <Image src={QrCode} alt="QR Code" width={95} height={95} />
              </div>
              <div className="text-end">
                <div className="mb-3 flex justify-end">
                  <Image
                    src={Signature}
                    alt="Signature"
                    width={114}
                    height={56}
                  />
                </div>
                <p className="text-sm font-bold text-black">LawNest</p>
                <p className="text-xs text-black">Executive Director</p>
              </div>
            </div>

            {/* Final Text */}
            <div className="text-center text-xs text-black space-y-1 mb-2.75">
              <p>
                Thank you for renewing your subscription with
                <span className="font-bold">LawNest</span> Ltd.
              </p>
              <p>
                For billing questions, contact:{" "}
                <span className="font-bold text-[#101828] non-italic">
                  billing@lawnest.co.uk
                </span>
              </p>
              <p>
                Visit:{" "}
                <span className="font-bold text-[#101828] non-italic">
                  www.lawnest.co.uk
                </span>
              </p>
            </div>

            {/* Bottom gray/blue bar */}
            <div className="absolute bottom-0 left-0 right-0 h-3 flex">
              <div
                className="h-full bg-[#EAECF0]"
                style={{
                  width: "33%",
                  clipPath: "polygon(0 0, 100% 0, 97% 100%, 0 100%)",
                }}
              ></div>
              <div
                className="h-full bg-main flex-1 -ml-6"
                style={{
                  clipPath: "polygon(3% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-16 lg:pt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default page;
