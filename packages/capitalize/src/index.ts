import { isEmptyString } from "@thinice/is-empty-string";

/**
 * Capitalizes the first letter of a string.
 */
export function capitalize(str: string): string {
  if (isEmptyString(str)) {
    return str;
  }
  const first = str[0];
  if (!first) {
    return str;
  }
  return first.toUpperCase() + str.slice(1);
}
