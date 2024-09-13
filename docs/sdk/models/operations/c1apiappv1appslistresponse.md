# C1ApiAppV1AppsListResponse

## Example Usage

```typescript
import { C1ApiAppV1AppsListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppsListResponse = {
  contentType: "<value>",
  statusCode: 548814,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `contentType`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | HTTP response content type for this operation                                              |
| `statusCode`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | HTTP response status code for this operation                                               |
| `rawResponse`                                                                              | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                      | :heavy_check_mark:                                                                         | Raw HTTP response; suitable for custom response parsing                                    |
| `listAppsResponse`                                                                         | [shared.ListAppsResponse](../../../sdk/models/shared/listappsresponse.md)                  | :heavy_minus_sign:                                                                         | The ListAppsResponse message contains a list of results and a nextPageToken if applicable. |