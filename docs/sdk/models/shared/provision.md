# Provision

The provision step references a provision policy for this step.

## Example Usage

```typescript
import { Provision } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Provision = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `assigned`                                                                        | *boolean*                                                                         | :heavy_minus_sign:                                                                | A field indicating whether this step is assigned.                                 |
| `provisionPolicy`                                                                 | [shared.ProvisionPolicyInput](../../../sdk/models/shared/provisionpolicyinput.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `provisionTarget`                                                                 | [shared.ProvisionTarget](../../../sdk/models/shared/provisiontarget.md)           | :heavy_minus_sign:                                                                | N/A                                                                               |