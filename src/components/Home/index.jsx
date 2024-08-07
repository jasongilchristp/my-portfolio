import React from "react";
import { Link } from "wouter";
import './style.css';

export default function Home() {
  return (
    <div className="home">
      <div className="title">
        <h1>
          Hi,<br />
          I'm Jason<br />
          Data Scientist<br/>
        </h1>

        <Link href="/about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/square.jpg`} // Corrected path to access image in public folder
          alt="person pic"
        />
      </div>
    </div>
  );
}
