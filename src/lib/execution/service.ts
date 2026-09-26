/**
 * Execution Service Factory & Resolver
 * Instantiates the appropriate remote execution provider based on environment variables.
 * Enforces server-only execution (never runs code on Vercel/Next.js directly).
 */

import type { ExecutionService } from './types';
import { PistonExecutionService } from './piston-adapter';
import { Judge0ExecutionService } from './judge0-adapter';

let cachedService: ExecutionService | null = null;
let lastServiceUrl = '';

export function getExecutionService(): ExecutionService {
  const serverUrl = process.env.EXECUTION_SERVER_URL?.trim();
  const serverToken = process.env.EXECUTION_SERVER_TOKEN?.trim();
  const serverType = process.env.EXECUTION_SERVER_TYPE?.toLowerCase()?.trim();

  // If already instantiated for the same URL, reuse singleton
  if (cachedService && lastServiceUrl === (serverUrl || 'default')) {
    return cachedService;
  }

  // 1. Explicit or auto-detected Judge0 provider
  if (serverUrl && (serverType === 'judge0' || serverUrl.includes('judge0'))) {
    cachedService = new Judge0ExecutionService(serverUrl, serverToken);
    lastServiceUrl = serverUrl;
    return cachedService;
  }

  // 2. Explicit or default Piston provider
  if (serverUrl) {
    cachedService = new PistonExecutionService(serverUrl, serverToken);
    lastServiceUrl = serverUrl;
    return cachedService;
  }

  // 3. Fallback when EXECUTION_SERVER_URL is not configured:
  // Points to local docker default port (http://localhost:2000)
  const defaultUrl = 'http://localhost:2000';
  cachedService = new PistonExecutionService(defaultUrl, serverToken);
  lastServiceUrl = 'default';
  return cachedService;
}
