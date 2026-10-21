export default function ParallaxSection() {
  return (
    <div className="w-full bg-neutral-950 text-white font-sans">
      {/* 1. Primeira Seção (Fica fixa / Sticky enquanto rola) */}
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 to-slate-900 px-6">
        <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">
          Efeito Paralaxe
        </span>
        <h1 className="text-4xl md:text-7xl font-bold text-center tracking-tight max-w-4xl">
          Role para baixo para revelar a próxima seção
        </h1>
        <div className="mt-8 animate-bounce text-gray-400 text-sm flex flex-col items-center gap-2">
          <span>Rolar</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. Segunda Seção (Desliza POR CIMA da primeira) */}
      <section className="relative z-10 min-h-screen w-full bg-emerald-950 text-emerald-100 flex flex-col justify-center items-center px-6 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] rounded-t-[2.5rem] border-t border-emerald-500/20">
        <div className="max-w-3xl text-center space-y-6">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
            Sua nova seção
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight">
            Efeito Cortina com Sombra e Borda Arredondada
          </h2>
          <p className="text-emerald-200/80 text-lg md:text-xl leading-relaxed">
            Esta seção sobe e cobre a seção anterior. Usando <code className="bg-emerald-900/60 px-2 py-1 rounded text-emerald-300">sticky top-0</code> na primeira seção e <code className="bg-emerald-900/60 px-2 py-1 rounded text-emerald-300">relative z-10</code> nesta, conseguimos o efeito nativo de paralaxe sem JavaScript!
          </p>
        </div>
      </section>

      {/* 3. Terceira Seção (Mais uma camada para continuar a experiência) */}
      <section className="relative z-20 min-h-screen w-full bg-slate-900 text-white flex flex-col justify-center items-center px-6 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] rounded-t-[2.5rem] border-t border-slate-700">
        <h3 className="text-3xl md:text-5xl font-bold mb-4">
          Próximo Bloco
        </h3>
        <p className="text-gray-400 max-w-xl text-center">
          Você pode empilhar múltiplos blocos ajustando o nível do <code className="text-indigo-400">z-index</code> para cada um deles.
        </p>
      </section>
    </div>
  );
}