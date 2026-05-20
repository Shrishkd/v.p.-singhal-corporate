import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-white/85 pt-20 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-md border border-gold/40 flex items-center justify-center">
              <span className="font-display text-gold text-lg font-bold">VP</span>
            </div>
            <div className="font-display text-white font-bold">V.P. Singhal &amp; Co.</div>
          </div>
          <p className="text-sm leading-relaxed text-white/65">
            Insurance Surveyors &amp; Loss Assessors Private Limited. Delivering
            transparency, integrity and excellence across India since inception.
          </p>
          <div className="flex gap-3 mt-6">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition"
                aria-label="Social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display text-base mb-5">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-gold transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold transition">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
            <li><a href="#" className="hover:text-gold transition">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-base mb-5">Subsidiaries</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gold transition">Salvage Managers</a></li>
            <li><a href="#" className="hover:text-gold transition">Claims Mitra</a></li>
            <li><a href="#" className="hover:text-gold transition">Adwiti Technocrats</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-base mb-5">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /><span>Corporate Office, New Delhi, India</span></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /><span>+91 11 4000 0000</span></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" /><span>contact@vpsinghal.com</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/55">
        <div>© {new Date().getFullYear()} V.P. Singhal &amp; Company ISLA Pvt. Ltd. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold">Privacy Policy</a>
          <a href="#" className="hover:text-gold">Terms &amp; Conditions</a>
          <a href="#" className="hover:text-gold">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
