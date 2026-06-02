# C1ApiAppV2AppEntitlementOwnersDeleteUserOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppEntitlementOwnersDeleteUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppEntitlementOwnersDeleteUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 424222,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `deleteAppEntitlementUserOwnerResponse`                                                                             | [shared.DeleteAppEntitlementUserOwnerResponse](../../../sdk/models/shared/deleteappentitlementuserownerresponse.md) | :heavy_minus_sign:                                                                                                  | DeleteAppEntitlementUserOwnerResponse is the empty response for deleting a user ownership source on an entitlement. |