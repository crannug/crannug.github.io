import Nav from "./components/Nav.tsx";
import { interests } from "./data/interests";

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
              St. Mary's. I enjoy making useful and beautiful things. And,
              currently, GPU programming fascinates me.
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
          </section>
          <section id="skills">
            <h2>skills</h2>
          </section>
          <section id="education">
            <h2>education</h2>
          </section>
          <section id="contact">
            <h2>contact</h2>
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
