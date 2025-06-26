"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "Are there any setup fees?",
      answer: "No, there are no setup fees. You only pay the monthly fee.",
    },
    {
      question: "Do I have to pay every month?",
      answer:
        "You can choose to pay monthly, quarterly, or yearly after your system is set up. There are no extra charges for development or testing.",
    },
    {
      question: "What's the difference between monthly and annual plans?",
      answer:
        "If you choose the annual plan, you get a 15% discount compared to paying monthly.",
    },
    {
      question: "When does billing start?",
      answer:
        "Billing starts after your system is activated and your 14-day free trial ends. You&aposll be charged based on the plan you picked.",
    },
    {
      question: "Do you charge for extra features?",
      answer:
        "If the features you want are already in our development plans, there's no extra charge. For features outside our usual scope, we'll give you a quote after discussing your needs.",
    },
    {
      question: "How safe is Lungta?",
      answer:
        "Your data is stored on a secure, private server that only you can access. We use top hosting providers and SSL certificates to protect your information.",
    },
    {
      question: "Can I move my existing website to this platform?",
      answer:
        "Yes! Our team can help you move your products and design to our platform. Just schedule a call with one of our experts.",
    },
  ];

  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 max-w-6xl">
      {/* Main Content - Flex layout */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12">
        {/* Left Column */}
        <div className="w-full lg:w-[40%]">
          <div className="space-y-4 sm:space-y-5 sticky top-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#313332]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Find quick answers to the most common questions about our
              platform, features, pricing, and more.
            </p>
            <Link href="#" className="block w-full sm:w-auto">
              <Button variant="solid" className="w-full sm:w-auto">
                Ask Questions
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[60%]">
          <ul className="space-y-5">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className={`bg-white rounded-md border transition-all duration-200 ${
                  openIndex === index
                    ? "shadow-lg"
                    : "shadow-md hover:shadow-lg"
                }`}
                style={{
                  borderColor:
                    openIndex === index
                      ? "var(--border-color)"
                      : "var(--border-hover-color)",
                  boxShadow:
                    openIndex === index
                      ? "0 0 0 1px var(--border-color), 0 10px 15px -3px rgba(0,0,0,0.1)"
                      : undefined,
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full px-4 py-5 sm:py-6 font-medium text-left rounded-lg"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <span className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <svg
                        className="w-5 h-5 text-[var(--primary-color)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {openIndex === index && (
                  <article className="px-4 pb-6">
                    <p className="text-gray-600 text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </article>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
