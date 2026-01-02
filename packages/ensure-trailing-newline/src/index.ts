/**
 * Adds \n at EOF if missing.
 */
export function ensureTrailingNewline(str: string): string {
  return str.endsWith("\n") ? str : str + "\n";
}
