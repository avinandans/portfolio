 "use client";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const links = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${scrolled ? "border-b border-white/10 bg-black/65 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="text-sm font-black tracking-[.22em]">AVINANDAN</a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-white/60 transition hover:text-white">{link}</a>)}
        </div>
        <a href="#contact" className="hidden items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold md:flex">
          Let&apos;s Talk <ArrowUpRight size={15} />
        </a>
        <button className="rounded-full border border-white/10 p-2 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-white/10 bg-black/90 px-5 pb-5 backdrop-blur-xl md:hidden">
            {links.map((link, i) => <motion.a initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .04 }} onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase()}`} className="block border-b border-white/5 py-4 text-white/75">{link}</motion.a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}