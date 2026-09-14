import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Please provide a valid name, email and message." }, { status: 400 });

  // Wire this endpoint to Resend, Postmark, Formspree, etc. server-side.
  // Never expose an email/API secret in client-side code.
  return NextResponse.json({ success: true, message: "Message received. I’ll get back to you soon." });
}