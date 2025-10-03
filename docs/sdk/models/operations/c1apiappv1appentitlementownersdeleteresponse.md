# C1ApiAppV1AppEntitlementOwnersDeleteResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementOwnersDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementOwnersDeleteResponse = {
  contentType: "<value>",
  statusCode: 909899,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `deleteAppEntitlementOwnersResponse`                                                                          | [shared.DeleteAppEntitlementOwnersResponse](../../../sdk/models/shared/deleteappentitlementownersresponse.md) | :heavy_minus_sign:                                                                                            | the empty response message for deleting app entitlement owners.                                               |