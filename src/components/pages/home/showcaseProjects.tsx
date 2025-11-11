import ProjectsSlider from "@/components/hooks/projectsSlider";

const projects = [
  {
    title: "Landing Page: Clair Obscur",
    description:
      "Landing page moderna com design minimalista e responsivo, feita com HTML, CSS e JS puro.",
    tec: ["HTML", "CSS", "JavaScript"],
    image: "/assets/images/Preview.png",
    link: "#",
    linkRep: "#",
  },
  {
    title: "Dashboard Financeiro",
    description:
      "Aplicação interativa para controle de despesas, com gráficos e relatórios em tempo real.",
    tec: ["React", "TypeScript", "TailwindCSS"],
    image: "/assets/images/dashboard.png",
    link: "#",
    linkRep: "#",
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Website pessoal para apresentar projetos e experiências, com animações suaves e design responsivo.",
    tec: ["Next.js", "Framer Motion"],
    image: "/assets/images/Preview.png",
    link: "#",
    linkRep: "#",
  },
  {
    title: "E-commerce Minimalista",
    description:
      "Loja virtual elegante com carrinho funcional e integração com API de produtos.",
    tec: ["Next.js", "Stripe", "TailwindCSS"],
    image: "/assets/images/ecommerce.png",
    link: "#",
    linkRep: "#",
  },
];

export default function ShowcaseProjects() {
  return (
    <section id="showcase" className="h-screen bg-[var(--color-light)] flex items-center">
        <div className="w-screen m-60">
            <ProjectsSlider projects={projects} />
        </div>
    </section>
  );
}
