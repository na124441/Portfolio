import type { DsaProblem } from '@/types/dsa-question';

export const PHASE_3_PROBLEMS: DsaProblem[] = [
  {
    "id": "dsa-p3-001",
    "slug": "array-manually-perform-bubble-sort",
    "title": "Array, Manually Perform Bubble Sort",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 168,
    "statement": "### Problem Description\n\nGiven an array, manually perform bubble sort and write the array after every pass.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Manually Perform Bubble Sort\n * Description: Given an array, manually perform bubble sort and write the array after every pass.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Manually Perform Bubble Sort\n * Description: Given an array, manually perform bubble sort and write the array after every pass.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Manually Perform Bubble Sort\nDescription: Given an array, manually perform bubble sort and write the array after every pass.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Manually Perform Bubble Sort\nDescription: Given an array, manually perform bubble sort and write the array after every pass.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "array-manually-perform-bubble-sort-tc-1",
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
    "id": "dsa-p3-002",
    "slug": "implement-bubble-sort-and-count-the-comparisons",
    "title": "Implement Bubble Sort and Count the Comparisons",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 169,
    "statement": "### Problem Description\n\nImplement bubble sort and count the comparisons and swaps.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Bubble Sort and Count the Comparisons\n * Description: Implement bubble sort and count the comparisons and swaps.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Bubble Sort and Count the Comparisons\n * Description: Implement bubble sort and count the comparisons and swaps.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Bubble Sort and Count the Comparisons\nDescription: Implement bubble sort and count the comparisons and swaps.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Bubble Sort and Count the Comparisons\nDescription: Implement bubble sort and count the comparisons and swaps.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-bubble-sort-and-count-the-comparisons-tc-1",
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
    "id": "dsa-p3-003",
    "slug": "modify-bubble-sort-to-terminate-early",
    "title": "Modify Bubble Sort to Terminate Early",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 170,
    "statement": "### Problem Description\n\nModify bubble sort to terminate early when a complete pass makes no swaps.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Bubble Sort to Terminate Early\n * Description: Modify bubble sort to terminate early when a complete pass makes no swaps.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Bubble Sort to Terminate Early\n * Description: Modify bubble sort to terminate early when a complete pass makes no swaps.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Modify Bubble Sort to Terminate Early\nDescription: Modify bubble sort to terminate early when a complete pass makes no swaps.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Modify Bubble Sort to Terminate Early\nDescription: Modify bubble sort to terminate early when a complete pass makes no swaps.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "modify-bubble-sort-to-terminate-early-tc-1",
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
    "id": "dsa-p3-004",
    "slug": "construct-an-input-that-causes-bubble",
    "title": "Construct an Input That Causes Bubble",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 171,
    "statement": "### Problem Description\n\nConstruct an input that causes bubble sort to perform its maximum number of swaps.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Construct an Input That Causes Bubble\n * Description: Construct an input that causes bubble sort to perform its maximum number of swaps.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Construct an Input That Causes Bubble\n * Description: Construct an input that causes bubble sort to perform its maximum number of swaps.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Construct an Input That Causes Bubble\nDescription: Construct an input that causes bubble sort to perform its maximum number of swaps.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Construct an Input That Causes Bubble\nDescription: Construct an input that causes bubble sort to perform its maximum number of swaps.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "construct-an-input-that-causes-bubble-tc-1",
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
    "id": "dsa-p3-005",
    "slug": "implement-selection-sort-and-count-comparisons",
    "title": "Implement Selection Sort and Count Comparisons",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 172,
    "statement": "### Problem Description\n\nImplement selection sort and count comparisons and swaps for sorted, reverse-sorted, and random arrays.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Selection Sort and Count Comparisons\n * Description: Implement selection sort and count comparisons and swaps for sorted, reverse-sorted, and random arrays.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Selection Sort and Count Comparisons\n * Description: Implement selection sort and count comparisons and swaps for sorted, reverse-sorted, and random arrays.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Selection Sort and Count Comparisons\nDescription: Implement selection sort and count comparisons and swaps for sorted, reverse-sorted, and random arrays.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Selection Sort and Count Comparisons\nDescription: Implement selection sort and count comparisons and swaps for sorted, reverse-sorted, and random arrays.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-selection-sort-and-count-comparisons-tc-1",
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
    "id": "dsa-p3-006",
    "slug": "explain-why-selection-sort-performs-quadratic",
    "title": "Explain Why Selection Sort Performs Quadratic",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 173,
    "statement": "### Problem Description\n\nExplain why selection sort performs quadratic comparisons even on a sorted array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why Selection Sort Performs Quadratic\n * Description: Explain why selection sort performs quadratic comparisons even on a sorted array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why Selection Sort Performs Quadratic\n * Description: Explain why selection sort performs quadratic comparisons even on a sorted array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Explain Why Selection Sort Performs Quadratic\nDescription: Explain why selection sort performs quadratic comparisons even on a sorted array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Explain Why Selection Sort Performs Quadratic\nDescription: Explain why selection sort performs quadratic comparisons even on a sorted array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "explain-why-selection-sort-performs-quadratic-tc-1",
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
    "id": "dsa-p3-007",
    "slug": "implement-insertion-sort-and-trace-how",
    "title": "Implement Insertion Sort and Trace How",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 174,
    "statement": "### Problem Description\n\nImplement insertion sort and trace how the sorted prefix grows after each insertion.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Insertion Sort and Trace How\n * Description: Implement insertion sort and trace how the sorted prefix grows after each insertion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Insertion Sort and Trace How\n * Description: Implement insertion sort and trace how the sorted prefix grows after each insertion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Insertion Sort and Trace How\nDescription: Implement insertion sort and trace how the sorted prefix grows after each insertion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Insertion Sort and Trace How\nDescription: Implement insertion sort and trace how the sorted prefix grows after each insertion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-insertion-sort-and-trace-how-tc-1",
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
    "id": "dsa-p3-008",
    "slug": "count-number-of-shifts-performed-by-insertion",
    "title": "Count Number of Shifts Performed by Insertion",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 175,
    "statement": "### Problem Description\n\nCount the number of shifts performed by insertion sort on a given array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Shifts Performed by Insertion\n * Description: Count the number of shifts performed by insertion sort on a given array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Shifts Performed by Insertion\n * Description: Count the number of shifts performed by insertion sort on a given array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count Number of Shifts Performed by Insertion\nDescription: Count the number of shifts performed by insertion sort on a given array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count Number of Shifts Performed by Insertion\nDescription: Count the number of shifts performed by insertion sort on a given array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "count-number-of-shifts-performed-by-insertion-tc-1",
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
    "id": "dsa-p3-009",
    "slug": "compare-insertion-sort-and-selection-sort",
    "title": "Compare Insertion Sort and Selection Sort",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 176,
    "statement": "### Problem Description\n\nCompare insertion sort and selection sort on an almost-sorted array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Insertion Sort and Selection Sort\n * Description: Compare insertion sort and selection sort on an almost-sorted array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Insertion Sort and Selection Sort\n * Description: Compare insertion sort and selection sort on an almost-sorted array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare Insertion Sort and Selection Sort\nDescription: Compare insertion sort and selection sort on an almost-sorted array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare Insertion Sort and Selection Sort\nDescription: Compare insertion sort and selection sort on an almost-sorted array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "compare-insertion-sort-and-selection-sort-tc-1",
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
    "id": "dsa-p3-010",
    "slug": "implement-insertion-sort-on-a-singly-linked",
    "title": "Implement Insertion Sort on a Singly Linked",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 177,
    "statement": "### Problem Description\n\nImplement insertion sort on a singly linked list.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Insertion Sort on a Singly Linked\n * Description: Implement insertion sort on a singly linked list.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Insertion Sort on a Singly Linked\n * Description: Implement insertion sort on a singly linked list.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Insertion Sort on a Singly Linked\nDescription: Implement insertion sort on a singly linked list.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Insertion Sort on a Singly Linked\nDescription: Implement insertion sort on a singly linked list.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-insertion-sort-on-a-singly-linked-tc-1",
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
    "id": "dsa-p3-011",
    "slug": "each-of-the-three-algorithms-is",
    "title": "Each of the Three Algorithms Is",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 178,
    "statement": "### Problem Description\n\nDetermine whether each of the three algorithms is stable and whether it sorts in place.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Each of the Three Algorithms Is\n * Description: Determine whether each of the three algorithms is stable and whether it sorts in place.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Each of the Three Algorithms Is\n * Description: Determine whether each of the three algorithms is stable and whether it sorts in place.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Each of the Three Algorithms Is\nDescription: Determine whether each of the three algorithms is stable and whether it sorts in place.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Each of the Three Algorithms Is\nDescription: Determine whether each of the three algorithms is stable and whether it sorts in place.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "each-of-the-three-algorithms-is-tc-1",
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
    "id": "dsa-p3-012",
    "slug": "records-containing-a-name-and",
    "title": "Records Containing a Name and",
    "topic": "Elementary sorting",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 179,
    "statement": "### Problem Description\n\nGiven records containing a name and a score, sort them by score while preserving the original order of equal scores.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Elementary sorting. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Elementary sorting eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Records Containing a Name and\n * Description: Given records containing a name and a score, sort them by score while preserving the original order of equal scores.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Records Containing a Name and\n * Description: Given records containing a name and a score, sort them by score while preserving the original order of equal scores.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Records Containing a Name and\nDescription: Given records containing a name and a score, sort them by score while preserving the original order of equal scores.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Records Containing a Name and\nDescription: Given records containing a name and a score, sort them by score while preserving the original order of equal scores.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "records-containing-a-name-and-tc-1",
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
    "id": "dsa-p3-001",
    "slug": "split-an-array-into-halves-recursively",
    "title": "Split an Array Into Halves Recursively",
    "topic": "Merge sort",
    "tags": [
      "Recursion"
    ],
    "difficulty": "Warm-up",
    "order": 180,
    "statement": "### Problem Description\n\nSplit an array into halves recursively until each subarray has one element. Reconstruct the sorted array manually.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Split an Array Into Halves Recursively\n * Description: Split an array into halves recursively until each subarray has one element. Reconstruct the sorted array manually.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Split an Array Into Halves Recursively\n * Description: Split an array into halves recursively until each subarray has one element. Reconstruct the sorted array manually.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Split an Array Into Halves Recursively\nDescription: Split an array into halves recursively until each subarray has one element. Reconstruct the sorted array manually.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Split an Array Into Halves Recursively\nDescription: Split an array into halves recursively until each subarray has one element. Reconstruct the sorted array manually.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "split-an-array-into-halves-recursively-tc-1",
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
    "id": "dsa-p3-002",
    "slug": "implement-the-merge-operation-that-combines-two",
    "title": "Implement The Merge Operation That Combines Two",
    "topic": "Merge sort",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 181,
    "statement": "### Problem Description\n\nImplement the merge operation that combines two sorted subarrays.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement The Merge Operation That Combines Two\n * Description: Implement the merge operation that combines two sorted subarrays.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement The Merge Operation That Combines Two\n * Description: Implement the merge operation that combines two sorted subarrays.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement The Merge Operation That Combines Two\nDescription: Implement the merge operation that combines two sorted subarrays.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement The Merge Operation That Combines Two\nDescription: Implement the merge operation that combines two sorted subarrays.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-the-merge-operation-that-combines-two-tc-1",
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
    "id": "dsa-p3-003",
    "slug": "implement-recursive-merge-sort-using-an-auxiliary",
    "title": "Implement Recursive Merge Sort Using an Auxiliary",
    "topic": "Merge sort",
    "tags": [
      "Recursion"
    ],
    "difficulty": "Warm-up",
    "order": 182,
    "statement": "### Problem Description\n\nImplement recursive merge sort using an auxiliary array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Recursive Merge Sort Using an Auxiliary\n * Description: Implement recursive merge sort using an auxiliary array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Recursive Merge Sort Using an Auxiliary\n * Description: Implement recursive merge sort using an auxiliary array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Recursive Merge Sort Using an Auxiliary\nDescription: Implement recursive merge sort using an auxiliary array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Recursive Merge Sort Using an Auxiliary\nDescription: Implement recursive merge sort using an auxiliary array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-recursive-merge-sort-using-an-auxiliary-tc-1",
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
    "id": "dsa-p3-004",
    "slug": "count-number-of-comparisons-made-during",
    "title": "Count Number of Comparisons Made During",
    "topic": "Merge sort",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 183,
    "statement": "### Problem Description\n\nCount the number of comparisons made during the merge step for a given pair of sorted arrays.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Comparisons Made During\n * Description: Count the number of comparisons made during the merge step for a given pair of sorted arrays.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Comparisons Made During\n * Description: Count the number of comparisons made during the merge step for a given pair of sorted arrays.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count Number of Comparisons Made During\nDescription: Count the number of comparisons made during the merge step for a given pair of sorted arrays.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count Number of Comparisons Made During\nDescription: Count the number of comparisons made during the merge step for a given pair of sorted arrays.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "count-number-of-comparisons-made-during-tc-1",
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
    "id": "dsa-p3-005",
    "slug": "prove-that-merge-sort-has-on",
    "title": "Prove That Merge Sort Has O(N",
    "topic": "Merge sort",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 184,
    "statement": "### Problem Description\n\nProve that merge sort has O(N log N) time complexity.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That Merge Sort Has O(N\n * Description: Prove that merge sort has O(N log N) time complexity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Prove That Merge Sort Has O(N\n * Description: Prove that merge sort has O(N log N) time complexity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Prove That Merge Sort Has O(N\nDescription: Prove that merge sort has O(N log N) time complexity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Prove That Merge Sort Has O(N\nDescription: Prove that merge sort has O(N log N) time complexity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "prove-that-merge-sort-has-on-tc-1",
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
    "id": "dsa-p3-006",
    "slug": "modify-merge-sort-to-count",
    "title": "Modify Merge Sort to Count",
    "topic": "Merge sort",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 185,
    "statement": "### Problem Description\n\nModify merge sort to count the number of inversions in an array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Merge Sort to Count\n * Description: Modify merge sort to count the number of inversions in an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Merge Sort to Count\n * Description: Modify merge sort to count the number of inversions in an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Modify Merge Sort to Count\nDescription: Modify merge sort to count the number of inversions in an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Modify Merge Sort to Count\nDescription: Modify merge sort to count the number of inversions in an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "modify-merge-sort-to-count-tc-1",
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
    "id": "dsa-p3-007",
    "slug": "array-count-how-many-pairs-i",
    "title": "Array, Count How Many Pairs (i",
    "topic": "Merge sort",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 186,
    "statement": "### Problem Description\n\nGiven an array, count how many pairs (i, j) satisfy i < j and arr[i] > arr[j].\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Count How Many Pairs (i\n * Description: Given an array, count how many pairs (i, j) satisfy i < j and arr[i] > arr[j].\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array, Count How Many Pairs (i\n * Description: Given an array, count how many pairs (i, j) satisfy i < j and arr[i] > arr[j].\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array, Count How Many Pairs (i\nDescription: Given an array, count how many pairs (i, j) satisfy i < j and arr[i] > arr[j].\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array, Count How Many Pairs (i\nDescription: Given an array, count how many pairs (i, j) satisfy i < j and arr[i] > arr[j].\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "array-count-how-many-pairs-i-tc-1",
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
    "id": "dsa-p3-008",
    "slug": "implement-merge-sort-on-a-linked-list",
    "title": "Implement Merge Sort on a Linked List",
    "topic": "Merge sort",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 187,
    "statement": "### Problem Description\n\nImplement merge sort on a linked list without copying the list into an array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Merge Sort on a Linked List\n * Description: Implement merge sort on a linked list without copying the list into an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Merge Sort on a Linked List\n * Description: Implement merge sort on a linked list without copying the list into an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Merge Sort on a Linked List\nDescription: Implement merge sort on a linked list without copying the list into an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Merge Sort on a Linked List\nDescription: Implement merge sort on a linked list without copying the list into an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-merge-sort-on-a-linked-list-tc-1",
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
    "id": "dsa-p3-009",
    "slug": "modify-merge-sort-to-sort-objects",
    "title": "Modify Merge Sort to Sort Objects",
    "topic": "Merge sort",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 188,
    "statement": "### Problem Description\n\nModify merge sort to sort objects by multiple fields using a custom comparator.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Merge Sort to Sort Objects\n * Description: Modify merge sort to sort objects by multiple fields using a custom comparator.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Merge Sort to Sort Objects\n * Description: Modify merge sort to sort objects by multiple fields using a custom comparator.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Modify Merge Sort to Sort Objects\nDescription: Modify merge sort to sort objects by multiple fields using a custom comparator.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Modify Merge Sort to Sort Objects\nDescription: Modify merge sort to sort objects by multiple fields using a custom comparator.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "modify-merge-sort-to-sort-objects-tc-1",
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
    "id": "dsa-p3-010",
    "slug": "nearly-sorted-array-compare-merge-sort",
    "title": "Nearly Sorted Array, Compare Merge Sort",
    "topic": "Merge sort",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 189,
    "statement": "### Problem Description\n\nGiven a nearly sorted array, compare merge sort with insertion sort experimentally.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Nearly Sorted Array, Compare Merge Sort\n * Description: Given a nearly sorted array, compare merge sort with insertion sort experimentally.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Nearly Sorted Array, Compare Merge Sort\n * Description: Given a nearly sorted array, compare merge sort with insertion sort experimentally.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Nearly Sorted Array, Compare Merge Sort\nDescription: Given a nearly sorted array, compare merge sort with insertion sort experimentally.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Nearly Sorted Array, Compare Merge Sort\nDescription: Given a nearly sorted array, compare merge sort with insertion sort experimentally.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "nearly-sorted-array-compare-merge-sort-tc-1",
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
    "id": "dsa-p3-011",
    "slug": "implement-external-merge-sort-simulation-where-data-is",
    "title": "Implement External Merge-sort Simulation Where Data Is",
    "topic": "Merge sort",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 190,
    "statement": "### Problem Description\n\nImplement an external merge-sort simulation where data is split into chunks that cannot all fit in memory simultaneously.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement External Merge-sort Simulation Where Data Is\n * Description: Implement an external merge-sort simulation where data is split into chunks that cannot all fit in memory simultaneously.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement External Merge-sort Simulation Where Data Is\n * Description: Implement an external merge-sort simulation where data is split into chunks that cannot all fit in memory simultaneously.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement External Merge-sort Simulation Where Data Is\nDescription: Implement an external merge-sort simulation where data is split into chunks that cannot all fit in memory simultaneously.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement External Merge-sort Simulation Where Data Is\nDescription: Implement an external merge-sort simulation where data is split into chunks that cannot all fit in memory simultaneously.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-external-merge-sort-simulation-where-data-is-tc-1",
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
    "id": "dsa-p3-012",
    "slug": "several-individually-sorted-arrays-merge-them",
    "title": "Several Individually Sorted Arrays, Merge Them",
    "topic": "Merge sort",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 191,
    "statement": "### Problem Description\n\nGiven several individually sorted arrays, merge them into one sorted array while minimizing the total number of element comparisons.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Merge sort. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Merge sort eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Several Individually Sorted Arrays, Merge Them\n * Description: Given several individually sorted arrays, merge them into one sorted array while minimizing the total number of element comparisons.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Several Individually Sorted Arrays, Merge Them\n * Description: Given several individually sorted arrays, merge them into one sorted array while minimizing the total number of element comparisons.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Several Individually Sorted Arrays, Merge Them\nDescription: Given several individually sorted arrays, merge them into one sorted array while minimizing the total number of element comparisons.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Several Individually Sorted Arrays, Merge Them\nDescription: Given several individually sorted arrays, merge them into one sorted array while minimizing the total number of element comparisons.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "several-individually-sorted-arrays-merge-them-tc-1",
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
    "id": "dsa-p3-001",
    "slug": "implement-lomuto-partitioning-and-trace-the-final",
    "title": "Implement Lomuto Partitioning and Trace the Final",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 192,
    "statement": "### Problem Description\n\nImplement Lomuto partitioning and trace the final pivot position.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Lomuto Partitioning and Trace the Final\n * Description: Implement Lomuto partitioning and trace the final pivot position.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Lomuto Partitioning and Trace the Final\n * Description: Implement Lomuto partitioning and trace the final pivot position.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Lomuto Partitioning and Trace the Final\nDescription: Implement Lomuto partitioning and trace the final pivot position.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Lomuto Partitioning and Trace the Final\nDescription: Implement Lomuto partitioning and trace the final pivot position.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-lomuto-partitioning-and-trace-the-final-tc-1",
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
    "id": "dsa-p3-002",
    "slug": "implement-quicksort-using-lomuto-partitioning",
    "title": "Implement Quicksort Using Lomuto Partitioning",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 193,
    "statement": "### Problem Description\n\nImplement quicksort using Lomuto partitioning.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Quicksort Using Lomuto Partitioning\n * Description: Implement quicksort using Lomuto partitioning.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Quicksort Using Lomuto Partitioning\n * Description: Implement quicksort using Lomuto partitioning.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Quicksort Using Lomuto Partitioning\nDescription: Implement quicksort using Lomuto partitioning.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Quicksort Using Lomuto Partitioning\nDescription: Implement quicksort using Lomuto partitioning.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-quicksort-using-lomuto-partitioning-tc-1",
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
    "id": "dsa-p3-003",
    "slug": "implement-hoare-partitioning-and-compare-its-behavior",
    "title": "Implement Hoare Partitioning and Compare Its Behavior",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 194,
    "statement": "### Problem Description\n\nImplement Hoare partitioning and compare its behavior with Lomuto partitioning.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Hoare Partitioning and Compare Its Behavior\n * Description: Implement Hoare partitioning and compare its behavior with Lomuto partitioning.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Hoare Partitioning and Compare Its Behavior\n * Description: Implement Hoare partitioning and compare its behavior with Lomuto partitioning.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Hoare Partitioning and Compare Its Behavior\nDescription: Implement Hoare partitioning and compare its behavior with Lomuto partitioning.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Hoare Partitioning and Compare Its Behavior\nDescription: Implement Hoare partitioning and compare its behavior with Lomuto partitioning.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-hoare-partitioning-and-compare-its-behavior-tc-1",
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
    "id": "dsa-p3-004",
    "slug": "construct-an-input-that-causes",
    "title": "Construct an Input That Causes",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 195,
    "statement": "### Problem Description\n\nConstruct an input that causes a poorly chosen quicksort pivot to produce highly unbalanced partitions.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Construct an Input That Causes\n * Description: Construct an input that causes a poorly chosen quicksort pivot to produce highly unbalanced partitions.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Construct an Input That Causes\n * Description: Construct an input that causes a poorly chosen quicksort pivot to produce highly unbalanced partitions.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Construct an Input That Causes\nDescription: Construct an input that causes a poorly chosen quicksort pivot to produce highly unbalanced partitions.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Construct an Input That Causes\nDescription: Construct an input that causes a poorly chosen quicksort pivot to produce highly unbalanced partitions.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "construct-an-input-that-causes-tc-1",
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
    "id": "dsa-p3-005",
    "slug": "modify-quicksort-to-use-randomized-pivot",
    "title": "Modify Quicksort to Use Randomized Pivot",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 196,
    "statement": "### Problem Description\n\nModify quicksort to use randomized pivot selection.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Quicksort to Use Randomized Pivot\n * Description: Modify quicksort to use randomized pivot selection.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Quicksort to Use Randomized Pivot\n * Description: Modify quicksort to use randomized pivot selection.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Modify Quicksort to Use Randomized Pivot\nDescription: Modify quicksort to use randomized pivot selection.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Modify Quicksort to Use Randomized Pivot\nDescription: Modify quicksort to use randomized pivot selection.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "modify-quicksort-to-use-randomized-pivot-tc-1",
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
    "id": "dsa-p3-006",
    "slug": "implement-median-of-three-pivot-selection-and-compare-partition",
    "title": "Implement Median-of-three Pivot Selection and Compare Partition",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 197,
    "statement": "### Problem Description\n\nImplement median-of-three pivot selection and compare partition balance.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Median-of-three Pivot Selection and Compare Partition\n * Description: Implement median-of-three pivot selection and compare partition balance.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Median-of-three Pivot Selection and Compare Partition\n * Description: Implement median-of-three pivot selection and compare partition balance.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Median-of-three Pivot Selection and Compare Partition\nDescription: Implement median-of-three pivot selection and compare partition balance.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Median-of-three Pivot Selection and Compare Partition\nDescription: Implement median-of-three pivot selection and compare partition balance.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-median-of-three-pivot-selection-and-compare-partition-tc-1",
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
    "id": "dsa-p3-007",
    "slug": "modify-quicksort-to-handle-arrays-containing",
    "title": "Modify Quicksort to Handle Arrays Containing",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 198,
    "statement": "### Problem Description\n\nModify quicksort to handle arrays containing many duplicate values efficiently using three-way partitioning.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Quicksort to Handle Arrays Containing\n * Description: Modify quicksort to handle arrays containing many duplicate values efficiently using three-way partitioning.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Modify Quicksort to Handle Arrays Containing\n * Description: Modify quicksort to handle arrays containing many duplicate values efficiently using three-way partitioning.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Modify Quicksort to Handle Arrays Containing\nDescription: Modify quicksort to handle arrays containing many duplicate values efficiently using three-way partitioning.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Modify Quicksort to Handle Arrays Containing\nDescription: Modify quicksort to handle arrays containing many duplicate values efficiently using three-way partitioning.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "modify-quicksort-to-handle-arrays-containing-tc-1",
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
    "id": "dsa-p3-008",
    "slug": "explain-the-expected-and-worst-case-time",
    "title": "Explain the Expected and Worst-case Time",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 199,
    "statement": "### Problem Description\n\nExplain the expected and worst-case time complexity of quicksort.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain the Expected and Worst-case Time\n * Description: Explain the expected and worst-case time complexity of quicksort.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain the Expected and Worst-case Time\n * Description: Explain the expected and worst-case time complexity of quicksort.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Explain the Expected and Worst-case Time\nDescription: Explain the expected and worst-case time complexity of quicksort.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Explain the Expected and Worst-case Time\nDescription: Explain the expected and worst-case time complexity of quicksort.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "explain-the-expected-and-worst-case-time-tc-1",
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
    "id": "dsa-p3-009",
    "slug": "implement-quickselect-to-find-the-smallest-element",
    "title": "Implement Quickselect to Find the Smallest Element",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 200,
    "statement": "### Problem Description\n\nImplement quickselect to find the smallest element at a given rank.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Quickselect to Find the Smallest Element\n * Description: Implement quickselect to find the smallest element at a given rank.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Quickselect to Find the Smallest Element\n * Description: Implement quickselect to find the smallest element at a given rank.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Quickselect to Find the Smallest Element\nDescription: Implement quickselect to find the smallest element at a given rank.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Quickselect to Find the Smallest Element\nDescription: Implement quickselect to find the smallest element at a given rank.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-quickselect-to-find-the-smallest-element-tc-1",
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
    "id": "dsa-p3-010",
    "slug": "use-quickselect-to-find-the-kth-largest",
    "title": "Use Quickselect to Find the Kth-largest",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 201,
    "statement": "### Problem Description\n\nUse quickselect to find the Kth-largest element without fully sorting the array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use Quickselect to Find the Kth-largest\n * Description: Use quickselect to find the Kth-largest element without fully sorting the array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Use Quickselect to Find the Kth-largest\n * Description: Use quickselect to find the Kth-largest element without fully sorting the array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Use Quickselect to Find the Kth-largest\nDescription: Use quickselect to find the Kth-largest element without fully sorting the array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Use Quickselect to Find the Kth-largest\nDescription: Use quickselect to find the Kth-largest element without fully sorting the array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "use-quickselect-to-find-the-kth-largest-tc-1",
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
    "id": "dsa-p3-011",
    "slug": "compare-quickselect-with-a-min-heap",
    "title": "Compare Quickselect with a Min-heap",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 202,
    "statement": "### Problem Description\n\nCompare quickselect with a min-heap and a max-heap for different values of K.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Quickselect with a Min-heap\n * Description: Compare quickselect with a min-heap and a max-heap for different values of K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare Quickselect with a Min-heap\n * Description: Compare quickselect with a min-heap and a max-heap for different values of K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare Quickselect with a Min-heap\nDescription: Compare quickselect with a min-heap and a max-heap for different values of K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare Quickselect with a Min-heap\nDescription: Compare quickselect with a min-heap and a max-heap for different values of K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "compare-quickselect-with-a-min-heap-tc-1",
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
    "id": "dsa-p3-012",
    "slug": "sort-an-array-of-objects-using",
    "title": "Sort an Array of Objects Using",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 203,
    "statement": "### Problem Description\n\nSort an array of objects using a comparator that orders by one field and breaks ties using another.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sort an Array of Objects Using\n * Description: Sort an array of objects using a comparator that orders by one field and breaks ties using another.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sort an Array of Objects Using\n * Description: Sort an array of objects using a comparator that orders by one field and breaks ties using another.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sort an Array of Objects Using\nDescription: Sort an array of objects using a comparator that orders by one field and breaks ties using another.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sort an Array of Objects Using\nDescription: Sort an array of objects using a comparator that orders by one field and breaks ties using another.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "sort-an-array-of-objects-using-tc-1",
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
    "id": "dsa-p3-013",
    "slug": "array-containing-only-0s-1s",
    "title": "Array Containing Only 0s, 1s",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 204,
    "statement": "### Problem Description\n\nGiven an array containing only 0s, 1s, and 2s, sort it in one traversal without using a comparison-based sorting algorithm.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array Containing Only 0s, 1s\n * Description: Given an array containing only 0s, 1s, and 2s, sort it in one traversal without using a comparison-based sorting algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Array Containing Only 0s, 1s\n * Description: Given an array containing only 0s, 1s, and 2s, sort it in one traversal without using a comparison-based sorting algorithm.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Array Containing Only 0s, 1s\nDescription: Given an array containing only 0s, 1s, and 2s, sort it in one traversal without using a comparison-based sorting algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Array Containing Only 0s, 1s\nDescription: Given an array containing only 0s, 1s, and 2s, sort it in one traversal without using a comparison-based sorting algorithm.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "array-containing-only-0s-1s-tc-1",
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
    "id": "dsa-p3-014",
    "slug": "large-array-where-most-elements-are",
    "title": "Large Array Where Most Elements Are",
    "topic": "Quicksort and selection",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 205,
    "statement": "### Problem Description\n\nGiven a large array where most elements are already sorted, identify which sorting approach is appropriate and justify the choice using its guarantees.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Quicksort and selection. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Quicksort and selection eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Large Array Where Most Elements Are\n * Description: Given a large array where most elements are already sorted, identify which sorting approach is appropriate and justify the choice using its guarantees.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Large Array Where Most Elements Are\n * Description: Given a large array where most elements are already sorted, identify which sorting approach is appropriate and justify the choice using its guarantees.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Large Array Where Most Elements Are\nDescription: Given a large array where most elements are already sorted, identify which sorting approach is appropriate and justify the choice using its guarantees.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Large Array Where Most Elements Are\nDescription: Given a large array where most elements are already sorted, identify which sorting approach is appropriate and justify the choice using its guarantees.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "large-array-where-most-elements-are-tc-1",
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
