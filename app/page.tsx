import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Pillars } from "./components/Pillars";
import { DualAudience } from "./components/DualAudience";
import { CaseStudy } from "./components/CaseStudy";
import { PartnershipForm } from "./components/PartnershipForm";
import { FluxaFoods } from "./components/FluxaFoods";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Pillars />
        <DualAudience />
        <CaseStudy />
        <PartnershipForm />
        <FluxaFoods />
      </main>
      <Footer />
    </>
  );
}
