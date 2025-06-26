"use client";
import { AboutHeroImage } from "@/assets/images/about";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto w-full py-12 px-4 sm:px-6 overflow-x-hidden">
      {/* Hero Section */}

      <section className="text-center mb-16 max-w-2xl mx-auto px-5 sm:px-6 lg:px-8">
        <h1 className="font-semibold text-[#313332] text-2xl sm:text-3xl lg:text-4xl leading-tight">
          About Us
        </h1>
        <p className="mt-2  text-base text-[#646966] leading-relaxed">
          Here&apos;s what brings you to the table and what we offer and how our
          eCommerce site evolved through.
        </p>
      </section>

      {/* Image + Intro Section */}
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-4 md:mb-20 ">
        {/* Left: Image */}
        <div className=" h-[300px] sm:h-[350px] md:h-[400px] lg:h-[286px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={AboutHeroImage}
            alt="About Lungta.biz"
            width={674}
            height={286}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Right: Text + Button */}
        <div className=" space-y-6 px-4 text-justify hyphens-auto">
          <p className="text-base  text-[#313332]  leading-relaxed">
            Welcome to
            <Link
              href="https://lungta.biz"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;Lungta.biz
            </Link>
            ,a comprehensive eCommerce and business management platform
            developed by Dots and Dashes Technology Services Pvt. Ltd. We are
            dedicated to helping businesses of all sizes establish and grow
            their online presence with a full suite of integrated solutions
            designed for the modern marketplace.
          </p>
          <Link href="/contact">
            <Button variant="outline">Get Started</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
