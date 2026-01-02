import { isArray } from "@thinice/is-array";

/**
 * Shallow clone using spread operator, safer for old targets.
 */
export function shallowClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (isArray(obj)) {
    return [...obj] as T;
  }
  return { ...obj };
}
