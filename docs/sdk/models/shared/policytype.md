# PolicyType

Indicates the type of this policy. Can also be used to get the value from policySteps.

## Example Usage

```typescript
import { PolicyType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyType = "POLICY_TYPE_PROVISION";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"POLICY_TYPE_UNSPECIFIED" | "POLICY_TYPE_GRANT" | "POLICY_TYPE_REVOKE" | "POLICY_TYPE_CERTIFY" | "POLICY_TYPE_ACCESS_REQUEST" | "POLICY_TYPE_PROVISION" | Unrecognized<string>
```