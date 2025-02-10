import React, { Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
const cards = [
    {
      title: "Pay Your Bill",
      description: "Make a payment by phone, mail, in-person, or online.",
      imgSrc: "/assets/DrVarunVij.jpg",
    },
    {
      title: "Need Assistance?",
      description: "Submit an application for financial assistance.",
      imgSrc: "/assets/DrVarunVij.jpg",
    },
    {
      title: "Financial Counselor",
      description: "Discuss the options that best fit your needs.",
      imgSrc: "/assets/DrVarunVij.jpg",
    },
  ];

const CardThree = () => {
  return (
    <Fragment>
    {/* Additional Cards Section */}
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50">
    {cards.map((card, index) => (
      <div
        key={index}
        className="bg-[#fafafa] px-4 py-8 border border-gray-200 flex flex-col items-center"
      >
        <div className="flex">
          <div className="w-28 h-28 mb-4 overflow-hidden rounded-full">
            <Image
              src={card.imgSrc}
              alt={card.title}
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <div className="items-start p-5">
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="text-gray-600 mt-2 text-xs">{card.description}</p>
          </div>
        </div>

        <button className="mt-2 px-4 py-2 border border-gray-300 hover:bg-gray-100 transition w-full">
          <div className="flex items-center justify-center">
            Learn More <IoIosArrowForward />
          </div>
        </button>
      </div>
    ))}
  </section>
    </Fragment>
    );
  };
  
  export default CardThree;