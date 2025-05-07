interface NavLink {
  name: string;
  url: string;
}

export const links: NavLink[] = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Skills",
    url: "#skills",
  },
  {
    name: "Experience",
    url: "#experience",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

interface Experience {
  title: string;
  location: string;
  description: string;
  date: string;
  tags: string[];
  imgUrl?: string;
}

export const experiencesData: Experience[] = [
  {
    title: "Software Engineer",
    location: "Acme Corporation",
    description: "Led full-stack development of enterprise applications using React and Node.js",

    date: "2023 - Present",
    tags: ["React", "Node.js", "TypeScript", "MongoDB"],
    imgUrl: "corpcomment.png",
  },
  {
    title: "Frontend Developer",
    location: "Tech Solutions Inc",
    description: "Developed responsive web applications and implemented UI/UX improvements",

    date: "2021 - 2023",
    tags: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
    imgUrl: "rmtdev.png",
  },
  {
    title: "Web Development Intern",
    location: "StartUp Labs",
    description: "Assisted in building modern web applications and learned industry best practices",

    date: "2020 - 2021",
    tags: ["Next.js", "React", "TypeScript"],
    imgUrl: "wordanalytics.png",
  },
  {
    title: "Computer Science Degree",
    location: "Tech University",
    description: "Bachelor's degree in Computer Science with focus on web technologies",

    date: "2017 - 2021",
    tags: ["JavaScript", "Python", "Java"],
    imgUrl: "corpcomment.png",
  },
  {
    title: "Web Development Certification",
    location: "Online Academy",
    description: "Completed comprehensive web development bootcamp with hands-on projects",

    date: "2016 - 2017",
    tags: ["HTML", "CSS", "JavaScript"],
    imgUrl: "wordanalytics.png",
  },
];

interface Skill {
  name: string;
  level: number;
  description?: string;
}

export const skillsData: Skill[] = [
  {
    name: "HTML",
    level: 95,
    description: "Semantic HTML, Accessibility",
  },
  {
    name: "CSS",
    level: 90,
    description: "Modern CSS, Animations, Responsive Design",
  },
  {
    name: "JavaScript",
    level: 88,
    description: "ES6+, DOM Manipulation",
  },
  {
    name: "TypeScript",
    level: 85,
    description: "Type Safety, Interfaces",
  },
  {
    name: "React",
    level: 92,
    description: "Hooks, Context, Redux",
  },
  {
    name: "Next.js",
    level: 88,
    description: "SSR, App Router",
  },
  {
    name: "Node.js",
    level: 82,
    description: "Express, API Development",
  },
  {
    name: "Git",
    level: 85,
    description: "Version Control",
  },
  {
    name: "Tailwind",
    level: 90,
    description: "Responsive Design, Custom Themes",
  },
  {
    name: "Prisma",
    level: 78,
    description: "Database ORM",
  },
  {
    name: "MongoDB",
    level: 80,
    description: "NoSQL Database",
  },
  {
    name: "GraphQL",
    level: 75,
    description: "API Queries",
  },
  {
    name: "Apollo",
    level: 75,
    description: "State Management",
  },
  {
    name: "Express",
    level: 82,
    description: "Backend Framework",
  },
  {
    name: "PostgreSQL",
    level: 78,
    description: "Relational Database",
  },
  {
    name: "Framer Motion",
    level: 85,
    description: "Animations",
  },
];
