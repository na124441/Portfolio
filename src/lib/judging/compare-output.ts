/**
 * Output Comparison Engine
 * Supports exact, trimmed, token-based, and floating-point comparisons.
 */

import type { CompareOptions } from './types';

/**
 * Standardize newlines from CRLF to LF and trim individual line endings.
 */
function normalizeLines(str: string): string {
  return str
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map((l) => l.trimEnd())
    .join('\n');
}

/**
 * Split a string into non-whitespace tokens.
 */
function tokenize(str: string): string[] {
  return str.trim().split(/\s+/).filter(Boolean);
}

/**
 * Compare actual program output with expected output using the specified mode.
 */
export function compareOutput(
  actual: string,
  expected: string,
  options: CompareOptions = {}
): boolean {
  const mode = options.mode || 'token';
  const tolerance = options.floatTolerance ?? 1e-6;

  // 1. Exact comparison
  if (mode === 'exact') {
    return actual === expected;
  }

  // 2. Trimmed line-by-line comparison
  if (mode === 'trimmed') {
    return normalizeLines(actual).trim() === normalizeLines(expected).trim();
  }

  // 3. Floating point comparison with tolerance
  if (mode === 'float') {
    const actTokens = tokenize(actual);
    const expTokens = tokenize(expected);

    if (actTokens.length !== expTokens.length) {
      return false;
    }

    for (let i = 0; i < actTokens.length; i++) {
      const actNum = parseFloat(actTokens[i]);
      const expNum = parseFloat(expTokens[i]);

      if (isNaN(actNum) || isNaN(expNum)) {
        // If not numeric, fallback to string equality
        if (actTokens[i] !== expTokens[i]) return false;
      } else {
        if (Math.abs(actNum - expNum) > tolerance) {
          return false;
        }
      }
    }

    return true;
  }

  // 4. Token-based comparison (default)
  // Whitespace-insensitive token comparison:
  // e.g. "1 2 3" matches "1\n2\n3", "[0, 1]" matches "[0, 1]"
  const actualTokens = tokenize(actual);
  const expectedTokens = tokenize(expected);

  if (actualTokens.length !== expectedTokens.length) {
    return false;
  }

  for (let i = 0; i < actualTokens.length; i++) {
    if (actualTokens[i] !== expectedTokens[i]) {
      return false;
    }
  }

  return true;
}
