"use client";
import React, { useState } from "react";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CommonTable from "@/components/common/CommonTable";

import arrowback from "@/components/assets/images/ArrowBack.svg";
import Calendar from "@/components/assets/images/CalendarIcon1.svg";
import search from "@/components/assets/images/SearchIconBlack.svg";
import TableEyeIcon from "@/components/assets/images/TableEyeIcon.svg";
import download from "@/components/assets/images/DownloadIcon.svg";
import StripeIcon from "@/components/assets/images/Stripe.svg";
import VisaIcon from "@/components/assets/images/Visa.svg";
import MastercardIcon from "@/components/assets/images/DabitCard.svg";
import PaypalIcon from "@/components/assets/images/PayPalIcon.svg";
import EditIcon from "@/components/assets/images/EditIconBlueFill.svg";
import copy from "@/components/assets/images/CopyIcon.svg";
import ChangeSubscriptionPlanPopup from "@/components/layout/Modal/ChangeSubscriptionPlanPopup";
import CancelSubscription from "@/components/layout/Modal/CancelSubscription";
import ReactiveSubsciptionPopup from "@/components/layout/Modal/ReactiveSubsciptionPopup";
import UpdatePayemntMethod from "@/components/layout/Modal/UpdatePayemntMethod";
import SuccessPopup from "@/components/layout/Modal/SuccessPopup";
import AddIcon from "@/components/assets/images/AddIcon.svg";
import { useRouter } from "next/navigation";
function page() {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isReactivateModalOpen, setIsReactivateModalOpen] = useState(false);
  const [isUpdatePaymentModalOpen, setIsUpdatePaymentModalOpen] =
    useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState("Active");

  const handlePlanConfirm = (planId) => {
    console.log("Plan selected:", planId);
    setIsPlanModalOpen(false);
  };

  const handleCancelConfirm = () => {
    console.log("Subscription cancelled");
    setSubscriptionStatus("Cancelled");
    setIsCancelModalOpen(false);
  };

  const handleReactivateConfirm = () => {
    console.log("Subscription reactivated");
    setSubscriptionStatus("Active");
    setIsReactivateModalOpen(false);
  };

  const handleUpdatePayment = () => {
    console.log("Payment method updated");
    setIsUpdatePaymentModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  const billingInvoices = [
    {
      id: "INV-2025-0012",
      date: "03/04/2025",
      plan: "Per Document",
      amount: "£18.99",
      method: "visa",
      methodDetail: "Visa •••• 2456",
      expiry: "Expiry 06/2025",
      status: "Cancelled",
    },
    {
      id: "INV-2025-0012",
      date: "03/04/2025",
      plan: "Monthly",
      amount: "£18.99",
      method: "mastercard",
      methodDetail: "Mastercard •••• 2456",
      expiry: "Expiry 06/2025",
      status: "Active",
    },
    {
      id: "INV-2025-0012",
      date: "03/04/2025",
      plan: "Annually",
      amount: "£18.99",
      method: "visa",
      methodDetail: "Visa ending in •••• 2456",
      expiry: "Expiry 06/2025",
      status: "Cancelled",
    },
    {
      id: "INV-2025-0012",
      date: "03/04/2025",
      plan: "Per Document",
      amount: "£18.99",
      method: "mastercard",
      methodDetail: "Mastercard ending in 5678",
      expiry: "Expiry 06/2025",
      status: "Active",
    },
    {
      id: "INV-2025-0012",
      date: "03/04/2025",
      plan: "Monthly",
      amount: "£18.99",
      method: "stripe",
      methodDetail: "Stripe•••• 2458",
      email: "billing@untitledui.com",
      status: "Cancelled",
    },
    {
      id: "INV-2025-0012",
      date: "03/04/2025",
      plan: "Annually",
      amount: "£18.99",
      method: "visa",
      methodDetail: "Visa •••• 2456",
      expiry: "Expiry 06/2025",
      status: "Active",
    },
    {
      id: "INV-2025-0012",
      date: "03/04/2025",
      plan: "Per Document",
      amount: "£18.99",
      method: "paypal",
      methodDetail: "PayPal •••• 2456",
      email: "alina@untitledui.com",
      status: "Cancelled",
    },
    {
      id: "INV-2025-0012",
      date: "03/04/2025",
      plan: "Monthly",
      amount: "£18.99",
      method: "visa",
      methodDetail: "Visa •••• 2456",
      expiry: "Expiry 06/2025",
      status: "Active",
    },
  ];

  const paymentMethods = [
    {
      type: "stripe",
      icon: StripeIcon,
      detail: "4855 **** **** ****",
      expiry: "04/24",
      name: "Vako Shvili",
    },
    {
      type: "mastercard",
      icon: MastercardIcon,
      detail: "4855 **** **** ****",
      expiry: "04/24",
      name: "Vako Shvili",
    },
  ];

  const columns = [
    {
      header: "Invoice #",
      accessor: "id",
      sortable: true,
      render: (row) => (
        <span className="text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-text-4">
          {row.id}
        </span>
      ),
    },
    {
      header: "Date",
      accessor: "date",
      sortable: true,
      render: (row) => (
        <span className="text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-text-4">
          {row.date}
        </span>
      ),
    },
    {
      header: "Plan",
      accessor: "plan",
      sortable: true,
      render: (row) => (
        <span className="text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-text-4">
          {row.plan}
        </span>
      ),
    },
    {
      header: "Amount",
      accessor: "amount",
      sortable: true,
      render: (row) => (
        <div className="flex items-center justify-between gap-2 min-w-30 text-sm font-normal text-text-1">
          <span>{row.amount}</span>
          <span className="flex items-center gap-1 text-[10px] text-text-4 px-1.25 py-0.5 rounded-lg border border-black/16">
            <div className="w-1 h-1 d rounded-full bg-[#17B26A] text-xs font-medium"></div>
            Paid
          </span>
        </div>
      ),
    },

    {
      header: "Payment Method",
      accessor: "methodDetail",
      render: (row) => {
        let icon = VisaIcon;
        if (row.method === "stripe") icon = StripeIcon;
        if (row.method === "mastercard") icon = MastercardIcon;
        if (row.method === "paypal") icon = PaypalIcon;

        return (
          <div className="flex items-center gap-3 text-[14px] font-medium text-text-4">
            <Image src={icon} alt={row.method} width={46} height={32} />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-text-1">
                {row.methodDetail}
              </span>
              <span className="text-sm text-text-5">
                {row.expiry || row.email}
              </span>
            </div>
          </div>
        );
      },
    },
    {
      header: "Status",
      accessor: "status",
      render: (row) => (
        <div
          className={`w-[100px] py-1.5 rounded-full text-[12px] font-bold text-center text-white ${
            row.status === "Active" ? "bg-[#10B981]" : "bg-[#F04438]"
          }`}
        >
          {row.status}
        </div>
      ),
    },
    {
      header: "Action",
      accessor: "action",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer border border-[#EAECF0]">
            <Image src={TableEyeIcon} alt="view" width={20} height={20} />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer border border-[#EAECF0]">
            <Image src={download} alt="download" width={20} height={20} />
          </button>
        </div>
      ),
    },
  ];

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="flex items-center gap-2 border border-black/16 rounded-lg p-3 cursor-pointer whitespace-nowrap w-full"
      onClick={onClick}
      ref={ref}
    >
      <Image src={Calendar} alt="calendar" width={20} height={20} />
      <span className="text-[#667085] text-sm font-medium">{value}</span>
    </button>
  ));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1240px] mx-auto">
        <UserHeader />
      </div>

      <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-5 md:pb-10 bg-cover bg-center">
        <h1 className="text-text-1 text-center text-2xl md:text-4xl lg:text-6xl font-semibold">
          Billing History
        </h1>
        <p className="text-text-5 mt-6 text-center text-base lg:text-xl">
          example_1235@gmail.com
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto max-[1200px]:px-4 py-8  border-b border-black/16 md:pb-16 pb-8 lg:pb-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            >
              <Image src={arrowback} alt="back" width={24} height={24} />
            </button>
            <h2 className="text-xl font-bold text-[#101828]">
              Billing History
            </h2>
          </div>
        </div>
        <div className="border border-black/16 p-4 rounded-xl">
          <div className="flex max-md:flex-col justify-between md:items-center gap-4">
            <div>
              <h2 className="font-semibold text-black">Billing History</h2>
              <p className="text-black text-[10px] font-medium">
                Next Billing Date: 28 Nov 2025 Cancel Subscription
              </p>
            </div>
            <button
              onClick={() =>
                subscriptionStatus === "Active"
                  ? setIsCancelModalOpen(true)
                  : setIsReactivateModalOpen(true)
              }
              className="bg-main cursor-pointer text-white px-4 py-2.25 rounded-lg font-semibold hover:bg-main/85 transition-colors whitespace-nowrap"
            >
              {subscriptionStatus === "Active"
                ? "Cancel Subscription"
                : "Reactivate Subscription"}
            </button>
          </div>
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-4 mb-4 md:mb-6 mt-5.5">
            {/* Current Plan Summary Card */}

            <div className="border border-black/16 rounded-lg flex flex-col">
              <div className="flex items-center justify-between bg-main rounded-t-lg px-4 py-2.25">
                <h3 className="font-semibold text-sm text-white">
                  Current Plan Summary
                </h3>
                <button
                  onClick={() => setIsPlanModalOpen(true)}
                  className="text-main bg-white px-1 py-1 cursor-pointer text-sm rounded-lg font-semibold"
                >
                  Upgrade Plan
                </button>
              </div>
              <div className="py-4 px-2.5 flex flex-col justify-between flex-1">
                <div className="flex justify-between gap-2 mb-4 mt-3">
                  <div>
                    <p className="text-[8px] font-medium text-black uppercase mb-1">
                      Current Plan
                    </p>
                    <p className="text-sm font-semibold text-black">
                      Current Plan
                    </p>
                  </div>
                  <div>
                    <p className="text-[8px] font-medium text-black uppercase mb-1">
                      Renewal Date
                    </p>
                    <p className="text-sm font-semibold text-black">
                      20/02/2025
                    </p>
                  </div>
                  <div>
                    <p className="text-[8px] font-medium text-black uppercase mb-1">
                      Billing Cycle
                    </p>
                    <p className="text-sm font-semibold text-black">Monthly</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-medium text-black uppercase mb-1">
                      Plan Cost
                    </p>
                    <p className="text-sm font-semibold text-black">£29</p>
                  </div>
                </div>
                <div>
                  <div className="mb-2.5">
                    <p className="text-[8px] text-black font-medium uppercase">
                      Usage
                    </p>
                    <p className="text-[8px] text-black font-medium">
                      4350 out of 5k monthly active users
                    </p>
                  </div>
                  <div className="w-full bg-[#EAECF0] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#00264D] h-full w-[80%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Update Payment Method Card */}
            <div className="border border-black/16 rounded-xl flex flex-col">
              <div className="flex items-center justify-between bg-main rounded-t-lg px-4 py-3.25">
                <h3 className="font-semibold text-sm text-white">
                  Update Payment Method
                </h3>
              </div>
              <div className="space-y-2.5 py-4.75 px-4 flex-1">
                {paymentMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border border-[#EAECF0] rounded-lg px-4 py-2.25"
                  >
                    <div className="flex items-center gap-4">
                      <div className="">
                        <Image
                          src={method.icon}
                          alt={method.type}
                          width={46}
                          height={32}
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-[#2A2A33]">
                            {method.detail}
                          </span>
                          <span className="text-sm text-[#2A2A33]">
                            {method.expiry}
                          </span>
                          <span className="text-sm text-[#2A2A33]">
                            {method.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsUpdatePaymentModalOpen(true)}
                      className="p-1 cursor-pointer hover:bg-gray-50 rounded transition-colors text-[#667085]"
                    >
                      <Image src={EditIcon} alt="edit" width={24} height={24} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="relative grow">
              <input
                type="text"
                placeholder="Search..."
                className="w-full text-black pl-4 pr-10 py-2.5 border border-black/16 rounded-lg outline-none"
              />
              <Image
                src={search}
                alt="search"
                width={20}
                height={20}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            </div>
            <div className="max-md:w-full">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<CustomInput />}
                wrapperClassName="max-md:w-full"
              />
            </div>
            <button
              onClick={() => router.push("/billing-history/invoice-receipt")}
              className="p-2.5 cursor-pointer inline-block self-end border border-black/16 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Image
                src={copy}
                alt="print"
                width={24}
                height={24}
                className="min-w-6 min-h-6"
              />
            </button>
          </div>

          {/* Table */}
          <div className="">
            <CommonTable
              data={billingInvoices}
              columns={columns}
              selectable={false}
            />
          </div>
        </div>
      </div>

      <Footer />
      <ChangeSubscriptionPlanPopup
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        onConfirm={handlePlanConfirm}
      />
      <CancelSubscription
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        onConfirm={handleCancelConfirm}
      />
      <ReactiveSubsciptionPopup
        isOpen={isReactivateModalOpen}
        onClose={() => setIsReactivateModalOpen(false)}
        onConfirm={handleReactivateConfirm}
      />
      <UpdatePayemntMethod
        isOpen={isUpdatePaymentModalOpen}
        onClose={() => setIsUpdatePaymentModalOpen(false)}
        onUpdate={handleUpdatePayment}
      />
      <SuccessPopup
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        heading="Card Updated Successfully"
        description="Your payment details have been securely updated and set as default."
      />
    </div>
  );
}

export default page;
