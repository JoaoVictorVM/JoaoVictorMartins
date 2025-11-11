"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "@/components/ui/projectsCard";

interface Project {
  title: string;
  description: string;
  tec: string[];
  image: string;
  link: string;
  linkRep: string;
}

interface ProjectsSliderProps {
  projects: Project[];
}

export default function ProjectsSlider({ projects }: ProjectsSliderProps) {
  const [page, setPage] = useState(0);
  const projectsPerPage = 2;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const start = page * projectsPerPage;
  const visibleProjects = projects.slice(start, start + projectsPerPage);

  const next = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prev = () => {
    if (page > 0) setPage(page - 1);
  };

  const color = "var(--color-primary)";

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* SLIDER */}
      <div className="w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          >
            {visibleProjects.map((project, index) => (
              <div key={index} className="relative">
                <ProjectCard {...project} />
                {index === 0 && visibleProjects.length > 1 && (
                  <div className="hidden md:block absolute top-0 right-[-12px] h-full w-[2px] bg-[var(--color-primary)] rounded-full" />
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTÕES */}
      {page > 0 && (
        <button
          onClick={prev}
          className="absolute -left-10 top-1/2 -translate-y-1/2 p-2 bg-[var(--color-bg)] border border-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      {page < totalPages - 1 && (
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-[var(--color-bg)] border border-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* INDICADORES (no mesmo estilo dos SectionIndicators) */}
      <div className="flex gap-6 mt-10">
        {Array.from({ length: totalPages }).map((_, i) => {
          const isActive = page === i;
          return (
            <motion.div
              key={i}
              onClick={() => setPage(i)}
              className="w-3 h-3 cursor-pointer"
              animate={{
                rotate: isActive ? 0 : 45,
                scale: isActive ? 1.2 : 1,
                backgroundColor: color,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          );
        })}
      </div>
    </div>
  );
}
