"use client";
import React from "react";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Overview from "./tabbutton/overview.jsx";
import Subscription from "./tabbutton/Subscription.jsx";
// import Account from "./tabbutton/account";
import { useState } from "react";
function Profile() {
  const [tab, setTab] = useState("overview");
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <UserHeader />
      </div>
      <div className="max-w-[1200px] mx-auto">
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
        {/* {tab === "account" && <Account />} */}
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
