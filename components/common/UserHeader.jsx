"use client"
import React, { useState, useRef, useEffect } from 'react'
import logo from '@/components/assets/images/Logo.svg'
import Image from 'next/image'
import chevronDown from '@/components/assets/images/CheveronDownGray.svg'
import searchIcon from '@/components/assets/images/SearchIconGray.svg'
import CommonDropdown from './Commondropdown1'
import usflag from '@/components/assets/images/USFlag.svg'
import inflag from '@/components/assets/images/INFlag.svg'
import ukflag from '@/components/assets/images/UkFlag.svg'
import auflag from '@/components/assets/images/AUFlag.svg'
import canflag from '@/components/assets/images/CAFlag.svg'
import menuIcon from '@/components/assets/images/MenuIcon.svg'
import { useRouter } from 'next/navigation'
function UserHeader() {
    const router = useRouter()
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState({ label: 'ENG', value: 'UK', icon: ukflag });
    const [isOpen, setIsOpen] = useState(false);
    const languageOptions = [
        { label: 'ENG', value: 'UK', icon: ukflag },
        { label: 'ENG', value: 'US', icon: usflag },
        { label: 'IND', value: 'IN', icon: inflag },
        { label: 'CAN', value: 'CA', icon: canflag },
        { label: 'AUS', value: 'AU', icon: auflag },
    ];
    const mobileMenuRef = useRef(null);
    const productRef = useRef(null);
    const servicesRef = useRef(null);
    const resourcesRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
            if (activeDropdown === 'product' && productRef.current && !productRef.current.contains(e.target)) {
                setActiveDropdown(null)
            }
            if (activeDropdown === 'services' && servicesRef.current && !servicesRef.current.contains(e.target)) {
                setActiveDropdown(null)
            }
            if (activeDropdown === 'resources' && resourcesRef.current && !resourcesRef.current.contains(e.target)) {
                setActiveDropdown(null)
            }
        };

        if (isOpen || activeDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, activeDropdown]);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    return (
        <div>
            <main className='py-5 px-2 flex items-center justify-between whitespace-nowrap gap-4'>
                <div className='flex items-center gap-8'>
                    <button className='cursor-pointer'>
                        <Image src={logo} alt="logo" width={100} height={32} />
                    </button>
                    <div className='flex items-center gap-2 max-lg:hidden'>
                        <div className='relative' ref={productRef}>
                            <button
                                type="button"
                                className='flex items-center gap-2 cursor-pointer relative'
                                onClick={() => toggleDropdown('product')}
                            >
                                <p className='text-base font-normal text-black font-semibold text-text-5'>Product</p>
                                <Image src={chevronDown} alt="chevronDown" width={20} height={20} />
                            </button>
                            {activeDropdown === 'product' && (
                                <ul className='text-text-5 bg-black/10 text-white backdrop-blur-lg text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md w-40 z-10'>
                                    <li >
                                        <button
                                            onClick={closeDropdown}
                                            className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer'>Product</button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={closeDropdown}
                                            className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer'>Product</button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={closeDropdown}
                                            className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer'>Product</button>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className='relative' ref={servicesRef}>
                            <button
                                type="button"
                                className='flex items-center gap-2 cursor-pointer relative'
                                onClick={() => toggleDropdown('services')}
                            >
                                <p className='text-base font-normal text-black font-semibold text-text-5'>Services</p>
                                <Image src={chevronDown} alt="chevronDown" width={20} height={20} />
                            </button>
                            {activeDropdown === 'services' && (
                                <ul className='text-text-5 text-white bg-black/10 backdrop-blur-lg text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md w-40 z-10'>
                                    <li >
                                        <button
                                            onClick={closeDropdown}
                                            className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer'>Services</button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={closeDropdown}
                                            className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer'>Services</button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={closeDropdown}
                                            className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer'>Services</button>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className=''>
                            <button
                                type="button"
                                className='flex items-center gap-2 cursor-pointer relative'
                            >
                                <p className='text-base font-normal text-black font-semibold text-text-5'>Pricing</p>
                            </button>
                        </div>
                        <div className='relative' ref={resourcesRef}>
                            <button
                                type="button"
                                className='flex items-center gap-2 cursor-pointer relative'
                                onClick={() => toggleDropdown('resources')}
                            >
                                <p className='text-base font-normal text-black font-semibold text-text-5'>Resources</p>
                                <Image src={chevronDown} alt="chevronDown" width={20} height={20} />
                            </button>
                            {activeDropdown === 'resources' && (
                                <ul className='text-text-5 text-white bg-black/10 backdrop-blur-lg text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md w-40 z-10'>
                                    <li >
                                        <button
                                            onClick={closeDropdown}
                                            className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer'>Resources</button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={closeDropdown}
                                            className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer'>Resources</button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={closeDropdown}
                                            className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer'>Resources</button>
                                    </li>
                                </ul>
                            )}
                        </div>

                        <div className=''>
                            <button
                                type="button"
                                className='flex items-center gap-2 cursor-pointer relative'
                            >
                                <p className='text-base font-normal text-black font-semibold text-text-5'>About</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='flex max-md:hidden items-center gap-2 pr-2 border-r border-black/16 cursor-pointer'>
                        <Image src={searchIcon} alt="searchIcon" width={20} height={20} className='min-w-5 h-5' />
                    </div>
                    <div>
                        <button type="button" className='flex max-md:hidden text-black font-semibold items-center pr-2 border-r border-black/16 gap-2 cursor-pointer relative'>
                            Support
                        </button>
                    </div>
                    <div className="max-md:hidden">
                        <CommonDropdown
                            options={languageOptions}
                            value={selectedLanguage}
                            onChange={setSelectedLanguage}
                            className="border-none !w-auto !gap-7 !bg-transparent !p-0 !text-base !text-black !font-semibold"
                            dropdownClassName="w-full !p-0 !bg-black/10 !backdrop-blur-lg !top-7 !text-xs !font-medium"
                            buttonClassName="!hover:zinc-200 !p-1"
                        />
                    </div>
                    <div className='max-sm:hidden'>
                        <button type="button" onClick={() => router.push("/Account/login")} className='flex py-2.5 transition-all duration-300 px-4 text-main hover:bg-main hover:text-white rounded-lg font-semibold items-center gap-2 cursor-pointer relative'>
                            Login
                        </button>
                </div>
                    <div className='max-sm:hidden'>
                        <button type="button" onClick={() => router.push("/Account/signup")} className='flex py-2.5 transition-all duration-300 px-4 bg-main hover:bg-main/85 cursor-pointer rounded-lg text-white font-semibold items-center gap-2 cursor-pointer relative'>
                            Sign Up
                        </button>
                    </div>
                    <button onClick={toggleMenu}>
                        <Image src={menuIcon} alt="menuIcon" width={20} height={20} className='w-8 h-8 lg:hidden cursor-pointer' />
                    </button>
                </div>
            </main>
            <div className={` ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} fixed transition duration-300 ease-in-out inset-0 bg-black/10 backdrop-blur-lg z-50`}>
                <div ref={mobileMenuRef} className={`p-6 ${isOpen ? "translate-x-0" : "-translate-x-full"} fixed transition duration-300 ease-in-out top-0 left-0 h-full bg-main z-50 w-[300px]`}>
                    <div className='flex items-center justify-center'>
                        <Image src={logo} alt="logo" width={170} height={32} className='brightness-200 invert-1 ' />
                    </div>
                    <div className='mt-6'>

                        <div className='flex items-center gap-2 justify-end md:hidden'>
                            <div className='flex items-center gap-2 pr-2 border-r border-white/26 cursor-pointer'>
                                <Image src={searchIcon} alt="searchIcon" width={20} height={20} className='min-w-5 h-5 brightness-100 invert' />
                            </div>
                            <div>
                                <button type="button" className='flex text-white font-semibold items-center pr-2 border-r border-white/26 gap-2 cursor-pointer relative'>
                                    Support
                                </button>
                            </div>
                            <div className="">
                                <CommonDropdown
                                    options={languageOptions}
                                    value={selectedLanguage}
                                    onChange={setSelectedLanguage}
                                    className="border-none !w-auto !text-white !gap-4 !bg-transparent !p-0 !text-base !font-semibold"
                                    dropdownClassName="w-full !p-0 !text-white !bg-white/10 !backdrop-blur-lg !top-7 !text-xs !font-medium"
                                    buttonClassName="!hover:bg-zinc-200 !text-white hover:!text-black !p-1"
                                    arrowClassName="!invert !brightness-100"
                                />
                            </div>
                        </div>
                        <div className='flex mt-4 flex-col gap-2'>
                            <div className='relative' ref={productRef}>
                                <button
                                    type="button"
                                    className='flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all duration-300 p-2 rounded-lg text-white relative w-full flex justify-between'
                                    onClick={() => toggleDropdown('product')}
                                >
                                    <p className='text-base font-normal font-semibold '>Product</p>
                                    <Image src={chevronDown} alt="chevronDown" width={20} height={20} className='brightness-200' />
                                </button>
                                {activeDropdown === 'product' && (
                                    <ul className='text-text-5 w-full bg-white/10 text-white backdrop-blur-lg text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md z-10'>
                                        <li >
                                            <button
                                                onClick={() => { { closeDropdown, setIsOpen(false) } }}
                                                className='w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer'>Product</button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => { { closeDropdown, setIsOpen(false) } }}
                                                className='w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer'>Product</button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => { { closeDropdown, setIsOpen(false) } }}
                                                className='w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer'>Product</button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className='relative' ref={servicesRef}>
                                <button
                                    type="button"
                                    className='flex items-center hover:bg-white/10 w-full transition-all duration-300 p-2 rounded-lg flex justify-between gap-2 cursor-pointer relative'
                                    onClick={() => toggleDropdown('services')}
                                >
                                    <p className='text-base font-normal font-semibold'>Services</p>
                                    <Image src={chevronDown} alt="chevronDown" width={20} height={20} className='brightness-200' />
                                </button>
                                {activeDropdown === 'services' && (
                                    <ul className='text-text-5 text-white bg-white/10 backdrop-blur-lg text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md w-full z-10'>
                                        <li >
                                            <button
                                                onClick={() => { { closeDropdown, setIsOpen(false) } }}
                                                className='w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer'>Services</button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => { { closeDropdown, setIsOpen(false) } }}
                                                className='w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer'>Services</button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => { { closeDropdown, setIsOpen(false) } }}
                                                className='w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer'>Services</button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            <div className=''>
                                <button
                                    onClick={() => { setIsOpen(false) }}
                                    type="button"
                                    className='flex items-center hover:bg-white/10 w-full transition-all duration-300 p-2 rounded-lg gap-2 cursor-pointer relative'
                                >
                                    <p className='text-base font-normal font-semibold'>Pricing</p>
                                </button>
                            </div>
                            <div className='relative' ref={resourcesRef}>
                                <button
                                    type="button"
                                    className='flex items-center hover:bg-white/10 w-full transition-all duration-300 p-2 rounded-lg flex justify-between gap-2 cursor-pointer relative'
                                    onClick={() => toggleDropdown('resources')}
                                >
                                    <p className='text-base font-normal font-semibold'>Resources</p>
                                    <Image src={chevronDown} alt="chevronDown" width={20} height={20} className='brightness-200' />
                                </button>
                                {activeDropdown === 'resources' && (
                                    <ul className='text-text-5 text-white bg-white/10 backdrop-blur-lg text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md w-full z-10'>
                                        <li >
                                            <button
                                                onClick={() => { { closeDropdown, setIsOpen(false) } }}
                                                className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer hover:text-black'>Resources</button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => { { closeDropdown, setIsOpen(false) } }}
                                                className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer hover:text-black'>Resources</button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => { { closeDropdown, setIsOpen(false) } }}
                                                className='w-full text-left hover:bg-zinc-200 p-2 cursor-pointer hover:text-black'>Resources</button>
                                        </li>
                                    </ul>
                                )}
                            </div>

                            <div className=''>
                                <button
                                    onClick={() => { setIsOpen(false) }}
                                    type="button"
                                    className='flex items-center gap-2 cursor-pointer relative hover:bg-white/10 transition-all duration-300 p-2 rounded-lg w-full'
                                >
                                    <p className='text-base font-normal font-semibold'>About</p>
                                </button>
                            </div>
                            <div className='sm:hidden'>
                                <button type="button" className='flex justify-center py-2.5 bg-white w-full text-center transition-all duration-300 px-4 text-main hover:bg-main/70 backdrop-blur-lg hover:text-white rounded-lg font-semibold items-center gap-2 cursor-pointer border border-white/16 transition-all duration-300'>
                                    <p className='text-base font-normal font-semibold'>Login</p>
                                </button>
                            </div>
                            <div className='sm:hidden'>
                                <button type="button" className='flex justify-center py-2.5 bg-white w-full text-center transition-all duration-300 px-4 text-main hover:bg-main/70 backdrop-blur-lg hover:text-white rounded-lg font-semibold items-center gap-2 cursor-pointer border border-white/16 transition-all duration-300'>
                                    <p className='text-base font-normal font-semibold'>Sign Up</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserHeader