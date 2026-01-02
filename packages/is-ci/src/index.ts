/**
 * Checks common CI environment variables.
 */
export function isCi(): boolean {
  return !!(
    process.env.CI ||
    process.env.CONTINUOUS_INTEGRATION ||
    process.env.BUILD_NUMBER ||
    process.env.RUN_ID ||
    process.env.GITHUB_ACTIONS ||
    process.env.GITLAB_CI ||
    process.env.CIRCLECI ||
    process.env.JENKINS ||
    process.env.TRAVIS ||
    process.env.APPVEYOR ||
    process.env.TEAMCITY_VERSION
  );
}
