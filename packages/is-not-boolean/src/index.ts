import { isBoolean } from "@thinice/is-boolean";

/**
 * Type guard to check if a value is NOT a boolean.
 */
export function isNotBoolean(value: unknown): value is Exclude<unknown, boolean> {
  return !isBoolean(value);
}
