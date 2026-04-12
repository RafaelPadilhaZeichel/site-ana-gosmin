"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

const faqs = [
  {
    question: 'Você atende por plano de saúde (convênio)?',
    answer: 'Meus atendimentos são exclusivamente particulares, o que me permite dedicar o tempo e a atenção necessários para um acompanhamento premium e individualizado. No entanto, emito recibo para que você possa solicitar reembolso junto ao seu convênio.'
  },
  {
    question: 'Como funciona a consulta online?',
    answer: 'A consulta online tem a mesma duração e qualidade da presencial. Conversamos por videochamada, analisamos seus exames e construímos seu plano alimentar juntos, na hora. O envio dos materiais é feito no mesmo dia.'
  },
  {
    question: 'A consulta dá direito a retorno?',
    answer: 'Acredito em acompanhamento contínuo. Dependendo do plano escolhido, você terá retornos programados, mas meu diferencial é o suporte via WhatsApp. Durante todo o período entre consultas, estarei disponível para ajustes e dúvidas.'
  },
  {
    question: 'Eu preciso cortar tudo que gosto para emagrecer?',
    answer: 'Absolutamente não! Minha abordagem é comportamental. Nós vamos encaixar seus alimentos favoritos (como um doce ou uma pizza) de forma estratégica na sua rotina, para que você emagreça sem sofrimento.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-bg w-full">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Cabeçalho Animado */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-mediumgreen font-semibold tracking-wider uppercase text-sm mb-3 block">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-darkgreen mb-4">
            Perguntas Frequentes
          </h2>
        </FadeIn>

        {/* Lista de Perguntas Animada em Cascata */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn 
              key={index} 
              delay={index * 0.1}
              className="border border-brand-lightgreen/30 rounded-2xl bg-white overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-heading font-bold text-brand-darkgreen text-lg">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-mediumgreen transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-brand-darkgreen/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}