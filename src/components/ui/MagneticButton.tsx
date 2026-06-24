"use client";

import { useRef, MouseEvent, ReactNode } from "react";
import Link from "next/link";

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  strength?: number;
  onClick?: () => void;
};

export default function MagneticButton({ href, children, className = "", variant = "primary", strength = 18, onClick }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0,0)";
  };
  const cls = variant === "primary" ? "btn-primary" : "btn-ghost";
  const content = (
    <span
      ref={ref}
      className="inline-flex items-center gap-2 transition-transform duration-300 ease-out"
    >
      {children}
    </span>
  );
  const common = {
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    onClick,
    className: `${cls} ${className}`
  } as const;
  if (href) return <Link href={href} {...common}>{content}</Link>;
  return <button type="button" {...common}>{content}</button>;
}
