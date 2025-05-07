"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading title="About me" />
      <motion.p
        className="mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        I am a <span className="font-medium">full-stack developer</span> with a strong foundation in{" "}
        <span className="font-medium">web development</span>. My core expertise includes{" "}
        <span className="font-medium">React, Next.js, Node.js, and TypeScript</span>.{" "}
        <span className="italic">I'm passionate about</span> creating efficient, scalable, and
        user-friendly applications. I have experience with modern development tools and{" "}
        <span className="font-medium">cloud platforms like AWS and Azure</span>.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="italic">Beyond coding</span>, I enjoy exploring new technologies,
        contributing to open-source projects, and staying updated with the latest industry trends.
        I'm always eager to <span className="font-medium">take on new challenges</span> and
        collaborate with other developers to create innovative solutions.
      </motion.p>
    </motion.section>
  );
}
