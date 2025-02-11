"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How do I choose the right hospital for my needs?",
    answer: "Choosing the right hospital depends on your medical needs, insurance coverage, and doctor recommendations.",
  },
  {
    question: "What should I bring when going to the hospital?",
    answer: "You should bring your ID, insurance details, medications, and any relevant medical history documents.",
  },
  {
    question: "Do I need insurance to receive care at a hospital?",
    answer: "Most hospitals accept patients without insurance, but having insurance can significantly reduce costs.",
  },
  {
    question: "How are hospital bills typically paid?",
    answer: "Hospital bills can be paid via insurance, out-of-pocket, or payment plans offered by the hospital.",
  },
  {
    question: "What is the role of nurses and doctors in a hospital?",
    answer: "Doctors diagnose and treat patients, while nurses provide ongoing care, administer medications, and monitor patient progress.",
  },
  {
    question: "Can I choose my doctor in a hospital?",
    answer: "In most cases, you can request a specific doctor, but availability may depend on hospital policies and insurance coverage.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 bg">
      <h2 className="text-center text-3xl font-bold text-[#0e305e] mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left p-4 text-lg font-medium"
            >
              <span
                className={`transition-colors duration-300 ${
                  openIndex === index ? "text-[#e00e57]" : "text-[#0e305e]"
                }`}
              >
                {faq.question}
              </span>
              {openIndex === index ? (
                <FiMinus className="text-[#e00e57] transition-transform duration-300 transform rotate-180" />
              ) : (
                <FiPlus className="text-[#0e305e] transition-transform duration-300" />
              )}
            </button>
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === index ? "max-h-[200px] opacity-100 py-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-4 text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;