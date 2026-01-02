/**
 * Distinguishes Node vs browser vs edge-ish runtime.
 */
export function isNode(): boolean {
  return (
    typeof process !== "undefined" &&
    typeof process.versions !== "undefined" &&
    typeof process.versions.node !== "undefined"
  );
}
