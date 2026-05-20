import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, Target, Award, Users, Sparkles, Building2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import aboutImg from "@/assets/about.jpg";
import d1 from "@/assets/director-1.jpg";
import d2 from "@/assets/director-2.jpg";
import d3 from "@/assets/director-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — V.P. Singhal & Co. ISLA Pvt. Ltd." },
      {
        name: "description",
        content:
          "Discover V.P. Singhal & Co. — our history, leadership, vision and pan-India presence in insurance surveying and corporate consultancy.",
      },
    ],
  }),
  component: AboutPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const directors = [
  {
    name: "Ved Prakash Singhal",
    role: "Founder & Chairman",
    bio: "A veteran of the Indian insurance industry, Ved Prakash Singhal has dedicated four decades to building institutional trust in loss assessment and corporate advisory.",
    expertise: ["Insurance Surveying", "Loss Assessment", "Strategic Leadership"],
    img: d1,
  },
  {
    name: "Piyush Singhal",
    role: "Managing Director",
    bio: "Piyush leads the firm's modernisation agenda — driving technology-enabled service delivery, group strategy and the expansion of the Adwiti practice.",
    expertise: ["Corporate Strategy", "Tax & Audit", "Digital Operations"],
    img: d2,
  },
  {
    name: "Rakesh Kumar",
    role: "Director — Technical",
    bio: "Rakesh oversees complex claims, technical advisory and the firm's specialist surveying engagements across motor, industrial and marine portfolios.",
    expertise: ["Claims Management", "Technical Advisory", "Arbitration"],
    img: d3,
  },
];

const timeline = [
  { y: "2005", t: "Salvage Managers founded", d: "India's first CVC-compliant e-Salvage settlement & auction agency." },
  { y: "2010", t: "Pan-India expansion", d: "Operations scale beyond Delhi NCR to cover all major Indian states." },
  { y: "2015", t: "Adwiti Technocrats launched", d: "Specialised practice for accounting, audit and tax consultancy." },
  { y: "2020", t: "Claims Mitra platform", d: "Technology-led MIS and field network platform goes live." },
  { y: "2024", t: "1000+ Cr salvage settled", d: "Milestone in transparent, efficient industry settlements." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Firm"
        title="A legacy of trust, built on professional excellence."
        subtitle="Headquartered in New Delhi with branch operations in Noida, V.P. Singhal & Co. has served India's insurance and corporate sector for over two decades."
      />

      {/* OVERVIEW */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="absolute -inset-4 bg-gold/10 rounded-2xl blur-2xl" />
            <img
              src={aboutImg}
              alt="Corporate boardroom"
              className="relative rounded-2xl shadow-elegant w-full object-cover h-[520px]"
              loading="lazy"
              width={1600}
              height={1067}
            />
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
              Two decades of disciplined, conflict-free practice.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From a specialist surveying practice, V.P. Singhal &amp; Company has
              grown into a multi-disciplinary group serving India's leading
              insurers, corporates and public sector enterprises. Our model
              brings together licensed surveyors, chartered accountants,
              advocates, engineers, doctors and translators — a true
              professional ecosystem.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our subsidiaries — Salvage Managers, Claims Mitra and Adwiti
              Technocrats — extend our capability across salvage settlement,
              claims technology and corporate financial services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VISION MISSION VALUES */}
      <section className="py-20 px-6 lg:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              i: Eye,
              t: "Vision",
              d: "To be India's most trusted name in insurance surveying and corporate advisory — synonymous with integrity, expertise and client outcomes.",
            },
            {
              i: Target,
              t: "Mission",
              d: "Deliver transparent, methodical and timely professional services that protect the interests of insurers, corporates and policyholders alike.",
            },
            {
              i: Award,
              t: "Values",
              d: "Independence. Confidentiality. Technical depth. Disciplined process. Continuous learning. Client-first thinking in every engagement.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-elegant transition"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-navy flex items-center justify-center mb-5">
                <c.i className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">{c.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Leadership</span>
              <div className="gold-divider" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">Our Board of Directors</h2>
            <p className="mt-5 text-muted-foreground">
              Decades of combined experience guiding the firm's professional standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {directors.map((d, i) => (
              <motion.div
                key={d.name}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="relative h-80 overflow-hidden bg-secondary">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={768}
                    height={896}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy/80 to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-bold text-primary">{d.name}</h3>
                  <div className="text-gold text-xs font-semibold tracking-widest uppercase mt-1">{d.role}</div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{d.bio}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {d.expertise.map((e) => (
                      <span key={e} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-primary font-medium">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6 lg:px-10 bg-gradient-navy text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Milestones</span>
              <div className="gold-divider" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">Our Growth Journey</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/40" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.y}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative mb-10 md:mb-14 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
              >
                <div className={`absolute top-2 w-3 h-3 rounded-full bg-gold ring-4 ring-gold/20 ${i % 2 === 0 ? "left-2.5 md:left-auto md:-right-1.5" : "left-2.5 md:-left-1.5"}`} />
                <div className="ml-10 md:ml-0 glass-dark rounded-xl p-6 border border-white/10">
                  <div className="text-gold font-display font-bold text-2xl">{t.y}</div>
                  <div className="font-display text-lg mt-1">{t.t}</div>
                  <p className="mt-2 text-sm text-white/70">{t.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAN INDIA */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { i: Building2, t: "Headquarters", d: "Corporate Office, New Delhi" },
            { i: Sparkles, t: "Branch", d: "Noida Operations Centre" },
            { i: Users, t: "Network", d: "Empanelled professionals across 28 states" },
          ].map((c, i) => (
            <motion.div key={c.t} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="p-8 border border-border rounded-2xl bg-card">
              <c.i className="w-9 h-9 mx-auto text-gold" />
              <div className="font-display text-xl font-semibold text-primary mt-4">{c.t}</div>
              <div className="text-sm text-muted-foreground mt-2">{c.d}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
