"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/common/Header'
import CommonDropdown from '@/components/common/Commondropdown1'
import OverviewUsericon from '@/components/assets/images/OverviewUsericon.svg'
import OverviewDocumenticon from '@/components/assets/images/OverviewDocumenticon.svg'
import OverviewSupporticon from '@/components/assets/images/OverviewSupporticon.svg'
import OverviewSubscriptionicon from '@/components/assets/images/OverviewSubscriptionicon.svg'
import RevenueIcon from '@/components/assets/images/RevenueIcon.svg'
import ArrowUpGreen from '@/components/assets/images/ArrowUpGreen.svg'
import ArrowDownRed from '@/components/assets/images/ArrowDownRed.svg'
import graph from '@/components/assets/images/gRAPH.svg'
import Chart from '@/components/assets/images/Chart.svg'
import map from '@/components/assets/images/Map.svg'
import INFlag from '@/components/assets/images/INFlag.svg'
import UkFlag from '@/components/assets/images/UkFlag.svg'
import AUFlag from '@/components/assets/images/AUFlag.svg'
import CAFlag from '@/components/assets/images/CAFlag.svg'
import UsFlag from '@/components/assets/images/USFlag.svg'
function Dashboard() {
    const options = [
        { label: "This Month", value: "thisMonth" },
        { label: "This Year", value: "thisYear" },
    ]
    const [value, setValue] = useState("This Month")

    const onChange = (selected) => {
        setValue(selected)
    }

    const growthOptions = [
        { label: "User Growth", value: "userGrowth" },
        { label: "Document Growth", value: "documentGrowth" },
        { label: "Support Growth", value: "supportGrowth" }
    ]
    const [growth, setGrowth] = useState("User Growth")
    const [growthbutton, setGrowthbutton] = useState("Yearly")
    const onGrowthChange = (selected) => {
        setGrowth(selected)
    }

    const netrevenueOptions = [
        { label: "Net Revenue", value: "netRevenue" },
        { label: "Gross Revenue", value: "grossRevenue" },
        { label: "Gross Margin", value: "grossMargin" }
    ]
    const [netrevenue, setNetrevenue] = useState("Net Revenue")
    const [netrevenuebutton, setNetrevenuebutton] = useState("Yearly")
    const onNetrevenueChange = (selected) => {
        setNetrevenue(selected)
    }
    const subscriptionRevenueOptions = [
        { label: "Subscription Revenue", value: "subscriptionRevenue" },
        { label: "Gross Revenue", value: "grossRevenue" },
        { label: "Gross Margin", value: "grossMargin" }
    ]
    const [subscriptionRevenue, setSubscriptionRevenue] = useState("Subscription Revenue")
    const [subscriptionRevenuebutton, setSubscriptionRevenuebutton] = useState("Yearly")
    const onSubscriptionRevenueChange = (selected) => {
        setSubscriptionRevenue(selected)
    }
    const yearlyOptions = [
        { label: "2026", value: "2026" },
        { label: "2025", value: "2025" },
        { label: "2024", value: "2024" },
        { label: "2023", value: "2023" },
        { label: "2022", value: "2022" }
    ]
    const [yearly, setYearly] = useState("2026")
    const onYearlyChange = (selected) => {
        setYearly(selected)
    }

    const countryData = [
        { name: "United States", flag: UsFlag, percentage: 50 },
        { name: "India", flag: INFlag, percentage: 30 },
        { name: "United Kingdom", flag: UkFlag, percentage: 20 },
        { name: "Australia", flag: AUFlag, percentage: 10 },
        { name: "Canada", flag: CAFlag, percentage: 10 }
    ]

    return (
        <div className='mt-16 md:mt-22 pb-3 md:pb-6 text-black'>
            <Header title="Website Builder" />
            <main className='lg:max-w-[calc-(100%-300px)] lg:ml-80.5 m-3 mb-0 md:m-6 md:mb-0 bg-white p-3 md:p-6 rounded-md border border-[#E6E6E6]'>
                <div>
                    <h1 className='text-xl font-bold'>Welcome Back, Javaid Wattoo</h1>
                    <p className='text-base text-[#7C8DB5]'>Here is the information about all your Super Admin</p>
                </div>
                <div className='mt-6 flex items-center justify-between'>
                    <div>
                        <h1 className='text-lg font-semibold'>Overview</h1>
                    </div>
                    <div>
                        <CommonDropdown options={options} value={value} onChange={onChange} placeholder="Select Range" className="w-33 flex gap-2" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6'>
                    <div className='rounded-lg p-4 border border-black/16'>
                        <div className='inline-flex items-center gap-2 bg-[var(--color-main)] rounded-full p-2'>
                            <div className='bg-[var(--color-main)] rounded-full p-2'>
                                <Image src={OverviewUsericon} alt="media" width={24} height={24} />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xs font-semibold'>Total Users</h3>
                            <h1 className='text-2xl font-semibold mt-1'>5,420</h1>
                            <div className='inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1'>
                                <Image src={ArrowUpGreen} alt="media" width={16} height={16} />
                                <p className='text-xs text-[#83BF6E]'>12 <span className='text-black/50'>This Month</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg p-4 border border-black/16'>
                        <div className='inline-flex items-center gap-2 bg-[#9A7200] rounded-full p-2'>
                            <div className='bg-[#B38B00] rounded-full p-2'>
                                <Image src={OverviewDocumenticon} alt="media" width={24} height={24} />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xs font-semibold'>Document Created</h3>
                            <h1 className='text-2xl font-semibold mt-1'>3,145</h1>
                            <div className='inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1'>
                                <Image src={ArrowUpGreen} alt="media" width={16} height={16} />
                                <p className='text-xs text-[#83BF6E]'>12 <span className='text-black/50'>Growth This Month</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg p-4 border border-black/16'>
                        <div className='inline-flex items-center gap-2 bg-[var(--color-main)] rounded-full p-2'>
                            <div className='bg-[var(--color-main)] rounded-full p-2'>
                                <Image src={OverviewSupporticon} alt="media" width={24} height={24} />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xs font-semibold'>Open Support Tickets</h3>
                            <h1 className='text-2xl font-semibold mt-1'>14</h1>
                            <div className='inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1'>
                                <Image src={ArrowDownRed} alt="media" width={16} height={16} />
                                <p className='text-xs text-[#FF383C]'>12 <span className='text-black/50'>This Month</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg p-4 border border-black/16'>
                        <div className='inline-flex items-center gap-2 bg-[#B71C1C] rounded-full p-2'>
                            <div className='bg-[#DC3545] rounded-full p-2'>
                                <Image src={OverviewSubscriptionicon} alt="media" width={24} height={24} />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xs font-semibold'>Open Support Tickets</h3>
                            <h1 className='text-2xl font-semibold mt-1'>14</h1>
                            <div className='inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1'>
                                <Image src={ArrowDownRed} alt="media" width={16} height={16} />
                                <p className='text-xs text-[#FF383C]'>37.8% <span className='text-black/50'>This Month</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg p-4 border border-black/16'>
                        <div className='inline-flex items-center gap-2 bg-[#836CFF] rounded-full p-2'>
                            <div className='bg-[#9285FF] rounded-full p-2'>
                                <Image src={OverviewSubscriptionicon} alt="media" width={24} height={24} />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xs font-semibold'>Active Subscriptions</h3>
                            <h1 className='text-2xl font-semibold mt-1'>812</h1>
                            <div className='inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1'>
                                <Image src={ArrowUpGreen} alt="media" width={16} height={16} />
                                <p className='text-xs text-[#83BF6E]'>12 <span className='text-black/50'> Growth This Month</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg p-4 border border-black/16'>
                        <div className='inline-flex items-center gap-2 bg-[#095D83] rounded-full p-2'>
                            <div className='bg-[#058AC4] rounded-full p-2'>
                                <Image src={RevenueIcon} alt="media" width={24} height={24} />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xs font-semibold'>Total Revenue</h3>
                            <h1 className='text-2xl font-semibold mt-1'>£4,560</h1>
                            <div className='inline-flex items-center mt-1 gap-1 bg-[#FCFCFC] rounded-sm p-1'>
                                <Image src={ArrowDownRed} alt="media" width={16} height={16} />
                                <p className='text-xs text-[#FF383C]'>37.8% <span className='text-black/50'>This Month</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#ECF6FF] rounded-lg p-4 border border-[#ECF6FF] mt-6'>
                    <div>
                        <p className='text-xl font-semibold'>Quick Actions:</p>
                    </div>
                    <div className='mt-4 flex flex-wrap gap-2 whitespace-nowrap'>
                        <button className='text-sm max-md:w-full flex items-center gap-2 text-white bg-[var(--color-main)] hover:bg-[var(--color-main)]/90 transition-all duration-200 rounded-lg px-3.5 py-2.5 cursor-pointer'><p className='text-lg leading-none -mt-0.5'>+</p> <p>Create Subscription Package</p></button>
                        <button className='text-sm max-md:w-full flex items-center gap-2 text-white bg-[var(--color-main)] hover:bg-[var(--color-main)]/90 transition-all duration-200 rounded-lg px-3.5 py-2.5 cursor-pointer'><p className='text-lg leading-none -mt-0.5'>+</p> <p>Add Document</p></button>
                        <button className='text-sm max-md:w-full flex items-center gap-2 text-white bg-[var(--color-main)] hover:bg-[var(--color-main)]/90 transition-all duration-200 rounded-lg px-3.5 py-2.5 cursor-pointer'> <p>View Reports</p></button>
                        <button className='text-sm max-md:w-full flex items-center gap-2 text-white bg-[var(--color-main)] hover:bg-[var(--color-main)]/90 transition-all duration-200 rounded-lg px-3.5 py-2.5 cursor-pointer'> <p>Manage Users</p></button>

                    </div>
                </div>
                <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='border border-black/16 rounded-lg p-4 bg-[#FAFAFA]'>
                        <div className='flex items-center gap-2 justify-between flex-wrap'>
                            <CommonDropdown options={growthOptions} value={growth} onChange={setGrowth} placeholder="User Growth" className="!border-none !bg-transparent !p-0 !w-fit" dropdownClassName="!w-fit" />
                            <div className='overflow-x-auto scrollbar-thin'>
                                <div className='flex items-center w-fit border border-[#D5D7DA] rounded-[11px] whitespace-nowrap'>
                                    <button
                                        onClick={() => setGrowthbutton("Yearly")}
                                        className={`${growthbutton === "Yearly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Yearly</button>
                                    <button
                                        onClick={() => setGrowthbutton("Quarterly")}
                                        className={`${growthbutton === "Quarterly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Quarterly</button>
                                    <button
                                        onClick={() => setGrowthbutton("Monthly")}
                                        className={`${growthbutton === "Monthly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Monthly</button>
                                    <button
                                        onClick={() => setGrowthbutton("Weekly")}
                                        className={`${growthbutton === "Weekly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Weekly</button>
                                    <button
                                        onClick={() => setGrowthbutton("24 hours")}
                                        className={`${growthbutton === "24 hours" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>24 hours</button>
                                </div>
                            </div>
                            <div className='flex justify-between md:items-start items-center gap-2'>
                                <div>
                                    <h1 className='sm:text-xl lg:text-[30px] font-semibold'>Monthly new registrations.</h1>
                                </div>
                                <div className='inline-flex items-center gap-2 mt-2 max-md:mt-0 rounded-sm shadow ml-3 p-1 py-0.5 border border-[#D5D7DA]'>
                                    <div><Image src={ArrowUpGreen} alt="media" width={12} height={12} /></div>
                                    <div><p className='text-[#414651] text-sm font-medium'> 2.4%</p></div>
                                </div>
                            </div>
                            {growthbutton === "Yearly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {growthbutton === "Quarterly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {growthbutton === "Monthly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {growthbutton === "Weekly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {growthbutton === "24 hours" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}

                        </div>

                    </div>
                    <div className='border border-black/16 rounded-lg p-4 bg-[#FAFAFA]'>
                        <div className=''>
                            <div className='flex items-center gap-2 justify-between flex-wrap'>
                                <CommonDropdown options={netrevenueOptions} value={netrevenue} onChange={setNetrevenue} placeholder="Net Revenue" className="!border-none !bg-transparent !p-0 !w-fit" dropdownClassName="!w-fit" />
                                <div className='overflow-x-auto scrollbar-thin'>
                                    <div className='flex items-center w-fit border border-[#D5D7DA] rounded-[11px] whitespace-nowrap'>
                                        <button
                                            onClick={() => setNetrevenuebutton("Yearly")}
                                            className={`${netrevenuebutton === "Yearly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Yearly</button>
                                        <button
                                            onClick={() => setNetrevenuebutton("Quarterly")}
                                            className={`${netrevenuebutton === "Quarterly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Quarterly</button>
                                        <button
                                            onClick={() => setNetrevenuebutton("Monthly")}
                                            className={`${netrevenuebutton === "Monthly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Monthly</button>
                                        <button
                                            onClick={() => setNetrevenuebutton("Weekly")}
                                            className={`${netrevenuebutton === "Weekly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Weekly</button>
                                        <button
                                            onClick={() => setNetrevenuebutton("24 hours")}
                                            className={`${netrevenuebutton === "24 hours" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>24 hours</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex max-md:items-center items-start gap-2'>
                                <div>
                                    <h1 className='sm:text-xl lg:text-[30px] font-semibold'>£7,804.16</h1>
                                </div>
                                <div className='inline-flex items-center gap-2 md:mt-2 rounded-sm shadow ml-3 p-1 py-0.5 border border-[#D5D7DA]'>
                                    <div><Image src={ArrowUpGreen} alt="media" width={12} height={12} /></div>
                                    <div><p className='text-[#414651] text-sm font-medium'> 2.4%</p></div>
                                </div>
                            </div>
                            {netrevenuebutton === "Yearly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {netrevenuebutton === "Quarterly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {netrevenuebutton === "Monthly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {netrevenuebutton === "Weekly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {netrevenuebutton === "24 hours" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                        </div>
                    </div>
                    <div className='border border-black/16 rounded-lg p-4 bg-[#FAFAFA]'>
                        <div className='flex items-center gap-2 justify-between flex-wrap'>
                            <CommonDropdown options={subscriptionRevenueOptions} value={subscriptionRevenue} onChange={setSubscriptionRevenue} placeholder="Subscription Revenue" className="!border-none !bg-transparent !p-0 !w-fit" dropdownClassName="!w-fit" />
                            <div className='overflow-x-auto scrollbar-thin'>
                                <div className='flex items-center w-fit border border-[#D5D7DA] rounded-[11px] whitespace-nowrap'>
                                    <button
                                        onClick={() => setSubscriptionRevenuebutton("Yearly")}
                                        className={`${subscriptionRevenuebutton === "Yearly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Yearly</button>
                                    <button
                                        onClick={() => setSubscriptionRevenuebutton("Quarterly")}
                                        className={`${subscriptionRevenuebutton === "Quarterly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Quarterly</button>
                                    <button
                                        onClick={() => setSubscriptionRevenuebutton("Monthly")}
                                        className={`${subscriptionRevenuebutton === "Monthly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Monthly</button>
                                    <button
                                        onClick={() => setSubscriptionRevenuebutton("Weekly")}
                                        className={`${subscriptionRevenuebutton === "Weekly" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>Weekly</button>
                                    <button
                                        onClick={() => setSubscriptionRevenuebutton("24 hours")}
                                        className={`${subscriptionRevenuebutton === "24 hours" ? "bg-white text-[#414651] border-[#D5D7DA]" : "text-[#717680] border-transparent"} rounded-[9px] p-2 font-bold border text-sm cursor-pointer`}>24 hours</button>
                                </div>
                            </div>
                            <div className='flex justify-between items-center md:items-start gap-2'>
                                <div>
                                    <h1 className='sm:text-xl lg:text-[30px] font-semibold'>£7,804.16</h1>
                                </div>
                                <div className='inline-flex items-center gap-2 md:mt-2 rounded-sm shadow ml-3 p-1 py-0.5 border border-[#D5D7DA]'>
                                    <div><Image src={ArrowUpGreen} alt="media" width={12} height={12} /></div>
                                    <div><p className='text-[#414651] text-sm font-medium'> 2.4%</p></div>
                                </div>
                            </div>
                            {subscriptionRevenuebutton === "Yearly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {subscriptionRevenuebutton === "Quarterly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {subscriptionRevenuebutton === "Monthly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {subscriptionRevenuebutton === "Weekly" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                            {subscriptionRevenuebutton === "24 hours" && (
                                <div><Image src={graph} alt="media" width={24} height={24} className='w-full h-full' /></div>
                            )}
                        </div>
                    </div>
                    <div className='border border-black/16 rounded-lg p-4 bg-[#FAFAFA]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='md:text-lg font-semibold'>Document Trends</h1>
                            <CommonDropdown options={yearlyOptions} value={yearly} onChange={setYearly} placeholder="Yearly" className="" />
                        </div>
                        <div className='mt-6.5'>
                            <Image src={Chart} alt="media" width={24} height={24} className='w-full h-full' />
                        </div>
                        <div className='flex items-center justify-center mt-6.5 gap-3'>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 bg-(--color-main) rounded-full'></div>
                                <p className='text-sm text-[#535862] leading-0'>Personal</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 bg-[#587C9F] rounded-full'></div>
                                <p className='text-sm text-[#535862] leading-0'>Corporate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border mt-6 border-black/16 rounded-lg p-4 bg-[#FAFAFA]'>
                    <div className='flex items-center mb-5 pb-5 border-b border-black/16 justify-between'>
                        <h1 className='md:text-lg font-semibold text-[#181D27]'>Active users right now</h1>
                        <button className='text-[#414651] hover:bg-zinc-100 text-sm font-semibold border border-[#D5D7DA] rounded-md p-2 cursor-pointer'>
                            Real-time report
                        </button>
                    </div>
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
                        <div>
                            <Image src={map} alt="media" width={24} height={24} className='w-full h-full' />
                        </div>
                        <div>
                            <h1 className='text-lg text-[#181D27] font-semibold text-xl md:text-[36px]'>10.8k</h1>
                            <div className='flex flex-col gap-4 mt-6'>
                                {countryData.map((item, index) => (
                                    <div key={index} className='flex gap-3 w-full'>
                                        <div className='shrink-0 pt-0.5'>
                                            <Image src={item.flag} alt={item.name} width={24} height={24} className='rounded-full object-cover' />
                                        </div>
                                        <div className='flex flex-col gap-2 w-full'>
                                            <p className='text-sm font-medium text-[#414651]'>{item.name}</p>
                                            <div className='flex items-center gap-3 w-full'>
                                                <div className='flex-1 h-2 bg-[#E4E7EC] rounded-full overflow-hidden'>
                                                    <div
                                                        className='h-full bg-[var(--color-main)] rounded-full'
                                                        style={{ width: `${item.percentage}%` }}
                                                    ></div>
                                                </div>
                                                <p className='text-sm font-medium text-[#414651] min-w-[30px] text-right'>{item.percentage}%</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard