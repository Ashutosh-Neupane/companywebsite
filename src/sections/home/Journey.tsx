"use client";
import { JourneyImage } from "@/assets/images/home";
import Image from "next/image";
import Link from "next/link";
export default function Journey() {
  return (
    <section className="bg-[#0a2647] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={JourneyImage}
          alt="Background pattern"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
        {/*linear gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #02113B00, #021038)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Text content */}
          <div className="flex-1 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Ready to Transform Your Ecommerce Journey?
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 lg:mb-0 ">
              Experience firsthand how Lungta.biz can help you unlock new levels
              of growth. Set up a complete Mobile e-Commerce platform in days
              and start selling
            </p>
          </div>

          {/* CTA Button */}
          <div className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="bg-[#E4E61A] hover:bg-[#d6d409] text-[var(--primary-color)] font-semibold px-6 py-3 rounded-md inline-block transition-colors duration-300 text-center w-full sm:w-auto"
            >
              Get started - It&apos;s free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


