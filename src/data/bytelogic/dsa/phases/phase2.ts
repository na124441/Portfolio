import type { DsaProblem } from '@/types/dsa-question';

export const PHASE_2_PROBLEMS: DsaProblem[] = [
  {
    "id": "dsa-p2-001",
    "slug": "for-a-loop-that-executes-n",
    "title": "For a Loop That Executes N",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 130,
    "statement": "### Problem Description\n\nFor a loop that executes N times, count the exact number of iterations for N = 10, 100, and 1000.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: For a Loop That Executes N\n * Description: For a loop that executes N times, count the exact number of iterations for N = 10, 100, and 1000.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: For a Loop That Executes N\n * Description: For a loop that executes N times, count the exact number of iterations for N = 10, 100, and 1000.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: For a Loop That Executes N\nDescription: For a loop that executes N times, count the exact number of iterations for N = 10, 100, and 1000.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: For a Loop That Executes N\nDescription: For a loop that executes N times, count the exact number of iterations for N = 10, 100, and 1000.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "for-a-loop-that-executes-n-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-002",
    "slug": "analyze-a-loop-whose-counter-doubles",
    "title": "Analyze a Loop Whose Counter Doubles",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 131,
    "statement": "### Problem Description\n\nAnalyze a loop whose counter doubles after each iteration. Derive its asymptotic complexity.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze a Loop Whose Counter Doubles\n * Description: Analyze a loop whose counter doubles after each iteration. Derive its asymptotic complexity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze a Loop Whose Counter Doubles\n * Description: Analyze a loop whose counter doubles after each iteration. Derive its asymptotic complexity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze a Loop Whose Counter Doubles\nDescription: Analyze a loop whose counter doubles after each iteration. Derive its asymptotic complexity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze a Loop Whose Counter Doubles\nDescription: Analyze a loop whose counter doubles after each iteration. Derive its asymptotic complexity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-a-loop-whose-counter-doubles-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-003",
    "slug": "analyze-two-nested-loops-where-both",
    "title": "Analyze Two Nested Loops Where Both",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 132,
    "statement": "### Problem Description\n\nAnalyze two nested loops where both counters run from 1 to N.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze Two Nested Loops Where Both\n * Description: Analyze two nested loops where both counters run from 1 to N.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze Two Nested Loops Where Both\n * Description: Analyze two nested loops where both counters run from 1 to N.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze Two Nested Loops Where Both\nDescription: Analyze two nested loops where both counters run from 1 to N.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze Two Nested Loops Where Both\nDescription: Analyze two nested loops where both counters run from 1 to N.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-two-nested-loops-where-both-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-004",
    "slug": "analyze-nested-loops-where-the-inner",
    "title": "Analyze Nested Loops Where the Inner",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 133,
    "statement": "### Problem Description\n\nAnalyze nested loops where the inner loop runs from 1 to the current outer-loop index.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze Nested Loops Where the Inner\n * Description: Analyze nested loops where the inner loop runs from 1 to the current outer-loop index.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze Nested Loops Where the Inner\n * Description: Analyze nested loops where the inner loop runs from 1 to the current outer-loop index.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze Nested Loops Where the Inner\nDescription: Analyze nested loops where the inner loop runs from 1 to the current outer-loop index.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze Nested Loops Where the Inner\nDescription: Analyze nested loops where the inner loop runs from 1 to the current outer-loop index.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-nested-loops-where-the-inner-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-005",
    "slug": "analyze-nested-loops-where-the-inner-2",
    "title": "Analyze Nested Loops Where the Inner",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 134,
    "statement": "### Problem Description\n\nAnalyze nested loops where the inner loop starts at the outer-loop index.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze Nested Loops Where the Inner\n * Description: Analyze nested loops where the inner loop starts at the outer-loop index.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze Nested Loops Where the Inner\n * Description: Analyze nested loops where the inner loop starts at the outer-loop index.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze Nested Loops Where the Inner\nDescription: Analyze nested loops where the inner loop starts at the outer-loop index.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze Nested Loops Where the Inner\nDescription: Analyze nested loops where the inner loop starts at the outer-loop index.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-nested-loops-where-the-inner-2-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-006",
    "slug": "compare-two-consecutive-loops-with-n",
    "title": "Compare Two Consecutive Loops with N",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 135,
    "statement": "### Problem Description\n\nCompare two consecutive loops with N and N² iterations.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Two Consecutive Loops with N\n * Description: Compare two consecutive loops with N and N² iterations.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Two Consecutive Loops with N\n * Description: Compare two consecutive loops with N and N² iterations.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare Two Consecutive Loops with N\nDescription: Compare two consecutive loops with N and N² iterations.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare Two Consecutive Loops with N\nDescription: Compare two consecutive loops with N and N² iterations.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "compare-two-consecutive-loops-with-n-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-007",
    "slug": "the-complexity-of-a-function-that",
    "title": "The Complexity of a Function That",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 136,
    "statement": "### Problem Description\n\nDetermine the complexity of a function that contains a loop followed by a nested loop.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Complexity of a Function That\n * Description: Determine the complexity of a function that contains a loop followed by a nested loop.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Complexity of a Function That\n * Description: Determine the complexity of a function that contains a loop followed by a nested loop.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: The Complexity of a Function That\nDescription: Determine the complexity of a function that contains a loop followed by a nested loop.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: The Complexity of a Function That\nDescription: Determine the complexity of a function that contains a loop followed by a nested loop.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "the-complexity-of-a-function-that-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-008",
    "slug": "analyze-a-loop-that-repeatedly-divides",
    "title": "Analyze a Loop That Repeatedly Divides",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 137,
    "statement": "### Problem Description\n\nAnalyze a loop that repeatedly divides N by 3.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze a Loop That Repeatedly Divides\n * Description: Analyze a loop that repeatedly divides N by 3.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze a Loop That Repeatedly Divides\n * Description: Analyze a loop that repeatedly divides N by 3.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze a Loop That Repeatedly Divides\nDescription: Analyze a loop that repeatedly divides N by 3.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze a Loop That Repeatedly Divides\nDescription: Analyze a loop that repeatedly divides N by 3.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-a-loop-that-repeatedly-divides-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-009",
    "slug": "analyze-a-loop-that-repeatedly-subtracts",
    "title": "Analyze a Loop That Repeatedly Subtracts",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 138,
    "statement": "### Problem Description\n\nAnalyze a loop that repeatedly subtracts an increasing counter from N.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze a Loop That Repeatedly Subtracts\n * Description: Analyze a loop that repeatedly subtracts an increasing counter from N.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze a Loop That Repeatedly Subtracts\n * Description: Analyze a loop that repeatedly subtracts an increasing counter from N.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze a Loop That Repeatedly Subtracts\nDescription: Analyze a loop that repeatedly subtracts an increasing counter from N.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze a Loop That Repeatedly Subtracts\nDescription: Analyze a loop that repeatedly subtracts an increasing counter from N.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-a-loop-that-repeatedly-subtracts-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-010",
    "slug": "recursive-function-that-calls-itself-once",
    "title": "Recursive Function That Calls Itself Once",
    "topic": "Time and space analysis",
    "tags": [
      "Recursion"
    ],
    "difficulty": "Easy",
    "order": 139,
    "statement": "### Problem Description\n\nGiven a recursive function that calls itself once with N−1, derive the recurrence and its solution.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Recursive Function That Calls Itself Once\n * Description: Given a recursive function that calls itself once with N−1, derive the recurrence and its solution.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Recursive Function That Calls Itself Once\n * Description: Given a recursive function that calls itself once with N−1, derive the recurrence and its solution.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Recursive Function That Calls Itself Once\nDescription: Given a recursive function that calls itself once with N−1, derive the recurrence and its solution.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Recursive Function That Calls Itself Once\nDescription: Given a recursive function that calls itself once with N−1, derive the recurrence and its solution.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "recursive-function-that-calls-itself-once-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-011",
    "slug": "analyze-a-recursive-function-that-makes",
    "title": "Analyze a Recursive Function That Makes",
    "topic": "Time and space analysis",
    "tags": [
      "Recursion"
    ],
    "difficulty": "Easy",
    "order": 140,
    "statement": "### Problem Description\n\nAnalyze a recursive function that makes two calls on N/2-sized inputs.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze a Recursive Function That Makes\n * Description: Analyze a recursive function that makes two calls on N/2-sized inputs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze a Recursive Function That Makes\n * Description: Analyze a recursive function that makes two calls on N/2-sized inputs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze a Recursive Function That Makes\nDescription: Analyze a recursive function that makes two calls on N/2-sized inputs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze a Recursive Function That Makes\nDescription: Analyze a recursive function that makes two calls on N/2-sized inputs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-a-recursive-function-that-makes-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-012",
    "slug": "analyze-a-recursive-function-that-makes-2",
    "title": "Analyze a Recursive Function That Makes",
    "topic": "Time and space analysis",
    "tags": [
      "Recursion"
    ],
    "difficulty": "Easy",
    "order": 141,
    "statement": "### Problem Description\n\nAnalyze a recursive function that makes two calls on N−1-sized inputs.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze a Recursive Function That Makes\n * Description: Analyze a recursive function that makes two calls on N−1-sized inputs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze a Recursive Function That Makes\n * Description: Analyze a recursive function that makes two calls on N−1-sized inputs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze a Recursive Function That Makes\nDescription: Analyze a recursive function that makes two calls on N−1-sized inputs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze a Recursive Function That Makes\nDescription: Analyze a recursive function that makes two calls on N−1-sized inputs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-a-recursive-function-that-makes-2-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-013",
    "slug": "derive-the-time-complexity-of-merge",
    "title": "Derive the Time Complexity of Merge",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 142,
    "statement": "### Problem Description\n\nDerive the time complexity of merge sort from its recurrence relation.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Derive the Time Complexity of Merge\n * Description: Derive the time complexity of merge sort from its recurrence relation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Derive the Time Complexity of Merge\n * Description: Derive the time complexity of merge sort from its recurrence relation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Derive the Time Complexity of Merge\nDescription: Derive the time complexity of merge sort from its recurrence relation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Derive the Time Complexity of Merge\nDescription: Derive the time complexity of merge sort from its recurrence relation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "derive-the-time-complexity-of-merge-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-014",
    "slug": "analyze-quicksort-when-partitions-are-balanced",
    "title": "Analyze Quicksort When Partitions Are Balanced",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 143,
    "statement": "### Problem Description\n\nAnalyze quicksort when partitions are balanced and when one partition contains almost all elements.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze Quicksort When Partitions Are Balanced\n * Description: Analyze quicksort when partitions are balanced and when one partition contains almost all elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze Quicksort When Partitions Are Balanced\n * Description: Analyze quicksort when partitions are balanced and when one partition contains almost all elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze Quicksort When Partitions Are Balanced\nDescription: Analyze quicksort when partitions are balanced and when one partition contains almost all elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze Quicksort When Partitions Are Balanced\nDescription: Analyze quicksort when partitions are balanced and when one partition contains almost all elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-quicksort-when-partitions-are-balanced-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-015",
    "slug": "analyze-recursive-fibonacci-with-and-without",
    "title": "Analyze Recursive Fibonacci with and Without",
    "topic": "Time and space analysis",
    "tags": [
      "Recursion",
      "Dynamic Programming",
      "Math"
    ],
    "difficulty": "Easy",
    "order": 144,
    "statement": "### Problem Description\n\nAnalyze recursive Fibonacci with and without memoization.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze Recursive Fibonacci with and Without\n * Description: Analyze recursive Fibonacci with and without memoization.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze Recursive Fibonacci with and Without\n * Description: Analyze recursive Fibonacci with and without memoization.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze Recursive Fibonacci with and Without\nDescription: Analyze recursive Fibonacci with and without memoization.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze Recursive Fibonacci with and Without\nDescription: Analyze recursive Fibonacci with and without memoization.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-recursive-fibonacci-with-and-without-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-016",
    "slug": "compare-the-time-and-auxiliary-space",
    "title": "Compare the Time and Auxiliary Space",
    "topic": "Time and space analysis",
    "tags": [
      "Recursion"
    ],
    "difficulty": "Easy",
    "order": 145,
    "statement": "### Problem Description\n\nCompare the time and auxiliary space complexity of iterative and recursive tree traversal.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare the Time and Auxiliary Space\n * Description: Compare the time and auxiliary space complexity of iterative and recursive tree traversal.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare the Time and Auxiliary Space\n * Description: Compare the time and auxiliary space complexity of iterative and recursive tree traversal.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare the Time and Auxiliary Space\nDescription: Compare the time and auxiliary space complexity of iterative and recursive tree traversal.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare the Time and Auxiliary Space\nDescription: Compare the time and auxiliary space complexity of iterative and recursive tree traversal.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "compare-the-time-and-auxiliary-space-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-017",
    "slug": "algorithm-that-allocates-a-two-dimensional-nn",
    "title": "Algorithm That Allocates a Two-dimensional N×N",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 146,
    "statement": "### Problem Description\n\nGiven an algorithm that allocates a two-dimensional N×N array, distinguish total memory usage from auxiliary space.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Algorithm That Allocates a Two-dimensional N×N\n * Description: Given an algorithm that allocates a two-dimensional N×N array, distinguish total memory usage from auxiliary space.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Algorithm That Allocates a Two-dimensional N×N\n * Description: Given an algorithm that allocates a two-dimensional N×N array, distinguish total memory usage from auxiliary space.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Algorithm That Allocates a Two-dimensional N×N\nDescription: Given an algorithm that allocates a two-dimensional N×N array, distinguish total memory usage from auxiliary space.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Algorithm That Allocates a Two-dimensional N×N\nDescription: Given an algorithm that allocates a two-dimensional N×N array, distinguish total memory usage from auxiliary space.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "algorithm-that-allocates-a-two-dimensional-nn-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-018",
    "slug": "analyze-the-expected-number-of-operations",
    "title": "Analyze the Expected Number of Operations",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 147,
    "statement": "### Problem Description\n\nAnalyze the expected number of operations in a hash table with uniform hashing and a bounded load factor.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze the Expected Number of Operations\n * Description: Analyze the expected number of operations in a hash table with uniform hashing and a bounded load factor.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze the Expected Number of Operations\n * Description: Analyze the expected number of operations in a hash table with uniform hashing and a bounded load factor.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze the Expected Number of Operations\nDescription: Analyze the expected number of operations in a hash table with uniform hashing and a bounded load factor.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze the Expected Number of Operations\nDescription: Analyze the expected number of operations in a hash table with uniform hashing and a bounded load factor.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-the-expected-number-of-operations-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-019",
    "slug": "compare-on-on-log-n-on",
    "title": "Compare O(N), O(N Log N), O(N²)",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 148,
    "statement": "### Problem Description\n\nCompare O(N), O(N log N), O(N²), O(2^N), and O(N!) for increasing input sizes. Determine the largest feasible N under a fixed operation budget.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare O(N), O(N Log N), O(N²)\n * Description: Compare O(N), O(N log N), O(N²), O(2^N), and O(N!) for increasing input sizes. Determine the largest feasible N under a fixed operation budget.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare O(N), O(N Log N), O(N²)\n * Description: Compare O(N), O(N log N), O(N²), O(2^N), and O(N!) for increasing input sizes. Determine the largest feasible N under a fixed operation budget.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare O(N), O(N Log N), O(N²)\nDescription: Compare O(N), O(N log N), O(N²), O(2^N), and O(N!) for increasing input sizes. Determine the largest feasible N under a fixed operation budget.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare O(N), O(N Log N), O(N²)\nDescription: Compare O(N), O(N log N), O(N²), O(2^N), and O(N!) for increasing input sizes. Determine the largest feasible N under a fixed operation budget.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "compare-on-on-log-n-on-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-020",
    "slug": "take-five-of-your-own-c",
    "title": "Take Five of Your Own C++",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 149,
    "statement": "### Problem Description\n\nTake five of your own C++ solutions and annotate each significant line with its time and space contribution.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Take Five of Your Own C++\n * Description: Take five of your own C++ solutions and annotate each significant line with its time and space contribution.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Take Five of Your Own C++\n * Description: Take five of your own C++ solutions and annotate each significant line with its time and space contribution.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Take Five of Your Own C++\nDescription: Take five of your own C++ solutions and annotate each significant line with its time and space contribution.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Take Five of Your Own C++\nDescription: Take five of your own C++ solutions and annotate each significant line with its time and space contribution.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "take-five-of-your-own-c-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-021",
    "slug": "algorithm-that-sorts-before-searching-determine",
    "title": "Algorithm That Sorts Before Searching, Determine",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 150,
    "statement": "### Problem Description\n\nGiven an algorithm that sorts before searching, determine its total complexity and identify when preprocessing is worthwhile.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Algorithm That Sorts Before Searching, Determine\n * Description: Given an algorithm that sorts before searching, determine its total complexity and identify when preprocessing is worthwhile.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Algorithm That Sorts Before Searching, Determine\n * Description: Given an algorithm that sorts before searching, determine its total complexity and identify when preprocessing is worthwhile.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Algorithm That Sorts Before Searching, Determine\nDescription: Given an algorithm that sorts before searching, determine its total complexity and identify when preprocessing is worthwhile.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Algorithm That Sorts Before Searching, Determine\nDescription: Given an algorithm that sorts before searching, determine its total complexity and identify when preprocessing is worthwhile.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "algorithm-that-sorts-before-searching-determine-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-022",
    "slug": "compare-two-algorithms-with-different-asymptotic",
    "title": "Compare Two Algorithms with Different Asymptotic",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 151,
    "statement": "### Problem Description\n\nCompare two algorithms with different asymptotic complexity but different constant factors on small input sizes.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Two Algorithms with Different Asymptotic\n * Description: Compare two algorithms with different asymptotic complexity but different constant factors on small input sizes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Two Algorithms with Different Asymptotic\n * Description: Compare two algorithms with different asymptotic complexity but different constant factors on small input sizes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare Two Algorithms with Different Asymptotic\nDescription: Compare two algorithms with different asymptotic complexity but different constant factors on small input sizes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare Two Algorithms with Different Asymptotic\nDescription: Compare two algorithms with different asymptotic complexity but different constant factors on small input sizes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "compare-two-algorithms-with-different-asymptotic-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-023",
    "slug": "prove-that-a-nested-loop-is",
    "title": "Prove That a Nested Loop Is",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 152,
    "statement": "### Problem Description\n\nProve that a nested loop is O(N²) but also determine whether it is Θ(N²) or has a tighter bound.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That a Nested Loop Is\n * Description: Prove that a nested loop is O(N²) but also determine whether it is Θ(N²) or has a tighter bound.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That a Nested Loop Is\n * Description: Prove that a nested loop is O(N²) but also determine whether it is Θ(N²) or has a tighter bound.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Prove That a Nested Loop Is\nDescription: Prove that a nested loop is O(N²) but also determine whether it is Θ(N²) or has a tighter bound.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Prove That a Nested Loop Is\nDescription: Prove that a nested loop is O(N²) but also determine whether it is Θ(N²) or has a tighter bound.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "prove-that-a-nested-loop-is-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-024",
    "slug": "recursive-algorithm-with-memoization-identify-overlapping",
    "title": "Recursive Algorithm with Memoization, Identify Overlapping",
    "topic": "Time and space analysis",
    "tags": [
      "Recursion",
      "Dynamic Programming"
    ],
    "difficulty": "Medium",
    "order": 153,
    "statement": "### Problem Description\n\nGiven a recursive algorithm with memoization, identify overlapping subproblems and calculate the number of distinct states.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Recursive Algorithm with Memoization, Identify Overlapping\n * Description: Given a recursive algorithm with memoization, identify overlapping subproblems and calculate the number of distinct states.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Recursive Algorithm with Memoization, Identify Overlapping\n * Description: Given a recursive algorithm with memoization, identify overlapping subproblems and calculate the number of distinct states.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Recursive Algorithm with Memoization, Identify Overlapping\nDescription: Given a recursive algorithm with memoization, identify overlapping subproblems and calculate the number of distinct states.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Recursive Algorithm with Memoization, Identify Overlapping\nDescription: Given a recursive algorithm with memoization, identify overlapping subproblems and calculate the number of distinct states.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "recursive-algorithm-with-memoization-identify-overlapping-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-025",
    "slug": "for-a-problem-with-strict-memory",
    "title": "For a Problem with Strict Memory",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 154,
    "statement": "### Problem Description\n\nFor a problem with strict memory constraints, redesign an algorithm to trade additional computation for reduced auxiliary space.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Time and space analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Time and space analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: For a Problem with Strict Memory\n * Description: For a problem with strict memory constraints, redesign an algorithm to trade additional computation for reduced auxiliary space.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: For a Problem with Strict Memory\n * Description: For a problem with strict memory constraints, redesign an algorithm to trade additional computation for reduced auxiliary space.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: For a Problem with Strict Memory\nDescription: For a problem with strict memory constraints, redesign an algorithm to trade additional computation for reduced auxiliary space.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: For a Problem with Strict Memory\nDescription: For a problem with strict memory constraints, redesign an algorithm to trade additional computation for reduced auxiliary space.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "for-a-problem-with-strict-memory-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-001",
    "slug": "write-a-loop-invariant-for-finding",
    "title": "Write a Loop Invariant for Finding",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 155,
    "statement": "### Problem Description\n\nWrite a loop invariant for finding the maximum element in an array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Write a Loop Invariant for Finding\n * Description: Write a loop invariant for finding the maximum element in an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Write a Loop Invariant for Finding\n * Description: Write a loop invariant for finding the maximum element in an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Write a Loop Invariant for Finding\nDescription: Write a loop invariant for finding the maximum element in an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Write a Loop Invariant for Finding\nDescription: Write a loop invariant for finding the maximum element in an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "write-a-loop-invariant-for-finding-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-002",
    "slug": "prove-that-binary-search-returns",
    "title": "Prove That Binary Search Returns",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 156,
    "statement": "### Problem Description\n\nProve that binary search returns the target index when it exists.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That Binary Search Returns\n * Description: Prove that binary search returns the target index when it exists.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That Binary Search Returns\n * Description: Prove that binary search returns the target index when it exists.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Prove That Binary Search Returns\nDescription: Prove that binary search returns the target index when it exists.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Prove That Binary Search Returns\nDescription: Prove that binary search returns the target index when it exists.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "prove-that-binary-search-returns-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-003",
    "slug": "prove-that-an-in-place-array-reversal",
    "title": "Prove That an In-place Array Reversal",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "In-Place"
    ],
    "difficulty": "Warm-up",
    "order": 157,
    "statement": "### Problem Description\n\nProve that an in-place array reversal produces the reversed array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That an In-place Array Reversal\n * Description: Prove that an in-place array reversal produces the reversed array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That an In-place Array Reversal\n * Description: Prove that an in-place array reversal produces the reversed array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Prove That an In-place Array Reversal\nDescription: Prove that an in-place array reversal produces the reversed array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Prove That an In-place Array Reversal\nDescription: Prove that an in-place array reversal produces the reversed array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "prove-that-an-in-place-array-reversal-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-004",
    "slug": "prove-that-insertion-sort-maintains",
    "title": "Prove That Insertion Sort Maintains",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 158,
    "statement": "### Problem Description\n\nProve that insertion sort maintains a sorted prefix after every iteration.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That Insertion Sort Maintains\n * Description: Prove that insertion sort maintains a sorted prefix after every iteration.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That Insertion Sort Maintains\n * Description: Prove that insertion sort maintains a sorted prefix after every iteration.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Prove That Insertion Sort Maintains\nDescription: Prove that insertion sort maintains a sorted prefix after every iteration.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Prove That Insertion Sort Maintains\nDescription: Prove that insertion sort maintains a sorted prefix after every iteration.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "prove-that-insertion-sort-maintains-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-005",
    "slug": "prove-that-a-two-pointer-solution",
    "title": "Prove That a Two-pointer Solution",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 159,
    "statement": "### Problem Description\n\nProve that a two-pointer solution for finding a pair with a target sum in a sorted array does not discard a valid solution.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That a Two-pointer Solution\n * Description: Prove that a two-pointer solution for finding a pair with a target sum in a sorted array does not discard a valid solution.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That a Two-pointer Solution\n * Description: Prove that a two-pointer solution for finding a pair with a target sum in a sorted array does not discard a valid solution.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Prove That a Two-pointer Solution\nDescription: Prove that a two-pointer solution for finding a pair with a target sum in a sorted array does not discard a valid solution.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Prove That a Two-pointer Solution\nDescription: Prove that a two-pointer solution for finding a pair with a target sum in a sorted array does not discard a valid solution.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "prove-that-a-two-pointer-solution-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-006",
    "slug": "use-the-potential-method-to-analyze",
    "title": "Use the Potential Method to Analyze",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 160,
    "statement": "### Problem Description\n\nUse the potential method to analyze a dynamic array that doubles its capacity.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use the Potential Method to Analyze\n * Description: Use the potential method to analyze a dynamic array that doubles its capacity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use the Potential Method to Analyze\n * Description: Use the potential method to analyze a dynamic array that doubles its capacity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Use the Potential Method to Analyze\nDescription: Use the potential method to analyze a dynamic array that doubles its capacity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Use the Potential Method to Analyze\nDescription: Use the potential method to analyze a dynamic array that doubles its capacity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "use-the-potential-method-to-analyze-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-007",
    "slug": "explain-why-n-appends-to",
    "title": "Explain Why N Appends to",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 161,
    "statement": "### Problem Description\n\nExplain why N appends to a dynamic array can take O(N) total time even though some individual appends take O(N).\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why N Appends to\n * Description: Explain why N appends to a dynamic array can take O(N) total time even though some individual appends take O(N).\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why N Appends to\n * Description: Explain why N appends to a dynamic array can take O(N) total time even though some individual appends take O(N).\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Explain Why N Appends to\nDescription: Explain why N appends to a dynamic array can take O(N) total time even though some individual appends take O(N).\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Explain Why N Appends to\nDescription: Explain why N appends to a dynamic array can take O(N) total time even though some individual appends take O(N).\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "explain-why-n-appends-to-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-008",
    "slug": "analyze-the-amortized-complexity-of",
    "title": "Analyze the Amortized Complexity of",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 162,
    "statement": "### Problem Description\n\nAnalyze the amortized complexity of a stack implemented using two queues.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze the Amortized Complexity of\n * Description: Analyze the amortized complexity of a stack implemented using two queues.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Analyze the Amortized Complexity of\n * Description: Analyze the amortized complexity of a stack implemented using two queues.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Analyze the Amortized Complexity of\nDescription: Analyze the amortized complexity of a stack implemented using two queues.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Analyze the Amortized Complexity of\nDescription: Analyze the amortized complexity of a stack implemented using two queues.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "analyze-the-amortized-complexity-of-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-009",
    "slug": "prove-that-each-element-enters",
    "title": "Prove That Each Element Enters",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 163,
    "statement": "### Problem Description\n\nProve that each element enters and leaves a monotonic stack at most once.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That Each Element Enters\n * Description: Prove that each element enters and leaves a monotonic stack at most once.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That Each Element Enters\n * Description: Prove that each element enters and leaves a monotonic stack at most once.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Prove That Each Element Enters\nDescription: Prove that each element enters and leaves a monotonic stack at most once.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Prove That Each Element Enters\nDescription: Prove that each element enters and leaves a monotonic stack at most once.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "prove-that-each-element-enters-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-010",
    "slug": "establish-a-termination-condition-for",
    "title": "Establish a Termination Condition for",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 164,
    "statement": "### Problem Description\n\nEstablish a termination condition for a binary search on an answer space.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Establish a Termination Condition for\n * Description: Establish a termination condition for a binary search on an answer space.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Establish a Termination Condition for\n * Description: Establish a termination condition for a binary search on an answer space.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Establish a Termination Condition for\nDescription: Establish a termination condition for a binary search on an answer space.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Establish a Termination Condition for\nDescription: Establish a termination condition for a binary search on an answer space.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "establish-a-termination-condition-for-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-011",
    "slug": "greedy-algorithm-identify-the-invariant",
    "title": "Greedy Algorithm, Identify the Invariant",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 165,
    "statement": "### Problem Description\n\nGiven a greedy algorithm, identify the invariant or exchange argument needed to prove its correctness.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Greedy Algorithm, Identify the Invariant\n * Description: Given a greedy algorithm, identify the invariant or exchange argument needed to prove its correctness.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Greedy Algorithm, Identify the Invariant\n * Description: Given a greedy algorithm, identify the invariant or exchange argument needed to prove its correctness.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Greedy Algorithm, Identify the Invariant\nDescription: Given a greedy algorithm, identify the invariant or exchange argument needed to prove its correctness.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Greedy Algorithm, Identify the Invariant\nDescription: Given a greedy algorithm, identify the invariant or exchange argument needed to prove its correctness.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "greedy-algorithm-identify-the-invariant-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-012",
    "slug": "algorithm-that-works-on-typical-inputs",
    "title": "Algorithm That Works on Typical Inputs",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 166,
    "statement": "### Problem Description\n\nGiven an algorithm that works on typical inputs but fails on a boundary case, construct a counterexample and repair the algorithm.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Algorithm That Works on Typical Inputs\n * Description: Given an algorithm that works on typical inputs but fails on a boundary case, construct a counterexample and repair the algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Algorithm That Works on Typical Inputs\n * Description: Given an algorithm that works on typical inputs but fails on a boundary case, construct a counterexample and repair the algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Algorithm That Works on Typical Inputs\nDescription: Given an algorithm that works on typical inputs but fails on a boundary case, construct a counterexample and repair the algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Algorithm That Works on Typical Inputs\nDescription: Given an algorithm that works on typical inputs but fails on a boundary case, construct a counterexample and repair the algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "algorithm-that-works-on-typical-inputs-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p2-013",
    "slug": "compare-worst-case-average-case-expected-and-amortized",
    "title": "Compare Worst-case, Average-case, Expected, and Amortized",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 167,
    "statement": "### Problem Description\n\nCompare worst-case, average-case, expected, and amortized complexity for a hash table and a dynamic array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
    "examples": [
      {
        "input": "Standard input case as specified in the problem statement",
        "output": "Corresponding expected output adhering to the required format",
        "explanation": "Step-by-step verification of the expected algorithmic invariants on this input."
      }
    ],
    "constraints": [
      "Standard integer bounds: 32-bit signed integer or input range [1, 10^5].",
      "Time complexity target: O(N) or O(N log N) where applicable.",
      "Auxiliary space target: O(1) or minimal auxiliary memory."
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Correctness, invariants, and amortized analysis. What property remains true across each state transition?"
      },
      {
        "level": 2,
        "title": "Algorithmic Pattern",
        "content": "Consider which foundational pattern applies: two pointers, sliding window boundaries, monotonic stack/queue pruning, prefix accumulators, or a recurrence relation."
      },
      {
        "level": 3,
        "title": "Edge Cases & Bounds",
        "content": "Carefully inspect corner conditions: empty collections, singletons, duplicate keys, negative numbers, and potential integer overflow."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Enumerate all candidate combinations or brute-force states, verifying conditions sequentially.",
        "timeComplexity": "O(N^2) or O(2^N)",
        "spaceComplexity": "O(1) auxiliary"
      },
      "optimal": {
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Correctness, invariants, and amortized analysis eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
        "algorithm": "Initialize required tracking pointers and accumulators, traverse input elements maintaining optimal invariants, and emit the final structured result.",
        "steps": [
          {
            "title": "Step 1 — Input & State Setup",
            "content": "Parse inputs, initialize bounds and auxiliary tracking structures."
          },
          {
            "title": "Step 2 — Invariant Traversal",
            "content": "Execute the core transformation or search maintaining invariants across iterations."
          },
          {
            "title": "Step 3 — Result Generation",
            "content": "Emit formatted output or return final calculated scalar/array."
          }
        ],
        "timeComplexity": "O(N) or O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Worst-case, Average-case, Expected, and Amortized\n * Description: Compare worst-case, average-case, expected, and amortized complexity for a hash table and a dynamic array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Worst-case, Average-case, Expected, and Amortized\n * Description: Compare worst-case, average-case, expected, and amortized complexity for a hash table and a dynamic array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare Worst-case, Average-case, Expected, and Amortized\nDescription: Compare worst-case, average-case, expected, and amortized complexity for a hash table and a dynamic array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare Worst-case, Average-case, Expected, and Amortized\nDescription: Compare worst-case, average-case, expected, and amortized complexity for a hash table and a dynamic array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "compare-worst-case-average-case-expected-and-amortized-tc-1",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "Sample baseline test case."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  }
];
