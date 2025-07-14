"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "80+",
    label: "Satisfied Clients",
  },
  {
    value: "200+",
    label: "Projects Completed",
  },
  {
    value: "99+",
    label: "Reviews Given",
  },
];

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-[#0a0f19] via-[#111827] to-[#1f2937] shadow-lg border border-white/10"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold text-white bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
      {value}
    </h2>
    <p className="mt-2 text-sm md:text-base text-[#BEC1DD] font-medium">
      {label}
    </p>
  </motion.div>
);

export const StatsSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-12">
          Trusted by Clients Across the Globe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};
