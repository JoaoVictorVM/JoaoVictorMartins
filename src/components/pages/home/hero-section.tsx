export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-[var(--color-primary)] flex items-center">

      <div className="w-full flex flex-col lg:flex-row items-center justify-center m-6 lg:m-60 gap-10 lg:gap-60">

        <div className="w-full lg:w-3/5 flex flex-col gap-4 lg:gap-6 text-center lg:text-left">

          <h1 className="text-[var(--color-highlight)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Fullstack<br />Developer<span className="text-[var(--color-light)]">.</span></h1>
          <p className="text-[var(--color-light)] text-lg sm:text-xl md:text-2xl">I like to craft solid and scalable frontend products with great user experiences.</p>
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <p className="text-[var(--color-highlight)]">Proven experience building successful products for clients across several countries.</p>
            <p className="text-[var(--color-highlight)]">Proven experience building successful products for clients across several countries.</p>
          </div>

        </div>

        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-10 lg:mt-0">
          
          <img
            src="/assets/svg/hero-section-animate.svg"
            alt="Developer Illustration"
            className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto"
          />

        </div>

      </div>

    </section>
  );
}
