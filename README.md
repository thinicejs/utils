# @thinice/packages

Small TypeScript utilities. You shouldn't depend on these, but you might anyway.

## Versioning

Packages are versioned independently. Changesets creates git tags per package: `@thinice/package-name@version`.

## Publishing

Uses trusted publishing (OIDC). Configure trusted publishers on npm for each package pointing to this repo's `release.yml` workflow.

Workflow: create changeset → merge PR → Release PR created → merge Release PR → publishes automatically.

## Adding a Package

```bash
pnpm node scripts/new-package.mjs <package-name>
```

Implement, test, add changeset, PR.

## Development

```bash
pnpm install
pnpm build
pnpm test
```
