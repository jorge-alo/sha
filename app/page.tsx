import Link from "next/link";
import styles from "./page.module.css";
import { Icon } from "@/components/ui/Icon";
import { FadeIn } from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <div className={styles.container}>

      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Infraestructura algorítmica seria para la gestión de activos
        </h1>
        <p className={styles.subtitle}>
          Control total y robustez técnica. Conectá tu API de Binance bajo un entorno seguro diseñado para la toma de decisiones profesionales.
        </p>
        <div className={styles.actions}>
          <Link href="/como-funciona" className={styles.primaryButton}>
            Ver cómo funciona
          </Link>
        </div>
      </section>

      {/* 2. FRANJA DE CONFIANZA */}
      <section className={styles.trustBadge}>
        <div className={styles.grid}>
          <div className={styles.statItem}>
            <h3>0%</h3>
            <p>Retención de capital (Fondos en tu cuenta)</p>
          </div>
          <div className={styles.statItem}>
            <h3>24/7</h3>
            <p>Monitoreo activo de riesgos</p>
          </div>
          <div className={styles.statItem}>
            <h3>API</h3>
            <p>Permisos de retiro bloqueados</p>
          </div>
        </div>
      </section>

      {/* 3. PROPUESTA DE VALOR — LOS 3 PILARES */}
      <section className={styles.pillars}>
         <FadeIn className={styles.pillarsHeader}>
          <h2 className={styles.pillarsTitle}>Los Tres Pilares de SHA</h2>
          <p className={styles.pillarsSubtitle}>
            No prometemos rentabilidad automática. Construimos infraestructura seria 
            sobre tres principios no negociables.
          </p>
        </FadeIn>

        <div className={styles.pillarsGrid}>
           <FadeIn delay={0}>
            <div className={styles.pillarCard}>
              <Icon name="chart" size={32} className={styles.pillarIcon} />
              <h3>Disciplina de Capital</h3>
              <p>
                Eliminamos la fricción emocional del trading manual. Reglas estrictas, 
                exposición reducida y prudencia financiera por diseño.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.pillarCard}>
              <Icon name="key" size={32} className={styles.pillarIcon} />
              <h3>Seguridad Práctica</h3>
              <p>
                Conexión bajo mínimo privilegio. Tu capital nunca sale de tu custodia — 
                SHA nunca gestiona ni almacena fondos directamente.
              </p>
            </div>
          </FadeIn>

            <FadeIn delay={0.2}>
            <div className={styles.pillarCard}>
              <Icon name="checklist" size={32} className={styles.pillarIcon} />
              <h3>Trazabilidad Real</h3>
              <p>
                Registro inalterable de cada orden, ejecución y ciclo operativo. 
                Auditoría transparente, sin cajas negras.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. RESUMEN GENERAL / CTA FINAL */}
      <section className={styles.summary}>
        <FadeIn>
          <h2 className={styles.summaryTitle}>¿Listo para operar con método?</h2>
          <p className={styles.summarySubtitle}>
            Validá tu estrategia en un entorno simulado antes de escalar a producción real.
          </p>
          <div className={styles.summaryLinks}>
            <Link href="/seguridad" className={styles.secondaryButton}>
              Ver modelo de seguridad
            </Link>
            <Link href="/contacto" className={styles.primaryButton}>
              Solicitar Demo
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}