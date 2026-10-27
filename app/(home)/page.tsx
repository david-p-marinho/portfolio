'use client'

import Hero from "./sections/hero/hero";
import Projects from "./sections/projects/projects";
import About from "./sections/about/about";
import Works from "./sections/works/works";
import Tech from "./sections/tech/tech";
import StarField from "@/components/starField";

export default function Home() {
    return (
        <StarField className="relative bg-[#29215a]">
            <Hero />
            <Projects />
            <Works />
            <Tech />
            <About />
        </StarField>
    );
}