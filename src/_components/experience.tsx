"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-28 max-w-[45rem] text-center sm:mb-40"
    >
      <SectionHeading title="My Experience" />
      <div className="relative flex flex-col gap-8 mt-8">
        <div className="absolute left-[50%] top-0 h-full w-[2px] bg-gray-200 dark:bg-opacity-20" />

        {experiencesData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className={`flex items-center w-full ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-1/2 px-4">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md dark:bg-opacity-10"
              >
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-2">{item.location}</p>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            </div>

            <div className="relative flex items-center justify-center w-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.3 }}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 dark:bg-opacity-10"
              >
                <span className="text-2xl">{item.icon}</span>
              </motion.div>
            </div>

            <div className="w-1/2 px-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="text-gray-500"
              >
                {item.date}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
