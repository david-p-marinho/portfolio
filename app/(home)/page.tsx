'use client'

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Hero from "./sections/hero/hero";
import Projects from "./sections/projects/projects";
import About from "./sections/about/about";

export default function Home() {
    return (
        <main className="bg-[#29215a]">
            <section className="h-dvh ">
                <Hero />
            </section>

            <div className="rounded-t-3xl bg-white">
                <section>
                    <Projects/>
                </section>
                <section >
                    <About/>
                </section>
            </div>

        </main>
    );
}