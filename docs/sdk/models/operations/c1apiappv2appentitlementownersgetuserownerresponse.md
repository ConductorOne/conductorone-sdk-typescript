# C1ApiAppV2AppEntitlementOwnersGetUserOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppEntitlementOwnersGetUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppEntitlementOwnersGetUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 297853,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `getAppEntitlementUserOwnerResponse`                                                                          | [shared.GetAppEntitlementUserOwnerResponse](../../../sdk/models/shared/getappentitlementuserownerresponse.md) | :heavy_minus_sign:                                                                                            | GetAppEntitlementUserOwnerResponse is the response for getting a user ownership source on an entitlement.     |