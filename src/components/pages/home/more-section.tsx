export default function MoreSection() {
  return (
    <section id="more" className="min-h-screen bg-[var(--color-primary)] flex items-center">

      <div className="w-full flex flex-col lg:flex-row items-center justify-center m-6 lg:m-60 gap-10 lg:gap-60">
        
        <div className="w-full lg:w-3/5 text-center lg:text-left">

          <h1 className="text-[var(--color-highlight)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Mais</h1>
          <p className="text-[var(--color-light)] text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem natus eius vero cumque laborum optio repudiandae sequi pariatur aliquam iure neque, animi enim impedit molestiae ullam ipsum voluptatem fuga.
          </p>

        </div>

        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-10 lg:mt-0">

            <img 
                src="/assets/svg/more-section-animate.svg" 
                alt="" 
                draggable={false}
                className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto" 
            />

        </div>

      </div>

    </section>
  );
}
