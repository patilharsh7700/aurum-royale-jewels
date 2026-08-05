import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Search, Heart, ShoppingBag } from "lucide-react";
import { NAV } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function Monogram() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Aurum Royale Jewels home">
      <span className="relative grid h-10 w-10 shrink-0 place-items-center border border-gold/40">
        <span className="font-display text-lg text-gold-gradient">A</span>
        <span className="absolute inset-0 border border-gold/0 transition-all duration-700 group-hover:inset-[-4px] group-hover:border-gold/40" />
      </span>
      <span className="min-w-0 leading-none">
        <span className="block font-display text-base tracking-[0.18em] text-ivory sm:text-lg">
          AURUM ROYALE
        </span>
        <span className="mt-1 block font-sans text-[0.55rem] tracking-[0.42em] text-gold/70">
          JEWELS · EST. 1952
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled ? "glass-panel py-3 shadow-luxe" : "py-6",
      )}
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 lg:px-12">
        <div className="flex min-w-0 items-center gap-12">
          <Monogram />
          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-9">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group relative block py-1 font-sans text-[0.68rem] font-medium uppercase tracking-[0.28em] text-ivory/75 transition-colors duration-500 hover:text-gold"
                    activeProps={{ className: "text-gold" }}
                  >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-5 text-ivory/70 md:flex">
            {[
              { Icon: Search, label: "Search" },
              { Icon: Heart, label: "Wishlist" },
              { Icon: ShoppingBag, label: "Cart" },
            ].map(({ Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="transition-all duration-500 hover:-translate-y-0.5 hover:text-gold"
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.3} />
              </button>
            ))}
          </div>
          <Link
            to="/contact"
            className="hidden shrink-0 border border-gold/45 px-6 py-3 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold transition-all duration-500 hover:bg-gold hover:text-[oklch(0.16_0.01_60)] sm:inline-block"
          >
            Book Appointment
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 shrink-0 place-items-center border border-gold/35 text-gold transition-colors duration-500 hover:bg-gold/10 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-0 -z-10 bg-[oklch(0.12_0.004_60)]/97 backdrop-blur-2xl transition-all duration-700 xl:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav
          aria-label="Mobile"
          className="flex h-full flex-col justify-center gap-2 px-8 pt-20"
        >
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-gold/12 py-5 font-display text-3xl text-ivory transition-colors duration-500 hover:text-gold sm:text-4xl"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+912261234567"
            className="mt-8 font-sans text-[0.7rem] uppercase tracking-[0.3em] text-gold"
          >
            +91 22 6123 4567
          </a>
        </nav>
      </div>
    </header>
  );
}