"use client";
import React, { useState } from "react";
import Logo from "../../../components/assets/images/Logo.svg";
import ArrowLeft from "../../../components/assets/images/ArrowLeftBlue.svg";
import Image from "next/image";
import sliderbg from "../../../components/assets/images/SliderBg1.png";
import Slider from "../../../components/common/slider";
import { useRouter } from "next/navigation";
import Email from "../../../components/assets/images/EmailIcon.svg";

function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <div className="shadow border border-[#E9EAEB] rounded-lg p-3 justify-center inline-flex mx-auto">
              <Image src={Email} width={28} height={28} alt="media" />
            </div>
            <h1 className="text-lg md:text-[30px] text-center font-semibold text-[#181D27] mt-6">
              Check your email
            </h1>
            <p className="text-sm md:text-base text-[#535862] text-center mt-3">
              We sent a password reset link to{" "}
            </p>
            <p className="text-sm md:text-base text-[#535862] text-center mt-3">
              olivia@untitledui.com{" "}
            </p>
            <button onClick={()=>router.push("/Account/VerficationOtp")} className="bg-[var(--color-main)] hover:bg-[var(--color-main)]/85 transition cursor-pointer w-full mt-6 font-semibold text-white border-2 border-[var(--color-main)] rounded-lg p-2.5">
              Open email app
            </button>
            <div className="mt-8">
              <p className="text-sm text-[#535862] text-center">
                Didn’t receive the email?
              </p>

              <button
                className="text-[var(--color-main)] flex items-center justify-center w-full gap-1.5 hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer"
                onClick={() => router.push("/Account/ForgetPassword")}
              >
                Click to resend
              </button>
            </div>
            <div className="flex w-full justify-between mt-8">
              <button
                className="text-[var(--color-main)] flex items-center justify-center w-full gap-1.5 hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer"
                onClick={() => router.push("/Account/Signup")}
              >
                <Image src={ArrowLeft} alt="media" width={20} height={20} />
                <p>Back to log in</p>
              </button>
            </div>
          </form>
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
