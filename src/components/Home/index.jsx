import { Link } from "wouter";
import "./style.css";

export default function Home() {
  return (
    <main className="home">
      <section className="home__content" aria-labelledby="home-title">
        <p className="home__eyebrow">GenAI · Agentic AI · AI Automation</p>

        <h1 id="home-title">
          Hi, I&apos;m Jason.
          <span>Building towards Agentic AI Systems Engineering.</span>
        </h1>

        <p className="home__lead">
          A former CRM Application Developer transitioning into Generative AI
          and Agentic AI, with a foundation in workflow automation, cloud and
          data migration, software testing, and Python.
        </p>

        <p className="home__availability">
          Open to entry-level opportunities in Hyderabad, Bengaluru and remote
          teams.
        </p>

        <div className="home__actions">

          <Link href="/about" className="button button--secondary">
            About me
          </Link>
        </div>
      </section>

      <aside className="home__visual" aria-label="Profile">
        <img
          src={`${process.env.PUBLIC_URL}/jason.png`}
          alt="Jason Gilchrist P"
          className="home__image"
        />
      </aside>
    </main>
  );
}