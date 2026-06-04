# C1ApiAppV2ConnectorOwnersDeleteEntitlementOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersDeleteEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersDeleteEntitlementOwnerRequest = {
  appId: "<id>",
  connectorId: "<id>",
  roleSlug: "<value>",
  appEntitlementRefAppId: "<id>",
  appEntitlementRefId: "<id>",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `connectorId`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `roleSlug`                                                                                                            | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `appEntitlementRefAppId`                                                                                              | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `appEntitlementRefId`                                                                                                 | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `deleteConnectorEntitlementOwnerRequest`                                                                              | [shared.DeleteConnectorEntitlementOwnerRequest](../../../sdk/models/shared/deleteconnectorentitlementownerrequest.md) | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |