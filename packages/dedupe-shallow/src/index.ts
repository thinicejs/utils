/**
 * Removes duplicates using Set (no deep equality).
 */
export function dedupeShallow<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}
