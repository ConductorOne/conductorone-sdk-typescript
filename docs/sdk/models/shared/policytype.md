# PolicyType

The type of this policy (grant, revoke, or certify). The lowercased type
 name (e.g., "grant") is also the key for the baseline entry in policy_steps.

## Example Usage

```typescript
import { PolicyType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyType = "POLICY_TYPE_PROVISION";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"POLICY_TYPE_UNSPECIFIED" | "POLICY_TYPE_GRANT" | "POLICY_TYPE_REVOKE" | "POLICY_TYPE_CERTIFY" | "POLICY_TYPE_ACCESS_REQUEST" | "POLICY_TYPE_PROVISION" | Unrecognized<string>
```