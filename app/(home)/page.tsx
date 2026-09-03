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
    const clipPath = useTransform(
        clipRadius,
        (r) => `circle(${r} at 50% 100%)`
    );

    return (
        <main ref={containerRef} className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-[#2a619a]">
            <section className="h-screen w-full snap-start flex flex-col justify-center items-center">
                <Hero/>
            </section>

            <div ref={section2Ref} className="h-[200vh] w-full snap-start relative">
                <motion.div
                    style={{ clipPath }}
                    className="sticky top-0 h-screen w-full flex items-center justify-between px-12 md:px-24 overflow-hidden bg-[#F7F4ED] text-gray-800"
                >
                    <Projects/>
                </motion.div>
            </div>

            <section className="h-screen w-full snap-start flex items-center justify-center bg-[#F7F4ED] text-gray-900">
                <About/>
            </section>
        </main>
    );
}