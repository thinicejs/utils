/**
 * await sleep(123) — everyone writes this.
 */
export function sleepMs(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
