# C1ApiAppV1AppEntitlementOwnersAddResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementOwnersAddResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementOwnersAddResponse = {
  contentType: "<value>",
  statusCode: 710207,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `addAppEntitlementOwnerResponse`                                                                      | [shared.AddAppEntitlementOwnerResponse](../../../sdk/models/shared/addappentitlementownerresponse.md) | :heavy_minus_sign:                                                                                    | The empty response message for adding an app entitlement owner.                                       |