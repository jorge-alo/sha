// components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" onClick={closeMenu}>SHA</Link>
      </div>

      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
        aria-expanded={isOpen}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <ul className={`${styles.links} ${isOpen ? styles.linksOpen : ""}`}>
        <li><Link href="/como-funciona" onClick={closeMenu}>Cómo Funciona</Link></li>
        <li><Link href="/sobre-sha" onClick={closeMenu}>Filosofía</Link></li>
        <li><Link href="/seguridad" onClick={closeMenu}>Seguridad</Link></li>
        <li><Link href="/resultados" onClick={closeMenu}>Resultados</Link></li>
        <li><Link href="/planes" onClick={closeMenu}>Planes</Link></li>
      </ul>
    </nav>
  );
}