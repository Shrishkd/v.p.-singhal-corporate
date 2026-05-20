import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-md bg-gradient-navy flex items-center justify-center shadow-soft">
            <span className="font-display text-gold text-lg font-bold">VP</span>
          </div>
          <div className="leading-tight">
            <div className={`font-display text-base font-bold ${scrolled ? "text-foreground" : "text-white"}`}>
              V.P. Singhal &amp; Co.
            </div>
            <div className={`text-[11px] tracking-widest uppercase ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              ISLA Pvt. Ltd.
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium tracking-wide relative transition-colors ${
                scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white"
              }`}
              activeProps={{ className: "!text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-md bg-gold text-gold-foreground text-sm font-semibold hover:brightness-105 transition shadow-soft"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/80 hover:text-primary"
                activeProps={{ className: "!text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 rounded-md bg-gold text-gold-foreground text-sm font-semibold text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
