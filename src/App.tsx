import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Github,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { MusicPlayer } from "./components/MusicPlayer";
import { ProjectItem } from "./components/ProjectItem";
import "./App.css";

const projects = [
  {
    title: "EasyMDO",
    eyebrow: "Produto full-stack · 2026",
    description:
      "Plataforma para gestão de membros, grupos e acompanhamento semanal. API com Clean Architecture, autenticação JWT e controle de acesso por perfil, integrada a uma interface React.",
    stack: [".NET 9", "React", "TypeScript", "PostgreSQL", "JWT"],
    links: [
      { label: "API", href: "https://github.com/LukeUp2/EasyMDO-api" },
      { label: "Web", href: "https://github.com/LukeUp2/EasyMDO-web" },
    ],
    featured: true,
  },
  {
    title: "RpgSheet.Api",
    eyebrow: "Backend · 2026",
    description:
      "API para fichas de RPG com gerenciamento de atributos, perícias e retratos, persistência com Entity Framework e armazenamento integrado ao Supabase.",
    stack: [".NET 10", "EF Core", "Supabase", "Docker"],
    links: [
      { label: "Repositório", href: "https://github.com/LukeUp2/RpgSheet.Api" },
    ],
  },
  {
    title: "d20-tools",
    eyebrow: "Aplicação full-stack · 2026",
    description:
      "Ferramenta web para RPG construída com backend ASP.NET Core e frontend .NET, reunidos em uma solução full-stack organizada por responsabilidades.",
    stack: [".NET 10", "ASP.NET Core", "CSS", "JavaScript"],
    links: [
      { label: "Repositório", href: "https://github.com/LukeUp2/d20-tools" },
    ],
  },
  {
    title: "CashFlow",
    eyebrow: "API · 2026",
    description:
      "API de fluxo de caixa estruturada em camadas, com casos de uso, validação de despesas, tratamento global de erros e contratos de entrada e saída.",
    stack: [".NET 10", "C#", "Validação", "REST"],
    links: [
      { label: "Repositório", href: "https://github.com/LukeUp2/CashFlow" },
    ],
  },
  {
    title: "TaskManager",
    eyebrow: "API · 2026",
    description:
      "API para gerenciamento de tarefas em .NET 8, organizada com Clean Architecture e contratos bem definidos para criação, consulta, edição e exclusão.",
    stack: [".NET 8", "Clean Architecture", "Swagger", "REST"],
    links: [
      { label: "Repositório", href: "https://github.com/LukeUp2/TaskManager" },
    ],
  },
];

const experiences = [
  {
    company: "INDT",
    period: "Abr. 2025 — atual",
    role: "Estagiário de QA",
    description:
      "Análise de solicitações de clientes, investigação e reporte de bugs, com testes manuais em Android Enterprise e Secure Folder.",
  },
  {
    company: "BLOMAQ",
    period: "Jan. 2024 — jun. 2024",
    role: "Estagiário de TI e Desenvolvimento .NET",
    description:
      "Manutenção e evolução de sistema legado em .NET e Windows Forms com componentes DevExpress.",
  },
  {
    company: "IDESAM",
    period: "Fev. 2023 — jul. 2023",
    role: "Estagiário de Desenvolvimento Mobile",
    description:
      "Desenvolvimento de aplicativo para apoiar produtores extrativistas, com autenticação, banco de dados offline e integração com API interna.",
  },
  {
    company: "Defesa Civil do Amazonas",
    period: "Mai. 2021 — fev. 2023",
    role: "Estagiário de Desenvolvimento Mobile",
    description:
      "Desenvolvimento e manutenção de aplicativo React Native para ajuda humanitária, com operação offline, previsão do tempo e sincronização de dados.",
  },
];

const stackGroups = [
  { label: "Backend", items: ["C#", "ASP.NET Core", ".NET 8–10", "REST APIs"] },
  { label: "Dados", items: ["PostgreSQL", "SQL Server", "Entity Framework"] },
  { label: "Qualidade", items: ["Testes manuais", "Análise de bugs", "Swagger/OpenAPI"] },
  { label: "Entrega", items: ["Docker", "Git", "GitHub Actions", "Vercel"] },
];

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          JLF<span>.</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a className="topbar-cta" href="mailto:joaolucasfreitaslul@gmail.com">
          Vamos conversar <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="status-pill"><span aria-hidden="true" /> Manaus, AM · Brasil</div>
            <p className="eyebrow">Olá, eu sou João Lucas Freitas</p>
            <h1>Backend sólido.<br />Produtos que <em>funcionam.</em></h1>
            <p className="hero-description">
              Desenvolvedor .NET e profissional de QA. Transformo regras de
              negócio em APIs organizadas, seguras e prontas para evoluir.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Ver projetos <ArrowDown size={17} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="https://github.com/LukeUp2" target="_blank" rel="noreferrer">
                <Github size={17} aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Resumo profissional">
            <div className="panel-chrome"><span /><span /><span /><small>profile.cs</small></div>
            <pre aria-hidden="true"><code>
              <span className="code-purple">public sealed class</span>{" "}<span className="code-yellow">Developer</span>
              {"\n"}{"{"}
              {"\n  "}<span className="code-blue">Focus</span> = <span className="code-green">"Backend .NET"</span>;
              {"\n  "}<span className="code-blue">Mindset</span> = <span className="code-green">"Quality first"</span>;
              {"\n  "}<span className="code-blue">Location</span> = <span className="code-green">"Manaus"</span>;
              {"\n"}{"}"}
            </code></pre>
            <div className="panel-stats">
              <div><strong>2021</strong><span>início da jornada</span></div>
              <div><strong>5</strong><span>projetos selecionados</span></div>
              <div><strong>.NET</strong><span>especialidade</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="section-heading">
            <div><p className="eyebrow">Trabalhos recentes</p><h2>Projetos em destaque</h2></div>
            <p>Uma seleção atualizada de sistemas que mostram arquitetura, produto e evolução técnica.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectItem key={project.title} {...project} index={index + 1} />)}
          </div>
          <a className="inline-link" href="https://github.com/LukeUp2?tab=repositories" target="_blank" rel="noreferrer">
            Explorar todos os repositórios <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>

        <section className="section experience-section" id="experiencia">
          <div className="section-heading"><div><p className="eyebrow">Trajetória</p><h2>Experiência profissional</h2></div></div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience.company}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-meta"><h3>{experience.company}</h3><span>{experience.period}</span></div>
                <div><h4>{experience.role}</h4><p>{experience.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="about-copy">
            <p className="eyebrow">Como eu trabalho</p>
            <h2>Código legível, contexto claro e qualidade desde o início.</h2>
            <p>Minha experiência combina desenvolvimento e QA. Isso me ajuda a construir pensando não apenas no caminho feliz, mas também nos limites, falhas e detalhes que tornam um software confiável.</p>
            <div className="principles">
              <div><Server aria-hidden="true" /><span>APIs e regras de negócio bem estruturadas</span></div>
              <div><ShieldCheck aria-hidden="true" /><span>Qualidade e segurança como parte da entrega</span></div>
              <div><Braces aria-hidden="true" /><span>Arquitetura simples, legível e evolutiva</span></div>
            </div>
            <div className="education">
              <span>Formação</span>
              <p><strong>Ciência da Computação</strong> · Universidade Estácio de Sá</p>
              <p><strong>Formação C#</strong> · Rocketseat ONE</p>
            </div>
          </div>
          <div className="stack-card">
            <div className="stack-card-title"><Sparkles size={18} aria-hidden="true" /> Stack atual</div>
            {stackGroups.map((group) => (
              <div className="stack-group" key={group.label}>
                <span>{group.label}</span>
                <div>{group.items.map((item) => <b key={item}>{item}</b>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <div><p className="eyebrow">Próximo projeto</p><h2>Tem uma oportunidade ou ideia para construir?</h2></div>
          <a className="button button-light" href="mailto:joaolucasfreitaslul@gmail.com"><Mail size={18} aria-hidden="true" /> Enviar e-mail</a>
        </section>
      </main>

      <footer>
        <div><span className="brand">JLF<span>.</span></span> João Lucas Freitas</div>
        <div className="footer-links">
          <span><MapPin size={14} aria-hidden="true" /> Manaus, AM</span>
          <a href="https://github.com/LukeUp2" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:joaolucasfreitaslul@gmail.com">E-mail</a>
        </div>
        <span>© {new Date().getFullYear()}</span>
      </footer>

      <MusicPlayer />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
    </div>
  );
}

export default App;
