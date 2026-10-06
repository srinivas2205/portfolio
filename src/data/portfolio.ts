/**
 * Central content source for the portfolio.
 * Update any field here and it flows through the whole site.
 */

export const profile = {
  name: "Srinivas M",
  roles: [
    "BCA Student",
    "Aspiring Full Stack Developer",
    "AI & Machine Learning Enthusiast",
  ],
  headline:
    "I am studying computer applications and building my skills in web development, AI, and machine learning.",
  location: "Bangalore, Karnataka, India",
  email: "srinivasml507@gmail.com",
  phone: "+91 63608 65531",
  github: "https://github.com/srinivas2205",
  githubHandle: "srinivas2205",
  linkedin: "", // add later
  resume: "", // add later
  initials: "SM",
};

export const about = {
  text: "I am a BCA student in Bangalore. I am learning full stack development while exploring artificial intelligence and machine learning. I use this portfolio to keep track of what I know and what I am learning.",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  college: "[College name]",
  graduationYear: "[Graduation year]",
  location: "Bangalore, Karnataka, India",
};

export const interests = [
  "Full Stack Development",
  "Artificial Intelligence",
  "Machine Learning",
  "UI/UX Design",
  "Interactive Websites",
  "Open Source",
  "Video Editing",
  "Photography",
  "Bike Travel",
  "Tech",
];

export const hobbies = [
  { label: "Bike Riding" },
  { label: "Photography" },
  { label: "Video Editing" },
  { label: "Traveling" },
  { label: "Exploring Technology" },
];

export const languages = [
  { label: "English", level: "Fluent" },
  { label: "Tamil", level: "Fluent" },
  { label: "Kannada", level: "Fluent" },
  { label: "Telugu", level: "Partial" },
  { label: "Malayalam", level: "Partial" },
  { label: "Hindi", level: "Partial" },
];

export type SkillGroup = {
  category: string;
  items: { name: string; learning?: boolean }[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript" },
      { name: "TypeScript", learning: true },
      { name: "Python" },
      { name: "Java" },
      { name: "C" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", learning: true },
      { name: "Next.js", learning: true },
      { name: "Tailwind CSS" },
      { name: "Framer Motion", learning: true },
      { name: "Three.js", learning: true },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express.js", learning: true },
      { name: "Backend Development", learning: true },
    ],
  },
  {
    category: "Data",
    items: [
      { name: "MongoDB" },
      { name: "SQL" },
      { name: "Data Structures & Algorithms", learning: true },
      { name: "Machine Learning", learning: true },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "CapCut" },
      { name: "DaVinci Resolve" },
    ],
  },
];

export type ProjectPlaceholder = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  screenshotLabel: string;
};

export const projectPlaceholders: ProjectPlaceholder[] = [
  {
    id: "todo-01",
    title: "Add project name",
    summary: "Add a one-line summary here.",
    stack: ["Add stack"],
    screenshotLabel: "Screenshot placeholder",
  },
  {
    id: "todo-02",
    title: "Add project name",
    summary: "Add a one-line summary here.",
    stack: ["Add stack"],
    screenshotLabel: "Screenshot placeholder",
  },
  {
    id: "todo-03",
    title: "Add project name",
    summary: "Add a one-line summary here.",
    stack: ["Add stack"],
    screenshotLabel: "Screenshot placeholder",
  },
];

export const goals = [
  "Become a Full Stack Developer",
  "Build production-level applications",
  "Master AI & Machine Learning",
  "Contribute to Open Source",
  "Land a software developer role",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Beyond code", href: "#interests" },
  { label: "Contact", href: "#contact" },
];
