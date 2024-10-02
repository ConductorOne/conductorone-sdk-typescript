# C1ApiAppV1AppEntitlementOwnersSetResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementOwnersSetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementOwnersSetResponse = {
  contentType: "<value>",
  statusCode: 505,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `setAppEntitlementOwnersResponse`                                                                       | [shared.SetAppEntitlementOwnersResponse](../../../sdk/models/shared/setappentitlementownersresponse.md) | :heavy_minus_sign:                                                                                      | The empty response message for setting the app entitlement owners.                                      |