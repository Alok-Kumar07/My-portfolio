// ============================================================
//  PORTFOLIO DATA — Edit everything here to personalise!
// ============================================================

export const personal = {
  name: "Alok Kumar",
  title: "Full-Stack Developer",
  tagline: "Building digital experiences that matter",
  email: "akpatel09557@gmail.com",
  phone: "+91 9557831091",
  location: "Chennai, Tamil Nadu",
  github: "https://github.com/Alok-Kumar07",
  linkedin: "https://www.linkedin.com/in/alok-kumar-653491376/",
  // twitter: "https://twitter.com/alexkumar",
  resumeUrl: "/resume.pdf", // Place your resume.pdf in /public folder
  avatar: "https://media.licdn.com/dms/image/v2/D5635AQHUj7BYo4gK0g/profile-framedphoto-shrink_800_800/B56Z3igApyIUAg-/0/1777621535624?e=1778227200&v=beta&t=QU6RI_-Gji9FhgWEOKxfia4uWcBtPPwUsUUO4LjZf_4", // Set to image URL or keep null for initials avatar
  bio: "I'm a passionate full-stack developer with 1+ years of experience crafting performant, scalable web applications and app applications. I love turning complex problems into elegant solutions and collaborating with teams to ship products users love.",
  bioShort: "Passionate full-stack developer turning complex problems into elegant solutions.",
  availableForWork: true,
};

export const education = [
  {
    degree: "M.Tech in Computer Science & Engineering",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai(Kattankulathur), Tamil Nadu",
    year: "2025 – 2027",
    grade: "7.79 CGPA",
    highlights: ["Data Structures & Algorithms", "Web Technologies", "Database Systems", "Computer Networking", "Software Engineering"],
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    location: "Lucknow, Uttar Pradesh",
    year: "2020 – 2024",
    grade: "8.05 CGPA",
    highlights: ["Data Structures & Algorithms", "Web Technologies", "Cloud Computing", "Database Systems", "Operating Systems", "Software Engineering",],
  },
];

export const skills = {
  "Languages": [
    "Java",
    "JavaScript (ES6+)",
    "TypeScript",
    "SQL",
    "HTML5",
    "CSS3",
    "Python",
  ],
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS","Vue.js", "Redux","Redux Toolkit", "HTML5/CSS3","Material UI", 
    "Bootstrap"],
  "Backend": ["Node.js", "Express.js", "REST APIs","Firebase(BaaS)"],
   "Mobile": ["React Native", "Expo", "Android Studio"],
  "Database": [ "MongoDB", "Firebase", "MySQL","PostgreSQL"],
  "DevOps & Tools": [
    "VS Code","Firebase (Auth, Storage)", 
    "Vercel", 
    "Netlify", 
    "Render", 
    "Cloudinary", "Git/GitHub", "Linux",  
    "Postman", 
    "npm", 
    "Yarn", 
    "Chrome DevTools",],
  "Core CS Concepts":[ "Data Structures & Algorithms", "OOP", "RESTful API Design", "Database Management Systems", "Operating Systems" ],
  "Other": ["Figma", "Postman" ],
};

export const projects = [
  {
    id: 1,
    title: "Medico– Medication Adherence App",
    description: "Built a cross-platform healthcare application with role-based access (Doctor, Patient, Caregiver) using React Native and Firebase, supporting 100+ concurrent users with real-time data sync via Firestore.",
    longDescription: "Built a cross-platform healthcare application with role-based access (Doctor, Patient, Caregiver) using React Native and Firebase, supporting 100+ concurrent users with real-time data sync via Firestore. Designed an automated medication scheduling and push-notification system, achieving ˜95% on-time adherence by triggering alarms and reminders with zero manual intervention. Implemented an end-to-end treatment verification pipeline allowing patients to upload image proof and enabling doctors/caregivers to validate compliance, increasing monitoring transparency by ˜80%. Enforced permission-based data-sharing and privacy controls, ensuring secure profile access and seamless report exchange across all stakeholder roles.",
    tech: ["React Native", "Firebase", "React Native CLI"],
    github: "https://github.com/Alok-Kumar07/Medico",
    live: "https://github.com/Alok-Kumar07/Medico/blob/main/README.md",
    featured: true,
    type: "Mobile App",
    images: ["/projects/patient_profile.jpg", "/projects/doctor_profile.png", "/projects/patient_home.png","projects/doctor_home.png", ],
    // video: "/projects/medico-demo.mp4",
    color: "#7c6aff",
  },
  {
    id: 2,
    title: "WanderHotel– Hotel Booking & Review Platform",
    description: "Architected a full-stack hotel booking platform with a dual-role system (Admin & User), where users can browse listings, make bookings, and submit reviews, while admins can verify, manage, and oversee all bookings through a dedicated dashboard.",
    longDescription: "Architected a full-stack hotel booking platform with a dual-role system (Admin & User), where users can browse listings, make bookings, and submit reviews, while admins can verify, manage, and oversee all bookings through a dedicated dashboard. Built RESTful APIs with Node.js and Express implementing complete CRUD for hotel listings, bookings, and reviews, enforcing role-based middleware to restrict admin-only routes and protect user data integrity. Integrated Passport.js for session-based authentication supporting secure login/signup flows for both user roles, and Cloudinary CDN for image optimization, reducing average image load time by ˜60%. Engineered a mobile-first responsive UI with EJS templating and Bootstrap, ensuring consistent rendering across 5+ screen breakpoints and a smooth booking experience from listing discovery to confirmation.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary", "Passport.js","Bootstrap"],
    github: "https://github.com/Alok-Kumar07/database-repo",
    live: "https://database-repoo.onrender.com/listings",
    featured: true,
    images: ["/projects/project21.png","/projects/project22.png","/projects/project23.png","/projects/project24.png","/projects/project25.png"],
    type: "Full-Stack Web App",
    color: "#ff6b6b",
  },
  {
    id: 3,
    title: "HR Workflow Designer",
    description: "Core Features: Drag-and-drop canvas to build workflows visually 5 node types: Start, Task, Approval, Automated Step, End — each with its own config form Graph validation (checks for disconnected nodes, missing start/end, etc.) Step-by-step workflow simulation via a mock API layer Undo/Redo with 30-step history Export/Import workflow as JSON Keyboard shortcuts (Ctrl+Z, Delete, etc.)",
    longDescription: "So I built an HR Workflow Designer — essentially a drag-and-drop visual tool for HR admins to design and automate processes like employee onboarding or approval chains. The core is a React Flow canvas where you can drag nodes from a sidebar — there are 5 types: Start, Task, Approval, Automated Step, and End. Each node opens a config panel on the right. Internally, I used Zustand as a global store — nodes and edges live there and get passed as controlled props to React Flow. This gave me a single source of truth. For TypeScript, I used discriminated unions — each node type has its own interface with a nodeType literal field, so when I write a form or simulation step, TypeScript forces me to handle every case. That eliminated a whole class of runtime bugs. I also built a validation layer as a custom hook — it walks the graph and checks things like: is there exactly one Start node, are there disconnected nodes, does every non-end node have an outgoing edge. Then there's a simulation hook that serializes the graph and sends it to a mock API, which returns step-by-step results with status and timing. One design decision I'm proud of — the API layer is completely isolated. mockApi.ts mimics real HTTP calls with delays, so swapping it to a real FastAPI backend requires zero component changes. If I had more time, I'd add Dagre auto-layout, real-time collaboration, and a proper backend with PostgreSQL persistence.",
    tech: ["React 19", "TypeScript", "Zustand (state management)", "React Flow (@xyflow)", "Tailwind CSS v4", "Vite"],
    github: "https://github.com/Alok-Kumar07/hr-workflow-design",
    live: "https://sparkly-sfogliatella-8ad51f.netlify.app/",
    featured: true,
    images: ["/projects/project3.png"],
    type: "Web App",
    color: "#00d4aa",
  },
  // {
  //   id: 4,
  //   title: "WeatherAI — Smart Forecasts",
  //   description: "An AI-powered weather app that predicts hyperlocal weather patterns using ML models trained on historical data, with voice search and location alerts.",
  //   tech: ["Python", "FastAPI", "React", "TensorFlow", "OpenWeather API"],
  //   github: "https://github.com/alexkumar/weatherai",
  //   live: "https://weatherai.app",
  //   featured: false,
  //   type: "AI/ML",
  //   color: "#ffa94d",
  // },
  // {
  //   id: 5,
  //   title: "FinTrack — Personal Finance",
  //   description: "A personal finance tracker with bank sync, budget goals, spending analysis, and smart savings recommendations powered by ML.",
  //   tech: ["React Native", "Node.js", "MongoDB", "Plaid API", "D3.js"],
  //   github: "https://github.com/alexkumar/fintrack",
  //   live: "",
  //   featured: false,
  //   type: "Mobile",
  //   color: "#74c0fc",
  // },
  // {
  //   id: 6,
  //   title: "CodeSnip — Snippet Manager",
  //   description: "A VS Code extension and web app for managing code snippets with AI-powered tagging, search, and team sharing.",
  //   tech: ["TypeScript", "VS Code API", "React", "Supabase"],
  //   github: "https://github.com/alexkumar/codesnip",
  //   live: "",
  //   featured: false,
  //   type: "Tool",
  //   color: "#b197fc",
  // },
];

export const experience = [
  {
    role: "Software Developer (Web)",
    company: "RitvaBuild Pvt. Ltd.",
    location: "Lucknow, India",
    duration: "Jan 2025 – July 2025",
    description: " Architected and launched a full-scale e-commerce platform (RitvaBuild) from scratch using React.js and Firebase, supporting 500+ product listings with real-time synchronization and sub-2s page load times.Engineered dual-application architecture (Admin & Customer portals) with role-based access control, reducing manual product management effort by ˜40% and streamlining end-to-end purchase workflows. Implemented Firebase Authentication and Firestore with optimized data modeling, achieving 99.9% uptime and reducing data fetch latency by ˜35% through efficient query structuring and indexing. Delivered a fully responsive, mobile-first UI using Material UI and Tailwind CSS, improving cross-device compatibility and increasing user session duration by ˜25%.",
    tech: ["React", "Firebase"],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "DevTown",
    location: "Remote",
    duration: "Aug 2023 – Dec 2023",
    description: " Completed an intensive MERN stack internship, building 4+ production-quality projects including a restaurant landing page, a movie booking system, and a full-stack e-commerce application. Designed and consumed RESTful APIs with Node.js and Express.js, integrating MongoDB for efficient data persistence and achieving ˜30% faster query response times through proper schema design. Collaborated in a team of 5 engineers using Git and GitHub, following feature-branch workflows that reduced merge conflicts by ˜50% and improved delivery speed.",
    tech: ["React", "TypeScript", "JavaScript", "Tailwind", "Node.js", "Express.js", "MongoDB", "Git/GitHub", "Postman"],
  },
];

export const achievements = [
  "🏗️ Developed multiple full-stack projects including e-commerce and movie booking platforms",
  "📱 Designed responsive and user-friendly interfaces across devices",
  "🔗 Implemented API integrations and dynamic data handling in projects",
  "🛠️ Completed hands-on internship focused on real-world MERN stack development",
  "💻 Built scalable projects using MongoDB, Express, React ,React Native, Node.js",
  "🧠 Actively practicing DSA and problem-solving techniques",
];

export const stats = [
  { label: "Projects Built", value: "20+" },
  { label: "GitHub Commits", value: "Quality Code" },
  { label: "Problems Solved", value: "Think → Code → Improve" },
  { label: "Coffee & Tea Cups", value: "∞" },
];
