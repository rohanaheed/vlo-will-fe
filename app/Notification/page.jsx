"use client"
import React from 'react'
import Header from '../../components/common/Header'
import ArrowBack from '../../components/assets/images/ArrowBack.svg'
import Image from 'next/image'
import { useState } from 'react'
import NotificationTab from '../../app/Notification/NotificationTab/Page'
import HeadupTab from '../../app/Notification/HeadupTab/Page'
import { useRouter } from 'next/navigation'
function Page() {
  const router = useRouter()
  const [IsTab, SetIsTab] = useState("notification")
  return (
    <div className='mt-16 md:mt-22 text-white'>
      <Header title="Customers"></Header>
      <main className='lg:max-w-[calc-(100%-300px)] lg:ml-79 m-3 md:m-6 bg-white p-6 rounded-md border border-[#E6E6E6]'>
        <div className='flex items-center gap-4'>
          <button 
          onClick={() => router.back()}
           className='cursor-pointer p-2 rounded-full hover:bg-zinc-100 transition-all duration-300'>
            <Image src={ArrowBack} alt='media' width={24} height={24} />
          </button>
          <p className='text-sm font-bold text-black'>Notification & Heads-up  </p>
        </div>
        <div className='border-b border-[var(--color-main)] mt-4'>
          <button onClick={() => SetIsTab("notification")}
            className={`${IsTab === "notification" ? "bg-[var(--color-main)]" : " text-[#828282]"} cursor-pointer font-medium p-2.5 rounded-t-[10px]`}>
            Notifications
          </button>
          <button onClick={() => SetIsTab("headup")} className={`${IsTab === "headup" ? "bg-[var(--color-main)]" : "text-[#828282]"} cursor-pointer font-medium p-2.5 rounded-t-[10px]`}>
            Heads-up
          </button>
        </div>
        {IsTab === "notification" && <NotificationTab />}
        {IsTab === "headup" && <HeadupTab />}
      </main>
    </div>
  )
}

export default Page
