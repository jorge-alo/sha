// lib/schemas/contact.ts
import { z } from "zod";

export const contactoSchema = z.object({
  nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." })
    .max(50, { message: "El nombre no puede superar los 50 caracteres." }),
  email: z
    .string()
    .email({ message: "Introduce un correo electrónico válido." }),
  empresa: z
    .string()
    .max(50, { message: "El nombre de la empresa no puede superar los 50 caracteres." })
    .optional()
    .or(z.literal("")),
  telegramOrWhatsapp: z
    .string()
    .min(5, { message: "Ingresá una vía de contacto válida (mínimo 5 caracteres)." })
    .max(30, { message: "No puede superar los 30 caracteres." }),
  mensaje: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
    .max(500, { message: "El mensaje no puede superar los 500 caracteres." }),
});

export type ContactoFormData = z.infer<typeof contactoSchema>;