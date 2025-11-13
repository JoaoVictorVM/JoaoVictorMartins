import ProjectsSlider from "@/components/hooks/projectsSlider";

const projects = [
  {
    title: "Clair Obscur: Expedition 33",
    description: "Landing page temática inspirada em Clair Obscur, desenvolvida apenas com HTML, CSS e JavaScript puro, focada em aprimorar minha organização e estruturação de projetos.",
    tec: ["HTML", "CSS", "JavaScript"],
    image: "/assets/images/previewClair.png",
    link: "#",
    linkRep: "https://github.com/JoaoVictorVM/LP-Expedition33",
  },
  {
    title: "Justin Bieber - SWAG",
    description: "Landing page criada para apresentar o álbum SWAG, desenvolvida com Next.js e estilizada com TailwindCSS para melhorar meu desenvolvimento com a ferramenta.",
    tec: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/assets/images/previewSwag.png",
    link: "#",
    linkRep: "https://github.com/JoaoVictorVM/SWAG",
  },
  {
    title: "Portfólio Pessoal",
    description: "Website pessoal para apresentar projetos e experiências, com animações suaves e design responsivo.",
    tec: ["Next.js", "Framer Motion"],
    image: "/assets/images/previewClair.png",
    link: "#",
    linkRep: "#",
  },
  {
    title: "E-commerce Minimalista",
    description: "Loja virtual elegante com carrinho funcional e integração com API de produtos.",
    tec: ["Next.js", "Stripe", "TailwindCSS"],
    image: "/assets/images/previewSwag.png",
    link: "#",
    linkRep: "#",
  },
];

export default function ShowcaseProjects() {
  return (
    <section id="showcase" className="min-h-screen bg-[var(--color-light)] flex items-center">
      <div className="w-full m-6 lg:m-60">
        <ProjectsSlider projects={projects} />
      </div>
    </section>
  );
}
