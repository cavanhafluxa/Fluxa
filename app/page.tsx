import { Nav } from "./components/Nav";
import { Hero, OQueMuda } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Pillars } from "./components/Pillars";
import { CaseStudy } from "./components/CaseStudy";
import { SkinInTheGame } from "./components/SkinInTheGame";
import { PartnershipForm } from "./components/PartnershipForm";
import { FluxaFoods } from "./components/FluxaFoods";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/*
          Sticky reveal:
          OQueMuda trava (sticky top-0, z-0);
          Problem sobe por cima (sticky top-0, z-10, bg opaco).
          Ambos vivem no mesmo wrapper relative pra que compartilhem a
          mesma range de sticky e o Problem cubra o OQueMuda visualmente.
        */}
        <div className="relative">
          <OQueMuda />
          <Problem />
        </div>
        <Pillars />
        <CaseStudy />
        <SkinInTheGame />
        <PartnershipForm />
        <FluxaFoods />
      </main>
      <Footer />
    </>
  );
}
