import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitar Demo",
  description: "Completá el formulario para iniciar el onboarding progresivo y coordinar una demo técnica con nuestro equipo.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}