import { isEmptyString } from "@thinice/is-empty-string";

/**
 * Type guard to check if a value is NOT an empty string.
 */
export function isNotEmptyString(value: unknown): value is Exclude<string, ""> {
  return !isEmptyString(value);
}
