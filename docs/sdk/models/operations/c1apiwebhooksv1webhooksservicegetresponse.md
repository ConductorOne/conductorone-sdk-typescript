# C1ApiWebhooksV1WebhooksServiceGetResponse

## Example Usage

```typescript
import { C1ApiWebhooksV1WebhooksServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiWebhooksV1WebhooksServiceGetResponse = {
  contentType: "<value>",
  statusCode: 830319,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `webhooksServiceGetResponse`                                                                  | [shared.WebhooksServiceGetResponse](../../../sdk/models/shared/webhooksservicegetresponse.md) | :heavy_minus_sign:                                                                            | Successful response                                                                           |