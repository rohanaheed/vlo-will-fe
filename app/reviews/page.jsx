import React from "react";
import Header from "../../components/common/UserHeader";
import Footer from "../../components/common/Footer";
import VerifiedTick from "@/components/assets/images/VerifiedTick.svg";
import user1 from "@/components/assets/images/User1.svg";
import user2 from "@/components/assets/images/User2.svg";
import user3 from "@/components/assets/images/User3.svg";
import user4 from "@/components/assets/images/User4.svg";
import user5 from "@/components/assets/images/User5.svg";
import user6 from "@/components/assets/images/User6.svg";
import Image from "next/image";
function page() {
  return (
    <div>
      <Header />
      <main>
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-5 md:pb-10 bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center">
              <p className="text-main font-semibold mb-3">Customer Reviews</p>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-text-1 mb-6">
                What Our Customers Say
              </h1>
              <p className="text-text-5 text-lg md:text-xl mx-auto">
                We're proud to help individuals and businesses create reliable
                legal documents every day. Read what our customers think about
                their experience with LawNest — from ease of use to trusted
                results.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-main text-center pt-12 md:pt-24 pb-40">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-center lg:text-[36px] md:text-2xl text-xl font-semibold text-white">
              Trusted by Thousands Across the UK and Beyond
            </h1>
            <p className="mt-5 lg:text-xl md:text-lg text-base font-normal text-[#F3F3F3]">
              <strong>LawNest</strong> has helped thousands of people prepare
              legal documents quickly, confidently, and affordably. From wills
              and contracts to tenancy agreements, our customers value our
              accuracy, convenience, and friendly support.
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-4 bg lg:p-14 md:p-10 p-6 translate-y-[-100px]">
            <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
              <h1 className="text-3xl md:text-6xl font-semibold text-main">
                25,000+
              </h1>
              <h2 className="text-lg mt-3 font-semibold text-text-1">
                Legal documents created
              </h2>
              <p className="text-base font-normal text-text-5 mt-2">
                Documents generated across wills, tenancy, business and more.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
              <h1 className="text-3xl md:text-6xl font-semibold text-main">
                12,300+
              </h1>
              <h2 className="text-lg mt-3 font-semibold text-text-1">
                Registered users
              </h2>
              <p className="text-base font-normal text-text-5 mt-2">
                Active accounts who've saved drafts or completed documents.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
              <h1 className="text-3xl md:text-6xl font-semibold text-main">
                4.8/5
              </h1>
              <h2 className="text-lg mt-3 font-semibold text-text-1">
                Average customer rating
              </h2>
              <p className="text-base font-normal text-text-5 mt-2">
                Based on user reviews for ease, accuracy and support.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Reviews Section */}
        <div className="max-w-[1200px] mx-auto px-4 pb-8 md:pb-16 lg:pb-24 max-md:mt-[-50px]">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-text-1 mb-5">
              Featured Reviews
            </h2>
            <p className="text-text-5 text-lg md:text-xl">
              Real Stories from Real Users
            </p>
          </div>

          {/* Overall Rating Box */}
          <div className="bg-[#FAFAFA] rounded-xl w-full max-w-[1200px] mx-auto p-4 md:py-8 md:px-8 lg:py-12.5 lg:px-12.5 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 mb-7 md:mb-10 lg:mb-16">
            <div className="flex flex-col items-center">
              <div className="text-3xl lg:text-6xl font-bold text-[#0B2C4F] leading-none mb-2">
                4.5
              </div>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill={star === 5 ? "url(#half-star)" : "#FDB022"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="half-star"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="50%" stopColor="#FDB022" />
                        <stop offset="50%" stopColor="#E5E7EB" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-5 text-base md:text-xl">2,256,896</p>
            </div>

            <div className="flex flex-col gap-2.5 w-full">
              {[
                { star: 5, width: "70%" },
                { star: 4, width: "25%" },
                { star: 3, width: "10%" },
                { star: 2, width: "5%" },
                { star: 1, width: "10%" },
              ].map((row) => (
                <div key={row.star} className="flex items-center gap-4">
                  <span className="md:text-lg text-base font-bold text-text-1 w-2">
                    {row.star}
                  </span>
                  <div className="h-2.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0B2C4F] rounded-full"
                      style={{ width: row.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {[
              {
                title: `"Fast, easy, and reliable!"`,
                text: "I created my Will in under 10 minutes. The process was simple, and everything was clearly explained. Highly recommend!",
                img: user1,
                name: "Sienna Hewitt",
                location: "London",
              },
              {
                title: `"Perfect for small businesses."`,
                text: "LawNest helped me draft my service agreements and NDAs without needing a lawyer. It saved me both time and money.",
                img: user2,
                name: "Daniel K.",
                location: "Manchester",
              },
              {
                title: `"Excellent customer service."`,
                text: "The support team was very responsive and guided me through updating my contract Great experience overall.",
                img: user3,
                name: "Priya S.",
                location: "Birmingham",
              },
              {
                title: `"Easy-to-use platform."`,
                text: "The guided steps made it straightforward to build my tenancy agreement. I'll definitely use LawNest again.",
                img: user4,
                name: "Tom B",
                location: "Glasgow",
              },
              {
                title: `"Professional and affordable."`,
                text: "Clear instructions and accurate templates — exactly what I needed for my Power of Attorney document.",
                img: user5,
                name: "Eduard Franz",
                location: "Leeds",
              },
              {
                title: `"Perfect for small businesses."`,
                text: "LawNest helped me draft my service agreements and NDAs without needing a lawyer. It saved me both time and money.",
                img: user6,
                name: "Lily-Rose Chedjou",
                location: "@lilyrose",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] rounded-xl p-4 md:p-8 flex flex-col h-full border border-gray-50"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="#FDB022"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                <h3 className="font-bold text-text-1 mb-3">{review.title}</h3>
                <p className="text-text-5 flex-1 mb:4 md:mb-8">
                  {review.text.split("LawNest").map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i !== arr.length - 1 && (
                        <span className="font-bold text-text-1">LawNest</span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={review.img}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-text-1">
                        {review.name}
                      </span>
                      <Image
                        src={VerifiedTick}
                        alt="Verified"
                        width={16}
                        height={16}
                      />
                    </div>
                    <span className="text-text-5">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default page;
