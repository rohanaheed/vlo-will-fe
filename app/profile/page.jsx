"use client";
import React from "react";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Overview from "./tabbutton/overview.jsx";
import Subscription from "./tabbutton/Subscription.jsx";
import Account from "./tabbutton/Setting.jsx";
import search from "@/components/assets/images/SearchIconBlack.svg";
import arrowback from "@/components/assets/images/ArrowBack.svg";
// import Account from "./tabbutton/account";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
function Profile() {
  const router = useRouter();
  const [tab, setTab] = useState("overview");

  const isValidTab = ["overview", "subscription", "account"].includes(tab);
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <UserHeader />
      </div>
      {/* <div className="max-w-[1200px] mx-auto">
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-5 md:pb-10 bg-cover bg-center">
          <h1 className="text-text-1 text-center text-2xl md:text-4xl lg:text-6xl font-semibold">
            MY Account
          </h1>
          <p className="text-text-5 mt-6 text-center text-base lg:text-xl">
            example_1235@gmail.com
          </p>
          <div className="flex items-center mt-8 gap-2 whitespace-nowrap bg-[#fafafa] border border-black/16 rounded-lg p-1">
            <button
              className={`text-text-1 w-full p-2.5 rounded-lg cursor-pointer text-base lg:text-xl ${
                tab === "overview"
                  ? "bg-main text-white font-semibold"
                  : " text-black/50"
              }`}
              onClick={() => setTab("overview")}
            >
              Overview
            </button>
            <button
              className={`text-text-1 w-full p-2.5 rounded-lg cursor-pointer text-base lg:text-xl ${
                tab === "subscription"
                  ? "bg-main text-white font-semibold"
                  : " text-black/50"
              }`}
              onClick={() => setTab("subscription")}
            >
              Subscription
            </button>
            <button
              className={`text-text-1 w-full p-2.5 rounded-lg cursor-pointer text-base lg:text-xl ${
                tab === "account"
                  ? "bg-main text-white font-semibold"
                  : " text-black/50"
              }`}
              onClick={() => setTab("account")}
            >
              Account Settings
            </button>
          </div>
        </div>
      </div>
        <div className="mt-6 md:mt-18 lg:mt-24 max-[1200px]:px-4 max-w-[1200px] mx-auto border-b border-black/16 md:pb-16 pb-8 lg:pb-24">
          {tab === "overview" && <Overview />}
          {tab === "subscription" && <Subscription />}
          {tab === "account" && <Account />}
        </div> */}

      <main className="flex-1 flex max-[1200px]:mt-10 flex-col border border-b-black/16 max-w-[1200px] mx-auto items-center justify-center py-20 px-4 relative min-h-[600px] bg-white">
        {/* Background Layer with Grid and Mask */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            backgroundPosition: "center center",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 80%)",
          }}
        >
          {/* Decorative Dashed Lines (Moved inside background layer) */}
          <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-main/20 -translate-y-1/2 opacity-30"></div>
          <div className="absolute top-0 left-1/2 h-full border-l border-dashed border-main/20 -translate-x-1/2 opacity-30"></div>
        </div>

        {/* Content Layer (Sharp and High Contrast) */}
        <div className="z-10 flex flex-col items-center justify-center relative py-30">
          <div className="bg-white p-3.25 rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.04)] border border-black/10 mb-8">
            <Image src={search} alt="search" width={28} height={28} />
          </div>

          <h2 className="text-xl md:text-4xl lg:text-6xl font-bold text-text-1 mb-6 text-center">
            Page not found
          </h2>
          <p className="text-text-5 text-center max-w-lg px-4 mb-12 text-lg md:text-xl font-medium leading-relaxed">
            The page you are looking for doesn't exist.
            <br />
            Here are some helpful links:
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setTab("overview")}
              className="flex items-center justify-center gap-3 px-10 py-4.5 bg-white border border-gray-200 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              <Image src={arrowback} alt="back" width={20} height={20} />
              Go back
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-10 py-4.5 bg-[#0A335C] text-white rounded-xl font-bold hover:bg-[#082a4d] transition-all duration-200 cursor-pointer shadow-md active:scale-95"
            >
              Take me home
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
