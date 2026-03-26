"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const reviews = [
  "Best orthopedic hospital in Karimnagar.",
  "Very experienced doctor for knee replacement.",
  "Motivating and caring doctor.",
  "Luxury hospital with minimum charges.",
  "Excellent staff support and smooth post-surgery recovery."
];

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((current) => (current - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((current) => (current + 1) % reviews.length);

  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title text-center">What Patients Say</h2>
        </FadeIn>
        <FadeIn className="mx-auto mt-10 max-w-3xl" delayMs={90}>
          <div className="premium-card p-8 text-center sm:p-10">
            <Quote className="mx-auto h-8 w-8 text-brand-accent" />
            <p className="mt-4 text-lg font-medium text-slate-700 sm:text-xl">
              &ldquo;{reviews[index]}&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={prev}
                className="rounded-lg border border-slate-200 p-2 text-brand-primary transition hover:bg-slate-50"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="rounded-lg border border-slate-200 p-2 text-brand-primary transition hover:bg-slate-50"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
