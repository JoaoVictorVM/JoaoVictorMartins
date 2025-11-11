export default function MoreSection() {
    return (
        <section id="more" className="h-screen bg-[var(--color-primary)] flex items-center">

            <div className="flex items-center justify-center m-60 gap-60">

                <div className="w-3/5">
                    <h1 className="text-[var(--color-highlight)] text-5xl font-bold">Mais</h1>
                    <p className="text-[var(--color-light)] text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem natus eius vero cumque laborum optio repudiandae sequi pariatur aliquam iure neque, animi enim impedit molestiae ullam ipsum voluptatem fuga.</p>
                </div>

                <div className="w-2/5">
                    <img
                        src="/assets/svg/more-section-animate.svg"
                        alt=""
                        className="w-[500px] h-[500px]"
                    />
                </div>

            </div>

        </section>
    )
}
        