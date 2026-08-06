import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { GoldParticles } from "@/components/site/GoldParticles";
import { MagneticButton } from "@/components/site/MagneticButton";
import { JOURNAL } from "@/lib/site-data";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = JOURNAL.find((j) => j.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable | Aurum Royale Jewels" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    const title = `${article.title} | Aurum Royale Journal`;
    return {
      meta: [
        { title },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/journal/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/journal/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            author: { "@type": "Organization", name: "Aurum Royale Jewels" },
            publisher: { "@type": "Organization", name: "Aurum Royale Jewels" },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: ArticleNotFound,
});

function ArticleNotFound() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-48 text-center">
        <p className="eyebrow">The Journal</p>
        <h1 className="mt-6 font-display text-5xl text-ivory">This entry has been archived.</h1>
        <div className="mt-10 flex justify-center">
          <MagneticButton to="/journal" variant="ghost">
            Back to the journal
          </MagneticButton>
        </div>
      </section>
    </SiteLayout>
  );
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const others = JOURNAL.filter((j) => j.slug !== article.slug);

  return (
    <SiteLayout>
      <article>
        <header className="relative overflow-hidden bg-mesh pt-40 pb-20 lg:pt-56 lg:pb-28">
          <GoldParticles density={32} />
          <div className="relative mx-auto w-full max-w-3xl px-6">
            <Reveal>
              <p className="eyebrow">{article.tag}</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-4xl leading-[1.05] text-ivory sm:text-6xl">
                {article.title}
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 font-sans text-[0.68rem] uppercase tracking-[0.24em] text-ivory/45">
                {article.date} · {article.read} read
              </p>
            </Reveal>
          </div>
        </header>

        <div className="mx-auto w-full max-w-3xl px-6 pb-24">
          <p className="font-serif text-2xl leading-relaxed text-gold/85">{article.excerpt}</p>
          <div className="hairline my-12 opacity-40" />
          <div className="space-y-8">
            {article.body.map((p: string) => (
              <Reveal key={p.slice(0, 24)}>
                <p className="font-sans text-base leading-[1.9] text-ivory/70">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16">
            <MagneticButton to="/contact">Book a private appointment</MagneticButton>
          </div>
        </div>

        <section className="border-t border-gold/12 py-24">
          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
            <h2 className="font-display text-3xl text-ivory sm:text-4xl">Continue reading</h2>
            <div className="mt-10 grid gap-px border border-gold/12 bg-gold/12 sm:grid-cols-2">
              {others.map((j) => (
                <Link
                  key={j.slug}
                  to="/journal/$slug"
                  params={{ slug: j.slug }}
                  className="group bg-background p-10 transition-colors duration-700 hover:bg-card"
                >
                  <p className="font-sans text-[0.55rem] uppercase tracking-[0.3em] text-gold">
                    {j.tag}
                  </p>
                  <h3 className="mt-5 font-display text-2xl leading-snug text-ivory">{j.title}</h3>
                  <span className="mt-6 inline-block h-px w-10 bg-gold/40 transition-all duration-700 group-hover:w-24 group-hover:bg-gold" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
