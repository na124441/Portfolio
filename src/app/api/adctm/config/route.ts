import { NextResponse } from 'next/server';

const ADCTM_API_URL = process.env.ADCTM_API_URL || 'http://127.0.0.1:8000';

export async function GET() {
  try {
    const abortCtrl = new AbortController();
    const timeoutId = setTimeout(() => abortCtrl.abort(), 2000);

    const res = await fetch(`${ADCTM_API_URL}/config`, {
      signal: abortCtrl.signal,
      cache: 'no-store',
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch {
    // Fallback to static package defaults
  }

  return NextResponse.json({
    tasks: {
      easy: { num_zones: 3, target_temperature: 63.0, safe_temperature: 74.0, max_steps: 18, ambient_temperature: 42.0 },
      medium: { num_zones: 5, target_temperature: 61.0, safe_temperature: 74.0, max_steps: 24, ambient_temperature: 44.0, degradation_step: 10, degraded_zone: 2 },
      hard: { num_zones: 8, target_temperature: 50.0, safe_temperature: 70.5, max_steps: 34, ambient_temperature: 52.0, degradation_step: 6, degraded_zone: 4 },
    },
    default_task: 'medium',
    default_seed: 202,
  });
}
