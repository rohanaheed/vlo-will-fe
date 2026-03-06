import React from "react";
import Header from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import Aboutuser1 from "@/components/assets/images/Aboutuser1.svg";
import Aboutuser2 from "@/components/assets/images/Aboutuser2.svg";
import Aboutuser3 from "@/components/assets/images/Aboutuser3.svg";
import Aboutuser4 from "@/components/assets/images/Aboutuser4.svg";
import Aboutuser5 from "@/components/assets/images/Aboutuser5.svg";
import aboutimage1 from "@/components/assets/images/aboutimage1.svg";
import aboutimage2 from "@/components/assets/images/aboutimage2.svg";
import aboutimage3 from "@/components/assets/images/aboutimage3.svg";
import tick from "@/components/assets/images/CheckIcon1.svg";
import Slider from "@/components/common/slider";
import UserSlider from "@/components/common/UserSlider";
import bgSlider from "@/components/assets/images/SliderBg2.jpg";
import AbdulWahab from "@/components/assets/images/AbdulWahab.png";
import JavidWatto from "@/components/assets/images/JavidWatto.png";
import email from "@/components/assets/images/MailIconWhite.svg";
import phone from "@/components/assets/images/PhoneIcon.svg";
import chat from "@/components/assets/images/ChatIconWhite.svg";
import LocationIcon from "@/components/assets/images/LocationIcon.svg";
const expertsData = [
  {
    name: "Abdul Wahab",
    title: "CEO & Founder",
    desc: "Advocate High Courts (LLB University of London, LLM)",
    image: AbdulWahab,
    bgColor: "#EFFAFA",
  },
  {
    name: "Javid Watotoo",
    title: "Co-Founder, LLB, MA, LLM",
    desc: "Solicitor of supreme court of England and Wales.",
    image: JavidWatto,
    bgColor: "#E9F8E9",
  },
  {
    name: "Abdul Wahab",
    title: "CEO & Founder",
    desc: "Advocate High Courts (LLB University of London, LLM)",
    image: AbdulWahab,
    bgColor: "#FCF3E8",
  },
  {
    name: "Javid Watotoo",
    title: "Co-Founder, LLB, MA, LLM",
    desc: "Solicitor of supreme court of England and Wales.",
    image: JavidWatto,
    bgColor: "#FBE8FA",
  },
  {
    name: "Abdul Wahab",
    title: "CEO & Founder",
    desc: "Advocate High Courts (LLB University of London, LLM)",
    image: AbdulWahab,
    bgColor: "#EFFAFA",
  },
  {
    name: "Javid Watotoo",
    title: "Co-Founder, LLB, MA, LLM",
    desc: "Solicitor of supreme court of England and Wales.",
    image: JavidWatto,
    bgColor: "#E9F8E9",
  },
];

function page() {
  return (
    <div>
      <Header />
      <main>
        <div>
          <div className="bg-[url('@/components/assets/images/Background.svg')]  bg-cover bg-center">
            <div className="max-w-[1200px] mx-auto max-[1200px]:px-4 p-4 pt-25 md:pt-30 pb-12 md:pb-20">
              <div className=" w-full mx-auto text-center">
                <p className="font-semibold text-main mb-3">About LawNest</p>
                <h1 className="text-center lg:text-4xl md:text-2xl text-xl font-semibold text-text-1">
                  Who We Are
                </h1>
                <p className="text-text-5 text-base md:text-lg mt-4">
                  <strong>LawNest</strong> is an online legal document platform
                  that makes it easy for individuals and businesses to create
                  reliable, lawyer-approved documents in minutes.{" "}
                </p>
                <p className="text-text-5 text-base md:text-lg mt-4">
                  We believe legal services should be simple, accessible, and
                  affordable for everyone — without hidden costs or complicated
                  jargons.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fafafa]">
          <div className="max-w-[1200px] max-[1200px]:px-4 mx-auto">
            <div className="py-6 md:py-16 lg:py-24 grid grid-cols-1 min-[1001px]:grid-cols-2 items-center gap-8">
              <div className="shrink-0 flex items-center justify-center min-[1001px]:order-last w-full md:w-auto">
                <div className="flex flex-col gap-3 md:gap-4 items-center justify-center min-[1001px]:scale-110 transform origin-center">
                  {/* First Row: 2 Images */}
                  <div className="flex gap-4 md:gap-6 items-end">
                    <div className="w-[70px] md:w-[100px]">
                      <Image
                        src={Aboutuser1}
                        alt="User"
                        width={100}
                        height={130}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="w-[85px] md:w-[120px]">
                      <Image
                        src={Aboutuser2}
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
                        src={Aboutuser3}
                        alt="User"
                        width={110}
                        height={90}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="w-[65px] md:w-[100px]">
                      <Image
                        src={Aboutuser4}
                        alt="User"
                        width={100}
                        height={90}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="w-[75px] md:w-[110px]">
                      <Image
                        src={Aboutuser5}
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
                <h2 className="text-2xl md:text-4xl font-medium text-text-1 mb-5">
                  Our Mission
                </h2>
                <p className="text-text-5 text-lg md:text-xl mb-5">
                  To empower people to manage their legal needs confidently by
                  providing professional, easy-to-use document tools and
                  guidance, anytime, anywhere.
                </p>
                <div className="flex max-md:flex-col gap-3">
                  <button className="text-main border border-black/16 cursor-pointer hover:bg-main hover:text-white transition-all duration-300 ease-in-out px-5.25 font-semibold py-2.5 rounded-md">
                    Learn More
                  </button>
                  <button className="text-white bg-main border border-black/16 cursor-pointer hover:bg-main/85 transition-all duration-300 ease-in-out px-5.25 font-semibold py-2.5 rounded-md">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Image Left, Text Right - What We Offer */}
        <div className="bg-white">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative">
              <Image
                src={aboutimage1}
                alt="What We Offer"
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 max-[1000px]:py-14 min-[1001px]:pr-4">
              <div className="max-w-[500px]">
                <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-6">
                  What We Offer
                </h2>
                <p className="text-text-5 text-lg md:text-xl">
                  <strong className="font-semibold">LawNest</strong> gives you
                  access to a wide range of customisable legal documents — from
                  Wills, Power of Attorney, and Tenancy Agreements to Business
                  Contracts, Employment Policies, and more.
                </p>
                <p className="text-text-5 text-lg md:text-xl mb-12">
                  Every template is written and reviewed by legal professionals
                  to meet current UK laws.
                </p>

                <h3 className="font-semibold text-text-1 text-xl md:text-3xl mb-8">
                  Key Features:
                </h3>
                <ul className="space-y-5 pl-4">
                  {[
                    "Step-by-step guided forms",
                    "Professionally drafted templates",
                    "Secure online storage",
                    "Easy editing and instant downloads",
                    "eSignatures and sharing options",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                        <Image src={tick} alt="check" width={12} height={10} />
                      </div>
                      <span className="text-base md:text-lg text-text-5">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Text Left, Slider Right - Why Choose LawNest */}
        <div className="bg-white">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative min-[1001px]:order-last bg-[#F9F9F9] overflow-hidden">
              <div className="w-full h-full relative">
                <Slider
                  data={[
                    {
                      image: bgSlider,
                      quote:
                        "I made a will in under 10 minutes and downloaded it as Word.",
                      author: "Sienna Hewitt",
                      role: "Founder",
                      location: "Birmingham",
                      rating: 5,
                    },
                    {
                      image: bgSlider,
                      quote: "Super easy to use and very helpful support team.",
                      author: "John Doe",
                      role: "Engineer",
                      location: "New York",
                      rating: 5,
                    },
                    {
                      image: bgSlider,
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

            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] max-[1001px]:px-4 min-[1001px]:mr-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:py-14 min-[1001px]:pl-4">
              <div className="max-w-[500px]">
                <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-6">
                  Why choose LawNest?
                </h2>
                <ul className="space-y-6 pl-4">
                  {[
                    {
                      bold: "Reliable",
                      text: "— All documents are built to meet legal standards.",
                    },
                    {
                      bold: "Affordable",
                      text: "— No hourly fees or appointments required.",
                    },
                    {
                      bold: "Fast",
                      text: "— Create and download your document in less than 10 minutes.",
                    },
                    {
                      bold: "Accessible",
                      text: "— Available online 24/7 from any device.",
                    },
                    {
                      bold: "Supportive",
                      text: "— Our friendly team is always ready to help.",
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                        <Image src={tick} alt="check" width={12} height={10} />
                      </div>
                      <span className="text-base md:text-lg text-text-5">
                        <strong className="text-text-5 font-bold">
                          {item.bold}
                        </strong>{" "}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Image Left, Text Right - Our Values */}
        <div className="bg-white border-b border-[#f2f2f2]">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative">
              <Image
                src={aboutimage2}
                alt="Our Values"
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 max-[1000px]:py-14 min-[1001px]:pr-4">
              <div className="max-w-[500px]">
                <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-6">
                  Our Values
                </h2>
                <ul className="space-y-5 pl-4">
                  {[
                    {
                      bold: "Transparency:",
                      text: "No hidden terms or complicated legal language.",
                    },
                    {
                      bold: "Trust:",
                      text: "We prioritise data privacy and secure handling of your information.",
                    },
                    {
                      bold: "Innovation:",
                      text: "Simplifying complex legal processes with smart digital tools.",
                    },
                    {
                      bold: "Empowerment:",
                      text: "Helping individuals and businesses take control of their legal needs.",
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                        <Image src={tick} alt="check" width={12} height={10} />
                      </div>
                      <span className="text-base md:text-lg text-text-5">
                        <strong className="text-text-5 font-bold">
                          {item.bold}
                        </strong>{" "}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: How It Works */}
        <div className="p-4 lg:py-24 md:py-18 py-8 max-w-[1200px] mx-auto">
          <div className="max-w-md">
            <h1 className="lg:text-4xl text-2xl font-semibold text-text-1">
              How it works
            </h1>
            <p className="lg:text-xl text-lg font-normal text-text-5 mt-5">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className=" px-6 py-4 border-l-4 border-[#587C9F]">
                <h1 className="text-xl font-semibold text-text-1">
                  Step 1 — Pick the document
                </h1>
                <p className="text-base font-normal text-text-5 mt-2">
                  Complete a short guided form. We use your answers to populate
                  the document automatically.
                </p>
              </div>
              <div className=" px-6 py-4 border-l-4 border-[#F5F5F5]">
                <h1 className="text-xl font-semibold text-text-1">
                  Step 2 — Answer a few questions
                </h1>
                <p className="text-base font-normal text-text-5 mt-2">
                  Search or browse our library of templates (wills, tenancy,
                  contracts, business forms).
                </p>
              </div>
              <div className=" px-6 py-4 border-l-4 border-[#F5F5F5]">
                <h1 className="text-xl font-semibold text-text-1">
                  Step 3 — Customise & review
                </h1>
                <p className="text-base font-normal text-text-5 mt-2">
                  Make edits add clauses or request a legal review. Documents
                  are downloadable in Word or PDF.
                </p>
              </div>
              <div className=" px-6 py-4 border-l-4 border-[#F5F5F5]">
                <h1 className="text-xl font-semibold text-text-1">
                  Step 4 — Save, sign or share
                </h1>
                <p className="text-base font-normal text-text-5 mt-2">
                  Save your document to your account, print or share a secure
                  link. Use e-signatures where available.
                </p>
              </div>
            </div>
            <div className="bg-[#F5F5F5] p-12 pr-0">
              <Image
                src={aboutimage3}
                alt="docIcon"
                width={749}
                height={749}
                className="min-w-full min-h-fit object-cover object-left"
              />
            </div>
          </div>
        </div>
        <div className="bg-main text-center pt-12 md:pt-24 pb-40">
          <div className="max-w-[768px] mx-auto">
            <h1 className="text-center lg:text-[36px] md:text-2xl text-xl font-semibold text-white">
              Join Thousands of Users
            </h1>
            <p className="mt-5 lg:text-xl md:text-lg text-base font-normal text-[#F3F3F3]">
              Real results from users who trust{" "}
              <strong className="font-bold">LawNest</strong> to create,
              customise and manage legal documents quickly and securely.
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] max-[1200px]:px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-4 bg lg:p-14 md:p-10 p-6 translate-y-[-100px]">
            <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
              <h1 className="text-3xl font-bold text-main">25,000+</h1>
              <h2 className="text-lg mt-3 font-semibold text-text-1">
                Legal documents created
              </h2>
              <p className="text-base font-normal text-text-5 mt-2">
                Documents generated across wills, tenancy, business and more.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
              <h1 className="text-3xl font-bold text-main">12,300+</h1>
              <h2 className="text-lg mt-3 font-semibold text-text-1">
                Registered users
              </h2>
              <p className="text-base font-normal text-text-5 mt-2">
                Active accounts who've saved drafts or completed documents.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
              <h1 className="text-3xl font-bold text-main">4.8/5</h1>
              <h2 className="text-lg mt-3 font-semibold text-text-1">
                Average customer rating
              </h2>
              <p className="text-base font-normal text-text-5 mt-2">
                Based on user reviews for ease, accuracy and support.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] max-[1200px]:px-4 mx-auto lg:py-24 md:py-18 py-12">
          <div className="">
            <h1 className="lg:text-4xl text-2xl font-semibold text-text-1">
              Meet Our Legal Experts
            </h1>
            <p className="md:text-xl text-lg font-normal text-text-5 mt-5">
              At LawNest, our legal team ensures every document and guide meets
              the highest standards of accuracy, clarity, and compliance. Our
              solicitors, legal editors, and researchers work together to make
              complex law simple and accessible for everyone.
            </p>
          </div>
          <UserSlider data={expertsData} />
        </div>
        <div className="max-w-[1200px] max-[1200px]:px-4 mx-auto lg:py-24 md:py-18 py-12">
          <div className="">
            <p className="text-base font-semibold text-main mb-3">Contact us</p>
            <h1 className="lg:text-4xl text-2xl font-semibold text-text-1">
              Have a question or need help getting started?
            </h1>
            <p className="md:text-xl text-lg font-normal text-text-5 mt-5">
              Our friendly support team is available via live chat, email, or
              phone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12 w-full">
            {/* Email Card */}
            <div className="bg-[#fafafa] p-4 md:p-6 flex flex-col items-start h-full">
              <div className="bg-[#0b294d] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Image src={email} alt="Email" width={24} height={24} />
              </div>
              <h2 className="text-xl font-bold text-text-1 mb-2">Email</h2>
              <p className="text-base text-text-5 mb-5">
                Our friendly team is here to help.
              </p>
              <p className="font-semibold text-main text-base cursor-pointer hover:underline">
                support@lawnest.co.uk
              </p>
            </div>

            {/* Live Chat Card */}
            <div className="bg-[#fafafa] p-4 md:p-6 flex flex-col items-start h-full">
              <div className="bg-[#0b294d] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Image src={chat} alt="Chat" width={24} height={24} />
              </div>
              <h2 className="md:text-xl text-lg font-semibold text-text-1 mb-2">
                Live chat
              </h2>
              <p className="text-base text-text-5 mb-5">
                Available Monday—Friday,
                <br />
                9am—6pm (GMT)
              </p>
              <p className="font-semibold text-main text-base cursor-pointer hover:underline">
                Start new chat
              </p>
            </div>

            {/* Visit Us Card */}
            <div className="bg-[#FAF9F9] p-4 md:p-6 flex flex-col items-start h-full">
              <div className="bg-[#0b294d] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Image
                  src={LocationIcon}
                  alt="Location"
                  width={24}
                  height={24}
                />
              </div>
              <h2 className="md:text-xl text-lg font-semibold text-text-1 mb-2">
                Visit us
              </h2>
              <p className="text-base text-text-5 mb-5">Visit our office HQ.</p>
              <p className="font-semibold text-main text-base cursor-pointer hover:underline">
                Dale House, Tiviot Dale,
                <br />
                Stockport, England, SK1
                <br />
                1TA
              </p>
            </div>

            {/* Call Us Card */}
            <div className="bg-[#FAF9F9] p-4 md:p-6 flex flex-col items-start h-full">
              <div className="bg-[#0b294d] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Image src={phone} alt="Phone" width={24} height={24} />
              </div>
              <h2 className="md:text-xl text-lg font-semibold text-text-1 mb-2">
                Call us
              </h2>
              <p className="text-base text-text-5 mb-5">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="font-semibold text-main text-base cursor-pointer hover:underline">
                +44 20 1234 5678
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default page;
