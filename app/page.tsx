import Navbar          from '@/components/layout/Navbar';
import Footer          from '@/components/layout/Footer';
import SectionDivider  from '@/components/ui/SectionDivider';
import HeroSection     from '@/components/sections/HeroSection';
import AboutSection    from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection  from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <ContactSection />
        <SectionDivider />
      </main>
      <Footer />
    </>
  );
}
