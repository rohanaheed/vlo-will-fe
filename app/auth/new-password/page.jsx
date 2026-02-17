"use client";
import React, { useState } from "react";
import Logo from "../../../components/assets/images/Logo.svg";
import ArrowLeft from "../../../components/assets/images/ArrowLeftBlue.svg";
import Image from "next/image";
import sliderbg from "../../../components/assets/images/SliderBg1.png";
import Slider from "../../../components/common/slider";
import { useRouter, useSearchParams } from "next/navigation";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import Loader from "../../../components/common/Loader";
import key from "../../../components/assets/images/KeyIcon.svg";
import { resetpassword } from "../../services/authService";
import * as Yup from "yup";
import toast from "react-hot-toast";
import EyeOpenIcon from "../../../components/assets/images/EyeOpenIcon.png";
import EyeCloseIcon from "../../../components/assets/images/EyeCloseIcon.png";

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character",
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required")
    .when("password", {
      is: (val) => val && val.length > 0,
      then: (schema) =>
        schema.oneOf([Yup.ref("password")], "Passwords must match"),
    }),
});

function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-white h-full p-3 md:p-8 flex flex-col gap-4 justify-between overflow-y-auto">
        <Image src={Logo} width={121} height={32} alt="logo" />
        <div className="m-auto w-full max-w-90">
          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setFieldError }) => {
              try {
                const res = await resetpassword({
                  new_password: values?.password,
                  token: token,
                });
                router.push("/auth/reset-password");
              } catch (error) {
                // API error handling
                if (error.response?.data?.error.message) {
                  setFieldError(
                    "password",
                    error.response?.data?.error.message,
                  );
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
                  <div className="flex justify-center">
                    <div className="shadow border border-[#E9EAEB] rounded-lg p-3 justify-center inline-flex mx-auto">
                      <Image src={key} width={28} height={28} alt="media" />
                    </div>
                  </div>
                  <h1 className="text-lg md:text-[30px] text-center font-semibold text-[#181D27] mt-6">
                    Set new password
                  </h1>
                  <p className="text-sm md:text-base text-[#535862] text-center mt-3">
                    Your new password must be different from previously used
                    passwords.
                  </p>

                  <div className="flex flex-col mt-8">
                    <label
                      htmlFor="password"
                      className="text-[#414651] text-xs md:text-sm font-medium "
                    >
                      Password<span className="text-[#FF383C]">*</span>
                    </label>
                    <div className="relative mt-1.5">
                      <Field
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="border outline-0 pr-10 focus:border-black text-black border-[#D5D7DA] placeholder:text-[#717680] rounded-md px-3.5 py-2 w-full"
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

                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="confirmPassword"
                      className="text-[#414651] text-xs md:text-sm font-medium "
                    >
                      Confirm password<span className="text-[#FF383C]">*</span>
                    </label>
                    <div className="relative mt-1.5">
                      <Field
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="border outline-0 pr-10 focus:border-black text-black border-[#D5D7DA] placeholder:text-[#717680] rounded-md px-3.5 py-2 w-full"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showConfirmPassword ? (
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
                      name="confirmPassword"
                      component="div"
                      className="text-xs md:text-sm font-medium  text-[#FF383C]"
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full bg-[#D0D5DD] border flex items-center justify-center p-0.5 transition-colors duration-300 ${values?.password.length >= 8 ? "bg-[var(--color-main)] border-[var(--color-main)]" : "border-[#D0D5DD]"}`}
                      >
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 1L3.5 6.5L1 4"
                            stroke={
                              values?.password.length >= 8 ? "white" : "white"
                            }
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p
                        className={`text-sm transition-colors duration-300 ${values?.password.length >= 8 ? "text-[#181D27] font-medium" : "text-[#535862]"}`}
                      >
                        Must be at least 8 characters
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 bg-[#D0D5DD] rounded-full border flex items-center justify-center p-0.5 transition-colors duration-300 ${/[!@#$%^&*(),.?":{}|<>]/.test(values?.password) ? "bg-[var(--color-main)] border-[var(--color-main)]" : "border-[#D0D5DD]"}`}
                      >
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 1L3.5 6.5L1 4"
                            stroke={
                              /[!@#$%^&*(),.?":{}|<>]/.test(values?.password)
                                ? "white"
                                : "white"
                            }
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p
                        className={`text-sm transition-colors duration-300 ${/[!@#$%^&*(),.?":{}|<>]/.test(values?.password) ? "text-[#181D27] font-medium" : "text-[#535862]"}`}
                      >
                        Must contain one special character
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[var(--color-main)] hover:bg-[var(--color-main)]/85 transition cursor-pointer w-full mt-6 font-semibold text-white border-2 border-[var(--color-main)] rounded-lg p-2.5"
                  >
                    {isSubmitting ? <Loader /> : "Reset Password"}
                  </button>
                  <div className="flex w-full justify-between mt-8">
                    <button
                      className="text-text-5 flex items-center justify-center w-full gap-1.5 hover:text-text-5/85 transition text-sm font-semibold cursor-pointer"
                      onClick={() => router.push("/auth/login")}
                    >
                      <Image
                        src={ArrowLeft}
                        alt="media"
                        width={20}
                        height={20}
                      />
                      <p>Back to log in</p>
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div>
          <p className="text-[#535862] text-sm">
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
