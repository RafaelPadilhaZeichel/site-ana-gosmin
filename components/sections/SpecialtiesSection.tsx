import { Leaf, Brain, Apple, HeartPulse } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

const specialties = [
  {
    icon: Apple,
    title: 'Emagrecimento',
    description: 'Perda de peso de forma sustentável, sem dietas restritivas extremas ou efeito sanfona, focando na sua saúde e resultados a longo prazo.',
  },
  {
    icon: Brain,
    title: 'Nutrição Comportamental',
    description: 'Ressignifique sua relação com a comida, entendendo seus gatilhos emocionais e desenvolvendo verdadeira autonomia alimentar.',
  },
  {
    icon: HeartPulse,
    title: 'Nutrição Clínica',
    description: 'Tratamento e prevenção de condições de saúde (como diabetes, hipertensão e alterações de colesterol) através de uma alimentação estratégica.',
  },
  {
    icon: Leaf,
    title: 'Nutrição Funcional',
    description: 'Foco na sua individualidade, melhorando a digestão, imunidade, energia e vitalidade através da combinação correta de nutrientes.',
  },
];

export default function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-24 bg-brand-bg w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-mediumgreen font-semibold tracking-wider uppercase text-sm mb-3 block">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-darkgreen mb-4">
            Minhas Especialidades
          </h2>
          <p className="text-brand-darkgreen/70 text-lg">
            Um cuidado integral focado em você, unindo ciência e acolhimento para transformar sua qualidade de vida.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn 
                key={index}
                delay={index * 0.15}
                className="bg-white p-8 rounded-2xl shadow-soft border border-brand-lightgreen/20 hover:border-brand-mediumgreen/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group cursor-pointer"
              >
                <div className="w-14 h-14 bg-brand-lightgreen/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-mediumgreen/20 transition-all duration-300 group-hover:-translate-y-1">
                  <Icon className="w-7 h-7 text-brand-darkgreen" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-darkgreen mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-darkgreen/70 leading-relaxed">
                  {item.description}
                </p>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}