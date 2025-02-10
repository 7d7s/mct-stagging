"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaChild,
  FaBrain,
  FaUsers,
  FaLanguage,
  FaGraduationCap,
  FaHandsHelping,
} from "react-icons/fa";

const services = [
  {
    img: "Image/Occupationaltherapy.jpg",
    icon: <FaChild size={50} className="text-[#e00e57]" />,
    title: "Occupational Therapy",
    description: "Helping children develop motor and daily living skills.",
    link: "/services/occupational-therapy?utm_source=website-home&utm_medium=services",
  },
  {
    img: "Image/Behaviour.webp",
    icon: <FaBrain size={50} className="text-[#e00e57]" />,
    title: "Behavioral Therapy",
    description: "Guiding positive behavior and emotional regulation.",
    link: "/services/behavioral-therapy?utm_source=website-home&utm_medium=services",
  },
  {
    img: "Image/Speech1.jpg",
    icon: <FaLanguage size={50} className="text-[#e00e57]" />,
    title: "Speech Therapy",
    description: "Enhancing communication and language skills.",
    link: "/services/speech-therapy?utm_source=website-home&utm_medium=services",
  },
  {
    img: "Image/Special4.jpg",
    icon: <FaGraduationCap size={50} className="text-[#e00e57]" />,
    title: "Special Education",
    description: "Tailored learning experiences for unique needs.",
    link: "/services/special-education?utm_source=website-home&utm_medium=services",
  },
  {
    img: "Image/Adhd5.jpg",
    icon: <FaUsers size={50} className="text-[#e00e57]" />,
    title: "Autism Service",
    description: "Strengthening family bonds and understanding.",
    link: "/services/autism-services?utm_source=website-home&utm_medium=services",
  },
  {
    img: "Image/Psychological.webp",
    icon: <FaHandsHelping size={50} className="text-[#e00e57]" />,
    title: "Psychology Assessment",
    description: "Evaluating cognitive and emotional development.",
    link: "/services/psychology-screening?utm_source=website-home&utm_medium=services",
  },
];

const Services = () => {
  return (
    <section className="relative bg-cover bg-center text-white bg-[#f5f2ee] py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#c13260] sm:mb-6">
          Our Services
        </h1>
        <p className="text-base sm:text-xl text-[#30333c] mb-8 sm:mb-12">
          We provide a variety of therapeutic and educational services tailored
          to your child&apos;s needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full h-60  p-4 relative overflow-hidden rounded-sm shadow-md transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <Image
                src={`/${service.img}`}
                alt={service.title}
                fill
                className="object-cover z-0"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-50" />
              <div className="relative z-20 h-full flex flex-col items-center justify-center pt-4">
                <div className="mb-2 sm:mb-4">{service.icon}</div>
                <h3 className="text-xl sm:text-xl font-semibold mb-1 sm:mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-100 mb-2 sm:mb-4 px-2">
                  {service.description}
                </p>
                <Link href={service.link} className="mt-auto">
                  <button className="bg-[#e00e57] text-white px-4 py-2 sm:px-5 sm:py-2 rounded-lg shadow-md hover:bg-pink-400 transition-colors duration-300 text-sm sm:text-base">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
};

export default Services;