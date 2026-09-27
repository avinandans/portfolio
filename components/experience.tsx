"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./motion";
import { experience } from "@/data/experience";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpen((current) => (current === index ? null : index));
  };

  return (
    <section
      id="experience"
      className="border-t border-white/8 px-5 py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[.25em] text-white/35">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">
            A track record of shipping.
          </h2>
        </Reveal>

        <div className="mt-14 ml-2 border-l border-white/10 pl-7 sm:ml-8 sm:pl-10">
          {experience.map((item, index) => {
            const isOpen = open === index;

            return (
              <Reveal delay={index * 0.06} key={`${item.company}-${item.role}`}>
                <div className="relative pb-10 last:pb-0">
                  {/* Timeline dot */}
                  <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full border-2 border-[#07080b] bg-blue-300 shadow-[0_0_20px_rgba(103,168,255,.8)] sm:-left-[47px]" />

                  {/* Header */}
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`experience-content-${index}`}
                    className="group flex w-full items-start justify-between gap-5 text-left mb-5 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-blue-300/50"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wider text-blue-300">
                        {item.period}
                      </p>

                      <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-blue-200">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-white/45">
                        {item.company} · {item.location}
                      </p>
                    </div>

                    <span
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-blue-300/30 bg-blue-300/10 text-blue-300"
                          : "text-white/35 group-hover:border-white/20 group-hover:text-white"
                      }`}
                    >
                      <ChevronDown size={17} />
                    </span>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`experience-content-${index}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <ul className="pt-0 pb-12 max-w-3xl space-y-3 border-t border-white/5 text-sm leading-6 text-white/55">
                          {item.highlights.map((highlight) => (
                            <motion.li
                              key={highlight}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -8 }}
                              transition={{ duration: 0.25 }}
                              className="flex gap-3"
                            >
                              <span className="mt-[2px] text-blue-300">
                                —
                              </span>

                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
