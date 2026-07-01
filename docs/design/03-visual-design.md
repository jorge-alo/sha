# Visual Design Guide - SHA Web

## 1. Concepto Visual
El diseño del sitio debe transmitir **infraestructura seria, robustez técnica y control**. Se evitará la estética ruidosa de "esquemas de trading rápidos" o promesas vacías, priorizando bloques limpios, tipografía con aire y componentes de alta fidelidad.

## 2. Paleta de Colores (A ser definida en variables CSS)
- **Fondo Principal (`--color-bg`):** Negro / Gris oscuro profundo (`#0d0f12`) para dar un entorno de software especializado.
- **Fondo Secundario (`--color-surface`):** Gris oscuro suave (`#16191e`) para separar tarjetas, bloques y tablas.
- **Color de Acento (`--color-accent`):** Verde azulado / Teal de confianza (`#00b4d8` o `#0cf`) para destacar botones de acción (CTA), estados exitosos e íconos clave.
- **Texto Principal (`--color-text`):** Blanco roto / Gris claro (`#e2e8f0`) para una lectura descansada.

## 3. Tipografía Sugerida
- **Títulos (Headings):** `Sora` o `Space Grotesk` (Modernas, geométricas, aspecto tecnológico).
- **Cuerpo de texto:** `Inter` (Altamente legible en interfaces oscuras).

## 4. Recursos Visuales Requeridos por Sección (Assets)
Para que las páginas cobren vida, prepararemos los siguientes marcadores de posición (*placeholders*) para imágenes y gráficos:
- **Home / Secciones de Producto:** Gráfico simplificado de flujo API (Usuario -> Binance API -> SHA con bloqueos de seguridad activos).
- **Resultados:** Estructura visual de una tabla limpia que represente la corrida de simulación revisada de 3 días (Métricas de BTCUSDT, 5 órdenes, 5 fills, 0 liquidaciones).
- **Íconos globales:** Escudo (Seguridad), Llave (API), Gráfico (Operativa), Checklist (Validación), Reloj (Monitoreo), Documento (Trazabilidad).