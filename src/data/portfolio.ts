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
    "Building modern web applications and exploring AI, machine learning, and interactive user experiences.",
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
  text: "I'm a BCA student passionate about creating modern, interactive web experiences. I enjoy learning new technologies, solving problems, and building projects that combine beautiful design with functionality. Alongside web development, I'm exploring artificial intelligence and machine learning while improving my software development skills.",
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  semester: "2nd Semester",
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
  { label: "Bike Riding", icon: "🏍️" },
  { label: "Photography", icon: "📷" },
  { label: "Video Editing", icon: "🎬" },
  { label: "Traveling", icon: "✈️" },
  { label: "Exploring Technology", icon: "🔭" },
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
  accent: string; // tailwind gradient classes
  items: { name: string; learning?: boolean }[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    accent: "from-fuchsia-500 to-pink-500",
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
    accent: "from-violet-500 to-indigo-500",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
  },
  {
    category: "Backend",
    accent: "from-sky-500 to-cyan-500",
    items: [{ name: "Node.js" }, { name: "Express.js", learning: true }],
  },
  {
    category: "Database",
    accent: "from-emerald-500 to-teal-500",
    items: [{ name: "MongoDB" }, { name: "SQL" }],
  },
  {
    category: "Tools",
    accent: "from-amber-500 to-orange-500",
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

export const currentlyLearning = [
  "Next.js",
  "React",
  "Three.js",
  "Framer Motion",
  "Data Structures & Algorithms",
  "Machine Learning",
  "Backend Development",
];

/**
 * Projects — intentionally a placeholder for now.
 * Add real entries with the shape below when ready.
 */
export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  status: "planned" | "in-progress" | "shipped";
};

export const projects: Project[] = [
  // {
  //   title: "Project name",
  //   description: "Short description of what it does and what you learned.",
  //   tags: ["Next.js", "TypeScript"],
  //   link: "https://...",
  //   repo: "https://github.com/...",
  //   status: "shipped",
  // },
];

export const projectPipeline = [
  { title: "Interactive Personal Portfolio", status: "In Progress" },
  { title: "AI & ML College Projects", status: "Planned" },
  { title: "Java & Data Structure Programs", status: "Ongoing" },
  { title: "Web Development Practice Projects", status: "Ongoing" },
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
  { label: "Learning", href: "#learning" },
  { label: "Projects", href: "#projects" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];
