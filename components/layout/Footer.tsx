import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>&copy; {year} SHA - Infraestructura Operativa. Todos los derechos reservados.</p>
      </div>
      <div className={styles.legalLinks}>
        <Link href="/faq">FAQ</Link>
        <Link href="/legal">Términos y Privacidad</Link>
      </div>
    </footer>
  );
}