"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

const Header: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = (path: string) =>
    pathname === path
      ? "text-blue-500 font-semibold"
      : "text-gray-200 hover:text-blue-400 transition-colors";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#education", label: "Education" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="font-black text-xl md:text-2xl text-blue-500 tracking-wide">
            <Link href="/">ASJID ALI</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-base font-medium">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={getLinkClass(href)}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200 hover:text-blue-400 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700 shadow-lg">
            <nav className="flex flex-col items-start px-6 py-4 space-y-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={getLinkClass(href)}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Spacer */}
      {/* <div className="h-20"></div> */}
    </>
  );
};

export default Header;
