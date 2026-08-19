/**
 * Manikandan.R — Portfolio Data Configuration
 * Holds personal info, skills, projects, and social links.
 * Bypasses direct UI dependency for easy maintainability.
 */

export const personalInfo = {
  name: "MANIKANDAN.R",
  title: "AI & DATA SCIENCE × SOFTWARE DEVELOPMENT",
  subtitle: "I BUILD THINGS THAT TURN IDEAS INTO EXPERIENCES.",
  description: "Third-year B.Tech Artificial Intelligence and Data Science student at Anand Institute of Higher Technology focused on software development, AI-powered applications, and building meaningful digital products.",
  education: {
    degree: "B.Tech Artificial Intelligence and Data Science",
    institution: "Anand Institute of Higher Technology",
    affiliation: "Anna University",
    timeline: "2024 – 2028",
    cgpa: "8.96 / 10.0",
    status: "3rd Year Undergraduate Student",
    location: "Chennai, Tamil Nadu, India"
  },
  statusIndicator: "AVAILABLE FOR OPPORTUNITIES",
  email: "mani15520007@gmail.com" // Updated from email on resume
};

export const skills = {
  languages: [
    { name: "Python", desc: "Core language for software engineering, scripting, and data science." },
    { name: "SQL (Basic)", desc: "Relational database querying and structures." },
    { name: "HTML5", desc: "Semantic structure for modern accessible web pages." },
    { name: "CSS3", desc: "Styling layouts, animations, and visual presentation." },
    { name: "JavaScript", desc: "Dynamic interactive functionality and ES Modules." }
  ],
  aiData: [
    { name: "Artificial Intelligence", desc: "Designing intelligent system models and workflows." },
    { name: "Data Science", desc: "Data processing, analysis, and statistical evaluation." },
    { name: "Data Structures & Algorithms", desc: "Core logic, optimization, and problem-solving patterns." },
    { name: "Pandas", desc: "Data manipulation, alignment, and structured operations." },
    { name: "NumPy", desc: "Scientific computing, numerical arrays, and math utilities." }
  ],
  development: [
    { name: "Flask", desc: "Lightweight backend micro-routing and REST API setups." },
    { name: "Web Development", desc: "Building full-stack responsive web experiences." }
  ],
  tools: [
    { name: "Git", desc: "Distributed version control system to track file modifications." },
    { name: "GitHub", desc: "Cloud repository hosting and developer collaboration pipelines." },
    { name: "VS Code", desc: "Core development environment, debugging, and terminal control." },
    { name: "Arduino IDE", desc: "Microcontroller coding, sensor integration, and hardware compiles." }
  ]
};

export const projects = [
  {
    id: 1,
    title: "AIDS_BOT",
    category: "AI / EDUCATION / PDF ASSISTANT",
    shortDescription: "An AI-powered academic notes assistant that helps students interact with PDF study materials and ask questions based on their notes.",
    overview: "An AI-powered academic notes assistant that helps students interact with PDF study materials and ask questions based on their notes.",
    problem: "Students often struggle to quickly extract key learning points from long PDF lecture notes, resulting in hours spent manually searching through text.",
    solution: "Developed a web assistant that parses PDF documents locally, indexes the content, and provides an AI chatbot interface for instant contextual Q&A.",
    role: "Solo Developer (Full-Stack & AI Integration)",
    outcome: "Created a fully functional local assistant that handles academic notes interaction without external API dependencies.",
    technologies: ["Python", "Flask", "PDF Processing", "Ollama", "AI"],
    features: [
      "PDF-based study material parsing",
      "Interactive chatbot interface",
      "AI-assisted contextual responses",
      "Student-focused web dashboard"
    ],
    howItWorks: [
      "User uploads a PDF document via the web dashboard.",
      "Flask backend parses the document and extracts text segments.",
      "Text is indexed and queried against the local AI model (Ollama).",
      "AI responds with contextual reference pages and answers."
    ],
    learning: "Built experience with PDF processing, Flask and integrating a local AI workflow into a web application.",
    images: [
      "assets/images/projects/aids-bot.webp"
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
    problem: "Manual attendance reporting is tedious, prone to recording errors, and time-consuming to audit at the end of the term.",
    solution: "Designed a Tkinter desktop application with local SQLite database persistence, allowing fast check-in and one-click CSV exporting.",
    role: "Solo Developer (GUI & Database Design)",
    outcome: "Built a functional offline tool that eliminates manual spreadsheet errors and simplifies administrative auditing.",
    technologies: ["Python", "Tkinter", "SQLite", "Excel"],
    features: [
      "Attendance registration grid",
      "Student search and filtering",
      "Record auditing database",
      "One-click CSV report export"
    ],
    howItWorks: [
      "Rosters are loaded dynamically from a local SQLite database.",
      "Students are marked present/absent via an interactive grid dashboard.",
      "Reports are generated showing daily and cumulative attendance statistics.",
      "Export engine compiles attendance into CSV files."
    ],
    learning: "Improved understanding of Python GUI development and data management.",
    images: [
      "assets/images/projects/attendance-management.webp"
    ],
    repository: "",
    liveDemo: ""
  },
  {
    id: 3,
    title: "AI CROP RECOMMENDATION SYSTEM",
    category: "AI / MACHINE LEARNING",
    shortDescription: "An AI/ML-based project concept designed to recommend suitable crops using agricultural input data.",
    overview: "An AI/ML-based project concept designed to recommend suitable crops using agricultural input data.",
    problem: "Farmers lack accessible tools to determine the most viable crop based on changing soil parameters (N, P, K) and environmental conditions.",
    solution: "Designed an AI/ML concept that recommends crops based on soil metrics and weather inputs using a trained classification model workflow.",
    role: "AI Researcher & Concept Developer",
    outcome: "Researched classification model workflows for agricultural decision-making.",
    technologies: ["Python", "Machine Learning", "Data Processing"],
    features: [
      "Agricultural input metrics monitoring",
      "Crop compatibility evaluation",
      "Machine learning classification model"
    ],
    howItWorks: [
      "Soil sensors capture Nitrogen, Phosphorus, Potassium, temperature, and moisture levels.",
      "Input metrics are processed through a python data pipeline.",
      "A classification model evaluates parameter ranges against crop compatibility profiles.",
      "System displays the best recommended crop with confidence metrics."
    ],
    learning: "Explored how machine learning can be applied to real-world agricultural decision-making.",
    images: [
      "assets/images/projects/ai-crop-recommendation.webp"
    ],
    repository: "",
    liveDemo: ""
  },
  {
    id: 4,
    title: "COLOR SORTING MACHINE",
    category: "HARDWARE / ARDUINO / AUTOMATION",
    shortDescription: "An automated physical machine concept built with Arduino Uno, TCS3200 color sensor, and servo motors to identify and sort items by color.",
    overview: "An automated physical machine concept built with Arduino Uno, TCS3200 color sensor, and servo motors to identify and sort items by color.",
    problem: "Sorting items on industrial assembly lines is repetitive and manual; modeling hardware prototypes helps learn embedded programming and actuators.",
    solution: "Designed and built an automated physical sorting mechanism using an Arduino Uno microchip, TCS3200 sensor, and servo motors.",
    role: "Solo Developer (Hardware & Embedded C++)",
    outcome: "Successfully implemented a real-time hardware control loop combining optical sensors and precise actuator adjustments.",
    technologies: ["Arduino Uno", "C++", "TCS3200 Sensor", "Servo Motor", "Hardware Automation"],
    features: [
      "Real-time automated control loop",
      "TCS3200 color sensor calibration",
      "Servo motor angular direction routing",
      "Mechanical chute sorting system"
    ],
    howItWorks: [
      "Items roll down a physical track, halting under a TCS3200 color sensor.",
      "TCS3200 reads light frequencies reflecting off the item (Red, Green, Blue components).",
      "Arduino processes incoming frequency values, classifying the matched color.",
      "Arduino commands a servo motor actuator to rotate a physical chute to the target bin."
    ],
    learning: "Learned about hardware-software integration, PWM signals, sensor calibration, and electronic schematics.",
    images: [
      "assets/images/projects/color-sorting-machine.webp"
    ],
    repository: "",
    liveDemo: ""
  }
];

export const journey = [
  { year: "2024", title: "B.TECH STARTED", desc: "Started B.Tech Artificial Intelligence & Data Science undergraduate program." },
  { year: "2025", title: "PROJECT BUILDING", desc: "Began building standalone software applications and learning core programming methodologies." },
  { year: "2026", title: "AI & WEB DEVELOPMENT", desc: "Integrated AI concepts and web services to build real-world micro-projects." },
  { year: "NOW", title: "UNDERGRADUATE STUDIES", desc: "Continuing software development and AI engineering learning as a 3rd-year student." }
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
  email: "mani15520007@gmail.com"
};

// Verified Certifications
export const certifications = [
  {
    name: "IBM Python for Data Science, AI & Development",
    issuer: "Coursera",
    date: "July 2026",
    skills: ["Python", "AI", "Data Science"],
    url: "" // Non-clickable, no fake URL
  }
];
