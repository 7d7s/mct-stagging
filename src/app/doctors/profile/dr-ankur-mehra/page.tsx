"use client";
import Image from "next/image";
import { FaLocationDot, FaRegHospital } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { AppointmentButton, CardThree, ContactCard } from "@/components/serviceComponets/DoctorsProfile";
const DoctorProfile: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-700 pt-32 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full bg-[#0e305e] text-white px-6 lg:px-10 py-6 md:py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-[#e00e57] text-sm font-light uppercase mb-6">
  <span className="border-l-4 border-[#e00e57] pl-2"></span>
  Doctor | Dr. Ankur Mehra
</h1>
<p className="text-3xl font-bold">Dr. Ankur</p>
<p className="text-3xl font-bold">Mehra, MD</p>
         <AppointmentButton />
        </div>
        <div className="relative mt-8 md:mt-0 md:absolute md:-bottom-11 md:right-8">
          <Image
            src="/doctors/dr-ankur.jpeg"
            alt="Doctor Image"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg shadow-lg object-cover rounded-lg"
            width={350}
            height={400}
          />
        </div>
      </section>

      {/* Doctor Information */}
      <section className="max-w-7xl mx-auto pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Text Content */}
          <div className="lg:col-span-2 space-y-8">
          <div className="bg-pink-50 p-6 rounded-md grid grid-cols-1 md:grid-cols-4 gap-4 text-sm font-semibold">
  <div>
    <p className="text-[#0e305e]">Specialties</p>
    <p>General Medicine</p>
    <p>Primary Care</p>
  </div>
  <div>
    <p className="text-[#0e305e]">Clinical Interests</p>
    <p>Preventive Care</p>
    <p>Family Medicine</p>
  </div>
  <div>
    <p className="text-[#0e305e]">Gender</p>
    <p>Male</p>
  </div>
  <div>
    <p className="text-[#0e305e]">Experience</p>
    <p>15 Years</p>
  </div>
</div>


            {/* About */}
            <div>
            <h2 className="text-2xl font-bold text-[#0e305e]">
  About Dr. Ankur Mehra
</h2>
<p className="text-gray-700 mt-2">
  Dr. Ankur Mehra is a dedicated General Physician with extensive experience in primary care and preventive medicine. He specializes in diagnosing and treating a wide range of medical conditions, focusing on comprehensive patient care and wellness.
</p>
            </div>

            {/* Education */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold text-[#0e305e]">Education</h2>
              <div className="mt-2">
                <h3 className="font-semibold">Medical Board Certification</h3>
                <p>Family Medicine, American Board of Family Medicine, 2020</p>
              </div>
              <div className="mt-2">
                <h3 className="font-semibold">Residency</h3>
                <p>Family Medicine, White Memorial Medical Center, 2020</p>
              </div>
              <div className="mt-2">
                <h3 className="font-semibold">Degrees</h3>
                <p>DO, Western University of Health Sciences, 2017</p>
                <p>MS, Western University of Health Sciences, 2013</p>
              </div>
            </div>

            {/* Departments, Centers, & Programs */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold text-[#0e305e]">
                Departments, Centers, & Programs
              </h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>Novant Hospital for Children</li>
                <li>Diabetes, Pediatric</li>
                <li>Endocrinology & Diabetes</li>
                <li>Weight Loss Surgery</li>
                <li>Pediatrics</li>
              </ul>
            </div>
          </div>

          {/* Right - Contact Cards */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#0e305e] text-white">
              <h3 className="font-bold text-lg py-6 px-10">
                Practice Location
              </h3>
              <div className="bg-pink-50 text-[#0e305e] p-4 mt-2  w-full">
                <div className="space-y-2 px-5">
                  <p className="font-bold flex items-center gap-5">
                    <FaRegHospital /> Novant Hospital
                  </p>
                  <p className="flex items-center gap-5">
                    <FaLocationDot /> 5885 Jl. Soekarno-hatta
                  </p>
                  <p className="flex items-center gap-5">
                    <IoCall /> 888-807-5000
                  </p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </section>
      
<CardThree />
    <ContactCard />
    </div>
  );
};

export default DoctorProfile;