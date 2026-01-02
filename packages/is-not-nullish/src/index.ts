import { isNullish } from "@thinice/is-nullish";

/**
 * Type guard to check if a value is NOT nullish (not null and not undefined).
 */
export function isNotNullish<T>(value: T | null | undefined): value is T {
  return !isNullish(value);
}
