"use client";
import React, { useState } from "react";
import Logo from "../../../components/assets/images/Logo.svg";
import ArrowLeft from "../../../components/assets/images/ArrowLeftBlue.svg";
import Image from "next/image";
import sliderbg from "../../../components/assets/images/SliderBg1.png";
import Slider from "../../../components/common/slider";
import { useRouter } from "next/navigation";
import Lock from "../../../components/assets/images/LockIcon.svg";

function Page() {
  const router = useRouter();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = React.useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

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
              <Image src={Lock} width={28} height={28} alt="media" />
            </div>
            <h1 className="text-lg md:text-[30px] text-center font-semibold text-[#181D27] mt-6">
              Enter OTP
            </h1>
            <p className="text-sm md:text-base text-[#535862] text-center mt-3">
              The code has been sent to your registered
            </p>
            <p className="text-sm md:text-base text-[#535862] text-center mt-3">
              olivia@untitledui.com
            </p>

            <div className="flex items-center justify-center gap-1 md:gap-2 mt-8">
              {otp.map((data, index) => (
                <React.Fragment key={index}>
                  <input
                    className="w-10 h-10 md:w-12 md:h-14 border border-[#D0D5DD] rounded-lg text-center text-lg md:text-2xl font-semibold text-[#181D27] focus:outline-none focus:border-[var(--color-main)] focus:ring-1 focus:ring-[var(--color-main)] transition-all"
                    type="text"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[index] = el)}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                  {index === 2 && (
                    <span className="text-[#D0D5DD] text-xl md:text-2xl font-light mx-0.5 md:mx-1">—</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-sm text-[#FF0000] mt-1">Invalid OTP. Please try again.</p>

            <div className="mt-8">
              <p className="text-sm text-[#535862] text-center">
                Didn’t receive the code?
              </p>

              <button
                className="text-[var(--color-main)] flex items-center justify-center w-full gap-1.5 hover:text-[var(--color-main)]/85 transition text-sm font-semibold cursor-pointer"
              >
                Click here to send it again.
              </button>
            </div>
            <p className="text-sm text-[#FF0000]">Resend code in 30s</p>
            <button onClick={() => router.push("/Account/SetNewPassword")} className="bg-[var(--color-main)] hover:bg-[var(--color-main)]/85 transition cursor-pointer w-full mt-6 font-semibold text-white border-2 border-[var(--color-main)] rounded-lg p-2.5">
              Verify
            </button>

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
