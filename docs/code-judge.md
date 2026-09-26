# ByteLogic Online Code Judge — Architecture & Deployment Guide

This document describes the production architecture, local setup, remote deployment, and security model of the ByteLogic C++ & Python Code Judge.

---

## 1. System Architecture

```text
┌────────────────────────────────────────────────────────┐
│                   User Browser                         │
│                                                        │
│  - LeetCode-style Problem Workspace                    │
│  - Monaco Editor (C++ & Python 3 syntax & drafts)     │
│  - Test Runner & Custom Input Panel                    │
│  - Real-time Verdict Display (AC, WA, TLE, CE, etc.)   │
└───────────────────────────┬────────────────────────────┘
                            │
                       HTTPS / JSON
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│             Next.js 15 App Layer (Vercel)              │
│                                                        │
│  - POST /api/execute (Custom stdin execution)          │
│  - POST /api/submit  (Official test case judging)      │
│  - GET  /api/submissions/[id]                          │
│  - IP-based Sliding-Window Rate Limiting               │
│  - Server-side Problem & Hidden Test Case Loading      │
│  - Output Comparator (Exact, Trimmed, Token, Float)   │
│  - Verdict Generation Engine                           │
│  - Local / Persistent Database Storage (Prisma)        │
└───────────────────────────┬────────────────────────────┘
                            │
               Server-Only HTTPS / Secret Token
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│      Dedicated Remote Execution Host (VPS / Cloud)     │
│                                                        │
│  - Piston / Judge0 running in Docker                   │
│  - Disposable sandboxed execution containers           │
│  - Isolated CPU cores, RAM limits, PID limits          │
│  - Read-only root filesystem with tmpfs                │
│  - Network egress disabled during program execution    │
└────────────────────────────────────────────────────────┘
```

---

## 2. Security Boundaries & Invariants

1. **Zero Host Execution in Vercel/Next.js**:
   - Neither `child_process.exec`, `spawn`, `eval()`, nor Python subprocesses are ever invoked within Vercel or Next.js serverless functions.
   - All arbitrary code is forwarded exclusively to the dedicated, sandboxed execution server.

2. **Secret Credential Isolation**:
   - `EXECUTION_SERVER_URL` and `EXECUTION_SERVER_TOKEN` are strictly server-only environment variables.
   - They are never prefixed with `NEXT_PUBLIC_` and never bundled into client JavaScript.

3. **Protection of Hidden Test Cases**:
   - Hidden test cases are loaded exclusively on the server side (`src/data/bytelogic/dsa/tests/`).
   - The client only receives verdict summaries (`passedTests`, `totalTests`, `failedTestIndex`, and runtime statistics).
   - Hidden inputs, expected outputs, and test data are never transmitted over the wire or serialized into browser state.

4. **Abuse Protection & Rate Limiting**:
   - `/api/execute`: Capped at 30 requests/minute per IP.
   - `/api/submit`: Capped at 15 submissions/minute per IP.
   - Payload limits: Maximum source code size of 64KB, standard input size of 64KB.

---

## 3. Environment Variables

Configure these variables in your `.env` (locally) and in your **Vercel Project Settings > Environment Variables**:

| Variable | Required | Default | Description |
|---|---|---|---|
| `EXECUTION_SERVER_URL` | **Yes** | `http://localhost:2000` | The URL of your remote Piston or Judge0 execution server |
| `EXECUTION_SERVER_TOKEN` | Optional | `""` | Bearer token or API key for authenticating with the execution server |
| `EXECUTION_SERVER_TYPE` | Optional | `piston` | Execution engine type: `piston` or `judge0` (auto-detected if omitted) |
| `DATABASE_URL` | Optional | `file:./src/data/...` | Database connection string (defaults to persistent JSON store) |

---

## 4. Deploying the Remote Execution Engine

You can deploy the execution engine on any Docker-capable VPS (Hetzner, DigitalOcean, AWS EC2, Linode, Render, Railway, etc.).

### Option A: Piston (Recommended & Lightest)

1. **SSH into your VPS**:
   ```bash
   ssh root@your-vps-ip
   ```

2. **Run Piston with Docker**:
   ```bash
   docker run -d \
     --name bytelogic-execution \
     --restart unless-stopped \
     -p 2000:2000 \
     -v piston_packages:/piston/packages \
     --tmpfs /tmp:exec,mode=1777 \
     --security-opt no-new-privileges:true \
     ghcr.io/engineer-man/piston
   ```

3. **Install C++ and Python 3 Runtimes inside Piston**:
   Inside the container or via the API:
   ```bash
   # Install gcc (C++)
   docker exec -it bytelogic-execution /piston/packages/run-script install gcc
   # Install python3
   docker exec -it bytelogic-execution /piston/packages/run-script install python
   ```

4. **Verify Health**:
   ```bash
   curl http://localhost:2000/api/v2/runtimes
   ```

5. **Set Vercel Environment Variable**:
   In your Vercel Dashboard for your portfolio project:
   ```env
   EXECUTION_SERVER_URL=http://your-vps-ip:2000
   ```
   *(If you configure an SSL reverse proxy like Caddy or Nginx with a domain, use `https://judge.yourdomain.com`)*.

---

### Option B: Judge0 CE

1. Follow the official Judge0 docker-compose deployment:
   ```bash
   wget https://github.com/judge0/judge0/releases/download/v1.13.1/docker-compose.yml
   docker compose up -d db redis
   docker compose up -d
   ```
2. Configure:
   ```env
   EXECUTION_SERVER_URL=http://your-vps-ip:2358
   EXECUTION_SERVER_TYPE=judge0
   ```

---

## 5. Local Development Workflow

1. Start your local portfolio app:
   ```bash
   npm run dev
   ```

2. (Optional) Run the local execution container:
   ```bash
   docker compose -f docker/docker-compose.yml up -d
   ```

3. Open `http://localhost:3000/bytelogic/questions/dsa/integers-and-print-their-sum-difference`.
4. Write your C++ or Python 3 solution in the Monaco editor.
5. Click **Run** (or `Ctrl+Enter`) to test against sample cases.
6. Click **Submit** (or `Ctrl+Shift+Enter`) to evaluate against the full test suite.

---

## 6. Adding Problems & Test Cases

1. **Problems**: Located in `src/data/bytelogic/dsa/phases/`.
   Each problem includes:
   - `id`, `slug`, `title`, `difficulty`, `topic`
   - `statement`, `examples`, `constraints`, `hints`, `solution`
   - `code`: C++ and Python starter code & reference implementations
   - `testCases`: Public and initial test cases

2. **Hidden Test Cases**:
   To add private/hidden test cases for problem `two-sum`:
   Create `src/data/bytelogic/dsa/tests/two-sum.tests.ts`:
   ```typescript
   import type { DsaTestCase } from '@/types/dsa-question';

   export const hiddenTests: DsaTestCase[] = [
     {
       id: 'two-sum-hidden-1',
       input: 'nums = [3, 2, 4], target = 6',
       expectedOutput: '[1, 2]',
       visibility: 'hidden',
     },
     {
       id: 'two-sum-hidden-2',
       input: 'nums = [3, 3], target = 6',
       expectedOutput: '[0, 1]',
       visibility: 'hidden',
     },
   ];
   ```

---

## 7. Troubleshooting

- **"Execution server connection failed" (IE)**:
  Check that `EXECUTION_SERVER_URL` in your `.env` or Vercel dashboard is reachable over HTTPS/HTTP. Test with:
  ```bash
  curl $EXECUTION_SERVER_URL/api/v2/runtimes
  ```
- **"Compilation Error" (CE)**:
  Review the compiler output in the result panel. Ensure standard C++ headers (`#include <iostream>`, `#include <vector>`, etc.) are included.
- **"Rate limit exceeded" (429)**:
  Wait 30-60 seconds between high-frequency test runs.
