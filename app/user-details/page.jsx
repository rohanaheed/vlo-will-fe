"use client"
import React from 'react'
import UserHeader from '@/components/common/UserHeader'
import Footer from '@/components/common/Footer'
import FAQ from '@/components/common/FAQ'
import faqBg from '@/components/assets/images/FAQ.svg'
import user1 from '@/components/assets/images/User1.svg'
import user2 from '@/components/assets/images/User2.svg'
import user3 from '@/components/assets/images/User3.svg'
import StampPaper from '@/components/assets/images/StampPaper1.svg'
import Image from 'next/image'
import ProgressBar from '@/components/common/ProgressBar'
import ExpandIcon from '@/components/assets/images/ExpandIcon.svg'
import { useState } from 'react'
import Testatot from './forms/Testatot'
import Executors from './forms/Executors'
import Spouse from './forms/Spouse'
import Beneficiaries from './forms/Beneficiaries'
import Assets from './forms/Assets'
import Refresh from '@/components/assets/images/RefreshIcon.svg'
import UpDownIcon from '@/components/assets/images/UpDownIcon.svg'
import RotateIcon from '@/components/assets/images/RotateIcon.svg'
import FillArrowLeftIcon from '@/components/assets/images/FillArrowLeftIcon.svg'
import Liabilities from './forms/Liabilities'
import Gifts from './forms/Gifts'
import Residual from './forms/Residual'
import Commondropdown from '@/components/common/Commondropdown1.jsx'
import Funeral from './forms/Funeral'
import Witnesses from './forms/Witnesses'
import Review from './forms/Review'


function Page() {
    const [tab, setTab] = useState("overview")
    const [tab1, settab1] = useState("testator")
    const [completedSteps, setCompletedSteps] = useState([])
    const [willLocation, setWillLocation] = useState("England")

    // Steps mapping
    const steps = [
        "testator", "executor", "spouse", "beneficiaries", "assets",
        "liabilities", "gifts", "residual", "funeral", "witnesses", "review"
    ]

    const getCurrentStepIndex = () => steps.indexOf(tab1)

    const handleSave = () => {
        const currentIndex = getCurrentStepIndex()
        if (currentIndex < steps.length - 1) {
            setCompletedSteps(prev => [...new Set([...prev, currentIndex])])
            settab1(steps[currentIndex + 1])
        }
    }

    const handleSkip = () => {
        const currentIndex = getCurrentStepIndex()
        if (currentIndex < steps.length - 1) {
            settab1(steps[currentIndex + 1])
        }
    }

    const handleBack = () => {
        const currentIndex = getCurrentStepIndex()
        if (currentIndex > 0) {
            settab1(steps[currentIndex - 1])
        }
    }

    const handleStepClick = (stepIndex) => {
        settab1(steps[stepIndex])
    }
    const [zoom, setZoom] = useState(100)
    const [rotation, setRotation] = useState(0)
    const [page, setPage] = useState(1)
    const totalPages = 2
    const [isFullScreen, setIsFullScreen] = useState(false)

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen)
    }

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 10, 200))
    }

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev - 10, 50))
    }

    const handleRotate = () => {
        setRotation(prev => (prev + 90) % 360)
    }

    const handleNextPage = () => {
        setPage(prev => Math.min(prev + 1, totalPages))
    }

    const handlePrevPage = () => {
        setPage(prev => Math.max(prev - 1, 1))
    }

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
                <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-20 md:pt-30 pb-5 md:pb-10 bg-cover bg-center">
                    <div className='max-w-[1200px] mx-auto'>
                        <h1 className='text-text-1 text-center text-2xl md:text-[45px] lg:text-[60px] font-semibold'>Create Your Will</h1>
                        <p className='text-text-5 text-sm md:text-base lg:text-xl mt-6'>
                            Make a legally valid Will in minutes. Protect your loved ones and ensure your wishes are carried out with
                            ease and confidence.
                        </p>
                        <div className='flex items-center justify-between gap-4 mt-6 flex-wrap w-full'>
                            <ProgressBar
                                currentStep={getCurrentStepIndex()}
                                completedSteps={completedSteps}
                                onStepClick={handleStepClick}
                            />
                        </div>

                    </div>
                </div>
                <div className={`${tab1 === "review" ? "!grid-cols-1" : ""} max-[1200px]:px-4 mx-auto grid md:grid-cols-2 grid-cols-1 gap-9 max-w-[1200px] mx-auto items-start mb-8 md:mb-24 p-4'`}>
                    {tab1 === "testator" &&
                        <Testatot onSave={handleSave} onSkip={handleSkip} onBack={handleBack} />}
                    {tab1 === "executor" &&
                        <Executors onSave={handleSave} onSkip={handleSkip} onBack={handleBack} />}
                    {tab1 === "spouse" &&
                        <Spouse onSave={handleSave} onSkip={handleSkip} onBack={handleBack} />}
                    {tab1 === "beneficiaries" &&
                        <Beneficiaries onSave={handleSave} onSkip={handleSkip} onBack={handleBack} />}
                    {tab1 === "assets" &&
                        <Assets onSave={handleSave} onSkip={handleSkip} onBack={handleBack} />}
                    {tab1 === "liabilities" &&
                        <Liabilities onSave={handleSave} onSkip={handleSkip} onBack={handleBack} />}
                    {tab1 === "gifts" &&
                        <Gifts onSave={handleSave} onSkip={handleSkip} onBack={handleBack} />}
                    {tab1 === "residual" &&
                        <Residual onSave={handleSave} onSkip={handleSkip} onBack={handleBack} />}
                    {tab1 === "funeral" &&
                        <Funeral onSave={handleSave} onSkip={handleSkip} onBack={handleBack} />}
                    {tab1 === "witnesses" &&
                        <Witnesses onSave={handleSave} onSkip={handleSkip} onBack={handleBack} />}
                    {tab1 === "review" &&
                        <Review onSave={handleSave} onSkip={handleSkip} onBack={handleBack} />}
                    <div className='bg-[#fafafa] border border-black/16 rounded-2xl'>
                        <div className='flex items-center justify-between bg-white  p-4 rounded-t-2xl shadow-lg'>
                            <div className="flex items-center  gap-1 cursor-pointer">
                                <p className="text-xs text-black">Update Preview</p>
                                <Image src={Refresh} alt="refresh" width={16} height={16} />
                            </div>
                            <div onClick={toggleFullScreen} className="cursor-pointer">
                                <Image src={ExpandIcon} alt="refresh" width={16} height={16} />
                            </div>
                        </div>
                        <div className="overflow-hidden flex justify-center items-center bg-[#fafafa] transition-all ">
                            <div
                                style={{
                                    transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                                    transition: 'transform 0.3s ease',
                                    transformOrigin: 'center center'
                                }}
                                className="w-full h-full flex items-center justify-center px-4"
                            >
                                <Image src={StampPaper} alt="stamp" width={1000} height={1000} className='w-full h-auto object-contain' />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-b-2xl flex items-center justify-center gap-4 z-10 relative">
                            <div className="flex items-center gap-4">
                                <button onClick={handleZoomOut} className='font-bold text-2xl text-[#535862] hover:text-black cursor-pointer'>-</button>
                                <span className='text-sm text-[#414651] font-semibold w-12 text-center'>{zoom}%</span>
                                <button onClick={handleZoomIn} className='font-bold text-2xl text-[#535862] hover:text-black cursor-pointer'>+</button>
                            </div>
                            <div className='w-[1px] h-6 bg-[#BDBDC7]'></div>
                            <div className="flex items-center gap-4">
                                <Image src={UpDownIcon} alt="resize" width={24} height={24} className='cursor-pointer hover:opacity-80' onClick={() => { setZoom(100); setRotation(0); }} />
                                <Image src={RotateIcon} alt="rotate" width={24} height={24} className='cursor-pointer hover:opacity-80' onClick={handleRotate} />
                            </div>
                            <div className='w-[1px] h-6 bg-[#BDBDC7]'></div>
                            <div className="flex items-center gap-4">
                                <button onClick={handlePrevPage} disabled={page === 1} className={`transition-opacity ${page === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'}`}>
                                    <Image src={FillArrowLeftIcon} alt="prev" width={24} height={24} />
                                </button>
                                <span className='text-sm text-[#414651] font-semibold'>{page} / {totalPages}</span>
                                <button onClick={handleNextPage} disabled={page === totalPages} className={`rotate-180 transition-opacity ${page === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'}`}>
                                    <Image src={FillArrowLeftIcon} alt="next" width={24} height={24} />
                                </button>
                            </div>
                        </div>

                        {/* Full Screen Overlay */}
                        {isFullScreen && (
                            <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4">
                                <div className="absolute top-4 right-4 z-60">
                                    <button onClick={toggleFullScreen} className="text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="w-full h-full flex-1 overflow-auto flex items-center justify-center relative">
                                    <div
                                        style={{
                                            transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                                            transition: 'transform 0.3s ease',
                                            transformOrigin: 'center center'
                                        }}
                                        className="max-w-[90%] max-h-[80vh]"
                                    >
                                        <Image src={StampPaper} alt="stamp" width={800} height={800} className='object-contain w-auto h-auto max-w-full max-h-full' />
                                    </div>
                                </div>
                                {/* Full Screen Toolbar */}
                                <div className="bg-white p-4 rounded-2xl flex items-center gap-6 mt-4 shadow-xl">
                                    <div className="flex items-center gap-4">
                                        <button onClick={handleZoomOut} className='font-bold text-2xl text-[#535862] hover:text-black cursor-pointer'>-</button>
                                        <span className='text-sm text-[#414651] font-semibold w-12 text-center'>{zoom}%</span>
                                        <button onClick={handleZoomIn} className='font-bold text-2xl text-[#535862] hover:text-black cursor-pointer'>+</button>
                                    </div>
                                    <div className='w-[1px] h-6 bg-[#E9EAEB]'></div>
                                    <div className="flex items-center gap-4">
                                        <Image src={UpDownIcon} alt="resize" width={20} height={20} className='cursor-pointer hover:opacity-80' onClick={() => { setZoom(100); setRotation(0); }} />
                                        <Image src={RotateIcon} alt="rotate" width={20} height={20} className='cursor-pointer hover:opacity-80' onClick={handleRotate} />
                                    </div>
                                    <div className='w-[1px] h-6 bg-[#E9EAEB]'></div>
                                    <div className="flex items-center gap-4">
                                        <button onClick={handlePrevPage} disabled={page === 1} className={`transition-opacity ${page === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'}`}>
                                            <Image src={FillArrowLeftIcon} alt="prev" width={24} height={24} />
                                        </button>
                                        <span className='text-sm text-[#414651] font-semibold'>{page} / {totalPages}</span>
                                        <button onClick={handleNextPage} disabled={page === totalPages} className={`rotate-180 transition-opacity ${page === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:opacity-80'}`}>
                                            <Image src={FillArrowLeftIcon} alt="next" width={24} height={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>


                </div>
                {tab1 === "testator" && <div className='md:mb-24 mx-4 mb-8 max-w-[1200px] min-[1200px]:mx-auto bg-[#fafafa] rounded-2xl p-6 mt-8'>
                    <h1 className='text-text-1 text-xl md:text-2xl lg:text-[36px] font-semibold mb-6'>
                        Create your Will
                    </h1>
                    <p className='text-[#414651] text-sm font-medium mb-1.5'>
                        Where will this general be used?
                    </p>
                    <Commondropdown
                        options={["England", "Wales", "Scotland", "Northern Ireland"]}
                        value={willLocation}
                        onChange={(val) => setWillLocation(val)}
                        className="w-full bg-white text-[#414651]"
                    />
                </div>}
                <div className='border-t border-black/16 md:pt-24 pt-8'>
                    <div className='px-4 md:px-6 lg:px-8 max-w-[1200px] mx-auto'>


                        <h1 className='text-text-1 text-xl md:text-2xl lg:text-[36px] font-semibold'>
                            Frequently asked questions
                        </h1>
                        <p className='text-text-5 text-sm md:text-base lg:text-xl mt-5'>
                            Find quick answers to common questions about creating, updating, and managing your legal documents with DocNet.
                        </p>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-8 md:mt-16 mt-8 '>
                            <FAQ value={questions} />
                            <Image src={faqBg} alt="faq" width={100} height={100} className='w-full h-full object-fill max-md:row-start-1' />

                        </div>
                    </div>
                    <div className=' px-4 my-8 md:my-24 md:mt-16 max-w-[1200px] mx-auto'>
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


                </div>
            </div>
            <div className='max-w-[1200px] -mt-20 md:-mt-10 mx-auto bg-white'>
                <Footer />
            </div>
        </div>
    )
}

export default Page