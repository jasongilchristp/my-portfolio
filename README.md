# Jason Gilchrist P — Portfolio & AI Systems Engineering

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-jasongilchristp.github.io-blue?style=flat-square&logo=github)](https://jasongilchristp.github.io/my-portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-paladugujasongilchrist-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/paladugujasongilchrist)
[![GitHub](https://img.shields.io/badge/GitHub-jasongilchristp-181717?style=flat-square&logo=github)](https://github.com/jasongilchristp)
[![Email](https://img.shields.io/badge/Email-jason.gilchrist.p%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:jason.gilchrist.p@gmail.com)

Welcome to the repository for my personal developer portfolio, highlighting my background in enterprise software engineering and my specialization in **Generative AI and Agentic AI Systems Engineering**.

Explore the live site: **[jasongilchristp.github.io/my-portfolio](https://jasongilchristp.github.io/my-portfolio/)**

---

## 👨‍💻 Professional Summary

Results-driven Software Developer transitioning from CRM application engineering into **Generative AI and Agentic AI Systems Engineering**. Experienced in designing autonomous agentic workflows, multi-domain Retrieval-Augmented Generation (RAG) pipelines, Model Context Protocol (MCP) servers, and enterprise workflow automations. Proven background in full-stack API integration, database migrations, and rigorous unit testing.

Actively specializing in production-ready Agentic AI systems and seeking entry-to-mid level engineering opportunities across Hyderabad, Bengaluru, or remote teams.

---

## 🛠️ Technical Skills

| Category | Skills & Tools |
|---|---|
| **Agentic AI & Generative AI** | Agentic AI, Generative AI, LangGraph, LangChain, Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), FastMCP, Prompt Engineering, Pydantic, ChromaDB, Ollama, Local Embeddings |
| **Languages & Frameworks** | Python, FastAPI, JavaScript, React, C++, SQL |
| **Data & Machine Learning** | Data Analysis, NumPy, Pandas, scikit-learn, Machine Learning Foundations, SQLite, MySQL |
| **Engineering & Cloud Tools** | REST APIs, Git, Docker, Pytest, Unit Testing, Render, Cloud Fundamentals |
| **Automation & Enterprise Systems** | Microsoft Power Apps, Microsoft Power Automate, CRM Workflow Automation, Data Migration |

---

## 🚀 Featured Projects & Systems

### 1. [ProjectMapAI — MCP-Powered Timesheet Platform](https://github.com/jasongilchristp/projectmap-ai)
> **Stack:** FastAPI · FastMCP · Model Context Protocol (MCP) · MySQL · Python · Render  
> **Links:** [Live Web Console](https://projectmap-ai.onrender.com/) · [API Documentation](https://projectmap-ai.onrender.com/docs) · [GitHub Repository](https://github.com/jasongilchristp/projectmap-ai)

- **Dual-Interface Architecture:** Engineered an operational web system exposing unified business logic and data persistence to both human operators (via FastAPI) and AI assistants (via FastMCP) through a shared MySQL database.
- **MCP Tool Integration:** Developed a FastMCP server implementing specialized MCP tools for time logging, employee timesheet querying, project discovery, and AI-driven weekly summary generation.
- **Human-in-the-Loop Safeguards:** Designed and integrated a human-in-the-loop (HITL) approval safeguard for timesheet submissions exceeding 10 hours.
- **Cloud Deployment & Persistence:** Deployed the full application stack on Render integrated with cloud-hosted Filess.io MySQL storage, smoothly transitioning from local SQLite development storage.

---

### 2. [PolicyPilot RAG — Intent-Routed Internal Knowledge Assistant](https://github.com/jasongilchristp/policypilot-rag)
> **Stack:** LangGraph · RAG · ChromaDB · Ollama · Python · Local Embeddings · Pytest  
> **Links:** [GitHub Repository](https://github.com/jasongilchristp/policypilot-rag)

- **Domain Isolation:** Architected a multi-domain retrieval-augmented assistant designed to answer corporate policy queries without cross-domain context contamination.
- **State Machine Routing:** Built a LangGraph state machine workflow that classifies user intent and routes queries to isolated HR, Engineering, Onboarding, Product, or Security retrieval nodes with dedicated Chroma collections.
- **Document Ingestion Pipeline:** Implemented an automated document ingestion pipeline utilizing paragraph-based chunking and local embeddings.
- **Strict Grounding & Abstention:** Enforced strict context-only generation and automatic abstention behavior when answering out-of-scope or unsupported policy questions.
- **CLI & Benchmark Evaluation:** Built one-off interactive CLI, bulk ingestion, and evaluation workflows. Evaluated performance on a 25-question benchmark achieving:
  - **96%** Intent Routing Accuracy
  - **96%** Source Selection Accuracy
  - **95%** Keyword Recall
  - **96%** Abstention Accuracy
  - Validated by 9 comprehensive `pytest` test suites.

---

## 💼 Professional Experience

### **Independent Learning & Technical Upskilling** | *Self-Directed Technical Focus*
*Hyderabad, India* • **Jun 2023 – Present**
- Pursuing advanced specialization in **Agentic AI and LLM Systems Engineering**, architecting production-ready workflows around tool-augmented agents, multi-agent coordination, and RAG pipelines.
- Deep hands-on expertise across Python, LangChain, LangGraph, Pydantic, REST APIs, SQL, Git, and Docker.
- Designed, tested, and published end-to-end portfolio projects emphasizing deterministic tool-use, intent routing, and model evaluation.

### **CRM Application Developer** | *FINT Solutions*
*Hyderabad, India* • **Jan 2022 – May 2023**
- Developed and maintained CRM-based business applications, focusing on business process automation, cloud and data migration, and quality engineering.
- Rebuilt a critical Wire Transfer Case Management System, enhancing CRUD functionality and implementing automated email notification triggers.
- Contributed to the CCRs cloud and data-migration initiative, supporting smooth transitions through comprehensive unit testing and cross-functional stakeholder collaboration.
- Automated complex operational workflows using Microsoft Power Apps and Power Automate.

### **CRM Development Intern** | *FINT Solutions*
*Hyderabad, India* • **Nov 2021 – Dec 2021**
- Completed intensive hands-on training in full-stack CRM application architecture and integration workflows.
- Built foundational knowledge of data handling, business logic implementation, and agile software development.
- Recognized as the **top performer** in the fresher engineering batch.

### **Blockchain Developer Intern** | *Nviera Technologies Pvt. Ltd.*
**Sep 2018 – Dec 2018**
- Supported development and quality verification for a proprietary blockchain application utilizing C++.
- Executed unit tests to ensure application robustness and distributed data consistency.

### **Robotics Intern** | *Novatech Robo Pvt. Ltd.*
**Jun 2017 – Aug 2017**
- Assisted with robotics systems engineering, sensory data analysis, and model optimization.
- Delivered technical presentations and hands-on robotics workshops for students.

---

## 🎓 Education

**Bachelor of Technology (B.Tech) in Computer Science and Engineering**  
*Presidency University Bangalore* | Bengaluru, Karnataka, India  
*Aug 2015 – May 2019*

---

## 🌐 About This Portfolio Website

This repository contains the source code for my responsive personal portfolio web application.

### Architecture & Tech Stack
- **Framework:** React 18
- **Routing:** [wouter](https://github.com/molefrog/wouter) (lightweight, client-side routing with GitHub Pages base path support)
- **Styling:** Modular Vanilla CSS, Flexbox, and CSS Grid
- **Hosting:** GitHub Pages via `gh-pages`

### Site Pages
| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Professional introduction, current AI focus, and availability status |
| `/about` | **About** | Detailed professional background, AI transition story, and target roles |
| `/skills` | **Skills** | Technical toolkit categorized by AI, languages, frameworks, and tools |
| `/projects` | **Projects** | Showcase of featured Agentic AI & RAG systems with architecture highlights and links |
| `/works` | **Works** | Career timeline spanning CRM engineering to AI systems engineering |
| `/contact` | **Contact** | Direct outreach channels, location info, and profile links |

### Project Directory Structure
```text
my-portfolio/
├── public/
│   ├── circle.png
│   ├── index.html
│   └── jason.png
├── src/
│   ├── components/
│   │   ├── About/        # About page view and styles
│   │   ├── Contact/      # Contact details and channels
│   │   ├── Footer/       # Global footer with social links
│   │   ├── Home/         # Landing hero and call-to-action
│   │   ├── NavBar/       # Navigation header and routing links
│   │   ├── Projects/     # Featured AI systems and project cards
│   │   ├── Skills/       # Categorized skill badges and toolkits
│   │   └── Works/        # Professional experience and timeline
│   ├── App.css           # Global layout styles
│   ├── App.js            # Router configuration and page routes
│   ├── App.test.js       # Component smoke tests
│   ├── index.css         # Reset and foundational styles
│   └── index.js          # React DOM entry point
├── package.json          # Dependencies and deployment scripts
├── README.md             # Project documentation
└── RESUME.md             # Detailed professional resume
```

---

## 💻 Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jasongilchristp/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local dev server:**
   ```bash
   npm start
   ```
   The site will load locally at `http://localhost:3000/my-portfolio/` (or `http://localhost:3000/`).

4. **Run tests:**
   ```bash
   npm test
   ```

---

## 🚀 Build & Deployment

### Production Build
To create an optimized production bundle:
```bash
npm run build
```
This generates a static build inside the `build/` directory.

### GitHub Pages Deployment
The project is configured with `gh-pages` and automatic pre-build scripts in `package.json`:

```bash
npm run deploy
```

This command triggers `npm run build` and automatically pushes the compiled bundle to the `gh-pages` branch, serving the site live at:
**[https://jasongilchristp.github.io/my-portfolio/](https://jasongilchristp.github.io/my-portfolio/)**

---

## 📬 Contact & Connect

- **Location:** Hyderabad, Telangana, India
- **Email:** [jason.gilchrist.p@gmail.com](mailto:jason.gilchrist.p@gmail.com)
- **LinkedIn:** [paladugujasongilchrist](https://www.linkedin.com/in/paladugujasongilchrist)
- **GitHub:** [jasongilchristp](https://github.com/jasongilchristp)
- **Live Portfolio:** [jasongilchristp.github.io/my-portfolio](https://jasongilchristp.github.io/my-portfolio/)
