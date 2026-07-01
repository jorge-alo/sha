# Software Design Document (SDD) - Formulario de Contacto

## 1. Objetivo Técnico
Diseñar e implementar un formulario de captura de leads ("Solicitud de Demo") en la ruta `/contacto`. El sistema debe validar los datos del lado del cliente de forma estricta, manejar estados asíncronos de envío (carga, éxito, error) sin provocar re-renders masivos y asegurar una experiencia de usuario limpia y profesional.

## 2. Tecnologías Involucradas
- **React Hook Form:** Control y captura del estado del formulario de manera no controlada/optimizada.
- **Zod:** Definición del esquema de validación y tipado estricto de los campos.
- **TanStack Query (React Query):** Mutación asíncrona para controlar el ciclo de vida del envío HTTP (`fetch`).
- **CSS Modules:** Estilos aislados y estados visuales de error/deshabilitado.

## 3. Esquema de Validación (Zod)
El esquema se estructurará asegurando que los datos sigan criterios corporativos serios. No se permitirán campos vacíos ni formatos inválidos.

```typescript
import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
    .max(50, { message: 'El nombre no puede superar los 50 caracteres.' }),
  email: z
    .string()
    .email({ message: 'Por favor, ingresá un correo electrónico válido.' }),
  company: z
    .string()
    .max(50, { message: 'El nombre de la empresa no puede superar los 50 caracteres.' })
    .optional()
    .or(z.literal('')), // Permite string vacío si es opcional
  telegramOrWhatsapp: z
    .string()
    .min(5, { message: 'Por favor, ingresá una vía de contacto válida (mínimo 5 caracteres).' })
    .max(30, { message: 'La vía de contacto no puede superar los 30 caracteres.' }),
  message: z
    .string()
    .min(10, { message: 'El mensaje debe ser más descriptivo (mínimo 10 caracteres).' })
    .max(500, { message: 'El mensaje no puede superar los 500 caracteres.' }),
});

// Tipado automático derivado de Zod
export type ContactFormData = z.infer<typeof contactFormSchema>;

## 4. Estado de la Implementación
Estado: COMPLETADO / VERIFICADO
Detalles: Se implementaron los componentes reutilizables con soporte para reenvío de referencias (forwardRef). La validación del esquema responde en tiempo real sobre los eventos onBlur y onChange. El envío simula un retardo asíncrono de red de $2\text{s}$ mediante una promesa controlada que gestiona los estados de isSubmitting y de éxito/error de manera impecable.