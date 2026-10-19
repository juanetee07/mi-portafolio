import { FaGithub, FaExternalLinkAlt, FaImages, FaCode } from 'react-icons/fa';

export default function ProjectsSection({ t, lang = 'es', gainXP, onOpenProjectModal }) {
  const isEs = lang === 'es';

  const handleCardClick = (project) => {
    if (project.repoUrl) {
      window.open(project.repoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="proyectos" className="mb-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white uppercase drop-shadow-md bg-slate-950/50 inline-block px-4 py-2 rounded-xl backdrop-blur-sm border border-slate-800">
          <span className="text-cyan-500">#</span> {t.projectsTitle}
        </h2>
        <span className="text-xs text-purple-400 font-mono bg-purple-950/40 border border-purple-800/60 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 self-start sm:self-auto">
          <FaCode className="w-3.5 h-3.5 text-cyan-400" />
          {isEs ? 'Haz clic en la tarjeta para ir a GitHub o en Docs para ver capturas' : 'Click card for GitHub or Docs for gallery'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.projects?.map((project, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            onClick={() => {
              gainXP();
              handleCardClick(project);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                gainXP();
                handleCardClick(project);
              }
            }}
            aria-label={isEs ? `Abrir proyecto ${project.name} en GitHub` : `Open project ${project.name} on GitHub`}
            className="group relative bg-slate-900/90 backdrop-blur-md border border-slate-700 hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl"
            title={isEs ? `Ir al repositorio GitHub de ${project.name}` : `Open ${project.name} on GitHub`}
          >
            {/* Imagen de portada del proyecto */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />

              {/* Indicador de GitHub en la esquina superior derecha */}
              <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-purple-500/50 text-purple-300 p-2 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-all shadow-md">
                <FaGithub className="w-4 h-4" />
              </div>

              {/* Botón flotante para abrir el carrusel de documentación sin salir a GitHub */}
              <div className="absolute bottom-3 right-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    gainXP();
                    onOpenProjectModal(project);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950/90 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold rounded-lg border border-cyan-500/60 shadow-lg transition-all backdrop-blur-sm active:scale-95 cursor-pointer"
                  title={isEs ? 'Ver capturas, Swagger y arquitectura' : 'View screenshots, Swagger and architecture'}
                  aria-label={isEs ? `Ver documentación de ${project.name}` : `View documentation for ${project.name}`}
                >
                  <FaImages className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Ver Docs & Fotos' : 'Docs & Gallery'}</span>
                </button>
              </div>
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors uppercase">
                    {project.name}
                  </h3>
                  <FaExternalLinkAlt className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors mt-1 shrink-0" />
                </div>

                <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Etiquetas sobre las tecnologías utilizadas */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-950 text-slate-300 text-[11px] font-mono px-2.5 py-1 rounded border border-slate-700/80 group-hover:border-purple-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}