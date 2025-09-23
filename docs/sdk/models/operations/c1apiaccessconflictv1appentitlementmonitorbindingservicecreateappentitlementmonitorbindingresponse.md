# C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse

## Example Usage

```typescript
import {
  C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse =
    {
      contentType: "<value>",
      statusCode: 842047,
    };
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `appEntitlementMonitorBinding`                                                                    | [shared.AppEntitlementMonitorBinding](../../../sdk/models/shared/appentitlementmonitorbinding.md) | :heavy_minus_sign:                                                                                | Successful response                                                                               |