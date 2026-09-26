import type { DsaProblem } from '@/types/dsa-question';

export const PHASE_6_PROBLEMS: DsaProblem[] = [
  {
    "id": "dsa-p6-001",
    "slug": "list-of-edges-construct-an-adjacency",
    "title": "List of Edges, Construct an Adjacency",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Medium",
    "order": 307,
    "statement": "### Problem Description\n\nGiven a list of edges, construct an adjacency list for an undirected graph.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: List of Edges, Construct an Adjacency\n * Description: Given a list of edges, construct an adjacency list for an undirected graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: List of Edges, Construct an Adjacency\n * Description: Given a list of edges, construct an adjacency list for an undirected graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: List of Edges, Construct an Adjacency\nDescription: Given a list of edges, construct an adjacency list for an undirected graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: List of Edges, Construct an Adjacency\nDescription: Given a list of edges, construct an adjacency list for an undirected graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-001-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-001-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-001-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-001-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-002",
    "slug": "construct-an-adjacency-matrix-for",
    "title": "Construct an Adjacency Matrix",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Medium",
    "order": 308,
    "statement": "### Problem Description\n\nConstruct an adjacency matrix for the same graph and compare memory usage.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Construct an Adjacency Matrix for\n * Description: Construct an adjacency matrix for the same graph and compare memory usage.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Construct an Adjacency Matrix for\n * Description: Construct an adjacency matrix for the same graph and compare memory usage.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Construct an Adjacency Matrix for\nDescription: Construct an adjacency matrix for the same graph and compare memory usage.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Construct an Adjacency Matrix for\nDescription: Construct an adjacency matrix for the same graph and compare memory usage.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-002-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-002-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-002-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-002-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-003",
    "slug": "graph-calculate-the-degree-of-every",
    "title": "Graph, Calculate the Degree of Every",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Medium",
    "order": 309,
    "statement": "### Problem Description\n\nGiven a graph, calculate the degree of every vertex and identify isolated vertices.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph, Calculate the Degree of Every\n * Description: Given a graph, calculate the degree of every vertex and identify isolated vertices.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph, Calculate the Degree of Every\n * Description: Given a graph, calculate the degree of every vertex and identify isolated vertices.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph, Calculate the Degree of Every\nDescription: Given a graph, calculate the degree of every vertex and identify isolated vertices.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph, Calculate the Degree of Every\nDescription: Given a graph, calculate the degree of every vertex and identify isolated vertices.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-003-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-003-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-003-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-003-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-004",
    "slug": "implement-graph-traversal-using-an-adjacency-list",
    "title": "Implement Graph Traversal Using an Adjacency List",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Medium",
    "order": 310,
    "statement": "### Problem Description\n\nImplement graph traversal using an adjacency list and print all vertices in the order visited.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Graph Traversal Using an Adjacency List\n * Description: Implement graph traversal using an adjacency list and print all vertices in the order visited.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Graph Traversal Using an Adjacency List\n * Description: Implement graph traversal using an adjacency list and print all vertices in the order visited.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Graph Traversal Using an Adjacency List\nDescription: Implement graph traversal using an adjacency list and print all vertices in the order visited.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Graph Traversal Using an Adjacency List\nDescription: Implement graph traversal using an adjacency list and print all vertices in the order visited.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-004-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-004-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-004-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-004-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-005",
    "slug": "implement-recursive-dfs-starting-from-a-specified",
    "title": "Implement Recursive DFS Starting from a Specified",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph",
      "DFS",
      "Recursion"
    ],
    "difficulty": "Medium",
    "order": 311,
    "statement": "### Problem Description\n\nImplement recursive DFS starting from a specified vertex.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Recursive DFS Starting from a Specified\n * Description: Implement recursive DFS starting from a specified vertex.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Recursive DFS Starting from a Specified\n * Description: Implement recursive DFS starting from a specified vertex.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Recursive DFS Starting from a Specified\nDescription: Implement recursive DFS starting from a specified vertex.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Recursive DFS Starting from a Specified\nDescription: Implement recursive DFS starting from a specified vertex.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-005-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-005-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-005-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-005-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-006",
    "slug": "implement-iterative-dfs-using-a-stack",
    "title": "Implement Iterative DFS Using a Stack",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph",
      "DFS"
    ],
    "difficulty": "Medium",
    "order": 312,
    "statement": "### Problem Description\n\nImplement iterative DFS using a stack.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Iterative DFS Using a Stack\n * Description: Implement iterative DFS using a stack.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Iterative DFS Using a Stack\n * Description: Implement iterative DFS using a stack.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Iterative DFS Using a Stack\nDescription: Implement iterative DFS using a stack.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Iterative DFS Using a Stack\nDescription: Implement iterative DFS using a stack.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-006-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-006-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-006-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-006-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-007",
    "slug": "implement-bfs-using-a-queue",
    "title": "Implement BFS Using a Queue",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph",
      "BFS"
    ],
    "difficulty": "Medium",
    "order": 313,
    "statement": "### Problem Description\n\nImplement BFS using a queue.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement BFS Using a Queue\n * Description: Implement BFS using a queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement BFS Using a Queue\n * Description: Implement BFS using a queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement BFS Using a Queue\nDescription: Implement BFS using a queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement BFS Using a Queue\nDescription: Implement BFS using a queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-007-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-007-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-007-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-007-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-008",
    "slug": "graph-and-a-starting-vertex-print",
    "title": "Graph and a Starting Vertex, Print",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph",
      "BFS"
    ],
    "difficulty": "Medium",
    "order": 314,
    "statement": "### Problem Description\n\nGiven a graph and a starting vertex, print the BFS traversal and the distance of every reachable vertex.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph and a Starting Vertex, Print\n * Description: Given a graph and a starting vertex, print the BFS traversal and the distance of every reachable vertex.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph and a Starting Vertex, Print\n * Description: Given a graph and a starting vertex, print the BFS traversal and the distance of every reachable vertex.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph and a Starting Vertex, Print\nDescription: Given a graph and a starting vertex, print the BFS traversal and the distance of every reachable vertex.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph and a Starting Vertex, Print\nDescription: Given a graph and a starting vertex, print the BFS traversal and the distance of every reachable vertex.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-008-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-008-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-008-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-008-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-009",
    "slug": "path-exists-between-two-specified-vertices",
    "title": "Path Exists Between Two Specified Vertices",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 315,
    "statement": "### Problem Description\n\nDetermine whether a path exists between two specified vertices.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Path Exists Between Two Specified Vertices\n * Description: Determine whether a path exists between two specified vertices.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Path Exists Between Two Specified Vertices\n * Description: Determine whether a path exists between two specified vertices.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Path Exists Between Two Specified Vertices\nDescription: Determine whether a path exists between two specified vertices.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Path Exists Between Two Specified Vertices\nDescription: Determine whether a path exists between two specified vertices.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-009-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-009-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-009-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-009-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-010",
    "slug": "count-number-of-connected-components-in",
    "title": "Count Number of Connected Components",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 316,
    "statement": "### Problem Description\n\nCount the number of connected components in an undirected graph.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Connected Components in\n * Description: Count the number of connected components in an undirected graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Connected Components in\n * Description: Count the number of connected components in an undirected graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count Number of Connected Components in\nDescription: Count the number of connected components in an undirected graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count Number of Connected Components in\nDescription: Count the number of connected components in an undirected graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-010-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-010-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-010-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-010-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-011",
    "slug": "vertices-reachable-from-a-given-source",
    "title": "Vertices Reachable from a Given Source",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 317,
    "statement": "### Problem Description\n\nFind all vertices reachable from a given source.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Vertices Reachable from a Given Source\n * Description: Find all vertices reachable from a given source.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Vertices Reachable from a Given Source\n * Description: Find all vertices reachable from a given source.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Vertices Reachable from a Given Source\nDescription: Find all vertices reachable from a given source.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Vertices Reachable from a Given Source\nDescription: Find all vertices reachable from a given source.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-011-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-011-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-011-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-011-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-012",
    "slug": "undirected-graph-contains-a-cycle-using",
    "title": "Undirected Graph Contains a Cycle",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph",
      "DFS"
    ],
    "difficulty": "Hard",
    "order": 318,
    "statement": "### Problem Description\n\nDetermine whether an undirected graph contains a cycle using DFS.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Undirected Graph Contains a Cycle Using\n * Description: Determine whether an undirected graph contains a cycle using DFS.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Undirected Graph Contains a Cycle Using\n * Description: Determine whether an undirected graph contains a cycle using DFS.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Undirected Graph Contains a Cycle Using\nDescription: Determine whether an undirected graph contains a cycle using DFS.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Undirected Graph Contains a Cycle Using\nDescription: Determine whether an undirected graph contains a cycle using DFS.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-012-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-012-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-012-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-012-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-013",
    "slug": "detect-a-cycle-in-an-undirected",
    "title": "Detect a Cycle in an Undirected",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph",
      "BFS"
    ],
    "difficulty": "Hard",
    "order": 319,
    "statement": "### Problem Description\n\nDetect a cycle in an undirected graph using BFS.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Detect a Cycle in an Undirected\n * Description: Detect a cycle in an undirected graph using BFS.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Detect a Cycle in an Undirected\n * Description: Detect a cycle in an undirected graph using BFS.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Detect a Cycle in an Undirected\nDescription: Detect a cycle in an undirected graph using BFS.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Detect a Cycle in an Undirected\nDescription: Detect a cycle in an undirected graph using BFS.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-013-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-013-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-013-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-013-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-014",
    "slug": "detect-a-cycle-in-a-directed",
    "title": "Detect a Cycle in a Directed",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph",
      "DFS",
      "Recursion"
    ],
    "difficulty": "Hard",
    "order": 320,
    "statement": "### Problem Description\n\nDetect a cycle in a directed graph using DFS and recursion-stack states.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Detect a Cycle in a Directed\n * Description: Detect a cycle in a directed graph using DFS and recursion-stack states.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Detect a Cycle in a Directed\n * Description: Detect a cycle in a directed graph using DFS and recursion-stack states.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Detect a Cycle in a Directed\nDescription: Detect a cycle in a directed graph using DFS and recursion-stack states.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Detect a Cycle in a Directed\nDescription: Detect a cycle in a directed graph using DFS and recursion-stack states.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-014-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-014-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-014-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-014-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-015",
    "slug": "graph-is-bipartite-using-bfs-coloring",
    "title": "Graph Is Bipartite Using BFS Coloring",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph",
      "BFS"
    ],
    "difficulty": "Hard",
    "order": 321,
    "statement": "### Problem Description\n\nDetermine whether a graph is bipartite using BFS coloring.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph Is Bipartite Using BFS Coloring\n * Description: Determine whether a graph is bipartite using BFS coloring.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph Is Bipartite Using BFS Coloring\n * Description: Determine whether a graph is bipartite using BFS coloring.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph Is Bipartite Using BFS Coloring\nDescription: Determine whether a graph is bipartite using BFS coloring.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph Is Bipartite Using BFS Coloring\nDescription: Determine whether a graph is bipartite using BFS coloring.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-015-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-015-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-015-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-015-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-016",
    "slug": "shortest-path-between-two-vertices",
    "title": "Shortest Path Between Two Vertices",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 322,
    "statement": "### Problem Description\n\nFind the shortest path between two vertices in an unweighted graph and reconstruct the actual path.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Shortest Path Between Two Vertices\n * Description: Find the shortest path between two vertices in an unweighted graph and reconstruct the actual path.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Shortest Path Between Two Vertices\n * Description: Find the shortest path between two vertices in an unweighted graph and reconstruct the actual path.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Shortest Path Between Two Vertices\nDescription: Find the shortest path between two vertices in an unweighted graph and reconstruct the actual path.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Shortest Path Between Two Vertices\nDescription: Find the shortest path between two vertices in an unweighted graph and reconstruct the actual path.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-016-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-016-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-016-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-016-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-017",
    "slug": "graph-with-disconnected-components-perform-bfs",
    "title": "Graph with Disconnected Components, Perform BFS",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph",
      "BFS",
      "DFS"
    ],
    "difficulty": "Hard",
    "order": 323,
    "statement": "### Problem Description\n\nGiven a graph with disconnected components, perform BFS and DFS over the entire graph.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Disconnected Components, Perform BFS\n * Description: Given a graph with disconnected components, perform BFS and DFS over the entire graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Disconnected Components, Perform BFS\n * Description: Given a graph with disconnected components, perform BFS and DFS over the entire graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph with Disconnected Components, Perform BFS\nDescription: Given a graph with disconnected components, perform BFS and DFS over the entire graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph with Disconnected Components, Perform BFS\nDescription: Given a graph with disconnected components, perform BFS and DFS over the entire graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-017-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-017-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-017-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-017-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-018",
    "slug": "number-of-edges-that-must-be",
    "title": "Number of Edges That Must Be",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 324,
    "statement": "### Problem Description\n\nFind the number of edges that must be added to connect all components of an undirected graph.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Number of Edges That Must Be\n * Description: Find the number of edges that must be added to connect all components of an undirected graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Number of Edges That Must Be\n * Description: Find the number of edges that must be added to connect all components of an undirected graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Number of Edges That Must Be\nDescription: Find the number of edges that must be added to connect all components of an undirected graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Number of Edges That Must Be\nDescription: Find the number of edges that must be added to connect all components of an undirected graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-018-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-018-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-018-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-018-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-019",
    "slug": "graph-identify-articulation-points-whose-removal",
    "title": "Graph, Identify Articulation Points Whose Removal",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 325,
    "statement": "### Problem Description\n\nGiven a graph, identify articulation points whose removal increases the number of connected components.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph, Identify Articulation Points Whose Removal\n * Description: Given a graph, identify articulation points whose removal increases the number of connected components.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph, Identify Articulation Points Whose Removal\n * Description: Given a graph, identify articulation points whose removal increases the number of connected components.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph, Identify Articulation Points Whose Removal\nDescription: Given a graph, identify articulation points whose removal increases the number of connected components.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph, Identify Articulation Points Whose Removal\nDescription: Given a graph, identify articulation points whose removal increases the number of connected components.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-019-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-019-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-019-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-019-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-020",
    "slug": "bridges-in-an-undirected-graph",
    "title": "Bridges in an Undirected Graph",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 326,
    "statement": "### Problem Description\n\nFind bridges in an undirected graph.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Bridges in an Undirected Graph\n * Description: Find bridges in an undirected graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Bridges in an Undirected Graph\n * Description: Find bridges in an undirected graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Bridges in an Undirected Graph\nDescription: Find bridges in an undirected graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Bridges in an Undirected Graph\nDescription: Find bridges in an undirected graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-020-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-020-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-020-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-020-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-021",
    "slug": "strongly-connected-components-in-a-directed",
    "title": "Strongly Connected Components in a Directed",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 327,
    "statement": "### Problem Description\n\nFind strongly connected components in a directed graph using Kosaraju's algorithm.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Strongly Connected Components in a Directed\n * Description: Find strongly connected components in a directed graph using Kosaraju's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Strongly Connected Components in a Directed\n * Description: Find strongly connected components in a directed graph using Kosaraju's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Strongly Connected Components in a Directed\nDescription: Find strongly connected components in a directed graph using Kosaraju's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Strongly Connected Components in a Directed\nDescription: Find strongly connected components in a directed graph using Kosaraju's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-021-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-021-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-021-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-021-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-022",
    "slug": "implement-tarjans-algorithm-for-strongly-connected-components",
    "title": "Implement Tarjan's Algorithm for Strongly Connected Components",
    "topic": "Graph representation and traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 328,
    "statement": "### Problem Description\n\nImplement Tarjan's algorithm for strongly connected components and compare its state management with Kosaraju's algorithm.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Graph representation and traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Graph representation and traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Tarjan's Algorithm for Strongly Connected Components\n * Description: Implement Tarjan's algorithm for strongly connected components and compare its state management with Kosaraju's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Tarjan's Algorithm for Strongly Connected Components\n * Description: Implement Tarjan's algorithm for strongly connected components and compare its state management with Kosaraju's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Tarjan's Algorithm for Strongly Connected Components\nDescription: Implement Tarjan's algorithm for strongly connected components and compare its state management with Kosaraju's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Tarjan's Algorithm for Strongly Connected Components\nDescription: Implement Tarjan's algorithm for strongly connected components and compare its state management with Kosaraju's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-022-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-022-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-022-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-022-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-001",
    "slug": "binary-matrix-count-the-number",
    "title": "Binary Matrix, Count the Number",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph",
      "DFS"
    ],
    "difficulty": "Medium",
    "order": 329,
    "statement": "### Problem Description\n\nGiven a binary matrix, count the number of islands using DFS.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Matrix, Count the Number\n * Description: Given a binary matrix, count the number of islands using DFS.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Matrix, Count the Number\n * Description: Given a binary matrix, count the number of islands using DFS.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Binary Matrix, Count the Number\nDescription: Given a binary matrix, count the number of islands using DFS.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Binary Matrix, Count the Number\nDescription: Given a binary matrix, count the number of islands using DFS.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-001-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-001-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-001-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-001-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-002",
    "slug": "solve-the-same-problem-using-bfs",
    "title": "Solve the Same Problem Using BFS",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph",
      "BFS"
    ],
    "difficulty": "Medium",
    "order": 330,
    "statement": "### Problem Description\n\nSolve the same problem using BFS.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Solve the Same Problem Using BFS\n * Description: Solve the same problem using BFS.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Solve the Same Problem Using BFS\n * Description: Solve the same problem using BFS.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Solve the Same Problem Using BFS\nDescription: Solve the same problem using BFS.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Solve the Same Problem Using BFS\nDescription: Solve the same problem using BFS.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-002-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-002-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-002-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-002-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-003",
    "slug": "size-of-the-largest-connected-island",
    "title": "Size of the Largest Connected Island",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Medium",
    "order": 331,
    "statement": "### Problem Description\n\nFind the size of the largest connected island in a binary grid.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Size of the Largest Connected Island\n * Description: Find the size of the largest connected island in a binary grid.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Size of the Largest Connected Island\n * Description: Find the size of the largest connected island in a binary grid.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Size of the Largest Connected Island\nDescription: Find the size of the largest connected island in a binary grid.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Size of the Largest Connected Island\nDescription: Find the size of the largest connected island in a binary grid.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-003-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-003-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-003-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-003-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-004",
    "slug": "perimeter-of-every-island-in",
    "title": "Perimeter of Every Island",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Medium",
    "order": 332,
    "statement": "### Problem Description\n\nFind the perimeter of every island in a grid.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Perimeter of Every Island in\n * Description: Find the perimeter of every island in a grid.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Perimeter of Every Island in\n * Description: Find the perimeter of every island in a grid.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Perimeter of Every Island in\nDescription: Find the perimeter of every island in a grid.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Perimeter of Every Island in\nDescription: Find the perimeter of every island in a grid.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-004-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-004-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-004-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-004-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-005",
    "slug": "count-number-of-distinct-island-shapes-considering",
    "title": "Count Number of Distinct Island Shapes, Considering",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Medium",
    "order": 333,
    "statement": "### Problem Description\n\nCount the number of distinct island shapes, considering translations as equivalent.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Distinct Island Shapes, Considering\n * Description: Count the number of distinct island shapes, considering translations as equivalent.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Distinct Island Shapes, Considering\n * Description: Count the number of distinct island shapes, considering translations as equivalent.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count Number of Distinct Island Shapes, Considering\nDescription: Count the number of distinct island shapes, considering translations as equivalent.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count Number of Distinct Island Shapes, Considering\nDescription: Count the number of distinct island shapes, considering translations as equivalent.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-005-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-005-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-005-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-005-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-006",
    "slug": "grid-of-rotten-and-fresh-oranges",
    "title": "Grid of Rotten and Fresh Oranges",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 334,
    "statement": "### Problem Description\n\nGiven a grid of rotten and fresh oranges, calculate the minimum time required for all reachable fresh oranges to become rotten.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid of Rotten and Fresh Oranges\n * Description: Given a grid of rotten and fresh oranges, calculate the minimum time required for all reachable fresh oranges to become rotten.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid of Rotten and Fresh Oranges\n * Description: Given a grid of rotten and fresh oranges, calculate the minimum time required for all reachable fresh oranges to become rotten.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Grid of Rotten and Fresh Oranges\nDescription: Given a grid of rotten and fresh oranges, calculate the minimum time required for all reachable fresh oranges to become rotten.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Grid of Rotten and Fresh Oranges\nDescription: Given a grid of rotten and fresh oranges, calculate the minimum time required for all reachable fresh oranges to become rotten.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-006-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-006-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-006-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-006-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-007",
    "slug": "grid-with-obstacles-find-the-shortest",
    "title": "Grid with Obstacles, Find the Shortest",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph",
      "BFS"
    ],
    "difficulty": "Hard",
    "order": 335,
    "statement": "### Problem Description\n\nGiven a grid with obstacles, find the shortest path between two cells using BFS.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid with Obstacles, Find the Shortest\n * Description: Given a grid with obstacles, find the shortest path between two cells using BFS.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid with Obstacles, Find the Shortest\n * Description: Given a grid with obstacles, find the shortest path between two cells using BFS.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Grid with Obstacles, Find the Shortest\nDescription: Given a grid with obstacles, find the shortest path between two cells using BFS.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Grid with Obstacles, Find the Shortest\nDescription: Given a grid with obstacles, find the shortest path between two cells using BFS.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-007-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-007-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-007-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-007-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-008",
    "slug": "grid-containing-keys-and-locks-find",
    "title": "Grid Containing Keys and Locks, Find",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 336,
    "statement": "### Problem Description\n\nGiven a grid containing keys and locks, find the shortest path to collect all keys.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid Containing Keys and Locks, Find\n * Description: Given a grid containing keys and locks, find the shortest path to collect all keys.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid Containing Keys and Locks, Find\n * Description: Given a grid containing keys and locks, find the shortest path to collect all keys.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Grid Containing Keys and Locks, Find\nDescription: Given a grid containing keys and locks, find the shortest path to collect all keys.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Grid Containing Keys and Locks, Find\nDescription: Given a grid containing keys and locks, find the shortest path to collect all keys.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-008-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-008-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-008-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-008-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-009",
    "slug": "shortest-path-in-a-binary-matrix",
    "title": "Shortest Path in a Binary Matrix",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 337,
    "statement": "### Problem Description\n\nFind the shortest path in a binary matrix when diagonal movement is allowed.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Shortest Path in a Binary Matrix\n * Description: Find the shortest path in a binary matrix when diagonal movement is allowed.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Shortest Path in a Binary Matrix\n * Description: Find the shortest path in a binary matrix when diagonal movement is allowed.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Shortest Path in a Binary Matrix\nDescription: Find the shortest path in a binary matrix when diagonal movement is allowed.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Shortest Path in a Binary Matrix\nDescription: Find the shortest path in a binary matrix when diagonal movement is allowed.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-009-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-009-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-009-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-009-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-010",
    "slug": "matrix-containing-gates-and-walls-fill",
    "title": "Matrix Containing Gates and Walls, Fill",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 338,
    "statement": "### Problem Description\n\nGiven a matrix containing gates and walls, fill every empty room with its distance to the nearest gate.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Matrix Containing Gates and Walls, Fill\n * Description: Given a matrix containing gates and walls, fill every empty room with its distance to the nearest gate.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Matrix Containing Gates and Walls, Fill\n * Description: Given a matrix containing gates and walls, fill every empty room with its distance to the nearest gate.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Matrix Containing Gates and Walls, Fill\nDescription: Given a matrix containing gates and walls, fill every empty room with its distance to the nearest gate.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Matrix Containing Gates and Walls, Fill\nDescription: Given a matrix containing gates and walls, fill every empty room with its distance to the nearest gate.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-010-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-010-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-010-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-010-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-011",
    "slug": "grid-containing-fire-sources-and-people",
    "title": "Grid Containing Fire Sources and People",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 339,
    "statement": "### Problem Description\n\nGiven a grid containing fire sources and people, determine whether a person can reach an exit before the fire.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid Containing Fire Sources and People\n * Description: Given a grid containing fire sources and people, determine whether a person can reach an exit before the fire.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid Containing Fire Sources and People\n * Description: Given a grid containing fire sources and people, determine whether a person can reach an exit before the fire.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Grid Containing Fire Sources and People\nDescription: Given a grid containing fire sources and people, determine whether a person can reach an exit before the fire.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Grid Containing Fire Sources and People\nDescription: Given a grid containing fire sources and people, determine whether a person can reach an exit before the fire.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-011-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-011-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-011-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-011-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-012",
    "slug": "implement-flood-fill-and-extend-it",
    "title": "Implement Flood Fill and Extend It",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 340,
    "statement": "### Problem Description\n\nImplement flood fill and extend it to support multiple starting cells.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Flood Fill and Extend It\n * Description: Implement flood fill and extend it to support multiple starting cells.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Flood Fill and Extend It\n * Description: Implement flood fill and extend it to support multiple starting cells.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Flood Fill and Extend It\nDescription: Implement flood fill and extend it to support multiple starting cells.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Flood Fill and Extend It\nDescription: Implement flood fill and extend it to support multiple starting cells.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-012-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-012-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-012-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-012-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-013",
    "slug": "grid-of-elevations-determine-whether-water",
    "title": "Grid of Elevations, Determine Whether Water",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph"
    ],
    "difficulty": "Hard",
    "order": 341,
    "statement": "### Problem Description\n\nGiven a grid of elevations, determine whether water can flow from a cell to two different boundaries.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid of Elevations, Determine Whether Water\n * Description: Given a grid of elevations, determine whether water can flow from a cell to two different boundaries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid of Elevations, Determine Whether Water\n * Description: Given a grid of elevations, determine whether water can flow from a cell to two different boundaries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Grid of Elevations, Determine Whether Water\nDescription: Given a grid of elevations, determine whether water can flow from a cell to two different boundaries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Grid of Elevations, Determine Whether Water\nDescription: Given a grid of elevations, determine whether water can flow from a cell to two different boundaries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-013-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-013-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-013-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-013-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-014",
    "slug": "grid-with-weighted-terrain-costs-determine",
    "title": "Grid with Weighted Terrain Costs, Determine",
    "topic": "Grid graphs and island traversal",
    "tags": [
      "Graph",
      "BFS"
    ],
    "difficulty": "Hard",
    "order": 342,
    "statement": "### Problem Description\n\nGiven a grid with weighted terrain costs, determine why ordinary BFS is insufficient and implement an appropriate shortest-path algorithm.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Grid graphs and island traversal. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Grid graphs and island traversal allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid with Weighted Terrain Costs, Determine\n * Description: Given a grid with weighted terrain costs, determine why ordinary BFS is insufficient and implement an appropriate shortest-path algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid with Weighted Terrain Costs, Determine\n * Description: Given a grid with weighted terrain costs, determine why ordinary BFS is insufficient and implement an appropriate shortest-path algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Grid with Weighted Terrain Costs, Determine\nDescription: Given a grid with weighted terrain costs, determine why ordinary BFS is insufficient and implement an appropriate shortest-path algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Grid with Weighted Terrain Costs, Determine\nDescription: Given a grid with weighted terrain costs, determine why ordinary BFS is insufficient and implement an appropriate shortest-path algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-014-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-014-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-014-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-014-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-001",
    "slug": "directed-graph-determine-whether-it-is",
    "title": "Directed Graph, Determine Whether It Is",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 343,
    "statement": "### Problem Description\n\nGiven a directed graph, determine whether it is a DAG.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Directed Graph, Determine Whether It Is\n * Description: Given a directed graph, determine whether it is a DAG.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Directed Graph, Determine Whether It Is\n * Description: Given a directed graph, determine whether it is a DAG.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Directed Graph, Determine Whether It Is\nDescription: Given a directed graph, determine whether it is a DAG.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Directed Graph, Determine Whether It Is\nDescription: Given a directed graph, determine whether it is a DAG.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-001-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-001-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-001-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-001-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-002",
    "slug": "implement-topological-sorting-using-kahns-algorithm",
    "title": "Implement Topological Sorting Using Kahn's Algorithm",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 344,
    "statement": "### Problem Description\n\nImplement topological sorting using Kahn's algorithm.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Topological Sorting Using Kahn's Algorithm\n * Description: Implement topological sorting using Kahn's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Topological Sorting Using Kahn's Algorithm\n * Description: Implement topological sorting using Kahn's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Topological Sorting Using Kahn's Algorithm\nDescription: Implement topological sorting using Kahn's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Topological Sorting Using Kahn's Algorithm\nDescription: Implement topological sorting using Kahn's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-002-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-002-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-002-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-002-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-003",
    "slug": "implement-topological-sorting-using-dfs-postorder",
    "title": "Implement Topological Sorting Using DFS Postorder",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "DFS"
    ],
    "difficulty": "Medium",
    "order": 345,
    "statement": "### Problem Description\n\nImplement topological sorting using DFS postorder.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Topological Sorting Using DFS Postorder\n * Description: Implement topological sorting using DFS postorder.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Topological Sorting Using DFS Postorder\n * Description: Implement topological sorting using DFS postorder.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Topological Sorting Using DFS Postorder\nDescription: Implement topological sorting using DFS postorder.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Topological Sorting Using DFS Postorder\nDescription: Implement topological sorting using DFS postorder.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-003-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-003-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-003-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-003-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-004",
    "slug": "detect-a-cycle-in-a-directed-2",
    "title": "Detect a Cycle in a Directed",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 346,
    "statement": "### Problem Description\n\nDetect a cycle in a directed graph using Kahn's algorithm.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Detect a Cycle in a Directed\n * Description: Detect a cycle in a directed graph using Kahn's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Detect a Cycle in a Directed\n * Description: Detect a cycle in a directed graph using Kahn's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Detect a Cycle in a Directed\nDescription: Detect a cycle in a directed graph using Kahn's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Detect a Cycle in a Directed\nDescription: Detect a cycle in a directed graph using Kahn's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-004-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-004-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-004-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-004-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-005",
    "slug": "course-prerequisites-determine-whether-all-courses",
    "title": "Course Prerequisites, Determine Whether All Courses",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 347,
    "statement": "### Problem Description\n\nGiven course prerequisites, determine whether all courses can be completed.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Course Prerequisites, Determine Whether All Courses\n * Description: Given course prerequisites, determine whether all courses can be completed.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Course Prerequisites, Determine Whether All Courses\n * Description: Given course prerequisites, determine whether all courses can be completed.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Course Prerequisites, Determine Whether All Courses\nDescription: Given course prerequisites, determine whether all courses can be completed.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Course Prerequisites, Determine Whether All Courses\nDescription: Given course prerequisites, determine whether all courses can be completed.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-005-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-005-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-005-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-005-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-006",
    "slug": "return-a-valid-order-in-which",
    "title": "Return a Valid Order in Which",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 348,
    "statement": "### Problem Description\n\nReturn a valid order in which all courses can be completed.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Return a Valid Order in Which\n * Description: Return a valid order in which all courses can be completed.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Return a Valid Order in Which\n * Description: Return a valid order in which all courses can be completed.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Return a Valid Order in Which\nDescription: Return a valid order in which all courses can be completed.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Return a Valid Order in Which\nDescription: Return a valid order in which all courses can be completed.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-006-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-006-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-006-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-006-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-007",
    "slug": "dag-with-task-durations-calculate",
    "title": "DAG with Task Durations, Calculate",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 349,
    "statement": "### Problem Description\n\nGiven a DAG with task durations, calculate the earliest completion time of every task.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: DAG with Task Durations, Calculate\n * Description: Given a DAG with task durations, calculate the earliest completion time of every task.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: DAG with Task Durations, Calculate\n * Description: Given a DAG with task durations, calculate the earliest completion time of every task.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: DAG with Task Durations, Calculate\nDescription: Given a DAG with task durations, calculate the earliest completion time of every task.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: DAG with Task Durations, Calculate\nDescription: Given a DAG with task durations, calculate the earliest completion time of every task.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-007-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-007-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-007-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-007-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-008",
    "slug": "critical-path-in-a-project-dependency",
    "title": "Critical Path in a Project Dependency",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 350,
    "statement": "### Problem Description\n\nFind the critical path in a project dependency graph.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Critical Path in a Project Dependency\n * Description: Find the critical path in a project dependency graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Critical Path in a Project Dependency\n * Description: Find the critical path in a project dependency graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Critical Path in a Project Dependency\nDescription: Find the critical path in a project dependency graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Critical Path in a Project Dependency\nDescription: Find the critical path in a project dependency graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-008-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-008-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-008-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-008-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-009",
    "slug": "dag-with-edge-weights-find",
    "title": "DAG with Edge Weights, Find",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 351,
    "statement": "### Problem Description\n\nGiven a DAG with edge weights, find the shortest paths from a source using topological ordering.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: DAG with Edge Weights, Find\n * Description: Given a DAG with edge weights, find the shortest paths from a source using topological ordering.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: DAG with Edge Weights, Find\n * Description: Given a DAG with edge weights, find the shortest paths from a source using topological ordering.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: DAG with Edge Weights, Find\nDescription: Given a DAG with edge weights, find the shortest paths from a source using topological ordering.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: DAG with Edge Weights, Find\nDescription: Given a DAG with edge weights, find the shortest paths from a source using topological ordering.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-009-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-009-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-009-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-009-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-010",
    "slug": "count-number-of-distinct-paths-between-two",
    "title": "Count Number of Distinct Paths Between Two",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 352,
    "statement": "### Problem Description\n\nCount the number of distinct paths between two vertices in a DAG.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Distinct Paths Between Two\n * Description: Count the number of distinct paths between two vertices in a DAG.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Distinct Paths Between Two\n * Description: Count the number of distinct paths between two vertices in a DAG.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count Number of Distinct Paths Between Two\nDescription: Count the number of distinct paths between two vertices in a DAG.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count Number of Distinct Paths Between Two\nDescription: Count the number of distinct paths between two vertices in a DAG.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-010-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-010-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-010-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-010-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-011",
    "slug": "dependency-graph-of-software-modules-determine",
    "title": "Dependency Graph of Software Modules, Determine",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 353,
    "statement": "### Problem Description\n\nGiven a dependency graph of software modules, determine which modules must be rebuilt when one module changes.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Dependency Graph of Software Modules, Determine\n * Description: Given a dependency graph of software modules, determine which modules must be rebuilt when one module changes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Dependency Graph of Software Modules, Determine\n * Description: Given a dependency graph of software modules, determine which modules must be rebuilt when one module changes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Dependency Graph of Software Modules, Determine\nDescription: Given a dependency graph of software modules, determine which modules must be rebuilt when one module changes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Dependency Graph of Software Modules, Determine\nDescription: Given a dependency graph of software modules, determine which modules must be rebuilt when one module changes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-011-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-011-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-011-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-011-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-012",
    "slug": "dag-calculate-the-number-of-prerequisite",
    "title": "DAG, Calculate the Number of Prerequisite",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 354,
    "statement": "### Problem Description\n\nGiven a DAG, calculate the number of prerequisite tasks that must be completed before a target task.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: DAG, Calculate the Number of Prerequisite\n * Description: Given a DAG, calculate the number of prerequisite tasks that must be completed before a target task.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: DAG, Calculate the Number of Prerequisite\n * Description: Given a DAG, calculate the number of prerequisite tasks that must be completed before a target task.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: DAG, Calculate the Number of Prerequisite\nDescription: Given a DAG, calculate the number of prerequisite tasks that must be completed before a target task.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: DAG, Calculate the Number of Prerequisite\nDescription: Given a DAG, calculate the number of prerequisite tasks that must be completed before a target task.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-012-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-012-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-012-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-012-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-013",
    "slug": "multiple-valid-topological-orders-determine-whether",
    "title": "Multiple Valid Topological Orders, Determine Whether",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 355,
    "statement": "### Problem Description\n\nGiven multiple valid topological orders, determine whether the ordering is unique.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Multiple Valid Topological Orders, Determine Whether\n * Description: Given multiple valid topological orders, determine whether the ordering is unique.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Multiple Valid Topological Orders, Determine Whether\n * Description: Given multiple valid topological orders, determine whether the ordering is unique.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Multiple Valid Topological Orders, Determine Whether\nDescription: Given multiple valid topological orders, determine whether the ordering is unique.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Multiple Valid Topological Orders, Determine Whether\nDescription: Given multiple valid topological orders, determine whether the ordering is unique.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-013-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-013-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-013-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-013-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-014",
    "slug": "design-task-scheduler-that-executes-all-currently",
    "title": "Design Task Scheduler That Executes All Currently",
    "topic": "Topological sorting and directed acyclic graphs",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 356,
    "statement": "### Problem Description\n\nDesign a task scheduler that executes all currently available independent tasks while respecting dependencies.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Topological sorting and directed acyclic graphs. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Topological sorting and directed acyclic graphs allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Task Scheduler That Executes All Currently\n * Description: Design a task scheduler that executes all currently available independent tasks while respecting dependencies.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Task Scheduler That Executes All Currently\n * Description: Design a task scheduler that executes all currently available independent tasks while respecting dependencies.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Task Scheduler That Executes All Currently\nDescription: Design a task scheduler that executes all currently available independent tasks while respecting dependencies.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Task Scheduler That Executes All Currently\nDescription: Design a task scheduler that executes all currently available independent tasks while respecting dependencies.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-014-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-014-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-014-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-014-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-001",
    "slug": "weighted-graph-with-nonnegative-edges-implement",
    "title": "Weighted Graph with Nonnegative Edges, Implement",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 357,
    "statement": "### Problem Description\n\nGiven a weighted graph with nonnegative edges, implement Dijkstra's algorithm using an adjacency matrix.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Weighted Graph with Nonnegative Edges, Implement\n * Description: Given a weighted graph with nonnegative edges, implement Dijkstra's algorithm using an adjacency matrix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Weighted Graph with Nonnegative Edges, Implement\n * Description: Given a weighted graph with nonnegative edges, implement Dijkstra's algorithm using an adjacency matrix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Weighted Graph with Nonnegative Edges, Implement\nDescription: Given a weighted graph with nonnegative edges, implement Dijkstra's algorithm using an adjacency matrix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Weighted Graph with Nonnegative Edges, Implement\nDescription: Given a weighted graph with nonnegative edges, implement Dijkstra's algorithm using an adjacency matrix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-001-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-001-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-001-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-001-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-002",
    "slug": "implement-dijkstras-algorithm-using-an-adjacency-list",
    "title": "Implement Dijkstra's Algorithm Using an Adjacency List",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 358,
    "statement": "### Problem Description\n\nImplement Dijkstra's algorithm using an adjacency list and a min-priority queue.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Dijkstra's Algorithm Using an Adjacency List\n * Description: Implement Dijkstra's algorithm using an adjacency list and a min-priority queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Dijkstra's Algorithm Using an Adjacency List\n * Description: Implement Dijkstra's algorithm using an adjacency list and a min-priority queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Dijkstra's Algorithm Using an Adjacency List\nDescription: Implement Dijkstra's algorithm using an adjacency list and a min-priority queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Dijkstra's Algorithm Using an Adjacency List\nDescription: Implement Dijkstra's algorithm using an adjacency list and a min-priority queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-002-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-002-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-002-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-002-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-003",
    "slug": "reconstruct-the-shortest-path-from",
    "title": "Reconstruct the Shortest Path",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 359,
    "statement": "### Problem Description\n\nReconstruct the shortest path from a source to every reachable vertex.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Reconstruct the Shortest Path from\n * Description: Reconstruct the shortest path from a source to every reachable vertex.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Reconstruct the Shortest Path from\n * Description: Reconstruct the shortest path from a source to every reachable vertex.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Reconstruct the Shortest Path from\nDescription: Reconstruct the shortest path from a source to every reachable vertex.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Reconstruct the Shortest Path from\nDescription: Reconstruct the shortest path from a source to every reachable vertex.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-003-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-003-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-003-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-003-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-004",
    "slug": "weighted-graph-compare-dijkstras-algorithm-using",
    "title": "Weighted Graph, Compare Dijkstra's Algorithm",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 360,
    "statement": "### Problem Description\n\nGiven a weighted graph, compare Dijkstra's algorithm using a binary heap with the array-based implementation.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Weighted Graph, Compare Dijkstra's Algorithm Using\n * Description: Given a weighted graph, compare Dijkstra's algorithm using a binary heap with the array-based implementation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Weighted Graph, Compare Dijkstra's Algorithm Using\n * Description: Given a weighted graph, compare Dijkstra's algorithm using a binary heap with the array-based implementation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Weighted Graph, Compare Dijkstra's Algorithm Using\nDescription: Given a weighted graph, compare Dijkstra's algorithm using a binary heap with the array-based implementation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Weighted Graph, Compare Dijkstra's Algorithm Using\nDescription: Given a weighted graph, compare Dijkstra's algorithm using a binary heap with the array-based implementation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-004-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-004-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-004-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-004-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-005",
    "slug": "graph-with-negative-edge-weights-construct",
    "title": "Graph with Negative Edge Weights, Construct",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 361,
    "statement": "### Problem Description\n\nGiven a graph with negative edge weights, construct an example where Dijkstra's algorithm returns an incorrect answer.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Negative Edge Weights, Construct\n * Description: Given a graph with negative edge weights, construct an example where Dijkstra's algorithm returns an incorrect answer.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Negative Edge Weights, Construct\n * Description: Given a graph with negative edge weights, construct an example where Dijkstra's algorithm returns an incorrect answer.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph with Negative Edge Weights, Construct\nDescription: Given a graph with negative edge weights, construct an example where Dijkstra's algorithm returns an incorrect answer.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph with Negative Edge Weights, Construct\nDescription: Given a graph with negative edge weights, construct an example where Dijkstra's algorithm returns an incorrect answer.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-005-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-005-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-005-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-005-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-006",
    "slug": "implement-bellman-ford-and-calculate-shortest-distances",
    "title": "Implement Bellman-Ford and Calculate Shortest Distances",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 362,
    "statement": "### Problem Description\n\nImplement Bellman-Ford and calculate shortest distances from a source.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Bellman-Ford and Calculate Shortest Distances\n * Description: Implement Bellman-Ford and calculate shortest distances from a source.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Bellman-Ford and Calculate Shortest Distances\n * Description: Implement Bellman-Ford and calculate shortest distances from a source.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Bellman-Ford and Calculate Shortest Distances\nDescription: Implement Bellman-Ford and calculate shortest distances from a source.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Bellman-Ford and Calculate Shortest Distances\nDescription: Implement Bellman-Ford and calculate shortest distances from a source.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-006-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-006-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-006-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-006-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-007",
    "slug": "detect-whether-a-graph-contains",
    "title": "Detect Whether a Graph Contains",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 363,
    "statement": "### Problem Description\n\nDetect whether a graph contains a negative-weight cycle reachable from the source.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Detect Whether a Graph Contains\n * Description: Detect whether a graph contains a negative-weight cycle reachable from the source.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Detect Whether a Graph Contains\n * Description: Detect whether a graph contains a negative-weight cycle reachable from the source.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Detect Whether a Graph Contains\nDescription: Detect whether a graph contains a negative-weight cycle reachable from the source.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Detect Whether a Graph Contains\nDescription: Detect whether a graph contains a negative-weight cycle reachable from the source.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-007-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-007-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-007-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-007-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-008",
    "slug": "graph-with-negative-edges-but-no",
    "title": "Graph with Negative Edges But No",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 364,
    "statement": "### Problem Description\n\nGiven a graph with negative edges but no negative cycles, reconstruct a shortest path using Bellman-Ford.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Negative Edges But No\n * Description: Given a graph with negative edges but no negative cycles, reconstruct a shortest path using Bellman-Ford.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Negative Edges But No\n * Description: Given a graph with negative edges but no negative cycles, reconstruct a shortest path using Bellman-Ford.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph with Negative Edges But No\nDescription: Given a graph with negative edges but no negative cycles, reconstruct a shortest path using Bellman-Ford.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph with Negative Edges But No\nDescription: Given a graph with negative edges but no negative cycles, reconstruct a shortest path using Bellman-Ford.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-008-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-008-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-008-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-008-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-009",
    "slug": "implement-floyd-warshall-to-find-shortest-paths-between",
    "title": "Implement Floyd-Warshall to Find Shortest Paths Between",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 365,
    "statement": "### Problem Description\n\nImplement Floyd-Warshall to find shortest paths between all pairs of vertices.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Floyd-Warshall to Find Shortest Paths Between\n * Description: Implement Floyd-Warshall to find shortest paths between all pairs of vertices.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Floyd-Warshall to Find Shortest Paths Between\n * Description: Implement Floyd-Warshall to find shortest paths between all pairs of vertices.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Floyd-Warshall to Find Shortest Paths Between\nDescription: Implement Floyd-Warshall to find shortest paths between all pairs of vertices.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Floyd-Warshall to Find Shortest Paths Between\nDescription: Implement Floyd-Warshall to find shortest paths between all pairs of vertices.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-009-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-009-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-009-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-009-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-010",
    "slug": "use-floyd-warshall-to-detect-negative-cycles",
    "title": "Use Floyd-Warshall to Detect Negative Cycles",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 366,
    "statement": "### Problem Description\n\nUse Floyd-Warshall to detect negative cycles and determine whether a shortest path is well-defined.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use Floyd-Warshall to Detect Negative Cycles\n * Description: Use Floyd-Warshall to detect negative cycles and determine whether a shortest path is well-defined.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use Floyd-Warshall to Detect Negative Cycles\n * Description: Use Floyd-Warshall to detect negative cycles and determine whether a shortest path is well-defined.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Use Floyd-Warshall to Detect Negative Cycles\nDescription: Use Floyd-Warshall to detect negative cycles and determine whether a shortest path is well-defined.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Use Floyd-Warshall to Detect Negative Cycles\nDescription: Use Floyd-Warshall to detect negative cycles and determine whether a shortest path is well-defined.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-010-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-010-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-010-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-010-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-011",
    "slug": "graph-with-several-possible-intermediate-stops",
    "title": "Graph with Several Possible Intermediate Stops",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 367,
    "statement": "### Problem Description\n\nGiven a graph with several possible intermediate stops, find the cheapest path using at most K edges.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Several Possible Intermediate Stops\n * Description: Given a graph with several possible intermediate stops, find the cheapest path using at most K edges.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Several Possible Intermediate Stops\n * Description: Given a graph with several possible intermediate stops, find the cheapest path using at most K edges.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph with Several Possible Intermediate Stops\nDescription: Given a graph with several possible intermediate stops, find the cheapest path using at most K edges.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph with Several Possible Intermediate Stops\nDescription: Given a graph with several possible intermediate stops, find the cheapest path using at most K edges.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-011-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-011-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-011-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-011-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-012",
    "slug": "flight-network-find-the-cheapest-price",
    "title": "Flight Network, Find the Cheapest Price",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 368,
    "statement": "### Problem Description\n\nGiven a flight network, find the cheapest price from a source to a destination with at most K stops.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
    "examples": [
      {
        "input": "5 7\n1 3 4 5 9",
        "output": "3",
        "explanation": "Evaluating array against target 7 yields result 3."
      },
      {
        "input": "3 10\n1 2 3",
        "output": "-1",
        "explanation": "Target 10 cannot be formed from the elements."
      },
      {
        "input": "1 5\n5",
        "output": "0",
        "explanation": "Target matches single array element at index 0."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i], K <= 10^9",
      "Time complexity target: O(N) or O(log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Flight Network, Find the Cheapest Price\n * Description: Given a flight network, find the cheapest price from a source to a destination with at most K stops.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Flight Network, Find the Cheapest Price\n * Description: Given a flight network, find the cheapest price from a source to a destination with at most K stops.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Flight Network, Find the Cheapest Price\nDescription: Given a flight network, find the cheapest price from a source to a destination with at most K stops.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Flight Network, Find the Cheapest Price\nDescription: Given a flight network, find the cheapest price from a source to a destination with at most K stops.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-012-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p6-012-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p6-012-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-012-4",
        "input": "4 6\n2 4 6 8",
        "expectedOutput": "2"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-013",
    "slug": "implement-a-search-on-a-two-dimensional-grid",
    "title": "Implement A* Search on a Two-dimensional Grid",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 369,
    "statement": "### Problem Description\n\nImplement A* search on a two-dimensional grid using Manhattan distance as a heuristic.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement A* Search on a Two-dimensional Grid\n * Description: Implement A* search on a two-dimensional grid using Manhattan distance as a heuristic.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement A* Search on a Two-dimensional Grid\n * Description: Implement A* search on a two-dimensional grid using Manhattan distance as a heuristic.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement A* Search on a Two-dimensional Grid\nDescription: Implement A* search on a two-dimensional grid using Manhattan distance as a heuristic.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement A* Search on a Two-dimensional Grid\nDescription: Implement A* search on a two-dimensional grid using Manhattan distance as a heuristic.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-013-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-013-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-013-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-013-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-014",
    "slug": "compare-dijkstras-algorithm-and-a",
    "title": "Compare Dijkstra's Algorithm and A*",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 370,
    "statement": "### Problem Description\n\nCompare Dijkstra's algorithm and A* on the same grid, measuring expanded nodes and path cost.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Dijkstra's Algorithm and A*\n * Description: Compare Dijkstra's algorithm and A* on the same grid, measuring expanded nodes and path cost.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Dijkstra's Algorithm and A*\n * Description: Compare Dijkstra's algorithm and A* on the same grid, measuring expanded nodes and path cost.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare Dijkstra's Algorithm and A*\nDescription: Compare Dijkstra's algorithm and A* on the same grid, measuring expanded nodes and path cost.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare Dijkstra's Algorithm and A*\nDescription: Compare Dijkstra's algorithm and A* on the same grid, measuring expanded nodes and path cost.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-014-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-014-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-014-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-014-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-015",
    "slug": "game-map-with-terrain-costs-implement",
    "title": "Game Map with Terrain Costs, Implement",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 371,
    "statement": "### Problem Description\n\nGiven a game map with terrain costs, implement A* with an admissible heuristic.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Game Map with Terrain Costs, Implement\n * Description: Given a game map with terrain costs, implement A* with an admissible heuristic.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Game Map with Terrain Costs, Implement\n * Description: Given a game map with terrain costs, implement A* with an admissible heuristic.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Game Map with Terrain Costs, Implement\nDescription: Given a game map with terrain costs, implement A* with an admissible heuristic.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Game Map with Terrain Costs, Implement\nDescription: Given a game map with terrain costs, implement A* with an admissible heuristic.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-015-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-015-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-015-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-015-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-016",
    "slug": "design-pathfinding-system-that-supports-changing-obstacles",
    "title": "Design Pathfinding System That Supports Changing Obstacles",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 372,
    "statement": "### Problem Description\n\nDesign a pathfinding system that supports changing obstacles and explain why repeatedly running A* from scratch may be expensive.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "4 2 5 1 3",
        "explanation": "Processing tree nodes in standard order."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Single root node evaluation."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "Empty tree evaluation returns 0."
      }
    ],
    "constraints": [
      "0 <= N <= 10^5",
      "-10^9 <= node.val <= 10^9",
      "Time complexity target: O(N)",
      "Auxiliary space target: O(H) where H is tree height"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Pathfinding System That Supports Changing Obstacles\n * Description: Design a pathfinding system that supports changing obstacles and explain why repeatedly running A* from scratch may be expensive.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Pathfinding System That Supports Changing Obstacles\n * Description: Design a pathfinding system that supports changing obstacles and explain why repeatedly running A* from scratch may be expensive.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Pathfinding System That Supports Changing Obstacles\nDescription: Design a pathfinding system that supports changing obstacles and explain why repeatedly running A* from scratch may be expensive.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Pathfinding System That Supports Changing Obstacles\nDescription: Design a pathfinding system that supports changing obstacles and explain why repeatedly running A* from scratch may be expensive.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-016-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p6-016-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-016-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-016-4",
        "input": "3\n2 1 3",
        "expectedOutput": "1 2 3"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-017",
    "slug": "graph-with-multiple-equal-cost-shortest-paths",
    "title": "Graph with Multiple Equal-cost Shortest Paths",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 373,
    "statement": "### Problem Description\n\nGiven a graph with multiple equal-cost shortest paths, return the number of shortest paths between two vertices.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Multiple Equal-cost Shortest Paths\n * Description: Given a graph with multiple equal-cost shortest paths, return the number of shortest paths between two vertices.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Multiple Equal-cost Shortest Paths\n * Description: Given a graph with multiple equal-cost shortest paths, return the number of shortest paths between two vertices.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph with Multiple Equal-cost Shortest Paths\nDescription: Given a graph with multiple equal-cost shortest paths, return the number of shortest paths between two vertices.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph with Multiple Equal-cost Shortest Paths\nDescription: Given a graph with multiple equal-cost shortest paths, return the number of shortest paths between two vertices.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-017-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-017-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-017-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-017-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-018",
    "slug": "graph-with-nonnegative-edge-weights-find",
    "title": "Graph with Nonnegative Edge Weights, Find",
    "topic": "Shortest-path algorithms",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 374,
    "statement": "### Problem Description\n\nGiven a graph with nonnegative edge weights, find the second-shortest distinct path between two vertices.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Shortest-path algorithms. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Shortest-path algorithms allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Nonnegative Edge Weights, Find\n * Description: Given a graph with nonnegative edge weights, find the second-shortest distinct path between two vertices.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Nonnegative Edge Weights, Find\n * Description: Given a graph with nonnegative edge weights, find the second-shortest distinct path between two vertices.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph with Nonnegative Edge Weights, Find\nDescription: Given a graph with nonnegative edge weights, find the second-shortest distinct path between two vertices.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph with Nonnegative Edge Weights, Find\nDescription: Given a graph with nonnegative edge weights, find the second-shortest distinct path between two vertices.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-018-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-018-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-018-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-018-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-001",
    "slug": "connected-weighted-undirected-graph-construct",
    "title": "Connected Weighted Undirected Graph, Construct",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 375,
    "statement": "### Problem Description\n\nGiven a connected weighted undirected graph, construct a minimum spanning tree using Kruskal's algorithm.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Connected Weighted Undirected Graph, Construct\n * Description: Given a connected weighted undirected graph, construct a minimum spanning tree using Kruskal's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Connected Weighted Undirected Graph, Construct\n * Description: Given a connected weighted undirected graph, construct a minimum spanning tree using Kruskal's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Connected Weighted Undirected Graph, Construct\nDescription: Given a connected weighted undirected graph, construct a minimum spanning tree using Kruskal's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Connected Weighted Undirected Graph, Construct\nDescription: Given a connected weighted undirected graph, construct a minimum spanning tree using Kruskal's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-001-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-001-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-001-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-001-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-002",
    "slug": "implement-prims-algorithm-using-an-adjacency-matrix",
    "title": "Implement Prim's Algorithm Using an Adjacency Matrix",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 376,
    "statement": "### Problem Description\n\nImplement Prim's algorithm using an adjacency matrix.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
    "examples": [
      {
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "output": "2",
        "explanation": "Grid analysis identifies 2 distinct connected components of 1s."
      },
      {
        "input": "2 2\n0 0\n0 0",
        "output": "0",
        "explanation": "Empty grid with no active cells produces 0."
      },
      {
        "input": "1 4\n1 1 1 1",
        "output": "1",
        "explanation": "A single contiguous row of 1s forms exactly 1 component."
      }
    ],
    "constraints": [
      "1 <= R, C <= 1000",
      "0 <= grid[i][j] <= 1",
      "Time complexity target: O(R * C)",
      "Auxiliary space target: O(R * C)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Prim's Algorithm Using an Adjacency Matrix\n * Description: Implement Prim's algorithm using an adjacency matrix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Prim's Algorithm Using an Adjacency Matrix\n * Description: Implement Prim's algorithm using an adjacency matrix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Prim's Algorithm Using an Adjacency Matrix\nDescription: Implement Prim's algorithm using an adjacency matrix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Prim's Algorithm Using an Adjacency Matrix\nDescription: Implement Prim's algorithm using an adjacency matrix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-002-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p6-002-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p6-002-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-002-4",
        "input": "3 3\n1 0 1\n0 1 0\n1 0 1",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-003",
    "slug": "implement-prims-algorithm-using-an-adjacency-list",
    "title": "Implement Prim's Algorithm Using an Adjacency List",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 377,
    "statement": "### Problem Description\n\nImplement Prim's algorithm using an adjacency list and a priority queue.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Prim's Algorithm Using an Adjacency List\n * Description: Implement Prim's algorithm using an adjacency list and a priority queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Prim's Algorithm Using an Adjacency List\n * Description: Implement Prim's algorithm using an adjacency list and a priority queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Prim's Algorithm Using an Adjacency List\nDescription: Implement Prim's algorithm using an adjacency list and a priority queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Prim's Algorithm Using an Adjacency List\nDescription: Implement Prim's algorithm using an adjacency list and a priority queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-003-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-003-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-003-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-003-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-004",
    "slug": "compare-the-edge-selection-process-of-prims",
    "title": "Compare the Edge-selection Process of Prim's",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 378,
    "statement": "### Problem Description\n\nCompare the edge-selection process of Prim's and Kruskal's algorithms on the same graph.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare the Edge-selection Process of Prim's\n * Description: Compare the edge-selection process of Prim's and Kruskal's algorithms on the same graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare the Edge-selection Process of Prim's\n * Description: Compare the edge-selection process of Prim's and Kruskal's algorithms on the same graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare the Edge-selection Process of Prim's\nDescription: Compare the edge-selection process of Prim's and Kruskal's algorithms on the same graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare the Edge-selection Process of Prim's\nDescription: Compare the edge-selection process of Prim's and Kruskal's algorithms on the same graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-004-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-004-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-004-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-004-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-005",
    "slug": "graph-with-multiple-connected-components-construct",
    "title": "Graph with Multiple Connected Components, Construct",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 379,
    "statement": "### Problem Description\n\nGiven a graph with multiple connected components, construct a minimum spanning forest.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Multiple Connected Components, Construct\n * Description: Given a graph with multiple connected components, construct a minimum spanning forest.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph with Multiple Connected Components, Construct\n * Description: Given a graph with multiple connected components, construct a minimum spanning forest.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph with Multiple Connected Components, Construct\nDescription: Given a graph with multiple connected components, construct a minimum spanning forest.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph with Multiple Connected Components, Construct\nDescription: Given a graph with multiple connected components, construct a minimum spanning forest.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-005-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-005-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-005-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-005-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-006",
    "slug": "prove-that-selecting-the-minimum-weight-edge",
    "title": "Prove That Selecting the Minimum-weight Edge",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 380,
    "statement": "### Problem Description\n\nProve that selecting the minimum-weight edge crossing a cut is safe under the cut property.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That Selecting the Minimum-weight Edge\n * Description: Prove that selecting the minimum-weight edge crossing a cut is safe under the cut property.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That Selecting the Minimum-weight Edge\n * Description: Prove that selecting the minimum-weight edge crossing a cut is safe under the cut property.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Prove That Selecting the Minimum-weight Edge\nDescription: Prove that selecting the minimum-weight edge crossing a cut is safe under the cut property.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Prove That Selecting the Minimum-weight Edge\nDescription: Prove that selecting the minimum-weight edge crossing a cut is safe under the cut property.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-006-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-006-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-006-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-006-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-007",
    "slug": "weighted-graph-determine-whether-a-particular",
    "title": "Weighted Graph, Determine Whether a Particular",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 381,
    "statement": "### Problem Description\n\nGiven a weighted graph, determine whether a particular edge belongs to every possible MST.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Weighted Graph, Determine Whether a Particular\n * Description: Given a weighted graph, determine whether a particular edge belongs to every possible MST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Weighted Graph, Determine Whether a Particular\n * Description: Given a weighted graph, determine whether a particular edge belongs to every possible MST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Weighted Graph, Determine Whether a Particular\nDescription: Given a weighted graph, determine whether a particular edge belongs to every possible MST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Weighted Graph, Determine Whether a Particular\nDescription: Given a weighted graph, determine whether a particular edge belongs to every possible MST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-007-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-007-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-007-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-007-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-008",
    "slug": "total-weight-of-an-mst",
    "title": "Total Weight of an MST",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 382,
    "statement": "### Problem Description\n\nFind the total weight of an MST and determine whether it is unique.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Total Weight of an MST\n * Description: Find the total weight of an MST and determine whether it is unique.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Total Weight of an MST\n * Description: Find the total weight of an MST and determine whether it is unique.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Total Weight of an MST\nDescription: Find the total weight of an MST and determine whether it is unique.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Total Weight of an MST\nDescription: Find the total weight of an MST and determine whether it is unique.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-008-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-008-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-008-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-008-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-009",
    "slug": "network-of-cities-and-possible-connections",
    "title": "Network of Cities and Possible Connections",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 383,
    "statement": "### Problem Description\n\nGiven a network of cities and possible connections, determine the minimum cost to connect all cities.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Network of Cities and Possible Connections\n * Description: Given a network of cities and possible connections, determine the minimum cost to connect all cities.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Network of Cities and Possible Connections\n * Description: Given a network of cities and possible connections, determine the minimum cost to connect all cities.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Network of Cities and Possible Connections\nDescription: Given a network of cities and possible connections, determine the minimum cost to connect all cities.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Network of Cities and Possible Connections\nDescription: Given a network of cities and possible connections, determine the minimum cost to connect all cities.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-009-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-009-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-009-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-009-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-010",
    "slug": "existing-network-and-proposed-new-connections",
    "title": "Existing Network and Proposed New Connections",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 384,
    "statement": "### Problem Description\n\nGiven an existing network and proposed new connections, determine the minimum additional cost needed to connect all components.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Existing Network and Proposed New Connections\n * Description: Given an existing network and proposed new connections, determine the minimum additional cost needed to connect all components.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Existing Network and Proposed New Connections\n * Description: Given an existing network and proposed new connections, determine the minimum additional cost needed to connect all components.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Existing Network and Proposed New Connections\nDescription: Given an existing network and proposed new connections, determine the minimum additional cost needed to connect all components.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Existing Network and Proposed New Connections\nDescription: Given an existing network and proposed new connections, determine the minimum additional cost needed to connect all components.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-010-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-010-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-010-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-010-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-011",
    "slug": "explain-why-negative-edge-weights-do",
    "title": "Explain Why Negative Edge Weights Do",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 385,
    "statement": "### Problem Description\n\nExplain why negative edge weights do not invalidate Prim's or Kruskal's algorithms.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
    "examples": [
      {
        "input": "5\n3 1 4 1 5",
        "output": "1 1 3 4 5",
        "explanation": "Processing input sequence according to algorithmic invariants."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton input baseline verification."
      },
      {
        "input": "4\n-10 -5 0 5",
        "output": "-10 -5 0 5",
        "explanation": "Handling negative and boundary values."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N) or O(N log N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why Negative Edge Weights Do\n * Description: Explain why negative edge weights do not invalidate Prim's or Kruskal's algorithms.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why Negative Edge Weights Do\n * Description: Explain why negative edge weights do not invalidate Prim's or Kruskal's algorithms.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Explain Why Negative Edge Weights Do\nDescription: Explain why negative edge weights do not invalidate Prim's or Kruskal's algorithms.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Explain Why Negative Edge Weights Do\nDescription: Explain why negative edge weights do not invalidate Prim's or Kruskal's algorithms.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-011-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p6-011-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p6-011-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p6-011-4",
        "input": "3\n5 2 8",
        "expectedOutput": "2 5 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p6-012",
    "slug": "graph-find-the-minimum-cost",
    "title": "Graph, Find the Minimum Cost",
    "topic": "Minimum spanning trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 386,
    "statement": "### Problem Description\n\nGiven a graph, find the minimum cost to connect all vertices while excluding a specified edge.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
    "examples": [
      {
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "output": "1 2 3 4",
        "explanation": "Standard cycle graph traversal over 4 vertices."
      },
      {
        "input": "3 2\n1 2\n2 3",
        "output": "1 2 3",
        "explanation": "Linear path through 3 vertices."
      },
      {
        "input": "1 0",
        "output": "1",
        "explanation": "Isolated single vertex with 0 edges."
      }
    ],
    "constraints": [
      "1 <= V <= 10^5",
      "0 <= E <= 2 * 10^5",
      "Time complexity target: O(V + E)",
      "Auxiliary space target: O(V + E)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Minimum spanning trees. Focus on what remains unchanged across each state transition."
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Determine whether a two-pointer, divide-and-conquer, dynamic programming, or monotonic accumulator structure yields the optimal bound."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Verify correctness against boundary cases: empty or singleton inputs, duplicates, extreme negative/positive values, and 64-bit integer limits."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate all candidate states or partitions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "Exploiting structural properties in Minimum spanning trees allows single-pass or logarithmic resolution without redundant computations.",
        "algorithm": "Initialize required tracking structures, execute the core transformation maintaining optimal invariants, and emit the formatted result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs and initialize auxiliary tracking variables."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute core transitions maintaining problem invariants."
          },
          {
            "title": "Step 3 — Emit Result",
            "content": "Print the computed scalar or space-separated elements."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph, Find the Minimum Cost\n * Description: Given a graph, find the minimum cost to connect all vertices while excluding a specified edge.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph, Find the Minimum Cost\n * Description: Given a graph, find the minimum cost to connect all vertices while excluding a specified edge.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph, Find the Minimum Cost\nDescription: Given a graph, find the minimum cost to connect all vertices while excluding a specified edge.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph, Find the Minimum Cost\nDescription: Given a graph, find the minimum cost to connect all vertices while excluding a specified edge.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p6-012-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p6-012-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p6-012-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p6-012-4",
        "input": "4 3\n1 2\n1 3\n1 4",
        "expectedOutput": "1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  }
];
