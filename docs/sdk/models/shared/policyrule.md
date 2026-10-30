# PolicyRule

PolicyRule is one rung of the ordered sign-in cascade. Rules are evaluated
 top to bottom; the first enforced rule whose condition matches supplies the
 outcome.

## Example Usage

```typescript
import { PolicyRule } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PolicyRule = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | A human-readable description shown in the admin UI.                   |
| `id`                                                                  | *string*                                                              | :heavy_minus_sign:                                                    | A stable identifier for the rule, surfaced in audit.                  |
| `matchCel`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | A boolean condition expression evaluated against the sign-in context. |
| `mode`                                                                | [shared.PolicyRuleMode](../../../sdk/models/shared/policyrulemode.md) | :heavy_minus_sign:                                                    | Whether the rule is live, evaluated-only, or skipped.                 |
| `outcome`                                                             | [shared.PolicyOutcome](../../../sdk/models/shared/policyoutcome.md)   | :heavy_minus_sign:                                                    | N/A                                                                   |