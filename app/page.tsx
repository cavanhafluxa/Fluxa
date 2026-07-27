import { Nav } from "./components/Nav";
import { Hero, OQueMuda } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Pillars } from "./components/Pillars";
import { FluxaPoints } from "./components/FluxaPoints";
import { ParaTodos } from "./components/ParaTodos";
import { EcosystemOrbit } from "./components/EcosystemOrbit";
import { SkinInTheGame } from "./components/SkinInTheGame";
import { CaseStudy } from "./components/CaseStudy";
import { PartnershipForm } from "./components/PartnershipForm";
import { FluxaFoods } from "./components/FluxaFoods";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <div className="overflow-x-clip">
      <Nav />
      <main id="top">
        <Hero />
        {/*
          Sobreposição pinada (Dor identitária → O custo de não fazer nada):
          - OQueMuda é `sticky top-0 z-0 h-[100svh]` — a dor fica visível
            no centro da tela enquanto o usuário rola.
          - Espaçador dá o tempo em que a pinada aparece sozinha antes
            de ser coberta.
          - Problem é `relative z-10` com bg opaco (cream) → sobe por cima.
          Todos vivem no mesmo wrapper `relative` pra compartilhar contexto.
        */}
        <div className="relative">
          <OQueMuda />
          <div aria-hidden className="h-[40svh] bg-surface" />
          <Problem />
        </div>
        <Pillars />
        <FluxaPoints />
        <ParaTodos />
        <EcosystemOrbit />
        <SkinInTheGame />
        <CaseStudy />
        <PartnershipForm />
        <FluxaFoods />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
