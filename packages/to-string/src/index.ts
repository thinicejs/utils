import { isNullish } from "@thinice/is-nullish";

/**
 * Converts values to strings (null → "", undefined → "", else String(x)).
 */
export function toString(value: unknown): string {
  if (isNullish(value)) {
    return "";
  }
  return String(value);
}
