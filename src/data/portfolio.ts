export interface NowItem {
  key: string;
  label: string;
  description: string;
}

export interface PhilosophyPrinciple {
  title: string;
  subtitle: string;
  description: string;
}

export interface JourneyItem {
  period: string;
  role: string;
  organization: string;
  type: 'Role' | 'Research' | 'Milestone' | 'Hackathon';
  description: string;
  skills: string[];
}

export interface ContributionItem {
  category: 'Open Source' | 'Research' | 'Technical Writing' | 'Developer Tools';
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  impactBadge?: string;
}

export interface AboutLayer {
  title: string;
  subtitle: string;
  content: string;
}

export interface CurrentProject {
  name: string;
  description: string;
  category: string;
  status: 'Active' | 'Development' | 'Building' | 'Long-term' | 'Community';
  href?: string;
}

export const PORTFOLIO_METADATA = {
  name: 'Nayant Srivastava',
  role: 'AI / Systems Engineer',
  tagline: 'Exploring computation through artificial intelligence, systems, algorithms, mathematics, graphics, and interactive technology.',
  thesis: 'I build intelligent systems, computational tools and interactive technology.',
  location: 'Greater Noida, India',
  statusBadge: 'Building & Learning',
  email: 'nayant@example.com',
  githubUrl: 'https://github.com/nayantsrivastava',
  linkedinUrl: 'https://linkedin.com/in/nayant-srivastava-24b315228',
  resumeUrl: '#',
};

export const CURRENT_PROJECTS: CurrentProject[] = [
  {
    name: 'MINDLITE',
    description: 'Efficient AI / ML experimentation',
    category: 'AI · Systems',
    status: 'Active',
    href: '/build#mindlite',
  },
  {
    name: 'OMNIX ENGINE',
    description: 'Experimental 3D engine in C++ / Vulkan',
    category: 'Graphics · Systems',
    status: 'Development',
    href: '/build#omnix',
  },
  {
    name: 'BYTELOGIC',
    description: 'Technical learning & visualization platform',
    category: 'Education · Engineering',
    status: 'Building',
    href: '/bytelogic',
  },
  {
    name: 'ATTACK ON CODE',
    description: 'Developer community & open source',
    category: 'Community · Open Source',
    status: 'Active',
    href: '/build#aoc',
  },
  {
    name: 'LAST TRANSISTOR',
    description: 'Long-term AAA game development',
    category: 'Game Development',
    status: 'Long-term',
    href: '/build#last-transistor',
  },
];

export const NOW_FOCUS: NowItem[] = [
  {
    key: 'building',
    label: 'Building',
    description: 'MINDLITE — efficient ML experimentation framework. ADCTM case study. Omnix Engine rendering pipeline.',
  },
  {
    key: 'learning',
    label: 'Learning',
    description: 'Data Structures & Algorithms. Unsupervised Learning. Systems Design. ML optimization techniques.',
  },
  {
    key: 'exploring',
    label: 'Exploring',
    description: 'AI agents and coding assistants. Efficient inference. Graphics programming and GPU compute.',
  },
  {
    key: 'creating',
    label: 'Creating',
    description: 'ByteLogic interactive concept visualizations. Attack On Code open-source initiatives.',
  },
  {
    key: 'open_to',
    label: 'Looking for',
    description: 'Engineering internships. Research collaborations. Technical community partnerships.',
  },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    title: 'Evidence Over Claims',
    subtitle: 'Show, don\'t tell',
    description: 'Every capability claim must be backed by a project, experiment, benchmark, or implementation. Skills without artifacts are just words.',
  },
  {
    title: 'Build to Learn',
    subtitle: 'From theory to systems',
    description: 'Understanding comes from building. Turn mathematical formulations and model architectures into working systems, not just notebook prototypes.',
  },
  {
    title: 'Systems Over Spectacle',
    subtitle: 'Depth over decoration',
    description: 'Prioritize architectural clarity, performance measurement, and failure analysis over superficial demonstrations and visual polish.',
  },
  {
    title: 'Long-Term Thinking',
    subtitle: 'Compound over time',
    description: 'Build infrastructure that compounds: knowledge systems, reusable frameworks, documented experiments. Every project should make the next one easier.',
  },
  {
    title: 'Measure, Don\'t Speculate',
    subtitle: 'Empirical over intuitive',
    description: 'Don\'t rely on intuition when a profiler trace, benchmark, ablation study, or experiment can answer the question with certainty.',
  },
];

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    period: '2024 — Present',
    role: 'B.Tech CSE + AI/ML',
    organization: 'AKTU University',
    type: 'Milestone',
    description: 'Studying Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning. Building projects across AI, systems, algorithms, and game technology.',
    skills: ['Python', 'C++', 'Machine Learning', 'DSA', 'Systems Design'],
  },
  {
    period: '2025 — Present',
    role: 'Founder & Lead Developer',
    organization: 'Attack On Code',
    type: 'Role',
    description: 'Building a developer community focused on open-source collaboration, technical education, and engineering culture.',
    skills: ['Community Building', 'Open Source', 'Technical Leadership'],
  },
  {
    period: '2025 — Present',
    role: 'Independent Researcher & Builder',
    organization: 'Personal Projects',
    type: 'Research',
    description: 'Designing and implementing ADCTM, MINDLITE, Omnix Engine, Nevula, and ByteLogic — spanning AI/ML, systems engineering, graphics, and technical education.',
    skills: ['AI/ML', 'Systems', 'C++', 'Graphics', 'Technical Writing'],
  },
];

export const CONTRIBUTIONS: ContributionItem[] = [
  {
    category: 'Open Source',
    title: 'Attack On Code',
    description: 'Developer community and open-source initiative focused on engineering education and collaborative building.',
    linkText: 'View Community',
    linkUrl: 'https://github.com/nayantsrivastava',
    impactBadge: 'Active',
  },
  {
    category: 'Technical Writing',
    title: 'ByteLogic Platform',
    description: 'Interactive technical learning platform covering ML, algorithms, mathematics, systems, and distributed computing with first-principles visual explanations.',
    linkText: 'Explore ByteLogic',
    linkUrl: '/bytelogic',
    impactBadge: 'Building',
  },
  {
    category: 'Developer Tools',
    title: 'MINDLITE',
    description: 'Efficient ML experimentation framework designed for rapid prototyping and benchmark-driven development.',
    linkText: 'Learn More',
    linkUrl: '/build#mindlite',
    impactBadge: 'In Development',
  },
  {
    category: 'Research',
    title: 'ADCTM',
    description: 'Autonomous Data Centre Thermal Management — a closed-loop RL-based thermal control system for dynamic data-centre workloads.',
    linkText: 'View Project',
    linkUrl: '/projects/adctm',
    impactBadge: 'Research',
  },
];

export const ABOUT_LAYERS: AboutLayer[] = [
  {
    title: 'What I do',
    subtitle: 'Engineering Identity',
    content: 'I build software, study computational systems, and experiment with artificial intelligence. My work spans AI/ML systems, software engineering, algorithms, mathematics, graphics, game technology, and developer tools.',
  },
  {
    title: 'What I\'m interested in',
    subtitle: 'Technical Domains',
    content: 'AI systems and efficient inference. Systems engineering and low-level optimization. Algorithms and data structures. Mathematics and computational theory. Graphics programming and game engines. Developer tools and technical education.',
  },
  {
    title: 'How I think',
    subtitle: 'Engineering Philosophy',
    content: 'I prioritize building working systems over theoretical knowledge. Every claim should be backed by evidence — a project, an experiment, a benchmark. I document failures as carefully as successes, because understanding what doesn\'t work is as valuable as knowing what does.',
  },
  {
    title: 'Where I\'m going',
    subtitle: 'Long-term Direction',
    content: 'Building technology across software, AI, systems, and interactive worlds. The projects I\'m working on — MINDLITE, Omnix Engine, ByteLogic, Attack On Code, and eventually Last Transistor — represent different branches of the same long-term vision: creating tools and systems that push the boundaries of computation and interactive technology.',
  },
];
