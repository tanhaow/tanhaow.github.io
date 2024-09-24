import { useEffect, useState } from "react";
import Service from "./Service";
import pennEngineeringImage from '../../assets/penn-engineering.jpg';
import pennEngineeringImage2 from '../../assets/penn-engineering2.jpeg';

const servicesData = [
  {
    icon: "/images/icon-lego.svg",
    title: "Full-Stack Development",
    description: "Building robust software solutions across platforms with seamless cloud deployment."
  },
  {
    icon: "/images/icon-ai.svg",
    title: "AI Integration",
    description: "Enhancing service functionality with Large Language Models and AI-powered solutions."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web Development",
    description: "Crafting modern, responsive websites with a focus on user experience."
  },
  {
    icon: "/images/icon-design.svg",  // Replace with a more appropriate icon if available
    title: "Data Analysis",
    description: "Unlocking business insights with data-driven solutions and database dashboards."
  }
];



const About = () => {

  return (


    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me 😊</h2>
      </header>
      <section className="about-text">
      <p>
          👋 Hello and welcome! I'm <b>Rachel Tan</b>, a full-stack developer specializing in <b>software engineering</b> and <b>machine learning</b>. 
          I have hands-on experience in <b>full-stack development</b> and <b>AI integration</b>, building scalable solutions to boost enterprise performance. 🚀
      </p>
      <p>
          🎓 I'm currently pursuing my <b>Master's in Computer and Information Technology</b> at the <b>University of Pennsylvania</b>,
          to deepen my expertise in databases, data structures, and software design. 👩🏻‍💻
      </p>
      <div className="about-image">
        <img src={pennEngineeringImage} alt="Penn Engineering Banner" className="about-penn-image"/>
      </div>
      <p>
          🎯 I'll be completing all my <a href="https://www.cis.upenn.edu/graduate/program-offerings/master-of-computer-and-information-technology/requirements/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline', textDecoration: 'underline' }}>degree requirements</a> and graduating by <b>May 2025</b>. Right now, I'm actively seeking <b>Full-time New Grad opportunities</b>. 
          So I built this website to showcase my portfolio and to connect with recruiters and other professionals. 
          Feel free to explore my projects and reach out! 💼✨
      </p>
      </section>



      {/* Services Section */}
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>



      {/* Achievement Section */}
      <section className="achievements">
        <h3 className="h3 achievements-title">Achievements</h3>
        <ul>
          <li>🥇 Winner @ Penn Engineering Hackathon 2024</li>
          <li>🏆 Best Hack @ FemmeHack 2024</li>
        </ul>     
      </section>


      {/* Skills Section */}
      {/* <section className="skills-section">
        <h3 className="h3 skills-title">My Skills</h3>

        <div className="skills-category">
          <h4>Programming Languages</h4>
          <div className="skills-list">
            <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
            <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
            <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C" />
            <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" alt="C++" />
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
            <img src="https://img.shields.io/badge/Assembly-525252?style=for-the-badge&logo=assembly&logoColor=white" alt="Assembly" />
            <img src="https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white" alt="Swift" />
            <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=sql&logoColor=white" alt="SQL" />
          </div>
        </div> */}

        {/* <div className="skills-category">
          <h4>Frontend</h4>
          <div className="skills-list">
            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
            <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
            <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
            <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
            <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
            <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
            <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black" alt="Babel" />
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
          </div>
        </div> */}

        {/* <div className="skills-category">
          <h4>Backend</h4>
          <div className="skills-list">
            <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" />
            <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
            <img src="https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit&logoColor=white" alt="JUnit" />
            <img src="https://img.shields.io/badge/Powershell-5391FE?style=for-the-badge&logo=powershell&logoColor=white" alt="Powershell" />
          </div>
        </div> */}

        {/* <div className="skills-category">
          <h4>Databases</h4>
          <div className="skills-list">
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
            <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
            <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
            <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
            <img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" alt="Oracle" />
            <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
            <img src="https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white" alt="Neo4j" />
          </div>
        </div> */}

        {/* <div className="skills-category">
          <h4>Cloud & Other Tools</h4>
          <div className="skills-list">
            <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS" />
            <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku" />
            <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
            <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" alt="Cypress" />
          </div>
        </div>

      </section> */}


    </article>
  );
};

export default About;
