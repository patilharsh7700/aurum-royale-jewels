import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { STATS, AWARDS } from "@/lib/site-data";
import craftsmanship from "@/assets/craftsmanship.jpg";
import gold from "@/assets/collection-gold.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "The Maison — Heritage Since 1952 | Aurum Royale Jewels" },
      {
        name: "description",
        content:
          "Seventy-four years of Indian fine jewellery. The Aurum Royale story, founder's message, heritage, values, hallmark standards and awards.",
      },
      { property: "og:title", content: "The Maison | Aurum Royale Jewels" },
      {
        property: "og:description",
        content: "Heritage, values and certification standards of a 1952 jewellery house.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const VALUES = [
  { t: "Integrity of metal", d: "Every gram BIS 916 hallmarked with a traceable HUID. No exceptions, no negotiation." },
  { t: "Integrity of stone", d: "GIA or IGI papers issued in the client's name before the piece leaves the bench." },
  { t: "Integrity of hand", d: "No outsourced casting. 42 artisans, one atelier, signed work orders." },
  { t: "Integrity of price", d: "Making charges printed, wastage disclosed, buyback guaranteed in writing." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Established 1952"
        title={"A house built\nbench by bench."}
        lede="Aurum Royale began as a single goldsmith's bench in Fort, Bombay. Three generations later we still measure success the same way: by the piece that outlives the person who bought it."
        image={craftsmanship}
      />

      <section className="mx-auto w-full max-w-[1600px] px-6 pb-28 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <div className="glass-panel relative p-10">
              <p className="eyebrow">Founder's Message</p>
              <blockquote className="mt-8 font-serif text-2xl leading-relaxed text-ivory/85 sm:text-3xl">
                “My grandfather refused a royal commission because the client wanted 18K sold as 22K.
                We lost the order and kept the name. Seventy-four years on, the name is still the
                only asset that matters.”
              </blockquote>
              <p className="mt-8 font-sans text-[0.62rem] uppercase tracking-[0.3em] text-gold">
                Aditya Varma · Third-generation custodian
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-3xl text-ivory sm:text-4xl">Vision</h2>
                <p className="mt-4 font-sans leading-relaxed text-ivory/60">
                  To make Indian fine jewellery the global benchmark for craft, disclosure and
                  after-care — so that a piece bought in Mumbai is trusted in Milan.
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl text-ivory sm:text-4xl">Mission</h2>
                <p className="mt-4 font-sans leading-relaxed text-ivory/60">
                  Hand-finish every piece under one roof, certify every stone independently, and
                  guarantee lifetime care and buyback on every invoice we write.
                </p>
              </div>
              <img
                src={gold}
                alt="22K gold bangles from the Aurea Heritage collection"
                loading="lazy"
                className="aspect-16/10 w-full border border-gold/15 object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-28 grid gap-px border border-gold/12 bg-gold/12 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="h-full bg-background px-8 py-12 text-center">
                <p className="font-display text-5xl text-gold-gradient sm:text-6xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-4 font-sans text-[0.6rem] uppercase tracking-[0.28em] text-ivory/55">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-28 grid gap-10 lg:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 90}>
              <div className="group luxe-hover border-l border-gold/25 pl-8 hover:border-gold">
                <h3 className="font-display text-3xl text-ivory">{v.t}</h3>
                <p className="mt-3 max-w-md font-sans leading-relaxed text-ivory/55">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-28">
          <h2 className="font-display text-4xl text-ivory sm:text-5xl">Recognition</h2>
          <ul className="mt-10 space-y-6">
            {AWARDS.map((a) => (
              <li
                key={a}
                className="flex items-baseline gap-6 border-b border-gold/12 pb-6 font-serif text-xl text-ivory/70 sm:text-2xl"
              >
                <span className="font-sans text-[0.6rem] tracking-[0.3em] text-gold">◆</span>
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </SiteLayout>
  );
}