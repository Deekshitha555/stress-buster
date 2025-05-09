"use client"
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
} from "../ui/resiable-navbar";
import { useState, useEffect } from "react";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Questionnaire", link: "/questionnaire" },
    { name: "Explore Features", link: "/features" },
    { name: "Anonymous Sharing", link: "/anonymous-sharing" },
    { name: "Book an Appointment", link: "/appointments" },
    { name: "Women health", link: "/womenhealth" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = document.cookie.includes("authToken");
    setIsAuthenticated(token);
  }, []);

  const logout = () => {
    document.cookie = "authToken=; Max-Age=0; path=/;";
    window.location.href = "/";
  };

  return (
    <div className="w-full bg-gray-900">
      <Navbar>
        <NavBody>
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo1.png"
                alt="Mind Sphere Logo"
                width={60}
                height={50}
                className="object-contain rounded-lg"
              />
              <span className="pt-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              Mind Sphere
              </span>
            </Link>
          </div>
          <NavItems items={navItems} />
          <div className="relative flex gap-4">
            {isAuthenticated ? (
              <NavbarButton variant="secondary" onClick={logout}>
                Logout
              </NavbarButton>
            ) : (
              <Link href="/signup">
                <NavbarButton variant="secondary">Signup</NavbarButton>
              </Link>
            )}
            <NavbarButton variant="primary">Contact Us</NavbarButton>
          </div>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Stress Buster Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
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
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              {isAuthenticated ? (
                <NavbarButton
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  variant="primary"
                  className="w-full"
                >
                  Logout
                </NavbarButton>
              ) : (
                <Link href="/signup" className="w-full">
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                  >
                    Signup
                  </NavbarButton>
                </Link>
              )}
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
