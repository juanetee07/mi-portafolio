import { FaShieldAlt } from 'react-icons/fa';

export default function TimelineSection({ t, gainXP }) {
  return (
    <section id="historial" className="mb-24">
      <h2 className="text-3xl font-bold text-white mb-8 uppercase drop-shadow-md flex items-center gap-2 bg-slate-950/50 inline-block px-4 py-2 rounded-xl backdrop-blur-sm border border-slate-800">
        <span className="text-purple-500">⚔️</span> {t.timelineTitle}
      </h2>
      <div className="relative border-l-2 border-purple-500/50 pl-8 ml-4 space-y-12">
        {t.quests.map((quest, index) => (
          <div 
            key={index} 
            role="button"
            tabIndex={0}
            className="relative group cursor-pointer focus:outline-none" 
            onClick={gainXP}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                gainXP();
              }
            }}
            aria-label={`${quest.role} en ${quest.place} (${quest.date})`}
          >
            <div className="absolute -left-[41px] -top-0.5 w-5 h-5 bg-slate-950 border-2 border-purple-500 rounded-full group-hover:bg-purple-500 group-hover:scale-125 group-active:scale-95 transition-all shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            
            <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 p-6 rounded-xl group-hover:border-purple-500/50 group-focus:border-cyan-400 group-focus:ring-2 group-focus:ring-cyan-500/30 transition-all shadow-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-cyan-400 uppercase">{quest.role}</h3>
                <span className="text-purple-300 text-sm font-bold bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700 whitespace-nowrap mt-2 md:mt-0 font-mono">
                  {quest.date}
                </span>
              </div>
              <h4 className="text-white font-bold mb-3">{quest.place}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{quest.desc}</p>

              {/* Habilidades y competencias desarrolladas en la misión */}
              {quest.skills && quest.skills.length > 0 && (
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-green-400 font-bold flex items-center gap-1 uppercase tracking-wider">
                    <FaShieldAlt className="w-3 h-3 text-green-400" />
                    <span>{quest.skillsLabel || 'Atributos clave:'}</span>
                  </span>
                  {quest.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="bg-green-950/40 text-green-300 border border-green-700/50 text-xs px-2.5 py-0.5 rounded-full font-mono"
                    >
                      +{skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}