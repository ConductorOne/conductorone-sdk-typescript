# XAAScopeServiceCreateRequestState

Initial state: PENDING_REVIEW, ENABLED or DISABLED. UNSPECIFIED defaults to PENDING_REVIEW.

## Example Usage

```typescript
import { XAAScopeServiceCreateRequestState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAScopeServiceCreateRequestState = "XAA_SCOPE_STATE_DISABLED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"XAA_SCOPE_STATE_UNSPECIFIED" | "XAA_SCOPE_STATE_PENDING_REVIEW" | "XAA_SCOPE_STATE_ENABLED" | "XAA_SCOPE_STATE_DISABLED" | "XAA_SCOPE_STATE_REMOVED" | Unrecognized<string>
```