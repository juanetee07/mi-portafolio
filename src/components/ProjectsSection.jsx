import { FaGithub, FaExternalLinkAlt, FaImages, FaCode, FaStar } from 'react-icons/fa';

export default function ProjectsSection({ t, lang = 'es', gainXP, onOpenProjectModal }) {
  const isEs = lang === 'es';

  const handleCardClick = (project) => {
    if (project.repoUrl) {
      window.open(project.repoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="proyectos" className="scroll-mt-28 mb-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white uppercase drop-shadow-md bg-slate-950/50 inline-block px-4 py-2 rounded-xl backdrop-blur-sm border border-slate-800">
          <span className="text-cyan-500">#</span> {t.projectsTitle}
        </h2>
        <span className="text-xs text-purple-400 font-mono bg-purple-950/40 border border-purple-800/60 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 self-start sm:self-auto">
          <FaCode className="w-3.5 h-3.5 text-cyan-400" />
          {isEs ? 'Haz clic en la tarjeta para ir a GitHub o en Docs para ver capturas' : 'Click card for GitHub or Docs for gallery'}
        </span>
      </div>

      {/* DISEÑO BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {t.projects?.map((project, index) => {
          const isFeatured = project.featured || index === 0;

          if (isFeatured) {
            // TARJETA DESTACADA BENTO (Vertical, ocupa 2 filas en la columna izquierda)
            return (
              <div
                key={project.name || index}
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
                aria-label={isEs ? `Abrir proyecto destacado ${project.name} en GitHub` : `Open featured project ${project.name} on GitHub`}
                className="col-span-1 md:col-start-1 md:row-start-1 md:row-span-2 group relative bg-slate-900/95 backdrop-blur-md border-2 border-purple-500/60 hover:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 rounded-3xl overflow-hidden hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-2xl h-full"
                title={isEs ? `Ir al repositorio GitHub de ${project.name}` : `Open ${project.name} on GitHub`}
              >
                {/* Parte Superior: Imagen de portada con badges y controles */}
                <div className="relative aspect-video sm:aspect-[16/10] md:aspect-[16/11] w-full overflow-hidden bg-slate-950 border-b border-slate-800 shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />

                  {/* Badge Destacado */}
                  <div className="absolute top-3 left-3 bg-slate-950/90 border border-purple-400 text-purple-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                    <FaStar className="w-3 h-3 text-cyan-400 animate-spin-slow" />
                    <span>{project.badgeText || (isEs ? 'Proyecto Destacado' : 'Featured Project')}</span>
                  </div>

                  {/* Ícono GitHub */}
                  <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md border border-purple-500/50 text-purple-300 p-2.5 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-all shadow-md">
                    <FaGithub className="w-5 h-5" />
                  </div>

                  {/* Botón flotante para abrir modal de fotos/documentación */}
                  <div className="absolute bottom-3 right-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        gainXP();
                        onOpenProjectModal(project);
                      }}
                      className="flex items-center gap-2 px-3.5 py-2 bg-slate-950/95 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold rounded-xl border border-cyan-500/80 shadow-lg transition-all backdrop-blur-md active:scale-95 cursor-pointer font-mono"
                      title={isEs ? 'Ver capturas, Swagger y arquitectura' : 'View screenshots, Swagger and architecture'}
                      aria-label={isEs ? `Ver documentación de ${project.name}` : `View documentation for ${project.name}`}
                    >
                      <FaImages className="w-4 h-4" />
                      <span>{isEs ? 'Ver Docs & Fotos' : 'Docs & Gallery'}</span>
                    </button>
                  </div>
                </div>

                {/* Parte Inferior: Información detallada */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-900/90 to-slate-950/90">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                        {project.name}
                      </h3>
                      <FaExternalLinkAlt className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors mt-2 shrink-0" />
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[11px] uppercase font-bold text-slate-400 font-mono tracking-wider mb-2">
                      {isEs ? 'Tecnologías Clave' : 'Key Stack'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {project.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-950 text-cyan-300 text-[11px] font-mono px-2.5 py-1 rounded-md border border-cyan-500/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          // TARJETAS SECUNDARIAS BENTO (Columna derecha, una arriba de la otra)
          const rowClass = index === 1 ? 'md:row-start-1' : 'md:row-start-2';

          return (
            <div
              key={project.name || index}
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
              className={`col-span-1 md:col-start-2 ${rowClass} group relative bg-slate-900/90 backdrop-blur-md border border-slate-700 hover:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between shadow-xl h-full`}
              title={isEs ? `Ir al repositorio GitHub de ${project.name}` : `Open ${project.name} on GitHub`}
            >
              {/* Imagen de portada */}
              <div className="relative aspect-video sm:aspect-auto sm:w-5/12 md:w-full md:aspect-video lg:w-5/12 lg:aspect-auto shrink-0 min-h-[160px] overflow-hidden bg-slate-950 border-b sm:border-b-0 sm:border-r md:border-b md:border-r-0 lg:border-b-0 lg:border-r border-slate-800">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Indicador de GitHub */}
                <div className="absolute top-2.5 right-2.5 bg-slate-950/80 backdrop-blur-md border border-purple-500/50 text-purple-300 p-2 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-all shadow-md">
                  <FaGithub className="w-4 h-4" />
                </div>

                {/* Botón flotante para abrir el modal */}
                <div className="absolute bottom-2.5 right-2.5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      gainXP();
                      onOpenProjectModal(project);
                    }}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-950/90 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-bold rounded-lg border border-cyan-500/60 shadow-lg transition-all backdrop-blur-sm active:scale-95 cursor-pointer font-mono"
                    title={isEs ? 'Ver capturas, Swagger y arquitectura' : 'View screenshots, Swagger and architecture'}
                    aria-label={isEs ? `Ver documentación de ${project.name}` : `View documentation for ${project.name}`}
                  >
                    <FaImages className="w-3.5 h-3.5" />
                    <span>{isEs ? 'Ver Docs' : 'Docs'}</span>
                  </button>
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-5 sm:w-7/12 md:w-full lg:w-7/12 flex-1 flex flex-col justify-between bg-gradient-to-br from-slate-900/80 to-slate-950/80">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
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
                        className="bg-slate-950 text-slate-300 text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded border border-slate-700/80 group-hover:border-purple-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}