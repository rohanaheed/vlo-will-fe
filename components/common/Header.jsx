"use client";
import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Logo from "../../components/assets/images/LawNestLogo.svg";
import Menuicon from "../../components/assets/images/MenuIcon.svg";
import Searchicon from "../../components/assets/images/SearchIcon.svg";
import Bell from "../../components/assets/images/BellIcon.svg";
import Phone from "../../components/assets/images/PhoneIcon.svg";
import Mail from "../../components/assets/images/MailIcon.svg";
import Setting from "../../components/assets/images/SettingIcon.svg";
import Add from "../../components/assets/images/AddIcon.svg";
import User from "../assets/images/User.svg";
import ChevronDown from "../assets/images/CheveronDownGray.svg";
import DashboardIcon from "../assets/images/DashboardIcon.svg";
import SliderUser from "../assets/images/SliderUser.svg";
import SubscriptionIcon from "../assets/images/SubscriptionIcon.svg";
import DocumentManegment from "../assets/images/DocumentManegment.svg";
import Accounts from "../assets/images/Accounts.svg";
import Billing from "../assets/images/Billing.svg";
import Reconciliation from "../assets/images/Reconciliation.svg";
import Accounting from "../assets/images/Accounting.svg";
import Financial from "../assets/images/Finincial.svg";
import ChevronTopBlue from "../assets/images/ChevronTopBlue.svg";
import ReportsAndAnalyticsIcon from "../assets/images/Reports&AnalyticsIcon.svg";
import GeneralFaq from "../assets/images/GeneralFaq.svg";
import CustomerSupportIcon from "../assets/images/CustomerSupportIcon.svg";

function Header({ title }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const Sliderdata = [
    { title: "Dashboard", icon: DashboardIcon, path: "/admin/dashboard" },
    {
      title: "User Management",
      icon: SliderUser,
      path: "/admin/user-management",
    },
    {
      title: "Subscription",
      icon: SubscriptionIcon,
      path: "/admin/subscription",
    },
    {
      title: "Document Management",
      icon: DocumentManegment,
      path: "/admin/document-manegment",
    },
    {
      title: "Accounts",
      icon: Accounts,
      path: "/admin/accounts",
      subItems: [
        { title: "Billing", icon: Billing, path: "/admin/accounts/billing" },
        {
          title: "Reconciliation",
          icon: Reconciliation,
          path: "/admin/accounts/reconciliation",
        },
        {
          title: "Accounting",
          icon: Accounting,
          path: "/admin/accounts/accounting",
        },
        {
          title: "Financial Insights",
          icon: Financial,
          path: "/admin/accounts/financial-insights",
        },
      ],
    },
    {
      title: "Reports & Analytics",
      icon: ReportsAndAnalyticsIcon,
      path: "/admin/reports-&-analytics",
    },
    {
      title: "General FAQ",
      icon: GeneralFaq,
      path: "/admin/general-faq",
    },
    {
      title: "Customer Support",
      icon: CustomerSupportIcon,
      path: "/admin/customer-support",
    },
  ];
  const [currentDate, setCurrentDate] = useState(null);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname); // Initialize with pathname
  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    if (pathname) {
      setActiveLink(pathname);
      // Auto-expand menu if path matches sub-item
      Sliderdata.forEach((item) => {
        if (item.subItems?.some((sub) => sub.path === pathname)) {
          setExpandedMenu(item.title);
        }
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname) {
      setActiveLink(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    const updateDate = () => setCurrentDate(new Date());
    updateDate();
    const timer = setInterval(updateDate, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    const datePart = date
      .toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .replace(",", "");
    const timePart = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    return `${datePart}, ${timePart}`;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="fixed top-0 left-0 right-0 w-full z-10">
      <div className="fixed top-0 left-0 right-0 w-full z-10 border-b border-black/16">
        <div className="flex max-md:py-3 lg:ml-75 lg:w-[calc(100%-300px)] justify-between items-center bg-white text-black px-6 py-3">
          <div className="flex items-center gap-4 ">
            <button
              className="lg:hidden max-md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image src={Menuicon} width={24} height={24} alt="media" />
            </button>
            <div>
              <h1 className="text-sm font-bold">{title} </h1>
            </div>
          </div>
          <div className="max-xl:hidden">
            <h1 className="text-sm font-bold">{formatDate(currentDate)}</h1>
          </div>
          <div className="flex items-center gap-3 max-md:hidden">
            <div className="rounded-full cursor-pointer bg-(--color-main) h-8 w-8 flex items-center justify-center">
              <Image src={Searchicon} width={16} height={16} alt="media" />
            </div>
            <div
              onClick={() => router.push("/notification")}
              className="relative cursor-pointer rounded-full h-8 w-8 bg-(--color-main) flex items-center justify-center"
            >
              <Image src={Bell} width={16} height={16} alt="media" />
              <span className="bg-[#FF0000] h-4.5 w-4.5 text-[10px] absolute top-0 right-0 translate-x-1 font-bold rounded-full p-0.5 flex justify-center items-center text-white">
                12
              </span>
            </div>
            <div className="rounded-full cursor-pointer bg-(--color-main) h-8 w-8 flex items-center justify-center">
              <Image src={Phone} width={14} height={16} alt="media" />
            </div>
            <div className="rounded-full cursor-pointer bg-(--color-main) h-8 w-8 flex items-center justify-center">
              <Image src={Mail} width={16} height={16} alt="media" />
            </div>
            <div className="rounded-full cursor-pointer bg-(--color-main) h-8 w-8 flex items-center justify-center">
              <Image src={Setting} width={16} height={16} alt="media" />
            </div>
            <div className="rounded-full cursor-pointer bg-(--color-main) h-8 w-8 flex items-center justify-center">
              <Image src={Add} width={16} height={16} alt="media" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src={User} width={40} height={40} alt="media" />
              <p className="text-xs ">Admin Abdul Wahab</p>
              <Image src={ChevronDown} width={16} height={16} alt="media" />
            </div>
          </div>
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image src={Menuicon} width={24} height={24} alt="media" />
          </button>
        </div>
      </div>
      {/* Overlay (does not slide) */}
      <div
        className={`fixed inset-0  z-10 transition-opacity duration-300 ${isOpen ? "opacity-100 bg-white/5 backdrop-blur-lg pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar (slides independently) */}
      <div
        ref={sidebarRef}
        className={`fixed z-11 p-4 left-0 top-0 bottom-0 h-screen w-75 transform transition-transform duration-300 bg-(--color-main) ${isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}`}
      >
        <div className="p-4 ">
          <Image src={Logo} width={212} height={56} alt="media" />
          <div className="mt-5 flex flex-col gap-2">
            {Sliderdata.map((item, index) => {
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isExpanded = expandedMenu === item.title;
              const isActive =
                activeLink === item.path ||
                item.subItems?.some((sub) => sub.path === activeLink);

              return (
                <div key={index} className="flex flex-col gap-1">
                  <div
                    onClick={() => {
                      if (hasSubItems) {
                        setExpandedMenu(isExpanded ? null : item.title);
                      } else {
                        setActiveLink(item.path);
                        router.push(item.path);
                      }
                    }}
                    className={`flex group transition-all duration-300 hover:bg-white hover:text-(--color-main) p-4 py-2 rounded-lg items-center justify-between cursor-pointer ${isActive ? "bg-white text-[--color-main]" : "text-white"}`}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={item.icon}
                        width={24}
                        height={24}
                        alt="media"
                        className={`group-hover:invert-1 group-hover:brightness-100 transition-all duration-300 ${isActive ? "text-(--color-main)" : "invert brightness-0"}`}
                      />
                      <p
                        className={`text-sm font-bold ${isActive ? "text-(--color-main) font-bold" : ""}`}
                      >
                        {item.title}
                      </p>
                    </div>
                    {hasSubItems && (
                      <Image
                        src={isActive ? ChevronTopBlue : ChevronTopBlue}
                        width={16}
                        height={16}
                        alt="chevron"
                        className={`transition-all duration-300 ${isExpanded ? "rotate-0" : "rotate-180"} ${isActive ? "" : "invert brightness-0"} group-hover:invert-0 group-hover:brightness-100`}
                      />
                    )}
                  </div>

                  {hasSubItems && isExpanded && (
                    <div className="flex flex-col gap-1 mt-1">
                      {item.subItems.map((sub, subIndex) => {
                        const isSubActive = activeLink === sub.path;
                        return (
                          <div
                            key={subIndex}
                            onClick={() => {
                              setActiveLink(sub.path);
                              router.push(sub.path);
                            }}
                            className={`flex items-center text-sm gap-2 p-4 py-2 pl-8 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/10 ${isSubActive ? "bg-white/10 text-white" : "text-white/70"}`}
                          >
                            <Image
                              src={sub.icon}
                              width={24}
                              height={24}
                              alt="sub-icon"
                              className={`transition-all duration-300 invert brightness-0 ${isSubActive ? "opacity-100" : "opacity-70"}`}
                            />
                            <p
                              className={`text-sm font-semibold ${isSubActive ? "text-white" : ""}`}
                            >
                              {sub.title}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
