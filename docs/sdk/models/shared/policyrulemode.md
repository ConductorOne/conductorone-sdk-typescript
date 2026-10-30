# PolicyRuleMode

Whether the rule is live, evaluated-only, or skipped.

## Example Usage

```typescript
import { PolicyRuleMode } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyRuleMode = "POLICY_RULE_MODE_ENFORCE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"POLICY_RULE_MODE_UNSPECIFIED" | "POLICY_RULE_MODE_ENFORCE" | "POLICY_RULE_MODE_OBSERVE" | "POLICY_RULE_MODE_DISABLED" | Unrecognized<string>
```