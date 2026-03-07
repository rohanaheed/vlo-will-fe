"use client";
import React, { useRef } from "react";
import Image from "next/image";
import ArrowBack from "@/components/assets/images/ArrowBack.svg";
import ArrowUpRightBlack from "@/components/assets/images/ArrowUpRightBlack.svg";

function Slider1({
  posts = [],
  title = "Latest writings",
  description = "The latest news, technologies, and resources from our team.",
  buttonText = "View all posts",
}) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  const getTagStyle = (tag) => {
    switch (tag.toLowerCase()) {
      case "design":
      case "software development":
      case "software":
        return "text-main bg-main/10 border border-main/20";
      case "research":
      case "tools":
        return "text-blue-600 bg-blue-50 border border-blue-200";
      case "presentation":
      case "saas":
        return "text-pink-600 bg-pink-50 border border-pink-200";
      case "product":
        return "text-green-600 bg-green-50 border border-green-200";
      case "frameworks":
        return "text-orange-600 bg-orange-50 border border-orange-200";
      case "leadership":
      case "management":
        return "text-purple-600 bg-purple-50 border border-purple-200";
      default:
        return "text-gray-600 bg-gray-50 border border-gray-200";
    }
  };

  const blogPosts = [
    {
      id: 1,
      author: "Olivia Rhye",
      date: "20 Jan 2026",
      title: "UX review presentations",
      excerpt:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["Design", "Research", "Presentation"],
    },
    {
      id: 2,
      author: "Phoenix Baker",
      date: "19 Jan 2026",
      title: "Migrating to Linear 101",
      excerpt:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      tags: ["Product", "Tools", "SaaS"],
    },
    {
      id: 3,
      author: "Lana Steiner",
      date: "18 Jan 2026",
      title: "Building your API stack",
      excerpt:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      tags: ["Software Development", "Tools"],
    },
    {
      id: 4,
      author: "Alec Whitten",
      date: "17 Jan 2026",
      title: "Bill Walsh leadership lessons",
      excerpt:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Leadership", "Management", "Presentation"],
    },
  ];

  return (
    <div className="bg-[#F9FAFB] py-10 md:py-16 lg:py-24 overflow-hidden w-full">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-text-1 mb-5">
              {title}
            </h2>
            <p className="text-text-5 text-lg md:text-xl">{description}</p>
          </div>
          {buttonText && (
            <button className="bg-main cursor-pointer text-white px-3 text-base py-3 rounded-lg font-semibold hover:bg-main/90 transition-colors shrink-0 self-start md:self-auto">
              {buttonText}
            </button>
          )}
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full max-w-[1200px] mx-auto max-[1200px]:px-4">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-8 pt-4 snap-x snap-mandatory scrollbar-hide"
          style={{
            paddingLeft: "max(16px, calc((100vw - 1200px) / 2 + 16px))",
            paddingRight: "16px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {posts.map((post) => {
            return (
              <div
                key={`latest-${post.id}`}
                className="flex flex-col group cursor-pointer w-[280px] sm:w-[320px] md:w-[360px] shrink-0 snap-start"
              >
                {/* Image */}
                <div className="relative w-full h-[240px] rounded-xl overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 pb-4">
                  <p className="text-main text-sm font-semibold mb-2">
                    {post.author} • {post.date}
                  </p>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-text-1">
                      {post.title}
                    </h3>
                    <Image
                      src={ArrowUpRightBlack}
                      alt="arrow"
                      className="w-5 h-5 mt-1"
                    />
                  </div>
                  <p className="text-text-5 text-base">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getTagStyle(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slider Navigation Controls */}
      <div className="max-w-[1200px] gap-4 md:gap-8 mx-auto max-[1200px]:px-4 mt-4 md:mt-8">
        <div className="flex gap-4">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-black/16 cursor-pointer flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm"
          >
            <Image src={ArrowBack} alt="Previous" className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-black/16 cursor-pointer flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm"
          >
            <Image src={ArrowBack} alt="Next" className="w-5 h-5 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider1;
