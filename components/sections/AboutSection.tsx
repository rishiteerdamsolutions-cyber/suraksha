import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="section-shell">
        <FadeIn className="premium-card p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-brand-accent">About Suraksha Hospital</p>
          <h2 className="mt-3 section-title">Trusted Orthopedic Excellence in Karimnagar</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
            Suraksha Hospital is focused on modern orthopedic treatment with ethical care, advanced surgical expertise,
            and long-term mobility outcomes. Our team combines specialist consultation, precise procedures, and
            personalized rehabilitation to help patients return to active life with confidence.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
