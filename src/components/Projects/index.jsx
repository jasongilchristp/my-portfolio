import "./style.css";

const projects = [
  {
    title: "ProjectMapAI",
    subtitle: "MCP-powered timesheet platform",
    category: "Full-Stack & MCP System",
    status: "Live Demo",
    description:
      "ProjectMapAI demonstrates how an operational web application can expose the same data and workflows to people and AI assistants. A FastAPI web console supports time entry, project summaries, and weekly reporting, while a FastMCP server provides tools, a resource, and a prompt for MCP-compatible clients. Both interfaces use a shared MySQL persistence layer.",
    highlights: [
      "Built MCP tools for time logging, employee timesheet retrieval, project summaries, project discovery, and AI-generated weekly summaries.",
      "Added a human-in-the-loop confirmation step for time entries exceeding 10 hours.",
      "Implemented Server-Sent Events to display progress from a background-task demonstration.",
      "Deployed the application on Render with a cloud-hosted Filess.io MySQL database, replacing local SQLite storage for the deployed version.",
    ],
    skills: [
      "FastAPI",
      "FastMCP",
      "Model Context Protocol (MCP)",
      "MySQL",
      "Render",
      "Python",
    ],
    links: [
      {
        label: "Live web console",
        url: "https://projectmap-ai.onrender.com/",
      },
      {
        label: "API documentation",
        url: "https://projectmap-ai.onrender.com/docs",
      },
      {
        label: "GitHub repository",
        url: "https://github.com/jasongilchristp/projectmap-ai",
      },
    ],
  },
  {
    title: "PolicyPilot RAG",
    subtitle: "Intent-routed internal knowledge assistant",
    category: "LangGraph & Multi-Domain RAG",
    status: "Evaluated & Tested",
    description:
      "PolicyPilot RAG is a retrieval-augmented assistant designed to answer company support questions without mixing unrelated policy domains. A LangGraph workflow classifies a question, selects the corresponding HR, engineering, onboarding, product, or security retrieval node, and searches that domain’s isolated Chroma collection. The application passes source-labelled passages to a local Ollama model to produce a context-grounded answer. General questions follow a separate path without document retrieval.",
    highlights: [
      "Built a document-ingestion pipeline with paragraph-based chunking and local embeddings.",
      "Implemented intent-specific retrieval across five persistent Chroma collections.",
      "Added context-only generation and abstention behavior for unsupported policy questions.",
      "Created one-off, interactive, ingestion, and evaluation CLI workflows.",
      "Evaluated routing, source selection, keyword recall, and abstention on a 25-question set; reported scores were 96%, 96%, 95%, and 96%, respectively. Nine pytest tests passed.",
    ],
    skills: [
      "LangGraph",
      "Retrieval-Augmented Generation (RAG)",
      "ChromaDB",
      "Ollama",
      "Python",
      "Local Embeddings",
      "Pytest",
      "CLI Workflows",
    ],
    links: [
      {
        label: "GitHub repository",
        url: "https://github.com/jasongilchristp/policypilot-rag",
      },
    ],
  },
];

export default function Projects() {
  return (
    <main className="projects" aria-labelledby="projects-title">
      <header className="projects__intro">
        <p className="projects__eyebrow">Projects</p>
        <h1 id="projects-title">Featured Projects & Systems</h1>
        <p className="projects__lead">
          Hands-on applications demonstrating MCP tool integration,
          intent-routed RAG architectures, and practical agentic workflows.
        </p>
      </header>

      <div className="projects__timeline">
        {projects.map((project) => (
          <article className="projects__card" key={project.title}>
            <div className="projects__card-header">
              <div>
                <p className="projects__type">{project.category}</p>
                <h2>{project.title}</h2>
                <p className="projects__subtitle">{project.subtitle}</p>
              </div>

              {project.status && (
                <span className="projects__status">{project.status}</span>
              )}
            </div>

            <p className="projects__description">{project.description}</p>

            <ul className="projects__highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <ul
              className="projects__skills"
              aria-label={`${project.title} technologies`}
            >
              {project.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>

            {project.links && project.links.length > 0 && (
              <div className="projects__links">
                <span className="projects__links-label">Project links:</span>
                <div className="projects__links-group">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      <span>{link.label}</span>
                      <svg
                        className="projects__link-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width="14"
                        height="14"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
