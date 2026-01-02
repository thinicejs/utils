import { isString } from "@thinice/is-string";

/**
 * Type guard to check if a value is NOT a string.
 */
export function isNotString(value: unknown): value is Exclude<unknown, string> {
  return !isString(value);
}
