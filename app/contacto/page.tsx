// app/contacto/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { InputField } from "@/components/ui/InputField";
import { TextAreaField } from "@/components/ui/TextAreaField";
import styles from "./page.module.css";
import { ContactoFormData, contactoSchema } from "@/lib/schemas/contact";
import { FadeIn } from "@/components/ui/FadeIn";

// Esta función es la que "llama" a tu backend (al route.ts de arriba)
async function enviarFormulario(data: ContactoFormData) {
  const res = await fetch("/api/contacto", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || "Error al enviar la solicitud.");
  }

  return res.json();
}

export default function ContactoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactoFormData>({
    resolver: zodResolver(contactoSchema),
  });

  // useMutation reemplaza tu setTimeout de antes
  const mutation = useMutation({
    mutationFn: enviarFormulario,
    onSuccess: () => reset(),
  });

  const onSubmit = (data: ContactoFormData) => mutation.mutate(data);

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Solicitar Acceso</h1>
        <p className={styles.subtitle}>
          Completá el formulario para iniciar el onboarding progresivo y coordinar una demo técnica.
        </p>
      </div>

      {mutation.isSuccess ? (
        <div className={styles.successMessage}>
          <h3>¡Solicitud Recibida!</h3>
          <p style={{ marginTop: "0.5rem", color: "var(--color-text-muted)" }}>
            Un ingeniero de nuestro equipo se pondrá en contacto para coordinar la verificación del entorno.
          </p>
        </div>
      ) : (
        <FadeIn delay={0.1}>
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

            <InputField
              label="Telegram o WhatsApp *"
              id="telegramOrWhatsapp"
              placeholder="@usuario o +54 9 11..."
              error={errors.telegramOrWhatsapp?.message}
              {...register("telegramOrWhatsapp")}
            />

            <TextAreaField
              label="Detalles de la Solicitud *"
              id="mensaje"
              placeholder="Contanos tu perfil operativo o qué tipo de integraciones buscas validar..."
              error={errors.mensaje?.message}
              {...register("mensaje")}
            />

            {mutation.isError && (
              <p style={{ color: "#ff6b6b", fontSize: "0.9rem" }}>
                {mutation.error instanceof Error ? mutation.error.message : "Ocurrió un error."}
              </p>
            )}

            <button type="submit" disabled={mutation.isPending} className={styles.submitButton}>
              {mutation.isPending ? "Procesando Solicitud..." : "Enviar Solicitud de Demo"}
            </button>
          </form>
        </FadeIn>
      )}
    </main>
  );
}