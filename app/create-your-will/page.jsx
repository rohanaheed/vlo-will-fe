"use client"
import React from 'react'
import UserHeader from '@/components/common/UserHeader'
import Footer from '@/components/common/Footer'
import FAQ from '@/components/common/FAQ'
import faqBg from '@/components/assets/images/FAQ.svg'
import user1 from '@/components/assets/images/User1.svg'
import user2 from '@/components/assets/images/User2.svg'
import user3 from '@/components/assets/images/User3.svg'
import Image from 'next/image'
import { useState } from 'react'

function Page() {
    const [tab, setTab] = useState("overview")
    const questions = [
        {
            id: 1,
            question: "Can I make my own Will online?",
            answer: "Yes, Using this form, you can create a legally valid Will by answering a few simple questions. Once generated, review and sign it according to the instructions provided."
        },
        {
            id: 2,
            question: "Do I need a solicitor to make a Will?",
            answer: "Not necessarily. This document is designed for self-completion, though you may wish to seek legal advice if your estate is complex or involves international assets."
        },
        {
            id: 3,
            question: "How often should I update my Will?",
            answer: "You should review your Will after major life events such as marriage, divorce, buying property, or the birth of a child."
        },
        {
            id: 4,
            question: "What makes a Will legally valid?",
            answer: "Your Will must be signed and dated in the presence of two independent witnesses who also sign it in your presence."
        },
        {
            id: 5,
            question: "Can I include digital assets in my Will?",
            answer: "Yes. You can list online accounts, cryptocurrency, or digital files as part of your estate."
        },
    ];

    return (
        <div className=''>
            <div className='max-w-[1200px] mx-auto'>
                <UserHeader />
            </div>
            <div className=''>
                <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-20 md:pt-30 pb-18 md:pb-24 bg-cover bg-center">
                    <div className='max-w-[1200px] mx-auto'>
                        <h1 className='text-text-1 text-center text-2xl md:text-[45px] lg:text-[60px] font-semibold'>Create Your Will</h1>
                        <p className='text-text-5 text-sm md:text-base lg:text-xl mt-6'>
                           Make a legally valid Will in minutes. Protect your loved ones and ensure your wishes are carried out with
ease and confidence.
                        </p>
                        <div className='flex items-center justify-between gap-4 mt-6 flex-wrap'>
                          <p className='text-text-5 text-sm md:text-base lg:text-xl'>
                           Takes less than 10 minutes. Create, customise, and download instantly.
                        </p>  
                        <button className='max-md:w-full self-end text-sm md:text-base lg:text-xl cursor-pointer font-semibold bg-[#0B2C4F] cursor pointer text-white p-3 mb-2 rounded-lg font-semibold hover:opacity-90 transition-opacity'>
                                    Start Document <span className='text-lg md:text-xl lg:text-2xl'>(£29)</span>
                                </button>

                        </div>
                        <div className='px-4'>
                    <div className='flex p-0.75 bg-[#FAFAFA] rounded-xl border border-black/16 mt-8 backdrop-blur-lg'>
                        <button className={`${tab === "overview" ? "bg-main text-white" : "bg-white text-text-1"} p-2.5 rounded-xl w-full cursor-pointer transition-all duration-300`} onClick={() => setTab("overview")}>Overview</button>
                        <button className={`${tab === "Preview" ? "bg-main text-white" : "bg-white text-text-1"} p-2.5 rounded-xl w-full cursor-pointer transition-all duration-300`} onClick={() => setTab("Preview")}>Preview</button>
                        <button className={`${tab === "FAQ’s" ? "bg-main text-white" : "bg-white text-text-1"} p-2.5 rounded-xl w-full cursor-pointer transition-all duration-300`} onClick={() => setTab("FAQ’s")}>FAQ’s</button>

                    </div>
                </div>
                    </div>
                </div>
                <div>
                    <div className='px-4 md:px-6 lg:px-8 max-w-[1200px] mx-auto'>

                    
                    <h1 className='text-text-1 text-xl md:text-2xl lg:text-[36px] font-semibold'>
                        Frequently asked questions
                    </h1>
                    <p className='text-text-5 text-sm md:text-base lg:text-xl mt-5'>
                        Find quick answers to common questions about creating, updating, and managing your legal documents with DocNet.
                    </p>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-8 md:mt-16 mt-8'>
                        <FAQ value={questions} />
                        <Image src={faqBg} alt="faq" width={100} height={100} className='w-full h-full object-fill max-md:row-start-1' />

                    </div>
                    </div>
                    <div className=' px-4 my-16 md:my-24 md:mt-16 max-w-[1200px] mx-auto'>
                    <div className='bg-[#FAFAFA] rounded-2xl py-8 p-4'>

                        <div className='max-w-[768px] mx-auto'>
                            <div className='flex items-center justify-center relative mt-10'>
                                <div className='border-2 border-white rounded-full inline-block absolute left-1/2 -translate-x-[calc(50%+30px)]'>
                                    <Image src={user1} alt="media" width={48} height={48} className='' />
                                </div>
                                <div className='border-2 border-white rounded-full inline-block absolute left-1/2 -translate-x-1/2 z-10 -translate-y-2'>
                                    <Image src={user2} alt="media" width={56} height={56} className='' />
                                </div>
                                <div className='border-2 border-white rounded-full inline-block absolute left-1/2 -translate-x-[calc(50%-30px)]'>
                                    <Image src={user3} alt="media" width={48} height={48} className='' />
                                </div>
                            </div>
                            <h2 className='text-center mt-14 text-text-1 text-base md:text-xl font-semibold'>
                                Still have questions?
                            </h2>
                            <p className='text-center text-text-5 text-sm md:text-lg mt-2'>
                                Didn't find what you were looking for? Chat with our support team — we're here to help.
                            </p>
                            <div className='flex justify-center items-center mt-4'>
                                <button className='max-md:w-full cursor-pointer bg-[#0B2C4F] cursor pointer text-white p-3 mb-2 rounded-lg font-semibold hover:opacity-90 transition-opacity'>
                                    Get in touch
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                    <div className='bg-main text-center pt-18 md:pt-24 pb-40 w-full'>
                            <div className='max-w-md mx-auto'>
                                <h1 className='lg:text-[36px] md:text-2xl text-xl font-semibold text-white mt-5'>DocNet by the Numbers</h1>
                                <p className='mt-5 lg:text-xl md:text-lg text-base font-normal text-[#F3F3F3] mt-5'>
                                    Real results from users who trust <span className='font-semibold'>DocNet Ltd</span> to create, customise and manage legal documents quickly
                                    and securely.
                                </p>
                            </div>
                            
                        </div>
                        <div className=' max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-4 bg lg:p-14 md:p-10 p-6 translate-y-[-100px]'>
                    <div className='bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center'>
                        <h1 className='text-3xl font-bold text-main'>25,000+</h1>
                        <h2 className='text-lg mt-3 font-semibold text-text-1'>Legal documents created</h2>
                        <p className='text-base font-normal text-text-5 mt-2'>
                            Documents generated across wills, tenancy, business and more.
                        </p>
                    </div>
                    <div className='bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center'>
                        <h1 className='text-3xl font-bold text-main'>12,300+</h1>
                        <h2 className='text-lg mt-3 font-semibold text-text-1'>Registered users</h2>
                        <p className='text-base font-normal text-text-5 mt-2'>
                            Active accounts who've saved drafts or completed documents.
                        </p>
                    </div>
                    <div className='bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center'>
                        <h1 className='text-3xl font-bold text-main'>4.8/5</h1>
                        <h2 className='text-lg mt-3 font-semibold text-text-1'>Average customer rating</h2>
                        <p className='text-base font-normal text-text-5 mt-2'>
                            Based on user reviews for ease, accuracy and support.
                        </p>
                    </div>

                </div>

                </div>
            </div>
            <div className='max-w-[1200px] mx-auto bg-white'>
                <Footer />
            </div>
        </div>
    )
}

export default Page