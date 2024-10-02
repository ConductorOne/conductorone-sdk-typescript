# C1ApiWebhooksV1WebhooksServiceTestResponse

## Example Usage

```typescript
import { C1ApiWebhooksV1WebhooksServiceTestResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiWebhooksV1WebhooksServiceTestResponse = {
  contentType: "<value>",
  statusCode: 205,
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
| `webhooksServiceTestResponse`                                                                   | [shared.WebhooksServiceTestResponse](../../../sdk/models/shared/webhooksservicetestresponse.md) | :heavy_minus_sign:                                                                              | Successful response                                                                             |