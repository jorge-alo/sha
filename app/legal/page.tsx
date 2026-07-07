import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Legal y Privacidad",
  description: "Marco legal, descargo de responsabilidad operativa y políticas de tratamiento de datos de SHA.",
};

export default function LegalPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Marco Legal y Cláusulas de Privacidad</h1>
      <p className={styles.meta}>Última actualización: Junio de 2026</p>

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

      <section className={styles.legalSection}>
        <h2>2. Política de Mínimo Privilegio y Claves API</h2>
        <p>
          Al utilizar nuestras herramientas de infraestructura, usted se compromete a suministrar claves de acceso 
          restringidas que no posean permisos de retiro, transferencia o movimientos directos de capital. SHA declina 
          cualquier responsabilidad por el manejo de llaves configuradas de forma errónea o que violen el principio 
          de mínimo privilegio promovido activamente por la marca.
        </p>
      </section>

      <section className={styles.legalSection}>
        <h2>3. Tratamiento de Datos y Privacidad</h2>
        <p>
          Garantizamos la inalterabilidad y confidencialidad absoluta de los datos de trazabilidad operativa procesados. 
          No comercializamos ni distribuimos información estadística de las cuentas enlazadas. Toda transmisión de datos 
          se realiza bajo estrictos protocolos de cifrado TLS a fin de resguardar la seguridad del operador en entornos distribuidos.
        </p>
      </section>
    </main>
  );
}