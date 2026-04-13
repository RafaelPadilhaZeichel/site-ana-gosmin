"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosed) {
        setShowTooltip(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [hasClosed]);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTooltip(false);
    setHasClosed(true); 
  };

  return (
    <div id="wa-button" className="fixed bottom-6 right-6 z-50 flex flex-col items-end transition-opacity duration-300">
      
      <div 
        className={`mb-4 w-64 bg-white rounded-2xl shadow-2xl border border-brand-lightgreen/20 p-4 relative origin-bottom-right transition-all duration-500 ease-out flex gap-3 ${
          showTooltip ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-4 pointer-events-none'
        }`}
      >
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-brand-mediumgreen hover:text-brand-darkgreen bg-brand-bg rounded-full p-0.5 transition-colors"
          aria-label="Fechar mensagem"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-brand-lightgreen">
          <Image 
            src="/images/Foto5.jpeg" 
            alt="Ana Gosmin" 
            fill 
            sizes="(max-width: 768px) 300px, 500px"
            className="object-cover object-top"
          />
        </div>

        <div className="pt-1 pr-4">
          <p className="text-sm text-brand-darkgreen leading-tight font-heading font-bold mb-1">
            Ana Gosmin
          </p>
          <p className="text-xs text-brand-darkgreen/80 leading-snug">
            Oi! Tem alguma dúvida sobre as consultas? Estou por aqui!
          </p>
        </div>

        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-brand-lightgreen/20 transform rotate-45"></div>
      </div>

      <a
        href="https://api.whatsapp.com/send?phone=5548988246141&text=Ol%C3%A1!%20Estava%20navegando%20no%20site%20e%20gostaria%20de%20agendar%20uma%20consulta." 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        /* Adicionado relative e z-10 para garantir que o botão fique acima de qualquer margem fantasma */
        className="relative z-10 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
          /* A mágica acontece aqui: pointer-events-none */
          className="transform transition-transform group-hover:rotate-12 pointer-events-none"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
      
    </div>
  );
}