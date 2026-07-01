import styles from "./page.module.css";

export default function SeguridadPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Infraestructura de Seguridad</h1>
        <p className={styles.subtitle}>
          Modelo de permisos estricto bajo estándares profesionales de ingeniería. 
          Tu tranquilidad operativa es nuestra máxima prioridad.
        </p>
      </div>

      <div className={styles.grid}>
        
        {/* Pilar 1 */}
        <div className={styles.card}>
          <h2>🛡️ Custodia Propia Absoluta</h2>
          <p>
            SHA no es un fondo de inversión ni gestiona monederos propios. Todo tu capital 
            permanece bloqueado en tu cuenta personal de Binance. El software solo envía 
            órdenes matemáticas de ejecución asíncrona, eliminando el riesgo de contraparte.
          </p>
        </div>

        {/* Pilar 2 */}
        <div className={styles.card}>
          <h2>🔑 Mínimo Privilegio (API Keys)</h2>
          <p>
            Al enlazar tus credenciales API, se exige la restricción total de retiros. 
            El sistema está diseñado para rechazar de forma automatizada cualquier llave que 
            tenga habilitados permisos de transferencia de fondos. Solo se requiere lectura y ejecución operativa.
          </p>
        </div>

        {/* Pilar 3 */}
        <div className={styles.card}>
          <h2>🔒 Cifrado de Datos Completo</h2>
          <p>
            Toda comunicación viaja bajo protocolos HTTPS/TLS y las credenciales se procesan 
            siguiendo buenas prácticas estrictas inspiradas en OWASP, aislando los entornos 
            de desarrollo e inicialización de las claves calientes del sistema.
          </p>
        </div>

      </div>

      {/* Bloque Destacado de Buenas Prácticas */}
      <div className={styles.alertBox}>
        <h3>Buenas Prácticas Obligatorias para el Operador</h3>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
          Para garantizar la robustez del entorno, recomendamos seguir el siguiente checklist de auditoría personal:
        </p>
        <ul>
          <li>Activar de forma obligatoria el Segundo Factor de Autenticación (2FA) por hardware o app en tu exchange.</li>
          <li>Segmentar las API keys: usar llaves exclusivas para SHA y destruirlas ante cualquier revisión de mantenimiento.</li>
          <li>Restringir el acceso por IP en Binance si contás con una infraestructura de direccionamiento estático.</li>
          <li>No compartir capturas de pantalla, logs o registros de consola que contengan hashes o hashes parciales del sistema.</li>
        </ul>
      </div>
    </main>
  );
}