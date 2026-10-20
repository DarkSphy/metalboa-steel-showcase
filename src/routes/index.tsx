import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Factory,
  HelpCircle,
  Menu,
  MoveRight,
  Phone,
  Search,
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

type PageKey = "home" | "atacado" | "varejo" | "gourmet" | "cozinhas" | "sobre" | "faq" | "contato";

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
  sobre: {
    title: "Experiência que transforma desafios em soluções.",
    eyebrow: "Sobre a MetalBoa",
    description:
      "Há quase 30 anos, unimos conhecimento técnico e fabricação própria para criar soluções em aço inox para operações profissionais.",
    image: fabrica,
    imageAlt: "Ambiente de fabricação MetalBoa",
  },
  faq: {
    title: "Respostas para você seguir em frente.",
    eyebrow: "Perguntas frequentes",
    description:
      "Reunimos orientações sobre produtos, projetos e atendimento. Se sua dúvida continuar, nossa equipe está por perto.",
    image: industrial,
    imageAlt: "Equipamentos em aço inox para operações profissionais",
  },
};

const navItems: { key: PageKey; label: string; href: string }[] = [
  { key: "home", label: "Início", href: "/" },
  { key: "atacado", label: "Atacado", href: "/atacado" },
  { key: "varejo", label: "Varejo", href: "/varejo" },
  { key: "gourmet", label: "Gourmet", href: "/gourmet" },
  { key: "cozinhas", label: "Cozinhas industriais", href: "/cozinhas-industriais" },
  { key: "sobre", label: "Sobre", href: "/sobre" },
  { key: "faq", label: "Dúvidas", href: "/perguntas-frequentes" },
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

type CatalogProduct = { name: string; slug: string };

const catalogs: Partial<Record<"atacado" | "varejo" | "cozinhas", CatalogProduct[]>> = {
  atacado: [
    { name: "Pasteleira", slug: "pasteleira" },
    { name: "Forma de Gelo", slug: "forma-de-gelo" },
    { name: "Estufas", slug: "estufas" },
    { name: "Estantes inox", slug: "estantes-inox" },
    { name: "Estantes aço galvanizado", slug: "estantes-aco-galvanizado" },
    { name: "Carrinho de Hot Dog e Churrasco", slug: "carrinho-de-hot-dog-e-churrasco" },
    { name: "Carrinho de Hot Dog", slug: "carrinho-de-hot-dog" },
    { name: "Carrinho de Churrasco", slug: "carrinho-de-churrasco" },
    { name: "Carro água de coco", slug: "carro-agua-de-coco" },
    { name: "Forno Elétrico", slug: "forno-eletrico" },
    { name: "Torre Gela Coco", slug: "torre-gela-coco" },
    { name: "Carro de pipoca", slug: "carro-de-pipoca" },
    { name: "Carro para transporte", slug: "carro-para-transporte" },
  ],
  varejo: [
    { name: "Escorredor de Fritura", slug: "escorredor-de-fritura" },
    { name: "Bancadas Inox", slug: "bancadas-inox" },
    { name: "Colher Inox Para Caldeirão", slug: "colher-inox-para-caldeirao" },
    { name: "Telas de alumínio", slug: "telas-de-aluminio" },
    { name: "Taboleiros", slug: "taboleiros" },
    { name: "Aquecedor de marmitas veicular", slug: "aquecedor-de-marmitas-veicular" },
  ],
  cozinhas: Array.from({ length: 26 }, (_, index) => {
    const number = String(26 - index).padStart(2, "0");
    return { name: `Layout Cozinha ${number}`, slug: `layout-cozinha-${Number(number)}` };
  }),
};

const featuredProducts = [
  { name: "Bancadas Inox", category: "VAREJO", slug: "bancadas-inox", image: industrial, imageAlt: "Bancada em inox em ambiente profissional" },
  { name: "Estantes inox", category: "ATACADO", slug: "estantes-inox", image: "/images/products/estantes-inox.webp", imageAlt: "Estante de aço inox MetalBoa" },
  { name: "Pasteleira", category: "ATACADO", slug: "pasteleira", image: "/images/products/pasteleira.webp", imageAlt: "Pasteleira MetalBoa em aço inox" },
  { name: "Escorredor de Fritura", category: "VAREJO", slug: "escorredor-de-fritura", image: "/images/products/escorredor-fritura.png", imageAlt: "Escorredor de fritura em aço inox MetalBoa" },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <img
      className={`brand-logo ${light ? "brand-logo-light" : ""}`}
      src="/images/metalboa-logo.png"
      alt="MetalBoa — Problemas complexos, soluções inteligentes"
    />
  );
}

function Header({ current }: { current: PageKey }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
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
          <Link to="/varejo">Explore nossos produtos <ArrowUpRight size={13} /></Link>
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
      <a
        className="whatsapp-float"
        href={WHATS}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale com a MetalBoa pelo WhatsApp"
      >
        <span className="whatsapp-tooltip">Fale com a MetalBoa</span>
        <svg aria-hidden="true" viewBox="0 0 32 32">
          <path d="M16.02 3.2A12.66 12.66 0 0 0 5.18 22.4L3.5 28.52l6.27-1.64A12.66 12.66 0 1 0 16.02 3.2Zm0 22.99c-1.91 0-3.79-.51-5.43-1.48l-.39-.23-3.72.97.99-3.62-.25-.4A10.1 10.1 0 1 1 16.02 26.2Zm5.55-7.57c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.38-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.48.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}

const productPageCopy: Record<string, { text: string; points: string[] }> = {
  "bancadas-inox": {
    text: "Mesas e bancadas em aço inox para ambientes comerciais e residenciais. O material combina durabilidade e facilidade de higienização, com aplicações em restaurantes, bares, cozinhas profissionais, laboratórios, churrasqueiras e áreas de serviço.",
    points: ["Aplicações comerciais e residenciais", "Fácil higienização", "Consulte opções e medidas com a equipe"],
  },
  "estantes-inox": {
    text: "Prateleiras em aço inox para organização e armazenamento em cozinhas domésticas e profissionais, restaurantes, lanchonetes e outros ambientes comerciais. Há opções lisas e gradeadas, em diferentes configurações.",
    points: ["Opções lisas e gradeadas", "Configurações com 3, 4 ou 6 prateleiras", "Medidas variam conforme o modelo"],
  },
  pasteleira: {
    text: "Equipamento para preparo de frituras com tacho removível, que facilita a limpeza e a troca de óleo. Conforme o modelo, acompanha prateleiras em aço inox, escorredor, tacho esmaltado, queimador a gás e conjunto de mangueira, registro e abraçadeiras para alta pressão.",
    points: ["Modelos MLPB, MLPAI e MLPFI", "Medidas entre 53 × 53 × 85 cm e 70 × 55 × 174 cm", "Consulte os itens inclusos em cada configuração"],
  },
  "escorredor-de-fritura": {
    text: "Escorredor em aço inox para drenar o óleo após a fritura e manter a área de preparo mais organizada. A MetalBoa também fabrica este produto sob medida.",
    points: ["Construção em aço inox", "Pode ser fabricado sob medida", "Consulte dimensões e opções"],
  },
  "forma-de-gelo": {
    text: "Forma em aço inox para produção de barras de gelo de 10 kg ou 25 kg. Também pode ser fabricada em outros tamanhos, conforme o projeto do cliente. As soldas são feitas pelo processo TIG e as formas são testadas contra vazamento.",
    points: ["Modelos padrão para barras de 10 kg e 25 kg", "Opções em ligas inox das linhas 200, 300 e 400", "Fabricação conforme projeto, mediante consulta"],
  },
};

const productPhotos: Record<string, string> = {
  "estantes-inox": "/images/products/estantes-inox.webp",
  pasteleira: "/images/products/pasteleira.webp",
  "escorredor-de-fritura": "/images/products/escorredor-fritura.png",
};

export function ProductDetailPage({ slug }: { slug: string }) {
  const found = Object.entries(catalogs).flatMap(([category, products]) =>
    (products ?? []).map((product) => ({ ...product, category: category as "atacado" | "varejo" | "cozinhas" })),
  ).find((product) => product.slug === slug);
  const featured = featuredProducts.find((product) => product.slug === slug);
  const name = found?.name ?? featured?.name ?? slug.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  const category = found?.category ?? (featured?.category === "ATACADO" ? "atacado" : "varejo");
  const copy = productPageCopy[slug] ?? {
    text: `${name} faz parte do catálogo MetalBoa. Fale com nossa equipe para conhecer opções, confirmar materiais, dimensões, aplicação e disponibilidade para sua necessidade.`,
    points: ["Atendimento direto com a equipe MetalBoa", "Consulte configurações e dimensões", "Disponibilidade confirmada no atendimento"],
  };
  const image = productPhotos[slug] ?? (slug === "bancadas-inox" ? industrial : fabrica);
  const whatsappLink = `${WHATS}?text=${encodeURIComponent(`Olá! Tenho interesse no produto ${name}. Poderiam me passar mais informações?`)}`;

  return (
    <div className="site-shell">
      <Header current={category} />
      <main>
        <nav className="shell product-breadcrumb" aria-label="Navegação estrutural">
          <Link to="/">Início</Link><span>/</span>
          <Link to={category === "cozinhas" ? "/cozinhas-industriais" : `/${category}`}>{category === "cozinhas" ? "Cozinhas industriais" : category}</Link><span>/</span><span>{name}</span>
        </nav>
        <section className="product-detail-section section-pad">
          <div className="shell product-detail-grid">
            <div className="product-detail-image"><img src={image} alt={name} /></div>
            <div className="product-detail-copy">
              <span className="section-index">METALBOA · {category === "cozinhas" ? "COZINHAS INDUSTRIAIS" : category.toUpperCase()}</span>
              <h1>{name}</h1>
              <p>{copy.text}</p>
              <ul className="product-spec-list">{copy.points.map((point) => <li key={point}><Check size={16} />{point}</li>)}</ul>
              <div className="product-price-card"><span>Preço e disponibilidade</span><strong>Consulte nossa equipe</strong><small>As condições variam conforme produto, configuração e quantidade.</small></div>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="button button-primary product-order-button">Consultar pelo WhatsApp <ArrowUpRight size={16} /></a>
              <p className="product-support-copy">Atendimento direto com a equipe MetalBoa. Se preferir, <Link to="/contato">fale com a gente por outros canais</Link>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <a className="whatsapp-float" href={WHATS} target="_blank" rel="noreferrer" aria-label="Fale com a MetalBoa pelo WhatsApp">
        <span className="whatsapp-tooltip">Fale com a MetalBoa</span>
        <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M16.02 3.2A12.66 12.66 0 0 0 5.18 22.4L3.5 28.52l6.27-1.64A12.66 12.66 0 1 0 16.02 3.2Zm0 22.99c-1.91 0-3.79-.51-5.43-1.48l-.39-.23-3.72.97.99-3.62-.25-.4A10.1 10.1 0 1 1 16.02 26.2Zm5.55-7.57c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.38-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.48.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" /></svg>
      </a>
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
                Com mais de 25 anos de experiência, desenvolvemos e fabricamos equipamentos em aço
                inox para clientes e parceiros em todo o Brasil. Nossa equipe une conhecimento
                técnico e fabricação própria para atender diferentes necessidades.
              </p>
              <Link to="/sobre" className="text-link">
                Conheça a MetalBoa <MoveRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section section-pad">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <span className="section-index">03 / PRODUTOS EM DESTAQUE</span>
              <h2>Equipamentos para o dia a dia da sua operação.</h2>
            </div>
            <p>Explore algumas opções do catálogo e consulte a loja para ver detalhes atualizados.</p>
          </div>
          <div className="featured-grid">
            {featuredProducts.map((product, index) => (
              <a className="featured-card" href={`/produtos/${product.slug}`} key={product.slug}>
                <span className="featured-card-art">
                  <img src={product.image} alt={product.imageAlt} loading="lazy" />
                  <span className="featured-card-number">{String(index + 1).padStart(2, "0")}</span>
                  <ArrowUpRight size={18} className="featured-card-arrow" />
                </span>
                <span className="featured-card-copy">
                  <small>{product.category}</small>
                  <strong>{product.name}</strong>
                  <span>Ver produto <ArrowRight size={14} /></span>
                </span>
              </a>
            ))}
          </div>
          <div className="featured-actions">
            <Link to="/atacado" className="button button-primary">Ver catálogo de atacado <ArrowRight size={16} /></Link>
            <Link to="/varejo" className="button button-secondary">Ver catálogo de varejo <ArrowRight size={16} /></Link>
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
              <span className="section-index section-index-light">04 / NOSSO DIFERENCIAL</span>
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
              <span className="section-index">05 / COMO TRABALHAMOS</span>
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
  const isAbout = current === "sobre";
  const isFaq = current === "faq";
  const title =
    current === "gourmet"
      ? "Funcionalidade com acabamento que acolhe."
      : current === "cozinhas"
        ? "Eficiência para cada etapa da sua cozinha."
        : current === "atacado"
          ? "Fornecimento com diálogo e previsibilidade."
          : current === "varejo"
            ? "Conte com orientação direta para escolher."
            : isAbout
              ? "Mais de 25 anos transformando projetos em equipamentos de aço inox."
              : isFaq
                ? "Encontre aqui as respostas para as dúvidas mais comuns."
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
            : isAbout
              ? "Somos uma organização com mais de 25 anos de experiência na fabricação e no desenvolvimento de equipamentos e artefatos em aço inoxidável. Atendemos parceiros e clientes em todo o Brasil a partir da nossa sede em Vespasiano, na região metropolitana de Belo Horizonte. Nossa equipe trabalha para transformar projetos e ideias em soluções de qualidade e confiança."
              : isFaq
                ? "Saiba mais sobre nosso catálogo, projetos e formas de atendimento. Para valores, disponibilidade e detalhes de um pedido, fale com a equipe."
                : "Você pode falar com nossa equipe por WhatsApp, telefone ou e-mail. Se preferir, visite nossa unidade em Vespasiano, Minas Gerais.";

  return (
    <>
      <section className="interior-intro section-pad">
        <div className="shell interior-grid">
          <div>
            <span className="section-index">
              {isAbout
                ? "01 / NOSSA HISTÓRIA"
                : isFaq
                  ? "01 / AJUDA E ORIENTAÇÃO"
                  : current === "contato"
                ? "01 / CANAIS DE ATENDIMENTO"
                : trade
                  ? "01 / RELACIONAMENTO COMERCIAL"
                  : "01 / SOLUÇÕES POR APLICAÇÃO"}
            </span>
            <span className="interior-icon">
              {isAbout ? (
                <Factory size={20} />
              ) : isFaq ? (
                <HelpCircle size={20} />
              ) : current === "contato" ? (
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
            {current !== "contato" && !isFaq && (
              <a href={WHATS} target="_blank" rel="noreferrer" className="text-link">
                Converse com um especialista <MoveRight size={16} />
              </a>
            )}
          </div>
        </div>
      </section>
      {isAbout && <AboutContent />}
      {isFaq && <FaqContent />}
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
      {(current === "atacado" || current === "varejo" || current === "cozinhas") && (
        <ProductCatalog current={current} />
      )}
      {isContactPanel(current) && (
        <section className="contact-details section-pad">
          <div className="shell contact-layout">
            <ContactForm />
            <div className="contact-details-grid">
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
          </div>
        </section>
      )}
      <ContactBand />
    </>
  );
}

function AboutContent() {
  return (
    <section className="about-section section-pad">
      <div className="shell">
        <div className="section-heading-row">
          <div>
            <span className="section-index">02 / NOSSA MISSÃO</span>
            <h2>Atender necessidades com qualidade e responsabilidade.</h2>
          </div>
          <p>
            Desenvolver equipamentos robustos e de alto padrão, trazendo satisfação, praticidade e
            sustentabilidade para cada demanda.
          </p>
        </div>
        <div className="about-pillars about-pillars-values">
          <article><span>01 / VISÃO</span><h3>Ser referência com raízes em Minas.</h3><p>Atuar como referência no mercado mineiro, mantendo o compromisso com clientes, colaboradores e parceiros ao longo da nossa trajetória.</p></article>
          <article><span>02 / QUALIDADE</span><h3>Fazer bem feito, com segurança.</h3><p>A qualidade dos produtos orienta nosso trabalho e está ligada à segurança e à satisfação de quem escolhe a MetalBoa.</p></article>
          <article><span>03 / VALORES</span><h3>Relações de confiança.</h3><p>Compromisso, ética, honestidade, respeito e busca por melhorias guiam nossas relações com clientes, fornecedores e parceiros.</p></article>
        </div>
        <Link to="/contato" className="text-link">Vamos conversar sobre sua operação <MoveRight size={16} /></Link>
      </div>
    </section>
  );
}

const faqItems = [
  ["Quais produtos a MetalBoa oferece?", "O catálogo inclui equipamentos e peças em aço inox para diferentes usos, como bancadas, estantes, pias, estufas e carrinhos. Consulte as páginas de Atacado, Varejo e Cozinhas industriais para explorar as categorias."],
  ["A MetalBoa desenvolve soluções sob medida?", "Algumas demandas podem exigir avaliação de projeto, medidas e aplicação. Conte à equipe o que você precisa para confirmar as possibilidades para o seu caso."],
  ["Como posso solicitar um orçamento?", "Entre em contato pelo WhatsApp, telefone ou e-mail. Informe o produto ou projeto desejado, a quantidade e, se possível, medidas e local de uso."],
  ["Vocês atendem empresas e revendedores?", "Sim. A área de Atacado é dedicada ao atendimento comercial de revendas, distribuidores e empresas. A equipe pode conversar sobre o perfil da sua operação e a necessidade de fornecimento."],
  ["Posso comprar como cliente de varejo?", "Sim. A página de Varejo apresenta opções para atendimento direto. A disponibilidade e as condições podem variar conforme o produto; confirme os detalhes com a equipe."],
  ["A MetalBoa atende projetos de cozinhas industriais e espaços gourmet?", "Sim. O site apresenta soluções para cozinhas industriais e espaços gourmet. Para avaliar uma aplicação específica, envie as informações do espaço e da rotina de uso."],
  ["Como confirmo preço, estoque, prazo e entrega?", "Essas informações dependem do produto, da quantidade e do destino. Fale com a equipe para consultar os dados atualizados antes de concluir o pedido."],
];

function FaqContent() {
  return (
    <section className="faq-section section-pad">
      <div className="shell faq-grid">
        <div>
          <span className="section-index">02 / PERGUNTAS E RESPOSTAS</span>
          <h2>O que você precisa saber.</h2>
          <p>Não encontrou sua resposta? Nossa equipe pode ajudar com seu projeto ou pedido.</p>
          <Link to="/contato" className="button button-primary">Fale com a equipe <ArrowRight size={16} /></Link>
        </div>
        <div className="faq-list">
          {faqItems.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <div className="contact-form-panel">
      <span className="section-index">FALE COM A NOSSA EQUIPE</span>
      <h2>Conte um pouco sobre o que você precisa.</h2>
      <p>Preencha os campos e nossa equipe poderá entender melhor sua necessidade.</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>Nome<input name="nome" autoComplete="name" placeholder="Seu nome" required /></label>
        <div className="form-row">
          <label>E-mail<input name="email" type="email" autoComplete="email" placeholder="voce@empresa.com.br" required /></label>
          <label>Telefone<input name="telefone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" /></label>
        </div>
        <label>Empresa <span>(opcional)</span><input name="empresa" autoComplete="organization" placeholder="Nome da empresa" /></label>
        <label>Assunto<select name="assunto" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Orçamento de produto</option><option>Projeto sob medida</option><option>Atacado e revenda</option><option>Outro assunto</option></select></label>
        <label>Mensagem<textarea name="mensagem" rows={4} placeholder="Descreva brevemente sua necessidade" required /></label>
        <button className="button button-primary" type="submit">Enviar mensagem <ArrowRight size={16} /></button>
        <small className="form-note">Prévia do formulário: o envio online ainda não está conectado. Para atendimento agora, use WhatsApp ou e-mail.</small>
      </form>
    </div>
  );
}

function isContactPanel(current: PageKey) {
  return current === "contato";
}

function ProductCatalog({ current }: { current: "atacado" | "varejo" | "cozinhas" }) {
  const [query, setQuery] = useState("");
  const products = catalogs[current] ?? [];
  const filteredProducts = products.filter((product) =>
    product.name.toLocaleLowerCase("pt-BR").includes(query.trim().toLocaleLowerCase("pt-BR")),
  );
  const title =
    current === "cozinhas" ? "Cozinha industrial" : current === "atacado" ? "Atacado" : "Varejo";

  return (
    <section className="catalog-section section-pad" id="produtos">
      <div className="shell">
        <div className="section-heading-row catalog-heading">
          <div>
            <span className="section-index">CATÁLOGO METALBOA · {title.toUpperCase()}</span>
            <h2>Produtos para a sua operação.</h2>
          </div>
          <p>
            {products.length} opções no catálogo. Acesse cada produto para consultar detalhes e
            conversar com nossa equipe.
          </p>
        </div>
        <div className="catalog-toolbar">
          <label className="catalog-search">
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar produto"
              aria-label={`Buscar produtos de ${title}`}
            />
          </label>
          <span className="catalog-count">
            {filteredProducts.length} de {products.length} produtos
          </span>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <a
                key={product.slug}
                className="product-card"
                href={`/produtos/${product.slug}`}
              >
                <span className="product-card-top">
                  <span className="product-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="product-link-icon">
                    <ArrowUpRight size={17} />
                  </span>
                </span>
                <span className="product-card-name">{product.name}</span>
                <span className="product-card-link">
                  Ver produto <MoveRight size={14} />
                </span>
              </a>
            ))}
          </div>
        ) : (
          <p className="catalog-empty">Nenhum produto encontrado para “{query}”.</p>
        )}
        <div className="catalog-footer">
          <span>Preços, estoque e configurações são confirmados no atendimento.</span>
          <Link to="/contato" className="text-link">Fale com nossa equipe <ArrowUpRight size={15} /></Link>
        </div>
      </div>
    </section>
  );
}
