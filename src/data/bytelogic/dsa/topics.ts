import type { DsaTopicMeta } from '@/types/dsa-question';

export const DSA_TOPICS: DsaTopicMeta[] = [
  // ─── Phase 0 — Programming Fundamentals ───
  {
    id: 'syntax-loops-conditions',
    name: 'Syntax, loops, conditions, functions, and pseudocode',
    phase: 'Phase 0 — Programming Fundamentals',
    description: 'Fundamental syntax, arithmetic, loops, conditionals, basic recursion, and class design.',
  },

  // ─── Phase 1 — Basic Data Structures ───
  {
    id: 'arrays-vectors',
    name: 'Arrays and Vectors',
    phase: 'Phase 1 — Basic Data Structures',
    description: 'Array indexing, dynamic vector resizing, in-place manipulation, sliding subarray bounds, and prefix totals.',
  },
  {
    id: 'linked-lists',
    name: 'Linked Lists',
    phase: 'Phase 1 — Basic Data Structures',
    description: 'Pointer manipulation, fast & slow pointers, reversing, cycle detection, and list merges.',
  },
  {
    id: 'stacks',
    name: 'Stacks',
    phase: 'Phase 1 — Basic Data Structures',
    description: 'LIFO execution, monotonic stacks, bracket validation, expression evaluation, and min-stacks.',
  },
  {
    id: 'queues-deques',
    name: 'Queues and Deques',
    phase: 'Phase 1 — Basic Data Structures',
    description: 'FIFO buffers, circular queues, sliding window maximum deques, and round-robin task models.',
  },
  {
    id: 'hash-tables-hashing',
    name: 'Hash Tables and Hashing',
    phase: 'Phase 1 — Basic Data Structures',
    description: 'Constant-time lookups, frequency maps, collision resolution, hash sets, and rolling hashes.',
  },

  // ─── Phase 2 — Algorithmic Complexity ───
  {
    id: 'time-space-analysis',
    name: 'Time and space analysis',
    phase: 'Phase 2 — Algorithmic Complexity',
    description: 'Asymptotic notation, Big-O loop unrolling, nested bounds, recurrence relations, and Master Theorem.',
  },
  {
    id: 'correctness-invariants',
    name: 'Correctness, invariants, and amortized analysis',
    phase: 'Phase 2 — Algorithmic Complexity',
    description: 'Loop invariants, induction proofs, aggregate method, accounting method, and potential functions.',
  },

  // ─── Phase 3 — Sorting Algorithms ───
  {
    id: 'elementary-sorting',
    name: 'Elementary sorting',
    phase: 'Phase 3 — Sorting Algorithms',
    description: 'Bubble sort, selection sort, insertion sort, stability invariants, and adaptive properties.',
  },
  {
    id: 'merge-sort',
    name: 'Merge sort',
    phase: 'Phase 3 — Sorting Algorithms',
    description: 'Divide-and-conquer splitting, recursive tree analysis, counting inversions, and external sorting.',
  },
  {
    id: 'quicksort-selection',
    name: 'Quicksort and selection',
    phase: 'Phase 3 — Sorting Algorithms',
    description: 'Lomuto & Hoare partitioning, Quickselect order statistics, pivot heuristics, and tail-call optimization.',
  },

  // ─── Phase 4 — Searching Algorithms ───
  {
    id: 'linear-binary-search',
    name: 'Linear and binary search',
    phase: 'Phase 4 — Searching Algorithms',
    description: 'Binary search boundaries, lower/upper bounds, rotated arrays, peak elements, and floor/ceiling lookups.',
  },
  {
    id: 'binary-search-answer',
    name: 'Binary search on the answer',
    phase: 'Phase 4 — Searching Algorithms',
    description: 'Monotonic feasibility predicates, capacity allocation, koko eating bananas, and min-max optimization.',
  },

  // ─── Phase 5 — Trees and Heaps ───
  {
    id: 'binary-trees-traversals',
    name: 'Binary trees and traversals',
    phase: 'Phase 5 — Trees and Heaps',
    description: 'Preorder, inorder, postorder, level-order BFS, tree height, diameter, and LCA queries.',
  },
  {
    id: 'binary-search-trees',
    name: 'Binary search trees',
    phase: 'Phase 5 — Trees and Heaps',
    description: 'BST property, range queries, floor/ceiling search, deletion rebalancing, and rank queries.',
  },
  {
    id: 'avl-btrees-indexing',
    name: 'AVL trees, B-trees, and indexing concepts',
    phase: 'Phase 5 — Trees and Heaps',
    description: 'Tree rotations, balance factor invariants, multi-way node branching, and disk block locality.',
  },
  {
    id: 'heaps-priority-queues',
    name: 'Heaps and priority queues',
    phase: 'Phase 5 — Trees and Heaps',
    description: 'Binary heap sift-up/down, heapify in linear time, top-K streaming elements, and running median tracking.',
  },

  // ─── Phase 6 — Graphs ───
  {
    id: 'graph-representation-traversal',
    name: 'Graph representation and traversal',
    phase: 'Phase 6 — Graphs',
    description: 'Adjacency lists/matrices, BFS shortest hops, DFS exploration, bipartite testing, and cycle detection.',
  },
  {
    id: 'grid-graphs-islands',
    name: 'Grid graphs and island traversal',
    phase: 'Phase 6 — Graphs',
    description: 'Connected components, flood fill, multi-source BFS, 2D coordinates, and perimeter boundary checks.',
  },
  {
    id: 'topological-sorting-dags',
    name: 'Topological sorting and directed acyclic graphs',
    phase: 'Phase 6 — Graphs',
    description: "Kahn's BFS algorithm, DFS postorder reversal, build systems, cycle detection, and longest paths in DAGs.",
  },
  {
    id: 'shortest-path-algorithms',
    name: 'Shortest-path algorithms',
    phase: 'Phase 6 — Graphs',
    description: "Dijkstra's priority queue pathfinding, Bellman-Ford negative edge checks, and Floyd-Warshall all-pairs.",
  },
  {
    id: 'minimum-spanning-trees',
    name: 'Minimum spanning trees',
    phase: 'Phase 6 — Graphs',
    description: "Kruskal's algorithm with DSU, Prim's priority queue, cut property, and cycle property.",
  },

  // ─── Phase 7 — Advanced Data Structures ───
  {
    id: 'tries',
    name: 'Tries',
    phase: 'Phase 7 — Advanced Data Structures',
    description: 'Prefix tree insertion, autocomplete search, wildcard matching, and XOR maximum pair tries.',
  },
  {
    id: 'segment-trees',
    name: 'Segment trees',
    phase: 'Phase 7 — Advanced Data Structures',
    description: 'Point updates, range sum/min queries, tree construction, and lazy propagation.',
  },
  {
    id: 'fenwick-trees',
    name: 'Fenwick trees (Binary Indexed Trees)',
    phase: 'Phase 7 — Advanced Data Structures',
    description: 'Lowest set bit isolation, prefix sum queries, point increments, and coordinate compression.',
  },
  {
    id: 'disjoint-set-union',
    name: 'Disjoint Set Union (Union-Find)',
    phase: 'Phase 7 — Advanced Data Structures',
    description: 'Path compression, union by rank, dynamic connectivity, cycle detection, and component sizing.',
  },
  {
    id: 'string-indexing-suffix',
    name: 'String indexing and suffix structures',
    phase: 'Phase 7 — Advanced Data Structures',
    description: 'Suffix arrays, LCP arrays, pattern search, and longest repeated substring.',
  },

  // ─── Phase 8 — Complex Data Structures ───
  {
    id: '2-3-trees-b-plus-trees',
    name: '2-3 trees and B+ trees',
    phase: 'Phase 8 — Complex Data Structures',
    description: 'Multi-way search trees, node splitting and merging, leaf linked lists, and database storage engines.',
  },
  {
    id: 'skip-lists',
    name: 'Skip lists',
    phase: 'Phase 8 — Complex Data Structures',
    description: 'Probabilistic balancing, multi-level pointer forward steps, and concurrent indexing.',
  },
  {
    id: 'isam-database-indexing',
    name: 'ISAM and database indexing',
    phase: 'Phase 8 — Complex Data Structures',
    description: 'Indexed Sequential Access Method, cylinder-track hierarchy, overflow chains, and clustered keys.',
  },

  // ─── Phase 9 — Indexing and Retrieval ───
  {
    id: 'index-construction-query-optimization',
    name: 'Index construction and query optimization',
    phase: 'Phase 9 — Indexing and Retrieval',
    description: 'Posting lists, boolean query processing, inverted indexes, skip pointers, and selectivity estimation.',
  },

  // ─── Phase 10 — Problem-Solving Techniques ───
  {
    id: 'brute-force-optimization',
    name: 'Brute force and optimization',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Search space enumeration, pruning unpromising branches, symmetry breaking, and precomputation.',
  },
  {
    id: 'two-pointers',
    name: 'Two pointers',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Opposite-end convergence, same-direction pacing, 3Sum triplet zero, and container trapping.',
  },
  {
    id: 'sliding-window',
    name: 'Sliding window',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Fixed and variable window boundaries, frequency state expansion/contraction, and anagram lookups.',
  },
  {
    id: 'fast-slow-pointers',
    name: 'Fast and slow pointers',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: "Floyd's tortoise and hare, middle of linked list, cycle start discovery, and circular array loops.",
  },
  {
    id: 'prefix-sums-difference-arrays',
    name: 'Prefix sums and difference arrays',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'O(1) range sum queries, 2D prefix sums, range update difference arrays, and subarray sum K.',
  },
  {
    id: 'cyclic-sort-index-placement',
    name: 'Cyclic sort and index placement',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Numbers from 1 to N, first missing positive, finding duplicates, and in-place index mapping.',
  },
  {
    id: 'merge-intervals',
    name: 'Merge intervals',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Interval sorting, overlapping unions, inserting intervals, and meeting room scheduling.',
  },
  {
    id: 'greedy-algorithms',
    name: 'Greedy algorithms',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Local optimal choice, exchange arguments, activity selection, jump game, and Huffman coding.',
  },
  {
    id: 'backtracking',
    name: 'Backtracking',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Permutations, combinations, N-Queens, Sudoku solver, word search, and pruning invalid branches.',
  },
  {
    id: 'divide-and-conquer',
    name: 'Divide and conquer',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Subproblem division, recombining solutions, Karatsuba multiplication, and closest pair of points.',
  },
  {
    id: 'kth-element-order-statistics',
    name: 'Kth element and order statistics',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Quickselect in linear average time, median of medians, dual heaps for stream medians, and top-K.',
  },
  {
    id: 'recursion-recursive-reasoning',
    name: 'Recursion and recursive reasoning',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Call stack tracing, base case design, tree recursive depth, memoization, and tower of Hanoi.',
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic programming',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: '1D DP, 2D grid DP, knapsack variations, longest common subsequence, edit distance, and digit DP.',
  },
  {
    id: 'randomized-algorithms',
    name: 'Randomized algorithms',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Reservoir sampling, Fisher-Yates shuffle, Las Vegas vs Monte Carlo, and randomized quickselect.',
  },
  {
    id: 'multithreaded-algorithms',
    name: 'Multithreaded algorithms',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'Parallel divide-and-conquer, work stealing, parallel reduction, race conditions, and Amdahl’s law.',
  },
  {
    id: 'integrated-grid-algorithms',
    name: 'Integrated island traversal and grid algorithms',
    phase: 'Phase 10 — Problem-Solving Techniques',
    description: 'A* pathfinding, key-door state space, terrain cost Dijkstra, moving obstacles, and nav-mesh graphs.',
  },

  // ─── Legacy / Alias Mappings for Seed Problems ───
  {
    id: 'arrays-strings',
    name: 'Arrays & Strings',
    phase: 'Phase 1 — Basic Data Structures',
    description: 'Array traversal, two pointers, sliding window, in-place manipulation, and string processing.',
  },
  {
    id: 'stacks-queues',
    name: 'Stacks & Queues',
    phase: 'Phase 1 — Basic Data Structures',
    description: 'LIFO & FIFO primitives, monotonic stacks, bracket matching, queues using stacks, and deques.',
  },
  {
    id: 'searching',
    name: 'Searching',
    phase: 'Phase 4 — Searching Algorithms',
    description: 'Binary search boundaries, rotated arrays, peak elements, and binary search on answer spaces.',
  },
];
