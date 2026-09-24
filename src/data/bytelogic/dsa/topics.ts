import type { DsaTopicMeta } from '@/types/dsa-question';

export const DSA_TOPICS: DsaTopicMeta[] = [
  {
    id: 'arrays-strings',
    name: 'Arrays & Strings',
    phase: 'Phase 0 — Fundamentals',
    description: 'Array traversal, two pointers, sliding window, in-place manipulation, and string processing.',
  },
  {
    id: 'linked-lists',
    name: 'Linked Lists',
    phase: 'Phase 1 — Basic Structures',
    description: 'Pointer manipulation, fast & slow pointers, reversing, cycle detection, and list merges.',
  },
  {
    id: 'stacks-queues',
    name: 'Stacks & Queues',
    phase: 'Phase 1 — Basic Structures',
    description: 'LIFO & FIFO primitives, monotonic stacks, bracket matching, queues using stacks, and deques.',
  },
  {
    id: 'hash-tables',
    name: 'Hash Tables',
    phase: 'Phase 1 — Basic Structures',
    description: 'Constant-time lookups, frequency maps, set intersections, and rolling hash techniques.',
  },
  {
    id: 'complexity-drills',
    name: 'Complexity Drills',
    phase: 'Phase 2 — Asymptotics',
    description: 'Asymptotic analysis, Big-O loop unrolling, recurrence relations, and space-time tradeoffs.',
  },
  {
    id: 'sorting',
    name: 'Sorting',
    phase: 'Phase 3 — Divide & Conquer',
    description: 'Merge sort, quicksort, partition heuristics, stability, and quickselect order statistics.',
  },
  {
    id: 'searching',
    name: 'Searching',
    phase: 'Phase 4 — Binary Search',
    description: 'Binary search boundaries, rotated arrays, peak elements, and binary search on the answer space.',
  },
  {
    id: 'trees',
    name: 'Trees',
    phase: 'Phase 5 — Hierarchical Data',
    description: 'Binary trees, BST invariants, traversals, LCA, depth-first recursion, and level-order BFS.',
  },
  {
    id: 'heaps',
    name: 'Heaps / Priority Queues',
    phase: 'Phase 5 — Hierarchical Data',
    description: 'Binary heaps, heapify, top-K streaming elements, medians, and event-driven schedulers.',
  },
  {
    id: 'graphs',
    name: 'Graphs',
    phase: 'Phase 6 — Network Topologies',
    description: 'Adjacency graphs, BFS, DFS, cycle detection, topological sort, Dijkstra, and minimum spanning trees.',
  },
  {
    id: 'advanced-structures',
    name: 'Advanced Structures',
    phase: 'Phase 7 — Specialized Trees',
    description: 'Prefix Tries, Disjoint Set Union (DSU), Segment Trees, Fenwick Trees, and range queries.',
  },
  {
    id: 'problem-patterns',
    name: 'Problem-Solving Patterns',
    phase: 'Phase 8 — Core Patterns',
    description: 'Backtracking, Greedy algorithms, Two Pointers, Dynamic Programming (1D, 2D, Knapsack).',
  },
  {
    id: 'game-dev',
    name: 'Game Development DSA',
    phase: 'Specialized Track',
    description: 'Spatial partitioning (Quadtree, Octree, BVH), A* grid pathfinding, and state machine graphs.',
  },
];
