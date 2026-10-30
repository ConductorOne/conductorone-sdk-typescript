# C1ApiAppV2AppUserOwnersV2DeleteEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppUserOwnersV2DeleteEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppUserOwnersV2DeleteEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 734432,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | HTTP response content type for this operation                                                                            |
| `statusCode`                                                                                                             | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | HTTP response status code for this operation                                                                             |
| `rawResponse`                                                                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                    | :heavy_check_mark:                                                                                                       | Raw HTTP response; suitable for custom response parsing                                                                  |
| `deleteAppUserEntitlementOwnerResponse`                                                                                  | [shared.DeleteAppUserEntitlementOwnerResponse](../../../sdk/models/shared/deleteappuserentitlementownerresponse.md)      | :heavy_minus_sign:                                                                                                       | DeleteAppUserEntitlementOwnerResponse is the empty response for deleting an entitlement ownership source on an app user. |