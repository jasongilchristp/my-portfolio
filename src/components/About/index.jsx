import "./style.css";

const focusAreas = [
  "Agentic AI systems",
  "RAG applications",
  "LLM workflows",
  "AI automation",
];

const coreSkills = [
  "Python",
  "LangChain",
  "LangGraph",
  "RAG",
  "Pydantic",
  "SQL",
  "APIs",
  "Git",
  "Docker",
];

export default function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <header className="about__intro">
        <p className="about__eyebrow">About me</p>
        <h1 id="about-title">
          Building towards practical Agentic AI systems
        </h1>
        <p className="about__lead">
          I am Jason Gilchrist P, a Hyderabad-based developer transitioning
          from CRM application development into Generative AI and Agentic AI
          systems engineering.
        </p>
      </header>

      <div className="about__content">
        <section aria-labelledby="background-title">
          <h2 id="background-title">Background</h2>
          <p>
            As a CRM Application Developer at FINT Solutions, I rebuilt a Wire
            Transfer Case Management System with enhanced CRUD functionality
            and automated email notifications. I also worked on the CCRs cloud
            and data-migration project, supporting reliable delivery through
            unit testing and stakeholder collaboration.
          </p>
          <p>
            Earlier internships in CRM development, blockchain application
            development with C++, and robotics projects built my interest in
            software systems, automation, testing and data-driven problem
            solving.
          </p>
        </section>

        <section aria-labelledby="direction-title">
          <h2 id="direction-title">Current direction</h2>
          <p>
            After a health-related career break, I have been steadily
            upskilling in data science, machine learning, Generative AI and
            Agentic AI. I am currently enrolled in the Agentic AI 3.0
            programme and building hands-on projects as I prepare to return to
            full-time technology roles.
          </p>
          <p>
            My focus is on reliable AI agents and RAG-based applications that
            use structured outputs, tool calling, retrieval and API
            integrations to support real business workflows.
          </p>
        </section>

        <section aria-labelledby="focus-title">
          <h2 id="focus-title">What I am building towards</h2>
          <ul className="about__list">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="skills-title">
          <h2 id="skills-title">Core tools</h2>
          <ul className="about__skills">
            {coreSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="opportunities-title">
          <h2 id="opportunities-title">Open to opportunities</h2>
          <p>
            I am preparing for entry-level opportunities in Agentic AI,
            Generative AI, LLM engineering and AI automation across Hyderabad,
            Bengaluru and remote teams.
          </p>
        </section>
      </div>
    </section>
  );
}