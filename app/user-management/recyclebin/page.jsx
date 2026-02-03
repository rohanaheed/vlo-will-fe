"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import CustomizeIcon from '@/components/assets/images/CustomizeIcon.svg'
import CopyIcon from '@/components/assets/images/CopyIcon.svg'
import SearchIconGray from '@/components/assets/images/SearchIconGray.svg'
import Commondropdown from '@/components/common/Commondropdown'
import CustomDateRangePicker from '@/components/common/CustomDateRangePicker'
import CommonTable from '@/components/common/CommonTable'

// Table Icons
import TableCopyicon from '@/components/assets/images/TableCopyicon.svg'
import TableMailIcon from '@/components/assets/images/TableMailIcon.svg'
import TableInvoiceIcon from '@/components/assets/images/TableInvoiceIcon.svg'
import TableEyeIcon from '@/components/assets/images/TableEyeIcon.svg'
import TableEditIccon from '@/components/assets/images/TableEditIccon.svg'
import DeleteIcon from '@/components/assets/images/DeleteIcon.svg'

// User Avatars (using placeholders available in the project)
import User1 from '@/components/assets/images/User1.svg'
import User2 from '@/components/assets/images/User2.svg'
import User3 from '@/components/assets/images/User3.svg'

function AllUser({ setSelectedUser }) {
    const [subscriptionStatus, setSubscriptionStatus] = useState("All")
    const [status, setStatus] = useState("")
    const [dateRange, setDateRange] = useState({ startDate: null, endDate: null })
    const { startDate, endDate } = dateRange

    const subscriptionStatusOptions = [
        { label: "All", value: "All" },
        { label: "Paid", value: "Paid" },
        { label: "Unpaid", value: "Unpaid" },
    ];
    const statusOptions = [
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
        { label: "Pending", value: "Pending" },
        { label: "Suspended", value: "Suspended" },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Incomplete': return 'bg-[#E0E0E0] text-black border-transparent';
            case 'Pending': return 'bg-[#FFA500] text-white border-transparent';
            case 'Verified': return 'bg-[#2196F3] text-white border-transparent';
            case 'Package Selected': return 'bg-[#9C27B0] text-white border-transparent';
            case 'Credentials Sent': return 'bg-[#009688] text-white border-transparent';
            case 'Active': return 'bg-[#4CAF50] text-white border-transparent';
            case 'Suspended': return 'bg-[#F44336] text-white border-transparent';
            case 'Canceled': return 'bg-[#795548] text-white border-transparent';
            case 'License Exp': return 'bg-[#D32F2F] text-white border-transparent';
            case 'Deactivate': return 'bg-[#607D8B] text-white border-transparent';
            default: return 'bg-gray-200 text-black border-transparent';
        }
    }

    const columns = [
        {
            header: "ID #",
            sortable: true,
            accessor: "idHash",
            render: (row) => <span className="font-medium text-sm leading-5 tracking-[-0.006em] text-[#16151C]">{row.idHash}</span>
        },
        {
            header: "User Name",
            sortable: true,
            accessor: "name",
            render: (row) => (
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedUser("userdetail")}>
                    <Image src={row.avatar} alt={row.name} width={32} height={32} className="rounded-full" />
                    <div className='flex flex-col'>
                        <span className="font-semibold text-[#181D27] text-sm">{row.name}</span>
                        <span className="text-xs text-[#404040]">{row.email}</span>
                    </div>
                </div>
            )
        },
        {
            header: "Plan",
            sortable: true,
            accessor: "plan",
            render: (row) => (
                <div className='flex flex-col gap-1'>
                    <span className="font-medium text-[#1A1D1F]">{row.plan}</span>
                    <div className='items-center border border-black/16 shadow rounded-md p-1 py-0.5 w-fit inline-flex gap-1'>
                        <div className={`w-1.5 h-1.5 rounded-full ${row.planAction === 'Upgrade' ? 'bg-[#17B26A]' : 'bg-[#F04438]'}`}></div>
                        <span className={`text-xs ${row.planAction === 'Upgrade' ? 'text-[#414651]' : 'text-[#414651]'}`}>{row.planAction}</span>
                    </div>
                </div>
            )
        },
        {
            header: "Subscription",
            sortable: true,
            accessor: "subscription",
            render: (row) => (
                <div className='flex flex-col gap-1'>
                    <span className="text-[#1A1D1F]">{row.subscriptionAmount}</span>
                    <div className='flex items-center gap-1 w-fit border border-black/16 shadow rounded-md p-1 py-0.5'>
                        <div className={`w-1.5 h-1.5 rounded-full ${row.subscriptionStatus === 'Paid' ? 'bg-[#17B26A]' : 'bg-[#F04438]'}`}></div>
                        <span className={`text-xs ${row.subscriptionStatus === 'Paid' ? 'text-[#414651]' : 'text-[#414651]'}`}>{row.subscriptionStatus}</span>
                    </div>
                </div>
            )
        },
        { header: "Date", sortable: true, accessor: "date", render: (row) => <span className="text-[#404040] font-semibold">{row.date}</span> },
        {
            header: "Expiry Date",
            sortable: true,
            accessor: "expiryDate",
            render: (row) => (
                <div className='flex flex-col gap-1 w-24'>
                    <span className="text-[#404040] font-medium">{row.expiryDate}</span>
                    <div className="h-1.5 w-full bg-[#E4E7EC] rounded-full overflow-hidden">
                        <div className="h-full bg-[#00359E] rounded-full" style={{ width: '60%' }}></div>
                    </div>
                </div>
            )
        },
        {
            header: "Last Active",
            sortable: true,
            accessor: "lastActive",
            render: (row) => (
                <div className='flex flex-col'>
                    <span className="text-[#404040] font-medium">{row.lastActiveDate}</span>
                    <span className="text-sm font-medium text-[#404040]">{row.lastActiveTime}</span>
                </div>
            )
        },
        {
            header: "Status",
            sortable: true,
            accessor: "status",
            render: (row, index) => (
                <div className="w-[171px]">
                    <Commondropdown
                        options={statusOptions}
                        value={row.status}
                        onChange={(selected) => console.log('Status changed:', selected)}
                        className={`!w-[171px] !h-[30px] !rounded-full !py-[6px] !px-[10px] !gap-[10px] font-medium text-xs !border-0 !flex !items-center !justify-between whitespace-nowrap ${getStatusStyle(row.status)}`}
                        dropdownClassName="!w-full"
                        direction={index >= 5 ? 'up' : 'down'}
                        iconClassName={row.status === 'Incomplete' ? '' : 'brightness-0 invert'}
                    />
                </div>
            )
        },
        {
            header: "Action",
            accessor: "action",
            render: (row) => (
                <div className="flex items-center gap-2 ">
                    <button className="w-8 h-8 p-2 flex items-center justify-center border border-[#D5D7DA] rounded-lg bg-white hover:bg-gray-50 cursor-pointer"><Image src={TableCopyicon} alt="copy" width={16} height={16} /></button>
                    <button className="w-8 h-8 p-2 flex items-center justify-center border border-[#D5D7DA] rounded-lg bg-white hover:bg-gray-50 cursor-pointer"><Image src={TableMailIcon} alt="mail" width={16} height={16} /></button>
                    <button className="w-8 h-8 p-2 flex items-center justify-center border border-[#D5D7DA] rounded-lg bg-white hover:bg-gray-50 cursor-pointer"><Image src={TableInvoiceIcon} alt="invoice" width={16} height={16} /></button>
                    <button className="w-8 h-8 p-2 flex items-center justify-center border border-[#D5D7DA] rounded-lg bg-white hover:bg-gray-50 cursor-pointer"><Image src={TableEyeIcon} alt="view" width={16} height={16} /></button>
                    <button className="w-8 h-8 p-2 flex items-center justify-center border border-[#D5D7DA] rounded-lg bg-white hover:bg-gray-50 cursor-pointer"><Image src={TableEditIccon} alt="edit" width={16} height={16} /></button>
                    <button className="w-8 h-8 p-2 flex items-center justify-center border border-[#D5D7DA] rounded-lg bg-white hover:bg-gray-50 cursor-pointer"><Image src={DeleteIcon} alt="delete" width={16} height={16} /></button>
                </div>
            )
        }
    ]

    const mockData = [
        {
            id: 1,
            idHash: "#96459761",
            name: "Mayank Sharma",
            email: "testing@gmail.com",
            avatar: User1,
            plan: "Single Document",
            planAction: "Upgrade",
            subscriptionAmount: "£18.99",
            subscriptionStatus: "Paid",
            date: "17/01/2025",
            expiryDate: "17/01/2025",
            lastActiveDate: "17/01/2025",
            lastActiveTime: "10:00pm",
            status: "Incomplete"
        },
        {
            id: 2,
            idHash: "#96459761",
            name: "Ishita Bai",
            email: "testing@gmail.com",
            avatar: User2,
            plan: "Monthly",
            planAction: "Downgrade",
            subscriptionAmount: "£1200",
            subscriptionStatus: "Unpaid",
            date: "17/01/2025",
            expiryDate: "17/01/2025",
            lastActiveDate: "17/01/2025",
            lastActiveTime: "10:00pm",
            status: "Pending"
        },
        {
            id: 3,
            idHash: "#96459761",
            name: "Jaberi Adebayo",
            email: "testing@gmail.com",
            avatar: User3,
            plan: "Annually",
            planAction: "Upgrade",
            subscriptionAmount: "£18.99",
            subscriptionStatus: "Paid",
            date: "17/01/2025",
            expiryDate: "17/01/2025",
            lastActiveDate: "17/01/2025",
            lastActiveTime: "10:00pm",
            status: "Verified"
        },
        {
            id: 4,
            idHash: "#96459761",
            name: "Anaya Devi",
            email: "testing@gmail.com",
            avatar: User1,
            plan: "Single Document",
            planAction: "Upgrade",
            subscriptionAmount: "£18.99",
            subscriptionStatus: "Unpaid",
            date: "17/01/2025",
            expiryDate: "17/01/2025",
            lastActiveDate: "17/01/2025",
            lastActiveTime: "10:00pm",
            status: "Package Selected"
        },
        {
            id: 5,
            idHash: "#96459761",
            name: "Valentina Pérez",
            email: "testing@gmail.com",
            avatar: User2,
            plan: "Monthly",
            planAction: "Downgrade",
            subscriptionAmount: "£18.99",
            subscriptionStatus: "Paid",
            date: "17/01/2025",
            expiryDate: "17/01/2025",
            lastActiveDate: "17/01/2025",
            lastActiveTime: "10:00pm",
            status: "Credentials Sent"
        },
        {
            id: 6,
            idHash: "#96459761",
            name: "Mayank Sharma",
            email: "testing@gmail.com",
            avatar: User3,
            plan: "Annually",
            planAction: "Upgrade",
            subscriptionAmount: "£18.99",
            subscriptionStatus: "Unpaid",
            date: "17/01/2025",
            expiryDate: "17/01/2025",
            lastActiveDate: "17/01/2025",
            lastActiveTime: "10:00pm",
            status: "Active"
        },
        {
            id: 7,
            idHash: "#96459761",
            name: "Ishita Bai",
            email: "testing@gmail.com",
            avatar: User1,
            plan: "Single Document",
            planAction: "Upgrade",
            subscriptionAmount: "£18.99",
            subscriptionStatus: "Paid",
            date: "17/01/2025",
            expiryDate: "17/01/2025",
            lastActiveDate: "17/01/2025",
            lastActiveTime: "10:00pm",
            status: "Suspended"
        },
        {
            id: 8,
            idHash: "#96459761",
            name: "Jaberi Adebayo",
            email: "testing@gmail.com",
            avatar: User2,
            plan: "Monthly",
            planAction: "Downgrade",
            subscriptionAmount: "£18.99",
            subscriptionStatus: "Paid",
            date: "17/01/2025",
            expiryDate: "17/01/2025",
            lastActiveDate: "17/01/2025",
            lastActiveTime: "10:00pm",
            status: "Active"
        },
        {
            id: 9,
            idHash: "#96459761",
            name: "Anaya Devi",
            email: "testing@gmail.com",
            avatar: User3,
            plan: "Annually",
            planAction: "Upgrade",
            subscriptionAmount: "£18.99",
            subscriptionStatus: "Paid",
            date: "17/01/2025",
            expiryDate: "17/01/2025",
            lastActiveDate: "17/01/2025",
            lastActiveTime: "10:00pm",
            status: "Canceled"
        },
        {
            id: 10,
            idHash: "#96459761",
            name: "Valentina Pérez",
            email: "testing@gmail.com",
            avatar: User1,
            plan: "Single Document",
            planAction: "Upgrade",
            subscriptionAmount: "£18.99",
            subscriptionStatus: "Unpaid",
            date: "17/01/2025",
            expiryDate: "17/01/2025",
            lastActiveDate: "17/01/2025",
            lastActiveTime: "10:00pm",
            status: "License Exp"
        },
        {
            id: 11,
            idHash: "#96459761",
            name: "Valentina Pérez",
            email: "testing@gmail.com",
            avatar: User2,
            plan: "Monthly",
            planAction: "Downgrade",
            subscriptionAmount: "£18.99",
            subscriptionStatus: "Paid",
            date: "17/01/2025",
            expiryDate: "17/01/2025",
            lastActiveDate: "17/01/2025",
            lastActiveTime: "10:00pm",
            status: "Deactivate"
        },
    ]

    return (
        <div className="text-black">
            <div className="flex items-center max-sm:flex-col max-sm:items-start max-sm:gap-4 justify-between mt-7.5 ">
                <h1 className="text-lg md:text-xl font-semibold ">
                    User List
                </h1>
                <div className="flex max-sm:justify-end items-center gap-2 max-sm:self-end flex-wrap">
                    <div className="group flex items-center gap-2 border border-[#D5D7DA] p-3 px-4 rounded-lg cursor-pointer hover:bg-[var(--color-main)] hover:text-white transition-colors">
                        <Image src={CustomizeIcon} alt="customize" width={20} height={20} className="group-hover:brightness-0 group-hover:invert transition-colors" />
                        <p className="text-sm font-semibold text-black group-hover:text-white transition-colors">Customize</p>
                    </div>

                    <div className="group max-sm:self-end border border-[#D5D7DA] p-2.5 rounded-lg cursor-pointer hover:bg-[var(--color-main)] hover:text-white transition-colors">
                        <Image src={CopyIcon} alt="media" width={24} height={24} className="min-w-6 group-hover:brightness-0 group-hover:invert transition-colors" />
                    </div>
                    <div className='max-sm:self-end max-sm:w-full'>
                        <button className='text-sm  max-md:w-full flex items-center gap-2 text-white bg-[var(--color-main)] hover:bg-[var(--color-main)]/90 transition-all duration-200 rounded-lg px-3.5 py-2.5 cursor-pointer'><p className='text-lg leading-none -mt-0.5'>+</p> <p>Add Customer</p></button>

                    </div>
                </div>
            </div>
            <div className="mt-6 w-full grid grid-cols-1 min-[800px]:grid-cols-[45%_1fr] lg:grid-cols-2 2xl:flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 xl:gap-4">
                <div className="w-full relative lg:max-w-60 xl:max-w-93">
                    <input
                        type="text"
                        placeholder=" Email / ID"
                        className="w-full focus:border-black border text-base border-black/16 outline-0 p-4 py-3.5 pr-12 rounded-lg"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-4">
                        <Image src={SearchIconGray} alt="media" width={20} height={20} />
                    </div>
                </div>


                <div className="flex max-[800px]:flex-col gap-4 sm:gap-6 w-full md:w-auto md:justify-end">
                    <div className="flex max-[800px]:flex-col min-[800px]:items-center gap-2">
                        <p className="text-sm font-medium whitespace-nowrap">Subscription Status:</p>
                        <Commondropdown
                            options={subscriptionStatusOptions}
                            value={subscriptionStatus}
                            onChange={setSubscriptionStatus}
                            className="max-[800px]:w-full w-30 xl:w-40"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto max-[800px]:justify-between">
                    <div className="w-full md:max-w-65">
                        <CustomDateRangePicker
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => setDateRange(update)}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <CommonTable
                    columns={columns}
                    data={mockData}
                    selectable={true}
                    onSelectionChange={(selected) => console.log("Selected:", selected)}
                />
            </div>
        </div>
    );
}

export default AllUser