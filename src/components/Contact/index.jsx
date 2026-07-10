import "./style.css";

const contactLinks = [
  {
    label: "Email",
    value: "jason.gilchrist.p@gmail.com",
    href: "mailto:jason.gilchrist.p@gmail.com",
  },
  {
  label: "LinkedIn",
  value: "linkedin.com/in/paladugujasongilchrist",
  href: "https://www.linkedin.com/in/paladugujasongilchrist",
  },
  {
    label: "GitHub",
    value: "github.com/jasongilchristp",
    href: "https://github.com/jasongilchristp",
  },
];

export default function Contact() {
  return (
    <section className="contact" aria-labelledby="contact-title">
      <header className="contact__intro">
        <p className="contact__eyebrow">Contact</p>
        <h1 id="contact-title">Let&apos;s connect</h1>
        <p className="contact__lead">
          I am open to entry-level opportunities in Agentic AI, Generative AI,
          LLM engineering and AI automation.
        </p>
      </header>

      <div className="contact__content">
        <p>
          If you would like to discuss a role, project or collaboration, please
          get in touch. I am currently based in Hyderabad and open to
          opportunities in Hyderabad, Bengaluru and remote teams.
        </p>

        <ul className="contact__list">
          {contactLinks.map(({ label, value, href }) => (
            <li key={label}>
              <span>{label}</span>
              {href.startsWith("[") ? (
                <span className="contact__placeholder">{value}</span>
              ) : (
                <a
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                >
                  {value}
                </a>
              )}
            </li>
          ))}
        </ul>

        <p className="contact__note">
          I aim to respond to professional enquiries within 1–2 working days.
        </p>
      </div>
    </section>
  );
}