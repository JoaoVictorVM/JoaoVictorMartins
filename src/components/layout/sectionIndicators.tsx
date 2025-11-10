"use client";
import { motion } from "framer-motion";
import useSmoothScroll from "@/components/hooks/useSmoothScroll";
import { useState } from "react";

interface SectionIndicatorsProps {
  activeSection: string;
}

export default function SectionIndicators({ activeSection }: SectionIndicatorsProps) {
  const sections = ["hero", "about", "more"];
  const smoothScrollTo = useSmoothScroll();
  const [isAnimating, setIsAnimating] = useState(false);

  const sectionColors: Record<string, string> = {
    hero: "#5C6E6E",
    about: "#333E50",
    more: "#5C6E6E",
  };

  const handleClick = async (sectionId: string) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const el = document.getElementById(sectionId);
    if (el) {
      const targetY = el.offsetTop;
      await smoothScrollTo(targetY, 500);
    }

    setTimeout(() => setIsAnimating(false));
  };

  const currentColor = sectionColors[activeSection] || "#ffffff";

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      {sections.map((id) => {
        const isActive = activeSection === id;

        return (
          <motion.div
            key={id}
            onClick={() => handleClick(id)}
            className="w-3 h-3 cursor-pointer"
            animate={{
              rotate: isActive ? 0 : 45,
              scale: isActive ? 1.2 : 1,
              backgroundColor: currentColor,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}
