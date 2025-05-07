"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ title }: { title: string }) {
  return (
    <motion.h2
      className="text-2xl font-semibold mb-8 capitalize text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 125,
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  );
}
