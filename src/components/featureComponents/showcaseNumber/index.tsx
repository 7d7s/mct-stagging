import React, { useEffect, useState } from "react";

const ShowcaseNumbers: React.FC = () => {
  const [families, setFamilies] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [therapists, setTherapists] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const animateValue = (
      setValue: React.Dispatch<React.SetStateAction<number>>,
      target: number,
      duration: number
    ) => {
      const startTime = performance.now();
      
      const updateValue = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.ceil(target * progress);
        
        setValue(current);
        
        if (progress < 1) {
          requestAnimationFrame(updateValue);
        }
      };

      requestAnimationFrame(updateValue);
    };

    animateValue(setFamilies, 6732, 2000);
    animateValue(setSessions, 19000, 2000);
    animateValue(setTherapists, 25, 2000);
    animateValue(setExperience, 13, 2000);
  }, []);

  return (
    <div className="bg-gradient-to-br from-pink-600 to-pink-700 text-white py-3 px-3 md:px-4 lg:py-5">
      <div className="max-w-7xl mx-auto space-y-4">
        <h2 className="text-center text-2xl font-bold uppercase tracking-wide">
        Empowering <span className="text-pink-200 px-2">Lives</span>Every Day
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

          {[
            { value: `${families}+`, label: "Happy Families" },
            { value: sessions.toLocaleString(), label: "Sessions Conducted" },
            { value: therapists, label: "Certified Therapists" },
            { value: experience, label: "Years of Experience" },
          ].map((item, index) => (
            <div 
              key={index}
              className="p-2 bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-[1.02] text-center transform-preserve"
            >
              <h3 
                className="text-4xl md:text-4xl font-extrabold mb-3 font-mono"
                aria-live="polite"
                aria-atomic="true"
              >
                {item.value}
              </h3>
              <p className="text-sm uppercase tracking-widest text-pink-200">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseNumbers;