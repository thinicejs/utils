# @thinice/is-nullish

Type guard to check if a value is nullish (null or undefined).

## Installation

```bash
npm install @thinice/is-nullish
```

## Usage

```typescript
import { isNullish } from "@thinice/is-nullish";

function processValue(value: string | null | undefined) {
  if (isNullish(value)) {
    // TypeScript narrows to null | undefined
    return "default";
  }
  // TypeScript narrows to string
  return value.toUpperCase();
}

isNullish(null); // true
isNullish(undefined); // true
isNullish(""); // false
isNullish(0); // false
isNullish(false); // false
```
