"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-10">
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <Link
              href="#"
              className="flex items-center justify-between space-x-3 p-4 border-white border-[1px] hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-700 transition-colors duration-300"
            >
              <h1>Find a doctor</h1>
              <IoIosArrowForward size={25} />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between p-4 border-white border-[1px] hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-700 transition-colors duration-300"
            >
              <h1>Jl. Soekarno</h1>
              <IoIosArrowForward size={25} />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between space-x-3 p-4 border-white border-[1px] hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-700 transition-colors duration-300"
            >
              <span>Newsletters</span>
              <IoIosArrowForward size={25} />
            </Link>
          </div>

          {/* Footer Links */}
          <div className="lg:pl-12">
            <h3 className="text-[#e00e57] text-lg lg:text-xl font-bold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Service</Link>
              </li>
              <li>
                <Link href="#">Program</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="lg:pl-4">
            <h3 className="text-[#e00e57] text-lg lg:text-xl font-bold mb-3">
              About Us
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link href="#">Corporate Profile</Link>
              </li>
              <li>
                <Link href="#">Clinical Outcomes</Link>
              </li>
              <li>
                <Link href="#">Locations</Link>
              </li>
              <li>
                <Link href="#">Media Requests</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#e00e57] text-lg lg:text-xl font-bold mb-3">
              Service
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link href="#">Occupational Therapy</Link>
              </li>
              <li>
                <Link href="#">Speech Therapy</Link>
              </li>
              <li>
                <Link href="#">Psychological Assessment</Link>
              </li>
              <li>
                <Link href="#">Behavioural Assessment</Link>
              </li>
              <li>
                <Link href="#">ADHD Support</Link>
              </li>
              <li>
                <Link href="#">Counsilling</Link>
              </li>
              <li>
                <Link href="#">Psychology Screening</Link>
              </li>
              <li>
                <Link href="#">Cognitive Behavioral therapy</Link>
              </li>
            </ul>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-[#e00e57] text-lg lg:text-xl font-bold mb-3">
              Program
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link href="#">Parenting Program</Link>
              </li>

              <li>
                <Link href="#">ADL Program</Link>
              </li>
              <li>
                <Link href="#">Behavioral Program</Link>
              </li>
              <li>
                <Link href="#">Discipline With Compassion</Link>
              </li>
              <li>
                <Link href="#">School Holiday Camps</Link>
              </li>
              <li>
                <Link href="#">School Readliness camps</Link>
              </li>
              <li>
                <Link href="#">Prep Readliness Program</Link>
              </li>
              <li>
                <Link href="#">Early Intervention Program</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <div className="flex flex-wrap justify-center sm:justify-start text-[#A5A5A5] space-x-4 text-sm mb-4 sm:mb-0">
            <span className="pr-3 border-r-[1px]">Privacy Practices</span>
            <span className="pr-3 border-r-[1px]">Disclaimer</span>
            <span className="sm:pr-3 sm:border-r-[1px]">Accessibility</span>
            <span className="pr-3 border-r-[1px]">Terms of Use</span>
            <span>Sitemap</span>
          </div>
          <div className="flex space-x-5">
            <Link
              href="#"
              className="bg-[#e00e57] hover:bg-pink-700 text-white px-1 py-1 rounded-full"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="#"
              className="bg-[#e00e57] hover:bg-pink-700 text-white px-1 py-1 rounded-full"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="#"
              className="bg-[#e00e57] hover:bg-pink-700 text-white px-1 py-1 rounded-full"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              href="#"
              className="bg-[#e00e57] hover:bg-pink-700 text-white px-1 py-1 rounded-full"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="#"
              className="bg-[#e00e57] hover:bg-pink-700 text-white px-1 py-1 rounded-full"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-[#A5A5A5] py-4">
          Copyright © 2024 My Child Therapy | All rights reserved | Develop By
          7D7S Team
        </div>
      </div>
    </footer>
  );
}
