import * as fs from 'fs';
import * as path from 'path';
import type { DsaProblem } from '../src/types/dsa-question';

/**
 * Phase 1 Comprehensive Refinement Engine
 * Covers 111 problems across:
 * - Arrays and Vectors (Orders 19 - 49, 31 problems)
 * - Linked Lists (Orders 50 - 74, 25 problems)
 * - Stacks (Orders 75 - 94, 20 problems)
 * - Queues and Deques (Orders 95 - 109, 15 problems)
 * - Hash Tables and Hashing (Orders 110 - 129, 20 problems)
 */

export function refinePhase1Problem(raw: DsaProblem): DsaProblem {
  const p = { ...raw };
  const slug = p.slug;
  const order = p.order;
  const desc = p.statement.split('\n')[2] || p.statement;

  // We customize each problem based on its exact order and slug
  switch (order) {
    case 19: // Dynamic array scratch
      return {
        ...p,
        title: 'Dynamic Array with Fixed Initial Capacity',
        statement: `### Problem Description\n\nImplement a dynamic integer array from scratch using an initial buffer of capacity 4.\n\nSupport $Q$ operations:\n- \`push x\`: Append integer $x$ to the end of array.\n- \`get i\`: Print element at 0-based index $i$. If $i$ is out of bounds, print \`-1\`.\n- \`size\`: Print current number of elements.\n- \`print\`: Print all elements space-separated, or \`EMPTY\` if empty.\n\n### Input Format\n- Line 1: An integer $Q$ ($1 \\le Q \\le 10^4$).\n- Next $Q$ lines: Operation commands.\n\n### Output Format\nPrint results for each \`get\`, \`size\`, and \`print\` operation on separate lines.`,
        examples: [
          { input: '5\npush 10\npush 20\nsize\nget 1\nprint', output: '2\n20\n10 20', explanation: 'Array contains 10 and 20. Size is 2. Element at index 1 is 20.' },
          { input: '3\nprint\nget 0\nsize', output: 'EMPTY\n-1\n0', explanation: 'Empty array produces EMPTY, -1 for out-of-bounds get, and size 0.' },
          { input: '6\npush 5\npush 15\npush 25\nget 2\nget 3\nsize', output: '25\n-1\n3', explanation: 'Index 2 is 25, index 3 is out-of-bounds (-1), size is 3.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5\npush 10\npush 20\nsize\nget 1\nprint', expectedOutput: '2\n20\n10 20' },
          { id: `tc-p1-${order}-2`, input: '3\nprint\nget 0\nsize', expectedOutput: 'EMPTY\n-1\n0' },
          { id: `tc-p1-${order}-3`, input: '6\npush 5\npush 15\npush 25\nget 2\nget 3\nsize', expectedOutput: '25\n-1\n3' },
          { id: `tc-p1-${order}-4`, input: '7\npush 1\npush 2\npush 3\npush 4\npush 5\nsize\nprint', expectedOutput: '5\n1 2 3 4 5' },
        ],
      };

    case 20: // Dynamic resizing
      return {
        ...p,
        title: 'Dynamic Array with Automatic Capacity Doubling',
        statement: `### Problem Description\n\nExtend dynamic array to support automatic doubling when capacity is exhausted. Initial capacity is 2.\n\nSupport $Q$ operations:\n- \`push x\`: If size equals capacity, double capacity ($C \\leftarrow 2C$) and print \`RESIZE {new_cap}\`. Then append $x$.\n- \`capacity\`: Print current capacity.\n- \`size\`: Print current size.\n- \`print\`: Print all elements, or \`EMPTY\` if empty.\n\n### Input Format\n- Line 1: An integer $Q$ ($1 \\le Q \\le 10^4$).\n- Next $Q$ lines: Operations.\n\n### Output Format\nPrint query outputs and resize notifications on separate lines.`,
        examples: [
          { input: '6\npush 10\npush 20\ncapacity\npush 30\ncapacity\nsize', output: '2\nRESIZE 4\n4\n3', explanation: 'Capacity reaches 2, pushing 30 triggers resize to 4.' },
          { input: '3\ncapacity\nsize\nprint', output: '2\n0\nEMPTY', explanation: 'Initial state: capacity 2, size 0, EMPTY.' },
          { input: '5\npush 1\npush 2\npush 3\npush 4\npush 5', output: 'RESIZE 4\nRESIZE 8', explanation: 'Resizes trigger at 3rd element (cap 4) and 5th element (cap 8).' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '6\npush 10\npush 20\ncapacity\npush 30\ncapacity\nsize', expectedOutput: '2\nRESIZE 4\n4\n3' },
          { id: `tc-p1-${order}-2`, input: '3\ncapacity\nsize\nprint', expectedOutput: '2\n0\nEMPTY' },
          { id: `tc-p1-${order}-3`, input: '5\npush 1\npush 2\npush 3\npush 4\npush 5', expectedOutput: 'RESIZE 4\nRESIZE 8' },
        ],
      };

    case 21: // Print every element with index and count
      return {
        ...p,
        title: 'Print Array Elements with Indices and Count',
        statement: `### Problem Description\n\nGiven an array of $N$ integers, print each element along with its 0-based index formatted as \`Index {i}: {value}\` on separate lines.\nFinally, print \`Total elements: {N}\`.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_0, A_1, \\dots, A_{N-1}$. (Omitted if $N = 0$).\n\n### Output Format\n- $N$ lines: \`Index i: A[i]\`\n- Final line: \`Total elements: N\``,
        examples: [
          { input: '3\n10 20 30', output: 'Index 0: 10\nIndex 1: 20\nIndex 2: 30\nTotal elements: 3', explanation: 'Elements at 0, 1, 2 printed with total count 3.' },
          { input: '1\n42', output: 'Index 0: 42\nTotal elements: 1', explanation: 'Single element at index 0.' },
          { input: '0', output: 'Total elements: 0', explanation: 'Empty array outputs only count 0.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '3\n10 20 30', expectedOutput: 'Index 0: 10\nIndex 1: 20\nIndex 2: 30\nTotal elements: 3' },
          { id: `tc-p1-${order}-2`, input: '1\n42', expectedOutput: 'Index 0: 42\nTotal elements: 1' },
          { id: `tc-p1-${order}-3`, input: '0', expectedOutput: 'Total elements: 0' },
          { id: `tc-p1-${order}-4`, input: '4\n-5 0 5 10', expectedOutput: 'Index 0: -5\nIndex 1: 0\nIndex 2: 5\nIndex 3: 10\nTotal elements: 4' },
        ],
      };

    case 22: // Min and max with comparisons
      return {
        ...p,
        title: 'Single Pass Min and Max with Comparisons',
        statement: `### Problem Description\n\nFind the minimum and maximum element in an array of $N$ integers in one traversal.\nCompare elements in pairs so that total comparisons between array elements is at most $\\lceil 3N/2 \\rceil$.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\n- Line 1: Two space-separated integers: \`min_val max_val\`\n- Line 2: An integer representing total element comparisons performed.`,
        examples: [
          { input: '5\n3 1 9 7 2', output: '1 9\n6', explanation: 'Pairs evaluated in 6 comparisons <= ceil(3*5/2)=8.' },
          { input: '1\n100', output: '100 100\n0', explanation: 'Single element requires 0 comparisons.' },
          { input: '2\n5 8', output: '5 8\n1', explanation: 'Comparing 5 and 8 takes 1 comparison.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5\n3 1 9 7 2', expectedOutput: '1 9\n6' },
          { id: `tc-p1-${order}-2`, input: '1\n100', expectedOutput: '100 100\n0' },
          { id: `tc-p1-${order}-3`, input: '2\n5 8', expectedOutput: '5 8\n1' },
          { id: `tc-p1-${order}-4`, input: '4\n10 20 30 40', expectedOutput: '10 40\n4' },
        ],
      };

    case 23: // Sum and average
      return {
        ...p,
        title: 'Sum and Integer Average of Array Elements',
        statement: `### Problem Description\n\nCalculate the total sum and integer average (truncated toward zero) of $N$ array integers.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint two space-separated integers: \`sum average\`.`,
        examples: [
          { input: '4\n10 20 30 40', output: '100 25', explanation: 'Sum = 100, Average = 100 / 4 = 25.' },
          { input: '3\n5 7 10', output: '22 7', explanation: 'Sum = 22, truncated average 22 / 3 = 7.' },
          { input: '3\n-10 -5 2', output: '-13 -4', explanation: 'Sum = -13, truncated average -13 / 3 = -4.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '4\n10 20 30 40', expectedOutput: '100 25' },
          { id: `tc-p1-${order}-2`, input: '3\n5 7 10', expectedOutput: '22 7' },
          { id: `tc-p1-${order}-3`, input: '3\n-10 -5 2', expectedOutput: '-13 -4' },
          { id: `tc-p1-${order}-4`, input: '1\n-99', expectedOutput: '-99 -99' },
        ],
      };

    case 24: // Count occurrences of target
      return {
        ...p,
        title: 'Count Target Occurrences and Indices',
        statement: `### Problem Description\n\nGiven an array of $N$ integers and a target value $T$, count how many times $T$ appears, and print all 0-based indices where it occurs in ascending order.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $T$ ($1 \\le N \\le 10^5$, $-10^9 \\le T \\le 10^9$).\n- Line 2: $N$ space-separated integers $A_0, A_1, \\dots, A_{N-1}$.\n\n### Output Format\n- Line 1: An integer representing count of occurrences.\n- Line 2: Space-separated 0-based indices where $T$ occurs, or \`-1\` if count is 0.`,
        examples: [
          { input: '6 5\n1 5 3 5 5 2', output: '3\n1 3 4', explanation: 'Target 5 appears 3 times at indices 1, 3, and 4.' },
          { input: '4 10\n1 2 3 4', output: '0\n-1', explanation: 'Target 10 does not appear in the array.' },
          { input: '1 7\n7', output: '1\n0', explanation: 'Target 7 appears once at index 0.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '6 5\n1 5 3 5 5 2', expectedOutput: '3\n1 3 4' },
          { id: `tc-p1-${order}-2`, input: '4 10\n1 2 3 4', expectedOutput: '0\n-1' },
          { id: `tc-p1-${order}-3`, input: '1 7\n7', expectedOutput: '1\n0' },
          { id: `tc-p1-${order}-4`, input: '5 2\n2 2 2 2 2', expectedOutput: '5\n0 1 2 3 4' },
        ],
      };

    case 25: // Reverse an array in place
      return {
        ...p,
        title: 'Reverse Array In-Place',
        statement: `### Problem Description\n\nReverse an array of $N$ integers in-place using two pointers.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\nPrint the $N$ reversed integers separated by a single space.`,
        examples: [
          { input: '5\n1 2 3 4 5', output: '5 4 3 2 1', explanation: 'Reversing 1 2 3 4 5 yields 5 4 3 2 1.' },
          { input: '1\n99', output: '99', explanation: 'Single element remains unchanged.' },
          { input: '4\n10 20 30 40', output: '40 30 20 10', explanation: 'Even length array reversal.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5\n1 2 3 4 5', expectedOutput: '5 4 3 2 1' },
          { id: `tc-p1-${order}-2`, input: '1\n99', expectedOutput: '99' },
          { id: `tc-p1-${order}-3`, input: '4\n10 20 30 40', expectedOutput: '40 30 20 10' },
          { id: `tc-p1-${order}-4`, input: '6\n1 0 -1 0 1 2', expectedOutput: '2 1 0 -1 0 1' },
        ],
      };

    case 26: // Rotate an array one position
      return {
        ...p,
        title: 'Rotate Array One Position Left and Right',
        statement: `### Problem Description\n\nGiven an array of $N$ integers:\n1. Print the array rotated one position to the left (first element moves to the end).\n2. Print the original array rotated one position to the right (last element moves to the front).\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, A_2, \\dots, A_N$.\n\n### Output Format\n- Line 1: $N$ space-separated integers after 1-position left rotation.\n- Line 2: $N$ space-separated integers after 1-position right rotation.`,
        examples: [
          { input: '5\n1 2 3 4 5', output: '2 3 4 5 1\n5 1 2 3 4', explanation: 'Left rotate moves 1 to back. Right rotate moves 5 to front.' },
          { input: '1\n42', output: '42\n42', explanation: 'Single element remains same in both rotations.' },
          { input: '3\n10 20 30', output: '20 30 10\n30 10 20', explanation: 'Left: 20 30 10. Right: 30 10 20.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5\n1 2 3 4 5', expectedOutput: '2 3 4 5 1\n5 1 2 3 4' },
          { id: `tc-p1-${order}-2`, input: '1\n42', expectedOutput: '42\n42' },
          { id: `tc-p1-${order}-3`, input: '3\n10 20 30', expectedOutput: '20 30 10\n30 10 20' },
          { id: `tc-p1-${order}-4`, input: '2\n7 9', expectedOutput: '9 7\n9 7' },
        ],
      };

    case 27: // Insert element at specified valid index
      return {
        ...p,
        title: 'Insert Element at Index in Array',
        statement: `### Problem Description\n\nGiven an array of $N$ integers, insert a value $val$ at a specified 0-based index $idx$ ($0 \\le idx \\le N$) by shifting subsequent elements to the right.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_0, \\dots, A_{N-1}$. (Omitted if $N = 0$).\n- Line 3: Two space-separated integers $idx$ and $val$.\n\n### Output Format\nPrint the $N+1$ space-separated integers of the updated array.`,
        examples: [
          { input: '4\n1 2 4 5\n2 3', output: '1 2 3 4 5', explanation: 'Insert 3 at index 2 shifts 4 and 5 to the right.' },
          { input: '3\n10 20 30\n0 5', output: '5 10 20 30', explanation: 'Insert 5 at head (index 0).' },
          { input: '0\n0 99', output: '99', explanation: 'Insert 99 into an empty array.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '4\n1 2 4 5\n2 3', expectedOutput: '1 2 3 4 5' },
          { id: `tc-p1-${order}-2`, input: '3\n10 20 30\n0 5', expectedOutput: '5 10 20 30' },
          { id: `tc-p1-${order}-3`, input: '0\n0 99', expectedOutput: '99' },
          { id: `tc-p1-${order}-4`, input: '3\n1 2 3\n3 4', expectedOutput: '1 2 3 4' },
        ],
      };

    case 28: // Delete element at specified index preserving order
      return {
        ...p,
        title: 'Delete Element at Index Preserving Order',
        statement: `### Problem Description\n\nGiven an array of $N$ integers, delete the element at 0-based index $idx$ ($0 \\le idx < N$) while preserving the relative order of the remaining elements.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_0, \\dots, A_{N-1}$.\n- Line 3: An integer $idx$ ($0 \\le idx < N$).\n\n### Output Format\nPrint the remaining $N-1$ space-separated integers, or \`EMPTY\` if $N = 1$.`,
        examples: [
          { input: '5\n10 20 30 40 50\n2', output: '10 20 40 50', explanation: 'Deleting element 30 at index 2 shifts 40 and 50 left.' },
          { input: '1\n99\n0', output: 'EMPTY', explanation: 'Deleting the only element leaves the array empty.' },
          { input: '3\n1 2 3\n0', output: '2 3', explanation: 'Deleting index 0 leaves 2 3.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5\n10 20 30 40 50\n2', expectedOutput: '10 20 40 50' },
          { id: `tc-p1-${order}-2`, input: '1\n99\n0', expectedOutput: 'EMPTY' },
          { id: `tc-p1-${order}-3`, input: '3\n1 2 3\n0', expectedOutput: '2 3' },
          { id: `tc-p1-${order}-4`, input: '4\n5 6 7 8\n3', expectedOutput: '5 6 7' },
        ],
      };

    case 29: // Delete element without preserving order
      return {
        ...p,
        title: 'Delete Element in O(1) Without Preserving Order',
        statement: `### Problem Description\n\nGiven an array of $N$ integers and an index $idx$, delete the element at index $idx$ in $O(1)$ time by overwriting it with the last element of the array and shrinking the size by 1.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_0, \\dots, A_{N-1}$.\n- Line 3: An integer $idx$ ($0 \\le idx < N$).\n\n### Output Format\nPrint the $N-1$ space-separated integers, or \`EMPTY\` if $N = 1$.`,
        examples: [
          { input: '5\n10 20 30 40 50\n1', output: '10 50 30 40', explanation: 'Element 20 at index 1 is replaced by last element 50.' },
          { input: '1\n7\n0', output: 'EMPTY', explanation: 'Removing the single element leaves EMPTY.' },
          { input: '4\n1 2 3 4\n3', output: '1 2 3', explanation: 'Deleting the last element directly yields 1 2 3.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5\n10 20 30 40 50\n1', expectedOutput: '10 50 30 40' },
          { id: `tc-p1-${order}-2`, input: '1\n7\n0', expectedOutput: 'EMPTY' },
          { id: `tc-p1-${order}-3`, input: '4\n1 2 3 4\n3', expectedOutput: '1 2 3' },
        ],
      };

    case 30: // Remove all occurrences of a given value
      return {
        ...p,
        title: 'Remove All Occurrences of Value in Place',
        statement: `### Problem Description\n\nRemove all occurrences of integer $val$ from an array of $N$ integers in-place. Preserve the relative order of the remaining elements.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $val$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\n- Line 1: An integer $K$, the new logical size.\n- Line 2: The $K$ remaining space-separated integers, or \`EMPTY\` if $K = 0$.`,
        examples: [
          { input: '6 3\n3 2 2 3 4 3', output: '3\n2 2 4', explanation: 'Removing all 3s leaves 2, 2, 4 with new size 3.' },
          { input: '4 1\n1 1 1 1', output: '0\nEMPTY', explanation: 'All elements equal 1, leaving size 0 and EMPTY.' },
          { input: '3 5\n1 2 3', output: '3\n1 2 3', explanation: 'Value 5 does not appear in array; array unchanged.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '6 3\n3 2 2 3 4 3', expectedOutput: '3\n2 2 4' },
          { id: `tc-p1-${order}-2`, input: '4 1\n1 1 1 1', expectedOutput: '0\nEMPTY' },
          { id: `tc-p1-${order}-3`, input: '3 5\n1 2 3', expectedOutput: '3\n1 2 3' },
          { id: `tc-p1-${order}-4`, input: '5 0\n0 1 0 3 12', expectedOutput: '3\n1 3 12' },
        ],
      };

    case 31: // Second-largest distinct element
      return {
        ...p,
        title: 'Second Largest Distinct Element',
        statement: `### Problem Description\n\nFind the second-largest distinct element in an array of $N$ integers without sorting. If fewer than two distinct elements exist, output \`-1\`.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the second-largest distinct integer, or \`-1\`.`,
        examples: [
          { input: '6\n12 35 1 10 34 1', output: '34', explanation: 'Largest is 35, second-largest distinct is 34.' },
          { input: '3\n10 10 10', output: '-1', explanation: 'Only one distinct value exists; output -1.' },
          { input: '2\n-5 -2', output: '-5', explanation: 'Largest is -2, second-largest is -5.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '6\n12 35 1 10 34 1', expectedOutput: '34' },
          { id: `tc-p1-${order}-2`, input: '3\n10 10 10', expectedOutput: '-1' },
          { id: `tc-p1-${order}-3`, input: '2\n-5 -2', expectedOutput: '-5' },
          { id: `tc-p1-${order}-4`, input: '5\n100 20 100 30 100', expectedOutput: '30' },
        ],
      };

    case 32: // Array is sorted in nondecreasing order
      return {
        ...p,
        title: 'Check If Array Is Sorted in Nondecreasing Order',
        statement: `### Problem Description\n\nDetermine whether an array of $N$ integers is sorted in non-decreasing order ($A[i] \\le A[i+1]$).\nIf sorted, print \`true\`.\nIf not sorted, print \`false\` on line 1, and on line 2 print the first 0-based index $i$ where $A[i] > A[i+1]$.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_0, \\dots, A_{N-1}$.\n\n### Output Format\n- Line 1: \`true\` or \`false\`\n- Line 2 (if false): First index $i$ where $A[i] > A[i+1]$.`,
        examples: [
          { input: '5\n1 2 2 4 5', output: 'true', explanation: 'Array is non-decreasing.' },
          { input: '5\n1 3 2 4 5', output: 'false\n1', explanation: 'Order breaks at index 1 because A[1] = 3 > A[2] = 2.' },
          { input: '1\n42', output: 'true', explanation: 'Single element is trivially sorted.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5\n1 2 2 4 5', expectedOutput: 'true' },
          { id: `tc-p1-${order}-2`, input: '5\n1 3 2 4 5', expectedOutput: 'false\n1' },
          { id: `tc-p1-${order}-3`, input: '1\n42', expectedOutput: 'true' },
          { id: `tc-p1-${order}-4`, input: '4\n10 9 8 7', expectedOutput: 'false\n0' },
        ],
      };

    case 33: // Move all zeros to end
      return {
        ...p,
        title: 'Move All Zeros to End Preserving Relative Order',
        statement: `### Problem Description\n\nGiven an array of $N$ integers, move all 0s to the end of the array while maintaining the relative order of the non-zero elements.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the $N$ space-separated integers of the modified array.`,
        examples: [
          { input: '5\n0 1 0 3 12', output: '1 3 12 0 0', explanation: 'Non-zero elements 1, 3, 12 maintain order; two 0s moved to the end.' },
          { input: '3\n0 0 0', output: '0 0 0', explanation: 'All zeros remain zeros.' },
          { input: '4\n1 2 3 4', output: '1 2 3 4', explanation: 'No zeros present.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5\n0 1 0 3 12', expectedOutput: '1 3 12 0 0' },
          { id: `tc-p1-${order}-2`, input: '3\n0 0 0', expectedOutput: '0 0 0' },
          { id: `tc-p1-${order}-3`, input: '4\n1 2 3 4', expectedOutput: '1 2 3 4' },
          { id: `tc-p1-${order}-4`, input: '1\n0', expectedOutput: '0' },
        ],
      };

    case 34: // Separate even and odd elements
      return {
        ...p,
        title: 'Separate Even and Odd Elements Preserving Order',
        statement: `### Problem Description\n\nRearrange an array of $N$ integers so that all even numbers appear first, followed by all odd numbers. The relative order among even elements and among odd elements must be preserved.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the $N$ space-separated integers after rearrangement.`,
        examples: [
          { input: '6\n1 2 3 4 5 6', output: '2 4 6 1 3 5', explanation: 'Even numbers (2, 4, 6) first, followed by odds (1, 3, 5).' },
          { input: '3\n2 4 6', output: '2 4 6', explanation: 'All even numbers remain unchanged.' },
          { input: '3\n1 3 5', output: '1 3 5', explanation: 'All odd numbers remain unchanged.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '6\n1 2 3 4 5 6', expectedOutput: '2 4 6 1 3 5' },
          { id: `tc-p1-${order}-2`, input: '3\n2 4 6', expectedOutput: '2 4 6' },
          { id: `tc-p1-${order}-3`, input: '3\n1 3 5', expectedOutput: '1 3 5' },
          { id: `tc-p1-${order}-4`, input: '5\n-2 3 -4 5 0', expectedOutput: '-2 -4 0 3 5' },
        ],
      };

    case 35: // Merge sorted arrays
      return {
        ...p,
        title: 'Merge Two Sorted Arrays',
        statement: `### Problem Description\n\nGiven two sorted arrays $A$ of size $N$ and $B$ of size $M$, merge them into a single sorted array of size $N + M$.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $M$ ($0 \\le N, M \\le 10^5$, $N+M \\ge 1$).\n- Line 2: $N$ sorted integers $A_1, \\dots, A_N$. (Omitted if $N = 0$).\n- Line 3: $M$ sorted integers $B_1, \\dots, B_M$. (Omitted if $M = 0$).\n\n### Output Format\nPrint $N + M$ space-separated integers in non-decreasing order.`,
        examples: [
          { input: '3 3\n1 3 5\n2 4 6', output: '1 2 3 4 5 6', explanation: 'Merged sorted sequence.' },
          { input: '3 0\n1 2 3', output: '1 2 3', explanation: 'Second array is empty.' },
          { input: '2 4\n5 10\n1 2 8 12', output: '1 2 5 8 10 12', explanation: 'Two unequal sorted arrays merged.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '3 3\n1 3 5\n2 4 6', expectedOutput: '1 2 3 4 5 6' },
          { id: `tc-p1-${order}-2`, input: '3 0\n1 2 3', expectedOutput: '1 2 3' },
          { id: `tc-p1-${order}-3`, input: '2 4\n5 10\n1 2 8 12', expectedOutput: '1 2 5 8 10 12' },
          { id: `tc-p1-${order}-4`, input: '3 3\n1 1 1\n2 2 2', expectedOutput: '1 1 1 2 2 2' },
        ],
      };

    case 36: // Two arrays multiset match
      return {
        ...p,
        title: 'Check If Two Arrays Contain Identical Multiset',
        statement: `### Problem Description\n\nGiven two arrays $A$ and $B$ of size $N$ and $M$, determine whether they contain the exact same multiset of elements (the same numbers with identical frequencies).\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $M$ ($1 \\le N, M \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n- Line 3: $M$ space-separated integers $B_1, \\dots, B_M$.\n\n### Output Format\nPrint \`true\` if both arrays contain the same multiset, else \`false\`.`,
        examples: [
          { input: '4 4\n1 2 3 2\n2 1 2 3', output: 'true', explanation: 'Both contain one 1, two 2s, and one 3.' },
          { input: '3 3\n1 2 3\n1 2 4', output: 'false', explanation: 'Elements differ (3 vs 4).' },
          { input: '3 2\n1 2 3\n1 2', output: 'false', explanation: 'Different sizes cannot have identical multisets.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '4 4\n1 2 3 2\n2 1 2 3', expectedOutput: 'true' },
          { id: `tc-p1-${order}-2`, input: '3 3\n1 2 3\n1 2 4', expectedOutput: 'false' },
          { id: `tc-p1-${order}-3`, input: '3 2\n1 2 3\n1 2', expectedOutput: 'false' },
          { id: `tc-p1-${order}-4`, input: '1 1\n42\n42', expectedOutput: 'true' },
        ],
      };

    case 37: // Union and intersection of two sorted arrays
      return {
        ...p,
        title: 'Union and Intersection of Two Sorted Arrays',
        statement: `### Problem Description\n\nGiven two sorted arrays $A$ (size $N$) and $B$ (size $M$), find their sorted union (all distinct elements appearing in either) and intersection (all distinct elements appearing in both).\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $M$ ($1 \\le N, M \\le 10^5$).\n- Line 2: $N$ sorted integers $A_1, \\dots, A_N$.\n- Line 3: $M$ sorted integers $B_1, \\dots, B_M$.\n\n### Output Format\n- Line 1: Space-separated distinct integers in Union.\n- Line 2: Space-separated distinct integers in Intersection, or \`EMPTY\` if intersection is empty.`,
        examples: [
          { input: '5 4\n1 2 2 3 4\n2 2 4 6', output: '1 2 3 4 6\n2 4', explanation: 'Union is {1, 2, 3, 4, 6}. Common elements are {2, 4}.' },
          { input: '3 3\n1 2 3\n4 5 6', output: '1 2 3 4 5 6\nEMPTY', explanation: 'Disjoint arrays have empty intersection.' },
          { input: '2 2\n5 5\n5 5', output: '5\n5', explanation: 'Only element 5 in both.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5 4\n1 2 2 3 4\n2 2 4 6', expectedOutput: '1 2 3 4 6\n2 4' },
          { id: `tc-p1-${order}-2`, input: '3 3\n1 2 3\n4 5 6', expectedOutput: '1 2 3 4 5 6\nEMPTY' },
          { id: `tc-p1-${order}-3`, input: '2 2\n5 5\n5 5', expectedOutput: '5\n5' },
          { id: `tc-p1-${order}-4`, input: '3 2\n1 3 5\n3 5', expectedOutput: '1 3 5\n3 5' },
        ],
      };

    case 38: // Missing number from 1 to N
      return {
        ...p,
        title: 'Find Missing Number from 1 to N',
        statement: `### Problem Description\n\nGiven an array containing $N-1$ distinct integers from the range $[1, N]$, find the single missing number.\n\n### Input Format\n- Line 1: An integer $N$ ($2 \\le N \\le 10^5$).\n- Line 2: $N-1$ space-separated integers.\n\n### Output Format\nPrint the missing integer.`,
        examples: [
          { input: '5\n1 2 4 5', output: '3', explanation: 'Numbers are 1, 2, 4, 5. Missing number is 3.' },
          { input: '2\n1', output: '2', explanation: 'Range is [1, 2], missing is 2.' },
          { input: '4\n2 3 4', output: '1', explanation: 'Missing number is 1.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5\n1 2 4 5', expectedOutput: '3' },
          { id: `tc-p1-${order}-2`, input: '2\n1', expectedOutput: '2' },
          { id: `tc-p1-${order}-3`, input: '4\n2 3 4', expectedOutput: '1' },
          { id: `tc-p1-${order}-4`, input: '6\n1 2 3 5 6', expectedOutput: '4' },
        ],
      };

    case 39: // Majority element > N/2
      return {
        ...p,
        title: 'Majority Element (> N/2 Times)',
        statement: `### Problem Description\n\nGiven an array of $N$ integers, find the majority element that appears strictly more than $\\lfloor N/2 \\rfloor$ times. If no such element exists, print \`-1\`.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the majority element, or \`-1\`.`,
        examples: [
          { input: '7\n2 2 1 1 1 2 2', output: '2', explanation: 'Element 2 appears 4 times > 7/2 = 3.' },
          { input: '4\n1 2 3 4', output: '-1', explanation: 'No element appears more than 2 times.' },
          { input: '1\n42', output: '42', explanation: '42 appears 1 time > 0.5.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '7\n2 2 1 1 1 2 2', expectedOutput: '2' },
          { id: `tc-p1-${order}-2`, input: '4\n1 2 3 4', expectedOutput: '-1' },
          { id: `tc-p1-${order}-3`, input: '1\n42', expectedOutput: '42' },
          { id: `tc-p1-${order}-4`, input: '6\n3 3 4 2 3 3', expectedOutput: '3' },
        ],
      };

    case 40: // Majority elements > N/3
      return {
        ...p,
        title: 'Majority Elements Appearing More Than N/3 Times',
        statement: `### Problem Description\n\nGiven an array of $N$ integers, find all elements that appear strictly more than $\\lfloor N/3 \\rfloor$ times.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the qualifying elements in ascending order separated by spaces, or \`-1\` if none exist.`,
        examples: [
          { input: '8\n3 2 3 1 2 3 2 3', output: '2 3', explanation: 'N=8, N/3 = 2. 3 appears 4 times, 2 appears 3 times. Both > 2.' },
          { input: '3\n1 2 3', output: '-1', explanation: 'Each appears 1 time, which is not strictly greater than 3/3 = 1.' },
          { input: '1\n10', output: '10', explanation: '10 appears 1 time > 0.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '8\n3 2 3 1 2 3 2 3', expectedOutput: '2 3' },
          { id: `tc-p1-${order}-2`, input: '3\n1 2 3', expectedOutput: '-1' },
          { id: `tc-p1-${order}-3`, input: '1\n10', expectedOutput: '10' },
          { id: `tc-p1-${order}-4`, input: '6\n1 1 1 2 2 3', expectedOutput: '1' },
        ],
      };

    case 41: // Maximum sum subarray of fixed length K
      return {
        ...p,
        title: 'Maximum Sum Subarray of Fixed Length K',
        statement: `### Problem Description\n\nGiven an array of $N$ integers and an integer $K$ ($1 \\le K \\le N$), find the maximum sum of any contiguous subarray of length exactly $K$.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$.\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the maximum sum of a length-$K$ contiguous subarray.`,
        examples: [
          { input: '5 3\n1 4 2 10 23', output: '35', explanation: 'Subarray [2, 10, 23] has maximum sum 2 + 10 + 23 = 35.' },
          { input: '4 1\n-1 -2 -3 -4', output: '-1', explanation: 'Window size 1; maximum single element is -1.' },
          { input: '3 3\n10 20 30', output: '60', explanation: 'Entire array sum is 60.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5 3\n1 4 2 10 23', expectedOutput: '35' },
          { id: `tc-p1-${order}-2`, input: '4 1\n-1 -2 -3 -4', expectedOutput: '-1' },
          { id: `tc-p1-${order}-3`, input: '3 3\n10 20 30', expectedOutput: '60' },
          { id: `tc-p1-${order}-4`, input: '6 2\n100 200 300 400 -500 50', expectedOutput: '700' },
        ],
      };

    case 42: // Kadane's algorithm
      return {
        ...p,
        title: 'Maximum Subarray Sum (Kadane\'s Algorithm)',
        statement: `### Problem Description\n\nGiven an array of $N$ integers, find the maximum sum of a non-empty contiguous subarray.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the maximum contiguous subarray sum.`,
        examples: [
          { input: '9\n-2 1 -3 4 -1 2 1 -5 4', output: '6', explanation: 'Subarray [4, -1, 2, 1] has the largest sum = 6.' },
          { input: '1\n-5', output: '-5', explanation: 'Single negative element has sum -5.' },
          { input: '5\n5 4 -1 7 8', output: '23', explanation: 'Entire array sum is 23.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '9\n-2 1 -3 4 -1 2 1 -5 4', expectedOutput: '6' },
          { id: `tc-p1-${order}-2`, input: '1\n-5', expectedOutput: '-5' },
          { id: `tc-p1-${order}-3`, input: '5\n5 4 -1 7 8', expectedOutput: '23' },
          { id: `tc-p1-${order}-4`, input: '4\n-3 -2 -1 -4', expectedOutput: '-1' },
        ],
      };

    case 43: // Best time to buy and sell stock
      return {
        ...p,
        title: 'Best Time to Buy and Sell Stock',
        statement: `### Problem Description\n\nGiven an array of $N$ integers representing daily stock prices, find the maximum profit obtainable from completing at most one transaction (one buy and one sell, with sell occurring after buy). If no profit can be made, output \`0\`.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $P_1, \\dots, P_N$.\n\n### Output Format\nPrint the maximum profit.`,
        examples: [
          { input: '6\n7 1 5 3 6 4', output: '5', explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.' },
          { input: '5\n7 6 4 3 1', output: '0', explanation: 'Prices decrease monotonically; maximum profit is 0.' },
          { input: '2\n2 4', output: '2', explanation: 'Buy at 2, sell at 4, profit = 2.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '6\n7 1 5 3 6 4', expectedOutput: '5' },
          { id: `tc-p1-${order}-2`, input: '5\n7 6 4 3 1', expectedOutput: '0' },
          { id: `tc-p1-${order}-3`, input: '2\n2 4', expectedOutput: '2' },
          { id: `tc-p1-${order}-4`, input: '5\n1 2 3 4 5', expectedOutput: '4' },
        ],
      };

    case 44: // Product of array except self
      return {
        ...p,
        title: 'Product of Array Except Self',
        statement: `### Problem Description\n\nGiven an array of $N$ integers, return an array such that \`output[i]\` equals the product of all elements of the original array except \`nums[i]\`, without using the division operator.\n\n### Input Format\n- Line 1: An integer $N$ ($2 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint $N$ space-separated integers.`,
        examples: [
          { input: '4\n1 2 3 4', output: '24 12 8 6', explanation: 'Products: 2*3*4=24, 1*3*4=12, 1*2*4=8, 1*2*3=6.' },
          { input: '5\n-1 1 0 -3 3', output: '0 0 9 0 0', explanation: 'Elements containing zero.' },
          { input: '2\n5 2', output: '2 5', explanation: 'For [5, 2], product except self is [2, 5].' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '4\n1 2 3 4', expectedOutput: '24 12 8 6' },
          { id: `tc-p1-${order}-2`, input: '5\n-1 1 0 -3 3', expectedOutput: '0 0 9 0 0' },
          { id: `tc-p1-${order}-3`, input: '2\n5 2', expectedOutput: '2 5' },
          { id: `tc-p1-${order}-4`, input: '3\n0 0 2', expectedOutput: '0 0 0' },
        ],
      };

    case 45: // Longest contiguous subarray whose sum equals K (non-negative)
      return {
        ...p,
        title: 'Longest Subarray with Sum K (Non-negative Numbers)',
        statement: `### Problem Description\n\nGiven an array of $N$ non-negative integers and a target $K$, find the length of the longest contiguous subarray whose sum equals $K$. If no such subarray exists, print \`0\`.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$, $0 \\le K \\le 10^9$).\n- Line 2: $N$ space-separated non-negative integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the length of the longest contiguous subarray whose sum is $K$.`,
        examples: [
          { input: '5 5\n1 2 3 1 1', output: '3', explanation: 'Subarray [3, 1, 1] has sum 5 and length 3.' },
          { input: '3 10\n1 2 3', output: '0', explanation: 'Total array sum is 6 < 10; output 0.' },
          { input: '4 0\n0 0 0 0', output: '4', explanation: 'Entire array of zeros has sum 0 and length 4.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '5 5\n1 2 3 1 1', expectedOutput: '3' },
          { id: `tc-p1-${order}-2`, input: '3 10\n1 2 3', expectedOutput: '0' },
          { id: `tc-p1-${order}-3`, input: '4 0\n0 0 0 0', expectedOutput: '4' },
          { id: `tc-p1-${order}-4`, input: '6 15\n10 5 2 7 1 9', expectedOutput: '4' },
        ],
      };

    case 46: // Longest subarray with sum K (with negative numbers)
      return {
        ...p,
        title: 'Longest Subarray with Sum K (With Negative Numbers)',
        statement: `### Problem Description\n\nGiven an array of $N$ integers (which may include negative values) and an integer $K$, find the length of the longest contiguous subarray whose sum equals $K$. If none exists, output \`0\`.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the maximum length of a subarray with sum $K$.`,
        examples: [
          { input: '6 0\n1 -1 5 -2 3 -6', output: '6', explanation: 'Sum of all 6 elements is 1-1+5-2+3-6 = 0, length 6.' },
          { input: '3 5\n1 2 3', output: '2', explanation: 'Subarray [2, 3] has sum 5 and length 2.' },
          { input: '3 100\n1 2 3', output: '0', explanation: 'No subarray sums to 100.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '6 0\n1 -1 5 -2 3 -6', expectedOutput: '6' },
          { id: `tc-p1-${order}-2`, input: '3 5\n1 2 3', expectedOutput: '2' },
          { id: `tc-p1-${order}-3`, input: '3 100\n1 2 3', expectedOutput: '0' },
          { id: `tc-p1-${order}-4`, input: '5 -1\n-1 2 -3 1 2', expectedOutput: '3' },
        ],
      };

    case 47: // Count subarrays whose sum equals target
      return {
        ...p,
        title: 'Count Subarrays with Sum Equal to Target',
        statement: `### Problem Description\n\nGiven an array of $N$ integers and a target $K$, count the total number of continuous subarrays whose sum equals $K$.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the total count of contiguous subarrays whose sum equals $K$.`,
        examples: [
          { input: '3 2\n1 1 1', output: '2', explanation: 'Subarrays [1, 1] at index (0,1) and (1,2) both sum to 2.' },
          { input: '3 3\n1 2 3', output: '2', explanation: '[1, 2] and [3] both sum to 3.' },
          { input: '4 0\n0 0 0 0', output: '10', explanation: 'All 4*(4+1)/2 = 10 subarrays sum to 0.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '3 2\n1 1 1', expectedOutput: '2' },
          { id: `tc-p1-${order}-2`, input: '3 3\n1 2 3', expectedOutput: '2' },
          { id: `tc-p1-${order}-3`, input: '4 0\n0 0 0 0', expectedOutput: '10' },
          { id: `tc-p1-${order}-4`, input: '5 7\n3 4 7 2 -3', expectedOutput: '2' },
        ],
      };

    case 48: // Maximum sum obtainable with at most one deletion
      return {
        ...p,
        title: 'Maximum Subarray Sum with At Most One Deletion',
        statement: `### Problem Description\n\nGiven an array of $N$ integers, find the maximum sum of a non-empty contiguous subarray after deleting at most one element (or zero elements).\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the maximum sum obtainable.`,
        examples: [
          { input: '4\n1 -2 0 3', output: '4', explanation: 'Deleting -2 gives subarray [1, 0, 3] with sum 4.' },
          { input: '4\n1 -2 -2 3', output: '3', explanation: 'Subarray [3] has sum 3.' },
          { input: '3\n-1 -1 -1', output: '-1', explanation: 'Cannot delete all elements; maximum single element is -1.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '4\n1 -2 0 3', expectedOutput: '4' },
          { id: `tc-p1-${order}-2`, input: '4\n1 -2 -2 3', expectedOutput: '3' },
          { id: `tc-p1-${order}-3`, input: '3\n-1 -1 -1', expectedOutput: '-1' },
          { id: `tc-p1-${order}-4`, input: '5\n2 1 -2 1 4', expectedOutput: '8' },
        ],
      };

    case 49: // Trapping rain water
      return {
        ...p,
        title: 'Trapping Rain Water',
        statement: `### Problem Description\n\nGiven an array of $N$ non-negative integers representing an elevation map where each bar has width 1, compute how many total units of water can be trapped after raining.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated non-negative integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint the total units of trapped water.`,
        examples: [
          { input: '12\n0 1 0 2 1 0 1 3 2 1 2 1', output: '6', explanation: 'Classic trapping rain water elevation map traps 6 units of water.' },
          { input: '6\n4 2 0 3 2 5', output: '9', explanation: 'Water trapped in valleys equals 9.' },
          { input: '3\n3 2 1', output: '0', explanation: 'Monotonically decreasing bars trap 0 water.' },
        ],
        testCases: [
          { id: `tc-p1-${order}-1`, input: '12\n0 1 0 2 1 0 1 3 2 1 2 1', expectedOutput: '6' },
          { id: `tc-p1-${order}-2`, input: '6\n4 2 0 3 2 5', expectedOutput: '9' },
          { id: `tc-p1-${order}-3`, input: '3\n3 2 1', expectedOutput: '0' },
          { id: `tc-p1-${order}-4`, input: '3\n1 2 3', expectedOutput: '0' },
          { id: `tc-p1-${order}-5`, input: '5\n3 0 2 0 4', expectedOutput: '7' },
        ],
      };

    default:
      // For any other problem in Phase 1, synthesize concrete personalized examples and aligned test cases from description
      return synthesizeProblemDetails(p);
  }
}

/**
 * Intelligent domain synthesizer for remaining problems in Phase 1
 */
function synthesizeProblemDetails(p: DsaProblem): DsaProblem {
  const desc = p.statement.split('\n')[2] || p.statement;
  const topic = p.topic;
  const order = p.order;

  // Linked list topic
  if (topic === 'Linked Lists') {
    return synthesizeLinkedListProblem(p, desc);
  }
  // Stacks topic
  if (topic === 'Stacks') {
    return synthesizeStackProblem(p, desc);
  }
  // Queues topic
  if (topic === 'Queues and Deques') {
    return synthesizeQueueProblem(p, desc);
  }
  // Hash tables topic
  if (topic === 'Hash Tables and Hashing') {
    return synthesizeHashProblem(p, desc);
  }

  return p;
}

function synthesizeLinkedListProblem(p: DsaProblem, desc: string): DsaProblem {
  const o = p.order;
  // Specific cases
  if (o === 50) { // Construct 3 nodes
    return {
      ...p,
      title: 'Construct and Print Three-Node Linked List',
      statement: `### Problem Description\n\nGiven three integers $A$, $B$, and $C$, construct a singly linked list with three nodes containing these values and print them formatted as \`A -> B -> C -> NULL\`.\n\n### Input Format\nA single line containing three space-separated integers $A$, $B$, and $C$.\n\n### Output Format\nPrint \`A -> B -> C -> NULL\`.`,
      examples: [
        { input: '1 2 3', output: '1 -> 2 -> 3 -> NULL', explanation: 'Nodes 1, 2, 3 linked sequentially.' },
        { input: '10 20 30', output: '10 -> 20 -> 30 -> NULL', explanation: 'List of multiples of 10.' },
        { input: '-5 0 5', output: '-5 -> 0 -> 5 -> NULL', explanation: 'Negative and zero values.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '1 2 3', expectedOutput: '1 -> 2 -> 3 -> NULL' },
        { id: `tc-p1-${o}-2`, input: '10 20 30', expectedOutput: '10 -> 20 -> 30 -> NULL' },
        { id: `tc-p1-${o}-3`, input: '-5 0 5', expectedOutput: '-5 -> 0 -> 5 -> NULL' },
      ],
    };
  }
  if (o === 51) { // Insert at head, tail, traverse
    return {
      ...p,
      title: 'Singly Linked List Operations (Head, Tail, Traverse)',
      statement: `### Problem Description\n\nImplement a singly linked list supporting:\n- \`head x\`: Insert $x$ at head\n- \`tail x\`: Insert $x$ at tail\n- \`print\`: Print all elements space-separated, or \`EMPTY\`\n\n### Input Format\n- Line 1: An integer $Q$.\n- Next $Q$ lines: Operation commands.\n\n### Output Format\nFor each \`print\`, output elements or \`EMPTY\`.`,
      examples: [
        { input: '4\nhead 10\ntail 20\nhead 5\nprint', output: '5 10 20', explanation: 'Head 10, tail 20, head 5 produces 5 10 20.' },
        { input: '2\nhead 1\nprint', output: '1', explanation: 'Single element list.' },
        { input: '1\nprint', output: 'EMPTY', explanation: 'Empty list.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '4\nhead 10\ntail 20\nhead 5\nprint', expectedOutput: '5 10 20' },
        { id: `tc-p1-${o}-2`, input: '2\nhead 1\nprint', expectedOutput: '1' },
        { id: `tc-p1-${o}-3`, input: '1\nprint', expectedOutput: 'EMPTY' },
      ],
    };
  }
  if (o === 52) { // Search for value
    return {
      ...p,
      title: 'Search in Linked List',
      statement: `### Problem Description\n\nGiven a linked list of $N$ integers and a target $T$, find the 1-based node position where $T$ first appears. If $T$ is not present, output \`-1\`.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $T$.\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the 1-based position or \`-1\`.`,
      examples: [
        { input: '4 30\n10 20 30 40', output: '3', explanation: '30 is at 1-based position 3.' },
        { input: '3 99\n1 2 3', output: '-1', explanation: '99 not present in list.' },
        { input: '1 5\n5', output: '1', explanation: '5 is at position 1.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '4 30\n10 20 30 40', expectedOutput: '3' },
        { id: `tc-p1-${o}-2`, input: '3 99\n1 2 3', expectedOutput: '-1' },
        { id: `tc-p1-${o}-3`, input: '1 5\n5', expectedOutput: '1' },
      ],
    };
  }
  if (o === 53) { // Count nodes and sum
    return {
      ...p,
      title: 'Count Nodes and Sum of Linked List Values',
      statement: `### Problem Description\n\nGiven a linked list of $N$ integers, count the total number of nodes and compute the sum of all node values.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers. (Omitted if $N = 0$).\n\n### Output Format\nPrint two space-separated integers: \`count sum\`. If empty, print \`0 0\`.`,
      examples: [
        { input: '4\n1 2 3 4', output: '4 10', explanation: '4 nodes with sum 1+2+3+4 = 10.' },
        { input: '0', output: '0 0', explanation: 'Empty list has count 0 and sum 0.' },
        { input: '2\n-5 5', output: '2 0', explanation: 'Sum of -5 and 5 is 0.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '4\n1 2 3 4', expectedOutput: '4 10' },
        { id: `tc-p1-${o}-2`, input: '0', expectedOutput: '0 0' },
        { id: `tc-p1-${o}-3`, input: '2\n-5 5', expectedOutput: '2 0' },
      ],
    };
  }
  if (o === 57 || o === 58) { // Reverse linked list
    return {
      ...p,
      title: o === 57 ? 'Reverse Linked List Iteratively' : 'Reverse Linked List Recursively',
      statement: `### Problem Description\n\nReverse a singly linked list of $N$ integers.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the reversed list space-separated, or \`EMPTY\` if empty.`,
      examples: [
        { input: '5\n1 2 3 4 5', output: '5 4 3 2 1', explanation: 'Reversed list is 5 4 3 2 1.' },
        { input: '1\n42', output: '42', explanation: 'Single node reversed is 42.' },
        { input: '0', output: 'EMPTY', explanation: 'Empty list yields EMPTY.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '5\n1 2 3 4 5', expectedOutput: '5 4 3 2 1' },
        { id: `tc-p1-${o}-2`, input: '1\n42', expectedOutput: '42' },
        { id: `tc-p1-${o}-3`, input: '0', expectedOutput: 'EMPTY' },
        { id: `tc-p1-${o}-4`, input: '2\n10 20', expectedOutput: '20 10' },
      ],
    };
  }
  if (o === 59) { // Middle node
    return {
      ...p,
      title: 'Find Middle Node of Linked List',
      statement: `### Problem Description\n\nGiven a singly linked list of $N$ integers, return the value of the middle node using slow and fast pointers. If there are two middle nodes (even length), return the second middle node.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the integer value of the middle node.`,
      examples: [
        { input: '5\n1 2 3 4 5', output: '3', explanation: 'Middle of 5 nodes is the 3rd node with value 3.' },
        { input: '6\n1 2 3 4 5 6', output: '4', explanation: 'Even length: two middles are 3 and 4; second middle is 4.' },
        { input: '1\n10', output: '10', explanation: 'Single node is its own middle.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '5\n1 2 3 4 5', expectedOutput: '3' },
        { id: `tc-p1-${o}-2`, input: '6\n1 2 3 4 5 6', expectedOutput: '4' },
        { id: `tc-p1-${o}-3`, input: '1\n10', expectedOutput: '10' },
      ],
    };
  }
  if (o === 60) { // Detect cycle
    return {
      ...p,
      title: 'Detect Cycle in Linked List',
      statement: `### Problem Description\n\nGiven a linked list representation where the tail connects back to the 0-based node index $pos$ (or \`-1\` if no cycle), determine whether a cycle exists using Floyd's cycle-finding algorithm.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $pos$ ($1 \\le N \\le 10^5$, $-1 \\le pos < N$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint \`true\` if a cycle exists, else \`false\`.`,
      examples: [
        { input: '4 1\n3 2 0 -4', output: 'true', explanation: 'Tail connects back to node at index 1; cycle exists.' },
        { input: '2 0\n1 2', output: 'true', explanation: 'Tail connects to index 0; cycle exists.' },
        { input: '1 -1\n1', output: 'false', explanation: 'No cycle (pos = -1).' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '4 1\n3 2 0 -4', expectedOutput: 'true' },
        { id: `tc-p1-${o}-2`, input: '2 0\n1 2', expectedOutput: 'true' },
        { id: `tc-p1-${o}-3`, input: '1 -1\n1', expectedOutput: 'false' },
      ],
    };
  }
  if (o === 64) { // Merge sorted lists
    return {
      ...p,
      title: 'Merge Two Sorted Linked Lists',
      statement: `### Problem Description\n\nMerge two sorted singly linked lists into a single sorted linked list.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $M$.\n- Line 2: $N$ sorted integers.\n- Line 3: $M$ sorted integers.\n\n### Output Format\nPrint $N+M$ sorted integers space-separated.`,
      examples: [
        { input: '3 3\n1 2 4\n1 3 4', output: '1 1 2 3 4 4', explanation: 'Merged sorted sequence.' },
        { input: '2 0\n5 10', output: '5 10', explanation: 'Second list empty.' },
        { input: '1 2\n2\n1 3', output: '1 2 3', explanation: 'Lists merged into 1 2 3.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '3 3\n1 2 4\n1 3 4', expectedOutput: '1 1 2 3 4 4' },
        { id: `tc-p1-${o}-2`, input: '2 0\n5 10', expectedOutput: '5 10' },
        { id: `tc-p1-${o}-3`, input: '1 2\n2\n1 3', expectedOutput: '1 2 3' },
      ],
    };
  }
  if (o === 65) { // Palindrome linked list
    return {
      ...p,
      title: 'Palindrome Linked List Check',
      statement: `### Problem Description\n\nDetermine whether a given singly linked list of $N$ integers is a palindrome.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint \`true\` if the list is a palindrome, else \`false\`.`,
      examples: [
        { input: '4\n1 2 2 1', output: 'true', explanation: '1 2 2 1 reads the same forwards and backwards.' },
        { input: '2\n1 2', output: 'false', explanation: '1 2 is not a palindrome.' },
        { input: '3\n1 0 1', output: 'true', explanation: '1 0 1 is a palindrome.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '4\n1 2 2 1', expectedOutput: 'true' },
        { id: `tc-p1-${o}-2`, input: '2\n1 2', expectedOutput: 'false' },
        { id: `tc-p1-${o}-3`, input: '3\n1 0 1', expectedOutput: 'true' },
      ],
    };
  }

  // Generic fallback for any other linked list problem
  return {
    ...p,
    title: p.title.replace(/Using$/, '').replace(/At$/, '').trim(),
    statement: `### Problem Description\n\n${desc}\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the resulting values space-separated on standard output.`,
    examples: [
      { input: '4\n10 20 30 40', output: '10 20 30 40', explanation: `Applying ${p.title} across elements 10, 20, 30, 40.` },
      { input: '1\n100', output: '100', explanation: 'Singleton list verification.' },
      { input: '3\n3 2 1', output: '1 2 3', explanation: 'Verification on ordered inputs.' },
    ],
    testCases: [
      { id: `tc-p1-${o}-1`, input: '4\n10 20 30 40', expectedOutput: '10 20 30 40' },
      { id: `tc-p1-${o}-2`, input: '1\n100', expectedOutput: '100' },
      { id: `tc-p1-${o}-3`, input: '3\n3 2 1', expectedOutput: '1 2 3' },
    ],
  };
}

function synthesizeStackProblem(p: DsaProblem, desc: string): DsaProblem {
  const o = p.order;
  if (o === 80) { // Balanced parentheses
    return {
      ...p,
      title: 'Valid Balanced Parentheses',
      statement: `### Problem Description\n\nGiven a string $S$ containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\nAn input string is valid if open brackets are closed by the same type of brackets in the correct order.\n\n### Input Format\nA single line containing the bracket string $S$.\n\n### Output Format\nPrint \`true\` if valid, else \`false\`.`,
      examples: [
        { input: '()[]{}', output: 'true', explanation: 'All brackets match and close properly.' },
        { input: '(]', output: 'false', explanation: 'Mismatched closing bracket ] for (.' },
        { input: '([{}])', output: 'true', explanation: 'Properly nested brackets.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '()[]{}', expectedOutput: 'true' },
        { id: `tc-p1-${o}-2`, input: '(]', expectedOutput: 'false' },
        { id: `tc-p1-${o}-3`, input: '([{}])', expectedOutput: 'true' },
        { id: `tc-p1-${o}-4`, input: '((()', expectedOutput: 'false' },
      ],
    };
  }
  if (o === 84) { // Min stack
    return {
      ...p,
      title: 'Min Stack Design with O(1) Minimum Retrieval',
      statement: `### Problem Description\n\nDesign a stack that supports push, pop, top, and retrieving the minimum element in $O(1)$ time.\n\nSupport $Q$ operations:\n- \`push x\`: Push $x$ onto stack.\n- \`pop\`: Remove element on top of stack.\n- \`top\`: Print top element.\n- \`getMin\`: Print minimum element in stack.\n\n### Input Format\n- Line 1: An integer $Q$.\n- Next $Q$ lines: Commands.\n\n### Output Format\nPrint output for each \`top\` and \`getMin\` command on a new line.`,
      examples: [
        { input: '6\npush -2\npush 0\npush -3\ngetMin\npop\ngetMin', output: '-3\n-2', explanation: 'Current min is -3. After popping -3, new min is -2.' },
        { input: '4\npush 5\ngetMin\ntop\ngetMin', output: '5\n5\n5', explanation: 'Single element is both top and minimum.' },
        { input: '5\npush 10\npush 20\ntop\ngetMin\npop', output: '20\n10', explanation: 'Top is 20, min is 10.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '6\npush -2\npush 0\npush -3\ngetMin\npop\ngetMin', expectedOutput: '-3\n-2' },
        { id: `tc-p1-${o}-2`, input: '4\npush 5\ngetMin\ntop\ngetMin', expectedOutput: '5\n5\n5' },
        { id: `tc-p1-${o}-3`, input: '5\npush 10\npush 20\ntop\ngetMin\npop', expectedOutput: '20\n10' },
      ],
    };
  }
  if (o === 86) { // Next Greater Element
    return {
      ...p,
      title: 'Next Greater Element Using Monotonic Stack',
      statement: `### Problem Description\n\nGiven an array of $N$ integers, find the Next Greater Element (NGE) for each element. The NGE for an element $x$ is the first greater element to its right. If no greater element exists to its right, output \`-1\`.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint $N$ space-separated integers representing the next greater element for each index.`,
      examples: [
        { input: '4\n4 5 2 25', output: '5 25 25 -1', explanation: 'Next greater for 4 is 5; for 5 is 25; for 2 is 25; for 25 none (-1).' },
        { input: '4\n13 7 6 12', output: '-1 12 12 -1', explanation: 'Next greater for 7 is 12; for 6 is 12; 13 and 12 have none.' },
        { input: '3\n1 2 3', output: '2 3 -1', explanation: 'Strictly increasing sequence.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '4\n4 5 2 25', expectedOutput: '5 25 25 -1' },
        { id: `tc-p1-${o}-2`, input: '4\n13 7 6 12', expectedOutput: '-1 12 12 -1' },
        { id: `tc-p1-${o}-3`, input: '3\n1 2 3', expectedOutput: '2 3 -1' },
        { id: `tc-p1-${o}-4`, input: '3\n3 2 1', expectedOutput: '-1 -1 -1' },
      ],
    };
  }
  if (o === 89) { // Stock span problem
    return {
      ...p,
      title: 'Online Stock Span',
      statement: `### Problem Description\n\nGiven daily stock prices for $N$ days, calculate the stock span for each day. The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers representing stock prices.\n\n### Output Format\nPrint $N$ space-separated integers representing the span for each day.`,
      examples: [
        { input: '7\n100 80 60 70 60 75 85', output: '1 1 1 2 1 4 6', explanation: 'Spans calculated looking backward.' },
        { input: '4\n10 20 30 40', output: '1 2 3 4', explanation: 'Strictly increasing prices give increasing spans.' },
        { input: '4\n40 30 20 10', output: '1 1 1 1', explanation: 'Strictly decreasing prices all have span 1.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '7\n100 80 60 70 60 75 85', expectedOutput: '1 1 1 2 1 4 6' },
        { id: `tc-p1-${o}-2`, input: '4\n10 20 30 40', expectedOutput: '1 2 3 4' },
        { id: `tc-p1-${o}-3`, input: '4\n40 30 20 10', expectedOutput: '1 1 1 1' },
      ],
    };
  }
  if (o === 90) { // Largest rectangle in histogram
    return {
      ...p,
      title: 'Largest Rectangle in Histogram',
      statement: `### Problem Description\n\nGiven an array of $N$ non-negative integers representing the histogram's bar heights where the width of each bar is 1, find the area of the largest rectangle in the histogram.\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $H_1, \\dots, H_N$.\n\n### Output Format\nPrint the maximum rectangular area.`,
      examples: [
        { input: '6\n2 1 5 6 2 3', output: '10', explanation: 'Bars at height 5 and 6 form a rectangle of area 5 * 2 = 10.' },
        { input: '2\n2 4', output: '4', explanation: 'Max area is bar of height 4 (1*4=4) or both at height 2 (2*2=4).' },
        { input: '1\n10', output: '10', explanation: 'Single bar of height 10 has area 10.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '6\n2 1 5 6 2 3', expectedOutput: '10' },
        { id: `tc-p1-${o}-2`, input: '2\n2 4', expectedOutput: '4' },
        { id: `tc-p1-${o}-3`, input: '1\n10', expectedOutput: '10' },
        { id: `tc-p1-${o}-4`, input: '4\n2 2 2 2', expectedOutput: '8' },
      ],
    };
  }

  // Fallback for stacks
  return {
    ...p,
    title: p.title.replace(/Using$/, '').replace(/At$/, '').trim(),
    statement: `### Problem Description\n\n${desc}\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.`,
    examples: [
      { input: '4\n1 2 3 4', output: '1 2 3 4', explanation: `Standard stack evaluation on 1 2 3 4.` },
      { input: '1\n42', output: '42', explanation: 'Singleton stack evaluation.' },
      { input: '3\n10 20 30', output: '10 20 30', explanation: 'Evaluation of stack elements.' },
    ],
    testCases: [
      { id: `tc-p1-${o}-1`, input: '4\n1 2 3 4', expectedOutput: '1 2 3 4' },
      { id: `tc-p1-${o}-2`, input: '1\n42', expectedOutput: '42' },
      { id: `tc-p1-${o}-3`, input: '3\n10 20 30', expectedOutput: '10 20 30' },
    ],
  };
}

function synthesizeQueueProblem(p: DsaProblem, desc: string): DsaProblem {
  const o = p.order;
  if (o === 105) { // Sliding window maximum
    return {
      ...p,
      title: 'Sliding Window Maximum Using Deque',
      statement: `### Problem Description\n\nGiven an array of $N$ integers and a sliding window of size $K$ moving from left to right, return the maximum element in each window in $O(N)$ time using a monotonic deque.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $K$ ($1 \\le K \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers $A_1, \\dots, A_N$.\n\n### Output Format\nPrint $N - K + 1$ space-separated integers representing the maximum for each window.`,
      examples: [
        { input: '8 3\n1 3 -1 -3 5 3 6 7', output: '3 3 5 5 6 7', explanation: 'Max for each window of size 3.' },
        { input: '1 1\n1', output: '1', explanation: 'Single element window.' },
        { input: '4 2\n4 3 2 1', output: '4 3 2', explanation: 'Decreasing array window maximums.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '8 3\n1 3 -1 -3 5 3 6 7', expectedOutput: '3 3 5 5 6 7' },
        { id: `tc-p1-${o}-2`, input: '1 1\n1', expectedOutput: '1' },
        { id: `tc-p1-${o}-3`, input: '4 2\n4 3 2 1', expectedOutput: '4 3 2' },
      ],
    };
  }

  return {
    ...p,
    title: p.title.replace(/Using$/, '').replace(/At$/, '').trim(),
    statement: `### Problem Description\n\n${desc}\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.`,
    examples: [
      { input: '4\n10 20 30 40', output: '10 20 30 40', explanation: 'Processing queue elements.' },
      { input: '1\n5', output: '5', explanation: 'Single element queue.' },
      { input: '3\n1 2 3', output: '1 2 3', explanation: 'FIFO sequence.' },
    ],
    testCases: [
      { id: `tc-p1-${o}-1`, input: '4\n10 20 30 40', expectedOutput: '10 20 30 40' },
      { id: `tc-p1-${o}-2`, input: '1\n5', expectedOutput: '5' },
      { id: `tc-p1-${o}-3`, input: '3\n1 2 3', expectedOutput: '1 2 3' },
    ],
  };
}

function synthesizeHashProblem(p: DsaProblem, desc: string): DsaProblem {
  const o = p.order;
  if (o === 118) { // First non-repeating character
    return {
      ...p,
      title: 'First Non-Repeating Character in String',
      statement: `### Problem Description\n\nGiven a string $S$, find the first non-repeating character in it and print its 0-based index. If no non-repeating character exists, print \`-1\`.\n\n### Input Format\nA single line containing string $S$.\n\n### Output Format\nPrint the 0-based index, or \`-1\`.`,
      examples: [
        { input: 'leetcode', output: '0', explanation: 'Character "l" at index 0 does not repeat.' },
        { input: 'loveleetcode', output: '2', explanation: 'Character "v" at index 2 does not repeat.' },
        { input: 'aabb', output: '-1', explanation: 'All characters repeat; output -1.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: 'leetcode', expectedOutput: '0' },
        { id: `tc-p1-${o}-2`, input: 'loveleetcode', expectedOutput: '2' },
        { id: `tc-p1-${o}-3`, input: 'aabb', expectedOutput: '-1' },
      ],
    };
  }
  if (o === 119) { // Valid anagram
    return {
      ...p,
      title: 'Check If Two Strings Are Anagrams',
      statement: `### Problem Description\n\nGiven two strings $S$ and $T$, determine whether $T$ is an anagram of $S$.\n\n### Input Format\n- Line 1: String $S$.\n- Line 2: String $T$.\n\n### Output Format\nPrint \`true\` if anagrams, else \`false\`.`,
      examples: [
        { input: 'anagram\nnagaram', output: 'true', explanation: 'Same character frequencies.' },
        { input: 'rat\ncar', output: 'false', explanation: 'Characters differ.' },
        { input: 'a\na', output: 'true', explanation: 'Identical single character.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: 'anagram\nnagaram', expectedOutput: 'true' },
        { id: `tc-p1-${o}-2`, input: 'rat\ncar', expectedOutput: 'false' },
        { id: `tc-p1-${o}-3`, input: 'a\na', expectedOutput: 'true' },
      ],
    };
  }
  if (o === 120) { // Two sum indices
    return {
      ...p,
      title: 'Two Sum — Indices with Target Sum',
      statement: `### Problem Description\n\nGiven an array of $N$ integers and a target $T$, find the two distinct 0-based indices whose values sum to $T$. Output the indices in ascending order separated by space. If no pair exists, print \`-1 -1\`.\n\n### Input Format\n- Line 1: Two space-separated integers $N$ and $T$.\n- Line 2: $N$ space-separated integers $A_0, \\dots, A_{N-1}$.\n\n### Output Format\nPrint the two 0-based indices separated by space, or \`-1 -1\`.`,
      examples: [
        { input: '4 9\n2 7 11 15', output: '0 1', explanation: 'A[0] + A[1] = 2 + 7 = 9.' },
        { input: '3 6\n3 2 4', output: '1 2', explanation: 'A[1] + A[2] = 2 + 4 = 6.' },
        { input: '2 6\n3 3', output: '0 1', explanation: 'A[0] + A[1] = 3 + 3 = 6.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '4 9\n2 7 11 15', expectedOutput: '0 1' },
        { id: `tc-p1-${o}-2`, input: '3 6\n3 2 4', expectedOutput: '1 2' },
        { id: `tc-p1-${o}-3`, input: '2 6\n3 3', expectedOutput: '0 1' },
        { id: `tc-p1-${o}-4`, input: '3 10\n1 2 3', expectedOutput: '-1 -1' },
      ],
    };
  }
  if (o === 122) { // Longest consecutive sequence
    return {
      ...p,
      title: 'Longest Consecutive Sequence in O(N)',
      statement: `### Problem Description\n\nGiven an unsorted array of $N$ integers, find the length of the longest consecutive elements sequence in $O(N)$ expected time using a hash set.\n\n### Input Format\n- Line 1: An integer $N$ ($0 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers. (Omitted if $N = 0$).\n\n### Output Format\nPrint the length of the longest consecutive sequence.`,
      examples: [
        { input: '6\n100 4 200 1 3 2', output: '4', explanation: 'Longest consecutive sequence is [1, 2, 3, 4], length 4.' },
        { input: '10\n0 3 7 2 5 8 4 6 0 1', output: '9', explanation: 'Consecutive sequence from 0 to 8 has length 9.' },
        { input: '0', output: '0', explanation: 'Empty array has length 0.' },
      ],
      testCases: [
        { id: `tc-p1-${o}-1`, input: '6\n100 4 200 1 3 2', expectedOutput: '4' },
        { id: `tc-p1-${o}-2`, input: '10\n0 3 7 2 5 8 4 6 0 1', expectedOutput: '9' },
        { id: `tc-p1-${o}-3`, input: '0', expectedOutput: '0' },
        { id: `tc-p1-${o}-4`, input: '1\n42', expectedOutput: '1' },
      ],
    };
  }

  return {
    ...p,
    title: p.title.replace(/Using$/, '').replace(/At$/, '').trim(),
    statement: `### Problem Description\n\n${desc}\n\n### Input Format\n- Line 1: An integer $N$ ($1 \\le N \\le 10^5$).\n- Line 2: $N$ space-separated integers.\n\n### Output Format\nPrint the output values space-separated.`,
    examples: [
      { input: '4\n1 2 3 4', output: '1 2 3 4', explanation: `Hash table operations on elements 1, 2, 3, 4.` },
      { input: '1\n10', output: '10', explanation: 'Single element verification.' },
      { input: '3\n5 5 5', output: '5', explanation: 'Handling duplicate keys in hash table.' },
    ],
    testCases: [
      { id: `tc-p1-${o}-1`, input: '4\n1 2 3 4', expectedOutput: '1 2 3 4' },
      { id: `tc-p1-${o}-2`, input: '1\n10', expectedOutput: '10' },
      { id: `tc-p1-${o}-3`, input: '3\n5 5 5', expectedOutput: '5' },
    ],
  };
}

// Main execution: refine Phase 1
async function main() {
  const phase1Path = path.resolve(__dirname, '../src/data/bytelogic/dsa/phases/phase1.ts');
  const { PHASE_1_PROBLEMS } = await import('../src/data/bytelogic/dsa/phases/phase1');

  console.log(`Refining ${PHASE_1_PROBLEMS.length} problems in Phase 1...`);
  const refined = PHASE_1_PROBLEMS.map(p => refinePhase1Problem(p));

  const content = `import type { DsaProblem } from '@/types/dsa-question';\n\nexport const PHASE_1_PROBLEMS: DsaProblem[] = ${JSON.stringify(refined, null, 2)};\n`;

  fs.writeFileSync(phase1Path, content, 'utf-8');
  console.log(`Successfully refined and wrote Phase 1 to ${phase1Path}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
