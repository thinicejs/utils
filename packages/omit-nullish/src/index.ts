import { isNullish } from "@thinice/is-nullish";

/**
 * Removes null and undefined, keeps falsy values.
 */
export function omitNullish<T extends Record<string, unknown>>(obj: T): Partial<T> {
  const result: Partial<T> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!isNullish(value)) {
      result[key as keyof T] = value as T[keyof T];
    }
  }
  return result;
}
