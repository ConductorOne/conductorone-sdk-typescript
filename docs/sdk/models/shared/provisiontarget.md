# ProvisionTarget

ProvisionTarget indicates the specific app, app entitlement, and if known, the app user and grant duration of this provision step

## Example Usage

```typescript
import { ProvisionTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ProvisionTarget = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `appEntitlementId`                                                               | *string*                                                                         | :heavy_minus_sign:                                                               | The app entitlement that should be provisioned.                                  |
| `appId`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | The app in which the entitlement should be provisioned                           |
| `appUserId`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | The app user that should be provisioned. May be unset if the app user is unknown |
| `grantDuration`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |