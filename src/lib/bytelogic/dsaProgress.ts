'use client';

import { useState, useEffect, useCallback } from 'react';
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

  useEffect(() => {
    setStateMap(getDsaStorage());
    setIsLoaded(true);

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
    (slug: string, status: DsaStatus) => {
      updateProblemState(slug, {
        status,
        ...(status === 'solved' ? { solvedAt: new Date().toISOString() } : {}),
        lastAttemptAt: new Date().toISOString(),
      });
    },
    [updateProblemState]
  );

  const revealNextHint = useCallback(
    (slug: string) => {
      const current = getProblemState(slug);
      const nextLevel = Math.min((current.hintsRevealed || 0) + 1, 3);
      updateProblemState(slug, {
        hintsRevealed: nextLevel,
        status: current.status === 'unattempted' ? 'attempted' : current.status,
        lastAttemptAt: new Date().toISOString(),
      });
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
