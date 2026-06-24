"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  stagger?: number;
  delay?: number;
};

const container: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 }
  })
};

const word: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

export default function AnimatedText({ text, className = "", as = "h2", stagger = 0.06, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const Tag = as as any;
  const words = text.split(" ");

  return (
    <Tag className={className} ref={ref as any}>
      <motion.span
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        custom={stagger}
        style={{ display: "inline-block" }}
        transition={{ delay }}
      >
        {words.map((w, i) => (
          <span key={i} className="split-mask mr-[0.25em]">
            <motion.span variants={word}>{w}</motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
