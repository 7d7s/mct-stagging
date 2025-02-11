import Image from "next/image";
import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import FAQ from "@/components/featureComponents/faqSection";
const About = () => {
  const cards = [
    {
      title: "Our Mission",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/Image/Adhd7.webp",
    },
    {
      title: "Our Vision",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/Image/Adhd7.webp",
    },
    {
      title: "Core Values",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/Image/Adhd7.webp",
    },
  ];

  return (
    <div className="min-h-screen text-gray-700 pt-32 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full bg-[#0e305e] text-white px-6 lg:px-10 py-6 md:py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-white text-sm font-light uppercase mb-6">
            <span className="border-l-4 border-[#e00e57] px-2"> HOME </span>|
            <span className="px-2">About</span>
          </h1>
          <p className="text-3xl lg:text-5xl font-bold">
            Your health is everything to you
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
      <section className="max-w-7xl mx-auto pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src="/Image/Adhd7.webp"
              alt="Doctor Consultation"
              className="w-full rounded-lg shadow-lg"
              width={500}
              height={500}
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <p className="text-[#e00e57] uppercase text-sm font-semibold">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold text-[#0e305e] mt-2">
              Committed to providing the best <br />
              <span className="text-[#e00e57]">care for all</span>
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <a
              href="#"
              className="text-[#e00e57] font-semibold mt-4 inline-flex items-center hover:underline"
            >
              Read More About History →
            </a>
          </div>
        </div>

        {/* Research & Innovation Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#0e305e]">
              Innovation and Research <br />
              <span className="text-[#e00e57]">Breakthroughs</span>
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec mattis.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                "COVID-19 Vaccines",
                "CRISPR-Cas9 Gene",
                "Quantum Supremacy",
                "Gravitational Waves",
                "Neuralink Brain",
                "Advancements in 4D",
                "Gene therapy",
                "Brain mapping",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaCircleCheck className="w-5 h-5 text-[#e00e57]" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Research Images */}
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 grid grid-cols-2 gap-4">
            <Image
              src="/Image/Adhd7.webp"
              alt="Research Lab"
              className="w-full rounded-lg shadow-lg"
              width={500}
              height={500}
            />
            <Image
              src="/Image/Adhd7.webp"
              alt="Scientists Working"
              className="w-full rounded-lg shadow-lg"
              width={500}
              height={500}
            />
            <Image
              src="/Image/Adhd7.webp"
              alt="Medical Breakthrough"
              className="col-span-2 w-full rounded-lg shadow-lg"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-10">
          <FAQ />
        </div>
      </section>

      {/* Card Section */}
      <section className="bg-[#0e305e] py-16 flex items-center justify-center">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {cards.map((card, index) => (
            <div key={index} className="bg-white overflow-hidden max-w-sm p-2">
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                  width={500}
                  height={500}
                />
                <div className="absolute top-4 left-4 text-white text-xl font-bold bg-[#e00e57] px-2 py-1 rounded">
                  {card.title.toUpperCase()}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold border-l-4 border-[#e00e57] pl-2 text-[#0e305e] flex justify-between items-center">
                  {card.title} <FaArrowRightLong className="text-lg" />
                </h3>
                <p className="text-gray-600 text-sm mt-2">{card.description}</p>
              </div>
            </div>
          ))}
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

export default About;