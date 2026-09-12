import { AnchorLink } from "./AnchorLink";
import { NewsletterForm } from "./NewsletterForm";
import { EmailText, InstagramIcon, Logo, WhatsAppIcon } from "./ds";
import {
  EMAIL,
  FOODS_URL,
  INSTAGRAM,
  WHATSAPP,
  WHATSAPP_DISPLAY,
} from "./content";

const SOCIAL_LINK =
  "fx-lift inline-flex h-11 w-11 items-center justify-center rounded-full border border-creme-4 bg-white text-vinho hover:border-terracota hover:text-terracota";

/** Footer de desktop — creme claro, logo Fluxa sem a carinha. */
export function Footer() {
  return (
    <footer className="fx-desktop border-t border-creme-4 bg-creme-soft text-vinho-3">
      <div className="container-fluxa grid gap-x-10 gap-y-14 pb-8 pt-[72px] text-[15px] leading-[1.5] [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
        <div className="flex max-w-[34ch] flex-col gap-5">
          <div className="flex items-center gap-3 text-vinho">
            <Logo size={28} />
          </div>
          <h3 className="m-0 font-urbanist text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-vinho">
            Fique por dentro
          </h3>
          <p className="m-0 text-vinho-4 text-pretty">
            Receba novidades, cases e estratégias pra fazer seu restaurante
            crescer.
          </p>
          <NewsletterForm className="max-w-[320px]" />
        </div>

        <div className="flex flex-col gap-4">
          <span className="fx-label text-vinho">Navegação</span>
          <AnchorLink href="#metodo">Método</AnchorLink>
          <AnchorLink href="#jornada">Jornada</AnchorLink>
          <AnchorLink href="#diagnostico">Diagnóstico</AnchorLink>
          <AnchorLink href="#case">Case Lana&apos;s</AnchorLink>
          <AnchorLink href="#parceiro">Seja Parceiro</AnchorLink>
          <a
            href={FOODS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracota"
          >
            Fluxa Foods ↗
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <span className="fx-label text-vinho">Contato</span>
          <span>Atendimento online · Brasil</span>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="break-words">
            <EmailText email={EMAIL} />
          </a>
        </div>

        <div className="flex flex-col gap-5">
          <span className="fx-label text-vinho">Siga a Fluxa</span>
          <div className="flex gap-3">
            <a
              href={`https://instagram.com/${INSTAGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Fluxa"
              className={SOCIAL_LINK}
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Fluxa"
              className={SOCIAL_LINK}
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>
          <p className="m-0 max-w-[28ch] text-vinho-4 text-pretty">
            Tecnologia e estratégia unidas pelo seu lucro.
          </p>
        </div>
      </div>

      <div className="container-fluxa flex flex-wrap items-center justify-between gap-4 border-t border-creme-4 pb-10 pt-6 text-[14px] leading-[1.4] text-vinho-4">
        <span>
          © {new Date().getFullYear()} Fluxa. Todos os direitos reservados.
        </span>
        {/* TODO: apontar para as páginas de verdade quando existirem.
            Hoje não há /privacidade, /termos nem /cookies no projeto. */}
        <div className="flex flex-wrap gap-6">
          <AnchorLink href="#top">Privacidade</AnchorLink>
          <AnchorLink href="#top">Termos de Uso</AnchorLink>
          <AnchorLink href="#top">Cookies</AnchorLink>
        </div>
      </div>
    </footer>
  );
}
