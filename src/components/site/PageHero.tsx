import { GoldParticles } from "./GoldParticles";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
};

/** Editorial inner-page hero: clip-path image reveal + gold dust. */
export function PageHero({ eyebrow, title, lede, image }: Props) {
  return (
    <section className="relative overflow-hidden bg-mesh pt-40 pb-24 lg:pt-56 lg:pb-32">
      <GoldParticles density={40} />
      <div className="relative mx-auto grid w-full max-w-[1600px] items-end gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div>
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl leading-[0.98] text-ivory sm:text-7xl lg:text-8xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed text-ivory/65 sm:text-2xl">
              {lede}
            </p>
          </Reveal>
        </div>
        <Reveal delay={320} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-gold/20">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[oklch(0.12_0.004_60)] via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}