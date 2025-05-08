"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";

interface ProjectProps {
  title: string;
  location: string;
  description: string;
  date: string;
  tags: string[];
  imgUrl?: string;
  index: number;
}

export default function ProjectData({
  title,
  location,
  description,
  date,
  tags,
  imgUrl,
  index,
}: ProjectProps) {
  const isOdd = (index: number) => index % 2 === 0;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="group relative bg-gray-100 dark:bg-gray-800 w-full border border-black/5 rounded-lg overflow-hidden transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <div className={`flex flex-col sm:flex-row items-center justify-between p-4 sm:p-8`}>
        <div
          className={`w-full sm:max-w-[50%] mb-4 sm:mb-0 ${
            isOdd(index) ? "sm:order-2" : "sm:order-1"
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {location} • {date}
              </p>
            </div>
          </div>
          <p className="mt-2 leading-relaxed text-gray-900 dark:text-gray-300 text-sm">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <li key={index}>
                <Button
                  variant="secondary"
                  className="px-3 py-1 text-xs"
                >
                  {tag}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`w-full sm:w-[45%] aspect-video ${isOdd(index) ? "sm:order-1" : "sm:order-2"}`}
        >
          <img
            src={imgUrl}
            alt={title}
            className="rounded-lg shadow-2xl object-cover w-full h-full
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2"
          />
        </div>
      </div>
    </motion.section>
  );
}
