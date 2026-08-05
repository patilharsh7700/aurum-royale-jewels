import { useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "gold" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden px-8 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] transition-colors duration-500 will-change-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

const styles = {
  gold: "bg-gold-gradient text-[oklch(0.16_0.01_60)] shimmer hover:shadow-glow",
  ghost:
    "glass-panel text-ivory hover:border-gold/60 hover:text-gold shimmer",
} as const;

/** Magnetic hover button with a gold shimmer sweep. */
export function MagneticButton({
  children,
  to,
  href,
  variant = "gold",
  className,
  onClick,
  type = "button",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.22;
    const y = (e.clientY - r.top - r.height / 2) * 0.32;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  const inner = (
    <span
      ref={ref}
      className="flex items-center gap-3 transition-transform duration-500 ease-out"
    >
      {children}
    </span>
  );
  const cls = cn(base, styles[variant], className);

  if (to) {
    return (
      <Link to={to} className={cls} onMouseMove={onMove} onMouseLeave={onLeave}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} onMouseMove={onMove} onMouseLeave={onLeave}>
        {inner}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={cls}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {inner}
    </button>
  );
}