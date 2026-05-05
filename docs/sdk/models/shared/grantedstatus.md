# GrantedStatus

Search entitlements with this granted status for your signed in user.

## Example Usage

```typescript
import { GrantedStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GrantedStatus = "NOT_GRANTED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UNSPECIFIED" | "ALL" | "GRANTED" | "NOT_GRANTED" | Unrecognized<string>
```