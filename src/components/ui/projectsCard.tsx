import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tec: string[];
  image: string;
  link: string;
  linkRep: string;
}

export default function ProjectCard({ title, description, tec, image, link, linkRep }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-full h-full p-4">
      <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96 mb-4 overflow-hidden rounded-2xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <h1 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-2">{title}</h1>
      <p className="text-[var(--color-primary)] text-sm sm:text-base mb-2">{description}</p>

      <div className="text-sm text-[var(--color-highlight)] mb-4">{tec.join(" | ")}</div>

      <div className="flex flex-wrap gap-4">
        <a href={link} target="_blank" className="border border-[var(--color-primary)] text-[var(--color-primary)] px-4 py-2 rounded-md text-sm hover:bg-[var(--color-primary)] hover:text-white transition">Ver Projeto</a>
        <a href={linkRep} target="_blank" className="border border-[var(--color-primary)] text-[var(--color-primary)] px-4 py-2 rounded-md text-sm hover:bg-[var(--color-primary)] hover:text-white transition">Ver Repositório</a>
      </div>
    </div>
  );
}
