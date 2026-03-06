import React from "react";
import Header from "../../components/common/UserHeader";
import Footer from "../../components/common/Footer";
import Image from "next/image";
import GuranteeImage1 from "../../components/assets/images/GuranteeImage1.svg";
import GuranteeImage2 from "../../components/assets/images/GuranteeImage2.svg";
import GuranteeImage3 from "../../components/assets/images/GuranteeImage3.svg";
import GuranteeImage4 from "../../components/assets/images/GuranteeImage14.svg";
import GuranteeImage5 from "../../components/assets/images/GuranteeImage5.svg";
import check from "../../components/assets/images/CheckIcon1.svg";

function page() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-5 md:pb-10 bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center">
              <p className="text-main font-semibold mb-3">
                LawNest Quality Guarantee
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-text-1 mb-6">
                Your Trust. Our Commitment.
              </h1>
              <p className="text-text-5 text-lg md:text-xl mx-auto">
                At LawNest, we're committed to providing accurate, reliable, and
                easy-to-use legal documents you can depend on. Every template we
                offer is reviewed by legal professionals and crafted to meet the
                highest standards of clarity and compliance.
              </p>
            </div>
            <div></div>
          </div>
        </div>

        {/* Section 1: What Our Quality Guarantee Means (Image Left) */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-full min-[1001px]:min-h-[720px] relative">
              <Image
                src={GuranteeImage1}
                alt="Contract and gavel"
                className="object-cover h-full w-full max-md:max-w-[500px]"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 min-[1001px]:pr-4 max-[1000px]:py-10">
              <p className="text-main font-semibold mb-2.5">Our Promise</p>
              <h2 className="text-2xl md:text-4xl text-left font-semibold text-text-1 mb-4">
                What Our Quality Guarantee Means
              </h2>
              <p className="text-text-5 text-lg md:text-xl md:leading-relaxed">
                We stand behind every document you create with LawNest. Our
                templates are developed and maintained by experienced solicitors
                and legal editors to ensure they reflect current UK laws and
                best practices. If you ever find an issue with one of our
                documents, we'll review it promptly and work to make it right.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Built on Legal Expertise (Image Right) */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-full min-[1001px]:min-h-[720px] relative min-[1001px]:order-last">
              <Image
                src={GuranteeImage2}
                alt="Woman working on laptop"
                className="object-cover h-full w-full max-md:max-w-[500px]"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] max-[1100px]:py-2 max-[1001px]:px-4 min-[1001px]:mr-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 min-[1001px]:pl-4 max-[1000px]:py-10">
              <p className="text-main font-semibold mb-2.5">
                Why You Can Trust LawNest
              </p>
              <h2 className="text-2xl md:text-4xl text-left font-semibold text-text-1 mb-4">
                Built on Legal Expertise
              </h2>
              <p className="text-text-5 text-lg md:text-xl mb-6 md:mb-12">
                Key Points:
              </p>
              <ul className="space-y-4 md:space-y-6">
                {[
                  {
                    title: "Professionally Reviewed",
                    text: "Every document is reviewed by qualified legal experts.",
                  },
                  {
                    title: "Regularly Updated",
                    text: "Templates are updated as laws change to stay compliant.",
                  },
                  {
                    title: "User-Focused",
                    text: "Our guided process helps you create accurate documents quickly and confidently.",
                  },
                  {
                    title: "Transparent Pricing",
                    text: "No hidden fees or surprise charges — just simple, fair pricing.",
                  },
                  {
                    title: "Data Security",
                    text: "We use advanced encryption and secure storage to protect your information.",
                  },
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4 ml-3">
                    <div className="mt-1 bg-[#ECF6FF] rounded-full p-2 shrink-0">
                      <Image src={check} alt="check" width={14} height={12} />
                    </div>
                    <div>
                      <span className="font-bold text-base md:text-lg text-text-1">
                        {point.title}:{" "}
                      </span>
                      <span className="text-base md:text-lg text-text-5">
                        {point.text}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: We're Here to Make It Right (Image Left) */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-full min-[1001px]:min-h-[720px] relative">
              <Image
                src={GuranteeImage3}
                alt="People reviewing document"
                className="object-cover h-full w-full max-md:max-w-[500px]"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 min-[1001px]:pr-4 max-[1000px]:py-10">
              <p className="text-main font-semibold mb-2.5">
                Our Customer Commitment
              </p>
              <h2 className="text-2xl md:text-4xl text-left font-semibold text-text-1 mb-4 md:mb-6">
                We're Here to Make It Right
              </h2>
              <p className="text-text-5 text-lg md:text-xl md:leading-relaxed mb-6">
                If you're not completely satisfied with your document or
                experience, contact our support team. We'll review
              </p>
              <p className="text-text-5 text-lg md:text-xl md:leading-relaxed mb-12">
                your case and, where appropriate, offer a full refund or
                replacement document.
              </p>
              <button className="bg-main cursor-pointer text-white px-5.5 py-3 rounded-lg font-semibold hover:bg-main/90 transition-all shadow-lg shadow-main/10">
                Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* Section 4: Our Guarantee Applies To: (Image Right) */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-full min-[1001px]:min-h-[720px] relative min-[1001px]:order-last">
              <Image
                src={GuranteeImage4}
                alt="Guarantee stamp"
                className="object-cover h-full w-full max-md:max-w-[500px]"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] max-[1100px]:py-2 max-[1001px]:px-4 min-[1001px]:mr-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 min-[1001px]:pl-4 max-[1000px]:py-10">
              <p className="text-main font-semibold mb-2.5">
                What This Guarantee Covers
              </p>
              <h2 className="text-2xl md:text-4xl text-left font-semibold text-text-1 mb-6 md:mb-8">
                Our Guarantee Applies To:
              </h2>
              <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 ml-3">
                {[
                  "Accuracy of document content",
                  "Template functionality and usability",
                  "Errors in the guided question process",
                  "Access issues with your purchased documents",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="bg-[#ECF6FF] rounded-full p-2 shrink-0">
                      <Image src={check} alt="check" width={14} height={12} />
                    </div>
                    <span className="text-lg md:text-xl text-text-5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-l border-main pl-4.5 py-2">
                <p className="text-main font-semibold mb-1">Disclaimer:</p>
                <p className="text-text-5 text-base">
                  Please note, LawNest is not a law firm and cannot provide
                  personalised legal advice. Our templates are designed for
                  general legal use and self-help purposes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Your Confidence Matters to Us (Image Left) */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-full min-[1001px]:min-h-[720px] relative">
              <Image
                src={GuranteeImage5}
                alt="Signing document confidently"
                className="object-cover h-full w-full max-md:max-w-[500px]"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start ml-auto max-[1000px]:mx-auto max-[1000px]:px-4 min-[1001px]:pr-4 max-[1000px]:py-10">
              <p className="text-main font-semibold mb-2.5">Final Statement</p>
              <h2 className="text-2xl md:text-4xl text-left font-semibold text-text-1 mb-4 md:mb-6">
                Your Confidence Matters to Us
              </h2>
              <p className="text-text-5 text-lg md:text-xl md:leading-relaxed mb-8 md:mb-10">
                We know that creating legal documents can feel daunting. That's
                why we've built{" "}
                <span className="font-bold text-text-1">LawNest</span> to
                combine professional quality with simplicity and trust. When you
                use <span className="font-bold text-text-1">LawNest</span>,
                you're backed by a team that takes quality — and your peace of
                mind — seriously.
              </p>
              <button className="bg-main text-white cursor-pointer px-5.25 py-3 rounded-lg font-semibold hover:bg-main/90 transition-all shadow-lg shadow-main/10">
                Explore Our Documents
              </button>
            </div>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default page;
