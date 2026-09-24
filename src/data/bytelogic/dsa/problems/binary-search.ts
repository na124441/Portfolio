import type { DsaProblem } from '@/types/dsa-question';

export const binarySearchProblem: DsaProblem = {
  id: 'dsa-005',
  slug: 'binary-search',
  title: 'Binary Search',
  topic: 'Searching',
  tags: ['Binary Search', 'Array'],
  difficulty: 'Easy',
  order: 5,
  statement:
    'Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`.\n\nIf `target` exists, then return its index. Otherwise, return `-1`.\n\nYou must write an algorithm with $O(\\log n)$ runtime complexity.',
  examples: [
    {
      input: 'nums = [-1, 0, 3, 5, 9, 12], target = 9',
      output: '4',
      explanation: '9 exists in nums and its index is 4.',
    },
    {
      input: 'nums = [-1, 0, 3, 5, 9, 12], target = 2',
      output: '-1',
      explanation: '2 does not exist in nums so return -1.',
    },
    {
      input: 'nums = [5], target = 5',
      output: '0',
      explanation: 'Single element array target match at index 0.',
    },
  ],
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 < nums[i], target < 10^4',
    'All the integers in nums are unique.',
    'nums is sorted in ascending order.',
  ],
  hints: [
    {
      level: 1,
      title: 'Monotonicity',
      content:
        'Because the array is already sorted, comparing the target against the middle element immediately eliminates half of the remaining search space.',
    },
    {
      level: 2,
      title: 'Pointers and Midpoint',
      content:
        'Track `low = 0` and `high = nums.length - 1`. Calculate `mid = low + (high - low) / 2` to avoid integer overflow. If `nums[mid] == target`, you found it.',
    },
    {
      level: 3,
      title: 'Interval Halving',
      content:
        'If `nums[mid] < target`, the target can only exist in the right half, so set `low = mid + 1`. If `nums[mid] > target`, set `high = mid - 1`. If `low > high`, the element is absent; return -1.',
    },
  ],
  solution: {
    bruteForce: {
      explanation:
        'Linearly iterate through the array checking each element one by one. Discards the sorted property and takes O(n) time.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    optimal: {
      keyObservation:
        'In a sorted array, `nums[mid] < target` guarantees that no element at index <= mid can equal target. Halving the search interval on each step yields logarithmic time.',
      algorithm:
        'Initialize low = 0, high = nums.length - 1. While low <= high, compute mid. If nums[mid] == target, return mid. Else branch into left or right subarray.',
      steps: [
        {
          title: 'Step 1 — Interval Initialization',
          content: 'Set `low = 0` and `high = nums.size() - 1`.',
        },
        {
          title: 'Step 2 — Halving Iteration',
          content: 'While `low <= high`, calculate `mid = low + (high - low) / 2`. Compare `nums[mid]` to `target`.',
        },
        {
          title: 'Step 3 — Absence Termination',
          content: 'If the loop terminates with `low > high`, target does not exist. Return `-1`.',
        },
      ],
      correctness:
        'The search interval strictly decreases each iteration by at least half. Since the array is strictly monotonic, if target is present, it cannot lie outside [low, high].',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
    },
  },
  code: [
    {
      language: 'cpp',
      starterCode: `#include <vector>

class Solution {
public:
    int search(std::vector<int>& nums, int target) {
        // Return index of target or -1
        return -1;
    }
};`,
      source: `#include <vector>

class Solution {
public:
    int search(std::vector<int>& nums, int target) {
        int low = 0;
        int high = static_cast<int>(nums.size()) - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }
};`,
    },
    {
      language: 'python',
      starterCode: `class Solution:
    def search(self, nums: list[int], target: int) -> int:
        pass`,
      source: `class Solution:
    def search(self, nums: list[int], target: int) -> int:
        low = 0
        high = len(nums) - 1
        
        while low <= high:
            mid = low + (high - low) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
                
        return -1`,
    },
  ],
  followUp:
    'How do you adapt this algorithm when duplicate values exist and you need to find the FIRST or LAST occurrence (lower_bound / upper_bound)?',
  testCases: [
    {
      id: 'tc-1',
      input: 'nums = [-1, 0, 3, 5, 9, 12], target = 9',
      expectedOutput: '4',
      explanation: 'Target found in right half',
    },
    {
      id: 'tc-2',
      input: 'nums = [-1, 0, 3, 5, 9, 12], target = 2',
      expectedOutput: '-1',
      explanation: 'Target not present in array',
    },
    {
      id: 'tc-3',
      input: 'nums = [5], target = 5',
      expectedOutput: '0',
      explanation: 'Single-element array match',
    },
  ],
  prerequisites: ['Binary Search', 'Sorted Arrays'],
  relatedSlugs: ['two-sum', 'find-max-min'],
};
