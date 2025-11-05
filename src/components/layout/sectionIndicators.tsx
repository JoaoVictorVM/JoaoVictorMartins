"use client";
import { motion } from "framer-motion";

interface SectionIndicatorsProps {
  activeSection: string;
}

export default function SectionIndicators({ activeSection }: SectionIndicatorsProps) {
  const sections = ["hero", "about"];

  const sectionColors: Record<string, string> = {
    hero: "#5C6E6E",
    about: "#333E50",
  };

  const handleClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
            className="w-3 h-3 cursor-pointer border border-gray-400"
            animate={{
              rotate: isActive ? 0 : 45,
              scale: isActive ? 1.2 : 1,
              backgroundColor: isActive ? currentColor : currentColor,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}
