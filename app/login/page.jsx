"use client"
import React, { useState } from 'react'
import Logo from "../../components/assets/images/Logo.svg"
import Image from 'next/image'
import sliderbg from "../../components/assets/images/SliderBg1.png"
import Slider from '../../components/common/slider'
import { useRouter } from 'next/navigation'
import { Formik, Form, Field } from "formik";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import { ErrorMessage } from "formik";

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required")
});


function Page() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='flex h-screen w-full overflow-hidden'>
            {/* Left Side - Form */}
            <div className='w-full lg:w-1/2 bg-white h-full p-3 md:p-8 flex flex-col justify-between overflow-y-auto'>
                <Image src={Logo} width={121} height={32} alt="logo" />
                <div className='m-auto w-full max-w-90'>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {

                            console.log(values);

                        }}
                    >
                        {props => {
                            const {
                                values,
                                touched,
                                errors,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit
                            } = props;

                            return (

                                <Form>
                                    <h1 className='text-lg md:text-[30px] text-center font-semibold text-[#181D27]'>Login to your account</h1>
                                    <p className='text-sm md:text-base text-[#535862] text-center mt-3'>Welcome back! Please enter your details.</p>
                                    <div className='flex flex-col mt-8'>
                                        <label
                                            htmlFor="Email"
                                            className='text-[#414651] text-xs md:text-sm font-medium '
                                        >
                                            Email
                                            <span className='text-[#FF383C]'>*</span>
                                        </label>
                                        <Field
                                            name="email"
                                            type="email"
                                            placeholder='Enter your email'
                                            className='border outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-[#717680] rounded-md px-3.5 py-2'
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-xs md:text-sm font-medium  text-[#FF383C]"
                                        />
                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <label
                                            htmlFor="password"
                                            className='text-[#414651] text-xs md:text-sm font-medium '
                                        >
                                            Password
                                            <span className='text-[#FF383C]'>*</span>
                                        </label>
                                        <Field
                                            name='password'
                                            type='password'
                                            placeholder='Enter your password'
                                            className='border outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-[#717680] rounded-md px-3.5 py-2' />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-xs md:text-sm font-medium  text-[#FF383C]"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 md:flex-row justify-between mt-8'>
                                        <div className='flex items-center gap-0.5'>
                                            <input type="checkbox" id='check' className='cursor-pointer' />
                                            <label htmlFor="check" className=' cursor-pointer text-[#414651] text-sm font-medium'>Remember me for 30 days</label>
                                        </div>
                                        <button className='text-[var(--color-main)] hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer' onClick={() => router.push("/Account/ForgetPassword")}>
                                            Forgot password
                                        </button>
                                    </div>
                                    <button type="submit" className='bg-[var(--color-main)] hover:bg-[var(--color-main)]/85 transition cursor-pointer w-full mt-8 font-semibold text-white border-2 border-[var(--color-main)] rounded-lg p-2.5'>
                                        Sign in
                                    </button>
                                </Form>
                            );
                        }}

                    </Formik>
                </div>
                <div>
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
