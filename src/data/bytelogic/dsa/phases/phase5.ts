import type { DsaProblem } from '@/types/dsa-question';

export const PHASE_5_PROBLEMS: DsaProblem[] = [
  {
    "id": "dsa-p5-001",
    "slug": "define-a-binary-tree-node-and-construct",
    "title": "Define a Binary-tree Node and Construct",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 239,
    "statement": "### Problem Description\n\nDefine a binary-tree node and construct a tree with five nodes manually.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Define a Binary-tree Node and Construct\n * Description: Define a binary-tree node and construct a tree with five nodes manually.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Define a Binary-tree Node and Construct\n * Description: Define a binary-tree node and construct a tree with five nodes manually.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Define a Binary-tree Node and Construct\nDescription: Define a binary-tree node and construct a tree with five nodes manually.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Define a Binary-tree Node and Construct\nDescription: Define a binary-tree node and construct a tree with five nodes manually.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "define-a-binary-tree-node-and-construct-tc-1",
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
    "id": "dsa-p5-002",
    "slug": "tree-print-its-nodes-using-preorder",
    "title": "Tree, Print Its Nodes Using Preorder",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 240,
    "statement": "### Problem Description\n\nGiven a tree, print its nodes using preorder traversal.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Tree, Print Its Nodes Using Preorder\n * Description: Given a tree, print its nodes using preorder traversal.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Tree, Print Its Nodes Using Preorder\n * Description: Given a tree, print its nodes using preorder traversal.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Tree, Print Its Nodes Using Preorder\nDescription: Given a tree, print its nodes using preorder traversal.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Tree, Print Its Nodes Using Preorder\nDescription: Given a tree, print its nodes using preorder traversal.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tree-print-its-nodes-using-preorder-tc-1",
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
    "id": "dsa-p5-003",
    "slug": "implement-inorder-and-postorder-traversal-recursively",
    "title": "Implement Inorder and Postorder Traversal Recursively",
    "topic": "Binary trees and traversals",
    "tags": [
      "Recursion"
    ],
    "difficulty": "Warm-up",
    "order": 241,
    "statement": "### Problem Description\n\nImplement inorder and postorder traversal recursively.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Inorder and Postorder Traversal Recursively\n * Description: Implement inorder and postorder traversal recursively.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Inorder and Postorder Traversal Recursively\n * Description: Implement inorder and postorder traversal recursively.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Inorder and Postorder Traversal Recursively\nDescription: Implement inorder and postorder traversal recursively.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Inorder and Postorder Traversal Recursively\nDescription: Implement inorder and postorder traversal recursively.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-inorder-and-postorder-traversal-recursively-tc-1",
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
    "id": "dsa-p5-004",
    "slug": "tree-represented-as-an-array-reconstruct",
    "title": "Tree Represented As an Array, Reconstruct",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 242,
    "statement": "### Problem Description\n\nGiven a tree represented as an array, reconstruct its structure and print its nodes.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Tree Represented As an Array, Reconstruct\n * Description: Given a tree represented as an array, reconstruct its structure and print its nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Tree Represented As an Array, Reconstruct\n * Description: Given a tree represented as an array, reconstruct its structure and print its nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Tree Represented As an Array, Reconstruct\nDescription: Given a tree represented as an array, reconstruct its structure and print its nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Tree Represented As an Array, Reconstruct\nDescription: Given a tree represented as an array, reconstruct its structure and print its nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "tree-represented-as-an-array-reconstruct-tc-1",
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
    "id": "dsa-p5-005",
    "slug": "implement-level-order-traversal-using-a-queue",
    "title": "Implement Level-order Traversal Using a Queue",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 243,
    "statement": "### Problem Description\n\nImplement level-order traversal using a queue.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Level-order Traversal Using a Queue\n * Description: Implement level-order traversal using a queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Level-order Traversal Using a Queue\n * Description: Implement level-order traversal using a queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Level-order Traversal Using a Queue\nDescription: Implement level-order traversal using a queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Level-order Traversal Using a Queue\nDescription: Implement level-order traversal using a queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-level-order-traversal-using-a-queue-tc-1",
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
    "id": "dsa-p5-006",
    "slug": "binary-tree-print-each-level",
    "title": "Binary Tree, Print Each Level",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 244,
    "statement": "### Problem Description\n\nGiven a binary tree, print each level on a separate line.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Tree, Print Each Level\n * Description: Given a binary tree, print each level on a separate line.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Tree, Print Each Level\n * Description: Given a binary tree, print each level on a separate line.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Binary Tree, Print Each Level\nDescription: Given a binary tree, print each level on a separate line.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Binary Tree, Print Each Level\nDescription: Given a binary tree, print each level on a separate line.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "binary-tree-print-each-level-tc-1",
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
    "id": "dsa-p5-007",
    "slug": "count-number-of-nodes-and-leaf-nodes",
    "title": "Count Number of Nodes and Leaf Nodes",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 245,
    "statement": "### Problem Description\n\nCount the number of nodes and leaf nodes in a binary tree.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Nodes and Leaf Nodes\n * Description: Count the number of nodes and leaf nodes in a binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Count Number of Nodes and Leaf Nodes\n * Description: Count the number of nodes and leaf nodes in a binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Count Number of Nodes and Leaf Nodes\nDescription: Count the number of nodes and leaf nodes in a binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Count Number of Nodes and Leaf Nodes\nDescription: Count the number of nodes and leaf nodes in a binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "count-number-of-nodes-and-leaf-nodes-tc-1",
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
    "id": "dsa-p5-008",
    "slug": "height-of-a-binary-tree-recursively",
    "title": "Height of a Binary Tree Recursively",
    "topic": "Binary trees and traversals",
    "tags": [
      "Recursion"
    ],
    "difficulty": "Easy",
    "order": 246,
    "statement": "### Problem Description\n\nCalculate the height of a binary tree recursively.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Height of a Binary Tree Recursively\n * Description: Calculate the height of a binary tree recursively.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Height of a Binary Tree Recursively\n * Description: Calculate the height of a binary tree recursively.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Height of a Binary Tree Recursively\nDescription: Calculate the height of a binary tree recursively.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Height of a Binary Tree Recursively\nDescription: Calculate the height of a binary tree recursively.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "height-of-a-binary-tree-recursively-tc-1",
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
    "id": "dsa-p5-009",
    "slug": "maximum-depth-and-minimum-depth",
    "title": "Maximum Depth and Minimum Depth",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 247,
    "statement": "### Problem Description\n\nFind the maximum depth and minimum depth of a binary tree.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Maximum Depth and Minimum Depth\n * Description: Find the maximum depth and minimum depth of a binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Maximum Depth and Minimum Depth\n * Description: Find the maximum depth and minimum depth of a binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Maximum Depth and Minimum Depth\nDescription: Find the maximum depth and minimum depth of a binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Maximum Depth and Minimum Depth\nDescription: Find the maximum depth and minimum depth of a binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "maximum-depth-and-minimum-depth-tc-1",
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
    "id": "dsa-p5-010",
    "slug": "two-binary-trees-are-structurally-identical",
    "title": "Two Binary Trees Are Structurally Identical",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 248,
    "statement": "### Problem Description\n\nDetermine whether two binary trees are structurally identical and contain the same values.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Binary Trees Are Structurally Identical\n * Description: Determine whether two binary trees are structurally identical and contain the same values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Two Binary Trees Are Structurally Identical\n * Description: Determine whether two binary trees are structurally identical and contain the same values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Two Binary Trees Are Structurally Identical\nDescription: Determine whether two binary trees are structurally identical and contain the same values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Two Binary Trees Are Structurally Identical\nDescription: Determine whether two binary trees are structurally identical and contain the same values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "two-binary-trees-are-structurally-identical-tc-1",
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
    "id": "dsa-p5-011",
    "slug": "check-whether-a-binary-tree-is",
    "title": "Check Whether a Binary Tree Is",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 249,
    "statement": "### Problem Description\n\nCheck whether a binary tree is symmetric around its root.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Check Whether a Binary Tree Is\n * Description: Check whether a binary tree is symmetric around its root.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Check Whether a Binary Tree Is\n * Description: Check whether a binary tree is symmetric around its root.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Check Whether a Binary Tree Is\nDescription: Check whether a binary tree is symmetric around its root.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Check Whether a Binary Tree Is\nDescription: Check whether a binary tree is symmetric around its root.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "check-whether-a-binary-tree-is-tc-1",
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
    "id": "dsa-p5-012",
    "slug": "diameter-of-a-binary-tree-measured",
    "title": "Diameter of a Binary Tree, Measured",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 250,
    "statement": "### Problem Description\n\nFind the diameter of a binary tree, measured in edges.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Diameter of a Binary Tree, Measured\n * Description: Find the diameter of a binary tree, measured in edges.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Diameter of a Binary Tree, Measured\n * Description: Find the diameter of a binary tree, measured in edges.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Diameter of a Binary Tree, Measured\nDescription: Find the diameter of a binary tree, measured in edges.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Diameter of a Binary Tree, Measured\nDescription: Find the diameter of a binary tree, measured in edges.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "diameter-of-a-binary-tree-measured-tc-1",
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
    "id": "dsa-p5-013",
    "slug": "check-whether-a-binary-tree-is-2",
    "title": "Check Whether a Binary Tree Is",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 251,
    "statement": "### Problem Description\n\nCheck whether a binary tree is height-balanced.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Check Whether a Binary Tree Is\n * Description: Check whether a binary tree is height-balanced.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Check Whether a Binary Tree Is\n * Description: Check whether a binary tree is height-balanced.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Check Whether a Binary Tree Is\nDescription: Check whether a binary tree is height-balanced.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Check Whether a Binary Tree Is\nDescription: Check whether a binary tree is height-balanced.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "check-whether-a-binary-tree-is-2-tc-1",
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
    "id": "dsa-p5-014",
    "slug": "maximum-path-sum-between-any-two",
    "title": "Maximum Path Sum Between Any Two",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 252,
    "statement": "### Problem Description\n\nFind the maximum path sum between any two nodes.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Maximum Path Sum Between Any Two\n * Description: Find the maximum path sum between any two nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Maximum Path Sum Between Any Two\n * Description: Find the maximum path sum between any two nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Maximum Path Sum Between Any Two\nDescription: Find the maximum path sum between any two nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Maximum Path Sum Between Any Two\nDescription: Find the maximum path sum between any two nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "maximum-path-sum-between-any-two-tc-1",
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
    "id": "dsa-p5-015",
    "slug": "lowest-common-ancestor-of-two-nodes",
    "title": "Lowest Common Ancestor of Two Nodes",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 253,
    "statement": "### Problem Description\n\nFind the lowest common ancestor of two nodes in a binary tree.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Lowest Common Ancestor of Two Nodes\n * Description: Find the lowest common ancestor of two nodes in a binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Lowest Common Ancestor of Two Nodes\n * Description: Find the lowest common ancestor of two nodes in a binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Lowest Common Ancestor of Two Nodes\nDescription: Find the lowest common ancestor of two nodes in a binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Lowest Common Ancestor of Two Nodes\nDescription: Find the lowest common ancestor of two nodes in a binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "lowest-common-ancestor-of-two-nodes-tc-1",
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
    "id": "dsa-p5-016",
    "slug": "lowest-common-ancestor-of-two-nodes-2",
    "title": "Lowest Common Ancestor of Two Nodes",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 254,
    "statement": "### Problem Description\n\nFind the lowest common ancestor of two nodes in a BST.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Lowest Common Ancestor of Two Nodes\n * Description: Find the lowest common ancestor of two nodes in a BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Lowest Common Ancestor of Two Nodes\n * Description: Find the lowest common ancestor of two nodes in a BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Lowest Common Ancestor of Two Nodes\nDescription: Find the lowest common ancestor of two nodes in a BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Lowest Common Ancestor of Two Nodes\nDescription: Find the lowest common ancestor of two nodes in a BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "lowest-common-ancestor-of-two-nodes-2-tc-1",
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
    "id": "dsa-p5-017",
    "slug": "the-left-view-and-right-view",
    "title": "The Left View and Right View",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 255,
    "statement": "### Problem Description\n\nPrint the left view and right view of a binary tree.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Left View and Right View\n * Description: Print the left view and right view of a binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Left View and Right View\n * Description: Print the left view and right view of a binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: The Left View and Right View\nDescription: Print the left view and right view of a binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: The Left View and Right View\nDescription: Print the left view and right view of a binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "the-left-view-and-right-view-tc-1",
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
    "id": "dsa-p5-018",
    "slug": "the-top-view-and-bottom-view",
    "title": "The Top View and Bottom View",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 256,
    "statement": "### Problem Description\n\nPrint the top view and bottom view of a binary tree.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Top View and Bottom View\n * Description: Print the top view and bottom view of a binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: The Top View and Bottom View\n * Description: Print the top view and bottom view of a binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: The Top View and Bottom View\nDescription: Print the top view and bottom view of a binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: The Top View and Bottom View\nDescription: Print the top view and bottom view of a binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "the-top-view-and-bottom-view-tc-1",
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
    "id": "dsa-p5-019",
    "slug": "perform-preorder-inorder-and-postorder-traversals",
    "title": "Perform Preorder, Inorder, and Postorder Traversals",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 257,
    "statement": "### Problem Description\n\nPerform preorder, inorder, and postorder traversals iteratively using explicit stacks.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Perform Preorder, Inorder, and Postorder Traversals\n * Description: Perform preorder, inorder, and postorder traversals iteratively using explicit stacks.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Perform Preorder, Inorder, and Postorder Traversals\n * Description: Perform preorder, inorder, and postorder traversals iteratively using explicit stacks.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Perform Preorder, Inorder, and Postorder Traversals\nDescription: Perform preorder, inorder, and postorder traversals iteratively using explicit stacks.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Perform Preorder, Inorder, and Postorder Traversals\nDescription: Perform preorder, inorder, and postorder traversals iteratively using explicit stacks.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "perform-preorder-inorder-and-postorder-traversals-tc-1",
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
    "id": "dsa-p5-020",
    "slug": "preorder-and-inorder-traversal-sequences-reconstruct",
    "title": "Preorder and Inorder Traversal Sequences, Reconstruct",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 258,
    "statement": "### Problem Description\n\nGiven preorder and inorder traversal sequences, reconstruct the original binary tree.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Preorder and Inorder Traversal Sequences, Reconstruct\n * Description: Given preorder and inorder traversal sequences, reconstruct the original binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Preorder and Inorder Traversal Sequences, Reconstruct\n * Description: Given preorder and inorder traversal sequences, reconstruct the original binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Preorder and Inorder Traversal Sequences, Reconstruct\nDescription: Given preorder and inorder traversal sequences, reconstruct the original binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Preorder and Inorder Traversal Sequences, Reconstruct\nDescription: Given preorder and inorder traversal sequences, reconstruct the original binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "preorder-and-inorder-traversal-sequences-reconstruct-tc-1",
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
    "id": "dsa-p5-021",
    "slug": "inorder-and-postorder-traversal-sequences-reconstruct",
    "title": "Inorder and Postorder Traversal Sequences, Reconstruct",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 259,
    "statement": "### Problem Description\n\nGiven inorder and postorder traversal sequences, reconstruct the original binary tree.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Inorder and Postorder Traversal Sequences, Reconstruct\n * Description: Given inorder and postorder traversal sequences, reconstruct the original binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Inorder and Postorder Traversal Sequences, Reconstruct\n * Description: Given inorder and postorder traversal sequences, reconstruct the original binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Inorder and Postorder Traversal Sequences, Reconstruct\nDescription: Given inorder and postorder traversal sequences, reconstruct the original binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Inorder and Postorder Traversal Sequences, Reconstruct\nDescription: Given inorder and postorder traversal sequences, reconstruct the original binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "inorder-and-postorder-traversal-sequences-reconstruct-tc-1",
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
    "id": "dsa-p5-022",
    "slug": "serialize-a-binary-tree-into",
    "title": "Serialize a Binary Tree Into",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 260,
    "statement": "### Problem Description\n\nSerialize a binary tree into a string and reconstruct it from that string.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Serialize a Binary Tree Into\n * Description: Serialize a binary tree into a string and reconstruct it from that string.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Serialize a Binary Tree Into\n * Description: Serialize a binary tree into a string and reconstruct it from that string.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Serialize a Binary Tree Into\nDescription: Serialize a binary tree into a string and reconstruct it from that string.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Serialize a Binary Tree Into\nDescription: Serialize a binary tree into a string and reconstruct it from that string.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "serialize-a-binary-tree-into-tc-1",
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
    "id": "dsa-p5-023",
    "slug": "flatten-a-binary-tree-into",
    "title": "Flatten a Binary Tree Into",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 261,
    "statement": "### Problem Description\n\nFlatten a binary tree into a linked list in preorder without allocating new nodes.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Flatten a Binary Tree Into\n * Description: Flatten a binary tree into a linked list in preorder without allocating new nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Flatten a Binary Tree Into\n * Description: Flatten a binary tree into a linked list in preorder without allocating new nodes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Flatten a Binary Tree Into\nDescription: Flatten a binary tree into a linked list in preorder without allocating new nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Flatten a Binary Tree Into\nDescription: Flatten a binary tree into a linked list in preorder without allocating new nodes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "flatten-a-binary-tree-into-tc-1",
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
    "id": "dsa-p5-024",
    "slug": "binary-tree-is-a-subtree",
    "title": "Binary Tree Is a Subtree",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 262,
    "statement": "### Problem Description\n\nDetermine whether a binary tree is a subtree of another binary tree.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Tree Is a Subtree\n * Description: Determine whether a binary tree is a subtree of another binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Tree Is a Subtree\n * Description: Determine whether a binary tree is a subtree of another binary tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Binary Tree Is a Subtree\nDescription: Determine whether a binary tree is a subtree of another binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Binary Tree Is a Subtree\nDescription: Determine whether a binary tree is a subtree of another binary tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "binary-tree-is-a-subtree-tc-1",
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
    "id": "dsa-p5-025",
    "slug": "binary-tree-find-all-nodes-at",
    "title": "Binary Tree, Find All Nodes At",
    "topic": "Binary trees and traversals",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 263,
    "statement": "### Problem Description\n\nGiven a binary tree, find all nodes at distance K from a target node.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary trees and traversals. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary trees and traversals eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Tree, Find All Nodes At\n * Description: Given a binary tree, find all nodes at distance K from a target node.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Binary Tree, Find All Nodes At\n * Description: Given a binary tree, find all nodes at distance K from a target node.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Binary Tree, Find All Nodes At\nDescription: Given a binary tree, find all nodes at distance K from a target node.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Binary Tree, Find All Nodes At\nDescription: Given a binary tree, find all nodes at distance K from a target node.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "binary-tree-find-all-nodes-at-tc-1",
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
    "id": "dsa-p5-001",
    "slug": "implement-bst-insertion-and-search",
    "title": "Implement BST Insertion and Search",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 264,
    "statement": "### Problem Description\n\nImplement BST insertion and search.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement BST Insertion and Search\n * Description: Implement BST insertion and search.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement BST Insertion and Search\n * Description: Implement BST insertion and search.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement BST Insertion and Search\nDescription: Implement BST insertion and search.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement BST Insertion and Search\nDescription: Implement BST insertion and search.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-bst-insertion-and-search-tc-1",
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
    "id": "dsa-p5-002",
    "slug": "minimum-and-maximum-elements-in",
    "title": "Minimum and Maximum Elements in",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 265,
    "statement": "### Problem Description\n\nFind the minimum and maximum elements in a BST.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Minimum and Maximum Elements in\n * Description: Find the minimum and maximum elements in a BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Minimum and Maximum Elements in\n * Description: Find the minimum and maximum elements in a BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Minimum and Maximum Elements in\nDescription: Find the minimum and maximum elements in a BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Minimum and Maximum Elements in\nDescription: Find the minimum and maximum elements in a BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "minimum-and-maximum-elements-in-tc-1",
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
    "id": "dsa-p5-003",
    "slug": "implement-inorder-traversal-and-demonstrate-why-it",
    "title": "Implement Inorder Traversal and Demonstrate Why It",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 266,
    "statement": "### Problem Description\n\nImplement inorder traversal and demonstrate why it returns sorted values.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Inorder Traversal and Demonstrate Why It\n * Description: Implement inorder traversal and demonstrate why it returns sorted values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Inorder Traversal and Demonstrate Why It\n * Description: Implement inorder traversal and demonstrate why it returns sorted values.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Inorder Traversal and Demonstrate Why It\nDescription: Implement inorder traversal and demonstrate why it returns sorted values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Inorder Traversal and Demonstrate Why It\nDescription: Implement inorder traversal and demonstrate why it returns sorted values.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-inorder-traversal-and-demonstrate-why-it-tc-1",
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
    "id": "dsa-p5-004",
    "slug": "predecessor-and-successor-of-a-given",
    "title": "Predecessor and Successor of a Given",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 267,
    "statement": "### Problem Description\n\nFind the predecessor and successor of a given value in a BST.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Predecessor and Successor of a Given\n * Description: Find the predecessor and successor of a given value in a BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Predecessor and Successor of a Given\n * Description: Find the predecessor and successor of a given value in a BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Predecessor and Successor of a Given\nDescription: Find the predecessor and successor of a given value in a BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Predecessor and Successor of a Given\nDescription: Find the predecessor and successor of a given value in a BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "predecessor-and-successor-of-a-given-tc-1",
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
    "id": "dsa-p5-005",
    "slug": "implement-deletion-of-a-leaf-node",
    "title": "Implement Deletion of a Leaf Node",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 268,
    "statement": "### Problem Description\n\nImplement deletion of a leaf node, a node with one child, and a node with two children.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Deletion of a Leaf Node\n * Description: Implement deletion of a leaf node, a node with one child, and a node with two children.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Deletion of a Leaf Node\n * Description: Implement deletion of a leaf node, a node with one child, and a node with two children.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Deletion of a Leaf Node\nDescription: Implement deletion of a leaf node, a node with one child, and a node with two children.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Deletion of a Leaf Node\nDescription: Implement deletion of a leaf node, a node with one child, and a node with two children.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-deletion-of-a-leaf-node-tc-1",
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
    "id": "dsa-p5-006",
    "slug": "validate-whether-a-binary-tree-is",
    "title": "Validate Whether a Binary Tree Is",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 269,
    "statement": "### Problem Description\n\nValidate whether a binary tree is a BST using range constraints.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Validate Whether a Binary Tree Is\n * Description: Validate whether a binary tree is a BST using range constraints.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Validate Whether a Binary Tree Is\n * Description: Validate whether a binary tree is a BST using range constraints.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Validate Whether a Binary Tree Is\nDescription: Validate whether a binary tree is a BST using range constraints.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Validate Whether a Binary Tree Is\nDescription: Validate whether a binary tree is a BST using range constraints.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "validate-whether-a-binary-tree-is-tc-1",
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
    "id": "dsa-p5-007",
    "slug": "kth-smallest-element-in-a-bst-without",
    "title": "Kth-smallest Element in a BST Without",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 270,
    "statement": "### Problem Description\n\nFind the Kth-smallest element in a BST without converting the tree into an array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Kth-smallest Element in a BST Without\n * Description: Find the Kth-smallest element in a BST without converting the tree into an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Kth-smallest Element in a BST Without\n * Description: Find the Kth-smallest element in a BST without converting the tree into an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Kth-smallest Element in a BST Without\nDescription: Find the Kth-smallest element in a BST without converting the tree into an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Kth-smallest Element in a BST Without\nDescription: Find the Kth-smallest element in a BST without converting the tree into an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "kth-smallest-element-in-a-bst-without-tc-1",
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
    "id": "dsa-p5-008",
    "slug": "kth-largest-element-in-a-bst",
    "title": "Kth-largest Element in a BST",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 271,
    "statement": "### Problem Description\n\nFind the Kth-largest element in a BST.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Kth-largest Element in a BST\n * Description: Find the Kth-largest element in a BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Kth-largest Element in a BST\n * Description: Find the Kth-largest element in a BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Kth-largest Element in a BST\nDescription: Find the Kth-largest element in a BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Kth-largest Element in a BST\nDescription: Find the Kth-largest element in a BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "kth-largest-element-in-a-bst-tc-1",
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
    "id": "dsa-p5-009",
    "slug": "bst-and-a-target-value-find",
    "title": "BST and a Target Value, Find",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 272,
    "statement": "### Problem Description\n\nGiven a BST and a target value, find the closest value to the target.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: BST and a Target Value, Find\n * Description: Given a BST and a target value, find the closest value to the target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: BST and a Target Value, Find\n * Description: Given a BST and a target value, find the closest value to the target.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: BST and a Target Value, Find\nDescription: Given a BST and a target value, find the closest value to the target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: BST and a Target Value, Find\nDescription: Given a BST and a target value, find the closest value to the target.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "bst-and-a-target-value-find-tc-1",
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
    "id": "dsa-p5-010",
    "slug": "values-in-a-bst-that-lie",
    "title": "Values in a BST That Lie",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 273,
    "statement": "### Problem Description\n\nFind all values in a BST that lie within a given range.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Values in a BST That Lie\n * Description: Find all values in a BST that lie within a given range.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Values in a BST That Lie\n * Description: Find all values in a BST that lie within a given range.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Values in a BST That Lie\nDescription: Find all values in a BST that lie within a given range.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Values in a BST That Lie\nDescription: Find all values in a BST that lie within a given range.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "values-in-a-bst-that-lie-tc-1",
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
    "id": "dsa-p5-011",
    "slug": "construct-a-balanced-bst-from",
    "title": "Construct a Balanced BST from",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 274,
    "statement": "### Problem Description\n\nConstruct a balanced BST from a sorted array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Construct a Balanced BST from\n * Description: Construct a balanced BST from a sorted array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Construct a Balanced BST from\n * Description: Construct a balanced BST from a sorted array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Construct a Balanced BST from\nDescription: Construct a balanced BST from a sorted array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Construct a Balanced BST from\nDescription: Construct a balanced BST from a sorted array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "construct-a-balanced-bst-from-tc-1",
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
    "id": "dsa-p5-012",
    "slug": "preorder-traversal-of-a-bst-reconstruct",
    "title": "Preorder Traversal of a BST, Reconstruct",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 275,
    "statement": "### Problem Description\n\nGiven a preorder traversal of a BST, reconstruct the BST.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Preorder Traversal of a BST, Reconstruct\n * Description: Given a preorder traversal of a BST, reconstruct the BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Preorder Traversal of a BST, Reconstruct\n * Description: Given a preorder traversal of a BST, reconstruct the BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Preorder Traversal of a BST, Reconstruct\nDescription: Given a preorder traversal of a BST, reconstruct the BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Preorder Traversal of a BST, Reconstruct\nDescription: Given a preorder traversal of a BST, reconstruct the BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "preorder-traversal-of-a-bst-reconstruct-tc-1",
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
    "id": "dsa-p5-013",
    "slug": "pair-of-nodes-in-a-bst",
    "title": "Pair of Nodes in a BST",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 276,
    "statement": "### Problem Description\n\nFind the pair of nodes in a BST whose values sum to K.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Pair of Nodes in a BST\n * Description: Find the pair of nodes in a BST whose values sum to K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Pair of Nodes in a BST\n * Description: Find the pair of nodes in a BST whose values sum to K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Pair of Nodes in a BST\nDescription: Find the pair of nodes in a BST whose values sum to K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Pair of Nodes in a BST\nDescription: Find the pair of nodes in a BST whose values sum to K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "pair-of-nodes-in-a-bst-tc-1",
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
    "id": "dsa-p5-014",
    "slug": "convert-a-bst-into-a-sorted",
    "title": "Convert a BST Into a Sorted",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 277,
    "statement": "### Problem Description\n\nConvert a BST into a sorted doubly linked list in place.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Convert a BST Into a Sorted\n * Description: Convert a BST into a sorted doubly linked list in place.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Convert a BST Into a Sorted\n * Description: Convert a BST into a sorted doubly linked list in place.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Convert a BST Into a Sorted\nDescription: Convert a BST into a sorted doubly linked list in place.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Convert a BST Into a Sorted\nDescription: Convert a BST into a sorted doubly linked list in place.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "convert-a-bst-into-a-sorted-tc-1",
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
    "id": "dsa-p5-015",
    "slug": "design-iterator-for-a-bst-that-returns",
    "title": "Design Iterator for a BST That Returns",
    "topic": "Binary search trees",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 278,
    "statement": "### Problem Description\n\nDesign an iterator for a BST that returns the next smallest element in amortized O(1) time.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Binary search trees. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Binary search trees eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Iterator for a BST That Returns\n * Description: Design an iterator for a BST that returns the next smallest element in amortized O(1) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Iterator for a BST That Returns\n * Description: Design an iterator for a BST that returns the next smallest element in amortized O(1) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Iterator for a BST That Returns\nDescription: Design an iterator for a BST that returns the next smallest element in amortized O(1) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Iterator for a BST That Returns\nDescription: Design an iterator for a BST that returns the next smallest element in amortized O(1) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "design-iterator-for-a-bst-that-returns-tc-1",
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
    "id": "dsa-p5-001",
    "slug": "balance-factor-of-each-node",
    "title": "Balance Factor of Each Node",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 279,
    "statement": "### Problem Description\n\nCalculate the balance factor of each node in a given AVL tree.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Balance Factor of Each Node\n * Description: Calculate the balance factor of each node in a given AVL tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Balance Factor of Each Node\n * Description: Calculate the balance factor of each node in a given AVL tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Balance Factor of Each Node\nDescription: Calculate the balance factor of each node in a given AVL tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Balance Factor of Each Node\nDescription: Calculate the balance factor of each node in a given AVL tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "balance-factor-of-each-node-tc-1",
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
    "id": "dsa-p5-002",
    "slug": "insertion-sequence-identify-where-an-avl",
    "title": "Insertion Sequence, Identify Where an AVL",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 280,
    "statement": "### Problem Description\n\nGiven an insertion sequence, identify where an AVL rotation is required.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Insertion Sequence, Identify Where an AVL\n * Description: Given an insertion sequence, identify where an AVL rotation is required.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Insertion Sequence, Identify Where an AVL\n * Description: Given an insertion sequence, identify where an AVL rotation is required.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Insertion Sequence, Identify Where an AVL\nDescription: Given an insertion sequence, identify where an AVL rotation is required.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Insertion Sequence, Identify Where an AVL\nDescription: Given an insertion sequence, identify where an AVL rotation is required.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "insertion-sequence-identify-where-an-avl-tc-1",
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
    "id": "dsa-p5-003",
    "slug": "draw-and-implement-the-ll",
    "title": "Draw and Implement the LL",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Warm-up",
    "order": 281,
    "statement": "### Problem Description\n\nDraw and implement the LL and RR rotations in an AVL tree.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Draw and Implement the LL\n * Description: Draw and implement the LL and RR rotations in an AVL tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Draw and Implement the LL\n * Description: Draw and implement the LL and RR rotations in an AVL tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Draw and Implement the LL\nDescription: Draw and implement the LL and RR rotations in an AVL tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Draw and Implement the LL\nDescription: Draw and implement the LL and RR rotations in an AVL tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "draw-and-implement-the-ll-tc-1",
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
    "id": "dsa-p5-004",
    "slug": "draw-and-implement-the-lr",
    "title": "Draw and Implement the LR",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 282,
    "statement": "### Problem Description\n\nDraw and implement the LR and RL rotations in an AVL tree.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Draw and Implement the LR\n * Description: Draw and implement the LR and RL rotations in an AVL tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Draw and Implement the LR\n * Description: Draw and implement the LR and RL rotations in an AVL tree.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Draw and Implement the LR\nDescription: Draw and implement the LR and RL rotations in an AVL tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Draw and Implement the LR\nDescription: Draw and implement the LR and RL rotations in an AVL tree.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "draw-and-implement-the-lr-tc-1",
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
    "id": "dsa-p5-005",
    "slug": "sequence-of-values-into-an-avl",
    "title": "Sequence of Values Into an AVL",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 283,
    "statement": "### Problem Description\n\nInsert a sequence of values into an AVL tree and maintain its balance after every insertion.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Values Into an AVL\n * Description: Insert a sequence of values into an AVL tree and maintain its balance after every insertion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Values Into an AVL\n * Description: Insert a sequence of values into an AVL tree and maintain its balance after every insertion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sequence of Values Into an AVL\nDescription: Insert a sequence of values into an AVL tree and maintain its balance after every insertion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sequence of Values Into an AVL\nDescription: Insert a sequence of values into an AVL tree and maintain its balance after every insertion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "sequence-of-values-into-an-avl-tc-1",
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
    "id": "dsa-p5-006",
    "slug": "explain-how-avl-balancing-changes",
    "title": "Explain How AVL Balancing Changes",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Easy",
    "order": 284,
    "statement": "### Problem Description\n\nExplain how AVL balancing changes the worst-case height compared with an ordinary BST.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain How AVL Balancing Changes\n * Description: Explain how AVL balancing changes the worst-case height compared with an ordinary BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain How AVL Balancing Changes\n * Description: Explain how AVL balancing changes the worst-case height compared with an ordinary BST.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Explain How AVL Balancing Changes\nDescription: Explain how AVL balancing changes the worst-case height compared with an ordinary BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Explain How AVL Balancing Changes\nDescription: Explain how AVL balancing changes the worst-case height compared with an ordinary BST.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "explain-how-avl-balancing-changes-tc-1",
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
    "id": "dsa-p5-007",
    "slug": "b-tree-of-a-specified-minimum-degree",
    "title": "B-tree of a Specified Minimum Degree",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 285,
    "statement": "### Problem Description\n\nGiven a B-tree of a specified minimum degree, identify its keys, children, and valid ordering constraints.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: B-tree of a Specified Minimum Degree\n * Description: Given a B-tree of a specified minimum degree, identify its keys, children, and valid ordering constraints.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: B-tree of a Specified Minimum Degree\n * Description: Given a B-tree of a specified minimum degree, identify its keys, children, and valid ordering constraints.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: B-tree of a Specified Minimum Degree\nDescription: Given a B-tree of a specified minimum degree, identify its keys, children, and valid ordering constraints.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: B-tree of a Specified Minimum Degree\nDescription: Given a B-tree of a specified minimum degree, identify its keys, children, and valid ordering constraints.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "b-tree-of-a-specified-minimum-degree-tc-1",
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
    "id": "dsa-p5-008",
    "slug": "sequence-of-keys-into-a-b-tree",
    "title": "Sequence of Keys Into a B-tree",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 286,
    "statement": "### Problem Description\n\nInsert a sequence of keys into a B-tree and show when node splitting occurs.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Keys Into a B-tree\n * Description: Insert a sequence of keys into a B-tree and show when node splitting occurs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Sequence of Keys Into a B-tree\n * Description: Insert a sequence of keys into a B-tree and show when node splitting occurs.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Sequence of Keys Into a B-tree\nDescription: Insert a sequence of keys into a B-tree and show when node splitting occurs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Sequence of Keys Into a B-tree\nDescription: Insert a sequence of keys into a B-tree and show when node splitting occurs.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "sequence-of-keys-into-a-b-tree-tc-1",
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
    "id": "dsa-p5-009",
    "slug": "key-from-a-b-tree-and-handle",
    "title": "Key from a B-tree and Handle",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 287,
    "statement": "### Problem Description\n\nDelete a key from a B-tree and handle borrowing and merging when a node becomes underfull.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Key from a B-tree and Handle\n * Description: Delete a key from a B-tree and handle borrowing and merging when a node becomes underfull.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Key from a B-tree and Handle\n * Description: Delete a key from a B-tree and handle borrowing and merging when a node becomes underfull.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Key from a B-tree and Handle\nDescription: Delete a key from a B-tree and handle borrowing and merging when a node becomes underfull.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Key from a B-tree and Handle\nDescription: Delete a key from a B-tree and handle borrowing and merging when a node becomes underfull.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "key-from-a-b-tree-and-handle-tc-1",
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
    "id": "dsa-p5-010",
    "slug": "explain-why-b-trees-and-b-trees",
    "title": "Explain Why B-trees and B+ Trees",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 288,
    "statement": "### Problem Description\n\nExplain why B-trees and B+ trees are useful for disk-based database indexes.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why B-trees and B+ Trees\n * Description: Explain why B-trees and B+ trees are useful for disk-based database indexes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Explain Why B-trees and B+ Trees\n * Description: Explain why B-trees and B+ trees are useful for disk-based database indexes.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Explain Why B-trees and B+ Trees\nDescription: Explain why B-trees and B+ trees are useful for disk-based database indexes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Explain Why B-trees and B+ Trees\nDescription: Explain why B-trees and B+ trees are useful for disk-based database indexes.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "explain-why-b-trees-and-b-trees-tc-1",
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
    "id": "dsa-p5-011",
    "slug": "database-index-with-a-particular-branching",
    "title": "Database Index with a Particular Branching",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Medium",
    "order": 289,
    "statement": "### Problem Description\n\nGiven a database index with a particular branching factor and number of keys, estimate its height and the number of page accesses required for a lookup.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Database Index with a Particular Branching\n * Description: Given a database index with a particular branching factor and number of keys, estimate its height and the number of page accesses required for a lookup.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Database Index with a Particular Branching\n * Description: Given a database index with a particular branching factor and number of keys, estimate its height and the number of page accesses required for a lookup.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Database Index with a Particular Branching\nDescription: Given a database index with a particular branching factor and number of keys, estimate its height and the number of page accesses required for a lookup.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Database Index with a Particular Branching\nDescription: Given a database index with a particular branching factor and number of keys, estimate its height and the number of page accesses required for a lookup.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "database-index-with-a-particular-branching-tc-1",
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
    "id": "dsa-p5-012",
    "slug": "compare-the-structural-tradeoffs-of",
    "title": "Compare the Structural Tradeoffs of",
    "topic": "AVL trees, B-trees, and indexing concepts",
    "tags": [
      "Algorithms"
    ],
    "difficulty": "Hard",
    "order": 290,
    "statement": "### Problem Description\n\nCompare the structural tradeoffs of a BST, AVL tree, B-tree, and B+ tree for in-memory and disk-based data.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in AVL trees, B-trees, and indexing concepts. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within AVL trees, B-trees, and indexing concepts eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare the Structural Tradeoffs of\n * Description: Compare the structural tradeoffs of a BST, AVL tree, B-tree, and B+ tree for in-memory and disk-based data.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare the Structural Tradeoffs of\n * Description: Compare the structural tradeoffs of a BST, AVL tree, B-tree, and B+ tree for in-memory and disk-based data.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare the Structural Tradeoffs of\nDescription: Compare the structural tradeoffs of a BST, AVL tree, B-tree, and B+ tree for in-memory and disk-based data.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare the Structural Tradeoffs of\nDescription: Compare the structural tradeoffs of a BST, AVL tree, B-tree, and B+ tree for in-memory and disk-based data.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "compare-the-structural-tradeoffs-of-tc-1",
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
    "id": "dsa-p5-001",
    "slug": "implement-max-heap-using-an-array",
    "title": "Implement Max-heap Using an Array",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Warm-up",
    "order": 291,
    "statement": "### Problem Description\n\nImplement a max-heap using an array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Max-heap Using an Array\n * Description: Implement a max-heap using an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Max-heap Using an Array\n * Description: Implement a max-heap using an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Max-heap Using an Array\nDescription: Implement a max-heap using an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Max-heap Using an Array\nDescription: Implement a max-heap using an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-max-heap-using-an-array-tc-1",
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
    "id": "dsa-p5-002",
    "slug": "implement-insertion-into-a-max-heap-using-sift-up",
    "title": "Implement Insertion Into a Max-heap Using Sift-up",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Warm-up",
    "order": 292,
    "statement": "### Problem Description\n\nImplement insertion into a max-heap using sift-up.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Insertion Into a Max-heap Using Sift-up\n * Description: Implement insertion into a max-heap using sift-up.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Insertion Into a Max-heap Using Sift-up\n * Description: Implement insertion into a max-heap using sift-up.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Insertion Into a Max-heap Using Sift-up\nDescription: Implement insertion into a max-heap using sift-up.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Insertion Into a Max-heap Using Sift-up\nDescription: Implement insertion into a max-heap using sift-up.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-insertion-into-a-max-heap-using-sift-up-tc-1",
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
    "id": "dsa-p5-003",
    "slug": "implement-extraction-of-the-maximum-using-sift-down",
    "title": "Implement Extraction of the Maximum Using Sift-down",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Warm-up",
    "order": 293,
    "statement": "### Problem Description\n\nImplement extraction of the maximum using sift-down.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Extraction of the Maximum Using Sift-down\n * Description: Implement extraction of the maximum using sift-down.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Extraction of the Maximum Using Sift-down\n * Description: Implement extraction of the maximum using sift-down.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Extraction of the Maximum Using Sift-down\nDescription: Implement extraction of the maximum using sift-down.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Extraction of the Maximum Using Sift-down\nDescription: Implement extraction of the maximum using sift-down.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-extraction-of-the-maximum-using-sift-down-tc-1",
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
    "id": "dsa-p5-004",
    "slug": "convert-a-given-array-into",
    "title": "Convert a Given Array Into",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Warm-up",
    "order": 294,
    "statement": "### Problem Description\n\nConvert a given array into a heap using repeated insertion.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Convert a Given Array Into\n * Description: Convert a given array into a heap using repeated insertion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Convert a Given Array Into\n * Description: Convert a given array into a heap using repeated insertion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Convert a Given Array Into\nDescription: Convert a given array into a heap using repeated insertion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Convert a Given Array Into\nDescription: Convert a given array into a heap using repeated insertion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "convert-a-given-array-into-tc-1",
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
    "id": "dsa-p5-005",
    "slug": "implement-bottom-up-heap-construction-and-explain-why",
    "title": "Implement Bottom-up Heap Construction and Explain Why",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Easy",
    "order": 295,
    "statement": "### Problem Description\n\nImplement bottom-up heap construction and explain why it takes O(N) time.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Bottom-up Heap Construction and Explain Why\n * Description: Implement bottom-up heap construction and explain why it takes O(N) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Bottom-up Heap Construction and Explain Why\n * Description: Implement bottom-up heap construction and explain why it takes O(N) time.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Bottom-up Heap Construction and Explain Why\nDescription: Implement bottom-up heap construction and explain why it takes O(N) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Bottom-up Heap Construction and Explain Why\nDescription: Implement bottom-up heap construction and explain why it takes O(N) time.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-bottom-up-heap-construction-and-explain-why-tc-1",
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
    "id": "dsa-p5-006",
    "slug": "implement-heapsort-and-analyze-its-time",
    "title": "Implement Heapsort and Analyze Its Time",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Easy",
    "order": 296,
    "statement": "### Problem Description\n\nImplement heapsort and analyze its time and auxiliary space complexity.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Heapsort and Analyze Its Time\n * Description: Implement heapsort and analyze its time and auxiliary space complexity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Heapsort and Analyze Its Time\n * Description: Implement heapsort and analyze its time and auxiliary space complexity.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Heapsort and Analyze Its Time\nDescription: Implement heapsort and analyze its time and auxiliary space complexity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Heapsort and Analyze Its Time\nDescription: Implement heapsort and analyze its time and auxiliary space complexity.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-heapsort-and-analyze-its-time-tc-1",
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
    "id": "dsa-p5-007",
    "slug": "implement-min-heap-and-use-it-to-find",
    "title": "Implement Min-heap and Use It to Find",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Easy",
    "order": 297,
    "statement": "### Problem Description\n\nImplement a min-heap and use it to find the smallest K elements in an array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Min-heap and Use It to Find\n * Description: Implement a min-heap and use it to find the smallest K elements in an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Implement Min-heap and Use It to Find\n * Description: Implement a min-heap and use it to find the smallest K elements in an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Implement Min-heap and Use It to Find\nDescription: Implement a min-heap and use it to find the smallest K elements in an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Implement Min-heap and Use It to Find\nDescription: Implement a min-heap and use it to find the smallest K elements in an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "implement-min-heap-and-use-it-to-find-tc-1",
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
    "id": "dsa-p5-008",
    "slug": "kth-largest-element-using-a-min-heap",
    "title": "Kth-largest Element Using a Min-heap",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Easy",
    "order": 298,
    "statement": "### Problem Description\n\nFind the Kth-largest element using a min-heap of size K.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Kth-largest Element Using a Min-heap\n * Description: Find the Kth-largest element using a min-heap of size K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Kth-largest Element Using a Min-heap\n * Description: Find the Kth-largest element using a min-heap of size K.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Kth-largest Element Using a Min-heap\nDescription: Find the Kth-largest element using a min-heap of size K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Kth-largest Element Using a Min-heap\nDescription: Find the Kth-largest element using a min-heap of size K.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "kth-largest-element-using-a-min-heap-tc-1",
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
    "id": "dsa-p5-009",
    "slug": "merge-k-sorted-arrays-using-a-priority",
    "title": "Merge K Sorted Arrays Using a Priority",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Medium",
    "order": 299,
    "statement": "### Problem Description\n\nMerge K sorted arrays using a priority queue.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Merge K Sorted Arrays Using a Priority\n * Description: Merge K sorted arrays using a priority queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Merge K Sorted Arrays Using a Priority\n * Description: Merge K sorted arrays using a priority queue.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Merge K Sorted Arrays Using a Priority\nDescription: Merge K sorted arrays using a priority queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Merge K Sorted Arrays Using a Priority\nDescription: Merge K sorted arrays using a priority queue.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "merge-k-sorted-arrays-using-a-priority-tc-1",
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
    "id": "dsa-p5-010",
    "slug": "k-most-frequent-elements-in",
    "title": "K Most Frequent Elements in",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Medium",
    "order": 300,
    "statement": "### Problem Description\n\nFind the K most frequent elements in an array.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: K Most Frequent Elements in\n * Description: Find the K most frequent elements in an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: K Most Frequent Elements in\n * Description: Find the K most frequent elements in an array.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: K Most Frequent Elements in\nDescription: Find the K most frequent elements in an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: K Most Frequent Elements in\nDescription: Find the K most frequent elements in an array.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "k-most-frequent-elements-in-tc-1",
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
    "id": "dsa-p5-011",
    "slug": "median-of-a-stream-of-numbers",
    "title": "Median of a Stream of Numbers",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Medium",
    "order": 301,
    "statement": "### Problem Description\n\nFind the median of a stream of numbers using two heaps.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Median of a Stream of Numbers\n * Description: Find the median of a stream of numbers using two heaps.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Median of a Stream of Numbers\n * Description: Find the median of a stream of numbers using two heaps.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Median of a Stream of Numbers\nDescription: Find the median of a stream of numbers using two heaps.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Median of a Stream of Numbers\nDescription: Find the median of a stream of numbers using two heaps.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "median-of-a-stream-of-numbers-tc-1",
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
    "id": "dsa-p5-012",
    "slug": "list-of-tasks-with-deadlines",
    "title": "List of Tasks with Deadlines",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Medium",
    "order": 302,
    "statement": "### Problem Description\n\nGiven a list of tasks with deadlines and profits, use a priority queue to select tasks under a scheduling constraint.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: List of Tasks with Deadlines\n * Description: Given a list of tasks with deadlines and profits, use a priority queue to select tasks under a scheduling constraint.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: List of Tasks with Deadlines\n * Description: Given a list of tasks with deadlines and profits, use a priority queue to select tasks under a scheduling constraint.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: List of Tasks with Deadlines\nDescription: Given a list of tasks with deadlines and profits, use a priority queue to select tasks under a scheduling constraint.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: List of Tasks with Deadlines\nDescription: Given a list of tasks with deadlines and profits, use a priority queue to select tasks under a scheduling constraint.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "list-of-tasks-with-deadlines-tc-1",
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
    "id": "dsa-p5-013",
    "slug": "smallest-range-that-includes-at-least",
    "title": "Smallest Range That Includes At Least",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Medium",
    "order": 303,
    "statement": "### Problem Description\n\nFind the smallest range that includes at least one element from each of K sorted lists.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Smallest Range That Includes At Least\n * Description: Find the smallest range that includes at least one element from each of K sorted lists.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Smallest Range That Includes At Least\n * Description: Find the smallest range that includes at least one element from each of K sorted lists.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Smallest Range That Includes At Least\nDescription: Find the smallest range that includes at least one element from each of K sorted lists.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Smallest Range That Includes At Least\nDescription: Find the smallest range that includes at least one element from each of K sorted lists.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "smallest-range-that-includes-at-least-tc-1",
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
    "id": "dsa-p5-014",
    "slug": "stream-of-numbers-return-the-kth-largest",
    "title": "Stream of Numbers, Return the Kth-largest",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Medium",
    "order": 304,
    "statement": "### Problem Description\n\nGiven a stream of numbers, return the Kth-largest element after every insertion.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Stream of Numbers, Return the Kth-largest\n * Description: Given a stream of numbers, return the Kth-largest element after every insertion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Stream of Numbers, Return the Kth-largest\n * Description: Given a stream of numbers, return the Kth-largest element after every insertion.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Stream of Numbers, Return the Kth-largest\nDescription: Given a stream of numbers, return the Kth-largest element after every insertion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Stream of Numbers, Return the Kth-largest\nDescription: Given a stream of numbers, return the Kth-largest element after every insertion.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "stream-of-numbers-return-the-kth-largest-tc-1",
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
    "id": "dsa-p5-015",
    "slug": "design-priority-queue-that-supports-updating",
    "title": "Design Priority Queue That Supports Updating",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Hard",
    "order": 305,
    "statement": "### Problem Description\n\nDesign a priority queue that supports updating the priority of an existing element.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Priority Queue That Supports Updating\n * Description: Design a priority queue that supports updating the priority of an existing element.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Design Priority Queue That Supports Updating\n * Description: Design a priority queue that supports updating the priority of an existing element.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Design Priority Queue That Supports Updating\nDescription: Design a priority queue that supports updating the priority of an existing element.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Design Priority Queue That Supports Updating\nDescription: Design a priority queue that supports updating the priority of an existing element.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "design-priority-queue-that-supports-updating-tc-1",
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
    "id": "dsa-p5-016",
    "slug": "compare-a-binary-heap-a-balanced",
    "title": "Compare a Binary Heap, a Balanced",
    "topic": "Heaps and priority queues",
    "tags": [
      "Heap / Priority Queue"
    ],
    "difficulty": "Hard",
    "order": 306,
    "statement": "### Problem Description\n\nCompare a binary heap, a balanced BST, and an unsorted array for insertion, minimum retrieval, deletion, and ordered traversal.\n\n### Requirements\n- Design and implement an optimal solution satisfying competitive time and space bounds.\n- Handle all boundary conditions (e.g. minimum/maximum constraints, empty/singleton inputs, duplicates, and edge-case values).",
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
        "content": "Identify the fundamental structural property or mathematical invariant governing this challenge in Heaps and priority queues. What property remains true across each state transition?"
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
        "keyObservation": "Exploiting the mathematical invariants and structured ordering within Heaps and priority queues eliminates redundant sub-evaluations and enables single-pass or logarithmic resolution.",
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
        "starterCode": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare a Binary Heap, a Balanced\n * Description: Compare a binary heap, a balanced BST, and an unsorted array for insertion, minimum retrieval, deletion, and ordered traversal.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\n/**\n * Problem: Compare a Binary Heap, a Balanced\n * Description: Compare a binary heap, a balanced BST, and an unsorted array for insertion, minimum retrieval, deletion, and ordered traversal.\n */\nclass Solution {\npublic:\n    void solve() {\n        // Read input from standard input (cin)\n        // Implement your optimal solution logic here\n        \n        // Print result to standard output (cout)\n    }\n};\n\nint main() {\n    // Fast I/O\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    Solution solution;\n    solution.solve();\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\n\"\"\"\nProblem: Compare a Binary Heap, a Balanced\nDescription: Compare a binary heap, a balanced BST, and an unsorted array for insertion, minimum retrieval, deletion, and ordered traversal.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n",
        "source": "import sys\n\n\"\"\"\nProblem: Compare a Binary Heap, a Balanced\nDescription: Compare a binary heap, a balanced BST, and an unsorted array for insertion, minimum retrieval, deletion, and ordered traversal.\n\"\"\"\ndef solve():\n    # Read input from sys.stdin\n    # Implement your optimal solution logic here\n    pass\n\nif __name__ == '__main__':\n    solve()\n"
      }
    ],
    "followUp": "Can this algorithm be adapted to an online streaming setting where the entire input cannot be held in memory simultaneously?",
    "testCases": [
      {
        "id": "compare-a-binary-heap-a-balanced-tc-1",
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
