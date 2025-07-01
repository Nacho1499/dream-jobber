"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-green-50/90 backdrop-blur-md p-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between mt-4">
        <h1 className="text-xl bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent font-bold">Dream-Jobber</h1>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-green-700">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link href="" className="hover:text-green-600 transition">
            About
          </Link>
          <Link href="/agents" className="hover:text-green-600transition">
            Latest jobs
          </Link>
          <Link href="/agents" className="hover:text-green-600transition">
            Blogs
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#d4af37] focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-60 mt-3" : "max-h-0"
          }`}
      >
        <div className="bg-[#1f2937] text-[#d4af37] rounded p-4 space-y-4 font-medium">
          <Link
            href="/"
            onClick={toggleMenu}
            className="block hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="block hover:text-yellow-400"
          >
            About
          </Link>
          <Link
            href="/agents"
            onClick={toggleMenu}
            className="block hover:text-yellow-400"
          >
            Features
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
