/**
 * NavLink type declaration, nav section names and ids.
 */

export type NavLink = {
  name: string;
  id: string;
};

export const links: NavLink[] = [
  { name: "about", id: "about" },
  { name: "interests", id: "interests" },
  { name: "projects", id: "projects" },
  { name: "skills", id: "skills" },
  { name: "education", id: "education" },
  { name: "contact", id: "contact" },
];
