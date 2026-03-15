"use client";
import { useState } from "react";
import React from "react";
import ArrowBack from "../../../../components/assets/images/ArrowBack.svg";
import UserIcon from "../../../../components/assets/images/UserIcon.svg";
import Overview from "./overview/page";
import Subscription from "./Subscription/Page";
import Invoice from "./Invoice/page";
import CreditNotes from "./CreditNotes/page";
import Documents from "./document/page";
import Notes from "./Notes/page";
import Email from "./Email/page";
import Activity from "./Activity/page";
import Tickets from "./Tickets/page";
import Image from "next/image";
import ArrowBottomToLeftDouble from "@/components/assets/images/ArrowBottomToLeftDouble.svg";
import ViewDetail from "./Tickets/ViewDetail/page";
function UserDetail({ back }) {
    const [isTab, setIsTab] = React.useState("Overview");
    const [isViewDetail, SetisViewDetail] = useState(false);
    return (
        <>
            {isViewDetail ? (
                <ViewDetail onBack={() => SetisViewDetail(false)} />
            ) : (
                <div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={back}
                            className="cursor-pointer p-2 rounded-full hover:bg-zinc-100 transition-all duration-300"
                        >
                            <Image src={ArrowBack} alt="media" width={24} height={24} />
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="inline-block border border-black/16 bg-[#F5F5F5] rounded-full p-2">
                                <Image src={UserIcon} alt="media" width={24} height={24} />
                            </div>
                            <div>
                                <p className="font-semibold text-sm text-[#1A2232]">John Doe</p>
                                <p className="text-xs text-[#404040]">john.doe@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-black/16 flex w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
                        {[
                            "Overview",
                            "Subscription",
                            "Invoice",
                            "Credit Note",
                            "Documents",
                            "Notes",
                            "Email",
                            "Activity",
                            "Tickets",
                        ].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setIsTab(tab)}
                                className={`${isTab === tab ? "text-(--color-main) font-bold border-(--color-main)" : "border-transparent text-gray-500"} border-b-3 cursor-pointer p-4 px-6 transition-all duration-300`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="border border-black/16 rounded-xl p-3 md:p-6 mt-6 bg-white min-h-[500px]">
                        {isTab === "Overview" && <Overview />}
                        {isTab === "Subscription" && <Subscription />}
                        {isTab === "Invoice" && <Invoice />}
                        {isTab === "Credit Note" && <CreditNotes />}
                        {isTab === "Documents" && <Documents />}
                        {isTab === "Notes" && <Notes />}
                        {isTab === "Email" && <Email />}
                        {isTab === "Activity" && <Activity />}
                        {isTab === "Tickets" && (
                            <Tickets onViewDetail={() => SetisViewDetail(true)} />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default UserDetail;