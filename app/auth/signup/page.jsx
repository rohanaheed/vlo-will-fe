"use client"
import React, { useState } from 'react'
import Logo from "../../../components/assets/images/Logo.svg"
import Image from 'next/image'
import sliderbg from "../../../components/assets/images/SliderBg1.png"
import Slider from '../../../components/common/slider'
import { useRouter } from 'next/navigation'
import GoogleIcon from "../../../components/assets/images/GoogleIcon.svg"
import CheckIcon from "../../../components/assets/images/CheckIcon1.svg"

function Page() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    React.useEffect(() => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        setIsPasswordValid(passwordRegex.test(password));
    }, [password]);

    return (
        <div className='flex h-screen w-full overflow-hidden'>
            {/* Left Side - Form */}
            <div className='w-full lg:w-1/2 bg-white h-full p-3 md:p-8 flex flex-col justify-between overflow-y-auto'>
                <Image src={Logo} width={121} height={32} alt="logo" />
                <div className='m-auto w-full max-w-90'>
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <h1 className='text-lg md:text-[30px] text-center font-semibold text-[#181D27]'>Create an account</h1>
                        <div className='flex flex-col mt-8'>
                            <label htmlFor="Name " className='text-[#414651] text-xs md:text-sm font-medium '>Name <span className='text-[#FF383C]'>*</span></label>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} id='name' placeholder='Enter your name' className='border shadow outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-[#717680] rounded-md px-3.5 py-2' />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <label htmlFor="Email" className='text-[#414651] text-xs md:text-sm font-medium '>Email <span className='text-[#FF383C]'>*</span></label>
                            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} id='email' placeholder='Enter your email' className='border shadow outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-[#717680] rounded-md px-3.5 py-2' />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <label htmlFor="password" className='text-[#414651] text-xs md:text-sm font-medium '>Password<span className='text-[#FF383C]'>*</span></label>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} id='password' placeholder='Create a password' className='border shadow outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-[#717680] rounded-md px-3.5 py-2' />
                        </div>
                        <div className='flex flex-col mt-5'>
                            <label htmlFor="confirmPassword" className='text-[#414651] text-xs md:text-sm font-medium '>Confirm Password<span className='text-[#FF383C]'>*</span></label>
                            <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id='confirmPassword' placeholder='Create a password' className='border shadow outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-[#717680] rounded-md px-3.5 py-2' />
                        </div>
                        <div className='flex gap-2 mt-4'>
                            <div className={` min-w-5 h-5 mt-0.25 rounded-full flex items-center justify-center p-1 transition-colors duration-300 ${isPasswordValid ? "bg-[#D1E9FF]" : "bg-gray-100"}`}>
                                {isPasswordValid && <Image src={CheckIcon} width={10} height={10} alt="check" />}
                            </div>
                            <div className='text-xs'>
                                <p className='text-main text-base'>Password Policy:</p>
                                <p className='text-text-5 text-sm'>Password must contain at least - 1 lowercase character, 1 number, 1 uppercase character, 1 special symbol, minimum 8 characters.</p>
                            </div>
                        </div>
                        <button className='bg-[var(--color-main)] shadow hover:bg-[var(--color-main)]/85 transition cursor-pointer w-full mt-6 font-semibold text-white border-2 border-[var(--color-main)] rounded-lg p-2.5'>
                            Get started
                        </button>
                        <div className='flex items-center gap-2 shadow mt-4 border border-[#D5D7DA] rounded-lg p-2.5 cursor-pointer flex justify-center items-center hover:bg-zinc-100 transition'>
                            <Image src={GoogleIcon} width={20} height={20} alt="google" />
                            <p className='text-[#414651] font-semibold'>Sign in with Google</p>
                        </div>
                        <div className='flex items-center justify-center gap-1 mt-4'>
                            <p className='text-[#414651] text-sm'>Already have an account?</p>
                            <button className='text-[var(--color-main)] hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer' onClick={() => router.push("/Account/login")}>
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
                <div className='mt-5'>
                    <p className='text-[#535862] text-sm'>© 2025-26 DocNet. All rights reserved.</p>
                </div>
            </div>

            {/* Right Side - Slider */}
            <div className='hidden lg:block w-1/2 h-full bg-gray-50'>
                <Slider
                    data={[
                        {
                            image: sliderbg,
                            quote: "I made a will in under 10 minutes and downloaded it as a PDF document.",
                            author: "Carlota Novák",
                            role: "Founder, Solicitor",
                            location: "London",
                            rating: 5
                        },
                        {
                            image: sliderbg,
                            quote: "Super easy to use and very helpful support team.",
                            author: "John Doe",
                            role: "Engineer",
                            location: "New York",
                            rating: 5
                        },
                        {
                            image: sliderbg,
                            quote: "Highly recommended for anyone looking for quick legal docs.",
                            author: "Jane Smith",
                            role: "Designer",
                            location: "Berlin",
                            rating: 5
                        },
                        {
                            image: sliderbg,
                            quote: "Highly recommended for anyone looking for quick legal docs.",
                            author: "Jane Smith",
                            role: "Designer",
                            location: "Berlin",
                            rating: 5
                        }
                    ]}
                />
            </div>
        </div>
    )
}

export default Page
