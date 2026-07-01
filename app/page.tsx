import Link from "next/link";
import styles from "./page.module.css";

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

    </div>
  );
}