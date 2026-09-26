import type { DsaProblem } from '@/types/dsa-question';

export const PHASE_9_PROBLEMS: DsaProblem[] = [
  {
    "id": "dsa-p9-001",
    "slug": "collection-of-records-with-unique-ids",
    "title": "Collection of Records with Unique IDs",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 469,
    "statement": "### Problem Description\n\nGiven a collection of records with unique IDs, implement linear lookup and measure the number of records examined.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Collection of Records with Unique IDs\n * Description: Given a collection of records with unique IDs, implement linear lookup and measure the number of records examined.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Collection of Records with Unique IDs\n * Description: Given a collection of records with unique IDs, implement linear lookup and measure the number of records examined.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Collection of Records with Unique IDs\nDescription: Given a collection of records with unique IDs, implement linear lookup and measure the number of records examined.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Collection of Records with Unique IDs\nDescription: Given a collection of records with unique IDs, implement linear lookup and measure the number of records examined.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-001-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-001-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-001-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-001-4",
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
    "id": "dsa-p9-002",
    "slug": "build-an-array-based-secondary-index-that",
    "title": "Build an Array-based Secondary Index That",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 470,
    "statement": "### Problem Description\n\nBuild an array-based secondary index that maps record IDs to record positions.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Build an Array-based Secondary Index That\n * Description: Build an array-based secondary index that maps record IDs to record positions.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Build an Array-based Secondary Index That\n * Description: Build an array-based secondary index that maps record IDs to record positions.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Build an Array-based Secondary Index That\nDescription: Build an array-based secondary index that maps record IDs to record positions.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Build an Array-based Secondary Index That\nDescription: Build an array-based secondary index that maps record IDs to record positions.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-002-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-002-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-002-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-002-4",
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
    "id": "dsa-p9-003",
    "slug": "sorted-dataset-implement-binary-search",
    "title": "Sorted Dataset, Implement Binary Search",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 471,
    "statement": "### Problem Description\n\nGiven a sorted dataset, implement binary search and compare its lookup cost with a hash index.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sorted Dataset, Implement Binary Search\n * Description: Given a sorted dataset, implement binary search and compare its lookup cost with a hash index.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sorted Dataset, Implement Binary Search\n * Description: Given a sorted dataset, implement binary search and compare its lookup cost with a hash index.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sorted Dataset, Implement Binary Search\nDescription: Given a sorted dataset, implement binary search and compare its lookup cost with a hash index.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sorted Dataset, Implement Binary Search\nDescription: Given a sorted dataset, implement binary search and compare its lookup cost with a hash index.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-003-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p9-003-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p9-003-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p9-003-4",
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
    "id": "dsa-p9-004",
    "slug": "collection-of-records-and-a-query",
    "title": "Collection of Records and a Query",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 472,
    "statement": "### Problem Description\n\nGiven a collection of records and a query on one field, build a sorted index on that field.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Collection of Records and a Query\n * Description: Given a collection of records and a query on one field, build a sorted index on that field.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Collection of Records and a Query\n * Description: Given a collection of records and a query on one field, build a sorted index on that field.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Collection of Records and a Query\nDescription: Given a collection of records and a query on one field, build a sorted index on that field.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Collection of Records and a Query\nDescription: Given a collection of records and a query on one field, build a sorted index on that field.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-004-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-004-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-004-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-004-4",
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
    "id": "dsa-p9-005",
    "slug": "support-range-queries-over-an-indexed",
    "title": "Support Range Queries Over an Indexed",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 473,
    "statement": "### Problem Description\n\nSupport range queries over an indexed field and return all matching records in sorted order.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Support Range Queries Over an Indexed\n * Description: Support range queries over an indexed field and return all matching records in sorted order.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Support Range Queries Over an Indexed\n * Description: Support range queries over an indexed field and return all matching records in sorted order.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Support Range Queries Over an Indexed\nDescription: Support range queries over an indexed field and return all matching records in sorted order.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Support Range Queries Over an Indexed\nDescription: Support range queries over an indexed field and return all matching records in sorted order.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-005-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-005-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-005-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-005-4",
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
    "id": "dsa-p9-006",
    "slug": "two-fields-build-a-composite-index",
    "title": "Two Fields, Build a Composite Index",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 474,
    "statement": "### Problem Description\n\nGiven two fields, build a composite index and explain how the order of indexed fields affects supported queries.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Fields, Build a Composite Index\n * Description: Given two fields, build a composite index and explain how the order of indexed fields affects supported queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Fields, Build a Composite Index\n * Description: Given two fields, build a composite index and explain how the order of indexed fields affects supported queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Two Fields, Build a Composite Index\nDescription: Given two fields, build a composite index and explain how the order of indexed fields affects supported queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Two Fields, Build a Composite Index\nDescription: Given two fields, build a composite index and explain how the order of indexed fields affects supported queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-006-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-006-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-006-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-006-4",
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
    "id": "dsa-p9-007",
    "slug": "database-query-workload-identify-which-queries",
    "title": "Database Query Workload, Identify Which Queries",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 475,
    "statement": "### Problem Description\n\nGiven a database query workload, identify which queries can use a particular index and which require a scan.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Database Query Workload, Identify Which Queries\n * Description: Given a database query workload, identify which queries can use a particular index and which require a scan.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Database Query Workload, Identify Which Queries\n * Description: Given a database query workload, identify which queries can use a particular index and which require a scan.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Database Query Workload, Identify Which Queries\nDescription: Given a database query workload, identify which queries can use a particular index and which require a scan.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Database Query Workload, Identify Which Queries\nDescription: Given a database query workload, identify which queries can use a particular index and which require a scan.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-007-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-007-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-007-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-007-4",
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
    "id": "dsa-p9-008",
    "slug": "implement-simple-inverted-index-mapping-words",
    "title": "Implement Simple Inverted Index Mapping Words",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 476,
    "statement": "### Problem Description\n\nImplement a simple inverted index mapping words to the document IDs in which they appear.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Simple Inverted Index Mapping Words\n * Description: Implement a simple inverted index mapping words to the document IDs in which they appear.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Simple Inverted Index Mapping Words\n * Description: Implement a simple inverted index mapping words to the document IDs in which they appear.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Simple Inverted Index Mapping Words\nDescription: Implement a simple inverted index mapping words to the document IDs in which they appear.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Simple Inverted Index Mapping Words\nDescription: Implement a simple inverted index mapping words to the document IDs in which they appear.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-008-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-008-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-008-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-008-4",
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
    "id": "dsa-p9-009",
    "slug": "the-inverted-index-to-store-term",
    "title": "The Inverted Index to Store Term",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 477,
    "statement": "### Problem Description\n\nExtend the inverted index to store term frequencies and support ranked retrieval.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Inverted Index to Store Term\n * Description: Extend the inverted index to store term frequencies and support ranked retrieval.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Inverted Index to Store Term\n * Description: Extend the inverted index to store term frequencies and support ranked retrieval.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: The Inverted Index to Store Term\nDescription: Extend the inverted index to store term frequencies and support ranked retrieval.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: The Inverted Index to Store Term\nDescription: Extend the inverted index to store term frequencies and support ranked retrieval.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-009-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-009-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-009-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-009-4",
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
    "id": "dsa-p9-010",
    "slug": "collection-of-documents-implement-boolean",
    "title": "Collection of Documents, Implement Boolean",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 478,
    "statement": "### Problem Description\n\nGiven a collection of documents, implement Boolean AND, OR, and NOT queries using posting lists.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Collection of Documents, Implement Boolean\n * Description: Given a collection of documents, implement Boolean AND, OR, and NOT queries using posting lists.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Collection of Documents, Implement Boolean\n * Description: Given a collection of documents, implement Boolean AND, OR, and NOT queries using posting lists.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Collection of Documents, Implement Boolean\nDescription: Given a collection of documents, implement Boolean AND, OR, and NOT queries using posting lists.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Collection of Documents, Implement Boolean\nDescription: Given a collection of documents, implement Boolean AND, OR, and NOT queries using posting lists.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-010-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-010-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-010-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-010-4",
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
    "id": "dsa-p9-011",
    "slug": "merge-sorted-posting-lists-to-perform",
    "title": "Merge Sorted Posting Lists to Perform",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 479,
    "statement": "### Problem Description\n\nMerge two sorted posting lists to perform an intersection query.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $M$ ($1 \\le N, M \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n- Line 3: $M$ space-separated integers $B_1, \\dots, B_M$.\n\n### Output Format\nPrint the merged or evaluated space-separated integers.",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Merge Sorted Posting Lists to Perform\n * Description: Merge two sorted posting lists to perform an intersection query.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Merge Sorted Posting Lists to Perform\n * Description: Merge two sorted posting lists to perform an intersection query.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Merge Sorted Posting Lists to Perform\nDescription: Merge two sorted posting lists to perform an intersection query.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Merge Sorted Posting Lists to Perform\nDescription: Merge two sorted posting lists to perform an intersection query.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-011-1",
        "input": "3 3\n1 3 5\n2 4 6",
        "expectedOutput": "1 2 3 4 5 6"
      },
      {
        "id": "tc-dsa-p9-011-2",
        "input": "2 1\n1 5\n3",
        "expectedOutput": "1 3 5"
      },
      {
        "id": "tc-dsa-p9-011-3",
        "input": "1 1\n10\n20",
        "expectedOutput": "10 20"
      },
      {
        "id": "tc-dsa-p9-011-4",
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
    "id": "dsa-p9-012",
    "slug": "query-involving-several-terms-order-posting-list",
    "title": "Query Involving Several Terms, Order Posting-list",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 480,
    "statement": "### Problem Description\n\nGiven a query involving several terms, order posting-list intersections to reduce intermediate results.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Query Involving Several Terms, Order Posting-list\n * Description: Given a query involving several terms, order posting-list intersections to reduce intermediate results.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Query Involving Several Terms, Order Posting-list\n * Description: Given a query involving several terms, order posting-list intersections to reduce intermediate results.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Query Involving Several Terms, Order Posting-list\nDescription: Given a query involving several terms, order posting-list intersections to reduce intermediate results.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Query Involving Several Terms, Order Posting-list\nDescription: Given a query involving several terms, order posting-list intersections to reduce intermediate results.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-012-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-012-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-012-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-012-4",
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
    "id": "dsa-p9-013",
    "slug": "design-prefix-index-for-autocomplete-over",
    "title": "Design Prefix Index for Autocomplete Over",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 481,
    "statement": "### Problem Description\n\nDesign a prefix index for autocomplete over a large collection of names.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Prefix Index for Autocomplete Over\n * Description: Design a prefix index for autocomplete over a large collection of names.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Prefix Index for Autocomplete Over\n * Description: Design a prefix index for autocomplete over a large collection of names.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Prefix Index for Autocomplete Over\nDescription: Design a prefix index for autocomplete over a large collection of names.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Prefix Index for Autocomplete Over\nDescription: Design a prefix index for autocomplete over a large collection of names.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-013-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-013-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-013-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-013-4",
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
    "id": "dsa-p9-014",
    "slug": "compare-a-trie-sorted-array-hash",
    "title": "Compare a Trie, Sorted Array, Hash",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 482,
    "statement": "### Problem Description\n\nCompare a trie, sorted array, hash table, and B-tree for prefix lookup, exact lookup, and range queries.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$), the number of nodes.\n- Line 2: $N$ space-separated integers representing the node values in level-order. (Omitted if $N = 0$).\n\n### Output Format\nPrint the computed integer scalar or space-separated traversal sequence.",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare a Trie, Sorted Array, Hash\n * Description: Compare a trie, sorted array, hash table, and B-tree for prefix lookup, exact lookup, and range queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare a Trie, Sorted Array, Hash\n * Description: Compare a trie, sorted array, hash table, and B-tree for prefix lookup, exact lookup, and range queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare a Trie, Sorted Array, Hash\nDescription: Compare a trie, sorted array, hash table, and B-tree for prefix lookup, exact lookup, and range queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare a Trie, Sorted Array, Hash\nDescription: Compare a trie, sorted array, hash table, and B-tree for prefix lookup, exact lookup, and range queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-014-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4 2 5 1 3"
      },
      {
        "id": "tc-dsa-p9-014-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-014-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p9-014-4",
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
    "id": "dsa-p9-015",
    "slug": "large-dataset-that-cannot-fit-into",
    "title": "Large Dataset That Cannot Fit Into",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 483,
    "statement": "### Problem Description\n\nGiven a large dataset that cannot fit into memory, design a disk-based index and identify the role of page size, fanout, and caching.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Large Dataset That Cannot Fit Into\n * Description: Given a large dataset that cannot fit into memory, design a disk-based index and identify the role of page size, fanout, and caching.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Large Dataset That Cannot Fit Into\n * Description: Given a large dataset that cannot fit into memory, design a disk-based index and identify the role of page size, fanout, and caching.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Large Dataset That Cannot Fit Into\nDescription: Given a large dataset that cannot fit into memory, design a disk-based index and identify the role of page size, fanout, and caching.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Large Dataset That Cannot Fit Into\nDescription: Given a large dataset that cannot fit into memory, design a disk-based index and identify the role of page size, fanout, and caching.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-015-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-015-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-015-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-015-4",
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
    "id": "dsa-p9-016",
    "slug": "design-small-search-engine-index-that-supports",
    "title": "Design Small Search Engine Index That Supports",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 484,
    "statement": "### Problem Description\n\nDesign a small search engine index that supports document insertion, deletion, keyword lookup, and ranked results.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $-10^9 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the resulting index, boolean, or computed value.",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Small Search Engine Index That Supports\n * Description: Design a small search engine index that supports document insertion, deletion, keyword lookup, and ranked results.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Small Search Engine Index That Supports\n * Description: Design a small search engine index that supports document insertion, deletion, keyword lookup, and ranked results.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Small Search Engine Index That Supports\nDescription: Design a small search engine index that supports document insertion, deletion, keyword lookup, and ranked results.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Small Search Engine Index That Supports\nDescription: Design a small search engine index that supports document insertion, deletion, keyword lookup, and ranked results.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-016-1",
        "input": "5 7\n1 3 4 5 9",
        "expectedOutput": "3"
      },
      {
        "id": "tc-dsa-p9-016-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-dsa-p9-016-3",
        "input": "1 5\n5",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p9-016-4",
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
    "id": "dsa-p9-017",
    "slug": "changing-dataset-determine-how-an-index",
    "title": "Changing Dataset, Determine How an Index",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 485,
    "statement": "### Problem Description\n\nGiven a changing dataset, determine how an index can be updated incrementally rather than rebuilt from scratch.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the computed result (scalar integer or space-separated sequence).",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Changing Dataset, Determine How an Index\n * Description: Given a changing dataset, determine how an index can be updated incrementally rather than rebuilt from scratch.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Changing Dataset, Determine How an Index\n * Description: Given a changing dataset, determine how an index can be updated incrementally rather than rebuilt from scratch.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Changing Dataset, Determine How an Index\nDescription: Given a changing dataset, determine how an index can be updated incrementally rather than rebuilt from scratch.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Changing Dataset, Determine How an Index\nDescription: Given a changing dataset, determine how an index can be updated incrementally rather than rebuilt from scratch.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-017-1",
        "input": "5\n3 1 4 1 5",
        "expectedOutput": "1 1 3 4 5"
      },
      {
        "id": "tc-dsa-p9-017-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-dsa-p9-017-3",
        "input": "4\n-10 -5 0 5",
        "expectedOutput": "-10 -5 0 5"
      },
      {
        "id": "tc-dsa-p9-017-4",
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
    "id": "dsa-p9-018",
    "slug": "workload-with-millions-of-records",
    "title": "Workload with Millions of Records",
    "topic": "Index construction and query optimization",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 486,
    "statement": "### Problem Description\n\nGiven a workload with millions of records and frequent writes, analyze the tradeoff between additional indexes and write throughput.\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the exact calculated number of executions or metric as a 64-bit integer.",
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
        "content": "Examine the mathematical invariants governing Index construction and query optimization. Focus on what remains unchanged across each state transition."
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
        "keyObservation": "Exploiting structural properties in Index construction and query optimization allows single-pass or logarithmic resolution without redundant computations.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Workload with Millions of Records\n * Description: Given a workload with millions of records and frequent writes, analyze the tradeoff between additional indexes and write throughput.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Workload with Millions of Records\n * Description: Given a workload with millions of records and frequent writes, analyze the tradeoff between additional indexes and write throughput.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Workload with Millions of Records\nDescription: Given a workload with millions of records and frequent writes, analyze the tradeoff between additional indexes and write throughput.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Workload with Millions of Records\nDescription: Given a workload with millions of records and frequent writes, analyze the tradeoff between additional indexes and write throughput.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-dsa-p9-018-1",
        "input": "4",
        "expectedOutput": "10"
      },
      {
        "id": "tc-dsa-p9-018-2",
        "input": "1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-dsa-p9-018-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-dsa-p9-018-4",
        "input": "5",
        "expectedOutput": "15"
      },
      {
        "id": "tc-dsa-p9-018-5",
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
