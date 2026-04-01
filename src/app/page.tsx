import { HeroSection } from '@/components/sections/HeroSection';
import { BuildsSection } from '@/components/sections/BuildsSection';
import { NecrobinderSection } from '@/components/sections/NecrobinderSection';
import { TipsSection } from '@/components/sections/TipsSection';
import { ComingSoonSection } from '@/components/sections/ComingSoonSection';
import { Footer } from '@/components/sections/Footer';
import { Navbar } from '@/components/sections/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <BuildsSection />
      <NecrobinderSection />
      <TipsSection />
      <ComingSoonSection />
      <Footer />
    </main>
  );
}
