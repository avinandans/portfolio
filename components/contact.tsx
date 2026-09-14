"use client";
import { useState } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Mail, Github, Linkedin, Loader2 } from "lucide-react";
import { ContactFormData, ContactFormNames, contactSchema } from "@/lib/validations";
import type { z } from "zod";
import { Reveal } from "./motion";

export function Contact() {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });
  const onSubmit = async (values: ContactFormData) => {
    setStatus("");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (!res.ok) return setStatus(data.error ?? "Something went wrong.");
    setStatus(data.message);
    reset();
  };

  return (
    <section
      id="contact"
      className="border-t border-white/8 px-5 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[.25em] text-white/35">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">
            Have an idea? Let&apos;s build it.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            I&apos;m currently open to frontend engineering opportunities and
            interesting product collaborations.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div className="space-y-3">
            <a
              href="mailto:dev.avinandan.2@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-white/8 p-5 hover:bg-white/[.03]"
            >
              <Mail size={18} />
              <span className="text-sm">dev.avinandan.2@gmail.com</span>
            </a>
            <a
              href="https://github.com/avinandans"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/8 p-5 hover:bg-white/[.03]"
            >
              <Github size={18} />
              <span className="text-sm">github.com/avinandans</span>
            </a>
            <a
              href="https://linkedin.com/in/avinandan-singha-84630a197"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/8 p-5 hover:bg-white/[.03]"
            >
              <Linkedin size={18} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-white/8 bg-white/[.025] p-6 sm:p-8"
          >
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <InputField
                  label="Name" 
                  error={errors.name?.message}
                  placeholder="Your name"
                  {...register(ContactFormNames.name)}
                />

                <InputField
                  label="Email" 
                  error={errors.email?.message}
                  placeholder="Your email"
                  {...register(ContactFormNames.email)}
                />
              </div>
              <InputField
                label="Message" 
                error={errors.message?.message}
                placeholder="Tell me about your project or opportunity..."
                {...register(ContactFormNames.message)}
              />
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <button
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={16} />
                  ) : (
                    <ArrowUpRight size={16} />
                  )}{" "}
                  Start a Conversation
                </button>
                {status ?? <p className="text-sm text-white/55">{status}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label,
  placeholder,
  className,
  error,
  register,
}: {
  label: string;
  error?: string;
  className?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}) {
  return (
    <div>
      <label className="mb-2 block mb-2 block text-xs uppercase tracking-wider text-white/40">
        {label}
      </label>
      <input
        className={`rounded-xl field w-full px-3 py-1 border border-white/8 placeholder:text-white/20 placeholder:text-xs focus:outline-none focus:border-white/20 ${className}`}
        placeholder={placeholder}
        {...register}
      />
      {error ? <span className="mt-1 block text-xs text-red-300">{error}</span> : null}
    </div>
  );
}
