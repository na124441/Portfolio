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
    "statement": "### Problem Description\n\nFor a loop that executes N times, count the exact number of iterations for N = 10, 100, and 1000.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-001-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-001-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-001-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-001-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-001-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nAnalyze a loop whose counter doubles after each iteration. Derive its asymptotic complexity.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-002-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-002-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-002-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-002-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-002-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nAnalyze two nested loops where both counters run from 1 to N.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-003-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-003-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-003-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-003-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-003-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nAnalyze nested loops where the inner loop runs from 1 to the current outer-loop index.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-004-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-004-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-004-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-004-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-004-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nAnalyze nested loops where the inner loop starts at the outer-loop index.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-005-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-005-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-005-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-005-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-005-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nCompare two consecutive loops with N and N² iterations.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-006-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-006-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-006-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-006-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-006-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nDetermine the complexity of a function that contains a loop followed by a nested loop.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-007-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-007-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-007-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-007-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-007-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nAnalyze a loop that repeatedly divides N by 3.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-008-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-008-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-008-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-008-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-008-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nAnalyze a loop that repeatedly subtracts an increasing counter from N.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-009-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-009-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-009-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-009-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-009-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nGiven a recursive function that calls itself once with N−1, derive the recurrence and its solution.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-010-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p2-010-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-010-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p2-010-4",
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
    "id": "dsa-p2-011",
    "slug": "analyze-a-recursive-function-that-makes",
    "title": "Analyze a Recursive Function That Makes",
    "topic": "Time and space analysis",
    "tags": [
      "Recursion"
    ],
    "difficulty": "Easy",
    "order": 140,
    "statement": "### Problem Description\n\nAnalyze a recursive function that makes two calls on N/2-sized inputs.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-011-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-011-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-011-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-011-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-011-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nAnalyze a recursive function that makes two calls on N−1-sized inputs.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-012-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-012-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-012-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-012-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-012-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nDerive the time complexity of merge sort from its recurrence relation.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $M$ ($1 \\le N, M \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n- Line 3: $M$ space-separated integers $B_1, \\dots, B_M$.\n\n### Output Format\nPrint the merged or evaluated space-separated integers.",
    "examples": [
      {
        "input": "3 3\n1 3 5\n2 4 6",
        "output": "1 2 3 4 5 6",
        "explanation": "Merged sorted sequence combining both arrays."
      },
      {
        "input": "2 1\n1 5\n3",
        "output": "1 3 5",
        "explanation": "Combining unequal collections preserves sorted ordering."
      },
      {
        "input": "1 1\n10\n20",
        "output": "10 20",
        "explanation": "Single element from each array merged."
      }
    ],
    "constraints": [
      "1 <= N, M <= 10^5",
      "-10^9 <= elements <= 10^9",
      "Time complexity target: O(N + M)",
      "Auxiliary space target: O(1) or O(N + M)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-013-1",
        "input": "3 3\n1 3 5\n2 4 6",
        "expectedOutput": "1 2 3 4 5 6"
      },
      {
        "id": "tc-dsa-p2-013-2",
        "input": "2 1\n1 5\n3",
        "expectedOutput": "1 3 5"
      },
      {
        "id": "tc-dsa-p2-013-3",
        "input": "1 1\n10\n20",
        "expectedOutput": "10 20"
      },
      {
        "id": "tc-dsa-p2-013-4",
        "input": "3 2\n2 2 2\n1 3",
        "expectedOutput": "1 2 2 2 3"
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
    "statement": "### Problem Description\n\nAnalyze quicksort when partitions are balanced and when one partition contains almost all elements.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-014-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-014-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-014-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-014-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-014-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nAnalyze recursive Fibonacci with and without memoization.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-015-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-015-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-015-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-015-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-015-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nCompare the time and auxiliary space complexity of iterative and recursive tree traversal.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-016-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p2-016-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-016-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-016-4",
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
    "id": "dsa-p2-017",
    "slug": "algorithm-that-allocates-a-two-dimensional-nn",
    "title": "Algorithm That Allocates a Two-dimensional N×N",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 146,
    "statement": "### Problem Description\n\nGiven an algorithm that allocates a two-dimensional N×N array, distinguish total memory usage from auxiliary space.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-017-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p2-017-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-017-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p2-017-4",
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
    "id": "dsa-p2-018",
    "slug": "analyze-the-expected-number-of-operations",
    "title": "Analyze the Expected Number of Operations",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 147,
    "statement": "### Problem Description\n\nAnalyze the expected number of operations in a hash table with uniform hashing and a bounded load factor.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-018-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-018-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-018-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-018-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-018-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nCompare O(N), O(N log N), O(N²), O(2^N), and O(N!) for increasing input sizes. Determine the largest feasible N under a fixed operation budget.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-019-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p2-019-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-019-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p2-019-4",
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
    "id": "dsa-p2-020",
    "slug": "take-five-of-your-own-c",
    "title": "Take Five of Your Own C++",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 149,
    "statement": "### Problem Description\n\nTake five of your own C++ solutions and annotate each significant line with its time and space contribution.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-020-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p2-020-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-020-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p2-020-4",
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
    "id": "dsa-p2-021",
    "slug": "algorithm-that-sorts-before-searching-determine",
    "title": "Algorithm That Sorts Before Searching, Determine",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 150,
    "statement": "### Problem Description\n\nGiven an algorithm that sorts before searching, determine its total complexity and identify when preprocessing is worthwhile.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-021-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p2-021-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p2-021-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-021-4",
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
    "id": "dsa-p2-022",
    "slug": "compare-two-algorithms-with-different-asymptotic",
    "title": "Compare Two Algorithms with Different Asymptotic",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 151,
    "statement": "### Problem Description\n\nCompare two algorithms with different asymptotic complexity but different constant factors on small input sizes.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-022-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-022-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-022-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-022-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-022-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nProve that a nested loop is O(N²) but also determine whether it is Θ(N²) or has a tighter bound.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-023-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-023-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-023-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-023-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-023-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nGiven a recursive algorithm with memoization, identify overlapping subproblems and calculate the number of distinct states.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-024-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p2-024-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-024-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p2-024-4",
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
    "id": "dsa-p2-025",
    "slug": "for-a-problem-with-strict-memory",
    "title": "For a Problem with Strict Memory",
    "topic": "Time and space analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 154,
    "statement": "### Problem Description\n\nFor a problem with strict memory constraints, redesign an algorithm to trade additional computation for reduced auxiliary space.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Time and space analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Time and space analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-025-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p2-025-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-025-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p2-025-4",
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
    "id": "dsa-p2-001",
    "slug": "write-a-loop-invariant-for-finding",
    "title": "Write a Loop Invariant for Finding",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 155,
    "statement": "### Problem Description\n\nWrite a loop invariant for finding the maximum element in an array.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-001-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-001-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-001-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-001-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-001-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nProve that binary search returns the target index when it exists.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-002-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p2-002-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p2-002-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-002-4",
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
    "id": "dsa-p2-003",
    "slug": "prove-that-an-in-place-array-reversal",
    "title": "Prove That an In-place Array Reversal",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "In-Place"
    ],
    "difficulty": "Warm-up",
    "order": 157,
    "statement": "### Problem Description\n\nProve that an in-place array reversal produces the reversed array.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-003-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p2-003-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-003-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p2-003-4",
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
    "id": "dsa-p2-004",
    "slug": "prove-that-insertion-sort-maintains",
    "title": "Prove That Insertion Sort Maintains",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 158,
    "statement": "### Problem Description\n\nProve that insertion sort maintains a sorted prefix after every iteration.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-004-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p2-004-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-004-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p2-004-4",
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
    "id": "dsa-p2-005",
    "slug": "prove-that-a-two-pointer-solution",
    "title": "Prove That a Two-pointer Solution",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 159,
    "statement": "### Problem Description\n\nProve that a two-pointer solution for finding a pair with a target sum in a sorted array does not discard a valid solution.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-005-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p2-005-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p2-005-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-005-4",
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
    "id": "dsa-p2-006",
    "slug": "use-the-potential-method-to-analyze",
    "title": "Use the Potential Method to Analyze",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 160,
    "statement": "### Problem Description\n\nUse the potential method to analyze a dynamic array that doubles its capacity.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-006-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-006-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-006-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-006-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-006-5",
        "input": "10",
        "expectedOutput": "55"
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
    "title": "Explain Why N Appends",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 161,
    "statement": "### Problem Description\n\nExplain why N appends to a dynamic array can take O(N) total time even though some individual appends take O(N).\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-007-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p2-007-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-007-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p2-007-4",
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
    "id": "dsa-p2-008",
    "slug": "analyze-the-amortized-complexity-of",
    "title": "Analyze the Amortized Complexity",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 162,
    "statement": "### Problem Description\n\nAnalyze the amortized complexity of a stack implemented using two queues.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-008-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-008-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-008-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-008-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-008-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nProve that each element enters and leaves a monotonic stack at most once.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-009-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p2-009-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-009-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p2-009-4",
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
    "id": "dsa-p2-010",
    "slug": "establish-a-termination-condition-for",
    "title": "Establish a Termination Condition",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 164,
    "statement": "### Problem Description\n\nEstablish a termination condition for a binary search on an answer space.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-010-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p2-010-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p2-010-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-010-4",
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
    "id": "dsa-p2-011",
    "slug": "greedy-algorithm-identify-the-invariant",
    "title": "Greedy Algorithm, Identify the Invariant",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 165,
    "statement": "### Problem Description\n\nGiven a greedy algorithm, identify the invariant or exchange argument needed to prove its correctness.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-011-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p2-011-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p2-011-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p2-011-4",
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
    "id": "dsa-p2-012",
    "slug": "algorithm-that-works-on-typical-inputs",
    "title": "Algorithm That Works on Typical Inputs",
    "topic": "Correctness, invariants, and amortized analysis",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 166,
    "statement": "### Problem Description\n\nGiven an algorithm that works on typical inputs but fails on a boundary case, construct a counterexample and repair the algorithm.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-012-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-012-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-012-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-012-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-012-5",
        "input": "10",
        "expectedOutput": "55"
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
    "statement": "### Problem Description\n\nCompare worst-case, average-case, expected, and amortized complexity for a hash table and a dynamic array.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "For N = 4, iterations evaluated as 1 + 2 + 3 + 4 = 10."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "For N = 1, exactly 1 execution occurs."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no loop iterations are executed."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1) closed-form calculation",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Correctness, invariants, and amortized analysis. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Correctness, invariants, and amortized analysis allows single-pass or logarithmic resolution without redundant computations.",
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
        "id": "tc-dsa-p2-013-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p2-013-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p2-013-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p2-013-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p2-013-5",
        "input": "10",
        "expectedOutput": "55"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  }
];
