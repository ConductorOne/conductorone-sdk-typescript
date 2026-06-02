# C1ApiAppV2ConnectorOwnersSearchEntitlementOwnersResponse

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersSearchEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersSearchEntitlementOwnersResponse = {
  contentType: "<value>",
  statusCode: 307280,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `searchConnectorEntitlementOwnersResponse`                                                                                | [shared.SearchConnectorEntitlementOwnersResponse](../../../sdk/models/shared/searchconnectorentitlementownersresponse.md) | :heavy_minus_sign:                                                                                                        | SearchConnectorEntitlementOwnersResponse is the response for searching entitlement ownership sources on a connector.      |