import type { DsaProblem } from '@/types/dsa-question';

export const PHASE_0_PROBLEMS: DsaProblem[] = [
  {
    "id": "dsa-p0-001",
    "slug": "integers-and-print-their-sum-difference",
    "title": "Basic Arithmetic Operations",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Math",
      "Basic Syntax",
      "Conditional Logic"
    ],
    "difficulty": "Warm-up",
    "order": 1,
    "statement": "### Problem Description\n\nRead two integers $A$ and $B$ from standard input. Compute and print their sum, difference, product, quotient, and remainder.\n\nIf $B = 0$, division and modulo operations are mathematically undefined; in such cases, output `undefined` for both quotient and remainder.\n\n### Input Format\nA single line containing two space-separated integers $A$ and $B$.\n\n### Output Format\nPrint exactly 5 lines:\n- Line 1: $A + B$ (sum)\n- Line 2: $A - B$ (difference)\n- Line 3: $A \\times B$ (product)\n- Line 4: $A / B$ (integer quotient truncated toward zero) or `undefined` if $B = 0$\n- Line 5: $A \\pmod B$ (remainder) or `undefined` if $B = 0$",
    "examples": [
      {
        "input": "10 3",
        "output": "13\n7\n30\n3\n1",
        "explanation": "10 + 3 = 13, 10 - 3 = 7, 10 * 3 = 30. Integer division 10 / 3 = 3 with remainder 1."
      },
      {
        "input": "7 0",
        "output": "7\n7\n0\nundefined\nundefined",
        "explanation": "Divisor is 0, so quotient and remainder are undefined."
      },
      {
        "input": "-15 4",
        "output": "-11\n-19\n-60\n-3\n-3",
        "explanation": "-15 + 4 = -11, -15 - 4 = -19, -15 * 4 = -60. In integer truncation, -15 / 4 = -3, -15 % 4 = -3."
      }
    ],
    "constraints": [
      "-10^5 <= A, B <= 10^5",
      "Time complexity target: O(1)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Check for Zero Divisor",
        "content": "Before executing division (/) and modulo (%), verify whether B is zero to prevent division by zero runtime errors."
      },
      {
        "level": 2,
        "title": "Integer Division Semantics",
        "content": "Truncation toward zero means that negative divisions like -15 / 4 yield -3."
      },
      {
        "level": 3,
        "title": "Clean Output Formatting",
        "content": "Emit each of the 5 results on a separate line using standard output."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Direct arithmetic evaluation using standard operators with conditional guard for zero divisor.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "Arithmetic operations execute in constant O(1) time. Guarding against B == 0 prevents runtime exceptions.",
        "algorithm": "Read A and B. Print A+B, A-B, A*B. If B == 0, print \"undefined\" twice; otherwise print A/B and A%B.",
        "steps": [
          {
            "title": "Step 1 — Read Inputs",
            "content": "Extract integers A and B from standard input."
          },
          {
            "title": "Step 2 — Safe Division Check",
            "content": "If B == 0, flag quotient and remainder as undefined."
          },
          {
            "title": "Step 3 — Output Results",
            "content": "Print sum, difference, product, and quotient/remainder sequentially."
          }
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    long long a, b;\n    if (!(cin >> a >> b)) return 0;\n\n    // TODO: Compute and print sum, difference, product, quotient, and remainder\n    \n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    long long a, b;\n    if (!(cin >> a >> b)) return 0;\n\n    cout << (a + b) << \"\\n\";\n    cout << (a - b) << \"\\n\";\n    cout << (a * b) << \"\\n\";\n    if (b == 0) {\n        cout << \"undefined\\n\";\n        cout << \"undefined\\n\";\n    } else {\n        cout << (a / b) << \"\\n\";\n        cout << (a % b) << \"\\n\";\n    }\n\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    a, b = int(tokens[0]), int(tokens[1])\n    \n    # TODO: Print sum, difference, product, quotient, remainder\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    a, b = int(tokens[0]), int(tokens[1])\n    \n    print(a + b)\n    print(a - b)\n    print(a * b)\n    if b == 0:\n        print(\"undefined\")\n        print(\"undefined\")\n    else:\n        # Truncate toward zero matching standard C++\n        quotient = int(a / b)\n        remainder = a - quotient * b\n        print(quotient)\n        print(remainder)\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you handle arbitrarily large integers that exceed standard 64-bit limits?",
    "testCases": [
      {
        "id": "tc-p0-001-1",
        "input": "10 3",
        "expectedOutput": "13\n7\n30\n3\n1",
        "explanation": "Basic positive division with remainder."
      },
      {
        "id": "tc-p0-001-2",
        "input": "7 0",
        "expectedOutput": "7\n7\n0\nundefined\nundefined",
        "explanation": "Divisor zero handling."
      },
      {
        "id": "tc-p0-001-3",
        "input": "-15 4",
        "expectedOutput": "-11\n-19\n-60\n-3\n-3",
        "explanation": "Negative dividend with positive divisor."
      },
      {
        "id": "tc-p0-001-4",
        "input": "0 5",
        "expectedOutput": "5\n-5\n0\n0\n0",
        "explanation": "Zero dividend."
      },
      {
        "id": "tc-p0-001-5",
        "input": "100 25",
        "expectedOutput": "125\n75\n2500\n4\n0",
        "explanation": "Exact division with zero remainder."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-002",
    "slug": "integer-determine-whether-it-is-positive",
    "title": "Check Sign of Integer",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Conditions",
      "Basic Syntax"
    ],
    "difficulty": "Warm-up",
    "order": 2,
    "statement": "### Problem Description\n\nGiven an integer $N$, determine whether it is positive, negative, or zero.\n\n### Input Format\nA single line containing an integer $N$.\n\n### Output Format\nPrint `Positive` if $N > 0$, `Negative` if $N < 0$, or `Zero` if $N = 0$.",
    "examples": [
      {
        "input": "42",
        "output": "Positive",
        "explanation": "42 is strictly greater than 0, so it is Positive."
      },
      {
        "input": "-17",
        "output": "Negative",
        "explanation": "-17 is strictly less than 0, so it is Negative."
      },
      {
        "input": "0",
        "output": "Zero",
        "explanation": "0 is neither positive nor negative."
      }
    ],
    "constraints": [
      "-10^9 <= N <= 10^9",
      "Time complexity target: O(1)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Three-way Branching",
        "content": "Use an if-else if-else chain to evaluate the three mutually exclusive states."
      },
      {
        "level": 2,
        "title": "Strict Comparison",
        "content": "Compare strictly against 0 (N > 0, N < 0, else 0)."
      },
      {
        "level": 3,
        "title": "Capitalization",
        "content": "Make sure your output strings match exact capitalization: Positive, Negative, Zero."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Evaluate conditional branch against zero.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "Comparing integer against zero directly determines sign in single branch check.",
        "algorithm": "Read N. If N > 0 print \"Positive\"; else if N < 0 print \"Negative\"; else print \"Zero\".",
        "steps": [
          {
            "title": "Step 1 — Read Input",
            "content": "Read N from standard input."
          },
          {
            "title": "Step 2 — Branch on Sign",
            "content": "Check sign using conditional comparison against 0."
          }
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        // TODO: Print Positive, Negative, or Zero\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        if (n > 0) cout << \"Positive\\n\";\n        else if (n < 0) cout << \"Negative\\n\";\n        else cout << \"Zero\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    # TODO: Print Positive, Negative, or Zero\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    if n > 0:\n        print(\"Positive\")\n    elif n < 0:\n        print(\"Negative\")\n    else:\n        print(\"Zero\")\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you classify numbers with floating-point tolerance (epsilon)?",
    "testCases": [
      {
        "id": "tc-p0-002-1",
        "input": "42",
        "expectedOutput": "Positive",
        "explanation": "Positive integer."
      },
      {
        "id": "tc-p0-002-2",
        "input": "-17",
        "expectedOutput": "Negative",
        "explanation": "Negative integer."
      },
      {
        "id": "tc-p0-002-3",
        "input": "0",
        "expectedOutput": "Zero",
        "explanation": "Boundary value 0."
      },
      {
        "id": "tc-p0-002-4",
        "input": "-1000000000",
        "expectedOutput": "Negative",
        "explanation": "Lower bound constraint."
      },
      {
        "id": "tc-p0-002-5",
        "input": "999999999",
        "expectedOutput": "Positive",
        "explanation": "Upper bound constraint."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-003",
    "slug": "three-integers-find-the-largest-without",
    "title": "Find Largest of Three Integers",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Conditions",
      "Math"
    ],
    "difficulty": "Warm-up",
    "order": 3,
    "statement": "### Problem Description\n\nGiven three integers $A$, $B$, and $C$, find and print the largest value among them without using built-in array sorting.\n\n### Input Format\nA single line containing three space-separated integers $A$, $B$, and $C$.\n\n### Output Format\nPrint the single maximum integer value.",
    "examples": [
      {
        "input": "5 12 9",
        "output": "12",
        "explanation": "Comparing 5, 12, and 9: 12 is greater than both 5 and 9."
      },
      {
        "input": "-3 -8 -1",
        "output": "-1",
        "explanation": "Among negative integers, -1 is closest to zero and thus the largest."
      },
      {
        "input": "7 7 7",
        "output": "7",
        "explanation": "All three integers are equal, so the maximum is 7."
      }
    ],
    "constraints": [
      "-10^9 <= A, B, C <= 10^9",
      "Time complexity target: O(1)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Conditional Tracking",
        "content": "Initialize max_val = A. If B > max_val, update max_val = B. If C > max_val, update max_val = C."
      },
      {
        "level": 2,
        "title": "Handling Ties",
        "content": "Using >= or > works equally well because identical values do not change the maximum."
      },
      {
        "level": 3,
        "title": "Negative Numbers",
        "content": "Do not initialize max_val to 0; initialize it to A so negative inputs are handled correctly."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Compare pairs using if-else statements.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "We can maintain a running maximum initialized to A and compare against B and C sequentially.",
        "algorithm": "Read A, B, C. Let ans = A. If B > ans, ans = B. If C > ans, ans = C. Print ans.",
        "steps": [
          {
            "title": "Step 1 — Read Inputs",
            "content": "Read A, B, C from stdin."
          },
          {
            "title": "Step 2 — Compare Sequentially",
            "content": "Update the running maximum with B and C."
          },
          {
            "title": "Step 3 — Output Result",
            "content": "Print the maximum value."
          }
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long a, b, c;\n    if (cin >> a >> b >> c) {\n        // TODO: Print the largest of the three integers\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long a, b, c;\n    if (cin >> a >> b >> c) {\n        long long mx = a;\n        if (b > mx) mx = b;\n        if (c > mx) mx = c;\n        cout << mx << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    a, b, c = map(int, tokens[:3])\n    # TODO: Print the largest of the three integers\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    a, b, c = map(int, tokens[:3])\n    mx = a\n    if b > mx:\n        mx = b\n    if c > mx:\n        mx = c\n    print(mx)\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you scale this to find the maximum of N streaming numbers with O(1) memory?",
    "testCases": [
      {
        "id": "tc-p0-003-1",
        "input": "5 12 9",
        "expectedOutput": "12",
        "explanation": "Middle element is largest."
      },
      {
        "id": "tc-p0-003-2",
        "input": "-3 -8 -1",
        "expectedOutput": "-1",
        "explanation": "All negative numbers."
      },
      {
        "id": "tc-p0-003-3",
        "input": "7 7 7",
        "expectedOutput": "7",
        "explanation": "All three identical."
      },
      {
        "id": "tc-p0-003-4",
        "input": "100 25 100",
        "expectedOutput": "100",
        "explanation": "Two elements tied for largest."
      },
      {
        "id": "tc-p0-003-5",
        "input": "0 0 -5",
        "expectedOutput": "0",
        "explanation": "Zeros with negative number."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-004",
    "slug": "integers-from-1-to-n-using",
    "title": "Print Numbers 1 to N and N to 1",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Loops",
      "Iteration",
      "Basic Syntax"
    ],
    "difficulty": "Warm-up",
    "order": 4,
    "statement": "### Problem Description\n\nGiven a positive integer $N$, print all integers from $1$ to $N$ in ascending order on the first line, and then print all integers from $N$ down to $1$ in descending order on the second line.\n\nElements on each line must be separated by a single space.\n\n### Input Format\nA single line containing a positive integer $N$.\n\n### Output Format\n- Line 1: Integers from $1$ to $N$ separated by space.\n- Line 2: Integers from $N$ down to $1$ separated by space.",
    "examples": [
      {
        "input": "5",
        "output": "1 2 3 4 5\n5 4 3 2 1",
        "explanation": "Ascending sequence from 1 to 5, followed by descending sequence from 5 down to 1."
      },
      {
        "input": "1",
        "output": "1\n1",
        "explanation": "When N = 1, both sequences contain only the single number 1."
      },
      {
        "input": "3",
        "output": "1 2 3\n3 2 1",
        "explanation": "Line 1 is 1 2 3, line 2 is 3 2 1."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "Time complexity target: O(N)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Two Sequential Loops",
        "content": "Use one loop counting up from 1 to N, and a second loop counting down from N to 1."
      },
      {
        "level": 2,
        "title": "Spacing",
        "content": "Separate numbers by a single space, and print a newline between the two sequences."
      },
      {
        "level": 3,
        "title": "I/O Efficiency",
        "content": "In C++, use ios_base::sync_with_stdio(false); cin.tie(NULL); for fast printing when N is up to 10^5."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Iterate from 1 to N printing each integer, then iterate from N down to 1.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "Two simple linear passes generate the exact sequences with O(1) auxiliary memory.",
        "algorithm": "Run loop i from 1 to N, printing i. Print newline. Run loop i from N down to 1, printing i.",
        "steps": [
          {
            "title": "Step 1 — Read N",
            "content": "Read positive integer N from standard input."
          },
          {
            "title": "Step 2 — Forward Loop",
            "content": "Print numbers 1 through N separated by spaces."
          },
          {
            "title": "Step 3 — Backward Loop",
            "content": "Print numbers N down to 1 separated by spaces."
          }
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        // TODO: Print 1 to N, then N down to 1\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        for (int i = 1; i <= n; i++) {\n            cout << i << (i == n ? \"\" : \" \");\n        }\n        cout << \"\\n\";\n        for (int i = n; i >= 1; i--) {\n            cout << i << (i == 1 ? \"\" : \" \");\n        }\n        cout << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    # TODO: Print 1 to N, then N down to 1\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    print(*(range(1, n + 1)))\n    print(*(range(n, 0, -1)))\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How can this be implemented using recursion without hitting recursion depth limits?",
    "testCases": [
      {
        "id": "tc-p0-004-1",
        "input": "5",
        "expectedOutput": "1 2 3 4 5\n5 4 3 2 1",
        "explanation": "Standard small integer."
      },
      {
        "id": "tc-p0-004-2",
        "input": "1",
        "expectedOutput": "1\n1",
        "explanation": "Minimum boundary value N = 1."
      },
      {
        "id": "tc-p0-004-3",
        "input": "3",
        "expectedOutput": "1 2 3\n3 2 1",
        "explanation": "N = 3."
      },
      {
        "id": "tc-p0-004-4",
        "input": "8",
        "expectedOutput": "1 2 3 4 5 6 7 8\n8 7 6 5 4 3 2 1",
        "explanation": "N = 8."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 2
    }
  },
  {
    "id": "dsa-p0-005",
    "slug": "n-calculate-the-sum-of",
    "title": "Sum of First N Natural Numbers",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Math",
      "Loops",
      "Formula"
    ],
    "difficulty": "Warm-up",
    "order": 5,
    "statement": "### Problem Description\n\nGiven a non-negative integer $N$, calculate the sum of the first $N$ natural numbers:\n$$S = \\sum_{i=1}^{N} i = 1 + 2 + \\dots + N$$\n\nIf $N = 0$, the sum is $0$.\n\n### Input Format\nA single line containing an integer $N$.\n\n### Output Format\nPrint a single integer representing the sum. Use 64-bit integers to prevent overflow.",
    "examples": [
      {
        "input": "5",
        "output": "15",
        "explanation": "1 + 2 + 3 + 4 + 5 = 15."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "For N = 0, no positive integers are summed, resulting in 0."
      },
      {
        "input": "10",
        "output": "55",
        "explanation": "Using formula N * (N + 1) / 2: 10 * 11 / 2 = 55."
      }
    ],
    "constraints": [
      "0 <= N <= 10^9",
      "Time complexity target: O(1)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Constant-time Formula",
        "content": "Gauss's summation formula gives the answer directly: S = N * (N + 1) / 2."
      },
      {
        "level": 2,
        "title": "Integer Overflow Warning",
        "content": "When N = 10^9, N * (N + 1) exceeds 32-bit signed integer limits (~2 * 10^9). Use 64-bit integer types (long long in C++, int in Python)."
      },
      {
        "level": 3,
        "title": "Base Case N = 0",
        "content": "0 * 1 / 2 = 0, so the formula holds naturally for N = 0."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Iterate from 1 to N accumulating the sum in a variable.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "Gauss summation evaluates 1 + ... + N in O(1) arithmetic operations: N * (N + 1) / 2.",
        "algorithm": "Read N. Compute ans = N * (N + 1) / 2 using 64-bit arithmetic. Print ans.",
        "steps": [
          {
            "title": "Step 1 — Parse N",
            "content": "Read N as a 64-bit integer."
          },
          {
            "title": "Step 2 — Closed-form Calculation",
            "content": "Compute (N * (N + 1)) / 2 directly."
          }
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        // TODO: Compute and print sum of first N natural numbers\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        long long sum = (n * (n + 1)) / 2;\n        cout << sum << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    # TODO: Print sum of first N natural numbers\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    print(n * (n + 1) // 2)\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you compute the sum of squares 1^2 + 2^2 + ... + N^2 in O(1) time?",
    "testCases": [
      {
        "id": "tc-p0-005-1",
        "input": "5",
        "expectedOutput": "15",
        "explanation": "Small value."
      },
      {
        "id": "tc-p0-005-2",
        "input": "0",
        "expectedOutput": "0",
        "explanation": "Zero input."
      },
      {
        "id": "tc-p0-005-3",
        "input": "10",
        "expectedOutput": "55",
        "explanation": "N = 10."
      },
      {
        "id": "tc-p0-005-4",
        "input": "100",
        "expectedOutput": "5050",
        "explanation": "N = 100."
      },
      {
        "id": "tc-p0-005-5",
        "input": "100000",
        "expectedOutput": "5000050000",
        "explanation": "Large input requiring 64-bit integer."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-006",
    "slug": "integer-count-its-digits-without-converting",
    "title": "Count Digits of an Integer",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Math",
      "Loops",
      "Basic Syntax"
    ],
    "difficulty": "Warm-up",
    "order": 6,
    "statement": "### Problem Description\n\nGiven an integer $N$, count its total number of decimal digits without converting it to a string.\n\nNote:\n- The integer $0$ has exactly $1$ digit.\n- Negative integers have the same number of digits as their absolute value (the minus sign does not count as a digit).\n\n### Input Format\nA single line containing an integer $N$.\n\n### Output Format\nPrint the total number of decimal digits in $N$.",
    "examples": [
      {
        "input": "12345",
        "output": "5",
        "explanation": "The digits are 1, 2, 3, 4, 5, giving a count of 5."
      },
      {
        "input": "0",
        "output": "1",
        "explanation": "The value 0 consists of a single digit 0."
      },
      {
        "input": "-987",
        "output": "3",
        "explanation": "Taking the absolute value |-987| = 987, which has 3 digits: 9, 8, 7."
      }
    ],
    "constraints": [
      "-10^18 <= N <= 10^18",
      "Time complexity target: O(log10 |N|)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Handling Zero",
        "content": "Check for N == 0 as an explicit case, returning 1."
      },
      {
        "level": 2,
        "title": "Repeated Division",
        "content": "While |N| > 0, increment count and divide N by 10."
      },
      {
        "level": 3,
        "title": "Negative Numbers",
        "content": "Take absolute value of N, or operate on unsigned/64-bit magnitude to avoid sign issues."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Divide by 10 repeatedly until N becomes 0, counting each iteration.",
        "timeComplexity": "O(log10 |N|)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "Each division by 10 removes the least significant decimal digit. Zero requires a special case check.",
        "algorithm": "If N == 0 return 1. Take absolute value. While N > 0, count++, N /= 10. Print count.",
        "steps": [
          {
            "title": "Step 1 — Zero Check",
            "content": "If N == 0, count is immediately 1."
          },
          {
            "title": "Step 2 — Repeated Division",
            "content": "Take absolute value and divide by 10 in a while loop."
          }
        ],
        "timeComplexity": "O(log10 |N|)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        // TODO: Count decimal digits without string conversion\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n#include <cmath>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        if (n == 0) {\n            cout << 1 << \"\\n\";\n            return 0;\n        }\n        int count = 0;\n        // Avoid LLONG_MIN overflow\n        unsigned long long val = (n < 0) ? -(unsigned long long)n : (unsigned long long)n;\n        while (val > 0) {\n            count++;\n            val /= 10;\n        }\n        cout << count << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    # TODO: Count digits without string conversion\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    if n == 0:\n        print(1)\n        return\n    n = abs(n)\n    count = 0\n    while n > 0:\n        count += 1\n        n //= 10\n    print(count)\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "Could you compute the digit count in O(1) time using logarithmic math (log10)?",
    "testCases": [
      {
        "id": "tc-p0-006-1",
        "input": "12345",
        "expectedOutput": "5",
        "explanation": "5-digit number."
      },
      {
        "id": "tc-p0-006-2",
        "input": "0",
        "expectedOutput": "1",
        "explanation": "Zero has 1 digit."
      },
      {
        "id": "tc-p0-006-3",
        "input": "-987",
        "expectedOutput": "3",
        "explanation": "Negative 3-digit number."
      },
      {
        "id": "tc-p0-006-4",
        "input": "1000000",
        "expectedOutput": "7",
        "explanation": "Powers of 10."
      },
      {
        "id": "tc-p0-006-5",
        "input": "-5",
        "expectedOutput": "1",
        "explanation": "Single negative digit."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-007",
    "slug": "reverse-digits-of-an-integer-and-determine",
    "title": "Reverse Digits and Check Palindrome",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Math",
      "Loops",
      "Palindrome"
    ],
    "difficulty": "Warm-up",
    "order": 7,
    "statement": "### Problem Description\n\nGiven a non-negative integer $N$, reverse its decimal digits numerically.\nPrint the reversed number on the first line (omitting leading zeros, except when the reversed value is $0$).\nOn the second line, print `true` if the reversed number equals the original number $N$ (i.e., $N$ is a palindrome), or `false` otherwise.\n\n### Input Format\nA single line containing a non-negative integer $N$.\n\n### Output Format\n- Line 1: The reversed integer value.\n- Line 2: `true` if $N$ is a palindrome, else `false`.",
    "examples": [
      {
        "input": "12321",
        "output": "12321\ntrue",
        "explanation": "Reversing 12321 yields 12321, which equals the original number."
      },
      {
        "input": "1230",
        "output": "321\nfalse",
        "explanation": "Reversing 1230 yields 321. Since 321 != 1230, it is not a palindrome."
      },
      {
        "input": "7",
        "output": "7\ntrue",
        "explanation": "Single digit numbers are always palindromes."
      }
    ],
    "constraints": [
      "0 <= N <= 10^15",
      "Time complexity target: O(log10 N)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Building the Reversed Integer",
        "content": "Iteratively extract the last digit using rem = N % 10, then append it: rev = rev * 10 + rem, and N /= 10."
      },
      {
        "level": 2,
        "title": "Preserve the Original",
        "content": "Store original N in a separate variable before modifying it in the extraction loop."
      },
      {
        "level": 3,
        "title": "Leading Zeros",
        "content": "Numeric reversal naturally strips leading zeros (e.g. 1230 becomes 321)."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Extract digits into a list/string, reverse, and compare.",
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(log10 N)"
      },
      "optimal": {
        "keyObservation": "Constructing rev = rev * 10 + (temp % 10) takes O(1) auxiliary memory.",
        "algorithm": "Store orig = N. Build rev = 0. While temp > 0, rev = rev * 10 + (temp % 10), temp /= 10. Compare orig == rev.",
        "steps": [
          {
            "title": "Step 1 — Digits Reversal",
            "content": "Extract digits modulo 10 and accumulate into rev."
          },
          {
            "title": "Step 2 — Palindrome Comparison",
            "content": "Check whether rev == orig."
          }
        ],
        "timeComplexity": "O(log10 N)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        // TODO: Reverse digits and check palindrome\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        long long orig = n;\n        long long rev = 0;\n        long long temp = n;\n        while (temp > 0) {\n            rev = rev * 10 + (temp % 10);\n            temp /= 10;\n        }\n        cout << rev << \"\\n\";\n        cout << (orig == rev ? \"true\" : \"false\") << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    # TODO: Reverse digits and check palindrome\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    orig = n\n    temp = n\n    rev = 0\n    while temp > 0:\n        rev = rev * 10 + (temp % 10)\n        temp //= 10\n    print(rev)\n    print(\"true\" if orig == rev else \"false\")\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you detect integer overflow when reversing signed 32-bit integers?",
    "testCases": [
      {
        "id": "tc-p0-007-1",
        "input": "12321",
        "expectedOutput": "12321\ntrue",
        "explanation": "Odd-length palindrome."
      },
      {
        "id": "tc-p0-007-2",
        "input": "1230",
        "expectedOutput": "321\nfalse",
        "explanation": "Trailing zero stripped."
      },
      {
        "id": "tc-p0-007-3",
        "input": "7",
        "expectedOutput": "7\ntrue",
        "explanation": "Single digit is always palindrome."
      },
      {
        "id": "tc-p0-007-4",
        "input": "100",
        "expectedOutput": "1\nfalse",
        "explanation": "Trailing zeroes stripped down to 1."
      },
      {
        "id": "tc-p0-007-5",
        "input": "0",
        "expectedOutput": "0\ntrue",
        "explanation": "Zero input."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-008",
    "slug": "n-determine-whether-it-is-prime",
    "title": "Prime Check and Divisor Count",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Math",
      "Number Theory",
      "Loops"
    ],
    "difficulty": "Warm-up",
    "order": 8,
    "statement": "### Problem Description\n\nGiven a positive integer $N$, determine whether $N$ is a prime number and count the total number of its positive divisors.\n\nRecall:\n- A prime number is an integer strictly greater than 1 whose only divisors are 1 and itself.\n- $1$ is not prime and has exactly $1$ divisor.\n\n### Input Format\nA single line containing a positive integer $N$.\n\n### Output Format\n- Line 1: `true` if $N$ is prime, otherwise `false`.\n- Line 2: An integer representing the total count of positive divisors of $N$.",
    "examples": [
      {
        "input": "7",
        "output": "true\n2",
        "explanation": "7 is only divisible by 1 and 7 (2 divisors), so it is prime."
      },
      {
        "input": "12",
        "output": "false\n6",
        "explanation": "The positive divisors of 12 are 1, 2, 3, 4, 6, 12 (6 divisors). Not prime."
      },
      {
        "input": "1",
        "output": "false\n1",
        "explanation": "1 has only 1 divisor and is not prime by definition."
      }
    ],
    "constraints": [
      "1 <= N <= 10^9",
      "Time complexity target: O(sqrt(N))",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Check Up to Sqrt(N)",
        "content": "Divisors come in pairs: if d divides N, then N/d also divides N. Iterate d from 1 up to sqrt(N)."
      },
      {
        "level": 2,
        "title": "Perfect Squares",
        "content": "If d * d == N, count d once instead of twice."
      },
      {
        "level": 3,
        "title": "Prime Definition",
        "content": "A number is prime if and only if N > 1 and total divisor count equals 2."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Check all integers from 1 to N, incrementing divisor count whenever N % d == 0.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "Every divisor d <= sqrt(N) corresponds to paired divisor N/d. Counting pairs up to sqrt(N) takes O(sqrt(N)) time.",
        "algorithm": "For d = 1 to d*d <= N: if N % d == 0, count += (d * d == N ? 1 : 2). Prime is true iff N > 1 and count == 2.",
        "steps": [
          {
            "title": "Step 1 — Divisor Pair Counting",
            "content": "Iterate d from 1 to floor(sqrt(N)), adding 2 for distinct pairs and 1 for perfect square root."
          },
          {
            "title": "Step 2 — Prime Verification",
            "content": "N is prime if and only if divisor count is 2 and N > 1."
          }
        ],
        "timeComplexity": "O(sqrt(N))",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        // TODO: Print true/false if prime on line 1, and divisor count on line 2\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        long long divisors = 0;\n        for (long long d = 1; d * d <= n; d++) {\n            if (n % d == 0) {\n                if (d * d == n) divisors += 1;\n                else divisors += 2;\n            }\n        }\n        bool isPrime = (n > 1 && divisors == 2);\n        cout << (isPrime ? \"true\" : \"false\") << \"\\n\";\n        cout << divisors << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    # TODO: Print true/false if prime on line 1, and divisor count on line 2\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    divisors = 0\n    d = 1\n    while d * d <= n:\n        if n % d == 0:\n            if d * d == n:\n                divisors += 1\n            else:\n                divisors += 2\n        d += 1\n    \n    is_prime = (n > 1 and divisors == 2)\n    print(\"true\" if is_prime else \"false\")\n    print(divisors)\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you quickly check primality for N up to 10^18 using Miller-Rabin?",
    "testCases": [
      {
        "id": "tc-p0-008-1",
        "input": "7",
        "expectedOutput": "true\n2",
        "explanation": "Small prime."
      },
      {
        "id": "tc-p0-008-2",
        "input": "12",
        "expectedOutput": "false\n6",
        "explanation": "Composite number with 6 divisors."
      },
      {
        "id": "tc-p0-008-3",
        "input": "1",
        "expectedOutput": "false\n1",
        "explanation": "1 is not prime."
      },
      {
        "id": "tc-p0-008-4",
        "input": "2",
        "expectedOutput": "true\n2",
        "explanation": "Smallest prime number."
      },
      {
        "id": "tc-p0-008-5",
        "input": "25",
        "expectedOutput": "false\n3",
        "explanation": "Square of prime (divisors 1, 5, 25)."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-009",
    "slug": "multiplication-table-for-a-given-integer",
    "title": "Generate Multiplication Table",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Loops",
      "Basic Syntax",
      "Formatting"
    ],
    "difficulty": "Warm-up",
    "order": 9,
    "statement": "### Problem Description\n\nGiven two integers $N$ and $K$ ($K \\ge 1$), print the multiplication table of $N$ from $1$ up to $K$.\n\n### Input Format\nA single line containing two space-separated integers $N$ and $K$.\n\n### Output Format\nPrint $K$ lines. The $i$-th line ($1 \\le i \\le K$) should be formatted exactly as:\n`N x i = result`",
    "examples": [
      {
        "input": "5 4",
        "output": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20",
        "explanation": "Multiplication table of 5 up to multiplier 4."
      },
      {
        "input": "3 1",
        "output": "3 x 1 = 3",
        "explanation": "Multiplier K = 1, so only 3 x 1 is printed."
      },
      {
        "input": "-2 3",
        "output": "-2 x 1 = -2\n-2 x 2 = -4\n-2 x 3 = -6",
        "explanation": "Multiplication table with negative multiplicand N = -2."
      }
    ],
    "constraints": [
      "-10^5 <= N <= 10^5",
      "1 <= K <= 1000",
      "Time complexity target: O(K)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Loop Counter",
        "content": "Use a loop with counter variable i starting at 1 and ending at K."
      },
      {
        "level": 2,
        "title": "Formatting Exact Match",
        "content": "Follow the exact template: \"{N} x {i} = {N * i}\" with single spaces around \"x\" and \"=\"."
      },
      {
        "level": 3,
        "title": "Handling Negative Values",
        "content": "Standard signed multiplication handles negative N properly."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Loop i from 1 to K and print each line formatted.",
        "timeComplexity": "O(K)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "Direct linear iteration computes and formats each multiplication in O(1) per line.",
        "algorithm": "Read N and K. For i from 1 to K: print N + \" x \" + i + \" = \" + (N * i).",
        "steps": [
          {
            "title": "Step 1 — Parse Inputs",
            "content": "Read N and K from standard input."
          },
          {
            "title": "Step 2 — Loop & Output",
            "content": "Iterate i from 1 to K, printing the formatted line."
          }
        ],
        "timeComplexity": "O(K)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    int k;\n    if (cin >> n >> k) {\n        // TODO: Print multiplication table up to K\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    int k;\n    if (cin >> n >> k) {\n        for (int i = 1; i <= k; i++) {\n            cout << n << \" x \" << i << \" = \" << (n * i) << \"\\n\";\n        }\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n, k = int(tokens[0]), int(tokens[1])\n    # TODO: Print multiplication table up to K\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n, k = int(tokens[0]), int(tokens[1])\n    for i in range(1, k + 1):\n        print(f\"{n} x {i} = {n * i}\")\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you print a 2D N x N multiplication grid aligned with fixed-width column padding?",
    "testCases": [
      {
        "id": "tc-p0-009-1",
        "input": "5 4",
        "expectedOutput": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20",
        "explanation": "Basic case."
      },
      {
        "id": "tc-p0-009-2",
        "input": "3 1",
        "expectedOutput": "3 x 1 = 3",
        "explanation": "K = 1."
      },
      {
        "id": "tc-p0-009-3",
        "input": "-2 3",
        "expectedOutput": "-2 x 1 = -2\n-2 x 2 = -4\n-2 x 3 = -6",
        "explanation": "Negative N."
      },
      {
        "id": "tc-p0-009-4",
        "input": "10 2",
        "expectedOutput": "10 x 1 = 10\n10 x 2 = 20",
        "explanation": "N = 10, K = 2."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-010",
    "slug": "number-n-generate-the-first-n",
    "title": "Generate First N Fibonacci Numbers",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Math",
      "Fibonacci",
      "Dynamic Programming",
      "Loops"
    ],
    "difficulty": "Warm-up",
    "order": 10,
    "statement": "### Problem Description\n\nGiven a positive integer $N$, generate and print the first $N$ terms of the Fibonacci sequence.\nThe sequence starts with $F_0 = 0$, $F_1 = 1$, and each subsequent term is $F_i = F_{i-1} + F_{i-2}$.\n\n### Input Format\nA single line containing an integer $N$ ($1 \\le N \\le 50$).\n\n### Output Format\nPrint the first $N$ Fibonacci numbers separated by a single space.",
    "examples": [
      {
        "input": "6",
        "output": "0 1 1 2 3 5",
        "explanation": "The first 6 Fibonacci numbers are 0, 1, 1, 2, 3, 5."
      },
      {
        "input": "1",
        "output": "0",
        "explanation": "For N = 1, only the first term 0 is printed."
      },
      {
        "input": "2",
        "output": "0 1",
        "explanation": "For N = 2, the first two terms 0 and 1 are printed."
      }
    ],
    "constraints": [
      "1 <= N <= 50",
      "Time complexity target: O(N)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Iterative State Transition",
        "content": "Maintain two variables a and b representing consecutive terms, updating them as next = a + b, a = b, b = next."
      },
      {
        "level": 2,
        "title": "64-bit Integers",
        "content": "The 50th Fibonacci number is ~7.7 * 10^9, which exceeds 32-bit signed integers. Use 64-bit integers (long long)."
      },
      {
        "level": 3,
        "title": "Base Cases",
        "content": "Handle N = 1 and N = 2 gracefully without index out of bounds."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Naive recursive Fibonacci computation takes O(2^N) time, which is too slow.",
        "timeComplexity": "O(2^N)",
        "spaceComplexity": "O(N)"
      },
      "optimal": {
        "keyObservation": "Iteratively storing only the previous two terms computes all N terms in O(N) time with O(1) space.",
        "algorithm": "Start with a = 0, b = 1. Print a. For step 2 to N: next = a + b, a = b, b = next, printing each.",
        "steps": [
          {
            "title": "Step 1 — Base Terms",
            "content": "Print first term 0. If N > 1, print 1."
          },
          {
            "title": "Step 2 — Iterative Shift",
            "content": "Iterate from 3 to N, computing sum of previous two terms and printing."
          }
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    int n;\n    if (cin >> n) {\n        // TODO: Print first N Fibonacci numbers separated by space\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    int n;\n    if (cin >> n) {\n        if (n <= 0) return 0;\n        long long a = 0, b = 1;\n        for (int i = 0; i < n; i++) {\n            cout << a << (i == n - 1 ? \"\" : \" \");\n            long long next = a + b;\n            a = b;\n            b = next;\n        }\n        cout << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    # TODO: Print first N Fibonacci numbers\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    res = []\n    a, b = 0, 1\n    for _ in range(n):\n        res.append(str(a))\n        a, b = b, a + b\n    print(\" \".join(res))\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you compute F(N) modulo 10^9 + 7 for N = 10^18 using matrix exponentiation?",
    "testCases": [
      {
        "id": "tc-p0-010-1",
        "input": "6",
        "expectedOutput": "0 1 1 2 3 5",
        "explanation": "Standard small Fibonacci sequence."
      },
      {
        "id": "tc-p0-010-2",
        "input": "1",
        "expectedOutput": "0",
        "explanation": "N = 1."
      },
      {
        "id": "tc-p0-010-3",
        "input": "2",
        "expectedOutput": "0 1",
        "explanation": "N = 2."
      },
      {
        "id": "tc-p0-010-4",
        "input": "8",
        "expectedOutput": "0 1 1 2 3 5 8 13",
        "explanation": "N = 8."
      },
      {
        "id": "tc-p0-010-5",
        "input": "10",
        "expectedOutput": "0 1 1 2 3 5 8 13 21 34",
        "explanation": "N = 10."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-011",
    "slug": "accepts-an-integer-array-and-returns",
    "title": "Find Minimum and Maximum of Array",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Arrays",
      "Iteration",
      "Extrema"
    ],
    "difficulty": "Warm-up",
    "order": 11,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, find and print the minimum and maximum element in the array.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$), the size of the array.\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint two space-separated integers: the minimum value followed by the maximum value.",
    "examples": [
      {
        "input": "5\n3 1 9 7 2",
        "output": "1 9",
        "explanation": "The smallest value is 1, and the largest is 9."
      },
      {
        "input": "1\n42",
        "output": "42 42",
        "explanation": "With a single element, both min and max are 42."
      },
      {
        "input": "4\n-10 -5 -20 -1",
        "output": "-20 -1",
        "explanation": "Among negative numbers, -20 is the minimum and -1 is the maximum."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Initialize with First Element",
        "content": "Initialize min_val = A[0] and max_val = A[0] to prevent incorrect defaults for negative arrays."
      },
      {
        "level": 2,
        "title": "Single Pass Comparison",
        "content": "Iterate through elements from index 1 to N-1, updating min_val and max_val."
      },
      {
        "level": 3,
        "title": "Tournament Optimization",
        "content": "Comparing elements in pairs reduces comparisons from 2N to 1.5N."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Sort the array in O(N log N) and pick A[0] and A[N-1].",
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1) to O(N)"
      },
      "optimal": {
        "keyObservation": "A single linear scan tracks both min and max simultaneously in O(N) time with O(1) auxiliary space.",
        "algorithm": "Initialize mn = A[0], mx = A[0]. For each x in A[1..N-1]: mn = min(mn, x), mx = max(mx, x). Print mn, mx.",
        "steps": [
          {
            "title": "Step 1 — Read Array",
            "content": "Read N and array elements."
          },
          {
            "title": "Step 2 — Single Pass Scan",
            "content": "Compare each element against running minimum and maximum."
          }
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n && n > 0) {\n        // TODO: Read array and print min and max separated by space\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n && n > 0) {\n        long long mn, mx, val;\n        cin >> val;\n        mn = mx = val;\n        for (int i = 1; i < n; i++) {\n            cin >> val;\n            if (val < mn) mn = val;\n            if (val > mx) mx = val;\n        }\n        cout << mn << \" \" << mx << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    arr = list(map(int, tokens[1:n+1]))\n    # TODO: Print min and max separated by space\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    arr = list(map(int, tokens[1:n+1]))\n    print(min(arr), max(arr))\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "Can you find min and max using strictly <= 3N/2 comparisons?",
    "testCases": [
      {
        "id": "tc-p0-011-1",
        "input": "5\n3 1 9 7 2",
        "expectedOutput": "1 9",
        "explanation": "Mixed array."
      },
      {
        "id": "tc-p0-011-2",
        "input": "1\n42",
        "expectedOutput": "42 42",
        "explanation": "Singleton array."
      },
      {
        "id": "tc-p0-011-3",
        "input": "4\n-10 -5 -20 -1",
        "expectedOutput": "-20 -1",
        "explanation": "All negative values."
      },
      {
        "id": "tc-p0-011-4",
        "input": "6\n5 5 5 5 5 5",
        "expectedOutput": "5 5",
        "explanation": "All identical elements."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-012",
    "slug": "accepts-two-integers-and-returns",
    "title": "Compute GCD and LCM",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Math",
      "Number Theory",
      "Euclidean Algorithm"
    ],
    "difficulty": "Warm-up",
    "order": 12,
    "statement": "### Problem Description\n\nGiven two non-negative integers $A$ and $B$ (not both zero), calculate their Greatest Common Divisor ($\\gcd(A, B)$) and Least Common Multiple ($\\text{lcm}(A, B)$).\n\nRecall:\n$$\\text{lcm}(A, B) = \\frac{A \\times B}{\\gcd(A, B)}$$\nIf either $A = 0$ or $B = 0$, $\\text{lcm}(A, B) = 0$.\n\n### Input Format\nA single line containing two space-separated integers $A$ and $B$.\n\n### Output Format\nPrint two space-separated integers: $\\gcd(A, B)$ followed by $\\text{lcm}(A, B)$.",
    "examples": [
      {
        "input": "12 18",
        "output": "6 36",
        "explanation": "gcd(12, 18) = 6. lcm(12, 18) = (12 * 18) / 6 = 36."
      },
      {
        "input": "7 13",
        "output": "1 91",
        "explanation": "7 and 13 are coprime, so gcd is 1 and lcm is 7 * 13 = 91."
      },
      {
        "input": "15 0",
        "output": "15 0",
        "explanation": "gcd(15, 0) = 15; lcm with 0 is 0."
      }
    ],
    "constraints": [
      "0 <= A, B <= 10^9 (not both zero)",
      "Time complexity target: O(log(min(A, B)))",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Euclidean Algorithm",
        "content": "Repeatedly replace (a, b) with (b, a % b) until b becomes 0. The remaining a is gcd."
      },
      {
        "level": 2,
        "title": "LCM Formula",
        "content": "To prevent integer overflow, divide before multiplying: lcm = (a / gcd) * b."
      },
      {
        "level": 3,
        "title": "Zero Handling",
        "content": "If either a or b is 0, lcm is 0."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Repeated subtraction Euclidean algorithm takes O(max(A, B)) in worst case.",
        "timeComplexity": "O(max(A, B))",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "Mod-based Euclidean algorithm halves arguments roughly every two steps, running in O(log(min(A, B))).",
        "algorithm": "Compute g = gcd(A, B). If A == 0 or B == 0, lcm = 0; else lcm = (A / g) * B. Print g and lcm.",
        "steps": [
          {
            "title": "Step 1 — Compute GCD",
            "content": "Use while (b != 0) { a %= b; swap(a, b); }."
          },
          {
            "title": "Step 2 — Compute LCM",
            "content": "Evaluate (A / g) * B using 64-bit integers."
          }
        ],
        "timeComplexity": "O(log(min(A, B)))",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long a, b;\n    if (cin >> a >> b) {\n        // TODO: Compute and print GCD and LCM\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nlong long get_gcd(long long a, long long b) {\n    while (b != 0) {\n        long long rem = a % b;\n        a = b;\n        b = rem;\n    }\n    return a;\n}\n\nint main() {\n    long long a, b;\n    if (cin >> a >> b) {\n        long long g = get_gcd(a, b);\n        long long l = (a == 0 || b == 0) ? 0 : (a / g) * b;\n        cout << g << \" \" << l << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\nimport math\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    a, b = int(tokens[0]), int(tokens[1])\n    # TODO: Print GCD and LCM\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\nimport math\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    a, b = int(tokens[0]), int(tokens[1])\n    g = math.gcd(a, b)\n    l = 0 if (a == 0 or b == 0) else (a // g) * b\n    print(g, l)\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How does the Extended Euclidean algorithm compute modular inverses in cryptography?",
    "testCases": [
      {
        "id": "tc-p0-012-1",
        "input": "12 18",
        "expectedOutput": "6 36",
        "explanation": "Common factors."
      },
      {
        "id": "tc-p0-012-2",
        "input": "7 13",
        "expectedOutput": "1 91",
        "explanation": "Coprime numbers."
      },
      {
        "id": "tc-p0-012-3",
        "input": "15 0",
        "expectedOutput": "15 0",
        "explanation": "One operand is zero."
      },
      {
        "id": "tc-p0-012-4",
        "input": "24 60",
        "expectedOutput": "12 120",
        "explanation": "GCD 12, LCM 120."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-013",
    "slug": "list-of-numbers-write-pseudocode",
    "title": "Detect Duplicate Elements in Array",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Arrays",
      "Hashing",
      "Sorting",
      "Duplicates"
    ],
    "difficulty": "Warm-up",
    "order": 13,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, determine whether any element occurs more than once.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint `true` if at least one number appears more than once, or `false` if all elements are distinct.",
    "examples": [
      {
        "input": "5\n1 2 3 4 2",
        "output": "true",
        "explanation": "The number 2 appears twice."
      },
      {
        "input": "4\n1 2 3 4",
        "output": "false",
        "explanation": "All elements are distinct."
      },
      {
        "input": "1\n99",
        "output": "false",
        "explanation": "An array of size 1 cannot contain duplicates."
      }
    ],
    "constraints": [
      "1 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N log N) or O(N)",
      "Auxiliary space target: O(N) or O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Sorting Approach",
        "content": "Sorting places identical elements adjacent to each other. Check if A[i] == A[i+1]."
      },
      {
        "level": 2,
        "title": "Hash Set Approach",
        "content": "Insert elements into an unordered hash set. If an element is already present, return true immediately."
      },
      {
        "level": 3,
        "title": "Early Exit",
        "content": "Terminate as soon as the first duplicate is discovered."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Nested loops checking all O(N^2) pairs for equality.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "Sorting the array takes O(N log N) and O(1) auxiliary space, or an unordered_set takes O(N) expected time.",
        "algorithm": "Sort the array. Iterate from 1 to N-1. If A[i] == A[i-1], return true. If loop completes, return false.",
        "steps": [
          {
            "title": "Step 1 — Sort Array",
            "content": "Sort the N integers in non-decreasing order."
          },
          {
            "title": "Step 2 — Adjacent Comparison",
            "content": "Scan adjacent pairs. If any pair matches, output true."
          }
        ],
        "timeComplexity": "O(N log N)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        // TODO: Determine whether array contains duplicates\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<long long> a(n);\n        for (int i = 0; i < n; i++) {\n            cin >> a[i];\n        }\n        sort(a.begin(), a.end());\n        bool hasDup = false;\n        for (int i = 1; i < n; i++) {\n            if (a[i] == a[i - 1]) {\n                hasDup = true;\n                break;\n            }\n        }\n        cout << (hasDup ? \"true\" : \"false\") << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    arr = list(map(int, tokens[1:n+1]))\n    # TODO: Print true if duplicates exist, else false\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    arr = list(map(int, tokens[1:n+1]))\n    has_dup = len(set(arr)) < len(arr)\n    print(\"true\" if has_dup else \"false\")\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you detect duplicates in O(N) time and O(1) extra space if numbers are constrained in [1, N]?",
    "testCases": [
      {
        "id": "tc-p0-013-1",
        "input": "5\n1 2 3 4 2",
        "expectedOutput": "true",
        "explanation": "Contains duplicate 2."
      },
      {
        "id": "tc-p0-013-2",
        "input": "4\n1 2 3 4",
        "expectedOutput": "false",
        "explanation": "All distinct."
      },
      {
        "id": "tc-p0-013-3",
        "input": "1\n99",
        "expectedOutput": "false",
        "explanation": "Singleton array."
      },
      {
        "id": "tc-p0-013-4",
        "input": "6\n10 20 30 10 40 50",
        "expectedOutput": "true",
        "explanation": "Contains duplicate 10."
      },
      {
        "id": "tc-p0-013-5",
        "input": "3\n-5 0 -5",
        "expectedOutput": "true",
        "explanation": "Negative duplicate values."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-014",
    "slug": "function-with-nested-loops-and-determine",
    "title": "Count Nested Loop Iterations",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Complexity Analysis",
      "Math",
      "Loops"
    ],
    "difficulty": "Warm-up",
    "order": 14,
    "statement": "### Problem Description\n\nConsider the following nested loop structure:\n```cpp\nlong long count = 0;\nfor (int i = 1; i <= N; i++) {\n    for (int j = 1; j <= i; j++) {\n        count++;\n    }\n}\n```\nGiven a non-negative integer $N$, calculate the exact final value of `count`.\nNotice that the total number of inner loop executions is the arithmetic series:\n$$\\text{count} = \\sum_{i=1}^{N} i = \\frac{N(N + 1)}{2}$$\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 10^6$).\n\n### Output Format\nPrint the total number of iterations as a 64-bit integer.",
    "examples": [
      {
        "input": "4",
        "output": "10",
        "explanation": "Inner loop runs 1 + 2 + 3 + 4 = 10 times."
      },
      {
        "input": "0",
        "output": "0",
        "explanation": "When N = 0, the outer loop never executes."
      },
      {
        "input": "1",
        "output": "1",
        "explanation": "When N = 1, exactly 1 iteration occurs."
      }
    ],
    "constraints": [
      "0 <= N <= 10^6",
      "Time complexity target: O(1)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Formula Derivation",
        "content": "The inner loop runs 1 time when i=1, 2 times when i=2, ..., N times when i=N. Total = 1 + 2 + ... + N."
      },
      {
        "level": 2,
        "title": "Avoid O(N^2) Simulation",
        "content": "Running the actual nested loops for N = 10^6 would require ~5 * 10^11 operations, exceeding the 2-second time limit. Use the O(1) mathematical formula."
      },
      {
        "level": 3,
        "title": "64-bit Arithmetic",
        "content": "For N = 10^6, count = 10^12 / 2 = 5 * 10^11. Use long long."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Simulating the nested loops directly takes O(N^2) time, which times out for N = 10^6.",
        "timeComplexity": "O(N^2)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "The arithmetic sum closed form N * (N + 1) / 2 evaluates in O(1) time directly.",
        "algorithm": "Read N. Compute ans = (N * (N + 1)) / 2 as a 64-bit integer. Print ans.",
        "steps": [
          {
            "title": "Step 1 — Parse N",
            "content": "Read N from standard input."
          },
          {
            "title": "Step 2 — Closed-form Calculation",
            "content": "Evaluate N * (N + 1) / 2."
          }
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        // TODO: Compute total inner loop iterations\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nint main() {\n    long long n;\n    if (cin >> n) {\n        long long ans = (n * (n + 1)) / 2;\n        cout << ans << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    # TODO: Compute total inner loop iterations\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    print(n * (n + 1) // 2)\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "What would be the closed-form iteration count if the inner loop condition was j <= i * i?",
    "testCases": [
      {
        "id": "tc-p0-014-1",
        "input": "4",
        "expectedOutput": "10",
        "explanation": "Small input."
      },
      {
        "id": "tc-p0-014-2",
        "input": "0",
        "expectedOutput": "0",
        "explanation": "N = 0 boundary."
      },
      {
        "id": "tc-p0-014-3",
        "input": "1",
        "expectedOutput": "1",
        "explanation": "N = 1 boundary."
      },
      {
        "id": "tc-p0-014-4",
        "input": "5",
        "expectedOutput": "15",
        "explanation": "Sum 1 to 5."
      },
      {
        "id": "tc-p0-014-5",
        "input": "1000",
        "expectedOutput": "500500",
        "explanation": "N = 1000."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-015",
    "slug": "calculates-the-sum-of-integers",
    "title": "Recursive Sum and Factorial",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Recursion",
      "Math",
      "Functions"
    ],
    "difficulty": "Warm-up",
    "order": 15,
    "statement": "### Problem Description\n\nGiven a non-negative integer $N$, compute two recursive mathematical quantities:\n1. The recursive sum $S(N) = 1 + 2 + \\dots + N$ (with $S(0) = 0$).\n2. The factorial $F(N) = N! = N \\times (N-1) \\times \\dots \\times 1$ (with $F(0) = 1$).\n\n### Input Format\nA single line containing an integer $N$ ($0 \\le N \\le 20$).\n\n### Output Format\nPrint two space-separated integers: $S(N)$ followed by $F(N)$.",
    "examples": [
      {
        "input": "5",
        "output": "15 120",
        "explanation": "Sum = 1 + 2 + 3 + 4 + 5 = 15. Factorial = 5! = 120."
      },
      {
        "input": "0",
        "output": "0 1",
        "explanation": "Base cases: sum of 0 numbers is 0, and 0! = 1."
      },
      {
        "input": "3",
        "output": "6 6",
        "explanation": "Sum = 1 + 2 + 3 = 6. Factorial = 3! = 6."
      }
    ],
    "constraints": [
      "0 <= N <= 20",
      "Time complexity target: O(N)",
      "Auxiliary space target: O(N) call stack"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Base Case Definition",
        "content": "For sum: S(0) = 0, S(n) = n + S(n - 1). For factorial: F(0) = 1, F(n) = n * F(n - 1)."
      },
      {
        "level": 2,
        "title": "64-bit Return Type",
        "content": "20! is approximately 2.43 * 10^18, which fits inside an unsigned/signed 64-bit integer (long long in C++)."
      },
      {
        "level": 3,
        "title": "Tracing the Stack",
        "content": "Each call pushes a frame onto the stack until n reaches 0, returning and unwinding."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Implement recursive functions with base case at n = 0.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N) stack space"
      },
      "optimal": {
        "keyObservation": "Recursive formulations S(n) = n + S(n-1) and F(n) = n * F(n-1) directly model the definitions.",
        "algorithm": "Define recursive sum and factorial functions. Evaluate both for N and print space-separated.",
        "steps": [
          {
            "title": "Step 1 — Recursive Sum",
            "content": "If N == 0 return 0, else return N + sum(N - 1)."
          },
          {
            "title": "Step 2 — Recursive Factorial",
            "content": "If N == 0 return 1, else return N * factorial(N - 1)."
          }
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(N)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\n// TODO: Implement recursive sum\nlong long recSum(int n) {\n    return 0;\n}\n\n// TODO: Implement recursive factorial\nlong long recFact(int n) {\n    return 1;\n}\n\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << recSum(n) << \" \" << recFact(n) << \"\\n\";\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nlong long recSum(int n) {\n    if (n <= 0) return 0;\n    return n + recSum(n - 1);\n}\n\nlong long recFact(int n) {\n    if (n <= 0) return 1;\n    return (long long)n * recFact(n - 1);\n}\n\nint main() {\n    int n;\n    if (cin >> n) {\n        cout << recSum(n) << \" \" << recFact(n) << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef rec_sum(n):\n    # TODO: Implement recursive sum\n    return 0\n\ndef rec_fact(n):\n    # TODO: Implement recursive factorial\n    return 1\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    print(rec_sum(n), rec_fact(n))\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef rec_sum(n):\n    if n <= 0:\n        return 0\n    return n + rec_sum(n - 1)\n\ndef rec_fact(n):\n    if n <= 0:\n        return 1\n    return n * rec_fact(n - 1)\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    print(rec_sum(n), rec_fact(n))\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How can tail-call optimization transform these recursive functions to execute in O(1) stack space?",
    "testCases": [
      {
        "id": "tc-p0-015-1",
        "input": "5",
        "expectedOutput": "15 120",
        "explanation": "N = 5."
      },
      {
        "id": "tc-p0-015-2",
        "input": "0",
        "expectedOutput": "0 1",
        "explanation": "N = 0 base cases."
      },
      {
        "id": "tc-p0-015-3",
        "input": "3",
        "expectedOutput": "6 6",
        "explanation": "N = 3."
      },
      {
        "id": "tc-p0-015-4",
        "input": "1",
        "expectedOutput": "1 1",
        "explanation": "N = 1."
      },
      {
        "id": "tc-p0-015-5",
        "input": "10",
        "expectedOutput": "55 3628800",
        "explanation": "10! = 3628800."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-016",
    "slug": "student-class-with-fields-a-constructor",
    "title": "Student Pass or Fail Evaluator",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "OOP",
      "Classes",
      "Conditions",
      "Records"
    ],
    "difficulty": "Warm-up",
    "order": 16,
    "statement": "### Problem Description\n\nGiven a student's `name` and their scores in three exams: $s_1, s_2, s_3$.\nCalculate their average score truncated (rounded down) to the nearest integer.\n\nThe student **passes** (`PASS`) if and only if:\n1. Their integer average is $\\ge 50$, AND\n2. Every individual subject score is $\\ge 40$.\n\nOtherwise, the student fails (`FAIL`).\n\n### Input Format\n- Line 1: A single-word string `name` (without spaces).\n- Line 2: Three space-separated integers $s_1, s_2, s_3$ ($0 \\le s_i \\le 100$).\n\n### Output Format\nPrint a single line containing `name`, the integer average score, and the result (`PASS` or `FAIL`), separated by spaces.",
    "examples": [
      {
        "input": "Alice\n85 90 78",
        "output": "Alice 84 PASS",
        "explanation": "Average = (85 + 90 + 78) / 3 = 253 / 3 = 84. Average >= 50 and all scores >= 40, so PASS."
      },
      {
        "input": "Bob\n35 95 90",
        "output": "Bob 73 FAIL",
        "explanation": "Average = 220 / 3 = 73 >= 50, but subject 1 score is 35 < 40, so FAIL."
      },
      {
        "input": "Charlie\n45 45 45",
        "output": "Charlie 45 FAIL",
        "explanation": "All scores >= 40, but average is 45 < 50, so FAIL."
      }
    ],
    "constraints": [
      "1 <= length(name) <= 50",
      "0 <= s1, s2, s3 <= 100",
      "Time complexity target: O(1)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Integer Division Truncation",
        "content": "Sum the three scores and perform integer division by 3: avg = (s1 + s2 + s3) / 3."
      },
      {
        "level": 2,
        "title": "Composite Condition",
        "content": "Check (avg >= 50 && s1 >= 40 && s2 >= 40 && s3 >= 40)."
      },
      {
        "level": 3,
        "title": "Output Format",
        "content": "Print name, avg, and status separated by single spaces."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Model a student class or structure with methods for average and pass/fail status.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "Object-oriented encapsulation cleanly structures the student record attributes and evaluation methods.",
        "algorithm": "Encapsulate name and scores in a class. Compute integer average (s1+s2+s3)/3. Validate condition and print.",
        "steps": [
          {
            "title": "Step 1 — Parse Student Data",
            "content": "Read name and three exam scores."
          },
          {
            "title": "Step 2 — Evaluate Criteria",
            "content": "Calculate average and verify both average >= 50 and all individual scores >= 40."
          }
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int s1, s2, s3;\n\n    Student(string n, int a, int b, int c) : name(n), s1(a), s2(b), s3(c) {}\n\n    int getAverage() const {\n        return (s1 + s2 + s3) / 3;\n    }\n\n    bool hasPassed() const {\n        // TODO: Return true if passed, false otherwise\n        return false;\n    }\n};\n\nint main() {\n    string name;\n    int s1, s2, s3;\n    if (cin >> name >> s1 >> s2 >> s3) {\n        Student student(name, s1, s2, s3);\n        int avg = student.getAverage();\n        cout << student.name << \" \" << avg << \" \" << (student.hasPassed() ? \"PASS\" : \"FAIL\") << \"\\n\";\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int s1, s2, s3;\n\n    Student(string n, int a, int b, int c) : name(n), s1(a), s2(b), s3(c) {}\n\n    int getAverage() const {\n        return (s1 + s2 + s3) / 3;\n    }\n\n    bool hasPassed() const {\n        return getAverage() >= 50 && s1 >= 40 && s2 >= 40 && s3 >= 40;\n    }\n};\n\nint main() {\n    string name;\n    int s1, s2, s3;\n    if (cin >> name >> s1 >> s2 >> s3) {\n        Student student(name, s1, s2, s3);\n        int avg = student.getAverage();\n        cout << student.name << \" \" << avg << \" \" << (student.hasPassed() ? \"PASS\" : \"FAIL\") << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\nclass Student:\n    def __init__(self, name: str, s1: int, s2: int, s3: int):\n        self.name = name\n        self.s1 = s1\n        self.s2 = s2\n        self.s3 = s3\n\n    def average(self) -> int:\n        return (self.s1 + self.s2 + self.s3) // 3\n\n    def has_passed(self) -> bool:\n        # TODO: Implement pass/fail criteria\n        return False\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    name = tokens[0]\n    s1, s2, s3 = int(tokens[1]), int(tokens[2]), int(tokens[3])\n    student = Student(name, s1, s2, s3)\n    avg = student.average()\n    status = \"PASS\" if student.has_passed() else \"FAIL\"\n    print(f\"{student.name} {avg} {status}\")\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\nclass Student:\n    def __init__(self, name: str, s1: int, s2: int, s3: int):\n        self.name = name\n        self.s1 = s1\n        self.s2 = s2\n        self.s3 = s3\n\n    def average(self) -> int:\n        return (self.s1 + self.s2 + self.s3) // 3\n\n    def has_passed(self) -> bool:\n        return self.average() >= 50 and self.s1 >= 40 and self.s2 >= 40 and self.s3 >= 40\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    name = tokens[0]\n    s1, s2, s3 = int(tokens[1]), int(tokens[2]), int(tokens[3])\n    student = Student(name, s1, s2, s3)\n    avg = student.average()\n    status = \"PASS\" if student.has_passed() else \"FAIL\"\n    print(f\"{student.name} {avg} {status}\")\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you extend this to handle a dynamic list of N subjects with weighted credits?",
    "testCases": [
      {
        "id": "tc-p0-016-1",
        "input": "Alice\n85 90 78",
        "expectedOutput": "Alice 84 PASS",
        "explanation": "All criteria satisfied."
      },
      {
        "id": "tc-p0-016-2",
        "input": "Bob\n35 95 90",
        "expectedOutput": "Bob 73 FAIL",
        "explanation": "One score below 40."
      },
      {
        "id": "tc-p0-016-3",
        "input": "Charlie\n45 45 45",
        "expectedOutput": "Charlie 45 FAIL",
        "explanation": "Average below 50."
      },
      {
        "id": "tc-p0-016-4",
        "input": "David\n50 50 50",
        "expectedOutput": "David 50 PASS",
        "explanation": "Exact boundary pass."
      },
      {
        "id": "tc-p0-016-5",
        "input": "Eve\n40 40 70",
        "expectedOutput": "Eve 50 PASS",
        "explanation": "Scores equal to 40 with average 50."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-017",
    "slug": "rectangle-class-supporting-area-perimeter",
    "title": "Rectangle Area, Perimeter, and Comparison",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "OOP",
      "Geometry",
      "Classes",
      "Math"
    ],
    "difficulty": "Warm-up",
    "order": 17,
    "statement": "### Problem Description\n\nGiven the width and height of two rectangles $R_1$ and $R_2$:\n- Compute the area and perimeter of $R_1$.\n- Compute the area and perimeter of $R_2$.\n- Compare the two rectangles by area.\n\n### Input Format\n- Line 1: Two space-separated integers $w_1$ and $h_1$ (dimensions of $R_1$).\n- Line 2: Two space-separated integers $w_2$ and $h_2$ (dimensions of $R_2$).\n\n### Output Format\n- Line 1: Two space-separated integers: Area and Perimeter of $R_1$.\n- Line 2: Two space-separated integers: Area and Perimeter of $R_2$.\n- Line 3: `R1` if $R_1$ has strictly greater area, `R2` if $R_2$ has strictly greater area, or `Tie` if their areas are equal.",
    "examples": [
      {
        "input": "4 5\n3 6",
        "output": "20 18\n18 18\nR1",
        "explanation": "R1: area = 20, perimeter = 18. R2: area = 18, perimeter = 18. R1 area (20) > R2 area (18), so R1 wins."
      },
      {
        "input": "2 6\n3 4",
        "output": "12 16\n12 14\nTie",
        "explanation": "R1: area = 12. R2: area = 12. Areas are equal, output Tie."
      },
      {
        "input": "2 3\n5 5",
        "output": "6 10\n25 20\nR2",
        "explanation": "R1: area = 6. R2: area = 25. R2 has larger area."
      }
    ],
    "constraints": [
      "1 <= w1, h1, w2, h2 <= 10^4",
      "Time complexity target: O(1)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Formulas",
        "content": "Area = w * h. Perimeter = 2 * (w + h)."
      },
      {
        "level": 2,
        "title": "Comparison Logic",
        "content": "If area1 > area2 output R1. If area2 > area1 output R2. Else output Tie."
      },
      {
        "level": 3,
        "title": "Line Separation",
        "content": "Output R1 metrics on line 1, R2 metrics on line 2, and the winner on line 3."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Implement a Rectangle class with methods for area, perimeter, and area comparison.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "Encapsulating dimensions into a Rectangle class enables clean member functions for area and perimeter calculations.",
        "algorithm": "Construct R1(w1, h1) and R2(w2, h2). Output area and perimeter for each, then compare their areas.",
        "steps": [
          {
            "title": "Step 1 — Instantiation",
            "content": "Instantiate Rectangle objects with parsed dimensions."
          },
          {
            "title": "Step 2 — Metric Computation",
            "content": "Print area and perimeter for both rectangles."
          },
          {
            "title": "Step 3 — Comparison",
            "content": "Emit R1, R2, or Tie depending on area relationship."
          }
        ],
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n\nusing namespace std;\n\nclass Rectangle {\npublic:\n    long long width, height;\n\n    Rectangle(long long w, long long h) : width(w), height(h) {}\n\n    long long getArea() const {\n        return width * height;\n    }\n\n    long long getPerimeter() const {\n        return 2 * (width + height);\n    }\n};\n\nint main() {\n    long long w1, h1, w2, h2;\n    if (cin >> w1 >> h1 >> w2 >> h2) {\n        // TODO: Compute metrics and compare rectangles\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n\nusing namespace std;\n\nclass Rectangle {\npublic:\n    long long width, height;\n\n    Rectangle(long long w, long long h) : width(w), height(h) {}\n\n    long long getArea() const {\n        return width * height;\n    }\n\n    long long getPerimeter() const {\n        return 2 * (width + height);\n    }\n};\n\nint main() {\n    long long w1, h1, w2, h2;\n    if (cin >> w1 >> h1 >> w2 >> h2) {\n        Rectangle r1(w1, h1);\n        Rectangle r2(w2, h2);\n\n        cout << r1.getArea() << \" \" << r1.getPerimeter() << \"\\n\";\n        cout << r2.getArea() << \" \" << r2.getPerimeter() << \"\\n\";\n\n        if (r1.getArea() > r2.getArea()) {\n            cout << \"R1\\n\";\n        } else if (r2.getArea() > r1.getArea()) {\n            cout << \"R2\\n\";\n        } else {\n            cout << \"Tie\\n\";\n        }\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\nclass Rectangle:\n    def __init__(self, w: int, h: int):\n        self.w = w\n        self.h = h\n\n    def area(self) -> int:\n        return self.w * self.h\n\n    def perimeter(self) -> int:\n        return 2 * (self.w + self.h)\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    w1, h1, w2, h2 = map(int, tokens[:4])\n    # TODO: Print metrics and compare\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\nclass Rectangle:\n    def __init__(self, w: int, h: int):\n        self.w = w\n        self.h = h\n\n    def area(self) -> int:\n        return self.w * self.h\n\n    def perimeter(self) -> int:\n        return 2 * (self.w + self.h)\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    w1, h1, w2, h2 = map(int, tokens[:4])\n    r1 = Rectangle(w1, h1)\n    r2 = Rectangle(w2, h2)\n\n    print(f\"{r1.area()} {r1.perimeter()}\")\n    print(f\"{r2.area()} {r2.perimeter()}\")\n\n    if r1.area() > r2.area():\n        print(\"R1\")\n    elif r2.area() > r1.area():\n        print(\"R2\")\n    else:\n        print(\"Tie\")\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you overload the < and == operators in C++ to compare Rectangle instances naturally?",
    "testCases": [
      {
        "id": "tc-p0-017-1",
        "input": "4 5\n3 6",
        "expectedOutput": "20 18\n18 18\nR1",
        "explanation": "R1 strictly greater."
      },
      {
        "id": "tc-p0-017-2",
        "input": "2 6\n3 4",
        "expectedOutput": "12 16\n12 14\nTie",
        "explanation": "Equal area tie."
      },
      {
        "id": "tc-p0-017-3",
        "input": "2 3\n5 5",
        "expectedOutput": "6 10\n25 20\nR2",
        "explanation": "R2 strictly greater."
      },
      {
        "id": "tc-p0-017-4",
        "input": "10 10\n10 10",
        "expectedOutput": "100 40\n100 40\nTie",
        "explanation": "Identical squares tie."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  },
  {
    "id": "dsa-p0-018",
    "slug": "problem-statement-involving-a-list",
    "title": "Count and Sum of Even Elements",
    "topic": "Syntax, loops, conditions, functions, and pseudocode",
    "tags": [
      "Arrays",
      "Loops",
      "Math",
      "Filtering"
    ],
    "difficulty": "Warm-up",
    "order": 18,
    "statement": "### Problem Description\n\nGiven an array of $N$ integers, count the number of even integers present in the array and compute their sum.\n\nAn integer $x$ is even if $x \\pmod 2 = 0$.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$. (If $N = 0$, this line may be empty).\n\n### Output Format\nPrint two space-separated integers: the count of even numbers followed by their total sum.\nIf there are no even numbers (or $N = 0$), output `0 0`.",
    "examples": [
      {
        "input": "5\n1 2 3 4 6",
        "output": "3 12",
        "explanation": "Even numbers are 2, 4, and 6. Count is 3, sum is 2 + 4 + 6 = 12."
      },
      {
        "input": "3\n1 3 5",
        "output": "0 0",
        "explanation": "No even numbers exist in the array."
      },
      {
        "input": "0",
        "output": "0 0",
        "explanation": "The array is empty, so count and sum are both 0."
      }
    ],
    "constraints": [
      "0 <= N <= 10^5",
      "-10^9 <= A[i] <= 10^9",
      "Time complexity target: O(N)",
      "Auxiliary space target: O(1)"
    ],
    "hints": [
      {
        "level": 1,
        "title": "Parity Condition",
        "content": "Check x % 2 == 0 to detect even integers (remember negative even numbers also satisfy x % 2 == 0)."
      },
      {
        "level": 2,
        "title": "Sum Overflow",
        "content": "The sum of even numbers can exceed 32-bit limits; maintain the sum using a 64-bit integer (long long)."
      },
      {
        "level": 3,
        "title": "N = 0 Case",
        "content": "If N = 0, immediately output 0 0."
      }
    ],
    "solution": {
      "bruteForce": {
        "explanation": "Iterate through all array elements, checking parity and accumulating count and sum.",
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)"
      },
      "optimal": {
        "keyObservation": "A single linear pass filters elements by parity and accumulates sum in 64-bit precision.",
        "algorithm": "Initialize count = 0, sum = 0. For each x in A: if x % 2 == 0: count++, sum += x. Output count and sum.",
        "steps": [
          {
            "title": "Step 1 — Parse Inputs",
            "content": "Read N, then read array elements if N > 0."
          },
          {
            "title": "Step 2 — Parity Filter",
            "content": "For each element x with x % 2 == 0, increment count and add to running total."
          },
          {
            "title": "Step 3 — Output Result",
            "content": "Print count and sum separated by space."
          }
        ],
        "timeComplexity": "O(N)",
        "spaceComplexity": "O(1)"
      }
    },
    "code": [
      {
        "language": "cpp",
        "starterCode": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        // TODO: Count even numbers and compute their sum\n    }\n    return 0;\n}",
        "source": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        long long count = 0;\n        long long sum = 0;\n        for (int i = 0; i < n; i++) {\n            long long x;\n            cin >> x;\n            if (x % 2 == 0) {\n                count++;\n                sum += x;\n            }\n        }\n        cout << count << \" \" << sum << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        "language": "python",
        "starterCode": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    # TODO: Count even numbers and compute their sum\n    pass\n\nif __name__ == '__main__':\n    solve()",
        "source": "import sys\n\ndef solve():\n    tokens = sys.stdin.read().split()\n    if not tokens:\n        return\n    n = int(tokens[0])\n    count = 0\n    total = 0\n    for i in range(1, n + 1):\n        x = int(tokens[i])\n        if x % 2 == 0:\n            count += 1\n            total += x\n    print(count, total)\n\nif __name__ == '__main__':\n    solve()"
      }
    ],
    "followUp": "How would you partition the array in-place so all even numbers appear before odd numbers?",
    "testCases": [
      {
        "id": "tc-p0-018-1",
        "input": "5\n1 2 3 4 6",
        "expectedOutput": "3 12",
        "explanation": "Three even numbers 2, 4, 6."
      },
      {
        "id": "tc-p0-018-2",
        "input": "3\n1 3 5",
        "expectedOutput": "0 0",
        "explanation": "No even numbers."
      },
      {
        "id": "tc-p0-018-3",
        "input": "0",
        "expectedOutput": "0 0",
        "explanation": "Empty array."
      },
      {
        "id": "tc-p0-018-4",
        "input": "4\n-2 4 -6 8",
        "expectedOutput": "4 4",
        "explanation": "Negative and positive even numbers."
      },
      {
        "id": "tc-p0-018-5",
        "input": "4\n2 2 2 2",
        "expectedOutput": "4 8",
        "explanation": "All even numbers."
      }
    ],
    "limits": {
      "timeLimitMs": 2000,
      "memoryLimitMb": 256,
      "outputLimitMb": 1
    }
  }
];
