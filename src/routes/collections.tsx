import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { COLLECTIONS, PRODUCTS } from "@/lib/site-data";
import bridal from "@/assets/collection-bridal.jpg";
import diamond from "@/assets/collection-diamond.jpg";
import gold from "@/assets/collection-gold.jpg";

const images: Record<string, string> = { bridal, diamond, gold };

export const Route = createFileRoute("/collections")({
  component: CollectionsPage,
  head: () => ({
    meta: [
      { title: "Collections — Bridal, Diamond & Gold Jewellery | Aurum Royale" },
      {
        name: "description",
        content:
          "Explore Aurum Royale collections: Vivaha bridal jewellery, Lumière certified diamond solitaires and Aurea 22K gold heritage necklaces, bangles and earrings.",
      },
      { property: "og:title", content: "Collections | Aurum Royale Jewels" },
      {
        property: "og:description",
        content: "Bridal, diamond and 22K gold jewellery collections, hallmarked and certified.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/collections" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/collections" }],
  }),
});

function CollectionsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Maison Collections"
        title={"Three houses,\none obsession."}
        lede="Each Aurum Royale house answers a different life moment — the wedding, the promise, the inheritance. Every piece is hallmarked, certified and hand-finished at our Coimbatore atelier."
        image={bridal}
      />

      <section className="mx-auto w-full max-w-[1600px] px-6 pb-32 lg:px-12">
        <div className="space-y-24 lg:space-y-40">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.slug}>
              <article
                className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20 ${
                  i % 2 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="group relative overflow-hidden border border-gold/15">
                  <img
                    src={images[c.slug]}
                    alt={c.name}
                    loading="lazy"
                    className="aspect-4/5 w-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-110"
                  />
                  <figcaption className="glass-panel absolute bottom-5 left-5 px-5 py-3 font-sans text-[0.6rem] uppercase tracking-[0.28em] text-gold">
                    {c.pieces} pieces · from {c.from}
                  </figcaption>
                </figure>
                <div>
                  <p className="eyebrow">Chapter {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-5 font-display text-4xl leading-tight text-ivory sm:text-6xl">
                    {c.name}
                  </h2>
                  <p className="mt-6 font-serif text-2xl text-gold/85">{c.tagline}</p>
                  <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ivory/60">
                    {c.note}
                  </p>
                  <div className="mt-10">
                    <MagneticButton to="/contact" variant="ghost">
                      Request the lookbook
                    </MagneticButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/12 bg-mesh py-28">
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
          <Reveal>
            <h2 className="font-display text-4xl text-ivory sm:text-5xl">Signature pieces</h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-gold/12 bg-gold/12 sm:grid-cols-2 xl:grid-cols-4">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <article className="group h-full bg-background p-8 transition-colors duration-700 hover:bg-card">
                  <p className="font-sans text-[0.58rem] uppercase tracking-[0.3em] text-gold/70">
                    {p.house}
                  </p>
                  <h3 className="mt-4 font-display text-2xl leading-snug text-ivory">{p.name}</h3>
                  <p className="mt-4 font-sans text-xs leading-relaxed text-ivory/50">{p.spec}</p>
                  <p className="mt-2 font-sans text-xs text-ivory/40">{p.cert}</p>
                  <div className="hairline my-6 opacity-40" />
                  <p className="font-display text-2xl text-gold-gradient">{p.price}</p>
                  <p className="mt-1 font-sans text-[0.68rem] tracking-wide text-ivory/45">
                    {p.emi}
                  </p>
                  <span className="mt-6 inline-block font-sans text-[0.6rem] uppercase tracking-[0.28em] text-ivory/60 transition-colors duration-500 group-hover:text-gold">
                    Enquire →
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}