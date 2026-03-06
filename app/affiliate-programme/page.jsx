import React from "react";
import Header from "../../components/common/UserHeader";
import Footer from "../../components/common/Footer";
import Image from "next/image";
import tickIcon from "@/components/assets/images/CheckIcon1.svg";
import AffliateImage1 from "@/components/assets/images/AffliateImage1.svg";
import AffliateImage2 from "@/components/assets/images/AffliateImage2.svg";
import AffliateImage3 from "@/components/assets/images/AffliateImage3.svg";
import AffliateImage4 from "@/components/assets/images/AffliateImage4.svg";
import AffliateImage5 from "@/components/assets/images/AffliateImage5.svg";
import SarahImage from "@/components/assets/images/Sarah.svg";
import Faq from "@/components/common/FAQ";
import faqIllustration from "@/components/assets/images/FAQ.svg";
import user1 from "../../components/assets/images/User1.svg";
import user2 from "../../components/assets/images/User2.svg";
import user3 from "../../components/assets/images/User3.svg";

function Page() {
  return (
    <div>
      <Header />
      <main>
        {/* Banner Section */}
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-12 md:pb-20 bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto text-center">
            <p className="font-semibold text-main mb-3">Join the LawNest</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-1 mb-6">
              Affiliate Programme
            </h1>
            <p className="text-text-5 text-lg md:text-xl mx-auto">
              Promote professional legal documents, earn generous commission.
              Simple, effective and tailored for UK audiences.
            </p>
          </div>
        </div>

        {/* Section 1: Text Left, Image Right */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative min-[1001px]:order-last">
              <Image
                src={AffliateImage1}
                alt="Why Partner with LawNest"
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] max-[1001px]:px-4 min-[1001px]:mr-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:py-14 min-[1001px]:pl-4">
              <h2 className="text-2xl md:text-4xl text-left font-bold text-text-1 mb-6">
                Why Partner with LawNest
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                Running a blog, website, or social media channel in law,
                business, or lifestyle? Our affiliate programme gives you:
              </p>
              <ul className="space-y-4 pl-4">
                {[
                  {
                    html: (
                      <>
                        Earn up to{" "}
                        <strong className="text-text-1 font-semibold">
                          30% commission
                        </strong>{" "}
                        for each sale coming via your link.
                      </>
                    ),
                  },
                  {
                    html: <>Free to join—no fees, no upfront cost.</>,
                  },
                  {
                    html: (
                      <>
                        A broad library of UK-law compliant documents (Wills,
                        business contracts, HR policies) for you to promote.
                      </>
                    ),
                  },
                  {
                    html: (
                      <>Easy-to-use banners, deep links and tracking tools.</>
                    ),
                  },
                  {
                    html: (
                      <>Monthly payments once you hit the minimum threshold.</>
                    ),
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                      <Image
                        src={tickIcon}
                        alt="check"
                        width={12}
                        height={10}
                      />
                    </div>
                    <span className="text-base md:text-lg text-text-5">
                      {item.html}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Image Left, Text Right */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative">
              <Image
                src={AffliateImage2}
                alt="How It Works"
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 max-[1000px]:py-14 min-[1001px]:pr-4">
              <div className="max-w-[550px]">
                <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-8">
                  How It Works
                </h2>
                <ul className="space-y-6 pl-4">
                  {[
                    {
                      bold: "Sign up",
                      text: "– Create a free affiliate account.",
                    },
                    {
                      bold: "Get links & banners",
                      text: "– Choose from ready-made assets or create deep links to specific documents.",
                    },
                    {
                      bold: "Promote",
                      text: "– Share links on your website, blog, social media, emails or adverts.",
                    },
                    {
                      bold: "Earn commission",
                      text: "– Visitors use your link → make a purchase → you earn commission.",
                    },
                    {
                      bold: "Get paid",
                      text: "– Commissions are tracked; you receive payment each month once the minimum payout is reached.",
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                        <Image
                          src={tickIcon}
                          alt="check"
                          width={12}
                          height={10}
                        />
                      </div>
                      <span className="text-base md:text-lg text-text-5">
                        <strong className="text-text-1 font-semibold">
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

        {/* Section 3: Text Left, Image Right */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative min-[1001px]:order-last">
              <Image
                src={AffliateImage3}
                alt="Commission & Payment Terms"
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] max-[1001px]:px-4 min-[1001px]:mr-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:py-14 min-[1001px]:pl-4">
              <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-8">
                Commission & Payment Terms
              </h2>
              <ul className="space-y-4 pl-4">
                {[
                  {
                    html: (
                      <>
                        <strong className="text-text-1 font-semibold">
                          Standard commission:
                        </strong>{" "}
                        30% of every sale made via your affiliate link.
                      </>
                    ),
                  },
                  {
                    html: (
                      <>
                        Option to offer a discount to your audience and still
                        earn part of the commission (e.g., give 10% discount +
                        20% commission).
                      </>
                    ),
                  },
                  {
                    html: (
                      <>
                        Payments made monthly, when your total reaches the
                        payout threshold (e.g.,{" "}
                        <strong className="text-text-1 font-semibold">
                          £50
                        </strong>
                        ).
                      </>
                    ),
                  },
                  {
                    html: (
                      <>
                        <strong className="text-text-1 font-semibold">
                          Payment methods:
                        </strong>{" "}
                        PayPal or bank transfer.
                      </>
                    ),
                  },
                  {
                    html: (
                      <>
                        <strong className="text-text-1 font-semibold">
                          Tracking cookie duration:
                        </strong>{" "}
                        365 days (affiliate still credited if visitor converts
                        within 12 months).{" "}
                        <span className="block italic mt-1 text-sm">
                          (Note: Terms may vary by campaign.)
                        </span>
                      </>
                    ),
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                      <Image
                        src={tickIcon}
                        alt="check"
                        width={12}
                        height={10}
                      />
                    </div>
                    <span className="text-base md:text-lg text-text-5">
                      {item.html}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Image Left, Text Right */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative">
              <Image
                src={AffliateImage4}
                alt="Marketing Resources & Support"
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 max-[1000px]:py-14 min-[1001px]:pr-4">
              <div className="max-w-[550px]">
                <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-8">
                  Marketing Resources & Support
                </h2>
                <ul className="space-y-6 pl-4">
                  {[
                    "Access to our affiliate dashboard with real-time tracking of clicks, conversions and earnings.",
                    "Library of HTML banners, text links, deep links for high-converting documents.",
                    "Monthly newsletter with tips for affiliates, trending documents, and best-practice promotional ideas.",
                    "Dedicated affiliate support team to answer your questions and help optimise your campaigns.",
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                        <Image
                          src={tickIcon}
                          alt="check"
                          width={12}
                          height={10}
                        />
                      </div>
                      <span className="text-base md:text-lg text-text-5">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Text Left, Image Right */}
        <div className="mx-auto bg-white">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative min-[1001px]:order-last">
              <Image
                src={AffliateImage5}
                alt="Who Can Join?"
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] max-[1001px]:px-4 min-[1001px]:mr-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:py-14 min-[1001px]:pl-4">
              <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-8">
                Who Can Join?
              </h2>
              <ul className="space-y-4 pl-4">
                {[
                  {
                    html: (
                      <>
                        Bloggers, web publishers, legal bloggers or
                        business-site owners.
                      </>
                    ),
                  },
                  {
                    html: (
                      <>
                        Social media influencers, email marketers, coaches or
                        consultants in legal/business topics.
                      </>
                    ),
                  },
                  {
                    html: (
                      <>
                        You don't need to be a lawyer or have prior experience.
                      </>
                    ),
                  },
                  {
                    html: (
                      <>
                        No website? No problem—social channels and email lists
                        count too.
                      </>
                    ),
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                      <Image
                        src={tickIcon}
                        alt="check"
                        width={12}
                        height={10}
                      />
                    </div>
                    <span className="text-base md:text-lg text-text-5">
                      {item.html}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-text-5 font-medium leading-relaxed">
                <strong className="text-text-1">Note:</strong> Do not bid on
                LawNest branded keywords in paid search, impersonate LawNest, or
                use misleading advertising.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="max-w-[1200px] mx-auto py-12 md:py-18 lg:py-24">
          <div className="bg-[#FAFAFA] py-12 md:py-18 lg:py-24 px-6 md:px-14 lg:px-20 rounded-2xl">
            <div className="px-4">
              <div className="flex flex-col min-[900px]:flex-row gap-8 md:gap-14 items-center">
                <div className="shrink-0">
                  <Image
                    src={SarahImage}
                    alt="Sarah Lee"
                    width={328}
                    height={328}
                    className="rounded-2xl object-cover w-[250px] md:w-[329px] shadow-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FDB022"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="#FDB022"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-text-1 font-medium mb-8 leading-snug lg:leading-normal">
                    “LawNest saved us hundreds of hours and thousands in legal
                    fees when launching our partnership agreements. Their forms
                    were exactly what we needed.”
                  </p>
                  <div>
                    <p className="text-text-1 font-semibold text-lg mb-1">
                      — Sarah Lee
                    </p>
                    <p className="text-text-5 text-base">
                      Co-founder of TechStart Ltd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-16 lg:py-24">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-text-1 mb-5">
              Frequently asked questions
            </h2>
            <p className="text-text-5 text-lg md:text-xl">
              Find quick answers to common questions about creating, updating,
              and managing your legal documents with LawNest.
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
                    question: " How do I join?",
                    answer:
                      'Click "Join Now" and complete the short registration form. Approval is quick and free.',
                  },
                  {
                    id: 2,
                    question: " Do I need a website?",
                    answer:
                      "No. If you have a social following or email list, you can still join and promote.",
                  },
                  {
                    id: 3,
                    question: " When do I get paid?",
                    answer:
                      "Payments are processed on the first business day of each month once you reach the minimum amount.",
                  },
                  {
                    id: 4,
                    question:
                      " Can I promote a discount instead of commission?",
                    answer:
                      "Yes. You can offer a discount to your users (e.g., 10%) and keep a reduced commission (e.g., 20%), provided the total equals 30%.",
                  },
                  {
                    id: 5,
                    question: " What documents convert best?",
                    answer:
                      "Guides suggest deep linking to high-demand documents like Wills, Tenancy Agreements or Employment Contracts.",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Still have questions */}
        <div className="max-w-[1200px] mx-auto">
          <div className=" px-4 lg:mb-24 md:mb-16 mb-12 ">
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
                  Join the Programme
                </h2>
                <p className="text-center text-text-5 text-sm md:text-lg mt-2">
                  Get approval in minutes. Start promoting today.
                </p>
                <div className="flex justify-center items-center mt-8">
                  <button className="max-md:w-full cursor-pointer bg-[#0B2C4F] cursor pointer text-white p-3 mb-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Create Free Affiliate Account
                  </button>
                </div>
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
