"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { MenuBar } from "@/assets/svg";
import { DotsAndDashes } from "@/assets/images/home";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/about", label: "About us" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-gray-50 sticky top-0 z-50 shadow-sm">
      <div className="py-3 px-4 sm:px-6 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif text-[#0a3977] font-bold">
          <Image src={DotsAndDashes} alt="Logo" width={100} height={100} />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden min-[961px]:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-1 py-2 text-sm lg:text-base font-medium transition-colors ${
                pathname === link.href
                  ? "text-[var(--primary-color)] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-[#172E6C]"
                  : "text-gray-700 hover:text-[var(--primary-color)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side Button */}
        <div className="hidden min-[961px]:flex items-center space-x-4">
          <Link href="/contact">
            <Button
              variant="outline"
              className="  text-[var(--primary-color)]  border-2 cursor-pointer  p-0 "
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Right Side (hamburger + get started) */}
        <div className="min-[961px]:hidden flex items-center space-x-2">
          <Link href="/contact">
            <Button
              variant="outline"
              className=" text-lg  text-[var(--primary-color)]  border-2   font-medium"
            >
              Get Started
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <MenuBar size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="min-[961px]:hidden bg-white shadow-md px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-medium ${
                pathname === link.href ? "text-[#172E6C]" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
