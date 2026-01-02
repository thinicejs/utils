/**
 * Splits arrays into chunks of N (no generators).
 */
export function chunkArray<T>(arr: T[], size: number): T[][] {
  if (size <= 0) {
    return [];
  }
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
