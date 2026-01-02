# @thinice/to-string

Converts values to strings (null → "", undefined → "", else String(x)).

## Installation

```bash
npm install @thinice/to-string
```

## Usage

```typescript
import { toString } from "@thinice/to-string";

toString(null); // ""
toString(undefined); // ""
toString(123); // "123"
toString(true); // "true"
toString({}); // "[object Object]"
```
