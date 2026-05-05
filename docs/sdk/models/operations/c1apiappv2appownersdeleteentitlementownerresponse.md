# C1ApiAppV2AppOwnersDeleteEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2AppOwnersDeleteEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2AppOwnersDeleteEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 845696,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `deleteEntitlementOwnerResponse`                                                                      | [shared.DeleteEntitlementOwnerResponse](../../../sdk/models/shared/deleteentitlementownerresponse.md) | :heavy_minus_sign:                                                                                    | DeleteEntitlementOwnerResponse is the empty response for deleting an entitlement ownership source.    |