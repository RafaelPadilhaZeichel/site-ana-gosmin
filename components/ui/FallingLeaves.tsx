"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Leaf } from "lucide-react";
import { useEffect, useState } from "react";

export default function FallingLeaves() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  // Pega a posição do scroll
  const { scrollY } = useScroll();

  // MÁGICA: O useSpring aplica uma "física de elástico". 
  // Isso faz as folhas flutuarem suavemente mesmo depois que você para de rolar!
  const smoothScroll = useSpring(scrollY, { damping: 20, stiffness: 80, mass: 0.5 });

  // Folha 1: Pequena, no fundo, desce devagar e gira
  const y1 = useTransform(smoothScroll, [0, 3000], [0, 600]);
  const rotate1 = useTransform(smoothScroll, [0, 3000], [0, 360]);

  // Folha 2: Média, sobe (parallax reverso), gira ao contrário
  const y2 = useTransform(smoothScroll, [0, 3000], [0, -400]);
  const rotate2 = useTransform(smoothScroll, [0, 3000], [0, -200]);

  // Folha 3: Gigante, borrada (perto da câmera), cai muito rápido
  const y3 = useTransform(smoothScroll, [0, 3000], [-100, 1000]);
  const rotate3 = useTransform(smoothScroll, [0, 3000], [45, 180]);

  // Folha 4: Média, cai na diagonal e gira rápido
  const y4 = useTransform(smoothScroll, [0, 3000], [100, 500]);
  const rotate4 = useTransform(smoothScroll, [0, 3000], [-45, 400]);

  if (!isMounted) return null;

  return (
    // z-20 para ficar acima do fundo, mas pointer-events-none para não bloquear cliques
    <div className="fixed inset-0 z-20 pointer-events-none overflow-hidden">
      
      {/* Folha 1 (Esquerda no alto) */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }} 
        className="absolute top-[15%] left-[10%] text-brand-mediumgreen/30"
      >
        <Leaf className="w-8 h-8" />
      </motion.div>

      {/* Folha 2 (Direita no meio) */}
      <motion.div 
        style={{ y: y2, rotate: rotate2 }} 
        className="absolute top-[60%] right-[15%] text-brand-lightgreen/40"
      >
        <Leaf className="w-12 h-12" />
      </motion.div>

      {/* Folha 3 (Esquerda perto do centro - Efeito de foco/desfoque) */}
      <motion.div 
        style={{ y: y3, rotate: rotate3 }} 
        className="absolute top-[-5%] left-[30%] text-brand-darkgreen/15 blur-[3px]"
      >
        <Leaf className="w-24 h-24" />
      </motion.div>

      {/* Folha 4 (Direita no alto) */}
      <motion.div 
        style={{ y: y4, rotate: rotate4 }} 
        className="absolute top-[20%] right-[5%] text-brand-mediumgreen/20 blur-[1px]"
      >
        <Leaf className="w-10 h-10" />
      </motion.div>

    </div>
  );
}