"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Leaf } from "lucide-react";
import { useEffect, useState } from "react";

export default function FallingLeaves() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { damping: 20, stiffness: 80, mass: 0.5 });

  const y1 = useTransform(smoothScroll, [0, 8000], [0, 2000]);
  const rotate1 = useTransform(smoothScroll, [0, 8000], [0, 720]);

  const y2 = useTransform(smoothScroll, [0, 8000], [0, -1000]);
  const rotate2 = useTransform(smoothScroll, [0, 8000], [0, -400]);

  const y3 = useTransform(smoothScroll, [0, 8000], [-200, 3000]);
  const rotate3 = useTransform(smoothScroll, [0, 8000], [45, 360]);

  const y4 = useTransform(smoothScroll, [0, 8000], [100, 1500]);
  const rotate4 = useTransform(smoothScroll, [0, 8000], [-45, 800]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-[15%] left-[10%] text-brand-mediumgreen/20">
        <Leaf className="w-8 h-8" />
      </motion.div>

      <motion.div style={{ y: y2, rotate: rotate2 }} className="absolute top-[60%] right-[15%] text-brand-lightgreen/20">
        <Leaf className="w-12 h-12" />
      </motion.div>

      <motion.div style={{ y: y3, rotate: rotate3 }} className="absolute top-[-5%] left-[30%] text-brand-darkgreen/10 blur-[3px]">
        <Leaf className="w-24 h-24" />
      </motion.div>

      <motion.div style={{ y: y4, rotate: rotate4 }} className="absolute top-[20%] right-[5%] text-brand-mediumgreen/15 blur-[1px]">
        <Leaf className="w-10 h-10" />
      </motion.div>
    </div>
  );
}