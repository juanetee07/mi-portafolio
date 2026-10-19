import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaDatabase, FaLayerGroup } from 'react-icons/fa';

export default function ProjectModal({ project, onClose, lang }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!project) {
      document.body.style.overflow = 'unset';
      return;
    }

    // Manejo de teclas para navegación y escape
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && project?.gallery?.length > 1) {
        setCurrentSlide((prev) => (prev + 1) % project.gallery.length);
      } else if (e.key === 'ArrowLeft' && project?.gallery?.length > 1) {
        setCurrentSlide((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Bloquear scroll de la página de fondo mientras el modal está abierto
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const slides = project.gallery || [];
  const activeSlide = slides[currentSlide];

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const isEs = lang === 'es';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="bg-slate-900 border-2 border-cyan-500/80 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-[0_0_50px_rgba(6,182,212,0.3)] text-slate-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barra superior de encabezado */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70 sticky top-0 z-20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></span>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              {project.name}
            </h2>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            title={isEs ? "Cerrar modal (Esc)" : "Close modal (Esc)"}
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido principal */}
        <div className="p-6 space-y-6">

          {/* Carrusel de fotos y diagramas de documentación */}
          {slides.length > 0 && (
            <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl group">
              <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden bg-slate-950">
                <img 
                  src={activeSlide.image} 
                  alt={activeSlide.title || project.name} 
                  className="w-full h-full object-contain select-none transition-all duration-300"
                />

                {/* Overlay de información del slide */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 pt-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
                        <span className="text-cyan-400">▹</span> {activeSlide.title}
                      </h4>
                      {activeSlide.desc && (
                        <p className="text-slate-300 text-xs mt-0.5 line-clamp-2">{activeSlide.desc}</p>
                      )}
                    </div>
                    <span className="text-xs font-mono text-cyan-400 bg-slate-900/80 px-2.5 py-1 rounded border border-cyan-500/30 whitespace-nowrap">
                      {currentSlide + 1} / {slides.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Botones de navegación del carrusel */}
              {slides.length > 1 && (
                <>
                  <button 
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-900 text-white border border-slate-700 transition-all shadow-lg active:scale-90"
                  >
                    <FaChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-900 text-white border border-slate-700 transition-all shadow-lg active:scale-90"
                  >
                    <FaChevronRight className="w-4 h-4" />
                  </button>

                  {/* Indicadores de bolitas */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-sm p-1.5 rounded-full border border-slate-800">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(idx);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          idx === currentSlide ? 'bg-cyan-400 w-5 shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'bg-slate-600 hover:bg-slate-400'
                        }`}
                        title={`Diapositiva ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Descripción general */}
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="text-cyan-400">#</span> {isEs ? 'Misión y Objetivo' : 'Mission & Scope'}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription || project.desc}
            </p>
          </div>

          {/* Arquitectura y Justificación Técnica */}
          {project.architecture && (
            <div className="bg-slate-950/80 border border-purple-500/40 rounded-xl p-5 shadow-inner">
              <h4 className="text-purple-400 font-bold uppercase text-sm mb-2 flex items-center gap-2">
                <FaLayerGroup className="text-purple-400" />
                {isEs ? 'Arquitectura & Decisiones de Diseño' : 'Architecture & Technical Decisions'}
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                {project.architecture}
              </p>
              {project.dbNotes && (
                <div className="flex items-start gap-2 text-xs text-slate-400 border-t border-slate-800/80 pt-2.5">
                  <FaDatabase className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>{project.dbNotes}</span>
                </div>
              )}
            </div>
          )}

          {/* Etiquetas tecnológicas */}
          <div>
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">
              {isEs ? 'Stack Tecnológico Implementado' : 'Technology Stack'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span 
                  key={tech} 
                  className="bg-slate-800/90 text-cyan-300 text-xs px-3 py-1 rounded-md border border-cyan-500/30 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior de acciones */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-slate-800 bg-slate-950/70 mt-auto">
          <div className="text-xs text-slate-500">
            {isEs ? '🎮 Presiona [Esc] para salir' : '🎮 Press [Esc] to exit'}
          </div>

          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] active:scale-95 border border-purple-400"
              >
                <FaGithub className="w-4 h-4" />
                <span>{isEs ? 'Ver en GitHub' : 'View on GitHub'}</span>
                <FaExternalLinkAlt className="w-3 h-3 opacity-80" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-bold uppercase rounded-lg transition-colors border border-slate-700"
            >
              {isEs ? 'Cerrar' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
