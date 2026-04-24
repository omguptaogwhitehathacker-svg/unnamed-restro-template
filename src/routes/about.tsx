import { createFileRoute } from "@tanstack/react-router";
import { Parallax } from "@/components/Parallax";
import aboutBeans from "@/assets/about-beans.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Roastery & Co" },
      {
        name: "description",
        content:
          "The story behind Roastery & Co — a small Bangalore coffee house pouring single origin beans from Chikmagalur with care.",
      },
      { property: "og:title", content: "About — Roastery & Co" },
      {
        property: "og:description",
        content: "The story behind our small Bangalore coffee house.",
      },
      { property: "og:image", content: aboutBeans },
      { name: "twitter:image", content: aboutBeans },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Parallax image={aboutBeans} height="min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-display">
            From bean to <span className="text-gradient-warm">brew</span>
          </h1>
        </div>
      </Parallax>

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6 text-foreground/85 leading-relaxed">
          <p className="text-lg">
            Roastery &amp; Co began in 2018 in a tiny corner of Indiranagar with one stubborn
            belief — that coffee deserves time. Time in the soil, time on the roaster, time in the
            cup, and most importantly, time with the people drinking it.
          </p>
          <p>
            We work directly with smallholder farmers across Chikmagalur, Coorg and Sakleshpur —
            paying above-market prices for beans we believe in. Every harvest is cupped, scored and
            roasted in-house in small batches, never older than seven days when it reaches you.
          </p>
          <p>
            Our space is intentionally dim — warm Edison bulbs, exposed brick, well-worn timber —
            because we wanted somewhere you could disappear for an afternoon, finish a chapter,
            close a deal, or fall in love over a flat white.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
          {[
            { n: "07", l: "Years brewing" },
            { n: "24", l: "Partner farms" },
            { n: "1.2M", l: "Cups poured" },
          ].map((s) => (
            <div key={s.l} className="glass-card rounded-2xl p-8 text-center">
              <p className="text-5xl font-display text-gradient-warm mb-2">{s.n}</p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
