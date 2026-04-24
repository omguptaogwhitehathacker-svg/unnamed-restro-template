import { createFileRoute } from "@tanstack/react-router";
import { Parallax } from "@/components/Parallax";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import contactStorefront from "@/assets/contact-storefront.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Roastery & Co" },
      {
        name: "description",
        content:
          "Visit Roastery & Co in Indiranagar, Bangalore. Get in touch for events, partnerships or just to say hello.",
      },
      { property: "og:title", content: "Contact — Roastery & Co" },
      { property: "og:description", content: "Visit our Indiranagar coffee house in Bangalore." },
      { property: "og:image", content: contactStorefront },
      { name: "twitter:image", content: contactStorefront },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Parallax image={contactStorefront} height="min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Get in touch</p>
          <h1 className="text-5xl md:text-7xl font-display">
            Drop us a <span className="text-gradient-warm">line</span>
          </h1>
        </div>
      </Parallax>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display mb-2">Find us</h2>
            <p className="text-muted-foreground max-w-md">
              Tucked into a quiet corner of 12th Main, two minutes from the Indiranagar metro.
            </p>

            {[
              { icon: MapPin, title: "Address", text: "342, 12th Main, HAL 2nd Stage,\nIndiranagar, Bangalore 560038" },
              { icon: Phone, title: "Call", text: "+91 80 4567 8900" },
              { icon: Mail, title: "Email", text: "hello@roasteryandco.in" },
              { icon: Clock, title: "Hours", text: "Mon – Sun · 7:00 am – 11:00 pm" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden border border-border h-64 mt-6">
              <iframe
                title="Roastery & Co location"
                src="https://www.google.com/maps?q=Indiranagar,Bangalore&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.7)" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="glass-card rounded-3xl p-6 sm:p-10 h-fit">
            <h2 className="text-2xl md:text-3xl font-display mb-6">Send a message</h2>
            {sent ? (
              <p className="text-foreground/85">
                Thank you — we'll be in touch within one business day. ☕
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-4"
              >
                <FormField label="Your name">
                  <input required className="contact-input" />
                </FormField>
                <FormField label="Email">
                  <input type="email" required className="contact-input" />
                </FormField>
                <FormField label="Subject">
                  <input className="contact-input" />
                </FormField>
                <FormField label="Message">
                  <textarea rows={5} required className="contact-input resize-none" />
                </FormField>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-warm)]"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .contact-input {
          width: 100%;
          background: var(--color-input);
          border: 1px solid var(--color-border);
          border-radius: 0.6rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          transition: border-color 0.2s;
        }
        .contact-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }
      `}</style>
    </>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
