# ToolGatesServiceCreateRequest

The ToolGatesServiceCreateRequest message.

## Example Usage

```typescript
import { ToolGatesServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ToolGatesServiceCreateRequest = {
  displayName: "Enrico19",
  grantPolicyId: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The description field.                                                |
| `displayName`                                                         | *string*                                                              | :heavy_check_mark:                                                    | The displayName field.                                                |
| `enabled`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | The enabled field.                                                    |
| `filter`                                                              | [shared.ToolGateFilter](../../../sdk/models/shared/toolgatefilter.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `grantPolicyId`                                                       | *string*                                                              | :heavy_check_mark:                                                    | The grantPolicyId field.                                              |
| `managedByGuardrails`                                                 | *boolean*                                                             | :heavy_minus_sign:                                                    | The managedByGuardrails field.                                        |
| `priority`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | The priority field.                                                   |