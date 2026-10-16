import "./App.css";

function App() {
  const skills = [
    "Python",
    "C",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ];

  const projects = [
    {
      title: "Infrastructure Project Tracker",
      description:
        "A web application designed to organize infrastructure project schedules, capture project data, and link activities to schedule items.",
      technologies: "Next.js, React, Tailwind CSS",
    },
    {
      title: "Cricket Match Analysis",
      description:
        "A big-data project using Hadoop MapReduce to process cricket statistics and summarize player performance.",
      technologies: "Java, Hadoop, MapReduce",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive website showcasing my technical skills, projects, and professional journey.",
      technologies: "React, CSS, JavaScript",
    },
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Suhas<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Internship</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <p className="tagline">
          COMPUTER SCIENCE ENGINEERING STUDENT
        </p>

        <h1>
          Hi, I'm <span>Suhas.</span>
        </h1>

        <h2>Aspiring Full-Stack Developer</h2>

        <p className="hero-description">
          I enjoy building websites, learning new technologies,
          and solving problems through programming.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button">
            Explore My Work
          </a>

          <a href="#contact" className="button secondary-button">
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <p className="section-label">GET TO KNOW ME</p>

        <h2>About Me</h2>

        <p className="section-description">
          I'm a Computer Science Engineering student interested
          in software development and web technologies. I'm
          improving my skills through academic projects,
          internships, and practical learning. My goal is to
          become a skilled developer by building useful and
          user-friendly applications.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <p className="section-label">WHAT I WORK WITH</p>

        <h2>Technical Skills</h2>

        <p className="section-description">
          Technologies and programming languages I am learning
          and using in my projects.
        </p>

        <div className="skills">
          {skills.map((skill) => (
            <span className="skill-badge" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <p className="section-label">MY WORK</p>

        <h2>Featured Projects</h2>

        <p className="section-description">
          Some academic and personal projects I have worked on.
        </p>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">
                PROJECT
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technologies">
                {project.technologies}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Internship Section */}
      <section id="experience" className="section">
        <p className="section-label">MY EXPERIENCE</p>

        <h2>Internship</h2>

        <article className="internship-card">
          <div className="internship-icon">✦</div>

          <div>
            <h3>Full-Stack Web Development</h3>

            <p className="company-name">Future Interns</p>

            <p>
              Developing practical web development skills through
              assigned internship tasks and hands-on learning.
            </p>

            <span className="status-badge">
              Internship
            </span>
          </div>
        </article>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <p className="section-label">GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <p className="section-description">
          I'm interested in learning, building projects, and
          connecting with people in technology. Feel free to
          reach out!
        </p>

        <a
          className="button"
          href="mailto:ssuh526@gmail.com"
        >
          Send Me an Email
        </a>

        <div className="socials">
          <a
            href="https://github.com/Suhas-45187"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/suhas-siddireddy-23474a356/?isSelfProfile=true"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 Suhas Siddireddy. Built with React.
        </p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;