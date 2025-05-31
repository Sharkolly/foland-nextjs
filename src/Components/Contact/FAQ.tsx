'use client'
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How do i list a property on Foland",
      answer: "Type  This!",
      status: false,
    },
    {
      id: 2,
      question: "How can i schedule a property viewing on Foland",
      answer: "Type  That!",
      status: false,
    },
    {
      id: 3,
      question: "Can i trust agents on the platform",
      answer: "Type  Those!",
      status: false,
    },
  ]);
  
  const answerFAQ = (id: number, status: boolean) => {
    const changeStatus = faqs.map((faq) =>
      faq.id == id ? { ...faq, status: !status } : {...faq}
    );
    setFaqs(changeStatus);
  };
  return (
    <section className="bg-blue-800/10">
      <div className="border-y-2 border-gray-100 bg-white py-3 mt-8">
        <div className="w-[85%] mx-auto">
          <h1 className="text-xl font-semibold">
            {" "}
            Frequently Asked Questions{" "}
          </h1>
        </div>
      </div>

      <div className="w-[55%] max-md:w-[90%] mx-auto flex flex-col py-20 max-md:py-10 gap-3">
        {faqs.map((question, index) => (
          <div
            className="px-6 cursor-pointer py-4 rounded-lg bg-white flex flex-col gap-2 "
            key={index}
            onClick={() => answerFAQ(question.id, question.status)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-md font-semibold">{question.question}</h2>
              <div>
                {question.status ?  <FaChevronDown/> :<FaChevronRight />}
              </div>
            </div>

            <p
              className={`w-[85%] ${question.status ? "" : "hidden"} `}
            >
              {question.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
