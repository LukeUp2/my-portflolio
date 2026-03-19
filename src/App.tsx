import { ProjectItem } from "./components/ProjectItem";
import { Github, Mail, MapPin, Smartphone } from "lucide-react";
import { MusicPlayer } from "./components/MusicPlayer";
import "./App.css";

function App() {
  return (
    <div className="portfolio-layout">
      {/* LADO ESQUERDO: BARRA LATERAL (Fica fixa no Desktop) */}
      <header className="portfolio-sidebar">
        <h1 style={{ fontSize: "2.5rem", letterSpacing: "2px" }}>
          JOÃO_LUCAS<span className="accent">_</span>FREITAS
          <span className="cursor-blink">_</span>
        </h1>
        <h2
          style={{
            fontSize: "1.2rem",
            color: "#4ade80",
            fontFamily: "'VT323', monospace",
            marginTop: "0.5rem",
          }}
        >
          &gt; Desenvolvedor BackEnd ASP.NET CORE JR
        </h2>

        {/* Usando a classe responsiva para os contatos */}
        <div className="contact-links">
          <a
            href="https://github.com/LukeUp2"
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <Github size={16} /> /LukeUp2
          </a>
          <a
            href="mailto:joaolucasfreitaslul@gmail.com"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <Mail size={16} /> Email: joaolucasfreitaslul@gmail.com
          </a>
          <span
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <Smartphone size={16} /> +55 92 98408-0648
          </span>
          <span
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <MapPin size={16} /> Manaus, AM
          </span>
        </div>
      </header>

      {/* LADO DIREITO: CONTEÚDO (Rola normalmente) */}
      <main className="portfolio-content">
        <section id="experiencia">
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              borderBottom: "1px solid #333",
              paddingBottom: "1rem",
            }}
          >
            <span className="accent">#</span> EXPERIÊNCIA_PROFISSIONAL
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            {/* INDT */}
            <article>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#eeeeee",
                    fontFamily: "'VT323', monospace",
                  }}
                >
                  INDT
                </h3>
                <span style={{ fontSize: "0.8rem", color: "#4ade80" }}>
                  Abril 2025 - Atualmente
                </span>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#cccccc",
                  marginBottom: "0.5rem",
                }}
              >
                Estagiário de QA
              </p>
              <p style={{ fontSize: "0.9rem", color: "#a0a0a0" }}>
                Análise de CR's de clientes e reporte de bugs. Testes manuais
                para Android Enterprise e Secure Folder.
              </p>
            </article>

            {/* BLOMAQ */}
            <article>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#eeeeee",
                    fontFamily: "'VT323', monospace",
                  }}
                >
                  BLOMAQ
                </h3>
                <span style={{ fontSize: "0.8rem", color: "#4ade80" }}>
                  Jan 2024 - Jun 2024
                </span>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#cccccc",
                  marginBottom: "0.5rem",
                }}
              >
                Estagiário de TI e Desenvolvimento .NET
              </p>
              <p style={{ fontSize: "0.9rem", color: "#a0a0a0" }}>
                Manutenção e desenvolvimento de sistema legado em .NET e Windows
                Forms usando DevExpress.
              </p>
            </article>

            {/* IDESAM */}
            <article>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#eeeeee",
                    fontFamily: "'VT323', monospace",
                  }}
                >
                  IDESAM
                </h3>
                <span style={{ fontSize: "0.8rem", color: "#4ade80" }}>
                  Fev 2023 - Jul 2023
                </span>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#cccccc",
                  marginBottom: "0.5rem",
                }}
              >
                Estagiário Desenvolvimento Mobile
              </p>
              <p style={{ fontSize: "0.9rem", color: "#a0a0a0" }}>
                Desenvolvi um aplicativo do zero para ajudar os trabalhadores
                extrativistas a controlarem melhor seus negócios e produções. O
                aplicativo possui splash screen, sistema de login (usando uma
                API interna), banco de dados offline, navegação e utilização de
                contextos.
              </p>
            </article>

            {/* DEFESA CIVIL */}
            <article>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#eeeeee",
                    fontFamily: "'VT323', monospace",
                  }}
                >
                  Defesa Civil do Amazonas
                </h3>
                <span style={{ fontSize: "0.8rem", color: "#4ade80" }}>
                  Maio 2021 - Fev 2023
                </span>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#cccccc",
                  marginBottom: "0.5rem",
                }}
              >
                Estagiário Desenvolvimento Mobile
              </p>
              <p style={{ fontSize: "0.9rem", color: "#a0a0a0" }}>
                Contribui no desenvolvimento e na manutenção de um aplicativo de
                ajuda humanitária feito com o framework React Native. O
                aplicativo possui funções de cadastros e edições no banco local
                offline, previsão de tempo (com o uso de API's externas) e
                também funcionalidades mais complexas como a sincronização dos
                dados do banco local com os dados colocados no servidor.
              </p>
            </article>
          </div>
        </section>

        <section id="tecnologias">
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              borderBottom: "1px solid #333",
              paddingBottom: "1rem",
            }}
          >
            <span className="accent">#</span> STACK_&_SKILLS
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              fontFamily: "'VT323', monospace",
              fontSize: "1.2rem",
              color: "#eeeeee",
            }}
          >
            <span
              style={{ border: "1px solid #333", padding: "0.3rem 0.8rem" }}
            >
              ASP.NET CORE
            </span>
            <span
              style={{ border: "1px solid #333", padding: "0.3rem 0.8rem" }}
            >
              C#
            </span>
            <span
              style={{ border: "1px solid #333", padding: "0.3rem 0.8rem" }}
            >
              SQL Server
            </span>
            <span
              style={{ border: "1px solid #333", padding: "0.3rem 0.8rem" }}
            >
              PostgreSQL
            </span>
            <span
              style={{ border: "1px solid #333", padding: "0.3rem 0.8rem" }}
            >
              Docker
            </span>
          </div>
        </section>

        <section id="projetos">
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              borderBottom: "1px solid #333",
              paddingBottom: "1rem",
            }}
          >
            <span className="accent">#</span> PROJETOS_EM_DESTAQUE
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <ProjectItem
              title="Meu Livro de Receitas API"
              description="API sendo construída para um curso de backend com .NET, com o objetivo de ser um gerenciador de receitas de culinária"
              repoLink="https://github.com/LukeUp2/MeuLivroDeReceitas"
            />
            <ProjectItem
              title="LivrariaPlus.Api"
              description="API RESTful em .NET para gerenciamento completo de livraria."
              repoLink="https://github.com/LukeUp2/LivrariaPlus.Api"
            />
            <ProjectItem
              title="API para Gestão de Projetos (Desafio Técnico)"
              description="API RESTful para gerenciar projetos e tarefas (demandas) de uma empresa."
              repoLink="https://github.com/LukeUp2/gestao-de-projetos-api"
            />
            <ProjectItem
              title=" API de Transações (Desafio Técnico - Itaú)"
              description="API REST que recebe Transações e retorna Estatísticas sob essas transações"
              repoLink="https://github.com/LukeUp2/desafio_itau_dotnet"
            />
          </div>
        </section>

        <section id="formacao">
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              borderBottom: "1px solid #333",
              paddingBottom: "1rem",
            }}
          >
            <span className="accent">#</span> FORMAÇÃO_ACADÊMICA
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <article>
              <h3
                style={{
                  fontSize: "1.3rem",
                  color: "#eeeeee",
                  fontFamily: "'VT323', monospace",
                }}
              >
                Ciência da Computação
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#a0a0a0" }}>
                Universidade Estácio de Sá (Abril 2022 - Em andamento)
              </p>
            </article>
            <article>
              <h3
                style={{
                  fontSize: "1.3rem",
                  color: "#eeeeee",
                  fontFamily: "'VT323', monospace",
                }}
              >
                Formação C#
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#a0a0a0" }}>
                Rocketseat ONE (Outubro 2025 - Em andamento)
              </p>
            </article>
            <article>
              <h3
                style={{
                  fontSize: "1.3rem",
                  color: "#eeeeee",
                  fontFamily: "'VT323', monospace",
                }}
              >
                .NET Core: Curso orientado ao mercado
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#a0a0a0" }}>
                Udemy (Outubro 2024 - Em andamento)
              </p>
            </article>
          </div>
        </section>
      </main>
      <MusicPlayer />
    </div>
  );
}

export default App;
