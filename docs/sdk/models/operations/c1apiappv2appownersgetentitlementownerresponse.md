# C1ApiAppV2AppOwnersGetEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersGetEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersGetEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 971584,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `getAppEntitlementOwnerResponse`                                                                      | [shared.GetAppEntitlementOwnerResponse](../../../sdk/models/shared/getappentitlementownerresponse.md) | :heavy_minus_sign:                                                                                    | GetEntitlementOwnerResponse is the response for getting an entitlement ownership source.              |