"use client";
import { useEffect, useState } from "react";

interface ScrollManagerProps {
  onSectionChange: (sectionId: string) => void;
}

export default function ScrollManager({ onSectionChange }: ScrollManagerProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  function smoothScrollTo(targetY: number, duration = 1000) {
    return new Promise<void>((resolve) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      function step(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        window.scrollTo(0, startY + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      }

      requestAnimationFrame(step);
    });
  }

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            onSectionChange(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    const preventScroll = (e: Event) => e.preventDefault();

    const handleWheel = async (event: WheelEvent) => {
      if (isScrolling) return;

      event.preventDefault();
      const currentIndex = sections.findIndex((s) => s.id === activeSection);
      let nextIndex = currentIndex;

      if (event.deltaY > 0 && currentIndex < sections.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (event.deltaY < 0 && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }

      if (nextIndex !== currentIndex) {
        setIsScrolling(true);

        window.addEventListener("wheel", preventScroll, { passive: false });
        window.addEventListener("touchmove", preventScroll, { passive: false });

        const targetY = sections[nextIndex].offsetTop;
        await smoothScrollTo(targetY, 500);

        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
        setIsScrolling(false);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection, isScrolling, onSectionChange]);

  return null;
}
