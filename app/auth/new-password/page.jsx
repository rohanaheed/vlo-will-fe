"use client";
import React, { useState } from "react";
import Logo from "../../../components/assets/images/Logo.svg";
import ArrowLeft from "../../../components/assets/images/ArrowLeftBlue.svg";
import Image from "next/image";
import sliderbg from "../../../components/assets/images/SliderBg1.png";
import Slider from "../../../components/common/slider";
import { useRouter } from "next/navigation";
import key from "../../../components/assets/images/KeyIcon.svg";
import EyeOpenIcon from "../../../components/assets/images/EyeOpenIcon.png";
import EyeCloseIcon from "../../../components/assets/images/EyeCloseIcon.png";

function Page() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-white h-full p-3 md:p-8 flex flex-col gap-4 justify-between overflow-y-auto">
        <Image src={Logo} width={121} height={32} alt="logo" />
        <div className="m-auto w-full max-w-90">
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col"
          >
            <div className="flex justify-center">
              <div className="shadow border border-[#E9EAEB] rounded-lg p-3 justify-center inline-flex mx-auto">
                <Image src={key} width={28} height={28} alt="media" />
              </div>
            </div>
            <h1 className="text-lg md:text-[30px] text-center font-semibold text-text-1 mt-6">
              Set new password
            </h1>
            <p className="text-sm md:text-base text-text-5 text-center mt-3">
              Your new password must be different from previously used
              passwords.
            </p>

            <div className="flex flex-col mt-8">
              <label
                htmlFor="password"
                className="text-text-4 text-xs md:text-sm font-medium "
              >
                Password<span className="text-[#FF383C]">*</span>
              </label>
              <div className="relative mt-1.5">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
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
            </div>

            <div className="flex flex-col mt-5">
              <label
                htmlFor="confirmPassword"
                className="text-text-4 text-xs md:text-sm font-medium "
              >
                Confirm password<span className="text-[#FF383C]">*</span>
              </label>
              <div className="relative mt-1.5">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="border outline-0 pr-10 focus:border-black text-black border-[#D5D7DA] placeholder:text-[#717680] rounded-md px-3.5 py-2 w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center p-0.5 transition-colors duration-300 ${password.length >= 8 ? "bg-[var(--color-main)] border-[var(--color-main)]" : "border-[#D0D5DD]"}`}
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
                      stroke={password.length >= 8 ? "white" : "#D0D5DD"}
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={`text-sm transition-colors duration-300 ${password.length >= 8 ? "text-text-1 font-medium" : "text-text-5"}`}
                >
                  Must be at least 8 characters
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center p-0.5 transition-colors duration-300 ${/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "bg-[var(--color-main)] border-[var(--color-main)]" : "border-[#D0D5DD]"}`}
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
                        /[!@#$%^&*(),.?":{}|<>]/.test(password)
                          ? "white"
                          : "#D0D5DD"
                      }
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={`text-sm transition-colors duration-300 ${/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "text-text-1 font-medium" : "text-text-5"}`}
                >
                  Must contain one special character
                </p>
              </div>
            </div>

            <button
              onClick={() => router.push("/auth/reset-password")}
              className="bg-[var(--color-main)] hover:bg-[var(--color-main)]/85 transition cursor-pointer w-full mt-6 font-semibold text-white border-2 border-[var(--color-main)] rounded-lg p-2.5"
            >
              Reset password
            </button>
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
