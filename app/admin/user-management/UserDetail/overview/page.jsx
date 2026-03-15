
"use client"
import React from "react";
import UserIcon from '@/components/assets/images/UserIcon.svg'
import Image from "next/image";
import UkFlag from '@/components/assets/images/UkFlag.svg'
import logoutIcon from '@/components/assets/images/LogoutIcon.svg'
function Page() {
    return (
        <div className="relative"> 
        <div className="flex items-center max-md:flex-col gap-2 justify-between mb-6">
            <div className='flex max-sm:flex-col items-center gap-2'>
                <div className='inline-block border border-black/16 bg-[#F5F5F5] rounded-full p-2'>
                    <Image src={UserIcon} alt='media' width={32} height={32} className="min-w-8 h-8" />
                </div>
                <div className="max-sm:self-start">
                    <p className='font-semibold text-lg md:text-2xl text-[#1A2232]'>Ahmed Khan</p>
                    <p className='text-sm text-[#404040]'>ahmadkhan@gmail.com</p>
                    <div className="flex flex-wrap items-center gap-2 whitespace-nowrap w-full overflow-x-auto mt-1">
                        <button className="text-[var(--color-main)] cursor-pointer border-r-[var(--color-main)] border-r-[1px] pr-1.5 text-xs font-medium">Edit User</button>
                        <button className="text-[var(--color-main)] cursor-pointer border-r-[var(--color-main)] border-r-[1px] pr-1.5 text-xs font-medium">Suspend</button>
                        <button className="text-[var(--color-main)] cursor-pointer border-r-[var(--color-main)] border-r-[1px] pr-1.5 text-xs font-medium">Reset Password</button>
                        <button className="text-[var(--color-main)] cursor-pointer text-xs font-medium">Send Email</button>
                    </div>
                </div>
            </div>
            <div className="group inline-flex self-end items-center gap-2 border border-(--color-main) p-2 sm:p-3 px-4 rounded-[10px] cursor-pointer hover:bg-[var(--color-main)] hover:text-white transition-colors">
            <Image src={logoutIcon} alt="customize" width={20} height={20} className="group-hover:brightness-0 group-hover:invert transition-colors" />
            <p className="text-sm font-semibold text-black group-hover:text-white transition-colors">Customize</p>
          </div>
            </div>
            <div className="mb-2.5">
                <p className="text-base mb-2.5 text-[#33383F]">Licence Expires On: <span className="font-bold">12/07/2025</span></p>
                <div className="w-full bg-[#E4E7EC] rounded-full h-1.5">
                    <div className="bg-[var(--color-main)] h-1.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-6 text-sm">
                <div className="flex sm:items-center">
                    <span className="text-[#33383F]">Status:</span>
                    <span className="text-[#33383F] font-bold">Active / Suspended / Pending</span>
                </div>
                <div className="flex items-center">
                    <span className="text-[#33383F]">Subscription Type:</span>
                    <span className="text-[#33383F] font-bold">Monthly Plan</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[#33383F]">Amount:</span>
                    <div className="flex items-center gap-6">
                        <span className="text-[#404040] font-bold">£0</span>
                        <div className="border flex items-center gap-1 border-black/16 text-[##414651] text-xs px-2 py-0.5 rounded-md font-medium shadow"><div className="w-1.5 inline-block h-1.5 rounded-full bg-[#17B26A]"></div> Paid</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="text-[#33383F]">Payment Date:</span>
                    <span className="text-[#33383F] font-bold">12/07/2024</span>
                </div>
                <div className="flex items-center">
                    <span className="text-[#33383F]">Next Renewal:</span>
                    <span className="text-[#33383F] font-bold">12/07/2025</span>
                </div>
            </div>
            <div>
                <div className="bg-[var(--color-main)] text-white px-2.5 py-1.5 font-semibold md:text-xl text-base">
                    Personal Information
                </div>
                <div className="mt-6">
                    <div className="grid grid-cols-1 gap-y-5 text-sm">
                        <div className="grid grid-cols-2 sm:grid-cols-[140px_1fr] items-center">
                            <span className="font-bold text-[#1A1D1F]">Full Name:</span>
                            <span className="text-[#1A1D1F]">Ahmed Khan</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-[140px_1fr] items-center">
                            <span className="font-bold text-[#1A1D1F]">Email:</span>
                            <span className="text-[#1A1D1F]">Integration Stuck</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-[140px_1fr] items-center">
                            <span className="font-bold text-[#1A1D1F]">Phone Number:</span>
                            <span className="text-[#1A1D1F]">+44 789 123456</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-[140px_1fr] items-center">
                            <span className="font-bold text-[#1A1D1F]">Account Type:</span>
                            <span className="text-[#1A1D1F]">Individual</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-[140px_1fr] items-center">
                            <span className="font-bold text-[#1A1D1F]">Date of Birth:</span>
                            <span className="text-[#1A1D1F]">12/09/1995</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-[140px_1fr] items-start">
                            <span className="font-bold text-[#1A1D1F] mt-0.5">Address:</span>
                            <span className="text-[#1A1D1F]">Model45 Broadway High Street Uxbridge UB8 1LD</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-[140px_1fr] items-center">
                            <span className="font-bold text-[#1A1D1F]">Created On:</span>
                            <span className="text-[#1A1D1F]">14/03/2023</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-[140px_1fr] items-center">
                            <span className="font-bold text-[#1A1D1F]">Last Updated:</span>
                            <span className="text-[#1A1D1F]">14/03/2023 11:00 PM</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-[140px_1fr] items-center">
                            <span className="font-bold text-[#1A1D1F">Default Currency:</span>
                            <span className="text-[#1A1D1F] flex items-center gap-1"><Image src={UkFlag} alt="UK" width={16} height={16} /> GBP (£)</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-[140px_1fr] items-center">
                            <span className="font-bold text-[#1A1D1F]">Default Time zone:</span>
                            <span className="text-[#1A1D1F]">London, UK (GMT+1)</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-[140px_1fr] items-center">
                            <span className="font-bold text-[#1A1D1F]">Status:</span>
                            <span className="bg-[#FF0000] text-white text-sm font-semibold px-5 py-1.5 rounded-full w-fit">Expired</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page;