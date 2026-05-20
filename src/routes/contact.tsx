import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Building2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — V.P. Singhal & Co. ISLA Pvt. Ltd." },
      {
        name: "description",
        content:
          "Reach V.P. Singhal & Co. at our New Delhi headquarters or Noida branch. Submit a corporate inquiry online.",
      },
    ],
  }),
  component: ContactPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with our team."
        subtitle="For new engagements, claims notifications or media queries, our offices are open across business hours."
      />

      {/* CONTACT INFO */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: MapPin, t: "Head Office", d: "Corporate Office, New Delhi, India" },
            { i: Building2, t: "Branch Office", d: "Noida, Uttar Pradesh, India" },
            { i: Phone, t: "Telephone", d: "+91 11 4000 0000" },
            { i: Mail, t: "Email", d: "contact@vpsinghal.com" },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-soft transition"
            >
              <div className="w-11 h-11 rounded-lg bg-gold/15 text-gold flex items-center justify-center">
                <c.i className="w-5 h-5" />
              </div>
              <div className="mt-4 text-xs tracking-widest uppercase text-muted-foreground">{c.t}</div>
              <div className="mt-1 font-medium text-foreground">{c.d}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
          <motion.div {...fadeUp} className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 md:p-10 shadow-soft">
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Inquiry Form</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-primary">Send a corporate inquiry</h2>
            <p className="mt-3 text-muted-foreground text-sm">We respond to corporate inquiries within one business day.</p>

            {sent ? (
              <div className="mt-8 p-6 rounded-xl bg-gold/10 border border-gold/30 text-primary">
                Thank you. Your inquiry has been received — our team will be in touch shortly.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-8 grid sm:grid-cols-2 gap-5"
              >
                {[
                  { id: "name", label: "Full Name", type: "text" },
                  { id: "company", label: "Company", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "phone", label: "Phone", type: "tel" },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col">
                    <label htmlFor={f.id} className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      maxLength={120}
                      className="px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2 flex flex-col">
                  <label htmlFor="subject" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    maxLength={160}
                    className="px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col">
                  <label htmlFor="message" className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    maxLength={2000}
                    className="px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition resize-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-navy-soft transition shadow-soft"
                  >
                    Submit Inquiry <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-gradient-navy text-white rounded-2xl p-8 shadow-elegant">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Business Hours</span>
              </div>
              <div className="space-y-2 text-sm text-white/85 mt-4">
                <div className="flex justify-between border-b border-white/10 pb-2"><span>Monday – Friday</span><span>9:30 — 18:30</span></div>
                <div className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span><span>10:00 — 14:00</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-gold">Closed</span></div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/65">
                For after-hours claims notifications, please contact our emergency desk.
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-soft h-[320px]">
              <iframe
                title="V.P. Singhal & Co. on map"
                src="https://www.google.com/maps?q=Connaught+Place,+New+Delhi&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
