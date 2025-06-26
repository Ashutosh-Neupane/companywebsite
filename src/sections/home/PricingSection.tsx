"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    monthlyPrice: "Rs.3000",
    annualPrice: "Rs.33,000",
    features: [
      "Online Storefront",
      "POS",
      "Delivery Management",
      "Warehouse Management",
    ],
  },
  {
    name: "Basics",
    monthlyPrice: "Rs.4000",
    annualPrice: "Rs.44,000",
    features: [
      "Online Storefront",
      "POS",
      "Delivery Management",
      "Warehouse Management",
      "Discount Codes & Gift Card",
    ],
  },
  {
    name: "Plus",
    monthlyPrice: "Rs.6000",
    annualPrice: "Rs.66,000",
    features: [
      "Online Storefront",
      "POS",
      "Delivery Management",
      "Account & Billings",
      "Warehouse Management",
      "Discount Codes & Gift Card",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: "Rs.10,000",
    annualPrice: "Rs.105,000",
    features: [
      "Online Storefront",
      "POS",
      "Delivery Management",
      "Account & Billings",
      "Warehouse Management",
      "Discount Codes & Gift Card",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    features: [
      "Online Storefront",
      "POS",
      "Delivery Management",
      "Account & Billings",
      "Warehouse Management",
      "Discount Codes & Gift Card",
    ],
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4 text-center md:text-left">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Pricing
          </h2>
          <p className="text-gray-600 max-w-xl">
            Pricing that fits every stage – Whether you are just starting or
            have an established business.
          </p>
        </div>
        <div className="hidden md:block">
          <Link href={"/pricing#compare-plans"}>
            <Button
              variant="solid"
              className="px-6 py-2 rounded-lg whitespace-nowrap"
            >
              Compare
            </Button>
          </Link>
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="flex justify-center mb-10 md:mb-14">
        <div className="inline-flex border items-center bg-gray-50 rounded-md border-gray-200 p-1">
          <Button
            className={`px-5 py-2 rounded-full transition-all ${
              !isAnnual
                ? "bg-[#0D3EC5] text-white shadow-md"
                : "bg-transparent text-gray-700"
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </Button>
          <Button
            className={`px-5 py-2 rounded-full transition-all ${
              isAnnual
                ? "bg-[#0D3EC5] text-white shadow-md"
                : "bg-transparent text-gray-700"
            }`}
            onClick={() => setIsAnnual(true)}
          >
            Annually
          </Button>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border border-gray-200 rounded-xl p-6 flex flex-col`}
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-2xl font-semibold text-gray-900">
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  {plan.monthlyPrice !== "Custom" && (
                    <span className="text-sm text-gray-500">
                      /{isAnnual ? "year" : "mo"}
                    </span>
                  )}
                </p>
              </div>
              <Link href={"/contact"}>
                <Button variant="solid" className="w-full mb-6">
                  Get started
                </Button>
              </Link>
              <div className="border-t border-gray-200 pt-6 flex-grow">
                <p className="text-md font-semibold text-gray-600 mb-4">
                  {plan.name} includes:
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="flex-shrink-0 h-4 w-4 p-0.5 rounded-full bg-black text-white mt-0.5 mr-2" />
                      <span className="text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Notes */}
      <div className="text-sm text-gray-700 space-y-2 md:max-w-2xl md:mx-auto">
        <p className="flex md:items-center md:justify-center gap-2">
          <Check className="h-4 w-4 bg-[#0D3EC5] rounded-full text-white p-0.5 flex-shrink-0" />
          All plans include 24/7 support, free SSL & unlimited products
        </p>
        <p className="flex md:items-center md:justify-center gap-2">
          <Check className="h-4 w-4 bg-[#0D3EC5] rounded-full text-white p-0.5 flex-shrink-0" />
          30-day money-back guarantee on all plans
        </p>
      </div>

      <div className="block my-4 md:hidden">
        <Link href={"/pricing#compare-plans"}>
          <Button
            variant="solid"
            className="px-6 py-2 rounded-lg whitespace-nowrap"
          >
            Compare
          </Button>
        </Link>
      </div>
    </section>
  );
}
