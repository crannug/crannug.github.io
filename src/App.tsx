import Nav from "./components/Nav.tsx";
import { interests } from "./data/interests";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard.tsx";
import { contactLinks } from "./data/contact";
import { skillGroups } from "./data/skills";
import { education } from "./data/education";

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header>
        <div className="container">
          <Nav />
        </div>
      </header>
      <main id="main">
        <div className="container">
          <section id="about">
            <h1>Gunnar Cox</h1>
            <h2>about</h2>
            <p>
              I'm a 3rd-year computer science student at St. Mary's College of
              Maryland.
            </p>
            <p>
              In 2025, after spending time working at both ends of the country,
              I decided I wanted to complete my education, which brings me to
              St. Mary's. I enjoy making useful things. Currently fascinated by
              GPU programming.
            </p>
            <p>
              I'm open to collaboration, internships, work, and interesting
              opportunities of all kinds.
            </p>
          </section>
          <section id="interests">
            <h2>interests</h2>
            <ul role="list" className="card-grid">
              {interests.map((interest) => (
                <li key={interest.name} className="card">
                  <h3>{interest.name}</h3>
                  <p>{interest.blurb}</p>
                </li>
              ))}
            </ul>
          </section>
          <section id="projects">
            <h2>projects</h2>
            <div className="card-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
          <section id="skills">
            <h2>skills</h2>
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3>{group.category}</h3>
                <ul role="list" className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section id="education">
            <h2>education</h2>
            {education.map((entry) => (
              <div key={entry.school}>
                <h3>{entry.school}</h3>
                <p>
                  {entry.program} · {entry.dates}
                </p>
                {entry.courses && (
                  <ul role="list" className="tag-list">
                    {entry.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
          <section id="contact">
            <h2>contact</h2>
            <ul role="list">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
