"use client";
import { BannerImage } from "@/assets/images/home";
import Button from "@/components/ui/Button";
import { useConfigQuery } from "@/hooks/config";
import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  const {data:config}=useConfigQuery();
  return (
    <>
    {Boolean(config?.offer_banner_visibility) &&(
    <section className="bg-[#0a2647] max-w-7xl mx-auto my-5 sm:my-10 rounded-xl lg:rounded-2xl text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BannerImage}
          alt="Background pattern"
          fill
          priority
          quality={100}
          className="object-cover opacity-50"
        />
        {/* Linear gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #0A3C77, #0A3C7700)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Text content */}
          <div className="flex-1 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Women&apos;s Day <br/>for a limited time only! 
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 lg:mb-0">
              Ring in the New Year with radiant skin and refreshing self-care. Our plant-powered skincare is now 40% off for a limited time only!
            </p>
          </div>

          {/* CTA Button */}
          <div className="w-full sm:w-auto space-y-3 sm:space-y-4">
            <div className="space-y-2 sm:space-y-3 text-center">
              <div className="relative inline-block">
                <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 line-through">
                  $180.00
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">$100.00</h1>
              <h1 className="text-[#E4E61A] text-xl sm:text-2xl lg:text-3xl font-semibold">
                Enjoy 40% Off
              </h1>
            </div>
            <Link href="#">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto mx-auto px-8 py-3 text-sm sm:text-base"
              >
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>  
    )}
    </>
  );
}