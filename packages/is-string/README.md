# @thinice/is-string

Type guard to check if a value is a string.

## Installation

```bash
npm install @thinice/is-string
```

## Usage

```typescript
import { isString } from "@thinice/is-string";

function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript narrows to string
    return value.toUpperCase();
  }
  throw new Error("Expected string");
}

isString("hello"); // true
isString(42); // false
isString(null); // false
```
