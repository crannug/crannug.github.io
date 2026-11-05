/**
 * for building education cards
 */

export type EducationEntry = {
  school: string;
  program: string;
  dates: string;
  courses?: string[];
};

export const education: EducationEntry[] = [
  {
    school: "St. Mary's College of Maryland",
    program: "Computer Science, B.S.",
    dates: "Fall 2026 - expected May 2028",
    courses: ["COSC 301: Software Engineering", "COSC 435: Acceleration"], //add more relvant courses as I take them
  },
  {
    school: "College of Southern Maryland",
    program: "Computer Science, A.S.",
    dates: "Graduated December 2025",
  },
];
