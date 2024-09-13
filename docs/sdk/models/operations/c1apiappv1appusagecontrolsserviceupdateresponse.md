# C1ApiAppV1AppUsageControlsServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiAppV1AppUsageControlsServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppUsageControlsServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 678880,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `updateAppUsageControlsResponse`                                                                      | [shared.UpdateAppUsageControlsResponse](../../../sdk/models/shared/updateappusagecontrolsresponse.md) | :heavy_minus_sign:                                                                                    | The UpdateAppUsageControlsResponse message contains the updated AppUsageControls object.              |