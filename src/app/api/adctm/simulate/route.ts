import { NextRequest, NextResponse } from 'next/server';

const ADCTM_API_URL = process.env.ADCTM_API_URL || 'http://127.0.0.1:8000';

const ALLOWED_CONTROLLERS = new Set(['rule_based', 'pid', 'ppo', 'zero']);
const ALLOWED_TASKS = new Set(['easy', 'medium', 'hard']);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const controller = String(body.controller || 'rule_based').toLowerCase().trim();
    const task = String(body.task || 'medium').toLowerCase().trim();
    const seed = Number.isInteger(body.seed) ? body.seed : 202;
    const steps = typeof body.steps === 'number' ? Math.min(Math.max(1, body.steps), 100) : 24;
    const fault = body.fault !== false;

    // Safety validation
    if (!ALLOWED_CONTROLLERS.has(controller)) {
      return NextResponse.json(
        { error: 'invalid_controller', message: `Controller must be one of: ${Array.from(ALLOWED_CONTROLLERS).join(', ')}` },
        { status: 400 }
      );
    }

    if (!ALLOWED_TASKS.has(task)) {
      return NextResponse.json(
        { error: 'invalid_task', message: `Task must be one of: ${Array.from(ALLOWED_TASKS).join(', ')}` },
        { status: 400 }
      );
    }

    // Forward to Python FastAPI service with 10-second timeout
    const abortCtrl = new AbortController();
    const timeoutId = setTimeout(() => abortCtrl.abort(), 10000);

    try {
      const apiRes = await fetch(`${ADCTM_API_URL}/simulate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          controller,
          task,
          seed,
          steps,
          fault,
        }),
        signal: abortCtrl.signal,
        cache: 'no-store',
      });
      clearTimeout(timeoutId);

      if (!apiRes.ok) {
        const errData = await apiRes.json().catch(() => ({}));
        return NextResponse.json(
          {
            error: 'backend_error',
            message: errData.detail || `Backend error (status ${apiRes.status})`,
          },
          { status: apiRes.status }
        );
      }

      const simData = await apiRes.json();
      return NextResponse.json({
        ...simData,
        backend_connected: true,
      });
    } catch (networkErr: unknown) {
      clearTimeout(timeoutId);
      return NextResponse.json(
        {
          error: 'backend_offline',
          backend_connected: false,
          message: 'The ADCTM Python backend is currently unreachable. Start the FastAPI service via "python -m uvicorn adctm_api.main:app" or set ADCTM_API_URL.',
          detail: networkErr instanceof Error ? networkErr.message : String(networkErr),
        },
        { status: 503 }
      );
    }
  } catch (parseErr: unknown) {
    return NextResponse.json(
      { error: 'bad_request', message: 'Malformed JSON payload.' },
      { status: 400 }
    );
  }
}
