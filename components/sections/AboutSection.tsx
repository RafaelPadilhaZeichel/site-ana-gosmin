import Image from 'next/image';
import FadeIn from '../ui/FadeIn';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white w-full">
      {/* O id="sobre" acima é fundamental para o link do Header funcionar! */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Lado Esquerdo: Imagem com Animação (sem delay) */}
        <FadeIn className="flex-1 w-full max-w-md lg:max-w-lg relative aspect-[3/4]">
          {/* Fundo decorativo desalinhado para dar um charme */}
          <div className="absolute inset-0 bg-brand-lightgreen/20 rounded-2xl transform -rotate-3 scale-105 transition-transform duration-500 hover:rotate-0"></div>
          
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-2 border-brand-lightgreen/30">
            <Image
              src="/images/Foto5.jpeg" 
              alt="Nutricionista Ana Gosmin de braços cruzados"
              fill
              className="object-cover object-top"
            />
          </div>
        </FadeIn>

        {/* Lado Direito: Texto com Animação (com delay de 0.2s) */}
        <FadeIn delay={0.2} className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-brand-mediumgreen font-semibold tracking-wider uppercase text-sm mb-3">
            Conheça sua Nutri
          </span>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-darkgreen mb-6">
            Muito prazer, eu sou a <span className="text-brand-wine">Ana Gosmin</span>
          </h2>
          
          <div className="space-y-4 text-brand-darkgreen/80 text-lg leading-relaxed">
            <p>
              Sou nutricionista clínica e comportamental, apaixonada por ajudar pessoas a transformarem sua relação com a comida. Acredito que a nutrição não precisa ser sinônimo de sofrimento, dietas malucas ou restrições severas.
            </p>
            <p>
              Meu objetivo é te guiar em uma jornada de autoconhecimento, onde você terá autonomia para fazer as melhores escolhas para a sua saúde, sem abrir mão do que te dá prazer no dia a dia.
            </p>
            <p className="font-medium text-brand-darkgreen">
              Vamos juntos construir um estilo de vida mais leve, saudável e, acima de tudo, duradouro?
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}