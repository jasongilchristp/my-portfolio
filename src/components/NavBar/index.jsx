import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import './style.css';

export default function NavBar() {
  const [open, setOpen] = useState(window.innerWidth > 800);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [location] = useLocation();
  console.log(location); // Check if this logs the current location

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    setOpen(width > 800);
  };

  const handleClose = () => {
    if (screenWidth < 800) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => {
      window.removeEventListener("resize", trackScreenWidth);
    };
  }, []);

  const switchElement = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <div onClick={switchElement} className="switch">
        <div className="flicker"></div>
        <div className="moon"></div>
      </div>
      <div className="nav-wrapper">
        <div className="logo">
          <Link href="/">
            <img src={`${process.env.PUBLIC_URL}/circle.png`} alt="logo" />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="menu bars"
            style={{ opacity: open ? 0 : 1 }}
            onClick={() => setOpen(true)}
          />
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => setOpen(false)}
          />
          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                onClick={handleClose}
                style={{ color: location === "/" ? "#cc3300" : "" }}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                style={{ color: location === "/about" ? "#cc3300" : "" }}
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                style={{ color: location === "/skills" ? "#cc3300" : "" }}
                href="/skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                style={{ color: location === "/works" ? "#cc3300" : "" }}
                href="/works"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClose}
                style={{ color: location === "/contact" ? "#cc3300" : "" }}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
