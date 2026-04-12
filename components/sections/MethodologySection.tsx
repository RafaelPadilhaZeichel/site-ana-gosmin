import { CalendarDays, ClipboardList, Utensils, MessageCircleHeart } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

const steps = [
  {
    icon: CalendarDays,
    title: '1. Agendamento e Acolhimento',
    description: 'Tudo começa no nosso primeiro contato. Vamos encontrar o melhor formato (online ou presencial) e você receberá um formulário pré-consulta para eu já ir conhecendo um pouco da sua rotina.',
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

        {/* Timeline Animada */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <FadeIn key={index} delay={index * 0.2} className="flex gap-6 md:gap-8 relative">
                
                {/* Coluna do Ícone e Linha */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-lightgreen/20 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-brand-mediumgreen" />
                  </div>
                  {/* Linha conectora (não renderiza no último item) */}
                  {!isLast && (
                    <div className="w-0.5 h-full bg-brand-lightgreen/30 mt-2 absolute top-12 md:top-16 bottom-[-20px]"></div>
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
                
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}