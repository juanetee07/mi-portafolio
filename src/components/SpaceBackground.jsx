const INITIAL_STARS = Array.from({ length: 100 }).map((_, i) => {
  const pseudoRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  const r1 = pseudoRandom(i * 3 + 1);
  const r2 = pseudoRandom(i * 3 + 2);
  const r3 = pseudoRandom(i * 3 + 3);
  const r4 = pseudoRandom(i * 3 + 4);
  const r5 = pseudoRandom(i * 3 + 5);
  const r6 = pseudoRandom(i * 3 + 6);

  return {
    left: `${r1 * 100}%`,
    top: `${r2 * 100}%`,
    size: r3 * 3 + 1,
    opacity: r4 * 0.8 + 0.2,
    speed: r5 * 0.5 + 0.1,
    color: r6 > 0.8 ? 'bg-cyan-200' : r6 > 0.6 ? 'bg-purple-200' : 'bg-white'
  };
});

export default function SpaceBackground({ scrollY }) {
  const stars = INITIAL_STARS;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-slate-950">
      {/* Nebulosa de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950"></div>

      {/* Estrellas con paralaje */}
      {stars.map((star, i) => (
        <div 
          key={i} 
          className={`absolute rounded-full ${star.color} shadow-lg`} 
          style={{ 
            left: star.left, 
            top: star.top, 
            width: `${star.size}px`, 
            height: `${star.size}px`, 
            opacity: star.opacity, 
            transform: `translateY(-${scrollY * star.speed}px)` 
          }}
        ></div>
      ))}

      {/* 1. Nave Espacial Jugador */}
      <div 
        className="absolute transition-transform duration-75 ease-linear z-10" 
        style={{ 
          top: '90%', left: '5%', 
          transform: `translate(${scrollY * 0.2}px, -${scrollY * 0.9}px) rotate(${45 + scrollY * 0.02}deg)` 
        }}
      >
        <svg className="w-16 h-16 md:w-20 md:h-20 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.5a5.5 5.5 0 0 1 5.5 5.5c0 1.56-.5 3.03-1.37 4.23l1.83 5.49a1 1 0 0 1-1.3 1.22l-4.66-1.94-4.66 1.94a1 1 0 0 1-1.3-1.22l1.83-5.49A5.47 5.47 0 0 1 6.5 8 5.5 5.5 0 0 1 12 2.5zM12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
        </svg>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-8 md:w-4 md:h-10 bg-gradient-to-t from-transparent via-cyan-600 to-cyan-300 rounded-full animate-[pulse_0.5s_ease-in-out_infinite]"></div>
      </div>

      {/* 2. OVNI Enemigo */}
      <div 
        className="absolute transition-transform duration-75 ease-linear z-0" 
        style={{ 
          top: '-10%', right: '5%', 
          transform: `translate(-${scrollY * 0.15}px, ${scrollY * 1.1}px) rotate(${-15 - scrollY * 0.01}deg)` 
        }}
      >
        <svg className="w-20 h-20 md:w-28 md:h-28 text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3a5.5 5.5 0 0 0-5.45 4.78A9.92 9.92 0 0 0 2 12c0 2.2 2.5 4 6 4h8c3.5 0 6-1.8 6-4 0-1.89-1.9-3.48-4.55-4.22A5.5 5.5 0 0 0 12 3zm0 2a3.5 3.5 0 0 1 3.4 2.76A10 10 0 0 0 12 7.5a10 10 0 0 0-3.4.26A3.5 3.5 0 0 1 12 5zm-5.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5.5 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
        </svg>
      </div>

      {/* 3. Satélite de Comunicaciones (Velocidad horizontal reducida al 0.1 y ajustado para móviles) */}
      <div 
        className="absolute transition-transform duration-75 ease-linear z-0" 
        style={{ 
          top: '30%', left: '0%', 
          transform: `translate(${scrollY * 0.1}px, calc(1500px - ${scrollY * 0.7}px)) rotate(${scrollY * 0.05}deg)` 
        }}
      >
        <svg className="w-16 h-16 md:w-24 md:h-24 text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C10.9 2 10 2.9 10 4V7.5L5 9V5H2V19H5V15L10 16.5V20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20V16.5L19 15V19H22V5H19V9L14 7.5V4C14 2.9 13.1 2 12 2ZM12 9.5C13.4 9.5 14.5 10.6 14.5 12C14.5 13.4 13.4 14.5 12 14.5C10.6 14.5 9.5 13.4 9.5 12C9.5 10.6 10.6 9.5 12 9.5Z"/>
          {/* Punto rojo perfectamente centrado en el lente del telescopio/satélite */}
          <circle cx="12" cy="12" r="1.5" fill="#ef4444" />
          <circle cx="12" cy="12" r="2.2" fill="#ef4444" opacity="0.6">
            <animate attributeName="r" values="1.2;2.8;1.2" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* 4. Astronauta Flotando (Velocidad horizontal reducida al 0.1 y ajustado para móviles) */}
      <div 
        className="absolute transition-transform duration-75 ease-linear z-10" 
        style={{ 
          top: '30%', right: '0%', 
          transform: `translate(-${scrollY * 0.1}px, calc(2200px - ${scrollY * 0.8}px)) rotate(${-20 + scrollY * 0.03}deg)` 
        }}
      >
        <svg className="w-16 h-16 md:w-20 md:h-20 text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.7)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.7 2 6 4.7 6 8V11C6 11 6 12 5 12H4C2.9 12 2 12.9 2 14C2 15.1 2.9 16 4 16H5L6 17V20C6 21.1 6.9 22 8 22H10V18H14V22H16C17.1 22 18 21.1 18 20V17L19 16H20C21.1 16 22 15.1 22 14C22 12.9 21.1 12 20 12H19C18 12 18 11 18 11V8C18 4.7 15.3 2 12 2ZM12 5C14.2 5 16 6.8 16 9V11H8V9C8 6.8 9.8 5 12 5ZM8 13H16V15H8V13Z"/>
        </svg>
      </div>

    </div>
  );
}