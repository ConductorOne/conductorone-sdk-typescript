# GrantedStatus

Search entitlements with this granted status for your signed in user.

## Example Usage

```typescript
import { GrantedStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GrantedStatus = "UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNSPECIFIED" | "ALL" | "GRANTED" | "NOT_GRANTED" | Unrecognized<string>
```