import { Food3D } from "./Food3D";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-massa-cream">
      {/* Comidas 3D — escondidas em mobile, flutuando em desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        {/* Burger — canto superior direito */}
        <div className="absolute right-[8%] top-[28%]">
          <Food3D
            src="/food-burger.png"
            alt=""
            size={260}
            rotate={-8}
            float="slow"
          />
        </div>

        {/* Fritas — canto inferior esquerdo */}
        <div className="absolute bottom-[18%] left-[6%]">
          <Food3D
            src="/food-fries.png"
            alt=""
            size={220}
            rotate={10}
            float="slower"
          />
        </div>

        {/* Refri — canto superior esquerdo, menor */}
        <div className="absolute left-[10%] top-[22%]">
          <Food3D
            src="/food-drink.png"
            alt=""
            size={170}
            rotate={-14}
            float="slow"
            shadow="soft"
          />
        </div>

        {/* Pizza — canto inferior direito */}
        <div className="absolute bottom-[14%] right-[12%]">
          <Food3D
            src="/food-pizza.png"
            alt=""
            size={200}
            rotate={16}
            float="slower"
            shadow="soft"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pt-40 pb-24 text-center md:px-8 md:pt-52 md:pb-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-fluxa-red/25 bg-fluxa-red/8 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-fluxa-red">
          <span className="h-1.5 w-1.5 rounded-full bg-fluxa-red" />
          Para restaurantes
        </span>

        <h1 className="font-display mt-6 text-[2.75rem] font-bold leading-[1.05] text-carvao md:text-[4.25rem]">
          Não só uma assessoria.
          <br />
          <span className="relative inline-block text-fluxa-red">
            O canal
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 right-0 h-[0.18em] rounded-full bg-fluxa-red/25"
            />
          </span>{" "}
          onde seu restaurante precisa estar.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-carvao/60 md:text-xl">
          Marketing, tecnologia e comunidade para construir uma base própria de
          clientes que volta sempre — sem depender de apps de delivery ou
          agências.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#parceria"
            className="inline-flex items-center gap-2 rounded-full bg-fluxa-red px-6 py-3 text-sm font-medium text-massa-cream transition hover:bg-fluxa-red-hover"
          >
            Quero a Fluxa como parceira
          </a>
          <a
            href="#pilares"
            className="inline-flex items-center gap-2 rounded-full border border-carvao/15 px-6 py-3 text-sm font-medium text-carvao transition hover:bg-carvao hover:text-massa-cream"
          >
            Ver o ecossistema
          </a>
        </div>

        <p className="mt-14 text-xs uppercase tracking-[0.18em] text-carvao/40">
          Resposta em até 5 minutos no WhatsApp
        </p>
      </div>

      {/* Comidas 3D — versão compacta pra mobile (row abaixo do CTA) */}
      <div
        aria-hidden="true"
        className="relative mx-auto -mt-8 mb-4 flex max-w-md items-center justify-center gap-4 px-6 pb-6 lg:hidden"
      >
        <Food3D src="/food-burger.png" alt="" size={110} rotate={-6} shadow="soft" />
        <Food3D src="/food-fries.png" alt="" size={90} rotate={8} shadow="soft" />
        <Food3D src="/food-drink.png" alt="" size={80} rotate={-10} shadow="soft" />
      </div>
    </section>
  );
}
