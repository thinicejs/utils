/**
 * Checks if a string is empty (str === "").
 */
export function isEmptyString(value: unknown): value is "" {
  return value === "";
}
