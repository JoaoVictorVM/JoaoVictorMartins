import Image from "next/image";

interface ProjectsCardProps {
    title: string;
    description: string;
    tec: string[];
    image: string;
    links: string;
}

export default function ProjectCard({
    title,
    description,
    tec,
    image,
    links
}: ProjectsCardProps) {
    return (
        <div className="flex flex-col items-center w-[300px] p-4 border-r border-gray-300">
            <div className="relative w-full h-[150px] mb-4">
                <Image
                    src={image}
                    alt={title}
                    width={400} height={300}
                />
            </div>
            <h3 className="text-xl font-bold text-[#2E1A47]">{title}</h3>
            <p className="text-gray-600 mb-2">{description}</p>
            <div className="text-sm text-gray-700 mb-4">
                {tec.join(" | ")}
            </div>
            <a 
                href={links}
                className="border border-purple-700 text-purple-700 px-4 py-2 rounded-sm text-sm hover:bg-purple-700 hover:text-white transition"
            >
                Ver Projeto    
            </a>
        </div>
    );
}