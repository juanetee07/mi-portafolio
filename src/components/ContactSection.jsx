export default function ContactSection({ t, lang = 'es', onShowToast }) {
  const isEs = lang === 'es';

  const handleCopyEmail = async () => {
    const email = 'juancruzlarcher07@gmail.com';
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback para entornos donde clipboard API no esté disponible
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      if (onShowToast) {
        onShowToast({
          title: isEs ? '💾 CHECKPOINT GUARDADO' : '💾 SAVE POINT RECORDED',
          message: isEs 
            ? `¡Email copiado al portapapeles! (${email})` 
            : `Email copied to clipboard! (${email})`
        });
      }
    } catch {
      if (onShowToast) {
        onShowToast({
          title: isEs ? '⚠️ ERROR AL COPIAR' : '⚠️ COPY FAILED',
          message: isEs 
            ? `No se pudo copiar automáticamente. Email: ${email}` 
            : `Could not copy automatically. Email: ${email}`
        });
      }
    }
  };

  return (
    <section id="contacto" className="scroll-mt-28 text-center py-16 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700 relative overflow-hidden hover:border-cyan-500/50 transition-colors duration-500 shadow-xl mb-16 font-mono">
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-purple-500"></div>
      
      <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">{t.contactTitle}</h2>
      
      <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
        {isEs ? (
          <>
            ¿Tienes una misión para mí o quieres armar un equipo? <br/>
            Mi bandeja de entrada está siempre abierta. <br/><br/>
            <span className="text-cyan-400 font-bold font-mono">juancruzlarcher07@gmail.com</span> <br/>
            Cruz del Eje, Córdoba, Argentina
          </>
        ) : (
          <>
            Do you have a quest for me or want to build a party? <br/>
            My inbox is always open. <br/><br/>
            <span className="text-cyan-400 font-bold font-mono">juancruzlarcher07@gmail.com</span> <br/>
            Cruz del Eje, Cordoba, Argentina
          </>
        )}
      </p>

      <div className="flex justify-center">
        <button 
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 bg-slate-950 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 font-bold uppercase tracking-wider font-mono py-3 px-8 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] active:scale-95 text-xs sm:text-sm cursor-pointer"
        >
          <span>📋</span> {isEs ? 'Copiar Email' : 'Copy Email'}
        </button>
      </div>
    </section>
  );
}