# C1ApiAppV1AppsUpdateResponse

## Example Usage

```typescript
import { C1ApiAppV1AppsUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppsUpdateResponse = {
  contentType: "<value>",
  statusCode: 602763,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `contentType`                                                               | *string*                                                                    | :heavy_check_mark:                                                          | HTTP response content type for this operation                               |
| `statusCode`                                                                | *number*                                                                    | :heavy_check_mark:                                                          | HTTP response status code for this operation                                |
| `rawResponse`                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)       | :heavy_check_mark:                                                          | Raw HTTP response; suitable for custom response parsing                     |
| `updateAppResponse`                                                         | [shared.UpdateAppResponse](../../../sdk/models/shared/updateappresponse.md) | :heavy_minus_sign:                                                          | Returns the updated app's new values.                                       |