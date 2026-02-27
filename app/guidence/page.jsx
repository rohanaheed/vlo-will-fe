"use client";
import React from "react";
import Header from "../../components/common/UserHeader";
import Footer from "../../components/common/Footer";
import Image from "next/image";
import user1 from "@/components/assets/images/User1.svg";
import user2 from "@/components/assets/images/User2.svg";
import user3 from "@/components/assets/images/User3.svg";
import ChatIcon from "@/components/assets/images/ChatIcon.svg";
import ThunderIcon from "@/components/assets/images/ThunderIcon.svg";
import EmployeeIcon from "@/components/assets/images/EmployeeIcon.svg";
import ChatSmileIcon from "@/components/assets/images/ChatSmileIcon.svg";
import MattersIcon from "@/components/assets/images/MattersIcon.svg";
import ChatHeartIcon from "@/components/assets/images/ChatHeartIcon.svg";
import GuidenceUser1 from "@/components/assets/images/GuidenceUser1.svg";
import GuidenceUser2 from "@/components/assets/images/GuidenceUser2.svg";
import GuidenceUser3 from "@/components/assets/images/GuidenceUser3.svg";
import GuidenceUser4 from "@/components/assets/images/GuidenceUser4.svg";
import GuidenceUser5 from "@/components/assets/images/GuidenceUser5.svg";
import ArrowBackIcon from "@/components/assets/images/ArrowRightBlueIcon.svg";
import Guidence from "@/components/assets/images/Guidence.svg";
import Check from "@/components/assets/images/Check.svg";
import Education from "@/components/assets/images/Education.svg";
import checkIcon from "@/components/assets/images/CheckIcon1.svg";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <main>
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-20 md:pt-30 pb-5 md:pb-10 bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-text-1 mb-6">
                Your Legal Knowledge Hub
              </h1>
              <p className="text-text-5 text-base md:text-xl">
                Learm more about the documents, laws, and processes that matter
                most. Our step-by-step guides and legal resources help you
                understand your rights, prepare documents correctly, and make
                confident legal decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="max-w-[1200px] max-[1200px]:px-4 mx-auto">
          <div className="py-6 md:py-16 lg:py-24 grid grid-cols-1 min-[1001px]:grid-cols-2 items-center gap-8">
            <div className="shrink-0 flex items-center justify-center min-[1001px]:order-last w-full md:w-auto">
              <div className="flex flex-col gap-3 md:gap-4 items-center justify-center min-[1001px]:scale-110 transform origin-center">
                {/* First Row: 2 Images */}
                <div className="flex gap-4 md:gap-6 items-end">
                  <div className="w-[70px] md:w-[100px]">
                    <Image
                      src={GuidenceUser1}
                      alt="User"
                      width={100}
                      height={130}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="w-[85px] md:w-[120px]">
                    <Image
                      src={GuidenceUser2}
                      alt="User"
                      width={120}
                      height={150}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                {/* Second Row: 3 Images */}
                <div className="flex gap-2.5 md:gap-4 items-start">
                  <div className="w-[75px] md:w-[110px]">
                    <Image
                      src={GuidenceUser3}
                      alt="User"
                      width={110}
                      height={90}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="w-[65px] md:w-[100px]">
                    <Image
                      src={GuidenceUser4}
                      alt="User"
                      width={100}
                      height={90}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="w-[75px] md:w-[110px]">
                    <Image
                      src={GuidenceUser5}
                      alt="User"
                      width={110}
                      height={90}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-main font-semibold mb-3">Introduction</p>
              <h2 className="text-2xl md:text-4xl font-semibold text-text-1 mb-5">
                Trusted Legal Guidance for Everyday Situations
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-5">
                Whether you're writing a will, starting a business, or renting
                property, understanding the legal basics can
              </p>
              <p className="text-text-5 text-lg md:text-xl mb-5">
                save you time and money. Explore LawNest expert-written
                articles, templates, and checklists designed to
              </p>
              <p className="text-text-5 text-lg md:text-xl mb-5">
                help individuals and businesses handle legal matters with
                confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="max-w-[1200px] max-[1200px]:px-4 mx-auto">
          <p className="text-main font-semibold mb-3">Categories & Topics</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text-1 mb-4">
            Explore by Category
          </h2>
          <p className="text-text-5 text-lg md:text-xl mb-4 md:mb-10 lg:mb-16">
            Whether you're writing a will, starting a business, or renting
            property, understanding the legal basics can save you time and
            money. Explore <strong>LawNest</strong> expert-written articles,
            templates, and checklists designed to/ help individuals and
            businesses handle legal matters with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Wills & Estate Planning",
                icon: ChatIcon,
                desc: "Learn how to create wills, trusts, and powers of attorney to protect your assets and outline future plans.",
              },
              {
                title: "Business & Corporate",
                icon: ThunderIcon,
                desc: "Find out how to form a company, draft agreements, and manage business compliance.",
              },
              {
                title: "Employment & HR",
                icon: EmployeeIcon,
                desc: "Understand your rights as an employer or employee, from contracts, policies, and workplace procedures.",
              },
              {
                title: "Property & Tenancy",
                icon: ChatSmileIcon,
                desc: "Learn about lease agreements, landlord and tenant rights, and property management essentials.",
              },
              {
                title: "Family & Personal Matters",
                icon: MattersIcon,
                desc: "Guidance for marriage, separation, child support, and other personal legal matters.",
              },
              {
                title: "Intellectual Property & Privacy",
                icon: ChatHeartIcon,
                desc: "Protect your creations and stay compliant with privacy laws.",
              },
            ].map((cat, idx) => (
              <div key={idx} className="">
                <div className="w-12 h-12 border border-[#E9EAEB] rounded-lg flex items-center justify-center mb-5">
                  <Image
                    src={cat.icon}
                    alt={cat.title}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="font-semibold text-xl text-text-1 mb-2">
                  {cat.title}
                </h3>
                <p className="text-text-5 mb-5">{cat.desc}</p>
                <button className="text-main font-semibold flex items-center gap-1.5 hover:underline cursor-pointer mb-6 md:mb-10 lg:mb-16">
                  Read Guides{" "}
                  <Image
                    src={ArrowBackIcon}
                    alt="Arrow"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Guides Section */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2 min-[1001px]:pl-4">
            <div className="flex-1 flex justify-center h-full min-[1001px]:min-h-[720px] relative min-[1001px]:order-last">
              <Image
                src={Guidence}
                alt="Legal Guidance"
                // fill
                className="object-cover h-full w-full max-md:max-w-[500px]"
              />
            </div>
            <div className="w-full min-[1001px]:max-w-[640px] max-[1001px]:px-4 min-[1001px]:mr-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 max-[1000px]:py-10">
              <div className="flex items-center">
                <h2 className="text-2xl md:text-4xl text-left font-semibold text-text-1 mb-8">
                  Featured Guides
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    title: "How to Write a Last Will and Testament",
                    text: "Step-by-step instructions and legal requirements.",
                  },
                  {
                    title: "Starting a Business in the UK",
                    text: "Essential documents and setup guidance.",
                  },
                  {
                    title: "Understanding Power of Attorney",
                    text: "Different types and how to choose the right one.",
                  },
                  {
                    title: "Tenancy Agreements Explained",
                    text: "Rights and responsibilities for landlords and tenants.",
                  },
                  {
                    title: "Employment Contracts 101",
                    text: "What to include for legal protection.",
                  },
                ].map((guide, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#ECF6FF] rounded-full p-2">
                      <Image
                        src={checkIcon}
                        alt="check"
                        width={14}
                        height={12}
                      />
                    </div>
                    <div>
                      <span className="font-bold text-lg text-text-5">
                        {guide.title} —{" "}
                      </span>
                      <span className="text-text-5">{guide.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tools and Checklists Section */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2 min-[1001px]:pr-4">
            <div className="flex-1 flex justify-center h-full min-[1001px]:min-h-[720px] relative">
              <Image
                src={Check}
                alt="Education Tools"
                // fill
                className="object-cover h-full w-full max-md:max-w-[500px]"
              />
            </div>
            <div className="w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 max-[1000px]:py-10">
              <p className="text-main font-semibold mb-2.5">
                Legal Tools & Resources
              </p>
              <h2 className="text-2xl md:text-4xl text-left font-semibold text-text-1 mb-4">
                Helpful Tools and Checklists
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-12">
                Access templates, calculators, and interactive tools to make
                document preparation easier.
              </p>
              <h3 className="font-bold text-text-1 text-xl md:text-3xl mb-8">
                Key Features:
              </h3>
              <ul className="space-y-4">
                {[
                  "Legal Document Checklist",
                  "Will Preparation Planner",
                  "Business Start-up Toolkit",
                  "Landlord Inspection Template",
                  "Employment Policy Checklist",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-[#ECF6FF] rounded-full p-2">
                      <Image
                        src={checkIcon}
                        alt="check"
                        width={14}
                        height={12}
                      />
                    </div>
                    <span className="text-lg text-text-5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Insights Section */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-full min-[1001px]:min-h-[720px] relative min-[1001px]:order-last">
              <Image
                src={Education}
                alt="Insights"
                // fill
                className="object-cover h-full w-full max-md:max-w-[500px]"
              />
            </div>
            <div className="w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1001px]:mr-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 max-[1000px]:py-10">
              <p className="text-main font-semibold mb-2.5">
                Educational Blog / Insights
              </p>
              <h2 className="text-2xl md:text-4xl text-left font-semibold text-text-1 mb-4">
                Insights & Updates
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-12">
                Stay informed with legal news, practical tips, and policy
                updates written by legal professionals.
              </p>
              <p className="text-text-5 text-lg md:text-xl">
                Button: Read the Blog
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 my-8 md:my-24 md:mt-16 max-w-[1200px] max-[1200px]:px-4 mx-auto">
          <div className="bg-[#FAFAFA] rounded-2xl py-8 p-4">
            <div className="max-w-[768px] mx-auto">
              <div className="flex items-center justify-center relative mt-10">
                <div className="border-2 border-white rounded-full inline-block absolute left-1/2 -translate-x-[calc(50%+30px)]">
                  <Image
                    src={user1}
                    alt="media"
                    width={48}
                    height={48}
                    className=""
                  />
                </div>
                <div className="border-2 border-white rounded-full inline-block absolute left-1/2 -translate-x-1/2 z-10 -translate-y-2">
                  <Image
                    src={user2}
                    alt="media"
                    width={56}
                    height={56}
                    className=""
                  />
                </div>
                <div className="border-2 border-white rounded-full inline-block absolute left-1/2 -translate-x-[calc(50%-30px)]">
                  <Image
                    src={user3}
                    alt="media"
                    width={48}
                    height={48}
                    className=""
                  />
                </div>
              </div>
              <h2 className="text-center mt-14 text-text-1 text-base md:text-xl font-semibold">
                Still have questions?
              </h2>
              <p className="text-center text-text-5 text-sm md:text-lg mt-2">
                Didn't find what you were looking for? Chat with our support
                team — we're here to help.
              </p>
              <div className="flex justify-center items-center mt-4">
                <button className="max-md:w-full cursor-pointer bg-[#0B2C4F] cursor pointer text-white p-3 mb-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Page;
