import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad de SHA: cómo tratamos, protegemos y resguardamos tus datos de trazabilidad operativa.",
};

export default function PrivacidadPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Política de Privacidad</h1>
      <p className={styles.meta}>Última actualización: Junio de 2026</p>

      <FadeIn delay={0.1}>
        <section className={styles.legalSection}>
          <h2>1. Tratamiento de Datos y Privacidad</h2>
          <p>
            Garantizamos la inalterabilidad y confidencialidad absoluta de los datos de trazabilidad operativa procesados.
            No comercializamos ni distribuimos información estadística de las cuentas enlazadas. Toda transmisión de datos
            se realiza bajo estrictos protocolos de cifrado TLS a fin de resguardar la seguridad del operador en entornos distribuidos.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className={styles.legalSection}>
          <h2>2. Datos que Recopilamos</h2>
          <p>
            A través del formulario de contacto, recopilamos únicamente los datos que el usuario proporciona de forma
            voluntaria: nombre, correo electrónico, organización (opcional), vía de contacto (Telegram o WhatsApp) y
            el mensaje descriptivo de la solicitud. Estos datos se utilizan exclusivamente para coordinar el proceso
            de onboarding y no se comparten con terceros ajenos al equipo de SHA.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className={styles.legalSection}>
          <h2>3. Credenciales API</h2>
          <p>
            SHA nunca solicita ni almacena claves API con permisos de retiro. Las credenciales configuradas por el
            usuario bajo el principio de mínimo privilegio se utilizan exclusivamente para la ejecución de órdenes
            y lectura de datos operativos, conforme a lo detallado en nuestra sección de Seguridad.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={styles.crossLink}>
          Para conocer los términos de uso y el descargo de responsabilidad operativa, visitá nuestro{" "}
          <Link href="/legal">Marco Legal</Link>.
        </p>
      </FadeIn>
    </main>
  );
}