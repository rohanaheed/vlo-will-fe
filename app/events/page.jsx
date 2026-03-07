"use client";
import React from "react";
import Header from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import eventimage1 from "@/components/assets/images/eventimage1.svg";
import eventimage2 from "@/components/assets/images/eventimage2.svg";
import eventimage3 from "@/components/assets/images/eventimage3.svg";
import eventimage4 from "@/components/assets/images/eventimage4.svg";
import eventimage5 from "@/components/assets/images/eventimage5.svg";
import eventimage6 from "@/components/assets/images/eventimage6.svg";
import eventimage7 from "@/components/assets/images/eventimage7.svg";
import eventimage8 from "@/components/assets/images/eventimage8.svg";
import eventimage9 from "@/components/assets/images/eventimage9.svg";
import eventimage10 from "@/components/assets/images/eventimage10.svg";
import eventimage11 from "@/components/assets/images/eventimage11.svg";
import eventimage12 from "@/components/assets/images/eventimage12.svg";
import eventimage13 from "@/components/assets/images/eventimage13.svg";
import tickIcon from "@/components/assets/images/CheckIcon1.svg";
import Faq from "@/components/common/FAQ";
import faqIllustration from "@/components/assets/images/FAQ.svg";
import ArrowUpRightBlack from "@/components/assets/images/ArrowUpRightBlack.svg";
import ArrowBack from "@/components/assets/images/ArrowBack.svg";
import { useRouter } from "next/navigation";
import Slider1 from "@/components/common/Slider1";

function page() {
  const router = useRouter();

  const featuredEvent = {
    image: eventimage1,
    category: "Global Reach",
    date: "18 November 2025",
    title: "Understanding Wills & Estate Planning",
    excerpt:
      "Learn how to create a valid Will, appoint executors, and protect your assets. Perfect for first-time planners and families.",
    tags: ["Register Now", "Live Webinar"],
  };

  const eventPosts = [
    {
      id: 1,
      image: eventimage2,
      category: "Global Workshop",
      date: "20 November 2025",
      title: "Starting a Business Legally in the UK",
      excerpt:
        "Step-by-step session on registering a business, creating agreements, and understanding...",
      tags: ["Join Workshop", "Virtual Workshop"],
    },
    {
      id: 2,
      image: eventimage3,
      category: "Online Webinar",
      date: "12 December 2025",
      title: "Power of Attorney Explained",
      excerpt:
        "Learn the importance of a Power of Attorney and how to prepare one that meets UK legal standards.",
      tags: ["Book a Spot", "Online Webinar"],
    },
    {
      id: 3,
      image: eventimage4,
      category: "Expert Talk",
      date: "9 January 2026",
      title: "Managing Employee Contracts",
      excerpt:
        "An interactive session on creating fair and compliant employment agreements for your business.",
      tags: ["Register Free", "Expert Talk"],
    },
    {
      id: 4,
      image: eventimage5,
      category: "Global Workshop",
      date: "20 November 2025",
      title: "Starting a Business Legally in the UK",
      excerpt:
        "Step-by-step session on registering a business, creating agreements, and understanding...",
      tags: ["Join Workshop", "Virtual Workshop"],
    },
    {
      id: 5,
      image: eventimage6,
      category: "Online Webinar",
      date: "12 December 2025",
      title: "Power of Attorney Explained",
      excerpt:
        "Learn the importance of a Power of Attorney and how to prepare one that meets UK legal standards.",
      tags: ["Book a Spot", "Online Webinar"],
    },
    {
      id: 6,
      image: eventimage7,
      category: "Expert Talk",
      date: "9 January 2026",
      title: "Managing Employee Contracts",
      excerpt:
        "An interactive session on creating fair and compliant employment agreements for your business.",
      tags: ["Register Free", "Expert Talk"],
    },
  ];

  const getTagStyle = (tag) => {
    switch (tag.toLowerCase()) {
      case "register now":
      case "join workshop":
      case "register free":
        return "text-[#026AA2] bg-[#F0F9FF] border border-[#B9E6FE]";
      case "live webinar":
      case "virtual workshop":
      case "online webinar":
        return "text-[#C11574] bg-[#FDF2FA] border border-[#FCCCE5]";
      case "book a spot":
        return "text-[#027A48] bg-[#ECFDF3] border border-[#A6F4C5]";
      case "expert talk":
        return "text-gray-700 bg-gray-50 border border-gray-200";
      default:
        return "text-gray-700 bg-gray-50 border border-gray-200";
    }
  };

  return (
    <div>
      <Header />
      <main>
        <div className="bg-[url('@/components/assets/images/Background.svg')] p-4 pt-25 md:pt-30 pb-5 md:pb-10 bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-text-1 mb-6">
                We Value Your Feedback
              </h1>
              <p className="text-text-5 text-lg md:text-xl mx-auto">
                Your thoughts help us improve. Whether it's about our documents,
                website experience, or customer support, we'd love to hear from
                you. results.
              </p>
              <button className="bg-main mt-8 text-white font-semibold px-6 py-3 whitespace-nowrap rounded-lg hover:bg-main/85 transition-colors shrink-0 cursor-pointer">
                View Upcming Events
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 md:mt-16 max-w-[1200px] mx-auto max-[1200px]:px-4">
          <div className="max-md:order-2">
            <p className="text-main font-semibold mb-3">Introduction</p>
            <h2 className="text-2xl md:text-4xl font-semibold text-text-1 mb-12">
              Learn, Connect, and Stay Updated
            </h2>
            <p className="text-text-5 text-base md:text-lg">
              LawNest hosts regular online and in-person events to help
              individuals, entrepreneurs, and professionals understand the legal
              tools they need. From estate planning and business setup to data
              protection and employment law, our events are built to educate and
              empower.
            </p>
          </div>
          <div className="max-md:order-1 max-md:max-h-[300px]">
            <Image
              src={eventimage1}
              alt="Learn, Connect, and Stay Updated"
              className="w-full h-auto max-md:max-h-[300px]"
            />
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto max-[1200px]:px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-1 mb-10 mt-10 md:mt-16">
            Upcoming Events & Webinars
          </h1>

          {/* Featured Event */}
          <div className="flex flex-col group cursor-pointer mb-16">
            <div className="relative w-full h-[300px] md:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden mb-6">
              <Image
                src={featuredEvent.image}
                alt={featuredEvent.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-main text-sm font-semibold mb-3">
              {featuredEvent.category} • {featuredEvent.date}
            </p>
            <div className="flex justify-between items-start gap-4 mb-3">
              <h3 className="text-2xl md:text-3xl font-semibold text-text-1">
                {featuredEvent.title}
              </h3>
              <Image
                src={ArrowUpRightBlack}
                alt="arrow"
                className="w-6 h-6 mt-1"
              />
            </div>
            <p className="text-text-5 text-lg mb-6 max-w-3xl">
              {featuredEvent.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredEvent.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`text-sm font-medium px-3 py-1 rounded-full ${getTagStyle(
                    tag,
                  )}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Event Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {eventPosts.map((post) => (
              <div key={post.id} className="flex flex-col group cursor-pointer">
                <div className="relative w-full h-[240px] rounded-xl overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 pb-4">
                  <p className="text-main text-sm font-semibold mb-2">
                    {post.category} • {post.date}
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
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getTagStyle(
                        tag,
                      )}`}
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

        {/* Recent Highlights Slider */}
        <div className="max-[1200px]:px-4">
          <Slider1
            title="Recent Highlights"
            description="Couldn't attend a previous session? Browse our library of past events and recordings to catch up anytime."
            buttonText="Watch Recordings"
            posts={[
              {
                id: 1,
                title: "Legal Essentials for Freelancers",
                excerpt:
                  "How do you create compelling presentations that wow your colleagues and impress your managers?",
                author: "Olivia Rhye",
                date: "20 Jan 2025",
                tags: ["Design", "Research", "Presentation"],
                image: eventimage9,
              },
              {
                id: 2,
                title: "Navigating Divorce Agreements",
                excerpt:
                  "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
                author: "Phoenix Baker",
                date: "19 Jan 2025",
                tags: ["Product", "Tools", "SaaS"],
                image: eventimage10,
              },
              {
                id: 3,
                title: "Building a Legally Compliant Website",
                excerpt:
                  "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
                author: "Lana Steiner",
                date: "18 Jan 2025",
                tags: ["Software Development", "Tools"],
                image: eventimage11,
              },
              {
                id: 4,
                title: "Legal Essentials for Freelancers",
                excerpt:
                  "Like to know the secrets of transforming a team into a 3x Super Bowl winning Dynasty?",
                author: "Alec Whitten",
                date: "17 Jan 2025",
                tags: ["Leadership", "Management"],
                image: eventimage12,
              },
            ]}
          />
        </div>

        {/* Why Join Section */}
        <div className="">
          <div className="grid grid-cols-1 min-[1001px]:grid-cols-2">
            <div className="flex-1 flex justify-center h-[350px] sm:h-[450px] min-[1001px]:min-h-[720px] relative">
              <Image
                src={eventimage13}
                alt="Why Join LawNest Events?"
                fill
                className="object-cover h-full w-full max-[1000px]:max-w-[700px] max-[1000px]:mx-auto max-[1000px]:px-4"
              />
            </div>
            <div className="flex-1 max-[1000px]:w-full min-[1001px]:max-w-[640px] min-[1001px]:px-4 min-[1301px]:ml-30 h-full flex flex-col justify-center items-start mr-auto max-[1000px]:mx-auto max-[1000px]:px-4 max-[1000px]:py-14 min-[1001px]:pr-4">
              <h2 className="text-2xl md:text-4xl text-left font-semibold text-text-1 mb-6">
                Why Join LawNest Events?
              </h2>
              <ul className="space-y-4 pl-4 pt-4">
                {[
                  "Learn directly from experienced solicitors and legal experts",
                  "Get practical advice you can apply immediately",
                  "Access free resources and templates after each session",
                  "Network with professionals and business owners",
                  "Stay up to date with changes in law and compliance",
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
                    question: "Are LawNest events free to attend?",
                    answer:
                      "Many of our webinars are free. Some advanced sessions may have a small registration fee.",
                  },
                  {
                    id: 2,
                    question: "Will I receive a recording?",
                    answer:
                      "Yes, registered attendees receive recordings within 48 hours of the event.",
                  },
                  {
                    id: 3,
                    question: "Do I need legal experience to attend?",
                    answer:
                      "Not at all. Our sessions are designed for everyone — from individuals to business owners.",
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
