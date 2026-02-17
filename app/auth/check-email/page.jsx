"use client";
import React, { useState } from "react";
import Logo from "../../../components/assets/images/Logo.svg";
import ArrowLeft from "../../../components/assets/images/ArrowLeftBlue.svg";
import Image from "next/image";
import sliderbg from "../../../components/assets/images/SliderBg1.png";
import Slider from "../../../components/common/slider";
import { useRouter, useSearchParams } from "next/navigation";
import Email from "../../../components/assets/images/EmailIcon.svg";
import toast from "react-hot-toast";
import Loader from "../../../components/common/Loader";
import { resendVerificationLink } from "../../services/authService";

function Page() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const email = searchParams.get("email")
  const [loading, setLoading] = useState(false)

  const handleResend = async () => {
    setLoading(true)
    try {
      const res = await resendVerificationLink({ email: email });
      toast.success("Email sent successfully if you have account")
    } catch (error) {
      console.log("abc", error, error.response?.data)
      if (error.response?.data?.error.message) {
        toast.error(error.response?.data?.error.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }

  }

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-white h-full p-3 md:p-8 flex flex-col justify-between overflow-y-auto">
        <Image src={Logo} width={121} height={32} alt="logo" />
        <div className="m-auto w-full max-w-90">
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col"
          >
            <div className="flex justify-center">
              <div className="shadow border border-[#E9EAEB] rounded-lg p-3 justify-center inline-flex mx-auto">
                <Image src={Email} width={28} height={28} alt="media" />
              </div>
            </div>
            <h1 className="text-lg md:text-[30px] text-center font-semibold text-text-1 mt-6">
              Check your email
            </h1>
            <p className="text-sm md:text-base text-text-5 text-center mt-3">
              We sent a password reset link to{" "}
            </p>
<<<<<<< HEAD
            <p className="text-sm md:text-base text-text-5 text-center mt-3">
              olivia@untitledui.com{" "}
            </p>
            <button
              onClick={() => router.push("/auth/verfication-otp")}
              className="bg-[var(--color-main)] hover:bg-[var(--color-main)]/85 transition cursor-pointer w-full mt-6 font-semibold text-white border-2 border-[var(--color-main)] rounded-lg p-2.5"
            >
=======
            <p className="text-sm md:text-base text-[#535862] text-center mt-3">
              {email}{" "}
            </p>
            <button onClick={() => window.open("https://mail.google.com", "_blank")} className="bg-[var(--color-main)] hover:bg-[var(--color-main)]/85 transition cursor-pointer w-full mt-6 font-semibold text-white border-2 border-[var(--color-main)] rounded-lg p-2.5">
>>>>>>> e6243cccac85ef8c38175551c104826b8011936c
              Open email app
            </button>
            <div className="mt-8 flex justify-center gap-1">
              <p className="text-sm text-text-5 text-center">
                Didn’t receive the email?
              </p>

              <button
                className="text-[var(--color-main)] flex items-center justify-center gap-1.5 hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer"
                onClick={() => handleResend()}
              >
                {loading ? <Loader />
                  :
                  "Click to resend"
                }
              </button>
            </div>
            <div className="flex w-full justify-between mt-8">
              <button
                className="text-[var(--color-main)] flex items-center justify-center w-full gap-1.5 hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer"
                onClick={() => router.push("/auth/login")}
              >
                <Image src={ArrowLeft} alt="media" width={20} height={20} />
                <p>Back to log in</p>
              </button>
            </div>
          </form>
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
