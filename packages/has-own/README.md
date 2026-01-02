# @thinice/has-own

hasOwnProperty wrapper that handles null prototypes correctly.

## Installation

```bash
npm install @thinice/has-own
```

## Usage

```typescript
import { hasOwn } from "@thinice/has-own";

const obj = { foo: "bar" };
hasOwn(obj, "foo"); // true
hasOwn(obj, "toString"); // false

// Works with null prototypes
const nullProto = Object.create(null);
nullProto.foo = "bar";
hasOwn(nullProto, "foo"); // true
```
