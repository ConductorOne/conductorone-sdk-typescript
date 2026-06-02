# C1ApiAppV2ConnectorOwnersGetUserOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersGetUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersGetUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 303688,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `getConnectorUserOwnerResponse`                                                                     | [shared.GetConnectorUserOwnerResponse](../../../sdk/models/shared/getconnectoruserownerresponse.md) | :heavy_minus_sign:                                                                                  | GetConnectorUserOwnerResponse is the response for getting a user ownership source on a connector.   |