"use client";
import { BreadcrumbImage } from "@/assets/images/home";
import Image from "next/image";
import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  items?: Array<{
    label: string;
    href?: string;
  }>;
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <section className="relative overflow-hidden  py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 hidden ">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src={BreadcrumbImage}
          alt="Background pattern"
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col">
          {/* Breadcrumb navigation */}
          {items && items.length > 0 && (
            <nav className="mb-2">
              <ol className="flex items-center space-x-2 text-lg text-[var(--primary-color)]">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {item.href ? (
                      <Link href={item.href} className="hover:text-blue-800 transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    {index < items.length - 1 && (
                      <span className="mx-2 text-[var(--primary-color)]">/</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

        </div>
      </div>
    </section>
  );
}