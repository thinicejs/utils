import { toNumber } from "@thinice/to-number";

/**
 * Converts values to integers (truncates decimals).
 */
export function toInteger(value: unknown): number {
  return Math.trunc(toNumber(value));
}
