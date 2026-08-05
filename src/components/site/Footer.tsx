import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const columns = [
  {
    title: "Maison",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Craftsmanship", to: "/craftsmanship" },
      { label: "Boutiques", to: "/contact" },
    ],
  },
  {
    title: "Collections",
    links: [
      { label: "Vivaha Bridal", to: "/collections" },
      { label: "Lumière Solitaire", to: "/collections" },
      { label: "Aurea Heritage", to: "/collections" },
    ],
  },
  {
    title: "Client Care",
    links: [
      { label: "Book Appointment", to: "/contact" },
      { label: "Certification", to: "/craftsmanship" },
      { label: "Buyback Policy", to: "/about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-mesh">
      <div className="mx-auto w-full max-w-[1600px] px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <p className="eyebrow">The Newsletter</p>
            <h2 className="mt-6 max-w-md font-display text-4xl leading-[1.08] text-ivory sm:text-5xl">
              Private viewings, before the public.
            </h2>
            <form
              className="mt-10 flex max-w-md flex-col gap-4 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                className="min-w-0 flex-1 border-b border-gold/30 bg-transparent px-1 py-3 font-sans text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none"
              />
              <MagneticButton type="submit" variant="gold" className="px-7 py-3">
                Subscribe
              </MagneticButton>
            </form>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                  {col.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="font-serif text-lg text-ivory/70 transition-colors duration-500 hover:text-gold"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                Flagship
              </h3>
              <ul className="mt-6 space-y-4 font-serif text-lg text-ivory/70">
                <li className="flex gap-3">
                  <MapPin className="mt-1.5 h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.3} />
                  <span>Kala Ghoda, Fort, Mumbai 400001</span>
                </li>
                <li>
                  <a href="tel:+912261234567" className="flex gap-3 hover:text-gold">
                    <Phone className="mt-1.5 h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.3} />
                    +91 22 6123 4567
                  </a>
                </li>
                <li>
                  <a href="mailto:atelier@aurumroyale.com" className="flex gap-3 hover:text-gold">
                    <Mail className="mt-1.5 h-4 w-4 shrink-0 text-gold/70" strokeWidth={1.3} />
                    atelier@aurumroyale.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hairline mt-20" />

        <div className="mt-8 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs tracking-[0.14em] text-ivory/40">
            © 2026 Aurum Royale Jewels · BIS 916 Hallmarked · GIA & IGI Certified
          </p>
          <div className="flex items-center gap-5 text-ivory/55">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Social profile"
                className="transition-all duration-500 hover:-translate-y-0.5 hover:text-gold"
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.3} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}