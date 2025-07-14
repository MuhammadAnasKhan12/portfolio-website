import React from "react";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section className="py-2=10 w-full relative bg-transparent">
      <h1 className="text-white font-bold text-4xl md:text-[4rem] text-center mb-16">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="relative w-full max-w-6xl mx-auto px-4">
        {/* Center timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-[2px] bg-purple/40 z-0" />

        <div className="relative z-10 flex flex-col gap-16">
          {workExperience.map((company, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={company.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:flex-row-reverse" : "md:flex-row"
                } md:justify-between md:gap-10`}
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple rounded-full z-20 border-4 border-[#0A0F19]" />

                {/* Card */}
                <div
                  className={`bg-[#0A0F19CC] border border-purple/40 backdrop-blur-md shadow-lg rounded-xl p-6 w-full md:w-[48%] text-white ${
                    isLeft ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={company.thumbnail}
                      alt={company.company}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        {company.company}
                      </h2>
                      {company.roles.map((role, i) => (
                        <div key={i} className="mb-4">
                          <h3 className="text-lg font-semibold">
                            {role.title}
                          </h3>
                          <p className="text-sm text-purple/70 italic">
                            {role.date}
                          </p>
                          <p className="mt-1 text-white/80">{role.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
