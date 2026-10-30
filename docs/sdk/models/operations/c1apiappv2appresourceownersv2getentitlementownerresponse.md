# C1ApiAppV2AppResourceOwnersV2GetEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppResourceOwnersV2GetEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppResourceOwnersV2GetEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 927506,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `getAppResourceEntitlementOwnerResponse`                                                                              | [shared.GetAppResourceEntitlementOwnerResponse](../../../sdk/models/shared/getappresourceentitlementownerresponse.md) | :heavy_minus_sign:                                                                                                    | GetAppResourceEntitlementOwnerResponse is the response for getting an entitlement ownership source on a resource.     |