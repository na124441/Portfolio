/**
 * ByteLogic Learn Knowledge Architecture & Content Schema
 * Structured entities for Domains, Learning Paths, Guided Progressions, Concepts, and Live Feed.
 */

export interface LearnDomain {
  id: string;
  code: string;
  title: string;
  description: string;
  conceptCount: number;
  subtopics: string[];
  slug: string;
  featuredConcepts: string[];
  iconCode: string;
}

export interface PathStep {
  step: string;
  title: string;
  description: string;
  slug?: string;
}

export interface LearnPath {
  id: string;
  code: string;
  title: string;
  description: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Advanced';
  conceptCount: number;
  estimatedTime: string;
  startPoint: string;
  steps: PathStep[];
  slug: string;
}

export interface StartHereStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  estimatedTime: string;
  conceptSlug: string;
  tag: string;
}

export type ConceptFormat = 'CONCEPT' | 'ARTICLE' | 'VIDEO' | 'VISUAL' | 'IMPLEMENTATION' | 'EXPERIMENT';

export interface LearnConcept {
  id: string;
  title: string;
  slug: string;
  domain: string;
  domainCategory: 'AI / ML' | 'MATHEMATICS' | 'ALGORITHMS' | 'SYSTEMS' | 'COMPUTER SCIENCE';
  subdomain: string;
  difficulty: 'FOUNDATION' | 'INTERMEDIATE' | 'ADVANCED' | 'RESEARCH';
  description: string;
  formats: ConceptFormat[];
  equation?: string;
  estimatedTime: string;
  prerequisites?: string[];
  tags: string[];
  isPopular?: boolean;
}

export interface RecentItem {
  id: string;
  title: string;
  domain: string;
  type: ConceptFormat;
  relativeTime: string;
  slug: string;
  badge: string;
}

export interface TeachingStep {
  number: string;
  title: string;
  question: string;
  description: string;
  deliverable: string;
}

// -----------------------------------------------------------------------------
// 02 / DOMAINS DATA (8 Structured Technical Domains)
// -----------------------------------------------------------------------------
export const LEARN_DOMAINS: LearnDomain[] = [
  {
    id: 'machine-learning',
    code: '01',
    title: 'MACHINE LEARNING',
    description: 'From statistical foundations to practical learning algorithms and optimization.',
    conceptCount: 24,
    subtopics: ['Supervised Learning', 'Unsupervised Clustering', 'Loss Surfaces & Optimization', 'Generalization & Bounds'],
    slug: '/bytelogic/learn/machine-learning',
    featuredConcepts: ['K-Means', 'Linear Regression', 'Support Vector Machines', 'Decision Trees'],
    iconCode: 'ML_NODE',
  },
  {
    id: 'deep-learning',
    code: '02',
    title: 'DEEP LEARNING',
    description: 'Neural networks, representation learning, optimization, and modern deep architectures.',
    conceptCount: 18,
    subtopics: ['Computational Graphs', 'Backpropagation & Gradients', 'Attention & Transformers', 'Diffusion & Generative SDEs'],
    slug: '/bytelogic/learn/deep-learning',
    featuredConcepts: ['Backpropagation', 'Self-Attention', 'Residual Connections', 'Batch Normalization'],
    iconCode: 'DL_TENSOR',
  },
  {
    id: 'reinforcement-learning',
    code: '03',
    title: 'REINFORCEMENT LEARNING',
    description: 'Learning through actions, rewards, environments, and sequential decision making.',
    conceptCount: 7,
    subtopics: ['Markov Decision Processes', 'Bellman Optimality', 'Policy Gradients & PPO', 'Deep Q-Networks'],
    slug: '/bytelogic/learn/reinforcement-learning',
    featuredConcepts: ['Bellman Equation', 'Q-Learning', 'Actor-Critic', 'Monte Carlo Tree Search'],
    iconCode: 'RL_LOOP',
  },
  {
    id: 'mathematics',
    code: '04',
    title: 'MATHEMATICS',
    description: 'Linear algebra, multivariable calculus, probability, and optimization theory.',
    conceptCount: 31,
    subtopics: ['Spectral Theory & Eigenvalues', 'Vector Spaces & Tensors', 'Matrix Calculus', 'Convex Optimization'],
    slug: '/bytelogic/learn/mathematics',
    featuredConcepts: ['PCA Decomposition', 'Singular Value Decomposition', 'Gradient Vectors', 'Lagrange Multipliers'],
    iconCode: 'MATH_INTEGRAL',
  },
  {
    id: 'statistics',
    code: '05',
    title: 'STATISTICS',
    description: 'Probability, distributions, inference, estimation, and statistical reasoning.',
    conceptCount: 15,
    subtopics: ['Gaussian & Exponential Families', 'Maximum Likelihood Estimation', 'Bayesian Inference', 'Hypothesis Testing'],
    slug: '/bytelogic/learn/statistics',
    featuredConcepts: ['Probability Distributions', 'Central Limit Theorem', 'Bayes Theorem', 'Markov Chains'],
    iconCode: 'STAT_DIST',
  },
  {
    id: 'algorithms',
    code: '06',
    title: 'ALGORITHMS',
    description: 'Data structures, computational complexity, graphs, and algorithmic problem solving.',
    conceptCount: 22,
    subtopics: ['Graph Partitioning', 'Dynamic Programming', 'Amortized Analysis', 'Randomized Algorithms'],
    slug: '/bytelogic/learn/algorithms',
    featuredConcepts: ['Dijkstra & A*', 'Union-Find / Disjoint Sets', 'Fast Fourier Transform', 'Convex Hull'],
    iconCode: 'ALGO_TREE',
  },
  {
    id: 'computer-science',
    code: '07',
    title: 'COMPUTER SCIENCE',
    description: 'Core computational models, automata theory, and foundational systems theory.',
    conceptCount: 14,
    subtopics: ['Turing Computability', 'Type Systems & Lambda Calculus', 'Memory Hierarchies', 'Concurrency Semantics'],
    slug: '/bytelogic/learn/computer-science',
    featuredConcepts: ['Turing Machines', 'Halting Problem', 'Virtual Memory', 'Actor Model'],
    iconCode: 'CS_CHIP',
  },
  {
    id: 'systems',
    code: '08',
    title: 'SYSTEMS',
    description: 'Software architecture, hardware-software boundary, and distributed engineering principles.',
    conceptCount: 19,
    subtopics: ['GPU Compute & CUDA', 'SIMD Vectorization', 'Distributed Consensus & Raft', 'Cache Alignment & Locks'],
    slug: '/bytelogic/learn/systems',
    featuredConcepts: ['CUDA Kernels', 'Raft Consensus', 'Lock-Free Queues', 'Zero-Copy I/O'],
    iconCode: 'SYS_PIPELINE',
  },
];

// -----------------------------------------------------------------------------
// 03 / START HERE PROGRESSION (Guided Entry Point for Newcomers)
// -----------------------------------------------------------------------------
export const START_HERE_STEPS: StartHereStep[] = [
  {
    number: '01',
    title: 'Mathematical Foundations',
    subtitle: 'Vector Spaces & Matrix Calculus',
    description: 'Understand geometric vectors, projections, and derivatives as the physical canvas where machine learning lives.',
    estimatedTime: '45 mins',
    conceptSlug: '/bytelogic/learn#domains',
    tag: 'FIRST PRINCIPLES',
  },
  {
    number: '02',
    title: 'Machine Learning Foundations',
    subtitle: 'Empirical Loss & Decision Boundaries',
    description: 'Deconstruct how algorithms fit data, measure prediction error, and discover patterns without manual rules.',
    estimatedTime: '60 mins',
    conceptSlug: '/bytelogic/learn#paths',
    tag: 'CORE INTUITION',
  },
  {
    number: '03',
    title: 'Optimization Fundamentals',
    subtitle: 'Gradient Descent & Convex Surfaces',
    description: 'Visualize the downhill traversal of high-dimensional loss landscapes and how step sizes dictate convergence.',
    estimatedTime: '50 mins',
    conceptSlug: '/bytelogic/concepts/k-means#visualization',
    tag: 'NUMERICAL METHOD',
  },
  {
    number: '04',
    title: 'Build Your First Model',
    subtitle: 'From Scratch in Pure NumPy',
    description: 'Translate mathematical equations directly into verified, vectorized code without high-level library abstractions.',
    estimatedTime: '75 mins',
    conceptSlug: '/bytelogic/concepts/k-means#implementation',
    tag: 'SYSTEM VERIFICATION',
  },
];

// -----------------------------------------------------------------------------
// 04 / FEATURED LEARNING PATHS (Curated End-to-End Progression)
// -----------------------------------------------------------------------------
export const FEATURED_LEARNING_PATHS: LearnPath[] = [
  {
    id: 'ml-foundations',
    code: '01',
    title: 'Machine Learning Foundations',
    description: 'A structured mathematical and programmatic progression from probability theory to empirical learning models.',
    difficulty: 'Foundational',
    conceptCount: 12,
    estimatedTime: '~8 hours',
    startPoint: 'Probability & Distributions',
    slug: '/bytelogic/learn#concepts',
    steps: [
      { step: '01', title: 'Probability', description: 'Random variables, conditional likelihood, and Bayes rule.' },
      { step: '02', title: 'Statistics', description: 'Sample variance, covariance matrices, and estimator bias.' },
      { step: '03', title: 'Linear Algebra', description: 'Orthogonal projections, dot products, and matrix rank.' },
      { step: '04', title: 'Linear Regression', description: 'Least-squares minimization and the normal equation.' },
      { step: '05', title: 'Logistic Regression', description: 'Sigmoid activation, log-odds, and cross-entropy loss.' },
      { step: '06', title: 'Optimization', description: 'Gradient descent, momentum, and learning rates.' },
      { step: '07', title: 'Classification', description: 'Decision surfaces, margins, and kernel tricks.' },
      { step: '08', title: 'Model Evaluation', description: 'Precision-recall, ROC curves, and generalization bounds.' },
    ],
  },
  {
    id: 'dl-foundations',
    code: '02',
    title: 'Deep Learning Foundations',
    description: 'From vector operations to computational differentiation, neural layers, and modern transformer architectures.',
    difficulty: 'Intermediate',
    conceptCount: 16,
    estimatedTime: '~12 hours',
    startPoint: 'Matrix Algebra & Autodiff',
    slug: '/bytelogic/learn#concepts',
    steps: [
      { step: '01', title: 'Linear Algebra', description: 'Matrix multiplications, tensor dimensions, and transformations.' },
      { step: '02', title: 'Neural Networks', description: 'Perceptrons, multi-layer topologies, and non-linear activations.' },
      { step: '03', title: 'Forward Propagation', description: 'Matrix operations and layer-by-layer signal transmission.' },
      { step: '04', title: 'Backpropagation', description: 'Multivariate chain rule and computational graph differentiation.' },
      { step: '05', title: 'Optimization', description: 'Adam, RMSprop, weight decay, and adaptive step sizes.' },
      { step: '06', title: 'Regularization', description: 'Dropout, Batch Normalization, and weight penalties.' },
    ],
  },
];

// -----------------------------------------------------------------------------
// 05 / POPULAR CONCEPTS & DIRECT ENTRY CATALOG
// -----------------------------------------------------------------------------
export const POPULAR_CONCEPTS: LearnConcept[] = [
  {
    id: 'k-means',
    title: 'K-Means Clustering',
    slug: '/bytelogic/concepts/k-means',
    domain: 'MACHINE LEARNING',
    domainCategory: 'AI / ML',
    subdomain: 'UNSUPERVISED LEARNING',
    difficulty: 'INTERMEDIATE',
    description: 'Iterative expectation-maximization algorithm that partitions unlabelled observations into Voronoi cells around centroid vectors.',
    formats: ['CONCEPT', 'VISUAL', 'IMPLEMENTATION', 'EXPERIMENT'],
    equation: 'J = \\sum_{j=1}^k \\sum_{x_i \\in S_j} \\|x_i - \\mu_j\\|^2',
    estimatedTime: '12 min study',
    prerequisites: ['Euclidean Norm', 'Vector Means'],
    tags: ['Clustering', 'Lloyd Algorithm', 'Voronoi', 'NumPy'],
    isPopular: true,
  },
  {
    id: 'gradient-descent',
    title: 'Gradient Descent & Loss Optimization',
    slug: '/bytelogic/concepts/k-means#mathematics',
    domain: 'OPTIMIZATION',
    domainCategory: 'AI / ML',
    subdomain: 'FIRST-ORDER CALCULUS',
    difficulty: 'FOUNDATION',
    description: 'Iterative first-order optimization algorithm for finding the local minimum of a differentiable objective function along negative gradients.',
    formats: ['CONCEPT', 'VISUAL', 'ARTICLE'],
    equation: '\\theta_{t+1} = \\theta_t - \\eta \\nabla_\\theta \\mathcal{L}(\\theta_t)',
    estimatedTime: '15 min study',
    prerequisites: ['Partial Derivatives', 'Vector Calculus'],
    tags: ['Optimization', 'Loss Surface', 'Learning Rate', 'Convexity'],
    isPopular: true,
  },
  {
    id: 'pca',
    title: 'Principal Component Analysis (PCA)',
    slug: '/bytelogic/concepts/k-means#mathematics',
    domain: 'MATHEMATICS',
    domainCategory: 'MATHEMATICS',
    subdomain: 'DIMENSIONALITY REDUCTION',
    difficulty: 'INTERMEDIATE',
    description: 'Orthogonal linear transformation that projects data into a new coordinate system such that the greatest variance lies on the first coordinate.',
    formats: ['CONCEPT', 'ARTICLE', 'IMPLEMENTATION'],
    equation: '\\Sigma v_i = \\lambda_i v_i, \\quad \\max_{u^T u = 1} u^T \\Sigma u',
    estimatedTime: '18 min study',
    prerequisites: ['Covariance Matrices', 'Eigenvalues'],
    tags: ['Eigenvectors', 'SVD', 'Linear Algebra', 'Variance'],
    isPopular: true,
  },
  {
    id: 'linear-regression',
    title: 'Linear Regression from First Principles',
    slug: '/bytelogic/concepts/k-means#implementation',
    domain: 'MACHINE LEARNING',
    domainCategory: 'AI / ML',
    subdomain: 'SUPERVISED LEARNING',
    difficulty: 'FOUNDATION',
    description: 'Linear approach for modelling relationships between a scalar response and explanatory variables via ordinary least squares.',
    formats: ['CONCEPT', 'IMPLEMENTATION', 'VISUAL'],
    equation: '\\hat{\\beta} = (X^T X)^{-1} X^T y',
    estimatedTime: '10 min study',
    prerequisites: ['Matrix Multiplication', 'Transposition'],
    tags: ['Regression', 'OLS', 'Normal Equation', 'NumPy'],
    isPopular: true,
  },
  {
    id: 'backpropagation',
    title: 'Backpropagation & Autodiff Graphs',
    slug: '/bytelogic/concepts/k-means#mathematics',
    domain: 'DEEP LEARNING',
    domainCategory: 'AI / ML',
    subdomain: 'COMPUTATIONAL DIFFERENTIATION',
    difficulty: 'ADVANCED',
    description: 'Reverse-mode automatic differentiation algorithm calculating analytical gradient vectors for network weights via the multivariate chain rule.',
    formats: ['CONCEPT', 'ARTICLE', 'EXPERIMENT'],
    equation: '\\frac{\\partial \\mathcal{L}}{\\partial W^{[l]}} = \\delta^{[l]} (A^{[l-1]})^T',
    estimatedTime: '22 min study',
    prerequisites: ['Chain Rule', 'Matrix Calculus'],
    tags: ['Neural Networks', 'Gradients', 'Tensors', 'Backprop'],
    isPopular: true,
  },
  {
    id: 'probability-distributions',
    title: 'Probability Distributions & Likelihood',
    slug: '/bytelogic/concepts/k-means#mathematics',
    domain: 'STATISTICS',
    domainCategory: 'MATHEMATICS',
    subdomain: 'PROBABILISTIC INFERENCE',
    difficulty: 'FOUNDATION',
    description: 'Mathematical functions providing the probabilities of occurrence of different possible outcomes in an experiment across discrete and continuous spaces.',
    formats: ['CONCEPT', 'VISUAL', 'EXPERIMENT'],
    equation: 'p(x | \\mu, \\sigma^2) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} \\exp\\left(-\\frac{(x - \\mu)^2}{2\\sigma^2}\\right)',
    estimatedTime: '14 min study',
    prerequisites: ['Integral Calculus', 'Expected Value'],
    tags: ['Gaussian', 'MLE', 'Entropy', 'Bayesian'],
    isPopular: true,
  },
  {
    id: 'kmeans-plusplus',
    title: 'K-Means++ Seeding Algorithm',
    slug: '/bytelogic/concepts/k-means#mathematics',
    domain: 'MACHINE LEARNING',
    domainCategory: 'AI / ML',
    subdomain: 'UNSUPERVISED HEURISTICS',
    difficulty: 'INTERMEDIATE',
    description: 'Probabilistic centroid initialization heuristic that guarantees an O(log k) approximation ratio to optimal Lloyd clustering.',
    formats: ['CONCEPT', 'VISUAL', 'EXPERIMENT'],
    equation: 'P(x) = \\frac{D(x)^2}{\\sum_{x\' \\in X} D(x\')^2}',
    estimatedTime: '12 min study',
    prerequisites: ['K-Means Clustering', 'Discrete Sampling'],
    tags: ['Initialization', 'Heuristics', 'Variance Reduction'],
  },
  {
    id: 'attention-mechanism',
    title: 'Scaled Dot-Product Attention',
    slug: '/bytelogic/concepts/k-means#mathematics',
    domain: 'DEEP LEARNING',
    domainCategory: 'AI / ML',
    subdomain: 'TRANSFORMERS',
    difficulty: 'ADVANCED',
    description: 'Mapping query and key-value pairs to an output through scaled dot-product softmax weighting in high-dimensional embedding spaces.',
    formats: ['CONCEPT', 'VISUAL', 'IMPLEMENTATION'],
    equation: '\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V',
    estimatedTime: '20 min study',
    prerequisites: ['Softmax', 'Matrix Projections'],
    tags: ['Transformers', 'NLP', 'Representation', 'Attention'],
  },
  {
    id: 'bellman-equation',
    title: 'Bellman Optimality & Value Iteration',
    slug: '/bytelogic/concepts/k-means#mathematics',
    domain: 'REINFORCEMENT LEARNING',
    domainCategory: 'AI / ML',
    subdomain: 'DYNAMIC PROGRAMMING',
    difficulty: 'ADVANCED',
    description: 'Recursive decomposition of dynamic decision optimization into immediate reward plus discounted expected future value.',
    formats: ['CONCEPT', 'ARTICLE', 'EXPERIMENT'],
    equation: 'V^*(s) = \\max_{a} \\left[ R(s,a) + \\gamma \\sum_{s\'} P(s\'|s,a)V^*(s\') \\right]',
    estimatedTime: '25 min study',
    prerequisites: ['Markov Decision Processes', 'Fixed-Point Theorems'],
    tags: ['MDP', 'Value Iteration', 'Reinforcement Learning', 'Optimality'],
  },
  {
    id: 'dijkstra-algorithm',
    title: 'Dijkstra Single-Source Shortest Path',
    slug: '/bytelogic/concepts/k-means#mathematics',
    domain: 'ALGORITHMS',
    domainCategory: 'ALGORITHMS',
    subdomain: 'GRAPH THEORY',
    difficulty: 'FOUNDATION',
    description: 'Greedy graph algorithm finding the shortest path from a starting node to all other nodes in a weighted graph with non-negative edges.',
    formats: ['CONCEPT', 'VISUAL', 'IMPLEMENTATION'],
    equation: 'd[v] = \\min(d[v], d[u] + w(u, v))',
    estimatedTime: '15 min study',
    prerequisites: ['Priority Queues', 'Graph Adjacency'],
    tags: ['Graphs', 'Greedy', 'Priority Queue', 'Shortest Path'],
  },
  {
    id: 'cuda-vector-add',
    title: 'CUDA Kernel Execution & Memory Hierarchy',
    slug: '/bytelogic/concepts/k-means#implementation',
    domain: 'SYSTEMS',
    domainCategory: 'SYSTEMS',
    subdomain: 'GPU COMPUTING',
    difficulty: 'ADVANCED',
    description: 'Thread blocks, warp schedulers, and coalesced global memory access patterns in massively parallel SIMT architectures.',
    formats: ['CONCEPT', 'IMPLEMENTATION', 'EXPERIMENT'],
    equation: '\\text{idx} = \\text{blockIdx.x} \\times \\text{blockDim.x} + \\text{threadIdx.x}',
    estimatedTime: '28 min study',
    prerequisites: ['C / C++', 'Memory Layout'],
    tags: ['CUDA', 'GPU', 'Parallel Computing', 'Memory Coalescing'],
  },
];

// -----------------------------------------------------------------------------
// 06 / RECENTLY ADDED (Living Platform Archive)
// -----------------------------------------------------------------------------
export const RECENTLY_ADDED: RecentItem[] = [
  {
    id: 'recent-1',
    title: 'K-Means++ Seeding Heuristics & Boundary Partitioning',
    domain: 'MACHINE LEARNING · UNSUPERVISED',
    type: 'VISUAL',
    relativeTime: '3 days ago',
    slug: '/bytelogic/concepts/k-means#visualization',
    badge: 'INTERACTIVE LAB',
  },
  {
    id: 'recent-2',
    title: 'Gradient Descent: Visualizing High-Dimensional Contours',
    domain: 'OPTIMIZATION · CALCULUS',
    type: 'VIDEO',
    relativeTime: '6 days ago',
    slug: '/bytelogic/concepts/k-means#mathematics',
    badge: '18 MIN VIDEO',
  },
  {
    id: 'recent-3',
    title: 'Probability Distributions: Gaussian to Heavy Tails',
    domain: 'STATISTICS · INFERENCE',
    type: 'ARTICLE',
    relativeTime: '2 weeks ago',
    slug: '/bytelogic/concepts/k-means#mathematics',
    badge: '14 MIN READ',
  },
  {
    id: 'recent-4',
    title: 'Attention Head Pruning & Sparsity Frontiers in Transformers',
    domain: 'DEEP LEARNING · SYSTEMS',
    type: 'EXPERIMENT',
    relativeTime: '3 weeks ago',
    slug: '/bytelogic/concepts/k-means#lab',
    badge: 'RESEARCH LAB',
  },
];

// -----------------------------------------------------------------------------
// 07 / HOW BYTELOGIC TEACHES (5-Stage Cognitive Pipeline)
// -----------------------------------------------------------------------------
export const TEACHING_PHILOSOPHY_STEPS: TeachingStep[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    question: 'What is the foundational idea?',
    description: 'Strip away superficial buzzwords and black-box library APIs. Formulate the core problem from mathematical and physical first principles.',
    deliverable: 'Analytical formulation, axioms, and constraints.',
  },
  {
    number: '02',
    title: 'VISUALIZE',
    question: 'Can I see what is happening dynamically?',
    description: 'Transform abstract symbolic notation into geometric intuition. Observe vector projections, decision boundaries, and convergence paths.',
    deliverable: 'Interactive 2D/3D topological canvas.',
  },
  {
    number: '03',
    title: 'IMPLEMENT',
    question: 'Can I build it from bare metal?',
    description: 'Translate mathematical equations directly into verified, vectorized NumPy or systems code without hidden high-level abstractions.',
    deliverable: 'Zero-dependency standalone implementation.',
  },
  {
    number: '04',
    title: 'EXPERIMENT',
    question: 'Can I test, stress, and break it?',
    description: 'Push hyper-parameters to their boundaries. Inject noise, perturb initial conditions, and observe failure modes in live sandbox environments.',
    deliverable: 'Empirical benchmark and ablation matrix.',
  },
  {
    number: '05',
    title: 'DISCOVER',
    question: 'What can I build beyond the original idea?',
    description: 'Synthesize the concept into broader computational architectures. Formulate novel extensions and tackle real-world engineering challenges.',
    deliverable: 'Research frontiers and systems architectures.',
  },
];
