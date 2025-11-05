"use client";
import { use, useEffect, useState } from "react";

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

    const colorMap: Record<string, { text: string; square: string }> = {
        hero: { text: "text-red-500", square: "bg-red-500" },
        about: { text: "text-blue-500", square: "bg-blue-500" },
    };

    const colors = colorMap[activeSection] || colorMap.hero;

    return (
        <>
            <header className={`fixed top-0 left-0 w-full h-10 flex justify-between items-center px-8 z-50 transition-colors duration-100 ${colors.text}`}>
                <h1>LOGO</h1>
                <h1>--</h1>
            </header>
        </>
  );
}