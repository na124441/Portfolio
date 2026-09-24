import type { DsaProblem } from '@/types/dsa-question';

export const twoSumProblem: DsaProblem = {
  id: 'dsa-003',
  slug: 'two-sum',
  title: 'Two Sum',
  topic: 'Arrays & Strings',
  tags: ['Array', 'Hash Table'],
  difficulty: 'Easy',
  order: 3,
  statement:
    'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.',
  examples: [
    {
      input: 'nums = [2, 7, 11, 15], target = 9',
      output: '[0, 1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    },
    {
      input: 'nums = [3, 2, 4], target = 6',
      output: '[1, 2]',
      explanation: 'nums[1] + nums[2] == 6, so we return [1, 2].',
    },
    {
      input: 'nums = [3, 3], target = 6',
      output: '[0, 1]',
      explanation: 'Two distinct indices holding identical values add up to target.',
    },
  ],
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9',
    'Only one valid answer exists.',
  ],
  hints: [
    {
      level: 1,
      title: 'Complement Value',
      content:
        'For each element `x`, what exact counterpart value `y` are you searching for such that `x + y == target`?',
    },
    {
      level: 2,
      title: 'Fast Lookup',
      content:
        'Instead of iterating through the remaining array to find `target - x` (which costs O(n)), what data structure can find whether `target - x` exists in O(1) average time?',
    },
    {
      level: 3,
      title: 'Single Pass Hash Map',
      content:
        'Iterate through `nums` once. For element `nums[i]`, compute `complement = target - nums[i]`. If `complement` is already in your hash map, return its index and `i`. Otherwise, insert `nums[i]` into the map with its index `i`.',
    },
  ],
  solution: {
    bruteForce: {
      explanation:
        'Nested loops: check all pairs (i, j) with 0 <= i < j < n and test if nums[i] + nums[j] == target.',
      timeComplexity: 'O(n^2)',
      spaceComplexity: 'O(1)',
    },
    optimal: {
      keyObservation:
        'Checking whether a previously seen number equals `target - nums[i]` requires O(1) average time using a hash map storing `{value: index}`.',
      algorithm:
        'Initialize an unordered map / dictionary. For each element `nums[i]`, calculate `complement = target - nums[i]`. If the complement exists in the map, return `{map[complement], i}`. Otherwise, store `map[nums[i]] = i`.',
      steps: [
        {
          title: 'Step 1 — Create Hash Table',
          content: 'Instantiate `unordered_map<int, int>` to store `[value -> index]`.',
        },
        {
          title: 'Step 2 — Single Pass Scan',
          content: 'For index `i` from 0 to `nums.size() - 1`, check if `target - nums[i]` is in the map.',
        },
        {
          title: 'Step 3 — Return or Record',
          content: 'If found, return `{map[target - nums[i]], i}`. Otherwise, insert `map[nums[i]] = i`.',
        },
      ],
      correctness:
        'Since exactly one solution is guaranteed, the pair will be discovered when the second element of the pair is visited, finding the first element already registered in the map.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
    },
  },
  code: [
    {
      language: 'cpp',
      starterCode: `#include <vector>
#include <unordered_map>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        // Return indices of the two numbers that sum to target
        return {};
    }
};`,
      source: `#include <vector>
#include <unordered_map>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::unordered_map<int, int> seen;
        
        for (int i = 0; i < static_cast<int>(nums.size()); ++i) {
            int complement = target - nums[i];
            auto it = seen.find(complement);
            if (it != seen.end()) {
                return {it->second, i};
            }
            seen[nums[i]] = i;
        }
        
        return {};
    }
};`,
    },
    {
      language: 'python',
      starterCode: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # Return indices of the two numbers
        pass`,
      source: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []`,
    },
  ],
  followUp:
    'What changes if the array is already sorted in non-decreasing order? Can you solve it in O(n) time with O(1) auxiliary space using two pointers?',
  testCases: [
    {
      id: 'tc-1',
      input: 'nums = [2, 7, 11, 15], target = 9',
      expectedOutput: '[0, 1]',
      explanation: 'First two elements add to 9',
    },
    {
      id: 'tc-2',
      input: 'nums = [3, 2, 4], target = 6',
      expectedOutput: '[1, 2]',
      explanation: 'Middle and last element add to 6',
    },
    {
      id: 'tc-3',
      input: 'nums = [3, 3], target = 6',
      expectedOutput: '[0, 1]',
      explanation: 'Duplicate numbers forming target',
    },
  ],
  prerequisites: ['Hash Table / Unordered Map'],
  relatedSlugs: ['find-max-min', 'binary-search'],
};
