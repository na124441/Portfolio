import type { DsaProblem } from '@/types/dsa-question';

export const reverseArrayProblem: DsaProblem = {
  id: 'dsa-002',
  slug: 'reverse-array',
  title: 'Reverse an Array in Place',
  topic: 'Arrays & Strings',
  tags: ['Array', 'Two Pointers', 'In-Place'],
  difficulty: 'Warm-up',
  order: 2,
  statement:
    'Given an array of integers `nums`, reverse the elements in-place without allocating a second array of size $n$.\n\nModify `nums` directly so that the first element becomes the last, the second becomes the second to last, and so on.',
  examples: [
    {
      input: 'nums = [1, 2, 3, 4, 5]',
      output: '[5, 4, 3, 2, 1]',
      explanation: 'The array elements are inverted in order.',
    },
    {
      input: 'nums = [4, 7]',
      output: '[7, 4]',
      explanation: 'A two-element array swaps positions.',
    },
    {
      input: 'nums = [99]',
      output: '[99]',
      explanation: 'A single element array remains unchanged.',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
    'Must be solved in O(1) extra memory.',
  ],
  hints: [
    {
      level: 1,
      title: 'Symmetry',
      content:
        'Notice the relationship between the element at index `i` from the left and the element at index `n - 1 - i` from the right.',
    },
    {
      level: 2,
      title: 'Two Pointers',
      content:
        'Set one pointer at the start `left = 0` and another at the end `right = n - 1`. Swap the values they point to and move them toward each other.',
    },
    {
      level: 3,
      title: 'Termination Condition',
      content:
        'While `left < right`, perform `std::swap(nums[left], nums[right])`, increment `left`, and decrement `right`. Stop when `left >= right`.',
    },
  ],
  solution: {
    bruteForce: {
      explanation:
        'Create a copy of the array, iterate backwards through the copy, and write the values into the original array. Violates the O(1) auxiliary space constraint.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
    },
    optimal: {
      keyObservation:
        'Every position `i` swaps with its mirror counterpart `n - 1 - i`. By swapping in pairs from outer edges inward, exactly n/2 swaps reverse the entire sequence without extra memory.',
      algorithm:
        'Use two pointers `left = 0` and `right = nums.length - 1`. In a loop while `left < right`, swap `nums[left]` and `nums[right]`. Then advance `left++` and decrement `right--`.',
      steps: [
        {
          title: 'Step 1 — Set Boundaries',
          content: 'Initialize `left = 0` and `right = nums.size() - 1`.',
        },
        {
          title: 'Step 2 — Converging Swap Loop',
          content: 'While `left < right`, exchange `nums[left]` and `nums[right]`, then step both pointers inward.',
        },
        {
          title: 'Step 3 — Invariant Preservation',
          content: 'When `left >= right`, all pairs have been swapped, and the middle element (if odd length) remains in place.',
        },
      ],
      correctness:
        'The loop runs $\\lfloor n/2 \\rfloor$ iterations. At iteration $k$, the $k$-th element from the front is exchanged with the $k$-th element from the back. No element is swapped twice.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
  },
  code: [
    {
      language: 'cpp',
      starterCode: `#include <vector>
#include <algorithm>

class Solution {
public:
    void reverseArray(std::vector<int>& nums) {
        // Reverse nums in-place
    }
};`,
      source: `#include <vector>
#include <utility>

class Solution {
public:
    void reverseArray(std::vector<int>& nums) {
        int left = 0;
        int right = static_cast<int>(nums.size()) - 1;

        while (left < right) {
            std::swap(nums[left], nums[right]);
            ++left;
            --right;
        }
    }
};`,
    },
    {
      language: 'python',
      starterCode: `class Solution:
    def reverseArray(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        pass`,
      source: `class Solution:
    def reverseArray(self, nums: list[int]) -> None:
        left = 0
        right = len(nums) - 1
        
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1`,
    },
  ],
  followUp:
    'How does this two-pointer in-place reversal logic become the foundation for rotating an array by k positions in O(1) space (the 3-reversals trick)?',
  testCases: [
    {
      id: 'tc-1',
      input: '[1, 2, 3, 4, 5]',
      expectedOutput: '[5, 4, 3, 2, 1]',
      explanation: 'Odd length array',
    },
    {
      id: 'tc-2',
      input: '[4, 7]',
      expectedOutput: '[7, 4]',
      explanation: 'Even length array',
    },
    {
      id: 'tc-3',
      input: '[99]',
      expectedOutput: '[99]',
      explanation: 'Single element array',
    },
  ],
  prerequisites: ['Two Pointers', 'Array Indexing'],
  relatedSlugs: ['find-max-min', 'two-sum'],
};
