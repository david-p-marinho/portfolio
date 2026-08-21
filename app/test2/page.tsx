"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  // Monitora a rolagem da Seção 2
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

  // 1. ANIMAÇÃO CIRCULAR
  // O fundo roxo abre durante a aproximação/encaixe do Snap (0% a 30%)
  const clipRadius = useTransform(smoothProgress, [0, 0.3], ["0%", "150%"]);
  const clipPath = useTransform(
    clipRadius,
    (r) => `circle(${r} at 50% 100%)`
  );

  // 2. ANIMAÇÃO DA GALERIA
  // Começa do 0 (sem atraso na lógica) até a rolagem completa do bloco
  const yTransform = useTransform(smoothProgress, [0, 1], ["0%", "-80%"]);

  return (
    <main
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-zinc-950 text-white"
    >
      {/* SEÇÃO 1 */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center bg-zinc-950 p-8 relative">
        <h1 className="text-5xl font-bold">Primeira Seção</h1>
        <p className="mt-4 text-zinc-400">
          Role para baixo para testar com o offset compensado.
        </p>
      </section>

      {/* SEÇÃO 2 (300vh com Snap) */}
      <div ref={section2Ref} className="h-[300vh] w-full snap-start relative">
        {/* Elemento Sticky com a cor #4f39f6 */}
        <motion.div
          style={{ clipPath }}
          className="sticky top-0 h-screen w-full flex items-center justify-between px-12 md:px-24 overflow-hidden bg-[#4f39f6]"
        >
          {/* Lado Esquerdo: Texto Fixo */}
          <div className="w-1/2 pr-8">
            <span className="text-indigo-200 font-mono text-sm mb-2 block">
              02 / COLEÇÃO
            </span>
            <h2 className="text-5xl font-bold leading-tight text-white">
              Galeria Interativa
            </h2>
            <p className="mt-4 text-indigo-100 max-w-md">
              O espaço em branco compensou a travada do Snap. O Item 01 está exatamente onde deveria!
            </p>
          </div>

          {/* Lado Direito: Galeria com Offset no topo */}
          <div className="w-1/2 h-[500px] overflow-hidden relative rounded-2xl border border-white/20 bg-black/20 p-4 backdrop-blur-sm">
            <motion.div
              style={{ y: yTransform }}
              /* pt-[350px] cria o 'vácuo' no topo para compensar a rolagem inicial */
              className="flex flex-col gap-6 pt-[350px]"
            >
              <div className="h-64 w-full rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-2xl font-bold shadow-lg shrink-0">
                Item 01
              </div>
              <div className="h-64 w-full rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-2xl font-bold shadow-lg shrink-0">
                Item 02
              </div>
              <div className="h-64 w-full rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-2xl font-bold shadow-lg shrink-0">
                Item 03
              </div>
              <div className="h-64 w-full rounded-xl bg-gradient-to-br from-rose-600 to-orange-600 flex items-center justify-center text-2xl font-bold shadow-lg shrink-0">
                Item 04
              </div>
              <div className="h-64 w-full rounded-xl bg-gradient-to-br from-amber-500 to-pink-600 flex items-center justify-center text-2xl font-bold shadow-lg shrink-0">
                Item 05
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* SEÇÃO 3 */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center bg-zinc-950 p-8">
        <h2 className="text-5xl font-bold">Terceira Seção</h2>
        <p className="mt-4 text-zinc-400">
          Trava de snap mantida normalmente ao chegar aqui.
        </p>
      </section>
    </main>
  );
}