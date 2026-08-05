import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import craftsmanship from "@/assets/craftsmanship.jpg";
import diamond from "@/assets/collection-diamond.jpg";

export const Route = createFileRoute("/craftsmanship")({
  component: CraftPage,
  head: () => ({
    meta: [
      { title: "Craftsmanship & Certification | Aurum Royale Jewels" },
      {
        name: "description",
        content:
          "Inside the Aurum Royale atelier: hand sketching, wax carving, 22K gold repoussé, diamond setting, BIS 916 hallmarking and GIA/IGI diamond certification.",
      },
      { property: "og:title", content: "Craftsmanship | Aurum Royale Jewels" },
      {
        property: "og:description",
        content: "Seven stages from sketch to certified piece, by 42 master artisans.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/craftsmanship" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/craftsmanship" }],
  }),
});

const STAGES = [
  { n: "01", t: "Hand sketch", d: "Graphite on vellum. Nothing enters CAD until it has survived the pencil." },
  { n: "02", t: "Wax carving", d: "A solid wax master is cut by hand so weight and drape are judged on the body, not the screen." },
  { n: "03", t: "Casting", d: "Vacuum-cast 22K and 18K alloys milled in-house to a fixed karat, batch-assayed." },
  { n: "04", t: "Repoussé & engraving", d: "Nakashi artisans raise temple motifs from the reverse — up to eleven weeks per haram." },
  { n: "05", t: "Stone setting", d: "Micro-pavé and prong work under 10× loupe. Every girdle inspected before closing." },
  { n: "06", t: "Finishing", d: "Nine-stage polish, rhodium or rose plating, ultrasonic and steam clean." },
  { n: "07", t: "Certification", d: "BIS 916 hallmark with HUID, plus GIA or IGI grading issued in the client's name." },
];

function CraftPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Atelier"
        title={"Eleven weeks\nfor one necklace."}
        lede="Forty-two artisans, one workshop floor in Coimbatore, and a rule that has not changed since 1952: no piece leaves the bench until the maker would wear it themselves."
        image={craftsmanship}
      />

      <section className="mx-auto w-full max-w-[1600px] px-6 pb-32 lg:px-12">
        <ol className="grid gap-px border border-gold/12 bg-gold/12 md:grid-cols-2 xl:grid-cols-3">
          {STAGES.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <li className="group h-full bg-background p-10 transition-colors duration-700 hover:bg-card">
                <span className="font-display text-5xl text-gold/25 transition-colors duration-700 group-hover:text-gold/70">
                  {s.n}
                </span>
                <h2 className="mt-6 font-display text-2xl text-ivory">{s.t}</h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ivory/55">{s.d}</p>
              </li>
            </Reveal>
          ))}
          <Reveal delay={520}>
            <li className="relative h-full min-h-[260px] overflow-hidden bg-background">
              <img
                src={diamond}
                alt="Certified solitaire diamond ring"
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-transform duration-[1.8s] hover:scale-110"
              />
            </li>
          </Reveal>
        </ol>

        <Reveal className="mt-24">
          <div className="glass-panel flex flex-col items-start gap-8 p-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-3xl text-ivory sm:text-4xl">
                Commission something that does not exist yet.
              </h2>
              <p className="mt-4 max-w-xl font-sans text-ivory/60">
                Sketches in 7 days, CAD in 14, delivery in 45–60. Your bench photographs arrive every
                Friday.
              </p>
            </div>
            <MagneticButton to="/contact">Begin a commission</MagneticButton>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}