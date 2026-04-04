import emailjs from "emailjs-com";
import { sanitizeInput } from "@/lib/utils";

const MAX = { name: 120, email: 254, message: 8000 };

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

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
    message: sanitizeInput(payload.message, MAX.message),
  };

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: safe.name,
      reply_to: safe.email,
      message: safe.message,
      subject: `Portfolio contact from ${safe.name}`,
    },
    publicKey
  );
}
