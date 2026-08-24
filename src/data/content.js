// ─────────────────────────────────────────────────────────────
// All editable site content lives here. Change text, add a
// project, or add a skill without touching any component code.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Vuyo Mncina",
  tagline: "Final-year Computer Science student building practical software for real problems in Eswatini.",
  location: "Eswatini",
  // Drop a photo into /public/images/ and point this at it, e.g. "/images/vuyo.jpg"
  photo: "/images/Vux.jpeg",
  resumeUrl: null // e.g. "/vuyo-mncina-cv.pdf" — leave null to hide the button
};

export const about = {
  paragraphs: [
    "I'm a final-year Computer Science student at Eswatini Medical Christian University with a focus on web development, relational databases, and data engineering fundamentals.",
    "I enjoy building software that solves practical problems. Most recently, I co-developed DonorConnect as part of student team Synergy Trio — a digital blood donor management platform that won seed capital at the MTN x Enactus Digital Health Solutions Fair 2026.",
  ],
};

export const academics = {
  intro: "Coursework that's shaped how I think about problems, not just how I write code.",
  strengths: [
    {
      name: "Theory of Computing",
      note: "Automata, computability, and what makes a problem solvable at all.",
    },
    {
      name: "Discrete Mathematics",
      note: "The logic and structures underneath every algorithm I write.",
    },
    {
      name: "Algorithms & Data Structures",
      note: "My favourite course — efficiency as a design constraint, not an afterthought.",
    },
    {
      name: "Algebra",
      note: "Linear systems and structures that show up constantly in ML fundamentals.",
    },
    {
      name: "Calculus",
      note: "Rates of change and optimisation — the math behind most learning algorithms.",
    },
    {
      name: "Statistics",
      note: "Making sense of data honestly, which matters as much as collecting it.",
    },
  ],
};

export const education = [
  {
    id: "emcu",
    institution: "Eswatini Medical Christian University (EMCU)",
    credential: "BSc Computer Science",
    period: "2023 – Present (Final Year)",
    detail: "Coursework spanning algorithms, discrete math, theory of computing, systems, and applied math, alongside team-based project work.",
  },
  {
    id: "stmarks",
    institution: "St. Mark's High School",
    credential: "EGCSE/IGCSE",
    period: "2018 – 2022 (Completed)",
    detail: "Eswatini General Certificate of Secondary Education syllabus with strong performance in science and mathematics.",
  },
];

export const affiliations = [
  {
    name: "Synergy Trio",
    role: "Student team",
    description: "A small student team behind DonorConnect — built for the MTN x Enactus Digital Health Solutions Fair 2026.",
  },
  // Add more clubs/societies here as they're confirmed, e.g.:
  // { name: "Club name", role: "Member", description: "Short description." },
];

export const projects = [
  {
    id: "donorconnect",
    name: "DonorConnect",
    status: "Deployed prototype",
    statusTone: "lime",
    summary:
      "A donor management platform built for the Eswatini National Blood Transfusion Service (ENBTS) to centralise donor records and make giving blood easier to track and encourage.",
    description:
      "DonorConnect centralises donor records in one place, introduces donor recognition and reward tiers to encourage repeat donations, and uses OTP authentication to keep sign-in simple and secure. Donors can book onto upcoming campaigns directly, get quick answers through a built-in chatbot, and the whole system gives ENBTS staff a digital view of donor management that used to live across paper and spreadsheets.",
    highlights: [
      "Centralised donor records for ENBTS",
      "Donor recognition & reward tiers",
      "OTP-based authentication",
      "Campaign booking for donors",
      "Built-in chatbot for donor questions",
      "Digital donor management dashboard",
    ],
    stack: ["React", "PHP", "MySQL"],
    achievement: "Top 5 finalist & won E10,000 seed capital — MTN x Enactus Digital Health Solutions Fair 2026",
    team: "Built with Synergy Trio",
    links: {
      // Replace with the real repository / live link when ready
      repo: null,
      live: null,
    },
  },
  {
    id: "opphub",
    name: "OppHub",
    status: "Early-stage / experimental",
    statusTone: "sky",
    summary:
      "An idea-stage platform for discovering student opportunities in Eswatini — scholarships, internships, competitions — in one searchable place.",
    description:
      "OppHub is early and unfinished. The concept is an AI-assisted pipeline that ingests opportunity listings from source URLs and normalises them into a single searchable feed, so students stop missing scholarships, internships, and competitions scattered across different pages and group chats. Right now it's a working proof of concept rather than a finished product.",
    highlights: [
      "AI-assisted URL ingestion concept",
      "Centralised opportunity feed (in progress)",
      "React/Vite frontend",
      "Express + MySQL backend",
    ],
    stack: ["React", "Vite", "Express", "MySQL"],
    achievement: null,
    team: null,
    links: {
      repo: null,
      live: null,
    },
  },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", favorite: true },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "SQL" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    category: "Frontend",
    items: [{ name: "React" }, { name: "Vite" }],
  },
  {
    category: "Backend",
    items: [{ name: "Node.js" }, { name: "PHP" }],
  },
  {
    category: "Databases",
    items: [{ name: "MySQL" }, { name: "phpMyAdmin" }, { name: "MySQL Workbench" }],
  },
  {
    category: "Tools",
    items: [{ name: "Linux" }, { name: "Git & GitHub" }, { name: "XAMPP" }, { name: "Cisco Packet Tracer" }],
  },
  {
    category: "Data & Certifications",
    items: [
      { name: "Data Engineer Associate (DataCamp)", favorite: true },
      { name: "SoloLearn Certified", favorite: true },
      { name: "Data Engineering fundamentals" },
      { name: "ML fundamentals" },
      { name: "SQL & Relational Databases" },
    ],
  },
];

// Add new achievements here as they happen — newest first is a good default.
export const achievements = [
  {
    id: "mtn-enactus",
    title: "Top 5 Finalist & E10,000 Seed Capital",
    org: "MTN x Enactus Digital Health Solutions Fair 2026",
    description: "Awarded for DonorConnect, built with Synergy Trio for the Eswatini National Blood Transfusion Service.",
    year: "2026",
  },
  {
    id: "datacamp-associate",
    title: "Data Engineer Associate Career Track",
    org: "DataCamp Certification",
    description: "Completed comprehensive DataCamp career track covering data engineering pipelines, data warehousing, SQL, and database design.",
    year: "2026",
  },
  {
    id: "sololearn-certs",
    title: "SoloLearn Technical Certifications",
    org: "SoloLearn",
    description: "Earned certifications across multiple programming and engineering tracks, including Python, Java, SQL, JavaScript, and Web Development.",
    year: "2023 – 2024",
  },
  {
    id: "degree",
    title: "BSc Computer Science (Final Year)",
    org: "Eswatini Medical Christian University",
    description: "Focusing on algorithms, theoretical computer science, and practical software engineering.",
    year: "2023 – Present",
  },
];

export const contact = {
  email: "vuyomncina@gmail.com", // TODO: replace with real email
  github: "https://github.com/Vux-Slade", // TODO: replace with real GitHub URL
  linkedin: "https://linkedin.com/in/vuyo-mncina-6344b4319", // TODO: replace with real LinkedIn URL

};
