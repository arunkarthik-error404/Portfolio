/**
 * Single source of truth for all site content.
 * Design lives in components; data lives here. Edit copy in this file only.
 */

export const site = {
  // TODO: replace with the real deployed domain (Vercel URL or custom domain).
  url: "https://arunkarthik.duckdns.org",
  title: "Arun Karthik BT | AI Engineer | LLM Agents, RAG & Voice AI",
  description:
    "Arun Karthik BT is an AI Engineer building production LLM systems — multi-agent orchestration, RAG and hybrid retrieval, real-time voice agents, and the FastAPI backends that serve them.",
  gaId: "",
} as const;

export const person = {
  name: "Arun Karthik BT",
  firstName: "Arun",
  initials: "AK",
  role: "AI Engineer",
  company: "10xScale.ai",
  companyUrl: "https://10xscale.ai/",
  companyLocation: "Hyderabad",
  base: "Hyderabad, Telangana, India",
  email: "arunkarthikbalakrishnan@gmail.com",
  phone: "+91 8072593908",
  phoneHref: "+918072593908",
  availability: "Building agentic AI systems in production",
  heroBio:
    "I build production LLM systems — multi-agent backends, RAG, and real-time voice agents — and own the path from prompt and model choice to the FastAPI, PostgreSQL and task-queue infrastructure that serves them.",
  links: {
    linkedin: "https://www.linkedin.com/in/arun-karthik-0aa085426",
    github: "https://github.com/arunkarthik-error404",
    site: "https://arunkarthik.duckdns.org",
  },
  portrait: "/images/portrait.jpg",
} as const;

/** Ticker strips */
export const marquee = {
  hero: ["LANGGRAPH", "MCP", "RAG", "GEMINI", "FASTAPI", "LIVEKIT", "POSTGRESQL", "QDRANT"],
  band: ["AGENTS THAT SHIP", "COST-AWARE INFERENCE", "RETRIEVAL THAT WORKS", "OPEN TO WORK"],
} as const;

export const about = {
  statement:
    "Agents that ship. Retrieval that's right. Inference that doesn't burn the budget.",
  paragraphs: [
    "I'm an AI Software Engineer at 10xScale.ai in Hyderabad, building agentic backends with LangGraph, AgentFlow and MCP/FastMCP — and the extraction, retrieval and voice pipelines around them.",
    "My bias is toward what works in production: reliable, measurable systems over impressive demos. I reach for deterministic logic wherever accuracy matters, use models where they genuinely add value, and keep latency and cost in check as things scale.",
    "I studied Electrical and Electronics Engineering at BITS Pilani, and co-authored a peer-reviewed paper on phosphorene electrodes for supercapacitors in ACS Applied Energy Materials.",
  ],
  stats: ["LangGraph · MCP · RAG", "10xScale.ai — since Jul 2026", "Hyderabad / Remote"],
} as const;

export interface SkillCategory {
  key: string;
  label: string;
  blurb: string;
  skills: string[];
}

/** Order is the on-page narrative: agentic AI first. */
export const skillCategories: SkillCategory[] = [
  {
    key: "genai",
    label: "GenAI & Agentic AI",
    blurb: "Agents, retrieval and evaluation that hold up in production.",
    skills: [
      "LangGraph",
      "LangChain",
      "CrewAI",
      "AgentFlow",
      "MCP / FastMCP",
      "LlamaIndex",
      "Multi-Agent Orchestration",
      "RAG & Hybrid RAG",
      "Prompt Engineering",
      "Structured Output",
      "Tool Calling",
      "Cost Optimisation",
    ],
  },
  {
    key: "models",
    label: "Models & Voice",
    blurb: "Picking the right model and keeping latency low.",
    skills: [
      "Gemini 2.5 / Vertex AI",
      "Groq (Llama 3)",
      "OpenAI-compatible APIs",
      "Google Cloud STT & TTS",
      "LiveKit",
      "VAD",
    ],
  },
  {
    key: "retrieval",
    label: "Retrieval & Data",
    blurb: "Turning messy documents into queryable knowledge.",
    skills: [
      "Qdrant",
      "pgvector",
      "ChromaDB",
      "Embeddings",
      "Semantic Search",
      "Knowledge Graphs",
      "PyMuPDF",
      "spaCy NER",
      "Entity Resolution",
    ],
  },
  {
    key: "backend",
    label: "Backend & Infrastructure",
    blurb: "The services and queues that serve the models.",
    skills: [
      "FastAPI",
      "PostgreSQL",
      "Tortoise ORM",
      "Redis",
      "TaskIQ / Celery",
      "Apache Airflow",
      "BigQuery",
      "DBT",
      "WebRTC / WebSockets",
    ],
  },
  {
    key: "languages",
    label: "Languages",
    blurb: "Python first, with TypeScript for the edges.",
    skills: ["Python", "SQL", "TypeScript", "JavaScript", "C", "Java (familiar)"],
  },
  {
    key: "cloud",
    label: "Cloud & Dev Tools",
    blurb: "Shipping and testing it all.",
    skills: ["GCP", "AWS", "Docker", "Git", "GitHub Actions", "Pytest", "Pandas", "NumPy", "Streamlit"],
  },
];

export interface TimelineEntry {
  kind: "work" | "education";
  title: string;
  org: string;
  orgUrl?: string;
  location: string;
  start: string;
  end: string;
  year: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    title: "AI Software Engineer",
    org: "10xScale.ai",
    orgUrl: "https://10xscale.ai/",
    location: "Hyderabad",
    start: "Jul 2026",
    end: "Present",
    year: "2026",
    description:
      "Nirnaya, a legal investigation platform: FastAPI and TaskIQ/Redis pipelines that parse 1,000+ court and registry PDFs into PostgreSQL, deterministic parsers in place of per-document LLM calls, identity resolution with hard vetoes before fuzzy scoring, and a Chrome extension for data collection. Also an AI tutoring platform: low-latency LiveKit voice, adaptive multi-agent routing on AgentFlow, and MCP tools via FastMCP.",
  },
  {
    kind: "work",
    title: "AI Intern",
    org: "10xScale.ai",
    orgUrl: "https://10xscale.ai/",
    location: "Hyderabad",
    start: "Jul 2025",
    end: "Dec 2025",
    year: "2025",
    description:
      "Built a dual-mode medical chatbot with multimodal report analysis (Gemini 2.5 Flash, AgentFlow), a database agent with MCP tools on LangGraph, and a pgvector RAG chatbot over 200+ PDFs.",
  },
  {
    kind: "work",
    title: "AI Intern",
    org: "FourKites",
    location: "Chennai",
    start: "Apr 2024",
    end: "Jun 2024",
    year: "2024",
    description:
      "Built a multi-agent CrewAI workflow converting XML, CSV and Excel inputs into structured JSON, and used Virtuoso for AI-powered application testing.",
  },
  {
    kind: "education",
    title: "B.E. (Hons.) Electrical and Electronics Engineering",
    org: "BITS Pilani, Hyderabad Campus",
    orgUrl: "https://www.bits-pilani.ac.in/hyderabad/",
    location: "Hyderabad",
    start: "",
    end: "",
    year: "BITS",
    description:
      "Class XII: Sri Vignesh Vidyalaya (84.6%). Class X: Alpha Wisdom Vidyashram (91.8%).",
  },
];

export interface Project {
  slug: string;
  title: string;
  problem: string;
  role: string;
  outcome: string;
  tags: string[];
  links: { live?: string; repo?: string; video?: string };
  /** Bento sizing: lg = featured 2-col, tall = 1-col tall, wide = full-width */
  size: "lg" | "tall" | "wide";
}

export const projects: Project[] = [
  {
    slug: "nirnaya",
    title: "Nirnaya — Legal Intelligence",
    problem: "Court and registry records are scattered across portals as unstructured PDFs and HTML.",
    role: "Built the extraction pipelines, identity resolution, report generators and the Chrome collection extension.",
    outcome:
      "1,000+ documents from eCourts, Supreme Court, NCLT, DRT, CERSAI and MCA normalised into PostgreSQL, with deterministic parsers cutting LLM cost and latency.",
    tags: ["FastAPI", "TaskIQ", "Gemini", "PostgreSQL", "WXT"],
    links: {},
    size: "lg",
  },
  {
    slug: "ai-tutor",
    title: "AI Tutoring Platform",
    problem: "Students needed real-time voice tutoring that adapts to what they are doing.",
    role: "Built the LiveKit voice pipeline, AgentFlow routing backend and FastMCP tool layer.",
    outcome:
      "Low-latency WebRTC audio with VAD-based cost control and agents that switch between video Q&A, live coding and study planning.",
    tags: ["LiveKit", "Vertex AI", "AgentFlow", "FastMCP", "Qdrant"],
    links: {},
    size: "tall",
  },
  {
    slug: "database-agent",
    title: "Database AI Agent",
    problem: "Non-technical users can't query diverse database schemas.",
    role: "Designed the multi-node LangGraph agent and MCP tool layer.",
    outcome: "Natural-language querying across schemas with a query-understanding preprocessing layer.",
    tags: ["LangGraph", "MCP", "SQL"],
    links: {},
    size: "tall",
  },
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot & Medical Assistant",
    problem: "Answers needed to be grounded in 200+ PDFs and in patient reports and imaging.",
    role: "Built a pgvector RAG chatbot and a dual-mode multimodal medical assistant.",
    outcome:
      "Semantic retrieval-augmented answering, plus patient/expert modes with database-backed appointment scheduling.",
    tags: ["pgvector", "Gemini 2.5 Flash", "AgentFlow"],
    links: {},
    size: "wide",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Who is Arun Karthik BT?",
    answer:
      "Arun Karthik BT is an AI Software Engineer at 10xScale.ai in Hyderabad. He builds production LLM systems — multi-agent orchestration, RAG and hybrid retrieval, and real-time voice agents.",
  },
  {
    question: "What does Arun work with?",
    answer:
      "LangGraph, AgentFlow, CrewAI and MCP/FastMCP for agents; Gemini and Vertex AI for models; Qdrant and pgvector for retrieval; and FastAPI, PostgreSQL, Redis and TaskIQ for the backend. Languages are Python and TypeScript.",
  },
  {
    question: "What has he built recently?",
    answer:
      "A legal-intelligence platform that parses 1,000+ court and registry PDFs into PostgreSQL, an AI tutoring platform with low-latency LiveKit voice and adaptive multi-agent routing, a database agent on LangGraph with MCP tools, and a pgvector RAG chatbot over 200+ PDFs.",
  },
  {
    question: "How does he approach cost and latency?",
    answer:
      "By replacing LLM calls with deterministic parsers wherever accuracy allows, keeping Gemini structured output as a fallback, and using voice activity detection to avoid unnecessary speech processing.",
  },
  {
    question: "Has he published research?",
    answer:
      "Yes. He is second author on a peer-reviewed paper in ACS Applied Energy Materials (vol. 9, no. 18, 2026) on transition-metal doping in monolayer phosphorene for supercapacitor electrodes.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Email arunkarthikbalakrishnan@gmail.com, connect on LinkedIn at linkedin.com/in/arun-karthik-0aa085426, browse code on GitHub at github.com/arunkarthik-error404, or use the contact form on this site.",
  },
];

export const publication = {
  title:
    "First-Principles Study of Transition-Metal Doping in Monolayer Black and Blue Phosphorene: A Promising Pathway for High-Performance Electrode Design for Electric Double-Layer Supercapacitors",
  authors: ["A. S. Reddy", "A. K. BT", "A. Tiwari", "S. Das", "A. Bhattacharjee", "S. Kanungo"],
  me: "A. K. BT",
  venue: "ACS Applied Energy Materials",
  volume: "vol. 9, no. 18",
  pages: "pp. 12434–12461",
  date: "Sept. 2026",
  doi: "10.1021/acsaem.6c01956",
  url: "https://doi.org/10.1021/acsaem.6c01956",
  role: "Second author",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const footer = {
  blurb:
    "AI engineer focused on agentic backends, RAG and real-time voice. Available for full-time roles and interesting problems.",
  location: "Hyderabad, India",
} as const;
