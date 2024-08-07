import React from "react";
import { Link } from "wouter";
import './style.css';

export default function Home() {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I'm Jason</p>
          <p>Data Scientist</p>
        </h1>
        <Link href="/about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/square.jpg`} // Corrected path to access image in public folder
          alt="person pic"
          style={{ width: '25vw', height: '60vh' }}
        />
      </div>
    </div>
  );
}
