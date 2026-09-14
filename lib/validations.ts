import { z } from "zod";

export const ContactFormNames = {
  name: "name",
  email: "email",
  message: "message",
} as const

export const contactSchema = z.object({
  name: z.string("Invalid name").min(2, "Name is too short").max(80),
  email: z.email("Enter a valid email"),
  message: z.string("Invalid message").min(10, "Message should be at least 10 characters").max(2000)
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ContactFormNames = keyof ContactFormData;