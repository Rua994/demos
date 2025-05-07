"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSection();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleClick = (name: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(name.toLowerCase());
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: "smooth",
      });
      setActiveSection(name);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="z-[99] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex h-full items-center justify-between px-4 sm:justify-center">
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-950 transition p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
          <ul
            className={`${
              isMobile
                ? "absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg transition-all duration-300 " +
                  (isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible")
                : "flex w-[22rem] items-center justify-center gap-x-3"
            } text-gray-500`}
          >
            {links.map((link) => (
              <motion.li
                className={`relative ${
                  isMobile
                    ? "block w-full border-b border-gray-100 last:border-none"
                    : "h-3/4 flex items-center justify-center"
                }`}
                key={link.name}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={`relative flex w-full items-center ${
                    isMobile ? "px-6 py-4" : "justify-center px-4 py-3"
                  } transition hover:text-gray-950 ${
                    activeSection === link.name ? "text-gray-950" : ""
                  }`}
                  href={link.url}
                  onClick={handleClick(link.name)}
                >
                  {link.name}
                  {activeSection === link.name && !isMobile && (
                    <motion.span
                      className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
