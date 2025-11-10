export default function AboutSection() {
    return (
        <section id="about" className="{aboutSection} h-screen bg-[var(--color-light)] flex items-center">

            <div className="flex items-center justify-center">

                <div className="w-1/2 m-60 flex flex-col gap-6">
                    <img
                        src="/assets/images/Perfil.jpg" 
                        alt="João Victor Martins"
                        className="w-[300px] h-[300px]"
                        />
                </div>

                <div>
                    <h1>Sobre mim</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas veritatis quisquam. Adipisci velit beatae dolor, doloribus distinctio aperiam sint in laborum perspiciatis impedit officia voluptatibus recusandae exercitationem pariatur aut?</p>
                </div>

            </div>

        </section>
    )
}