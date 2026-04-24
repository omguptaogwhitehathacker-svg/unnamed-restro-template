import { createFileRoute } from "@tanstack/react-router";
import { Parallax } from "@/components/Parallax";
import { useState } from "react";
import { Cake, Heart, Briefcase, Users, Calendar, Check } from "lucide-react";
import reservationsTable from "@/assets/reservations-table.jpg";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Roastery & Co" },
      {
        name: "description",
        content:
          "Reserve a table at Roastery & Co for birthdays, dates, business meetings or private events in Bangalore.",
      },
      { property: "og:title", content: "Reservations — Roastery & Co" },
      {
        property: "og:description",
        content: "Reserve a table for any occasion in Bangalore.",
      },
      { property: "og:image", content: reservationsTable },
      { name: "twitter:image", content: reservationsTable },
    ],
  }),
  component: ReservationsPage,
});

const occasions = [
  { icon: Heart, title: "Date Night", text: "A candle-lit corner table with our reserve flight." },
  { icon: Cake, title: "Birthdays", text: "We'll handle the cake, the playlist and the candles." },
  { icon: Briefcase, title: "Business Meetings", text: "Quiet nooks with reliable Wi-Fi and bottomless brews." },
  { icon: Users, title: "Private Events", text: "Book the whole space — up to 40 guests." },
];

function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    occasion: "Date Night",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Parallax image={reservationsTable} height="min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Reservations</p>
          <h1 className="text-5xl md:text-7xl font-display">
            Set the <span className="text-gradient-warm">table</span>
          </h1>
          <p className="mt-4 text-foreground/80 max-w-xl mx-auto">
            Tell us the occasion. We'll take care of the rest.
          </p>
        </div>
      </Parallax>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">For every occasion</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {occasions.map((o) => (
              <div key={o.title} className="glass-card rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <o.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-2">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto glass-card rounded-3xl p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-display">Book your table</h2>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display mb-2">Reservation requested</h3>
              <p className="text-muted-foreground">
                We'll confirm your booking on WhatsApp within the hour.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="form-input"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="form-input"
                />
              </Field>
              <Field label="Phone">
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="form-input"
                />
              </Field>
              <Field label="Guests">
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="form-input"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Date">
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="form-input"
                />
              </Field>
              <Field label="Time">
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="form-input"
                />
              </Field>
              <Field label="Occasion" full>
                <select
                  value={form.occasion}
                  onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                  className="form-input"
                >
                  {occasions.map((o) => (
                    <option key={o.title}>{o.title}</option>
                  ))}
                  <option>Just coffee</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Special requests" full>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="form-input resize-none"
                />
              </Field>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-warm)]"
                >
                  Request reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          background: var(--color-input);
          border: 1px solid var(--color-border);
          border-radius: 0.6rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          transition: border-color 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }
      `}</style>
    </>
  );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
