"use client";
import { FaCalendarCheck, FaEnvelope, FaPhone } from "react-icons/fa6";
import DoctorCard from "@/components/serviceComponets/DoctorsCard";
import Image from "next/image";
import { ContactCard } from "@/components/serviceComponets/DoctorsProfile";

const ServicePage: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-700 pt-32 md:pt-32 bg-pink-50">
      <section className="relative h-[45vh] w-full bg-[#0e305e] text-white px-6 py-6 md:py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-sm border-l-4 border-[#e30057] m-4">
            <span className="pl-2 text-[#e30057] text-lg font-light uppercase">
              Treatments & Services
            </span>
          </h1>
          <p className="text-3xl md:text-5xl font-bold mb-4">Our Services &</p>
          <p className="text-3xl md:text-5xl font-bold">Specialties</p>
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

      <section className="max-w-7xl mx-auto pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Text Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0e305e] mb-4">
                  Overview
                </h2>
                <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
      Cognitive Behavioral Therapy (CBT) is a type of psychotherapy that helps individuals identify and change negative thought patterns and behaviors that may be contributing to emotional distress. CBT is commonly used for treating conditions such as anxiety, depression, and stress.
    </p>
  
    <h3 className="text-2xl font-bold text-[#0e305e]">Benefits of Cognitive Behavioral Therapy</h3>
    <ul className="list-disc ml-6 text-gray-600 space-y-4">
      <li className="leading-loose">
        <span className="font-semibold">Effective for Various Conditions:</span> CBT is effective in treating a variety of conditions, including anxiety, depression, and PTSD.
      </li>
      <li className="leading-loose">
        <span className="font-semibold">Practical & Goal-Oriented:</span> CBT focuses on solving current problems and teaches practical skills to handle challenges in daily life.
      </li>
      <li className="leading-loose">
        <span className="font-semibold">Short-Term Therapy:</span> CBT typically requires fewer sessions than traditional therapy, making it a time-efficient treatment.
      </li>
    </ul>
</div>

<ul className="list-disc ml-6 text-gray-600 space-y-4">
  <li className="leading-loose">
    <span className="font-semibold">Initial Consultation:</span> Our expert therapists conduct a thorough assessment to understand your specific needs and develop a personalized CBT treatment plan.
  </li>
  <li className="leading-loose">
    <span className="font-semibold">Progress Monitoring:</span> Regular check-ins and adjustments to your therapy plan ensure you're making meaningful progress toward your goals.
  </li>
</ul>

              </div>

              <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0e305e]">
      How CBT Works
    </h2>
    <p className="text-gray-600 leading-relaxed">
      Our systematic approach helps individuals develop effective coping strategies.
    </p>
    <ul className="space-y-4 bg-gray-50 p-6 rounded-lg">
      <li className="flex items-start">
        <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-semibold">Identifying Patterns:</span> Recognizing negative thought patterns and their impact on behavior.
        </p>
      </li>
      <li className="flex items-start">
        <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-semibold">Challenging Thoughts:</span> Learning to question and modify unhelpful thinking patterns.
        </p>
      </li>
      <li className="flex items-start">
        <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-semibold">Coping Strategies:</span> Developing healthy mechanisms to handle challenging situations.
        </p>
      </li>
    </ul>
</div>
<div className="space-y-4">
<h2 className="text-3xl lg:text-4xl font-bold text-[#0e305e]">
      Our CBT Services
    </h2>
    <ul className="space-y-4 p-6">
      <li className="flex items-start">
        <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-semibold">Anxiety Treatment:</span> CBT helps individuals manage anxiety by identifying triggers and learning techniques to reduce worry and stress.
        </p>
      </li>
      <li className="flex items-start">
        <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-semibold">Depression Treatment:</span> CBT is highly effective for treating depression by helping individuals recognize negative thought patterns and replace them with positive alternatives.
        </p>
      </li>
      <li className="flex items-start">
        <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-semibold">Stress Management:</span> CBT teaches coping mechanisms to manage stress and prevent it from interfering with daily life.
        </p>
      </li>
      <li className="flex items-start">
        <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
        <p className="text-gray-600 leading-relaxed">
          <span className="font-semibold">PTSD Treatment:</span> CBT for PTSD helps individuals process traumatic memories and develop coping strategies to manage symptoms.
        </p>
      </li>
    </ul>
  </div>
            </div>

            {/* Right Side - Cards */}
            <div className="flex flex-col  gap-8">
              <div className="bg-white text-[#0e305e] text-center px-5 py-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-3">
                  Healthcare at Your Fingertips
                </h3>
                <p className="text-lg mb-6 max-w-sm">
                  Access healthcare services anytime, anywhere. Download our
                  mobile app today!
                </p>
                <div className="flex justify-center gap-4">
                  <Image
                    src="/Image/image9.webp"
                    alt="App Store"
                    width={250}
                    height={150}
                    className=" cursor-pointer"
                  />
                </div>
              </div>
              <div className="w-full max-w-md overflow-hidden">
                <div className="bg-[#0e305e] text-white p-8 flex flex-col items-center text-center">
                  <h1 className="text-2xl font-semibold mb-2">
                    My Child Therapy
                  </h1>
                  <p className="text-sm">
                    Expert care for your child’s well-being
                  </p>
                  <div className="mt-4 space-y-3 w-full">
                    <div className="flex items-center space-x-3 text-sm">
                      <FaPhone size={18} className="text-[#e30057]" />
                      <p className="font-medium">+91-8800001312</p>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <FaEnvelope size={18} className="text-[#e30057]" />
                      <p className="font-medium">help@mychildtherapy.com</p>
                    </div>
                  </div>
                  <button className="mt-6 flex items-center justify-center bg-white text-[#e30057] font-medium px-6 py-3 w-full hover:bg-gray-50 transition-all duration-300">
                    <FaCalendarCheck className="mr-2" /> Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/*  <section>
          <div className="grid grid-cols-1  gap-3 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">
              Doctors Who Treat This Condition
            </h2>
            <DoctorCard />
            <DoctorCard />
            <DoctorCard /> 
          </div>
        </section> */}
      </section>

      <ContactCard />
    </div>
  );
};

export default ServicePage;