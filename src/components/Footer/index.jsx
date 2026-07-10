import "./style.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__brand">
          Jason Gilchrist P <span aria-hidden="true">·</span> Agentic AI &
          GenAI Portfolio
        </p>

        <nav className="footer__links" aria-label="Professional links">
          <a
            href="https://www.linkedin.com/in/paladugujasongilchrist"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/jasongilchristp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:jason.gilchrist.p@gmail.com">Email</a>
        </nav>

        <small className="footer__copyright">
          © {currentYear} Jason Gilchrist P. Built with React.
        </small>
      </div>
    </footer>
  );
}