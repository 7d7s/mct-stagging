"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
const Contact: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-700 pt-32 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full bg-[#0e305e] text-white px-6 lg:px-10 py-6 md:py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-[#e00e57]  text-sm font-light uppercase mb-6">
            <span className="border-l-4 border-[#e00e57] pl-2"></span>
            Home | Contact us
          </h1>
          <p className="text-4xl lg:6xl font-bold">How can we help you?</p>
        </div>
        <div className="relative mt-8 md:mt-0 md:absolute md:-bottom-11 md:right-8">
          <Image
            src="/Image/Adhd7.webp"
            alt="Doctor Image"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg shadow-lg object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8 gap-4">
          {[
            {
              title: "Get Care",
              desc: "Explore Novant's care options, find a doctor, and schedule.",
              link: "#",
            },
            {
              title: "Phone Directory",
              desc: "Search phone directory for program and service contacts.",
              link: "#",
            },
            {
              title: "Billing & Insurance",
              desc: "Contact us for billing, insurance, and FAQs assistance.",
              link: "#",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-3 md:p-6 lg:p-10">
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2 mb-4">{item.desc}</p>
              <Link
                href={item.link}
                className="inline-flex items-center justify-center font-semibold py-4 px-8 border border-white bg-white w-full text-[#0e305e] hover:text-[#e00e57] transition-colors rounded-md"
              >
                {item.title} →
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <form className="lg:col-span-2 lg:p-6">
            <h2 className="text-2xl font-semibold text-[#0e305e] mb-4">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "First Name *",
                "Last Name *",
                "Street",
                "City",
                "Email",
                "Telephone",
              ].map((label, index) => (
                <div
                  key={index}
                  className={`md:col-span-${label.includes("*") ? "1" : "2"}`}
                >
                  <label className="block text-sm font-medium text-[#0e305e]">
                    {label}
                    <input
                      type={
                        label.includes("Email")
                          ? "email"
                          : label.includes("Telephone")
                          ? "tel"
                          : "text"
                      }
                      required={label.includes("*")}
                      className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e00e57]"
                    />
                  </label>
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#0e305e]">
                  Enter Your Question or Comment
                  <textarea
                    rows={4}
                    className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#e00e57]"
                  ></textarea>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-[#e00e57] text-white py-3 rounded-md hover:bg-[#c00c4d] transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
          <div className="lg:pt-24">
            <div className="bg-[#0e305e] text-white  rounded-md">
              <h3 className="font-bold text-lg p-6">Media Enquiries</h3>
            </div>
            <div className="bg-pink-50 text-[#0e305e] p-4 pb-5">
              {[
                {
                  icon: IoIosTime,
                  title: "Office hours:",
                  info: "8.30am - 5.30pm 888-807-5000",
                },
                {
                  icon: FaPhone,
                  title: "Call hours:",
                  info: "6am - 10pm 888-807-5000",
                },
                {
                  icon: FaMapMarkerAlt,
                  title: "Location:",
                  info: "JI Soekarno-hatta",
                },
                {
                  icon: FaEnvelope,
                  title: "Email:",
                  info: "novant@mail.com",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-5 mb-3">
                  <item.icon size={25} className="text-[#e00e57]" />
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {item.title}
                    </p>
                    <p>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Social Media */}
            <div className="bg-[#0e305e] text-white p-6 rounded-md mt-8">
              <h3 className="font-bold text-lg">Social Media</h3>
            </div>
            <div className="bg-pink-50 text-[#0e305e] p-5 flex justify-between ">
              <Link href="#" className="hover:text-[#e00e57] transition-colors">
                <FaFacebook size={30} />
              </Link>
              <Link href="#" className="hover:text-[#e00e57] transition-colors">
                <FaTwitter size={30} />
              </Link>
              <Link href="#" className="hover:text-[#e00e57] transition-colors">
                <FaLinkedin size={30} />
              </Link>
              <Link href="#" className="hover:text-[#e00e57] transition-colors">
                <FaInstagram size={30} />
              </Link>
              <Link href="#" className="hover:text-[#e00e57] transition-colors">
                <FaYoutube size={30} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-gradient-to-r from-[#0e305e] to-[#e00e57] text-white px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            We’re always here to help.
          </h2>
          <p className="text-lg mb-6">
            Connect with a specialist Monday to Friday, 7 am – 7 pm (PST).
          </p>
          <button className="bg-white text-[#e00e57] font-bold py-3 px-6 text-lg hover:bg-gray-50 transition">
            Request An Appointment
          </button>
        </div>
        <div className="relative mt-8 md:mt-0">
          <Image
            src="/Image/Adhd7.webp"
            alt="Doctor Image"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover"
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;