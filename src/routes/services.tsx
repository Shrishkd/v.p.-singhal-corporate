import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  Briefcase,
  LineChart,
  Gavel,
  Building2,
  Calculator,
  Cog,
  ArrowRight,
  CheckCircle2,
  Factory,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — V.P. Singhal & Co. ISLA Pvt. Ltd." },
      {
        name: "description",
        content:
          "Insurance surveying, loss assessment, claims, arbitration, advisory and accounting services — along with our specialised subsidiaries.",
      },
    ],
  }),
  component: ServicesPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const services = [
  { i: ShieldCheck, t: "Insurance Surveying", d: "IRDA-licensed pre-risk and post-loss surveys across all classes including motor, property, marine, engineering and miscellaneous portfolios.", p: ["Pre-risk inspections", "Post-loss surveys", "Multi-class capability", "Detailed reporting"] },
  { i: Scale, t: "Loss Assessment", d: "Independent and methodical quantification of insured losses with full evidentiary support and clear adjudication rationale.", p: ["Damage quantification", "Cause analysis", "Evidence documentation", "Final adjustment"] },
  { i: Briefcase, t: "Claims Consultancy", d: "End-to-end claims management for insurers, brokers and corporate clients — from notification to settlement.", p: ["FNOL handling", "Coverage analysis", "Negotiation support", "Settlement coordination"] },
  { i: Cog, t: "Technical Advisory", d: "Engineering, operational and risk-engineering opinions to support underwriting, claims and dispute resolution.", p: ["Engineering reviews", "Risk surveys", "Expert opinions", "Reconstruction analysis"] },
  { i: Gavel, t: "Arbitration & Conciliation", d: "Expert-led neutral dispute resolution support across insurance and commercial matters.", p: ["Arbitrator support", "Expert witness", "Dispute analysis", "Conciliation"] },
  { i: Building2, t: "Business Consultancy", d: "Strategic, operational and management consulting for corporates navigating complex business environments.", p: ["Strategy advisory", "Operations review", "Process design", "Change management"] },
  { i: Calculator, t: "Accounting & Tax Advisory", d: "Through Adwiti Technocrats: bookkeeping, statutory audit, tax planning and corporate financial processing.", p: ["Bookkeeping", "Audit support", "Tax consultancy", "Compliance"] },
  { i: LineChart, t: "Management Consultancy", d: "Performance improvement, market research and project management for institutional clients.", p: ["Market research", "Project management", "Performance review", "Implementation support"] },
];

const subsidiaries = [
  {
    name: "Salvage Managers",
    tag: "e-Salvage Settlement & Auction",
    desc: "We are e-Salvage Settlers, Auctioneer & Salvaging Agency (approved by IRDA surveyors & authorized by Underwriters) since April 2005. The only salvage auction agency complying with CVC guidelines with pan India presence. We have helped the insurance industry sell salvage worth more than 1000 Cr bringing transparency and efficiency.",
    features: ["Motor claims", "Non-motor claims", "Auction management", "Salvage settlement"],
  },
  {
    name: "Claims Mitra",
    tag: "Claims MIS & Field Network",
    desc: "Claims Mitra is a Management Information Tool and rear-end application supporting claims services required by brokers and insurers. The platform is serviced by professionals like surveyors, investigators, CAs, doctors, advocates, translators, etc. Featuring live location services for spot inspections.",
    features: ["Claims management", "Professional network", "Spot inspection support", "Real-time tracking"],
  },
  {
    name: "Adwiti Technocrats Pvt. Ltd.",
    tag: "Accounting, Audit & Tax",
    desc: "Adwiti Technocrats Pvt. Ltd. specializes in accounting, bookkeeping, auditing activities, and tax consultancy. Directed by Piyush Singhal and Ved Prakash Singhal, Adwiti serves corporate clients with disciplined financial process management.",
    features: ["Tax consultancy", "Auditing", "Bookkeeping", "Financial processing"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Capabilities"
        title="Enterprise-grade insurance & advisory services."
        subtitle="A complete professional spectrum — from IRDA-licensed surveying to corporate consultancy and specialised subsidiary services."
      />

      {/* MAIN SERVICES */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-7">
            {services.map((s, i) => (
              <motion.div
                key={s.t}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-elegant hover:border-gold/40 transition"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-navy flex items-center justify-center group-hover:bg-gradient-gold transition">
                    <s.i className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-primary">{s.t}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{s.d}</p>
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {s.p.map((p) => (
                        <div key={p} className="flex items-center gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSIDIARIES */}
      <section className="py-24 px-6 lg:px-10 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-3 mb-5">
              <div className="gold-divider" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">Group Companies</span>
              <div className="gold-divider" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">Subsidiary Companies</h2>
            <p className="mt-5 text-muted-foreground">
              Specialised firms within the V.P. Singhal &amp; Co. group serving the entire claims and financial value chain.
            </p>
          </motion.div>

          <div className="space-y-7">
            {subsidiaries.map((s, i) => (
              <motion.div
                key={s.name}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-8 md:p-10 grid lg:grid-cols-3 gap-8 hover:shadow-elegant transition"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-navy flex items-center justify-center mb-5">
                    <Factory className="w-7 h-7 text-gold" />
                  </div>
                  <div className="text-gold text-xs tracking-[0.25em] uppercase font-semibold">{s.tag}</div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-primary">{s.name}</h3>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-navy-soft transition"
                  >
                    Visit Website <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 p-3 rounded-lg bg-secondary text-sm text-foreground/85">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
