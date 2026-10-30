# Threshold

Deny (or flag) when the judge scores at or above this level. Unspecified =
 HIGH.

## Example Usage

```typescript
import { Threshold } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Threshold = "PROMPT_INJECTION_THRESHOLD_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PROMPT_INJECTION_THRESHOLD_UNSPECIFIED" | "PROMPT_INJECTION_THRESHOLD_LOW" | "PROMPT_INJECTION_THRESHOLD_MEDIUM" | "PROMPT_INJECTION_THRESHOLD_HIGH" | Unrecognized<string>
```