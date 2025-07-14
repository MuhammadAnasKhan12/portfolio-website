"use client";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaLaptopCode size={36} className="text-purple-400" />,
    title: "Website Development",
    description:
      "Building fast, responsive, and scalable websites using the latest tech stack including MERN, Next.js, and more.",
  },
  {
    icon: <FaMobileAlt size={36} className="text-cyan-400" />,
    title: "Mobile App Development",
    description:
      "Creating intuitive and performant cross-platform apps for both Android and iOS using Flutter and React Native.",
  },
  {
    icon: <FaPaintBrush size={36} className="text-pink-400" />,
    title: "Web Design",
    description:
      "Designing user-centric, aesthetic, and engaging UI/UX experiences that match your brand identity.",
  },
  {
    icon: <FaSearch size={36} className="text-green-400" />,
    title: "SEO",
    description:
      "Improving search visibility, organic traffic, and performance with tailored SEO strategies and best practices.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          My Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-[#0A0F19] rounded-xl border border-white/10 shadow-lg hover:shadow-purple-900/10 transition text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#BEC1DD]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
