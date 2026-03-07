import { useParams } from "react-router-dom";
import { vipGuests } from "../data/vipGuests";
import Hero from "./Hero";
import VipConfirmation from "./VipConfirmation";
import Footer from "./Footer";

export default function VipPage() {
  const { slug } = useParams<{ slug: string }>();
  const guestName = slug ? vipGuests[slug] : undefined;

  if (!guestName) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black-deep px-6 text-center">
        <h1 className="font-heading text-3xl font-bold text-gold sm:text-4xl">
          Invitación no encontrada
        </h1>
        <p className="mt-4 max-w-sm font-body text-sm font-light leading-relaxed text-gray-warm/70">
          Este enlace no corresponde a ninguna invitación VIP. Verifica el link
          que recibiste.
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black-deep">
      <Hero />
      <VipConfirmation guestName={guestName} />
      <Footer />
    </div>
  );
}
