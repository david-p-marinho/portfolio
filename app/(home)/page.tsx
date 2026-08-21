'use client'

import Image from "next/image";
import { RiGithubLine, RiLinkedinBoxLine, RiUserLine } from "react-icons/ri";
import About from "./sections/about/section";
import Projects from "./sections/projects/page";
import { motion, useScroll, useSpring, useTransform, } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)
    const section2Ref = useRef<HTMLDivElement>(null)

    const {scrollYProgress} = useScroll({
        container: containerRef,
        target: section2Ref,
        offset: ["start end", "start start"]
    })

    const smoothYProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20,
        restDelta: 0.001
    })

    const clipRadius = useTransform(smoothYProgress, [0, 1], ["0%", "150%"])

    const clipPath = useTransform(
        clipRadius,
        (r) => `circle(${r} at 50% 100%)`
    )
    return (
        <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-[#20345C]" ref={containerRef}>
            <section className=" h-screen w-full snap-start flex flex-col justify-center items-center">
                <div className="flex flex-row-reverse items-center justify-center mb-30">
                    <div className="w-[100px] h-[100px] bg-[#D9D9D9] rounded-full flex justify-center items-center mx-5">
                        <RiUserLine className="text-[#0A2947] w-[60px] h-[60px]" />
                    </div>

                    <div className="text-white flex flex-col items-center mx-5">
                        <h1 className="text-3xl font-bold ">David Pequeno Marinho</h1>
                        <p className="text-md tracking-wider text-white font-bold">Desenvolvedor Web | Mobile</p>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <Link  href={""}>
                        <div className="bg-[#189CC9] px-3 py-2 rounded-full flex justify-center items-center text-white mx-5">
                            <RiGithubLine className="h-[30px] w-[30px]" />
                            <p className="text-[18px] font-bold">GitHub</p>
                        </div>
                    </Link>

                    <Link  href={""}>
                        <div className="bg-[#189CC9] px-3 py-2 rounded-full flex justify-center items-center text-white mx-5">
                            <RiLinkedinBoxLine className="h-[30px] w-[30px]" /> 
                            <p className="text-[18px] font-bold">LinkedIn</p>
                        </div>
                    </Link>
                </div>
            </section>

            <div ref={section2Ref} className="h-screen w-full snap-start relative">
                <motion.section style={{clipPath}} className="h-full w-full flex flex-col items-center  bg-[#F7F4ED]">
                    <h1>Projetos</h1>
                </motion.section>
            </div>

        </main>
    );
}
