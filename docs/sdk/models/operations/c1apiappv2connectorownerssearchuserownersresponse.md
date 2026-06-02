# C1ApiAppV2ConnectorOwnersSearchUserOwnersResponse

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersSearchUserOwnersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersSearchUserOwnersResponse = {
  contentType: "<value>",
  statusCode: 123524,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `searchConnectorUserOwnersResponse`                                                                         | [shared.SearchConnectorUserOwnersResponse](../../../sdk/models/shared/searchconnectoruserownersresponse.md) | :heavy_minus_sign:                                                                                          | SearchConnectorUserOwnersResponse is the response for searching user ownership sources on a connector.      |