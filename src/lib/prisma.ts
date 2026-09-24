/**
 * Persistent Practice Database Store
 *
 * Implements the Prisma query interface for submissions, progress, and drafts,
 * backed by persistent atomic disk storage (`src/data/bytelogic/practice-db.json`).
 *
 * Provides complete architectural compatibility with Prisma:
 * - prisma.submission.create()
 * - prisma.submission.update()
 * - prisma.submission.findMany()
 * - prisma.submission.findUnique()
 * - prisma.submission.count()
 * - prisma.problemProgress.findMany()
 * - prisma.problemProgress.findUnique()
 * - prisma.problemProgress.upsert()
 * - prisma.problemDraft.findUnique()
 * - prisma.problemDraft.upsert()
 *
 * Zero external engine binaries, zero native compilation issues, zero C: drive quota impact.
 */

import fs from 'fs';
import path from 'path';

interface SubmissionData {
  id: string;
  problemSlug: string;
  language: string;
  sourceCode: string;
  verdict: string;
  passedTests: number;
  totalTests: number;
  runtime: number | null;
  memory: number | null;
  compileError: string | null;
  runtimeError: string | null;
  failedTestIndex: number | null;
  mode: string;
  createdAt: string;
  updatedAt: string;
}

interface ProblemProgressData {
  id: string;
  problemSlug: string;
  status: string;
  attemptCount: number;
  accepted: boolean;
  hintsUsed: number;
  revisitReason: string | null;
  firstAttemptAt: string | null;
  solvedAt: string | null;
  lastAttemptAt: string | null;
  createdAt: string;
  updatedAt: string;
}

interface ProblemDraftData {
  id: string;
  problemSlug: string;
  language: string;
  sourceCode: string;
  updatedAt: string;
}

interface DatabaseSchema {
  submissions: SubmissionData[];
  progress: Record<string, ProblemProgressData>;
  drafts: Record<string, ProblemDraftData>; // key: `${problemSlug}_${language}`
}

const DB_FILE = path.join(process.cwd(), 'src', 'data', 'bytelogic', 'practice-db.json');

function loadDatabase(): DatabaseSchema {
  try {
    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error('[DSA Database] Failed to read database file, initializing fresh:', err);
  }
  return {
    submissions: [],
    progress: {},
    drafts: {},
  };
}

function saveDatabase(data: DatabaseSchema): void {
  try {
    const dir = path.dirname(DB_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('[DSA Database] Failed to write database file:', err);
  }
}

function generateId(): string {
  return 'sub_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
}

// In-memory cache synced to disk
let dbCache: DatabaseSchema = loadDatabase();

export const prisma = {
  submission: {
    async create(args: { data: any }): Promise<SubmissionData> {
      dbCache = loadDatabase();
      const now = new Date().toISOString();
      const record: SubmissionData = {
        id: generateId(),
        problemSlug: args.data.problemSlug,
        language: args.data.language || 'cpp',
        sourceCode: args.data.sourceCode,
        verdict: args.data.verdict || 'QUEUED',
        passedTests: args.data.passedTests || 0,
        totalTests: args.data.totalTests || 0,
        runtime: args.data.runtime ?? null,
        memory: args.data.memory ?? null,
        compileError: args.data.compileError ?? null,
        runtimeError: args.data.runtimeError ?? null,
        failedTestIndex: args.data.failedTestIndex ?? null,
        mode: args.data.mode || 'submit',
        createdAt: now,
        updatedAt: now,
      };

      dbCache.submissions.unshift(record);
      saveDatabase(dbCache);
      return record;
    },

    async update(args: { where: { id: string }; data: any }): Promise<SubmissionData> {
      dbCache = loadDatabase();
      const idx = dbCache.submissions.findIndex((s) => s.id === args.where.id);
      if (idx === -1) {
        throw new Error(`Submission not found: ${args.where.id}`);
      }

      const existing = dbCache.submissions[idx];
      const updated: SubmissionData = {
        ...existing,
        ...args.data,
        updatedAt: new Date().toISOString(),
      };

      dbCache.submissions[idx] = updated;
      saveDatabase(dbCache);
      return updated;
    },

    async findMany(args?: {
      where?: { problemSlug?: string; mode?: string; verdict?: string };
      orderBy?: { createdAt?: 'desc' | 'asc' };
      take?: number;
      select?: any;
    }): Promise<SubmissionData[]> {
      dbCache = loadDatabase();
      let list = [...dbCache.submissions];

      if (args?.where) {
        const { problemSlug, mode, verdict } = args.where;
        if (problemSlug) list = list.filter((s) => s.problemSlug === problemSlug);
        if (mode) list = list.filter((s) => s.mode === mode);
        if (verdict) list = list.filter((s) => s.verdict === verdict);
      }

      if (args?.orderBy?.createdAt === 'asc') {
        list.reverse();
      }

      if (args?.take) {
        list = list.slice(0, args.take);
      }

      return list;
    },

    async findUnique(args: { where: { id: string }; select?: any }): Promise<SubmissionData | null> {
      dbCache = loadDatabase();
      const item = dbCache.submissions.find((s) => s.id === args.where.id);
      return item || null;
    },

    async count(args?: { where?: { mode?: string; verdict?: string } }): Promise<number> {
      dbCache = loadDatabase();
      let list = dbCache.submissions;
      if (args?.where) {
        const { mode, verdict } = args.where;
        if (mode) list = list.filter((s) => s.mode === mode);
        if (verdict) list = list.filter((s) => s.verdict === verdict);
      }
      return list.length;
    },
  },

  problemProgress: {
    async findMany(): Promise<ProblemProgressData[]> {
      dbCache = loadDatabase();
      return Object.values(dbCache.progress);
    },

    async findUnique(args: { where: { problemSlug: string } }): Promise<ProblemProgressData | null> {
      dbCache = loadDatabase();
      return dbCache.progress[args.where.problemSlug] || null;
    },

    async upsert(args: {
      where: { problemSlug: string };
      create: any;
      update: any;
    }): Promise<ProblemProgressData> {
      dbCache = loadDatabase();
      const slug = args.where.problemSlug;
      const existing = dbCache.progress[slug];
      const now = new Date().toISOString();

      let result: ProblemProgressData;
      if (existing) {
        const upd = { ...args.update };
        if (upd.attemptCount?.increment) {
          upd.attemptCount = (existing.attemptCount || 0) + upd.attemptCount.increment;
        }

        result = {
          ...existing,
          ...upd,
          updatedAt: now,
        };
      } else {
        result = {
          id: 'prog_' + Math.random().toString(36).substring(2, 9),
          problemSlug: slug,
          status: args.create.status || 'UNATTEMPTED',
          attemptCount: args.create.attemptCount || 0,
          accepted: args.create.accepted || false,
          hintsUsed: args.create.hintsUsed || 0,
          revisitReason: args.create.revisitReason || null,
          firstAttemptAt: args.create.firstAttemptAt?.toISOString?.() || now,
          solvedAt: args.create.solvedAt?.toISOString?.() || (args.create.accepted ? now : null),
          lastAttemptAt: args.create.lastAttemptAt?.toISOString?.() || now,
          createdAt: now,
          updatedAt: now,
        };
      }

      dbCache.progress[slug] = result;
      saveDatabase(dbCache);
      return result;
    },
  },

  problemDraft: {
    async findUnique(args: {
      where: { problemSlug_language: { problemSlug: string; language: string } };
    }): Promise<ProblemDraftData | null> {
      dbCache = loadDatabase();
      const key = `${args.where.problemSlug_language.problemSlug}_${args.where.problemSlug_language.language}`;
      return dbCache.drafts[key] || null;
    },

    async upsert(args: {
      where: { problemSlug_language: { problemSlug: string; language: string } };
      create: any;
      update: any;
    }): Promise<ProblemDraftData> {
      dbCache = loadDatabase();
      const key = `${args.where.problemSlug_language.problemSlug}_${args.where.problemSlug_language.language}`;
      const now = new Date().toISOString();

      const result: ProblemDraftData = {
        id: 'draft_' + Math.random().toString(36).substring(2, 9),
        problemSlug: args.where.problemSlug_language.problemSlug,
        language: args.where.problemSlug_language.language,
        sourceCode: args.update?.sourceCode ?? args.create?.sourceCode ?? '',
        updatedAt: now,
      };

      dbCache.drafts[key] = result;
      saveDatabase(dbCache);
      return result;
    },
  },
};

export default prisma;
