export default function HeroSection() {
    return (
        <section id="hero" className="h-screen bg-[var(--color-primary)] flex items-center">

            <div className="w-screen flex items-center justify-center m-60 gap-60">

                <div className="w-3/5 flex flex-col gap-6">
                    <h1 className="text-[var(--color-highlight)] text-7xl font-bold">Fullstack<br/>Developer<span className="text-[var(--color-light)]">.</span></h1>
                    <p className="text-[var(--color-light)] text-2xl">I like to craft solid and scalable frontend products with great user experiences.</p>
                    <div className="flex">
                        <p className="text-[var(--color-highlight)] mt-18 mr-25">Proven experience building successful products for clients across several countries.</p>
                        <p className="text-[var(--color-highlight)] mt-18 mr-25">Proven experience building successful products for clients across several countries.</p>
                    </div>
                </div>

                <div className="w-2/5">
                    <img
                        src="/assets/svg/hero-section-animate.svg"
                        alt=""
                        className="w-[500px] h-[500px]"
                    />
                </div>

            </div>



        </section>
    )
}