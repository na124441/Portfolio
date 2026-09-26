/**
 * Standalone C++ & Python Execution Microservice for Render
 * Implements the Piston API specification (/api/v2/execute)
 * Designed for deployment on Render Web Services (Docker environment).
 */

const express = require('express');
const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 2000;
const MAX_BUFFER = 1024 * 1024; // 1 MB

app.use(express.json({ limit: '512kb' }));

// Health and Runtimes endpoint
app.get(['/', '/health', '/api/v2/runtimes'], (req, res) => {
  res.json([
    { language: 'cpp', version: '13.2', aliases: ['c++', 'g++'] },
    { language: 'python', version: '3.11', aliases: ['py', 'python3'] },
  ]);
});

// Piston-compatible execute endpoint
app.post('/api/v2/execute', async (req, res) => {
  const { language, files, stdin = '', run_timeout = 4000 } = req.body;

  if (!language || !files || !files[0] || typeof files[0].content !== 'string') {
    return res.status(400).json({ message: 'Invalid payload: language and files[0].content required' });
  }

  const code = files[0].content;
  const timeoutMs = Math.min(Math.max(1000, Number(run_timeout) || 4000), 10000);

  // Create isolated temp directory
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'exec-'));

  try {
    if (language === 'cpp' || language === 'c++') {
      const srcPath = path.join(tempDir, 'solution.cpp');
      const binPath = path.join(tempDir, 'solution');
      fs.writeFileSync(srcPath, code, 'utf-8');

      // 1. Compile C++
      const compileResult = await new Promise((resolve) => {
        execFile(
          'g++',
          ['-O2', '-std=c++17', srcPath, '-o', binPath],
          { timeout: 10000, maxBuffer: MAX_BUFFER },
          (err, stdout, stderr) => {
            if (err) {
              resolve({
                code: err.code || 1,
                stderr: stderr || err.message,
                output: stderr || err.message,
              });
            } else {
              resolve({ code: 0, stdout, stderr, output: '' });
            }
          }
        );
      });

      if (compileResult.code !== 0) {
        return res.json({
          language: 'cpp',
          version: '13.2',
          compile: compileResult,
          run: { code: 1, stdout: '', stderr: compileResult.stderr, output: compileResult.output },
        });
      }

      // 2. Execute compiled binary
      const runResult = await runBinary(binPath, [], stdin, timeoutMs);
      return res.json({
        language: 'cpp',
        version: '13.2',
        compile: { code: 0, stdout: '', stderr: '', output: '' },
        run: runResult,
      });
    } else if (language === 'python' || language === 'py' || language === 'python3') {
      const srcPath = path.join(tempDir, 'solution.py');
      fs.writeFileSync(srcPath, code, 'utf-8');

      // Execute Python 3
      const runResult = await runBinary('python3', [srcPath], stdin, timeoutMs);
      return res.json({
        language: 'python',
        version: '3.11',
        run: runResult,
      });
    } else {
      return res.status(400).json({ message: `Unsupported language: ${language}` });
    }
  } catch (err) {
    console.error('[Execution Error]', err);
    return res.status(500).json({ message: err.message || 'Internal execution failure' });
  } finally {
    // Clean up temporary files
    try {
      fs.rmSync(tempDir, { recursive: true, force: true });
    } catch {
      // ignore cleanup errors
    }
  }
});

function runBinary(command, args, stdinInput, timeoutMs) {
  return new Promise((resolve) => {
    const child = execFile(
      command,
      args,
      {
        timeout: timeoutMs,
        maxBuffer: MAX_BUFFER,
        encoding: 'utf-8',
      },
      (err, stdout, stderr) => {
        if (err) {
          const isTimeout = err.killed || err.signal === 'SIGTERM' || err.code === 'ETIMEDOUT';
          resolve({
            code: isTimeout ? 124 : (err.code || 1),
            stdout: stdout || '',
            stderr: isTimeout ? 'Execution timed out' : (stderr || err.message),
            output: isTimeout ? 'Time Limit Exceeded' : (stderr || stdout || err.message),
            signal: isTimeout ? 'SIGKILL' : err.signal,
          });
        } else {
          resolve({
            code: 0,
            stdout: stdout || '',
            stderr: stderr || '',
            output: stdout || '',
            signal: null,
          });
        }
      }
    );

    if (child.stdin) {
      child.stdin.write(stdinInput || '');
      child.stdin.end();
    }
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[ByteLogic Compiler] Listening on http://0.0.0.0:${PORT}`);
});
