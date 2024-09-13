# C1ApiSettingsV1SessionSettingsServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiSettingsV1SessionSettingsServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSettingsV1SessionSettingsServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 128926,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `updateSessionSettingsResponse`                                                                     | [shared.UpdateSessionSettingsResponse](../../../sdk/models/shared/updatesessionsettingsresponse.md) | :heavy_minus_sign:                                                                                  | Successful response                                                                                 |