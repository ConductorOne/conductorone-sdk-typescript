# PolicyUserSource

Why the policy applies to this user. DIRECT or GROUP.

## Example Usage

```typescript
import { PolicyUserSource } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyUserSource = "EFFECTIVE_SESSION_POLICY_SOURCE_TENANT_DEFAULT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EFFECTIVE_SESSION_POLICY_SOURCE_UNSPECIFIED" | "EFFECTIVE_SESSION_POLICY_SOURCE_DIRECT" | "EFFECTIVE_SESSION_POLICY_SOURCE_GROUP" | "EFFECTIVE_SESSION_POLICY_SOURCE_TENANT_DEFAULT" | "EFFECTIVE_SESSION_POLICY_SOURCE_TENANT_DEFAULT_NONE" | Unrecognized<string>
```