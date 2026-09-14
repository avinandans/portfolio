import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  return <main className="min-h-screen px-5 py-10 lg:px-8"><div className="mx-auto max-w-5xl">
    <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-white"><ArrowLeft size={15}/> Back to projects</Link>
    <div className="mt-20"><p className="text-sm uppercase tracking-[.25em] text-blue-300">Case study</p><h1 className="mt-4 text-5xl font-black tracking-[-.05em] sm:text-7xl">{project.name}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-white/50">{project.description}</p></div>
    <div className="mt-14 grid gap-4 sm:grid-cols-2"><div className="rounded-3xl border border-white/8 bg-white/[.025] p-7"><p className="text-xs uppercase tracking-widest text-white/35">Technologies</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map(t => <span key={t} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60">{t}</span>)}</div></div><div className="rounded-3xl border border-white/8 bg-white/[.025] p-7"><p className="text-xs uppercase tracking-widest text-white/35">Key features</p><ul className="mt-5 space-y-3 text-sm text-white/55">{project.features.map(f => <li key={f} className="flex gap-2"><Check size={15} className="mt-0.5 text-cyan-300"/>{f}</li>)}</ul></div></div>
    <section className="mt-8 rounded-3xl border border-white/8 bg-white/[.025] p-7"><h2 className="text-2xl font-bold">Architecture & solution</h2><p className="mt-4 max-w-3xl leading-8 text-white/50">This case-study template is data-driven and ready for project-specific architecture diagrams, screenshots, challenge/solution details and measurable outcomes.</p></section>
  </div></main>;
}