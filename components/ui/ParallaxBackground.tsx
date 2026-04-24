"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParallaxBackground() {
  // Estado para garantir que a animação só rode no cliente (evita erros no Next.js)
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  // Captura a posição do scroll da página
  const { scrollY } = useScroll();

  // MÁGICA DO PARALLAX:
  // [0, 3000] é a quantidade de pixels rolados para baixo.
  // [0, -500] é quantos pixels a bolha vai se mover.
  // Valores negativos fazem ela subir rápido. Valores positivos fazem ela "cair" devagar.
  const y1 = useTransform(scrollY, [0, 3000], [0, -500]); // Sobe muito rápido
  const y2 = useTransform(scrollY, [0, 3000], [0, 300]);  // Desce devagar
  const y3 = useTransform(scrollY, [0, 3000], [0, -250]); // Sobe devagar
  const y4 = useTransform(scrollY, [0, 3000], [0, 600]);  // Desce rápido

  if (!isMounted) return null;

  return (
    // z-10 coloca as bolhas como uma camada de luz que passa suavemente por cima do fundo,
    // mas pointer-events-none garante que elas não atrapalhem o clique nos botões!
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      
      {/* Bolha Verde Esmeralda (Canto Superior Esquerdo) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-brand-lightgreen/10 rounded-full blur-[100px] md:blur-[120px]"
      />

      {/* Bolha Vinho Suave (Meio Direita) */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] right-[-5%] w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] bg-brand-wine/5 rounded-full blur-[100px]"
      />

      {/* Bolha Verde Escuro (Fundo Esquerda) */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[70%] left-[10%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-brand-mediumgreen/10 rounded-full blur-[90px]"
      />
      
      {/* Bolha de Luz Branca (Rodando pelo topo) */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-[5%] right-[20%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] bg-white/30 rounded-full blur-[80px]"
      />
      
    </div>
  );
}