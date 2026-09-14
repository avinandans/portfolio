 "use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./motion";
import { experience } from "@/data/experience";

export function Experience() {
  const [open, setOpen] = useState(0);
  return <section id="experience" className="border-t border-white/8 px-5 py-28 lg:px-8">
    <div className="mx-auto max-w-7xl"><Reveal><p className="text-sm uppercase tracking-[.25em] text-white/35">Experience</p><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">A track record of shipping.</h2></Reveal>
      <div className="mt-14 ml-2 border-l border-white/10 pl-7 sm:ml-8 sm:pl-10">{experience.map((item, i) => <Reveal delay={i * .06} key={item.company}><div className="relative pb-10 last:pb-0"><span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-[#07080b] bg-blue-300 shadow-[0_0_20px_rgba(103,168,255,.8)] sm:-left-[47px]" /><button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-start justify-between gap-5 text-left"><div><p className="text-xs uppercase tracking-wider text-blue-300">{item.period}</p><h3 className="mt-2 text-xl font-bold">{item.role}</h3><p className="mt-1 text-white/45">{item.company} · {item.location}</p></div><ChevronDown size={19} className={`mt-1 shrink-0 text-white/35 transition ${open === i ? "rotate-180" : ""}`} /></button><motion.div initial={false} animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }} className="overflow-hidden"><ul className="mt-5 max-w-3xl space-y-3 text-sm leading-6 text-white/55">{item.highlights.map(h => <li key={h}>— {h}</li>)}</ul></motion.div></div></Reveal>)}</div>
    </div>
  </section>;
}