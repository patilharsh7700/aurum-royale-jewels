import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import bridal from "@/assets/collection-bridal.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Book a Private Appointment | Aurum Royale Jewels, Mumbai" },
      {
        name: "description",
        content:
          "Book a private jewellery viewing at the Aurum Royale flagship in Kala Ghoda, Mumbai. Call, WhatsApp or email our concierge for bridal, diamond and gold consultations.",
      },
      { property: "og:title", content: "Book an Appointment | Aurum Royale Jewels" },
      {
        property: "og:description",
        content: "Private showroom hours, home viewings and bespoke consultations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          name: "Aurum Royale Jewels",
          telephone: "+91-22-6123-4567",
          email: "atelier@aurumroyale.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "14 Rampart Row, Kala Ghoda, Fort",
            addressLocality: "Mumbai",
            postalCode: "400001",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 10:30-20:00",
        }),
      },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  interest: z.string().max(60),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

const FIELDS = [
  { id: "name", label: "Full name", type: "text" },
  { id: "email", label: "Email address", type: "email" },
  { id: "phone", label: "Phone / WhatsApp", type: "tel" },
] as const;

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(form));
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please review the highlighted fields.");
      return;
    }
    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Request received — our concierge will call within 4 working hours.");
      e.currentTarget?.reset?.();
    }, 900);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Private Client Concierge"
        title={"Reserve the\nsalon for an hour."}
        lede="Closed-door viewings, home consultations across four cities, and bespoke commissions — all begin with a single conversation."
        image={bridal}
      />

      <section className="mx-auto w-full max-w-[1600px] px-6 pb-32 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="glass-panel p-8 sm:p-12">
              <h2 className="font-display text-3xl text-ivory sm:text-4xl">Book an appointment</h2>
              <div className="mt-10 space-y-8">
                {FIELDS.map((f) => (
                  <div key={f.id} className="group relative">
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      placeholder=" "
                      aria-invalid={Boolean(errors[f.id])}
                      className="peer w-full border-b border-gold/25 bg-transparent pt-6 pb-2 font-sans text-base text-ivory transition-colors duration-500 focus:border-gold focus:outline-none"
                    />
                    <label
                      htmlFor={f.id}
                      className="pointer-events-none absolute top-6 left-0 font-sans text-sm text-ivory/45 transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.6rem] peer-focus:tracking-[0.24em] peer-focus:text-gold peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-[0.6rem] peer-not-placeholder-shown:tracking-[0.24em] peer-not-placeholder-shown:text-gold/70"
                    >
                      {f.label}
                    </label>
                    {errors[f.id] && (
                      <p className="mt-2 font-sans text-xs text-rose-gold">{errors[f.id]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="interest"
                    className="font-sans text-[0.6rem] uppercase tracking-[0.24em] text-gold/70"
                  >
                    Interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue="Bridal"
                    className="mt-3 w-full border-b border-gold/25 bg-transparent py-3 font-sans text-base text-ivory focus:border-gold focus:outline-none [&>option]:bg-card"
                  >
                    {["Bridal", "Diamond solitaire", "22K gold heritage", "Bespoke commission", "Gifting"].map(
                      (o) => (
                        <option key={o}>{o}</option>
                      ),
                    )}
                  </select>
                </div>

                <div className="group relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder=" "
                    aria-invalid={Boolean(errors["message"])}
                    className="peer w-full resize-none border-b border-gold/25 bg-transparent pt-6 pb-2 font-sans text-base text-ivory focus:border-gold focus:outline-none"
                  />
                  <label
                    htmlFor="message"
                    className="pointer-events-none absolute top-6 left-0 font-sans text-sm text-ivory/45 transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.6rem] peer-focus:tracking-[0.24em] peer-focus:text-gold peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-[0.6rem] peer-not-placeholder-shown:tracking-[0.24em] peer-not-placeholder-shown:text-gold/70"
                  >
                    What are you looking for?
                  </label>
                  {errors["message"] && (
                    <p className="mt-2 font-sans text-xs text-rose-gold">{errors["message"]}</p>
                  )}
                </div>
              </div>
              <div className="mt-10">
                <MagneticButton type="submit">
                  {sending ? "Sending…" : "Request appointment"}
                </MagneticButton>
              </div>
            </form>
          </Reveal>

          <Reveal delay={140} className="space-y-10">
            <div className="glass-panel p-8">
              <p className="eyebrow">Flagship Boutique</p>
              <ul className="mt-6 space-y-5 font-serif text-lg text-ivory/75">
                <li className="flex gap-4">
                  <MapPin className="mt-1.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.3} />
                  14 Rampart Row, Kala Ghoda, Fort, Mumbai 400001
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-1.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.3} />
                  Mon–Sat · 10:30 – 20:00 · Sunday by appointment
                </li>
                <li>
                  <a href="tel:+912261234567" className="flex gap-4 hover:text-gold">
                    <Phone className="mt-1.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.3} />
                    +91 22 6123 4567
                  </a>
                </li>
                <li>
                  <a href="mailto:atelier@aurumroyale.com" className="flex gap-4 hover:text-gold">
                    <Mail className="mt-1.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.3} />
                    atelier@aurumroyale.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/912261234567"
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-4 hover:text-gold"
                  >
                    <MessageCircle className="mt-1.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.3} />
                    WhatsApp the concierge
                  </a>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden border border-gold/15">
              <iframe
                title="Aurum Royale Jewels flagship boutique location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.828%2C18.923%2C72.836%2C18.932&layer=mapnik"
                className="h-80 w-full grayscale-[0.6]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}