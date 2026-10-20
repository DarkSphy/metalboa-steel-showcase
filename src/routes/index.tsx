import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Factory,
  Menu,
  MoveRight,
  Phone,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import gourmet from "@/assets/gourmet.jpg";
import fabrica from "@/assets/fabrica.jpg";
import industrial from "@/assets/industrial.jpg";

const WHATS = "https://wa.me/5531971775866";
const PHONE = "tel:+553136212931";
const ADDRESS = "https://maps.google.com/?q=R.+São+Paulo,+229,+Vespasiano,+MG";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MetalBoa | Engenharia e soluções em aço inox" },
      {
        name: "description",
        content:
          "Problemas complexos, soluções inteligentes. Engenharia, fabricação e equipamentos em aço inox para operações profissionais.",
      },
      { property: "og:title", content: "MetalBoa | Engenharia e soluções em aço inox" },
      {
        property: "og:description",
        content:
          "Engenharia e fabricação própria de soluções em aço inox para operações profissionais.",
      },
      { property: "og:type", content: "website" },
      { name: "theme-color", content: "#08294a" },
    ],
  }),
  component: HomePage,
});

type PageKey = "home" | "atacado" | "varejo" | "gourmet" | "cozinhas" | "contato";

const pages: Record<
  PageKey,
  { title: string; eyebrow: string; description: string; image: string; imageAlt: string }
> = {
  home: {
    title: "Problemas complexos. Soluções inteligentes.",
    eyebrow: "Engenharia e fabricação em aço inox",
    description:
      "Desenvolvemos soluções em aço inox para operações que exigem precisão, resistência e confiança. Da necessidade ao projeto, da fabricação à entrega.",
    image: hero,
    imageAlt: "Superfícies e equipamentos em aço inox numa cozinha profissional",
  },
  atacado: {
    title: "Parceria para crescer junto.",
    eyebrow: "Atacado",
    description:
      "Atendimento comercial para revendas, distribuidores e empresas que precisam de fornecimento confiável em aço inox. Vamos entender o seu volume e a sua operação.",
    image: fabrica,
    imageAlt: "Processo de fabricação de equipamentos em aço inox",
  },
  varejo: {
    title: "A solução certa para a sua necessidade.",
    eyebrow: "Varejo",
    description:
      "Atendimento direto para quem busca equipamentos e peças em aço inox. Conte para a nossa equipe o que você precisa e receba orientação para encontrar a solução adequada.",
    image: industrial,
    imageAlt: "Equipamentos de aço inox para uso profissional",
  },
  gourmet: {
    title: "Feito para reunir. Projetado para durar.",
    eyebrow: "Espaços gourmet",
    description:
      "Bancadas, cubas e estruturas em aço inox que combinam acabamento cuidadoso, funcionalidade e resistência para espaços de convivência.",
    image: gourmet,
    imageAlt: "Área gourmet equipada com bancada de aço inox",
  },
  cozinhas: {
    title: "Uma operação eficiente começa no projeto.",
    eyebrow: "Cozinhas industriais",
    description:
      "Equipamentos e estruturas em aço inox pensados para rotinas profissionais. Planejamos cada detalhe com foco em fluxo, higiene, durabilidade e facilidade de manutenção.",
    image: industrial,
    imageAlt: "Estação de trabalho em aço inox para cozinha profissional",
  },
  contato: {
    title: "Vamos encontrar a solução juntos.",
    eyebrow: "Fale com a MetalBoa",
    description:
      "Nossa equipe está pronta para conversar sobre o seu projeto, entender a sua operação e indicar os próximos passos.",
    image: fabrica,
    imageAlt: "Equipe e ambiente de fabricação MetalBoa",
  },
};

const navItems: { key: PageKey; label: string; href: string }[] = [
  { key: "home", label: "Início", href: "/" },
  { key: "atacado", label: "Atacado", href: "/atacado" },
  { key: "varejo", label: "Varejo", href: "/varejo" },
  { key: "gourmet", label: "Gourmet", href: "/gourmet" },
  { key: "cozinhas", label: "Cozinhas industriais", href: "/cozinhas-industriais" },
  { key: "contato", label: "Contato", href: "/contato" },
];

const audienceCards = [
  {
    key: "cozinhas" as const,
    number: "01",
    title: "Cozinhas industriais",
    description:
      "Estruturas e equipamentos para cozinhas profissionais e operações de alimentação.",
    image: industrial,
    alt: "Bancada de aço inox numa cozinha profissional",
  },
  {
    key: "gourmet" as const,
    number: "02",
    title: "Espaços gourmet",
    description: "Soluções funcionais e duráveis para áreas gourmet e projetos residenciais.",
    image: gourmet,
    alt: "Projeto gourmet com acabamentos em inox",
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-mark ${light ? "brand-mark-light" : ""}`} aria-label="MetalBoa">
      <span className="brand-word">
        METAL<span>BOA</span>
      </span>
      <span className="brand-tagline">PROBLEMAS COMPLEXOS, SOLUÇÕES INTELIGENTES</span>
    </span>
  );
}

function Header({ current }: { current: PageKey }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>Engenharia, desenvolvimento e fabricação em aço inox</span>
          <a href={WHATS} target="_blank" rel="noreferrer">
            <Phone size={13} /> (31) 97177-5866
          </a>
        </div>
      </div>
      <div className="shell nav-row">
        <Link to="/" aria-label="MetalBoa, início" className="brand-link">
          <Brand />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${open ? "main-nav-open" : ""}`} aria-label="Navegação principal">
          {navItems.map((item) =>
            item.key === "home" ? (
              <Link
                key={item.key}
                to="/"
                className={current === item.key ? "nav-active" : ""}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.key}
                to={item.href}
                className={current === item.key ? "nav-active" : ""}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <Link to="/contato" className="button button-small button-primary nav-cta">
          Fale com um especialista <ArrowUpRight size={15} />
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand-column">
          <Link to="/" aria-label="MetalBoa, início">
            <Brand light />
          </Link>
          <p>Engenharia e soluções em aço inox para operações que não podem parar.</p>
        </div>
        <div className="footer-links">
          <p className="footer-heading">Explore</p>
          {navItems.slice(1).map((item) => (
            <Link key={item.key} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-links footer-contact">
          <p className="footer-heading">Vamos conversar</p>
          <a href={WHATS} target="_blank" rel="noreferrer">
            WhatsApp: (31) 97177-5866
          </a>
          <a href={PHONE}>Telefone: (31) 3621-2931</a>
          <a href="mailto:contato@metalboa.com.br">contato@metalboa.com.br</a>
          <a href={ADDRESS} target="_blank" rel="noreferrer">
            R. São Paulo, 229 · Celvia
            <br />
            Vespasiano · MG · 33200-608
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="shell footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} Metalúrgica Lisboa · MetalBoa. Todos os direitos
            reservados.
          </span>
          <a href="https://www.metalboa.com.br/" target="_blank" rel="noreferrer">
            Acesse nossa loja online <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function ContactBand() {
  return (
    <section className="contact-band">
      <div className="shell contact-band-inner">
        <div>
          <p className="eyebrow eyebrow-light">O próximo passo começa com uma conversa</p>
          <h2>
            Seu desafio merece
            <br />
            um projeto à altura.
          </h2>
        </div>
        <Link to="/contato" className="button button-light">
          Converse com nossa equipe <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

function HomePage() {
  return <SitePage current="home" />;
}

export function SitePage({ current }: { current: PageKey }) {
  const page = pages[current];
  const isHome = current === "home";
  const isContact = current === "contato";

  return (
    <div className="site-shell">
      <Header current={current} />
      <main>
        <section className={`hero ${isHome ? "hero-home" : "hero-inner"}`}>
          <img src={page.image} alt={page.imageAlt} className="hero-image" />
          <div className="hero-shade" />
          <div className="shell hero-content">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-dot" />
                {page.eyebrow}
              </p>
              <h1>{page.title}</h1>
              <p className="hero-description">{page.description}</p>
              <div className="hero-actions">
                <Link to="/contato" className="button button-primary">
                  {isContact ? "Iniciar conversa" : "Fale sobre seu projeto"}{" "}
                  <ArrowRight size={16} />
                </Link>
                {isHome && (
                  <a href="#solucoes" className="button button-outline">
                    Conheça nossas soluções <ArrowDown size={15} />
                  </a>
                )}
              </div>
            </div>
            <div className="hero-side-note">
              <span className="hero-side-line" /> Precisão que conecta cada etapa.
            </div>
          </div>
          {isHome && (
            <a href="#solucoes" className="scroll-cue" aria-label="Descer até as soluções">
              <span>Role para explorar</span>
              <ArrowDown size={15} />
            </a>
          )}
        </section>

        {isHome ? <HomeContent /> : <InteriorContent current={current} />}
      </main>
      <Footer />
    </div>
  );
}

function HomeContent() {
  return (
    <>
      <section className="intro-section section-pad">
        <div className="shell intro-grid">
          <div className="intro-label">
            <span className="section-index">01 / QUEM SOMOS</span>
            <span className="index-rule" />
          </div>
          <div className="intro-copy">
            <p className="eyebrow">Uma parceria que vai além do produto</p>
            <h2>
              Engenharia próxima.
              <br />
              <span>Resultado de verdade.</span>
            </h2>
            <div className="intro-bottom">
              <p>
                A MetalBoa transforma necessidades de operação em soluções funcionais de aço inox.
                Com fabricação própria e atendimento consultivo, atuamos lado a lado com cada
                cliente, do primeiro desenho à entrega.
              </p>
              <Link to="/contato" className="text-link">
                Conheça nosso jeito de trabalhar <MoveRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="solutions-section section-pad">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <span className="section-index">02 / ONDE ATUAMOS</span>
              <h2>
                Soluções que acompanham
                <br />a realidade da operação.
              </h2>
            </div>
            <p>
              Projetos para diferentes segmentos, com atenção a cada espaço, processo e necessidade.
            </p>
          </div>
          <div className="solution-grid">
            {audienceCards.map((card) => (
              <Link
                key={card.key}
                to={card.key === "cozinhas" ? "/cozinhas-industriais" : "/gourmet"}
                className="solution-card"
              >
                <img src={card.image} alt={card.alt} loading="lazy" />
                <div className="solution-overlay" />
                <span className="solution-number">{card.number} / 02</span>
                <div className="solution-card-copy">
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                  <span className="round-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="commercial-paths">
            <div>
              <span className="section-index">ATENDIMENTO COMERCIAL</span>
              <h3>Um canal para cada parceria.</h3>
            </div>
            <Link to="/atacado" className="commercial-link">
              <span>
                <strong>Atacado</strong>
                <small>Parceria e fornecimento para empresas</small>
              </span>
              <ArrowRight size={17} />
            </Link>
            <Link to="/varejo" className="commercial-link">
              <span>
                <strong>Varejo</strong>
                <small>Atendimento direto para sua necessidade</small>
              </span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="approach-image-wrap">
          <img
            src={fabrica}
            alt="Detalhe da fabricação e do trabalho com aço inox"
            loading="lazy"
          />
        </div>
        <div className="approach-copy">
          <span className="section-index section-index-light">03 / NOSSO DIFERENCIAL</span>
          <h2>O encaixe perfeito entre desafio e solução.</h2>
          <p>
            Um bom equipamento começa com uma pergunta bem feita. Entendemos o ambiente, a rotina e
            os objetivos da sua operação antes de recomendar caminhos.
          </p>
          <ul className="approach-list">
            <li>
              <Check size={17} /> Escuta técnica e atendimento direto
            </li>
            <li>
              <Check size={17} /> Desenvolvimento alinhado ao seu espaço
            </li>
            <li>
              <Check size={17} /> Fabricação própria em aço inox
            </li>
          </ul>
          <Link to="/contato" className="text-link text-link-light">
            Conte para nós sobre o seu projeto <MoveRight size={16} />
          </Link>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="shell">
          <div className="section-heading-row process-heading">
            <div>
              <span className="section-index">04 / COMO TRABALHAMOS</span>
              <h2>
                Da conversa à<br />
                solução pronta.
              </h2>
            </div>
            <p>Um processo claro ajuda a transformar demandas complexas em decisões seguras.</p>
          </div>
          <div className="process-grid">
            {[
              [
                "01",
                "Entendimento",
                "Ouvimos a necessidade e conhecemos a operação, o espaço e os objetivos.",
              ],
              [
                "02",
                "Desenvolvimento",
                "Avaliamos as possibilidades e alinhamos uma solução adequada ao projeto.",
              ],
              [
                "03",
                "Fabricação",
                "Produzimos com atenção aos detalhes, materiais e requisitos definidos.",
              ],
              [
                "04",
                "Acompanhamento",
                "Mantemos o contato próximo em cada etapa até a entrega da solução.",
              ],
            ].map(([n, title, copy]) => (
              <article key={n} className="process-step">
                <span className="process-num">{n}</span>
                <span className="process-icon">
                  {n === "01" ? (
                    <Phone size={19} />
                  ) : n === "02" ? (
                    <Wrench size={19} />
                  ) : n === "03" ? (
                    <Factory size={19} />
                  ) : (
                    <Check size={19} />
                  )}
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}

function InteriorContent({ current }: { current: PageKey }) {
  const audience = current === "gourmet" || current === "cozinhas";
  const trade = current === "atacado" || current === "varejo";
  const title =
    current === "gourmet"
      ? "Funcionalidade com acabamento que acolhe."
      : current === "cozinhas"
        ? "Eficiência para cada etapa da sua cozinha."
        : current === "atacado"
          ? "Fornecimento com diálogo e previsibilidade."
          : current === "varejo"
            ? "Conte com orientação direta para escolher."
            : "Estamos prontos para ouvir.";
  const body =
    current === "gourmet"
      ? "Cada espaço tem sua dinâmica. Ajudamos a pensar soluções em inox que aproveitam melhor a área, apoiam a rotina e mantêm um acabamento coerente com o ambiente."
      : current === "cozinhas"
        ? "Bancadas, pias, prateleiras e equipamentos podem fazer parte de uma estrutura de trabalho mais fluida. A solução considera o fluxo, a limpeza e as exigências da sua operação."
        : current === "atacado"
          ? "Queremos construir relações comerciais duradouras. Conversamos sobre as necessidades do seu negócio, frequência de fornecimento e perfil dos produtos para orientar o atendimento."
          : current === "varejo"
            ? "Nosso time ajuda você a encontrar o caminho adequado para sua demanda. Conte qual equipamento ou solução está procurando para receber um atendimento atencioso e objetivo."
            : "Você pode falar com nossa equipe por WhatsApp, telefone ou e-mail. Se preferir, visite nossa unidade em Vespasiano, Minas Gerais.";

  return (
    <>
      <section className="interior-intro section-pad">
        <div className="shell interior-grid">
          <div>
            <span className="section-index">
              {current === "contato"
                ? "01 / CANAIS DE ATENDIMENTO"
                : trade
                  ? "01 / RELACIONAMENTO COMERCIAL"
                  : "01 / SOLUÇÕES POR APLICAÇÃO"}
            </span>
            <span className="interior-icon">
              {current === "contato" ? (
                <Phone size={20} />
              ) : trade ? (
                <ArrowRight size={20} />
              ) : (
                <Wrench size={20} />
              )}
            </span>
          </div>
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
            {current !== "contato" && (
              <a href={WHATS} target="_blank" rel="noreferrer" className="text-link">
                Converse com um especialista <MoveRight size={16} />
              </a>
            )}
          </div>
        </div>
      </section>
      {audience && (
        <section className="application-section">
          <div className="shell application-grid">
            <img
              src={current === "gourmet" ? gourmet : industrial}
              alt={
                current === "gourmet"
                  ? "Projeto de área gourmet com detalhes de inox"
                  : "Estrutura e equipamentos em inox para cozinha industrial"
              }
              loading="lazy"
            />
            <div>
              <span className="section-index">02 / PROJETO COM PROPÓSITO</span>
              <h2>Feito para funcionar bem todos os dias.</h2>
              <p>
                Materiais, dimensões e acabamentos fazem diferença na experiência de quem usa o
                espaço. Avaliamos o contexto do projeto e a rotina para orientar escolhas que façam
                sentido.
              </p>
              <ul className="approach-list application-list">
                <li>
                  <Check size={17} /> Atenção às dimensões e ao espaço disponível
                </li>
                <li>
                  <Check size={17} /> Materiais adequados à rotina de uso
                </li>
                <li>
                  <Check size={17} /> Orientação próxima desde a primeira conversa
                </li>
              </ul>
              <Link to="/contato" className="button button-primary">
                Solicite atendimento <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}
      {trade && (
        <section className="trade-section section-pad">
          <div className="shell trade-grid">
            <article>
              <span>01</span>
              <h3>Entender o seu negócio</h3>
              <p>Conhecemos o perfil da sua empresa e o que você precisa atender.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Construir a proposta</h3>
              <p>Alinhamos produtos, volumes e condições diretamente com a equipe.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Manter a parceria</h3>
              <p>Acompanhamos o atendimento e buscamos relações de longo prazo.</p>
            </article>
          </div>
        </section>
      )}
      {isContactPanel(current) && (
        <section className="contact-details section-pad">
          <div className="shell contact-details-grid">
            <a href={WHATS} target="_blank" rel="noreferrer" className="contact-detail-card">
              <span>WHATSAPP</span>
              <strong>(31) 97177-5866</strong>
              <small>Fale com a equipe comercial</small>
              <ArrowUpRight size={18} />
            </a>
            <a href={PHONE} className="contact-detail-card">
              <span>TELEFONE</span>
              <strong>(31) 3621-2931</strong>
              <small>Atendimento MetalBoa</small>
              <ArrowUpRight size={18} />
            </a>
            <a href="mailto:contato@metalboa.com.br" className="contact-detail-card">
              <span>E-MAIL</span>
              <strong>contato@metalboa.com.br</strong>
              <small>Envie os detalhes do seu projeto</small>
              <ArrowUpRight size={18} />
            </a>
            <a href={ADDRESS} target="_blank" rel="noreferrer" className="contact-detail-card">
              <span>ENDEREÇO</span>
              <strong>Vespasiano · MG</strong>
              <small>R. São Paulo, 229 · Celvia</small>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      )}
      <ContactBand />
    </>
  );
}

function isContactPanel(current: PageKey) {
  return current === "contato";
}
