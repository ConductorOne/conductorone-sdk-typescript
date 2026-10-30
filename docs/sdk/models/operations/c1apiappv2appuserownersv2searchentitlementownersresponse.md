# C1ApiAppV2AppUserOwnersV2SearchEntitlementOwnersResponse

## Example Usage

```typescript
import { C1ApiAppV2AppUserOwnersV2SearchEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppUserOwnersV2SearchEntitlementOwnersResponse = {
  contentType: "<value>",
  statusCode: 832764,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `searchAppUserEntitlementOwnersResponse`                                                                              | [shared.SearchAppUserEntitlementOwnersResponse](../../../sdk/models/shared/searchappuserentitlementownersresponse.md) | :heavy_minus_sign:                                                                                                    | SearchAppUserEntitlementOwnersResponse is the response for searching entitlement ownership sources on an app user.    |