"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() ?? 0;
      const direction = current - previous;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[5000] flex justify-center px-4 md:px-10 py-4 shadow-md",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "#0A0F19CC", // navy blue with transparency
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex gap-6 items-center">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "flex items-center space-x-2 text-white hover:text-blue-300 transition-colors duration-200"
              )}
            >
              <span className="sm:hidden">{navItem.icon}</span>
              <span className="text-base !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
