"use client"
import React from 'react'
import Image from 'next/image'
import PersonIcon from '@/components/assets/images/PersonIcon.svg'
import ArrowRightBlueIcon from '@/components/assets/images/ArrowRightBlueIcon.svg'
import IndustryIcon from '@/components/assets/images/IndustryIcon.svg'
import PrivacyIcon from '@/components/assets/images/PrivacyIcon.svg'
import lawIcon from '@/components/assets/images/LawyerIcon.svg'
import IntelectaullIcon from '@/components/assets/images/IntelectaullIcon.svg'
import { useState } from 'react'
function PersonalPage() {
    const [tab, setTab] = useState("personal")
    const scrollToSection = (id) => {
        setTab(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className='mt-8 px-4'>
            <div className='flex items-center whitespace-nowrap overflow-x-auto'>
                <button onClick={() => scrollToSection("personal")} className={`border-b-2 pb-2 px-3 cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-300 ${tab === "personal" ? "text-main border-main" : "text-text-7 border-[#E9EAEB]"}`}>
                    <p>Personal Matters</p>
                    <p className={`text-sm font-medium h-6 w-7.5 border rounded-full flex items-center justify-center transition-colors duration-300 ${tab === "personal" ? "border-main bg-[#ECF6FF] text-main" : "border-[#E9EAEB]"}`}>3</p>
                </button>
                <button onClick={() => scrollToSection("wills")} className={`border-b-2 pb-2 px-3 cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-300 ${tab === "wills" ? "text-main border-main" : "text-text-7 border-[#E9EAEB]"}`}>
                    <p>Wills & Estate Planning</p>
                    <p className={`text-sm font-medium h-6 w-7.5 border rounded-full flex items-center justify-center transition-colors duration-300 ${tab === "wills" ? "border-main bg-[#ECF6FF] text-main" : "border-[#E9EAEB]"}`}>3</p>
                </button>
                <button onClick={() => scrollToSection("Finance")} className={`border-b-2 pb-2 px-3 cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-300 ${tab === "Finance" ? "text-main border-main" : "text-text-7 border-[#E9EAEB]"}`}>
                    <p>Finance & Transactions</p>
                    <p className={`text-sm font-medium h-6 w-7.5 border rounded-full flex items-center justify-center transition-colors duration-300 ${tab === "Finance" ? "border-main bg-[#ECF6FF] text-main" : "border-[#E9EAEB]"}`}>3</p>
                </button>
                <button onClick={() => scrollToSection("Intellectual")} className={`border-b-2 pb-2 px-3 cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-300 ${tab === "Intellectual" ? "text-main border-main" : "text-text-7 border-[#E9EAEB]"}`}>
                    <p>Intellectual Property & Privacy</p>
                    <p className={`text-sm font-medium h-6 w-7.5 border rounded-full flex items-center justify-center transition-colors duration-300 ${tab === "Intellectual" ? "border-main bg-[#ECF6FF] text-main" : "border-[#E9EAEB]"}`}>3</p>
                </button>
                <button onClick={() => scrollToSection("Legal")} className={`border-b-2 pb-2 px-3 cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-300 ${tab === "Legal" ? "text-main border-main" : "text-text-7 border-[#E9EAEB]"}`}>
                    <p>Legal Support</p>
                    <p className={`text-sm font-medium h-6 w-7.5 border rounded-full flex items-center justify-center transition-colors duration-300 ${tab === "Legal" ? "border-main bg-[#ECF6FF] text-main" : "border-[#E9EAEB]"}`}>3</p>
                </button>
            </div>
            <div id="personal" className='mt-8 pt-4 scroll-mt-24'>
                <div className='bg-main rounded-lg p-2.5 inline-flex items-center justify-center'>
                    <Image src={PersonIcon} alt="PersonIcon" width={60} height={60} />
                </div>
                <h1 className='text-lg md:text-xl lg:text-[30px] font-semi-bold text-text-1 mt-4'>
                    Personal Matters
                </h1>
                <p className='text-sm md:text-base lg:text-xl font-normal text-text-5 mt-6'>
                    Manage your everyday legal needs with ready-to-use documents for family, relationships, and personal affairs. From childcare consent to separation agreements, DocNet helps you handle important life decisions with confidence and legal peace of mind.
                </p>
                <div className='mt-6 flex flex-wrap gap-6'>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Child Travel Consent</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Authorise a minor to travel with another adult or guardian.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Separation Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Set clear terms when ending a personal relationship.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Child Medical Consent</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Give permission for medical care when you're not present.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div id="wills" className='mt-8 pt-4 scroll-mt-24'>
                <div className='bg-main rounded-lg p-2.5 inline-flex items-center justify-center'>
                    <Image src={IndustryIcon} alt="IndustryIcon" width={60} height={60} />
                </div>
                <h1 className='text-lg md:text-xl lg:text-[30px] font-semi-bold text-text-1 mt-4'>
                    Wills & Estate Planning
                </h1>
                <p className='text-sm md:text-base lg:text-xl font-normal text-text-5 mt-6'>
                    Protect your assets and loved ones with legally valid Wills and Powers of Attorny. Whether you need
                    a general or Islamic Will, you can plan your estate and final wishes securely, ensuring everything is handled
                    according to your values.
                </p>
                <div className='mt-6 flex flex-wrap gap-6'>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Last Will and Testament (General)</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Outline how your estate should be distributed after death.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Islamic Will</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Create a Shariah-compliant Will that aligns with your faith.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Power of Attorney</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Appoint someone to make decisions on your behalf.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Living Will</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Specify your medical and end-of-life preferences.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Revocable Living Trut</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Manage your estate while keeping flexibility and control.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Codicil</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Make amendments to your existing Will.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Funeral Instructions</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Express your wishes regarding your final arrangements.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div id="Intellectual" className='mt-8 pt-4 scroll-mt-24'>
                <div className='bg-main rounded-lg p-2.5 inline-flex items-center justify-center'>
                    <Image src={IntelectaullIcon} alt="IntelectaullIcon" width={60} height={60} />
                </div>
                <h1 className='text-lg md:text-xl lg:text-[30px] font-semi-bold text-text-1 mt-4'>
                    Intellectual Property & Privacy
                </h1>
                <p className='text-sm md:text-base lg:text-xl font-normal text-text-5 mt-6'>
                    Protect your ideas, content, and personal data with legal templates designed for creators and business
                    owners. Use these documents to safeguard ownership, define usage rights, and stay compliant with privacy
                    regulations.
                </p>
                <div className='mt-6 flex max-[700px]:flex-col flex-wrap gap-6'>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Privacy policy / Notice</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Inform users how their data is collected and used.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Website Terms & Conditions</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Define site usage rules and liability limits.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Copyright Infringement Notice</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Formally report unauthorised use of your work.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Software Licence</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Grant legal usage rights to your digital product.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>IP Assignment Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Transfer ownership of intellectual property safely.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Generative Al Policy</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Define responsible Al and content use within your organisation.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div id="Legal" className='mt-8 pt-4 scroll-mt-24'>
                <div className='bg-main rounded-lg p-2.5 inline-flex items-center justify-center'>
                    <Image src={lawIcon} alt="lawIcon" width={60} height={60} />
                </div>
                <h1 className='text-lg md:text-xl lg:text-[30px] font-semi-bold text-text-1 mt-4'>
                    Legal Support
                </h1>
                <p className='text-sm md:text-base lg:text-xl font-normal text-text-5 mt-6'>
                    Handle disputes and legal issues professionally with pre-drafted letters and forms. These templates
                    help you communicate your position clearly while keeping your rights protected and your process compliant
                    with UK law.
                </p>
                <div className='mt-6 flex max-[700px]:flex-col flex-wrap gap-6'>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Cease and Desist Letter</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Demand someone stop unlawful activity.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Letter of Demand</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Request payment of a debt or obligation.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Complaint Letter</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Formally raise an issue or dissatisfaction with an organisation.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Activity Waiver Form</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Protect yourself from liability during events or activities.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PersonalPage