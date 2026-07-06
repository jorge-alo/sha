// app/api/contacto/route.ts
import { contactoSchema } from "@/lib/schemas/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

// Esta función se ejecuta cuando alguien hace POST a /api/contacto
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactoSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { nombre, email, empresa, telegramOrWhatsapp, mensaje } = parsed.data;

    // Si todavía no cargaste la key, no rompe: simula el envío
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL_TO) {
      console.warn("[contacto] Faltan variables de entorno. Simulando envío.");
      console.log("[contacto] Lead recibido (mock):", parsed.data);
      return NextResponse.json({ success: true, mocked: true });
    }

    const { error } = await resend.emails.send({
      from: "SHA Web <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `Nueva solicitud de demo — ${nombre}`,
      text: `
Nombre: ${nombre}
Email: ${email}
Empresa: ${empresa || "No especificada"}
Telegram/WhatsApp: ${telegramOrWhatsapp}

Mensaje:
${mensaje}
      `.trim(),
    });

    if (error) {
      console.error("[contacto] Error de Resend:", error);
      return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contacto] Error inesperado:", err);
    return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}