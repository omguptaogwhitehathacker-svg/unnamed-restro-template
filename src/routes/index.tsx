import { createFileRoute, Link } from "@tanstack/react-router";
import { Parallax } from "@/components/Parallax";
import { Reviews } from "@/components/Reviews";
import { Coffee, Leaf, MapPin, ArrowRight } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";
import parallaxCoffee from "@/assets/parallax-coffee.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roastery & Co — Speciality Coffee in Bangalore" },
      {
        name: "description",
        content:
          "Slow brewed single origin coffee in Indiranagar, Bangalore. Cozy dark interiors, artisanal blends and reservations for every occasion.",
      },
      { property: "og:title", content: "Roastery & Co — Speciality Coffee in Bangalore" },
      {
        property: "og:description",
        content: "Cozy speciality coffee house in Indiranagar with single origin brews.",
      },
      { property: "og:image", content: heroCafe },
      { name: "twitter:image", content: heroCafe },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Parallax image={heroCafe} height="min-h-[92vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-5">
            Indiranagar · Bangalore
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display leading-[0.95] mb-6">
            Slow brewed.
            <br />
            <span className="text-gradient-warm">Soul warmed.</span>
          </h1>
          <p className="max-w-xl mx-auto text-base md:text-lg text-foreground/80 mb-8">
            A cozy speciality coffee house pouring single origin beans from the hills of Chikmagalur,
            crafted by people who care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-warm)]"
            >
              Reserve a table <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold hover:bg-foreground/5 transition"
            >
              Our story
            </Link>
          </div>
        </div>
      </Parallax>

      {/* Highlights */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Coffee,
              title: "Single Origin",
              text: "Hand-picked Arabica beans from Chikmagalur and Coorg, roasted in-house every week.",
            },
            {
              icon: Leaf,
              title: "Slow Crafted",
              text: "Pour-overs, siphons and cold brews — every cup is timed, weighed and made with intention.",
            },
            {
              icon: MapPin,
              title: "Cozy Corner",
              text: "Warm amber lights, exposed brick and quiet jazz — a respite from Bangalore's bustle.",
            },
          ].map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-7">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Parallax band */}
      <Parallax image={parallaxCoffee} height="min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display mb-4">
            "Coffee is a language in itself."
          </h2>
          <p className="text-muted-foreground">— Jackie Chan, and every barista at Roastery &amp; Co.</p>
        </div>
      </Parallax>

      <Reviews />

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto rounded-3xl glass-card p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-3">
            Save your seat by the window.
          </h2>
          <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
            Birthdays, dates, quiet meetings or just a perfect Sunday brunch — we'll set the table.
          </p>
          <Link
            to="/reservations"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
          >
            Make a reservation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
