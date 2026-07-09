import { Nav } from "./components/Nav";
import { Hero, OQueMuda } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Pillars } from "./components/Pillars";
import { EcosystemOrbit } from "./components/EcosystemOrbit";
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
          Sobreposição (sticky reveal):
          - OQueMuda é `sticky top-0 z-0 h-[100svh]` → o mockup do Kitchens
            fica pinado, inteiro e visível no centro da tela.
          - O espaçador logo abaixo dá a distância de scroll em que o mockup
            aparece SOZINHO antes de ser coberto.
          - Problem é `relative z-10` com bg opaco → sobe por cima do mockup
            pinado, cobrindo-o de baixo pra cima.
          Os três vivem no mesmo wrapper `relative` pra compartilhar contexto.
        */}
        <div className="relative">
          <OQueMuda />
          <div aria-hidden className="h-[55svh] bg-surface" />
          <Problem />
        </div>
        <Pillars />
        <EcosystemOrbit />
        <CaseStudy />
        <SkinInTheGame />
        <PartnershipForm />
        <FluxaFoods />
      </main>
      <Footer />
    </>
  );
}
