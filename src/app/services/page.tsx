"use client";
import { ContactCard } from "@/components/serviceComponets/DoctorsProfile";
import Image from "next/image";
import { FaAngleRight, FaArrowRight } from "react-icons/fa6";

const services = [
  { 
    title: "Speech Therapy", 
    href: "/services/speech-therapy", 
    icon: "/icons/speech.png",
    description: "Enhancing communication skills and language development"
  },
  { 
    title: "Occupational Therapy", 
    href: "/services/occupational-therapy", 
    icon: "/icons/occupational.png",
    description: "Developing daily living skills and motor abilities"
  },
  { 
    title: "Behavioral Therapy", 
    href: "/services/behavioral-therapy", 
    icon: "/icons/behavioral.png",
    description: "Supporting positive behavior and emotional regulation"
  },
  { 
    title: "Psychological Assessment", 
    href: "/services/psychological-assessment", 
    icon: "/icons/psychological.png",
    description: "Comprehensive evaluation of cognitive and emotional development"
  },
  { 
    title: "Special Education", 
    href: "/services/special-education", 
    icon: "/icons/education.png",
    description: "Personalized learning support for diverse educational needs"
  },
  { 
    title: "Early Intervention", 
    href: "/services/early-intervention", 
    icon: "/icons/early.png",
    description: "Early developmental support for optimal outcomes"
  },
  { 
    title: "Social Skills Training", 
    href: "/services/social-skills", 
    icon: "/icons/social.png",
    description: "Building social competence and peer relationships"
  },
  { 
    title: "Parent Education", 
    href: "/services/parent-education", 
    icon: "/icons/parent.png",
    description: "Empowering families with effective strategies"
  },
];
const conditions = {
  A: ["ADHD", "Autism Spectrum Disorders", "Anxiety Disorders", "Articulation Disorders"],
  B: ["Behavioral Challenges", "Balance Issues", "Brain Development", "Body Coordination"],
  C: ["Communication Disorders", "Cognitive Delays", "Coordination Issues", "Childhood Development"],
  D: ["Developmental Delays", "Dyslexia", "Down Syndrome", "Daily Living Skills"],
  E: ["Emotional Regulation", "Executive Function", "Early Intervention", "Educational Support"],
  F: ["Fine Motor Skills", "Focus Enhancement", "Family Support", "Functional Skills"],
};
const ServicesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-700 pt-32 md:pt-32">
      <section className="relative h-[50vh] w-full bg-[#0e305e] text-white px-6 lg:px-10 py-6 md:py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-[#e00e57]  text-sm font-light uppercase mb-6">
            <span className="border-l-4 border-[#e00e57] pl-2"></span>
            Treatments & Services
          </h1>
          <p className="text-3xl md:text-5xl font-bold mb-4">Our Services &</p>
          <p className="text-3xl md:text-5xl font-bold">Specialties</p>
        </div>
        <div className="relative mt-8 md:mt-0 md:absolute md:-bottom-11 md:right-8">
          <Image
            src="/Image/Adhd7.webp"
            alt="Elderly woman with a doctor"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-md text-center border border-gray-200">
        <p className="text-[#e00e57] font-semibold uppercase text-sm">
          Treatments & Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Centers of Excellence
        </h2>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-sm sm:shadow-md rounded-sm p-5 sm:p-6 flex items-center bg-pink-50 hover:border-[#0e305e] border-gray-200 border-[1px] transition"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="ml-2 sm:ml-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#0e305e] mt-2 sm:mt-4">
                  {service.title}
                </h3>
                <a
                  href="#"
                  className="mt-1 sm:mt-2 text-[#e00e57] font-medium flex items-center gap-2 text-sm sm:text-base"
                >
                  Learn More <FaArrowRight className="text-xs sm:text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="max-w-7xl mx-auto my-8 sm:my-10 p-6 bg-white rounded-md border border-gray-200">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0e305e] mb-6 text-center">
          Browse All Conditions and Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(conditions).map(([letter, items]) => (
            <div
              key={letter}
              className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200"
            >
              <h4 className="text-lg sm:text-xl font-bold text-pink-600 border-l-4 border-pink-600 pl-3 mb-4">
                {letter}
              </h4>
              <ul>
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 py-2 px-3 text-[#0e305e] text-sm sm:text-base border-b last:border-b-0 hover:text-[#0e305e] cursor-pointer transition duration-200"
                  >
                    <FaAngleRight className="text-pink-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

  <ContactCard /> 
     </div>
  );
};

export default ServicesPage;