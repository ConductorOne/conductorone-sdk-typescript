# GetMySpendStatusResponseState

Result of resolving the caller's effective limits.

## Example Usage

```typescript
import { GetMySpendStatusResponseState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetMySpendStatusResponseState = "EFFECTIVE_LIMITS_STATE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EFFECTIVE_LIMITS_STATE_UNSPECIFIED" | "EFFECTIVE_LIMITS_STATE_RESOLVED" | "EFFECTIVE_LIMITS_STATE_NO_POLICY" | "EFFECTIVE_LIMITS_STATE_NO_CEILING" | "EFFECTIVE_LIMITS_STATE_DENIED" | Unrecognized<string>
```