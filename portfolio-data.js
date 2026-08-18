/**
 * Manikandan.R — Portfolio Data Configuration
 * Holds personal info, skills, projects, and social links.
 * Bypasses direct UI dependency for easy maintainability.
 */

export const personalInfo = {
  name: "MANIKANDAN.R",
  title: "AI & DATA SCIENCE × SOFTWARE DEVELOPMENT",
  subtitle: "I BUILD THINGS THAT TURN IDEAS INTO EXPERIENCES.",
  description: "Third-year B.Tech Artificial Intelligence and Data Science student focused on software development, AI-powered applications, and building meaningful digital products.",
  education: {
    degree: "B.Tech Artificial Intelligence and Data Science",
    status: "3rd Year Undergraduate Student",
    location: "India"
  },
  statusIndicator: "AVAILABLE FOR OPPORTUNITIES",
  email: "manikandanr2815@gmail.com"
};

export const skills = {
  development: [
    { name: "Python", desc: "Primary language for software development, scripting, data engineering, and machine learning." },
    { name: "HTML", desc: "Semantic web page structure and accessible markup." },
    { name: "CSS", desc: "Modern layouts, responsive design, custom animations, and visual styling." },
    { name: "JavaScript", desc: "Core language for interactive web experiences, DOM scripting, and ES Modules." },
    { name: "React", desc: "Building component-based, reusable, and state-driven web interfaces." },
    { name: "Flask", desc: "Lightweight Python web framework for microservices, backend routing, and REST APIs." },
    { name: "SQL", desc: "Designing relational databases, indexing, and writing clean structured queries." },
    { name: "Git", desc: "Version control system to manage source history and collaborate effectively." }
  ],
  aiData: [
    { name: "Python", desc: "Core tool for data pipelines, AI models, and computational scripting." },
    { name: "Machine Learning", desc: "Developing classification, regression, and clustering models for data insights." },
    { name: "Data Analysis", desc: "Extracting patterns, cleansing datasets, and drawing logical conclusions from raw data." },
    { name: "Pandas", desc: "Data manipulation library for cleaning, filtering, and joining structured datasets." },
    { name: "NumPy", desc: "Scientific computing library supporting multi-dimensional arrays and mathematical operations." },
    { name: "Matplotlib", desc: "Data visualization tool for rendering charts, histograms, and analytical plots." }
  ],
  tools: [
    { name: "GitHub", desc: "Cloud hosting platform for Git repositories, actions, and code collaboration." },
    { name: "VS Code", desc: "Primary code editor optimized with debugger extensions and terminal controls." },
    { name: "SQLite", desc: "Lightweight, file-based SQL database for prototyping and local storage." },
    { name: "Figma", desc: "Vector graphics editor and prototyping tool for UI/UX wireframes." },
    { name: "Canva", desc: "Design tool used for quick graphics and visual slide layouts." }
  ]
};

export const projects = [
  {
    id: 1,
    title: "AIDS_BOT",
    category: "AI / EDUCATION / PDF ASSISTANT",
    shortDescription: "An AI-powered academic notes assistant that helps students interact with PDF study materials and ask questions based on their notes.",
    overview: "An AI-powered academic notes assistant that helps students interact with PDF study materials and ask questions based on their notes.",
    technologies: ["Python", "Flask", "PDF Processing", "Ollama", "AI"],
    features: [
      "PDF-based study material",
      "Question answering",
      "AI-assisted responses",
      "Student-focused interface"
    ],
    learning: "Built experience with PDF processing, Flask and integrating a local AI workflow into a web application.",
    images: [
      // "assets/images/projects/aids-bot-1.png",
      // "assets/images/projects/aids-bot-2.png",
      // "assets/images/projects/aids-bot-3.png"
    ],
    repository: "",
    liveDemo: ""
  },
  {
    id: 2,
    title: "ATTENDANCE MANAGEMENT SYSTEM",
    category: "SOFTWARE / MANAGEMENT",
    shortDescription: "A desktop application designed to simplify student attendance registration, searching and record management.",
    overview: "A desktop application designed to simplify student attendance registration, searching and record management.",
    technologies: ["Python", "Tkinter", "SQLite", "Excel"],
    features: [
      "Attendance registration",
      "Student search",
      "Record management",
      "Data storage"
    ],
    learning: "Improved understanding of Python GUI development and structured data management.",
    images: [
      // "assets/images/projects/attendance-1.png",
      // "assets/images/projects/attendance-2.png",
      // "assets/images/projects/attendance-3.png"
    ],
    repository: "",
    liveDemo: ""
  },
  {
    id: 3,
    title: "EVENT REGISTRATION & MANAGEMENT",
    category: "WEB DEVELOPMENT",
    shortDescription: "A web application for managing event registrations with user and administrative functionality.",
    overview: "A web application for managing event registrations with user and administrative functionality.",
    technologies: ["Python", "Flask", "SQLite", "Bootstrap", "CSV"],
    features: [
      "User registration",
      "Event management",
      "Admin functionality",
      "CSV export"
    ],
    learning: "Improved understanding of Flask-based web application architecture and database integration.",
    images: [
      // "assets/images/projects/event-1.png",
      // "assets/images/projects/event-2.png",
      // "assets/images/projects/event-3.png"
    ],
    repository: "",
    liveDemo: ""
  },
  {
    id: 4,
    title: "AI CROP RECOMMENDATION SYSTEM",
    category: "AI / MACHINE LEARNING",
    shortDescription: "An AI/ML-based project concept designed to recommend suitable crops using agricultural input data.",
    overview: "An AI/ML-based project concept designed to recommend suitable crops using agricultural input data.",
    technologies: ["Python", "Machine Learning", "Data Processing"],
    features: [
      "Agricultural input processing",
      "Crop recommendation concept",
      "Machine learning workflow"
    ],
    learning: "Explored how machine learning can be applied to real-world agricultural decision-making.",
    images: [
      // "assets/images/projects/crop-1.png",
      // "assets/images/projects/crop-2.png"
    ],
    repository: "",
    liveDemo: ""
  }
];

export const journey = [
  { year: "2024", title: "STARTED BUILDING", desc: "First steps into scripting. Created console automation scripts and learned computer science fundamentals." },
  { year: "2025", title: "EXPLORED PYTHON + AI", desc: "Transitioned to building web backends (Flask) and implementing basic machine learning classifiers." },
  { year: "2026", title: "THIRD YEAR UNDERGRADUATE", desc: "Pursuing B.Tech AI & Data Science. Building complex full-stack software and data tools." },
  { year: "NOW", title: "BUILDING & EVOLVING", desc: "Refining backend patterns, exploring frontend state, and focusing on product engineering." },
  { year: "NEXT", title: "PRODUCT DEVELOPER", desc: "Aiming to join engineering teams, solve large-scale problems, and construct robust products." }
];

export const focusAreas = [
  { id: "01", title: "PYTHON" },
  { id: "02", title: "FULL-STACK DEVELOPMENT" },
  { id: "03", title: "AI / MACHINE LEARNING" },
  { id: "04", title: "PROBLEM SOLVING" },
  { id: "05", title: "REAL-WORLD PROJECTS" }
];

export const careerDirection = [
  "Software Development",
  "Full-Stack Development",
  "AI-Powered Applications",
  "Strong Product Engineer"
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/manikandan-r-ab1998385/",
  github: "https://github.com/Manikandan2815",
  email: "manikandanr2815@gmail.com"
};
