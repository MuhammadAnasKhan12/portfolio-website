"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return; // ✅ avoid null querySelectorAll error

    animate(
      "span, .profile-image-wrapper",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, []);

  const renderWords = () => {
    const wordsArray = words.split(" ");

    return (
      <motion.div
        ref={scope}
        className="flex flex-wrap gap-x-3 items-center justify-center"
      >
        {wordsArray.map((word, idx) => {
          if (word.toLowerCase() === "profile") {
            return (
              <motion.div
                key={`profile-${idx}`}
                className="profile-image-wrapper opacity-0"
              >
                <div className="w-[100px] h-[100px] sm:w-[80px] sm:h-[80px] relative border-2 border-[#CBACF9] rounded-md overflow-hidden shadow-md">
                  <Image
                    src="/anasprofile.jpg" // Make sure this image exists in the public folder
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            );
          }

          return (
            <motion.span
              key={word + idx}
              className={`${
                idx > 3 ? "text-[#CBACF9]" : "dark:text-white text-black"
              } opacity-0`}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-[1.1] tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
