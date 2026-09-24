'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import type { DsaStatus, UserProblemState } from '@/types/dsa-question';

const DSA_STORAGE_KEY = 'bytelogic-dsa-state';

export type DsaStateMap = Record<string, UserProblemState>;

export function getDsaStorage(): DsaStateMap {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(DSA_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to parse DSA progress from localStorage', e);
  }
  return {};
}

export function saveDsaStorage(data: DsaStateMap): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(DSA_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save DSA progress to localStorage', e);
  }
}

export function useDsaProgress() {
  const [stateMap, setStateMap] = useState<DsaStateMap>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const debounceTimers = useRef<Record<string, NodeJS.Timeout>>({});

  // 1. Initial Load: LocalStorage first (instant), then hydrate from Server API
  useEffect(() => {
    const local = getDsaStorage();
    setStateMap(local);
    setIsLoaded(true);

    // Sync with Server DB
    fetch('/api/dsa/progress')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.progress) {
          setStateMap((prev) => {
            const merged = { ...prev };
            for (const [slug, serverRecord] of Object.entries(data.progress as Record<string, any>)) {
              const current = merged[slug] || {
                status: 'unattempted',
                hintsRevealed: 0,
                selectedLanguage: 'cpp',
                savedCode: {},
              };
              merged[slug] = {
                ...current,
                status: (serverRecord.status?.toLowerCase() as DsaStatus) || current.status,
                hintsRevealed: Math.max(current.hintsRevealed || 0, serverRecord.hintsUsed || 0),
                solvedAt: serverRecord.solvedAt || current.solvedAt,
                lastAttemptAt: serverRecord.lastAttemptAt || current.lastAttemptAt,
              };
            }
            saveDsaStorage(merged);
            return merged;
          });
        }
      })
      .catch(() => {
        // Offline / server unreachable fallback gracefully to localStorage
      });

    const handleStorage = (e: StorageEvent) => {
      if (e.key === DSA_STORAGE_KEY && e.newValue) {
        try {
          setStateMap(JSON.parse(e.newValue));
        } catch {
          // ignore
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const getProblemState = useCallback(
    (slug: string): UserProblemState => {
      return (
        stateMap[slug] || {
          status: 'unattempted',
          hintsRevealed: 0,
          selectedLanguage: 'cpp',
          savedCode: {},
        }
      );
    },
    [stateMap]
  );

  const updateProblemState = useCallback(
    (slug: string, updates: Partial<UserProblemState>) => {
      setStateMap((prev) => {
        const current = prev[slug] || {
          status: 'unattempted',
          hintsRevealed: 0,
          selectedLanguage: 'cpp',
          savedCode: {},
        };
        const nextState = {
          ...current,
          ...updates,
          savedCode: {
            ...current.savedCode,
            ...updates.savedCode,
          },
        };
        const nextMap = { ...prev, [slug]: nextState };
        saveDsaStorage(nextMap);
        return nextMap;
      });
    },
    []
  );

  const setProblemStatus = useCallback(
    (slug: string, status: DsaStatus, revisitReason?: string) => {
      updateProblemState(slug, {
        status,
        ...(status === 'solved' ? { solvedAt: new Date().toISOString() } : {}),
        lastAttemptAt: new Date().toISOString(),
      });

      // Background server sync
      fetch('/api/dsa/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problemSlug: slug,
          status: status.toUpperCase(),
          revisitReason,
        }),
      }).catch(() => {});
    },
    [updateProblemState]
  );

  const revealNextHint = useCallback(
    (slug: string) => {
      const current = getProblemState(slug);
      const nextLevel = Math.min((current.hintsRevealed || 0) + 1, 3);
      const nextStatus = current.status === 'unattempted' ? 'attempted' : current.status;
      updateProblemState(slug, {
        hintsRevealed: nextLevel,
        status: nextStatus,
        lastAttemptAt: new Date().toISOString(),
      });

      // Sync hints used to server
      fetch('/api/dsa/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problemSlug: slug,
          hintsUsed: nextLevel,
          status: nextStatus.toUpperCase(),
        }),
      }).catch(() => {});

      return nextLevel;
    },
    [getProblemState, updateProblemState]
  );

  const saveUserCode = useCallback(
    (slug: string, language: 'cpp' | 'python', code: string) => {
      const current = getProblemState(slug);
      updateProblemState(slug, {
        selectedLanguage: language,
        savedCode: {
          ...current.savedCode,
          [language]: code,
        },
        status: current.status === 'unattempted' ? 'attempted' : current.status,
        lastAttemptAt: new Date().toISOString(),
      });

      // Debounce server draft save (2 seconds)
      const timerKey = `${slug}-${language}`;
      if (debounceTimers.current[timerKey]) {
        clearTimeout(debounceTimers.current[timerKey]);
      }
      debounceTimers.current[timerKey] = setTimeout(() => {
        fetch('/api/dsa/drafts', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            problemSlug: slug,
            language,
            sourceCode: code,
          }),
        }).catch(() => {});
      }, 2000);
    },
    [getProblemState, updateProblemState]
  );

  return {
    stateMap,
    isLoaded,
    getProblemState,
    updateProblemState,
    setProblemStatus,
    revealNextHint,
    saveUserCode,
  };
}
