import { Nav } from "./components/fluxa/Nav";
import { Parallax } from "./components/fluxa/Parallax";
import { DesktopLanding } from "./components/fluxa/DesktopLanding";
import { MobileLanding } from "./components/fluxa/MobileLanding";
import { Footer } from "./components/fluxa/Footer";

/**
 * Landing page da Fluxa.
 *
 * Desktop e mobile são duas composições distintas, as duas no DOM, e é o
 * CSS que escolhe qual aparece (`.fx-desktop` / `.fx-mobile`, corte em
 * 768px). A troca por CSS em vez de JS evita flash na hidratação, e o ramo
 * escondido sai da árvore de acessibilidade junto com o `display:none` —
 * leitores de tela só encontram a composição visível.
 *
 * A copy vive em `components/fluxa/content.ts` pra que as duas versões não
 * saiam de sincronia.
 */
export default function Page() {
  return (
    <div className="overflow-x-clip">
      <Parallax />
      <Nav />
      <DesktopLanding />
      <MobileLanding />
      <Footer />
    </div>
  );
}
