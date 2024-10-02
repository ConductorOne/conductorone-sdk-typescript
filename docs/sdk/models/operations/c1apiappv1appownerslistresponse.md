# C1ApiAppV1AppOwnersListResponse

## Example Usage

```typescript
import { C1ApiAppV1AppOwnersListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppOwnersListResponse = {
  contentType: "<value>",
  statusCode: 401,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `listAppOwnersResponse`                                                             | [shared.ListAppOwnersResponse](../../../sdk/models/shared/listappownersresponse.md) | :heavy_minus_sign:                                                                  | Successful response                                                                 |