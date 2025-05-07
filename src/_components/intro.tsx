"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactIcon, DownloadIcon } from "lucide-react";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function Intro() {
  const handleDownload = () => {
    // URL của file CV
    const cvUrl = "/cv.pdf";

    // Tạo một thẻ a ẩn
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "cv.pdf"; // Tên file khi download

    // Thêm link vào DOM, click và xóa
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 mt-28"
      id="home"
    >
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 125,
          delay: 0.1,
        }}
      >
        <h1 className="text-7xl font-semibold"> Rua</h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 125,
          delay: 0.1,
        }}
        className="mb-10 mt-4 text-2xl font-medium sm:text-4xl"
      >
        <span className="font-bold">Hello, I&apos;m Rua.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold"></span> of experience. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="font-semibold text-primary">React (Next.js).</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 125,
          delay: 0.1,
        }}
        className="flex flex-wrap gap-3 items-center justify-center text-lg"
      >
        <Button
          asChild
          className="rounded-full"
        >
          <Link
            href="#contact"
            className="flex items-center gap-2"
          >
            Contact us <ContactIcon className="size-4" />
          </Link>
        </Button>

        <Button
          variant="outline"
          className="rounded-full cup"
          onClick={handleDownload}
        >
          <span className="flex items-center gap-2">
            Download <DownloadIcon className="size-4" />
          </span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full size-12"
          aria-label="Visit Facebook profile"
        >
          <FaFacebook className="size-6" />
        </Button>

        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-full size-12"
          aria-label="Visit GitHub profile"
        >
          <Link
            href="https://github.com/rua994"
            target="_blank"
          >
            <FaGithub className="size-6" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
