import { isNullish } from "@thinice/is-nullish";

/**
 * Converts values to numbers (null/undefined → 0, true → 1, false → 0, else Number(x)).
 */
export function toNumber(value: unknown): number {
  if (isNullish(value)) {
    return 0;
  }
  if (typeof value === "boolean") {
    return value ? 1 : 0;
  }
  return Number(value);
}
