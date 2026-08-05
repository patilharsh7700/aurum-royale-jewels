import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Plus, Minus, Star, Gem, ShieldCheck, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { GoldParticles } from "@/components/site/GoldParticles";
import { MagneticButton } from "@/components/site/MagneticButton";
import { CountUp } from "@/components/site/CountUp";
import {
  COLLECTIONS,
  PRODUCTS,
  SERVICES,
  STATS,
  TESTIMONIALS,
  JOURNAL,
  FAQS,
} from "@/lib/site-data";
import heroModel from "@/assets/hero-model.jpg";
import bridal from "@/assets/collection-bridal.jpg";
import diamondImg from "@/assets/collection-diamond.jpg";
import goldImg from "@/assets/collection-gold.jpg";
import craftImg from "@/assets/craftsmanship.jpg";

const collectionImages: Record<string, string> = {
  bridal,
  diamond: diamondImg,
  gold: goldImg,
};

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Aurum Royale Jewels — Luxury Diamond, Bridal & Gold Jewellery" },
      {
        name: "description",
        content:
          "Aurum Royale Jewels crafts certified diamond solitaires, bridal jewellery and 22K gold necklaces, earrings, rings and bangles. BIS hallmarked, GIA & IGI certified since 1952.",
      },
      {
        name: "keywords",
        content:
          "luxury jewellery, diamond jewellery, gold jewellery, bridal jewellery, wedding jewellery, necklace, earrings, rings, bangles, pendants, jewellery showroom",
      },
      { property: "og:title", content: "Aurum Royale Jewels — Luxury Fine Jewellery Since 1952" },
      {
        property: "og:description",
        content:
          "Certified diamond, bridal and 22K gold jewellery, hand-finished by 42 master artisans.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          name: "Aurum Royale Jewels",
          description:
            "Luxury diamond, bridal and 22K gold jewellery house established 1952.",
          foundingDate: "1952",
          priceRange: "₹₹₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "14 Rampart Row, Kala Ghoda, Fort",
            addressLocality: "Mumbai",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2841" },
        }),
      },
    ],
  }),
});

/* ---------------------------------- Hero --------------------------------- */

const HERO_WORDS = ["Heirlooms.", "Solitaires.", "Bridal gold.", "Forever."];

function Typed() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = HERO_WORDS[i % HERO_WORDS.length] ?? "";
    const done = !del && text === word;
    const empty = del && text === "";
    const delay = done ? 1600 : empty ? 200 : del ? 45 : 90;
    const t = setTimeout(() => {
      if (done) setDel(true);
      else if (empty) {
        setDel(false);
        setI((v) => v + 1);
      } else setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gold-gradient">
      {text}
      <span className="ml-1 inline-block h-[0.9em] w-px animate-pulse bg-gold align-middle" />
    </span>
  );
}

function Hero() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!layer.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 26;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      layer.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.06)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden">
      <div
        ref={layer}
        className="absolute inset-0 transition-transform duration-[1200ms] ease-out will-change-transform"
      >
        <img
          src={heroModel}
          alt="Model wearing an Aurum Royale diamond and gold bridal necklace"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="h-full w-full object-cover object-[68%_center] lg:object-[75%_center]"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-[oklch(0.11_0.004_60)] via-[oklch(0.11_0.004_60)]/80 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-[oklch(0.11_0.004_60)] via-transparent to-[oklch(0.11_0.004_60)]/70" />
      <GoldParticles density={90} />

      <div
        aria-hidden="true"
        className="animate-float-gem absolute top-1/4 right-[12%] hidden h-24 w-24 rotate-12 border border-gold/25 lg:block"
      />
      <div
        aria-hidden="true"
        className="animate-sparkle absolute bottom-1/3 right-1/3 h-1.5 w-1.5 rounded-full bg-champagne"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 pt-32 pb-24 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Maison de Haute Joaillerie · Mumbai · Since 1952</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-8 font-display text-[13vw] leading-[0.88] text-ivory sm:text-7xl lg:text-[7.5rem]">
              Worn once.
              <br />
              <span className="italic text-champagne">Inherited</span> forever.
            </h1>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-8 font-serif text-2xl text-ivory/70 sm:text-3xl">
              We make <Typed />
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ivory/55">
              Forty-two master artisans. BIS 916 hallmarked gold. GIA and IGI certified diamonds.
              Every piece finished by hand on a single workshop floor.
            </p>
          </Reveal>
          <Reveal delay={520}>
            <div className="mt-12 flex flex-wrap gap-4">
              <MagneticButton to="/collections">Explore the collections</MagneticButton>
              <MagneticButton to="/contact" variant="ghost">
                Book a private viewing
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={640}>
            <div className="glass-panel mt-16 inline-grid grid-cols-2 gap-8 px-8 py-6 sm:grid-cols-3">
              {[
                { Icon: ShieldCheck, t: "BIS 916 Hallmark" },
                { Icon: Gem, t: "GIA / IGI Certified" },
                { Icon: Sparkles, t: "Lifetime Care" },
              ].map(({ Icon, t }) => (
                <div key={t} className="flex items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />
                  <span className="font-sans text-[0.6rem] tracking-[0.2em] text-ivory/70 uppercase">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="font-sans text-[0.55rem] tracking-[0.4em] text-ivory/50 uppercase">
          Scroll
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-gold/20">
          <span className="animate-scroll-pulse absolute inset-x-0 h-1/2 bg-gold" />
        </span>
        <ChevronDown className="h-4 w-4 text-gold/70" strokeWidth={1.2} />
      </div>
    </section>
  );
}

/* -------------------------------- Sections ------------------------------- */

function Marquee() {
  const items = [
    "22K Hand-Drawn Gold",
    "Polki & Uncut Diamonds",
    "GIA Certified Solitaires",
    "Bespoke Commissions",
    "Lifetime Buyback",
    "Temple Repoussé",
  ];
  return (
    <div className="overflow-hidden border-y border-gold/15 py-6">
      <div className="animate-marquee flex w-max gap-14">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-14 font-display text-2xl whitespace-nowrap text-ivory/35 sm:text-3xl"
          >
            {t}
            <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function FeaturedCollections() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-6 py-28 lg:px-12 lg:py-40">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <p className="eyebrow">Featured Houses</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] text-ivory sm:text-7xl">
            Three chapters of a single archive.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="max-w-lg font-serif text-xl text-ivory/60 lg:ml-auto">
            Bridal, solitaire and heritage gold — each with its own bench, its own artisans and its
            own certification protocol.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {COLLECTIONS.map((c, i) => (
          <Reveal key={c.slug} delay={i * 120}>
            <Link
              to="/collections"
              className="group luxe-hover relative block h-full overflow-hidden border border-gold/15 hover:-translate-y-2 hover:border-gold/50 hover:shadow-luxe"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  src={collectionImages[c.slug]}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[oklch(0.11_0.004_60)] via-[oklch(0.11_0.004_60)]/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="font-sans text-[0.58rem] tracking-[0.3em] text-gold uppercase">
                  {c.pieces} pieces · from {c.from}
                </p>
                <h3 className="mt-3 font-display text-3xl text-ivory">{c.name}</h3>
                <p className="mt-2 max-w-xs font-serif text-lg text-ivory/60">{c.tagline}</p>
                <span className="mt-6 inline-block h-px w-0 bg-gold transition-all duration-700 group-hover:w-24" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CraftStory() {
  return (
    <section className="relative overflow-hidden bg-mesh py-28 lg:py-40">
      <div className="mx-auto grid w-full max-w-[1600px] gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-12">
        <Reveal>
          <div className="relative">
            <img
              src={craftImg}
              alt="Master jeweller setting a diamond into a gold ring"
              loading="lazy"
              className="aspect-4/3 w-full border border-gold/15 object-cover"
            />
            <div className="glass-panel absolute -right-4 -bottom-10 hidden max-w-[220px] p-6 sm:block">
              <p className="font-display text-4xl text-gold-gradient">
                <CountUp value={11} />
              </p>
              <p className="mt-2 font-sans text-[0.6rem] tracking-[0.24em] text-ivory/60 uppercase">
                Weeks on a single temple haram
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <p className="eyebrow">The Atelier</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.03] text-ivory sm:text-6xl">
            Nothing here is finished by a machine.
          </h2>
          <p className="mt-8 font-serif text-xl leading-relaxed text-ivory/65">
            Graphite sketch, hand-carved wax, vacuum cast, raised from the reverse by Nakashi
            artisans, set under a 10× loupe, polished across nine stages — then, and only then,
            hallmarked.
          </p>
          <div className="mt-10 grid gap-px border border-gold/12 bg-gold/12 sm:grid-cols-3">
            {[
              ["07", "Bench stages"],
              ["42", "Master artisans"],
              ["10×", "Loupe inspection"],
            ].map(([v, l]) => (
              <div key={l} className="bg-background px-6 py-6">
                <p className="font-display text-3xl text-gold">{v}</p>
                <p className="mt-1 font-sans text-[0.58rem] tracking-[0.22em] text-ivory/50 uppercase">
                  {l}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <MagneticButton to="/craftsmanship" variant="ghost">
              Inside the atelier
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Bestsellers() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-6 py-28 lg:px-12 lg:py-40">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Best Sellers & New Arrivals</p>
            <h2 className="mt-6 font-display text-5xl text-ivory sm:text-6xl">The signatures</h2>
          </div>
          <MagneticButton to="/collections" variant="ghost">
            View all pieces
          </MagneticButton>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-px border border-gold/12 bg-gold/12 sm:grid-cols-2 xl:grid-cols-4">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <article className="group relative h-full bg-background p-8 transition-colors duration-700 hover:bg-card">
              <div className="relative mb-8 aspect-square overflow-hidden">
                <img
                  src={
                    i % 3 === 0 ? bridal : i % 3 === 1 ? diamondImg : goldImg
                  }
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-115"
                />
                <span className="glass-panel absolute top-3 left-3 px-3 py-1.5 font-sans text-[0.5rem] tracking-[0.24em] text-gold uppercase">
                  {i < 2 ? "Best seller" : "New arrival"}
                </span>
              </div>
              <p className="font-sans text-[0.55rem] tracking-[0.3em] text-gold/70 uppercase">
                {p.house}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-snug text-ivory">{p.name}</h3>
              <p className="mt-3 font-sans text-xs leading-relaxed text-ivory/50">{p.spec}</p>
              <p className="mt-1 font-sans text-xs text-ivory/35">{p.cert}</p>
              <p className="mt-6 font-display text-2xl text-gold-gradient">{p.price}</p>
              <p className="mt-1 font-sans text-[0.66rem] text-ivory/45">{p.emi}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="border-y border-gold/12 bg-mesh py-28 lg:py-36">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        <Reveal>
          <p className="eyebrow">Why the Maison</p>
          <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.04] text-ivory sm:text-6xl">
            Service that behaves like a private bank, not a shop.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group luxe-hover glass-panel h-full p-8 hover:-translate-y-2 hover:border-gold/50">
                <span className="font-display text-4xl text-gold/30 transition-colors duration-700 group-hover:text-gold/80">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl text-ivory">{s.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-ivory/55">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-20 grid gap-px border border-gold/12 bg-gold/12 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background px-8 py-12 text-center">
              <p className="font-display text-5xl text-gold-gradient">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-4 font-sans text-[0.58rem] tracking-[0.26em] text-ivory/55 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, []);
  const item = TESTIMONIALS[active]!;

  return (
    <section className="mx-auto w-full max-w-[1600px] px-6 py-28 lg:px-12 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow">Client Stories</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.04] text-ivory sm:text-6xl">
            4.9 across 2,841 verified reviews.
          </h2>
          <div className="mt-8 flex gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <figure className="glass-panel relative p-10 sm:p-14">
            <blockquote className="font-serif text-2xl leading-relaxed text-ivory/85 sm:text-3xl">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-10 flex flex-wrap items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/40 font-display text-lg text-gold">
                {item.name.charAt(0)}
              </span>
              <span className="min-w-0">
                <span className="block font-sans text-sm text-ivory">{item.name}</span>
                <span className="block font-sans text-[0.62rem] tracking-[0.2em] text-gold/80 uppercase">
                  Verified buyer · {item.city} · {item.piece}
                </span>
              </span>
            </figcaption>
            <div className="mt-10 flex gap-3">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show review from ${t.name}`}
                  onClick={() => setActive(i)}
                  className={`h-px w-14 transition-colors duration-500 ${
                    i === active ? "bg-gold" : "bg-gold/25"
                  }`}
                />
              ))}
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-6 pb-28 lg:px-12 lg:pb-40">
      <Reveal>
        <p className="eyebrow">The Journal</p>
        <h2 className="mt-6 font-display text-5xl text-ivory sm:text-6xl">Notes from the bench</h2>
      </Reveal>
      <div className="mt-14 grid gap-px border border-gold/12 bg-gold/12 lg:grid-cols-3">
        {JOURNAL.map((j, i) => (
          <Reveal key={j.title} delay={i * 100}>
            <article className="group h-full bg-background p-10 transition-colors duration-700 hover:bg-card">
              <p className="font-sans text-[0.55rem] tracking-[0.3em] text-gold uppercase">
                {j.tag}
              </p>
              <h3 className="mt-6 font-display text-3xl leading-snug text-ivory">{j.title}</h3>
              <p className="mt-8 font-sans text-[0.68rem] tracking-[0.18em] text-ivory/40 uppercase">
                {j.date} · {j.read}
              </p>
              <span className="mt-6 inline-block h-px w-10 bg-gold/40 transition-all duration-700 group-hover:w-24 group-hover:bg-gold" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-gold/12 py-28 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1600px] gap-16 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
        <Reveal>
          <p className="eyebrow">Answers</p>
          <h2 className="mt-6 font-display text-5xl text-ivory sm:text-6xl">
            Everything, in writing.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="divide-y divide-gold/12 border-y border-gold/12">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-display text-xl text-ivory sm:text-2xl">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center border border-gold/35 text-gold">
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-700 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-7 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="max-w-2xl overflow-hidden font-sans leading-relaxed text-ivory/60">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-44">
      <GoldParticles density={50} />
      <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">The Invitation</p>
          <h2 className="mt-8 font-display text-5xl leading-[1.02] text-ivory sm:text-7xl">
            One hour. One tray.
            <br />
            <span className="italic text-gold-gradient">Curated entirely for you.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl font-serif text-xl text-ivory/60">
            Private salon appointments at Kala Ghoda, or a secured home viewing in Mumbai, Delhi,
            Chennai and Bengaluru.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <MagneticButton to="/contact">Book your appointment</MagneticButton>
            <MagneticButton href="tel:+912261234567" variant="ghost">
              +91 22 6123 4567
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <FeaturedCollections />
      <CraftStory />
      <Bestsellers />
      <Services />
      <Testimonials />
      <Journal />
      <Faq />
      <FinalCta />
    </SiteLayout>
  );
}
