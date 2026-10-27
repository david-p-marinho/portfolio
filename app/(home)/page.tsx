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
            <div className="">
                <Hero/>
            </div>

            <div className=" ">
   
                    <Projects />
                    <Works />
                    <Tech />
                    <About />


            </div>
        </StarField>
    );
}