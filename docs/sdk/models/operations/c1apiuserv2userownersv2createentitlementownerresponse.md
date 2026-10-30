# C1ApiUserV2UserOwnersV2CreateEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiUserV2UserOwnersV2CreateEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiUserV2UserOwnersV2CreateEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 429667,
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | HTTP response content type for this operation                                                                                |
| `statusCode`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | HTTP response status code for this operation                                                                                 |
| `rawResponse`                                                                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                        | :heavy_check_mark:                                                                                                           | Raw HTTP response; suitable for custom response parsing                                                                      |
| `createUserEntitlementOwnerResponse`                                                                                         | [shared.CreateUserEntitlementOwnerResponse](../../../sdk/models/shared/createuserentitlementownerresponse.md)                | :heavy_minus_sign:                                                                                                           | CreateUserEntitlementOwnerResponse is the response for creating an entitlement ownership source on a user (service account). |