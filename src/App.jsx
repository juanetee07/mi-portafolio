import { useState, useEffect, useRef } from 'react';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import InventorySection from './components/InventorySection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ProjectModal from './components/ProjectModal';
import ToastNotification from './components/ToastNotification';
import { es } from './i18n/es';
import { en } from './i18n/en';

export default function App() {
  const [lang, setLang] = useState('es');
  const [xp, setXp] = useState(() => {
    try {
      const saved = localStorage.getItem('user_xp');
      return saved !== null ? Math.min(500, Math.max(0, parseInt(saved, 10) || 0)) : 0;
    } catch {
      return 0;
    }
  });
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);
  const prevLevelRef = useRef(Math.min(5, Math.floor(xp / 100) + 1));

  // Sincronizar atributo lang en <html> para accesibilidad y SEO
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Persistir XP en localStorage
  useEffect(() => {
    try {
      localStorage.setItem('user_xp', xp.toString());
    } catch {
      // Ignorar errores en modo incógnito/restringido
    }
  }, [xp]);

  // Escuchar el evento de scroll para animar el fondo
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gainXP = (amount = 15) => {
    setXp((prev) => {
      if (prev >= 500) return 500;
      const newXp = Math.min(500, prev + amount);
      const newLevel = Math.min(5, Math.floor(newXp / 100) + 1);
      if (newLevel > prevLevelRef.current) {
        prevLevelRef.current = newLevel;
        const ranks = lang === 'es' ? es.militaryRanks : en.militaryRanks;
        const rankName = ranks[newLevel - 1] || ranks[0];
        setToast({
          title: lang === 'es' ? '⚡ ¡ASCENSO MILITAR DESBLOQUEADO!' : '⚡ MILITARY PROMOTION UNLOCKED!',
          message: lang === 'es' 
            ? `¡Felicidades! Has sido ascendido a ${rankName}${newLevel === 5 ? ' [Rango Máximo]' : ''}.`
            : `Congrats! You have been promoted to ${rankName}${newLevel === 5 ? ' [Max Rank]' : ''}.`
        });
      }
      return newXp;
    });
  };

  const content = { es, en };
  const t = content[lang] || es;

  return (
    <div className="min-h-screen text-slate-300 font-mono selection:bg-purple-600 selection:text-white">
      
      <SpaceBackground scrollY={scrollY} />
      
      <Navbar 
        t={t} 
        lang={lang} 
        setLang={setLang} 
        xp={xp} 
        gainXP={gainXP} 
      />

      <main className="max-w-5xl mx-auto px-6 pt-36 pb-20 relative z-10">
        <HeroSection t={t} xp={xp} gainXP={() => gainXP(15)} />
        <AboutSection t={t} />
        <TimelineSection t={t} gainXP={() => gainXP(15)} />
        <InventorySection t={t} gainXP={() => gainXP(15)} />
        <ProjectsSection 
          t={t} 
          lang={lang}
          gainXP={() => gainXP(15)} 
          onOpenProjectModal={(proj) => setSelectedProject(proj)} 
        />
        <ContactSection 
          t={t} 
          lang={lang}
          onShowToast={(toastData) => setToast(toastData)} 
        />
      </main>

      <Footer t={t} lang={lang} />

      {/* Modal con carrusel de documentación y detalles técnicos */}
      {selectedProject && (
        <ProjectModal 
          key={selectedProject.name}
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          lang={lang} 
        />
      )}

      {/* Notificación Toast cyberpunk retro */}
      <ToastNotification 
        toast={toast} 
        onClose={() => setToast(null)} 
      />

    </div>
  );
}