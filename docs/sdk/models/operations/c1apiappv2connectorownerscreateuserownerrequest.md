# C1ApiAppV2ConnectorOwnersCreateUserOwnerRequest

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersCreateUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersCreateUserOwnerRequest = {
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
| `createConnectorUserOwnerRequest`                                                                       | [shared.CreateConnectorUserOwnerRequest](../../../sdk/models/shared/createconnectoruserownerrequest.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |