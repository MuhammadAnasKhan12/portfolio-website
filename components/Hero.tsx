import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import DownloadResume from "./ui/DownloadResume";



const Hero = () => {
  return (
    <div className="pb-20 pt-20 sm:pt-36 relative scroll-mt-20">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Transparent grid background */}
      <div
        className="h-screen w-full bg-transparent dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Transparent radial mask */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-transparent
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Main content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[95vw] md:max-w-5xl lg:max-w-[70vw] ">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-7xl"
            words="Hi, I'm Anas Khan a MERN Stack Developer based
            in Karachi."
          />

          {/* <p className="text-center font-outfit font-semibold md:tracking-wider mt-2 mb-4 text-sm md:text-lg lg:text-2xl text-white">
            Hi! I&apos;m Anas, a{" "}
            <span className="text-[#CBACF9]"> MERN Stack Developer</span> based
            in Karachi.
          </p> */}
          <div className="sm:flex items-center justify-center gap-4 ">
            
            <DownloadResume />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
