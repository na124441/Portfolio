/**
 * Execution Provider Factory
 *
 * Selects the best available execution provider:
 * 1. DockerExecutionProvider (if Docker is installed and judge image exists)
 * 2. MockExecutionProvider (fallback — always available)
 *
 * The provider is cached per-process to avoid repeated Docker availability checks.
 */

import type { ExecutionProvider } from './types';
import { DockerExecutionProvider } from './docker-provider';
import { MockExecutionProvider } from './mock-provider';

let cachedProvider: ExecutionProvider | null = null;
let lastCheck = 0;
const CHECK_INTERVAL_MS = 60_000; // Re-check Docker availability every 60s

export async function getExecutionProvider(): Promise<ExecutionProvider> {
  const now = Date.now();

  // Return cached provider if still fresh
  if (cachedProvider && now - lastCheck < CHECK_INTERVAL_MS) {
    return cachedProvider;
  }

  // Try Docker first
  const docker = new DockerExecutionProvider();
  if (await docker.isAvailable()) {
    cachedProvider = docker;
    lastCheck = now;
    console.log('[DSA Judge] Using Docker execution provider');
    return docker;
  }

  // Fall back to mock
  const mock = new MockExecutionProvider();
  cachedProvider = mock;
  lastCheck = now;
  console.warn(
    '[DSA Judge] Docker not available — falling back to mock provider. ' +
    'Build the judge image with: docker build -t bytelogic-judge docker/judge/'
  );
  return mock;
}

/** Force re-check provider availability on next call. */
export function invalidateProviderCache(): void {
  cachedProvider = null;
  lastCheck = 0;
}
