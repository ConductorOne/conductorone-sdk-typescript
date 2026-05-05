# Rule

A conditional routing rule that maps a CEL expression to a step sequence.
 Rules are evaluated top-to-bottom; the first matching rule's policy_key
 selects the step sequence from the policy's policy_steps map. If no rule
 matches, the baseline entry is used.

## Example Usage

```typescript
import { Rule } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Rule = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `condition`                                                                                                                              | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | A CEL expression that is evaluated against the request context. If it<br/> returns true, the step sequence identified by policy_key is used. |
| `policyKey`                                                                                                                              | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | A key into the policy's policy_steps map identifying which step sequence<br/> to execute when this rule's condition matches.             |