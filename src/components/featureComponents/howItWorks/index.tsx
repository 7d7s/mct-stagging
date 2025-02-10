import { useState, useRef } from "react";

const Steps = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-gradient-to-r from-pink-100 via-pink-50 to-white px-4 sm:px-6 md:px-16 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#0e3054]">
        Our Proven Path to Better Outcomes
      </h1>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Left Section */}
        <div className="space-y-10">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className="relative group flex items-start gap-6 cursor-pointer transition-all duration-300 transform "
              onMouseEnter={() => setHovered(step)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Step Indicator */}
              <div className="relative flex-shrink-0">
                <div
                  className={`absolute -inset-4 rounded-full transition-all duration-300 ${
                    hovered === step ? "bg-[#0e3053]" : ""
                  }`}
                ></div>
                <div
                  className={`relative w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    hovered === step
                      ? "bg-[#e00e57] border-orange-600 scale-110"
                      : "bg-white border-gray-400 scale-100"
                  }`}
                >
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      hovered === step ? "text-white" : "text-black"
                    }`}
                  >
                    {step}
                  </span>
                </div>

                {/* Animated Connector */}
                {step !== 3 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-14 w-1 h-20 bg-gray-200 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-[#0e3053] transition-all duration-500 ${
                        hovered === step ? "translate-y-0" : "-translate-y-full"
                      }`}
                    ></div>
                  </div>
                )}
              </div>

              {/* Step Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {step === 1
                    ? " Exclusive One-on-One Consultation"
                    : step === 2
                    ? "Personalized Therapy Plan"
                    : "Begin Therapy & Track Progress"}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
                  {step === 1 &&
                    "Schedule a quick consultation with one of our expert therapists. We’ll discuss your child’s needs and customize a therapy plan."}
                  {step === 2 &&
                    "After assessing your child’s unique requirements, we create a tailored therapy plan, focusing on their strengths and areas of improvement."}
                  {step === 3 &&
                    "Start the therapy sessions and track your child’s growth with regular progress updates. We are with you every step of the way!"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section (Video) */}
        <div className="relative overflow-hidden shadow-2xl hover:shadow-xl transition-shadow duration-300">
          <video
            ref={videoRef}
            src="Image/video4.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover aspect-square md:aspect-video"
          />
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all"
          >
            <div className="flex items-center gap-4 bg-white/80 px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
              <svg
                className="w-6 h-6 text-[#e00e57]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {isPlaying ? (
                  <path d="M6 6L18 12L6 18V6Z" />
                ) : (
                  <path d="M8 5v14l11-7z" />
                )}
              </svg>
              <span className="text-base font-semibold text-gray-800">
                {isPlaying ? "Pause Video" : "Watch Video"}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
