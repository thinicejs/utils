import { isNumber } from "@thinice/is-number";

/**
 * Type guard to check if a value is NOT a number.
 */
export function isNotNumber(value: unknown): value is Exclude<unknown, number> {
  return !isNumber(value);
}
