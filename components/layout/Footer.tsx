import Image from "next/image";
import aLogo from "@/A-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Doctor", href: "#doctor" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-primary text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-2">
        <div>
          <h3 className="font-[var(--font-playfair)] text-2xl font-semibold">Suraksha Hospital</h3>
          <p className="mt-3 text-sm text-slate-200">Premium orthopedic care with trusted outcomes and patient-first treatment.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2">
            {links.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-400/30 py-4 text-xs text-slate-300">
        <div className="section-shell flex items-center justify-center gap-2">
          <span>Built by</span>
          <Image src={aLogo} alt="A-logo" className="h-5 w-auto rounded-sm" />
          <span>AI Developer India</span>
        </div>
      </div>
    </footer>
  );
}
