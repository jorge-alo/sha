import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // ¡Acá usamos el alias @/* que configuraste!
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";

export const metadata = {
  title: {
    default: "SHA | Plataforma de Gestión Operativa",
    template: "%s | SHA" // Esto hace que si estás en /contacto, el título sea "Contacto | SHA" automáticamente
  },
  description: "Optimizá tus procesos, automatizá integraciones y escalá tu infraestructura con el entorno operativo de SHA.",
  keywords: ["SaaS", "gestión operativa", "automatización", "infraestructura", "desarrollo", "Argentina"],
  authors: [{ name: "SHA Team" }],
  creator: "SHA Team",
  metadataBase: new URL("https://sha-dusky.vercel.app"), // Después lo cambiamos por tu URL real al subirlo

  // Configuración para que se vea Pro al compartir el link en redes o WhatsApp (Open Graph)
  openGraph: {
    title: "SHA | Plataforma de Gestión Operativa",
    description: "Optimizá tus procesos, automatizá integraciones y escalá tu infraestructura de forma eficiente.",
    url: "https://sha-dusky.vercel.app",
    siteName: "SHA",
    locale: "es_AR",
    type: "website",
  },

  // Configuración específica para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "SHA | Plataforma de Gestión Operativa",
    description: "Optimizá tus procesos y automatizá integraciones.",
  },

  // Control de indexación para los robots de Google
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: '0' }}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
