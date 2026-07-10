import "./style.css";

const experiences = [
  {
    title: "Career Break and Technical Upskilling",
    company: "Independent Learning",
    period: "Jun 2023 – Present",
    type: "Current focus",
    description:
      "Preparing for a structured return to technology roles while building practical capability in data science, machine learning, Generative AI and Agentic AI.",
    highlights: [
      "Currently enrolled in the Agentic AI 3.0 programme.",
      "Building hands-on capability in Python, RAG, LangChain, LangGraph, Pydantic, APIs, SQL, Git and Docker.",
      "Developing portfolio projects focused on agentic workflows, retrieval-augmented generation and AI automation.",
    ],
    skills: ["Agentic AI", "Generative AI", "RAG", "LangChain", "LangGraph"],
  },
  {
    title: "CRM Application Developer",
    company: "FINT Solutions",
    period: "Jan 2022 – May 2023",
    type: "Full-time",
    description:
      "Developed and supported CRM-based business applications, with experience in workflow automation, cloud and data migration, testing and stakeholder collaboration.",
    highlights: [
      "Rebuilt a Wire Transfer Case Management System with enhanced CRUD functionality and automated email notifications.",
      "Contributed to the CCRs cloud and data-migration project, supporting a dependable transition through unit testing and stakeholder collaboration.",
      "Worked across CRM application development, workflow automation, data handling and testing.",
    ],
    skills: [
      "Microsoft Power Apps",
      "Power Automate",
      "Workflow Automation",
      "Data Migration",
      "Unit Testing",
    ],
  },
  {
    title: "CRM Development Intern",
    company: "FINT Solutions",
    period: "Nov 2021 – Dec 2021",
    type: "Internship",
    description:
      "Completed hands-on training in full-stack CRM application development.",
    highlights: [
      "Gained exposure to front-end and back-end development concepts in a CRM environment.",
      "Built foundational knowledge of application workflows and development practices.",
      "Recognised as the top performer in the fresher training batch.",
    ],
    skills: [
      "CRM",
      "Application Development",
      "Front-End Development",
      "Back-End Development",
    ],
  },
  {
    title: "Blockchain Developer Intern",
    company: "Nviera Technologies Pvt. Ltd.",
    period: "Sep 2018 – Dec 2018",
    type: "Internship",
    description:
      "Supported development and testing work for a proprietary blockchain application.",
    highlights: [
      "Assisted with C++ development work for a blockchain application.",
      "Conducted unit testing to support application quality and robust performance.",
      "Gained early exposure to software development and distributed-technology concepts.",
    ],
    skills: ["C++", "Blockchain", "Unit Testing", "Software Development"],
  },
  {
    title: "Robotics Intern",
    company: "Novatech Robo Pvt. Ltd.",
    period: "Jun 2017 – Aug 2017",
    type: "Internship",
    description:
      "Supported robotics projects through project assistance, data analysis and technical presentations.",
    highlights: [
      "Assisted with robotics-focused project activities.",
      "Analysed data to support model-performance improvement efforts.",
      "Presented robotics seminars for school students.",
    ],
    skills: ["Robotics", "Data Analysis", "Technical Presentations"],
  },
];

export default function Works() {
  return (
    <main className="works" aria-labelledby="works-title">
      <header className="works__intro">
        <p className="works__eyebrow">Experience</p>
        <h1 id="works-title">Work and technical journey</h1>
        <p className="works__lead">
          My background combines CRM application development and workflow
          automation with a current focus on Generative AI and Agentic AI
          systems.
        </p>
      </header>

      <div className="works__timeline">
        {experiences.map((experience) => (
          <article className="works__card" key={`${experience.title}-${experience.period}`}>
            <div className="works__card-header">
              <div>
                <p className="works__type">{experience.type}</p>
                <h2>{experience.title}</h2>
                <p className="works__company">{experience.company}</p>
              </div>

              <time className="works__period">{experience.period}</time>
            </div>

            <p className="works__description">{experience.description}</p>

            <ul className="works__highlights">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <ul className="works__skills" aria-label={`${experience.title} skills`}>
              {experience.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}