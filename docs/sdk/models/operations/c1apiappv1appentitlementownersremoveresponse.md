# C1ApiAppV1AppEntitlementOwnersRemoveResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementOwnersRemoveResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementOwnersRemoveResponse = {
  contentType: "<value>",
  statusCode: 867537,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `removeAppEntitlementOwnerResponse`                                                                         | [shared.RemoveAppEntitlementOwnerResponse](../../../sdk/models/shared/removeappentitlementownerresponse.md) | :heavy_minus_sign:                                                                                          | The empty response message for removing an app entitlement owner.                                           |