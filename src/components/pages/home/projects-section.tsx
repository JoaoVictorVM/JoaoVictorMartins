export default function ProjectsSection() {
    return (
        <section id="projects" className="h-screen bg-[var(--color-light)] flex items-center">

            <div className="flex items-center justify-center m-60">

                <div className="w-screen flex items-center gap-60">
                    <div className="w-1/2">
                        <h1 className="text-[var(--color-primary)] text-5xl font-bold">Projetos</h1>
                        <p className="text-[var(--color-primary)] text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, natus dolore! Aperiam placeat similique ipsum molestiae accusamus dolorum eum ut qui, magnam cum et odio tempora quo harum voluptatibus mollitia!</p>
                    </div>
                    
                    <div className="w-1/2">
                        <button className="text-[var(--color-primary)] w-65 h-14 border-2">Ver todos os projetos ➔</button>
                    </div>
                </div>

                <div></div>

            </div>

        </section>
    )
}