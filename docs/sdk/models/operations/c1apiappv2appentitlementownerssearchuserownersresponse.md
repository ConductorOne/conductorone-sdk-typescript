# C1ApiAppV2AppEntitlementOwnersSearchUserOwnersResponse

## Example Usage

```typescript
import { C1ApiAppV2AppEntitlementOwnersSearchUserOwnersResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppEntitlementOwnersSearchUserOwnersResponse = {
  contentType: "<value>",
  statusCode: 985266,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `searchAppEntitlementUserOwnersResponse`                                                                              | [shared.SearchAppEntitlementUserOwnersResponse](../../../sdk/models/shared/searchappentitlementuserownersresponse.md) | :heavy_minus_sign:                                                                                                    | SearchAppEntitlementUserOwnersResponse is the response for searching user ownership sources on an entitlement.        |