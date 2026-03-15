import React, { useRef } from 'react'
import Image from 'next/image'
import copyIcon from '@/components/assets/images/CopyIcon.svg'
import searchIcon from '@/components/assets/images/SearchIconGray.svg'
import CommonTable from '@/components/common/CommonTable'
import visaIcon from '@/components/assets/images/Visa.svg'
import stripeIcon from '@/components/assets/images/Stripe.svg'
import dabitCardIcon from '@/components/assets/images/DabitCard.svg' // Used as generic/mastercard placeholder
import eyeIcon from '@/components/assets/images/TableEyeIcon.svg'
import downloadIcon from '@/components/assets/images/DownloadIcon.svg'
import calenderIcon from '@/components/assets/images/CalendarIcon.svg'
function Page() {
    const dateInputRef = useRef(null);

    const columns = [
        {
            header: "Invoice #",
            accessor: "invoiceId",
            sortable: true,
            render: (row) => <span className="text-[#16151C] font-medium text-sm">{row.invoiceId}</span>
        },
        {
            header: "Amount",
            accessor: "amount",
            sortable: true,
            render: (row) => (
                <div className='flex items-center gap-10 justify-between'>
                    <span className="text-[#1A1D1F] text-sm">{row.amount}</span>
                    <div className='items-center border border-[#D5D7DA] bg-white shadow-xs rounded-md px-2 py-0.5 inline-flex gap-1.5'>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#17B26A]"></div>
                        <span className="text-xs font-medium text-[#414651]">Paid</span>
                    </div>
                </div>
            )
        },
        {
            header: "Plan",
            accessor: "plan",
            sortable: true,
            render: (row) => <span className="text-[#404040] font-medium text-sm">{row.plan}</span>
        },
        {
            header: "Date",
            accessor: "date",
            sortable: true,
            render: (row) => <span className="text-[#404040] text-sm font-medium">{row.date}</span>
        },
        {
            header: "Payment Method",
            accessor: "paymentMethod",
            sortable: true,
            render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="border border-[#D5D7DA] rounded-lg px-[5px] py-[3px]">
                        <Image src={row.cardIcon} alt="card" width={32} height={20} className="w-8 h-5 object-contain" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#181D27] font-medium text-sm">{row.cardTitle}</span>
                        <span className="text-[#535862] text-sm">{row.cardExpiry}</span>
                    </div>
                </div>
            )
        },
        {
            header: "Status",
            accessor: "status",
            sortable: true,
            render: (row) => (
                <span className={`px-5 py-1.5 inline-block text-center rounded-full text-xs font-medium border ${row.status === 'Active'
                    ? 'bg-[#34C759] text-white border-[#34C759]'
                    : 'bg-[#EA0000] text-white border-[#EA0000]'
                    }`} style={{ minWidth: '100px' }}>
                    {row.status}
                </span>
            )
        },
        {
            header: "Action",
            accessor: "action",
            render: (row) => (
                <div className="flex items-center gap-3">
                    <button className="p-2 cursor-pointer border border-[#D5D7DA] rounded-lg hover:bg-gray-50">
                        <Image src={eyeIcon} alt="view" width={20} height={20} />
                    </button>
                    <button className="p-2 cursor-pointer border border-[#D5D7DA] rounded-lg hover:bg-gray-50">
                        <Image src={downloadIcon} alt="download" width={20} height={20} />
                    </button>
                </div>
            )
        }
    ]

    const data = [
        {
            id: 1,
            invoiceId: "INV-2025-0012",
            amount: "£18.99",
            plan: "Per Document",
            date: "03/04/2025",
            cardIcon: visaIcon,
            cardTitle: "Visa **** 2456",
            cardExpiry: "Expiry 06/2025",
            status: "Cancelled"
        },
        {
            id: 2,
            invoiceId: "INV-2025-0012",
            amount: "£18.99",
            plan: "Monthly",
            date: "03/04/2025",
            cardIcon: dabitCardIcon, // MasterCard
            cardTitle: "Mastercard **** 2456",
            cardExpiry: "Expiry 06/2025",
            status: "Active"
        },
        {
            id: 3,
            invoiceId: "INV-2025-0012",
            amount: "£18.99",
            plan: "Annually",
            date: "03/04/2025",
            cardIcon: visaIcon,
            cardTitle: "Visa ending in **** 2456",
            cardExpiry: "Expiry 06/2025",
            status: "Cancelled"
        },
        {
            id: 4,
            invoiceId: "INV-2025-0012",
            amount: "£18.99",
            plan: "Per Document",
            date: "03/04/2025",
            cardIcon: dabitCardIcon, // MasterCard
            cardTitle: "Mastercard ending in 5678",
            cardExpiry: "Expiry 06/2025",
            status: "Active"
        },
        {
            id: 5,
            invoiceId: "INV-2025-0012",
            amount: "£18.99",
            plan: "Monthly",
            date: "03/04/2025",
            cardIcon: stripeIcon,
            cardTitle: "Stripe **** 2456",
            cardExpiry: "billing@untitledui.com",
            status: "Cancelled"
        },
        {
            id: 6,
            invoiceId: "INV-2025-0012",
            amount: "£18.99",
            plan: "Annually",
            date: "03/04/2025",
            cardIcon: visaIcon,
            cardTitle: "Visa **** 2456",
            cardExpiry: "Expiry 06/2025",
            status: "Active"
        },
        {
            id: 7,
            invoiceId: "INV-2025-0012",
            amount: "£18.99",
            plan: "Per Document",
            date: "03/04/2025",
            cardIcon: dabitCardIcon, // PayPal placeholder
            cardTitle: "PayPal **** 2456",
            cardExpiry: "alina@untitledui.com",
            status: "Cancelled"
        },
        {
            id: 8,
            invoiceId: "INV-2025-0012",
            amount: "£18.99",
            plan: "Monthly",
            date: "03/04/2025",
            cardIcon: visaIcon, // Using Visa as placeholder or repeat as per list
            cardTitle: "Visa **** 2456",
            cardExpiry: "Expiry 06/2025",
            status: "Active"
        },
        {
            id: 9,
            invoiceId: "INV-2025-0012",
            amount: "£18.99",
            plan: "Annually",
            date: "03/04/2025",
            cardIcon: visaIcon,
            cardTitle: "Visa **** 2456",
            cardExpiry: "Expiry 06/2025",
            status: "Cancelled"
        },
        {
            id: 10,
            invoiceId: "INV-2025-0012",
            amount: "£18.99",
            plan: "Per Document",
            date: "03/04/2025",
            cardIcon: stripeIcon,
            cardTitle: "Stripe **** 2456",
            cardExpiry: "billing@untitledui.com",
            status: "Active"
        },
    ]

    return (
        <>
            <h1 className='text-lg md:text-xl font-bold mb-7.5'>Invoice</h1>

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
