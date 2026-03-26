import { Clock3, HeartPulse, Hospital, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const facilities = [
  { title: "Physiotherapy & Rehabilitation Center", icon: HeartPulse },
  { title: "Post-operative recovery programs", icon: ShieldCheck },
  { title: "Modern operation theatre", icon: Hospital },
  { title: "24/7 emergency orthopedic care", icon: Clock3 }
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-16 sm:py-20">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title text-center">Facilities</h2>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {facilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} className="premium-card flex items-center gap-4 p-5" delayMs={idx * 80}>
                <div className="rounded-lg bg-brand-accent/15 p-3 text-brand-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-base font-medium text-slate-700">{item.title}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
