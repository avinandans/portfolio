import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Architecture } from "@/components/architecture";
import { AISection } from "@/components/ai-section";
import { Performance } from "@/components/performance";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Architecture />
        <AISection />
        <Performance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}