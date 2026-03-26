import { Building2, MessageCircle, PhoneCall, ShieldCheck, Star } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import WhatsAppFormButton from "@/components/ui/WhatsAppFormButton";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover [transform:scaleY(-1)] absolute inset-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white" />

      <div className="section-shell relative z-10 flex min-h-screen items-start justify-center">
        <div className="flex w-full max-w-[1200px] flex-col gap-8 pb-8 pt-28 sm:pt-40 lg:pt-[290px]">
          <FadeIn delayMs={50}>
            <h1 className="max-w-5xl font-[var(--font-geist)] text-[34px] font-medium leading-[0.95] tracking-[-0.04em] text-[#102238] sm:text-[58px] lg:text-[80px]">
            Advanced{" "}
              <span className="font-[var(--font-instrument-serif)] text-[46px] italic sm:text-[74px] lg:text-[100px]">
              orthopedic
            </span>{" "}
            care for Karimnagar families
            </h1>
          </FadeIn>

          <FadeIn delayMs={200}>
            <p className="max-w-[554px] font-[var(--font-geist)] text-[18px] leading-relaxed text-[#373a46]/80">
            Suraksha Hospital delivers trusted joint replacement, fracture care, sports injury treatment, spine care,
            and physiotherapy with compassionate specialist guidance.
            </p>
          </FadeIn>

          <FadeIn className="w-full max-w-[780px]" delayMs={350}>
            <div className="flex flex-col gap-3 rounded-[40px] border border-[#e8e8e8] bg-[#fcfcfc] p-3 shadow-[0px_10px_40px_5px_rgba(194,194,194,0.25)] sm:flex-row sm:items-center">
              <input
                type="tel"
                placeholder="Enter phone number for priority callback"
                className="h-12 flex-1 rounded-[32px] border border-transparent bg-white px-5 font-[var(--font-geist)] text-sm text-slate-700 outline-none transition focus:border-brand-primary/40"
              />
              <a
                href="tel:9505009699"
                className="inline-flex h-12 items-center justify-center rounded-[32px] bg-gradient-to-b from-[#0f1118] via-[#191c24] to-[#0d1016] px-6 font-[var(--font-geist)] text-sm font-medium text-white shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)] transition hover:brightness-110"
              >
                Create Free Consultation
              </a>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:hidden">
              <a href="tel:9505009699" className="btn-primary h-12 gap-2">
                <PhoneCall className="h-4 w-4" />
                Call Now
              </a>
              <WhatsAppFormButton className="btn-secondary h-12 gap-2" icon={<MessageCircle className="h-4 w-4" />} />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#ececec] bg-white/90 px-4 py-1.5 font-[var(--font-geist)] text-sm font-medium text-[#102238]">
                1,020+ Reviews
              </span>
              <div className="flex items-center gap-2 text-[#C9A14A]">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <ShieldCheck className="h-4 w-4" />
                <Building2 className="h-4 w-4" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
