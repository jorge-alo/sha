# Project Roadmap - SHA Web MVP

Este roadmap divide la construcción del proyecto en fases incrementales para asegurar que el desarrollo sea limpio y libre de frustraciones.

## Fase 1: Setup del Proyecto e Infraestructura Base (Hitos)
- [x] Inicializar proyecto Next.js (`npx create-next-app@latest`) con TypeScript y App Router (sin Tailwind, usando CSS Modules).
- [x ] Limpiar la estructura por defecto y configurar `app/globals.css` con las variables de color, fuentes y reset.
- [x ] Crear el Layout global (`app/layout.tsx`) con el Navbar y Footer estructurales (reutilizables).

## Fase 2: Construcción de Páginas Estáticas (Server Components)
- [ x] **Hito 1:** Maquetar la Home Page (`/`) con el Hero principal, copys comerciales y la franja de confianza.
- [ x] **Hito 2:** Implementar las rutas `/sobre-sha` y `/como-funciona` integrando el texto base y los bloques de onboarding progresivo.
- [ x] **Hito 3:** Crear la página de `/seguridad` detallando el modelo de permisos y buenas prácticas.
- [ x] **Hito 4:** Diseñar la página de `/resultados` y la sección de `/planes` (tablas visuales de simulación y opciones de suscripción).
- [x ] **Hito 5:** Crear `/faq`, `/legal` y `/privacidad` con los disclaimers correspondientes.

## Fase 3: Interactividad y Formularios (Client Components)
- [ x] Construir los componentes UI reutilizables de entrada (`FormInput`) en `components/ui/`.
- [ x] Implementar la página `/contacto` y su subcomponente `ContactForm` utilizando React Hook Form y Zod.
- [ ] Configurar el cliente de TanStack Query para simular el ciclo de vida del envío asíncrono.

## Fase 4: Pulido, Animaciones y Despliegue
- [ ] Incorporar transiciones suaves y sutiles en secciones clave usando Framer Motion.
- [ ] Revisión final de accesibilidad, optimización de imágenes (`next/image`) y testing de validaciones en producción.
- [ ] Despliegue del MVP.