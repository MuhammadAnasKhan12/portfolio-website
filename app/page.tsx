import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
export default function Home() {
  return (
  <main className="overflow-hidden">
    <div className="px-4 md:px-12 lg:px-28 w-full py-5 h-full overflow-x-hidden">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Experience />
        <ProjectSection/>
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
