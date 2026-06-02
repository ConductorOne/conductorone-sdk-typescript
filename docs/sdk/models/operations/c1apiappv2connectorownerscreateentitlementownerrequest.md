# C1ApiAppV2ConnectorOwnersCreateEntitlementOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersCreateEntitlementOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersCreateEntitlementOwnerRequest = {
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
| `createConnectorEntitlementOwnerRequest`                                                                              | [shared.CreateConnectorEntitlementOwnerRequest](../../../sdk/models/shared/createconnectorentitlementownerrequest.md) | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |