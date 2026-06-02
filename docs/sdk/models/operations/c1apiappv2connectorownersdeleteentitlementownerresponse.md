# C1ApiAppV2ConnectorOwnersDeleteEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersDeleteEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersDeleteEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 542304,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | HTTP response content type for this operation                                                                              |
| `statusCode`                                                                                                               | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | HTTP response status code for this operation                                                                               |
| `rawResponse`                                                                                                              | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                      | :heavy_check_mark:                                                                                                         | Raw HTTP response; suitable for custom response parsing                                                                    |
| `deleteConnectorEntitlementOwnerResponse`                                                                                  | [shared.DeleteConnectorEntitlementOwnerResponse](../../../sdk/models/shared/deleteconnectorentitlementownerresponse.md)    | :heavy_minus_sign:                                                                                                         | DeleteConnectorEntitlementOwnerResponse is the empty response for deleting an entitlement ownership source on a connector. |