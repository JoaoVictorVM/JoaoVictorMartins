export default function AboutSection() {
    return (
        <section id="about" className="h-screen bg-[var(--color-light)] flex items-center">

            <div className="flex items-center justify-center m-60">

                <div className="w-1/2 flex flex-col">
                    <img
                        src="/assets/images/Perfil.jpg" 
                        alt="João Victor Martins"
                        className="w-[300px] h-[300px] shadow-[0_0_10px_2px_#333E50]"
                        />
                </div>

                <div className="w-1/2">
                    <h1 className="text-[var(--color-primary)] text-5xl font-bold">Sobre mim</h1>
                    <p className="text-[var(--color-primary)] text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas veritatis quisquam. Adipisci velit beatae dolor, doloribus distinctio aperiam sint in laborum perspiciatis impedit officia voluptatibus recusandae exercitationem pariatur aut?</p>
                </div>

            </div>

        </section>
    )
}