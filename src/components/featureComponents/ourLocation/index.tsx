import React from "react";

import center1Image from "pub/Image/Comprenssive.webp";
import center2Image from "pub/Image/Speechtherapy.jpg";
import center3Image from "pub/Image/Specialeducation.jpg";
import Image from "next/image";

interface Center {
  city: string;
  id: number;
  name: string;
  address: string;
  image: string;
  mapLink: string;
}

const centers: Center[] = [
  {
    id: 1,
    name: "Kirti Nagar",
    address:
      "WS Clinic, I-102, Second Floor, Block I, Kirti Nagar, Delhi, 110015",
    image: center1Image.src,
    mapLink:
      "https://www.google.com/maps/place/WS+Clinic/@28.65132,77.14475,15z",
    city: "New Delhi",
  },
  {
    id: 2,
    name: "Dwarka",
    address:
      "Plot no. U-237A, Sec-106, near conscient one mall, dwarka expressway, gurugram - 122017",
    image: center2Image.src,
    mapLink:
      "https://maps.app.goo.gl/FQuckqu441tor1iL8",
    city: "New Delhi",
  },
  {
    id: 3,
    name: "South Ex, New Delhi",
    address: "A-24 Basement, South Ex Part-2, New Delhi-110049",
    image: center3Image.src,
    mapLink:
      "https://www.google.com/maps/place/28%C2%B034'02.4%22N+77%C2%B013'13.7%22E",
    city: "New Delhi",
  },
];
const OurLocation: React.FC = () => {
  return (
    <section className="py-10 bg-[#f3ece4] text-[#e00e57]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Find My Child Center</h2>
      </div>

      <div className="flex justify-center gap-8 flex-wrap px-3">
        {centers.map((center, index) => (
          <div
            key={index}
            className="relative w-96 h-96 bg-[#efedea] shadow-lg rounded-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={center.image}
              alt={center.name}
              height={192}
              width={384}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 text-gray-900 text-center">
              <h3 className="text-xl font-semibold border-b-2 border-[#e00e57] pb-2">
                {center.name}
              </h3>
              <p className="text-md mt-2">{center.address}</p>
              <p className="text-sm text-gray-500 ">{center.city}</p>
              <a
                href={center.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#e00e57] hover:bg-pink-700 text-white text-sm font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurLocation;