"use client";
import React from "react";
import Header from "@/components/common/UserHeader";
import Footer from "@/components/common/Footer";
import Detailblogimage from "@/components/assets/images/Detailblogimage.svg";
import Image from "next/image";
import NewslaterIcon from "@/components/assets/images/NewslaterIcon.svg";
import CopyIconBlack from "@/components/assets/images/CopyIconBlack.svg";
import XIconGray from "@/components/assets/images/XIconGray.svg";
import FBIconGray from "@/components/assets/images/FBIconGray.svg";
import LinkdinIconGray from "@/components/assets/images/LinkdinIconGray.svg";
import Olivia from "@/components/assets/images/Olivia.svg";
import Detailblogimage2 from "@/components/assets/images/Detailblogimage2.svg";
import Detailblogimage1 from "@/components/assets/images/etailblogimage1.svg";
import Slider1 from "@/components/common/Slider1";
import blogimage9 from "@/components/assets/images/blogimage9.svg";
import blogimage10 from "@/components/assets/images/blogimage10.svg";
import blogimage11 from "@/components/assets/images/blogimage11.svg";
import blogimage12 from "@/components/assets/images/blogimage12.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
function page() {
  const [activeCategory, setActiveCategory] = useState("LeaderShip");
  const router = useRouter();
  return (
    <div>
      <Header />
      <main className="bg-white pt-24 md:pt-[120px]">
        {/* Container */}
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Header Section */}
          <div className="flex flex-col mb-12">
            {/* Tags */}
            <div className="inline-flex max-w-fit gap-2 mb-4 py-1 px-2.5 bg-[#ECF6FF] border border-[#587C9F] rounded-full">
              <div
                onClick={() => setActiveCategory("LeaderShip")}
                className={`text-main inline-block text-xs font-medium rounded-full py-0.5 px-2 ${activeCategory === "LeaderShip" ? "bg-white" : ""}`}
              >
                LeaderShip
              </div>
              <div
                onClick={() => setActiveCategory("8 min read")}
                className={`text-main inline-block text-xs font-medium rounded-full py-0.5 px-2 ${activeCategory === "8 min read" ? "bg-white" : ""}`}
              >
                8 min read
              </div>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#101828] mb-6 leading-tight">
              Bill Walsh leadership lessons
            </h1>
            <p className="text-text-5 text-lg md:text-xl max-w-[768px] mb-8 md:mb-16">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty? Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            {/* Hero Image */}
            <div className="w-full relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden mb-8">
              <Image
                src={Detailblogimage}
                alt="Mountain peaks"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Author & Action Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              {/* Author Info */}
              <div className="flex gap-12">
                <div>
                  <p className="text-main text-sm font-semibold mb-3">
                    Written by
                  </p>
                  <p className="text-text-1 text-lg font-medium">
                    Alec Whitten
                  </p>
                </div>
                <div>
                  <p className="text-main text-sm font-semibold mb-3">
                    Published on
                  </p>
                  <p className="text-text-1 text-lg font-medium">17 Jan 2025</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button className="flex cursor-pointer items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-white hover:bg-gray-50 transition-colors shrink-0 text-text-4 font-semibold text-sm">
                  <Image src={CopyIconBlack} alt="Copy" className="w-5 h-5" />
                  Copy link
                </button>
                <button className="w-10 h-10 cursor-pointer border border-gray-300 rounded-lg flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shrink-0">
                  <Image
                    src={XIconGray}
                    alt="X (Twitter)"
                    className="w-5 h-5"
                  />
                </button>
                <button className="w-10 h-10 cursor-pointer border border-gray-300 rounded-lg flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shrink-0">
                  <Image src={FBIconGray} alt="Facebook" className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 cursor-pointer border border-gray-300 rounded-lg flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shrink-0">
                  <Image
                    src={LinkdinIconGray}
                    alt="LinkedIn"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
            {/* Main Content & Sidebar Layout */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-12 md:mt-18 lg:mt:24">
              {/* Left Column: Article Body */}
              <div className="flex-1 lg:max-w-[720px] prose prose-lg prose-gray max-w-none">
                <h1 className="mb-5 text-xl lg:text-3xl font-semibold text-text-1">
                  Introduction
                </h1>
                <p className="text-text-5 text-lg mb-6">
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id.
                </p>
                <p className="text-text-5 text-lg mb-12">
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis et volutpat lectus sed, sed sapien. Porttitor
                  fames arcu quis fusce augue enim. Quo sit nullam dam et,
                  suspendisse faucibus ut tortor, Id turpis val sit quam
                  imperdiet ipsum molestie aliquat cuoieturs id est sit nostrud.
                </p>

                {/* Content Image 1 */}
                <div className="w-full relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-10">
                  <Image
                    src={Detailblogimage1}
                    alt="Team working in office"
                    fill
                    className="object-cover"
                  />
                  <p className="text-sm text-text-5 mt-3 px-2 border-l-2 border-main absolute bottom-0 bg-white right-0 w-full mb-[-12px] opacity-0 group-hover:opacity-100 transition-opacity">
                    Image courtesy of Laura Jones via Unsplash
                  </p>{" "}
                  {/* Note: Need to adjust caption position later */}
                </div>

                <p className="text-text-5 text-lg leading-relaxed mb-8">
                  Ipsum sit metris nullla quam tristique. Gravida id gravina et
                  enim mauris id non. Pellentesque rombus aglet consectetur
                  turpis. sapien. Dictum moieseae senectura Diam elt, orci,
                  tiocidunt aenean tempus. Quis vaist eget ut tortor tellus. Dui
                  ec, commodo eiti viat quia nam leni.
                </p>

                {/* Blockquote */}
                <div className="border-l-4 border-main pl-6 my-10 bg-gray-50/50 p-6 rounded-r-xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-text-1 italic mb-6">
                    "In a world older and more complete than ours they move
                    finished and complete, gifted with extensions of the senses
                    we have lost or never attained, living by voices we shall
                    never hear."
                  </h3>
                  <div className="flex items-center gap-3">
                    <Image
                      src={Olivia}
                      alt="Olivia Rhye"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-text-1 text-sm">
                        Olivia Rhye
                      </p>
                      <p className="text-text-5 text-sm">Product Designer</p>
                    </div>
                  </div>
                </div>

                <p className="text-text-5 text-lg leading-relaxed mb-6">
                  Dolor enim eu tortor urna sed dubuisnule. Aliquam vestibulum
                  nulla odio nisie vitae. In aliquat scelerisque aenean hoc
                  vestibulum turpis im inferdum diam. Tempus integer aliquet si
                  vitae mesuada fringilla.
                </p>
                <p className="text-text-5 text-lg leading-relaxed mb-10">
                  Ele vici is vestibus nucnis. Pulvinar ut onci, gravim
                  imperidiet commodo constantuer convalis risus. Ded condimenfon
                  velim dignissim adipiscing faucibus vuluptiout, vrha, merpis
                  purus id pret ioucin aliquet. Riuso, vuluptoute vulputate
                  posuere purou of conque convails aliquet. Aliquid suspusut
                  feugiat donec pretium nequet. Mauris heque strtutos ac
                  vestibulum. bibendum quam lorem id. Doloc lacus, eget nis,
                  ladium tellis, pharetra, porttilor.
                </p>

                <h3 className="text-2xl font-semibold text-text-1 mt-12 mb-6">
                  Software and tools
                </h3>
                <p className="text-text-5 text-lg leading-relaxed mb-6">
                  Min inlusut olit, is quisque diguisn ac diam, amet. Vel etianr
                  suspendisse morbi estend feucibus eges vesticulum felis. Ditum
                  quis mores, ius sit. Tellus atiquat enm unia, elsan Mauris
                  poseero vidptote arcu anet, vitue nist, btlus licoium. At
                  feugiat sapien varius ici.
                </p>
                <p className="text-text-5 text-lg leading-relaxed mb-10">
                  Eget quis meenii, res laclis pharetra, senqurr. Eget in
                  volutpat moolis el valyut lechus sid, sdt sapien. Pontilor
                  fanes arcu quis futco ecgue enim. Quo ad nullan din od
                  suspendiseo feoc ot dionmxc is turpis vel sit qouum impendiat
                  issumt molesto afiquet cutidore is out elt noshyed.
                </p>

                <h3 className="text-2xl font-semibold text-text-1 mt-12 mb-6">
                  Other resources
                </h3>
                <p className="text-text-5 text-lg leading-relaxed mb-6">
                  Sogtictud eu is elemenut, vulula. Inde pnesoent voupotot
                  egestns socilo ei locus nunc mun oil. Eget cliam asaduse ni on
                  Aucret rutn mnaxn malestuuda metos orane od. Vubutale
                  consecterur eo uimous in diom do nymtt fingilte ilriddout.
                  Vruo sc dignessim mopils amet lareot nulputetu gravida id. Sod
                  auis suctor velputale net elementum grovia nunx oc odio.
                </p>
                <ol className="list-decimal list-outside ml-5 text-text-5 text-lg space-y-3 mb-12">
                  <li className="pl-2">
                    Lectus id duis ritae porttitor enim gravida morbi.
                  </li>
                  <li className="pl-2">
                    Eu turpis posuere senput feugiat volutpat olit, vehiclo
                    suspaudisise. Noctor vit in vitae platertis.
                  </li>
                  <li className="pl-2">
                    Suspondisen numamus es doesi iserlenxeye diam ord nsi dict
                    puros.
                  </li>
                </ol>

                {/* Content Image 2 (Dog) */}
                <div className="w-full relative h-[300px] md:h-[400px] lg:h-[480px] rounded-xl overflow-hidden mt-6 mb-3">
                  <Image
                    src={Detailblogimage2}
                    alt="Golden Retriever Dog"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-1.5 mb-10">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-text-5"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  <p className="text-sm text-text-5">
                    Image courtesy of Helena Lopes via{" "}
                    <span className="underline cursor-pointer">Pexels</span>
                  </p>
                </div>

                <p className="text-text-5 text-lg leading-relaxed mb-6">
                  Lectus leo massa amet posuere. Malesuada mattis non convallis
                  quisque. Libero sit et imperdiet bibendum quisque dictum
                  vestibulum in non. Pretium ultricies tempor non est diam. Enim
                  ut enim amet amet integer cursus. Sit ac commodo pretium sed
                  etiam turpis suspendisse at.
                </p>

                <p className="text-text-5 text-lg leading-relaxed mb-12">
                  Tristique odio senectus nam posuere ornare leo metus,
                  ultricies. Blandit duis ultricies vulputate morbi feugiat cras
                  placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis
                  pellentesque suscipit accumsan. Cursus viverra aenean magna
                  risus elementum faucibus molestie pellentesque. Arcu ultricies
                  sed mauris vestibulum.
                </p>
              </div>

              {/* Right Column: Sidebar */}
              <div className="lg:w-[340px] shrink-0">
                <div className="sticky top-24">
                  {" "}
                  {/* Make it sticky when scrolled */}
                  <div className="bg-[#F9FAFB] border border-[#E9EAEB] rounded-2xl p-4 md:p-8">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-8 border border-[#E9EAEB]">
                      <Image
                        src={NewslaterIcon}
                        alt="Newsletter"
                        className="w-7 h-7"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-text-1 mb-2">
                      Weekly newsletter
                    </h3>
                    <p className="text-text-5 text-sm md:text-base mb-8">
                      No spam. Just the latest releases and tips, interesting
                      articles, and exclusive interviews in your inbox every
                      week.
                    </p>
                    <form className="flex flex-col gap-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2.25 rounded-lg border border-black/16 text-black outline-none focus:border-main focus:ring-1 focus:ring-main transition-all"
                        required
                      />
                      <p className="text-sm text-text-5">
                        Read about our{" "}
                        <span
                          onClick={() => {
                            router.push("/privacy-policy");
                          }}
                          className="underline hover:text-main cursor-pointer"
                        >
                          privacy policy
                        </span>
                      </p>
                      <button
                        type="submit"
                        className="w-full cursor-pointer bg-main text-white font-semibold py-3 rounded-lg hover:bg-main/90 transition-colors mt-2"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest writings Slider */}
        <Slider1
          posts={[
            {
              id: 1,
              author: "Olivia Rhye",
              date: "20 Jan 2025",
              title: "UX review presentations",
              excerpt:
                "How do you create compelling presentations that wow your colleagues and impress your managers?",
              tags: ["Design", "Research", "Presentation"],
              image: blogimage9,
            },
            {
              id: 2,
              author: "Phoenix Baker",
              date: "19 Jan 2025",
              title: "Migrating to Linear 101",
              excerpt:
                "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
              tags: ["Product", "Tools", "SaaS"],
              image: blogimage10,
            },
            {
              id: 3,
              author: "Lana Steiner",
              date: "18 Jan 2025",
              title: "Building your API stack",
              excerpt:
                "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
              tags: ["Software Development", "Tools"],
              image: blogimage11,
            },
            {
              id: 4,
              author: "Alec Whitten",
              date: "17 Jan 2025",
              title: "Bill Walsh leadership lessons",
              excerpt:
                "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
              tags: ["Leadership", "Management"],
              image: blogimage12,
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}

export default page;
