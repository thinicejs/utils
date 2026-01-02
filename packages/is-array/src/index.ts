/**
 * Type guard to check if a value is an array.
 */
export function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}
