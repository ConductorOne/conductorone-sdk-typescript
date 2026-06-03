# C1ApiAppV2ConnectorOwnersDeleteUserOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersDeleteUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersDeleteUserOwnerRequest = {
  appId: "<id>",
  connectorId: "<id>",
  roleSlug: "<value>",
  userRefId: "<id>",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                 | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `connectorId`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `roleSlug`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `userRefId`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `deleteConnectorUserOwnerRequest`                                                                       | [shared.DeleteConnectorUserOwnerRequest](../../../sdk/models/shared/deleteconnectoruserownerrequest.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |