import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import gourmet from "@/assets/gourmet.jpg";
import fabrica from "@/assets/fabrica.jpg";
import industrial from "@/assets/industrial.jpg";

const WHATS = "https://wa.me/5531971775866";
const LOJA = "https://www.metalboa.com.br";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MetalBoa — Aço inox para cozinhas industriais e espaços gourmet" },
      {
        name: "description",
        content:
          "Mesas, pias, bancadas e equipamentos em aço inox feitos sob medida. Cozinha industrial, gourmet, atacado e varejo.",
      },
      { property: "og:title", content: "MetalBoa — Aço inox sob medida" },
      {
        property: "og:description",
        content: "Equipamentos em aço inox para cozinhas industriais e áreas gourmet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const linhas = [
  { n: "01", t: "Cozinha industrial", d: "Mesas, pias, prateleiras e coifas para restaurantes, padarias e cozinhas de produção.", href: `${LOJA}/cozinha-industrial/`, img: industrial },
  { n: "02", t: "Gourmet", d: "Churrasqueiras, bancadas e acessórios para a área de lazer da sua casa.", href: `${LOJA}/gourmet/`, img: gourmet },
];

const vantagens = [
  ["Não enferruja", "Resistente à corrosão, umidade e produtos de limpeza."],
  ["Higiene de verdade", "Superfície não porosa, aprovada pela vigilância sanitária."],
  ["Dura décadas", "Investimento único que atravessa gerações de uso pesado."],
  ["100% reciclável", "Material sustentável, que volta ao ciclo sem perder qualidade."],
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* topo */}
      <header className="absolute inset-x-0 top-0 z-20 text-ink-foreground">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
          <a href="/" className="text-2xl font-black tracking-tight [font-stretch:125%]">
            METAL<span className="text-signal">BOA</span>
          </a>
          <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest md:flex">
            <a href={`${LOJA}/cozinha-industrial/`} className="hover:text-signal">Industrial</a>
            <a href={`${LOJA}/gourmet/`} className="hover:text-signal">Gourmet</a>
            <a href={`${LOJA}/atacado/`} className="hover:text-signal">Atacado</a>
            <a href={`${LOJA}/varejo/`} className="hover:text-signal">Varejo</a>
          </nav>
          <a href={WHATS} className="border border-ink-foreground/40 px-4 py-2 font-mono text-xs uppercase tracking-widest transition hover:border-signal hover:bg-signal">
            Orçamento
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-ink-foreground">
        <img src={hero} alt="Bancada de aço inox em cozinha profissional" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/50" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-14 md:px-10">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-steel">Aço inox · Belo Horizonte · desde a primeira solda</p>
          <h1 className="max-w-5xl text-[13vw] font-black leading-[0.85] tracking-tight [font-stretch:75%] md:text-[8.5rem]">
            Feito em inox.<br />
            <span className="text-signal">Feito pra durar.</span>
          </h1>
          <div className="mt-10 flex flex-col gap-8 border-t border-ink-foreground/20 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-lg text-ink-foreground/80">
              Mesas, pias, bancadas e equipamentos em aço inox para cozinhas industriais e espaços gourmet — de linha ou sob medida.
            </p>
            <div className="flex gap-3">
              <a href={`${LOJA}/comprar/`} className="bg-signal px-7 py-4 font-semibold text-accent-foreground transition hover:brightness-110">Ver produtos →</a>
              <a href={WHATS} className="border border-ink-foreground/40 px-7 py-4 font-semibold transition hover:bg-ink-foreground hover:text-ink">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* faixa */}
      <div className="overflow-hidden border-y border-border bg-background py-4">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-muted-foreground">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ["Inox 304", "Sob medida", "Atacado e varejo", "Entrega para todo o Brasil", "Solda TIG", "Acabamento escovado"].map((t) => (
              <span key={t + i} className="flex items-center gap-10">{t}<span className="text-signal">✕</span></span>
            )),
          )}
        </div>
      </div>

      {/* linhas */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 flex items-end justify-between gap-6">
          <h2 className="text-5xl font-black leading-none tracking-tight [font-stretch:80%] md:text-7xl">Duas linhas.<br />Um padrão.</h2>
          <p className="hidden max-w-xs text-muted-foreground md:block">Do restaurante que serve 500 refeições por dia à varanda do fim de semana.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {linhas.map((l) => (
            <a key={l.n} href={l.href} className="group relative block overflow-hidden bg-muted">
              <img src={l.img} alt={l.t} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/90 to-transparent p-8 text-ink-foreground">
                <div>
                  <span className="font-mono text-xs text-signal">{l.n}</span>
                  <h3 className="mt-1 text-3xl font-bold md:text-4xl">{l.t}</h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-foreground/75">{l.d}</p>
                </div>
                <span className="text-3xl transition group-hover:translate-x-1 group-hover:text-signal">→</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[["Atacado", "Condições especiais para revendas, construtoras e redes.", "atacado"], ["Varejo", "Compre a peça que precisa, direto da fábrica.", "varejo"]].map(([t, d, s]) => (
            <a key={s} href={`${LOJA}/${s}/`} className="group flex items-center justify-between border border-border p-8 transition hover:border-foreground">
              <div>
                <h3 className="text-2xl font-bold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
              <span className="text-2xl group-hover:text-signal">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* porque */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
          <img src={fabrica} alt="Soldador trabalhando em chapa de aço inox" loading="lazy" width={1280} height={1024} className="h-full min-h-[420px] w-full object-cover" />
          <div className="px-6 py-20 md:px-16 md:py-28">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">Por que a MetalBoa</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight [font-stretch:80%] md:text-6xl">Cada peça passa pela mão de quem entende de metal.</h2>
            <p className="mt-6 max-w-md text-ink-foreground/70">
              Fabricação própria, chapa de qualidade e acabamento caprichado. Você fala direto com quem produz — sem intermediário e com projeto do jeito que o seu espaço pede.
            </p>
            <dl className="mt-12 grid grid-cols-2 gap-px bg-ink-foreground/15">
              {[["Sob medida", "Projetos personalizados"], ["Direto", "Preço de fábrica"], ["Robusto", "Uso profissional"], ["Brasil", "Enviamos para todo o país"]].map(([a, b]) => (
                <div key={a} className="bg-ink p-5">
                  <dt className="text-xl font-bold">{a}</dt>
                  <dd className="mt-1 text-sm text-ink-foreground/60">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* vantagens */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <h2 className="max-w-3xl text-5xl font-black leading-none tracking-tight [font-stretch:80%] md:text-7xl">Por que inox, e não outra coisa.</h2>
        <ol className="mt-16 border-t border-foreground">
          {vantagens.map(([t, d], i) => (
            <li key={t} className="grid gap-2 border-b border-border py-8 md:grid-cols-[120px_1fr_1fr] md:items-baseline">
              <span className="font-mono text-sm text-signal">0{i + 1}</span>
              <h3 className="text-2xl font-bold md:text-3xl">{t}</h3>
              <p className="text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* cta */}
      <section className="bg-signal text-accent-foreground">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10">
          <h2 className="text-4xl font-black leading-none tracking-tight [font-stretch:80%] md:text-6xl">Tem um projeto em mente?</h2>
          <a href={WHATS} className="bg-ink px-8 py-5 text-lg font-semibold text-ink-foreground transition hover:bg-ink/85">Chamar no WhatsApp · (31) 97177-5866</a>
        </div>
      </section>

      <footer className="bg-ink text-ink-foreground/60">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 px-6 py-10 font-mono text-xs uppercase tracking-widest md:flex-row md:px-10">
          <span className="text-ink-foreground">METAL<span className="text-signal">BOA</span></span>
          <a href={`${LOJA}/contato/`} className="hover:text-signal">Contato</a>
          <span>© {new Date().getFullYear()} MetalBoa</span>
        </div>
      </footer>
    </div>
  );
}
