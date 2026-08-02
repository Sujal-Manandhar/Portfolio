import portfolio1 from "@/assets/portfolio1.jpg";
import portfolio2 from "@/assets/portfolio2.png";
import portfolio3 from "@/assets/portfolio3.png";
import portfolio4 from "@/assets/portfolio4.png";
import portfolio5 from "@/assets/portfolio5.png";
import portfolio6 from "@/assets/portfolio-6.jpg";
import type {
  BlogPost,
  NavItem,
  Project,
  Service,
  SkillGroup,
  StatItem,
  TimelineEntry,
} from "@/types";

export const PERSON = {
  name: "Sujal Manandhar",
  firstName: "Sujal",
  brand: "Sujal Manandhar",
  roles: ["Web Developer.", "UI/UX Designer.", "Graphic Designer.", "Photographer."],
  intro:
    "I bring a blend of technical skills, design thinking, and data expertise to every project. Whether it's crafting clean code, designing intuitive interfaces, or extracting insights from data, I’m driven by curiosity and committed to delivering high-quality results that make a difference.",
  contactName: "Sujal Manandhar",
  contactBlurb: "I am available for freelance work. Connect with me via and call in to my account.",
  phone: "+977-9814277220",
  email: "sujalmanandhar11@gmail.com",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resume", href: "#resume" },
  { label: "Blog", href: "#blog" },
  { label: "Contacts", href: "#contact" },
];

export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/sujal.mdhr79", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/suzal_manandhar", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sujal-manandhar07/", icon: "linkedin" },
] as const;

export const BEST_SKILLS = [
  { label: "Photoshop", icon: "photoshop" },
  { label: "React", icon: "react" },
  { label: "Python", icon: "python" },
  { label: "Figma", icon: "figma" },
] as const;

export const SERVICES: Service[] = [
  {
    id: "web-development",
    icon: "laptop",
    title: "Web Development",
    description:
      "I build scalable, high-performance web applications tailored to your business needs, focusing on seamless functionality.",
  },
  {
    id: "app-development",
    icon: "code-2",
    title: "App Development",
    description:
      "We'll handle everything from to app development process until it is time to make your project live.",
  },
  {
    id: "photography",
    icon: "camera",
    title: "Photography",
    description:
      "Professional photography services capturing moments with clarity, creativity, and a unique visual storytelling approach.",
  },
  {
    id: "graphic-design",
    icon: "palette",
    title: "Graphic Design",
    description:
      "Creating stunning visual identities and graphics that effectively communicate your brand's unique message.",
  },
  {
    id: "seo",
    icon: "search",
    title: "SEO Optimisation",
    description:
      "Your website ranking matters. Our SEO services will help you get to the top of the ranks and stay there!",
  },
  {
    id: "ui-ux",
    icon: "layout",
    title: "UI/UX",
    description:
      "Designing intuitive, user-centric interfaces that provide exceptional user experiences and look beautiful.",
  },
];

export const PROJECT_FILTERS = ["All Project"] as const;

export const PROJECTS: Project[] = [
  {
    slug: "tax-care-nepal",
    title: "Tax Care Nepal",
    category: "Web Development",
    image: portfolio1,
    likes: 1999,
    client: "Tax Care Nepal",
    role: "Front-end Developer",
    year: "2025",
    tools: ["Figma", "React", "TypeScript"],
    liveUrl: "https://taxcaree.netlify.app/",
  },
  {
    slug: "hotel-management-system",
    title: "Hotel Management System",
    category: "Web Development",
    image: portfolio2,
    likes: 1299,
    client: "Hotel Management System",
    role: "Front-end Developer",
    year: "2022",
    tools: ["Figma", "PhP", "SQL"],
    liveUrl: "https://github.com/Sujal-Manandhar/Hotel-Management-System.git",
  },
  {
    slug: "money-tracker-app",
    title: "Money Tracker App",
    category: "UI/UX Design",
    image: portfolio3,
    likes: 1001,
    client: "Sujal Manandhar",
    role: "UI/UX Designer",
    year: "2025",
    tools: ["Figma", "Indesign"],
    liveUrl:
      "https://www.figma.com/design/YLO4LnAABwzz3oCMZQJbf4/Money-Tracker?node-id=157-298&t=uDQxdFYgqteZI5dr-1",
  },
  {
    slug: "workout-website-design-and-development",
    title: "Customer Behavior Dashboard",
    category: "Data Analytics",
    image: portfolio4,
    likes: 1099,
    client: "Sujal Manandhar",
    role: "Data Analyst",
    year: "2026",
    tools: ["Python", "SQL", "Power BI", "Pandas"],
    liveUrl: "https://github.com/Sujal-Manandhar/Customer_behavior_data_analysis",
  },
  {
    slug: "nepse-stock-analysis",
    title: "Nepse Stock Analysis",
    category: "Data Engineering",
    image: portfolio5,
    likes: 1005,
    client: "Sujal Manandhar",
    role: "Data Engineer",
    year: "2026",
    tools: ["Astro", "Airflow", "Python", "DBT", "Docker", "PostgreSQL", "SQL"],
    liveUrl: "https://github.com/Sujal-Manandhar/Nepse_stock_analysis",
  },
  {
    slug: "restaurant-mobile-app-figma-design",
    title: "Restaurant Mobile App Figma Design.",
    category: "Standard",
    image: portfolio6,
    likes: 812,
    client: "Maison Verte",
    role: "UI Design",
    year: "2021",
    tools: ["Figma", "Principle"],
  },
];

export const EDUCATION: TimelineEntry[] = [
  {
    id: "edu-1",
    title: "Bachelor of Computer Applications",
    meta: "Hetauda School of Management And Social Sciences",
    description: "",
  },
  {
    id: "edu-2",
    title: "+2 Science",
    meta: "Hetauda School of Management And Social Sciences",
    description: "",
  },
  {
    id: "edu-3",
    title: "SLC",
    meta: "Solidarity International Academy",
    description: "",
  },
];

export const EXPERIENCE: TimelineEntry[] = [
  {
    id: "exp-1",
    title: "Web Developer",
    meta: "Avenir Tech",
    description: "",
    bullets: [
      "Developed and implemented responsive, high-performance web applications aligned with user requirements.",
      "Collaborated with designers and developers to translate UI/UX concepts into functional, interactive web solutions.",
      "Troubleshot and resolved bugs, enhancing system reliability and user satisfaction.",
      "Created and maintained technical documentation to streamline workflows and support users.",
    ],
  },
  {
    id: "exp-2",
    title: "Fiber Supervisor",
    meta: "Classic Tech",
    description: "12/2024 - 11/2025",
    bullets: [
      "Supervised daily operations to ensure team efficiency and productivity.",
      "Monitored inventory levels to maintain adequate supplies.",
      "Maintained accurate records of employee performance, attendance, leave requests, and disciplinary actions.",
      "Resolved customer complaints in a timely manner while ensuring customer satisfaction.",
    ],
  },
  {
    id: "exp-3",
    title: "UI/UX Designer",
    meta: "Truenary solutions",
    description: "06/2024 - 11/2024",
    bullets: [
      "Created wireframes, prototypes, and high-fidelity mockups using tools such as Sketch and Figma.",
      "Conducted user research, usability testing, and A/B testing.",
      "Debugged and resolved UI/UX issues, creating a seamless and intuitive user experience.",
      "Monitored design trends and tools to refine design.",
    ],
  },
  {
    id: "exp-4",
    title: "Web Developer",
    meta: "Kutumba Tech",
    description: "11/2022 - 10/2023",
    bullets: [
      "Collaborated with the development team to design and implement new features.",
      "Developed and tested software applications to enhance functionality and user experience.",
      "Documented technical specifications and user guides to support development and facilitate user understanding.",
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Web Development",
    icon: "code-2",
    skills: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "TypeScript", "WordPress"],
  },
  {
    title: "Data & Analytics",
    icon: "database",
    skills: [
      "Python",
      "SQL",
      "PostgreSQL",
      "dbt",
      "Apache Airflow",
      "Apache Superset",
      "Power BI",
      "Tableau",
      "ETL/ELT Pipelines",
    ],
  },
  {
    title: "Design",
    icon: "palette",
    skills: ["Figma", "Adobe Photoshop", "Adobe Premiere Pro", "Adobe Illustrator", "Canva"],
  },
  {
    title: "Tools & Platforms",
    icon: "wrench",
    skills: [
      "Git & GitHub",
      "Docker",
      "Visual Studio Code",
      "Android Studio",
      "Postman",
      "Microsoft Excel",
      "DBeaver",
    ],
  },
];

export const STATS: StatItem[] = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Projects Delivered", value: 20, suffix: "" },
  { label: "Happy Clients", value: 15, suffix: "" },
  { label: "Awards Won", value: 2, suffix: "" },
];
