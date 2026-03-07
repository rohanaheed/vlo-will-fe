import React from "react";
import Header from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import tickIcon from "@/components/assets/images/CheckIcon1.svg";
import Image from "next/image";
import newsletterimage1 from "@/components/assets/images/newsletterimage1.svg";
import newsletterimage2 from "@/components/assets/images/newsletterimage2.svg";
import newsletterimage3 from "@/components/assets/images/newsletterimage3.svg";
import Faq from "@/components/common/FAQ";
import faqIllustration from "@/components/assets/images/FAQ.svg";
import Link from "next/link";

function page() {
  return (
    <div>
      <Header />
      <main className="bg-white">
        {/* Banner Section */}
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-12 md:pb-20 bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto bg-[#FAFAFA]">
            <div className=" rounded-lg px-2 py-6 md:py-10 lg:py-16 text-center max-w-[768px] mx-auto">
              <h1 className="text-2xl md:text-4xl font-semibold text-text-1 mb-5">
                Stay Informed with the LawNest Newsletter
              </h1>
              <p className="text-text-5 text-lg md:text-xl mx-auto mb-8">
                Keep up to date with the latest legal templates, business
                resources, and expert insights delivered straight to your inbox.
              </p>
              <div className="max-w-[500px] mx-auto">
                <form className="flex flex-col sm:flex-row gap-3 mb-3">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full flex-1 px-4 py-2.5 shadow mb-1.5 rounded-lg border border-gray-200 outline-none focus:border-main focus:ring-1 focus:ring-main transition-all text-text-1 bg-white"
                      required
                    />
                    <p className="text-sm text-text-5 text-left">
                      By subscribing, you agree to receive periodic emails from
                      LawNest. For more information, see our [Privacy Policy] .
                    </p>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-main text-white font-semibold px-6 py-3 whitespace-nowrap rounded-lg hover:bg-main/85 transition-colors shrink-0 cursor-pointer"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Text Left, Image Right */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative">
              <Image
                src={newsletterimage1}
                alt="Why Join Our Newsletter?"
                fill
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:mx-auto max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start mr-auto max-[1000px]:mx-auto max-[1000px]:px-4 max-[1000px]:py-14 min-[1001px]:pr-4">
              <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-6">
                Why Join Our Newsletter?
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-8">
                Subscribing to the LawNest Newsletter helps you stay ahead of
                important legal and business changes. You'll receive exclusive
                updates, helpful guides, and time-saving tips for managing
                personal, business, and property documents.
              </p>
              <h3 className="font-semibold text-text-1 text-xl md:text-3xl mb-6">
                Key points:
              </h3>
              <ul className="space-y-4 pl-4">
                {[
                  "Get notified when new legal templates are released",
                  "Receive practical advice from our legal experts",
                  "Learn how to handle common legal tasks with confidence",
                  "Stay informed about changes in UK, US, and Australian law",
                  "Access limited-time offers and member benefits",
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
                      {item}
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
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative min-[1001px]:order-last">
              <Image
                src={newsletterimage2}
                alt="Inside Each Issue"
                fill
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:mx-auto max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] max-[1001px]:px-4 min-[1001px]:mr-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:py-14 min-[1001px]:pl-4">
              <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-6">
                Inside Each Issue
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                Our monthly newsletter covers a mix of content designed for
                individuals, business owners, and professionals.
              </p>
              <h3 className="font-semibold text-text-1 text-xl md:text-3xl mb-6">
                Example Topics:
              </h3>
              <ul className="space-y-4 pl-4">
                {[
                  "Understanding the latest legal document trends",
                  "Tips for writing better contracts and wills",
                  "Small business legal checklists",
                  "Case studies and real-world success stories",
                  "Step-by-Step how-to guides",
                ].map((item, idx) => (
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
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Text Left, Image Right */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative">
              <Image
                src={newsletterimage3}
                alt="Simple and Secure"
                fill
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:mx-auto max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start mr-auto max-[1000px]:mx-auto max-[1000px]:px-4 max-[1000px]:py-14 min-[1001px]:pr-4">
              <h2 className="text-2xl md:text-4xl text-left font-medium text-text-1 mb-6">
                Simple and Secure
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-8">
                Subscribing takes less than a minute. Just enter your email,
                confirm your subscription, and start receiving updates. You can
                unsubscribe anytime with a single click. We never share your
                details with third parties.
              </p>
              <div className="max-w-[500px]">
                <form className="flex flex-col sm:flex-row gap-3 mb-3">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full flex-1 px-4 py-2.5 shadow mb-1.5 rounded-lg border border-gray-200 outline-none focus:border-main focus:ring-1 focus:ring-main transition-all text-text-1 bg-white"
                      required
                    />
                    <p className="text-sm text-text-5 text-left">
                      By subscribing, you agree to receive periodic emails from
                      LawNest. For more information, see our [Privacy Policy] .
                    </p>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-main text-white font-semibold px-6 py-3 whitespace-nowrap rounded-lg hover:bg-main/85 transition-colors shrink-0 cursor-pointer"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
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
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center h-full">
              <Faq
                value={[
                  {
                    id: 1,
                    question: "  How often will I receive the newsletter?",
                    answer:
                      "We send one issue per month and occasional special updates.",
                  },
                  {
                    id: 2,
                    question: " Can I unsubscribe anytime?",
                    answer: "Yes, every email includes an unsubscribe link.",
                  },
                  {
                    id: 3,
                    question: " Is my information secure?",
                    answer:
                      "Absolutely. We comply with GDPR and data protection laws.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default page;
