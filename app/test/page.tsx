"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: section2Ref,
    offset: ["start end", "start start"], 
  });


  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 60,   
    damping: 20,    
    restDelta: 0.001 
  });

  const clipRadius = useTransform(smoothYProgress, [0, 1], ["0%", "150%"]);

  const clipPath = useTransform(
    clipRadius,
    (r) => `circle(${r} at 50% 100%)`
  );

  return (
    <main
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory relative bg-zinc-950 scroll-smooth"
    >
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center text-white relative">
        <h1 className="text-5xl font-bold">Primeira Seção</h1>
        <p className="mt-4 text-zinc-400">Role para baixo para ver o efeito suave</p>
      </section>

      <div ref={section2Ref} className="h-screen w-full snap-start relative">
        <motion.section
          style={{ clipPath }}
          className="h-full w-full flex flex-col items-center justify-center bg-indigo-600 text-white p-8"
        >
          <span className="text-indigo-200 font-mono text-sm mb-2">02 / RECURSO</span>
          <h2 className="text-5xl font-bold">Segunda Seção</h2>
          <p className="mt-4 text-indigo-100 max-w-md text-center">
            O fundo agora abre de forma muito mais fluida e orgânica.
          </p>
        </motion.section>
      </div>

      {/* Seção 3 */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center bg-zinc-900 text-white">
        <h2 className="text-5xl font-bold">Terceira Seção</h2>
      </section>
    </main>
  );
}