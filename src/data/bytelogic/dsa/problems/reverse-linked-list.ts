import type { DsaProblem } from '@/types/dsa-question';

export const reverseLinkedListProblem: DsaProblem = {
  id: 'dsa-007',
  slug: 'reverse-linked-list',
  title: 'Reverse Linked List',
  topic: 'Linked Lists',
  tags: ['Linked List', 'Recursion', 'Iteration'],
  difficulty: 'Easy',
  order: 7,
  statement:
    'Given the `head` of a singly linked list, reverse the list, and return the reversed list.\n\nEach node in the list contains an integer `val` and a reference to the next node `next`.',
  examples: [
    {
      input: 'head = [1, 2, 3, 4, 5]',
      output: '[5, 4, 3, 2, 1]',
      explanation: 'Pointers are redirected backwards so 5 points to 4, and 1 points to nullptr.',
    },
    {
      input: 'head = [1, 2]',
      output: '[2, 1]',
      explanation: 'Two-node list swapped in direction.',
    },
    {
      input: 'head = []',
      output: '[]',
      explanation: 'Empty list reverses to empty list.',
    },
  ],
  constraints: [
    'The number of nodes in the list is the range [0, 5000].',
    '-5000 <= Node.val <= 5000',
  ],
  hints: [
    {
      level: 1,
      title: 'Pointer Redirection',
      content:
        'To reverse a pointer `curr->next = prev`, you must modify `curr->next`. But before you overwrite it, where will you remember the original `curr->next` so you don\'t lose the rest of the list?',
    },
    {
      level: 2,
      title: 'Three Pointer Technique',
      content:
        'Maintain three pointers during iteration: `prev` (starts at nullptr), `curr` (starts at head), and `next_temp` (stores `curr->next` before redirecting).',
    },
    {
      level: 3,
      title: 'Loop Progression',
      content:
        'In each step: `next_temp = curr->next`, `curr->next = prev`, `prev = curr`, `curr = next_temp`. When `curr == nullptr`, `prev` points to the new head of the reversed list.',
    },
  ],
  solution: {
    bruteForce: {
      explanation:
        'Traverse the list and push all node values onto a stack. Traverse again and overwrite each node value popping from the stack. Takes O(n) auxiliary memory and mutates values rather than rearranging node links.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
    },
    optimal: {
      keyObservation:
        'We can reverse the pointers in-place during a single pass using three pointers (`prev`, `curr`, `next_temp`), taking O(n) time and O(1) space.',
      algorithm:
        'Initialize prev = nullptr, curr = head. While curr != nullptr: store curr->next in next_temp. Set curr->next = prev. Advance prev to curr, and curr to next_temp. Return prev.',
      steps: [
        {
          title: 'Step 1 — Initialize Pointers',
          content: 'Set `ListNode* prev = nullptr;` and `ListNode* curr = head;`.',
        },
        {
          title: 'Step 2 — Reversal Loop',
          content: 'While `curr != nullptr`, save `next_temp = curr->next`, redirect `curr->next = prev`, shift `prev = curr`, and advance `curr = next_temp`.',
        },
        {
          title: 'Step 3 — New Head',
          content: 'When `curr` reaches nullptr, `prev` points to the tail of the original list, which is now the new head.',
        },
      ],
      correctness:
        'Each node\'s pointer is redirected exactly once from following node to predecessor. No links are broken because next_temp preserves forward traversal before overwriting.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
  },
  code: [
    {
      language: 'cpp',
      starterCode: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // Return reversed linked list head
        return nullptr;
    }
};`,
      source: `class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;

        while (curr != nullptr) {
            ListNode* next_temp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next_temp;
        }

        return prev;
    }
};`,
    },
    {
      language: 'python',
      starterCode: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        pass`,
      source: `class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head
        
        while curr:
            next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
            
        return prev`,
    },
  ],
  followUp:
    'A linked list can be reversed either iteratively or recursively. Could you implement both? What are the space complexity implications of recursion (call stack depth)?',
  testCases: [
    {
      id: 'tc-1',
      input: 'head = [1, 2, 3, 4, 5]',
      expectedOutput: '[5, 4, 3, 2, 1]',
      explanation: '5-node list reversal',
    },
    {
      id: 'tc-2',
      input: 'head = [1, 2]',
      expectedOutput: '[2, 1]',
      explanation: '2-node list',
    },
    {
      id: 'tc-3',
      input: 'head = []',
      expectedOutput: '[]',
      explanation: 'Empty list edge case',
    },
  ],
  prerequisites: ['Pointers / References', 'Singly Linked List'],
  relatedSlugs: ['reverse-array', 'valid-parentheses'],
};
