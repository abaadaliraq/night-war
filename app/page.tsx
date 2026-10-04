import ArtistsSection from "@/components/ArtistsSection";
import ConceptSection from "@/components/ConceptSection";
import ElementsSection from "@/components/ElementsSection";
import FinalSection from "@/components/FinalSection";
import Hero from "@/components/Hero";
import MusicSection from "@/components/MusicSection";
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
      <section id="story">
        <ConceptSection />
      </section>
      <section id="world">
        <ElementsSection />
      </section>
      <section id="gaith">
        <SuspenseSection />
      </section>
      <section id="characters">
        <ArtistsSection />
      </section>
      <section id="network">
        <StorySection />
      </section>
      <section id="music">
        <MusicSection />
      </section>
      <section id="specs">
        <SeasonSection />
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
