"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SectionHeading from "./section-heading";
import { useActiveSection } from "@/hooks/use-active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-full scroll-mt-28"
    >
      <SectionHeading title="Contact Me" />

      <Card className="max-w-[600px] mx-auto p-8">
        <p className="text-gray-700 text-center mb-8">
          Please contact me directly at{" "}
          <a
            className="underline"
            href="mailto:example@gmail.com"
          >
            example@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission here
          }}
        >
          <Input
            type="email"
            placeholder="Your email"
            required
            maxLength={500}
          />
          <Textarea
            placeholder="Your message"
            required
            maxLength={5000}
            className="h-52"
          />
          <Button
            type="submit"
            className="h-[3rem]"
          >
            Submit
          </Button>
        </form>
      </Card>
    </section>
  );
}
