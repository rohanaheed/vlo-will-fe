"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import bursh from "../assets/images/bursh.svg";
import del from "../assets/images/deltext.svg";
import alignleft from "../assets/images/alignleft.svg";
import aligncenter from "../assets/images/aligncenter.svg";
import alignright from "../assets/images/alignright.svg";
import number from "../assets/images/number.svg";
import dot from "../assets/images/dots.svg";
import picture from "../assets/images/PictureIcon.svg";
import add from "../assets/images/AddIcon.svg";
import t from "../assets/images/TIcon.svg";
import clock from "../assets/images/ClockIconNotes.svg";
import bill from "../assets/images/BillIcon.svg";
import language from "../assets/images/LanguageIcon.svg";
import Dropdown_2 from "../assets/images/dropdown_2.svg";
// import person from "../assets/images/notesPersonIcon.svg";
import virtual from "../assets/images/VirtualAiImage.svg";
import CloseIcon from "../assets/images/CloseIcon.svg";
// import InfoIconImg from "../assets/images/info-icon.svg";

function Notes({
  onClose,
  initialValue = "",
  onSave,
  title = "Add Note",
  placeholder = "Enter text...",
  label = "Description",
}) {
  const [count, setCount] = useState(16);
  const textRef = useRef(initialValue);
  const textareaRef = useRef(null);
  const selectionRef = useRef(null);
  const [activeFormats, setActiveFormats] = useState({});
  const [isBillableOpen, setIsBillableOpen] = useState(false);
  const [billableStatus, setBillableStatus] = useState("Billable");
  const billableRef = useRef(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [languageStatus, setLanguageStatus] = useState("English");
  const languageRef = useRef(null);

  const htmlContent = useMemo(
    () => ({ __html: textRef.current }),
    [initialValue],
  );

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
    <>
      <style>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #919EAB;
          cursor: text;
        }
      `}</style>
      <div className="flex flex-col gap-2 mb-2.5">
        <label className="text-sm font-semibold text-text-3">{label}</label>
      </div>
      <div className="rounded-lg border border-black/16 shadow">
        <div className="flex flex-wrap border-b border-black/16 text-text-4 w-full">
          <div className="max-h-10 items-center py-2 px-3 border border-black/16 inline-flex">
            <div className="inline-block">
              <input
                type="text"
                className="text-base text-text-4 outline-0 focus:border-0 w-9 font-bold inline-block"
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
          <div className="max-h-10 px-4 py-2 inline-flex gap-3 items-center border h-full border-black/16">
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
          <div className="max-h-10 px-4 py-2.5 border border-black/16 inline-flex items-center h-full gap-2">
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
          <div className="max-h-10 px-4 py-2.5 border border-black/16 inline-flex items-center h-full gap-2">
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
          <div className="max-h-10 px-4 py-2.5 border border-black/16 inline-flex items-center h-full gap-2">
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
          <div className="max-h-10 px-4 py-2.5 border border-black/16 inline-flex items-center h-full gap-2">
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
                <h1 className="text-black text-sm font-bold">Tags</h1>
              </button>
            </div>
          </div>
          <div className="max-h-10 px-4 py-2.5 border border-black/16 inline-flex items-center h-full gap-2">
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
                <h1 className="text-black text-sm font-bold">10:00:00</h1>
              </button>
            </div>
          </div>
          <div className="max-h-10 px-4 py-2.5 border border-black/16 inline-flex items-center h-full gap-2">
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
                  className="w-2.5"
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
          <div className="max-h-10 px-4 py-2.5 border border-black/16 inline-flex items-center h-full gap-2">
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
                  className="w-2.5"
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
          <div className="max-h-10 px-4 py-4 border border-black/16 inline-flex items-center h-full gap-2">
            <div className="flex items-center justify-center">
              <button className="flex items-center gap-1">
                <Image
                  src={virtual}
                  alt="media"
                  height={18}
                  width={18}
                  className="min-w-5"
                />
                <h1 className="text-sm font-bold text-black">Virtual AI</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 flex gap-2">
          <div
            ref={textareaRef}
            contentEditable
            suppressContentEditableWarning
            dangerouslySetInnerHTML={htmlContent}
            data-placeholder={placeholder}
            onBlur={(e) => (textRef.current = e.currentTarget.innerHTML)}
            onInput={(e) => {
              textRef.current = e.currentTarget.innerHTML;
              if (onSave) onSave(e.currentTarget.innerHTML);
              saveSelection();
            }}
            onKeyUp={checkActiveFormats}
            onMouseUp={checkActiveFormats}
            className="w-full outline-0 border-0 resize-none overflow-hidden min-h-[130px] [&_ol]:list-decimal [&_ul]:list-disc [&_ol]:pl-5 [&_ul]:pl-5 [&_img]:max-w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Notes;
