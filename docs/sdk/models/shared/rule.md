# Rule

The Rule message.

## Example Usage

```typescript
import { Rule } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Rule = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `condition`                                                       | *string*                                                          | :heavy_minus_sign:                                                | The condition field.                                              |
| `policyKey`                                                       | *string*                                                          | :heavy_minus_sign:                                                | This is a reference to a list of policy steps from `policy_steps` |