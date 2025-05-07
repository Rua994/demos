import About from "@/_components/about";
import Contact from "@/_components/contact";
import Experience from "@/_components/experience";
import Intro from "@/_components/intro";
import Project from "@/_components/project";
import SectionDivider from "@/_components/section-divier";
import Skills from "@/_components/skills";
import React from "react";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center p-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Project />
      <SectionDivider />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
