# C1ApiAppV2ConnectorOwnersDeleteUserOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersDeleteUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersDeleteUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 70823,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `deleteConnectorUserOwnerResponse`                                                                          | [shared.DeleteConnectorUserOwnerResponse](../../../sdk/models/shared/deleteconnectoruserownerresponse.md)   | :heavy_minus_sign:                                                                                          | DeleteConnectorUserOwnerResponse is the empty response for deleting a user ownership source on a connector. |