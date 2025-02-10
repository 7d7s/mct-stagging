import {
    FaHospital,
    FaPhone,
    FaStar,
    FaRegStarHalfStroke,
  } from "react-icons/fa6";
  import Image from "next/image";
  
  export default function DoctorCard() {
    return (
      <div className="bg-white shadow-sm rounded-lg border p-2 max-w-sm md:max-w-2xl flex flex-col md:flex-row lg:space-x-5">
        {/* Doctor Image Section */}
        <div className="relative rounded-lg overflow-hidden border w-full md:w-1/3">
          <Image
            src="/assets/DrVarunVij.jpg"
            alt="Dr. Daniel Kim"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute md:hidden bottom-0 left-0 bg-white p-2 w-[80%]">
            <h3 className="text-xl font-semibold">Dr. Daniel Kim</h3>
            <p className="text-gray-700 mt-1">
              <span className="font-semibold">Specialties:</span> Ophthalmologist
            </p>
          </div>
        </div>
  
        {/* Doctor Information Section */}
        <div className="w-full md:w-2/3 p-2">
          <div className="hidden md:flex md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Dr. Daniel Kim</h3>
              <p className="text-gray-700 mt-1">
                <span className="font-semibold">Specialties:</span>{" "}
                Ophthalmologist
              </p>
            </div>
            <div className="flex items-center mt-2 text-teal-600 p-3">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />
            </div>
          </div>
          <div className="md:hidden flex items-center text-teal-600">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke />
          </div>
          {/* Contact Info */}
          <div className="mt-2 text-gray-700">
            <p className="flex items-center gap-2">
              <FaHospital /> <span>Novant Hospital</span>
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> <span>310-453-1871</span>
            </p>
          </div>
  
          {/* Action Buttons */}
          <div className="mt-4 flex gap-4">
            <button className="bg-teal-600 text-white text-sm p-3 hover:bg-teal-700">
              Schedule appointment
            </button>
            <button className="text-sm border border-gray-400 p-3 hover:bg-gray-100">
              View Profile
            </button>
          </div>
        </div>
      </div>
    );
  }