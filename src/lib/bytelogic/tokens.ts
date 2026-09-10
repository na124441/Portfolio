/**
 * ByteLogic Authoritative Design Tokens
 * 
 * Aesthetic: PRECISE, VISUAL, COMPUTATIONAL, EDITORIAL, TECHNICAL, CALM, CURIOUS.
 * Technical Publication + Visual Textbook + Computational Laboratory + Engineering Notebook.
 */

export const BYTELOGIC_COLORS = {
  background: '#05070A',
  secondaryBackground: '#0A0F14',
  surface: '#0E151B',
  elevatedSurface: '#131C24',
  primaryText: '#F3F6F7',
  secondaryText: '#A8B3BA',
  mutedText: '#68747D',
  byteBlue: '#132279',
  logicCyan: '#019AA2',
  border: '#1C2830',
  borderHover: 'rgba(1, 154, 162, 0.45)',
  cyanTint: 'rgba(1, 154, 162, 0.12)',
  blueTint: 'rgba(19, 34, 121, 0.25)',
} as const;

export const SPACING_SCALE = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128] as const;
export const RADIUS_SCALE = [4, 6, 8, 12] as const;

export const MOTION_DURATIONS = {
  micro: 0.18, // 180ms
  interface: 0.32, // 320ms
} as const;

export interface LearningPath {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  modulesCount: number;
  conceptsCount: number;
  difficulty: 'Foundational' | 'Intermediate' | 'Advanced' | 'Comprehensive';
  topics: string[];
  equationPreview: string;
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'machine-learning',
    code: '01',
    title: 'Machine Learning',
    tagline: 'Statistical foundations to modern learning algorithms.',
    description: 'Deconstruct supervised and unsupervised learning, empirical risk minimization, loss surfaces, and generalization bounds.',
    modulesCount: 14,
    conceptsCount: 48,
    difficulty: 'Intermediate',
    topics: ['Clustering', 'Linear & Logistic Regression', 'SVMs & Kernels', 'PCA & Manifolds', 'Tree Ensembles'],
    equationPreview: '\\min_\\theta \\frac{1}{N}\\sum_{i=1}^N \\mathcal{L}(f_\\theta(x_i), y_i) + \\lambda \\|\\theta\\|_2^2',
  },
  {
    id: 'deep-learning',
    code: '02',
    title: 'Deep Learning',
    tagline: 'Computational graphs, backprop, and representations.',
    description: 'Derive automatic differentiation, transformer attention mechanisms, diffusion models, and geometric deep learning.',
    modulesCount: 18,
    conceptsCount: 62,
    difficulty: 'Advanced',
    topics: ['Computational Graphs', 'Backpropagation', 'Self-Attention', 'Normalization', 'Diffusion SDEs'],
    equationPreview: '\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V',
  },
  {
    id: 'reinforcement-learning',
    code: '03',
    title: 'Reinforcement Learning',
    tagline: 'Learning through actions, rewards, and dynamics.',
    description: 'Explore Markov decision processes, Bellman optimality, policy gradients, deep Q-networks, and actor-critic architectures.',
    modulesCount: 12,
    conceptsCount: 36,
    difficulty: 'Advanced',
    topics: ['MDPs', 'Bellman Operator', 'PPO & TRPO', 'Q-Learning', 'Model-Based RL'],
    equationPreview: 'V^*(s) = \\max_{a} \\left[ R(s,a) + \\gamma \\sum_{s\'} P(s\'|s,a)V^*(s\') \\right]',
  },
  {
    id: 'mathematics',
    code: '04',
    title: 'Mathematics',
    tagline: 'Linear algebra, multivariable calculus, probability, and optimization.',
    description: 'Rigorous computational mathematics: vector spaces, spectral theorems, Bayesian inference, and convex optimization.',
    modulesCount: 20,
    conceptsCount: 75,
    difficulty: 'Foundational',
    topics: ['Spectral Decomposition', 'Matrix Calculus', 'Information Geometry', 'Lagrange Multipliers', 'Markov Chains'],
    equationPreview: 'A = U \\Sigma V^T, \\quad \\nabla^2 f(x) \\succ 0',
  },
  {
    id: 'algorithms',
    code: '05',
    title: 'Algorithms',
    tagline: 'Data structures, computational complexity, and heuristics.',
    description: 'Graph algorithms, dynamic programming, randomized algorithms, amortized analysis, and NP-completeness.',
    modulesCount: 16,
    conceptsCount: 54,
    difficulty: 'Intermediate',
    topics: ['Graph Traversal', 'Dynamic Programming', 'Flow Networks', 'Disjoint Sets', 'Approximation'],
    equationPreview: 'T(n) = aT(n/b) + \\Theta(n^d)',
  },
  {
    id: 'computer-science',
    code: '06',
    title: 'Computer Science',
    tagline: 'Core computational models, automata, and memory models.',
    description: 'Turing machines, type theory, lambda calculus, memory hierarchies, and concurrency semantics.',
    modulesCount: 11,
    conceptsCount: 32,
    difficulty: 'Comprehensive',
    topics: ['Turing Machines', 'Lambda Calculus', 'Cache Coherence', 'Virtual Memory', 'Type Systems'],
    equationPreview: '(\\lambda x. e_1) e_2 \\to_\\beta e_1[x \\mapsto e_2]',
  },
  {
    id: 'systems',
    code: '07',
    title: 'Systems',
    tagline: 'Software, hardware architecture, and distributed engineering.',
    description: 'GPU compute pipelines, SIMD vectorization, distributed consensus, low-latency kernels, and kernel drivers.',
    modulesCount: 13,
    conceptsCount: 40,
    difficulty: 'Advanced',
    topics: ['CUDA Kernels', 'Distributed Consensus', 'Cache Alignment', 'Lock-Free Queues', 'SIMD'],
    equationPreview: '\\text{Speedup} = \\frac{1}{(1-p) + \\frac{p}{s}}',
  },
];

export type ContentFormat = 'CONCEPT' | 'ARTICLE' | 'VIDEO' | 'VISUAL' | 'IMPLEMENTATION' | 'EXPERIMENT';

export interface ContentItem {
  id: string;
  type: ContentFormat;
  code: string;
  title: string;
  subtitle: string;
  domain: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Advanced';
  durationOrReadTime: string;
  slug: string;
  equationOrSnippet?: string;
  hasInteractiveLab?: boolean;
}

export const FEATURED_CONTENT: ContentItem[] = [
  {
    id: 'kmeans-concept',
    type: 'CONCEPT',
    code: '01',
    title: 'K-Means Clustering',
    subtitle: 'Clustering through iterative expectation-maximization and Voronoi partitioning.',
    domain: 'Machine Learning · Unsupervised',
    difficulty: 'Intermediate',
    durationOrReadTime: '12 min study',
    slug: '/bytelogic/concepts/k-means',
    equationOrSnippet: 'J = \\sum_{j=1}^k \\sum_{x_i \\in S_j} \\|x_i - \\mu_j\\|^2',
    hasInteractiveLab: true,
  },
  {
    id: 'gradient-descent-video',
    type: 'VIDEO',
    code: '02',
    title: 'Gradient Descent: From Intuition to Optimization',
    subtitle: 'Visualizing contour gradients, learning rate schedules, and momentum dynamics.',
    domain: 'Optimization · Deep Learning',
    difficulty: 'Foundational',
    durationOrReadTime: '18 min video',
    slug: '/bytelogic/concepts/k-means', // preview links
    equationOrSnippet: '\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)',
  },
  {
    id: 'pca-article',
    type: 'ARTICLE',
    code: '03',
    title: 'Understanding Principal Component Analysis',
    subtitle: 'Variance maximization, covariance matrices, and spectral eigen-decomposition.',
    domain: 'Mathematics · Linear Algebra',
    difficulty: 'Intermediate',
    durationOrReadTime: '15 min read',
    slug: '/bytelogic/concepts/k-means',
    equationOrSnippet: '\\Sigma v = \\lambda v, \\quad \\max_{u^T u = 1} u^T \\Sigma u',
  },
  {
    id: 'kmeans-visual',
    type: 'VISUAL',
    code: '04',
    title: 'K-Means: Centroids in Motion',
    subtitle: 'Step-by-step vector convergence in non-convex multi-cluster manifolds.',
    domain: 'Clustering · Interactive Visual',
    difficulty: 'Intermediate',
    durationOrReadTime: 'Interactive simulation',
    slug: '/bytelogic/concepts/k-means#visualization',
    hasInteractiveLab: true,
  },
  {
    id: 'linreg-impl',
    type: 'IMPLEMENTATION',
    code: '05',
    title: 'Linear Regression from Scratch',
    subtitle: 'Analytical normal equation vs. vectorized batch gradient descent in pure NumPy.',
    domain: 'Systems · Python / NumPy',
    difficulty: 'Foundational',
    durationOrReadTime: '8 min read · 45 LOC',
    slug: '/bytelogic/concepts/k-means#implementation',
    equationOrSnippet: '\\hat{\\beta} = (X^T X)^{-1} X^T y',
  },
  {
    id: 'attention-exp',
    type: 'EXPERIMENT',
    code: '06',
    title: 'Attention Head Pruning Efficiency Frontiers',
    subtitle: 'Empirical sparsity benchmarks across multi-head cross-attention layers.',
    domain: 'Deep Learning · Transformers',
    difficulty: 'Advanced',
    durationOrReadTime: 'Interactive Lab',
    slug: '/bytelogic/concepts/k-means#lab',
    hasInteractiveLab: true,
  },
];
