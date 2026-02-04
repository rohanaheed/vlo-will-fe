"use client"
import React, { useState } from 'react'
import Logo from "../../../components/assets/images/Logo.svg"
import Image from 'next/image'
import sliderbg from "../../../components/assets/images/SliderBg1.png"
import Slider from '../../../components/common/slider'
import { useRouter } from 'next/navigation'
import { Formik, Form, Field } from "formik";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import { ErrorMessage } from "formik";
import Loader from '../../../components/common/Loader'
import { loginApi } from '../../services/authService'
import GoogleIcon from "../../../components/assets/images/GoogleIcon.svg"

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

    return (
        <div className='flex h-screen w-full overflow-hidden'>
            {/* Left Side - Form */}
            <div className='w-full lg:w-1/2 bg-white h-full p-3 md:p-8 flex flex-col justify-between overflow-y-auto'>
                <Image src={Logo} width={121} height={32} alt="logo" />
                <div className='m-auto w-full max-w-90'>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting, setFieldError }) => {
                            try {
                                const res = await loginApi(values);

                                // Example response:
                                // { token: "abc123", user: {...} }

                                localStorage.setItem("token", res.token);

                                router.push("/dashboard");
                            } catch (error) {
                                console.log("abc", error, error.message)
                                // API error handling
                                if (error.response?.data?.error.message) {
                                    setFieldError("email", error.response?.data?.error.message);
                                } else {
                                    alert("Something went wrong");
                                }
                            } finally {
                                setSubmitting(false);
                            }
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
                                        <button className='text-[var(--color-main)] hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer' onClick={() => router.push("/auth/forgot-password")}>
                                            Forgot password
                                        </button>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full mt-8 p-2.5 rounded-lg font-semibold text-white cursor-pointer ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[var(--color-main)] hover:bg-[var(--color-main)]/85"}`}
                                    >
                                        {isSubmitting ? (
                                           <Loader />
                                        ) : (
                                            "Sign in"
                                        )}
                                    </button>
                                    <div className='flex items-center gap-2 mt-4 border border-[#D5D7DA] rounded-lg p-2.5 cursor-pointer flex justify-center items-center hover:bg-zinc-100 transition'>
                                                                <Image src={GoogleIcon} width={20} height={20} alt="google" />
                                                                <p className='text-[#414651] font-semibold'>Sign in with Google</p>
                                                            </div>
                                                            <div className='flex items-center justify-center gap-2 mt-4'>
                                                                <p className='text-[#414651] text-sm'>Don't have an account?</p>
                                                                <button className='text-[var(--color-main)] hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer' onClick={() => router.push("/auth/signup")}>
                                                                    Sign up
                                                                </button>
                                                            </div>

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
