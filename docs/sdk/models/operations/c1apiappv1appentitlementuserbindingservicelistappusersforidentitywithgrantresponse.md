# C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse

## Example Usage

```typescript
import {
  C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse =
    {
      contentType: "<value>",
      statusCode: 570222,
    };
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `listAppUsersForIdentityWithGrantResponse`                                                                                | [shared.ListAppUsersForIdentityWithGrantResponse](../../../sdk/models/shared/listappusersforidentitywithgrantresponse.md) | :heavy_minus_sign:                                                                                                        | Successful response                                                                                                       |