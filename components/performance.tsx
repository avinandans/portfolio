 "use client";
import { Reveal } from "./motion";
import { motion } from "motion/react";

const metrics = ["Code Splitting", "Lazy Loading", "SSR / SSG / ISR", "Image Optimization", "API Caching", "Component Optimization", "Bundle Optimization"];

export function Performance() {
  return <section className="border-t border-white/8 px-5 py-28 lg:px-8"><div className="mx-auto max-w-7xl"><Reveal><p className="text-sm uppercase tracking-[.25em] text-white/35">Performance</p><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">Performance is a feature.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">Documented experience reducing page load time by around 30% through code splitting and lazy loading.</p></Reveal><div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><Reveal><div className="grid min-h-72 place-items-center rounded-3xl border border-white/8 bg-white/[.025]"><div className="text-center"><motion.div initial={{ opacity: 0, scale: .8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-7xl font-black text-gradient">30%</motion.div><p className="mt-2 text-sm text-white/40">page-load improvement</p></div></div></Reveal><div className="grid gap-3 sm:grid-cols-2">{metrics.map((x,i)=><Reveal delay={i*.04} key={x}><div className="rounded-2xl border border-white/8 bg-white/[.025] p-5 text-sm text-white/65">✓ {x}</div></Reveal>)}</div></div></div></section>;
}