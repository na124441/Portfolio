import type { DsaProblem } from '@/types/dsa-question';

export const PHASE_4_PROBLEMS: DsaProblem[] = [
  {
    "id": "dsa-p4-001",
    "slug": "implement-linear-search-and-return-the-first",
    "title": "Implement Linear Search and Return the First",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 206,
    "statement": "### Problem Description\n\nImplement linear search and return the first occurrence of a target.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Linear Search and Return the First\n * Description: Implement linear search and return the first occurrence of a target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Linear Search and Return the First\n * Description: Implement linear search and return the first occurrence of a target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Linear Search and Return the First\nDescription: Implement linear search and return the first occurrence of a target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Linear Search and Return the First\nDescription: Implement linear search and return the first occurrence of a target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-linear-search-and-return-the-first-tc-1",
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
    "id": "dsa-p4-002",
    "slug": "modify-linear-search-to-return",
    "title": "Modify Linear Search to Return",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 207,
    "statement": "### Problem Description\n\nModify linear search to return the last occurrence of a target.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Linear Search to Return\n * Description: Modify linear search to return the last occurrence of a target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Linear Search to Return\n * Description: Modify linear search to return the last occurrence of a target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Modify Linear Search to Return\nDescription: Modify linear search to return the last occurrence of a target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Modify Linear Search to Return\nDescription: Modify linear search to return the last occurrence of a target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "modify-linear-search-to-return-tc-1",
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
    "id": "dsa-p4-003",
    "slug": "sorted-array-implement-iterative-binary-search",
    "title": "Sorted Array, Implement Iterative Binary Search",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 208,
    "statement": "### Problem Description\n\nGiven a sorted array, implement iterative binary search.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sorted Array, Implement Iterative Binary Search\n * Description: Given a sorted array, implement iterative binary search.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sorted Array, Implement Iterative Binary Search\n * Description: Given a sorted array, implement iterative binary search.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sorted Array, Implement Iterative Binary Search\nDescription: Given a sorted array, implement iterative binary search.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sorted Array, Implement Iterative Binary Search\nDescription: Given a sorted array, implement iterative binary search.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "sorted-array-implement-iterative-binary-search-tc-1",
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
    "id": "dsa-p4-004",
    "slug": "implement-recursive-binary-search-and-compare",
    "title": "Implement Recursive Binary Search and Compare",
    "topic": "Linear and binary search",
    "tags": [
      "Recursion"
    ],
    "difficulty": "Warm-up",
    "order": 209,
    "statement": "### Problem Description\n\nImplement recursive binary search and compare its auxiliary space with the iterative version.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Recursive Binary Search and Compare\n * Description: Implement recursive binary search and compare its auxiliary space with the iterative version.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Recursive Binary Search and Compare\n * Description: Implement recursive binary search and compare its auxiliary space with the iterative version.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Recursive Binary Search and Compare\nDescription: Implement recursive binary search and compare its auxiliary space with the iterative version.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Recursive Binary Search and Compare\nDescription: Implement recursive binary search and compare its auxiliary space with the iterative version.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-recursive-binary-search-and-compare-tc-1",
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
    "id": "dsa-p4-005",
    "slug": "binary-search-on-an-array",
    "title": "Binary Search on an Array",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 210,
    "statement": "### Problem Description\n\nTrace binary search on an array of even and odd lengths, including cases where the target is absent.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Search on an Array\n * Description: Trace binary search on an array of even and odd lengths, including cases where the target is absent.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Search on an Array\n * Description: Trace binary search on an array of even and odd lengths, including cases where the target is absent.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Binary Search on an Array\nDescription: Trace binary search on an array of even and odd lengths, including cases where the target is absent.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Binary Search on an Array\nDescription: Trace binary search on an array of even and odd lengths, including cases where the target is absent.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "binary-search-on-an-array-tc-1",
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
    "id": "dsa-p4-006",
    "slug": "implement-lower-bound-return-the-first-index",
    "title": "Implement Lower Bound: Return the First Index",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 211,
    "statement": "### Problem Description\n\nImplement lower bound: return the first index whose value is greater than or equal to a target.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Lower Bound: Return the First Index\n * Description: Implement lower bound: return the first index whose value is greater than or equal to a target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Lower Bound: Return the First Index\n * Description: Implement lower bound: return the first index whose value is greater than or equal to a target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Lower Bound: Return the First Index\nDescription: Implement lower bound: return the first index whose value is greater than or equal to a target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Lower Bound: Return the First Index\nDescription: Implement lower bound: return the first index whose value is greater than or equal to a target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-lower-bound-return-the-first-index-tc-1",
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
    "id": "dsa-p4-007",
    "slug": "implement-upper-bound-return-the-first-index",
    "title": "Implement Upper Bound: Return the First Index",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 212,
    "statement": "### Problem Description\n\nImplement upper bound: return the first index whose value is strictly greater than a target.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Upper Bound: Return the First Index\n * Description: Implement upper bound: return the first index whose value is strictly greater than a target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Upper Bound: Return the First Index\n * Description: Implement upper bound: return the first index whose value is strictly greater than a target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Upper Bound: Return the First Index\nDescription: Implement upper bound: return the first index whose value is strictly greater than a target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Upper Bound: Return the First Index\nDescription: Implement upper bound: return the first index whose value is strictly greater than a target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-upper-bound-return-the-first-index-tc-1",
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
    "id": "dsa-p4-008",
    "slug": "first-and-last-occurrence-of",
    "title": "First and Last Occurrence of",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 213,
    "statement": "### Problem Description\n\nFind the first and last occurrence of a target in a sorted array containing duplicates.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: First and Last Occurrence of\n * Description: Find the first and last occurrence of a target in a sorted array containing duplicates.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: First and Last Occurrence of\n * Description: Find the first and last occurrence of a target in a sorted array containing duplicates.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: First and Last Occurrence of\nDescription: Find the first and last occurrence of a target in a sorted array containing duplicates.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: First and Last Occurrence of\nDescription: Find the first and last occurrence of a target in a sorted array containing duplicates.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "first-and-last-occurrence-of-tc-1",
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
    "id": "dsa-p4-009",
    "slug": "count-occurrences-of-a-target-using-two",
    "title": "Count Occurrences of a Target Using Two",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 214,
    "statement": "### Problem Description\n\nCount the occurrences of a target using two binary searches.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Occurrences of a Target Using Two\n * Description: Count the occurrences of a target using two binary searches.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Occurrences of a Target Using Two\n * Description: Count the occurrences of a target using two binary searches.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count Occurrences of a Target Using Two\nDescription: Count the occurrences of a target using two binary searches.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count Occurrences of a Target Using Two\nDescription: Count the occurrences of a target using two binary searches.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "count-occurrences-of-a-target-using-two-tc-1",
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
    "id": "dsa-p4-010",
    "slug": "insertion-position-of-a-target",
    "title": "Insertion Position of a Target",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 215,
    "statement": "### Problem Description\n\nFind the insertion position of a target in a sorted array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Insertion Position of a Target\n * Description: Find the insertion position of a target in a sorted array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Insertion Position of a Target\n * Description: Find the insertion position of a target in a sorted array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Insertion Position of a Target\nDescription: Find the insertion position of a target in a sorted array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Insertion Position of a Target\nDescription: Find the insertion position of a target in a sorted array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "insertion-position-of-a-target-tc-1",
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
    "id": "dsa-p4-011",
    "slug": "smallest-element-in-a-rotated-sorted",
    "title": "Smallest Element in a Rotated Sorted",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 216,
    "statement": "### Problem Description\n\nFind the smallest element in a rotated sorted array without duplicates.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Smallest Element in a Rotated Sorted\n * Description: Find the smallest element in a rotated sorted array without duplicates.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Smallest Element in a Rotated Sorted\n * Description: Find the smallest element in a rotated sorted array without duplicates.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Smallest Element in a Rotated Sorted\nDescription: Find the smallest element in a rotated sorted array without duplicates.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Smallest Element in a Rotated Sorted\nDescription: Find the smallest element in a rotated sorted array without duplicates.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "smallest-element-in-a-rotated-sorted-tc-1",
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
    "id": "dsa-p4-012",
    "slug": "number-of-times-a-sorted-array",
    "title": "Number of Times a Sorted Array",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 217,
    "statement": "### Problem Description\n\nFind the number of times a sorted array has been rotated.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Number of Times a Sorted Array\n * Description: Find the number of times a sorted array has been rotated.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Number of Times a Sorted Array\n * Description: Find the number of times a sorted array has been rotated.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Number of Times a Sorted Array\nDescription: Find the number of times a sorted array has been rotated.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Number of Times a Sorted Array\nDescription: Find the number of times a sorted array has been rotated.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "number-of-times-a-sorted-array-tc-1",
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
    "id": "dsa-p4-013",
    "slug": "search-for-a-target-in",
    "title": "Search for a Target in",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 218,
    "statement": "### Problem Description\n\nSearch for a target in a rotated sorted array without duplicates.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search for a Target in\n * Description: Search for a target in a rotated sorted array without duplicates.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search for a Target in\n * Description: Search for a target in a rotated sorted array without duplicates.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Search for a Target in\nDescription: Search for a target in a rotated sorted array without duplicates.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Search for a Target in\nDescription: Search for a target in a rotated sorted array without duplicates.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "search-for-a-target-in-tc-1",
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
    "id": "dsa-p4-014",
    "slug": "rotated-array-search-to-handle-duplicates",
    "title": "Rotated-array Search to Handle Duplicates",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 219,
    "statement": "### Problem Description\n\nExtend rotated-array search to handle duplicates.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Rotated-array Search to Handle Duplicates\n * Description: Extend rotated-array search to handle duplicates.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Rotated-array Search to Handle Duplicates\n * Description: Extend rotated-array search to handle duplicates.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Rotated-array Search to Handle Duplicates\nDescription: Extend rotated-array search to handle duplicates.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Rotated-array Search to Handle Duplicates\nDescription: Extend rotated-array search to handle duplicates.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "rotated-array-search-to-handle-duplicates-tc-1",
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
    "id": "dsa-p4-015",
    "slug": "search-for-a-target-in-2",
    "title": "Search for a Target in",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 220,
    "statement": "### Problem Description\n\nSearch for a target in an infinite sorted array where the length is not initially known.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search for a Target in\n * Description: Search for a target in an infinite sorted array where the length is not initially known.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search for a Target in\n * Description: Search for a target in an infinite sorted array where the length is not initially known.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Search for a Target in\nDescription: Search for a target in an infinite sorted array where the length is not initially known.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Search for a Target in\nDescription: Search for a target in an infinite sorted array where the length is not initially known.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "search-for-a-target-in-2-tc-1",
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
    "id": "dsa-p4-016",
    "slug": "an-element-in-a-bitonic-array",
    "title": "An Element in a Bitonic Array",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 221,
    "statement": "### Problem Description\n\nFind an element in a bitonic array that first increases and then decreases.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: An Element in a Bitonic Array\n * Description: Find an element in a bitonic array that first increases and then decreases.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: An Element in a Bitonic Array\n * Description: Find an element in a bitonic array that first increases and then decreases.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: An Element in a Bitonic Array\nDescription: Find an element in a bitonic array that first increases and then decreases.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: An Element in a Bitonic Array\nDescription: Find an element in a bitonic array that first increases and then decreases.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "an-element-in-a-bitonic-array-tc-1",
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
    "id": "dsa-p4-017",
    "slug": "search-for-a-target-in-3",
    "title": "Search for a Target in",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 222,
    "statement": "### Problem Description\n\nSearch for a target in a two-dimensional matrix whose rows and columns are sorted.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search for a Target in\n * Description: Search for a target in a two-dimensional matrix whose rows and columns are sorted.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search for a Target in\n * Description: Search for a target in a two-dimensional matrix whose rows and columns are sorted.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Search for a Target in\nDescription: Search for a target in a two-dimensional matrix whose rows and columns are sorted.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Search for a Target in\nDescription: Search for a target in a two-dimensional matrix whose rows and columns are sorted.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "search-for-a-target-in-3-tc-1",
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
    "id": "dsa-p4-018",
    "slug": "search-in-a-matrix-where-each",
    "title": "Search in a Matrix Where Each",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 223,
    "statement": "### Problem Description\n\nSearch in a matrix where each row is sorted and the first element of each row is greater than the last element of the previous row.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linear and binary search. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linear and binary search eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search in a Matrix Where Each\n * Description: Search in a matrix where each row is sorted and the first element of each row is greater than the last element of the previous row.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search in a Matrix Where Each\n * Description: Search in a matrix where each row is sorted and the first element of each row is greater than the last element of the previous row.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Search in a Matrix Where Each\nDescription: Search in a matrix where each row is sorted and the first element of each row is greater than the last element of the previous row.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Search in a Matrix Where Each\nDescription: Search in a matrix where each row is sorted and the first element of each row is greater than the last element of the previous row.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "search-in-a-matrix-where-each-tc-1",
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
    "id": "dsa-p4-001",
    "slug": "sorted-array-of-integers-find",
    "title": "Sorted Array of Integers, Find",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 224,
    "statement": "### Problem Description\n\nGiven a sorted array of integers, find the integer square root without using a square-root function.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sorted Array of Integers, Find\n * Description: Given a sorted array of integers, find the integer square root without using a square-root function.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sorted Array of Integers, Find\n * Description: Given a sorted array of integers, find the integer square root without using a square-root function.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sorted Array of Integers, Find\nDescription: Given a sorted array of integers, find the integer square root without using a square-root function.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sorted Array of Integers, Find\nDescription: Given a sorted array of integers, find the integer square root without using a square-root function.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "sorted-array-of-integers-find-tc-1",
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
    "id": "dsa-p4-002",
    "slug": "smallest-positive-integer-whose-square-is",
    "title": "Smallest Positive Integer Whose Square Is",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 225,
    "statement": "### Problem Description\n\nFind the smallest positive integer whose square is greater than or equal to a given number, avoiding overflow.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Smallest Positive Integer Whose Square Is\n * Description: Find the smallest positive integer whose square is greater than or equal to a given number, avoiding overflow.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Smallest Positive Integer Whose Square Is\n * Description: Find the smallest positive integer whose square is greater than or equal to a given number, avoiding overflow.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Smallest Positive Integer Whose Square Is\nDescription: Find the smallest positive integer whose square is greater than or equal to a given number, avoiding overflow.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Smallest Positive Integer Whose Square Is\nDescription: Find the smallest positive integer whose square is greater than or equal to a given number, avoiding overflow.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "smallest-positive-integer-whose-square-is-tc-1",
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
    "id": "dsa-p4-003",
    "slug": "set-of-machine-speeds-and",
    "title": "Set of Machine Speeds and",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 226,
    "statement": "### Problem Description\n\nGiven a set of machine speeds and a required production quantity, find the minimum time needed to complete the work.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Set of Machine Speeds and\n * Description: Given a set of machine speeds and a required production quantity, find the minimum time needed to complete the work.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Set of Machine Speeds and\n * Description: Given a set of machine speeds and a required production quantity, find the minimum time needed to complete the work.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Set of Machine Speeds and\nDescription: Given a set of machine speeds and a required production quantity, find the minimum time needed to complete the work.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Set of Machine Speeds and\nDescription: Given a set of machine speeds and a required production quantity, find the minimum time needed to complete the work.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "set-of-machine-speeds-and-tc-1",
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
    "id": "dsa-p4-004",
    "slug": "n-piles-of-bananas-and-h",
    "title": "N Piles of Bananas and H",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 227,
    "statement": "### Problem Description\n\nGiven N piles of bananas and H hours, find the minimum eating speed that allows all piles to be finished in time.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: N Piles of Bananas and H\n * Description: Given N piles of bananas and H hours, find the minimum eating speed that allows all piles to be finished in time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: N Piles of Bananas and H\n * Description: Given N piles of bananas and H hours, find the minimum eating speed that allows all piles to be finished in time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: N Piles of Bananas and H\nDescription: Given N piles of bananas and H hours, find the minimum eating speed that allows all piles to be finished in time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: N Piles of Bananas and H\nDescription: Given N piles of bananas and H hours, find the minimum eating speed that allows all piles to be finished in time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "n-piles-of-bananas-and-h-tc-1",
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
    "id": "dsa-p4-005",
    "slug": "array-of-book-page-counts",
    "title": "Array of Book Page Counts",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 228,
    "statement": "### Problem Description\n\nGiven an array of book page counts and K students, minimize the maximum number of pages assigned to any student while preserving contiguous allocation.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array of Book Page Counts\n * Description: Given an array of book page counts and K students, minimize the maximum number of pages assigned to any student while preserving contiguous allocation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array of Book Page Counts\n * Description: Given an array of book page counts and K students, minimize the maximum number of pages assigned to any student while preserving contiguous allocation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array of Book Page Counts\nDescription: Given an array of book page counts and K students, minimize the maximum number of pages assigned to any student while preserving contiguous allocation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array of Book Page Counts\nDescription: Given an array of book page counts and K students, minimize the maximum number of pages assigned to any student while preserving contiguous allocation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "array-of-book-page-counts-tc-1",
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
    "id": "dsa-p4-006",
    "slug": "n-packages-and-d-days-minimize",
    "title": "N Packages and D Days, Minimize",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 229,
    "statement": "### Problem Description\n\nGiven N packages and D days, minimize the ship capacity needed to deliver all packages within D days.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: N Packages and D Days, Minimize\n * Description: Given N packages and D days, minimize the ship capacity needed to deliver all packages within D days.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: N Packages and D Days, Minimize\n * Description: Given N packages and D days, minimize the ship capacity needed to deliver all packages within D days.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: N Packages and D Days, Minimize\nDescription: Given N packages and D days, minimize the ship capacity needed to deliver all packages within D days.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: N Packages and D Days, Minimize\nDescription: Given N packages and D days, minimize the ship capacity needed to deliver all packages within D days.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "n-packages-and-d-days-minimize-tc-1",
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
    "id": "dsa-p4-007",
    "slug": "place-k-objects-at-positions",
    "title": "Place K Objects At Positions",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 230,
    "statement": "### Problem Description\n\nPlace K objects at positions on a line to maximize the minimum distance between any two objects.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Place K Objects At Positions\n * Description: Place K objects at positions on a line to maximize the minimum distance between any two objects.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Place K Objects At Positions\n * Description: Place K objects at positions on a line to maximize the minimum distance between any two objects.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Place K Objects At Positions\nDescription: Place K objects at positions on a line to maximize the minimum distance between any two objects.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Place K Objects At Positions\nDescription: Place K objects at positions on a line to maximize the minimum distance between any two objects.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "place-k-objects-at-positions-tc-1",
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
    "id": "dsa-p4-008",
    "slug": "array-and-a-number-k-split",
    "title": "Array and a Number K, Split",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 231,
    "statement": "### Problem Description\n\nGiven an array and a number K, split the array into K nonempty contiguous segments to minimize the maximum segment sum.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array and a Number K, Split\n * Description: Given an array and a number K, split the array into K nonempty contiguous segments to minimize the maximum segment sum.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array and a Number K, Split\n * Description: Given an array and a number K, split the array into K nonempty contiguous segments to minimize the maximum segment sum.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array and a Number K, Split\nDescription: Given an array and a number K, split the array into K nonempty contiguous segments to minimize the maximum segment sum.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array and a Number K, Split\nDescription: Given an array and a number K, split the array into K nonempty contiguous segments to minimize the maximum segment sum.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "array-and-a-number-k-split-tc-1",
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
    "id": "dsa-p4-009",
    "slug": "median-of-two-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 232,
    "statement": "### Problem Description\n\nFind the median of two sorted arrays in O(log(min(N, M))) time.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Median of Two Sorted Arrays\n * Description: Find the median of two sorted arrays in O(log(min(N, M))) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Median of Two Sorted Arrays\n * Description: Find the median of two sorted arrays in O(log(min(N, M))) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Median of Two Sorted Arrays\nDescription: Find the median of two sorted arrays in O(log(min(N, M))) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Median of Two Sorted Arrays\nDescription: Find the median of two sorted arrays in O(log(min(N, M))) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "median-of-two-sorted-arrays-tc-1",
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
    "id": "dsa-p4-010",
    "slug": "sorted-array-of-unknown-length-find",
    "title": "Sorted Array of Unknown Length, Find",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 233,
    "statement": "### Problem Description\n\nGiven a sorted array of unknown length, find the first position where a monotonic predicate becomes true.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sorted Array of Unknown Length, Find\n * Description: Given a sorted array of unknown length, find the first position where a monotonic predicate becomes true.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sorted Array of Unknown Length, Find\n * Description: Given a sorted array of unknown length, find the first position where a monotonic predicate becomes true.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sorted Array of Unknown Length, Find\nDescription: Given a sorted array of unknown length, find the first position where a monotonic predicate becomes true.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sorted Array of Unknown Length, Find\nDescription: Given a sorted array of unknown length, find the first position where a monotonic predicate becomes true.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "sorted-array-of-unknown-length-find-tc-1",
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
    "id": "dsa-p4-011",
    "slug": "function-that-returns-true-for-all",
    "title": "Function That Returns True for All",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 234,
    "statement": "### Problem Description\n\nGiven a function that returns true for all integers greater than or equal to an unknown threshold, find that threshold with the minimum number of queries.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Function That Returns True for All\n * Description: Given a function that returns true for all integers greater than or equal to an unknown threshold, find that threshold with the minimum number of queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Function That Returns True for All\n * Description: Given a function that returns true for all integers greater than or equal to an unknown threshold, find that threshold with the minimum number of queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Function That Returns True for All\nDescription: Given a function that returns true for all integers greater than or equal to an unknown threshold, find that threshold with the minimum number of queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Function That Returns True for All\nDescription: Given a function that returns true for all integers greater than or equal to an unknown threshold, find that threshold with the minimum number of queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "function-that-returns-true-for-all-tc-1",
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
    "id": "dsa-p4-012",
    "slug": "search-space-with-a-monotonic-feasibility",
    "title": "Search Space with a Monotonic Feasibility",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 235,
    "statement": "### Problem Description\n\nGiven a search space with a monotonic feasibility condition, derive the binary-search boundaries, prove the monotonicity, and implement a safe termination condition.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search Space with a Monotonic Feasibility\n * Description: Given a search space with a monotonic feasibility condition, derive the binary-search boundaries, prove the monotonicity, and implement a safe termination condition.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search Space with a Monotonic Feasibility\n * Description: Given a search space with a monotonic feasibility condition, derive the binary-search boundaries, prove the monotonicity, and implement a safe termination condition.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Search Space with a Monotonic Feasibility\nDescription: Given a search space with a monotonic feasibility condition, derive the binary-search boundaries, prove the monotonicity, and implement a safe termination condition.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Search Space with a Monotonic Feasibility\nDescription: Given a search space with a monotonic feasibility condition, derive the binary-search boundaries, prove the monotonicity, and implement a safe termination condition.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "search-space-with-a-monotonic-feasibility-tc-1",
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
    "id": "dsa-p4-013",
    "slug": "matrix-of-sorted-rows-and",
    "title": "Matrix of Sorted Rows and",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 236,
    "statement": "### Problem Description\n\nGiven a matrix of sorted rows and a rank K, find the Kth-smallest element without flattening and sorting the matrix.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Matrix of Sorted Rows and\n * Description: Given a matrix of sorted rows and a rank K, find the Kth-smallest element without flattening and sorting the matrix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Matrix of Sorted Rows and\n * Description: Given a matrix of sorted rows and a rank K, find the Kth-smallest element without flattening and sorting the matrix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Matrix of Sorted Rows and\nDescription: Given a matrix of sorted rows and a rank K, find the Kth-smallest element without flattening and sorting the matrix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Matrix of Sorted Rows and\nDescription: Given a matrix of sorted rows and a rank K, find the Kth-smallest element without flattening and sorting the matrix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "matrix-of-sorted-rows-and-tc-1",
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
    "id": "dsa-p4-014",
    "slug": "n-workers-with-different-processing-rates",
    "title": "N Workers with Different Processing Rates",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 237,
    "statement": "### Problem Description\n\nGiven N workers with different processing rates, determine the minimum time needed for them collectively to finish M jobs.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: N Workers with Different Processing Rates\n * Description: Given N workers with different processing rates, determine the minimum time needed for them collectively to finish M jobs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: N Workers with Different Processing Rates\n * Description: Given N workers with different processing rates, determine the minimum time needed for them collectively to finish M jobs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: N Workers with Different Processing Rates\nDescription: Given N workers with different processing rates, determine the minimum time needed for them collectively to finish M jobs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: N Workers with Different Processing Rates\nDescription: Given N workers with different processing rates, determine the minimum time needed for them collectively to finish M jobs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "n-workers-with-different-processing-rates-tc-1",
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
    "id": "dsa-p4-015",
    "slug": "mastery-test-for-every-binary-search-on-answer-problem",
    "title": "Mastery Test: for Every Binary-search-on-answer Problem",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 238,
    "statement": "### Problem Description\n\nMastery test: For every binary-search-on-answer problem, state the search interval, feasibility predicate, monotonicity proof, and whether you are finding the first true or last true position.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search on the answer. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search on the answer eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Mastery Test: for Every Binary-search-on-answer Problem\n * Description: Mastery test: For every binary-search-on-answer problem, state the search interval, feasibility predicate, monotonicity proof, and whether you are finding the first true or last true position.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Mastery Test: for Every Binary-search-on-answer Problem\n * Description: Mastery test: For every binary-search-on-answer problem, state the search interval, feasibility predicate, monotonicity proof, and whether you are finding the first true or last true position.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Mastery Test: for Every Binary-search-on-answer Problem\nDescription: Mastery test: For every binary-search-on-answer problem, state the search interval, feasibility predicate, monotonicity proof, and whether you are finding the first true or last true position.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Mastery Test: for Every Binary-search-on-answer Problem\nDescription: Mastery test: For every binary-search-on-answer problem, state the search interval, feasibility predicate, monotonicity proof, and whether you are finding the first true or last true position.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "mastery-test-for-every-binary-search-on-answer-problem-tc-1",
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
