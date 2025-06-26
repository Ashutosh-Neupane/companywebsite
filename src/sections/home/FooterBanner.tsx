"use client";
import { FooterBottom } from "@/assets/images/home";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function FooterBanner() {
  return (
    <section className="bg-[#EDECF5] max-w-7xl mx-auto my-4 sm:my-8 lg:my-10 rounded-xl lg:rounded-2xl py-6 sm:py-10 lg:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
        {/* Image - responsive sizing */}
        <div className="flex-shrink-0 w-1/3 md:w-1/5 flex justify-center">
          <Image
            src={FooterBottom}
            alt="Footer"
            width={160}
            height={160}
            className="object-cover w-full h-auto max-w-[120px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[380px]"
            priority
          />
        </div>

        {/* Content - responsive sizing */}
        <div className="w-full md:w-4/5 flex flex-col justify-center gap-4 sm:gap-6">
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight text-[var(--primary-color)]">
              Ready to Build the Store You Envision?
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6">
              Whether you&apos;re just getting started or ready to upgrade your online operations, Lungta.biz gives you the tools to succeed — all in one place.
            </p>
          </div>

          {/* CTA Buttons - responsive sizing */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center md:justify-start">
            <Link href="request-demo" className="w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base"
              >
                Request A Demo
              </Button>
            </Link>
            {/* <Link href="/contact" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base bg-white text-[var(--primary-color)] hover:bg-gray-50 transition-colors"
              >
                Get Started - It&apos;s free
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}