"use client";

import React, { useRef } from "react";
import { skillsData } from "../lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./section-heading";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      style={{
        scale,
        opacity,
      }}
      className="relative py-20"
      id="skills"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="relative max-w-[53rem] mx-auto px-4">
        <SectionHeading title="My Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-gray-900">{skill.name}</h3>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <Progress
                value={skill.level}
                className="h-2"
              />
              {skill.description && (
                <p className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
