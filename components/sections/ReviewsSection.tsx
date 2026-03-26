import FadeIn from "@/components/ui/FadeIn";

const reviews = [
  {
    text: "Best orthopedic hospital in Karimnagar. Treatment by Dr. Ramu is excellent.",
    name: "Srinath R."
  },
  {
    text: "Very experienced doctor for knee replacement and complicated fractures. Highly recommended.",
    name: "Ajay G."
  },
  {
    text: "My father’s ankle surgery was handled very well. Doctor is polite and motivating throughout.",
    name: "Manoj K."
  },
  {
    text: "Hospital is well maintained and offers quality treatment at affordable cost.",
    name: "Reyansh G."
  },
  {
    text: "One of the finest orthopedic and physiotherapy services in Karimnagar.",
    name: "Sriram D."
  },
  {
    text: "Very good hospital for orthopedic patients. Staff is supportive and caring.",
    name: "Rajitha M."
  }
];

export default function ReviewsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title text-center">What Our Patients Say</h2>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <FadeIn key={review.name} className="premium-card p-6" delayMs={80 + idx * 40}>
              <p className="text-base text-brand-accent">⭐⭐⭐⭐⭐</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-brand-primary">- {review.name}</p>
            </FadeIn>
          ))}
        </div>
        <FadeIn delayMs={220}>
          <div className="mt-8 rounded-xl border border-brand-accent/35 bg-brand-accent/10 px-5 py-3 text-center text-sm font-semibold text-brand-primary sm:text-base">
            ⭐ Rated 4.9/5 based on 170+ patient reviews
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
