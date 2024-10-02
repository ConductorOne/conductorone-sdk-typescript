# C1ApiAppV1AppUsageControlsServiceGetResponse

## Example Usage

```typescript
import { C1ApiAppV1AppUsageControlsServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppUsageControlsServiceGetResponse = {
  contentType: "<value>",
  statusCode: 226,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `getAppUsageControlsResponse`                                                                   | [shared.GetAppUsageControlsResponse](../../../sdk/models/shared/getappusagecontrolsresponse.md) | :heavy_minus_sign:                                                                              | The GetAppUsageControlsResponse message contains the retrieved AppUsageControls object.         |