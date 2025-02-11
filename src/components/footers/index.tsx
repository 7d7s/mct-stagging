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
              <h1>Appointment</h1>
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
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Service</Link>
              </li>
              <li>
                <Link href="#">Program</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
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
                <Link href="/locations">Locations</Link>
              </li>
              <li>
                <Link href="#">Media Requests</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#e00e57] text-lg lg:text-xl font-bold mb-3">
              Service
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/services/occupational-therapy">Occupational Therapy</Link>
              </li>
              <li>
                <Link href="/services/speech-therapy">Speech Therapy</Link>
              </li>
              <li>
                <Link href="/services/behavioural-assessment">Behavioural Assessment</Link>
              </li>
              <li>
                <Link href="/services/adhd-support">ADHD Support</Link>
              </li>
              <li>
                <Link href="/services/counselling">Counselling</Link>
              </li>
              <li>
                <Link href="/services/psychology-screening">Psychology Screening</Link>
              </li>
              <li>
                <Link href="/services/cognitive-behavioral-therapy">Cognitive Behavioral therapy</Link>
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
                <Link href="/programs/adl-program">ADL Program</Link>
              </li>
              <li>
                <Link href="/programs/behavioral-programs">Behavioral Program</Link>
              </li>
              <li>
                <Link href="/programs/discipline">Discipline With Compassion</Link>
              </li>
              <li>
                <Link href="/programs/school-holiday-camp">School Holiday Camps</Link>
              </li>
              <li>
                <Link href="/programs/school-readliness">School Readliness camps</Link>
              </li>
              <li>
                <Link href="/programs/prep-readiness">Prep Readliness Program</Link>
              </li>
              <li>
                <Link href="/programs/early-intervention-program">Early Intervention Program</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <div className="flex flex-wrap justify-center sm:justify-start text-[#A5A5A5] space-x-4 text-sm mb-4 sm:mb-0">
            <Link href="/privacy"><span className="pr-3 border-r-[1px]">Privacy Practices</span></Link>
            <Link href="/disclaimer"><span className="pr-3 border-r-[1px]">Disclaimer</span></Link>
            <Link href="/accessibility"><span className="sm:pr-3 sm:border-r-[1px]">Accessibility</span></Link>
            <Link href="/terms"><span className="pr-3 border-r-[1px]">Terms of Use</span></Link>
            <Link href="#"><span>Sitemap</span></Link>
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
              href="https://instagram.com/mychildtherapy"
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
        <p className="text-base font-semibold text-gray-800">
    © 2025 My Child Therapy. All Rights Reserved.
  </p>
  <p className="text-xs text-gray-500 mt-1">
    Empowering families with expert pediatric care and compassion.
  </p>
  <p className="text-xs text-gray-500 mt-2">
    Developed with ❤️ by <span className="font-semibold text-[#e30057]">7D7S Team</span>
  </p>

        </div>
      </div>
    </footer>
  );
}
