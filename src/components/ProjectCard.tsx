import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

//uses conditional rendering for optional fields
function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      {project.status && <p className="project-status">{project.status}</p>}
      <p>{project.description}</p>
      <ul role="list" className="tag-list">
        {project.tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            code
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="nooopner noreferrer">
            live site
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
