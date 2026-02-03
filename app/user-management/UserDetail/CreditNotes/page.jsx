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
            header: "Credit Note #",
            accessor: "creditNoteId",
            sortable: true,
            render: (row) => <span className="text-[#16151C] font-medium text-sm">{row.creditNoteId}</span>
        },
        {
            header: "Amount",
            accessor: "amount",
            sortable: true,
            render: (row) => (
                <div className='flex items-center gap-10 justify-between'>
                    <span className="text-[#1A1D1F] text-sm">{row.amount}</span>
                    <div className='items-center border border-[#D5D7DA] bg-white shadow-xs rounded-md px-2 py-0.5 inline-flex gap-1.5'>
                        <div className={`w-1.5 h-1.5 rounded-full ${row.paymentStatus === 'Paid' ? 'bg-[#17B26A]' : 'bg-[#D92D20]'}`}></div>
                        <span className="text-xs font-medium text-[#414651]">{row.paymentStatus}</span>
                    </div>
                </div>
            )
        },
        {
            header: "Reason",
            accessor: "reason",
            sortable: true,
            render: (row) => <span className="text-[#404040] font-medium text-sm">{row.reason}</span>
        },
        {
            header: "Issue Date",
            accessor: "issueDate",
            sortable: true,
            render: (row) => <span className="text-[#404040] text-sm font-medium">{row.issueDate}</span>
        },
        {
            header: "Linked Invoice",
            accessor: "linkedInvoice",
            sortable: true,
            render: (row) => <span className="text-[#404040] text-sm font-medium">{row.linkedInvoice}</span>
        },
        {
            header: "Status",
            accessor: "status",
            sortable: true,
            render: (row) => {
                const statusStyles = {
                    'Draft': 'bg-[#A0A0A0] text-white border-[#A0A0A0] w-37.5',
                    'Pending Approval': 'bg-[#FACC15] text-white border-[#FACC15] w-37.5',
                    'Sent': 'bg-[#3B82F6] text-white border-[#3B82F6] w-37.5',
                    'Outstanding': 'bg-[#F97316] text-white border-[#F97316] w-37.5',
                    'Partially Applied': 'bg-[#14B8A6] text-white border-[#14B8A6] w-37.5',
                    'Redeemed': 'bg-[#34C759] text-white border-[#34C759] w-37.5',
                    'Refunded': 'bg-[#06B6D4] text-white border-[#06B6D4] w-37.5',
                    'Cancelled': 'bg-[#6B7280] text-white border-[#6B7280] w-37.5',
                    'Expired': 'bg-[#FF0000] text-white border-[#FF0000] w-37.5',
                    'On Hold': 'bg-[#6366F1] text-white border-[#6366F1] w-37.5'
                };

                if (row.status === 'Outstanding') statusStyles['Outstanding'] = 'bg-[#FF692E] text-white border-[#FF692E] w-37.5';
                if (row.status === 'Partially Applied') statusStyles['Partially Applied'] = 'bg-[#00A9A4] text-white border-[#00A9A4] w-37.5';

                return (
                    <span className={`px-4 py-1.5 inline-block text-center rounded-full text-xs font-medium border ${statusStyles[row.status] || 'bg-gray-500 text-white'}`} style={{ minWidth: '120px' }}>
                        {row.status}
                    </span>
                );
            }
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
            creditNoteId: "INV-2025-01",
            amount: "£18.99",
            paymentStatus: "Paid",
            reason: "Refund for duplicate charge",
            issueDate: "11/02/2025",
            linkedInvoice: "INV-2025-02",
            status: "Draft"
        },
        {
            id: 2,
            creditNoteId: "INV-2025-01",
            amount: "£18.99",
            paymentStatus: "Unpaid",
            reason: "Service downtime credit",
            issueDate: "11/02/2025",
            linkedInvoice: "INV-2025-02",
            status: "Pending Approval"
        },
        {
            id: 3,
            creditNoteId: "INV-2025-01",
            amount: "£18.99",
            paymentStatus: "Unpaid",
            reason: "Refund for duplicate charge",
            issueDate: "11/02/2025",
            linkedInvoice: "INV-2025-02",
            status: "Sent"
        },
        {
            id: 4,
            creditNoteId: "INV-2025-01",
            amount: "£18.99",
            paymentStatus: "Paid",
            reason: "Service downtime credit",
            issueDate: "11/02/2025",
            linkedInvoice: "INV-2025-02",
            status: "Outstanding"
        },
        {
            id: 5,
            creditNoteId: "INV-2025-01",
            amount: "£18.99",
            paymentStatus: "Unpaid",
            reason: "Refund for duplicate charge",
            issueDate: "11/02/2025",
            linkedInvoice: "INV-2025-02",
            status: "Partially Applied"
        },
        {
            id: 6,
            creditNoteId: "INV-2025-01",
            amount: "£18.99",
            paymentStatus: "Paid",
            reason: "Service downtime credit",
            issueDate: "11/02/2025",
            linkedInvoice: "INV-2025-02",
            status: "Redeemed"
        },
        {
            id: 7,
            creditNoteId: "INV-2025-01",
            amount: "£18.99",
            paymentStatus: "Unpaid",
            reason: "Refund for duplicate charge",
            issueDate: "11/02/2025",
            linkedInvoice: "INV-2025-02",
            status: "Refunded"
        },
        {
            id: 8,
            creditNoteId: "INV-2025-01",
            amount: "£18.99",
            paymentStatus: "Paid",
            reason: "Service downtime credit",
            issueDate: "11/02/2025",
            linkedInvoice: "INV-2025-02",
            status: "Cancelled"
        },
        {
            id: 9,
            creditNoteId: "INV-2025-01",
            amount: "£18.99",
            paymentStatus: "Unpaid",
            reason: "Refund for duplicate charge",
            issueDate: "11/02/2025",
            linkedInvoice: "INV-2025-02",
            status: "Expired"
        },
        {
            id: 10,
            creditNoteId: "INV-2025-01",
            amount: "£18.99",
            paymentStatus: "Paid",
            reason: "Service downtime credit",
            issueDate: "11/02/2025",
            linkedInvoice: "INV-2025-02",
            status: "On Hold"
        },
    ]

    return (
        <>
            <h1 className='text-lg md:text-xl font-bold mb-7.5'>Credit Note</h1>

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
