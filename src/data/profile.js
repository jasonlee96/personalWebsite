export const profile = {
  name: "Jason Lee",
  initials: "JL",
  title: "Software Engineer",
  targetRole: "Senior / Lead Software Engineer",
  tagline:
    "6+ years building full-stack products across React, .NET and Python — now looking for a Senior / Lead Software Engineer role.",
  summary:
    "I'm a full-stack software engineer with 6+ years of experience shipping production web applications, from React front ends to .NET and Python services backed by MySQL, MSSQL and MongoDB. I enjoy owning features end-to-end, improving how a team ships software, and mentoring engineers along the way.",
  email: "jasonleezhiyong@gmail.com",
  links: {
    github: "https://github.com/jasonlee96",
    linkedin: "https://www.linkedin.com/in/jasonleezhiyong/",
    projectRepo: "https://github.com/jasonlee96/personalWebsite",
  },
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript / TypeScript", "Vue.js", "HTML & CSS"],
  },
  {
    title: "Backend",
    skills: [".NET / ASP.NET Core", "C#", "Python"],
  },
  {
    title: "Data",
    skills: ["MySQL", "MSSQL", "MongoDB"],
  },
  {
    title: "Tooling & Practices",
    skills: ["Git", "Azure DevOps", "CI/CD", "Agile / Scrum"],
  },
];

// NOTE: The two entries below are placeholders — swap in your real employers,
// titles and dates before this goes live.
export const experience = [
  {
    role: "[Your Current Title, e.g. Senior Software Engineer]",
    company: "[Company Name]",
    period: "[Month Year] — Present",
    bullets: [
      "Own end-to-end delivery of full-stack features using React on the front end and .NET/C# services on the back end.",
      "Design and maintain relational and document data models across MySQL, MSSQL and MongoDB.",
      "Lead code reviews and mentor engineers to raise team-wide code quality and delivery speed.",
      "Set up and maintain CI/CD pipelines for automated build, test and deployment.",
    ],
  },
  {
    role: "[Previous Title, e.g. Software Engineer]",
    company: "[Company Name]",
    period: "[Month Year] — [Month Year]",
    bullets: [
      "Built and shipped customer-facing features for web applications across multiple client industries.",
      "Worked across the stack with React/Vue front ends and ASP.NET/.NET back ends.",
      "Collaborated with designers and product managers to turn requirements into production code.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Software Engineering",
    school: "Xiamen University Malaysia",
    period: "Feb 2017 — Jan 2021",
    detail: "CGPA 3.38",
  },
  {
    degree: "Diploma in Electrical and Electronic Engineering",
    school: "INTI International University",
    period: "Jun 2014 — Sep 2016",
    detail: "CGPA 3.89",
  },
];

export const projects = [
  {
    title: "Skillset Analysis",
    subtitle: "Final Year Project",
    description:
      "A data mining system that analyzes 10k+ job postings to reveal the top trending skill sets for any job title and location, using unsupervised learning to extract key requirements automatically.",
    tech: ["Python", "React", "MongoDB"],
    imageId: "skillsetAnalysis",
    url: "https://jasonlee96.github.io/Skillset-analysis/",
  },
  {
    title: "Invoice Generator",
    subtitle: "Personal Project",
    description:
      "A Windows desktop app that generates customer invoices from an HTML template and exports them to PDF, streamlining a manual billing workflow.",
    tech: [".NET", "WinForms"],
    imageId: "invoiceGenerator",
    url: "https://github.com/jasonlee96/InvoiceGeneratorWinForm",
  },
  {
    title: "Supezy Website",
    subtitle: "Client Project",
    description:
      "A product-introduction site built for a client, including a lightweight custom CMS so non-technical staff could update page content themselves.",
    tech: ["React", "PHP"],
    imageId: "supezy",
    url: "https://www.supezy.com/",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
