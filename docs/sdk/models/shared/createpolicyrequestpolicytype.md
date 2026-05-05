# CreatePolicyRequestPolicyType

The type of policy to create (grant, revoke, or certify).

## Example Usage

```typescript
import { CreatePolicyRequestPolicyType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreatePolicyRequestPolicyType = "POLICY_TYPE_GRANT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"POLICY_TYPE_UNSPECIFIED" | "POLICY_TYPE_GRANT" | "POLICY_TYPE_REVOKE" | "POLICY_TYPE_CERTIFY" | "POLICY_TYPE_ACCESS_REQUEST" | "POLICY_TYPE_PROVISION" | Unrecognized<string>
```