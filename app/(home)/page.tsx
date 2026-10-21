'use client'

import Hero from "./sections/hero/hero";
import Projects from "./sections/projects/projects";
import About from "./sections/about/about";

export default function Home() {
    return (
        <main className="relative bg-[#29215a]">
            <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
                <Hero />
            </div>

            <div className="relative z-10 rounded-t-[2.5rem] bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
                <section>
                    <Projects />
                </section>
                <section>
                    <About />
                </section>
            </div>
        </main>
    );
}