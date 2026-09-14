 "use client";
import { useEffect, useState } from "react";
import { Bot, Terminal } from "lucide-react";
import { Reveal } from "./motion";

const lines = ["> Initialize AI Assistant...", "✓ Context loaded", "✓ API connected", "✓ Model ready", "", "Ask me anything..."];

export function AISection() {
  const [visible, setVisible] = useState(0);
  useEffect(() => { const id = setInterval(() => setVisible(v => Math.min(v + 1, lines.length)), 700); return () => clearInterval(id); }, []);
  return <section className="border-t border-white/8 px-5 py-28 lg:px-8"><div className="mx-auto max-w-7xl"><Reveal><p className="text-sm uppercase tracking-[.25em] text-violet-300/70">AI / GenAI</p><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">Building with AI.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">I explore how Generative AI can enhance modern frontend applications and developer workflows.</p></Reveal><div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_.9fr]"><div className="overflow-hidden rounded-3xl border border-violet-400/15 bg-[#090b10] shadow-[0_0_90px_rgba(155,124,255,.08)]"><div className="flex items-center gap-2 border-b border-white/8 px-5 py-4 text-xs text-white/40"><Terminal size={15}/> ai-assistant</div><div className="min-h-72 p-6 font-mono text-sm leading-8 text-white/65">{lines.slice(0, visible).map((l,i)=><div key={i} className={l.startsWith("✓") ? "text-emerald-300" : ""}>{l}</div>)}</div></div><div className="grid gap-3">{["OpenAI API", "Gemini API", "Prompt Engineering", "AI-assisted Development"].map((x,i)=><Reveal delay={i*.05} key={x}><div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[.025] p-5"><Bot size={18} className="text-violet-300"/><span className="font-semibold">{x}</span></div></Reveal>)}</div></div></div></section>;
}