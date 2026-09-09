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

export const PORTFOLIO_METADATA = {
  name: 'Nayant Srivastava',
  role: 'AI / ML Engineer',
  specialization: 'Reinforcement Learning + Intelligent Systems',
  foundations: 'Systems Engineering, DSA, Distributed Architecture & Applied Mathematics',
  thesis: 'I build intelligent systems and explore the engineering problems behind them.',
  location: 'Bangalore, India',
  statusBadge: 'Open to AI/ML & Systems Roles',
  email: 'nayant@example.com',
  githubUrl: 'https://github.com/nayantsrivastava',
  linkedinUrl: 'https://linkedin.com/in/nayantsrivastava',
  resumeUrl: '#', // placeholder CV link
};

export const NOW_FOCUS: NowItem[] = [
  {
    key: 'building',
    label: 'Building',
    description: 'Autonomous telemetry anomaly reasoning engine using Temporal Graph Networks with quantized edge execution.',
  },
  {
    key: 'researching',
    label: 'Researching',
    description: 'Sample-efficient offline reinforcement learning under non-stationary dynamics and distribution shifts.',
  },
  {
    key: 'learning',
    label: 'Learning',
    description: 'Distributed consensus algorithms (Raft internals) and Linux eBPF telemetry hooks for low-overhead model observability.',
  },
  {
    key: 'contributing',
    label: 'Contributing',
    description: 'Gymnasium benchmark environments and memory-profiling tooling for PyTorch model inference.',
  },
  {
    key: 'open_to',
    label: 'Open to',
    description: 'AI/ML Engineering, Intelligent Systems Architecture, and High-Performance ML Systems opportunities.',
  },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    title: 'Build',
    subtitle: 'From theory to systems',
    description: 'Turn mathematical formulations and model architectures into resilient, production-grade systems rather than leaving them as isolated notebook prototypes.',
  },
  {
    title: 'Measure',
    subtitle: 'Empirical over intuitive',
    description: "Don't rely on intuition when an empirical experiment, profiler trace, loss curve, or ablation study can answer the question with certainty.",
  },
  {
    title: 'Break',
    subtitle: 'Search for failure modes',
    description: 'Actively stress-test boundaries, perturb input distributions, simulate adversarial telemetry, and probe edge cases to uncover latent failure modes early.',
  },
  {
    title: 'Understand',
    subtitle: 'Full-stack mechanical sympathy',
    description: 'Investigate why systems succeed or degrade — from algorithmic gradient flows and loss formulations down to CPU/GPU memory caches and network bandwidth.',
  },
  {
    title: 'Improve',
    subtitle: 'Evidence-driven iteration',
    description: 'Iterate systematically based on verified quantitative benchmark data and disciplined root-cause diagnoses, never speculative premature optimization.',
  },
];

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    period: '2025 — Present',
    role: 'Lead ML Systems Architect',
    organization: 'Self-Aware Spacecraft Project',
    type: 'Research',
    description: 'Designing real-time anomaly detection and causal reasoning engines for high-dimensional satellite telemetry streams under sub-20ms latency limits.',
    skills: ['PyTorch', 'Temporal GNN', 'C++20', 'ONNX Runtime', 'eBPF'],
  },
  {
    period: '2024 — 2025',
    role: 'AI / ML Engineering Fellow',
    organization: 'Autonomous Agents Lab',
    type: 'Role',
    description: 'Engineered reinforcement learning training pipelines, reward shaping frameworks, and vectorized environment rollouts for complex continuous-control tasks.',
    skills: ['Reinforcement Learning', 'Gymnasium', 'Ray Tune', 'Distributed Training'],
  },
  {
    period: '2023 — 2024',
    role: 'Systems & Algorithms Researcher',
    organization: 'High-Performance Computing Group',
    type: 'Research',
    description: 'Investigated cache-oblivious algorithms, high-throughput feature caching layers, and parallel graph partitioning algorithms for large-scale data structures.',
    skills: ['DSA', 'C++', 'System Design', 'Linux Internals', 'Concurrency'],
  },
  {
    period: '2023',
    role: 'First Place Winner',
    organization: 'National AI Systems Hackathon',
    type: 'Hackathon',
    description: 'Constructed an edge computer-vision pipeline running localized inference on constrained hardware with real-time audio-visual feedback loops.',
    skills: ['Edge ML', 'TensorRT', 'Embedded Linux', 'Real-time Systems'],
  },
];

export const CONTRIBUTIONS: ContributionItem[] = [
  {
    category: 'Open Source',
    title: 'Graph Tensor Batching Optimization',
    description: 'Contributed sparse graph tensor collation and memory-efficient batching routines to open-source ML acceleration utilities, reducing allocation overhead by 28%.',
    linkText: 'View PR & Code',
    linkUrl: 'https://github.com',
    impactBadge: 'Merged',
  },
  {
    category: 'Research',
    title: 'Offline RL Benchmark Reproductions',
    description: 'Validated and reproduced Conservative Q-Learning (CQL) and Decision Transformer baselines on continuous control benchmarks under distribution drift.',
    linkText: 'Technical Report',
    linkUrl: 'https://github.com',
    impactBadge: 'Reproduced',
  },
  {
    category: 'Technical Writing',
    title: 'Understanding Memory Latency in GNN Inference',
    description: 'Published an engineering post analyzing cache misses, sparse adjacency matrix traversals, and quantization strategies for on-device edge ML.',
    linkText: 'Read Article',
    linkUrl: 'https://github.com',
    impactBadge: 'Technical Note',
  },
  {
    category: 'Developer Tools',
    title: 'vram-trace: Lightweight GPU Memory Profiler',
    description: 'Engineered a zero-overhead CLI profiler that tracks CUDA tensor allocations, fragmentation events, and memory leaks during PyTorch RL training runs.',
    linkText: 'GitHub Repository',
    linkUrl: 'https://github.com',
    impactBadge: 'Tool',
  },
];

export const ABOUT_LAYERS: AboutLayer[] = [
  {
    title: 'Who I am',
    subtitle: 'Professional Identity',
    content: 'I am an AI/ML Engineer focused on Reinforcement Learning and intelligent systems. I specialize in building computational architectures that can reason, adapt to non-stationary environments, and execute reliably under strict physical and latency constraints.',
  },
  {
    title: 'How I got here',
    subtitle: 'Background & Path',
    content: 'My foundation was built in competitive programming, algorithms, and systems engineering. When I delved into machine learning, I recognized that deploying intelligent models into production is primarily a systems problem: managing memory bandwidth, ensuring telemetry integrity, and handling real-world distribution shifts.',
  },
  {
    title: 'How I think',
    subtitle: 'Engineering Philosophy',
    content: 'I prioritize depth first and breadth second. Rather than treating ML as a black box of off-the-shelf APIs, I seek mechanistic explanations down to the loss gradient, matrix formulation, and CPU/GPU memory cache. Every engineering claim must be backed by reproducible experiments and metric baselines.',
  },
  {
    title: 'Where I\'m going',
    subtitle: 'Future Trajectory',
    content: 'I am focused on designing autonomous, self-healing systems that close the loop between perception, causal reasoning, and real-time control — particularly for aerospace, robotics, and distributed infrastructure where failure is not an option.',
  },
];
