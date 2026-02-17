"use client";
import React from "react";
import toast from "react-hot-toast";
import { ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; // used when validating with a pre-built solution

import Logo from "../../../components/assets/images/Logo.svg";
import ArrowLeft from "../../../components/assets/images/ArrowLeftBlue.svg";
import sliderbg from "../../../components/assets/images/SliderBg1.png";
import Slider from "../../../components/common/slider";
import key from "../../../components/assets/images/KeyIcon.svg";
import { forgotPassword } from "../../services/authService";
import Loader from "../../../components/common/Loader";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

function Page() {
  const router = useRouter();
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-white h-full p-3 md:p-8 flex flex-col justify-between overflow-y-auto">
        <Image src={Logo} width={121} height={32} alt="logo" />
        <div className="m-auto w-full max-w-90">
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, setFieldError }) => {
              try {
                const res = await forgotPassword(values);
                router.push(`/auth/check-email?email=${values.email}`);
                // toast.success("Email sent successfully if you have account")
              } catch (error) {
                console.log("abc", error, error.response);
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
                <Form className="">
                  <div className="flex justify-center">
                    <div className="shadow border border-[#E9EAEB] rounded-lg p-3 justify-center inline-flex mx-auto">
                      <Image src={key} width={28} height={28} alt="media" />
                    </div>
                  </div>
                  <h1 className="text-lg md:text-[30px] text-center font-semibold text-text-1 mt-6">
                    Forgot password?
                  </h1>
                  <p className="text-sm md:text-base text-text-5 text-center mt-3">
                    No worries, we’ll send you reset instructions.
                  </p>
                  <div className="flex flex-col mt-5">
                    <label
                      htmlFor="password"
                      className="text-text-4 text-xs md:text-sm font-medium "
                    >
                      Email<span className="text-[#FF383C]">*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border outline-0 focus:border-black text-black border-[#D5D7DA] mt-1.5 placeholder:text-[#717680] rounded-md px-3.5 py-2"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-xs md:text-sm font-medium  text-[#FF383C]"
                    />
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
                      type="button"
                      className="text-                      text-5 flex items-center justify-center w-full gap-1.5 hover:text-text-5/85 transition text-sm font-semibold cursor-pointer"
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
