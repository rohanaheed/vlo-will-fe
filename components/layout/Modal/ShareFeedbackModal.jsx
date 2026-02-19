import React, { useState } from "react";
import Image from "next/image";
import PinIcon from "@/components/assets/images/PinIcon.svg";
import CrossIcon from "@/components/assets/images/CrossIcon.svg";

function ShareFeedbackModal({ onClose, onSubmit }) {
  const [easeOfUse, setEaseOfUse] = useState("Satisfied");
  const [improvements, setImprovements] = useState([]);
  const [clarity, setClarity] = useState("Excellent");
  const [navigation, setNavigation] = useState("Easy");
  const [comments, setComments] = useState("");
  const [overallRating, setOverallRating] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const toggleImprovement = (value) => {
    if (improvements.includes(value)) {
      setImprovements(improvements.filter((i) => i !== value));
    } else {
      setImprovements([...improvements, value]);
    }
  };

  const StarIcon = ({ filled, onClick }) => (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "#FFB400" : "none"}
      stroke={filled ? "#FFB400" : "#D1D5DB"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 cursor-pointer"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  return (
    <div className="fixed modal inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-xl w-full md:w-[700px] p-6 shadow-xl relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <Image src={CrossIcon} alt="Close" width={24} height={24} />
        </button>

        <h2 className="text-xl font-bold text-black mb-2">
          Share your feedback
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          We are committed to providing the highest level of Customer care, and
          your feedback is the best way for us to know how we are doing. We
          would greatly appreciate it if you could provide feedback.
        </p>

        <div className="space-y-6">
          {/* Question 1 */}
          <div>
            <p className="font-bold text-text-4 text-sm mb-1.5">
              How would you rate over all experience ease of use?
            </p>
            <div className="flex flex-wrap gap-4">
              {["Satisfied", "Neutral", "Not satisfied"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer text-text-5"
                >
                  <input
                    type="checkbox"
                    checked={easeOfUse === option}
                    onChange={() => setEaseOfUse(option)}
                    className="w-4 h-4 accent-[#0B2C4F] rounded"
                  />
                  <span className="text-text-5">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <p className="font-semibold text-text-4 text-sm mb-1.5">
              What can we improve?
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                "Responsiveness",
                "Clarity of Instructions",
                "Documentation",
              ].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={option}
                    checked={improvements.includes(option)}
                    onChange={() => toggleImprovement(option)}
                    className="w-4 h-4 accent-[#0B2C4F] rounded"
                  />
                  <span className="text-text-5">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div>
            <p className="font-semibold text-text-4 text-sm mb-1.5">
              How would you rate the clarity and accuracy of the documents?
            </p>
            <div className="flex flex-wrap gap-4">
              {["Excellent", "Good", "Fair", "Poor"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={clarity === option}
                    onChange={() => setClarity(option)}
                    className="w-4 h-4 accent-[#0B2C4F] rounded"
                  />
                  <span className="text-text-5">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 4 */}
          <div>
            <p className="font-semibold text-black text-sm mb-2">
              How easy was it to navigate the website?
            </p>
            <div className="flex flex-wrap gap-4">
              {["Easy", "Manageable", "Difficult"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={navigation === option}
                    onChange={() => setNavigation(option)}
                    className="w-4 h-4 accent-[#0B2C4F] rounded"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Review Text Area */}
          <div>
            <p className="font-medium text-text-4 text-sm mb-1.5">
              Your Review
            </p>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Write your comments here"
              className="w-full h-24 p-3 border border-black/16 rounded-lg text-text-5 outline-none focus:border-[#0B2C4F] text-base"
            />
          </div>

          {/* Overall Rating */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-5">
              How would you rate us overall ?
            </h3>
            <div className="flex gap-2 mb-5">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  filled={star <= overallRating}
                  onClick={() => setOverallRating(star)}
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-text-1">
              Poor / Fair / Good / Very Good / Excellent
            </p>
          </div>

          {/* File Upload */}
          <div className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-800">
            <Image src={PinIcon} alt="Attach" width={20} height={20} />
            <span className="text-text-5">
              Upload Supporting Files (optional)
            </span>
          </div>

          {/* Confirmation */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
              className="min-w-5 h-5 mt-0.5 accent-[#0B2C4F] rounded border-gray-300"
            />
            <span className="text-text-5 leading-tight">
              I confirm this feedback is based on my genuine experience, and I'm
              happy for my review to be published (name will be visible).
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8 pt-4">
          <button
            onClick={onClose}
            className="flex-1 py-2.25 border cursor-pointer border-text-4 rounded-lg text-black font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (onSubmit) {
                onSubmit();
              } else {
                onClose();
              }
            }}
            className="flex-1 py-2.25 cursor-pointer border border-main bg-main text-white rounded-lg font-semibold hover:bg-[#0B2C4F]/90 transition-colors"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareFeedbackModal;
