import Link from "next/link";
import styles from "./page.module.css";
import { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Planes",
  description: "Modelos de onboarding progresivo: Plan Validación, Plan Operativo y Plan Profesional, diseñados para escalar con prudencia.",
};

export default function PlanesPage() {
  const tiers = [
    {
      name: "Plan Validación",
      tag: "Foco en Simulación",
      features: [
        "Acceso completo al entorno en modo replay",
        "Auditoría lógica con datos históricos reales",
        "Pruebas de estrés y configuración de parámetros",
        "Trazabilidad inalterable de corridas iniciales",
      ],
    },
    {
      name: "Plan Operativo",
      tag: "Producción Controlada",
      features: [
        "Conexión API en tiempo real con Binance",
        "Ejecución algorítmica con disciplina estricta",
        "Exposición sugerida controlada (entorno al 0.7%)",
        "Monitoreo asíncrono activo de riesgos 24/7",
      ],
    },
    {
      name: "Plan Profesional",
      tag: "Infraestructura Avanzada",
      features: [
        "Optimización avanzada de procesos lógicos",
        "Soporte de ingeniería y auditoría de datos dedicada",
        "Mapeo de múltiples entornos de prueba aislados",
        "Reportes de trazabilidad absoluta consolidados",
      ],
    },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Modelos de Onboarding Progresivo</h1>
        <p className={styles.subtitle}>
          Estructura de acceso escalable diseñada para priorizar la prudencia financiera
          y la validación obligatoria antes de operar.
        </p>
      </div>

      <div className={styles.grid}>
        {tiers.map((tier, index) => (
          <FadeIn key={index} delay={0.1}>
            <div  className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.badge}>{tier.tag}</span>
                <h2>{tier.name}</h2>
                <ul className={styles.features}>
                  {tier.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <Link href="/contacto" className={styles.ctaButton}>
                Solicitar Demo
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}