export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-[var(--color-light)] flex items-center">

      <div className="w-full flex flex-col lg:flex-row items-center justify-center m-6 lg:m-60 gap-10 lg:gap-60">

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">

          <img
            src="/assets/images/Perfil.jpg"
            alt="João Victor Martins"
            draggable={false}
            className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] shadow-[0_0_10px_2px_#1A1F23]"
          />

        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">

          <h1 className="text-[var(--color-primary)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Sobre mim</h1>
          <p className="text-[var(--color-primary)] text-lg sm:text-xl lg:text-2xl leading-relaxed"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas veritatis quisquam. Adipisci velit beatae dolor, doloribus distinctio aperiam sint in laborum perspiciatis impedit officia voluptatibus recusandae exercitationem pariatur aut? </p>

        </div>

      </div>

    </section>
  );
}
