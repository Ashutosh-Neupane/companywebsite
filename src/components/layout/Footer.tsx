"use client";

import Link from "next/link";
import Image from "next/image";
// Import Call and Mail as components from your assets/svg index file
import { Call, Mail } from "@/assets/svg";
import { DotsAndDashes } from "@/assets/images/home"; // Assuming DotsAndDashes is an image asset, correctly imported
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F4F5F7] text-[--primary] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="w-full md:w-auto md:flex-1 lg:flex-2 xl:flex-3 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src={DotsAndDashes}
                alt="Company Logo"
                className="h-auto w-full max-w-[280px]"
                width={180}
                height={50}
              />
            </Link>
            <div className="text-sm sm:text-md max-w-md text-justify hyphens-auto leading-relaxed">
              We empower businesses to succeed online through innovative
              eCommerce solutions. Our platform helps streamline operations,
              enhance customer experience, and drive growth. Whether you're
              scaling up or just starting out, we've got the tools you need.
            </div>
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
              <div className="pt-4 w-full">
                <h4 className="font-medium mb-3 border-b border-[--primary] pb-2 sm:pb-3">
                  Powered By
                </h4>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Image
                      src={DotsAndDashes}
                      alt="Powered By Logo"
                      className="w-full h-12 object-cover"
                      width={100}
                      height={48}
                    />
                  </div>
                  <span className="text-xs sm:text-sm">
                    Dots & Dashes Technology Services
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-auto md:flex-1">
            <h3 className="text-md sm:text-lg font-semibold mb-4 sm:mb-5 border-b border-[--primary] pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {["Home", "Features", "Pricing", "Contact Us"].map((text, i) => (
                <li key={text}>
                  <Link
                    href={["/", "/features", "/pricing", "/contact"][i]}
                    className="transition-colors text-xs sm:text-sm flex items-center gap-2 hover:text-[--primary]"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full sm:w-auto md:flex-1">
            <h3 className="text-md sm:text-lg font-semibold mb-4 sm:mb-5 border-b border-[--primary] pb-2 inline-block">
              Contact
            </h3>
            <address className="not-italic space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Replaced Image with Call component */}
                <Call
                  className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"
                  aria-label="Phone Icon" // Added aria-label for accessibility
                />
                <div className="text-xs sm:text-sm space-y-1">
                  {[
                    "+977-9820150660",
                    "+977-9820150877",
                    "+977-9802032841",
                  ].map((phone) => (
                    <div key={phone}>
                      <a href={`tel:${phone}`} className="hover:underline">
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Replaced Image with Mail component */}
                <Mail
                  className="w-5 h-4 sm:w-5 sm:h-4 mt-0.5 flex-shrink-0"
                  aria-label="Mail Icon" // Added aria-label for accessibility
                />
                <a
                  href="mailto:inquiry@lungta.biz"
                  className="hover:underline text-xs sm:text-sm"
                >
                  inquiry@lungta.biz
                </a>
              </div>
            </address>
          </div>

          {/* Follow Us */}
          <div className="w-full sm:w-auto md:flex-1">
            <h3 className="text-md sm:text-lg font-semibold mb-4 sm:mb-5 border-b border-[--primary] pb-2 inline-block">
              Follow Us
            </h3>
            <div className="flex gap-2 sm:gap-3">
              {[
                {
                  icon: FaFacebookF,
                  href: "https://www.facebook.com/dndtsnp/",
                  alt: "Facebook",
                  hoverBg: "hover:bg-[#1877F2]",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/dndtstech/",
                  alt: "Instagram",
                  hoverBg:
                    "hover:bg-gradient-to-tr from-pink-500 to-yellow-500",
                },
                {
                  icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/company/dots-and-dashes-technology/",
                  alt: "LinkedIn",
                  hoverBg: "hover:bg-[#0A66C2]",
                },
              ].map(({ icon: Icon, href, hoverBg, alt }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center rounded-full h-8 w-8 sm:h-10 sm:w-10 border border-[--primary] transition-all duration-300 ${hoverBg}`}
                >
                  <Icon
                    className="text-[var(--primary)] group-hover:text-white text-sm sm:text-base transition-colors duration-300"
                    aria-label={alt}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[var--primary] mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-2 text-xs sm:text-sm">
            <Link
              href="#"
              className="transition-colors hover:text-[var(--primary-color)]"
            >
              Help Center
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[var(--primary-color)]"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="#"
              className="transition-colors hover:text-[var(--primary-color)]"
            >
              Terms of Services
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-center font-bold text-[var(--primary-color)] md:text-right">
            &copy; {new Date().getFullYear()} Dots and Dashes Technology
            Services Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}