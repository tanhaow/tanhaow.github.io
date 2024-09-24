import React, { useState, useEffect } from 'react';
import { FaDownload, FaLinkedin } from "react-icons/fa";
import './Resume.css';

const Resume = () => {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    fetch('../../src/assets/my_resume/Rachel_Tan_Resume.svg')
      .then(response => response.text())
      .then(data => setSvgContent(data))
      .catch(error => console.error('Error fetching resume SVG:', error));
  }, []);

  const handleDownload = () => {
    const pdfUrl = '../../src/assets/my_resume/Rachel_Tan_Resume.pdf';
    window.open(pdfUrl, '_blank');
  };

  const handleLinkedIn = () => {
    // Replace with your actual LinkedIn profile URL
    window.open('https://www.linkedin.com/in/your-profile', '_blank');
  };

  return (
    <section className="resume-section">
      <header className="resume-header">
        <h2 className="h2 article-title">Resume 🖇️</h2>
      </header>

      <div className="button-container">
        <button onClick={handleLinkedIn} className="linkedin-btn">
          <FaLinkedin /> Let's connect on LinkedIn
        </button>
        <button onClick={handleDownload} className="download-btn">
          <FaDownload /> Download My Resume in PDF
        </button>
      </div>

      <div className="resume-container">
        <div className="resume-content" dangerouslySetInnerHTML={{ __html: svgContent }} />
      </div>
    </section>
  );
};

export default Resume;