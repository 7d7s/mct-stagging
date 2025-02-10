"use client";
import { useState, useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { TbTriangle } from "react-icons/tb";
import { FaPause } from "react-icons/fa6";
import "pub/animations/index-animation.css"
import Link from "next/link";
interface Slide {
  id: number;
  video: string;
  title: string;
  description: string;
  button: string;
  btnlink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    video: "./assets/doctorWithChild.mp4",
    title: "A Supportive Start for Every Child",
    description: "Every child deserves understanding, patience, and expert care.",
    button: "Discover Our Approach",
    btnlink: "#",
  },
  {
    id: 2,
    video: "/assets/Appointment.mp4",
    title: "Unlocking Potential, One Step at a Time",
    description: "Through expert-led therapy, innovative techniques, and compassionate care",
    button: "Explore Our Services",
    btnlink: "#",
  },
  {
    id: 3,
    video: "/assets/doctorWithChild.mp4",
    title: "Mental Well-being, Month by Month",
    description: "A child's journey to mental wellness evolves with time.",
    button: "View Monthly Insights",
    btnlink: "#",
  },
];

export default function SliderThree() {
  const [current, setCurrent] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, current]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden mt-12 lg:mt-20">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={index === current ? videoRef : null}
            src={slide.video}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center sm:items-start items-center text-center sm:text-left px-4 sm:px-6 lg:px-48 text-white">
            <h1 className="animate-slideInTop text-4xl md:text-5xl font-semibold mb-4">
              {slide.title}
            </h1>
            <p className="animate-slideInTop text-base md:text-lg mb-8">
              {slide.description}
            </p>
            <button type="button" className="animate-slideInBottom flex items-center bg-transparent text-white border-2 border-white px-6 py-3 text-lg rounded-md">
              <Link href={slide.btnlink}>{slide.button} </Link><MdArrowOutward size={22} className="ml-2" />
            </button>
          </div>
          <button type="button"
            className="animate-slideInBottomPauseBtn absolute top-[72%] right-[42%] sm:top-1/2 sm:right-16 lg:right-48 transform -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-lg ring-[11px] ring-[#ffffff46]"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex justify-center items-center">
              {isPlaying ? (
                <TbTriangle size={30} className="rotate-90" />
              ) : (
                <FaPause size={30} />
              )}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}