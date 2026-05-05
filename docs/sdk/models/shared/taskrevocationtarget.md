# TaskRevocationTarget

An ancestor entitlement that will be revoked as part of an inheritance revocation.

## Example Usage

```typescript
import { TaskRevocationTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskRevocationTarget = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `appEntitlementRef`                                                         | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md) | :heavy_minus_sign:                                                          | The AppEntitlementRef message.                                              |