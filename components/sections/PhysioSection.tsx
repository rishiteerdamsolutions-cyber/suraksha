import FadeIn from "@/components/ui/FadeIn";

export default function PhysioSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <FadeIn className="premium-card overflow-hidden bg-gradient-to-r from-brand-primary to-[#16557f] p-8 text-white sm:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">Physiotherapy Highlight</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Restore Strength. Regain Movement.</h2>
          <div className="mt-6 grid gap-3 text-sm text-slate-100 sm:grid-cols-3 sm:text-base">
            <p>Post-surgery rehab</p>
            <p>Stiffness & weakness recovery</p>
            <p>Personalized plans</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
