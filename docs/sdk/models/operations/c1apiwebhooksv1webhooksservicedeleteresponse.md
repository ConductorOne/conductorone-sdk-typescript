# C1ApiWebhooksV1WebhooksServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiWebhooksV1WebhooksServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiWebhooksV1WebhooksServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 201,
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
| `webhooksServiceDeleteResponse`                                                                     | [shared.WebhooksServiceDeleteResponse](../../../sdk/models/shared/webhooksservicedeleteresponse.md) | :heavy_minus_sign:                                                                                  | Empty response body. Status code indicates success.                                                 |