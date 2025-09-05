# UpdateAppEntitlementRequest

The UpdateAppEntitlementRequest message contains the app entitlement and the fields to be updated.

## Example Usage

```typescript
import { UpdateAppEntitlementRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateAppEntitlementRequest = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `entitlement`                                                                                                  | [shared.AppEntitlementInput](../../../sdk/models/shared/appentitlementinput.md)                                | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `expandMask`                                                                                                   | [shared.AppEntitlementExpandMask](../../../sdk/models/shared/appentitlementexpandmask.md)                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `overrideAccessRequestsDefaults`                                                                               | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Flag to indicate that access request defaults, if any are applied to these entitlements, should be overridden. |
| `updateMask`                                                                                                   | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |