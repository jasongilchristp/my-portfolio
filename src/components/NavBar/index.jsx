import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import "./style.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [location] = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [open, setOpen] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 800;
      setIsMobile(mobile);
      setOpen(!mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [location, isMobile]);

  const switchElement = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="nav-wrapper">
        <div className="logo">
          <Link href="/">
            <img src={`${process.env.PUBLIC_URL}/circle.png`} alt="Jason logo" />
          </Link>
        </div>

        <div className="navbar__actions">
          <button
            type="button"
            className="switch"
            onClick={switchElement}
            aria-label="Toggle theme"
          >
            <span className="flicker"></span>
            <span className="moon"></span>
          </button>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="list-wrapper">
          <ul
            id="primary-menu"
            className={`navbar__menu ${open ? "is-open" : ""}`}
          >
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => isMobile && setOpen(false)}
                  className={location === href ? "is-active" : ""}
                  aria-current={location === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
