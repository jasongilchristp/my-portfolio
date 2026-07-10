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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 800;
      setIsMobile(mobile);
      if (!mobile) {
        setOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

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
            className="navbar__toggle"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {!isMobile && (
          <ul className="navbar__desktop">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={location === item.href ? "is-active" : ""}
                  aria-current={location === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {isMobile && (
        <>
          <div
            className={`navbar__overlay ${open ? "is-open" : ""}`}
            onClick={() => setOpen(false)}
            aria-hidden={!open}
          />

          <aside
            id="mobile-menu"
            className={`navbar__drawer ${open ? "is-open" : ""}`}
            aria-label="Mobile navigation"
          >
            <div className="navbar__drawer-header">
              <p>Menu</p>
              <button
                type="button"
                className="navbar__close"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
              >
                ×
              </button>
            </div>

            <ul className="navbar__mobile">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={location === item.href ? "is-active" : ""}
                    aria-current={location === item.href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </>
      )}
    </nav>
  );
}

