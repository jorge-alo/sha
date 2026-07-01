import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">SHA</Link>
      </div>
      <ul className={styles.links}>
        <li><Link href="/como-funciona">Cómo Funciona</Link></li>
        <li><Link href="/sobre-sha">Filosofía</Link></li>
        <li><Link href="/seguridad">Seguridad</Link></li>
        <li><Link href="/resultados">Resultados</Link></li>
        <li><Link href="/planes">Planes</Link></li>
      </ul>
    </nav>
  );
}