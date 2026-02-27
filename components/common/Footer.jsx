"use client";
import React from "react";
import logo from "@/components/assets/images/Logo.svg";
import Image from "next/image";
import phone from "@/components/assets/images/PhoneIcon.svg";
import clock from "@/components/assets/images/ClockIcon.svg";
import RatingsBadge from "@/components/assets/images/RatingsBadge.svg";
import bbb from "@/components/assets/images/bbb.svg";
import vikingCloud from "@/components/assets/images/VikingCloud.svg";
import facebook from "@/components/assets/images/FBIcon.svg";
import twitter from "@/components/assets/images/XIcon.svg";
import instagram from "@/components/assets/images/InstaIcon.svg";
import youtube from "@/components/assets/images/YoutubeIcon.svg";
import pintrest from "@/components/assets/images/PintrestIcon.svg";
import { useRouter } from "next/navigation";
function Footer() {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between max-w-[1200px] mx-auto max-sm:flex-col px-4 py-5 md:py-[48px] gap-8 whitespace-nowrap flex-wrap">
        <div className="md:max-w-[320px] w-full whitespace-normal">
          <div>
            <Image src={logo} alt="logo" width={121} height={32} />
          </div>
          <div className="mt-4">
            <p className="text-text-5 text-base font-medium">
              <span className="font-bold">Doc</span>
              Net is not a law firm. Our templates are prepared by or with the
              assistance of qualified lawyers and are for general use. For
              personalised legal advice, consult a solicitor.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-6">
                <Image
                  src={phone}
                  alt="phone"
                  width={20}
                  height={20}
                  className="invert-0 brightness-0"
                />
                <p className="text-text-5 text-base">+44 20 1234 5678</p>
              </div>
              <div className="flex items-center gap-6">
                <Image src={clock} alt="clock" width={24} height={24} />
                <p className="text-text-5 text-base">
                  Mon-Fri 01:00 pm - 10:00 pm
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Image
                src={RatingsBadge}
                alt="RatingsBadge"
                width={123}
                height={64}
              />
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div>
                <Image src={bbb} alt="bbb" width={141} height={53} />
              </div>
              <div>
                <Image
                  src={vikingCloud}
                  alt="vikingCloud"
                  width={109}
                  height={53}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-main text-sm font-semibold">Product</h3>
          <ul className="flex flex-col gap-4 mt-4">
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                General Will
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Islamic Will
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Contracts
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Letters
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Forms
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                E-Signature
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-main text-sm font-semibold">Company</h3>
          <ul className="flex flex-col gap-4 mt-4">
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                About us
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Careers
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                News
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Business Solutions
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Affiliate Program
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-main text-sm font-semibold">Resources</h3>
          <ul className="flex flex-col gap-4 mt-4">
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Blog
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Newsletter
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Events
              </button>
            </li>
            <li>
              <button
                onClick={() => router.push("/dedicated-support")}
                className="text-text-5 text-sm cursor-pointer"
              >
                Help centre
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Tutorials
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-main text-sm font-semibold">Legal</h3>
          <ul className="flex flex-col gap-4 mt-4">
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Terms
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Privacy
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Cookies
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Licenses
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Disclaimer
              </button>
            </li>
            <li>
              <button className="text-text-5 text-sm cursor-pointer">
                Terms of Service
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between bg-[#fafafa] max-sm:flex-col px-4 py-5 md:py-[48px] gap-8 whitespace-nowrap flex-wrap">
        <div>
          <p className="text-text-7">© 2025-26 DocNet. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="cursor-pointer">
            <Image src={facebook} alt="facebook" width={24} height={24} />
          </button>
          <button className="cursor-pointer">
            <Image src={twitter} alt="twitter" width={24} height={24} />
          </button>
          <button className="cursor-pointer">
            <Image src={instagram} alt="instagram" width={24} height={24} />
          </button>
          <button className="cursor-pointer">
            <Image src={youtube} alt="youtube" width={24} height={24} />
          </button>
          <button className="cursor-pointer">
            <Image src={pintrest} alt="pintrest" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
