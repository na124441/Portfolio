import type { DsaProblem } from '../../src/types/dsa-question';

export const PHASE_1_ARRAYS: DsaProblem[] = [
  {
    id: 'dsa-p1-001',
    slug: 'implement-dynamic-integer-array-from-scratch-using',
    title: 'Dynamic Array with Fixed Initial Capacity',
    topic: 'Arrays and Vectors',
    tags: ['Array', 'Design', 'Data Structures'],
    difficulty: 'Warm-up',
    order: 19,
    statement: `### Problem Description

Implement a basic dynamic integer array from scratch using an initial fixed buffer of capacity 4.

Support the following $Q$ query operations:
- \`push x\`: Append integer $x$ to the end of the array.
- \`get i\`: Print the element at 0-based index $i$. If $i$ is out of bounds, print \`-1\`.
- \`size\`: Print the current number of elements stored.
- \`print\`: Print all stored elements in order separated by spaces. If empty, print \`EMPTY\`.

### Input Format
- Line 1: An integer $Q$ ($1 \\le Q \\le 10^4$), the number of operations.
- Next $Q$ lines: Each line contains one of the operations (\`push x\`, \`get i\`, \`size\`, or \`print\`).

### Output Format
For each \`get\`, \`size\`, and \`print\` operation, print the result on a new line.`,
    examples: [
      {
        input: '5\npush 10\npush 20\nsize\nget 1\nprint',
        output: '2\n20\n10 20',
        explanation: 'After pushing 10 and 20, size is 2. Element at index 1 is 20. All elements are 10 20.',
      },
      {
        input: '3\nprint\nget 0\nsize',
        output: 'EMPTY\n-1\n0',
        explanation: 'For an empty array: print yields EMPTY, get 0 yields -1 (out of bounds), size yields 0.',
      },
      {
        input: '6\npush 5\npush 15\npush 25\nget 2\nget 3\nsize',
        output: '25\n-1\n3',
        explanation: 'Elements at indices 0, 1, 2 are 5, 15, 25. Index 3 is out of bounds (-1). Size is 3.',
      },
    ],
    constraints: [
      '1 <= Q <= 10^4',
      '-10^9 <= x <= 10^9',
      'Time complexity per operation: O(1) amortized',
      'Auxiliary space target: O(N)',
    ],
    hints: [
      {
        level: 1,
        title: 'Maintaining Size and Buffer',
        content: 'Keep track of an integer size and an allocated buffer array. When size reaches capacity, allocate a larger buffer.',
      },
      {
        level: 2,
        title: 'Bounds Checking',
        content: 'In get(i), verify 0 <= i < size before accessing buffer[i].',
      },
      {
        level: 3,
        title: 'Printing Elements',
        content: 'When size == 0, output EMPTY. Otherwise, print elements from index 0 to size - 1.',
      },
    ],
    solution: {
      bruteForce: {
        explanation: 'Reallocate array on every single insertion.',
        timeComplexity: 'O(Q^2)',
        spaceComplexity: 'O(N)',
      },
      optimal: {
        keyObservation: 'Doubling capacity upon reaching capacity ensures O(1) amortized time per push.',
        algorithm: 'Store size and capacity. When size == capacity, double capacity and copy. Access elements directly in O(1).',
        steps: [
          { title: 'Step 1 — Buffer Initialization', content: 'Initialize capacity to 4 and size to 0.' },
          { title: 'Step 2 — Operation Dispatch', content: 'Handle push, get, size, and print commands.' },
        ],
        timeComplexity: 'O(1) amortized per operation',
        spaceComplexity: 'O(N)',
      },
    },
    code: [
      {
        language: 'cpp',
        starterCode: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int q;
    if (cin >> q) {
        // TODO: Implement dynamic array operations
    }
    return 0;
}`,
        source: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

class DynamicArray {
    int* data;
    int sz;
    int cap;

    void resize() {
        cap *= 2;
        int* next = new int[cap];
        for (int i = 0; i < sz; i++) next[i] = data[i];
        delete[] data;
        data = next;
    }

public:
    DynamicArray() : sz(0), cap(4) {
        data = new int[cap];
    }
    ~DynamicArray() {
        delete[] data;
    }

    void push(int x) {
        if (sz == cap) resize();
        data[sz++] = x;
    }

    int get(int i) {
        if (i < 0 || i >= sz) return -1;
        return data[i];
    }

    int size() {
        return sz;
    }

    void print() {
        if (sz == 0) {
            cout << "EMPTY\\n";
            return;
        }
        for (int i = 0; i < sz; i++) {
            cout << data[i] << (i == sz - 1 ? "" : " ");
        }
        cout << "\\n";
    }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int q;
    if (cin >> q) {
        DynamicArray arr;
        while (q--) {
            string op;
            cin >> op;
            if (op == "push") {
                int x; cin >> x;
                arr.push(x);
            } else if (op == "get") {
                int i; cin >> i;
                cout << arr.get(i) << "\\n";
            } else if (op == "size") {
                cout << arr.size() << "\\n";
            } else if (op == "print") {
                arr.print();
            }
        }
    }
    return 0;
}`,
      },
      {
        language: 'python',
        starterCode: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if not tokens:
        return
    # TODO: Process dynamic array operations
    pass

if __name__ == '__main__':
    solve()`,
        source: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if not tokens:
        return
    it = iter(tokens)
    q = int(next(it))
    arr = []
    for _ in range(q):
        op = next(it)
        if op == "push":
            x = int(next(it))
            arr.append(x)
        elif op == "get":
            idx = int(next(it))
            if 0 <= idx < len(arr):
                print(arr[idx])
            else:
                print(-1)
        elif op == "size":
            print(len(arr))
        elif op == "print":
            if not arr:
                print("EMPTY")
            else:
                print(*(arr))

if __name__ == '__main__':
    solve()`,
      },
    ],
    followUp: 'How would you shrink the capacity when the array becomes sparse (size <= capacity / 4)?',
    testCases: [
      {
        id: 'tc-p1-001-1',
        input: '5\npush 10\npush 20\nsize\nget 1\nprint',
        expectedOutput: '2\n20\n10 20',
        explanation: 'Basic sequence.',
      },
      {
        id: 'tc-p1-001-2',
        input: '3\nprint\nget 0\nsize',
        expectedOutput: 'EMPTY\n-1\n0',
        explanation: 'Empty array behavior.',
      },
      {
        id: 'tc-p1-001-3',
        input: '6\npush 5\npush 15\npush 25\nget 2\nget 3\nsize',
        expectedOutput: '25\n-1\n3',
        explanation: 'Out of bounds get check.',
      },
      {
        id: 'tc-p1-001-4',
        input: '7\npush 1\npush 2\npush 3\npush 4\npush 5\nsize\nprint',
        expectedOutput: '5\n1 2 3 4 5',
        explanation: 'Capacity resize beyond 4.',
      },
    ],
    limits: {
      timeLimitMs: 2000,
      memoryLimitMb: 256,
      outputLimitMb: 1,
    },
  },
  {
    id: 'dsa-p1-002',
    slug: 'implementation-to-support-dynamic-resizing-when',
    title: 'Dynamic Array with Capacity Tracking',
    topic: 'Arrays and Vectors',
    tags: ['Array', 'Design', 'Amortized Analysis'],
    difficulty: 'Warm-up',
    order: 20,
    statement: `### Problem Description

Implement a resizable dynamic array with initial capacity $C = 2$ and size $0$.

Support $Q$ operations:
- \`push x\`: If size equals capacity, double capacity ($C \\leftarrow 2C$) and print \`RESIZE {new_capacity}\`. Then append $x$.
- \`capacity\`: Print current capacity.
- \`size\`: Print current size.
- \`print\`: Print all elements space-separated, or \`EMPTY\` if empty.

### Input Format
- Line 1: An integer $Q$ ($1 \\le Q \\le 10^4$).
- Next $Q$ lines: The operations to execute.

### Output Format
Print outputs for each query and resize event on a new line.`,
    examples: [
      {
        input: '6\npush 10\npush 20\ncapacity\npush 30\ncapacity\nsize',
        output: '2\nRESIZE 4\n4\n3',
        explanation: 'Pushes 10 and 20 fill capacity 2. Pushing 30 triggers RESIZE 4. Capacity is then 4, size 3.',
      },
      {
        input: '3\ncapacity\nsize\nprint',
        output: '2\n0\nEMPTY',
        explanation: 'Initial state has capacity 2, size 0, and is EMPTY.',
      },
      {
        input: '5\npush 1\npush 2\npush 3\npush 4\npush 5',
        output: 'RESIZE 4\nRESIZE 8',
        explanation: 'Resizes trigger at 3rd element (capacity 2->4) and 5th element (capacity 4->8).',
      },
    ],
    constraints: [
      '1 <= Q <= 10^4',
      '-10^9 <= x <= 10^9',
      'Time complexity per operation: O(1) amortized',
      'Auxiliary space target: O(N)',
    ],
    hints: [
      {
        level: 1,
        title: 'Resize Timing',
        content: 'Check whether size == capacity immediately before inserting the element.',
      },
      {
        level: 2,
        title: 'Geometric Doubling',
        content: 'Doubling capacity ensures total copying work across N elements is sum(2^i) <= 2N = O(N).',
      },
      {
        level: 3,
        title: 'Output Order',
        content: 'When resize happens during push, print RESIZE {cap} before proceeding.',
      },
    ],
    solution: {
      bruteForce: {
        explanation: 'Increment capacity by 1 on every push (arithmetic growth), leading to O(N^2) total copies.',
        timeComplexity: 'O(Q^2)',
        spaceComplexity: 'O(N)',
      },
      optimal: {
        keyObservation: 'Doubling capacity achieves O(1) amortized complexity per push operation.',
        algorithm: 'Maintain size and cap. When size == cap, cap *= 2, print message, copy elements. Append x and increment size.',
        steps: [
          { title: 'Step 1 — Check Capacity', content: 'If size == cap, double cap and output event.' },
          { title: 'Step 2 — Insert Element', content: 'Place x at data[size] and increment size.' },
        ],
        timeComplexity: 'O(1) amortized per push',
        spaceComplexity: 'O(N)',
      },
    },
    code: [
      {
        language: 'cpp',
        starterCode: `#include <iostream>
#include <string>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int q;
    if (cin >> q) {
        // TODO: Implement capacity tracking dynamic array
    }
    return 0;
}`,
        source: `#include <iostream>
#include <string>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int q;
    if (cin >> q) {
        int cap = 2;
        int sz = 0;
        int* data = new int[cap];

        while (q--) {
            string op;
            cin >> op;
            if (op == "push") {
                int x; cin >> x;
                if (sz == cap) {
                    cap *= 2;
                    cout << "RESIZE " << cap << "\\n";
                    int* next = new int[cap];
                    for (int i = 0; i < sz; i++) next[i] = data[i];
                    delete[] data;
                    data = next;
                }
                data[sz++] = x;
            } else if (op == "capacity") {
                cout << cap << "\\n";
            } else if (op == "size") {
                cout << sz << "\\n";
            } else if (op == "print") {
                if (sz == 0) {
                    cout << "EMPTY\\n";
                } else {
                    for (int i = 0; i < sz; i++) {
                        cout << data[i] << (i == sz - 1 ? "" : " ");
                    }
                    cout << "\\n";
                }
            }
        }
        delete[] data;
    }
    return 0;
}`,
      },
      {
        language: 'python',
        starterCode: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if not tokens:
        return
    # TODO: Implement capacity tracking dynamic array
    pass

if __name__ == '__main__':
    solve()`,
        source: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if not tokens:
        return
    it = iter(tokens)
    q = int(next(it))
    cap = 2
    arr = []
    for _ in range(q):
        op = next(it)
        if op == "push":
            x = int(next(it))
            if len(arr) == cap:
                cap *= 2
                print(f"RESIZE {cap}")
            arr.append(x)
        elif op == "capacity":
            print(cap)
        elif op == "size":
            print(len(arr))
        elif op == "print":
            if not arr:
                print("EMPTY")
            else:
                print(*(arr))

if __name__ == '__main__':
    solve()`,
      },
    ],
    followUp: 'Why is a growth factor of 1.5 (as used in folly/FBVector) often preferred over 2.0 to reuse freed memory chunks?',
    testCases: [
      {
        id: 'tc-p1-002-1',
        input: '6\npush 10\npush 20\ncapacity\npush 30\ncapacity\nsize',
        expectedOutput: '2\nRESIZE 4\n4\n3',
        explanation: 'Basic resizing event.',
      },
      {
        id: 'tc-p1-002-2',
        input: '3\ncapacity\nsize\nprint',
        expectedOutput: '2\n0\nEMPTY',
        explanation: 'Initial empty state.',
      },
      {
        id: 'tc-p1-002-3',
        input: '5\npush 1\npush 2\npush 3\npush 4\npush 5',
        expectedOutput: 'RESIZE 4\nRESIZE 8',
        explanation: 'Multiple resizes.',
      },
    ],
    limits: {
      timeLimitMs: 2000,
      memoryLimitMb: 256,
      outputLimitMb: 1,
    },
  },
  {
    id: 'dsa-p1-003',
    slug: 'array-print-every-element-along',
    title: 'Print Array Elements with Indices and Count',
    topic: 'Arrays and Vectors',
    tags: ['Array', 'Iteration', 'Basic Syntax'],
    difficulty: 'Warm-up',
    order: 21,
    statement: `### Problem Description

Given an array of $N$ integers, print each element along with its 0-based index formatted as \`Index {i}: {value}\` on separate lines.
Finally, print \`Total elements: {N}\` on the last line.

### Input Format
- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).
- Line 2: $N$ space-separated integers $A_0, A_1, \\dots, A_{N-1}$. (If $N = 0$, line 2 is empty).

### Output Format
- $N$ lines, each formatted as \`Index i: A[i]\`.
- Final line: \`Total elements: N\`.`,
    examples: [
      {
        input: '3\n10 20 30',
        output: 'Index 0: 10\nIndex 1: 20\nIndex 2: 30\nTotal elements: 3',
        explanation: 'Each element printed with 0-based index followed by total count 3.',
      },
      {
        input: '1\n42',
        output: 'Index 0: 42\nTotal elements: 1',
        explanation: 'Single element at index 0.',
      },
      {
        input: '0',
        output: 'Total elements: 0',
        explanation: 'Empty array prints only total elements: 0.',
      },
    ],
    constraints: [
      '0 <= N <= 10^5',
      '-10^9 <= A[i] <= 10^9',
      'Time complexity target: O(N)',
      'Auxiliary space target: O(1)',
    ],
    hints: [
      {
        level: 1,
        title: '0-based Loop',
        content: 'Iterate index i from 0 to N - 1.',
      },
      {
        level: 2,
        title: 'Formatting',
        content: 'Use standard string interpolation or stream formatting: "Index " << i << ": " << val.',
      },
      {
        level: 3,
        title: 'Handling N = 0',
        content: 'When N = 0, no elements are printed; simply output "Total elements: 0".',
      },
    ],
    solution: {
      bruteForce: {
        explanation: 'Iterate through array printing each element.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
      },
      optimal: {
        keyObservation: 'Single sequential pass outputs indices and values directly in O(N) time.',
        algorithm: 'Read N. Loop i from 0 to N-1: read A[i], print "Index i: A[i]". Finally print "Total elements: N".',
        steps: [
          { title: 'Step 1 — Loop Over Array', content: 'Traverse array from index 0 to N-1.' },
          { title: 'Step 2 — Emit Total Count', content: 'Output total count summary.' },
        ],
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
      },
    },
    code: [
      {
        language: 'cpp',
        starterCode: `#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        // TODO: Print elements with indices, then total elements
    }
    return 0;
}`,
        source: `#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        for (int i = 0; i < n; i++) {
            long long val;
            cin >> val;
            cout << "Index " << i << ": " << val << "\\n";
        }
        cout << "Total elements: " << n << "\\n";
    }
    return 0;
}`,
      },
      {
        language: 'python',
        starterCode: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if not tokens:
        return
    n = int(tokens[0])
    # TODO: Print elements with indices, then total elements
    pass

if __name__ == '__main__':
    solve()`,
        source: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if not tokens:
        return
    n = int(tokens[0])
    for i in range(n):
        print(f"Index {i}: {tokens[1 + i]}")
    print(f"Total elements: {n}")

if __name__ == '__main__':
    solve()`,
      },
    ],
    followUp: 'How would you stream process a dataset of 10^9 elements without loading all into RAM?',
    testCases: [
      {
        id: 'tc-p1-003-1',
        input: '3\n10 20 30',
        expectedOutput: 'Index 0: 10\nIndex 1: 20\nIndex 2: 30\nTotal elements: 3',
        explanation: 'Small array.',
      },
      {
        id: 'tc-p1-003-2',
        input: '1\n42',
        expectedOutput: 'Index 0: 42\nTotal elements: 1',
        explanation: 'Single element.',
      },
      {
        id: 'tc-p1-003-3',
        input: '0',
        expectedOutput: 'Total elements: 0',
        explanation: 'Empty input.',
      },
      {
        id: 'tc-p1-003-4',
        input: '4\n-5 0 5 10',
        expectedOutput: 'Index 0: -5\nIndex 1: 0\nIndex 2: 5\nIndex 3: 10\nTotal elements: 4',
        explanation: 'Mixed positive and negative values.',
      },
    ],
    limits: {
      timeLimitMs: 2000,
      memoryLimitMb: 256,
      outputLimitMb: 2,
    },
  },
  {
    id: 'dsa-p1-004',
    slug: 'minimum-and-maximum-element-in',
    title: 'Single Pass Min and Max with Comparisons',
    topic: 'Arrays and Vectors',
    tags: ['Array', 'Iteration', 'Extrema', 'Comparison Count'],
    difficulty: 'Warm-up',
    order: 22,
    statement: `### Problem Description

Given an array of $N$ integers ($N \\ge 1$), find the minimum and maximum element in a single traversal.
To evaluate comparison efficiency, process the array by comparing elements in pairs so that the total number of comparisons between array elements does not exceed $\\lceil 3N/2 \\rceil$.

### Input Format
- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).
- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.

### Output Format
- Line 1: Two space-separated integers: \`min_value max_value\`.
- Line 2: An integer representing the number of element comparisons performed.`,
    examples: [
      {
        input: '5\n3 1 9 7 2',
        output: '1 9\n6',
        explanation: 'Comparing elements in pairs: (3, 1) -> 1 comp; (9, 7) -> 1 comp; update min/max -> 4 comps; total 6 <= ceil(3*5/2)=8.',
      },
      {
        input: '1\n100',
        output: '100 100\n0',
        explanation: 'Single element requires 0 comparisons.',
      },
      {
        input: '2\n5 8',
        output: '5 8\n1',
        explanation: 'Comparing 5 and 8 takes 1 comparison.',
      },
    ],
    constraints: [
      '1 <= N <= 10^5',
      '-10^9 <= A[i] <= 10^9',
      'Time complexity target: O(N)',
      'Auxiliary space target: O(1)',
    ],
    hints: [
      {
        level: 1,
        title: 'Pairwise Tournament',
        content: 'Compare A[i] and A[i+1] first (1 comparison). Then compare the smaller against min_val, and the larger against max_val (2 comparisons). Total = 3 comparisons for every 2 elements.',
      },
      {
        level: 2,
        title: 'Odd vs Even Length',
        content: 'If N is odd, initialize min and max with A[0] (0 comps) and start pairing from index 1. If N is even, initialize by comparing A[0] and A[1] (1 comp).',
      },
      {
        level: 3,
        title: 'Tracking Comparison Count',
        content: 'Explicitly increment a comparisons counter each time two array elements are compared.',
      },
    ],
    solution: {
      bruteForce: {
        explanation: 'Compare every element against running min and max independently, taking 2(N-1) comparisons.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
      },
      optimal: {
        keyObservation: 'Pairwise grouping compares 2 elements in 3 comparisons instead of 4, cutting comparisons to ~1.5N.',
        algorithm: 'Initialize min and max from first element(s). For pairs (A[i], A[i+1]): compare pair (1 comp), then update min with smaller (1 comp) and max with larger (1 comp).',
        steps: [
          { title: 'Step 1 — Base Initialization', content: 'Set initial min and max based on N parity.' },
          { title: 'Step 2 — Pairwise Scanning', content: 'Advance by 2, performing 3 comparisons per pair.' },
        ],
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
      },
    },
    code: [
      {
        language: 'cpp',
        starterCode: `#include <iostream>
#include <vector>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        // TODO: Find min and max using pairwise comparison count
    }
    return 0;
}`,
        source: `#include <iostream>
#include <vector>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<long long> a(n);
        for (int i = 0; i < n; i++) cin >> a[i];

        if (n == 1) {
            cout << a[0] << " " << a[0] << "\\n0\\n";
            return 0;
        }

        long long mn, mx;
        int comps = 0;
        int start = 0;

        if (n % 2 == 0) {
            comps++;
            if (a[0] > a[1]) {
                mx = a[0]; mn = a[1];
            } else {
                mx = a[1]; mn = a[0];
            }
            start = 2;
        } else {
            mn = mx = a[0];
            start = 1;
        }

        for (int i = start; i < n; i += 2) {
            comps++;
            long long local_min, local_max;
            if (a[i] > a[i + 1]) {
                local_max = a[i]; local_min = a[i + 1];
            } else {
                local_max = a[i + 1]; local_min = a[i];
            }
            comps++;
            if (local_min < mn) mn = local_min;
            comps++;
            if (local_max > mx) mx = local_max;
        }

        cout << mn << " " << mx << "\\n";
        cout << comps << "\\n";
    }
    return 0;
}`,
      },
      {
        language: 'python',
        starterCode: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if not tokens:
        return
    n = int(tokens[0])
    # TODO: Find min and max with comparison count
    pass

if __name__ == '__main__':
    solve()`,
        source: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if not tokens:
        return
    n = int(tokens[0])
    a = list(map(int, tokens[1:n+1]))
    if n == 1:
        print(f"{a[0]} {a[0]}")
        print(0)
        return

    comps = 0
    if n % 2 == 0:
        comps += 1
        if a[0] > a[1]:
            mn, mx = a[1], a[0]
        else:
            mn, mx = a[0], a[1]
        start = 2
    else:
        mn = mx = a[0]
        start = 1

    for i in range(start, n, 2):
        comps += 1
        if a[i] > a[i+1]:
            loc_mx, loc_mn = a[i], a[i+1]
        else:
            loc_mx, loc_mn = a[i+1], a[i]
        comps += 1
        if loc_mn < mn:
            mn = loc_mn
        comps += 1
        if loc_mx > mx:
            mx = loc_mx

    print(f"{mn} {mx}")
    print(comps)

if __name__ == '__main__':
    solve()`,
      },
    ],
    followUp: 'Can any algorithm find both min and max of N elements in strictly fewer than ceil(3N/2) - 2 comparisons in the worst case?',
    testCases: [
      {
        id: 'tc-p1-004-1',
        input: '5\n3 1 9 7 2',
        expectedOutput: '1 9\n6',
        explanation: 'Odd length tournament.',
      },
      {
        id: 'tc-p1-004-2',
        input: '1\n100',
        expectedOutput: '100 100\n0',
        explanation: 'Singleton.',
      },
      {
        id: 'tc-p1-004-3',
        input: '2\n5 8',
        expectedOutput: '5 8\n1',
        explanation: 'Two elements.',
      },
      {
        id: 'tc-p1-004-4',
        input: '4\n10 20 30 40',
        expectedOutput: '10 40\n4',
        explanation: 'Even length tournament.',
      },
    ],
    limits: {
      timeLimitMs: 2000,
      memoryLimitMb: 256,
      outputLimitMb: 1,
    },
  },
  {
    id: 'dsa-p1-005',
    slug: 'sum-and-average-of-array-elements',
    title: 'Sum and Integer Average of Array Elements',
    topic: 'Arrays and Vectors',
    tags: ['Array', 'Math', 'Iteration'],
    difficulty: 'Warm-up',
    order: 23,
    statement: `### Problem Description

Given an array of $N$ integers ($N \\ge 1$), compute their total sum and their integer average truncated toward zero (i.e. $\\lfloor \\text{sum} / N \\rfloor$ for non-negative, and $\\lceil \\text{sum} / N \\rceil$ for negative, matching standard C++ integer division).

### Input Format
- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).
- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.

### Output Format
Print two space-separated integers: \`sum average\`.`,
    examples: [
      {
        input: '4\n10 20 30 40',
        output: '100 25',
        explanation: 'Sum = 10 + 20 + 30 + 40 = 100. Average = 100 / 4 = 25.',
      },
      {
        input: '3\n5 7 10',
        output: '22 7',
        explanation: 'Sum = 22. Integer division 22 / 3 = 7.',
      },
      {
        input: '3\n-10 -5 2',
        output: '-13 -4',
        explanation: 'Sum = -13. Truncated integer average -13 / 3 = -4.',
      },
    ],
    constraints: [
      '1 <= N <= 10^5',
      '-10^9 <= A[i] <= 10^9',
      'Time complexity target: O(N)',
      'Auxiliary space target: O(1)',
    ],
    hints: [
      {
        level: 1,
        title: '64-bit Accumulator',
        content: 'Sum can reach 10^5 * 10^9 = 10^14. Use long long in C++ to prevent signed 32-bit overflow.',
      },
      {
        level: 2,
        title: 'Truncation Toward Zero',
        content: 'Standard C++ division (/) truncates toward zero naturally. In Python, use int(sum / N).',
      },
      {
        level: 3,
        title: 'Single Linear Pass',
        content: 'Accumulate the sum in one loop over the array, then divide by N.',
      },
    ],
    solution: {
      bruteForce: {
        explanation: 'Accumulate sum using loop, then divide by N.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
      },
      optimal: {
        keyObservation: 'A single 64-bit linear accumulator avoids memory allocation and prevents overflow.',
        algorithm: 'Read N. Sum all elements in long long. Compute avg = sum / N (truncated toward zero). Output sum and avg.',
        steps: [
          { title: 'Step 1 — Accumulate Sum', content: 'Iterate across all N elements, maintaining total sum.' },
          { title: 'Step 2 — Integer Average', content: 'Divide total sum by N.' },
        ],
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
      },
    },
    code: [
      {
        language: 'cpp',
        starterCode: `#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        // TODO: Compute sum and integer average
    }
    return 0;
}`,
        source: `#include <iostream>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n && n > 0) {
        long long sum = 0;
        for (int i = 0; i < n; i++) {
            long long x; cin >> x;
            sum += x;
        }
        long long avg = sum / n;
        cout << sum << " " << avg << "\\n";
    }
    return 0;
}`,
      },
      {
        language: 'python',
        starterCode: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if not tokens:
        return
    n = int(tokens[0])
    # TODO: Print sum and average
    pass

if __name__ == '__main__':
    solve()`,
        source: `import sys

def solve():
    tokens = sys.stdin.read().split()
    if not tokens:
        return
    n = int(tokens[0])
    arr = [int(tokens[1 + i]) for i in range(n)]
    total = sum(arr)
    avg = int(total / n)
    print(f"{total} {avg}")

if __name__ == '__main__':
    solve()`,
      },
    ],
    followUp: 'How would you compute the running average of an infinite data stream using Welford’s algorithm?',
    testCases: [
      {
        id: 'tc-p1-005-1',
        input: '4\n10 20 30 40',
        expectedOutput: '100 25',
        explanation: 'Basic case.',
      },
      {
        id: 'tc-p1-005-2',
        input: '3\n5 7 10',
        expectedOutput: '22 7',
        explanation: 'Division with remainder truncated.',
      },
      {
        id: 'tc-p1-005-3',
        input: '3\n-10 -5 2',
        expectedOutput: '-13 -4',
        explanation: 'Negative sum truncated toward zero.',
      },
      {
        id: 'tc-p1-005-4',
        input: '1\n-99',
        expectedOutput: '-99 -99',
        explanation: 'Single negative element.',
      },
    ],
    limits: {
      timeLimitMs: 2000,
      memoryLimitMb: 256,
      outputLimitMb: 1,
    },
  },
];
