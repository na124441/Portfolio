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
    "statement": "### Problem Description\n\nImplement linear search and return the first occurrence of a target.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-001-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-001-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-001-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-001-4",
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
    "id": "dsa-p4-002",
    "slug": "modify-linear-search-to-return",
    "title": "Modify Linear Search to Return",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 207,
    "statement": "### Problem Description\n\nModify linear search to return the last occurrence of a target.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-002-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-002-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-002-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-002-4",
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
    "id": "dsa-p4-003",
    "slug": "sorted-array-implement-iterative-binary-search",
    "title": "Sorted Array, Implement Iterative Binary Search",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 208,
    "statement": "### Problem Description\n\nGiven a sorted array, implement iterative binary search.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-003-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-003-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-003-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-003-4",
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
    "id": "dsa-p4-004",
    "slug": "implement-recursive-binary-search-and-compare",
    "title": "Implement Recursive Binary Search and Compare",
    "topic": "Linear and binary search",
    "tags": [
      "Recursion"
    ],
    "difficulty": "Warm-up",
    "order": 209,
    "statement": "### Problem Description\n\nImplement recursive binary search and compare its auxiliary space with the iterative version.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-004-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-004-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-004-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-004-4",
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
    "id": "dsa-p4-005",
    "slug": "binary-search-on-an-array",
    "title": "Binary Search on an Array",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 210,
    "statement": "### Problem Description\n\nTrace binary search on an array of even and odd lengths, including cases where the target is absent.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-005-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-005-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-005-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-005-4",
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
    "id": "dsa-p4-006",
    "slug": "implement-lower-bound-return-the-first-index",
    "title": "Implement Lower Bound: Return the First Index",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 211,
    "statement": "### Problem Description\n\nImplement lower bound: return the first index whose value is greater than or equal to a target.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-006-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-006-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-006-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-006-4",
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
    "id": "dsa-p4-007",
    "slug": "implement-upper-bound-return-the-first-index",
    "title": "Implement Upper Bound: Return the First Index",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 212,
    "statement": "### Problem Description\n\nImplement upper bound: return the first index whose value is strictly greater than a target.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-007-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-007-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-007-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-007-4",
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
    "id": "dsa-p4-008",
    "slug": "first-and-last-occurrence-of",
    "title": "First and Last Occurrence",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 213,
    "statement": "### Problem Description\n\nFind the first and last occurrence of a target in a sorted array containing duplicates.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-008-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-008-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-008-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-008-4",
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
    "id": "dsa-p4-009",
    "slug": "count-occurrences-of-a-target-using-two",
    "title": "Count Occurrences of a Target Using Two",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 214,
    "statement": "### Problem Description\n\nCount the occurrences of a target using two binary searches.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-009-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-009-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-009-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-009-4",
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
    "id": "dsa-p4-010",
    "slug": "insertion-position-of-a-target",
    "title": "Insertion Position of a Target",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 215,
    "statement": "### Problem Description\n\nFind the insertion position of a target in a sorted array.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-010-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-010-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-010-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-010-4",
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
    "id": "dsa-p4-011",
    "slug": "smallest-element-in-a-rotated-sorted",
    "title": "Smallest Element in a Rotated Sorted",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 216,
    "statement": "### Problem Description\n\nFind the smallest element in a rotated sorted array without duplicates.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-011-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-011-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-011-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-011-4",
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
    "id": "dsa-p4-012",
    "slug": "number-of-times-a-sorted-array",
    "title": "Number of Times a Sorted Array",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 217,
    "statement": "### Problem Description\n\nFind the number of times a sorted array has been rotated.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-012-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-012-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-012-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-012-4",
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
    "id": "dsa-p4-013",
    "slug": "search-for-a-target-in",
    "title": "Search for a Target",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 218,
    "statement": "### Problem Description\n\nSearch for a target in a rotated sorted array without duplicates.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-013-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-013-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-013-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-013-4",
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
    "id": "dsa-p4-014",
    "slug": "rotated-array-search-to-handle-duplicates",
    "title": "Rotated-array Search to Handle Duplicates",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 219,
    "statement": "### Problem Description\n\nExtend rotated-array search to handle duplicates.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-014-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-014-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-014-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-014-4",
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
    "id": "dsa-p4-015",
    "slug": "search-for-a-target-in-2",
    "title": "Search for a Target",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 220,
    "statement": "### Problem Description\n\nSearch for a target in an infinite sorted array where the length is not initially known.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-015-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-015-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-015-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-015-4",
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
    "id": "dsa-p4-016",
    "slug": "an-element-in-a-bitonic-array",
    "title": "An Element in a Bitonic Array",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 221,
    "statement": "### Problem Description\n\nFind an element in a bitonic array that first increases and then decreases.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-016-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-016-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-016-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-016-4",
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
    "id": "dsa-p4-017",
    "slug": "search-for-a-target-in-3",
    "title": "Search for a Target",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 222,
    "statement": "### Problem Description\n\nSearch for a target in a two-dimensional matrix whose rows and columns are sorted.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-017-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p4-017-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-017-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p4-017-4",
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
    "id": "dsa-p4-018",
    "slug": "search-in-a-matrix-where-each",
    "title": "Search in a Matrix Where Each",
    "topic": "Linear and binary search",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 223,
    "statement": "### Problem Description\n\nSearch in a matrix where each row is sorted and the first element of each row is greater than the last element of the previous row.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
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
        "content": "Examine the mathematical invariants governing Linear and binary search. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Linear and binary search allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-018-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p4-018-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-018-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p4-018-4",
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
    "id": "dsa-p4-001",
    "slug": "sorted-array-of-integers-find",
    "title": "Sorted Array of Integers, Find",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 224,
    "statement": "### Problem Description\n\nGiven a sorted array of integers, find the integer square root without using a square-root function.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-001-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-001-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-001-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-001-4",
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
    "id": "dsa-p4-002",
    "slug": "smallest-positive-integer-whose-square-is",
    "title": "Smallest Positive Integer Whose Square Is",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 225,
    "statement": "### Problem Description\n\nFind the smallest positive integer whose square is greater than or equal to a given number, avoiding overflow.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-002-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-002-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-002-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-002-4",
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
    "id": "dsa-p4-003",
    "slug": "set-of-machine-speeds-and",
    "title": "Set of Machine Speeds",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 226,
    "statement": "### Problem Description\n\nGiven a set of machine speeds and a required production quantity, find the minimum time needed to complete the work.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-003-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-003-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-003-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-003-4",
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
    "id": "dsa-p4-004",
    "slug": "n-piles-of-bananas-and-h",
    "title": "N Piles of Bananas and H",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 227,
    "statement": "### Problem Description\n\nGiven N piles of bananas and H hours, find the minimum eating speed that allows all piles to be finished in time.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-004-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-004-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-004-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-004-4",
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
    "id": "dsa-p4-005",
    "slug": "array-of-book-page-counts",
    "title": "Array of Book Page Counts",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 228,
    "statement": "### Problem Description\n\nGiven an array of book page counts and K students, minimize the maximum number of pages assigned to any student while preserving contiguous allocation.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-005-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-005-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-005-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-005-4",
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
    "id": "dsa-p4-006",
    "slug": "n-packages-and-d-days-minimize",
    "title": "N Packages and D Days, Minimize",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 229,
    "statement": "### Problem Description\n\nGiven N packages and D days, minimize the ship capacity needed to deliver all packages within D days.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-006-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-006-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-006-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-006-4",
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
    "id": "dsa-p4-007",
    "slug": "place-k-objects-at-positions",
    "title": "Place K Objects At Positions",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 230,
    "statement": "### Problem Description\n\nPlace K objects at positions on a line to maximize the minimum distance between any two objects.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-007-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-007-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-007-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-007-4",
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
    "id": "dsa-p4-008",
    "slug": "array-and-a-number-k-split",
    "title": "Array and a Number K, Split",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 231,
    "statement": "### Problem Description\n\nGiven an array and a number K, split the array into K nonempty contiguous segments to minimize the maximum segment sum.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-008-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-008-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-008-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-008-4",
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
    "id": "dsa-p4-009",
    "slug": "median-of-two-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 232,
    "statement": "### Problem Description\n\nFind the median of two sorted arrays in O(log(min(N, M))) time.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-009-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-009-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-009-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-009-4",
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
    "id": "dsa-p4-010",
    "slug": "sorted-array-of-unknown-length-find",
    "title": "Sorted Array of Unknown Length, Find",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 233,
    "statement": "### Problem Description\n\nGiven a sorted array of unknown length, find the first position where a monotonic predicate becomes true.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-010-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-010-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-010-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-010-4",
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
    "id": "dsa-p4-011",
    "slug": "function-that-returns-true-for-all",
    "title": "Function That Returns True for All",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 234,
    "statement": "### Problem Description\n\nGiven a function that returns true for all integers greater than or equal to an unknown threshold, find that threshold with the minimum number of queries.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-011-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-011-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-011-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-011-4",
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
    "id": "dsa-p4-012",
    "slug": "search-space-with-a-monotonic-feasibility",
    "title": "Search Space with a Monotonic Feasibility",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 235,
    "statement": "### Problem Description\n\nGiven a search space with a monotonic feasibility condition, derive the binary-search boundaries, prove the monotonicity, and implement a safe termination condition.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-012-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-012-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-012-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-012-4",
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
    "id": "dsa-p4-013",
    "slug": "matrix-of-sorted-rows-and",
    "title": "Matrix of Sorted Rows",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 236,
    "statement": "### Problem Description\n\nGiven a matrix of sorted rows and a rank K, find the Kth-smallest element without flattening and sorting the matrix.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-013-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p4-013-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-013-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p4-013-4",
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
    "id": "dsa-p4-014",
    "slug": "n-workers-with-different-processing-rates",
    "title": "N Workers with Different Processing Rates",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 237,
    "statement": "### Problem Description\n\nGiven N workers with different processing rates, determine the minimum time needed for them collectively to finish M jobs.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-014-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p4-014-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p4-014-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p4-014-4",
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
    "id": "dsa-p4-015",
    "slug": "mastery-test-for-every-binary-search-on-answer-problem",
    "title": "Mastery Test: for Every Binary-search-on-answer Problem",
    "topic": "Binary search on the answer",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 238,
    "statement": "### Problem Description\n\nMastery test: For every binary-search-on-answer problem, state the search interval, feasibility predicate, monotonicity proof, and whether you are finding the first true or last true position.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Binary search on the answer. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Binary search on the answer allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p4-015-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p4-015-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p4-015-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p4-015-4",
        "input": "4 6\n2 4 6 8",
        "expectedOutput": "2"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  }
];
