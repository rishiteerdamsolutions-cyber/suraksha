import { MapPin, MessageCircle, PhoneCall } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import WhatsAppFormButton from "@/components/ui/WhatsAppFormButton";
import { DISPLAY_PHONE } from "@/lib/contact";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title text-center">Contact & Location</h2>
        </FadeIn>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <FadeIn className="premium-card p-6 sm:p-8" delayMs={70}>
            <div className="flex items-center gap-2 text-brand-primary">
              <MapPin className="h-5 w-5" />
              <h3 className="text-xl font-semibold">Suraksha Hospital, Karimnagar</h3>
            </div>
            <p className="mt-4 text-slate-700">
              Vavilala Ramreddy Nagar
              <br />
              Choppadandi Road
              <br />
              Near Mancherial Chowrasta
              <br />
              Karimnagar - 505001
            </p>
            <p className="mt-4 text-slate-700">Phone: {DISPLAY_PHONE}</p>
            <p className="text-slate-700">Hours: Open 24 Hours</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${DISPLAY_PHONE}`} className="btn-primary h-12 w-full gap-2 sm:w-auto">
                <PhoneCall className="h-4 w-4" />
                Call Now
              </a>
              <WhatsAppFormButton
                className="btn-secondary h-12 w-full gap-2 sm:w-auto"
                icon={<MessageCircle className="h-4 w-4" />}
              />
            </div>
          </FadeIn>
          <FadeIn className="premium-card overflow-hidden p-2" delayMs={120}>
            <iframe
              title="Suraksha Hospital Karimnagar Location"
              src="https://maps.google.com/maps?q=Karimnagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[360px] w-full rounded-lg border-0 sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
