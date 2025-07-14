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
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ui/ServiceSection";
import ThreeGridSection from "@/components/ThreeGridSection";
<ServicesSection />;

export default function Home() {
  return (
  <main className="overflow-hidden">
    <div className="px-4 md:px-12 lg:px-28 w-full py-5 h-full overflow-x-hidden">
        <FloatingNav navItems={navItems} />
        <Hero />
        <ServicesSection />
        <Experience />

        <StatsSection/>
        <ProjectSection/>
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
