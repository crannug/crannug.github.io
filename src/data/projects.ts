/**
 * for building project cards
 */
export type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  live?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "this portfolio",
    description:
      "It's a portfolio page built to start learning about React and TypeScript, with the side effect that I learned more about CSS as well.",
    tech: ["React", "TypeScript", "Vite", "CSS", "GitHub Actions"],
    repo: "https://github.com/crannug/crannug.github.io",
    live: "https://crannug.github.io",
  },
  {
    title: "Kanban board web app",
    description:
      "It's a kanban board-style project management tool built with MVC architecture." /* fill in responsibilities later */,
    tech: ["HTML", "CSS", "JavaScript", "htmx", "Node.js", "Express"],
    //repo: "[fill in repo link if made public]",
    status: "in progress",
  },
];
