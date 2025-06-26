"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { X } from "lucide-react";
import { Menu } from "@/assets/svg";;

type LinkItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  links: LinkItem[];
  currentPath: string;
};

export default function MobileMenu(props: MobileMenuProps) {
  const { links, currentPath } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button variant="ghost" onClick={() => setIsOpen(true)}>
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-end ">
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center space-y-6 mt-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-medium ${
                  currentPath === link.href
                    ? "text-[#0a3977]"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary">Sign up</Button>
          </nav>
        </div>
      )}
    </div>
  );
}
