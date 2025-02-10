"use client";

import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagramSquare,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="fixed top-0 h-8 w-full z-50 bg-[#0c3054] text-white px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex justify-between items-center h-full text-xs sm:text-sm font-medium">
        {/* Left Section - Social Links (Hidden on small screens) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* bg-gradient-to-r from-blue-200 via-pink-300 to-yellow-200 */}
          <span className="text-xs">Follow us on:</span>
          <ul className="flex gap-2">
            <li>
              <Link href="" target="_blank" title="Facebook">
                <FaFacebookF
                  size={14}
                  className="hover:text-[#e00e57] transition"
                />
              </Link>
            </li>
            <li>
              <Link href="" target="_blank" title="Twitter">
                <FaSquareXTwitter
                  size={14}
                  className="hover:text-[#e00e57] transition"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/officialdmrc/?hl=en"
                target="_blank"
                title="Instagram"
              >
                <FaInstagramSquare
                  size={14}
                  className="hover:text-[#e00e57] transition"
                />
              </Link>
            </li>
          </ul>
          <span className="text-gray-500">|</span>
          <div className="flex items-center gap-2">
            <FaGooglePlay
              size={16}
              className="cursor-pointer hover:text-[#e00e57] transition"
            />
            <FaApple
              size={16}
              className="cursor-pointer hover:text-[#e00e57] transition"
            />
          </div>
        </div>

        {/* Right Section - Language and Navigation */}
        <div className="flex items-center mx-auto sm:mx-0 gap-16">
          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <span className="cursor-pointer hover:text-[#e00e57]">हिन्दी</span>
            <span className="text-gray-500">|</span>
            <span className="cursor-pointer hover:text-[#e00e57]">English</span>
          </div>
          {/* Navigation Links */}
          <nav className="flex gap-2">
            <Link href="/" className="hover:text-[#e00e57] transition">
              We are Open
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/corporate" className="hover:text-[#e00e57] transition">
              Book Appointment
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;