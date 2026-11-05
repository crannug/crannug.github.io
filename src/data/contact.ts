/** for contact links */
export type ContactLink = {
  label: string;
  href: string;
  external: boolean;
};

export const contactLinks: ContactLink[] = [
  { label: "email", href: "mailto:glcox@smcm.edu", external: false },
  { label: "github", href: "https://github.com/crannug", external: true },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/gunnarcox",
    external: true,
  },
];
