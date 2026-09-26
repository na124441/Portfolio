/**
 * In-Memory Sliding Window Rate Limiter
 * Provides per-IP rate limiting and payload validation for /api/execute and /api/submit.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const runLimits = new Map<string, RateLimitRecord>();
const submitLimits = new Map<string, RateLimitRecord>();

// Maximum requests per window
const MAX_RUN_PER_WINDOW = 30; // 30 runs per minute
const MAX_SUBMIT_PER_WINDOW = 15; // 15 submits per minute
const WINDOW_MS = 60_000; // 1 minute

export const MAX_CODE_BYTES = 64 * 1024; // 64 KB
export const MAX_STDIN_BYTES = 64 * 1024; // 64 KB

function cleanOldEntries(map: Map<string, RateLimitRecord>, now: number) {
  if (map.size > 5000) {
    for (const [key, record] of map.entries()) {
      record.timestamps = record.timestamps.filter((ts) => now - ts < WINDOW_MS);
      if (record.timestamps.length === 0) {
        map.delete(key);
      }
    }
  }
}

export function checkRateLimit(
  ip: string,
  mode: 'run' | 'submit'
): { allowed: boolean; remaining: number; retryAfterSec?: number } {
  const now = Date.now();
  const map = mode === 'run' ? runLimits : submitLimits;
  const maxLimit = mode === 'run' ? MAX_RUN_PER_WINDOW : MAX_SUBMIT_PER_WINDOW;

  cleanOldEntries(map, now);

  const record = map.get(ip) || { timestamps: [] };
  // Keep only timestamps within window
  record.timestamps = record.timestamps.filter((ts) => now - ts < WINDOW_MS);

  if (record.timestamps.length >= maxLimit) {
    const oldest = record.timestamps[0];
    const retryAfterSec = Math.ceil((oldest + WINDOW_MS - now) / 1000);
    return {
      allowed: false,
      remaining: 0,
      retryAfterSec: Math.max(1, retryAfterSec),
    };
  }

  record.timestamps.push(now);
  map.set(ip, record);

  return {
    allowed: true,
    remaining: maxLimit - record.timestamps.length,
  };
}

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  return '127.0.0.1';
}
