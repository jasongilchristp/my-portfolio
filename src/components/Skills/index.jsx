import React from 'react';
import './style.css';

export default function Skills() {
  return (
    <div className='skills'>
      <h1>Skills & Expertise</h1>
      <br />
      <div className='content'>
        <div>
          <h2>Programming Languages</h2>
          <ul>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h2>Data Science & Analysis</h2>
          <ul>
            <li>Machine Learning</li>
            <li>Statistics</li>
            <li>Data Analysis (Python)</li>
            <li>Data Visualization (Tableau)</li>
          </ul>
        </div>
        <div>
          <h2>Development & Tools</h2>
          <ul>
            <li>Docker</li>
            <li>GIT</li>
            <li>Full Stack Development</li>
          </ul>
        </div>
        <div>
          <h2>Core Competencies</h2>
          <ul>
            <li>Problem-solving</li>
            <li>Team Collaboration</li>
            <li>Attention to Detail</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
