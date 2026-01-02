/**
 * Returns the last item in an array (with bounds check).
 */
export function lastItem<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
}
