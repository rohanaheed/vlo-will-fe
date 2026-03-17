"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/common/Header";
import dots from "@/components/assets/images/dots.svg";
import MinusIcon from "@/components/assets/images/MinusRemove.svg";
import PlusIcon from "@/components/assets/images/PlusIcon.svg";

export default function GeneralFAQ() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Can I make my own Will online?",
      answer:
        "Yes. Using this form, you can create a legally valid Will by answering a few simple questions. Once generated, review and sign it according to the instructions provided.",
    },
    {
      id: 2,
      question: "Do I need a solicitor to make a Will?",
      answer:
        "Not necessarily. This document is designed for self-completion, though you may wish to seek legal advice if your estate is complex or involves international assets.",
    },
    {
      id: 3,
      question: "How often should I update my Will?",
      answer:
        "You should review your Will after major life events such as marriage, divorce, buying property, or the birth of a child.",
    },
    {
      id: 4,
      question: "What makes a Will legally valid?",
      answer:
        "Your Will must be signed and dated in the presence of two independent witnesses who also sign it in your presence.",
    },
    {
      id: 5,
      question: "Can I include digital assets in my Will?",
      answer:
        "Yes. You can list online accounts, cryptocurrency, or digital files as part of your estate.",
    },
  ]);

  const handleAddFaq = () => {
    const newId = faqs.length > 0 ? Math.max(...faqs.map((f) => f.id)) + 1 : 1;
    setFaqs([...faqs, { id: newId, question: "", answer: "" }]);
  };

  const handleRemoveFaq = (id) => {
    setFaqs(faqs.filter((f) => f.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setFaqs(faqs.map((f) => (f.id === id ? { ...f, [field]: value } : f)));
  };

  return (
    <div className="mt-16 md:mt-22 pb-6 text-black bg-[#F9FAFB] min-h-screen">
      <Header title="General FAQs" />
      <main className="lg:max-w-[calc-(100%-300px)] lg:ml-80.5 m-3 mb-0 md:m-6 md:mb-0 bg-white p-3 md:p-6 rounded-md border border-[#E6E6E6]">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-text-1">General FAQs</h1>
          <p className="text-base text-text-1 mt-1">
            A central library of internal FAQs for the Lawnest admin team.
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-text-1">
            FAQ&apos;s{" "}
            <span className="font-semibold">(Frequently asked questions)</span>
          </h2>
          <button
            onClick={handleAddFaq}
            className="flex items-center gap-2 cursor-pointer bg-main hover:bg-main text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            <Image
              src={PlusIcon}
              alt="Add"
              width={16}
              height={16}
              className="brightness-0 invert"
            />
            Add
          </button>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="flex group relative">
              {/* FAQ Card */}
              <div className="flex-1 bg-[#F3F5F7] border border-[#F3F5F7] rounded-[10px] p-4 relative">
                <div className="flex flex-col gap-4 pr-6">
                  <div>
                    <h3 className="text-lg font-medium text-text-1 mb-2">
                      Question {index + 1}
                    </h3>
                    <div className="relative">
                      <textarea
                        value={faq.question}
                        onChange={(e) =>
                          handleInputChange(faq.id, "question", e.target.value)
                        }
                        className="w-full bg-white border border-[#F4F4F4] rounded-[10px] p-3 text-sm text-text-1 focus:outline-none focus:ring-2 focus:ring-main min-h-[50px] resize-none"
                        placeholder="Type Question here..."
                        rows={1}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-text-1 mb-2">
                      Answer
                    </h3>
                    <textarea
                      value={faq.answer}
                      onChange={(e) =>
                        handleInputChange(faq.id, "answer", e.target.value)
                      }
                      className="w-full bg-white border border-[#F4F4F4] rounded-[10px] p-3 text-sm text-text-1 focus:outline-none focus:ring-2 focus:ring-main min-h-[80px] resize-none"
                      placeholder="Type Answer here..."
                    />
                  </div>
                </div>

                {/* Mobile/Default Remove Button Position matching screenshot */}
                <button
                  onClick={() => handleRemoveFaq(faq.id)}
                  className="absolute right-4 top-1/2 -translate-y-[calc(50%+12px)] p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Image src={MinusIcon} alt="Remove" width={18} height={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center gap-4 mt-6 p-5 bg-[#ECF6FF]">
          <button className="bg-main hover:bg-main cursor-pointer text-white px-8 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md">
            Save
          </button>
          <button className="bg-white border border-main cursor-pointer text-main px-8 py-2.25 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-all">
            Back
          </button>
        </div>
      </main>
    </div>
  );
}
