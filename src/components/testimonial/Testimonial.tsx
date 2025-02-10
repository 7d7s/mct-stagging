"use client";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

interface Testimonial {
  name: string;
  company: string;
  rating: number;
  review: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ravi K.",
    company: "Speech Development That’s Amazing",
    rating: 4,
    review:
      "My son’s speech improved significantly in just a few months. The therapists are so understanding and professional!",
    image: "/avatar/man_avatar_icon_01.png",
  },
  {
    name: "Pooja Gupta",
    company: "A New Found Confidence!",
    rating: 5,
    review:
      "Occupational therapy helped my daughter become more independent. She's now able to do so much on her own!",
    image: "/avatar/female_avatar_icon_01.png",
  },
  {
    name: "Sanjay Pratap",
    company: "Incredible Behavioral Progress!",
    rating: 5,
    review:
      "After a few sessions, we noticed positive changes in my son’s behavior. The therapists are patient and supportive.",
    image: "/avatar/man_avatar_icon_01.png",
  },
  {
    name: "Meera Sethi",
    company: "Walking with Confidence!",
    rating: 4,
    review:
      "Physical therapy helped my child regain mobility and confidence. It’s truly life-changing.",
    image: "/avatar/woman_avatar_female_icon_02.png",
  },
  {
    name: "Vishal",
    company: "From Mealtime Struggles to Happy Meals!",
    rating: 5,
    review:
      "Feeding therapy solved our issues with picky eating. It was a big relief to see my child enjoying meals again.",
    image: "/avatar/man_avatar_icon_01.png",
  },
  {
    name: "Neha Madan",
    company: "Stronger Social Skills and Self-Esteem!",
    rating: 5,
    review:
      "My daughter now confidently interacts with others and has made many friends thanks to the therapy.",
    image: "/avatar/woman_avatar_female_icon_02.png",
  },
];

const Testimonial: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  });

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextTestimonial = () => {
    stopAutoSlide();
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    startAutoSlide();
  };

  const prevTestimonial = () => {
    stopAutoSlide();
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    startAutoSlide();
  };

  return (
    <div className="flex flex-col items-center justify-center h-auto bg-[#FCEEEA] px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0e3054]">
          What Our Clients Say
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Left Section */}
        <div className="text-center lg:text-left max-w-lg space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
            Hear what our amazing customers say
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Hear from our satisfied customers and their amazing experiences.
          </p>
          <button className="bg-[#e00e57] hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition">
            Get Started →
          </button>
        </div>

        {/* Right Section (Testimonial Card) */}
        <div
          className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl lg:w-1/2 h-auto overflow-hidden"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="min-w-full bg-gradient-to-r from-pink-100 to-white rounded-3xl p-8 flex flex-col items-center transform transition duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-2">
                  {/* User Image */}
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    height={80}
                    width={80}
                    className="w-20 h-20 rounded-full border-4 border-pink-500 shadow-md"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-2 flex text-lg">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Content */}
                <p className="mt-4 text-center text-gray-700 leading-relaxed italic">
                &quot;{testimonial.review}&quot;
                </p>
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition text-[#e00e57]"
              aria-label="Previous Testimonial"
            >
              <IoIosArrowRoundBack size={24} />
            </button>
            <span className="text-gray-600">
              {index + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition text-[#e00e57]"
              aria-label="Next Testimonial"
            >
              <IoIosArrowRoundForward size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;