import { isNullish } from "@thinice/is-nullish";
import { toString } from "@thinice/to-string";

/**
 * Converts values to floats (parseFloat behavior).
 */
export function toFloat(value: unknown): number {
  if (isNullish(value)) {
    return NaN;
  }
  if (typeof value === "number") {
    return value;
  }
  return parseFloat(toString(value));
}
