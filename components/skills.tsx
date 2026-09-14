 "use client";
import { motion } from "motion/react";
import { Reveal } from "./motion";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return <section id="skills" className="border-t border-white/8 px-5 py-28 lg:px-8"><div className="mx-auto max-w-7xl"><Reveal><p className="text-sm uppercase tracking-[.25em] text-white/35">Skills</p><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">A practical modern stack.</h2></Reveal><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{skillGroups.map((g, i) => <Reveal delay={i * .04} key={g.title}><motion.div whileHover={{ y: -5 }} className="h-full rounded-3xl border border-white/8 bg-white/[.025] p-6"><h3 className="font-bold">{g.title}</h3><div className="mt-5 flex flex-wrap gap-2">{g.items.map(item => <motion.span whileHover={{ scale: 1.04 }} key={item} className="rounded-full border border-white/8 bg-black/15 px-3 py-1.5 text-xs text-white/55">{item}</motion.span>)}</div></motion.div></Reveal>)}</div></div></section>;
}