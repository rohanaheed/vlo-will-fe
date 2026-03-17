import React from "react";
import Image from "next/image";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import FillArrowDownBlack from "../../assets/images/FillArrowDownBlack.svg";
import NotesUser from "../../assets/images/NotesUser.svg";

import bursh from "../../assets/images/bursh.svg";
import del from "../../assets/images/deltext.svg";
import alignleft from "../../assets/images/alignleft.svg";
import aligncenter from "../../assets/images/aligncenter.svg";
import alignright from "../../assets/images/alignright.svg";
import number from "../../assets/images/number.svg";
import dot from "../../assets/images/dots.svg";
import picture from "../../assets/images/PictureIcon.svg";
import add from "../../assets/images/AddIcon.svg";
import t from "../../assets/images/TIcon.svg";
import clock from "../../assets/images/ClockIconNotes.svg";
import bill from "../../assets/images/BillIcon.svg";
import language from "../../assets/images/LanguageIcon.svg";
import Dropdown_2 from "../../assets/images/dropdown_2.svg";
import virtual from "../../assets/images/VirtualAiImage.svg";

function ReminderPopup({ onClose, onSave, onDelete, reminderNumber }) {
  const [count, setCount] = React.useState(16);
  const [activeFormats, setActiveFormats] = React.useState({});
  const [isBillableOpen, setIsBillableOpen] = React.useState(false);
  const [billableStatus, setBillableStatus] = React.useState("Billable");
  const [isLanguageOpen, setIsLanguageOpen] = React.useState(false);
  const [languageStatus, setLanguageStatus] = React.useState("English");
  const [isOverdueOpen, setIsOverdueOpen] = React.useState(false);
  const [overdueStatus, setOverdueStatus] = React.useState("Overdue by");
  const [overdueDays, setOverdueDays] = React.useState(7);

  const textRef = React.useRef("");
  const [htmlContent, setHtmlContent] = React.useState({
    __html: `
      <div style="display: flex; gap: 8px; align-items: start;">
        <img src="${NotesUser.src || NotesUser}" style="width: 24px; height: 24px; border-radius: 4px;" />
        <div style="flex: 1;">
          <p style="margin: 0; font-size: 14px; color: #6B7280; line-height: 1.5;">
            We hope this email finds you well. We appreciate your business and the trust you’ve placed in our services. This is a polite reminder that the above mentioned invoice is now overdue and request you to settle the outstanding amount at your earliest convenience.
          </p>
          <p style="margin: 16px 0 0 0; font-size: 14px; color: #6B7280; line-height: 1.5;">
            You can make the payment through our secure online portal by clicking on Pay Now button in the client portal. It will take you to Stripe payment gateway where you can make secure payment. If payment has already been made, please accept our apologies for any inconvenience and disregard this email.
          </p>
           <p style="margin: 16px 0 0 0; font-size: 14px; color: #6B7280; line-height: 1.5;">
            Thanks in advance for your cooperation.
          </p>
        </div>
      </div>
    `,
  });

  const textareaRef = React.useRef(null);
  const selectionRef = React.useRef(null);
  const billableRef = React.useRef(null);
  const languageRef = React.useRef(null);
  const overdueRef = React.useRef(null);

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
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (billableRef.current && !billableRef.current.contains(event.target)) {
        setIsBillableOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (overdueRef.current && !overdueRef.current.contains(event.target)) {
        setIsOverdueOpen(false);
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
    restoreSelection();
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
      document.execCommand("fontSize", false, "7");
      const fontElements = textareaRef.current.getElementsByTagName("font");
      for (let el of fontElements) {
        if (el.size === "7") {
          el.removeAttribute("size");
          el.style.fontSize = newSize + "px";
        }
      }
    }
    setCount(newSize);
  };

  const handleInsertTag = () => {
    const tagName = prompt("Enter tag name");
    if (tagName) {
      restoreSelection();
      const tagHtml = `<span style="background-color: #e5e7eb; padding: 2px 6px; border-radius: 4px; font-size: 0.875em; font-weight: 500;">${tagName}</span>&#8203;`;
      document.execCommand("insertHTML", false, tagHtml);
    }
  };

  const handleInsertLink = () => {
    const url = prompt("Enter URL");
    if (url) {
      restoreSelection();
      handleFormat("createLink", url);
    }
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

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-1000 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full md:max-w-[640px] overflow-hidden text-black">
        {/* Header */}
        <div className="flex justify-between items-center m-6 pb-4 mb-4 border-b border-black/16">
          <h2 className="text-lg font-semibold text-text-1">
            Reminder {reminderNumber} Edit
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer p-1 rounded-full transition-colors hover:bg-gray-100"
          >
            <Image src={CloseIcon} alt="close" width={20} height={20} />
          </button>
        </div>

        <div className="px-6 pb-6">
          {/* Instruction */}
          <p className="text-sm text-text-3 mb-5">
            Use <span className="font-semibold text-main">[invoice No]</span>{" "}
            and <span className="font-semibold text-main">[Firm Name]</span> as
            placeholders in the channel.
          </p>

          {/* Overdue Controls */}
          <div className="flex items-center gap-4 mb-5 w-full">
            <span className="text-sm whitespace-nowrap font-semibold text-text-3">
              Send if an invoice
            </span>
            <div className="relative w-full" ref={overdueRef}>
              <button
                type="button"
                onClick={() => setIsOverdueOpen(!isOverdueOpen)}
                className="flex min-w-full items-center justify-between border border-black/16 rounded-[10px] px-4 py-2.5 bg-white text-sm"
              >
                <span>{overdueStatus}</span>
                <Image
                  src={FillArrowDownBlack}
                  alt="down"
                  width={20}
                  height={20}
                />
              </button>
              {isOverdueOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-[10px] shadow-lg z-20 w-full py-1">
                  {["Overdue by", "Due in"].map((status) => (
                    <div
                      key={status}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => {
                        setOverdueStatus(status);
                        setIsOverdueOpen(false);
                      }}
                    >
                      {status}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center border border-black/16 rounded-[10px] px-4 py-2.5 bg-white max-w-[80px]">
              <input
                type="text"
                value={overdueDays}
                onChange={(e) => setOverdueDays(e.target.value)}
                className="w-full text-center outline-none text-sm font-semibold"
              />
            </div>
            <span className="text-sm font-semibold text-text-3">Days</span>
          </div>

          {/* Subject Field */}
          <div className="flex flex-col gap-1.5 mb-5">
            <label className="text-sm font-semibold text-text-3">Subject</label>
            <div className="flex items-center justify-between border border-black/16 rounded-[10px] p-3 py-3.25 cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-sm text-text-1">1st Invoice Reminder</span>
              <Image
                src={FillArrowDownBlack}
                alt="down"
                width={16}
                height={16}
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="flex flex-col gap-1.5 mb-5">
            <label className="text-sm font-semibold text-text-3">Message</label>
            <div className="rounded-lg border border-black/16 overflow-hidden">
              <div className="flex flex-wrap border-b border-black/16 text-text-4 w-full">
                <div className="max-h-10 items-center py-2 px-3 border border-black/16 inline-flex">
                  <div className="inline-block">
                    <input
                      type="text"
                      className="text-base text-text-4 outline-0 focus:border-0 w-9 font-bold inline-block"
                      value={count}
                      onChange={(e) => setCount(Number(e.target.value))}
                      onBlur={() => changeFontSize(count)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && changeFontSize(count)
                      }
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
                {/* Formatting Group */}
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
                {/* Alignment Group */}
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
                {/* List Group */}
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
                {/* Media Group */}
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
                {/* Tags Group */}
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
                {/* Time Group */}
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
                {/* Billable Group */}
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
                      <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-20 w-28">
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
                {/* Language Group */}
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
                      <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-20 w-28">
                        {["English", "Spanish", "French", "German"].map(
                          (status) => (
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
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {/* AI Group */}
                <div className="max-h-10 px-4 py-4 border border-black/16 inline-flex items-center h-full gap-2">
                  <div className="flex items-center justify-center">
                    <button className="flex items-center gap-1 hover:bg-gray-100 p-1 rounded">
                      <Image
                        src={virtual}
                        alt="media"
                        height={18}
                        width={18}
                        className="min-w-5"
                      />
                      <h1 className="text-sm font-bold text-black">
                        Virtual AI
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
              {/* Content Area */}
              <div className="p-4 bg-white min-h-[200px]">
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
                  className="w-full outline-0 border-0 resize-none overflow-hidden min-h-[100px] text-sm [&_ol]:list-decimal [&_ul]:list-disc [&_ol]:pl-5 [&_ul]:pl-5 [&_img]:max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 mb-8 border-b border-black/16 pb-4">
            <input
              type="checkbox"
              id="sendCopy"
              className="w-4 h-4 rounded border-black/20 text-main accent-main focus:ring-main cursor-pointer"
            />
            <label
              htmlFor="sendCopy"
              className="text-sm text-text-1 cursor-pointer"
            >
              Send a copy to noreply@vlo.com
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onDelete}
              className="flex-1 rounded-lg cursor-pointer hover:bg-red-50 transition-all duration-300 border border-[#EB5757] py-2.5 font-bold text-sm text-[#EB5757]"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="flex-1 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 border border-black/16 py-2.5 font-bold text-sm text-text-1"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              className="flex-1 rounded-lg cursor-pointer bg-main hover:bg-main/90 text-white transition-all duration-300 py-2.5 font-bold text-sm"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReminderPopup;
