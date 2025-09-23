# C1ApiAppV1AppEntitlementsListUsersResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementsListUsersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementsListUsersResponse = {
  contentType: "<value>",
  statusCode: 707466,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `listAppEntitlementUsersResponse`                                                                         | [shared.ListAppEntitlementUsersResponse](../../../sdk/models/shared/listappentitlementusersresponse.md)   | :heavy_minus_sign:                                                                                        | The ListAppEntitlementUsersResponse message contains a list of results and a nextPageToken if applicable. |