
export default function AboutSection({ t }) {
  return (
    <section id="acerca" className="scroll-mt-28 mb-20 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 shadow-xl">
      <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,1)] group-hover:w-3 transition-all"></div>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase flex items-center gap-3">
        <span className="text-cyan-400">&gt;</span> {t.aboutTitle}
      </h2>
      <p className="text-slate-400 leading-relaxed text-lg">{t.aboutText}</p>
    </section>
  );
}