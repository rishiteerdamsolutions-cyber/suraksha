import { MessageCircle, PhoneCall } from "lucide-react";
import WhatsAppFormButton from "@/components/ui/WhatsAppFormButton";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a href="tel:9505009699" className="btn-primary h-12 gap-2 text-base">
          <PhoneCall className="h-4 w-4" />
          Call Now
        </a>
        <WhatsAppFormButton
          className="btn-secondary h-12 gap-2 text-base"
          icon={<MessageCircle className="h-4 w-4" />}
        />
      </div>
    </div>
  );
}
