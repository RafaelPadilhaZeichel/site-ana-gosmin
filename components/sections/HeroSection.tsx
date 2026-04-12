import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-lightgreen/40 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Textos da Esquerda (Animado) */}
        <FadeIn delay={0.2} className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0">
          <span className="text-brand-mediumgreen font-semibold tracking-wider uppercase text-sm mb-4">
            Nutrição Clínica e Comportamental
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-darkgreen leading-tight mb-6">
            Redefina seu estilo de vida <span className="text-brand-wine">sem restrições.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-darkgreen/80 mb-10 max-w-2xl">
            Emagrecimento saudável e autonomia para as suas escolhas. Descubra como a nutrição pode ser leve, prazerosa e adaptada à sua rotina real.
          </p>
          
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-brand-darkgreen text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-brand-mediumgreen hover:shadow-lg hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
            Agendar minha Consulta
          </a>
        </FadeIn>

        {/* Imagem da Direita (Animada) */}
        <FadeIn className="flex-1 relative w-full max-w-md lg:max-w-lg aspect-[4/5]">
          {/* Shape de fundo da imagem */}
          <div className="absolute inset-0 bg-brand-lightgreen/30 rounded-t-full rounded-b-[40px] transform rotate-3 scale-105 transition-transform duration-500 hover:rotate-6 -z-10"></div>
          
          <div className="relative w-full h-full rounded-t-full rounded-b-[40px] overflow-hidden shadow-2xl border-4 border-white/50">
           <Image
              src="/images/Foto1.jpeg"
              alt="Ana Gosmin - Nutricionista de jaleco trabalhando no notebook"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}