"use client"
import React from 'react'
import Image from 'next/image'
import PersonIcon from '@/components/assets/images/PersonIcon.svg'
import ArrowRightBlueIcon from '@/components/assets/images/ArrowRightBlueIcon.svg'
import IndustryIcon from '@/components/assets/images/IndustryIcon.svg'
import PrivacyIcon from '@/components/assets/images/PrivacyIcon.svg'
import lawIcon from '@/components/assets/images/LawyerIcon.svg'
import BagIcon from '@/components/assets/images/BagIcon.svg'
import RealEstateIcon from '@/components/assets/images/RealEstateIcon.svg'
import EmployessIcon from '@/components/assets/images/EmployessIcon.svg'
import ContrastIcon from '@/components/assets/images/ContrastIcon.svg'
import { useState } from 'react'
function PersonalPage() {
    const [tab, setTab] = useState("business")
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
                <button onClick={() => scrollToSection("business")} className={`border-b-2 pb-2 px-3 cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-300 ${tab === "business" ? "text-main border-main" : "text-text-7 border-[#E9EAEB]"}`}>
                    <p>Business & Corporate</p>
                    <p className={`text-sm font-medium h-6 w-7.5 border rounded-full flex items-center justify-center transition-colors duration-300 ${tab === "business" ? "border-main bg-[#ECF6FF] text-main" : "border-[#E9EAEB]"}`}>3</p>
                </button>
                <button onClick={() => scrollToSection("hr")} className={`border-b-2 pb-2 px-3 cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-300 ${tab === "hr" ? "text-main border-main" : "text-text-7 border-[#E9EAEB]"}`}>
                    <p>Employment & HR</p>
                    <p className={`text-sm font-medium h-6 w-7.5 border rounded-full flex items-center justify-center transition-colors duration-300 ${tab === "hr" ? "border-main bg-[#ECF6FF] text-main" : "border-[#E9EAEB]"}`}>3</p>
                </button>
                <button onClick={() => scrollToSection("contracts")} className={`border-b-2 pb-2 px-3 cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-300 ${tab === "contracts" ? "text-main border-main" : "text-text-7 border-[#E9EAEB]"}`}>
                    <p>Contracts & Agreements (General)</p>
                    <p className={`text-sm font-medium h-6 w-7.5 border rounded-full flex items-center justify-center transition-colors duration-300 ${tab === "contracts" ? "border-main bg-[#ECF6FF] text-main" : "border-[#E9EAEB]"}`}>3</p>
                </button>
                <button onClick={() => scrollToSection("realestate")} className={`border-b-2 pb-2 px-3 cursor-pointer flex items-center gap-2 font-semibold transition-colors duration-300 ${tab === "realestate" ? "text-main border-main" : "text-text-7 border-[#E9EAEB]"}`}>
                    <p>Real Estate & Rental</p>
                    <p className={`text-sm font-medium h-6 w-7.5 border rounded-full flex items-center justify-center transition-colors duration-300 ${tab === "realestate" ? "border-main bg-[#ECF6FF] text-main" : "border-[#E9EAEB]"}`}>3</p>
                </button>
            </div>
            <div id="business" className='mt-8 pt-4 scroll-mt-24'>
                <div className='bg-main rounded-lg p-2.5 inline-flex items-center justify-center'>
                    <Image src={BagIcon} alt="PersonIcon" width={60} height={60} />
                </div>
                <h1 className='text-lg md:text-xl lg:text-[30px] font-semi-bold text-text-1 mt-4'>
                    Business & Corporate
                </h1>
                <p className='text-sm md:text-base lg:text-xl font-normal text-text-5 mt-6'>
                    Launch, manage, or grow your business with legally sound documents. From company formation to
                    shareholder agreements, DocNet helps you protect your operations, partnerships, and assets at every stage
                    of business.
                </p>
                <div className='mt-6 flex flex-wrap gap-6'>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Articles of Association</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Outline company structure and internal rules.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Shareholders Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Define rights and responsibilities of shareholders.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Business Plan</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Present your business strategy and financial goals.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Partnership Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Clarify terms between business partners.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Joint Venture Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Establish collaboration between two entities.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Business Transfer Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Legally transfer business ownership.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Stock Transfer Form</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Record ownership change of company shares.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Board Resolution</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Document key company decisions.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Officer Resignation Letter</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Formalise an officers resignation.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>

                </div>
            </div>
            <div id="hr" className='mt-8 pt-4 scroll-mt-24'>
                <div className='bg-main rounded-lg p-2.5 inline-flex items-center justify-center'>
                    <Image src={EmployessIcon} alt="IndustryIcon" width={60} height={60} />
                </div>
                <h1 className='text-lg md:text-xl lg:text-[30px] font-semi-bold text-text-1 mt-4'>
                    Employment & HR
                </h1>
                <p className='text-sm md:text-base lg:text-xl font-normal text-text-5 mt-6'>
                    Stay compliant and build a fair workplace with HR and employment templates. Use these to manage
                    staff relationships, policies, and responsibilities with clarity and professionalism.
                </p>
                <div className='mt-6 flex flex-wrap gap-6'>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Employment Contract</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Set clear terms for new hires.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Independent Contractor Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Define conditions for freelancers or consultants.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Job Offer</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Officially offer employment to a candidate.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Resignation Letter</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Enable employees to formally end employment.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Employee Handbook</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Enable employees to formally end employment.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Sickness Absence Policy</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Define procedures for employee sick leave.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Disciplinary Policy</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Explain steps for handling misconduct.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 flex-1 shrink-1 basis-[300px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Social Media Policy</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Manage online behaviour linked to the workplace.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div id="contracts" className='mt-8 pt-4 scroll-mt-24'>
                <div className='bg-main rounded-lg p-2.5 inline-flex items-center justify-center'>
                    <Image src={ContrastIcon} alt="ContrastIcon" width={60} height={60} />
                </div>
                <h1 className='text-lg md:text-xl lg:text-[30px] font-semi-bold text-text-1 mt-4'>
                    Contracts & Agreements (General)
                </h1>
                <p className='text-sm md:text-base lg:text-xl font-normal text-text-5 mt-6'>
                    Draft professional contracts that protect your business and client relationships. DocNet’s general agreements cover services, loans, consulting, and agency arrangements — all legally reviewed and easy to customise.
                </p>
                <div className='mt-6 flex max-[700px]:flex-col flex-wrap gap-6'>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Service Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Define service terms between client and provider.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Consulting Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Specify scope and payment for consulting work.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Loan Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Outline repayment details for business funding.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Agency Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Clarify representation or distribution arrangements.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Distribution Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Manage supplier and retailer relationships.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Contract Amendment</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Modify an existing contract legally.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div id="realestate" className='mt-8 pt-4 scroll-mt-24'>
                <div className='bg-main rounded-lg p-2.5 inline-flex items-center justify-center'>
                    <Image src={RealEstateIcon} alt="ContrastIcon" width={60} height={60} />
                </div>
                <h1 className='text-lg md:text-xl lg:text-[30px] font-semi-bold text-text-1 mt-4'>
                    Real Estate & Rental
                </h1>
                <p className='text-sm md:text-base lg:text-xl font-normal text-text-5 mt-6'>
                    Handle residential or commercial property dealings with legally accurate templates. Whether you're a
                    landlord, tenant, or agent, DocNet provides all the documents you need for leases, inspections, and rentals.

                </p>
                <div className='mt-6 flex max-[700px]:flex-col flex-wrap gap-6'>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Residential Tenancy Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Outline terms between landlord and tenant.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Commercial Lease Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Define terms for business property rentals.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Sublet Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Allow tenants to sublet responsibly.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Rental Inspection Report</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Record property condition during tenancy.</p>
                        <button className='flex items-center gap-1.5 mt-5'>
                            <p className='text-sm md:text-base font-semibold text-main'>Learn More</p>
                            <Image src={ArrowRightBlueIcon} alt="ArrowRightBlueIcon" width={20} height={20} />
                        </button>
                    </div>
                    <div className='bg-[#fafafa] p-6 min-[701px]:flex-1 min-[701px]:shrink-1 min-[701px]:basis-[250px]'>
                        <h1 className='text-sm md:text-base lg:text-xl font-semibold text-text-1'>Holiday Rental Agreement</h1>
                        <p className='text-sm md:text-base font-normal text-text-5 mt-2'>Set terms for short-term rentals.</p>
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