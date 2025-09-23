# UpdatePolicyRequest

The UpdatePolicyRequest message contains the policy object to update and a field mask to indicate which fields to update. It uses URL value for input.

## Example Usage

```typescript
import { UpdatePolicyRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdatePolicyRequest = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `policy`                                                        | [shared.PolicyInput](../../../sdk/models/shared/policyinput.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `updateMask`                                                    | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |