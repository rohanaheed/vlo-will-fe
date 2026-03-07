"use client";
import React, { useState, useRef } from "react";
import Header from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import blogImage from "@/components/assets/images/blogimage.png";
import Amelie from "@/components/assets/images/Amelie.svg";
import blogimage1 from "@/components/assets/images/blogimage1.svg";
import blogimage2 from "@/components/assets/images/blogimage2.svg";
import blogimage3 from "@/components/assets/images/blogimage3.svg";
import blogimage4 from "@/components/assets/images/blogimage4.svg";
import blogimage5 from "@/components/assets/images/blogimage5.svg";
import blogimage6 from "@/components/assets/images/blogimage6.svg";
import blogimage8 from "@/components/assets/images/blogimage8.svg";
import blogimage9 from "@/components/assets/images/blogimage9.svg";
import blogimage10 from "@/components/assets/images/blogimage10.svg";
import blogimage11 from "@/components/assets/images/blogimage11.svg";
import blogimage12 from "@/components/assets/images/blogimage12.svg";
import SliderBg2 from "@/components/assets/images/SliderBg3.jpg";
import blogimage7 from "@/components/assets/images/blogimage7.svg";

import ArrowUpRightBlack from "@/components/assets/images/ArrowUpRightBlack.svg";
import searchIcon from "@/components/assets/images/SearchIconGray2.svg";
import ArrowBack from "@/components/assets/images/ArrowBack.svg";
import ArrowleftWhite from "@/components/assets/images/ArrowleftWhite.svg";
import Link from "next/link";
import Slider1 from "@/components/common/Slider1";
import { useRouter } from "next/navigation";
const page = () => {
  const [activeCategory, setActiveCategory] = useState("View all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const router = useRouter();
  const testimonials = [
    {
      quote:
        "“Untitled has saved us thousands of hours of work. We’re able to spin up projects and features faster.”",
      name: "Alisa Hester",
      role: "PM, Hourglass",
      company: "Web Design Agency",
    },
    {
      quote:
        "“The platform's ease of use and powerful features have completely transformed our daily workflow.”",
      name: "David Chen",
      role: "Lead Developer",
      company: "TechInnovate",
    },
    {
      quote:
        "“Outstanding support and continuous updates make this the best SaaS investment we've made this year.”",
      name: "Sarah Jenkins",
      role: "Operations Director",
      company: "Global Logistics",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const blogPosts = [
    {
      id: 1,
      image: blogimage1,
      author: "Olivia Rhye",
      date: "20 Jan 2025",
      title: "UX review presentations",
      excerpt:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["Design", "Research", "Presentation"],
    },
    {
      id: 2,
      image: blogimage2,
      author: "Phoenix Baker",
      date: "19 Jan 2025",
      title: "Migrating to Linear 101",
      excerpt:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      tags: ["Product", "Tools", "SaaS"],
    },
    {
      id: 3,
      image: blogimage3,
      author: "Lana Steiner",
      date: "18 Jan 2025",
      title: "Building your API stack",
      excerpt:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      tags: ["Software Development", "Tools"],
    },
    {
      id: 4,
      image: blogimage4,
      author: "Alec Whitten",
      date: "17 Jan 2025",
      title: "Bill Walsh leadership lessons",
      excerpt:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Leadership", "Management"],
    },
    {
      id: 5,
      image: blogimage5,
      author: "Olivia Rhye",
      date: "20 Jan 2025",
      title: "PM mental models",
      excerpt:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Product", "Research", "Presentation"],
    },
    {
      id: 6,
      image: blogimage6,
      author: "Olivia Rhye",
      date: "20 Jan 2025",
      title: "What is wireframing?",
      excerpt:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Design", "Research", "Presentation"],
    },
    {
      id: 7,
      image: blogimage7,
      author: "Olivia Rhye",
      date: "20 Jan 2025",
      title: "Our top 10 Javascript frameworks to use",
      excerpt:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Software Development", "Research", "Presentation"],
    },
    {
      id: 8,
      image: blogimage5,
      author: "Olivia Rhye",
      date: "20 Jan 2025",
      title: "Podcast: Creating a better CX Community",
      excerpt:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      tags: ["Customer Success", "Leadership", "Management"],
    },
  ];

  const getTagStyle = (tag) => {
    switch (tag.toLowerCase()) {
      case "design":
        return "text-[#026AA2] bg-[#F0F9FF] border border-[#B9E6FE]";
      case "research":
        return "text-[#3538CD] bg-[#EEF4FF] border border-[#C7D7FE]";
      case "presentation":
        return "text-[#C11574] bg-[#FDF2FA] border border-[#FCCCE5]";
      case "product":
        return "text-[#027A48] bg-[#ECFDF3] border border-[#A6F4C5]";
      case "tools":
        return "text-[#C11574] bg-[#FDF2FA] border border-[#FCCCE5]";
      case "saas":
        return "text-[#C4320A] bg-[#FFF0E8] border border-[#FFDCC3]";
      case "software development":
        return "text-[#027A48] bg-[#ECFDF3] border border-[#A6F4C5]";
      case "leadership":
        return "text-[#026AA2] bg-[#F0F9FF] border border-[#B9E6FE]";
      case "management":
        return "text-[#3538CD] bg-[#EEF4FF] border border-[#C7D7FE]";
      case "customer success":
        return "text-[#027A48] bg-[#ECFDF3] border border-[#A6F4C5]";
      default:
        return "text-gray-700 bg-gray-50 border border-gray-200";
    }
  };

  const filteredPosts =
    activeCategory === "View all"
      ? blogPosts
      : blogPosts.filter((post) => post.tags.includes(activeCategory));
  return (
    <div>
      <Header />
      <main>
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-12 md:pb-20 bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto">
            {/* Header Section */}
            <div className="text-center">
              <p className="font-semibold text-main mb-3">Our Blogs</p>
              <h1 className="text-3xl md:text-5xl font-semibold text-text-1 mb-6">
                Resources and insights
              </h1>
              <p className="text-text-5 text-lg md:text-xl mx-auto">
                The latest industry news, interviews, technologies, and
                resources.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Blog Post */}
        <div className="relative w-full overflow-hidden mb-12 group cursor-pointer max-w-[1200px] max-[1200px]:px-4 mx-auto">
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
            <Image
              src={blogImage}
              alt="Featured blog post"
              fill
              className="object-cover"
            />

            {/* Top Left Black Triangle */}
            <div
              className="absolute top-0 left-0 w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-black z-10 rotate-180"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            ></div>
            <div
              className="absolute top-0 left-0 w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-white z-10"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            ></div>
            {/* Gradient Overlay & Content */}
            <div className="absolute inset-0 flex items-end p-6 md:p-8 lg:p-10 z-20">
              <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-start gap-6 text-white">
                {/* Title & Subtitle */}
                <div className="max-w-[800px]">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    Improve your design skills: Develop an "eye" for design
                  </h2>
                  <p className="text-base text-white">
                    Tools and trends change, but good design is timeless. Learn
                    how to quickly develop an "eye" for design.
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 shrink-0">
                  <Image
                    src={Amelie}
                    alt="Amélie Laurent"
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-10 h-10"
                  />
                  <div>
                    <p className="text-sm font-semibold">Amélie Laurent</p>
                    <p className="text-sm">10 April 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Sidebar & Grid Container */}
        <div className="max-w-[1200px] mx-auto px-4 mb-24 mt-8 md:mt-12 lg:mt-16 flex flex-col md:flex-row gap-10 lg:gap-16">
          {/* Sidebar */}
          <div className="w-full md:w-[240px] shrink-0">
            {/* Search */}
            <div className="relative mb-8">
              <Image
                src={searchIcon}
                alt="search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-black/16 text-text-1 rounded-lg py-2.5 pl-9 pr-4 text-sm focus:outline-none focus:border-main focus:ring-1 focus:ring-main placeholder:text-gray-400"
              />
            </div>

            {/* Categories */}
            <h3 className="font-semibold text-main mb-5 text-sm">
              Blog categories
            </h3>
            <ul className="flex flex-col space-y-1">
              <li>
                <button
                  onClick={() => setActiveCategory("View all")}
                  className={`text-left w-full block py-2.5 px-3.5 cursor-pointer rounded-r-md transition-colors ${
                    activeCategory === "View all"
                      ? "font-semibold text-main border-l-2 border-main"
                      : "font-semibold text-text-7 hover:border-main border-l-2 border-transparent"
                  }`}
                >
                  View all
                </button>
              </li>
              {[
                "Design",
                "Product",
                "Software Development",
                "Customer Success",
                "Leadership",
                "Management",
              ].map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`text-left w-full block py-2.5 px-3.5 text-sm cursor-pointer rounded-r-md transition-colors ${
                      activeCategory === category
                        ? "font-semibold text-main border-l-2 border-main"
                        : "font-semibold text-text-7 hover:border-main border-l-2 border-transparent"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {filteredPosts.map((post) => (
                <div
                  onClick={() => {
                    router.push("/blogs/detail");
                  }}
                  key={post.id}
                  className="flex flex-col group cursor-pointer"
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
                  </div>

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
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <button className="flex max-md:w-full max-md:justify-center text-sm font-medium cursor-pointer gap-1 px-3 py-1.75 border border-black/16 rounded-lg text-text-2 hover:bg-gray-50 transition-colors">
                <Image src={ArrowBack} alt="Previous" className="w-5 h-5" />
                Previous
              </button>

              <div className="flex items-center justify-between gap-px md:max-w-[292px] w-full text-sm font-medium text-text-2 overflow-auto">
                <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg bg-[#FAFAFA] text-text-1">
                  1
                </button>
                <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg hover:bg-[#FAFAFA] transition-colors">
                  2
                </button>
                <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg hover:bg-[#FAFAFA] transition-colors">
                  3
                </button>
                <span className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center">
                  ...
                </span>
                <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg hover:bg-[#FAFAFA] transition-colors">
                  8
                </button>
                <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg hover:bg-[#FAFAFA] transition-colors">
                  9
                </button>
                <button className="w-10 h-10 flex text-sm font-medium cursor-pointer items-center justify-center rounded-lg hover:bg-[#FAFAFA] transition-colors">
                  10
                </button>
              </div>

              <button className="flex items-center justify-center max-md:w-full cursor-pointer gap-1 px-3 py-1.75 border border-black/16 rounded-lg text-sm font-semibold text-text-4 hover:bg-[#FAFAFA] transition-colors">
                Next
                <Image
                  src={ArrowBack}
                  alt="Next"
                  className="w-5 h-5 rotate-180"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Latest writings Slider */}
        <Slider1
          posts={[
            {
              id: 1,
              image: blogimage8,
              author: "Lana Steiner",
              date: "18 Jan 2026",
              title: "Building your API stack",
              excerpt:
                "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
              tags: ["Software Development", "Tools"],
            },
            {
              id: 2,
              image: blogimage9,
              author: "Alec Whitten",
              date: "17 Jan 2026",
              title: "Bill Walsh leadership lessons",
              excerpt:
                "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
              tags: ["Leadership", "Management", "Presentation"],
            },
            {
              id: 3,
              image: blogimage10,
              author: "Phoenix Baker",
              date: "16 Jan 2026",
              title: "PM mental models",
              excerpt:
                "Mental models are simple expressions of complex processes or relationships.",
              tags: ["Product", "Research", "Frameworks"],
            },
            {
              id: 4,
              image: blogimage11,
              author: "Lana Steiner",
              date: "15 Jan 2026",
              title: "What is wireframing?",
              excerpt:
                "Introduction to wireframing and its principles. Learn from the best in the industry.",
              tags: ["Design", "Research"],
            },
            {
              id: 5,
              image: blogimage12,
              author: "Natali Craig",
              date: "14 Jan 2026",
              title: "How collaboration makes us better designers",
              excerpt:
                "Collaboration can make our teams stronger, and our individual designs better.",
              tags: ["Design", "Research"],
            },
          ]}
        />

        {/* CTA Slider Section */}
        <div className="bg-white py-16 md:py-24 border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              {/* Content */}
              <div className="flex-1 w-full text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-1 mb-6 ">
                  Join 4,000+ startups growing with Untitled
                </h2>
                <p className="text-text-5 text-lg md:text-xl mb-8 md:mb-12 max-w-lg mx-auto md:mx-0">
                  Start your 30-day free trial today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-black/16 text-text-4 font-semibold hover:bg-gray-50 transition-colors cursor-pointer text-base">
                    Learn more
                  </button>
                  <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-main text-white font-semibold hover:bg-main/90 transition-colors cursor-pointer text-base">
                    Get started
                  </button>
                </div>
              </div>

              {/* Slider Image Column */}
              <div className="flex-1 w-full max-w-[600px] relative">
                <div className="relative w-full h-[500px] md:h-[720px] rounded-2xl overflow-hidden group shadow-lg">
                  <div
                    className="flex h-full w-full transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentTestimonial * 100}%)`,
                    }}
                  >
                    {testimonials.map((testimonial, idx) => (
                      <div
                        key={idx}
                        className="relative w-full h-full shrink-0"
                      >
                        <Image
                          src={SliderBg2}
                          alt={`Testimonial from ${testimonial.name}`}
                          fill
                          className="object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-x-0 bottom-0 bg-black/20 backdrop-blur-lg overflow-hidden flex flex-col justify-end p-6 md:p-8 lg:p-10">
                          <p className="text-white text-xl md:text-3xl font-semibold mb-8">
                            {testimonial.quote}
                          </p>

                          <div className="flex justify-between items-end gap-4">
                            <div className="text-white text-xl md:text-3xl font-semibold">
                              <h4 className="text-white text-xl md:text-3xl font-semibold mb-3">
                                {testimonial.name}
                              </h4>
                              <p className="text-white text-lg font-semibold">
                                {testimonial.role}
                              </p>
                              <p className="text-white text-base font-medium">
                                {testimonial.company}
                              </p>
                            </div>

                            <div className="flex flex-col items-end gap-4">
                              {/* Stars */}
                              <div className="flex gap-1.5 mb-[60px] md:mb-[68px]">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg
                                    key={star}
                                    className="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-sm"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Fixed Arrows */}
                  <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-3">
                    <button
                      onClick={prevTestimonial}
                      className="md:w-14 md:h-14 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <Image
                        src={ArrowleftWhite}
                        alt="Previous"
                        className="w-6 h-6"
                      />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="md:w-14 md:h-14 w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <Image
                        src={ArrowleftWhite}
                        alt="Next"
                        className="w-6 h-6 rotate-180"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
