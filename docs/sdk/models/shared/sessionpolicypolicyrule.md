# SessionPolicyPolicyRule

PolicyRule is one rung of the ordered continuous-evaluation cascade. Rules
 are evaluated top to bottom on every request; the first enforced rule whose
 condition matches supplies the outcome.

## Example Usage

```typescript
import { SessionPolicyPolicyRule } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionPolicyPolicyRule = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `description`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | The description field.                                                                          |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | The id field.                                                                                   |
| `matchCel`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | The matchCel field.                                                                             |
| `mode`                                                                                          | [shared.SessionPolicyPolicyRuleMode](../../../sdk/models/shared/sessionpolicypolicyrulemode.md) | :heavy_minus_sign:                                                                              | The mode field.                                                                                 |
| `outcome`                                                                                       | [shared.SessionPolicyPolicyOutcome](../../../sdk/models/shared/sessionpolicypolicyoutcome.md)   | :heavy_minus_sign:                                                                              | N/A                                                                                             |