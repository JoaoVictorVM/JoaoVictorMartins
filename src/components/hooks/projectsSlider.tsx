"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const color = "var(--color-primary)";

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch w-full"
          >
            {visibleProjects.map((project, index) => (
              <div key={index} className="relative">
                <ProjectCard {...project} />
                {index === 0 && visibleProjects.length > 1 && (
                  <div className="hidden md:block absolute top-0 right-[-12px] h-full w-[1px] bg-[var(--color-primary)] rounded-full" />
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

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
