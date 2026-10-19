import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ t, lang, setLang, xp, gainXP }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const navLinks = ['#inicio', '#acerca', '#historial', '#proyectos', '#contacto'];

  const handleSecretLogo = () => {
    if (gainXP) {
      gainXP(50);
    }
  };

  const isEs = lang === 'es';

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 border-b border-purple-500/30 backdrop-blur-md z-50 transition-all">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO Y XP SECRETA */}
        <div 
          role="button"
          tabIndex={0}
          className="flex items-center gap-2 group cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1" 
          onClick={handleSecretLogo} 
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleSecretLogo();
            }
          }}
          title={isEs ? "¡Encontraste un secreto! +50 XP" : "You found a secret! +50 XP"}
          aria-label={isEs ? "Logo JCL_DEV - Ganar 50 de experiencia" : "JCL_DEV Logo - Gain 50 XP"}
        >
          <svg className="w-8 h-8 text-cyan-400 group-hover:rotate-180 transition-transform duration-700 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <div className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-widest uppercase font-mono">
            JCL_DEV<span className="text-cyan-400 animate-pulse">_</span>
          </div>
        </div>

        {/* MENÚ DE ESCRITORIO */}
        <div className="hidden md:flex flex-wrap justify-center gap-5 text-sm font-bold items-center font-mono">
          {t.nav?.map((item, idx) => (
            <a 
              key={idx} 
              href={navLinks[idx] || '#'} 
              className="hover:text-cyan-400 hover:-translate-y-0.5 transition-all uppercase tracking-wider text-xs"
            >
              {item}
            </a>
          ))}
          
          <div className="bg-slate-800 border border-purple-500/50 px-3 py-1 rounded-full text-cyan-400 flex items-center gap-2 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            <span className="text-xs uppercase text-slate-400">XP:</span> 
            <span className="font-black animate-pulse font-mono">{xp}</span>
          </div>
          
          <button 
            type="button"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')} 
            className="px-3.5 py-1 text-xs border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all uppercase font-bold active:scale-95 cursor-pointer"
            aria-label={isEs ? "Cambiar idioma a inglés" : "Switch language to Spanish"}
          >
            {t.btnLang}
          </button>
        </div>

        {/* BOTÓN HAMBURGUESA PARA MÓVILES */}
        <button 
          type="button"
          className="md:hidden text-cyan-400 text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? (isEs ? 'Cerrar menú de navegación' : 'Close navigation menu') : (isEs ? 'Abrir menú de navegación' : 'Open navigation menu')}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE PARA CELULARES */}
      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-slate-900/98 border-b border-purple-500/30 backdrop-blur-xl flex flex-col items-center py-6 space-y-5 shadow-2xl font-mono"
        >
          {t.nav?.map((item, idx) => (
            <a 
              key={idx} 
              href={navLinks[idx] || '#'} 
              onClick={closeMenu} 
              className="text-base font-bold hover:text-cyan-400 transition-all uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
          
          <div className="bg-slate-800 border border-purple-500/50 px-4 py-1.5 rounded-full text-cyan-400 flex items-center gap-2">
            <span className="text-xs uppercase text-slate-400">XP:</span> 
            <span className="font-black animate-pulse">{xp}</span>
          </div>
          
          <button 
            type="button"
            onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); closeMenu(); }} 
            className="px-6 py-2 text-xs border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all uppercase font-bold cursor-pointer"
          >
            {t.btnLang}
          </button>
        </div>
      )}
    </nav>
  );
}