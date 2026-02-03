"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/common/Header'
import CommonDropdown from '@/components/common/Commondropdown1'
import OverviewUsericon from '@/components/assets/images/OverviewUsericon.svg'
import OverviewDocumenticon from '@/components/assets/images/OverviewDocumenticon.svg'
import OverviewSupporticon from '@/components/assets/images/OverviewSupporticon.svg'
import ArrowUpGreen from '@/components/assets/images/ArrowUpGreen.svg'
import ArrowDownRed from '@/components/assets/images/ArrowDownRed.svg'
import RevenueIcon from '@/components/assets/images/RevenueIcon.svg'
import AllUser from './alluser/page'
import NinetyDaysRecycleBin from './recyclebin/page'
import Draft from './draft/page'
import UserDetail from './UserDetail/page'

function UserManagement() {
    const back = () => {
        setSelectedUser("usermanagement")
    }
    const [selectedUser, setSelectedUser] = useState("usermanagement")
    const [isTab, setIsTab] = useState("AllUser")
    const yearOptions = [
        { value: 'This Year', label: 'This Year' },
        { value: 'This Month', label: 'This Month' },
    ]
    const [year, setYear] = useState('This Year')
    return (
        <div className='mt-16 md:mt-22 pb-3 md:pb-6 text-black'>
            <Header title="User Management" />
            <main className='lg:max-w-[calc-(100%-300px)] lg:ml-80.5 m-3 mb-0 md:m-6 md:mb-0 bg-white p-3 md:p-6 rounded-md border border-[#E6E6E6]'>
                {selectedUser === "usermanagement" && (
                    <>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-lg md:text-xl font-bold'>User Overview</h1>
                    </div>
                    <div>
                        <CommonDropdown options={yearOptions} value={year} onChange={setYear} placeholder="Subscription Revenue" dropdownClassName="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6'>
                    <div className='rounded-lg p-4 border border-black/16'>
                        <div className='inline-flex items-center gap-2 bg-[var(--color-main)] rounded-full p-2'>
                            <div className='bg-[var(--color-main)] rounded-full p-2'>
                                <Image src={OverviewUsericon} alt="media" width={24} height={24} />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xs font-semibold'>Total Users</h3>
                            <h1 className='text-2xl font-semibold mt-1'>5,420</h1>
                            <div className='inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1'>
                                <Image src={ArrowUpGreen} alt="media" width={16} height={16} />
                                <p className='text-xs text-[#83BF6E]'>12 <span className='text-black/50'>This Month</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg p-4 border border-black/16'>
                        <div className='inline-flex items-center gap-2 bg-[#9A7200] rounded-full p-2'>
                            <div className='bg-[#B38B00] rounded-full p-2'>
                                <Image src={OverviewDocumenticon} alt="media" width={24} height={24} />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xs font-semibold'>Document Created</h3>
                            <h1 className='text-2xl font-semibold mt-1'>3,145</h1>
                            <div className='inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1'>
                                <Image src={ArrowUpGreen} alt="media" width={16} height={16} />
                                <p className='text-xs text-[#83BF6E]'>12 <span className='text-black/50'>Growth This Month</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg p-4 border border-black/16'>
                        <div className='inline-flex items-center gap-2 bg-[var(--color-main)] rounded-full p-2'>
                            <div className='bg-[var(--color-main)] rounded-full p-2'>
                                <Image src={OverviewSupporticon} alt="media" width={24} height={24} />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xs font-semibold'>Open Support Tickets</h3>
                            <h1 className='text-2xl font-semibold mt-1'>14</h1>
                            <div className='inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1'>
                                <Image src={ArrowDownRed} alt="media" width={16} height={16} />
                                <p className='text-xs text-[#FF383C]'>12 <span className='text-black/50'>This Month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b border-[var(--color-main)] mt-4 overflow-x-auto flex whitespace-nowrap'>
                    <button onClick={() => setIsTab("AllUser")}
                        className={`${isTab === "AllUser" ? "bg-[var(--color-main)] text-white" : " text-[#828282]"} cursor-pointer font-medium p-2.5 rounded-t-[10px]`}>
                        All User
                    </button>
                    <button onClick={() => setIsTab("90DaysRecycleBin")} className={`${isTab === "90DaysRecycleBin" ? "bg-[var(--color-main)] text-white" : "text-[#828282]"} cursor-pointer font-medium p-2.5 rounded-t-[10px]`}>
                        90 Days Recycle Bin
                    </button>
                    <button onClick={() => setIsTab("Draft")} className={`${isTab === "Draft" ? "bg-[var(--color-main)] text-white" : "text-[#828282]"} cursor-pointer font-medium p-2.5 rounded-t-[10px]`}>
                        Draft
                    </button>
                </div>
                {isTab === "AllUser" && <AllUser setSelectedUser={setSelectedUser} />}
                {isTab === "90DaysRecycleBin" && <NinetyDaysRecycleBin setSelectedUser={setSelectedUser}/>}
                {isTab === "Draft" && <Draft setSelectedUser={setSelectedUser}/>}
            
                </>
                )}
                {selectedUser === "userdetail" && <UserDetail back={back} />}
            </main>
        </div>
    )
}

export default UserManagement