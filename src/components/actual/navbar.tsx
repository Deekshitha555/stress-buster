"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resiable-navbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Questionnaire",
      link: "/questionnaire",
    },
    {
      name: "Explore Features",
      link: "/features",
    },
    {
      name: "Anonymous Sharing",
      link: "/anonymous-sharing",
    },
    {
      name: "Book an Appointment",
      link: "/appointments",
    },
    {
      name: "Women health",
      link: "/womenhealth",
    },
   
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gray-900 ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
        <div className="flex items-center">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Stress Buster Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="pt-20 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Stress Buster
              </span>
            </Link>
          </div>
          <NavItems items={navItems} />
          <div className="relative gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Contact Us</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
          <div className="flex items-center mt-3">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Stress Buster Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>
          <span className="pt-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Stress Buster
              </span>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Contact Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
