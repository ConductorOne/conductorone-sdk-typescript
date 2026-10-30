# MySpendBlockReason

Reason the calls were denied.

## Example Usage

```typescript
import { MySpendBlockReason } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MySpendBlockReason = "SPEND_DENY_REASON_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SPEND_DENY_REASON_UNSPECIFIED" | "SPEND_DENY_REASON_TENANT_FROZEN" | "SPEND_DENY_REASON_SUSPENDED_BY_ADMIN" | "SPEND_DENY_REASON_APP_SUSPENDED" | "SPEND_DENY_REASON_APP_PAUSED_BY_YOU" | "SPEND_DENY_REASON_NO_SUPPLY" | Unrecognized<string>
```