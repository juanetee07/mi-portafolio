
export default function HeroSection({ t, xp, gainXP }) {
  const currentLevel = Math.min(5, Math.floor(xp / 100) + 1);
  const currentRank = t.militaryRanks?.[currentLevel - 1] || 'Cadete de la Flota';
  const isMax = currentLevel === 5 && xp >= 500;

  return (
    <section id="inicio" className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-24 md:mb-32 relative">
      
      {/* CONTENEDOR DE TEXTO */}
      <div className="flex-1 space-y-6 text-center md:text-left relative z-20">
        <div className="inline-block px-3 py-1 bg-slate-800 border border-purple-500 text-purple-400 text-xs uppercase tracking-widest rounded-full mb-2 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
          {t.heroLevelPrefix || 'Nivel'} {currentLevel} - {currentRank} {isMax ? '[MAX]' : ''}
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          Juan Cruz <br/> Larcher
        </h1>
        <p className="text-xl text-cyan-400 font-bold uppercase tracking-widest">
          {t.heroSubtitle}
        </p>
        
        {/* REDES SOCIALES Y CV */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-4">
          <a href="https://linkedin.com/in/juancruzlarcher" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-900 hover:-translate-y-2 transition-all shadow-[0_0_10px_rgba(6,182,212,0.2)] active:scale-90 border border-slate-700">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://github.com/juanetee07" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-purple-500 hover:text-slate-900 hover:-translate-y-2 transition-all shadow-[0_0_10px_rgba(168,85,247,0.2)] active:scale-90 border border-slate-700">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://www.instagram.com/juannlarcher/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-pink-500 hover:text-white hover:-translate-y-2 transition-all shadow-[0_0_10px_rgba(236,72,153,0.2)] active:scale-90 border border-slate-700">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          
          {/* NUEVO BOTON CV */}
          <a href="/CV_Juan_Cruz_Larcher.pdf" download className="flex items-center gap-2 p-3 bg-cyan-600 text-slate-900 font-bold uppercase tracking-widest rounded-lg hover:bg-cyan-400 hover:-translate-y-2 transition-all shadow-[0_0_10px_rgba(6,182,212,0.4)] active:scale-90 ml-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            <span className="hidden sm:inline">CV</span>
          </a>
        </div>
      </div>
      
      {/* CONTENEDOR DE LA IMAGEN */}
      <div 
        role="button"
        tabIndex={0}
        aria-label="Avatar de Juan Cruz Larcher - Ganar XP"
        className="relative group cursor-pointer w-64 h-64 md:w-80 md:h-80 mx-auto z-10 focus:outline-none focus:ring-4 focus:ring-cyan-400 rounded-full" 
        onClick={gainXP}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            gainXP();
          }
        }}
      >
        <div className="absolute inset-[-30px] md:inset-[-45px] animate-[spin_20s_linear_infinite] pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 w-8 h-8 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 left-0 w-6 h-6 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)] -translate-x-1/2">
            <div className="absolute top-1/2 left-1/2 w-10 h-2 border-2 border-cyan-300 rounded-[50%] -translate-x-1/2 -translate-y-1/2 -rotate-12"></div>
          </div>
          <div className="absolute bottom-0 right-1/4 w-4 h-4 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)] translate-y-1/2"></div>
        </div>

        <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.5)] relative z-20 bg-slate-800 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 group-active:scale-95">
          <picture>
            <source srcSet="/JuanCruzLarcherIMG.webp" type="image/webp" />
            <img 
              src="/JuanCruzLarcherIMG.png" 
              alt="Juan Cruz Larcher" 
              width="800"
              height="800"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover object-[center_20%]" 
            />
          </picture>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 border border-purple-500/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] group-hover:border-cyan-400 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[22rem] md:h-[22rem] border border-cyan-500/20 rounded-full group-hover:rotate-180 transition-all duration-1000 border-dashed z-0"></div>
      </div>
    </section>
  );
}