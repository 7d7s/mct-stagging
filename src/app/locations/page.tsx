"use client";
import FAQ from "@/components/featureComponents/faqSection";
import Image from "next/image";
const Location: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-700 pt-32 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full bg-[#0e305e] text-white px-6 lg:px-10 py-6 md:py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-white text-sm font-light uppercase mb-6">
            <span className="border-l-4 border-[#e00e57] px-2"> Home </span>|
            <span className="px-2">Location</span>
          </h1>
          <p className="text-3xl md:text-5xl font-bold">Our Locations</p>
          <p className="textxl md:text-3xl mt-4">
            Find us at one of our convenient locations.
          </p>
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
      <section className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Office Locations
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                location: (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56020.48732830913!2d77.14475!3d28.651319999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0310af515fd9%3A0xce0d7b6154db1cb3!2sWS%20Clinic!5e0!3m2!1sen!2sin!4v1739268564206!5m2!1sen!2sin"
                    className="w-full h-64 border-0 rounded-lg shadow-lg"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ),
                add: "Kirti Nagar, Delhi",
                fullAdd:"WS Clinic WS Clinic, I-102, Second Floor, Block I, Kirti Nagar, Delhi, 110015",
                time: "Mon-Sat: 9 AM - 6 PM",
              },
              {
                location: (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112213.29036724691!2d76.995925!3d28.489624000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17d5380cb337%3A0x7896fda203ea3deb!2sNorthern%20Peripheral%20Rd!5e0!3m2!1sen!2sin!4v1739269939776!5m2!1sen!2sin"
                    className="w-full h-72 border-0 rounded-lg shadow-lg"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ),
                add: "Dwarka Expressway, Delhi",
                fullAdd:"Plot no. U-237A, Sec-106, near conscient one mall, dwarka expressway, gurugram - 122017",
                time: "Mon-Sat: 9 AM - 6 PM",
              },
              {
                location: (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14016.32364165423!2d77.220472!3d28.567333!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM0JzAyLjQiTiA3N8KwMTMnMTMuNyJF!5e0!3m2!1sen!2sin!4v1739270222281!5m2!1sen!2sin"
                    className="w-full h-64 border-0 rounded-lg shadow-lg"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ),
                add: "South Ex, New Delhi",
                fullAdd:"A-24 Basement, South Ex Part-2, New Delhi-110049",
                time: "Mon-Sat: 9 AM - 6 PM",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2"
              >
                {post.location}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                  <h1 className="text-xl font-bold text-white drop-shadow-md">
                    {post.add}
                  </h1>
                  <p className="text-sm text-white/90 font-medium">
                    {post.fullAdd}
                  </p>
                  <p className="text-sm text-white/90 font-medium">
                    {post.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <FAQ />
        </div>
      </section>

      <section className="relative w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            We’re always here to help.
            <br /> Contact us today.
          </h2>
          <p className="text-lg mb-6">
            Connect with a customer care specialist Monday to Friday, 7 am – 7
            pm (PST).
          </p>
          <button className="bg-white text-[#e00e57] font-bold py-3 px-6  text-lg  hover:bg-gray-50 transition">
            Request An Appointment
          </button>
        </div>
        <div className="relative mt-8 md:mt-0">
          <Image
            src="/Image/Adhd7.webp"
            alt="Elderly woman with a doctor"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg object-cover"
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
};

export default Location;