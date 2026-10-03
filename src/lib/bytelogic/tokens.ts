/**
 * ByteLogic non-visual tokens.
 *
 * Colors live in globals.css under [data-theme="lab"] and are consumed through
 * Tailwind utilities (bg-bg, bg-surface, text-accent, border-line ...).
 * This file holds only constants and types that CSS can't express.
 */

export const SPACING_SCALE = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128] as const;
export const RADIUS_SCALE = [4, 6, 8, 12] as const;

/** Seconds, for Framer Motion. Keep in sync with --dur-* in globals.css. */
export const MOTION_DURATIONS = {
  micro: 0.18,
  interface: 0.32,
} as const;

/** Matches --ease-out-expo in globals.css. */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/**
 * For canvas/WebGL/chart code that needs a resolved color string.
 * Reads the live CSS variable so it follows the active data-theme.
 */
export function cssVar(name: `--${string}`, el: HTMLElement = document.documentElement): string {
  return getComputedStyle(el).getPropertyValue(name).trim();
}

export type ContentFormat =
  | 'CONCEPT'
  | 'ARTICLE'
  | 'VIDEO'
  | 'VISUAL'
  | 'IMPLEMENTATION'
  | 'EXPERIMENT';

export type Difficulty = 'Foundational' | 'Intermediate' | 'Advanced';

export interface ContentItem {
  id: string;
  type: ContentFormat;
  code: string;
  title: string;
  subtitle: string;
  domain: string;
  difficulty: Difficulty;
  durationOrReadTime: string;
  slug: string;
  equationOrSnippet?: string;
  hasInteractiveLab?: boolean;
}

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
    conceptsCount: 55,
    difficulty: 'Intermediate',
    topics: ['Graph Search', 'DP Tables', 'Greedy Algorithms', 'Randomized Methods', 'NP-Completeness'],
    equationPreview: 'T(n) = 2T(n/2) + O(n)',
  },
  {
    id: 'systems',
    code: '06',
    title: 'Systems',
    tagline: 'Operating systems, networking, compilers, and architecture.',
    description: 'Process scheduling, virtual memory, TCP/IP, compiler passes, GPU pipelines, and distributed systems.',
    modulesCount: 14,
    conceptsCount: 42,
    difficulty: 'Advanced',
    topics: ['Virtual Memory', 'Schedulers', 'TCP/IP', 'Compiler Passes', 'GPU Pipelines'],
    equationPreview: '\\text{CPI} = \\sum_{i} \\text{IC}_i \\times \\text{CPI}_i',
  },
  {
    id: 'graphics',
    code: '07',
    title: 'Graphics',
    tagline: 'Real-time rendering, shaders, and computational geometry.',
    description: 'Rasterization pipelines, ray tracing, PBR materials, Vulkan/WebGPU, and signed distance fields.',
    modulesCount: 10,
    conceptsCount: 30,
    difficulty: 'Comprehensive',
    topics: ['Rasterization', 'Ray Tracing', 'PBR', 'Vulkan', 'SDF Rendering'],
    equationPreview: 'L_o = \\int_{\\Omega} f_r \\cdot L_i \\cdot (\\omega_i \\cdot n) \\, d\\omega_i',
  },
];

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
    slug: '/bytelogic/concepts/k-means',
    equationOrSnippet: '\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)',
  },
  {
    id: 'more-data-article-001',
    type: 'ARTICLE',
    code: '01',
    title: 'What Does More Data Sometimes Stop Helping?',
    subtitle: 'When a bigger dataset stops being a better dataset. Diminishing returns, redundancy, and coverage.',
    domain: 'AI / Machine Learning · Editorial',
    difficulty: 'Intermediate',
    durationOrReadTime: '8–10 min read',
    slug: '/bytelogic/articles/more-data-sometimes-stops-helping',
    equationOrSnippet: '\\lim_{D \\to \\infty} \\frac{dP}{dD} = 0',
  },
  {
    id: 'smaller-model-article-002',
    type: 'ARTICLE',
    code: '02',
    title: 'Why Can a Smaller Model Beat a Larger Model?',
    subtitle: 'On the physics of parameter capacity, task manifolds, and efficient intelligence.',
    domain: 'AI / Machine Learning · Systems',
    difficulty: 'Advanced',
    durationOrReadTime: '14–16 min read',
    slug: '/bytelogic/articles/why-can-a-smaller-model-beat-a-larger-model',
    equationOrSnippet: '\\mathcal{U} = f(\\mathcal{A}, \\mathcal{D}, \\mathcal{T}, \\mathcal{C}, \\mathcal{M}, \\mathcal{I})',
  },
  {
    id: 'model-learn-article-003',
    type: 'ARTICLE',
    code: '03',
    title: 'What Does a Model Actually Learn?',
    subtitle: 'An exploration of parameters, representations, optimization, generalization, and what "learning" really means inside a model.',
    domain: 'AI / Machine Learning · Foundations',
    difficulty: 'Intermediate',
    durationOrReadTime: '10–12 min read',
    slug: '/bytelogic/learn/what-does-a-model-actually-learn',
    equationOrSnippet: '\\theta \\leftarrow \\theta - \\eta \\nabla_\\theta L',
  },
  {
    id: 'capable-without-bigger-article-004',
    type: 'ARTICLE',
    code: '04',
    title: 'Why Does AI Become More Capable Without Getting Bigger?',
    subtitle: 'Understanding the science behind smaller, smarter AI models: parameter efficiency, data curation, distillation, and test-time compute.',
    domain: 'AI / Machine Learning · Systems',
    difficulty: 'Intermediate',
    durationOrReadTime: '12–14 min read',
    slug: '/bytelogic/articles/why-does-ai-become-more-capable-without-getting-bigger',
    equationOrSnippet: 'P \\approx \\sum_{l=1}^L (d_{l-1}d_l + d_l)',
  },
  {
    id: 'implicit-learning-article-005',
    type: 'ARTICLE',
    code: '05',
    title: 'Can a Model Learn Something That Nobody Explicitly Taught It?',
    subtitle: 'On implicit structure, emergent representations, compositional generalization, and the limits of learning without data.',
    domain: 'AI / Machine Learning · Foundations',
    difficulty: 'Intermediate',
    durationOrReadTime: '11–13 min read',
    slug: '/bytelogic/articles/can-a-model-learn-something-that-nobody-explicitly-taught-it',
    equationOrSnippet: 'f_\\theta(x) \\sim \\mathcal{M}_{\\text{latent}} \\implies \\text{Structure Emerges}',
  },
  {
    id: 'pca-article',
    type: 'ARTICLE',
    code: '04',
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
    code: '05',
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
    code: '06',
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
    code: '07',
    title: 'Attention Head Pruning Efficiency Frontiers',
    subtitle: 'Empirical sparsity benchmarks across multi-head cross-attention layers.',
    domain: 'Deep Learning · Transformers',
    difficulty: 'Advanced',
    durationOrReadTime: 'Interactive Lab',
    slug: '/bytelogic/concepts/k-means#lab',
    hasInteractiveLab: true,
  },
];
