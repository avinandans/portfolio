 "use client";
import { Reveal } from "./motion";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);
  useEffect(() => { if (!inView) return; let n = 0; const id = setInterval(() => { n += Math.max(1, Math.ceil(to / 35)); if (n >= to) { n = to; clearInterval(id); } setValue(n); }, 30); return () => clearInterval(id); }, [inView, to]);
  return <span ref={ref}>{value}{suffix}</span>;
}

export function About() {
  const stats = [[5, "+", "Years Experience"], [10, "+", "Projects"], [25, "+", "Websites Built"], [30, "%", "Load-time improvement"]];
  return <section id="about" className="border-t border-white/8 px-5 py-28 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <Reveal><p className="text-sm uppercase tracking-[.25em] text-white/35">About</p><h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-.04em] sm:text-6xl">More than just writing frontend code.</h2></Reveal>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal><p className="max-w-2xl text-lg leading-8 text-white/55">I&apos;m a frontend engineer with 5+ years of experience building scalable web applications using React.js, Next.js, TypeScript and modern frontend architectures. I specialize in scalable frontend architecture, responsive UI development, performance optimization, API integration, state management, enterprise applications and AI-powered applications.</p><p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">I enjoy transforming complex business requirements into simple, intuitive user experiences.</p></Reveal>
        <div className="grid grid-cols-2 gap-3">{stats.map(([to, suffix, label], i) => <Reveal delay={i * .06} key={label}><motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-white/8 bg-white/[.025] p-5"><div className="text-3xl font-black sm:text-4xl"><Count to={to as number} suffix={suffix as string} /></div><div className="mt-2 text-xs leading-5 text-white/40">{label}</div></motion.div></Reveal>)}</div>
      </div>
    </div>
  </section>;
}