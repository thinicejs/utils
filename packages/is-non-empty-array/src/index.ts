import { isArray } from "@thinice/is-array";

/**
 * Type guard: Array.isArray(x) && x.length > 0
 */
export function isNonEmptyArray<T>(value: unknown): value is T[] {
  return isArray(value) && value.length > 0;
}
