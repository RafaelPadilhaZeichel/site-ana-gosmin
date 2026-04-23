"use client";

import { useState } from 'react';
import { CalendarDays, ClipboardList, Utensils, MessageCircleHeart } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

const steps = [
  {
    icon: CalendarDays,
    title: '1. Agendamento e Acolhimento',
    description: 'Tudo começa no nosso primeiro contato. Vamos definir o melhor formato (online ou presencial) e ter uma breve conversa para eu conhecer um pouco da sua rotina e entender o motivo da consulta.',
  },
  {
    icon: ClipboardList,
    title: '2. A Consulta (Avaliação Completa)',
    description: 'Um bate-papo sem julgamentos. Vamos mapear seu histórico de saúde, exames, rotina, gostos alimentares e objetivos. Aqui começamos a redefinir sua visão sobre a alimentação.',
  },
  {
    icon: Utensils,
    title: '3. Plano Alimentar Estratégico',
    description: 'Nada de gaveta! Construiremos o plano juntos, respeitando suas preferências e garantindo que seja prático para o seu dia a dia. Sem alimentos impossíveis de achar ou restrições severas.',
  },
  {
    icon: MessageCircleHeart,
    title: '4. Acompanhamento Contínuo',
    description: 'Você não estará sozinho. Durante os dias seguintes à consulta, estarei disponível via WhatsApp para tirar dúvidas, ajustar o que for necessário e celebrar suas vitórias.',
  },
];

export default function MethodologySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="metodo" className="py-24 bg-white w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Cabeçalho Animado */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-mediumgreen font-semibold tracking-wider uppercase text-sm mb-3 block">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-darkgreen mb-4">
            A sua jornada de transformação
          </h2>
          <p className="text-brand-darkgreen/70 text-lg">
            Um processo desenhado para ser leve e adaptável. Veja como será o nosso acompanhamento:
          </p>
        </FadeIn>

        {/* Timeline Animada com Efeito Spotlight */}
        <div className="max-w-3xl mx-auto" onMouseLeave={() => setHoveredIndex(null)}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <FadeIn key={index} delay={index * 0.2}>
                <div 
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`flex gap-6 md:gap-8 relative transition-all duration-500 ease-out py-2 ${
                    hoveredIndex !== null && hoveredIndex !== index 
                      ? 'opacity-30 blur-[1px]' 
                      : 'opacity-100'
                  } ${
                    hoveredIndex === index ? 'translate-x-3' : ''
                  }`}
                >
                  
                  {/* Coluna do Ícone e Linha */}
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm transition-colors duration-500 ${
                      hoveredIndex === index ? 'bg-brand-mediumgreen' : 'bg-brand-lightgreen/20'
                    }`}>
                      <Icon className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-500 ${
                        hoveredIndex === index ? 'text-white' : 'text-brand-mediumgreen'
                      }`} />
                    </div>
                    {/* Linha conectora */}
                    {!isLast && (
                      <div className={`w-0.5 h-full mt-2 absolute top-12 md:top-16 bottom-[-20px] transition-colors duration-500 ${
                        hoveredIndex === index ? 'bg-brand-mediumgreen/50' : 'bg-brand-lightgreen/30'
                      }`}></div>
                    )}
                  </div>

                  {/* Coluna do Conteúdo */}
                  <div className="pb-12 md:pb-16 pt-2">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-darkgreen mb-3">
                      {step.title}
                    </h3>
                    <p className="text-brand-darkgreen/70 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}