import ArtistsSection from "@/components/ArtistsSection";
import ConceptSection from "@/components/ConceptSection";
import ElementsSection from "@/components/ElementsSection";
import DijlahValueSection from "@/components/DijlahValueSection";
import FinalSection from "@/components/FinalSection";
import Hero from "@/components/Hero";
import MusicSection from "@/components/MusicSection";
import MusicTeamSection from "@/components/MusicTeamSection";
import ProductionSection from "@/components/ProductionSection";
import SeasonSection from "@/components/SeasonSection";
import Sidebar from "@/components/Sidebar";
import StorySection from "@/components/StorySection";
import SuspenseSection from "@/components/SuspenseSection";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <section id="project">
        <Hero />
      </section>
      <section id="concept">
        <ConceptSection />
      </section>
      <section id="story">
        <StorySection />
      </section>
      <ElementsSection />
      <SuspenseSection />
      <section id="music">
        <MusicSection />
      </section>
      <section id="artists">
        <ArtistsSection />
      </section>
      <MusicTeamSection />
      <SeasonSection />
      <section id="value">
        <DijlahValueSection />
      </section>
      <section id="production">
        <ProductionSection />
      </section>
      <section id="final">
        <FinalSection />
      </section>
    </main>
  );
}
