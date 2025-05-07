"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import ProjectData from "./projectData";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <motion.section
      id="projects"
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading title="My Projects" />
      <div className="flex flex-col gap-4 mt-4">
        {experiencesData.map((experiences, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.2,
            }}
          >
            <ProjectData
              {...experiences}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
