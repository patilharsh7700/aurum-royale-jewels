import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { JOURNAL } from "@/lib/site-data";
import craftsmanship from "@/assets/craftsmanship.jpg";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () => ({
    meta: [
      { title: "The Journal — Gemmology, Heritage & Bridal Notes | Aurum Royale" },
      {
        name: "description",
        content:
          "Notes from the Aurum Royale bench: how to read a diamond certificate, the vanishing art of repoussé temple gold, and how to build a bridal trousseau properly.",
      },
      { property: "og:title", content: "The Journal | Aurum Royale Jewels" },
      {
        property: "og:description",
        content: "Essays on gemmology, heritage goldsmithing and bridal jewellery from our atelier.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/journal" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
});

function JournalPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Journal"
        title={"Notes from\nthe bench."}
        lede="Long-form writing from our gemmologists and master artisans — on stones, on metal, and on the slow way of buying jewellery well."
        image={craftsmanship}
      />

      <section className="mx-auto w-full max-w-[1600px] px-6 pb-32 lg:px-12">
        <div className="grid gap-px border border-gold/12 bg-gold/12 lg:grid-cols-3">
          {JOURNAL.map((j, i) => (
            <Reveal key={j.slug} delay={i * 100}>
              <Link
                to="/journal/$slug"
                params={{ slug: j.slug }}
                className="group flex h-full flex-col bg-background p-10 transition-colors duration-700 hover:bg-card"
              >
                <p className="font-sans text-[0.55rem] uppercase tracking-[0.3em] text-gold">
                  {j.tag}
                </p>
                <h2 className="mt-6 font-display text-3xl leading-snug text-ivory">{j.title}</h2>
                <p className="mt-6 font-sans text-sm leading-relaxed text-ivory/55">{j.excerpt}</p>
                <p className="mt-auto pt-8 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-ivory/40">
                  {j.date} · {j.read}
                </p>
                <span className="mt-6 inline-block h-px w-10 bg-gold/40 transition-all duration-700 group-hover:w-24 group-hover:bg-gold" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
