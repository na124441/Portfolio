import type { DsaProblem } from '@/types/dsa-question';

export const validPalindromeProblem: DsaProblem = {
  id: 'dsa-004',
  slug: 'valid-palindrome',
  title: 'Valid Palindrome',
  topic: 'Arrays & Strings',
  tags: ['String', 'Two Pointers'],
  difficulty: 'Warm-up',
  order: 4,
  statement:
    'A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string `s`, return `true` if it is a palindrome, or `false` otherwise.',
  examples: [
    {
      input: 's = "A man, a plan, a canal: Panama"',
      output: 'true',
      explanation: '"amanaplanacanalpanama" is a palindrome.',
    },
    {
      input: 's = "race a car"',
      output: 'false',
      explanation: '"raceacar" is not a palindrome.',
    },
    {
      input: 's = " "',
      output: 'true',
      explanation: 's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
    },
  ],
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    's consists only of printable ASCII characters.',
  ],
  hints: [
    {
      level: 1,
      title: 'Filtering vs Pointers',
      content:
        'You could clean the string first into a new string, or examine characters directly using two converging pointers and skipping non-alphanumeric characters on the fly.',
    },
    {
      level: 2,
      title: 'On-the-fly Comparison',
      content:
        'Set `left = 0` and `right = s.length - 1`. While `left < right`, if `s[left]` is not alphanumeric, advance `left`. If `s[right]` is not alphanumeric, decrement `right`.',
    },
    {
      level: 3,
      title: 'Case-Insensitive Equality',
      content:
        'When both pointers point to alphanumeric characters, check if `tolower(s[left]) == tolower(s[right])`. If not, return false immediately. If they match, advance both pointers.',
    },
  ],
  solution: {
    bruteForce: {
      explanation:
        'Construct a filtered string containing only lowercased alphanumeric characters. Reverse this cleaned string and check if it equals the original cleaned string.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n) auxiliary string storage',
    },
    optimal: {
      keyObservation:
        'By scanning with two pointers moving inwards and ignoring non-alphanumeric characters dynamically, we can check symmetry in a single pass using O(1) extra space.',
      algorithm:
        'Initialize left = 0, right = s.length - 1. Loop while left < right: skip non-alphanumeric characters at both ends. Compare tolower(s[left]) with tolower(s[right]). Return false on mismatch, or true when pointers cross.',
      steps: [
        {
          title: 'Step 1 — Set Two Pointers',
          content: 'Initialize `left = 0` and `right = s.size() - 1`.',
        },
        {
          title: 'Step 2 — Inner Skipping Loops',
          content: 'Advance `left` while `left < right && !isalnum(s[left])`. Decrement `right` while `left < right && !isalnum(s[right])`.',
        },
        {
          title: 'Step 3 — Casefold Comparison',
          content: 'If `tolower(s[left]) != tolower(s[right])`, return `false`. Else `++left`, `--right`.',
        },
      ],
      correctness:
        'Any mismatch between symmetric valid alphanumeric characters invalidates the palindrome property. Checking outer-to-inner covers every paired position.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
  },
  code: [
    {
      language: 'cpp',
      starterCode: `#include <string>
#include <cctype>

class Solution {
public:
    bool isPalindrome(std::string s) {
        // Return true if s is a palindrome
        return false;
    }
};`,
      source: `#include <string>
#include <cctype>

class Solution {
public:
    bool isPalindrome(std::string s) {
        int left = 0;
        int right = static_cast<int>(s.length()) - 1;

        while (left < right) {
            while (left < right && !std::isalnum(static_cast<unsigned char>(s[left]))) {
                ++left;
            }
            while (left < right && !std::isalnum(static_cast<unsigned char>(s[right]))) {
                --right;
            }

            if (std::tolower(static_cast<unsigned char>(s[left])) !=
                std::tolower(static_cast<unsigned char>(s[right]))) {
                return false;
            }

            ++left;
            --right;
        }

        return true;
    }
};`,
    },
    {
      language: 'python',
      starterCode: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        pass`,
      source: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1
        
        while left < right:
            while left < right and not s[left].isalnum():
                left += 1
            while left < right and not s[right].isalnum():
                right -= 1
                
            if s[left].lower() != s[right].lower():
                return False
                
            left += 1
            right -= 1
            
        return True`,
    },
  ],
  followUp:
    'What if you are allowed to delete at most one character from the string? Can you still determine if it can form a palindrome in O(n) time (Valid Palindrome II)?',
  testCases: [
    {
      id: 'tc-1',
      input: 's = "A man, a plan, a canal: Panama"',
      expectedOutput: 'true',
      explanation: 'Classic sentence palindrome with punctuation',
    },
    {
      id: 'tc-2',
      input: 's = "race a car"',
      expectedOutput: 'false',
      explanation: 'Asymmetric phrase',
    },
    {
      id: 'tc-3',
      input: 's = "0P"',
      expectedOutput: 'false',
      explanation: 'Different alphanumeric characters',
    },
  ],
  prerequisites: ['Two Pointers', 'Character Operations'],
  relatedSlugs: ['reverse-array', 'find-max-min'],
};
