import React from "react";
import UserHeader from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import mailIcon from "@/components/assets/images/MailIcon1.svg";
import phoneIcon from "@/components/assets/images/PhoneIcon.svg";
import chatIcon from "@/components/assets/images/ChatIcon.svg";
import Faq from "@/components/common/FAQ";
import support from "@/components/assets/images/Support.svg";
import user1 from "@/components/assets/images/User1.svg";
import user2 from "@/components/assets/images/User2.svg";
import user3 from "@/components/assets/images/User3.svg";
import tickIcon from "@/components/assets/images/CheckIcon1.svg";
import faqIllustration from "@/components/assets/images/FAQ.svg";

function Page() {
  return (
    <div>
      <UserHeader />
      <main>
        <div className="bg-[#FFFFFF] p-4 pt-20 md:pt-32 pb-6 md:pb-12 lg:pb-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center">
              <p className="text-main font-semibold mb-3 text-sm">
                Dedicated Support
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-text-1 mb-6">
                We're Here to Help — Every Step of the Way
              </h1>
              <p className="text-text-5 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                Whether you're creating your first document or managing your
                subscription, our support team is ready to assist. Chat, email,
                or call us — we'll make sure you get the help you need quickly
                and easily.
              </p>
            </div>
          </div>
        </div>

        {/* Support Options Grid */}
        <div className="max-w-[1200px] mx-auto px-4 pb-6 md:pb-10 lg:pb-16">
          <div className="mb-6 md:mb-10 lg:mb-16 text-left">
            <p className="text-main font-semibold mb-3">Contact</p>
            <h2 className="text-2xl md:text-4xl font-bold text-text-1 mb-5">
              Get in Touch
            </h2>
            <p className="text-text-5 text-lg md:text-xl">
              Choose the best way to reach our support team. We're available
              Monday to Friday, 9:30 AM — 4:00 PM.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {/* Email Card */}
            <div className="bg-[#FAFAFA] p-3 md:p-6 rounded-lg text-left flex flex-col items-start border border-gray-50">
              <div className="bg-main rounded-lg p-3 mb-4">
                <Image
                  src={mailIcon}
                  alt="Email"
                  width={20}
                  height={20}
                  className="brightness-0 invert w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-text-1 mb-2">Email</h3>
              <p className="text-text-5 mb-5">
                For detailed issues and general inquiries.
              </p>
              <a
                href="mailto:support@lawnest.co.uk"
                className="text-main font-semibold hover:underline"
              >
                support@lawnest.co.uk
              </a>
            </div>

            {/* Chat Card */}
            <div className="bg-[#FAFAFA] p-3 md:p-6 rounded-lg text-left flex flex-col items-start border border-gray-50">
              <div className="bg-main rounded-lg p-3 mb-4">
                <Image
                  src={chatIcon}
                  alt="Chat"
                  width={20}
                  height={20}
                  className="brightness-0 invert w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-text-1 mb-2">
                Live chat
              </h3>
              <p className="text-text-5 mb-5">
                Speak with our support team instantly.
              </p>
              <button className="text-main font-semibold hover:underline">
                Start live chat
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-[#FAFAFA] p-3 md:p-6 rounded-lg text-left flex flex-col items-start border border-gray-50">
              <div className="bg-main rounded-lg p-3 mb-4">
                <Image
                  src={phoneIcon}
                  alt="Phone"
                  width={20}
                  height={20}
                  className="brightness-0 invert w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-semibold text-text-1 mb-2">
                Call us
              </h3>
              <p className="text-text-5 mb-5">Mon-Fri, 9:30 AM to 4:00 PM</p>
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+442012345678"
                  className="text-main font-semibold hover:underline"
                >
                  +44 20 1234 5678
                </a>
                <a
                  href="tel:+447122345678"
                  className="text-main font-semibold hover:underline"
                >
                  +44 712 234 5678
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Support Covers Section */}
        <div className="">
          <div className="grid grid-cols-1 max-[1000px]:gap-6 min-[1001px]:grid-cols-2 min-[1001px]:pr-4">
            <div className="flex-1 flex justify-center h-full min-h-[300px] sm:min-h-[450px] min-[1001px]:min-h-[720px] relative">
              <Image
                src={support}
                alt="Support Covers"
                className="object-cover h-full w-full max-md:max-w-[500px]"
              />
            </div>
            <div className="w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 ">
              <p className="text-main font-semibold mb-2.5">How We Can Help</p>
              <h2 className="text-2xl md:text-4xl text-left font-semibold text-text-1 mb-4">
                What Our Support Covers
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-12">
                Our team provides clear, step-by-step help with:
              </p>
              <ul className="space-y-4">
                {[
                  "Creating and editing documents",
                  "Account and subscription management",
                  "Payment and billing support",
                  "Technical issues",
                  "General questions about LawNest services",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-[#ECF6FF] rounded-full p-2">
                      <Image
                        src={tickIcon}
                        alt="check"
                        width={14}
                        height={12}
                      />
                    </div>
                    <span className="text-lg text-text-5">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 mb-4">
                <button className="bg-main text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-main/90 transition-all shadow-lg shadow-main/10">
                  Read related articles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 py-6 md:py-12 lg:py-20">
          <div className="mb-6 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-1 mb-4">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-text-5 text-sm md:text-base">
              Find quick answers to the most common questions from our users.
            </p>
          </div>
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2 gap-6 md:gap-12 items-start">
            <div className="relative h-[250px] sm:h-[400px] md:h-[500px] overflow-hidden min-[1001px]:order-last">
              <Image
                src={faqIllustration}
                alt="FAQ Illustration"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div>
              <Faq
                value={[
                  {
                    id: 1,
                    question: "How do I create a document on LawNest?",
                    answer:
                      "Simply choose a template, answer guided questions, and download your completed document in minutes.",
                  },
                  {
                    id: 2,
                    question: "Can I edit my document after saving it?",
                    answer:
                      "Yes, you can edit your document anytime through your account — even after downloading.",
                  },
                  {
                    id: 3,
                    question: "Are LawNest templates legally valid?",
                    answer:
                      "All our templates are reviewed by qualified legal professionals to meet UK standards. However, LawNest is not a law firm and does not provide legal advice.",
                  },
                  {
                    id: 4,
                    question: "How does the subscription work?",
                    answer:
                      "Your subscription gives you unlimited access to all document templates, editing, and eSign features. You can cancel anytime.",
                  },
                  {
                    id: 5,
                    question:
                      "I've been charged but didn't mean to subscribe — what should I do?",
                    answer:
                      "Contact our billing team via chat or email, and they'll review your request promptly.",
                  },
                  {
                    id: 6,
                    question: "Can I use LawNest outside the UK?",
                    answer:
                      "Yes. We also provide templates suitable for Australia and the United States. Always check that the document meets your local legal requirements.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="px-4 my-6 md:my-16 lg:my-24 mt-6 md:mt-10 lg:mt-16 max-w-[1200px] max-[1200px]:px-4 mx-auto">
          <div className="bg-[#FAFAFA] rounded-2xl py-4 md:py-6 lg:py-8 p-4">
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
                Still Need Assistance?
              </h2>
              <p className="text-center text-text-5 text-sm md:text-lg mt-2">
                Can't find the answer you're looking for? Our dedicated support
                specialists are here to help you directly.
              </p>
              <div className="flex justify-center items-center mt-4">
                <button className="max-md:w-full cursor-pointer bg-[#0B2C4F] cursor pointer text-white p-3 mb-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Contact Support Team
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
