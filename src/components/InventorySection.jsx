// Importaciones de React Icons
import { FaJava, FaPython, FaGithub, FaServer } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql, SiHibernate } from "react-icons/si";

export default function InventorySection({ t, gainXP }) {
  return (
    <>
      <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 uppercase drop-shadow-md bg-slate-950/50 inline-block px-4 py-2 rounded-xl backdrop-blur-sm border border-slate-800">
            <span className="text-cyan-500">🏆</span> {t.achievementsTitle}
          </h2>
          <div className="space-y-4">
            {t.achievements.map((achiev, index) => (
              <div key={index} className="bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl flex items-center gap-4 hover:border-cyan-500 hover:-translate-y-1 transition-all cursor-pointer active:scale-95 shadow-xl" onClick={gainXP}>
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-cyan-500/50">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase text-sm">{achiev.title}</h3>
                  <p className="text-slate-400 text-xs">{achiev.desc} ({achiev.year})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 uppercase drop-shadow-md bg-slate-950/50 inline-block px-4 py-2 rounded-xl backdrop-blur-sm border border-slate-800">
            <span className="text-green-500">📊</span> {t.softSkillsTitle}
          </h2>
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 p-6 rounded-xl space-y-5 shadow-xl">
            {t.softSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between font-bold text-xs mb-1 uppercase">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-green-400">{skill.level}</span>
                </div>
                <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                  <div className="bg-gradient-to-r from-green-600 to-green-400 h-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN DE INVENTARIO TÉCNICO CON REACT ICONS */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row md:items-end gap-3 mb-8 bg-slate-950/50 inline-block px-4 py-2 rounded-xl backdrop-blur-sm border border-slate-800">
          <h2 className="text-3xl font-bold text-white uppercase drop-shadow-md">
            <span className="text-purple-500">_</span>{t.skillsTitle}
          </h2>
          <span className="text-cyan-500 text-sm font-bold animate-pulse">{t.skillsSub}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Java', icon: <FaJava className="w-10 h-10 text-[#f89820] group-hover:scale-110 transition-transform" /> },
            { name: 'Spring Boot', icon: <BiLogoSpringBoot className="w-10 h-10 text-[#6db33f] group-hover:scale-110 transition-transform" /> },
            { name: 'MySQL', icon: <SiMysql className="w-10 h-10 text-[#00758f] group-hover:scale-110 transition-transform" /> },
            { name: 'APIs REST', icon: <FaServer className="w-9 h-9 text-cyan-400 group-hover:scale-110 transition-transform" /> },
            { name: 'Git / GitHub', icon: <FaGithub className="w-9 h-9 text-white group-hover:scale-110 transition-transform" /> },
            { name: 'Python', icon: <FaPython className="w-10 h-10 text-[#ffd43b] group-hover:scale-110 transition-transform" /> },
            { name: 'JPA/Hibernate', icon: <SiHibernate className="w-10 h-10 text-[#bcae79] group-hover:scale-110 transition-transform" /> }
          ].map((skill, index) => (
            <button key={index} onClick={gainXP} className="group bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-cyan-500 hover:bg-slate-800 transition-all cursor-crosshair shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-2 active:scale-95">
              {skill.icon}
              <span className="font-bold text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">{skill.name}</span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}