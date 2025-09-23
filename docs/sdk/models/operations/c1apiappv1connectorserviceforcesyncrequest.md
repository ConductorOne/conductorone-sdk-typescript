# C1ApiAppV1ConnectorServiceForceSyncRequest

## Example Usage

```typescript
import { C1ApiAppV1ConnectorServiceForceSyncRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1ConnectorServiceForceSyncRequest = {
  appId: "<id>",
  connectorId: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `appId`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `connectorId`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `forceSyncRequest`                                                        | [shared.ForceSyncRequest](../../../sdk/models/shared/forcesyncrequest.md) | :heavy_minus_sign:                                                        | N/A                                                                       |