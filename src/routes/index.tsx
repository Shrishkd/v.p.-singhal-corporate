import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  Briefcase,
  LineChart,
  Building2,
  Gavel,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Award,
  Users,
  Factory,
  HeartHandshake,
  Car,
  Ship,
  Plane,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import patternImg from "@/assets/pattern.jpg";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "V.P. Singhal & Co. — Trusted Insurance Surveyors & Consultants" },
      {
        name: "description",
        content:
          "IRDA-approved insurance surveyors, loss assessors and business consultants with pan-India operations from New Delhi & Noida.",
      },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Corporate skyline at dusk"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                Since Inception · Pan India
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.05]">
              Trusted Insurance Surveyors &amp;{" "}
              <span className="text-gradient-gold">Business Consultants</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              Delivering transparency, efficiency and professional excellence across
              insurance, claims, consultancy and advisory services for India's most
              demanding enterprises.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-md bg-gold text-gold-foreground font-semibold shadow-elegant hover:brightness-105 transition"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-gold" /> IRDA Approved</div>
              <div className="flex items-center gap-2"><Award className="w-5 h-5 text-gold" /> CVC Compliant</div>
              <div className="flex items-center gap-2"><Globe2 className="w-5 h-5 text-gold" /> Pan India Presence</div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* STATS */}
      <section className="relative -mt-20 z-10 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto bg-card border border-border rounded-2xl shadow-elegant p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: 1000, s: "+ Cr", l: "Salvage Settled" },
            { v: 20, s: "+", l: "Years of Expertise" },
            { v: 500, s: "+", l: "Corporate Clients" },
            { v: 28, s: "", l: "States Covered" },
          ].map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.08 }} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary">
                <AnimatedCounter value={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm tracking-wide uppercase text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
              Building enduring trust in insurance and advisory.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              V.P. Singhal &amp; Company is a premier Insurance Surveyors, Loss
              Assessors and Business Consultancy firm headquartered in New Delhi
              with branch operations in Noida. For over two decades, we have
              served India's leading insurers, brokers and corporates with
              uncompromising integrity, technical depth and an unwavering client
              focus.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "End-to-end claims & loss assessment expertise",
                "Multi-disciplinary team of professionals",
                "CVC compliant, IRDA approved operations",
                "Technology-enabled service delivery",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition"
            >
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-gold/15 rounded-full blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border">
              <img src={patternImg} alt="" className="w-full h-[480px] object-cover" loading="lazy" width={1920} height={1080} />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-xl p-6 text-white">
                <div className="text-xs tracking-widest uppercase text-gold mb-2">Our Promise</div>
                <div className="font-display text-xl">Transparency. Efficiency. Excellence.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 lg:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">What We Do</span>
              <div className="gold-divider" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Comprehensive Professional Services
            </h2>
            <p className="mt-5 text-muted-foreground">
              A full spectrum of insurance, advisory and consultancy capabilities
              under one trusted name.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: ShieldCheck, t: "Insurance Surveying", d: "IRDA-licensed pre and post loss surveys across all classes." },
              { i: Scale, t: "Loss Assessment", d: "Independent, methodical quantification of insured losses." },
              { i: Briefcase, t: "Claims Consultancy", d: "End-to-end claims management for insurers and corporates." },
              { i: LineChart, t: "Technical Advisory", d: "Engineering, risk and operational technical opinions." },
              { i: Gavel, t: "Arbitration & Conciliation", d: "Neutral, expert-led dispute resolution support." },
              { i: Building2, t: "Business Consultancy", d: "Strategy, operations and management consulting." },
              { i: Sparkles, t: "Accounting & Tax", d: "Bookkeeping, audit and tax advisory via Adwiti." },
              { i: HeartHandshake, t: "Legal & Operational", d: "Operational advisory with legal coordination." },
            ].map((s, i) => (
              <motion.div
                key={s.t}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-card rounded-xl p-7 border border-border hover:border-gold/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-navy flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all">
                  <s.i className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-navy-soft transition"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SUBSIDIARIES */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Group Companies</span>
              <div className="gold-divider" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Our Products &amp; Subsidiaries
            </h2>
            <p className="mt-5 text-muted-foreground">
              An integrated group of specialised firms serving the insurance and
              financial ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                t: "Salvage Managers",
                d: "India's first CVC-compliant e-Salvage settlement & auction agency, serving the industry since 2005.",
                i: Factory,
              },
              {
                t: "Claims Mitra",
                d: "Technology platform supporting brokers and insurers with a pan-India professional network and live location services.",
                i: Briefcase,
              },
              {
                t: "Adwiti Technocrats",
                d: "Specialists in accounting, bookkeeping, auditing and tax consultancy for corporate clients.",
                i: LineChart,
              },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:shadow-elegant transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-navy flex items-center justify-center mb-6">
                    <c.i className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary">{c.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition"
                  >
                    Visit Website <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-6 lg:px-10 bg-gradient-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${patternImg})`, backgroundSize: "cover" }} />
        <div className="max-w-7xl mx-auto relative">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Sectors</span>
              <div className="gold-divider" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">Industries We Serve</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { i: Car, l: "Motor" },
              { i: Factory, l: "Industrial" },
              { i: Ship, l: "Marine" },
              { i: Plane, l: "Aviation" },
              { i: Building2, l: "Property" },
              { i: Users, l: "Liability" },
            ].map((x, i) => (
              <motion.div
                key={x.l}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-dark border border-white/10 rounded-xl p-6 text-center hover:border-gold/60 transition"
              >
                <x.i className="w-8 h-8 mx-auto text-gold" />
                <div className="mt-3 text-sm font-medium">{x.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight">
              The standard for professional surveying.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Clients return to us because we combine deep technical expertise
              with disciplined process and absolute discretion.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              { t: "Independent & Objective", d: "Conflict-free assessments backed by documented evidence." },
              { t: "Multi-disciplinary Team", d: "Surveyors, CAs, advocates, engineers, doctors and translators." },
              { t: "Technology Enabled", d: "Live location, digital documentation and real-time MIS." },
              { t: "Client Centric", d: "Dedicated relationship leads and transparent communication." },
            ].map((w, i) => (
              <motion.div
                key={w.t}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-7 border border-border rounded-xl bg-card hover:shadow-soft transition"
              >
                <div className="w-10 h-10 rounded-md bg-gold/15 text-gold flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">{w.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 lg:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Client Voices</span>
              <div className="gold-divider" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">Trusted by industry leaders</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "Their professionalism and turn-around time on complex marine claims is exceptional.", n: "Head of Claims", c: "Leading Insurer" },
              { q: "A trusted advisor — technically sound, ethical and always available.", n: "CFO", c: "Public Sector Corporate" },
              { q: "The Salvage Managers auction platform brought a level of transparency we hadn't seen before.", n: "Underwriting Director", c: "Multi-national Insurer" },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-elegant transition"
              >
                <div className="text-gold text-4xl font-display leading-none">"</div>
                <p className="mt-4 text-foreground/85 leading-relaxed">{t.q}</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold text-primary text-sm">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.c}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10">
        <motion.div
          {...fadeUp}
          className="max-w-6xl mx-auto bg-gradient-navy rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-elegant"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-royal/30 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Ready to engage with India's trusted surveyors?
            </h2>
            <p className="mt-5 text-white/75 max-w-xl mx-auto">
              Speak with our team about your insurance, claims or advisory
              requirement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-gold text-gold-foreground font-semibold hover:brightness-105 transition"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition"
              >
                Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
