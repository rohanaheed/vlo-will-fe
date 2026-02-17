"use client";
import React, { useState } from "react";
import * as Yup from "yup"; // used when validating with a pre-built solution
import Image from "next/image";
import Logo from "../../../components/assets/images/Logo.svg";
import sliderbg from "../../../components/assets/images/SliderBg1.png";
import Slider from "../../../components/common/slider";
import { useRouter } from "next/navigation";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import Loader from "../../../components/common/Loader";
import { loginApi } from "../../services/authService";
import GoogleIcon from "../../../components/assets/images/GoogleIcon.svg";
import LoginWithGoogle from "../../../components/common/LoginWithGoogle";
import toast from "react-hot-toast";
import RecaptchaIcon from "../../../components/assets/images/RecaptchaIcon.svg";
import EyeOpenIcon from "../../../components/assets/images/EyeOpenIcon.png";
import EyeCloseIcon from "../../../components/assets/images/EyeCloseIcon.png";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

function Page() {
  const router = useRouter();
  const [remember, setRember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-white h-full p-3 md:p-8 flex flex-col justify-between overflow-y-auto">
        <Image src={Logo} width={121} height={32} alt="logo" />
        <div className="m-auto w-full max-w-90">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setFieldError }) => {
              try {
                const res = await loginApi({
                  ...values,
                  remember_me: remember,
                });
                console.log("token", res);
                localStorage.setItem("userInfo", JSON.stringify(res.data));
                router.push("/dashboard");
              } catch (error) {
                console.log("abc", error, error.message);
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
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;

              return (
                <Form>
                  <h1 className="text-lg md:text-[30px] text-center font-semibold text-text-1">
                    Login to your account
                  </h1>
                  <p className="text-sm md:text-base text-text-5 text-center mt-3">
                    Welcome back! Please enter your details.
                  </p>
                  <div className="flex flex-col mt-8">
                    <label
                      htmlFor="Email"
                      className="text-text-4 text-xs md:text-sm font-medium "
                    >
                      Email
                      <span className="text-[#FF383C]">*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-text-text-7 rounded-md px-3.5 py-2"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-xs md:text-sm font-medium  text-[#FF383C]"
                    />
                  </div>
                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="password"
                      className="text-text-4 text-xs md:text-sm font-medium "
                    >
                      Password
                      <span className="text-[#FF383C]">*</span>
                    </label>
                    <div className="relative mt-1.5">
                      <Field
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="border outline-0 pr-10 focus:border-black text-black border-[#D5D7DA] placeholder:text-text-text-7 rounded-md px-3.5 py-2 w-full"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <Image
                            src={EyeCloseIcon}
                            alt="Hide password"
                            width={20}
                            height={20}
                          />
                        ) : (
                          <Image
                            src={EyeOpenIcon}
                            alt="Show password"
                            width={20}
                            height={20}
                          />
                        )}
                      </button>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-xs md:text-sm font-medium  text-[#FF383C]"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row justify-between mt-8">
                    <div className="flex items-center gap-0.5">
                      <input
                        type="checkbox"
                        onClick={() => setRember(!remember)}
                        id="check"
                        className="cursor-pointer w-4 h-4"
                      />
                      <label
                        htmlFor="check"
                        className=" cursor-pointer text-text-4 text-sm font-medium ml-1"
                      >
                        Remember me for 30 days
                      </label>
                    </div>
                    <button
                      className="text-[var(--color-main)] hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer"
                      onClick={() => router.push("/auth/forgot-password")}
                    >
                      Forgot password
                    </button>
                  </div>
                  <div className="flex gap-2 items-center justify-between mt-8 p-2 border border-[#D5D7DA] rounded-xs bg-[#F9F9F9] shadow">
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="robot"
                        id="robot"
                        className="w-7 h-7 cursor-pointer"
                      />
                      <label
                        htmlFor="robot"
                        className="text-text-4 text-sm cursor-pointer"
                      >
                        I'm not a robot
                      </label>
                    </div>
                    <div>
                      <Image
                        src={RecaptchaIcon}
                        width={45}
                        height={45}
                        alt="check"
                        className="min-w-12 min-h-12"
                      />
                      <p className="text-text-4 text-[8px] font-light mt-px">
                        Privacy - Terms
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full mt-8 p-2.5 rounded-lg font-semibold text-white cursor-pointer ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[var(--color-main)] hover:bg-[var(--color-main)]/85"}`}
                  >
                    {isSubmitting ? <Loader /> : "Sign in"}
                  </button>
                  <LoginWithGoogle />
                  {/* <div className=' gap-2 mt-4 border border-[#D5D7DA] rounded-lg p-2.5 cursor-pointer flex justify-center items-center hover:bg-zinc-100 transition'>
                                        <Image src={GoogleIcon} width={20} height={20} alt="google" />
                                        <p className='text-text-4 font-semibold'>Sign in with Google</p>
                                    </div> */}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <p className="text-text-4 text-sm">
                      Don't have an account?
                    </p>
                    <button
                      type="button"
                      className="text-[var(--color-main)] hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer"
                      onClick={() => router.push("/auth/signup")}
                    >
                      Sign up
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div>
          <p className="text-text-5 text-sm">
            © 2025-26 DocNet. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Side - Slider */}
      <div className="hidden lg:block w-1/2 h-full bg-gray-50">
        <Slider
          data={[
            {
              image: sliderbg,
              quote:
                "I made a will in under 10 minutes and downloaded it as a PDF document.",
              author: "Carlota Novák",
              role: "Founder, Solicitor",
              location: "London",
              rating: 5,
            },
            {
              image: sliderbg,
              quote: "Super easy to use and very helpful support team.",
              author: "John Doe",
              role: "Engineer",
              location: "New York",
              rating: 5,
            },
            {
              image: sliderbg,
              quote:
                "Highly recommended for anyone looking for quick legal docs.",
              author: "Jane Smith",
              role: "Designer",
              location: "Berlin",
              rating: 5,
            },
            {
              image: sliderbg,
              quote:
                "Highly recommended for anyone looking for quick legal docs.",
              author: "Jane Smith",
              role: "Designer",
              location: "Berlin",
              rating: 5,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Page;
