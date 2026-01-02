# @thinice/to-integer

Converts values to integers (truncates decimals).

## Installation

```bash
npm install @thinice/to-integer
```

## Usage

```typescript
import { toInteger } from "@thinice/to-integer";

toInteger(123.45); // 123
toInteger(123.99); // 123
toInteger(-123.45); // -123
toInteger("123.45"); // 123
toInteger(null); // 0
```
