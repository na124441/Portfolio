import type { DsaProblem } from '@/types/dsa-question';

export const PHASE_7_PROBLEMS: DsaProblem[] = [
  {
    "id": "dsa-p7-001",
    "slug": "implement-trie-that-inserts-lowercase-english-words",
    "title": "Implement Trie That Inserts Lowercase English Words",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Medium",
    "order": 387,
    "statement": "### Problem Description\n\nImplement a trie that inserts lowercase English words.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Trie That Inserts Lowercase English Words\n * Description: Implement a trie that inserts lowercase English words.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Trie That Inserts Lowercase English Words\n * Description: Implement a trie that inserts lowercase English words.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Trie That Inserts Lowercase English Words\nDescription: Implement a trie that inserts lowercase English words.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Trie That Inserts Lowercase English Words\nDescription: Implement a trie that inserts lowercase English words.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-001-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-001-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-001-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-001-4",
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
    "id": "dsa-p7-002",
    "slug": "search-for-a-complete-word",
    "title": "Search for a Complete Word",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Medium",
    "order": 388,
    "statement": "### Problem Description\n\nSearch for a complete word in a trie.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search for a Complete Word\n * Description: Search for a complete word in a trie.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Search for a Complete Word\n * Description: Search for a complete word in a trie.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Search for a Complete Word\nDescription: Search for a complete word in a trie.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Search for a Complete Word\nDescription: Search for a complete word in a trie.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-002-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p7-002-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p7-002-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-002-4",
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
    "id": "dsa-p7-003",
    "slug": "implement-prefix-search-and-return-whether-any",
    "title": "Implement Prefix Search and Return Whether Any",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Medium",
    "order": 389,
    "statement": "### Problem Description\n\nImplement prefix search and return whether any word starts with a given prefix.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Prefix Search and Return Whether Any\n * Description: Implement prefix search and return whether any word starts with a given prefix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Prefix Search and Return Whether Any\n * Description: Implement prefix search and return whether any word starts with a given prefix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Prefix Search and Return Whether Any\nDescription: Implement prefix search and return whether any word starts with a given prefix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Prefix Search and Return Whether Any\nDescription: Implement prefix search and return whether any word starts with a given prefix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-003-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p7-003-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p7-003-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-003-4",
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
    "id": "dsa-p7-004",
    "slug": "count-how-many-inserted-words-start",
    "title": "Count How Many Inserted Words Start",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Medium",
    "order": 390,
    "statement": "### Problem Description\n\nCount how many inserted words start with a given prefix.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count How Many Inserted Words Start\n * Description: Count how many inserted words start with a given prefix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count How Many Inserted Words Start\n * Description: Count how many inserted words start with a given prefix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count How Many Inserted Words Start\nDescription: Count how many inserted words start with a given prefix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count How Many Inserted Words Start\nDescription: Count how many inserted words start with a given prefix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-004-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-004-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-004-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-004-4",
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
    "id": "dsa-p7-005",
    "slug": "word-from-a-trie-without-removing",
    "title": "Word from a Trie Without Removing",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Medium",
    "order": 391,
    "statement": "### Problem Description\n\nDelete a word from a trie without removing nodes shared by other words.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Word from a Trie Without Removing\n * Description: Delete a word from a trie without removing nodes shared by other words.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Word from a Trie Without Removing\n * Description: Delete a word from a trie without removing nodes shared by other words.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Word from a Trie Without Removing\nDescription: Delete a word from a trie without removing nodes shared by other words.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Word from a Trie Without Removing\nDescription: Delete a word from a trie without removing nodes shared by other words.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-005-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-005-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-005-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-005-4",
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
    "id": "dsa-p7-006",
    "slug": "implement-autocomplete-that-returns-all-words-matching",
    "title": "Implement Autocomplete That Returns All Words Matching",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Hard",
    "order": 392,
    "statement": "### Problem Description\n\nImplement autocomplete that returns all words matching a given prefix.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Autocomplete That Returns All Words Matching\n * Description: Implement autocomplete that returns all words matching a given prefix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Autocomplete That Returns All Words Matching\n * Description: Implement autocomplete that returns all words matching a given prefix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Autocomplete That Returns All Words Matching\nDescription: Implement autocomplete that returns all words matching a given prefix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Autocomplete That Returns All Words Matching\nDescription: Implement autocomplete that returns all words matching a given prefix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-006-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-006-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-006-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-006-4",
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
    "id": "dsa-p7-007",
    "slug": "dictionary-and-a-string-determine-whether",
    "title": "Dictionary and a String, Determine Whether",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Hard",
    "order": 393,
    "statement": "### Problem Description\n\nGiven a dictionary and a string, determine whether the string can be segmented into dictionary words using a trie.\n\n### Input Format\nA single line containing string $S$.\n\n### Output Format\nPrint the computed string or integer scalar.",
    "examples": [
      {
        "input": "racecar",
        "output": "true",
        "explanation": "\"racecar\" reads identically forward and backward."
      },
      {
        "input": "hello",
        "output": "false",
        "explanation": "\"hello\" is not a palindrome."
      },
      {
        "input": "a",
        "output": "true",
        "explanation": "A single character string is trivially symmetric."
      }
    ],
    "constraints": [
      "1 <= length(S) <= 10^5",
      "Characters consist of printable ASCII",
      "Time complexity target: O(N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Dictionary and a String, Determine Whether\n * Description: Given a dictionary and a string, determine whether the string can be segmented into dictionary words using a trie.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Dictionary and a String, Determine Whether\n * Description: Given a dictionary and a string, determine whether the string can be segmented into dictionary words using a trie.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Dictionary and a String, Determine Whether\nDescription: Given a dictionary and a string, determine whether the string can be segmented into dictionary words using a trie.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Dictionary and a String, Determine Whether\nDescription: Given a dictionary and a string, determine whether the string can be segmented into dictionary words using a trie.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-007-1",
        "input": "racecar",
        "expectedOutput": "true"
      },
      {
        "id": "tc-dsa-p7-007-2",
        "input": "hello",
        "expectedOutput": "false"
      },
      {
        "id": "tc-dsa-p7-007-3",
        "input": "a",
        "expectedOutput": "true"
      },
      {
        "id": "tc-dsa-p7-007-4",
        "input": "abcba",
        "expectedOutput": "true"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p7-008",
    "slug": "implement-binary-trie-to-find-the-maximum",
    "title": "Implement Binary Trie to Find the Maximum",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Hard",
    "order": 394,
    "statement": "### Problem Description\n\nImplement a binary trie to find the maximum XOR of two numbers in an array.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Binary Trie to Find the Maximum\n * Description: Implement a binary trie to find the maximum XOR of two numbers in an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Binary Trie to Find the Maximum\n * Description: Implement a binary trie to find the maximum XOR of two numbers in an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Binary Trie to Find the Maximum\nDescription: Implement a binary trie to find the maximum XOR of two numbers in an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Binary Trie to Find the Maximum\nDescription: Implement a binary trie to find the maximum XOR of two numbers in an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-008-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-008-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-008-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-008-4",
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
    "id": "dsa-p7-009",
    "slug": "maximum-xor-of-any-two-elements",
    "title": "Maximum XOR of Any Two Elements",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Hard",
    "order": 395,
    "statement": "### Problem Description\n\nFind the maximum XOR of any two elements in a range of values.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Maximum XOR of Any Two Elements\n * Description: Find the maximum XOR of any two elements in a range of values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Maximum XOR of Any Two Elements\n * Description: Find the maximum XOR of any two elements in a range of values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Maximum XOR of Any Two Elements\nDescription: Find the maximum XOR of any two elements in a range of values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Maximum XOR of Any Two Elements\nDescription: Find the maximum XOR of any two elements in a range of values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-009-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-009-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-009-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-009-4",
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
    "id": "dsa-p7-010",
    "slug": "dictionary-of-words-find-the-shortest",
    "title": "Dictionary of Words, Find the Shortest",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Hard",
    "order": 396,
    "statement": "### Problem Description\n\nGiven a dictionary of words, find the shortest unique prefix for every word.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Dictionary of Words, Find the Shortest\n * Description: Given a dictionary of words, find the shortest unique prefix for every word.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Dictionary of Words, Find the Shortest\n * Description: Given a dictionary of words, find the shortest unique prefix for every word.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Dictionary of Words, Find the Shortest\nDescription: Given a dictionary of words, find the shortest unique prefix for every word.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Dictionary of Words, Find the Shortest\nDescription: Given a dictionary of words, find the shortest unique prefix for every word.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-010-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-010-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-010-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-010-4",
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
    "id": "dsa-p7-011",
    "slug": "implement-trie-with-wildcard-character-matching",
    "title": "Implement Trie with Wildcard Character Matching",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Hard",
    "order": 397,
    "statement": "### Problem Description\n\nImplement a trie with wildcard character matching.\n\n### Input Format\nA single line containing string $S$.\n\n### Output Format\nPrint the computed string or integer scalar.",
    "examples": [
      {
        "input": "racecar",
        "output": "true",
        "explanation": "\"racecar\" reads identically forward and backward."
      },
      {
        "input": "hello",
        "output": "false",
        "explanation": "\"hello\" is not a palindrome."
      },
      {
        "input": "a",
        "output": "true",
        "explanation": "A single character string is trivially symmetric."
      }
    ],
    "constraints": [
      "1 <= length(S) <= 10^5",
      "Characters consist of printable ASCII",
      "Time complexity target: O(N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Trie with Wildcard Character Matching\n * Description: Implement a trie with wildcard character matching.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Trie with Wildcard Character Matching\n * Description: Implement a trie with wildcard character matching.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Trie with Wildcard Character Matching\nDescription: Implement a trie with wildcard character matching.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Trie with Wildcard Character Matching\nDescription: Implement a trie with wildcard character matching.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-011-1",
        "input": "racecar",
        "expectedOutput": "true"
      },
      {
        "id": "tc-dsa-p7-011-2",
        "input": "hello",
        "expectedOutput": "false"
      },
      {
        "id": "tc-dsa-p7-011-3",
        "input": "a",
        "expectedOutput": "true"
      },
      {
        "id": "tc-dsa-p7-011-4",
        "input": "abcba",
        "expectedOutput": "true"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p7-012",
    "slug": "design-memory-efficient-trie-using-an-array-based-representation",
    "title": "Design Memory-efficient Trie Using an Array-based Representation",
    "topic": "Tries",
    "tags": [
      "Trie"
    ],
    "difficulty": "Hard",
    "order": 398,
    "statement": "### Problem Description\n\nDesign a memory-efficient trie using an array-based representation and compare it with a map-based implementation.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Tries. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Tries allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Memory-efficient Trie Using an Array-based Representation\n * Description: Design a memory-efficient trie using an array-based representation and compare it with a map-based implementation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Memory-efficient Trie Using an Array-based Representation\n * Description: Design a memory-efficient trie using an array-based representation and compare it with a map-based implementation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Memory-efficient Trie Using an Array-based Representation\nDescription: Design a memory-efficient trie using an array-based representation and compare it with a map-based implementation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Memory-efficient Trie Using an Array-based Representation\nDescription: Design a memory-efficient trie using an array-based representation and compare it with a map-based implementation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-012-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-012-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-012-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-012-4",
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
    "id": "dsa-p7-001",
    "slug": "array-implement-a-segment-tree",
    "title": "Array, Implement a Segment Tree",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 399,
    "statement": "### Problem Description\n\nGiven an array, implement a segment tree for range-sum queries.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Implement a Segment Tree\n * Description: Given an array, implement a segment tree for range-sum queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Implement a Segment Tree\n * Description: Given an array, implement a segment tree for range-sum queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Implement a Segment Tree\nDescription: Given an array, implement a segment tree for range-sum queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Implement a Segment Tree\nDescription: Given an array, implement a segment tree for range-sum queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-001-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-001-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-001-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-001-4",
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
    "id": "dsa-p7-002",
    "slug": "support-point-updates-that-change",
    "title": "Support Point Updates That Change",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 400,
    "statement": "### Problem Description\n\nSupport point updates that change an array element and update the corresponding tree nodes.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Support Point Updates That Change\n * Description: Support point updates that change an array element and update the corresponding tree nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Support Point Updates That Change\n * Description: Support point updates that change an array element and update the corresponding tree nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Support Point Updates That Change\nDescription: Support point updates that change an array element and update the corresponding tree nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Support Point Updates That Change\nDescription: Support point updates that change an array element and update the corresponding tree nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-002-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-002-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-002-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-002-4",
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
    "id": "dsa-p7-003",
    "slug": "answer-multiple-range-sum-queries-and-compare",
    "title": "Answer Multiple Range-sum Queries and Compare",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 401,
    "statement": "### Problem Description\n\nAnswer multiple range-sum queries and compare the complexity with a prefix-sum array.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Answer Multiple Range-sum Queries and Compare\n * Description: Answer multiple range-sum queries and compare the complexity with a prefix-sum array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Answer Multiple Range-sum Queries and Compare\n * Description: Answer multiple range-sum queries and compare the complexity with a prefix-sum array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Answer Multiple Range-sum Queries and Compare\nDescription: Answer multiple range-sum queries and compare the complexity with a prefix-sum array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Answer Multiple Range-sum Queries and Compare\nDescription: Answer multiple range-sum queries and compare the complexity with a prefix-sum array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-003-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p7-003-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p7-003-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-003-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p7-003-5",
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
    "id": "dsa-p7-004",
    "slug": "implement-segment-tree-for-range-minimum-queries",
    "title": "Implement Segment Tree for Range-minimum Queries",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 402,
    "statement": "### Problem Description\n\nImplement a segment tree for range-minimum queries.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Segment Tree for Range-minimum Queries\n * Description: Implement a segment tree for range-minimum queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Segment Tree for Range-minimum Queries\n * Description: Implement a segment tree for range-minimum queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Segment Tree for Range-minimum Queries\nDescription: Implement a segment tree for range-minimum queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Segment Tree for Range-minimum Queries\nDescription: Implement a segment tree for range-minimum queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-004-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-004-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-004-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-004-4",
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
    "id": "dsa-p7-005",
    "slug": "the-tree-to-return-both",
    "title": "The Tree to Return Both",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 403,
    "statement": "### Problem Description\n\nExtend the tree to return both the minimum value and its index.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Tree to Return Both\n * Description: Extend the tree to return both the minimum value and its index.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Tree to Return Both\n * Description: Extend the tree to return both the minimum value and its index.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: The Tree to Return Both\nDescription: Extend the tree to return both the minimum value and its index.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: The Tree to Return Both\nDescription: Extend the tree to return both the minimum value and its index.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-005-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-005-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-005-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-005-4",
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
    "id": "dsa-p7-006",
    "slug": "implement-range-maximum-query-segment-tree",
    "title": "Implement Range-maximum Query Segment Tree",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 404,
    "statement": "### Problem Description\n\nImplement a range-maximum query segment tree.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Range-maximum Query Segment Tree\n * Description: Implement a range-maximum query segment tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Range-maximum Query Segment Tree\n * Description: Implement a range-maximum query segment tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Range-maximum Query Segment Tree\nDescription: Implement a range-maximum query segment tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Range-maximum Query Segment Tree\nDescription: Implement a range-maximum query segment tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-006-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-006-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-006-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-006-4",
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
    "id": "dsa-p7-007",
    "slug": "support-range-addition-updates-using-lazy-propagation",
    "title": "Support Range-addition Updates Using Lazy Propagation",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 405,
    "statement": "### Problem Description\n\nSupport range-addition updates using lazy propagation.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Support Range-addition Updates Using Lazy Propagation\n * Description: Support range-addition updates using lazy propagation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Support Range-addition Updates Using Lazy Propagation\n * Description: Support range-addition updates using lazy propagation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Support Range-addition Updates Using Lazy Propagation\nDescription: Support range-addition updates using lazy propagation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Support Range-addition Updates Using Lazy Propagation\nDescription: Support range-addition updates using lazy propagation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-007-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-007-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-007-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-007-4",
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
    "id": "dsa-p7-008",
    "slug": "implement-range-assignment-updates-and-explain-how",
    "title": "Implement Range Assignment Updates and Explain How",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 406,
    "statement": "### Problem Description\n\nImplement range assignment updates and explain how assignment interacts with pending addition updates.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Range Assignment Updates and Explain How\n * Description: Implement range assignment updates and explain how assignment interacts with pending addition updates.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Range Assignment Updates and Explain How\n * Description: Implement range assignment updates and explain how assignment interacts with pending addition updates.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Range Assignment Updates and Explain How\nDescription: Implement range assignment updates and explain how assignment interacts with pending addition updates.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Range Assignment Updates and Explain How\nDescription: Implement range assignment updates and explain how assignment interacts with pending addition updates.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-008-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-008-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-008-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-008-4",
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
    "id": "dsa-p7-009",
    "slug": "array-count-the-number-of-inversions",
    "title": "Array, Count the Number of Inversions",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 407,
    "statement": "### Problem Description\n\nGiven an array, count the number of inversions using a segment tree.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Count the Number of Inversions\n * Description: Given an array, count the number of inversions using a segment tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Count the Number of Inversions\n * Description: Given an array, count the number of inversions using a segment tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Count the Number of Inversions\nDescription: Given an array, count the number of inversions using a segment tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Count the Number of Inversions\nDescription: Given an array, count the number of inversions using a segment tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-009-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-009-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-009-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-009-4",
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
    "id": "dsa-p7-010",
    "slug": "array-find-the-number-of-elements",
    "title": "Array, Find the Number of Elements",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 408,
    "statement": "### Problem Description\n\nGiven an array, find the number of elements greater than K in a specified range.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Find the Number of Elements\n * Description: Given an array, find the number of elements greater than K in a specified range.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Find the Number of Elements\n * Description: Given an array, find the number of elements greater than K in a specified range.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Find the Number of Elements\nDescription: Given an array, find the number of elements greater than K in a specified range.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Find the Number of Elements\nDescription: Given an array, find the number of elements greater than K in a specified range.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-010-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p7-010-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p7-010-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-010-4",
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
    "id": "dsa-p7-011",
    "slug": "implement-segment-tree-that-supports-finding",
    "title": "Implement Segment Tree That Supports Finding",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 409,
    "statement": "### Problem Description\n\nImplement a segment tree that supports finding the first index where a prefix sum reaches a given target.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Segment Tree That Supports Finding\n * Description: Implement a segment tree that supports finding the first index where a prefix sum reaches a given target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Segment Tree That Supports Finding\n * Description: Implement a segment tree that supports finding the first index where a prefix sum reaches a given target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Segment Tree That Supports Finding\nDescription: Implement a segment tree that supports finding the first index where a prefix sum reaches a given target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Segment Tree That Supports Finding\nDescription: Implement a segment tree that supports finding the first index where a prefix sum reaches a given target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-011-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-011-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-011-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-011-4",
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
    "id": "dsa-p7-012",
    "slug": "sequence-of-point-updates-and-range",
    "title": "Sequence of Point Updates and Range",
    "topic": "Segment trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 410,
    "statement": "### Problem Description\n\nGiven a sequence of point updates and range queries, determine whether a Fenwick tree or segment tree is appropriate and justify the choice.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Segment trees. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Segment trees allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Point Updates and Range\n * Description: Given a sequence of point updates and range queries, determine whether a Fenwick tree or segment tree is appropriate and justify the choice.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Point Updates and Range\n * Description: Given a sequence of point updates and range queries, determine whether a Fenwick tree or segment tree is appropriate and justify the choice.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sequence of Point Updates and Range\nDescription: Given a sequence of point updates and range queries, determine whether a Fenwick tree or segment tree is appropriate and justify the choice.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sequence of Point Updates and Range\nDescription: Given a sequence of point updates and range queries, determine whether a Fenwick tree or segment tree is appropriate and justify the choice.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-012-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-012-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-012-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-012-4",
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
    "id": "dsa-p7-001",
    "slug": "implement-fenwick-tree-for-point-updates",
    "title": "Implement Fenwick Tree for Point Updates",
    "topic": "Fenwick trees (Binary Indexed Trees)",
    "tags": [
      "Binary Tree"
    ],
    "difficulty": "Medium",
    "order": 411,
    "statement": "### Problem Description\n\nImplement a Fenwick tree for point updates and prefix-sum queries.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Fenwick trees (Binary Indexed Trees). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Fenwick trees (Binary Indexed Trees) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Fenwick Tree for Point Updates\n * Description: Implement a Fenwick tree for point updates and prefix-sum queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Fenwick Tree for Point Updates\n * Description: Implement a Fenwick tree for point updates and prefix-sum queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Fenwick Tree for Point Updates\nDescription: Implement a Fenwick tree for point updates and prefix-sum queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Fenwick Tree for Point Updates\nDescription: Implement a Fenwick tree for point updates and prefix-sum queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-001-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-001-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-001-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-001-4",
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
    "id": "dsa-p7-002",
    "slug": "use-a-fenwick-tree-to-answer",
    "title": "Use a Fenwick Tree to Answer",
    "topic": "Fenwick trees (Binary Indexed Trees)",
    "tags": [
      "Binary Tree"
    ],
    "difficulty": "Medium",
    "order": 412,
    "statement": "### Problem Description\n\nUse a Fenwick tree to answer arbitrary range-sum queries.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Fenwick trees (Binary Indexed Trees). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Fenwick trees (Binary Indexed Trees) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use a Fenwick Tree to Answer\n * Description: Use a Fenwick tree to answer arbitrary range-sum queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use a Fenwick Tree to Answer\n * Description: Use a Fenwick tree to answer arbitrary range-sum queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Use a Fenwick Tree to Answer\nDescription: Use a Fenwick tree to answer arbitrary range-sum queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Use a Fenwick Tree to Answer\nDescription: Use a Fenwick tree to answer arbitrary range-sum queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-002-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-002-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-002-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-002-4",
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
    "id": "dsa-p7-003",
    "slug": "array-build-a-fenwick-tree",
    "title": "Array, Build a Fenwick Tree",
    "topic": "Fenwick trees (Binary Indexed Trees)",
    "tags": [
      "Binary Tree"
    ],
    "difficulty": "Medium",
    "order": 413,
    "statement": "### Problem Description\n\nGiven an array, build a Fenwick tree in O(N) time.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Fenwick trees (Binary Indexed Trees). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Fenwick trees (Binary Indexed Trees) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Build a Fenwick Tree\n * Description: Given an array, build a Fenwick tree in O(N) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Build a Fenwick Tree\n * Description: Given an array, build a Fenwick tree in O(N) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Build a Fenwick Tree\nDescription: Given an array, build a Fenwick tree in O(N) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Build a Fenwick Tree\nDescription: Given an array, build a Fenwick tree in O(N) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-003-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-003-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-003-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-003-4",
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
    "id": "dsa-p7-004",
    "slug": "smallest-index-whose-prefix-sum-is",
    "title": "Smallest Index Whose Prefix Sum Is",
    "topic": "Fenwick trees (Binary Indexed Trees)",
    "tags": [
      "Binary Tree"
    ],
    "difficulty": "Hard",
    "order": 414,
    "statement": "### Problem Description\n\nFind the smallest index whose prefix sum is at least K.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Fenwick trees (Binary Indexed Trees). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Fenwick trees (Binary Indexed Trees) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Smallest Index Whose Prefix Sum Is\n * Description: Find the smallest index whose prefix sum is at least K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Smallest Index Whose Prefix Sum Is\n * Description: Find the smallest index whose prefix sum is at least K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Smallest Index Whose Prefix Sum Is\nDescription: Find the smallest index whose prefix sum is at least K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Smallest Index Whose Prefix Sum Is\nDescription: Find the smallest index whose prefix sum is at least K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-004-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p7-004-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p7-004-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-004-4",
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
    "id": "dsa-p7-005",
    "slug": "count-inversions-in-an-array-using-coordinate",
    "title": "Count Inversions in an Array Using Coordinate",
    "topic": "Fenwick trees (Binary Indexed Trees)",
    "tags": [
      "Binary Tree"
    ],
    "difficulty": "Hard",
    "order": 415,
    "statement": "### Problem Description\n\nCount inversions in an array using coordinate compression and a Fenwick tree.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Fenwick trees (Binary Indexed Trees). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Fenwick trees (Binary Indexed Trees) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Inversions in an Array Using Coordinate\n * Description: Count inversions in an array using coordinate compression and a Fenwick tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Inversions in an Array Using Coordinate\n * Description: Count inversions in an array using coordinate compression and a Fenwick tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count Inversions in an Array Using Coordinate\nDescription: Count inversions in an array using coordinate compression and a Fenwick tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count Inversions in an Array Using Coordinate\nDescription: Count inversions in an array using coordinate compression and a Fenwick tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-005-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-005-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-005-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-005-4",
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
    "id": "dsa-p7-006",
    "slug": "stream-of-values-maintain-frequency-counts",
    "title": "Stream of Values, Maintain Frequency Counts",
    "topic": "Fenwick trees (Binary Indexed Trees)",
    "tags": [
      "Binary Tree"
    ],
    "difficulty": "Hard",
    "order": 416,
    "statement": "### Problem Description\n\nGiven a stream of values, maintain frequency counts and return the Kth-smallest value.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Fenwick trees (Binary Indexed Trees). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Fenwick trees (Binary Indexed Trees) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Stream of Values, Maintain Frequency Counts\n * Description: Given a stream of values, maintain frequency counts and return the Kth-smallest value.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Stream of Values, Maintain Frequency Counts\n * Description: Given a stream of values, maintain frequency counts and return the Kth-smallest value.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Stream of Values, Maintain Frequency Counts\nDescription: Given a stream of values, maintain frequency counts and return the Kth-smallest value.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Stream of Values, Maintain Frequency Counts\nDescription: Given a stream of values, maintain frequency counts and return the Kth-smallest value.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-006-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-006-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-006-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-006-4",
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
    "id": "dsa-p7-007",
    "slug": "support-point-updates-and-prefix-frequency-queries",
    "title": "Support Point Updates and Prefix-frequency Queries",
    "topic": "Fenwick trees (Binary Indexed Trees)",
    "tags": [
      "Binary Tree"
    ],
    "difficulty": "Hard",
    "order": 417,
    "statement": "### Problem Description\n\nSupport point updates and prefix-frequency queries for a large range of integer values.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Fenwick trees (Binary Indexed Trees). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Fenwick trees (Binary Indexed Trees) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Support Point Updates and Prefix-frequency Queries\n * Description: Support point updates and prefix-frequency queries for a large range of integer values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Support Point Updates and Prefix-frequency Queries\n * Description: Support point updates and prefix-frequency queries for a large range of integer values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Support Point Updates and Prefix-frequency Queries\nDescription: Support point updates and prefix-frequency queries for a large range of integer values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Support Point Updates and Prefix-frequency Queries\nDescription: Support point updates and prefix-frequency queries for a large range of integer values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-007-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-007-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-007-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-007-4",
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
    "id": "dsa-p7-008",
    "slug": "compare-fenwick-trees-and-segment-trees",
    "title": "Compare Fenwick Trees and Segment Trees",
    "topic": "Fenwick trees (Binary Indexed Trees)",
    "tags": [
      "Binary Tree"
    ],
    "difficulty": "Hard",
    "order": 418,
    "statement": "### Problem Description\n\nCompare Fenwick trees and segment trees in terms of supported operations, memory, and implementation complexity.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Fenwick trees (Binary Indexed Trees). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Fenwick trees (Binary Indexed Trees) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Fenwick Trees and Segment Trees\n * Description: Compare Fenwick trees and segment trees in terms of supported operations, memory, and implementation complexity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Fenwick Trees and Segment Trees\n * Description: Compare Fenwick trees and segment trees in terms of supported operations, memory, and implementation complexity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare Fenwick Trees and Segment Trees\nDescription: Compare Fenwick trees and segment trees in terms of supported operations, memory, and implementation complexity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare Fenwick Trees and Segment Trees\nDescription: Compare Fenwick trees and segment trees in terms of supported operations, memory, and implementation complexity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-008-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-008-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-008-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-008-4",
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
    "id": "dsa-p7-001",
    "slug": "implement-disjoint-set-structure-with-find-and-union",
    "title": "Implement Disjoint-set Structure with Find and Union",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 419,
    "statement": "### Problem Description\n\nImplement a disjoint-set structure with find and union.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Disjoint-set Structure with Find and Union\n * Description: Implement a disjoint-set structure with find and union.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Disjoint-set Structure with Find and Union\n * Description: Implement a disjoint-set structure with find and union.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Disjoint-set Structure with Find and Union\nDescription: Implement a disjoint-set structure with find and union.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Disjoint-set Structure with Find and Union\nDescription: Implement a disjoint-set structure with find and union.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-001-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-001-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-001-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-001-4",
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
    "id": "dsa-p7-002",
    "slug": "sequence-of-union-operations-determine-whether",
    "title": "Sequence of Union Operations, Determine Whether",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 420,
    "statement": "### Problem Description\n\nGiven a sequence of union operations, determine whether two elements belong to the same component.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Union Operations, Determine Whether\n * Description: Given a sequence of union operations, determine whether two elements belong to the same component.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Union Operations, Determine Whether\n * Description: Given a sequence of union operations, determine whether two elements belong to the same component.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sequence of Union Operations, Determine Whether\nDescription: Given a sequence of union operations, determine whether two elements belong to the same component.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sequence of Union Operations, Determine Whether\nDescription: Given a sequence of union operations, determine whether two elements belong to the same component.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-002-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-002-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-002-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-002-4",
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
    "id": "dsa-p7-003",
    "slug": "implement-union-by-size-and-compare-tree",
    "title": "Implement Union by Size and Compare Tree",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 421,
    "statement": "### Problem Description\n\nImplement union by size and compare tree height with a naive implementation.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Union by Size and Compare Tree\n * Description: Implement union by size and compare tree height with a naive implementation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Union by Size and Compare Tree\n * Description: Implement union by size and compare tree height with a naive implementation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Union by Size and Compare Tree\nDescription: Implement union by size and compare tree height with a naive implementation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Union by Size and Compare Tree\nDescription: Implement union by size and compare tree height with a naive implementation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-003-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-003-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-003-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-003-4",
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
    "id": "dsa-p7-004",
    "slug": "add-path-compression-and-explain-why",
    "title": "Add Path Compression and Explain Why",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 422,
    "statement": "### Problem Description\n\nAdd path compression and explain why it improves practical performance.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Add Path Compression and Explain Why\n * Description: Add path compression and explain why it improves practical performance.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Add Path Compression and Explain Why\n * Description: Add path compression and explain why it improves practical performance.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Add Path Compression and Explain Why\nDescription: Add path compression and explain why it improves practical performance.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Add Path Compression and Explain Why\nDescription: Add path compression and explain why it improves practical performance.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-004-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-004-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-004-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-004-4",
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
    "id": "dsa-p7-005",
    "slug": "number-of-connected-components-after",
    "title": "Number of Connected Components After",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 423,
    "statement": "### Problem Description\n\nCalculate the number of connected components after a sequence of edge additions.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Number of Connected Components After\n * Description: Calculate the number of connected components after a sequence of edge additions.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Number of Connected Components After\n * Description: Calculate the number of connected components after a sequence of edge additions.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Number of Connected Components After\nDescription: Calculate the number of connected components after a sequence of edge additions.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Number of Connected Components After\nDescription: Calculate the number of connected components after a sequence of edge additions.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-005-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-005-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-005-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-005-4",
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
    "id": "dsa-p7-006",
    "slug": "use-dsu-to-detect-a-cycle",
    "title": "Use DSU to Detect a Cycle",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 424,
    "statement": "### Problem Description\n\nUse DSU to detect a cycle in an undirected graph.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use DSU to Detect a Cycle\n * Description: Use DSU to detect a cycle in an undirected graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use DSU to Detect a Cycle\n * Description: Use DSU to detect a cycle in an undirected graph.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Use DSU to Detect a Cycle\nDescription: Use DSU to detect a cycle in an undirected graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Use DSU to Detect a Cycle\nDescription: Use DSU to detect a cycle in an undirected graph.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-006-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p7-006-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p7-006-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p7-006-4",
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
    "id": "dsa-p7-007",
    "slug": "implement-kruskals-mst-algorithm-using-dsu",
    "title": "Implement Kruskal's MST Algorithm Using DSU",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 425,
    "statement": "### Problem Description\n\nImplement Kruskal's MST algorithm using DSU.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Kruskal's MST Algorithm Using DSU\n * Description: Implement Kruskal's MST algorithm using DSU.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Kruskal's MST Algorithm Using DSU\n * Description: Implement Kruskal's MST algorithm using DSU.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Kruskal's MST Algorithm Using DSU\nDescription: Implement Kruskal's MST algorithm using DSU.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Kruskal's MST Algorithm Using DSU\nDescription: Implement Kruskal's MST algorithm using DSU.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-007-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-007-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-007-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-007-4",
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
    "id": "dsa-p7-008",
    "slug": "grid-determine-the-number-of-islands",
    "title": "Grid, Determine the Number of Islands",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 426,
    "statement": "### Problem Description\n\nGiven a grid, determine the number of islands after each land cell is added.\n\n### Input Format\n- Line 1: Two space-separated integers $R$ and $C$ ($1 \\le R, C \\le 1000$), representing the number of rows and columns.\n- Next $R$ lines: $C$ space-separated integers representing the grid cells.\n\n### Output Format\nPrint the computed integer result (e.g. number of connected components, max area, or traversal distance).",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid, Determine the Number of Islands\n * Description: Given a grid, determine the number of islands after each land cell is added.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Grid, Determine the Number of Islands\n * Description: Given a grid, determine the number of islands after each land cell is added.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Grid, Determine the Number of Islands\nDescription: Given a grid, determine the number of islands after each land cell is added.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Grid, Determine the Number of Islands\nDescription: Given a grid, determine the number of islands after each land cell is added.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-008-1",
        "input": "3 3\n1 1 0\n1 0 0\n0 0 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-dsa-p7-008-2",
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-008-3",
        "input": "1 4\n1 1 1 1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p7-008-4",
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
    "id": "dsa-p7-009",
    "slug": "list-of-account-records-with-shared",
    "title": "List of Account Records with Shared",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 427,
    "statement": "### Problem Description\n\nGiven a list of account records with shared identifiers, merge records that belong to the same person.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $M$ ($1 \\le N, M \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n- Line 3: $M$ space-separated integers $B_1, \\dots, B_M$.\n\n### Output Format\nPrint the merged or evaluated space-separated integers.",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: List of Account Records with Shared\n * Description: Given a list of account records with shared identifiers, merge records that belong to the same person.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: List of Account Records with Shared\n * Description: Given a list of account records with shared identifiers, merge records that belong to the same person.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: List of Account Records with Shared\nDescription: Given a list of account records with shared identifiers, merge records that belong to the same person.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: List of Account Records with Shared\nDescription: Given a list of account records with shared identifiers, merge records that belong to the same person.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-009-1",
        "input": "3 3\n1 3 5\n2 4 6",
        "expectedOutput": "1 2 3 4 5 6"
      },
      {
        "id": "tc-dsa-p7-009-2",
        "input": "2 1\n1 5\n3",
        "expectedOutput": "1 3 5"
      },
      {
        "id": "tc-dsa-p7-009-3",
        "input": "1 1\n10\n20",
        "expectedOutput": "10 20"
      },
      {
        "id": "tc-dsa-p7-009-4",
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
    "id": "dsa-p7-010",
    "slug": "sequence-of-friendships-determine-the-number",
    "title": "Sequence of Friendships, Determine the Number",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 428,
    "statement": "### Problem Description\n\nGiven a sequence of friendships, determine the number of disjoint social groups.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Friendships, Determine the Number\n * Description: Given a sequence of friendships, determine the number of disjoint social groups.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Friendships, Determine the Number\n * Description: Given a sequence of friendships, determine the number of disjoint social groups.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sequence of Friendships, Determine the Number\nDescription: Given a sequence of friendships, determine the number of disjoint social groups.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sequence of Friendships, Determine the Number\nDescription: Given a sequence of friendships, determine the number of disjoint social groups.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-010-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-010-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-010-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-010-4",
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
    "id": "dsa-p7-011",
    "slug": "graph-and-a-sequence-of-edge",
    "title": "Graph and a Sequence of Edge",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 429,
    "statement": "### Problem Description\n\nGiven a graph and a sequence of edge removals, determine the number of connected components after each removal by processing operations in reverse.\n\n### Input Format\n- Line 1: Two space-separated integers $V$ and $E$ ($1 \\le V \\le 10^5$, $0 \\le E \\le 2 \\times 10^5$), representing vertices and edges.\n- Next $E$ lines: Two space-separated integers $u$ and $v$ (1-based indices) indicating an edge between $u$ and $v$.\n\n### Output Format\nPrint the computed metric or traversal sequence space-separated.",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph and a Sequence of Edge\n * Description: Given a graph and a sequence of edge removals, determine the number of connected components after each removal by processing operations in reverse.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Graph and a Sequence of Edge\n * Description: Given a graph and a sequence of edge removals, determine the number of connected components after each removal by processing operations in reverse.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Graph and a Sequence of Edge\nDescription: Given a graph and a sequence of edge removals, determine the number of connected components after each removal by processing operations in reverse.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Graph and a Sequence of Edge\nDescription: Given a graph and a sequence of edge removals, determine the number of connected components after each removal by processing operations in reverse.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-011-1",
        "input": "4 4\n1 2\n2 3\n3 4\n4 1",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-dsa-p7-011-2",
        "input": "3 2\n1 2\n2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-dsa-p7-011-3",
        "input": "1 0",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p7-011-4",
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
    "id": "dsa-p7-012",
    "slug": "explain-why-ordinary-dsu-cannot-directly",
    "title": "Explain Why Ordinary DSU Cannot Directly",
    "topic": "Disjoint Set Union (Union-Find)",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 430,
    "statement": "### Problem Description\n\nExplain why ordinary DSU cannot directly handle arbitrary deletions and propose a suitable offline strategy for a sequence of connectivity queries.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Disjoint Set Union (Union-Find). Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Disjoint Set Union (Union-Find) allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why Ordinary DSU Cannot Directly\n * Description: Explain why ordinary DSU cannot directly handle arbitrary deletions and propose a suitable offline strategy for a sequence of connectivity queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why Ordinary DSU Cannot Directly\n * Description: Explain why ordinary DSU cannot directly handle arbitrary deletions and propose a suitable offline strategy for a sequence of connectivity queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Explain Why Ordinary DSU Cannot Directly\nDescription: Explain why ordinary DSU cannot directly handle arbitrary deletions and propose a suitable offline strategy for a sequence of connectivity queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Explain Why Ordinary DSU Cannot Directly\nDescription: Explain why ordinary DSU cannot directly handle arbitrary deletions and propose a suitable offline strategy for a sequence of connectivity queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-012-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-012-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-012-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-012-4",
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
    "id": "dsa-p7-001",
    "slug": "implement-the-prefix-function-kmp-failure-function",
    "title": "Implement The Prefix-function (KMP Failure Function)",
    "topic": "String indexing and suffix structures",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 431,
    "statement": "### Problem Description\n\nImplement the prefix-function (KMP failure function) for a string.\n\n### Input Format\nA single line containing string $S$.\n\n### Output Format\nPrint the computed string or integer scalar.",
    "examples": [
      {
        "input": "racecar",
        "output": "true",
        "explanation": "\"racecar\" reads identically forward and backward."
      },
      {
        "input": "hello",
        "output": "false",
        "explanation": "\"hello\" is not a palindrome."
      },
      {
        "input": "a",
        "output": "true",
        "explanation": "A single character string is trivially symmetric."
      }
    ],
    "constraints": [
      "1 <= length(S) <= 10^5",
      "Characters consist of printable ASCII",
      "Time complexity target: O(N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing String indexing and suffix structures. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in String indexing and suffix structures allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement The Prefix-function (KMP Failure Function)\n * Description: Implement the prefix-function (KMP failure function) for a string.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement The Prefix-function (KMP Failure Function)\n * Description: Implement the prefix-function (KMP failure function) for a string.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement The Prefix-function (KMP Failure Function)\nDescription: Implement the prefix-function (KMP failure function) for a string.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement The Prefix-function (KMP Failure Function)\nDescription: Implement the prefix-function (KMP failure function) for a string.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-001-1",
        "input": "racecar",
        "expectedOutput": "true"
      },
      {
        "id": "tc-dsa-p7-001-2",
        "input": "hello",
        "expectedOutput": "false"
      },
      {
        "id": "tc-dsa-p7-001-3",
        "input": "a",
        "expectedOutput": "true"
      },
      {
        "id": "tc-dsa-p7-001-4",
        "input": "abcba",
        "expectedOutput": "true"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p7-002",
    "slug": "use-kmp-to-find-every-occurrence",
    "title": "Use KMP to Find Every Occurrence",
    "topic": "String indexing and suffix structures",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 432,
    "statement": "### Problem Description\n\nUse KMP to find every occurrence of a pattern in a text.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing String indexing and suffix structures. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in String indexing and suffix structures allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use KMP to Find Every Occurrence\n * Description: Use KMP to find every occurrence of a pattern in a text.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use KMP to Find Every Occurrence\n * Description: Use KMP to find every occurrence of a pattern in a text.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Use KMP to Find Every Occurrence\nDescription: Use KMP to find every occurrence of a pattern in a text.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Use KMP to Find Every Occurrence\nDescription: Use KMP to find every occurrence of a pattern in a text.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-002-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p7-002-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p7-002-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-002-4",
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
    "id": "dsa-p7-003",
    "slug": "implement-the-z-function-and-use-it",
    "title": "Implement The Z-function and Use It",
    "topic": "String indexing and suffix structures",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 433,
    "statement": "### Problem Description\n\nImplement the Z-function and use it for pattern matching.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing String indexing and suffix structures. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in String indexing and suffix structures allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement The Z-function and Use It\n * Description: Implement the Z-function and use it for pattern matching.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement The Z-function and Use It\n * Description: Implement the Z-function and use it for pattern matching.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement The Z-function and Use It\nDescription: Implement the Z-function and use it for pattern matching.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement The Z-function and Use It\nDescription: Implement the Z-function and use it for pattern matching.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-003-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p7-003-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-003-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p7-003-4",
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
    "id": "dsa-p7-004",
    "slug": "two-strings-find-their-longest-common",
    "title": "Two Strings, Find Their Longest Common",
    "topic": "String indexing and suffix structures",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 434,
    "statement": "### Problem Description\n\nGiven two strings, find their longest common prefix.\n\n### Input Format\nA single line containing string $S$.\n\n### Output Format\nPrint the computed string or integer scalar.",
    "examples": [
      {
        "input": "racecar",
        "output": "true",
        "explanation": "\"racecar\" reads identically forward and backward."
      },
      {
        "input": "hello",
        "output": "false",
        "explanation": "\"hello\" is not a palindrome."
      },
      {
        "input": "a",
        "output": "true",
        "explanation": "A single character string is trivially symmetric."
      }
    ],
    "constraints": [
      "1 <= length(S) <= 10^5",
      "Characters consist of printable ASCII",
      "Time complexity target: O(N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing String indexing and suffix structures. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in String indexing and suffix structures allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Strings, Find Their Longest Common\n * Description: Given two strings, find their longest common prefix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Strings, Find Their Longest Common\n * Description: Given two strings, find their longest common prefix.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Two Strings, Find Their Longest Common\nDescription: Given two strings, find their longest common prefix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Two Strings, Find Their Longest Common\nDescription: Given two strings, find their longest common prefix.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-004-1",
        "input": "racecar",
        "expectedOutput": "true"
      },
      {
        "id": "tc-dsa-p7-004-2",
        "input": "hello",
        "expectedOutput": "false"
      },
      {
        "id": "tc-dsa-p7-004-3",
        "input": "a",
        "expectedOutput": "true"
      },
      {
        "id": "tc-dsa-p7-004-4",
        "input": "abcba",
        "expectedOutput": "true"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p7-005",
    "slug": "longest-palindromic-substring-using-center-expansion",
    "title": "Longest Palindromic Substring Using Center Expansion",
    "topic": "String indexing and suffix structures",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 435,
    "statement": "### Problem Description\n\nFind the longest palindromic substring using center expansion.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing String indexing and suffix structures. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in String indexing and suffix structures allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Longest Palindromic Substring Using Center Expansion\n * Description: Find the longest palindromic substring using center expansion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Longest Palindromic Substring Using Center Expansion\n * Description: Find the longest palindromic substring using center expansion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Longest Palindromic Substring Using Center Expansion\nDescription: Find the longest palindromic substring using center expansion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Longest Palindromic Substring Using Center Expansion\nDescription: Find the longest palindromic substring using center expansion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-005-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-005-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-005-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-005-4",
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
    "id": "dsa-p7-006",
    "slug": "implement-manachers-algorithm-for-finding-the-longest",
    "title": "Implement Manacher's Algorithm for Finding the Longest",
    "topic": "String indexing and suffix structures",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 436,
    "statement": "### Problem Description\n\nImplement Manacher's algorithm for finding the longest palindromic substring in linear time.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing String indexing and suffix structures. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in String indexing and suffix structures allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Manacher's Algorithm for Finding the Longest\n * Description: Implement Manacher's algorithm for finding the longest palindromic substring in linear time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Manacher's Algorithm for Finding the Longest\n * Description: Implement Manacher's algorithm for finding the longest palindromic substring in linear time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Manacher's Algorithm for Finding the Longest\nDescription: Implement Manacher's algorithm for finding the longest palindromic substring in linear time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Manacher's Algorithm for Finding the Longest\nDescription: Implement Manacher's algorithm for finding the longest palindromic substring in linear time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-006-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-006-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-006-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-006-4",
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
    "id": "dsa-p7-007",
    "slug": "construct-a-suffix-array-for",
    "title": "Construct a Suffix Array",
    "topic": "String indexing and suffix structures",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 437,
    "statement": "### Problem Description\n\nConstruct a suffix array for a string using a straightforward sorting approach.\n\n### Input Format\nA single line containing string $S$.\n\n### Output Format\nPrint the computed string or integer scalar.",
    "examples": [
      {
        "input": "racecar",
        "output": "true",
        "explanation": "\"racecar\" reads identically forward and backward."
      },
      {
        "input": "hello",
        "output": "false",
        "explanation": "\"hello\" is not a palindrome."
      },
      {
        "input": "a",
        "output": "true",
        "explanation": "A single character string is trivially symmetric."
      }
    ],
    "constraints": [
      "1 <= length(S) <= 10^5",
      "Characters consist of printable ASCII",
      "Time complexity target: O(N)",
      "Auxiliary space target: O(1) or O(N)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Core Invariant",
        "content": "Examine the mathematical invariants governing String indexing and suffix structures. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in String indexing and suffix structures allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Construct a Suffix Array for\n * Description: Construct a suffix array for a string using a straightforward sorting approach.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Construct a Suffix Array for\n * Description: Construct a suffix array for a string using a straightforward sorting approach.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Construct a Suffix Array for\nDescription: Construct a suffix array for a string using a straightforward sorting approach.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Construct a Suffix Array for\nDescription: Construct a suffix array for a string using a straightforward sorting approach.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-007-1",
        "input": "racecar",
        "expectedOutput": "true"
      },
      {
        "id": "tc-dsa-p7-007-2",
        "input": "hello",
        "expectedOutput": "false"
      },
      {
        "id": "tc-dsa-p7-007-3",
        "input": "a",
        "expectedOutput": "true"
      },
      {
        "id": "tc-dsa-p7-007-4",
        "input": "abcba",
        "expectedOutput": "true"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p7-008",
    "slug": "use-a-suffix-array-and-lcp",
    "title": "Use a Suffix Array and LCP",
    "topic": "String indexing and suffix structures",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 438,
    "statement": "### Problem Description\n\nUse a suffix array and LCP array to find the longest repeated substring.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing String indexing and suffix structures. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in String indexing and suffix structures allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use a Suffix Array and LCP\n * Description: Use a suffix array and LCP array to find the longest repeated substring.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use a Suffix Array and LCP\n * Description: Use a suffix array and LCP array to find the longest repeated substring.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Use a Suffix Array and LCP\nDescription: Use a suffix array and LCP array to find the longest repeated substring.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Use a Suffix Array and LCP\nDescription: Use a suffix array and LCP array to find the longest repeated substring.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-008-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-008-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-008-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-008-4",
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
    "id": "dsa-p7-009",
    "slug": "string-count-the-number-of-distinct",
    "title": "String, Count the Number of Distinct",
    "topic": "String indexing and suffix structures",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 439,
    "statement": "### Problem Description\n\nGiven a string, count the number of distinct substrings using suffix-array and LCP concepts.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing String indexing and suffix structures. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in String indexing and suffix structures allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: String, Count the Number of Distinct\n * Description: Given a string, count the number of distinct substrings using suffix-array and LCP concepts.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: String, Count the Number of Distinct\n * Description: Given a string, count the number of distinct substrings using suffix-array and LCP concepts.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: String, Count the Number of Distinct\nDescription: Given a string, count the number of distinct substrings using suffix-array and LCP concepts.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: String, Count the Number of Distinct\nDescription: Given a string, count the number of distinct substrings using suffix-array and LCP concepts.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-009-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-009-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-009-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-009-4",
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
    "id": "dsa-p7-010",
    "slug": "explain-the-structural-difference-between",
    "title": "Explain the Structural Difference Between",
    "topic": "String indexing and suffix structures",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 440,
    "statement": "### Problem Description\n\nExplain the structural difference between a suffix tree and a suffix array.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing String indexing and suffix structures. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in String indexing and suffix structures allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain the Structural Difference Between\n * Description: Explain the structural difference between a suffix tree and a suffix array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain the Structural Difference Between\n * Description: Explain the structural difference between a suffix tree and a suffix array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Explain the Structural Difference Between\nDescription: Explain the structural difference between a suffix tree and a suffix array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Explain the Structural Difference Between\nDescription: Explain the structural difference between a suffix tree and a suffix array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-010-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p7-010-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p7-010-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-010-4",
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
    "id": "dsa-p7-011",
    "slug": "large-text-and-many-pattern-queries",
    "title": "Large Text and Many Pattern Queries",
    "topic": "String indexing and suffix structures",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 441,
    "statement": "### Problem Description\n\nGiven a large text and many pattern queries, compare naive search, KMP, suffix arrays, and trie-based indexing.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing String indexing and suffix structures. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in String indexing and suffix structures allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Large Text and Many Pattern Queries\n * Description: Given a large text and many pattern queries, compare naive search, KMP, suffix arrays, and trie-based indexing.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Large Text and Many Pattern Queries\n * Description: Given a large text and many pattern queries, compare naive search, KMP, suffix arrays, and trie-based indexing.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Large Text and Many Pattern Queries\nDescription: Given a large text and many pattern queries, compare naive search, KMP, suffix arrays, and trie-based indexing.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Large Text and Many Pattern Queries\nDescription: Given a large text and many pattern queries, compare naive search, KMP, suffix arrays, and trie-based indexing.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p7-011-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p7-011-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p7-011-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p7-011-4",
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
