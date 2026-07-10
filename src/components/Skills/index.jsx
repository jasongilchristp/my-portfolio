import "./style.css";

const skillGroups = [
  {
    title: "Agentic AI & GenAI",
    description: "Currently developing hands-on capability",
    skills: [
      "Agentic AI",
      "Generative AI",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Pydantic",
    ],
  },
  {
    title: "Programming & Data",
    description: "Core technical foundations",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "scikit-learn",
      "Data Analysis",
      "Machine Learning Foundations",
    ],
  },
  {
    title: "Engineering & Deployment",
    description: "Tools used to build and deliver applications",
    skills: [
      "REST APIs",
      "API Integration",
      "Git",
      "Docker",
      "Unit Testing",
      "Cloud Fundamentals",
    ],
  },
  {
    title: "Automation & Business Systems",
    description: "Professional experience from CRM development",
    skills: [
      "Microsoft Power Apps",
      "Power Automate",
      "Workflow Automation",
      "CRM Applications",
      "Data Migration",
      "Stakeholder Collaboration",
    ],
  },
];

export default function Skills() {
  return (
    <main className="skills" aria-labelledby="skills-title">
      <header className="skills__intro">
        <p className="skills__eyebrow">Technical toolkit</p>
        <h1 id="skills-title">Skills and focus areas</h1>
        <p className="skills__lead">
          My skill set combines CRM workflow automation experience with an
          active focus on Generative AI, RAG and Agentic AI systems.
        </p>
      </header>

      <div className="skills__grid">
        {skillGroups.map(({ title, description, skills: groupSkills }) => (
          <section
            className="skills__card"
            key={title}
            aria-labelledby={`${title.toLowerCase().replace(/\W+/g, "-")}-title`}
          >
            <h2 id={`${title.toLowerCase().replace(/\W+/g, "-")}-title`}>
              {title}
            </h2>
            <p>{description}</p>

            <ul className="skills__list">
              {groupSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="skills__note">
        I am continuing to strengthen these skills through the Agentic AI 3.0
        programme and hands-on portfolio projects.
      </p>
    </main>
  );
}