import { useEffect, useRef } from "react";

/** Gold ring cursor with lerped follower + hover magnetism on [data-cursor] targets. */
export function LuxeCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let scale = 1;
    let target = 1;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const el = (e.target as HTMLElement)?.closest?.(
        "a, button, [data-cursor]",
      );
      target = el ? 2.1 : 1;
    };

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      scale += (target - scale) * 0.12;
      if (dot.current) dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      if (ring.current)
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] hidden lg:block">
      <div
        ref={ring}
        className="absolute h-8 w-8 rounded-full border border-gold/60 will-change-transform"
        style={{ boxShadow: "0 0 24px -4px oklch(0.775 0.128 85.5 / 60%)" }}
      />
      <div ref={dot} className="absolute h-1 w-1 rounded-full bg-gold will-change-transform" />
    </div>
  );
}