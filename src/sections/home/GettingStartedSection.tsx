"use client"

import type React from "react"
import {
  Arrow1,
  Arrow2,
  Customer1,
  Customer2,
  Customer3,
  Supplier1,
  Supplier2,
  Supplier3,
} from "@/assets/svg"
import Button from "@/components/ui/Button"
import Link from "next/link"

export default function GettingStartedSection() {
  // Data for supplier steps
  const supplierSteps = [
    {
      icon: Supplier1,
      title: "Set Up Your Store",
      description:
        "Choose a template, customize your branding, and add your products with images, prices, and descriptions—no coding needed.",
    },
    {
      icon: Supplier2,
      title: "Manage & Market",
      description:
        "Track orders, manage inventory, and use built-in marketing tools (discounts, email campaigns, SEO) to grow your business.",
    },
    {
      icon: Supplier3,
      title: "Fulfill & Analyze",
      description:
        "Process orders, print shipping labels, and access analytics to optimize sales and customer experience.",
    },
  ]

  // Data for customer steps
  const customerSteps = [
    {
      icon: Customer1,
      title: "Browse & Discover",
      description:
        "Shoppers explore your beautifully designed storefront, easily navigating categories and featured products",
    },
    {
      icon: Customer2,
      title: "Secure Checkout",
      description:
        "Customers add items to their cart and complete purchases through a fast, secure, and mobile-friendly checkout.",
    },
    {
      icon: Customer3,
      title: "Track & Receive",
      description:
        "Customers receive order confirmations and real-time shipping updates until their items arrive at their door.",
    },
  ]

  const Step = ({
    icon: Icon,
    title,
    description,
    color,
  }: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    title: string
    description: string
    color: "blue" | "red"
    isLast?: boolean
  }) => {
    const colors = {
      blue: {
        text: "text-[#0a2647]",
      },
      red: {
        text: "text-[#e63946]",
      },
    }

    const currentColor = colors[color]

    return (
      <div className="relative flex flex-col items-center z-10 min-w-[220px] flex-1 px-2">
        {/* Icon */}
        <div className="bg-white rounded-full mb-4">
          <Icon />
        </div>

        <div className="bg-white px-4">
          {/* Title */}
          <h4 className={`text-lg sm:text-xl font-bold ${currentColor.text} mb-2 text-center`}>
            {title}
          </h4>

          {/* Description */}
          <p className="text-center text-gray-600 max-w-xs text-sm sm:text-base">{description}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2647] mb-2">
            Start Building Your Online Store With
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e63946]">Three Easy Steps</h3>
        </div>

        {/* Supplier Side  */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0a2647] mb-6 sm:mb-8 text-center sm:text-left">
            Supplier Side
          </h3>
          <div className="relative">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-8 sm:gap-4 md:gap-8 lg:gap-12 px-4">
              {supplierSteps.map((step, index) => (
                <Step
                  key={`supplier-${index}`}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  color="blue"
                  isLast={index === supplierSteps.length - 1}
                />
              ))}
            </div>
            {/* Arrow - hidden on mobile */}
            <div className="hidden sm:block absolute top-10 left-1/2 right-0 flex justify-center mb-12">
              <div className="w-8 h-20 flex justify-center items-center">
                <Arrow1 className="transform -rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Customer Side */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#e63946] mb-6 sm:mb-8 text-center sm:text-left">
            Customer Side
          </h3>
          <div className="relative">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-8 sm:gap-4 md:gap-8 lg:gap-12 px-4">
              {customerSteps.map((step, index) => (
                <Step
                  key={`customer-${index}`}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  color="red"
                  isLast={index === customerSteps.length - 1}
                />
              ))}
            </div>
            {/* Arrow - hidden on mobile */}
            <div className="hidden sm:block absolute top-10 left-1/2 right-0 flex  justify-center mb-12">
              <div className="w-8 h-20 flex justify-center items-center">
                <Arrow2 className="transform -rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Get Started button*/}
        <div className="flex justify-center">
          <Link href={"/contact"}>
          <Button 
            variant="primary"
            type="button"
            className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-md hover:bg-[var(--primary-color)] transition"
          >
            Get Started
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}



