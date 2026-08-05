import { useEffect, useState, type ReactNode } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { LuxeCursor } from "./LuxeCursor";
import { SmoothScroll } from "./SmoothScroll";
import { cn } from "@/lib/utils";

function Preloader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1700);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[120] grid place-items-center bg-[oklch(0.11_0.004_60)] transition-all duration-1000",
        gone ? "pointer-events-none -translate-y-full opacity-0" : "",
      )}
    >
      <div className="text-center">
        <svg viewBox="0 0 120 120" className="mx-auto h-24 w-24" role="presentation">
          <defs>
            <linearGradient id="pl-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B98B2E" />
              <stop offset="50%" stopColor="#F7E7CE" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          <polygon
            points="60,14 96,46 60,106 24,46"
            fill="none"
            stroke="url(#pl-gold)"
            strokeWidth="1.5"
            strokeDasharray="260"
            strokeDashoffset="260"
          >
            <animate attributeName="stroke-dashoffset" from="260" to="0" dur="1.3s" fill="freeze" />
          </polygon>
          <path d="M24 46 H96 M60 14 L44 46 L60 106 L76 46 Z" fill="none" stroke="url(#pl-gold)" strokeWidth="0.8" opacity="0.7">
            <animate attributeName="opacity" from="0" to="0.7" dur="1s" begin="0.5s" fill="freeze" />
          </path>
        </svg>
        <p className="mt-8 font-display text-xl tracking-[0.42em] text-gold-gradient">
          AURUM ROYALE
        </p>
      </div>
    </div>
  );
}

function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed right-5 bottom-6 z-40 flex flex-col gap-3 lg:right-8">
      <a
        href="https://wa.me/912261234567"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-[oklch(0.16_0.01_60)] shadow-glow transition-transform duration-500 hover:scale-110"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
      </a>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold backdrop-blur-md transition-all duration-500 hover:bg-gold/10",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" strokeWidth={1.4} />
      </button>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Preloader />
      <SmoothScroll />
      <LuxeCursor />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}