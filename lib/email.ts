import emailjs from "emailjs-com";
import { sanitizeInput } from "@/lib/utils";

const MAX = { name: 120, email: 254, subject: 200, message: 8000 };

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Client-side EmailJS send. Inputs are trimmed and stripped of angle brackets.
 * For production hardening, add a server route with rate limiting and validation.
 */
export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Email service is not configured.");
  }

  const safe = {
    name: sanitizeInput(payload.name, MAX.name),
    email: sanitizeInput(payload.email, MAX.email),
    subject: sanitizeInput(payload.subject || "Portfolio contact", MAX.subject),
    message: sanitizeInput(payload.message, MAX.message),
  };

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: safe.name,
      reply_to: safe.email,
      subject: safe.subject,
      message: safe.message,
    },
    publicKey
  );
}
