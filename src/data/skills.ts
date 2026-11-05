/**
 * for adding skills
 */

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "Python", "Java"],
  },
  { category: "frameworks and libraries", items: ["React", "htmx"] },
  { category: "tools", items: ["Git", "GitHub Actions", "Vite", "npm"] },
];
