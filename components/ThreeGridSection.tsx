"use client";
import { FaAward, FaCode, FaUsers, FaChartLine } from "react-icons/fa";

const ThreeGridSection = () => {
  return (
    <section className="py-16 px-4 md:px-20  text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Me?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Top */}
        

        {/* Left Bottom */}
        <div className="bg-[#111727] rounded-2xl p-6 flex flex-col items-center text-center shadow-md">
          <FaCode size={40} className="text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Developer</h3>
          <p className="text-gray-300 text-sm">
            Specialized in React, Next.js, Node.js and scalable architecture.
          </p>
        </div>

        {/* Right Large Box */}
        <div className="row-span-1 bg-gradient-to-br from-[#1b1f2a] to-[#232942] rounded-2xl p-8 flex flex-col justify-center shadow-lg">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <FaUsers size={32} className="text-purple-400" />
              <div>
                <h4 className="text-lg font-bold">Satisfied Clients</h4>
                <p className="text-sm text-gray-300">
                  Worked with individuals, startups, and enterprises globally.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaChartLine size={32} className="text-purple-400" />
              <div>
                <h4 className="text-lg font-bold">Result-Driven</h4>
                <p className="text-sm text-gray-300">
                  Focused on high-conversion, responsive, and SEO-friendly
                  builds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeGridSection;
