 "use client";
import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./motion";
import { projects } from "@/data/projects";

const filters = ["All", "React", "Next.js", "AI", "Enterprise"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter(p => filter === "All" || p.category.includes(filter));
  return <section id="projects" className="border-t border-white/8 px-5 py-28 lg:px-8"><div className="mx-auto max-w-7xl"><Reveal><p className="text-sm uppercase tracking-[.25em] text-white/35">Selected work</p><h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-.04em] sm:text-6xl">Products built to solve real problems.</h2></Reveal>
    <div className="mt-9 flex flex-wrap gap-2">{filters.map(f => <button key={f} onClick={() => setFilter(f)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${filter === f ? "border-white/30 bg-white text-black" : "border-white/10 bg-white/[.02] text-white/50 hover:text-white"}`}>{f}</button>)}</div>
    <div className="mt-8 grid gap-4 lg:grid-cols-2">{visible.map((p, i) => <Reveal delay={i * .04} key={p.slug}><ProjectCard project={p} /></Reveal>)}</div>
  </div></section>;
}

function ProjectCard({ project: p }: { project: typeof projects[number] }) {
  return <motion.article whileHover={{ y: -6 }} className="group overflow-hidden rounded-3xl border border-white/8 bg-[#0c1016]">
    <div className={`relative min-h-64 overflow-hidden bg-gradient-to-br ${p.accent} p-5`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,.13),transparent_20%)]" />
      <motion.div whileHover={{ scale: 1.03 }} className="relative mx-auto mt-5 max-w-md rounded-2xl border border-white/10 bg-black/35 p-4 shadow-2xl backdrop-blur">
        <div className="mb-4 flex gap-1.5"><i className="h-2 w-2 rounded-full bg-white/30" /><i className="h-2 w-2 rounded-full bg-white/20" /><i className="h-2 w-2 rounded-full bg-white/10" /></div>
        <div className="space-y-2">{[1,2,3].map(x => <div key={x} className="h-3 rounded bg-white/[.07]" style={{ width: `${92 - x * 15}%` }} />)}</div>
        <div className="mt-4 grid grid-cols-3 gap-2">{[1,2,3].map(x => <div key={x} className="h-14 rounded-lg border border-white/5 bg-white/[.03]" />)}</div>
      </motion.div>
    </div>
    <div className="p-6"><div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-bold">{p.name}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/45">{p.description}</p></div><ArrowUpRight className="shrink-0 text-white/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" /></div><div className="mt-5 flex flex-wrap gap-2">{p.technologies.slice(0, 6).map(t => <span key={t} className="rounded-full border border-white/8 px-2.5 py-1 text-[11px] text-white/45">{t}</span>)}</div><ul className="mt-5 grid gap-2 text-xs text-white/45 sm:grid-cols-2">{p.features.slice(0, 4).map(f => <li key={f}>✓ {f}</li>)}</ul><a href={`/projects/${p.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white">View case study <ExternalLink size={14} /></a></div>
  </motion.article>;
}