import fs from "node:fs";
import path from "node:path";

const name = process.argv[2];
if (!name) {
  console.error("Usage: pnpm node scripts/new-package.mjs <pkg-name>");
  process.exit(1);
}

const scope = "@thinice";
const dir = path.join("packages", name);

fs.mkdirSync(path.join(dir, "src"), { recursive: true });

fs.writeFileSync(
  path.join(dir, "src", "index.ts"),
  `export const ${camel(name)} = () => true;\n`
);

fs.writeFileSync(
  path.join(dir, "src", "index.test.ts"),
  `import { test } from "node:test";
import assert from "node:assert";
import { ${camel(name)} } from "./index.js";

test("${camel(name)} works correctly", () => {
  assert.strictEqual(${camel(name)}(), true);
});
`
);

fs.writeFileSync(
  path.join(dir, "package.json"),
  JSON.stringify(
    {
      name: `${scope}/${name}`,
      version: "0.0.0",
      description: "",
      license: "MIT",
      sideEffects: false,
      type: "module",
      main: "./dist/index.cjs",
      module: "./dist/index.js",
      types: "./dist/index.d.ts",
      exports: {
        ".": {
          types: "./dist/index.d.ts",
          import: "./dist/index.js",
          require: "./dist/index.cjs",
        },
      },
      files: ["dist", "README.md"],
      publishConfig: {
        access: "public",
      },
      scripts: {
        build: "tsup src/index.ts --format esm,cjs --dts",
        test: "node --import tsx --test src/index.test.ts",
        lint: 'node -e "process.exit(0)"',
      },
      devDependencies: {
        tsup: "^8.3.5",
        tsx: "^4.19.2",
        typescript: "^5.6.3",
      },
    },
    null,
    2
  ) + "\n"
);

fs.writeFileSync(
  path.join(dir, "README.md"),
  `# ${scope}/${name}\n`
);

fs.writeFileSync(
  path.join(dir, "tsconfig.json"),
  `{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
`
);

console.log(`Created ${scope}/${name} in ${dir}`);

function camel(s) {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
