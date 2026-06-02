# C1ApiAppV2AppEntitlementOwnersCreateUserOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppEntitlementOwnersCreateUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppEntitlementOwnersCreateUserOwnerResponse = {
  contentType: "<value>",
  statusCode: 61524,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `createAppEntitlementUserOwnerResponse`                                                                             | [shared.CreateAppEntitlementUserOwnerResponse](../../../sdk/models/shared/createappentitlementuserownerresponse.md) | :heavy_minus_sign:                                                                                                  | CreateAppEntitlementUserOwnerResponse is the response for creating a user ownership source on an entitlement.       |