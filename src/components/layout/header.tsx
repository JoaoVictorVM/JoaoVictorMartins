"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const styleMap: Record<
    string,
    { text: string; logo: string }
  > = {
    hero: {
      text: "text-[#B08035]",
      logo: "/assets/svg/logo-highlight.svg",
    },
    about: {
      text: "text-[#1A1F23]",
      logo: "/assets/svg/logo-primary.svg",
    },
    more: {
      text: "text-[#B08035]",
      logo: "/assets/svg/logo-highlight.svg",
    },
    projects: {
      text: "text-[#1A1F23]",
      logo: "/assets/svg/logo-primary.svg",
    },
    showcase: {
      text: "text-[#1A1F23]",
      logo: "/assets/svg/logo-primary.svg",
    },
  };

  const currentStyle = styleMap[activeSection] || styleMap.hero;

  return (
    <header className={`fixed top-0 left-0 w-full h-14 flex justify-between items-center z-50 transition-colors duration-300 ${currentStyle.text}`}>

        <div className="flex items-center justify-between w-full m-8 mt-22">
            
            <Image
                key={currentStyle.logo}
                src={currentStyle.logo}
                alt="Logo"
                draggable={false}
                width={80}
                height={10}
                className="transition-opacity duration-500 opacity-100"
            />
            <div>--</div>

        </div>



    </header>
  );
}
