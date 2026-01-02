/**
 * Converts CRLF ↔ LF line endings.
 */
export function normalizeLineEndings(str: string, target: "lf" | "crlf" = "lf"): string {
  if (target === "lf") {
    return str.replace(/\r\n/g, "\n");
  } else {
    return str.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n");
  }
}
