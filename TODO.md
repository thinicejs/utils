# TODO: Package Repository Setup

## Foundation

- [x] Initialize git repository and create root directory structure (packages/, scripts/, .github/workflows/)
- [x] Create pnpm-workspace.yaml with packages workspace
- [x] Create root package.json with private flag, packageManager, and scripts (build, test, lint, changeset, version-packages, release)
- [x] Create tsconfig.base.json with TypeScript compiler options (ES2020 target, strict mode, declaration files)
- [x] Create changeset.config.json with public access, baseBranch main, and updateInternalDependencies patch
- [x] Install root devDependencies: @changesets/cli, tsup, typescript via pnpm

## Core Infrastructure

- [x] ~~Create internal/core package structure~~ (Removed - publishing utilities as separate packages instead)
- [x] Create scripts/new-package.mjs scaffolding script for generating new package boilerplate
- [x] Create .github/workflows/ci.yml with pnpm setup, build, and test steps
- [x] Create .github/workflows/release.yml with changesets action for automatic versioning and publishing

## Package Creation

- [x] Create first example package (has-own) with package.json, src/index.ts, README.md, and proper exports configuration
- [x] Create is-string package (type guard for strings)
- [x] Create is-nullish package (type guard for null/undefined)

## Configuration & Documentation

- [x] Create .gitignore file with node_modules, dist, .changeset, and other build artifacts
- [x] Create root README.md explaining the monorepo structure and how to add/publish packages

## Publishing Setup

- [x] Set up npm scope/organization on npmjs.com and configure publishConfig access: public (configured in package.json)
- [ ] Configure trusted publishing (OIDC) on npm for each package (see README.md)
- [x] Update new-package.mjs script with correct scope name from npm org (@thinice)
- [x] Create .npmrc for scope registry configuration
- [x] Configure release workflow with npm provenance support
- [x] Create initial changeset for first three packages (has-own, is-string, is-nullish)

## Testing & Validation

- [x] Test package build locally: run pnpm build and verify dist/ outputs are generated correctly
- [x] Create initial changeset for first three packages (ready to test)
- [ ] Configure trusted publishers on npm (required before publishing)
- [ ] Test changeset workflow: merge PR with changeset, verify Release PR is created
- [ ] Test full publish workflow: merge Release PR and verify packages appear on npm with correct versions

## Package Expansion

- [ ] Create initial batch of 5-10 core packages (is-empty-string, sleep-ms, safe-json-parse, etc.) using scaffolding script

## Repository Configuration

- [ ] Configure GitHub repository settings: protect main branch, require PR reviews, enable branch protection
- [ ] Create .github/ISSUE_TEMPLATE and PR_TEMPLATE for org-wide defaults (optional but recommended)
- [ ] Document package naming conventions and versioning strategy in root README or CONTRIBUTING.md
