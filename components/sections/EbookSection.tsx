import Image from 'next/image';
import { BookOpen } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

export default function EbookSection() {
  return (
    <section id="receitas" className="py-24 bg-brand-mediumgreen/5 w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Lado Esquerdo Animado */}
        <FadeIn className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-brand-mediumgreen font-semibold tracking-wider uppercase text-sm mb-3">
            Material Exclusivo
          </span>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-darkgreen mb-6">
            E-book: <span className="text-brand-wine">Emagrecer com Leveza</span>
          </h2>
          
          <p className="text-brand-darkgreen/80 text-lg leading-relaxed mb-8">
            Um guia completo e prático para quem deseja transformar a alimentação sem abrir mão do sabor. 
            Descubra receitas fáceis, estratégias de nutrição comportamental e o passo a passo para construir 
            uma rotina alimentar que você realmente consiga manter.
          </p>
          
          <ul className="space-y-4 mb-10 text-brand-darkgreen/80 text-left w-full max-w-md">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-lightgreen/40 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-darkgreen text-sm">✓</span>
              </div>
              <span>Receitas práticas para o dia a dia</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-lightgreen/40 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-darkgreen text-sm">✓</span>
              </div>
              <span>Substituições inteligentes e saborosas</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-lightgreen/40 flex items-center justify-center flex-shrink-0">
                <span className="text-brand-darkgreen text-sm">✓</span>
              </div>
              <span>Estratégias para lidar com a vontade de doces</span>
            </li>
          </ul>
          
          <a 
            href="#" 
            className="group flex items-center gap-3 bg-brand-wine text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1"
          >
            <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Quero adquirir o E-book
          </a>
        </FadeIn>

        {/* Lado Direito: Mockup Animado com Delay */}
        <FadeIn delay={0.2} className="flex-1 w-full max-w-sm lg:max-w-md relative aspect-[3/4]">
          {/* Efeito de brilho no fundo para destacar a capa */}
          <div className="absolute inset-0 bg-brand-gold/20 rounded-xl filter blur-2xl transform scale-105 -z-10"></div>
          
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/20 transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/Ebook.jpeg" 
              alt="Capa do E-book Emagrecer com Leveza"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}