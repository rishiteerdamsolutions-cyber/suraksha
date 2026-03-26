import FadeIn from "@/components/ui/FadeIn";

export default function InsuranceSection() {
  return (
    <section className="bg-[#f9f6ef] py-16 sm:py-20">
      <div className="section-shell">
        <FadeIn className="premium-card p-8 sm:p-10">
          <h2 className="section-title">Hassle-Free Treatment</h2>
          <div className="mt-5 space-y-2 text-slate-700">
            <p>All major insurance accepted</p>
            <p>Telangana Govt reimbursement available</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
