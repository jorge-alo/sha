import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cómo Funciona",
  description: "Conexión controlada, validación obligatoria en modo replay y operación prudente. El flujo completo del método SHA.",
};

export default function ComoFuncionaPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>El Método SHA</h1>
        <p className={styles.subtitle}>
          Transformamos un flujo de trabajo manual e impulsivo en un proceso automatizado, 
          ordenado y repetible bajo tu propio control.
        </p>
      </div>

      <div className={styles.timeline}>
        
        {/* PASO 1 */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.stepContent}>
            <h2>Conexión Controlada</h2>
            <p>
              Integración directa con tu cuenta de exchange mediante la API de Binance. 
              Operamos bajo el estricto principio de mínimo privilegio: vos configurás la llave 
              restringiendo y bloqueando por completo los permisos de retiro. Tu capital nunca sale de tu custodia.
            </p>
          </div>
        </div>

        {/* PASO 2 */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.stepContent}>
            <h2>Validación Obligatoria</h2>
            <p>
              Nuestra filosofía prohíbe ir directo a producción. Antes de ejecutar en real, 
              sometemos la lógica operativa a un entorno simulado en modo "replay" de alta fidelidad 
              con datos históricos reales para auditar el comportamiento del sistema.
            </p>
          </div>
        </div>

        {/* PASO 3 */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.stepContent}>
            <h2>Operación Prudente</h2>
            <p>
              Una vez validada la simulación, el sistema ejecuta reglas estrictas reduciendo 
              la exposición del capital. Promovemos la prudencia financiera operando con fracciones 
              reducidas del balance, priorizando la sostenibilidad a largo plazo.
            </p>
          </div>
        </div>

        {/* PASO 4 */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>4</div>
          <div className={styles.stepContent}>
            <h2>Trazabilidad y Revisión</h2>
            <p>
              Cada orden, ejecución (fill), ciclo y balance operativo genera un registro inalterable. 
              Esto permite realizar auditorías limpias de datos y optimizar los procesos de forma transparente, 
              eliminando por completo la fricción emocional.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}