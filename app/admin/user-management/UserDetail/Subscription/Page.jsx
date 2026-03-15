import React from 'react'
import Image from 'next/image'
import copyIcon from '@/components/assets/images/CopyIcon.svg'
import searchIcon from '@/components/assets/images/SearchIconGray.svg'
import CommonTable from '@/components/common/CommonTable'
import visaIcon from '@/components/assets/images/Visa.svg'
import stripeIcon from '@/components/assets/images/Stripe.svg'
import dabitCardIcon from '@/components/assets/images/DabitCard.svg'
import calenderIcon from '@/components/assets/images/CalendarIcon.svg'
import { useRef } from 'react'

function Page() {

    const dateInputRef = useRef(null)

    const columns = [
        {
            header: "Date",
            accessor: "date",
            sortable: true,
            render: (row) => <span className="text-[#404040] font-medium text-sm">{row.date}</span>
        },
        {
            header: "Expiry Date",
            accessor: "expiryDate",
            sortable: true,
            render: (row) => (
                <div className='flex flex-col gap-1 w-24'>
                    <span className="text-[#404040] font-medium text-sm">{row.expiryDate}</span>
                    <div className="h-1.5 w-full bg-[#E4E7EC] rounded-full overflow-hidden">
                        <div className="h-full bg-[#00359E] rounded-full" style={{ width: row.progress || '60%' }}></div>
                    </div>
                </div>
            )
        },
        {
            header: "Plan",
            accessor: "plan",
            sortable: true,
            render: (row) => (
                <div className='flex items-center justify-between gap-3'>
                    <span className="font-medium text-[#404040] text-sm w-28">{row.plan}</span>
                    <div className='items-center border border-black/16 shadow rounded-md px-2 py-0.5 inline-flex gap-1.5'>
                        <div className={`w-1.5 h-1.5 rounded-full ${row.planAction === 'Upgrade' ? 'bg-[#17B26A]' : 'bg-[#F04438]'}`}></div>
                        <span className={`text-xs font-medium ${row.planAction === 'Upgrade' ? 'text-[#414651]' : 'text-[#344054]'}`}>{row.planAction}</span>
                    </div>
                </div>
            )
        },
        {
            header: "Amount",
            accessor: "amount",
            sortable: true,
            render: (row) => (
                <div className='flex items-center gap-3'>
                    <span className="text-[#1A1D1F] text-sm">{row.amount}</span>
                    <div className='items-center border border-black/16 shadow rounded-md px-2 py-0.5 inline-flex gap-1.5'>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#17B26A]"></div>
                        <span className="text-xs font-medium text-[#414651]">Paid</span>
                    </div>
                </div>
            )
        },
        {
            header: "Payment Method",
            accessor: "paymentMethod",
            sortable: true,
            render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="">
                        <Image src={row.cardIcon} alt="card" width={46} height={32} className="w-11.5 h-8" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#181D27] font-medium text-sm">{row.cardTitle}</span>
                        <span className="text-[#535862] text-sm">Expiry {row.cardExpiry}</span>
                    </div>
                </div>
            )
        },
        {
            header: "Status",
            accessor: "status",
            sortable: true,
            render: (row) => (
                <span className={`px-3 py-1 w-24 inline-block text-center rounded-full text-sm font-medium text-white ${row.status === 'Active' ? 'bg-[#17B26A]' : 'bg-[#D92D20]'}`}>
                    {row.status}
                </span>
            )
        }
    ]

    const data = [
        {
            id: 1,
            date: "03/04/2025",
            expiryDate: "17/01/2025",
            progress: "100%",
            plan: "Single Document",
            planAction: "Upgrade",
            amount: "£18.99",
            cardIcon: visaIcon, // Imported image
            cardTitle: "Visa **** 2456",
            cardExpiry: "06/2025",
            status: "Expired"
        },
        {
            id: 2,
            date: "03/04/2025",
            expiryDate: "17/01/2025",
            progress: "80%",
            plan: "Monthly",
            planAction: "Downgrade",
            amount: "£18.99",
            cardIcon: dabitCardIcon, // Used as Mastercard
            cardTitle: "Mastercard **** 2456",
            cardExpiry: "06/2025",
            status: "Active"
        },
        {
            id: 3,
            date: "03/04/2025",
            expiryDate: "17/01/2025",
            progress: "100%",
            plan: "Annually",
            planAction: "Upgrade",
            amount: "£18.99",
            cardIcon: visaIcon,
            cardTitle: "Visa ending in **** 2456",
            cardExpiry: "06/2025",
            status: "Expired"
        },
        {
            id: 4,
            date: "03/04/2025",
            expiryDate: "17/01/2025",
            progress: "60%",
            plan: "Single Document",
            planAction: "Upgrade",
            amount: "£18.99",
            cardIcon: dabitCardIcon, // Used as Mastercard
            cardTitle: "Mastercard ending in 5678",
            cardExpiry: "06/2025",
            status: "Active"
        },
        {
            id: 5,
            date: "03/04/2025",
            expiryDate: "17/01/2025",
            progress: "100%",
            plan: "Single Document",
            planAction: "Upgrade",
            amount: "£18.99",
            cardIcon: stripeIcon,
            cardTitle: "Stripe **** 2456",
            cardExpiry: "billing@untitled.com", // Keeping structure but data varies
            status: "Expired"
        },
        {
            id: 6,
            date: "03/04/2025",
            expiryDate: "17/01/2025",
            progress: "80%",
            plan: "Monthly",
            planAction: "Downgrade",
            amount: "£18.99",
            cardIcon: visaIcon,
            cardTitle: "Visa **** 2456",
            cardExpiry: "06/2025",
            status: "Active"
        },
        {
            id: 7,
            date: "03/04/2025",
            expiryDate: "17/01/2025",
            progress: "100%",
            plan: "Annually",
            planAction: "Upgrade",
            amount: "£18.99",
            cardIcon: dabitCardIcon, // Use DabitCard for Paypal as generic
            cardTitle: "PayPal **** 2456",
            cardExpiry: "alina@untitled.com",
            status: "Expired"
        },
        {
            id: 8,
            date: "03/04/2025",
            expiryDate: "17/01/2025",
            progress: "80%",
            plan: "Single Document",
            planAction: "Upgrade",
            amount: "£18.99",
            cardIcon: visaIcon,
            cardTitle: "Visa **** 2456",
            cardExpiry: "06/2025",
            status: "Active"
        }
    ]

    return (
        <>
            <h1 className='text-lg md:text-xl font-bold'>Subscription</h1>
            <div className="mb-2.5 mt-6">
                <p className="text-base mb-2.5 text-[#33383F]">Current Plan: <span className="">Single Document</span></p>
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
                        <div className="border flex items-center gap-1 border-black/16 text-[#414651] text-xs px-2 py-0.5 rounded-md font-medium shadow"><div className="w-1.5 inline-block h-1.5 rounded-full bg-[#17B26A]"></div> Paid</div>
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
            <div className='flex md:flex-row flex-col md:items-center gap-2 mb-4'>
                <div className="w-full relative">
                    <input
                        type="text"
                        placeholder=" Search"
                        className="w-full focus:border-black border text-base border-black/16 outline-0 p-4 py-3 pr-12 rounded-lg"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-4">
                        <Image src={searchIcon} alt="media" width={20} height={20} />
                    </div>
                </div>
                 <div className="relative flex items-center">
                                    <div
                                        className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer"
                                        onClick={() => dateInputRef.current?.showPicker()}
                                    >
                                        <Image src={calenderIcon} alt="calendar" width={20} height={20} />
                                    </div>
                                    <input
                                        type="date"
                                        ref={dateInputRef}
                                        name=""
                                        id=""
                                        className='w-full text-[#404040] focus:border-black border text-base border-black/16 outline-0 py-2.75 pt-3.25 pr-0 pl-14 rounded-lg [&::-webkit-calendar-picker-indicator]:hidden text-center'
                                        style={{ colorScheme: 'light' }}
                                    />
                                </div>
                <div className="group inline-block self-end border border-[#D5D7DA] p-3 rounded-lg cursor-pointer hover:bg-[var(--color-main)] hover:text-white transition-colors">
                    <Image src={copyIcon} alt="media" width={24} height={24} className="min-w-6 group-hover:brightness-0 group-hover:invert transition-colors" />
                </div>
            </div>
            <CommonTable columns={columns} data={data} />
        </>
    )
}
export default Page
