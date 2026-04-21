export interface Module {
  id: string;
  title: string;
  type: "article" | "quiz" | "practice";
  duration?: string;
  description?: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  modules: Module[];
  enrolled: number;
  rating: number;
  price: number;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Advanced Python for Cyber Security",
    instructor: "Dr. Sarah Chen",
    instructorAvatar: "SC",
    description: "Master Python scripting for penetration testing, network analysis, and exploit development. Build real-world security tools from scratch.",
    category: "Cyber Security",
    level: "Advanced",
    modules: [
      { id: "m1", title: "Python for Recon", type: "article", duration: "15 min", description: "Learn to build reconnaissance scripts using Python's socket and requests libraries." },
      { id: "m2", title: "Socket Programming", type: "practice", duration: "30 min", description: "Build a port scanner from scratch using raw sockets." },
      { id: "m3", title: "Recon Quiz", type: "quiz", duration: "10 min" },
      { id: "m4", title: "Exploit Development Basics", type: "article", duration: "20 min", description: "Understanding buffer overflows and shellcode." },
      { id: "m5", title: "Build a Keylogger", type: "practice", duration: "45 min", description: "Create an ethical keylogger for security testing purposes." },
    ],
    enrolled: 2847,
    rating: 4.9,
    price: 79,
    tags: ["Python", "Security", "Ethical Hacking"],
  },
  {
    id: "2",
    title: "Full-Stack Web Development",
    instructor: "Marcus Johnson",
    instructorAvatar: "MJ",
    description: "Build production-ready web apps with React, Node.js, and PostgreSQL. From zero to deployment.",
    category: "Web Development",
    level: "Intermediate",
    modules: [
      { id: "m6", title: "React Fundamentals", type: "article", duration: "20 min" },
      { id: "m7", title: "Build a Todo App", type: "practice", duration: "40 min", description: "Create a full CRUD todo application with React hooks." },
      { id: "m8", title: "React Quiz", type: "quiz", duration: "15 min" },
      { id: "m9", title: "Node.js REST APIs", type: "article", duration: "25 min" },
      { id: "m10", title: "Database Integration", type: "practice", duration: "35 min", description: "Connect your API to PostgreSQL using Prisma ORM." },
    ],
    enrolled: 5231,
    rating: 4.7,
    price: 59,
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "3",
    title: "Data Structures & Algorithms",
    instructor: "Prof. Aisha Patel",
    instructorAvatar: "AP",
    description: "Ace your coding interviews with deep dives into trees, graphs, dynamic programming, and system design.",
    category: "Computer Science",
    level: "Intermediate",
    modules: [
      { id: "m11", title: "Arrays & Hash Maps", type: "article", duration: "18 min" },
      { id: "m12", title: "Two Sum Problem", type: "practice", duration: "25 min", description: "Solve the classic two sum problem with optimal time complexity." },
      { id: "m13", title: "Complexity Quiz", type: "quiz", duration: "10 min" },
      { id: "m14", title: "Trees & Graphs", type: "article", duration: "30 min" },
      { id: "m15", title: "Binary Tree Traversal", type: "practice", duration: "30 min", description: "Implement BFS and DFS traversals for binary trees." },
    ],
    enrolled: 8920,
    rating: 4.8,
    price: 49,
    tags: ["DSA", "Interviews", "Problem Solving"],
  },
  {
    id: "4",
    title: "Machine Learning Foundations",
    instructor: "Dr. James Liu",
    instructorAvatar: "JL",
    description: "From linear regression to neural networks. Build, train, and deploy ML models using Python and TensorFlow.",
    category: "AI / ML",
    level: "Beginner",
    modules: [
      { id: "m16", title: "Linear Regression", type: "article", duration: "22 min" },
      { id: "m17", title: "Predict Housing Prices", type: "practice", duration: "35 min", description: "Build your first ML model to predict housing prices." },
      { id: "m18", title: "ML Basics Quiz", type: "quiz", duration: "12 min" },
    ],
    enrolled: 4100,
    rating: 4.6,
    price: 69,
    tags: ["Python", "TensorFlow", "AI"],
  },
  {
    id: "5",
    title: "DevOps & Cloud Engineering",
    instructor: "Elena Rodriguez",
    instructorAvatar: "ER",
    description: "Master Docker, Kubernetes, CI/CD pipelines, and AWS infrastructure automation.",
    category: "DevOps",
    level: "Advanced",
    modules: [
      { id: "m19", title: "Docker Fundamentals", type: "article", duration: "20 min" },
      { id: "m20", title: "Containerize an App", type: "practice", duration: "30 min", description: "Dockerize a Node.js application with multi-stage builds." },
      { id: "m21", title: "Docker Quiz", type: "quiz", duration: "10 min" },
    ],
    enrolled: 3200,
    rating: 4.7,
    price: 89,
    tags: ["Docker", "Kubernetes", "AWS"],
  },
  {
    id: "6",
    title: "Blockchain Development",
    instructor: "Kai Nakamura",
    instructorAvatar: "KN",
    description: "Build decentralized applications with Solidity, Ethereum, and Web3.js. From smart contracts to DeFi.",
    category: "Blockchain",
    level: "Intermediate",
    modules: [
      { id: "m22", title: "Solidity Basics", type: "article", duration: "25 min" },
      { id: "m23", title: "Deploy a Smart Contract", type: "practice", duration: "40 min", description: "Write and deploy an ERC-20 token on a test network." },
      { id: "m24", title: "Smart Contract Quiz", type: "quiz", duration: "15 min" },
    ],
    enrolled: 1850,
    rating: 4.5,
    price: 99,
    tags: ["Solidity", "Ethereum", "Web3"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Alex Rivera",
    role: "Security Engineer @ CloudFlare",
    content: "The cyber security course completely changed my career trajectory. The hands-on practice problems are incredibly realistic.",
    avatar: "AR",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Full-Stack Developer @ Stripe",
    content: "Best platform for learning to code. The split-screen IDE makes practicing feel like real development work.",
    avatar: "PS",
    rating: 5,
  },
  {
    id: "t3",
    name: "Tom Anderson",
    role: "CS Student @ MIT",
    content: "The DSA course helped me crack FAANG interviews. The progressive difficulty of practice problems is perfect.",
    avatar: "TA",
    rating: 5,
  },
  {
    id: "t4",
    name: "Mei Zhang",
    role: "ML Engineer @ DeepMind",
    content: "From zero ML knowledge to deploying models in production. The instructors here are world-class.",
    avatar: "MZ",
    rating: 4,
  },
];

export const categories = [
  "All",
  "Cyber Security",
  "Web Development",
  "Computer Science",
  "AI / ML",
  "DevOps",
  "Blockchain",
];
