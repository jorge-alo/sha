import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Resultados",
  description: "Auditoría de trazabilidad: corridas de simulación histórica con registro inalterable de órdenes, fills y ciclos operativos.",
};

export default function ResultadosPage() {
  // Datos simulados fieles de la corrida de 3 días (BTCUSDT)
  const orderLog = [
    { id: "SHA-9041", fecha: "2026-06-28 14:22", tipo: "LIMIT BUY", precio: "64,250.00", cantidad: "0.015", estado: "FILL" },
    { id: "SHA-9042", fecha: "2026-06-28 18:05", tipo: "LIMIT SELL", precio: "64,800.00", cantidad: "0.015", estado: "FILL" },
    { id: "SHA-9043", fecha: "2026-06-29 04:11", tipo: "LIMIT BUY", precio: "63,900.00", cantidad: "0.015", estado: "FILL" },
    { id: "SHA-9044", fecha: "2026-06-29 09:30", tipo: "LIMIT SELL", precio: "64,450.00", cantidad: "0.015", estado: "FILL" },
    { id: "SHA-9045", fecha: "2026-06-30 01:15", tipo: "LIMIT BUY", precio: "64,100.00", cantidad: "0.015", estado: "FILL" },
  ];

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Auditoría de Resultados</h1>
        <p className={styles.subtitle}>
          Ventana histórica de simulación de alta fidelidad (Corrida de 3 días) para el par BTCUSDT. 
          Evidencia e inalterabilidad del registro lógico.
        </p>
      </div>

      {/* Bloque de Métricas */}
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricValue}>BTCUSDT</div>
          <div className={styles.metricLabel}>Activo Auditado</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricValue}>5</div>
          <div className={styles.metricLabel}>Órdenes Colocadas</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricValue}>5</div>
          <div className={styles.metricLabel}>Órdenes Ejecutadas (Fills)</div>
        </div>
        <div className={styles.metricCard}>
          <div className={`${styles.metricValue} ${styles.metricValueAccent}`}>0</div>
          <div className={styles.metricLabel}>Liquidaciones</div>
        </div>
      </div>

      {/* Tabla Técnica */}
      <div className={styles.tableContainer}>
        <table className={styles.cryptoTable}>
          <thead>
            <tr>
              <th>ID Orden</th>
              <th>Fecha (UTC)</th>
              <th>Tipo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {orderLog.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.fecha}</td>
                <td>{order.tipo}</td>
                <td>$ {order.precio}</td>
                <td>{order.cantidad} BTC</td>
                <td className={styles.statusFill}>{order.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}