import { isString } from "@thinice/is-string";

/**
 * Trims only if input is a string, otherwise returns input.
 */
export function safeTrim<T>(value: T): T extends string ? string : T {
  return (isString(value) ? value.trim() : value) as T extends string ? string : T;
}
