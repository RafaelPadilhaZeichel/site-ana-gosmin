"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Trava a rolagem e oculta o WhatsApp quando o menu abre
  useEffect(() => {
    const waButton = document.getElementById('wa-button');
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (waButton) {
        waButton.style.opacity = '0';
        waButton.style.pointerEvents = 'none';
      }
    } else {
      document.body.style.overflow = 'unset';
      if (waButton) {
        waButton.style.opacity = '1';
        waButton.style.pointerEvents = 'auto';
      }
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-brand-bg/90 backdrop-blur-md border-b border-brand-lightgreen/30 shadow-sm">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="relative h-14 w-40 md:w-48 flex items-center" onClick={closeMenu}>
          <Image 
            src="/logo/Marca.jpeg" 
            alt="Ana Gosmin Nutricionista" 
            fill
            className="object-contain object-left" 
            priority
          />
        </Link>

        {/* Menu de Navegação (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-brand-darkgreen font-medium text-sm">
          <Link href="#sobre" className="hover:text-brand-mediumgreen transition-colors">Sobre</Link>
          <Link href="#especialidades" className="hover:text-brand-mediumgreen transition-colors">Especialidades</Link>
          <Link href="#metodo" className="hover:text-brand-mediumgreen transition-colors">Método</Link>
          <Link href="#faq" className="hover:text-brand-mediumgreen transition-colors">Dúvidas</Link>
          <Link href="#receitas" className="hover:text-brand-mediumgreen transition-colors">Receitas</Link>
        </nav>

        {/* Botão Agendar (Desktop) */}
        <div className="hidden md:block">
          <a 
            href="https://api.whatsapp.com/send?phone=5548988246141&text=Ol%C3%A1!%20Estava%20navegando%20no%20site%20e%20gostaria%20de%20agendar%20uma%20consulta." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-wine text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:bg-opacity-90 hover:shadow-md"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Botão Hamburguer (Mobile) */}
        {!isMobileMenuOpen && (
          <button 
            className="md:hidden text-brand-darkgreen p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir Menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        )}
      </div>

      {/* Overlay Escuro para o Mobile */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-brand-darkgreen/60 backdrop-blur-sm z-50 h-[100dvh] w-screen" 
          onClick={closeMenu}
        ></div>
      )}

      {/* Menu Dropdown Deslizante (Mobile) - Usando 100dvh para não cortar */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-brand-bg shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-brand-darkgreen p-2"
          onClick={closeMenu}
          aria-label="Fechar Menu"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Conteúdo do Menu com espaçamento extra no final (pb-12) */}
        <div className="flex flex-col h-full pt-24 px-8 pb-12 overflow-y-auto">
          <nav className="flex flex-col gap-2 text-brand-darkgreen font-medium text-xl mt-4">
            <Link href="#sobre" onClick={closeMenu} className="hover:text-brand-mediumgreen border-b border-brand-lightgreen/20 py-4">Sobre</Link>
            <Link href="#especialidades" onClick={closeMenu} className="hover:text-brand-mediumgreen border-b border-brand-lightgreen/20 py-4">Especialidades</Link>
            <Link href="#metodo" onClick={closeMenu} className="hover:text-brand-mediumgreen border-b border-brand-lightgreen/20 py-4">Método</Link>
            <Link href="#faq" onClick={closeMenu} className="hover:text-brand-mediumgreen border-b border-brand-lightgreen/20 py-4">Dúvidas</Link>
            <Link href="#receitas" onClick={closeMenu} className="hover:text-brand-mediumgreen border-b border-brand-lightgreen/20 py-4">Receitas</Link>
          </nav>
          
          <div className="mt-auto pt-8">
            <a 
              href="https://api.whatsapp.com/send?phone=5548988246141&text=Ol%C3%A1!%20Estava%20navegando%20no%20site%20e%20gostaria%20de%20agendar%20uma%20consulta." 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-brand-wine text-white text-center px-6 py-4 rounded-full font-medium transition-all shadow-md active:scale-95"
              onClick={closeMenu}
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}