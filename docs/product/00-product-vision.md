# Product Vision - SHA Web

## 1. Introducción
SHA es una marca y solución tecnológica orientada a la automatización operativa en el mercado de activos digitales. A diferencia de las propuestas tradicionales del sector, SHA no se posiciona como una promesa de rentabilidad automatizada o algoritmos mágicos, sino como un software de infraestructura serio basado en tres pilares fundamentales: disciplina de capital, seguridad práctica y trazabilidad real.

## 2. Problema
Los operadores y usuarios del mercado de criptoactivos se enfrentan a tres problemas críticos en su día a día:
- **Fricción emocional e impulsividad:** Decisiones de trading manuales tomadas bajo estrés, falta de sueño o impulsos que rompen la estrategia preestablecida.
- **Opacidad en terceros:** Plataformas que exigen la custodia total de los fondos, operando bajo esquemas oscuros donde el usuario pierde el control de su capital.
- **Falta de herramientas de validación:** Imposibilidad de probar flujos lógicos y estrategias de manera exhaustiva en entornos históricos fieles antes de arriesgar capital real.

## 3. Solución
SHA convierte el flujo de trabajo manual e impulsivo en un proceso automatizado, ordenado, monitoreable y repetible. El sistema se conecta directamente a la cuenta del usuario mediante la API de Binance, manteniendo los fondos bajo el control del cliente. 

El valor fundamental radica en la combinación de:
1. **Conexión controlada:** Integración restringida bajo el principio de mínimo privilegio.
2. **Validación previa:** Un entorno simulado en modo replay de alta fidelidad para testear el comportamiento antes del despliegue en real.
3. **Trazabilidad absoluta:** Registro inalterable de cada orden, ejecución (fill), ciclo y balance operativo.

## 4. Público Objetivo
- **Usuarios y traders que buscan metodologías:** Personas que comprenden el mercado pero quieren eliminar el factor emocional, delegando la ejecución en reglas estrictas.
- **Operadores enfocados en la seguridad:** Usuarios que exigen control total sobre la custodia de su capital y no están dispuestos a transferir fondos a plataformas de terceros.
- **Perfiles técnicos/profesionales:** Clientes que valoran la auditoría de datos, los registros limpios y la optimización de procesos (infraestructura seria sobre "hype" de marketing).

## 5. Objetivos del Sitio Web
- **Generar confianza institucional:** Posicionar a SHA como una herramienta de ingeniería de software confiable y madura, alejándose del diseño típico de "esquemas de ganancia rápida".
- **Captación de leads (Conversión):** Centralizar las intenciones de los usuarios mediante llamados a la acción claros orientados a "Solicitar Demo" o iniciar el onboarding.
- **Educación técnica y de seguridad:** Informar de forma transparente al usuario cómo proteger sus claves API y cómo configurar un entorno seguro.

## 6. Identidad de la Marca
- **Eje de comunicación:** "Automatización operativa con disciplina, seguridad y trazabilidad."
- **Tono:** Profesional, sobrio, pragmático, transparente. El foco es el método y el control del riesgo.
- **Identidad visual sugerida:** Estética premium y tecnológica. Fondos oscuros sobrios, tipografías limpias (Sora/Manrope para títulos, Inter para el cuerpo) y acentos en verde azulado (teal) para transmitir seguridad y confianza.

## 7. Principios del Producto
- **Custodia propia:** El capital permanece siempre en la cuenta del exchange del usuario. SHA no gestiona ni almacena fondos directamente.
- **Mínimo privilegio:** Promoción activa de permisos mínimos para las API keys (ej. separar permisos de ejecución de órdenes de los de lectura de datos de usuario).
- **Validación obligatoria:** Filosofía de marca basada en "primero validar en simulación, después escalar a producción".
- **Prudencia financiera:** El sistema promueve operar con fracciones reducidas del balance (exposición sugerida en torno al 0.7%) priorizando la continuidad y sostenibilidad.

## 8. Objetivos Técnicos (Stack Previsto)
- **Framework principal:** Next.js (App Router) y React para una navegación ultra rápida y optimización SEO.
- **Lenguaje:** TypeScript para garantizar robustez y un tipado estricto en la lógica de datos.
- **Estilos:** CSS Modules para mantener aislamiento de estilos sin añadir complejidad de configuración.
- **Animaciones:** Framer Motion para lograr una interfaz fluida y de alta gama.
- **Manejo de Formularios y Validación:** React Hook Form combinando esquemas con Zod para validaciones estrictas de datos introducidos por el usuario.
- **Data Fetching:** TanStack Query (React Query) para gestionar de forma eficiente los estados asíncronos en las secciones dinámicas.

## 9. Alcance de la Versión 1.0 (Páginas y Secciones)
El sitio web estará compuesto exclusivamente por las siguientes rutas y vistas estructuradas:
- `/` (Home): Hero principal, propuesta de valor, franja de confianza y resumen general.
- `/sobre-sha`: Filosofía de automatización con método y enfoque de equipo.
- `/como-funciona`: Detalle paso a paso del flujo operativo (Conexión -> Validación -> Operación -> Revisión) y planes de onboarding progresivo.
- `/seguridad`: Explicación detallada del modelo de permisos por API, recomendaciones OWASP, 2FA y bloqueos en entornos de prueba.
- `/resultados`: Muestra de métricas reales simuladas en ventanas históricas (ej. corridas de 3 días con auditoría de ciclos y órdenes) como evidencia de trazabilidad.
- `/planes`: Tabla de opciones sugeridas (Plan Validación, Plan Operativo, Plan Profesional) sin precios cerrados en el MVP.
- `/faq`: Preguntas frecuentes clave (fondos, garantías de ganancia, gestión de API keys).
- `/contacto`: Formulario estructurado para solicitud de demos.
- `/legal` y `/privacidad`: Disclaimers obligatorios de riesgo operativo en activos digitales.

## 10. Fuera del Alcance (Excluido para la V1.0)
Para evitar desviaciones en el desarrollo, queda estrictamente fuera de esta versión:
- Sistema de autenticación de usuarios (Login / Register).
- Dashboard o panel de control privado de clientes dentro de la web.
- Procesamiento de pagos en línea o pasarelas de suscripción.
- Panel de administración interna para gestión de usuarios.

## 11. Riesgos y Mitigaciones
- **Riesgo:** Confusión del producto con plataformas de estafas o trading algorítmico agresivo.
  * **Mitigación:** Incluir disclaimers de riesgo explícitos en el footer y secciones legales. Evitar terminología de ganancias aseguradas y focalizar el copy en "herramienta de control y automatización".
- **Riesgo:** Copia o replicabilidad del motor interno.
  * **Mitigación:** Restringir estrictamente la publicación de fórmulas exactas, umbrales numéricos, nombres de funciones internas del código o diagramas de arquitectura de bajo nivel.

## 12. Métricas de Éxito
- Tasa de conversión del formulario de contacto ("Solicitudes de Demo").
- Tiempo de permanencia en las páginas críticas de `/seguridad` y `/como-funciona`.
- Carga y rendimiento óptimo en Web Vitals (Puntuación > 90 en Lighthouse).

## 13. Próximos Pasos
1. Consolidar esta visión del producto.
2. Definir la arquitectura de rutas y componentes base de Next.js (Architecture design).
3. Diseñar la estructura de datos para el formulario de contacto usando esquemas de Zod (Software Design Document - SDD).
4. Iniciar el desarrollo por el Layout común de la aplicación.