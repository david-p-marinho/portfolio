'use client'

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "./sections/hero/hero";
import Projects from "./sections/projects/projects";
import About from "./sections/about/about";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        container: containerRef,
        target: section2Ref,
        offset: ["start end", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20,
        restDelta: 0.001,
    });

    const clipRadius = useTransform(smoothProgress, [0, 0.33], ["0%", "150%"]);

    const clipPath = useTransform(clipRadius, (r) => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            return "none";
        }
        return `circle(${r} at 50% 100%)`;
    });



    return (
        <main ref={containerRef} className=" md:h-screen w-full overflow-y-scroll snap-y snap-proximity md:snap-mandatory bg-[#2a619a]">
            <section className="md:h-screen w-full snap-start flex flex-col justify-center items-center">
                <Hero />
            </section>

            <div ref={section2Ref} className="md:h-[200vh] w-full snap-start relative rounded-lg bg-[#20345C]">
                <div className="w-full h-10 rounded-t-lg md:hidden bg-[#F7F4ED] absolute -top-2" />
                <motion.div
                    style={{ clipPath }}
                    className="sticky top-0 md:h-screen w-full flex items-center justify-between md:px-24 overflow-hidden bg-[#F7F4ED] text-gray-800"
                >
                    <Projects />
                </motion.div>
            </div>

            <section className="h-screen w-full md:snap-start flex items-center justify-center bg-[#F7F4ED] text-gray-900">
                <About/>
            </section>
        </main>
    );
}