import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Filosofía",
  description: "Conocé los tres pilares de SHA: disciplina de capital, seguridad práctica y trazabilidad real en la gestión de activos digitales.",
};

export default function SobreShaPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Nuestra Filosofía</h1>
      <p className={styles.lead}>
        No creemos en algoritmos mágicos ni en promesas de rentabilidad rápida. 
        SHA es una respuesta de ingeniería de software ante la fricción emocional del mercado.
      </p>

      <div className={styles.section}>
        <h2>Infraestructura sobre Hype</h2>
        <p>
          El mercado de activos digitales está lleno de ruido. Nosotros nos enfocamos exclusivamente en el método, 
          desarrollando herramientas robustas que transforman la impulsividad operativa en procesos ordenados, 
          monitoreables y repetibles.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Los Tres Pilares</h2>
        <p>
          Nuestra solución se sostiene sobre la disciplina estricta del capital, la seguridad práctica mediante 
          el principio de mínimo privilegio en APIs, y la trazabilidad absoluta de cada orden ejecutada.
        </p>
      </div>
    </main>
  );
}