import type { DsaProblem } from '@/types/dsa-question';

export const validParenthesesProblem: DsaProblem = {
  id: 'dsa-006',
  slug: 'valid-parentheses',
  title: 'Valid Parentheses',
  topic: 'Stacks & Queues',
  tags: ['Stack', 'String'],
  difficulty: 'Easy',
  order: 6,
  statement:
    'Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.',
  examples: [
    {
      input: 's = "()"',
      output: 'true',
      explanation: 'Single matching pair of parentheses.',
    },
    {
      input: 's = "()[]{}"',
      output: 'true',
      explanation: 'Sequential matching pairs of all three bracket types.',
    },
    {
      input: 's = "(]"',
      output: 'false',
      explanation: 'Opening parenthesis closed by bracket mismatch.',
    },
    {
      input: 's = "([])"',
      output: 'true',
      explanation: 'Properly nested brackets.',
    },
  ],
  constraints: [
    '1 <= s.length <= 10^4',
    "s consists of parentheses only '()[]{}'.",
  ],
  hints: [
    {
      level: 1,
      title: 'LIFO Ordering',
      content:
        'When you encounter a closing bracket, which opening bracket should it match? Notice that the MOST RECENTLY opened bracket must be the FIRST one closed.',
    },
    {
      level: 2,
      title: 'Stack Data Structure',
      content:
        'A Stack naturally models this "Last In, First Out" requirement. Push opening brackets onto the stack. When seeing a closing bracket, inspect the top of the stack.',
    },
    {
      level: 3,
      title: 'Validation Criteria',
      content:
        'If the stack is empty when seeing a closing bracket, return false (unmatched closer). If the top bracket does not match the closer type, return false. After iterating the entire string, the stack must be empty (all opened brackets resolved).',
    },
  ],
  solution: {
    bruteForce: {
      explanation:
        'Repeatedly replace occurrences of "()", "[]", and "{}" with an empty string until none remain. If the string becomes empty, it was valid. Takes O(n^2) time due to repeated string scanning and copying.',
      timeComplexity: 'O(n^2)',
      spaceComplexity: 'O(n)',
    },
    optimal: {
      keyObservation:
        'The most recently encountered opening bracket must match the next closing bracket. A stack provides O(1) push and pop operations to check pairs in linear time.',
      algorithm:
        'Iterate through the string. Push opening brackets `(`, `{`, `[` onto a stack. For closing brackets, check that the stack is non-empty and the top matches the corresponding opener, then pop. Check stack is empty at end.',
      steps: [
        {
          title: 'Step 1 — Stack Instantiation',
          content: 'Create `std::stack<char> st`.',
        },
        {
          title: 'Step 2 — Push / Pop Matching',
          content: 'If character is an opener, `st.push(c)`. Else if `st.empty()` or top mismatch, return `false`. Otherwise `st.pop()`.',
        },
        {
          title: 'Step 3 — Emptiness Invariant',
          content: 'Return `st.empty()`. A non-empty stack means unclosed opening brackets remained.',
        },
      ],
      correctness:
        'Every valid bracket pair is cancelled out immediately upon its closing token. Any crossing or improperly nested brackets are caught at the mismatch point.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
    },
  },
  code: [
    {
      language: 'cpp',
      starterCode: `#include <string>
#include <stack>

class Solution {
public:
    bool isValid(std::string s) {
        // Return true if brackets are valid
        return false;
    }
};`,
      source: `#include <string>
#include <stack>

class Solution {
public:
    bool isValid(std::string s) {
        std::stack<char> st;

        for (char c : s) {
            if (c == '(' || c == '{' || c == '[') {
                st.push(c);
            } else {
                if (st.empty()) return false;
                char top = st.top();
                if ((c == ')' && top != '(') ||
                    (c == '}' && top != '{') ||
                    (c == ']' && top != '[')) {
                    return false;
                }
                st.pop();
            }
        }

        return st.empty();
    }
};`,
    },
    {
      language: 'python',
      starterCode: `class Solution:
    def isValid(self, s: str) -> bool:
        pass`,
      source: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}
        
        for char in s:
            if char in mapping:
                top = stack.pop() if stack else '#'
                if mapping[char] != top:
                    return False
            else:
                stack.append(char)
                
        return len(stack) == 0`,
    },
  ],
  followUp:
    'What changes if the string also contains asterisks `*` which can act as `(`, `)`, or an empty string (Valid Parenthesis String)? Can you solve it greedily in O(n) time and O(1) space?',
  testCases: [
    {
      id: 'tc-1',
      input: 's = "()"',
      expectedOutput: 'true',
      explanation: 'Simple pair',
    },
    {
      id: 'tc-2',
      input: 's = "()[]{}"',
      expectedOutput: 'true',
      explanation: 'Multiple bracket types',
    },
    {
      id: 'tc-3',
      input: 's = "(]"',
      expectedOutput: 'false',
      explanation: 'Mismatched closing bracket',
    },
    {
      id: 'tc-4',
      input: 's = "([)]"',
      expectedOutput: 'false',
      explanation: 'Improper nesting',
    },
  ],
  prerequisites: ['Stack', 'LIFO Principle'],
  relatedSlugs: ['find-max-min', 'two-sum'],
};
