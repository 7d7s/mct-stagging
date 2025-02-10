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
  Our counselling services provide a supportive and confidential environment where individuals can explore their thoughts, feelings, and challenges. Through evidence-based approaches, we help clients develop effective strategies for managing life's difficulties and achieving personal growth.
</p>

<h3 className="text-2xl font-bold text-[#0e305e]">Benefits of Counselling Support</h3>
<ul className="list-disc ml-6 text-gray-600 space-y-4">
  <li className="leading-loose">
    <span className="font-semibold">Emotional Well-being:</span> Learn effective strategies to manage stress, anxiety, and other emotional challenges while building resilience and self-awareness.
  </li>
  <li className="leading-loose">
    <span className="font-semibold">Personal Growth:</span> Develop valuable insights, coping mechanisms, and life skills that contribute to long-term emotional health and personal development.
  </li>
  <li className="leading-loose">
    <span className="font-semibold">Relationship Enhancement:</span> Gain tools and techniques to improve communication, strengthen relationships, and build meaningful connections with others.
  </li>
</ul>
</div>

<ul className="list-disc ml-6 text-gray-600 space-y-4">
  <li className="leading-loose">
    <span className="font-semibold">Initial Assessment:</span> Our experienced counselors conduct a comprehensive evaluation to understand your unique needs and create a personalized support plan.
  </li>
  <li className="leading-loose">
    <span className="font-semibold">Ongoing Support:</span> Regular sessions help you develop and strengthen coping strategies while tracking progress toward your personal goals.
  </li>
</ul>

              </div>

              <div className="space-y-4">
  <h2 className="text-3xl lg:text-4xl font-bold text-[#0e305e]">
    Areas We Support
  </h2>
  <p className="text-gray-600 leading-relaxed">
    Our counselling services address various emotional and psychological challenges to promote mental well-being.
  </p>
  <ul className="space-y-4 bg-gray-50 p-6 rounded-lg">
    <li className="flex items-start">
      <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold">Emotional Support:</span>{" "}
        Managing anxiety, depression, stress, and other emotional challenges through evidence-based therapeutic approaches.
      </p>
    </li>
    <li className="flex items-start">
      <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold">Relationship Guidance:</span>{" "}
        Improving communication, resolving conflicts, and building stronger connections with family, friends, and partners.
      </p>
    </li>
    <li className="flex items-start">
      <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold">Personal Development:</span>{" "}
        Building self-awareness, confidence, and resilience while working toward personal growth goals.
      </p>
    </li>
  </ul>
</div>

<div className="space-y-4">
  <h2 className="text-3xl lg:text-4xl font-bold text-[#0e305e]">
    Our Therapeutic Approaches
  </h2>
  <ul className="space-y-4 p-6">
    <li className="flex items-start">
      <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold">Individual Counselling</span>{" "}
        One-on-one sessions focused on personal growth, emotional healing, and developing effective coping strategies.
      </p>
    </li>
    <li className="flex items-start">
      <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold">Group Therapy</span>{" "}
        Supportive group environments where individuals can share experiences and learn from others facing similar challenges.
      </p>
    </li>
    <li className="flex items-start">
      <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold">Family Counselling</span>{" "}
        Working with families to improve communication, resolve conflicts, and strengthen relationships.
      </p>
    </li>
    <li className="flex items-start">
      <span className="shrink-0 mt-1 mr-3 text-teal-600">●</span>
      <p className="text-gray-600 leading-relaxed">
        <span className="font-semibold">Crisis Intervention</span>{" "}
        Immediate support and guidance for individuals experiencing acute emotional or psychological distress.
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