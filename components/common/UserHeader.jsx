"use client";
import React, { useState, useRef, useEffect } from "react";
import logo from "@/components/assets/images/Logo.svg";
import Image from "next/image";
import chevronDown from "@/components/assets/images/CheveronDownGray.svg";
import searchIcon from "@/components/assets/images/SearchIconGray.svg";
import CommonDropdown from "./Commondropdown1";
import usflag from "@/components/assets/images/USFlag.svg";
import inflag from "@/components/assets/images/INFlag.svg";
import ukflag from "@/components/assets/images/UkFlag.svg";
import auflag from "@/components/assets/images/AUFlag.svg";
import canflag from "@/components/assets/images/CAFlag.svg";
import menuIcon from "@/components/assets/images/MenuIcon.svg";
import crossIcon from "@/components/assets/images/CrossIcon.svg";
import userIcon from "@/components/assets/images/User1.svg";

import UserIcon1 from "@/components/assets/images/Usericon2.svg";
import DocumentIcon from "@/components/assets/images/DocumentIcon.svg";
import BillIcon from "@/components/assets/images/BillIcon.svg";
import LogoutIcon from "@/components/assets/images/LogoutIcon1.svg";
import { useRouter, usePathname } from "next/navigation";
function UserHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    label: "ENG",
    value: "UK",
    icon: ukflag,
  });
  const [isOpen, setIsOpen] = useState(false);
  const lowerPath = pathname?.toLowerCase() || "";
  let tab = null;
  if (lowerPath.startsWith("/profile")) {
    tab = "account";
  } else if (lowerPath.startsWith("/billing-history")) {
    tab = "billing";
  } else if (lowerPath.startsWith("/document")) {
    tab = "document";
  }
  const [isScrolled, setIsScrolled] = useState(false);
  const languageOptions = [
    { label: "ENG", value: "UK", icon: ukflag },
    { label: "ENG", value: "US", icon: usflag },
    { label: "IND", value: "IN", icon: inflag },
    { label: "CAN", value: "CA", icon: canflag },
    { label: "AUS", value: "AU", icon: auflag },
  ];
  const mobileMenuRef = useRef(null);
  const productRef = useRef(null);
  const servicesRef = useRef(null);
  const resourcesRef = useRef(null);
  const userDropdownRef = useRef(null);
  const desktopUserDropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
      if (
        activeDropdown === "product" &&
        productRef.current &&
        !productRef.current.contains(e.target)
      ) {
        setActiveDropdown(null);
      }
      if (
        activeDropdown === "services" &&
        servicesRef.current &&
        !servicesRef.current.contains(e.target)
      ) {
        setActiveDropdown(null);
      }
      if (
        activeDropdown === "resources" &&
        resourcesRef.current &&
        !resourcesRef.current.contains(e.target)
      ) {
        setActiveDropdown(null);
      }
      if (
        activeDropdown === "user" &&
        userDropdownRef.current &&
        !userDropdownRef.current.contains(e.target)
      ) {
        setActiveDropdown(null);
      }
      if (
        isOpen1 &&
        desktopUserDropdownRef.current &&
        !desktopUserDropdownRef.current.contains(e.target)
      ) {
        setIsOpen1(false);
      }
    };

    if (isOpen || activeDropdown || isOpen1) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, activeDropdown, isOpen1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Removed useEffect for tab selection to avoid setState in effect

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <div>
      <main
        className={`py-5 px-2 flex items-center fixed top-0 left-0 right-0 z-50 justify-between whitespace-nowrap gap-4 transition-all duration-300 max-w-[1200px] mx-auto ${isScrolled ? "bg-white/16 backdrop-blur-lg" : ""}`}
      >
        <div className="flex items-center gap-8">
          <button onClick={() => router.push("/")} className="cursor-pointer">
            <Image src={logo} alt="logo" width={100} height={32} />
          </button>
          <div className="flex items-center gap-2 max-lg:hidden">
            <div className="relative" ref={productRef}>
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer relative"
                onClick={() => toggleDropdown("product")}
              >
                <p className="text-base font-semibold text-text-5">Product</p>
                <Image
                  src={chevronDown}
                  alt="chevronDown"
                  width={20}
                  height={20}
                />
              </button>
              {activeDropdown === "product" && (
                <ul
                  className={`text-text-5 text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md w-40 z-10 ${isScrolled ? "bg-white text-black" : "bg-black/10 text-black backdrop-blur-lg"}`}
                >
                  <li>
                    <button
                      onClick={closeDropdown}
                      className="w-full text-left hover:bg-zinc-400 p-2 cursor-pointer"
                    >
                      Product
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={closeDropdown}
                      className="w-full text-left hover:bg-zinc-400 p-2 cursor-pointer"
                    >
                      Product
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={closeDropdown}
                      className="w-full text-left hover:bg-zinc-400 p-2 cursor-pointer"
                    >
                      Product
                    </button>
                  </li>
                </ul>
              )}
            </div>
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer relative"
                onClick={() => toggleDropdown("services")}
              >
                <p className="text-base font-semibold text-text-5">Services</p>
                <Image
                  src={chevronDown}
                  alt="chevronDown"
                  width={20}
                  height={20}
                />
              </button>
              {activeDropdown === "services" && (
                <ul
                  className={`text-text-5 text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md w-40 z-10 ${isScrolled ? "bg-white text-black" : "bg-black/10 text-black backdrop-blur-lg"}`}
                >
                  <li>
                    <button
                      onClick={closeDropdown}
                      className="w-full text-left hover:bg-zinc-400 p-2 cursor-pointer"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={closeDropdown}
                      className="w-full text-left hover:bg-zinc-400 p-2 cursor-pointer"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={closeDropdown}
                      className="w-full text-left hover:bg-zinc-400 p-2 cursor-pointer"
                    >
                      Services
                    </button>
                  </li>
                </ul>
              )}
            </div>
            <div className="">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer relative"
              >
                <p className="text-base font-semibold text-text-5">Pricing</p>
              </button>
            </div>
            <div className="relative" ref={resourcesRef}>
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer relative"
                onClick={() => toggleDropdown("resources")}
              >
                <p className="text-base font-semibold text-text-5">Resources</p>
                <Image
                  src={chevronDown}
                  alt="chevronDown"
                  width={20}
                  height={20}
                />
              </button>
              {activeDropdown === "resources" && (
                <ul
                  className={`text-text-5 text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md w-40 z-10 ${isScrolled ? "bg-white text-black" : "bg-black/10 text-black backdrop-blur-lg"}`}
                >
                  <li>
                    <button
                      onClick={closeDropdown}
                      className="w-full text-left hover:bg-zinc-400 p-2 cursor-pointer"
                    >
                      Resources
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={closeDropdown}
                      className="w-full text-left hover:bg-zinc-400 p-2 cursor-pointer"
                    >
                      Resources
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={closeDropdown}
                      className="w-full text-left hover:bg-zinc-400 p-2 cursor-pointer"
                    >
                      Resources
                    </button>
                  </li>
                </ul>
              )}
            </div>

            <div className="">
              <button
                type="button"
                className="flex items-center gap-2 cursor-pointer relative"
              >
                <p className="text-base font-semibold text-text-5">About</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div
            onClick={() => router.push("/search")}
            className="flex max-md:hidden items-center gap-2 pr-2 border-r border-black/16 cursor-pointer"
          >
            <Image
              src={searchIcon}
              alt="searchIcon"
              width={20}
              height={20}
              className="min-w-5 h-5"
            />
          </div>
          <div>
            <button
              type="button"
              className="flex max-md:hidden underline text-black font-semibold items-center pr-2 border-r border-black/16 gap-2 cursor-pointer relative"
            >
              Support
            </button>
          </div>
          <div className="max-md:hidden">
            <CommonDropdown
              options={languageOptions}
              value={selectedLanguage}
              onChange={setSelectedLanguage}
              className="border-none w-auto! gap-7! !justify-left bg-transparent! p-0! text-base! text-black! font-semibold!"
              dropdownClassName={`w-full !p-0 !top-7 !text-xs !font-medium ${isScrolled ? "!bg-white !text-black" : "!bg-black/10 !backdrop-blur-lg !text-black"}`}
              buttonClassName="!hover:zinc-200 !p-1"
              truncate={false}
            />
          </div>
          <div className="max-sm:hidden">
            <button
              type="button"
              onClick={() => router.push("/auth/login")}
              className="flex py-2.5 transition-all duration-300 px-4 text-main hover:bg-main hover:text-white rounded-lg font-semibold items-center gap-2 cursor-pointer relative"
            >
              Login
            </button>
          </div>
          <div className="max-sm:hidden">
            <button
              type="button"
              onClick={() => router.push("/auth/signup")}
              className="flex py-2.5 transition-all duration-300 px-4 bg-main hover:bg-main/85 rounded-lg text-white font-semibold items-center gap-2 cursor-pointer relative"
            >
              Sign Up
            </button>
          </div>
          <div
            ref={desktopUserDropdownRef}
            className="flex items-center gap-2 cursor-pointer relative"
          >
            <button
              onClick={() => setIsOpen1(!isOpen1)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image
                src={userIcon}
                alt="userIcon"
                width={20}
                height={20}
                className="w-10 h-10"
              />
            </button>
            {isOpen1 && (
              <div className="absolute top-12 right-0 bg-white border border-black/10 rounded-lg shadow-lg p-2 w-48 z-50 flex flex-col">
                <button
                  onClick={() => {
                    router.push("/document");
                  }}
                  className={`flex cursor-pointer items-center gap-3 p-3 hover:bg-[#ECF6FF] hover:text-main hover:font-medium duration-300 w-full text-left transition-colors ${
                    tab === "document" ? "bg-[#ECF6FF] text-main" : "text-black"
                  }`}
                >
                  <Image
                    src={DocumentIcon}
                    alt="Documents"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-sm font-medium">My Documents</span>
                </button>
                <button
                  onClick={() => {
                    router.push("/profile");
                  }}
                  className={`flex cursor-pointer items-center gap-3 p-3 mt-0.5 hover:bg-[#ECF6FF] hover:text-main hover:font-medium duration-300 w-full text-left transition-colors ${
                    tab === "account" ? "bg-[#ECF6FF] text-main" : "text-black"
                  }`}
                >
                  <Image
                    src={UserIcon1}
                    alt="Profile"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-sm font-medium">My Account</span>
                </button>

                <button
                  onClick={() => {
                    router.push("/billing-history");
                  }}
                  className={`flex cursor-pointer items-center gap-3 p-3 mt-0.5 hover:bg-[#ECF6FF] hover:text-main hover:font-medium duration-300 w-full text-left transition-colors ${
                    tab === "billing" ? "bg-[#ECF6FF] text-main" : "text-black"
                  }`}
                >
                  <Image
                    src={BillIcon}
                    alt="Billing"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <span className="text-sm font-medium">Billing History</span>
                </button>
                <div className=""></div>
                <button
                  onClick={() => {
                    setTab("logout");
                    setActiveDropdown(null);
                  }}
                  className={`flex cursor-pointer items-center gap-3 p-3 mt-0.5 hover:bg-[#ECF6FF] hover:text-main hover:font-medium duration-300 w-full text-left transition-colors ${
                    tab === "logout" ? "bg-[#ECF6FF] text-main" : "text-black"
                  }`}
                >
                  <Image
                    src={LogoutIcon}
                    alt="Logout"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            )}
          </div>
          <button onClick={toggleMenu}>
            <Image
              src={menuIcon}
              alt="menuIcon"
              width={20}
              height={20}
              className="w-8 h-8 lg:hidden cursor-pointer"
            />
          </button>
        </div>
      </main>
      <div
        className={` ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} fixed transition duration-300 ease-in-out inset-0 bg-black/10 backdrop-blur-lg z-50`}
      >
        <div
          ref={mobileMenuRef}
          className={`p-3 sm:p-6 ${isOpen ? "translate-x-0" : "-translate-x-full"} fixed transition duration-300 ease-in-out top-0 left-0 h-full bg-main z-50 w-full sm:w-[300px]`}
        >
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              router.push("/");
            }}
            className="flex items-center justify-center w-full"
          >
            <Image
              src={logo}
              alt="logo"
              width={170}
              height={32}
              className="brightness-200 invert-1"
            />
          </button>
          <div className="mt-6">
            <div className="flex items-center gap-2 justify-end md:hidden">
              <div
                onClick={() => router.push("/Search")}
                className="flex items-center gap-2 pr-2 border-r border-white/26 cursor-pointer"
              >
                <Image
                  src={searchIcon}
                  alt="searchIcon"
                  width={20}
                  height={20}
                  className="min-w-5 h-5 brightness-100 invert"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="flex text-white underline font-semibold items-center pr-2 border-r border-white/26 gap-2 cursor-pointer relative"
                >
                  Support
                </button>
              </div>
              <div className="">
                <CommonDropdown
                  options={languageOptions}
                  value={selectedLanguage}
                  onChange={setSelectedLanguage}
                  className="border-none w-auto! text-white! gap-4 bg-transparent! p-0 text-base font-semibold"
                  textClassName="!text-white"
                  dropdownClassName="w-full p-0 text-white bg-white/10 backdrop-blur-lg top-7 text-xs font-medium"
                  buttonClassName="hover:bg-zinc-200 text-white hover:text-black p-1"
                  arrowClassName="invert brightness-100"
                  truncate={false}
                />
              </div>
              <div onClick={() => setIsOpen(false)} className="cursor-pointer">
                <Image
                  src={crossIcon}
                  alt="crossIcon"
                  width={20}
                  height={20}
                  className="min-w-5 h-5 brightness-200 invert-1"
                />
              </div>
            </div>
            <div className="flex mt-4 flex-col gap-2">
              <div className="relative" ref={productRef}>
                <button
                  type="button"
                  className="items-center gap-2 cursor-pointer hover:bg-white/10 transition-all duration-300 p-2 rounded-lg text-white relative w-full flex justify-between"
                  onClick={() => toggleDropdown("product")}
                >
                  <p className="text-base -semibold ">Product</p>
                  <Image
                    src={chevronDown}
                    alt="chevronDown"
                    width={20}
                    height={20}
                    className="brightness-200"
                  />
                </button>
                {activeDropdown === "product" && (
                  <ul className="text-black w-full bg-white/10 backdrop-blur-lg text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md z-10">
                    <li>
                      <button
                        onClick={() => {
                          {
                            (closeDropdown, setIsOpen(false));
                          }
                        }}
                        className="w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer"
                      >
                        Product
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          {
                            (closeDropdown, setIsOpen(false));
                          }
                        }}
                        className="w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer"
                      >
                        Product
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          {
                            (closeDropdown, setIsOpen(false));
                          }
                        }}
                        className="w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer"
                      >
                        Product
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative" ref={servicesRef}>
                <button
                  type="button"
                  className="items-center hover:bg-white/10 w-full transition-all duration-300 p-2 rounded-lg flex justify-between gap-2 cursor-pointer relative"
                  onClick={() => toggleDropdown("services")}
                >
                  <p className="text-white font-semibold">Services</p>
                  <Image
                    src={chevronDown}
                    alt="chevronDown"
                    width={20}
                    height={20}
                    className="brightness-200"
                  />
                </button>
                {activeDropdown === "services" && (
                  <ul className="text-black bg-white/10 backdrop-blur-lg text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md w-full z-10">
                    <li>
                      <button
                        onClick={() => {
                          {
                            (closeDropdown, setIsOpen(false));
                          }
                        }}
                        className="w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer"
                      >
                        Services
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          {
                            (closeDropdown, setIsOpen(false));
                          }
                        }}
                        className="w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer"
                      >
                        Services
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          {
                            (closeDropdown, setIsOpen(false));
                          }
                        }}
                        className="w-full text-left hover:bg-zinc-200 hover:text-black p-2 cursor-pointer"
                      >
                        Services
                      </button>
                    </li>
                  </ul>
                )}
              </div>
              <div className="">
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  type="button"
                  className="flex items-center hover:bg-white/10 w-full transition-all duration-300 p-2 rounded-lg gap-2 cursor-pointer relative"
                >
                  <p className="text-white font-semibold">Pricing</p>
                </button>
              </div>
              <div className="relative" ref={resourcesRef}>
                <button
                  type="button"
                  className="items-center hover:bg-white/10 w-full transition-all duration-300 p-2 rounded-lg flex justify-between gap-2 cursor-pointer relative"
                  onClick={() => toggleDropdown("resources")}
                >
                  <p className="text-white font-semibold">Resources</p>
                  <Image
                    src={chevronDown}
                    alt="chevronDown"
                    width={20}
                    height={20}
                    className="brightness-200"
                  />
                </button>
                {activeDropdown === "resources" && (
                  <ul className="text-black bg-white/10 backdrop-blur-lg text-base font-normal overflow-hidden absolute top-10 left-0 border border-black/16 rounded-md w-full z-10">
                    <li>
                      <button
                        onClick={() => {
                          {
                            (closeDropdown, setIsOpen(false));
                          }
                        }}
                        className="w-full text-left hover:bg-zinc-200 p-2 cursor-pointer hover:text-black"
                      >
                        Resources
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          {
                            (closeDropdown, setIsOpen(false));
                          }
                        }}
                        className="w-full text-left hover:bg-zinc-200 p-2 cursor-pointer hover:text-black"
                      >
                        Resources
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          {
                            (closeDropdown, setIsOpen(false));
                          }
                        }}
                        className="w-full text-left hover:bg-zinc-200 p-2 cursor-pointer hover:text-black"
                      >
                        Resources
                      </button>
                    </li>
                  </ul>
                )}
              </div>

              <div className="">
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  type="button"
                  className="flex items-center gap-2 cursor-pointer relative hover:bg-white/10 transition-all duration-300 p-2 rounded-lg w-full"
                >
                  <p className="text-white font-semibold">About</p>
                </button>
              </div>
              <div className="sm:hidden">
                <button
                  onClick={() => router.push("/auth/login")}
                  type="button"
                  className="flex justify-center py-2.5 bg-white w-full text-center px-4 text-main hover:bg-main/70 backdrop-blur-lg hover:text-white rounded-lg font-semibold items-center gap-2 cursor-pointer border border-white/16 transition-all duration-300"
                >
                  <p className="text-base font-semibold">Login</p>
                </button>
              </div>
              <div className="sm:hidden">
                <button
                  type="button"
                  onClick={() => router.push("/auth/signup")}
                  className="flex justify-center py-2.5 bg-white w-full text-center px-4 text-main hover:bg-main/70 backdrop-blur-lg hover:text-white rounded-lg font-semibold items-center gap-2 cursor-pointer border border-white/16 transition-all duration-300"
                >
                  <p className="text-base font-semibold">Sign Up</p>
                </button>
              </div>
            </div>
          </div>
          {/* <div
            className="flex items-center gap-2 cursor-pointer relative"
            ref={userDropdownRef}
          >
            <button
              type="button"
              className="flex items-center gap-2"
              onClick={() => toggleDropdown("user")}
            >
              <Image
                src={userIcon}
                alt="userIcon"
                width={20}
                height={20}
                className="w-10 h-10"
              />
              <p className="text-base tex-black font-semibold">User</p>
            </button>
            {activeDropdown === "user" && (
              <div className="absolute top-12 right-0 bg-white border border-black/10 rounded-lg shadow-lg py-2 w-48 z-50 flex flex-col">
                <button
                  onClick={() => {
                    setTab("account");
                    router.push("/profile");
                    setIsOpen(false);
                    setActiveDropdown(null);
                  }}
                  className={`flex items-center gap-3 px-4 py-2 hover:bg-[#ECF6FF] hover:text-main w-full text-left transition-colors ${tab === "account" ? "bg-[#ECF6FF] text-main font-semibold" : "text-black"}`}
                >
                  <Image
                    src={UserIcon1}
                    alt="Profile"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium">Profile</span>
                </button>
                <button
                  onClick={() => {
                    setTab("document");
                    router.push("/document");
                    setIsOpen(false);
                    setActiveDropdown(null);
                  }}
                  className={`flex items-center gap-3 px-4 py-2 hover:bg-[#ECF6FF] hover:text-main w-full text-left transition-colors ${tab === "document" ? "bg-[#ECF6FF] text-main font-semibold" : "text-black"}`}
                >
                  <Image
                    src={DocumentIcon}
                    alt="Documents"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium">My Documents</span>
                </button>
                <button
                  onClick={() => {
                    setTab("billing");
                    router.push("/billing-history");
                    setIsOpen(false);
                    setActiveDropdown(null);
                  }}
                  className={`flex items-center gap-3 px-4 py-2 hover:bg-[#ECF6FF] hover:text-main w-full text-left transition-colors ${tab === "billing" ? "bg-[#ECF6FF] text-main font-semibold" : "text-black"}`}
                >
                  <Image
                    src={BillIcon}
                    alt="Billing"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium">Billing</span>
                </button>
                <div className="h-px bg-gray-100 my-1"></div>
                <button
                  onClick={() => {
                    setTab("logout");
                    setIsOpen(false);
                    setActiveDropdown(null);
                  }}
                  className={`flex items-center gap-3 px-4 py-2 hover:bg-[#ECF6FF] hover:text-main w-full text-left transition-colors ${tab === "logout" ? "bg-[#ECF6FF] text-main font-semibold" : "text-red-500"}`}
                >
                  <Image
                    src={LogoutIcon}
                    alt="Logout"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
