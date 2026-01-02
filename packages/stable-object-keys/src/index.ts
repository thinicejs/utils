/**
 * Returns sorted keys for deterministic output.
 */
export function stableObjectKeys(obj: Record<string, unknown>): string[] {
  return Object.keys(obj).sort();
}
