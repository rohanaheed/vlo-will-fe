
"use client"
import { useState } from 'react'
import React from 'react'
import ArrowBack from '../../../components/assets/images/ArrowBack.svg'
import UserIcon from '../../../components/assets/images/UserIcon.svg'
import Overview from './overview/page'
import Subscription from './Subscription/Page'
import Invoice from './Invoice/page'
import CreditNotes from './CreditNotes/page'
import Image from 'next/image'
function UserDetail({ back }) {
    const [isTab, setIsTab] = useState("Overview")
    return (
        <div>
            <div className='flex items-center gap-2' >
                <button
                    onClick={back}
                    className='cursor-pointer p-2 rounded-full hover:bg-zinc-100 transition-all duration-300'>
                    <Image src={ArrowBack} alt='media' width={24} height={24} />
                </button>
                <div className='flex items-center gap-2'>
                    <div className='inline-block border border-black/16 bg-[#F5F5F5] rounded-full p-2'>
                        <Image src={UserIcon} alt='media' width={24} height={24} />
                    </div>
                    <div>
                        <p className='font-semibold text-sm text-[#1A2232]'>John Doe</p>
                        <p className='text-xs text-[#404040]'>john.doe@example.com</p>
                    </div>
                </div>
            </div>
            <div className='border-b border-black/16 flex w-full overflow-x-auto whitespace-nowrap'>
                <button onClick={() => setIsTab("Overview")} className={`${isTab === "Overview" ? "text-[var(--color-main)] font-bold border-(--color-main)" : "border-transparent"} border-b-3 cursor-pointer p-4 transition-all duration-300`}>Overview</button>
                <button onClick={() => setIsTab("Subscription")} className={`${isTab === "Subscription" ? "text-[var(--color-main)] font-bold border-(--color-main)" : "border-transparent"} border-b-3 cursor-pointer p-4 transition-all duration-300`}>Subscription</button>
                <button onClick={() => setIsTab("Invoices")} className={`${isTab === "Invoices" ? "text-[var(--color-main)] font-bold border-(--color-main)" : "border-transparent"} border-b-3 cursor-pointer p-4 transition-all duration-300`}>Invoices</button>
                <button onClick={() => setIsTab("Credit Notes")} className={`${isTab === "Credit Notes" ? "text-[var(--color-main)] font-bold border-(--color-main)" : "border-transparent"} border-b-3 cursor-pointer p-4 transition-all duration-300`}>Credit Notes</button>
                <button onClick={() => setIsTab("Payments")} className={`${isTab === "Payments" ? "text-[var(--color-main)] font-bold border-(--color-main)" : "border-transparent"} border-b-3 cursor-pointer p-4 transition-all duration-300`}>Payments</button>
                <button onClick={() => setIsTab("Documents")} className={`${isTab === "Documents" ? "text-[var(--color-main)] font-bold border-(--color-main)" : "border-transparent"} border-b-3 cursor-pointer p-4 transition-all duration-300`}>Documents</button>
                <button onClick={() => setIsTab("Email")} className={`${isTab === "Email" ? "text-[var(--color-main)] font-bold border-(--color-main)" : "border-transparent"} border-b-3 cursor-pointer p-4 transition-all duration-300`}>Email</button>
                <button onClick={() => setIsTab("Activity")} className={`${isTab === "Activity" ? "text-[var(--color-main)] font-bold border-(--color-main)" : "border-transparent"} border-b-3 cursor-pointer p-4 transition-all duration-300`}>Activity</button>
                <button onClick={() => setIsTab("Tickets")} className={`${isTab === "Tickets" ? "text-[var(--color-main)] font-bold border-(--color-main)" : "border-transparent"} border-b-3 cursor-pointer p-4 transition-all duration-300`}>Tickets</button>
            
            </div>
            <div className="border border-black/16 rounded-xl p-3 md:p-4 mt-6">
                {isTab === "Overview" && <Overview />}
                {isTab === "Subscription" && <Subscription />}
                {isTab === "Invoices" && <Invoice />}
                {isTab === "Credit Notes" && <CreditNotes />}
            </div>
        </div>
    )
}

export default UserDetail