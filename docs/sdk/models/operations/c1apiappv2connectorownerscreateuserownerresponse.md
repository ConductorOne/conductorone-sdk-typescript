# C1ApiAppV2ConnectorOwnersCreateUserOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersCreateUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersCreateUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 898206,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `createConnectorUserOwnerResponse`                                                                        | [shared.CreateConnectorUserOwnerResponse](../../../sdk/models/shared/createconnectoruserownerresponse.md) | :heavy_minus_sign:                                                                                        | CreateConnectorUserOwnerResponse is the response for creating a user ownership source on a connector.     |