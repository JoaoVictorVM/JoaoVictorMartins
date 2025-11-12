import ShowcaseProjects from "@/components/pages/home/showcaseProjects";

export default function ProjectsSection() {
  return (
    <>
      <section id="projects" className="min-h-screen bg-[var(--color-light)] flex items-center">

        <div className="w-full flex flex-col lg:flex-row items-center justify-center m-6 lg:m-60 gap-10 lg:gap-60">

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-[var(--color-primary)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Projetos</h1>
            <p className="text-[var(--color-primary)] text-lg sm:text-xl lg:text-2xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, natus dolore! Aperiam placeat similique ipsum molestiae accusamus dolorum eum ut qui, magnam cum et odio tempora quo harum voluptatibus mollitia!
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">

            <button className="text-[var(--color-primary)] text-lg sm:text-xl lg:text-2xl w-52 sm:w-60 lg:w-65 h-12 sm:h-14 border-2 border-[var(--color-primary)] rounded-xl transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-light)]">Ver todos os projetos ➔</button>

          </div>

        </div>

      </section>

      <ShowcaseProjects />
    </>
  );
}
