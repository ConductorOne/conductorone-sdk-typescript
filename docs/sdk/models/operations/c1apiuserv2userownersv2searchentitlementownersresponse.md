# C1ApiUserV2UserOwnersV2SearchEntitlementOwnersResponse

## Example Usage

```typescript
import { C1ApiUserV2UserOwnersV2SearchEntitlementOwnersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV2UserOwnersV2SearchEntitlementOwnersResponse = {
  contentType: "<value>",
  statusCode: 925961,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | HTTP response content type for this operation                                                                                |
| `statusCode`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | HTTP response status code for this operation                                                                                 |
| `rawResponse`                                                                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                        | :heavy_check_mark:                                                                                                           | Raw HTTP response; suitable for custom response parsing                                                                      |
| `searchUserEntitlementOwnersResponse`                                                                                        | [shared.SearchUserEntitlementOwnersResponse](../../../sdk/models/shared/searchuserentitlementownersresponse.md)              | :heavy_minus_sign:                                                                                                           | SearchUserEntitlementOwnersResponse is the response for searching entitlement ownership sources on a user (service account). |