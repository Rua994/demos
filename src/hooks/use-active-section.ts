import { useEffect, useRef, useState } from "react";
import { links } from "@/lib/data";

export function useActiveSection() {
  const [activeSection, setActiveSectionState] = useState<string>("Home");
  const isClickScroll = useRef(false);

  // Hàm scroll tới section khi setActiveSection
  const setActiveSection = (name: string, scroll: boolean = false) => {
    setActiveSectionState(name);
    if (scroll) {
      const element = document.getElementById(name.toLowerCase());
      if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({
          top: offsetTop - 100,
          behavior: "smooth", // chuyển lại smooth để mượt
        });
        isClickScroll.current = true;
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScroll.current) {
        isClickScroll.current = false;
        return;
      }
      const sections = links
        .map((link) => {
          const element = document.getElementById(link.name.toLowerCase());
          if (!element) return null;
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY - 150;
          const sectionBottom = sectionTop + rect.height;
          return {
            name: link.name,
            sectionTop,
            sectionBottom,
          };
        })
        .filter(Boolean);
      const currentPosition = window.scrollY;
      // Chọn section cuối cùng mà currentPosition >= sectionTop
      let current = sections[0]?.name || "Home";
      for (const section of sections) {
        if (currentPosition >= section.sectionTop) {
          current = section.name;
        }
      }
      setActiveSectionState(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { activeSection, setActiveSection };
}
