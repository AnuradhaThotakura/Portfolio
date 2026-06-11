import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const HERO_CONTENT = `Python Developer with 3+ years of backend experience and hands-on GenAI project work building RAG-based LLM applications. Experienced in OpenAI APIs, Pinecone vector retrieval, prompt engineering, AI agent workflows, and structured output generation. Strong production background in Django, DRF, REST APIs, PostgreSQL, Redis, Docker, and AWS, with fintech experience in API integrations, compliance workflows, and scalable system delivery.`;
export const ABOUT_TEXT = `I am a Python developer with 3+ years of experience building scalable backend systems and GenAI applications. I specialize in Django, Django REST Framework, and REST API development, with growing expertise in RAG pipelines, vector databases, and LLM-powered workflows. At TalentBridge, I work on a multi-tenant Vendor Management System using Django, DRF, PostgreSQL, Redis, Celery, and Docker. Previously at Moneybloom, I delivered fintech integrations, production reporting, and API migrations for a live investment platform. I'm passionate about writing clean code, solving complex problems, and building reliable systems that create real business impact.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Software Developer",
//     company: "Moneybloom.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },

// ];

export const EXPERIENCES = [
  {
    year: "Jun 2026 - Present",
    role: "Software Developer",
    company: "TalentBridge",
    description: `Develop and maintain features for a multi-tenant Vendor Management System (VMS) using Django 5.1, Django REST Framework, SvelteKit 2, JavaScript, and PostgreSQL. Built and integrated REST APIs across candidate management, vendor operations, document processing, and workflow automation modules. Configured Docker-based environments, Redis caching, and Celery background jobs to improve scalability and response performance. Integrated MinIO, Mailpit, ClamAV, and document conversion services for document ingestion, processing, and production support.`,
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Celery",
      "JavaScript",
    ],
  },
  {
    year: "Jan 2023 - Jun 2026",
    role: "Software Developer",
    company: "Moneybloom",
    description: `Led end-to-end migration of NSE integration services from XML to JSON-based APIs, standardizing schemas and improving maintainability across production fintech workflows. Streamlined transaction processing, client onboarding, and reporting modules for a live investment platform. Enhanced production financial reports including Online Transaction Reports, Account Statements, Redeemed Funds Reports, SIP Reports, and AUM Reconciliation Reports. Implemented server monitoring, transaction mismatch alerts, and operational tracking. Integrated 5 MF Central API modules with regulatory validations and investment restrictions.`,
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "API Integration",
      "Linux",
    ],
  },
];

// export const PROJECTS = [
//   {
//     title: "E-Commerce Website",
//     image: project1,
//     description:
//       "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
//     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Task Management App",
//     image: project2,
//     description:
//       "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
//     technologies: ["HTML", "CSS", "Angular", "Firebase"],
//   },
//   {
//     title: "Portfolio Website",
//     image: project3,
//     description:
//       "A personal portfolio website showcasing projects, skills, and contact information.",
//     technologies: ["HTML", "CSS", "React", "Bootstrap"],
//   },
//   {
//     title: "Blogging Platform",
//     image: project4,
//     description:
//       "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
//     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
//   },
// ];

export const PROJECTS = [
  {
    title: "MediSure Regulatory Intelligence Assistant",
    image: project1,
    description:
      "Built an agentic GenAI research assistant that accepts natural language queries and monitors global health authorities (FDA, EMA, CDSCO, WHO) for regulations, safety alerts, recalls, and post-market surveillance updates. Implemented a RAG pipeline using OpenAI embeddings and Pinecone vector search with document chunking, semantic retrieval, and metadata-based source traceability.",
    technologies: [
      "OpenAI",
      "Pinecone",
      "RAG",
      "n8n",
      "AI Agents",
      "Prompt Engineering",
    ],
  },
  {
    title: "Inventory Management System",
    image: project2,
    description:
      "A backend system built with Django REST Framework to manage inventory data including stock levels, product details, and transactions. Features include CRUD operations, search and filter functionality, and role-based access control.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
    ],
  },
  {
    title: "Hotel Management System",
    image: project3,
    description:
      "A full-featured hotel booking backend developed with Django REST Framework. Includes user authentication, room booking with date-based filters, admin dashboard for booking insights, and API endpoints for managing users, rooms, and bookings.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
      "Postman",
    ],
  },
];

export const CONTACT = {
  address: "Hyderabad, India",
  phoneNo: "+91 7036260194",
  email: "thotakuraanuradha123@gmail.com",
};

export const SKILLS = [
  "Python",
  "Django",
  "Django REST Framework",
  "OpenAI API",
  "RAG",
  "Pinecone",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Celery",
  "AWS",
  "REST APIs",
  "JavaScript",
  "Linux",
  "Git",
  "Postman",
  "pytest",
];
