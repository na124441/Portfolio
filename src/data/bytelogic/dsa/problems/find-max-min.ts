import type { DsaProblem } from '@/types/dsa-question';

export const findMaxMinProblem: DsaProblem = {
  id: 'dsa-001',
  slug: 'find-max-min',
  title: 'Find Maximum and Minimum in an Array',
  topic: 'Arrays & Strings',
  tags: ['Array', 'Iteration'],
  difficulty: 'Warm-up',
  order: 1,
  statement:
    'Given an array of integers `nums`, find and return both the minimum and maximum elements present in the array.\n\nReturn the result as a pair of integers `[min_val, max_val]`.',
  examples: [
    {
      input: 'nums = [3, 5, 4, 1, 9]',
      output: '[1, 9]',
      explanation: 'The smallest element in the array is 1, and the largest element is 9.',
    },
    {
      input: 'nums = [-7, -2, -15, -4]',
      output: '[-15, -2]',
      explanation: 'In an array of negative numbers, -15 is the minimum and -2 is the maximum.',
    },
    {
      input: 'nums = [42]',
      output: '[42, 42]',
      explanation: 'For a single-element array, that element is simultaneously the minimum and the maximum.',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  hints: [
    {
      level: 1,
      title: 'State Tracking',
      content:
        'What state do you need to maintain as you iterate through the elements one by one? What values should you initialize those tracking variables with before examining the rest of the array?',
    },
    {
      level: 2,
      title: 'Single Pass Technique',
      content:
        'You can solve this with a single linear pass by maintaining running variables for `min_val` and `max_val`, updating them whenever an element is smaller than the current minimum or larger than the current maximum.',
    },
    {
      level: 3,
      title: 'Comparison Logic',
      content:
        'Initialize both `min_val` and `max_val` to `nums[0]`. Iterate from index 1 to n - 1. If `nums[i] < min_val`, set `min_val = nums[i]`. Else if `nums[i] > max_val`, set `max_val = nums[i]`. Alternatively, compare elements in pairs to reduce total comparisons.',
    },
  ],
  solution: {
    bruteForce: {
      explanation:
        'Sort the entire array in non-decreasing order. Once sorted, the first element `nums[0]` is the minimum, and the last element `nums[n - 1]` is the maximum.',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1) or O(n) depending on the sorting algorithm',
    },
    optimal: {
      keyObservation:
        'Sorting does unnecessary work because relative ordering between non-extreme elements is irrelevant. We only need the global bounds, which can be found by inspecting each number once.',
      algorithm:
        'Maintain two scalar variables: min_val and max_val initialized to nums[0]. Iterate from index 1 to n - 1. Update min_val if the current element is smaller; otherwise update max_val if larger. Return the pair after traversal.',
      steps: [
        {
          title: 'Step 1 — Initialize Tracking Bounds',
          content: 'Set `min_val = nums[0]` and `max_val = nums[0]`. Initializing with `nums[0]` avoids arbitrary sentinel limits like `INT_MAX` / `INT_MIN`.',
        },
        {
          title: 'Step 2 — Linear Traversal',
          content: 'Iterate `i` from 1 to `nums.length - 1`. If `nums[i] < min_val`, update `min_val = nums[i]`. Otherwise if `nums[i] > max_val`, update `max_val = nums[i]`.',
        },
        {
          title: 'Step 3 — Construct Result',
          content: 'Return `{min_val, max_val}` as a pair or tuple.',
        },
      ],
      correctness:
        'Every element from index 1 to n-1 is compared against the current extrema. Because `min_val <= max_val` holds invariant, any element strictly smaller than `min_val` cannot exceed `max_val`, allowing the mutually exclusive `else if` branch.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
  },
  code: [
    {
      language: 'cpp',
      starterCode: `#include <vector>
#include <utility>

class Solution {
public:
    std::pair<int, int> findMinMax(const std::vector<int>& nums) {
        // Write your solution here
        
        return {0, 0};
    }
};`,
      source: `#include <vector>
#include <utility>

class Solution {
public:
    std::pair<int, int> findMinMax(const std::vector<int>& nums) {
        // Base case guaranteed by constraints: nums.size() >= 1
        int min_val = nums[0];
        int max_val = nums[0];

        // Single pass comparison: at most 2 * (n - 1) comparisons
        for (size_t i = 1; i < nums.size(); ++i) {
            if (nums[i] < min_val) {
                min_val = nums[i];
            } else if (nums[i] > max_val) {
                max_val = nums[i];
            }
        }

        return {min_val, max_val};
    }
};`,
    },
    {
      language: 'python',
      starterCode: `class Solution:
    def findMinMax(self, nums: list[int]) -> list[int]:
        # Write your solution here
        pass`,
      source: `class Solution:
    def findMinMax(self, nums: list[int]) -> list[int]:
        min_val = nums[0]
        max_val = nums[0]
        
        for i in range(1, len(nums)):
            x = nums[i]
            if x < min_val:
                min_val = x
            elif x > max_val:
                max_val = x
                
        return [min_val, max_val]`,
    },
  ],
  followUp:
    'Can you find both the minimum and maximum using strictly fewer than 2(n - 1) comparisons? What is the theoretical lower bound on comparisons when elements are processed in pairs (approx 1.5n comparisons), and how would you implement it?',
  testCases: [
    {
      id: 'tc-1',
      input: '[3, 5, 4, 1, 9]',
      expectedOutput: '[1, 9]',
      explanation: 'General mixed positive numbers',
    },
    {
      id: 'tc-2',
      input: '[-7, -2, -15, -4]',
      expectedOutput: '[-15, -2]',
      explanation: 'All negative numbers',
    },
    {
      id: 'tc-3',
      input: '[42]',
      expectedOutput: '[42, 42]',
      explanation: 'Single-element boundary case',
    },
    {
      id: 'tc-4',
      input: '[8, 8, 8, 8]',
      expectedOutput: '[8, 8]',
      explanation: 'All identical elements',
    },
  ],
  prerequisites: ['Basic loops', 'Array indexing'],
  relatedSlugs: ['reverse-array', 'two-sum'],
};
