"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, User, Sparkles, Target, HelpCircle, BookOpen, Users } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence, Variants } from 'framer-motion';

const menuItems = [
  { name: 'Sobre', href: '#sobre', icon: User },
  { name: 'Especialidades', href: '#especialidades', icon: Sparkles },
  { name: 'Método', href: '#metodo', icon: Target },
  { name: 'Dúvidas', href: '#faq', icon: HelpCircle },
  { name: 'E-book', href: '#receitas', icon: BookOpen },
  { name: 'Comunidade', href: '#community', icon: Users },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
      <div className="container mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between relative">
        
        <Link href="/" className="relative h-14 w-40 md:w-48 flex items-center" onClick={closeMenu}>
          <Image 
            src="/logo/Marca.jpeg" 
            alt="Ana Gosmin Nutricionista" 
            fill
            className="object-contain object-left" 
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-brand-darkgreen font-medium text-sm">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-brand-mediumgreen transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>

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

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-brand-mediumgreen origin-left"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-brand-darkgreen/60 backdrop-blur-sm z-50 h-[100dvh] w-screen" 
              onClick={closeMenu}
            />

            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 h-[100dvh] w-[85%] max-w-sm bg-brand-bg shadow-2xl z-50 flex flex-col"
            >
              <button 
                className="absolute top-6 right-6 text-brand-darkgreen p-2"
                onClick={closeMenu}
                aria-label="Fechar Menu"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="flex flex-col h-full pt-24 px-8 pb-12 overflow-y-auto">
                
                <motion.nav 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-2 text-brand-darkgreen font-medium text-xl mt-4"
                >
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div key={item.name} variants={itemVariants}>
                        <Link 
                          href={item.href} 
                          onClick={closeMenu} 
                          className="flex items-center gap-4 hover:text-brand-mediumgreen border-b border-brand-lightgreen/20 py-4 group transition-colors"
                        >
                          <Icon className="w-5 h-5 text-brand-mediumgreen group-hover:scale-110 transition-transform" /> 
                          <span className="group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.nav>
                
                <motion.div 
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  className="mt-auto pt-8"
                >
                  <a 
                    href="https://api.whatsapp.com/send?phone=5548988246141&text=Ol%C3%A1!%20Estava%20navegando%20no%20site%20e%20gostaria%20de%20agendar%20uma%20consulta." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-brand-wine text-white text-center px-6 py-4 rounded-full font-medium transition-all shadow-md active:scale-95"
                    onClick={closeMenu}
                  >
                    Agendar Consulta
                  </a>

                  <div className="flex justify-center mt-6">
                    <a 
                      href="https://www.instagram.com/nutri.anagosmin?igsh=MWJmazVsbzlreXdv" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-brand-lightgreen/20 rounded-full text-brand-darkgreen hover:bg-brand-mediumgreen hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}