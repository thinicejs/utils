/**
 * Returns Promise.resolve() — useful for optional hooks.
 */
export function noopPromise(): Promise<void> {
  return Promise.resolve();
}
