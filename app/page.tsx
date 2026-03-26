import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import DoctorSection from "@/components/sections/DoctorSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import HeroSection from "@/components/sections/HeroSection";
import InsuranceSection from "@/components/sections/InsuranceSection";
import PhysioSection from "@/components/sections/PhysioSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { DISPLAY_PHONE } from "@/lib/contact";

export default function Home() {
  const hospitalJsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Suraksha Hospital",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vavilala Ramreddy Nagar, Choppadandi Road, Near Mancherial Chowrasta",
      addressLocality: "Karimnagar",
      postalCode: "505001",
      addressRegion: "Telangana",
      addressCountry: "IN"
    },
    telephone: `+91-${DISPLAY_PHONE}`,
    openingHours: "Mo-Su 00:00-23:59",
    medicalSpecialty: "Orthopedic",
    url: "https://surakshahospitalkarimnagar.com"
  };

  return (
    <main className="overflow-x-hidden pb-24 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalJsonLd) }} />
      <Header />
      <HeroSection />
      <AboutSection />
      <DoctorSection />
      <ServicesSection />
      <FacilitiesSection />
      <PhysioSection />
      <InsuranceSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <MobileStickyBar />
    </main>
  );
}
