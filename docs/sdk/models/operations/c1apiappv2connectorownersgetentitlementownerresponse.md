# C1ApiAppV2ConnectorOwnersGetEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersGetEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersGetEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 958297,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `getConnectorEntitlementOwnerResponse`                                                                            | [shared.GetConnectorEntitlementOwnerResponse](../../../sdk/models/shared/getconnectorentitlementownerresponse.md) | :heavy_minus_sign:                                                                                                | GetConnectorEntitlementOwnerResponse is the response for getting an entitlement ownership source on a connector.  |