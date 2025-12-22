// localStorage operations for gamification state

import type { GamificationState } from '../../types/gamification';

const STORAGE_KEY = 'basic-algebra-progress';

/**
 * Load gamification state from localStorage.
 * Returns null if no state exists or if parsing fails.
 */
export function loadState(): GamificationState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as GamificationState;

    // Version check for future migrations
    if (parsed.version !== 1) {
      console.warn('Unknown gamification state version:', parsed.version);
      // In future, could migrate here
    }

    return parsed;
  } catch (error) {
    console.error('Failed to load gamification state:', error);
    return null;
  }
}

/**
 * Save gamification state to localStorage.
 * Updates the lastUpdated timestamp automatically.
 */
export function saveState(state: GamificationState): boolean {
  try {
    const stateToSave: GamificationState = {
      ...state,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    return true;
  } catch (error) {
    console.error('Failed to save gamification state:', error);
    return false;
  }
}

/**
 * Clear all gamification data from localStorage.
 */
export function clearState(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Check if gamification state exists in localStorage.
 */
export function hasState(): boolean {
  return localStorage.getItem(STORAGE_KEY) !== null;
}

/**
 * Get the current date string in YYYY-MM-DD format using local timezone.
 * This ensures "day" boundaries match the user's local midnight.
 */
export function getLocalDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
