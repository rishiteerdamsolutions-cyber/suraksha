import {
  Activity,
  Bone,
  Dumbbell,
  ShieldPlus,
  Stethoscope,
  Workflow
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    title: "Joint Replacement Surgery",
    description: "Advanced hip and knee replacement with personalized surgical planning.",
    icon: Bone
  },
  {
    title: "Fracture & Trauma Care",
    description: "Immediate orthopedic trauma management with precise fixation methods.",
    icon: ShieldPlus
  },
  {
    title: "Sports Injury Treatment",
    description: "Fast recovery programs for ligament, tendon, and muscle injuries.",
    icon: Activity
  },
  {
    title: "Spine & Disc Problems",
    description: "Evidence-based care for back pain, disc prolapse, and spine conditions.",
    icon: Workflow
  },
  {
    title: "Congenital Deformities",
    description: "Corrective orthopedic care plans tailored for long-term mobility.",
    icon: Stethoscope
  },
  {
    title: "Arthroscopy",
    description: "Minimally invasive procedures for diagnosis and treatment of joint issues.",
    icon: Dumbbell
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-20">
      <div className="section-shell">
        <FadeIn>
          <h2 className="section-title text-center">Orthopedic Services</h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} className="premium-card p-6" delayMs={idx * 60}>
                <div className="mb-4 inline-flex rounded-lg bg-brand-primary/10 p-3 text-brand-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-brand-primary">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
