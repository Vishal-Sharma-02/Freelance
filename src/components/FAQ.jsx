import React, { useState } from "react";

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl border hover:shadow-lg transition"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-center"
            >
              <span className="text-lg font-semibold">{faq.question}</span>

              <span className="text-2xl font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-5" : "max-h-0 px-5"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
