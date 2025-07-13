"use client";

import React from "react";
import { companies } from "@/data";

const Skills = () => {
  return (
    <section id="skills" className="py-20 ">

      <div className="flex flex-col items-center max-lg:mt-10">

        <div className="text-white font-bold text-4xl md:text-[4rem] text-center pb-4 md:pb-12">
          Skills <span className="text-purple">I have</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.nameImg}
                  alt={company.name}
                  className="md:w-24 w-16"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
