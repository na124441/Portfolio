import type { DsaProblem } from '@/types/dsa-question';

export const PHASE_1_PROBLEMS: DsaProblem[] = [
  {
    "id": "dsa-p1-001",
    "slug": "implement-dynamic-integer-array-from-scratch-using",
    "title": "Dynamic Array with Fixed Initial Capacity",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Warm-up",
    "order": 19,
    "statement": "### Problem Description\n\nImplement a dynamic integer array from scratch using an initial buffer of capacity 4.\n\nSupport $Q$ operations:\n- `push x`: Append integer $x$ to the end of array.\n- `get i`: Print element at 0-based index $i$. If $i$ is out of bounds, print `-1`.\n- `size`: Print current number of elements.\n- `print`: Print all elements space-separated, or `EMPTY` if empty.\n\n### Input Format\n- Line 1: An integer $Q$ ($1 \\le Q \\le 10^4$).\n- Next $Q$ lines: Operation commands.\n\n### Output Format\nPrint results for each `get`, `size`, and `print` operation on separate lines.",
    "examples": [
      {
        "input": "5\npush 10\npush 20\nsize\nget 1\nprint",
        "output": "2\n20\n10 20",
        "explanation": "Array contains 10 and 20. Size is 2. Element at index 1 is 20."
      },
      {
        "input": "3\nprint\nget 0\nsize",
        "output": "EMPTY\n-1\n0",
        "explanation": "Empty array produces EMPTY, -1 for out-of-bounds get, and size 0."
      },
      {
        "input": "6\npush 5\npush 15\npush 25\nget 2\nget 3\nsize",
        "output": "25\n-1\n3",
        "explanation": "Index 2 is 25, index 3 is out-of-bounds (-1), size is 3."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Dynamic Integer Array from Scratch Using\n * Description: Implement a dynamic integer array from scratch using a fixed-size underlying buffer. Support insertion at the end, access by index, and traversal.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Dynamic Integer Array from Scratch Using\n * Description: Implement a dynamic integer array from scratch using a fixed-size underlying buffer. Support insertion at the end, access by index, and traversal.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Dynamic Integer Array from Scratch Using\nDescription: Implement a dynamic integer array from scratch using a fixed-size underlying buffer. Support insertion at the end, access by index, and traversal.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Dynamic Integer Array from Scratch Using\nDescription: Implement a dynamic integer array from scratch using a fixed-size underlying buffer. Support insertion at the end, access by index, and traversal.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-19-1",
        "input": "5\npush 10\npush 20\nsize\nget 1\nprint",
        "expectedOutput": "2\n20\n10 20"
      },
      {
        "id": "tc-p1-19-2",
        "input": "3\nprint\nget 0\nsize",
        "expectedOutput": "EMPTY\n-1\n0"
      },
      {
        "id": "tc-p1-19-3",
        "input": "6\npush 5\npush 15\npush 25\nget 2\nget 3\nsize",
        "expectedOutput": "25\n-1\n3"
      },
      {
        "id": "tc-p1-19-4",
        "input": "7\npush 1\npush 2\npush 3\npush 4\npush 5\nsize\nprint",
        "expectedOutput": "5\n1 2 3 4 5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-002",
    "slug": "implementation-to-support-dynamic-resizing-when",
    "title": "Dynamic Array with Automatic Capacity Doubling",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Warm-up",
    "order": 20,
    "statement": "### Problem Description\n\nExtend dynamic array to support automatic doubling when capacity is exhausted. Initial capacity is 2.\n\nSupport $Q$ operations:\n- `push x`: If size equals capacity, double capacity ($C \\leftarrow 2C$) and print `RESIZE {new_cap}`. Then append $x$.\n- `capacity`: Print current capacity.\n- `size`: Print current size.\n- `print`: Print all elements, or `EMPTY` if empty.\n\n### Input Format\n- Line 1: An integer $Q$ ($1 \\le Q \\le 10^4$).\n- Next $Q$ lines: Operations.\n\n### Output Format\nPrint query outputs and resize notifications on separate lines.",
    "examples": [
      {
        "input": "6\npush 10\npush 20\ncapacity\npush 30\ncapacity\nsize",
        "output": "2\nRESIZE 4\n4\n3",
        "explanation": "Capacity reaches 2, pushing 30 triggers resize to 4."
      },
      {
        "input": "3\ncapacity\nsize\nprint",
        "output": "2\n0\nEMPTY",
        "explanation": "Initial state: capacity 2, size 0, EMPTY."
      },
      {
        "input": "5\npush 1\npush 2\npush 3\npush 4\npush 5",
        "output": "RESIZE 4\nRESIZE 8",
        "explanation": "Resizes trigger at 3rd element (cap 4) and 5th element (cap 8)."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implementation to Support Dynamic Resizing When\n * Description: Extend your implementation to support dynamic resizing when capacity is exhausted. Track the size and capacity separately.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implementation to Support Dynamic Resizing When\n * Description: Extend your implementation to support dynamic resizing when capacity is exhausted. Track the size and capacity separately.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implementation to Support Dynamic Resizing When\nDescription: Extend your implementation to support dynamic resizing when capacity is exhausted. Track the size and capacity separately.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implementation to Support Dynamic Resizing When\nDescription: Extend your implementation to support dynamic resizing when capacity is exhausted. Track the size and capacity separately.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-20-1",
        "input": "6\npush 10\npush 20\ncapacity\npush 30\ncapacity\nsize",
        "expectedOutput": "2\nRESIZE 4\n4\n3"
      },
      {
        "id": "tc-p1-20-2",
        "input": "3\ncapacity\nsize\nprint",
        "expectedOutput": "2\n0\nEMPTY"
      },
      {
        "id": "tc-p1-20-3",
        "input": "5\npush 1\npush 2\npush 3\npush 4\npush 5",
        "expectedOutput": "RESIZE 4\nRESIZE 8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-003",
    "slug": "array-print-every-element-along",
    "title": "Print Array Elements with Indices and Count",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Warm-up",
    "order": 21,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, print each element along with its 0-based index formatted as `Index {i}: {value}` on separate lines.\nFinally, print `Total elements: {N}`.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_0, A_1, \\dots, A_{N-1}$. (Omitted if $N = 0$).\n\n### Output Format\n- $N$ lines: `Index i: A[i]`\n- Final line: `Total elements: N`",
    "examples": [
      {
        "input": "3\n10 20 30",
        "output": "Index 0: 10\nIndex 1: 20\nIndex 2: 30\nTotal elements: 3",
        "explanation": "Elements at 0, 1, 2 printed with total count 3."
      },
      {
        "input": "1\n42",
        "output": "Index 0: 42\nTotal elements: 1",
        "explanation": "Single element at index 0."
      },
      {
        "input": "0",
        "output": "Total elements: 0",
        "explanation": "Empty array outputs only count 0."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Print Every Element Along\n * Description: Given an array, print every element along with its index, and count the number of elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Print Every Element Along\n * Description: Given an array, print every element along with its index, and count the number of elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Print Every Element Along\nDescription: Given an array, print every element along with its index, and count the number of elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Print Every Element Along\nDescription: Given an array, print every element along with its index, and count the number of elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-21-1",
        "input": "3\n10 20 30",
        "expectedOutput": "Index 0: 10\nIndex 1: 20\nIndex 2: 30\nTotal elements: 3"
      },
      {
        "id": "tc-p1-21-2",
        "input": "1\n42",
        "expectedOutput": "Index 0: 42\nTotal elements: 1"
      },
      {
        "id": "tc-p1-21-3",
        "input": "0",
        "expectedOutput": "Total elements: 0"
      },
      {
        "id": "tc-p1-21-4",
        "input": "4\n-5 0 5 10",
        "expectedOutput": "Index 0: -5\nIndex 1: 0\nIndex 2: 5\nIndex 3: 10\nTotal elements: 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-004",
    "slug": "minimum-and-maximum-element-in",
    "title": "Single Pass Min and Max with Comparisons",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Warm-up",
    "order": 22,
    "statement": "### Problem Description\n\nFind the minimum and maximum element in an array of $N$ integers in one traversal.\nCompare elements in pairs so that total comparisons between array elements is at most $\\lceil 3N/2 \\rceil$.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\n- Line 1: Two space-separated integers: `min_val max_val`\n- Line 2: An integer representing total element comparisons performed.",
    "examples": [
      {
        "input": "5\n3 1 9 7 2",
        "output": "1 9\n6",
        "explanation": "Pairs evaluated in 6 comparisons <= ceil(3*5/2)=8."
      },
      {
        "input": "1\n100",
        "output": "100 100\n0",
        "explanation": "Single element requires 0 comparisons."
      },
      {
        "input": "2\n5 8",
        "output": "5 8\n1",
        "explanation": "Comparing 5 and 8 takes 1 comparison."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Minimum and Maximum Element in\n * Description: Find the minimum and maximum element in a given array in one traversal. Count the number of comparisons.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Minimum and Maximum Element in\n * Description: Find the minimum and maximum element in a given array in one traversal. Count the number of comparisons.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Minimum and Maximum Element in\nDescription: Find the minimum and maximum element in a given array in one traversal. Count the number of comparisons.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Minimum and Maximum Element in\nDescription: Find the minimum and maximum element in a given array in one traversal. Count the number of comparisons.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-22-1",
        "input": "5\n3 1 9 7 2",
        "expectedOutput": "1 9\n6"
      },
      {
        "id": "tc-p1-22-2",
        "input": "1\n100",
        "expectedOutput": "100 100\n0"
      },
      {
        "id": "tc-p1-22-3",
        "input": "2\n5 8",
        "expectedOutput": "5 8\n1"
      },
      {
        "id": "tc-p1-22-4",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 40\n4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-005",
    "slug": "sum-and-average-of-array-elements",
    "title": "Sum and Integer Average of Array Elements",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Warm-up",
    "order": 23,
    "statement": "### Problem Description\n\nCalculate the total sum and integer average (truncated toward zero) of $N$ array integers.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint two space-separated integers: `sum average`.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "100 25",
        "explanation": "Sum = 100, Average = 100 / 4 = 25."
      },
      {
        "input": "3\n5 7 10",
        "output": "22 7",
        "explanation": "Sum = 22, truncated average 22 / 3 = 7."
      },
      {
        "input": "3\n-10 -5 2",
        "output": "-13 -4",
        "explanation": "Sum = -13, truncated average -13 / 3 = -4."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sum and Average of Array Elements\n * Description: Calculate the sum and average of array elements without using STL algorithms.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sum and Average of Array Elements\n * Description: Calculate the sum and average of array elements without using STL algorithms.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sum and Average of Array Elements\nDescription: Calculate the sum and average of array elements without using STL algorithms.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sum and Average of Array Elements\nDescription: Calculate the sum and average of array elements without using STL algorithms.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-23-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "100 25"
      },
      {
        "id": "tc-p1-23-2",
        "input": "3\n5 7 10",
        "expectedOutput": "22 7"
      },
      {
        "id": "tc-p1-23-3",
        "input": "3\n-10 -5 2",
        "expectedOutput": "-13 -4"
      },
      {
        "id": "tc-p1-23-4",
        "input": "1\n-99",
        "expectedOutput": "-99 -99"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-006",
    "slug": "count-occurrences-of-a-given-target",
    "title": "Count Target Occurrences and Indices",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Warm-up",
    "order": 24,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers and a target value $T$, count how many times $T$ appears, and print all 0-based indices where it occurs in ascending order.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $T$ ($1 \\le N \\le 10^5$, $-10^9 \\le T \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_0, A_1, \\dots, A_{N-1}$.\n\n### Output Format\n- Line 1: An integer representing count of occurrences.\n- Line 2: Space-separated 0-based indices where $T$ occurs, or `-1` if count is 0.",
    "examples": [
      {
        "input": "6 5\n1 5 3 5 5 2",
        "output": "3\n1 3 4",
        "explanation": "Target 5 appears 3 times at indices 1, 3, and 4."
      },
      {
        "input": "4 10\n1 2 3 4",
        "output": "0\n-1",
        "explanation": "Target 10 does not appear in the array."
      },
      {
        "input": "1 7\n7",
        "output": "1\n0",
        "explanation": "Target 7 appears once at index 0."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Occurrences of a Given Target\n * Description: Count the occurrences of a given target in an array. Return all indices where it occurs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Occurrences of a Given Target\n * Description: Count the occurrences of a given target in an array. Return all indices where it occurs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count Occurrences of a Given Target\nDescription: Count the occurrences of a given target in an array. Return all indices where it occurs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count Occurrences of a Given Target\nDescription: Count the occurrences of a given target in an array. Return all indices where it occurs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-24-1",
        "input": "6 5\n1 5 3 5 5 2",
        "expectedOutput": "3\n1 3 4"
      },
      {
        "id": "tc-p1-24-2",
        "input": "4 10\n1 2 3 4",
        "expectedOutput": "0\n-1"
      },
      {
        "id": "tc-p1-24-3",
        "input": "1 7\n7",
        "expectedOutput": "1\n0"
      },
      {
        "id": "tc-p1-24-4",
        "input": "5 2\n2 2 2 2 2",
        "expectedOutput": "5\n0 1 2 3 4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-007",
    "slug": "reverse-an-array-in-place-using-two",
    "title": "Reverse Array In-Place",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array",
      "Two Pointers"
    ],
    "difficulty": "Warm-up",
    "order": 25,
    "statement": "### Problem Description\n\nReverse an array of $N$ integers in-place using two pointers.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the $N$ reversed integers separated by a single space.",
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "5 4 3 2 1",
        "explanation": "Reversing 1 2 3 4 5 yields 5 4 3 2 1."
      },
      {
        "input": "1\n99",
        "output": "99",
        "explanation": "Single element remains unchanged."
      },
      {
        "input": "4\n10 20 30 40",
        "output": "40 30 20 10",
        "explanation": "Even length array reversal."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Reverse An Array in Place Using Two\n * Description: Reverse an array in place using two pointers. Then implement a version that uses an auxiliary array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Reverse An Array in Place Using Two\n * Description: Reverse an array in place using two pointers. Then implement a version that uses an auxiliary array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Reverse An Array in Place Using Two\nDescription: Reverse an array in place using two pointers. Then implement a version that uses an auxiliary array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Reverse An Array in Place Using Two\nDescription: Reverse an array in place using two pointers. Then implement a version that uses an auxiliary array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-25-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "5 4 3 2 1"
      },
      {
        "id": "tc-p1-25-2",
        "input": "1\n99",
        "expectedOutput": "99"
      },
      {
        "id": "tc-p1-25-3",
        "input": "4\n10 20 30 40",
        "expectedOutput": "40 30 20 10"
      },
      {
        "id": "tc-p1-25-4",
        "input": "6\n1 0 -1 0 1 2",
        "expectedOutput": "2 1 0 -1 0 1"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-008",
    "slug": "rotate-an-array-one-position",
    "title": "Rotate Array One Position Left and Right",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Warm-up",
    "order": 26,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers:\n1. Print the array rotated one position to the left (first element moves to the end).\n2. Print the original array rotated one position to the right (last element moves to the front).\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\n- Line 1: $N$ space-separated integers after 1-position left rotation.\n- Line 2: $N$ space-separated integers after 1-position right rotation.",
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "2 3 4 5 1\n5 1 2 3 4",
        "explanation": "Left rotate moves 1 to back. Right rotate moves 5 to front."
      },
      {
        "input": "1\n42",
        "output": "42\n42",
        "explanation": "Single element remains same in both rotations."
      },
      {
        "input": "3\n10 20 30",
        "output": "20 30 10\n30 10 20",
        "explanation": "Left: 20 30 10. Right: 30 10 20."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Rotate an Array One Position\n * Description: Rotate an array one position to the left and one position to the right without using another array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Rotate an Array One Position\n * Description: Rotate an array one position to the left and one position to the right without using another array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Rotate an Array One Position\nDescription: Rotate an array one position to the left and one position to the right without using another array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Rotate an Array One Position\nDescription: Rotate an array one position to the left and one position to the right without using another array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-26-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "2 3 4 5 1\n5 1 2 3 4"
      },
      {
        "id": "tc-p1-26-2",
        "input": "1\n42",
        "expectedOutput": "42\n42"
      },
      {
        "id": "tc-p1-26-3",
        "input": "3\n10 20 30",
        "expectedOutput": "20 30 10\n30 10 20"
      },
      {
        "id": "tc-p1-26-4",
        "input": "2\n7 9",
        "expectedOutput": "9 7\n9 7"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-009",
    "slug": "element-at-a-specified-valid-index",
    "title": "Insert Element at Index in Array",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 27,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, insert a value $val$ at a specified 0-based index $idx$ ($0 \\le idx \\le N$) by shifting subsequent elements to the right.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_0, \\dots, A_{N-1}$. (Omitted if $N = 0$).\n- Line 3: Two space-separated integers $idx$ and $val$.\n\n### Output Format\nPrint the $N+1$ space-separated integers of the updated array.",
    "examples": [
      {
        "input": "4\n1 2 4 5\n2 3",
        "output": "1 2 3 4 5",
        "explanation": "Insert 3 at index 2 shifts 4 and 5 to the right."
      },
      {
        "input": "3\n10 20 30\n0 5",
        "output": "5 10 20 30",
        "explanation": "Insert 5 at head (index 0)."
      },
      {
        "input": "0\n0 99",
        "output": "99",
        "explanation": "Insert 99 into an empty array."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Element At a Specified Valid Index\n * Description: Insert an element at a specified valid index by shifting elements. Extend the dynamic array to grow when needed.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Element At a Specified Valid Index\n * Description: Insert an element at a specified valid index by shifting elements. Extend the dynamic array to grow when needed.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Element At a Specified Valid Index\nDescription: Insert an element at a specified valid index by shifting elements. Extend the dynamic array to grow when needed.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Element At a Specified Valid Index\nDescription: Insert an element at a specified valid index by shifting elements. Extend the dynamic array to grow when needed.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-27-1",
        "input": "4\n1 2 4 5\n2 3",
        "expectedOutput": "1 2 3 4 5"
      },
      {
        "id": "tc-p1-27-2",
        "input": "3\n10 20 30\n0 5",
        "expectedOutput": "5 10 20 30"
      },
      {
        "id": "tc-p1-27-3",
        "input": "0\n0 99",
        "expectedOutput": "99"
      },
      {
        "id": "tc-p1-27-4",
        "input": "3\n1 2 3\n3 4",
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
    "id": "dsa-p1-010",
    "slug": "element-at-a-specified-index-while",
    "title": "Delete Element at Index Preserving Order",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 28,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, delete the element at 0-based index $idx$ ($0 \\le idx < N$) while preserving the relative order of the remaining elements.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_0, \\dots, A_{N-1}$.\n- Line 3: An integer $idx$ ($0 \\le idx < N$).\n\n### Output Format\nPrint the remaining $N-1$ space-separated integers, or `EMPTY` if $N = 1$.",
    "examples": [
      {
        "input": "5\n10 20 30 40 50\n2",
        "output": "10 20 40 50",
        "explanation": "Deleting element 30 at index 2 shifts 40 and 50 left."
      },
      {
        "input": "1\n99\n0",
        "output": "EMPTY",
        "explanation": "Deleting the only element leaves the array empty."
      },
      {
        "input": "3\n1 2 3\n0",
        "output": "2 3",
        "explanation": "Deleting index 0 leaves 2 3."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Element At a Specified Index While\n * Description: Delete an element at a specified index while preserving the order of the remaining elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Element At a Specified Index While\n * Description: Delete an element at a specified index while preserving the order of the remaining elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Element At a Specified Index While\nDescription: Delete an element at a specified index while preserving the order of the remaining elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Element At a Specified Index While\nDescription: Delete an element at a specified index while preserving the order of the remaining elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-28-1",
        "input": "5\n10 20 30 40 50\n2",
        "expectedOutput": "10 20 40 50"
      },
      {
        "id": "tc-p1-28-2",
        "input": "1\n99\n0",
        "expectedOutput": "EMPTY"
      },
      {
        "id": "tc-p1-28-3",
        "input": "3\n1 2 3\n0",
        "expectedOutput": "2 3"
      },
      {
        "id": "tc-p1-28-4",
        "input": "4\n5 6 7 8\n3",
        "expectedOutput": "5 6 7"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-011",
    "slug": "element-without-preserving-order",
    "title": "Delete Element in O(1) Without Preserving Order",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 29,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers and an index $idx$, delete the element at index $idx$ in $O(1)$ time by overwriting it with the last element of the array and shrinking the size by 1.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_0, \\dots, A_{N-1}$.\n- Line 3: An integer $idx$ ($0 \\le idx < N$).\n\n### Output Format\nPrint the $N-1$ space-separated integers, or `EMPTY` if $N = 1$.",
    "examples": [
      {
        "input": "5\n10 20 30 40 50\n1",
        "output": "10 50 30 40",
        "explanation": "Element 20 at index 1 is replaced by last element 50."
      },
      {
        "input": "1\n7\n0",
        "output": "EMPTY",
        "explanation": "Removing the single element leaves EMPTY."
      },
      {
        "input": "4\n1 2 3 4\n3",
        "output": "1 2 3",
        "explanation": "Deleting the last element directly yields 1 2 3."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Element Without Preserving Order\n * Description: Delete an element without preserving order. Compare the number of element movements with the previous question.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Element Without Preserving Order\n * Description: Delete an element without preserving order. Compare the number of element movements with the previous question.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Element Without Preserving Order\nDescription: Delete an element without preserving order. Compare the number of element movements with the previous question.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Element Without Preserving Order\nDescription: Delete an element without preserving order. Compare the number of element movements with the previous question.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-29-1",
        "input": "5\n10 20 30 40 50\n1",
        "expectedOutput": "10 50 30 40"
      },
      {
        "id": "tc-p1-29-2",
        "input": "1\n7\n0",
        "expectedOutput": "EMPTY"
      },
      {
        "id": "tc-p1-29-3",
        "input": "4\n1 2 3 4\n3",
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
    "id": "dsa-p1-012",
    "slug": "remove-all-occurrences-of-a-given",
    "title": "Remove All Occurrences of Value in Place",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 30,
    "statement": "### Problem Description\n\nRemove all occurrences of integer $val$ from an array of $N$ integers in-place. Preserve the relative order of the remaining elements.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $val$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\n- Line 1: An integer $K$, the new logical size.\n- Line 2: The $K$ remaining space-separated integers, or `EMPTY` if $K = 0$.",
    "examples": [
      {
        "input": "6 3\n3 2 2 3 4 3",
        "output": "3\n2 2 4",
        "explanation": "Removing all 3s leaves 2, 2, 4 with new size 3."
      },
      {
        "input": "4 1\n1 1 1 1",
        "output": "0\nEMPTY",
        "explanation": "All elements equal 1, leaving size 0 and EMPTY."
      },
      {
        "input": "3 5\n1 2 3",
        "output": "3\n1 2 3",
        "explanation": "Value 5 does not appear in array; array unchanged."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Remove All Occurrences of a Given\n * Description: Remove all occurrences of a given value from an array in place. Return the new logical size.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Remove All Occurrences of a Given\n * Description: Remove all occurrences of a given value from an array in place. Return the new logical size.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Remove All Occurrences of a Given\nDescription: Remove all occurrences of a given value from an array in place. Return the new logical size.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Remove All Occurrences of a Given\nDescription: Remove all occurrences of a given value from an array in place. Return the new logical size.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-30-1",
        "input": "6 3\n3 2 2 3 4 3",
        "expectedOutput": "3\n2 2 4"
      },
      {
        "id": "tc-p1-30-2",
        "input": "4 1\n1 1 1 1",
        "expectedOutput": "0\nEMPTY"
      },
      {
        "id": "tc-p1-30-3",
        "input": "3 5\n1 2 3",
        "expectedOutput": "3\n1 2 3"
      },
      {
        "id": "tc-p1-30-4",
        "input": "5 0\n0 1 0 3 12",
        "expectedOutput": "3\n1 3 12"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-013",
    "slug": "second-largest-distinct-element-without-sorting",
    "title": "Second Largest Distinct Element",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 31,
    "statement": "### Problem Description\n\nFind the second-largest distinct element in an array of $N$ integers without sorting. If fewer than two distinct elements exist, output `-1`.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the second-largest distinct integer, or `-1`.",
    "examples": [
      {
        "input": "6\n12 35 1 10 34 1",
        "output": "34",
        "explanation": "Largest is 35, second-largest distinct is 34."
      },
      {
        "input": "3\n10 10 10",
        "output": "-1",
        "explanation": "Only one distinct value exists; output -1."
      },
      {
        "input": "2\n-5 -2",
        "output": "-5",
        "explanation": "Largest is -2, second-largest is -5."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Second-largest Distinct Element Without Sorting\n * Description: Find the second-largest distinct element without sorting the array. Handle duplicate maximum values and arrays with fewer than two distinct elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Second-largest Distinct Element Without Sorting\n * Description: Find the second-largest distinct element without sorting the array. Handle duplicate maximum values and arrays with fewer than two distinct elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Second-largest Distinct Element Without Sorting\nDescription: Find the second-largest distinct element without sorting the array. Handle duplicate maximum values and arrays with fewer than two distinct elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Second-largest Distinct Element Without Sorting\nDescription: Find the second-largest distinct element without sorting the array. Handle duplicate maximum values and arrays with fewer than two distinct elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-31-1",
        "input": "6\n12 35 1 10 34 1",
        "expectedOutput": "34"
      },
      {
        "id": "tc-p1-31-2",
        "input": "3\n10 10 10",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-p1-31-3",
        "input": "2\n-5 -2",
        "expectedOutput": "-5"
      },
      {
        "id": "tc-p1-31-4",
        "input": "5\n100 20 100 30 100",
        "expectedOutput": "30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-014",
    "slug": "array-is-sorted-in-nondecreasing-order",
    "title": "Check If Array Is Sorted in Nondecreasing Order",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 32,
    "statement": "### Problem Description\n\nDetermine whether an array of $N$ integers is sorted in non-decreasing order ($A[i] \\le A[i+1]$).\nIf sorted, print `true`.\nIf not sorted, print `false` on line 1, and on line 2 print the first 0-based index $i$ where $A[i] > A[i+1]$.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_0, \\dots, A_{N-1}$.\n\n### Output Format\n- Line 1: `true` or `false`\n- Line 2 (if false): First index $i$ where $A[i] > A[i+1]$.",
    "examples": [
      {
        "input": "5\n1 2 2 4 5",
        "output": "true",
        "explanation": "Array is non-decreasing."
      },
      {
        "input": "5\n1 3 2 4 5",
        "output": "false\n1",
        "explanation": "Order breaks at index 1 because A[1] = 3 > A[2] = 2."
      },
      {
        "input": "1\n42",
        "output": "true",
        "explanation": "Single element is trivially sorted."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array Is Sorted in Nondecreasing Order\n * Description: Determine whether an array is sorted in nondecreasing order. If not, return the first index where the order breaks.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array Is Sorted in Nondecreasing Order\n * Description: Determine whether an array is sorted in nondecreasing order. If not, return the first index where the order breaks.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array Is Sorted in Nondecreasing Order\nDescription: Determine whether an array is sorted in nondecreasing order. If not, return the first index where the order breaks.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array Is Sorted in Nondecreasing Order\nDescription: Determine whether an array is sorted in nondecreasing order. If not, return the first index where the order breaks.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-32-1",
        "input": "5\n1 2 2 4 5",
        "expectedOutput": "true"
      },
      {
        "id": "tc-p1-32-2",
        "input": "5\n1 3 2 4 5",
        "expectedOutput": "false\n1"
      },
      {
        "id": "tc-p1-32-3",
        "input": "1\n42",
        "expectedOutput": "true"
      },
      {
        "id": "tc-p1-32-4",
        "input": "4\n10 9 8 7",
        "expectedOutput": "false\n0"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-015",
    "slug": "array-move-all-zeros-to",
    "title": "Move All Zeros to End Preserving Relative Order",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 33,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, move all 0s to the end of the array while maintaining the relative order of the non-zero elements.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the $N$ space-separated integers of the modified array.",
    "examples": [
      {
        "input": "5\n0 1 0 3 12",
        "output": "1 3 12 0 0",
        "explanation": "Non-zero elements 1, 3, 12 maintain order; two 0s moved to the end."
      },
      {
        "input": "3\n0 0 0",
        "output": "0 0 0",
        "explanation": "All zeros remain zeros."
      },
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "No zeros present."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Move All Zeros to\n * Description: Given an array, move all zeros to the end while preserving the relative order of nonzero elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Move All Zeros to\n * Description: Given an array, move all zeros to the end while preserving the relative order of nonzero elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Move All Zeros to\nDescription: Given an array, move all zeros to the end while preserving the relative order of nonzero elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Move All Zeros to\nDescription: Given an array, move all zeros to the end while preserving the relative order of nonzero elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-33-1",
        "input": "5\n0 1 0 3 12",
        "expectedOutput": "1 3 12 0 0"
      },
      {
        "id": "tc-p1-33-2",
        "input": "3\n0 0 0",
        "expectedOutput": "0 0 0"
      },
      {
        "id": "tc-p1-33-3",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-33-4",
        "input": "1\n0",
        "expectedOutput": "0"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-016",
    "slug": "array-separate-even-and-odd-elements",
    "title": "Separate Even and Odd Elements Preserving Order",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 34,
    "statement": "### Problem Description\n\nRearrange an array of $N$ integers so that all even numbers appear first, followed by all odd numbers. The relative order among even elements and among odd elements must be preserved.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the $N$ space-separated integers after rearrangement.",
    "examples": [
      {
        "input": "6\n1 2 3 4 5 6",
        "output": "2 4 6 1 3 5",
        "explanation": "Even numbers (2, 4, 6) first, followed by odds (1, 3, 5)."
      },
      {
        "input": "3\n2 4 6",
        "output": "2 4 6",
        "explanation": "All even numbers remain unchanged."
      },
      {
        "input": "3\n1 3 5",
        "output": "1 3 5",
        "explanation": "All odd numbers remain unchanged."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Separate Even and Odd Elements\n * Description: Given an array, separate even and odd elements in place. Then modify the solution to preserve relative order.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Separate Even and Odd Elements\n * Description: Given an array, separate even and odd elements in place. Then modify the solution to preserve relative order.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Separate Even and Odd Elements\nDescription: Given an array, separate even and odd elements in place. Then modify the solution to preserve relative order.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Separate Even and Odd Elements\nDescription: Given an array, separate even and odd elements in place. Then modify the solution to preserve relative order.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-34-1",
        "input": "6\n1 2 3 4 5 6",
        "expectedOutput": "2 4 6 1 3 5"
      },
      {
        "id": "tc-p1-34-2",
        "input": "3\n2 4 6",
        "expectedOutput": "2 4 6"
      },
      {
        "id": "tc-p1-34-3",
        "input": "3\n1 3 5",
        "expectedOutput": "1 3 5"
      },
      {
        "id": "tc-p1-34-4",
        "input": "5\n-2 3 -4 5 0",
        "expectedOutput": "-2 -4 0 3 5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-017",
    "slug": "merge-sorted-arrays-into-a-third-sorted",
    "title": "Merge Two Sorted Arrays",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 35,
    "statement": "### Problem Description\n\nGiven two sorted arrays $A$ of size $N$ and $B$ of size $M$, merge them into a single sorted array of size $N + M$.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $M$ ($0 \\le N, M \\le 10^5$, $N+M \\ge 1$).\n- Line 2: $N$ sorted integers $A_1, \\dots, A_N$. (Omitted if $N = 0$).\n- Line 3: $M$ sorted integers $B_1, \\dots, B_M$. (Omitted if $M = 0$).\n\n### Output Format\nPrint $N + M$ space-separated integers in non-decreasing order.",
    "examples": [
      {
        "input": "3 3\n1 3 5\n2 4 6",
        "output": "1 2 3 4 5 6",
        "explanation": "Merged sorted sequence."
      },
      {
        "input": "3 0\n1 2 3",
        "output": "1 2 3",
        "explanation": "Second array is empty."
      },
      {
        "input": "2 4\n5 10\n1 2 8 12",
        "output": "1 2 5 8 10 12",
        "explanation": "Two unequal sorted arrays merged."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Merge Sorted Arrays Into a Third Sorted\n * Description: Merge two sorted arrays into a third sorted array. Count the comparisons and writes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Merge Sorted Arrays Into a Third Sorted\n * Description: Merge two sorted arrays into a third sorted array. Count the comparisons and writes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Merge Sorted Arrays Into a Third Sorted\nDescription: Merge two sorted arrays into a third sorted array. Count the comparisons and writes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Merge Sorted Arrays Into a Third Sorted\nDescription: Merge two sorted arrays into a third sorted array. Count the comparisons and writes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-35-1",
        "input": "3 3\n1 3 5\n2 4 6",
        "expectedOutput": "1 2 3 4 5 6"
      },
      {
        "id": "tc-p1-35-2",
        "input": "3 0\n1 2 3",
        "expectedOutput": "1 2 3"
      },
      {
        "id": "tc-p1-35-3",
        "input": "2 4\n5 10\n1 2 8 12",
        "expectedOutput": "1 2 5 8 10 12"
      },
      {
        "id": "tc-p1-35-4",
        "input": "3 3\n1 1 1\n2 2 2",
        "expectedOutput": "1 1 1 2 2 2"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-018",
    "slug": "two-arrays-determine-whether-they-contain",
    "title": "Check If Two Arrays Contain Identical Multiset",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 36,
    "statement": "### Problem Description\n\nGiven two arrays $A$ and $B$ of size $N$ and $M$, determine whether they contain the exact same multiset of elements (the same numbers with identical frequencies).\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $M$ ($1 \\le N, M \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n- Line 3: $M$ space-separated integers $B_1, \\dots, B_M$.\n\n### Output Format\nPrint `true` if both arrays contain the same multiset, else `false`.",
    "examples": [
      {
        "input": "4 4\n1 2 3 2\n2 1 2 3",
        "output": "true",
        "explanation": "Both contain one 1, two 2s, and one 3."
      },
      {
        "input": "3 3\n1 2 3\n1 2 4",
        "output": "false",
        "explanation": "Elements differ (3 vs 4)."
      },
      {
        "input": "3 2\n1 2 3\n1 2",
        "output": "false",
        "explanation": "Different sizes cannot have identical multisets."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Arrays, Determine Whether They Contain\n * Description: Given two arrays, determine whether they contain exactly the same multiset of elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Arrays, Determine Whether They Contain\n * Description: Given two arrays, determine whether they contain exactly the same multiset of elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Two Arrays, Determine Whether They Contain\nDescription: Given two arrays, determine whether they contain exactly the same multiset of elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Two Arrays, Determine Whether They Contain\nDescription: Given two arrays, determine whether they contain exactly the same multiset of elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-36-1",
        "input": "4 4\n1 2 3 2\n2 1 2 3",
        "expectedOutput": "true"
      },
      {
        "id": "tc-p1-36-2",
        "input": "3 3\n1 2 3\n1 2 4",
        "expectedOutput": "false"
      },
      {
        "id": "tc-p1-36-3",
        "input": "3 2\n1 2 3\n1 2",
        "expectedOutput": "false"
      },
      {
        "id": "tc-p1-36-4",
        "input": "1 1\n42\n42",
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
    "id": "dsa-p1-019",
    "slug": "union-and-intersection-of-two-sorted",
    "title": "Union and Intersection of Two Sorted Arrays",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 37,
    "statement": "### Problem Description\n\nGiven two sorted arrays $A$ (size $N$) and $B$ (size $M$), find their sorted union (all distinct elements appearing in either) and intersection (all distinct elements appearing in both).\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $M$ ($1 \\le N, M \\le 10^5$).\n- Line 2: $N$ sorted integers $A_1, \\dots, A_N$.\n- Line 3: $M$ sorted integers $B_1, \\dots, B_M$.\n\n### Output Format\n- Line 1: Space-separated distinct integers in Union.\n- Line 2: Space-separated distinct integers in Intersection, or `EMPTY` if intersection is empty.",
    "examples": [
      {
        "input": "5 4\n1 2 2 3 4\n2 2 4 6",
        "output": "1 2 3 4 6\n2 4",
        "explanation": "Union is {1, 2, 3, 4, 6}. Common elements are {2, 4}."
      },
      {
        "input": "3 3\n1 2 3\n4 5 6",
        "output": "1 2 3 4 5 6\nEMPTY",
        "explanation": "Disjoint arrays have empty intersection."
      },
      {
        "input": "2 2\n5 5\n5 5",
        "output": "5\n5",
        "explanation": "Only element 5 in both."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Union and Intersection of Two Sorted\n * Description: Find the union and intersection of two sorted arrays without using sets.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Union and Intersection of Two Sorted\n * Description: Find the union and intersection of two sorted arrays without using sets.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Union and Intersection of Two Sorted\nDescription: Find the union and intersection of two sorted arrays without using sets.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Union and Intersection of Two Sorted\nDescription: Find the union and intersection of two sorted arrays without using sets.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-37-1",
        "input": "5 4\n1 2 2 3 4\n2 2 4 6",
        "expectedOutput": "1 2 3 4 6\n2 4"
      },
      {
        "id": "tc-p1-37-2",
        "input": "3 3\n1 2 3\n4 5 6",
        "expectedOutput": "1 2 3 4 5 6\nEMPTY"
      },
      {
        "id": "tc-p1-37-3",
        "input": "2 2\n5 5\n5 5",
        "expectedOutput": "5\n5"
      },
      {
        "id": "tc-p1-37-4",
        "input": "3 2\n1 3 5\n3 5",
        "expectedOutput": "1 3 5\n3 5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-020",
    "slug": "array-containing-numbers-from-1",
    "title": "Find Missing Number from 1 to N",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 38,
    "statement": "### Problem Description\n\nGiven an array containing $N-1$ distinct integers from the range $[1, N]$, find the single missing number.\n\n### Input Format\n- Line 1: An integer $N$ ($2 \\le N \\le 10^5$).\n- Line 2: $N-1$ space-separated integers.\n\n### Output Format\nPrint the missing integer.",
    "examples": [
      {
        "input": "5\n1 2 4 5",
        "output": "3",
        "explanation": "Numbers are 1, 2, 4, 5. Missing number is 3."
      },
      {
        "input": "2\n1",
        "output": "2",
        "explanation": "Range is [1, 2], missing is 2."
      },
      {
        "input": "4\n2 3 4",
        "output": "1",
        "explanation": "Missing number is 1."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array Containing Numbers from 1\n * Description: Given an array containing numbers from 1 to N with one number missing, find the missing number using both summation and XOR.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array Containing Numbers from 1\n * Description: Given an array containing numbers from 1 to N with one number missing, find the missing number using both summation and XOR.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array Containing Numbers from 1\nDescription: Given an array containing numbers from 1 to N with one number missing, find the missing number using both summation and XOR.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array Containing Numbers from 1\nDescription: Given an array containing numbers from 1 to N with one number missing, find the missing number using both summation and XOR.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-38-1",
        "input": "5\n1 2 4 5",
        "expectedOutput": "3"
      },
      {
        "id": "tc-p1-38-2",
        "input": "2\n1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-p1-38-3",
        "input": "4\n2 3 4",
        "expectedOutput": "1"
      },
      {
        "id": "tc-p1-38-4",
        "input": "6\n1 2 3 5 6",
        "expectedOutput": "4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-021",
    "slug": "array-of-n-integers-determine-whether",
    "title": "Majority Element (> N/2 Times)",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Easy",
    "order": 39,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, find the majority element that appears strictly more than $\\lfloor N/2 \\rfloor$ times. If no such element exists, print `-1`.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the majority element, or `-1`.",
    "examples": [
      {
        "input": "7\n2 2 1 1 1 2 2",
        "output": "2",
        "explanation": "Element 2 appears 4 times > 7/2 = 3."
      },
      {
        "input": "4\n1 2 3 4",
        "output": "-1",
        "explanation": "No element appears more than 2 times."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "42 appears 1 time > 0.5."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array of N Integers, Determine Whether\n * Description: Given an array of N integers, determine whether any value appears more than N/2 times. First use counting, then solve in linear time and constant auxiliary space.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array of N Integers, Determine Whether\n * Description: Given an array of N integers, determine whether any value appears more than N/2 times. First use counting, then solve in linear time and constant auxiliary space.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array of N Integers, Determine Whether\nDescription: Given an array of N integers, determine whether any value appears more than N/2 times. First use counting, then solve in linear time and constant auxiliary space.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array of N Integers, Determine Whether\nDescription: Given an array of N integers, determine whether any value appears more than N/2 times. First use counting, then solve in linear time and constant auxiliary space.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-39-1",
        "input": "7\n2 2 1 1 1 2 2",
        "expectedOutput": "2"
      },
      {
        "id": "tc-p1-39-2",
        "input": "4\n1 2 3 4",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-p1-39-3",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-39-4",
        "input": "6\n3 3 4 2 3 3",
        "expectedOutput": "3"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-022",
    "slug": "elements-that-appear-more-than-floorn3",
    "title": "Majority Elements Appearing More Than N/3 Times",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Medium",
    "order": 40,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, find all elements that appear strictly more than $\\lfloor N/3 \\rfloor$ times.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the qualifying elements in ascending order separated by spaces, or `-1` if none exist.",
    "examples": [
      {
        "input": "8\n3 2 3 1 2 3 2 3",
        "output": "2 3",
        "explanation": "N=8, N/3 = 2. 3 appears 4 times, 2 appears 3 times. Both > 2."
      },
      {
        "input": "3\n1 2 3",
        "output": "-1",
        "explanation": "Each appears 1 time, which is not strictly greater than 3/3 = 1."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "10 appears 1 time > 0."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Elements That Appear More Than Floor(N/3)\n * Description: Find all elements that appear more than floor(N/3) times. Explain why there can be at most two such elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Elements That Appear More Than Floor(N/3)\n * Description: Find all elements that appear more than floor(N/3) times. Explain why there can be at most two such elements.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Elements That Appear More Than Floor(N/3)\nDescription: Find all elements that appear more than floor(N/3) times. Explain why there can be at most two such elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Elements That Appear More Than Floor(N/3)\nDescription: Find all elements that appear more than floor(N/3) times. Explain why there can be at most two such elements.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-40-1",
        "input": "8\n3 2 3 1 2 3 2 3",
        "expectedOutput": "2 3"
      },
      {
        "id": "tc-p1-40-2",
        "input": "3\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-p1-40-3",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-40-4",
        "input": "6\n1 1 1 2 2 3",
        "expectedOutput": "1"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-023",
    "slug": "array-and-an-integer-k-find",
    "title": "Maximum Sum Subarray of Fixed Length K",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Medium",
    "order": 41,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers and an integer $K$ ($1 \\le K \\le N$), find the maximum sum of any contiguous subarray of length exactly $K$.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$.\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the maximum sum of a length-$K$ contiguous subarray.",
    "examples": [
      {
        "input": "5 3\n1 4 2 10 23",
        "output": "35",
        "explanation": "Subarray [2, 10, 23] has maximum sum 2 + 10 + 23 = 35."
      },
      {
        "input": "4 1\n-1 -2 -3 -4",
        "output": "-1",
        "explanation": "Window size 1; maximum single element is -1."
      },
      {
        "input": "3 3\n10 20 30",
        "output": "60",
        "explanation": "Entire array sum is 60."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array and an Integer K, Find\n * Description: Given an array and an integer K, find a contiguous subarray of length K with the maximum sum.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array and an Integer K, Find\n * Description: Given an array and an integer K, find a contiguous subarray of length K with the maximum sum.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array and an Integer K, Find\nDescription: Given an array and an integer K, find a contiguous subarray of length K with the maximum sum.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array and an Integer K, Find\nDescription: Given an array and an integer K, find a contiguous subarray of length K with the maximum sum.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-41-1",
        "input": "5 3\n1 4 2 10 23",
        "expectedOutput": "35"
      },
      {
        "id": "tc-p1-41-2",
        "input": "4 1\n-1 -2 -3 -4",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-p1-41-3",
        "input": "3 3\n10 20 30",
        "expectedOutput": "60"
      },
      {
        "id": "tc-p1-41-4",
        "input": "6 2\n100 200 300 400 -500 50",
        "expectedOutput": "700"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-024",
    "slug": "array-of-positive-and-negative-integers",
    "title": "Maximum Subarray Sum (Kadane's Algorithm)",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Medium",
    "order": 42,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, find the maximum sum of a non-empty contiguous subarray.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the maximum contiguous subarray sum.",
    "examples": [
      {
        "input": "9\n-2 1 -3 4 -1 2 1 -5 4",
        "output": "6",
        "explanation": "Subarray [4, -1, 2, 1] has the largest sum = 6."
      },
      {
        "input": "1\n-5",
        "output": "-5",
        "explanation": "Single negative element has sum -5."
      },
      {
        "input": "5\n5 4 -1 7 8",
        "output": "23",
        "explanation": "Entire array sum is 23."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array of Positive and Negative Integers\n * Description: Given an array of positive and negative integers, find the maximum sum of a nonempty contiguous subarray. Start with brute force and derive Kadane's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array of Positive and Negative Integers\n * Description: Given an array of positive and negative integers, find the maximum sum of a nonempty contiguous subarray. Start with brute force and derive Kadane's algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array of Positive and Negative Integers\nDescription: Given an array of positive and negative integers, find the maximum sum of a nonempty contiguous subarray. Start with brute force and derive Kadane's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array of Positive and Negative Integers\nDescription: Given an array of positive and negative integers, find the maximum sum of a nonempty contiguous subarray. Start with brute force and derive Kadane's algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-42-1",
        "input": "9\n-2 1 -3 4 -1 2 1 -5 4",
        "expectedOutput": "6"
      },
      {
        "id": "tc-p1-42-2",
        "input": "1\n-5",
        "expectedOutput": "-5"
      },
      {
        "id": "tc-p1-42-3",
        "input": "5\n5 4 -1 7 8",
        "expectedOutput": "23"
      },
      {
        "id": "tc-p1-42-4",
        "input": "4\n-3 -2 -1 -4",
        "expectedOutput": "-1"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-025",
    "slug": "maximum-profit-from-one-buy",
    "title": "Best Time to Buy and Sell Stock",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Medium",
    "order": 43,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers representing daily stock prices, find the maximum profit obtainable from completing at most one transaction (one buy and one sell, with sell occurring after buy). If no profit can be made, output `0`.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $P_1, \\dots, P_N$.\n\n### Output Format\nPrint the maximum profit.",
    "examples": [
      {
        "input": "6\n7 1 5 3 6 4",
        "output": "5",
        "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
      },
      {
        "input": "5\n7 6 4 3 1",
        "output": "0",
        "explanation": "Prices decrease monotonically; maximum profit is 0."
      },
      {
        "input": "2\n2 4",
        "output": "2",
        "explanation": "Buy at 2, sell at 4, profit = 2."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Maximum Profit from One Buy\n * Description: Find the maximum profit from one buy and one sell of a stock, given its prices on successive days.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Maximum Profit from One Buy\n * Description: Find the maximum profit from one buy and one sell of a stock, given its prices on successive days.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Maximum Profit from One Buy\nDescription: Find the maximum profit from one buy and one sell of a stock, given its prices on successive days.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Maximum Profit from One Buy\nDescription: Find the maximum profit from one buy and one sell of a stock, given its prices on successive days.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-43-1",
        "input": "6\n7 1 5 3 6 4",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-43-2",
        "input": "5\n7 6 4 3 1",
        "expectedOutput": "0"
      },
      {
        "id": "tc-p1-43-3",
        "input": "2\n2 4",
        "expectedOutput": "2"
      },
      {
        "id": "tc-p1-43-4",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-026",
    "slug": "array-return-the-product-of-all",
    "title": "Product of Array Except Self",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Medium",
    "order": 44,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, return an array such that `output[i]` equals the product of all elements of the original array except `nums[i]`, without using the division operator.\n\n### Input Format\n- Line 1: An integer $N$ ($2 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint $N$ space-separated integers.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "24 12 8 6",
        "explanation": "Products: 2*3*4=24, 1*3*4=12, 1*2*4=8, 1*2*3=6."
      },
      {
        "input": "5\n-1 1 0 -3 3",
        "output": "0 0 9 0 0",
        "explanation": "Elements containing zero."
      },
      {
        "input": "2\n5 2",
        "output": "2 5",
        "explanation": "For [5, 2], product except self is [2, 5]."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Return the Product of All\n * Description: Given an array, return the product of all elements except the element at each index, without using division.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Return the Product of All\n * Description: Given an array, return the product of all elements except the element at each index, without using division.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Return the Product of All\nDescription: Given an array, return the product of all elements except the element at each index, without using division.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Return the Product of All\nDescription: Given an array, return the product of all elements except the element at each index, without using division.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-44-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "24 12 8 6"
      },
      {
        "id": "tc-p1-44-2",
        "input": "5\n-1 1 0 -3 3",
        "expectedOutput": "0 0 9 0 0"
      },
      {
        "id": "tc-p1-44-3",
        "input": "2\n5 2",
        "expectedOutput": "2 5"
      },
      {
        "id": "tc-p1-44-4",
        "input": "3\n0 0 2",
        "expectedOutput": "0 0 0"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-027",
    "slug": "longest-contiguous-subarray-whose-sum-equals",
    "title": "Longest Subarray with Sum K (Non-negative Numbers)",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Medium",
    "order": 45,
    "statement": "### Problem Description\n\nGiven an array of $N$ non-negative integers and a target $K$, find the length of the longest contiguous subarray whose sum equals $K$. If no such subarray exists, print `0`.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $0 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated non-negative integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the length of the longest contiguous subarray whose sum is $K$.",
    "examples": [
      {
        "input": "5 5\n1 2 3 1 1",
        "output": "3",
        "explanation": "Subarray [3, 1, 1] has sum 5 and length 3."
      },
      {
        "input": "3 10\n1 2 3",
        "output": "0",
        "explanation": "Total array sum is 6 < 10; output 0."
      },
      {
        "input": "4 0\n0 0 0 0",
        "output": "4",
        "explanation": "Entire array of zeros has sum 0 and length 4."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Longest Contiguous Subarray Whose Sum Equals\n * Description: Find the longest contiguous subarray whose sum equals K when all elements are nonnegative.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Longest Contiguous Subarray Whose Sum Equals\n * Description: Find the longest contiguous subarray whose sum equals K when all elements are nonnegative.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Longest Contiguous Subarray Whose Sum Equals\nDescription: Find the longest contiguous subarray whose sum equals K when all elements are nonnegative.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Longest Contiguous Subarray Whose Sum Equals\nDescription: Find the longest contiguous subarray whose sum equals K when all elements are nonnegative.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-45-1",
        "input": "5 5\n1 2 3 1 1",
        "expectedOutput": "3"
      },
      {
        "id": "tc-p1-45-2",
        "input": "3 10\n1 2 3",
        "expectedOutput": "0"
      },
      {
        "id": "tc-p1-45-3",
        "input": "4 0\n0 0 0 0",
        "expectedOutput": "4"
      },
      {
        "id": "tc-p1-45-4",
        "input": "6 15\n10 5 2 7 1 9",
        "expectedOutput": "4"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-028",
    "slug": "the-previous-problem-to-arrays-containing",
    "title": "Longest Subarray with Sum K (With Negative Numbers)",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Medium",
    "order": 46,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers (which may include negative values) and an integer $K$, find the length of the longest contiguous subarray whose sum equals $K$. If none exists, output `0`.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the maximum length of a subarray with sum $K$.",
    "examples": [
      {
        "input": "6 0\n1 -1 5 -2 3 -6",
        "output": "6",
        "explanation": "Sum of all 6 elements is 1-1+5-2+3-6 = 0, length 6."
      },
      {
        "input": "3 5\n1 2 3",
        "output": "2",
        "explanation": "Subarray [2, 3] has sum 5 and length 2."
      },
      {
        "input": "3 100\n1 2 3",
        "output": "0",
        "explanation": "No subarray sums to 100."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Previous Problem to Arrays Containing\n * Description: Extend the previous problem to arrays containing negative values. Compare the use of a prefix sum and a hash table.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Previous Problem to Arrays Containing\n * Description: Extend the previous problem to arrays containing negative values. Compare the use of a prefix sum and a hash table.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: The Previous Problem to Arrays Containing\nDescription: Extend the previous problem to arrays containing negative values. Compare the use of a prefix sum and a hash table.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: The Previous Problem to Arrays Containing\nDescription: Extend the previous problem to arrays containing negative values. Compare the use of a prefix sum and a hash table.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-46-1",
        "input": "6 0\n1 -1 5 -2 3 -6",
        "expectedOutput": "6"
      },
      {
        "id": "tc-p1-46-2",
        "input": "3 5\n1 2 3",
        "expectedOutput": "2"
      },
      {
        "id": "tc-p1-46-3",
        "input": "3 100\n1 2 3",
        "expectedOutput": "0"
      },
      {
        "id": "tc-p1-46-4",
        "input": "5 -1\n-1 2 -3 1 2",
        "expectedOutput": "3"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-029",
    "slug": "array-of-integers-and-a-target",
    "title": "Count Subarrays with Sum Equal to Target",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Medium",
    "order": 47,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers and a target $K$, count the total number of continuous subarrays whose sum equals $K$.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the total count of contiguous subarrays whose sum equals $K$.",
    "examples": [
      {
        "input": "3 2\n1 1 1",
        "output": "2",
        "explanation": "Subarrays [1, 1] at index (0,1) and (1,2) both sum to 2."
      },
      {
        "input": "3 3\n1 2 3",
        "output": "2",
        "explanation": "[1, 2] and [3] both sum to 3."
      },
      {
        "input": "4 0\n0 0 0 0",
        "output": "10",
        "explanation": "All 4*(4+1)/2 = 10 subarrays sum to 0."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array of Integers and a Target\n * Description: Given an array of integers and a target, count the number of contiguous subarrays whose sum equals the target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array of Integers and a Target\n * Description: Given an array of integers and a target, count the number of contiguous subarrays whose sum equals the target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array of Integers and a Target\nDescription: Given an array of integers and a target, count the number of contiguous subarrays whose sum equals the target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array of Integers and a Target\nDescription: Given an array of integers and a target, count the number of contiguous subarrays whose sum equals the target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-47-1",
        "input": "3 2\n1 1 1",
        "expectedOutput": "2"
      },
      {
        "id": "tc-p1-47-2",
        "input": "3 3\n1 2 3",
        "expectedOutput": "2"
      },
      {
        "id": "tc-p1-47-3",
        "input": "4 0\n0 0 0 0",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-47-4",
        "input": "5 7\n3 4 7 2 -3",
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
    "id": "dsa-p1-030",
    "slug": "array-find-the-maximum-sum-obtainable",
    "title": "Maximum Subarray Sum with At Most One Deletion",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Medium",
    "order": 48,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, find the maximum sum of a non-empty contiguous subarray after deleting at most one element (or zero elements).\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the maximum sum obtainable.",
    "examples": [
      {
        "input": "4\n1 -2 0 3",
        "output": "4",
        "explanation": "Deleting -2 gives subarray [1, 0, 3] with sum 4."
      },
      {
        "input": "4\n1 -2 -2 3",
        "output": "3",
        "explanation": "Subarray [3] has sum 3."
      },
      {
        "input": "3\n-1 -1 -1",
        "output": "-1",
        "explanation": "Cannot delete all elements; maximum single element is -1."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Find the Maximum Sum Obtainable\n * Description: Given an array, find the maximum sum obtainable by selecting a nonempty contiguous subarray after allowing at most one element to be deleted.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Find the Maximum Sum Obtainable\n * Description: Given an array, find the maximum sum obtainable by selecting a nonempty contiguous subarray after allowing at most one element to be deleted.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Find the Maximum Sum Obtainable\nDescription: Given an array, find the maximum sum obtainable by selecting a nonempty contiguous subarray after allowing at most one element to be deleted.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Find the Maximum Sum Obtainable\nDescription: Given an array, find the maximum sum obtainable by selecting a nonempty contiguous subarray after allowing at most one element to be deleted.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-48-1",
        "input": "4\n1 -2 0 3",
        "expectedOutput": "4"
      },
      {
        "id": "tc-p1-48-2",
        "input": "4\n1 -2 -2 3",
        "expectedOutput": "3"
      },
      {
        "id": "tc-p1-48-3",
        "input": "3\n-1 -1 -1",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-p1-48-4",
        "input": "5\n2 1 -2 1 4",
        "expectedOutput": "8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-031",
    "slug": "mastery-test-solve-a-new-array",
    "title": "Trapping Rain Water",
    "topic": "Arrays and Vectors",
    "tags": [
      "Array"
    ],
    "difficulty": "Medium",
    "order": 49,
    "statement": "### Problem Description\n\nGiven an array of $N$ non-negative integers representing an elevation map where each bar has width 1, compute how many total units of water can be trapped after raining.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated non-negative integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the total units of trapped water.",
    "examples": [
      {
        "input": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
        "output": "6",
        "explanation": "Classic trapping rain water elevation map traps 6 units of water."
      },
      {
        "input": "6\n4 2 0 3 2 5",
        "output": "9",
        "explanation": "Water trapped in valleys equals 9."
      },
      {
        "input": "3\n3 2 1",
        "output": "0",
        "explanation": "Monotonically decreasing bars trap 0 water."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Arrays and Vectors. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Arrays and Vectors eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Mastery Test: Solve a New Array\n * Description: Mastery test: Solve a new array problem without using nested loops when a linear-time approach is possible. Explain why the optimized solution is correct and identify the constraints that make it work.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Mastery Test: Solve a New Array\n * Description: Mastery test: Solve a new array problem without using nested loops when a linear-time approach is possible. Explain why the optimized solution is correct and identify the constraints that make it work.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Mastery Test: Solve a New Array\nDescription: Mastery test: Solve a new array problem without using nested loops when a linear-time approach is possible. Explain why the optimized solution is correct and identify the constraints that make it work.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Mastery Test: Solve a New Array\nDescription: Mastery test: Solve a new array problem without using nested loops when a linear-time approach is possible. Explain why the optimized solution is correct and identify the constraints that make it work.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-49-1",
        "input": "12\n0 1 0 2 1 0 1 3 2 1 2 1",
        "expectedOutput": "6"
      },
      {
        "id": "tc-p1-49-2",
        "input": "6\n4 2 0 3 2 5",
        "expectedOutput": "9"
      },
      {
        "id": "tc-p1-49-3",
        "input": "3\n3 2 1",
        "expectedOutput": "0"
      },
      {
        "id": "tc-p1-49-4",
        "input": "3\n1 2 3",
        "expectedOutput": "0"
      },
      {
        "id": "tc-p1-49-5",
        "input": "5\n3 0 2 0 4",
        "expectedOutput": "7"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-001",
    "slug": "define-a-node-structure-containing",
    "title": "Construct and Print Three-Node Linked List",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Warm-up",
    "order": 50,
    "statement": "### Problem Description\n\nGiven three integers $A$, $B$, and $C$, construct a singly linked list with three nodes containing these values and print them formatted as `A -> B -> C -> NULL`.\n\n### Input Format\nA single line containing three space-separated integers $A$, $B$, and $C$.\n\n### Output Format\nPrint `A -> B -> C -> NULL`.",
    "examples": [
      {
        "input": "1 2 3",
        "output": "1 -> 2 -> 3 -> NULL",
        "explanation": "Nodes 1, 2, 3 linked sequentially."
      },
      {
        "input": "10 20 30",
        "output": "10 -> 20 -> 30 -> NULL",
        "explanation": "List of multiples of 10."
      },
      {
        "input": "-5 0 5",
        "output": "-5 -> 0 -> 5 -> NULL",
        "explanation": "Negative and zero values."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Define a Node Structure Containing\n * Description: Define a Node structure containing an integer and a pointer to the next node. Construct a list of three nodes manually.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Define a Node Structure Containing\n * Description: Define a Node structure containing an integer and a pointer to the next node. Construct a list of three nodes manually.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Define a Node Structure Containing\nDescription: Define a Node structure containing an integer and a pointer to the next node. Construct a list of three nodes manually.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Define a Node Structure Containing\nDescription: Define a Node structure containing an integer and a pointer to the next node. Construct a list of three nodes manually.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-50-1",
        "input": "1 2 3",
        "expectedOutput": "1 -> 2 -> 3 -> NULL"
      },
      {
        "id": "tc-p1-50-2",
        "input": "10 20 30",
        "expectedOutput": "10 -> 20 -> 30 -> NULL"
      },
      {
        "id": "tc-p1-50-3",
        "input": "-5 0 5",
        "expectedOutput": "-5 -> 0 -> 5 -> NULL"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-002",
    "slug": "implement-singly-linked-list-supporting-insertion-at",
    "title": "Singly Linked List Operations (Head, Tail, Traverse)",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Warm-up",
    "order": 51,
    "statement": "### Problem Description\n\nImplement a singly linked list supporting:\n- `head x`: Insert $x$ at head\n- `tail x`: Insert $x$ at tail\n- `print`: Print all elements space-separated, or `EMPTY`\n\n### Input Format\n- Line 1: An integer $Q$.\n- Next $Q$ lines: Operation commands.\n\n### Output Format\nFor each `print`, output elements or `EMPTY`.",
    "examples": [
      {
        "input": "4\nhead 10\ntail 20\nhead 5\nprint",
        "output": "5 10 20",
        "explanation": "Head 10, tail 20, head 5 produces 5 10 20."
      },
      {
        "input": "2\nhead 1\nprint",
        "output": "1",
        "explanation": "Single element list."
      },
      {
        "input": "1\nprint",
        "output": "EMPTY",
        "explanation": "Empty list."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Singly Linked List Supporting Insertion At\n * Description: Implement a singly linked list supporting insertion at the head, insertion at the tail, and traversal.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Singly Linked List Supporting Insertion At\n * Description: Implement a singly linked list supporting insertion at the head, insertion at the tail, and traversal.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Singly Linked List Supporting Insertion At\nDescription: Implement a singly linked list supporting insertion at the head, insertion at the tail, and traversal.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Singly Linked List Supporting Insertion At\nDescription: Implement a singly linked list supporting insertion at the head, insertion at the tail, and traversal.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-51-1",
        "input": "4\nhead 10\ntail 20\nhead 5\nprint",
        "expectedOutput": "5 10 20"
      },
      {
        "id": "tc-p1-51-2",
        "input": "2\nhead 1\nprint",
        "expectedOutput": "1"
      },
      {
        "id": "tc-p1-51-3",
        "input": "1\nprint",
        "expectedOutput": "EMPTY"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-003",
    "slug": "implement-searching-for-a-value-and-returning",
    "title": "Search in Linked List",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Warm-up",
    "order": 52,
    "statement": "### Problem Description\n\nGiven a linked list of $N$ integers and a target $T$, find the 1-based node position where $T$ first appears. If $T$ is not present, output `-1`.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $T$.\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the 1-based position or `-1`.",
    "examples": [
      {
        "input": "4 30\n10 20 30 40",
        "output": "3",
        "explanation": "30 is at 1-based position 3."
      },
      {
        "input": "3 99\n1 2 3",
        "output": "-1",
        "explanation": "99 not present in list."
      },
      {
        "input": "1 5\n5",
        "output": "1",
        "explanation": "5 is at position 1."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Searching for a Value and Returning\n * Description: Implement searching for a value and returning its node position.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Searching for a Value and Returning\n * Description: Implement searching for a value and returning its node position.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Searching for a Value and Returning\nDescription: Implement searching for a value and returning its node position.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Searching for a Value and Returning\nDescription: Implement searching for a value and returning its node position.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-52-1",
        "input": "4 30\n10 20 30 40",
        "expectedOutput": "3"
      },
      {
        "id": "tc-p1-52-2",
        "input": "3 99\n1 2 3",
        "expectedOutput": "-1"
      },
      {
        "id": "tc-p1-52-3",
        "input": "1 5\n5",
        "expectedOutput": "1"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-004",
    "slug": "count-nodes-and-calculate-the-sum",
    "title": "Count Nodes and Sum of Linked List Values",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Warm-up",
    "order": 53,
    "statement": "### Problem Description\n\nGiven a linked list of $N$ integers, count the total number of nodes and compute the sum of all node values.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers. (Omitted if $N = 0$).\n\n### Output Format\nPrint two space-separated integers: `count sum`. If empty, print `0 0`.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "4 10",
        "explanation": "4 nodes with sum 1+2+3+4 = 10."
      },
      {
        "input": "0",
        "output": "0 0",
        "explanation": "Empty list has count 0 and sum 0."
      },
      {
        "input": "2\n-5 5",
        "output": "2 0",
        "explanation": "Sum of -5 and 5 is 0."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Nodes and Calculate the Sum\n * Description: Count the nodes and calculate the sum of all node values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Nodes and Calculate the Sum\n * Description: Count the nodes and calculate the sum of all node values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count Nodes and Calculate the Sum\nDescription: Count the nodes and calculate the sum of all node values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count Nodes and Calculate the Sum\nDescription: Count the nodes and calculate the sum of all node values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-53-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "4 10"
      },
      {
        "id": "tc-p1-53-2",
        "input": "0",
        "expectedOutput": "0 0"
      },
      {
        "id": "tc-p1-53-3",
        "input": "2\n-5 5",
        "expectedOutput": "2 0"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-005",
    "slug": "node-at-a-specified-zero-based-position",
    "title": "Node At a Specified Zero-based Position",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Warm-up",
    "order": 54,
    "statement": "### Problem Description\n\nInsert a node at a specified zero-based position. Handle insertion at the head and at the end.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Node At a Specified Zero-based Position across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Node At a Specified Zero-based Position\n * Description: Insert a node at a specified zero-based position. Handle insertion at the head and at the end.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Node At a Specified Zero-based Position\n * Description: Insert a node at a specified zero-based position. Handle insertion at the head and at the end.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Node At a Specified Zero-based Position\nDescription: Insert a node at a specified zero-based position. Handle insertion at the head and at the end.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Node At a Specified Zero-based Position\nDescription: Insert a node at a specified zero-based position. Handle insertion at the head and at the end.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-54-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-54-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-54-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-006",
    "slug": "the-first-node-the-last-node",
    "title": "The First Node, the Last Node",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Warm-up",
    "order": 55,
    "statement": "### Problem Description\n\nDelete the first node, the last node, and a node at a specified position.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying The First Node, the Last Node across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The First Node, the Last Node\n * Description: Delete the first node, the last node, and a node at a specified position.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The First Node, the Last Node\n * Description: Delete the first node, the last node, and a node at a specified position.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: The First Node, the Last Node\nDescription: Delete the first node, the last node, and a node at a specified position.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: The First Node, the Last Node\nDescription: Delete the first node, the last node, and a node at a specified position.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-55-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-55-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-55-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-007",
    "slug": "the-first-occurrence-of-a-target",
    "title": "The First Occurrence of a Target",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Warm-up",
    "order": 56,
    "statement": "### Problem Description\n\nDelete the first occurrence of a target value. What happens when the target does not exist?\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying The First Occurrence of a Target across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The First Occurrence of a Target\n * Description: Delete the first occurrence of a target value. What happens when the target does not exist?\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The First Occurrence of a Target\n * Description: Delete the first occurrence of a target value. What happens when the target does not exist?\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: The First Occurrence of a Target\nDescription: Delete the first occurrence of a target value. What happens when the target does not exist?\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: The First Occurrence of a Target\nDescription: Delete the first occurrence of a target value. What happens when the target does not exist?\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-56-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-56-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-56-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-008",
    "slug": "reverse-a-singly-linked-list-iteratively",
    "title": "Reverse Linked List Iteratively",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Easy",
    "order": 57,
    "statement": "### Problem Description\n\nReverse a singly linked list of $N$ integers.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the reversed list space-separated, or `EMPTY` if empty.",
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "5 4 3 2 1",
        "explanation": "Reversed list is 5 4 3 2 1."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Single node reversed is 42."
      },
      {
        "input": "0",
        "output": "EMPTY",
        "explanation": "Empty list yields EMPTY."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Reverse A Singly Linked List Iteratively\n * Description: Reverse a singly linked list iteratively. Explain the role of prev, curr, and next.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Reverse A Singly Linked List Iteratively\n * Description: Reverse a singly linked list iteratively. Explain the role of prev, curr, and next.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Reverse A Singly Linked List Iteratively\nDescription: Reverse a singly linked list iteratively. Explain the role of prev, curr, and next.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Reverse A Singly Linked List Iteratively\nDescription: Reverse a singly linked list iteratively. Explain the role of prev, curr, and next.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-57-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "5 4 3 2 1"
      },
      {
        "id": "tc-p1-57-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-57-3",
        "input": "0",
        "expectedOutput": "EMPTY"
      },
      {
        "id": "tc-p1-57-4",
        "input": "2\n10 20",
        "expectedOutput": "20 10"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-009",
    "slug": "reverse-a-singly-linked-list-recursively",
    "title": "Reverse Linked List Recursively",
    "topic": "Linked Lists",
    "tags": [
      "Linked List",
      "Recursion"
    ],
    "difficulty": "Easy",
    "order": 58,
    "statement": "### Problem Description\n\nReverse a singly linked list of $N$ integers.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the reversed list space-separated, or `EMPTY` if empty.",
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "5 4 3 2 1",
        "explanation": "Reversed list is 5 4 3 2 1."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Single node reversed is 42."
      },
      {
        "input": "0",
        "output": "EMPTY",
        "explanation": "Empty list yields EMPTY."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Reverse A Singly Linked List Recursively\n * Description: Reverse a singly linked list recursively. Draw the call stack and compare auxiliary space with the iterative version.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Reverse A Singly Linked List Recursively\n * Description: Reverse a singly linked list recursively. Draw the call stack and compare auxiliary space with the iterative version.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Reverse A Singly Linked List Recursively\nDescription: Reverse a singly linked list recursively. Draw the call stack and compare auxiliary space with the iterative version.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Reverse A Singly Linked List Recursively\nDescription: Reverse a singly linked list recursively. Draw the call stack and compare auxiliary space with the iterative version.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-58-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "5 4 3 2 1"
      },
      {
        "id": "tc-p1-58-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-58-3",
        "input": "0",
        "expectedOutput": "EMPTY"
      },
      {
        "id": "tc-p1-58-4",
        "input": "2\n10 20",
        "expectedOutput": "20 10"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-010",
    "slug": "middle-node-using-two-traversals-then",
    "title": "Find Middle Node of Linked List",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Easy",
    "order": 59,
    "statement": "### Problem Description\n\nGiven a singly linked list of $N$ integers, return the value of the middle node using slow and fast pointers. If there are two middle nodes (even length), return the second middle node.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the integer value of the middle node.",
    "examples": [
      {
        "input": "5\n1 2 3 4 5",
        "output": "3",
        "explanation": "Middle of 5 nodes is the 3rd node with value 3."
      },
      {
        "input": "6\n1 2 3 4 5 6",
        "output": "4",
        "explanation": "Even length: two middles are 3 and 4; second middle is 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single node is its own middle."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Middle Node Using Two Traversals, Then\n * Description: Find the middle node using two traversals, then using slow and fast pointers.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Middle Node Using Two Traversals, Then\n * Description: Find the middle node using two traversals, then using slow and fast pointers.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Middle Node Using Two Traversals, Then\nDescription: Find the middle node using two traversals, then using slow and fast pointers.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Middle Node Using Two Traversals, Then\nDescription: Find the middle node using two traversals, then using slow and fast pointers.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-59-1",
        "input": "5\n1 2 3 4 5",
        "expectedOutput": "3"
      },
      {
        "id": "tc-p1-59-2",
        "input": "6\n1 2 3 4 5 6",
        "expectedOutput": "4"
      },
      {
        "id": "tc-p1-59-3",
        "input": "1\n10",
        "expectedOutput": "10"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-011",
    "slug": "detect-whether-a-linked-list-contains",
    "title": "Detect Cycle in Linked List",
    "topic": "Linked Lists",
    "tags": [
      "Linked List",
      "Two Pointers"
    ],
    "difficulty": "Easy",
    "order": 60,
    "statement": "### Problem Description\n\nGiven a linked list representation where the tail connects back to the 0-based node index $pos$ (or `-1` if no cycle), determine whether a cycle exists using Floyd's cycle-finding algorithm.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $pos$ ($1 \\le N \\le 10^5$, $-1 \\le pos < N$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint `true` if a cycle exists, else `false`.",
    "examples": [
      {
        "input": "4 1\n3 2 0 -4",
        "output": "true",
        "explanation": "Tail connects back to node at index 1; cycle exists."
      },
      {
        "input": "2 0\n1 2",
        "output": "true",
        "explanation": "Tail connects to index 0; cycle exists."
      },
      {
        "input": "1 -1\n1",
        "output": "false",
        "explanation": "No cycle (pos = -1)."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Detect Whether a Linked List Contains\n * Description: Detect whether a linked list contains a cycle. Explain why the two pointers eventually meet if a cycle exists.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Detect Whether a Linked List Contains\n * Description: Detect whether a linked list contains a cycle. Explain why the two pointers eventually meet if a cycle exists.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Detect Whether a Linked List Contains\nDescription: Detect whether a linked list contains a cycle. Explain why the two pointers eventually meet if a cycle exists.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Detect Whether a Linked List Contains\nDescription: Detect whether a linked list contains a cycle. Explain why the two pointers eventually meet if a cycle exists.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-60-1",
        "input": "4 1\n3 2 0 -4",
        "expectedOutput": "true"
      },
      {
        "id": "tc-p1-60-2",
        "input": "2 0\n1 2",
        "expectedOutput": "true"
      },
      {
        "id": "tc-p1-60-3",
        "input": "1 -1\n1",
        "expectedOutput": "false"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-012",
    "slug": "starting-node-of-a-cycle",
    "title": "Starting Node of a Cycle",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Easy",
    "order": 61,
    "statement": "### Problem Description\n\nFind the starting node of a cycle and calculate the cycle length.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Starting Node of a Cycle across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Starting Node of a Cycle\n * Description: Find the starting node of a cycle and calculate the cycle length.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Starting Node of a Cycle\n * Description: Find the starting node of a cycle and calculate the cycle length.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Starting Node of a Cycle\nDescription: Find the starting node of a cycle and calculate the cycle length.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Starting Node of a Cycle\nDescription: Find the starting node of a cycle and calculate the cycle length.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-61-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-61-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-61-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-013",
    "slug": "remove-a-cycle-without-losing-any",
    "title": "Remove a Cycle Without Losing Any",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Easy",
    "order": 62,
    "statement": "### Problem Description\n\nRemove a cycle without losing any nodes.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Remove a Cycle Without Losing Any across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Remove a Cycle Without Losing Any\n * Description: Remove a cycle without losing any nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Remove a Cycle Without Losing Any\n * Description: Remove a cycle without losing any nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Remove a Cycle Without Losing Any\nDescription: Remove a cycle without losing any nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Remove a Cycle Without Losing Any\nDescription: Remove a cycle without losing any nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-62-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-62-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-62-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-014",
    "slug": "remove-the-nth-node-from",
    "title": "Remove the Nth Node from",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Easy",
    "order": 63,
    "statement": "### Problem Description\n\nRemove the Nth node from the end in one pass.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Remove the Nth Node from across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Remove the Nth Node from\n * Description: Remove the Nth node from the end in one pass.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Remove the Nth Node from\n * Description: Remove the Nth node from the end in one pass.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Remove the Nth Node from\nDescription: Remove the Nth node from the end in one pass.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Remove the Nth Node from\nDescription: Remove the Nth node from the end in one pass.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-63-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-63-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-63-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-015",
    "slug": "merge-sorted-singly-linked-lists-without-allocating",
    "title": "Merge Two Sorted Linked Lists",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Easy",
    "order": 64,
    "statement": "### Problem Description\n\nMerge two sorted singly linked lists into a single sorted linked list.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $M$.\n- Line 2: $N$ sorted integers.\n- Line 3: $M$ sorted integers.\n\n### Output Format\nPrint $N+M$ sorted integers space-separated.",
    "examples": [
      {
        "input": "3 3\n1 2 4\n1 3 4",
        "output": "1 1 2 3 4 4",
        "explanation": "Merged sorted sequence."
      },
      {
        "input": "2 0\n5 10",
        "output": "5 10",
        "explanation": "Second list empty."
      },
      {
        "input": "1 2\n2\n1 3",
        "output": "1 2 3",
        "explanation": "Lists merged into 1 2 3."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Merge Sorted Singly Linked Lists Without Allocating\n * Description: Merge two sorted singly linked lists without allocating new data nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Merge Sorted Singly Linked Lists Without Allocating\n * Description: Merge two sorted singly linked lists without allocating new data nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Merge Sorted Singly Linked Lists Without Allocating\nDescription: Merge two sorted singly linked lists without allocating new data nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Merge Sorted Singly Linked Lists Without Allocating\nDescription: Merge two sorted singly linked lists without allocating new data nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-64-1",
        "input": "3 3\n1 2 4\n1 3 4",
        "expectedOutput": "1 1 2 3 4 4"
      },
      {
        "id": "tc-p1-64-2",
        "input": "2 0\n5 10",
        "expectedOutput": "5 10"
      },
      {
        "id": "tc-p1-64-3",
        "input": "1 2\n2\n1 3",
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
    "id": "dsa-p1-016",
    "slug": "linked-list-is-a-palindrome-using",
    "title": "Palindrome Linked List Check",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Easy",
    "order": 65,
    "statement": "### Problem Description\n\nDetermine whether a given singly linked list of $N$ integers is a palindrome.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint `true` if the list is a palindrome, else `false`.",
    "examples": [
      {
        "input": "4\n1 2 2 1",
        "output": "true",
        "explanation": "1 2 2 1 reads the same forwards and backwards."
      },
      {
        "input": "2\n1 2",
        "output": "false",
        "explanation": "1 2 is not a palindrome."
      },
      {
        "input": "3\n1 0 1",
        "output": "true",
        "explanation": "1 0 1 is a palindrome."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Linked List Is a Palindrome Using\n * Description: Determine whether a linked list is a palindrome using an auxiliary array. Then solve it using O(1) auxiliary space.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Linked List Is a Palindrome Using\n * Description: Determine whether a linked list is a palindrome using an auxiliary array. Then solve it using O(1) auxiliary space.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Linked List Is a Palindrome Using\nDescription: Determine whether a linked list is a palindrome using an auxiliary array. Then solve it using O(1) auxiliary space.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Linked List Is a Palindrome Using\nDescription: Determine whether a linked list is a palindrome using an auxiliary array. Then solve it using O(1) auxiliary space.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-65-1",
        "input": "4\n1 2 2 1",
        "expectedOutput": "true"
      },
      {
        "id": "tc-p1-65-2",
        "input": "2\n1 2",
        "expectedOutput": "false"
      },
      {
        "id": "tc-p1-65-3",
        "input": "3\n1 0 1",
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
    "id": "dsa-p1-017",
    "slug": "intersection-node-of-two-singly-linked",
    "title": "Intersection Node of Two Singly Linked",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Easy",
    "order": 66,
    "statement": "### Problem Description\n\nFind the intersection node of two singly linked lists by identity, not by equal values.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Intersection Node of Two Singly Linked across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Intersection Node of Two Singly Linked\n * Description: Find the intersection node of two singly linked lists by identity, not by equal values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Intersection Node of Two Singly Linked\n * Description: Find the intersection node of two singly linked lists by identity, not by equal values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Intersection Node of Two Singly Linked\nDescription: Find the intersection node of two singly linked lists by identity, not by equal values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Intersection Node of Two Singly Linked\nDescription: Find the intersection node of two singly linked lists by identity, not by equal values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-66-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-66-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-66-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-018",
    "slug": "add-two-nonnegative-integers-represented",
    "title": "Add Two Nonnegative Integers Represented",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Medium",
    "order": 67,
    "statement": "### Problem Description\n\nAdd two nonnegative integers represented by linked lists in reverse digit order.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Add Two Nonnegative Integers Represented across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Add Two Nonnegative Integers Represented\n * Description: Add two nonnegative integers represented by linked lists in reverse digit order.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Add Two Nonnegative Integers Represented\n * Description: Add two nonnegative integers represented by linked lists in reverse digit order.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Add Two Nonnegative Integers Represented\nDescription: Add two nonnegative integers represented by linked lists in reverse digit order.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Add Two Nonnegative Integers Represented\nDescription: Add two nonnegative integers represented by linked lists in reverse digit order.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-67-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-67-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-67-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-019",
    "slug": "sort-a-linked-list-in-on",
    "title": "Sort a Linked List in O(N",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Medium",
    "order": 68,
    "statement": "### Problem Description\n\nSort a linked list in O(N log N) time without copying its values into an array.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Sort a Linked List in O(N across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sort a Linked List in O(N\n * Description: Sort a linked list in O(N log N) time without copying its values into an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sort a Linked List in O(N\n * Description: Sort a linked list in O(N log N) time without copying its values into an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sort a Linked List in O(N\nDescription: Sort a linked list in O(N log N) time without copying its values into an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sort a Linked List in O(N\nDescription: Sort a linked list in O(N log N) time without copying its values into an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-68-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-68-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-68-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-020",
    "slug": "sorted-linked-list-remove-duplicates-while",
    "title": "Sorted Linked List, Remove Duplicates While",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Medium",
    "order": 69,
    "statement": "### Problem Description\n\nGiven a sorted linked list, remove duplicates while preserving one copy of each value.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Sorted Linked List, Remove Duplicates While across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sorted Linked List, Remove Duplicates While\n * Description: Given a sorted linked list, remove duplicates while preserving one copy of each value.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sorted Linked List, Remove Duplicates While\n * Description: Given a sorted linked list, remove duplicates while preserving one copy of each value.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sorted Linked List, Remove Duplicates While\nDescription: Given a sorted linked list, remove duplicates while preserving one copy of each value.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sorted Linked List, Remove Duplicates While\nDescription: Given a sorted linked list, remove duplicates while preserving one copy of each value.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-69-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-69-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-69-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-021",
    "slug": "partition-a-linked-list-around",
    "title": "Partition a Linked List Around",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Medium",
    "order": 70,
    "statement": "### Problem Description\n\nPartition a linked list around a pivot X, keeping nodes less than X before nodes greater than or equal to X.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Partition a Linked List Around across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Partition a Linked List Around\n * Description: Partition a linked list around a pivot X, keeping nodes less than X before nodes greater than or equal to X.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Partition a Linked List Around\n * Description: Partition a linked list around a pivot X, keeping nodes less than X before nodes greater than or equal to X.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Partition a Linked List Around\nDescription: Partition a linked list around a pivot X, keeping nodes less than X before nodes greater than or equal to X.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Partition a Linked List Around\nDescription: Partition a linked list around a pivot X, keeping nodes less than X before nodes greater than or equal to X.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-70-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-70-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-70-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-022",
    "slug": "implement-doubly-linked-list-with-insertion",
    "title": "Implement Doubly Linked List with Insertion",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Medium",
    "order": 71,
    "statement": "### Problem Description\n\nImplement a doubly linked list with insertion and deletion at both ends.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Implement Doubly Linked List with Insertion across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Doubly Linked List with Insertion\n * Description: Implement a doubly linked list with insertion and deletion at both ends.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Doubly Linked List with Insertion\n * Description: Implement a doubly linked list with insertion and deletion at both ends.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Doubly Linked List with Insertion\nDescription: Implement a doubly linked list with insertion and deletion at both ends.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Doubly Linked List with Insertion\nDescription: Implement a doubly linked list with insertion and deletion at both ends.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-71-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-71-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-71-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-023",
    "slug": "implement-circular-linked-list-and-determine-whether",
    "title": "Implement Circular Linked List and Determine Whether",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Medium",
    "order": 72,
    "statement": "### Problem Description\n\nImplement a circular linked list and determine whether a traversal has completed one full cycle.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Implement Circular Linked List and Determine Whether across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Circular Linked List and Determine Whether\n * Description: Implement a circular linked list and determine whether a traversal has completed one full cycle.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Circular Linked List and Determine Whether\n * Description: Implement a circular linked list and determine whether a traversal has completed one full cycle.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Circular Linked List and Determine Whether\nDescription: Implement a circular linked list and determine whether a traversal has completed one full cycle.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Circular Linked List and Determine Whether\nDescription: Implement a circular linked list and determine whether a traversal has completed one full cycle.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-72-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-72-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-72-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-024",
    "slug": "design-lru-cache-using-a-hash-map",
    "title": "Design LRU Cache Using a Hash Map",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Medium",
    "order": 73,
    "statement": "### Problem Description\n\nDesign an LRU cache using a hash map and a doubly linked list. Support get and put in average O(1) time.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Design LRU Cache Using a Hash Map across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design LRU Cache Using a Hash Map\n * Description: Design an LRU cache using a hash map and a doubly linked list. Support get and put in average O(1) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design LRU Cache Using a Hash Map\n * Description: Design an LRU cache using a hash map and a doubly linked list. Support get and put in average O(1) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design LRU Cache Using a Hash Map\nDescription: Design an LRU cache using a hash map and a doubly linked list. Support get and put in average O(1) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design LRU Cache Using a Hash Map\nDescription: Design an LRU cache using a hash map and a doubly linked list. Support get and put in average O(1) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-73-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-73-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-73-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-025",
    "slug": "implement-queue-using-a-linked-list",
    "title": "Implement Queue Using a Linked List",
    "topic": "Linked Lists",
    "tags": [
      "Linked List"
    ],
    "difficulty": "Medium",
    "order": 74,
    "statement": "### Problem Description\n\nImplement a queue using a linked list and analyze its operation costs.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Applying Implement Queue Using a Linked List across elements 10, 20, 30, 40."
      },
      {
        "input": "1\n100",
        "output": "100",
        "explanation": "Singleton list verification."
      },
      {
        "input": "3\n3 2 1",
        "output": "1 2 3",
        "explanation": "Verification on ordered inputs."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Linked Lists. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Linked Lists eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Queue Using a Linked List\n * Description: Implement a queue using a linked list and analyze its operation costs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Queue Using a Linked List\n * Description: Implement a queue using a linked list and analyze its operation costs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Queue Using a Linked List\nDescription: Implement a queue using a linked list and analyze its operation costs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Queue Using a Linked List\nDescription: Implement a queue using a linked list and analyze its operation costs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-74-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-74-2",
        "input": "1\n100",
        "expectedOutput": "100"
      },
      {
        "id": "tc-p1-74-3",
        "input": "3\n3 2 1",
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
    "id": "dsa-p1-001",
    "slug": "implement-stack-using-a-fixed-size-array",
    "title": "Implement Stack Using a Fixed-size Array",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Warm-up",
    "order": 75,
    "statement": "### Problem Description\n\nImplement a stack using a fixed-size array with push, pop, top, and isEmpty.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Stack Using a Fixed-size Array\n * Description: Implement a stack using a fixed-size array with push, pop, top, and isEmpty.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Stack Using a Fixed-size Array\n * Description: Implement a stack using a fixed-size array with push, pop, top, and isEmpty.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Stack Using a Fixed-size Array\nDescription: Implement a stack using a fixed-size array with push, pop, top, and isEmpty.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Stack Using a Fixed-size Array\nDescription: Implement a stack using a fixed-size array with push, pop, top, and isEmpty.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-75-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-75-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-75-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-002",
    "slug": "the-stack-to-support-dynamic-resizing",
    "title": "The Stack to Support Dynamic Resizing",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Warm-up",
    "order": 76,
    "statement": "### Problem Description\n\nExtend the stack to support dynamic resizing.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Stack to Support Dynamic Resizing\n * Description: Extend the stack to support dynamic resizing.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Stack to Support Dynamic Resizing\n * Description: Extend the stack to support dynamic resizing.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: The Stack to Support Dynamic Resizing\nDescription: Extend the stack to support dynamic resizing.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: The Stack to Support Dynamic Resizing\nDescription: Extend the stack to support dynamic resizing.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-76-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-76-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-76-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-003",
    "slug": "implement-stack-using-a-linked-list",
    "title": "Implement Stack Using a Linked List",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Warm-up",
    "order": 77,
    "statement": "### Problem Description\n\nImplement a stack using a linked list. Compare memory and operation costs with an array implementation.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Stack Using a Linked List\n * Description: Implement a stack using a linked list. Compare memory and operation costs with an array implementation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Stack Using a Linked List\n * Description: Implement a stack using a linked list. Compare memory and operation costs with an array implementation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Stack Using a Linked List\nDescription: Implement a stack using a linked list. Compare memory and operation costs with an array implementation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Stack Using a Linked List\nDescription: Implement a stack using a linked list. Compare memory and operation costs with an array implementation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-77-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-77-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-77-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-004",
    "slug": "sequence-of-push-and-pop-operations",
    "title": "Sequence of Push and Pop Operations",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Warm-up",
    "order": 78,
    "statement": "### Problem Description\n\nGiven a sequence of push and pop operations, determine the final stack contents and whether any operation causes underflow.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Push and Pop Operations\n * Description: Given a sequence of push and pop operations, determine the final stack contents and whether any operation causes underflow.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Push and Pop Operations\n * Description: Given a sequence of push and pop operations, determine the final stack contents and whether any operation causes underflow.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sequence of Push and Pop Operations\nDescription: Given a sequence of push and pop operations, determine the final stack contents and whether any operation causes underflow.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sequence of Push and Pop Operations\nDescription: Given a sequence of push and pop operations, determine the final stack contents and whether any operation causes underflow.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-78-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-78-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-78-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-005",
    "slug": "reverse-a-string-using-a-stack",
    "title": "Reverse A String Using a Stack",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Warm-up",
    "order": 79,
    "statement": "### Problem Description\n\nReverse a string using a stack.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Reverse A String Using a Stack\n * Description: Reverse a string using a stack.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Reverse A String Using a Stack\n * Description: Reverse a string using a stack.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Reverse A String Using a Stack\nDescription: Reverse a string using a stack.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Reverse A String Using a Stack\nDescription: Reverse a string using a stack.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-79-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-79-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-79-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-006",
    "slug": "check-whether-a-string-containing-parentheses",
    "title": "Valid Balanced Parentheses",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Easy",
    "order": 80,
    "statement": "### Problem Description\n\nGiven a string $S$ containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\nAn input string is valid if open brackets are closed by the same type of brackets in the correct order.\n\n### Input Format\nA single line containing the bracket string $S$.\n\n### Output Format\nPrint `true` if valid, else `false`.",
    "examples": [
      {
        "input": "()[]{}",
        "output": "true",
        "explanation": "All brackets match and close properly."
      },
      {
        "input": "(]",
        "output": "false",
        "explanation": "Mismatched closing bracket ] for (."
      },
      {
        "input": "([{}])",
        "output": "true",
        "explanation": "Properly nested brackets."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Check Whether a String Containing Parentheses\n * Description: Check whether a string containing parentheses, braces, and brackets is balanced.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Check Whether a String Containing Parentheses\n * Description: Check whether a string containing parentheses, braces, and brackets is balanced.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Check Whether a String Containing Parentheses\nDescription: Check whether a string containing parentheses, braces, and brackets is balanced.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Check Whether a String Containing Parentheses\nDescription: Check whether a string containing parentheses, braces, and brackets is balanced.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-80-1",
        "input": "()[]{}",
        "expectedOutput": "true"
      },
      {
        "id": "tc-p1-80-2",
        "input": "(]",
        "expectedOutput": "false"
      },
      {
        "id": "tc-p1-80-3",
        "input": "([{}])",
        "expectedOutput": "true"
      },
      {
        "id": "tc-p1-80-4",
        "input": "((()",
        "expectedOutput": "false"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-007",
    "slug": "expression-containing-only-single-digit-numbers",
    "title": "Expression Containing Only Single-digit Numbers",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Easy",
    "order": 81,
    "statement": "### Problem Description\n\nGiven an expression containing only single-digit numbers and operators, evaluate its postfix representation.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Expression Containing Only Single-digit Numbers\n * Description: Given an expression containing only single-digit numbers and operators, evaluate its postfix representation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Expression Containing Only Single-digit Numbers\n * Description: Given an expression containing only single-digit numbers and operators, evaluate its postfix representation.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Expression Containing Only Single-digit Numbers\nDescription: Given an expression containing only single-digit numbers and operators, evaluate its postfix representation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Expression Containing Only Single-digit Numbers\nDescription: Given an expression containing only single-digit numbers and operators, evaluate its postfix representation.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-81-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-81-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-81-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-008",
    "slug": "convert-an-infix-expression-to-postfix",
    "title": "Convert an Infix Expression to Postfix",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Easy",
    "order": 82,
    "statement": "### Problem Description\n\nConvert an infix expression to postfix while respecting operator precedence and associativity.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Convert an Infix Expression to Postfix\n * Description: Convert an infix expression to postfix while respecting operator precedence and associativity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Convert an Infix Expression to Postfix\n * Description: Convert an infix expression to postfix while respecting operator precedence and associativity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Convert an Infix Expression to Postfix\nDescription: Convert an infix expression to postfix while respecting operator precedence and associativity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Convert an Infix Expression to Postfix\nDescription: Convert an infix expression to postfix while respecting operator precedence and associativity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-82-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-82-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-82-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-009",
    "slug": "evaluate-a-prefix-arithmetic-expression",
    "title": "Evaluate a Prefix Arithmetic Expression",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Easy",
    "order": 83,
    "statement": "### Problem Description\n\nEvaluate a prefix arithmetic expression.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Evaluate a Prefix Arithmetic Expression\n * Description: Evaluate a prefix arithmetic expression.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Evaluate a Prefix Arithmetic Expression\n * Description: Evaluate a prefix arithmetic expression.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Evaluate a Prefix Arithmetic Expression\nDescription: Evaluate a prefix arithmetic expression.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Evaluate a Prefix Arithmetic Expression\nDescription: Evaluate a prefix arithmetic expression.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-83-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-83-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-83-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-010",
    "slug": "design-stack-that-supports-retrieving-its-minimum",
    "title": "Min Stack Design with O(1) Minimum Retrieval",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Easy",
    "order": 84,
    "statement": "### Problem Description\n\nDesign a stack that supports push, pop, top, and retrieving the minimum element in $O(1)$ time.\n\nSupport $Q$ operations:\n- `push x`: Push $x$ onto stack.\n- `pop`: Remove element on top of stack.\n- `top`: Print top element.\n- `getMin`: Print minimum element in stack.\n\n### Input Format\n- Line 1: An integer $Q$.\n- Next $Q$ lines: Commands.\n\n### Output Format\nPrint output for each `top` and `getMin` command on a new line.",
    "examples": [
      {
        "input": "6\npush -2\npush 0\npush -3\ngetMin\npop\ngetMin",
        "output": "-3\n-2",
        "explanation": "Current min is -3. After popping -3, new min is -2."
      },
      {
        "input": "4\npush 5\ngetMin\ntop\ngetMin",
        "output": "5\n5\n5",
        "explanation": "Single element is both top and minimum."
      },
      {
        "input": "5\npush 10\npush 20\ntop\ngetMin\npop",
        "output": "20\n10",
        "explanation": "Top is 20, min is 10."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Stack That Supports Retrieving Its Minimum\n * Description: Design a stack that supports retrieving its minimum element in O(1) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Stack That Supports Retrieving Its Minimum\n * Description: Design a stack that supports retrieving its minimum element in O(1) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Stack That Supports Retrieving Its Minimum\nDescription: Design a stack that supports retrieving its minimum element in O(1) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Stack That Supports Retrieving Its Minimum\nDescription: Design a stack that supports retrieving its minimum element in O(1) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-84-1",
        "input": "6\npush -2\npush 0\npush -3\ngetMin\npop\ngetMin",
        "expectedOutput": "-3\n-2"
      },
      {
        "id": "tc-p1-84-2",
        "input": "4\npush 5\ngetMin\ntop\ngetMin",
        "expectedOutput": "5\n5\n5"
      },
      {
        "id": "tc-p1-84-3",
        "input": "5\npush 10\npush 20\ntop\ngetMin\npop",
        "expectedOutput": "20\n10"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-011",
    "slug": "implement-stack-using-two-queues",
    "title": "Implement Stack Using Two Queues",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Easy",
    "order": 85,
    "statement": "### Problem Description\n\nImplement a stack using two queues. Make push efficient, then make pop efficient.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Stack Using Two Queues\n * Description: Implement a stack using two queues. Make push efficient, then make pop efficient.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Stack Using Two Queues\n * Description: Implement a stack using two queues. Make push efficient, then make pop efficient.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Stack Using Two Queues\nDescription: Implement a stack using two queues. Make push efficient, then make pop efficient.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Stack Using Two Queues\nDescription: Implement a stack using two queues. Make push efficient, then make pop efficient.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-85-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-85-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-85-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-012",
    "slug": "array-find-the-next-greater-element",
    "title": "Next Greater Element Using Monotonic Stack",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Easy",
    "order": 86,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, find the Next Greater Element (NGE) for each element. The NGE for an element $x$ is the first greater element to its right. If no greater element exists to its right, output `-1`.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint $N$ space-separated integers representing the next greater element for each index.",
    "examples": [
      {
        "input": "4\n4 5 2 25",
        "output": "5 25 25 -1",
        "explanation": "Next greater for 4 is 5; for 5 is 25; for 2 is 25; for 25 none (-1)."
      },
      {
        "input": "4\n13 7 6 12",
        "output": "-1 12 12 -1",
        "explanation": "Next greater for 7 is 12; for 6 is 12; 13 and 12 have none."
      },
      {
        "input": "3\n1 2 3",
        "output": "2 3 -1",
        "explanation": "Strictly increasing sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Find the Next Greater Element\n * Description: Given an array, find the next greater element for every element using a monotonic stack.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Find the Next Greater Element\n * Description: Given an array, find the next greater element for every element using a monotonic stack.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Find the Next Greater Element\nDescription: Given an array, find the next greater element for every element using a monotonic stack.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Find the Next Greater Element\nDescription: Given an array, find the next greater element for every element using a monotonic stack.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-86-1",
        "input": "4\n4 5 2 25",
        "expectedOutput": "5 25 25 -1"
      },
      {
        "id": "tc-p1-86-2",
        "input": "4\n13 7 6 12",
        "expectedOutput": "-1 12 12 -1"
      },
      {
        "id": "tc-p1-86-3",
        "input": "3\n1 2 3",
        "expectedOutput": "2 3 -1"
      },
      {
        "id": "tc-p1-86-4",
        "input": "3\n3 2 1",
        "expectedOutput": "-1 -1 -1"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-013",
    "slug": "next-smaller-element-for-each-array",
    "title": "Next Smaller Element for Each Array",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Easy",
    "order": 87,
    "statement": "### Problem Description\n\nFind the next smaller element for each array element.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Next Smaller Element for Each Array\n * Description: Find the next smaller element for each array element.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Next Smaller Element for Each Array\n * Description: Find the next smaller element for each array element.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Next Smaller Element for Each Array\nDescription: Find the next smaller element for each array element.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Next Smaller Element for Each Array\nDescription: Find the next smaller element for each array element.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-87-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-87-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-87-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-014",
    "slug": "distance-to-the-next-greater-element",
    "title": "Distance to the Next Greater Element",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Medium",
    "order": 88,
    "statement": "### Problem Description\n\nFind the distance to the next greater element on the right for each element.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Distance to the Next Greater Element\n * Description: Find the distance to the next greater element on the right for each element.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Distance to the Next Greater Element\n * Description: Find the distance to the next greater element on the right for each element.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Distance to the Next Greater Element\nDescription: Find the distance to the next greater element on the right for each element.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Distance to the Next Greater Element\nDescription: Find the distance to the next greater element on the right for each element.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-88-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-88-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-88-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-015",
    "slug": "daily-stock-prices-calculate-the-stock",
    "title": "Online Stock Span",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Medium",
    "order": 89,
    "statement": "### Problem Description\n\nGiven daily stock prices for $N$ days, calculate the stock span for each day. The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers representing stock prices.\n\n### Output Format\nPrint $N$ space-separated integers representing the span for each day.",
    "examples": [
      {
        "input": "7\n100 80 60 70 60 75 85",
        "output": "1 1 1 2 1 4 6",
        "explanation": "Spans calculated looking backward."
      },
      {
        "input": "4\n10 20 30 40",
        "output": "1 2 3 4",
        "explanation": "Strictly increasing prices give increasing spans."
      },
      {
        "input": "4\n40 30 20 10",
        "output": "1 1 1 1",
        "explanation": "Strictly decreasing prices all have span 1."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Daily Stock Prices, Calculate the Stock\n * Description: Given daily stock prices, calculate the stock span for each day.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Daily Stock Prices, Calculate the Stock\n * Description: Given daily stock prices, calculate the stock span for each day.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Daily Stock Prices, Calculate the Stock\nDescription: Given daily stock prices, calculate the stock span for each day.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Daily Stock Prices, Calculate the Stock\nDescription: Given daily stock prices, calculate the stock span for each day.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-89-1",
        "input": "7\n100 80 60 70 60 75 85",
        "expectedOutput": "1 1 1 2 1 4 6"
      },
      {
        "id": "tc-p1-89-2",
        "input": "4\n10 20 30 40",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-89-3",
        "input": "4\n40 30 20 10",
        "expectedOutput": "1 1 1 1"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-016",
    "slug": "largest-rectangle-in-a-histogram",
    "title": "Largest Rectangle in Histogram",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Medium",
    "order": 90,
    "statement": "### Problem Description\n\nGiven an array of $N$ non-negative integers representing the histogram's bar heights where the width of each bar is 1, find the area of the largest rectangle in the histogram.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $H_1, \\dots, H_N$.\n\n### Output Format\nPrint the maximum rectangular area.",
    "examples": [
      {
        "input": "6\n2 1 5 6 2 3",
        "output": "10",
        "explanation": "Bars at height 5 and 6 form a rectangle of area 5 * 2 = 10."
      },
      {
        "input": "2\n2 4",
        "output": "4",
        "explanation": "Max area is bar of height 4 (1*4=4) or both at height 2 (2*2=4)."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single bar of height 10 has area 10."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Largest Rectangle in a Histogram\n * Description: Find the largest rectangle in a histogram.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Largest Rectangle in a Histogram\n * Description: Find the largest rectangle in a histogram.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Largest Rectangle in a Histogram\nDescription: Find the largest rectangle in a histogram.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Largest Rectangle in a Histogram\nDescription: Find the largest rectangle in a histogram.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-90-1",
        "input": "6\n2 1 5 6 2 3",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-90-2",
        "input": "2\n2 4",
        "expectedOutput": "4"
      },
      {
        "id": "tc-p1-90-3",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-90-4",
        "input": "4\n2 2 2 2",
        "expectedOutput": "8"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-017",
    "slug": "binary-matrix-find-the-largest-rectangle",
    "title": "Binary Matrix, Find the Largest Rectangle",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Medium",
    "order": 91,
    "statement": "### Problem Description\n\nGiven a binary matrix, find the largest rectangle containing only ones.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Matrix, Find the Largest Rectangle\n * Description: Given a binary matrix, find the largest rectangle containing only ones.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Matrix, Find the Largest Rectangle\n * Description: Given a binary matrix, find the largest rectangle containing only ones.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Binary Matrix, Find the Largest Rectangle\nDescription: Given a binary matrix, find the largest rectangle containing only ones.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Binary Matrix, Find the Largest Rectangle\nDescription: Given a binary matrix, find the largest rectangle containing only ones.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-91-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-91-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-91-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-018",
    "slug": "array-of-temperatures-calculate-how-many",
    "title": "Array of Temperatures, Calculate How Many",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Medium",
    "order": 92,
    "statement": "### Problem Description\n\nGiven an array of temperatures, calculate how many days each day must wait for a warmer temperature.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array of Temperatures, Calculate How Many\n * Description: Given an array of temperatures, calculate how many days each day must wait for a warmer temperature.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array of Temperatures, Calculate How Many\n * Description: Given an array of temperatures, calculate how many days each day must wait for a warmer temperature.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array of Temperatures, Calculate How Many\nDescription: Given an array of temperatures, calculate how many days each day must wait for a warmer temperature.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array of Temperatures, Calculate How Many\nDescription: Given an array of temperatures, calculate how many days each day must wait for a warmer temperature.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-92-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-92-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-92-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-019",
    "slug": "implement-browser-history-model-using-stacks",
    "title": "Implement Browser-history Model Using Stacks",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Medium",
    "order": 93,
    "statement": "### Problem Description\n\nImplement a browser-history model using stacks. Support visiting a page, going back, and going forward.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Browser-history Model Using Stacks\n * Description: Implement a browser-history model using stacks. Support visiting a page, going back, and going forward.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Browser-history Model Using Stacks\n * Description: Implement a browser-history model using stacks. Support visiting a page, going back, and going forward.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Browser-history Model Using Stacks\nDescription: Implement a browser-history model using stacks. Support visiting a page, going back, and going forward.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Browser-history Model Using Stacks\nDescription: Implement a browser-history model using stacks. Support visiting a page, going back, and going forward.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-93-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-93-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-93-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-020",
    "slug": "design-stack-supporting-push-pop-top",
    "title": "Design Stack Supporting Push, Pop, Top",
    "topic": "Stacks",
    "tags": [
      "Stack"
    ],
    "difficulty": "Medium",
    "order": 94,
    "statement": "### Problem Description\n\nDesign a stack supporting push, pop, top, and getMedian with clearly stated time and space tradeoffs.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Standard stack evaluation on 1 2 3 4."
      },
      {
        "input": "1\n42",
        "output": "42",
        "explanation": "Singleton stack evaluation."
      },
      {
        "input": "3\n10 20 30",
        "output": "10 20 30",
        "explanation": "Evaluation of stack elements."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Stacks. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Stacks eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Stack Supporting Push, Pop, Top\n * Description: Design a stack supporting push, pop, top, and getMedian with clearly stated time and space tradeoffs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Stack Supporting Push, Pop, Top\n * Description: Design a stack supporting push, pop, top, and getMedian with clearly stated time and space tradeoffs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Stack Supporting Push, Pop, Top\nDescription: Design a stack supporting push, pop, top, and getMedian with clearly stated time and space tradeoffs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Stack Supporting Push, Pop, Top\nDescription: Design a stack supporting push, pop, top, and getMedian with clearly stated time and space tradeoffs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-94-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-94-2",
        "input": "1\n42",
        "expectedOutput": "42"
      },
      {
        "id": "tc-p1-94-3",
        "input": "3\n10 20 30",
        "expectedOutput": "10 20 30"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-001",
    "slug": "implement-queue-using-an-array-with-enqueue",
    "title": "Implement Queue Using an Array with Enqueue",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Warm-up",
    "order": 95,
    "statement": "### Problem Description\n\nImplement a queue using an array with enqueue, dequeue, front, and isEmpty.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Queue Using an Array with Enqueue\n * Description: Implement a queue using an array with enqueue, dequeue, front, and isEmpty.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Queue Using an Array with Enqueue\n * Description: Implement a queue using an array with enqueue, dequeue, front, and isEmpty.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Queue Using an Array with Enqueue\nDescription: Implement a queue using an array with enqueue, dequeue, front, and isEmpty.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Queue Using an Array with Enqueue\nDescription: Implement a queue using an array with enqueue, dequeue, front, and isEmpty.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-95-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-95-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-95-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-002",
    "slug": "explain-why-a-simple-array-queue",
    "title": "Explain Why a Simple Array Queue",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Warm-up",
    "order": 96,
    "statement": "### Problem Description\n\nExplain why a simple array queue wastes space after repeated dequeue operations. Reproduce the problem experimentally.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why a Simple Array Queue\n * Description: Explain why a simple array queue wastes space after repeated dequeue operations. Reproduce the problem experimentally.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why a Simple Array Queue\n * Description: Explain why a simple array queue wastes space after repeated dequeue operations. Reproduce the problem experimentally.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Explain Why a Simple Array Queue\nDescription: Explain why a simple array queue wastes space after repeated dequeue operations. Reproduce the problem experimentally.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Explain Why a Simple Array Queue\nDescription: Explain why a simple array queue wastes space after repeated dequeue operations. Reproduce the problem experimentally.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-96-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-96-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-96-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-003",
    "slug": "implement-circular-queue-with-fixed-capacity",
    "title": "Implement Circular Queue with Fixed Capacity",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Warm-up",
    "order": 97,
    "statement": "### Problem Description\n\nImplement a circular queue with fixed capacity.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Circular Queue with Fixed Capacity\n * Description: Implement a circular queue with fixed capacity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Circular Queue with Fixed Capacity\n * Description: Implement a circular queue with fixed capacity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Circular Queue with Fixed Capacity\nDescription: Implement a circular queue with fixed capacity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Circular Queue with Fixed Capacity\nDescription: Implement a circular queue with fixed capacity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-97-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-97-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-97-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-004",
    "slug": "implement-queue-using-a-linked-list-2",
    "title": "Implement Queue Using a Linked List",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Warm-up",
    "order": 98,
    "statement": "### Problem Description\n\nImplement a queue using a linked list.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Queue Using a Linked List\n * Description: Implement a queue using a linked list.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Queue Using a Linked List\n * Description: Implement a queue using a linked list.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Queue Using a Linked List\nDescription: Implement a queue using a linked list.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Queue Using a Linked List\nDescription: Implement a queue using a linked list.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-98-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-98-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-98-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-005",
    "slug": "implement-queue-using-two-stacks",
    "title": "Implement Queue Using Two Stacks",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Hard",
    "order": 99,
    "statement": "### Problem Description\n\nImplement a queue using two stacks. Make both enqueue and dequeue operations amortized O(1).\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Queue Using Two Stacks\n * Description: Implement a queue using two stacks. Make both enqueue and dequeue operations amortized O(1).\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Queue Using Two Stacks\n * Description: Implement a queue using two stacks. Make both enqueue and dequeue operations amortized O(1).\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Queue Using Two Stacks\nDescription: Implement a queue using two stacks. Make both enqueue and dequeue operations amortized O(1).\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Queue Using Two Stacks\nDescription: Implement a queue using two stacks. Make both enqueue and dequeue operations amortized O(1).\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-99-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-99-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-99-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-006",
    "slug": "implement-stack-using-one-queue",
    "title": "Implement Stack Using One Queue",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Easy",
    "order": 100,
    "statement": "### Problem Description\n\nImplement a stack using one queue.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Stack Using One Queue\n * Description: Implement a stack using one queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Stack Using One Queue\n * Description: Implement a stack using one queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Stack Using One Queue\nDescription: Implement a stack using one queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Stack Using One Queue\nDescription: Implement a stack using one queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-100-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-100-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-100-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-007",
    "slug": "sequence-of-enqueue-and-dequeue-operations",
    "title": "Sequence of Enqueue and Dequeue Operations",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Easy",
    "order": 101,
    "statement": "### Problem Description\n\nGiven a sequence of enqueue and dequeue operations, determine whether the queue becomes empty and what its final contents are.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Enqueue and Dequeue Operations\n * Description: Given a sequence of enqueue and dequeue operations, determine whether the queue becomes empty and what its final contents are.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Enqueue and Dequeue Operations\n * Description: Given a sequence of enqueue and dequeue operations, determine whether the queue becomes empty and what its final contents are.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sequence of Enqueue and Dequeue Operations\nDescription: Given a sequence of enqueue and dequeue operations, determine whether the queue becomes empty and what its final contents are.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sequence of Enqueue and Dequeue Operations\nDescription: Given a sequence of enqueue and dequeue operations, determine whether the queue becomes empty and what its final contents are.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-101-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-101-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-101-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-008",
    "slug": "design-queue-that-returns-the-minimum-element",
    "title": "Design Queue That Returns the Minimum Element",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Hard",
    "order": 102,
    "statement": "### Problem Description\n\nDesign a queue that returns the minimum element in O(1) amortized time.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Queue That Returns the Minimum Element\n * Description: Design a queue that returns the minimum element in O(1) amortized time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Queue That Returns the Minimum Element\n * Description: Design a queue that returns the minimum element in O(1) amortized time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Queue That Returns the Minimum Element\nDescription: Design a queue that returns the minimum element in O(1) amortized time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Queue That Returns the Minimum Element\nDescription: Design a queue that returns the minimum element in O(1) amortized time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-102-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-102-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-102-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-009",
    "slug": "stream-of-integers-maintain-the-first",
    "title": "Stream of Integers, Maintain the First",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Easy",
    "order": 103,
    "statement": "### Problem Description\n\nGiven a stream of integers, maintain the first non-repeating element after every insertion.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Stream of Integers, Maintain the First\n * Description: Given a stream of integers, maintain the first non-repeating element after every insertion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Stream of Integers, Maintain the First\n * Description: Given a stream of integers, maintain the first non-repeating element after every insertion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Stream of Integers, Maintain the First\nDescription: Given a stream of integers, maintain the first non-repeating element after every insertion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Stream of Integers, Maintain the First\nDescription: Given a stream of integers, maintain the first non-repeating element after every insertion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-103-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-103-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-103-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-010",
    "slug": "simulate-a-cpu-task-scheduler-that",
    "title": "Simulate a CPU Task Scheduler That",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Easy",
    "order": 104,
    "statement": "### Problem Description\n\nSimulate a CPU task scheduler that processes tasks in FIFO order.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Simulate a CPU Task Scheduler That\n * Description: Simulate a CPU task scheduler that processes tasks in FIFO order.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Simulate a CPU Task Scheduler That\n * Description: Simulate a CPU task scheduler that processes tasks in FIFO order.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Simulate a CPU Task Scheduler That\nDescription: Simulate a CPU task scheduler that processes tasks in FIFO order.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Simulate a CPU Task Scheduler That\nDescription: Simulate a CPU task scheduler that processes tasks in FIFO order.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-104-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-104-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-104-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-011",
    "slug": "array-and-window-size-k-return",
    "title": "Sliding Window Maximum Using Deque",
    "topic": "Queues and Deques",
    "tags": [
      "Queue",
      "Sliding Window"
    ],
    "difficulty": "Medium",
    "order": 105,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers and a sliding window of size $K$ moving from left to right, return the maximum element in each window in $O(N)$ time using a monotonic deque.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le K \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint $N - K + 1$ space-separated integers representing the maximum for each window.",
    "examples": [
      {
        "input": "8 3\n1 3 -1 -3 5 3 6 7",
        "output": "3 3 5 5 6 7",
        "explanation": "Max for each window of size 3."
      },
      {
        "input": "1 1\n1",
        "output": "1",
        "explanation": "Single element window."
      },
      {
        "input": "4 2\n4 3 2 1",
        "output": "4 3 2",
        "explanation": "Decreasing array window maximums."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array and Window Size K, Return\n * Description: Given an array and window size K, return the maximum of every sliding window in O(N) time using a deque.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array and Window Size K, Return\n * Description: Given an array and window size K, return the maximum of every sliding window in O(N) time using a deque.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array and Window Size K, Return\nDescription: Given an array and window size K, return the maximum of every sliding window in O(N) time using a deque.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array and Window Size K, Return\nDescription: Given an array and window size K, return the maximum of every sliding window in O(N) time using a deque.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-105-1",
        "input": "8 3\n1 3 -1 -3 5 3 6 7",
        "expectedOutput": "3 3 5 5 6 7"
      },
      {
        "id": "tc-p1-105-2",
        "input": "1 1\n1",
        "expectedOutput": "1"
      },
      {
        "id": "tc-p1-105-3",
        "input": "4 2\n4 3 2 1",
        "expectedOutput": "4 3 2"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-012",
    "slug": "the-previous-problem-to-return-both",
    "title": "The Previous Problem to Return Both",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Medium",
    "order": 106,
    "statement": "### Problem Description\n\nExtend the previous problem to return both the minimum and maximum for each window.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Previous Problem to Return Both\n * Description: Extend the previous problem to return both the minimum and maximum for each window.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Previous Problem to Return Both\n * Description: Extend the previous problem to return both the minimum and maximum for each window.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: The Previous Problem to Return Both\nDescription: Extend the previous problem to return both the minimum and maximum for each window.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: The Previous Problem to Return Both\nDescription: Extend the previous problem to return both the minimum and maximum for each window.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-106-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-106-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-106-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-013",
    "slug": "stream-of-requests-implement-a-moving-window",
    "title": "Stream of Requests, Implement a Moving-window",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Medium",
    "order": 107,
    "statement": "### Problem Description\n\nGiven a stream of requests, implement a moving-window rate limiter that allows at most K requests in the last W time units.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Stream of Requests, Implement a Moving-window\n * Description: Given a stream of requests, implement a moving-window rate limiter that allows at most K requests in the last W time units.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Stream of Requests, Implement a Moving-window\n * Description: Given a stream of requests, implement a moving-window rate limiter that allows at most K requests in the last W time units.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Stream of Requests, Implement a Moving-window\nDescription: Given a stream of requests, implement a moving-window rate limiter that allows at most K requests in the last W time units.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Stream of Requests, Implement a Moving-window\nDescription: Given a stream of requests, implement a moving-window rate limiter that allows at most K requests in the last W time units.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-107-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-107-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-107-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-014",
    "slug": "design-task-scheduler-that-supports-adding-tasks",
    "title": "Design Task Scheduler That Supports Adding Tasks",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Medium",
    "order": 108,
    "statement": "### Problem Description\n\nDesign a task scheduler that supports adding tasks with different priorities and explain why a normal queue is insufficient.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Task Scheduler That Supports Adding Tasks\n * Description: Design a task scheduler that supports adding tasks with different priorities and explain why a normal queue is insufficient.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Task Scheduler That Supports Adding Tasks\n * Description: Design a task scheduler that supports adding tasks with different priorities and explain why a normal queue is insufficient.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Task Scheduler That Supports Adding Tasks\nDescription: Design a task scheduler that supports adding tasks with different priorities and explain why a normal queue is insufficient.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Task Scheduler That Supports Adding Tasks\nDescription: Design a task scheduler that supports adding tasks with different priorities and explain why a normal queue is insufficient.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-108-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-108-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-108-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-015",
    "slug": "simulate-a-round-robin-scheduling-system",
    "title": "Simulate a Round-robin Scheduling System",
    "topic": "Queues and Deques",
    "tags": [
      "Queue"
    ],
    "difficulty": "Medium",
    "order": 109,
    "statement": "### Problem Description\n\nSimulate a round-robin scheduling system with a fixed time quantum using a queue.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n10 20 30 40",
        "output": "10 20 30 40",
        "explanation": "Processing queue elements."
      },
      {
        "input": "1\n5",
        "output": "5",
        "explanation": "Single element queue."
      },
      {
        "input": "3\n1 2 3",
        "output": "1 2 3",
        "explanation": "FIFO sequence."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Queues and Deques. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Queues and Deques eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Simulate a Round-robin Scheduling System\n * Description: Simulate a round-robin scheduling system with a fixed time quantum using a queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Simulate a Round-robin Scheduling System\n * Description: Simulate a round-robin scheduling system with a fixed time quantum using a queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Simulate a Round-robin Scheduling System\nDescription: Simulate a round-robin scheduling system with a fixed time quantum using a queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Simulate a Round-robin Scheduling System\nDescription: Simulate a round-robin scheduling system with a fixed time quantum using a queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-109-1",
        "input": "4\n10 20 30 40",
        "expectedOutput": "10 20 30 40"
      },
      {
        "id": "tc-p1-109-2",
        "input": "1\n5",
        "expectedOutput": "5"
      },
      {
        "id": "tc-p1-109-3",
        "input": "3\n1 2 3",
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
    "id": "dsa-p1-001",
    "slug": "implement-hash-function-for-positive-integers",
    "title": "Implement Hash Function for Positive Integers",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Warm-up",
    "order": 110,
    "statement": "### Problem Description\n\nImplement a hash function for positive integers and map them into a table of fixed capacity.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Hash Function for Positive Integers\n * Description: Implement a hash function for positive integers and map them into a table of fixed capacity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Hash Function for Positive Integers\n * Description: Implement a hash function for positive integers and map them into a table of fixed capacity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Hash Function for Positive Integers\nDescription: Implement a hash function for positive integers and map them into a table of fixed capacity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Hash Function for Positive Integers\nDescription: Implement a hash function for positive integers and map them into a table of fixed capacity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-110-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-110-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-110-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-002",
    "slug": "insert-search-and-delete-keys-using",
    "title": "Insert, Search, and Delete Keys",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Warm-up",
    "order": 111,
    "statement": "### Problem Description\n\nInsert, search, and delete keys using separate chaining.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Insert, Search, and Delete Keys Using\n * Description: Insert, search, and delete keys using separate chaining.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Insert, Search, and Delete Keys Using\n * Description: Insert, search, and delete keys using separate chaining.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Insert, Search, and Delete Keys Using\nDescription: Insert, search, and delete keys using separate chaining.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Insert, Search, and Delete Keys Using\nDescription: Insert, search, and delete keys using separate chaining.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-111-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-111-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-111-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-003",
    "slug": "implement-collision-resolution-using-linear-probing",
    "title": "Implement Collision Resolution Using Linear Probing",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Warm-up",
    "order": 112,
    "statement": "### Problem Description\n\nImplement collision resolution using linear probing.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Collision Resolution Using Linear Probing\n * Description: Implement collision resolution using linear probing.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Collision Resolution Using Linear Probing\n * Description: Implement collision resolution using linear probing.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Collision Resolution Using Linear Probing\nDescription: Implement collision resolution using linear probing.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Collision Resolution Using Linear Probing\nDescription: Implement collision resolution using linear probing.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-112-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-112-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-112-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-004",
    "slug": "open-addressing-to-quadratic-probing",
    "title": "Open Addressing to Quadratic Probing",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Warm-up",
    "order": 113,
    "statement": "### Problem Description\n\nExtend open addressing to quadratic probing and compare the clustering behavior.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Open Addressing to Quadratic Probing\n * Description: Extend open addressing to quadratic probing and compare the clustering behavior.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Open Addressing to Quadratic Probing\n * Description: Extend open addressing to quadratic probing and compare the clustering behavior.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Open Addressing to Quadratic Probing\nDescription: Extend open addressing to quadratic probing and compare the clustering behavior.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Open Addressing to Quadratic Probing\nDescription: Extend open addressing to quadratic probing and compare the clustering behavior.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-113-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-113-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-113-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-005",
    "slug": "implement-deletion-in-an-open-addressed-hash-table",
    "title": "Implement Deletion in an Open-addressed Hash Table",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Warm-up",
    "order": 114,
    "statement": "### Problem Description\n\nImplement deletion in an open-addressed hash table without breaking future searches.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Deletion in an Open-addressed Hash Table\n * Description: Implement deletion in an open-addressed hash table without breaking future searches.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Deletion in an Open-addressed Hash Table\n * Description: Implement deletion in an open-addressed hash table without breaking future searches.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Deletion in an Open-addressed Hash Table\nDescription: Implement deletion in an open-addressed hash table without breaking future searches.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Deletion in an Open-addressed Hash Table\nDescription: Implement deletion in an open-addressed hash table without breaking future searches.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-114-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-114-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-114-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-006",
    "slug": "load-factor-of-a-hash-table",
    "title": "Load Factor of a Hash Table",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Easy",
    "order": 115,
    "statement": "### Problem Description\n\nCalculate the load factor of a hash table and explain when resizing is necessary.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Load Factor of a Hash Table\n * Description: Calculate the load factor of a hash table and explain when resizing is necessary.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Load Factor of a Hash Table\n * Description: Calculate the load factor of a hash table and explain when resizing is necessary.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Load Factor of a Hash Table\nDescription: Calculate the load factor of a hash table and explain when resizing is necessary.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Load Factor of a Hash Table\nDescription: Calculate the load factor of a hash table and explain when resizing is necessary.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-115-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-115-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-115-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-007",
    "slug": "implement-rehashing-when-the-load-factor-exceeds",
    "title": "Implement Rehashing When the Load Factor Exceeds",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Easy",
    "order": 116,
    "statement": "### Problem Description\n\nImplement rehashing when the load factor exceeds a chosen threshold.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Rehashing When the Load Factor Exceeds\n * Description: Implement rehashing when the load factor exceeds a chosen threshold.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Rehashing When the Load Factor Exceeds\n * Description: Implement rehashing when the load factor exceeds a chosen threshold.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Rehashing When the Load Factor Exceeds\nDescription: Implement rehashing when the load factor exceeds a chosen threshold.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Rehashing When the Load Factor Exceeds\nDescription: Implement rehashing when the load factor exceeds a chosen threshold.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-116-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-116-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-116-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-008",
    "slug": "array-construct-a-frequency-table",
    "title": "Array, Construct a Frequency Table",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Easy",
    "order": 117,
    "statement": "### Problem Description\n\nGiven an array, construct a frequency table and answer multiple frequency queries.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Construct a Frequency Table\n * Description: Given an array, construct a frequency table and answer multiple frequency queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Construct a Frequency Table\n * Description: Given an array, construct a frequency table and answer multiple frequency queries.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Construct a Frequency Table\nDescription: Given an array, construct a frequency table and answer multiple frequency queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Construct a Frequency Table\nDescription: Given an array, construct a frequency table and answer multiple frequency queries.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-117-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-117-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-117-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-009",
    "slug": "first-non-repeating-character-in-a-string",
    "title": "First Non-Repeating Character in String",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Easy",
    "order": 118,
    "statement": "### Problem Description\n\nGiven a string $S$, find the first non-repeating character in it and print its 0-based index. If no non-repeating character exists, print `-1`.\n\n### Input Format\nA single line containing string $S$.\n\n### Output Format\nPrint the 0-based index, or `-1`.",
    "examples": [
      {
        "input": "leetcode",
        "output": "0",
        "explanation": "Character \"l\" at index 0 does not repeat."
      },
      {
        "input": "loveleetcode",
        "output": "2",
        "explanation": "Character \"v\" at index 2 does not repeat."
      },
      {
        "input": "aabb",
        "output": "-1",
        "explanation": "All characters repeat; output -1."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: First Non-repeating Character in a String\n * Description: Find the first non-repeating character in a string.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: First Non-repeating Character in a String\n * Description: Find the first non-repeating character in a string.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: First Non-repeating Character in a String\nDescription: Find the first non-repeating character in a string.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: First Non-repeating Character in a String\nDescription: Find the first non-repeating character in a string.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-118-1",
        "input": "leetcode",
        "expectedOutput": "0"
      },
      {
        "id": "tc-p1-118-2",
        "input": "loveleetcode",
        "expectedOutput": "2"
      },
      {
        "id": "tc-p1-118-3",
        "input": "aabb",
        "expectedOutput": "-1"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-010",
    "slug": "two-strings-are-anagrams-using-character",
    "title": "Check If Two Strings Are Anagrams",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Easy",
    "order": 119,
    "statement": "### Problem Description\n\nGiven two strings $S$ and $T$, determine whether $T$ is an anagram of $S$.\n\n### Input Format\n- Line 1: String $S$.\n- Line 2: String $T$.\n\n### Output Format\nPrint `true` if anagrams, else `false`.",
    "examples": [
      {
        "input": "anagram\nnagaram",
        "output": "true",
        "explanation": "Same character frequencies."
      },
      {
        "input": "rat\ncar",
        "output": "false",
        "explanation": "Characters differ."
      },
      {
        "input": "a\na",
        "output": "true",
        "explanation": "Identical single character."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Strings Are Anagrams Using Character\n * Description: Determine whether two strings are anagrams using character frequencies.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Strings Are Anagrams Using Character\n * Description: Determine whether two strings are anagrams using character frequencies.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Two Strings Are Anagrams Using Character\nDescription: Determine whether two strings are anagrams using character frequencies.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Two Strings Are Anagrams Using Character\nDescription: Determine whether two strings are anagrams using character frequencies.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-119-1",
        "input": "anagram\nnagaram",
        "expectedOutput": "true"
      },
      {
        "id": "tc-p1-119-2",
        "input": "rat\ncar",
        "expectedOutput": "false"
      },
      {
        "id": "tc-p1-119-3",
        "input": "a\na",
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
    "id": "dsa-p1-011",
    "slug": "array-find-two-indices-whose-values",
    "title": "Two Sum — Indices with Target Sum",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Easy",
    "order": 120,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers and a target $T$, find the two distinct 0-based indices whose values sum to $T$. Output the indices in ascending order separated by space. If no pair exists, print `-1 -1`.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $T$.\n- Line 2: $N$ space-separated integers $A_0, \\dots, A_{N-1}$.\n\n### Output Format\nPrint the two 0-based indices separated by space, or `-1 -1`.",
    "examples": [
      {
        "input": "4 9\n2 7 11 15",
        "output": "0 1",
        "explanation": "A[0] + A[1] = 2 + 7 = 9."
      },
      {
        "input": "3 6\n3 2 4",
        "output": "1 2",
        "explanation": "A[1] + A[2] = 2 + 4 = 6."
      },
      {
        "input": "2 6\n3 3",
        "output": "0 1",
        "explanation": "A[0] + A[1] = 3 + 3 = 6."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Find Two Indices Whose Values\n * Description: Given an array, find two indices whose values sum to a target in expected O(N) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Find Two Indices Whose Values\n * Description: Given an array, find two indices whose values sum to a target in expected O(N) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Find Two Indices Whose Values\nDescription: Given an array, find two indices whose values sum to a target in expected O(N) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Find Two Indices Whose Values\nDescription: Given an array, find two indices whose values sum to a target in expected O(N) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-120-1",
        "input": "4 9\n2 7 11 15",
        "expectedOutput": "0 1"
      },
      {
        "id": "tc-p1-120-2",
        "input": "3 6\n3 2 4",
        "expectedOutput": "1 2"
      },
      {
        "id": "tc-p1-120-3",
        "input": "2 6\n3 3",
        "expectedOutput": "0 1"
      },
      {
        "id": "tc-p1-120-4",
        "input": "3 10\n1 2 3",
        "expectedOutput": "-1 -1"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-012",
    "slug": "unique-pairs-in-an-array-whose",
    "title": "Unique Pairs in an Array Whose",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Easy",
    "order": 121,
    "statement": "### Problem Description\n\nFind all unique pairs in an array whose sum equals K.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Unique Pairs in an Array Whose\n * Description: Find all unique pairs in an array whose sum equals K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Unique Pairs in an Array Whose\n * Description: Find all unique pairs in an array whose sum equals K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Unique Pairs in an Array Whose\nDescription: Find all unique pairs in an array whose sum equals K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Unique Pairs in an Array Whose\nDescription: Find all unique pairs in an array whose sum equals K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-121-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-121-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-121-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-013",
    "slug": "longest-consecutive-sequence-of-integers",
    "title": "Longest Consecutive Sequence in O(N)",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Easy",
    "order": 122,
    "statement": "### Problem Description\n\nGiven an unsorted array of $N$ integers, find the length of the longest consecutive elements sequence in $O(N)$ expected time using a hash set.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers. (Omitted if $N = 0$).\n\n### Output Format\nPrint the length of the longest consecutive sequence.",
    "examples": [
      {
        "input": "6\n100 4 200 1 3 2",
        "output": "4",
        "explanation": "Longest consecutive sequence is [1, 2, 3, 4], length 4."
      },
      {
        "input": "10\n0 3 7 2 5 8 4 6 0 1",
        "output": "9",
        "explanation": "Consecutive sequence from 0 to 8 has length 9."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "Empty array has length 0."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Longest Consecutive Sequence of Integers\n * Description: Find the longest consecutive sequence of integers in an unsorted array in expected O(N) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Longest Consecutive Sequence of Integers\n * Description: Find the longest consecutive sequence of integers in an unsorted array in expected O(N) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Longest Consecutive Sequence of Integers\nDescription: Find the longest consecutive sequence of integers in an unsorted array in expected O(N) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Longest Consecutive Sequence of Integers\nDescription: Find the longest consecutive sequence of integers in an unsorted array in expected O(N) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-122-1",
        "input": "6\n100 4 200 1 3 2",
        "expectedOutput": "4"
      },
      {
        "id": "tc-p1-122-2",
        "input": "10\n0 3 7 2 5 8 4 6 0 1",
        "expectedOutput": "9"
      },
      {
        "id": "tc-p1-122-3",
        "input": "0",
        "expectedOutput": "0"
      },
      {
        "id": "tc-p1-122-4",
        "input": "1\n42",
        "expectedOutput": "1"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p1-014",
    "slug": "two-strings-determine-whether-one-is",
    "title": "Two Strings, Determine Whether One Is",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Medium",
    "order": 123,
    "statement": "### Problem Description\n\nGiven two strings, determine whether one is a permutation of the other under case-sensitive and case-insensitive rules.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Strings, Determine Whether One Is\n * Description: Given two strings, determine whether one is a permutation of the other under case-sensitive and case-insensitive rules.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Strings, Determine Whether One Is\n * Description: Given two strings, determine whether one is a permutation of the other under case-sensitive and case-insensitive rules.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Two Strings, Determine Whether One Is\nDescription: Given two strings, determine whether one is a permutation of the other under case-sensitive and case-insensitive rules.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Two Strings, Determine Whether One Is\nDescription: Given two strings, determine whether one is a permutation of the other under case-sensitive and case-insensitive rules.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-123-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-123-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-123-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-015",
    "slug": "group-a-list-of-words-into",
    "title": "Group a List of Words Into",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Medium",
    "order": 124,
    "statement": "### Problem Description\n\nGroup a list of words into anagram groups.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Group a List of Words Into\n * Description: Group a list of words into anagram groups.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Group a List of Words Into\n * Description: Group a list of words into anagram groups.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Group a List of Words Into\nDescription: Group a list of words into anagram groups.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Group a List of Words Into\nDescription: Group a list of words into anagram groups.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-124-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-124-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-124-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-016",
    "slug": "longest-subarray-containing-an-equal-number",
    "title": "Longest Subarray Containing an Equal Number",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Medium",
    "order": 125,
    "statement": "### Problem Description\n\nFind the longest subarray containing an equal number of zeros and ones.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Longest Subarray Containing an Equal Number\n * Description: Find the longest subarray containing an equal number of zeros and ones.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Longest Subarray Containing an Equal Number\n * Description: Find the longest subarray containing an equal number of zeros and ones.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Longest Subarray Containing an Equal Number\nDescription: Find the longest subarray containing an equal number of zeros and ones.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Longest Subarray Containing an Equal Number\nDescription: Find the longest subarray containing an equal number of zeros and ones.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-125-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-125-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-125-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-017",
    "slug": "count-number-of-subarrays-whose-xor-equals",
    "title": "Count Number of Subarrays Whose XOR Equals",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Medium",
    "order": 126,
    "statement": "### Problem Description\n\nCount the number of subarrays whose XOR equals K.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Subarrays Whose XOR Equals\n * Description: Count the number of subarrays whose XOR equals K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Subarrays Whose XOR Equals\n * Description: Count the number of subarrays whose XOR equals K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count Number of Subarrays Whose XOR Equals\nDescription: Count the number of subarrays whose XOR equals K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count Number of Subarrays Whose XOR Equals\nDescription: Count the number of subarrays whose XOR equals K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-126-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-126-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-126-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-018",
    "slug": "design-data-structure-supporting-insertion-deletion",
    "title": "Design Data Structure Supporting Insertion, Deletion",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Medium",
    "order": 127,
    "statement": "### Problem Description\n\nDesign a data structure supporting insertion, deletion, and random retrieval of an element in average O(1) time.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Data Structure Supporting Insertion, Deletion\n * Description: Design a data structure supporting insertion, deletion, and random retrieval of an element in average O(1) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Data Structure Supporting Insertion, Deletion\n * Description: Design a data structure supporting insertion, deletion, and random retrieval of an element in average O(1) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Data Structure Supporting Insertion, Deletion\nDescription: Design a data structure supporting insertion, deletion, and random retrieval of an element in average O(1) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Data Structure Supporting Insertion, Deletion\nDescription: Design a data structure supporting insertion, deletion, and random retrieval of an element in average O(1) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-127-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-127-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-127-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-019",
    "slug": "design-cache-with-a-fixed-capacity",
    "title": "Design Cache with a Fixed Capacity",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Medium",
    "order": 128,
    "statement": "### Problem Description\n\nDesign a cache with a fixed capacity and least-frequently-used eviction.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Cache with a Fixed Capacity\n * Description: Design a cache with a fixed capacity and least-frequently-used eviction.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Cache with a Fixed Capacity\n * Description: Design a cache with a fixed capacity and least-frequently-used eviction.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Cache with a Fixed Capacity\nDescription: Design a cache with a fixed capacity and least-frequently-used eviction.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Cache with a Fixed Capacity\nDescription: Design a cache with a fixed capacity and least-frequently-used eviction.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-128-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-128-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-128-3",
        "input": "3\n5 5 5",
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
    "id": "dsa-p1-020",
    "slug": "explain-how-hash-collisions-can-affect",
    "title": "Explain How Hash Collisions Can Affect",
    "topic": "Hash Tables and Hashing",
    "tags": [
      "Hash Table"
    ],
    "difficulty": "Medium",
    "order": 129,
    "statement": "### Problem Description\n\nExplain how hash collisions can affect worst-case complexity. Construct a set of keys that collide under your own hash function.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.",
    "examples": [
      {
        "input": "4\n1 2 3 4",
        "output": "1 2 3 4",
        "explanation": "Hash table operations on elements 1, 2, 3, 4."
      },
      {
        "input": "1\n10",
        "output": "10",
        "explanation": "Single element verification."
      },
      {
        "input": "3\n5 5 5",
        "output": "5",
        "explanation": "Handling duplicate keys in hash table."
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Hash Tables and Hashing. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Hash Tables and Hashing eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain How Hash Collisions Can Affect\n * Description: Explain how hash collisions can affect worst-case complexity. Construct a set of keys that collide under your own hash function.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain How Hash Collisions Can Affect\n * Description: Explain how hash collisions can affect worst-case complexity. Construct a set of keys that collide under your own hash function.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Explain How Hash Collisions Can Affect\nDescription: Explain how hash collisions can affect worst-case complexity. Construct a set of keys that collide under your own hash function.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Explain How Hash Collisions Can Affect\nDescription: Explain how hash collisions can affect worst-case complexity. Construct a set of keys that collide under your own hash function.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tc-p1-129-1",
        "input": "4\n1 2 3 4",
        "expectedOutput": "1 2 3 4"
      },
      {
        "id": "tc-p1-129-2",
        "input": "1\n10",
        "expectedOutput": "10"
      },
      {
        "id": "tc-p1-129-3",
        "input": "3\n5 5 5",
        "expectedOutput": "5"
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  }
];
