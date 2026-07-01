"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "@/components/ui/InputField";
import { TextAreaField } from "@/components/ui/TextAreaField";
import styles from "./page.module.css";

// 1. Esquema de validación unificado
const contactoSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Introduce un correo electrónico válido." }),
  empresa: z.string().optional(),
  mensaje: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactoFormData = z.infer<typeof contactoSchema>;

export default function ContactoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactoFormData>({
    resolver: zodResolver(contactoSchema),
  });

  const onSubmit = async (data: ContactoFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Datos enviados con componentes UI:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Solicitar Acceso</h1>
        <p className={styles.subtitle}>
          Completá el formulario para iniciar el onboarding progresivo y coordinar una demo técnica.
        </p>
      </div>

      {isSubmitted ? (
        <div className={styles.successMessage}>
          <h3>¡Solicitud Recibida!</h3>
          <p style={{ marginTop: "0.5rem", color: "var(--color-text-muted)" }}>
            Un ingeniero de nuestro equipo se pondrá en contacto para coordinar la verificación del entorno.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          
          <InputField
            label="Nombre Completo *"
            id="nombre"
            placeholder="Ej. Jorge Dev"
            error={errors.nombre?.message}
            {...register("nombre")}
          />

          <InputField
            label="Correo Institucional / Personal *"
            id="email"
            type="email"
            placeholder="tu@email.com"
            error={errors.email?.message}
            {...register("email")}
          />

          <InputField
            label="Organización / Firma (Opcional)"
            id="empresa"
            placeholder="Nombre de tu organización"
            error={errors.empresa?.message}
            {...register("empresa")}
          />

          <TextAreaField
            label="Detalles de la Solicitud *"
            id="mensaje"
            placeholder="Contanos tu perfil operativo o qué tipo de integraciones buscas validar..."
            error={errors.mensaje?.message}
            {...register("mensaje")}
          />

          <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
            {isSubmitting ? "Procesando Solicitud..." : "Enviar Solicitud de Demo"}
          </button>

        </form>
      )}
    </main>
  );
}