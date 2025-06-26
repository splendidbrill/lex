import React, { useState } from 'react'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "Is ToDesktop For Me?",
      answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
    },
    {
      question: "Is ToDesktop For Me?",
      answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
    },
    {
      question: "Is ToDesktop For Me?",
      answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
    },
    {
      question: "Is ToDesktop For Me?",
      answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
    },
    {
      question: "Is ToDesktop For Me?",
      answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
    },
    {
      question: "Is ToDesktop For Me?",
      answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
    }
  ];

  return (
    <div id="faq" className="container py-12 px-4 md:px-16 lg:px-32 mx-auto">
      <h2 className="h2-style">FAQs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
        {faqs.map((faq, idx) => (
          <div key={idx} className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
            <dt
              className="cursor-pointer flex justify-between items-center"
              aria-controls={`faq-${idx}`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <p className="font-semibold text-lg">{faq.question}</p>
              <i className={`fa-solid fa-chevron-up transition-transform duration-200 ${openIndex === idx ? '' : '-rotate-180'}`}></i>
            </dt>
            <dd
              id={`faq-${idx}`}
              className={`text-lg font-light mt-6 transition-all duration-200 ${openIndex === idx ? 'block' : 'hidden'}`}
            >
              <p>{faq.answer}</p>
            </dd>
          </div>
        ))}
      </div>
    </div>
  )
}
