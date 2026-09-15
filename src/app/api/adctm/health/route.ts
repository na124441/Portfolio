import { NextResponse } from 'next/server';

const ADCTM_API_URL = process.env.ADCTM_API_URL || 'http://127.0.0.1:8000';

export async function GET() {
  const startTime = Date.now();
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(`${ADCTM_API_URL}/health`, {
      signal: controller.signal,
      cache: 'no-store',
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Backend returned status ${res.status}`);
    }

    const data = await res.json();
    const latencyMs = Date.now() - startTime;

    return NextResponse.json({
      status: 'online',
      latencyMs,
      apiUrl: ADCTM_API_URL.replace(/:\/\/[^@]+@/, '://'), // sanitize credentials if present
      version: data.version,
      ppo_available: data.ppo_available,
      supported_controllers: data.supported_controllers,
      supported_tasks: data.supported_tasks,
    });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        status: 'offline',
        latencyMs: null,
        apiUrl: ADCTM_API_URL.replace(/:\/\/[^@]+@/, '://'),
        ppo_available: false,
        supported_controllers: ['rule_based', 'pid', 'ppo', 'zero'],
        supported_tasks: ['easy', 'medium', 'hard'],
        message: 'ADCTM Python service offline. Canonical precomputed benchmark mode active.',
        detail: err instanceof Error ? err.message : String(err),
      },
      { status: 200 }
    );
  }
}
