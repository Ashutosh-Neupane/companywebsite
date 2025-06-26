"use client";

import {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
} from "@/assets/images/home";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function FeatureDescription() {
  const features = [
    // Top row features (3 items)
    {
      title: "Online Storefront",
      description:
        "Create a stunning, mobile-friendly storefront with customizable templates and smooth navigation for a seamless shopping experience on any device.",
      image: Feature1,
    },
    {
      title: "CRM and Loyalty Points",
      description:
        "Strengthen customer relationships with integrated CRM tools that track behavior, reward loyalty, and automate personalized marketing to boost retention.",
      image: Feature2,
    },
    {
      title: "Sales Reporting",
      description:
        "Get detailed sales reports by product, channel, staff, and promotions to track performance, monitor discounts, and make smart business decisions.",
      image: Feature3,
    },
    // Bottom row features (2 items)
    {
      title: "Online Payments (eSewa, Khalti, FonePay & More)",
      description:
        "Track products efficiently with barcode integration, enabling real-time inventory updates, automated stock alerts, and detailed insights into sales and performance.",
      image: Feature4,
    },
    {
      title: "Delivery Channel Integration",
      description:
        "Seamlessly integrate with delivery apps like Nepal Can Move, Pathao, DASH, and Aramex to automate fulfillment, track orders in real time, and keep customers updated.",
      image: Feature5,
    },
  ];

  return (
    <div className="py-6 md:py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - First 3 Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {features.slice(0, 3).map((feature, index) => (
            <div key={`top-${index}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 max-w-md mx-auto text-justify">
                {feature.description}
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-52 object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Last 2 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.slice(3).map((feature, index) => (
            <div key={`bottom-${index}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-52 object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:hidden">
          <Link href={"/features"}>
            <Button
              variant="solid"
              className="px-6 py-2 my-6 rounded-lg whitespace-nowrap "
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
