import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Legal",
  description: "Marco legal y descargo de responsabilidad operativa de SHA en la gestión de activos digitales.",
};

export default function LegalPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Marco Legal</h1>
      <p className={styles.meta}>Última actualización: Junio de 2026</p>

      <FadeIn delay={0.1}>
        <section className={styles.legalSection}>
          <h2>1. Descargo de Responsabilidad Operativa (Disclaimer)</h2>
          <p>
            La operativa con activos digitales implica un riesgo financiero sustancial. SHA provee una solución
            técnica de software orientada a la automatización de procesos lógicos, pero no actúa como asesor financiero,
            bróker ni administrador de capital de terceros.
          </p>
          <p>
            El usuario es el único responsable de configurar de forma correcta los parámetros de riesgo y validar la lógica
            en los entornos de simulación (modo replay) antes de habilitar ejecuciones asíncronas en cuentas reales. SHA
            no se responsabiliza por pérdidas patrimoniales derivadas de fluctuaciones severas del mercado o configuraciones
            imprudentes de las credenciales de conexión.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className={styles.legalSection}>
          <h2>2. Política de Mínimo Privilegio y Claves API</h2>
          <p>
            Al utilizar nuestras herramientas de infraestructura, usted se compromete a suministrar claves de acceso
            restringidas que no posean permisos de retiro, transferencia o movimientos directos de capital. SHA declina
            cualquier responsabilidad por el manejo de llaves configuradas de forma errónea o que violen el principio
            de mínimo privilegio promovido activamente por la marca.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={styles.crossLink}>
          Para conocer cómo tratamos tus datos personales, visitá nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link>.
        </p>
      </FadeIn>
    </main>
  );
}