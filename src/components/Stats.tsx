import React, { useState, useEffect, useRef } from "react";


const statsData = [
  { label: "Total Students", value: "50,000+" },
  { label: "Graduates", value: "30,000+" },
  { label: "Currently Enrolled", value: "20,000+" },
  { label: "Scholarship Holders", value: "5,000+" },
  { label: "International Students", value: "3,000+" }
];

const Stats = () => {
  const [isPaused, setIsPaused] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        if (statsRef.current) {
          statsRef.current.scrollLeft += 2; // Adjust speed here
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="relative w-full  py-6 text-gray-900">
      <h2 className="text-center text-3xl font-bold mb-4">Student Stat</h2>
      <div
        ref={statsRef}
        className="flex overflow-hidden whitespace-nowrap space-x-12 px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-lg px-6 py-3 text-lg font-semibold shadow-md"
          >
            {stat.label}: {stat.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;