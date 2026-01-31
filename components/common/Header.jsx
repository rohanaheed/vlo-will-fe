"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import Logo from "../../components/assets/images/LawNestLogo.svg"
import Menuicon from "../../components/assets/images/MenuIcon.svg"
import Searchicon from "../../components/assets/images/SearchIcon.svg"
import Bell from "../../components/assets/images/BellIcon.svg"
import Phone from "../../components/assets/images/PhoneIcon.svg"
import Mail from "../../components/assets/images/MailIcon.svg"
import Setting from "../../components/assets/images/SettingIcon.svg"
import Add from "../../components/assets/images/AddIcon.svg"
import User from "../assets/images/User.svg"
import ChevronDown from "../assets/images/CheveronDownGray.svg"
function Header({title}) {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const sidebarRef = useRef(null)

    const [currentDate, setCurrentDate] = useState(null)

    useEffect(() => {
        const updateDate = () => setCurrentDate(new Date())
        updateDate()
        const timer = setInterval(updateDate, 1000)
        return () => clearInterval(timer)
    }, [])

    const formatDate = (date) => {
        if (!date) return ''
        const datePart = date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '')
        const timePart = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
        return `${datePart}, ${timePart}`
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])
  return (
    <div className='fixed top-0 left-0 right-0 w-full z-10'>
      <div className="fixed top-0 left-0 right-0 w-full z-10 border-b border-black/16">
       <div className='flex lg:ml-75 lg:w-[calc(100%-300px)] justify-between items-center bg-white text-black px-6 py-3'>
        <div className='flex items-center gap-4 '>
            <button className='lg:hidden max-md:hidden cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
            <Image src={Menuicon} width={24} height={24} alt="media" />
            </button>
            <div>
            <h1 className='text-sm font-bold'>{title} </h1>
            </div>
        </div>
        <div className='max-xl:hidden'>
            <h1 className='text-sm font-bold'>{formatDate(currentDate)}</h1>
        </div>
        <div className='flex items-center gap-3 max-md:hidden'>
            <div className='rounded-full cursor-pointer bg-[var(--color-main)] h-8 w-8 flex items-center justify-center'>
                <Image src={Searchicon} width={16} height={16} alt="media" />
            </div>
            <div onClick={()=>router.push('/Notification')} className='relative cursor-pointer rounded-full h-8 w-8 bg-[var(--color-main)] flex items-center justify-center'>
                <Image src={Bell} width={16} height={16} alt="media" />
                <span className='bg-[#FF0000] h-4.5 w-4.5 text-[10px] absolute top-0 right-0 translate-x-1 font-bold rounded-full p-0.5 flex justify-center items-center text-white'>
                    12
                </span>
            </div>
            <div className='rounded-full cursor-pointer bg-[var(--color-main)] h-8 w-8 flex items-center justify-center'>
                <Image src={Phone} width={14} height={16} alt="media" />
            </div>
            <div className='rounded-full cursor-pointer bg-[var(--color-main)] h-8 w-8 flex items-center justify-center'>
                <Image src={Mail} width={16} height={16} alt="media" />
            </div>
            <div className='rounded-full cursor-pointer bg-[var(--color-main)] h-8 w-8 flex items-center justify-center'>
                <Image src={Setting} width={16} height={16} alt="media" />
            </div>
            <div className='rounded-full cursor-pointer bg-[var(--color-main)] h-8 w-8 flex items-center justify-center'>
                <Image src={Add} width={16} height={16} alt="media" />
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <Image src={User} width={40} height={40} alt="media" />
                <p className='text-xs '>Admin Abdul Wahab</p>
                <Image src={ChevronDown} width={16} height={16} alt="media" />
            </div>
        </div>
        <button className='md:hidden cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
            <Image src={Menuicon} width={24} height={24} alt="media" />
            </button>
        </div>
      </div>
      {/* Overlay (does not slide) */}
      <div
        className={`fixed inset-0  z-10 transition-opacity duration-300 ${isOpen ? 'opacity-100 bg-white/5 backdrop-blur-lg pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar (slides independently) */}
      <div ref={sidebarRef} className={`fixed z-11 p-4 left-0 top-0 bottom-0 h-screen w-75 transform transition-transform duration-300 bg-[var(--color-main)] ${isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'}`}>
        <div className='p-4'>
            <Image src={Logo} width={212} height={56} alt='media'/>
        </div>
      </div>
    </div>
  )
}

export default Header
