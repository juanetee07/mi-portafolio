import { useEffect } from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

export default function ToastNotification({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-bounce-short">
      <div className="bg-slate-900/95 border-2 border-cyan-400 text-white p-4 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] backdrop-blur-md flex items-start gap-3 relative overflow-hidden">
        {/* Barra superior de progreso luminosa */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-[pulse_1s_infinite]"></div>
        </div>

        <div className="p-1 text-cyan-400 mt-0.5">
          <FaCheckCircle className="w-5 h-5 animate-pulse" />
        </div>

        <div className="flex-1 pr-2">
          <p className="font-mono text-xs uppercase text-cyan-400 font-bold tracking-wider">
            {toast.title || 'CHECKPOINT GUARDADO'}
          </p>
          <p className="text-slate-200 text-xs font-mono mt-1 leading-snug">
            {toast.message}
          </p>
        </div>

        <button 
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 transition-colors"
          title="Cerrar notificación"
        >
          <FaTimes className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
