# @thinice/to-float

Converts values to floats (parseFloat behavior).

## Installation

```bash
npm install @thinice/to-float
```

## Usage

```typescript
import { toFloat } from "@thinice/to-float";

toFloat("123.45"); // 123.45
toFloat("123"); // 123
toFloat(123.45); // 123.45
toFloat("123abc"); // 123 (parseFloat behavior)
toFloat(null); // NaN
```
