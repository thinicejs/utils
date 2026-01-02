import { isNullish } from "@thinice/is-nullish";

/**
 * Reads process.env.FLAG and coerces to boolean.
 */
export function envFlag(name: string, defaultValue = false): boolean {
  const value = process.env[name];
  if (isNullish(value)) {
    return defaultValue;
  }
  if (value === "" || value === "0" || value.toLowerCase() === "false") {
    return false;
  }
  return true;
}
