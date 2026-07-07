import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description: "Respuestas claras sobre custodia de fondos, garantías de rentabilidad y gestión segura de tus API keys.",
};

export default function FaqPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Preguntas Frecuentes</h1>

      <div className={styles.qaBlock}>
        <h2>¿SHA se queda con la custodia de mis fondos?</h2>
        <p>
          No, bajo ninguna circunstancia. SHA es estrictamente un proveedor de infraestructura de software. 
          Tu capital permanece siempre en tu cuenta personal de Binance. El sistema solo interactúa mediante credenciales 
          API para la colocación de órdenes matemáticas de ejecución asíncrona.
        </p>
      </div>

      <div className={styles.qaBlock}>
        <h2>¿El sistema garantiza un porcentaje de ganancias mensuales?</h2>
        <p>
          No. SHA promueve la disciplina de capital y el control estricto de riesgos, alejándose por completo 
          de las promesas automatizadas o ganancias aseguradas. El rendimiento final depende de las condiciones 
          estructurales del mercado y de los parámetros validados por el operador en el entorno de simulación previa.
        </p>
      </div>

      <div className={styles.qaBlock}>
        <h2>¿Cómo se protegen mis llaves API en la plataforma?</h2>
        <p>
          Exigimos de manera obligatoria la desactivación de permisos de retiro al configurar tus llaves API. 
          Además, sugerimos segmentar credenciales exclusivas para el uso del software y aplicar restricciones por dirección IP 
          para asegurar que solo los entornos autorizados puedan procesar datos de lectura y ejecución.
        </p>
      </div>
    </main>
  );
}