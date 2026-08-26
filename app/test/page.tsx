export default function SnapSimples() {
  return (
    // 1. O PAI: Controla a rolagem da tela inteira e define o tipo de Snap
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      
      {/* 2. OS FILHOS: Cada tela tem a altura exata do visor (h-screen) e avisa onde travar (snap-start) */}
      <section className="h-screen w-full snap-start bg-indigo-600 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Tela 01</h1>
      </section>

      <section className="h-screen w-full snap-start bg-emerald-600 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Tela 02</h1>
      </section>

      <section className="h-screen w-full snap-start bg-rose-600 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Tela 03</h1>
      </section>

    </main>
  );
}