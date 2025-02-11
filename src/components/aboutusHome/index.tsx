import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCheck, FaPhoneAlt } from "react-icons/fa";

const AboutUsHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className={`bg-white min-h-screen flex items-center justify-center pt-20 pb-12 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="bg-white w-full p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div className="grid grid-cols-2 gap-4 rounded-lg">
            <Image
              src="/doctors/dr-upinder-kaur.webp"
              alt="Therapy"
              className="rounded-full shadow-lg col-span-2 md:col-span-1 row-span-2 h-full object-cover transform transition-transform duration-300 hover:scale-105"
              height={400}
              width={600}
            />
            <Image
              src="/doctors/dr-sachin.webp"
              alt="Counseling"
              className="shadow-lg md:rounded-[50%] rounded-full col-span-1 object-cover transform transition-transform duration-300 hover:scale-105"
              width={200}
              height={200}
            />
            <Image
              src="/doctors/dr-varun.webp"
              alt="Consultation"
              className="shadow-lg md:rounded-[50%] rounded-full col-span-1 object-cover transform transition-transform duration-300 hover:scale-105"
              width={200}
              height={200}
            />
          </div>

          {/* Content Section */}
          <div>
            <h1 className="text-gray-700 text-lg font-semibold uppercase">
              About Us
            </h1>
            <h2 className="text-4xl font-bold text-[#0e305e] mt-4 leading-tight">
              Transforming Lives Through Expert Therapy
            </h2>
            <p className="text-gray-600 mt-4 text-base">
              At <span className="font-semibold">MyChildTherapy</span>, we are
              dedicated to providing comprehensive therapy solutions that foster
              growth, confidence, and independence in children. Our team of
              certified specialists utilizes evidence-based techniques to
              deliver personalized care that ensures real progress.
            </p>

            {/* Why Choose Us */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-[#c13260] font-bold text-lg">
                  Why Choose Us?
                </h3>
                <ul className="mt-4 space-y-4 text-gray-700">
                  {[
                    {
                      title: "Tailored Treatment Plans",
                      description:
                        "Customized therapy designed to meet each child’s unique needs.",
                    },
                    {
                      title: "Expert-Led Care",
                      description:
                        "Highly qualified therapists with extensive experience in child development.",
                    },
                    {
                      title: "Proven Success",
                      description:
                        "A data-driven approach that ensures measurable improvement.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck
                        size={24}
                        className="text-[#c13260] mr-3 border-2 border-pink-400 rounded-full p-1"
                      />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Satisfaction Guarantee */}
              <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-pink-50 p-6 rounded-xl text-center mt-16">
                <h1 className="text-5xl text-[#c13260] font-bold">100%</h1>
                <h5 className="text-black mt-2 text-lg font-semibold">
                  Satisfaction Guarantee
                </h5>
                <p className="text-gray-600 mt-3 text-sm">
                  Your child’s progress is our priority. We are committed to
                  delivering exceptional care, ensuring you see meaningful
                  results.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-6 text-black font-bold text-lg">
              <div className="flex items-center">
                <FaPhoneAlt
                  size={40}
                  className="p-2 border border-[#c13260] rounded-full mr-3 bg-pink-50 animate-bounce text-[#c13260]"
                />
                <div>
                  <p className="text-sm text-gray-500">
                    Feel free to contact us here
                  </p>
                  <b>Call: </b>
                  <span className="text-[#c13260]">+91-8800001312</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
