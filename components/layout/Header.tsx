import { Activity, PhoneCall } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Doctor", href: "#doctor" },
  { label: "Services", href: "#services" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-2">
        <a href="#home" className="font-[var(--font-playfair)] text-2xl font-bold text-brand-primary sm:text-3xl">
          Suraksha Hospital
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 md:inline-flex"
          >
            <Activity className="h-3.5 w-3.5 animate-pulse" />
            Live: Open 24 Hours
          </a>
          <a href="tel:9505009699" className="btn-primary h-10 px-4 text-xs md:hidden">
          <PhoneCall className="mr-1 h-3.5 w-3.5" />
          Call
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-brand-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
