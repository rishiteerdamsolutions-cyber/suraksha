import { CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const highlights = [
  "Professor at Chalmeda Ananda Rao Medical College",
  "Postgraduate from Kakatiya Medical College, Warangal",
  "Specialist in Joint Replacement & Arthroscopy"
];

export default function DoctorSection() {
  return (
    <section id="doctor" className="py-16 sm:py-20">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title text-center">Meet Our Specialist</h2>
        </FadeIn>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <FadeIn className="premium-card p-4 sm:p-6" delayMs={50}>
            <div className="flex h-[360px] items-center justify-center rounded-lg bg-gradient-to-b from-brand-primary/10 to-brand-accent/15 text-center">
              <div>
                <p className="font-[var(--font-playfair)] text-3xl font-semibold text-brand-primary">Dr. Chokkarapu Ramu</p>
                <p className="mt-2 text-sm text-slate-600">Doctor Image Placeholder</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn className="premium-card p-6 sm:p-8" delayMs={130}>
            <div className="mb-6 rounded-xl border border-dashed border-brand-primary/35 bg-slate-50 p-3">
              <div className="flex h-40 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm text-slate-500">
                Doctor Photo Frame (image will be added later)
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-brand-primary">Dr. Chokkarapu Ramu, M.S Ortho, MCh Ortho</h3>
            <p className="mt-3 text-base text-slate-600">
              Senior Orthopaedic Surgeon with 18+ years experience
            </p>
            <div className="mt-6 space-y-3">
              {highlights.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
