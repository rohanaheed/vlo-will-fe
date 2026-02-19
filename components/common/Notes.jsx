"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import bursh from "@/components/assets/images/bursh.svg";
import del from "@/components/assets/images/DeleteIcon1.svg";
import alignleft from "@/components/assets/images/AlignLeft.svg";
import aligncenter from "@/components/assets/images/aligncenter.svg";
import alignright from "@/components/assets/images/alignright.svg";
import number from "@/components/assets/images/number.svg";
import dot from "@/components/assets/images/MenuIcon.svg";
import picture from "@/components/assets/images/PictureIcon.svg";
import add from "@/components/assets/images/AddIcon1.svg";
import t from "@/components/assets/images/TIcon.svg";
import clock from "@/components/assets/images/ClockIconNotes.svg";
import bill from "@/components/assets/images/BillIcon.svg";
import language from "@/components/assets/images/LanguageIcon.svg";
import Dropdown_2 from "@/components/assets/images/CheveronDownGray.svg";
import person from "@/components/assets/images/PersonIcon.svg";
import virtual from "@/components/assets/images/VirtualAiImage.svg";
function Notes() {
  const [count, setCount] = useState(16);
  const textRef = useRef(
    `LAST WILL AND TESTAMENT<br>
    This Last Will and Testament (hereinafter referred to as the "Will") is created and executed by me, [Your Full Name], residing at [Your Full Address], on this [Day] day of [Month, Year]. I hereby declare this document to be my last will, revoking all prior wills and codicils made by me.<br><br>
    DECLARATION<br>
    I, [Your Full Name], of sound mind and memory, do hereby make, publish, and declare this as my Last Will and Testament, and I hereby revoke any and all wills and codicils heretofore made by me.<br><br>
    APPOINTMENT OF EXECUTOR<br>
    I nominate and appoint [Executor's Full Name] of [Executor's Address], as Executor of this Will, and if the said [Executor's Full Name] shall be unable or unwilling to serve, then I nominate [Alternate Executor's Full Name] as alternate Executor.<br><br>
    DISTRIBUTION OF ASSETS<br>
    PERSONAL PROPERTY<br>
    I give and bequeath all of my personal property, including but not limited to jewelry, automobiles, and household items, to [Beneficiary's Full Name], residing at [Beneficiary's Address].<br><br>
    REAL ESTATE<br>
    I devise all my interest in real estate located at [Property Address] to [Beneficiary's Full Name].<br><br>
    FINANCIAL ASSETS<br>
    <ul>
      <li>Bank Account at [Bank Name]: To [Beneficiary Name]</li>
      <li>Investment Portfolio: To [Beneficiary Name]</li>
    </ul>
    GUARDIANSHIP<br>
    If at the time of my death I have minor children, I nominate [Guardian's Full Name] of [Guardian's Address] as guardian of the person of my minor children.<br><br>
    GENERAL PROVISIONS<br>
    No-bond Provision: I direct that no bond shall be required of my Executor or any successor Executor named herein.<br>
    Severability: If any provision of this Will is determined to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.<br><br>
    SIGNATURE AND WITNESSES<br>
    In Witness Whereof, I have hereunto set my hand and seal, this [Day] day of [Month, Year].<br>
    _________________<br>
    [Testator's Signature]<br>
    Signed, sealed, declared, and published by [Your Full Name] as his/her last will and testament in the presence of us, who in his/her presence and at his/her request, and in the presence of each other, have hereunto subscribed our names as witnesses.<br>
    _________________<br>
    _________________<br>
    [Witness One Signature]<br>
    [Witness Two Signature]<br>
    [Witness One Name]<br>
    [Witness Two Name]<br>
    Date: [Date]<br>
    Date: [Date]`,
  );
  const textareaRef = useRef(null);
  const selectionRef = useRef(null);
  const [activeFormats, setActiveFormats] = useState({});
  const [isBillableOpen, setIsBillableOpen] = useState(false);
  const [billableStatus, setBillableStatus] = useState("Billable");
  const billableRef = useRef(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [languageStatus, setLanguageStatus] = useState("English");
  const languageRef = useRef(null);

  const htmlContent = useMemo(() => ({ __html: textRef.current }), []);

  const checkActiveFormats = () => {
    saveSelection();
    setActiveFormats({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      strikeThrough: document.queryCommandState("strikeThrough"),
      justifyLeft: document.queryCommandState("justifyLeft"),
      justifyCenter: document.queryCommandState("justifyCenter"),
      justifyRight: document.queryCommandState("justifyRight"),
      insertOrderedList: document.queryCommandState("insertOrderedList"),
      insertUnorderedList: document.queryCommandState("insertUnorderedList"),
    });

    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      let node = selection.anchorNode;
      if (textareaRef.current && textareaRef.current.contains(node)) {
        if (node.nodeType === 3) node = node.parentNode;
        const computedStyle = window.getComputedStyle(node);
        const fontSize = parseInt(computedStyle.fontSize);
        if (!isNaN(fontSize)) {
          setCount(fontSize);
        }
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (billableRef.current && !billableRef.current.contains(event.target)) {
        setIsBillableOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      if (
        textareaRef.current &&
        textareaRef.current.contains(selection.anchorNode)
      ) {
        selectionRef.current = selection.getRangeAt(0).cloneRange();
      }
    }
  };

  const restoreSelection = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
    if (selectionRef.current) {
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(selectionRef.current);
    }
  };

  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    checkActiveFormats();
  };

  const changeFontSize = (newSize) => {
    if (newSize < 1) return;
    restoreSelection();
    const selection = window.getSelection();

    if (selection.isCollapsed) {
      const spanHtml = `<span style="font-size: ${newSize}px">&#8203;</span>`;
      document.execCommand("insertHTML", false, spanHtml);
    } else {
      const uuid = "fontsize-" + Date.now();
      document.execCommand("styleWithCSS", false, true);
      document.execCommand("fontName", false, uuid);
      document.execCommand("styleWithCSS", false, false);
      const elements = textareaRef.current.querySelectorAll(
        `font[face="${uuid}"], span[style*="${uuid}"]`,
      );
      elements.forEach((el) => {
        el.style.fontFamily = "";
        el.removeAttribute("face");
        el.style.fontSize = `${newSize}px`;
      });
    }
    if (textareaRef.current) {
      textRef.current = textareaRef.current.innerHTML;
    }
    setCount(newSize);
  };

  const handleInsertImage = () => {
    const url = prompt("Enter image URL");
    if (url) handleFormat("insertImage", url);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      restoreSelection();
      const imageUrl = URL.createObjectURL(file);
      handleFormat("insertImage", imageUrl);
      event.target.value = "";
    }
  };

  const handleInsertLink = () => {
    const url = prompt("Enter URL");
    if (url) {
      restoreSelection();
      handleFormat("createLink", url);
    }
  };

  const handleInsertTag = () => {
    const tagName = prompt("Enter tag name");
    if (tagName) {
      restoreSelection();
      const tagHtml = `<span style="background-color: #e5e7eb; padding: 2px 6px; border-radius: 4px; font-size: 0.875em; font-weight: 500;">${tagName}</span>&#8203;`;
      document.execCommand("insertHTML", false, tagHtml);
    }
  };

  return (
    <div className="text-black shadow rounded-lg w-full">
      <div className="rounded-lg overflow-hidden border border-black/16">
        <div className="flex border-b border-black/16 text-[#475569] w-full overflow-auto flex-wrap">
          <div className="max-h-10 items-center py-2 px-3 border-r border-black/16 inline-flex">
            <div className="inline-block">
              <input
                type="text"
                className="text-base text-[#475569] outline-0 focus:border-0 w-9 font-bold inline-block"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                onBlur={() => changeFontSize(count)}
                onKeyDown={(e) => e.key === "Enter" && changeFontSize(count)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <svg
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => changeFontSize(count + 1)}
                className="cursor-pointer"
                width="9"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5L5 1L9 5"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => changeFontSize(count - 1)}
                className="cursor-pointer"
                width="9"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="max-h-10 px-4 py-2 inline-flex gap-3 items-center border-r h-full border-black/16">
            <div className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100">
              <label
                htmlFor="textcolor"
                className="underline cursor-pointer w-full h-full flex items-center justify-center"
                onMouseDown={saveSelection}
              >
                A
              </label>
              <input
                type="color"
                name=""
                id="textcolor"
                className="opacity-0 w-0 h-0 absolute"
                onChange={(e) => {
                  restoreSelection();
                  handleFormat("foreColor", e.target.value);
                }}
              />
            </div>
            <div className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100">
              <label
                htmlFor="bgcolor"
                className="underline cursor-pointer w-full h-full flex items-center justify-center"
                onMouseDown={saveSelection}
              >
                <Image
                  src={bursh}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
              </label>
              <input
                type="color"
                name=""
                id="bgcolor"
                className="opacity-0 w-0 h-0 absolute"
                onChange={(e) => {
                  restoreSelection();
                  handleFormat("hiliteColor", e.target.value);
                }}
              />
            </div>
            <div>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleFormat("bold")}
                className={`w-7 h-7 flex items-center justify-center font-bold rounded hover:bg-gray-100 ${activeFormats.bold ? "bg-gray-200" : ""}`}
              >
                B
              </button>
            </div>
            <div>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleFormat("italic")}
                className={`w-7 h-7 flex items-center justify-center italic rounded hover:bg-gray-100 ${activeFormats.italic ? "bg-gray-200" : ""}`}
              >
                I
              </button>
            </div>
            <div>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleFormat("underline")}
                className={`w-7 h-7 flex items-center justify-center underline rounded hover:bg-gray-100 ${activeFormats.underline ? "bg-gray-200" : ""}`}
              >
                U
              </button>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleFormat("strikeThrough")}
                className={`w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 ${activeFormats.strikeThrough ? "bg-gray-200" : ""}`}
              >
                <Image
                  src={del}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
              </button>
            </div>
          </div>
          <div className="max-h-10 px-4 py-2.5 border-r border-black/16 inline-flex items-center h-full gap-2">
            <div>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleFormat("justifyLeft")}
                className={`w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 ${activeFormats.justifyLeft ? "bg-gray-200" : ""}`}
              >
                <Image
                  src={alignleft}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
              </button>
            </div>
            <div>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleFormat("justifyCenter")}
                className={`w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 ${activeFormats.justifyCenter ? "bg-gray-200" : ""}`}
              >
                <Image
                  src={aligncenter}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
              </button>
            </div>
            <div>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleFormat("justifyRight")}
                className={`w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 ${activeFormats.justifyRight ? "bg-gray-200" : ""}`}
              >
                <Image
                  src={alignright}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
              </button>
            </div>
          </div>
          <div className="max-h-10 px-4 py-2.5 border-r border-black/16 inline-flex items-center h-full gap-2">
            <div>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleFormat("insertOrderedList")}
                className={`w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 ${activeFormats.insertOrderedList ? "bg-gray-200" : ""}`}
              >
                <Image
                  src={number}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
              </button>
            </div>
            <div>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleFormat("insertUnorderedList")}
                className={`w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 ${activeFormats.insertUnorderedList ? "bg-gray-200" : ""}`}
              >
                <Image
                  src={dot}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
              </button>
            </div>
          </div>
          <div className="max-h-10 px-4 py-2.5 border-r border-black/16 inline-flex items-center h-full gap-2">
            <div>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                className={`w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100`}
              >
                <input
                  type="file"
                  id="upload"
                  className="hidden"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
                <label
                  htmlFor="upload"
                  className="cursor-pointer w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={picture}
                    alt="media"
                    height={18}
                    width={18}
                    className="w-4"
                  />
                </label>
              </button>
            </div>
            <div>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleInsertLink}
                className={`w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100`}
              >
                <Image
                  src={add}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
              </button>
            </div>
          </div>
          <div className="max-h-10 px-4 py-2.5 border-r border-black/16 inline-flex items-center h-full gap-2">
            <div>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={handleInsertTag}
                className={`w-auto px-2 h-7 flex items-center justify-center gap-1 rounded hover:bg-gray-100`}
              >
                <Image
                  src={t}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
                <h1 className="text-black text-base font-bold">Tags</h1>
              </button>
            </div>
          </div>
          <div className="max-h-10 px-4 py-2.5 border-r border-black/16 inline-flex items-center h-full gap-2">
            <div>
              <button
                type="button"
                className={`w-auto px-2 h-7 flex items-center justify-center gap-1 rounded hover:bg-gray-100`}
              >
                <Image
                  src={clock}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
                <h1 className="text-black text-base">10:00:00</h1>
              </button>
            </div>
          </div>
          <div className="max-h-10 px-4 py-2.5 border-r border-black/16 inline-flex items-center h-full gap-2">
            <div className="relative whitespace-nowrap" ref={billableRef}>
              <button
                type="button"
                onClick={() => setIsBillableOpen(!isBillableOpen)}
                className={`w-auto px-2 h-7 flex items-center justify-center gap-1 rounded`}
              >
                <Image
                  src={bill}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
                <div className="text-xs font-bold">{billableStatus}</div>
                <Image
                  src={Dropdown_2}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-3"
                />
              </button>
              {isBillableOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10 w-28">
                  {["Billable", "Non-Billable"].map((status) => (
                    <div
                      key={status}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs"
                      onClick={() => {
                        setBillableStatus(status);
                        setIsBillableOpen(false);
                      }}
                    >
                      {status}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="max-h-10 px-4 py-2.5 border-r border-black/16 inline-flex items-center h-full gap-2">
            <div className="relative whitespace-nowrap" ref={languageRef}>
              <button
                type="button"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`w-auto px-2 h-7 flex items-center justify-center gap-1 rounded`}
              >
                <Image
                  src={language}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-4"
                />
                <div className="text-xs font-bold">{languageStatus}</div>
                <Image
                  src={Dropdown_2}
                  alt="media"
                  height={18}
                  width={18}
                  className="w-3"
                />
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10 w-28">
                  {["English", "Spanish", "French", "German"].map((status) => (
                    <div
                      key={status}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs"
                      onClick={() => {
                        setLanguageStatus(status);
                        setIsLanguageOpen(false);
                      }}
                    >
                      {status}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="max-h-10 px-4 py-4 border-r border-black/16 inline-flex items-center h-full gap-2">
            <div className="flex items-center justify-center">
              <button>
                <Image
                  src={virtual}
                  alt="media"
                  height={18}
                  width={18}
                  className="min-w-23"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 flex gap-2">
          <div
            ref={textareaRef}
            contentEditable
            suppressContentEditableWarning
            dangerouslySetInnerHTML={htmlContent}
            onBlur={(e) => (textRef.current = e.currentTarget.innerHTML)}
            onInput={(e) => {
              textRef.current = e.currentTarget.innerHTML;
              saveSelection();
            }}
            onKeyUp={checkActiveFormats}
            onMouseUp={checkActiveFormats}
            className="w-full outline-0 border-0 resize-none overflow-hidden min-h-[100px] [&_ol]:list-decimal [&_ul]:list-disc [&_ol]:pl-5 [&_ul]:pl-5 [&_img]:max-w-full font-(--font-inter) text-[14px] leading-[20px] tracking-[-0.006em] text-justify text-[#757575]"
          />
        </div>
      </div>
    </div>
  );
}

export default Notes;
