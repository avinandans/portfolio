"use client";
import { ArrowDown, ArrowUpRight, Check, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pt-28 lg:px-8"
    >
      <div className="grid-bg absolute inset-0 -z-20" />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute right-[5%] top-[15%] -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08,
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-semibold text-emerald-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_currentColor]" />{" "}
            Available for opportunities
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-4 text-sm font-medium uppercase tracking-[.28em] text-white/40"
          >
            Senior React.js / Frontend Engineer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ delay: 0.22, duration: 0.8 }}
            className="max-w-4xl text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-8xl"
          >
            Building <span className="text-gradient">fast, scalable</span> &
            intelligent digital experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.48 }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg"
          >
            5+ years crafting modern web applications with React.js, Next.js,
            TypeScript and AI-powered experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white/20 hover:bg-white/30 px-5 py-3 text-sm font-bold text-black transition"
            >
              View My Work{" "}
              <ArrowUpRight
                size={16}
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold backdrop-blur transition hover:bg-white/10"
            >
              Let&apos;s Talk
            </a>
            <a
              href="/Avinandan-Singha-Resume.pdf"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm text-white/55 transition hover:text-white"
            >
              Download Resume <ArrowDown size={15} />
            </a>
          </motion.div>
          <div className="my-9 flex flex-wrap gap-2 text-xs text-white/40">
            {["React.js", "Next.js", "TypeScript"].map((x) => (
              <span
                key={x}
                className="rounded-full border border-white/10 px-3 py-1.5"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const rows = ["React", "Next.js", "TypeScript", "AI"];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: 1 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.45, duration: 0.9 }}
      className="relative mx-auto w-full max-w-xl"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glow overflow-hidden rounded-3xl border border-white/10 bg-[#0c1017]/90 p-5 shadow-2xl"
      >
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
              <Code2 size={19} />
            </div>
            <div>
              <div className="text-sm font-bold">AVINANDAN SINGHA</div>
              <div className="text-xs text-white/40">Frontend Engineer</div>
            </div>
          </div>
          <Sparkles size={18} className="text-violet-300" />
        </div>
        <div className="space-y-2">
          {rows.map((r, i) => (
            <div
              key={r}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[.025] px-4 py-3"
            >
              <span className="text-sm text-white/65">{r}</span>
              <Check
                size={16}
                className={i === 3 ? "text-violet-300" : "text-cyan-300"}
              />
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-white/8 bg-black/20 p-4">
          <div className="flex justify-between text-xs text-white/45">
            <span>Performance</span>
            <span>94%</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "94%" }}
              transition={{ duration: 1.3, delay: 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-blue-400 to-violet-400"
            />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/8 bg-white/[.025] p-4">
            <div className="text-2xl font-black">5+</div>
            <div className="mt-1 text-xs text-white/40">Years experience</div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[.025] p-4">
            <div className="text-2xl font-black">30%</div>
            <div className="mt-1 text-xs text-white/40">
              Load-time improvement
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
