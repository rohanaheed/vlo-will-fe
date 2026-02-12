"use client"
import React, { useEffect, useState } from 'react'
import Logo from "../../../components/assets/images/Logo.svg"
import Image from 'next/image'
import toast from 'react-hot-toast'
import sliderbg from "../../../components/assets/images/SliderBg1.png"
import Slider from '../../../components/common/slider'
import { useRouter } from 'next/navigation'
import GoogleIcon from "../../../components/assets/images/GoogleIcon.svg"
import CheckIcon from "../../../components/assets/images/CheckIcon1.svg"
import { Formik, Form, Field } from "formik"; import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import { ErrorMessage } from "formik";
import { signupApi } from '../../services/authService'
import Loader from '../../../components/common/Loader'
import LoginWithGoogle from '../../../components/common/LoginWithGoogle'

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Name is required"),

    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character"
        )
        .required("Password is required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required")
        .when("password", {
            is: val => val && val.length > 0,
            then: schema =>
                schema.oneOf([Yup.ref("password")], "Passwords must match"),
        }),

})

function Page() {
    const router = useRouter()

    return (
        <div className='flex h-screen w-full overflow-hidden'>
            {/* Left Side - Form */}
            <div className='w-full lg:w-1/2 bg-white h-full p-3 md:p-8 flex flex-col justify-between overflow-y-auto'>
                <Image src={Logo} width={121} height={32} alt="logo" />
                <div className='m-auto w-full max-w-90'>
                    <Formik
                        initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { setSubmitting, setFieldError }) => {
                            try {
                                const res = await signupApi(values);
                                 toast.success("Registration successful. Please verify your email.")
                            }
                            catch (error) {
                                // API error handling
                                if (error.response?.data?.error.message) {
                                    setFieldError("email", error.response?.data?.error.message);
                                } else {
                                    toast.error("Something went wrong");
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
                                    <h1 className='text-lg md:text-[30px] text-center font-semibold text-[#181D27]'>Create an account</h1>
                                    <div className='flex flex-col mt-8'>
                                        <label htmlFor="Name " className='text-[#414651] text-xs md:text-sm font-medium '>Name <span className='text-[#FF383C]'>*</span></label>
                                        <Field
                                            name="name"
                                            type='text'
                                            placeholder='Enter your name'
                                            className='border shadow outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-[#717680] rounded-md px-3.5 py-2'
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-xs md:text-sm font-medium  text-[#FF383C]"
                                        />
                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <label htmlFor="Email" className='text-[#414651] text-xs md:text-sm font-medium '>Email <span className='text-[#FF383C]'>*</span></label>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder='Enter your email'
                                            className='border shadow outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-[#717680] rounded-md px-3.5 py-2'
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-xs md:text-sm font-medium  text-[#FF383C]"
                                        />
                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <label htmlFor="password" className='text-[#414651] text-xs md:text-sm font-medium '>Password<span className='text-[#FF383C]'>*</span></label>
                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder='Enter your password'
                                            className='border shadow outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-[#717680] rounded-md px-3.5 py-2'
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-xs md:text-sm font-medium  text-[#FF383C]"
                                        />
                                    </div>
                                    <div className='flex flex-col mt-5'>
                                        <label htmlFor="confirmPassword" className='text-[#414651] text-xs md:text-sm font-medium '>Confirm Password<span className='text-[#FF383C]'>*</span></label>
                                        <Field
                                            name="confirmPassword"
                                            type="password"
                                            placeholder='Enter your confirm password'
                                            className='border shadow outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-[#717680] rounded-md px-3.5 py-2' />
                                        <ErrorMessage
                                            name="confirmPassword"
                                            component="div"
                                            className="text-xs md:text-sm font-medium  text-[#FF383C]"
                                        />
                                    </div>
                                    <div className='flex gap-2 mt-4'>
                                        {/* <div className={` min-w-5 h-5 mt-0.25 rounded-full flex items-center justify-center p-1 transition-colors duration-300 ${isPasswordValid ? "bg-[#D1E9FF]" : "bg-gray-100"}`}>
                                            {isPasswordValid && <Image src={CheckIcon} width={10} height={10} alt="check" />}
                                        </div> */}
                                        <div className='text-xs'>
                                            <p className='text-main text-base'>Password Policy:</p>
                                            <p className='text-text-5 text-sm'>Password must contain at least - 1 lowercase character, 1 number, 1 uppercase character, 1 special symbol, minimum 8 characters.</p>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full mt-8 p-2.5 rounded-lg font-semibold text-white ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[var(--color-main)] hover:bg-[var(--color-main)]/85"}`}
                                    >
                                        {isSubmitting ? (
                                            <Loader />
                                        ) : (
                                            "Get Started"
                                        )}
                                    </button>
                                    <LoginWithGoogle />
                                    <div className='flex items-center justify-center gap-1 mt-4'>
                                        <p className='text-[#414651] text-sm'>Already have an account?</p>
                                        <button type='button'className='text-[var(--color-main)] hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer' onClick={() => router.push("/auth/login")}>
                                            Log in
                                        </button>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
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
