# C1ApiSystemlogV1SystemLogServiceListEventsResponse

## Example Usage

```typescript
import { C1ApiSystemlogV1SystemLogServiceListEventsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSystemlogV1SystemLogServiceListEventsResponse = {
  contentType: "<value>",
  statusCode: 203,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `systemLogServiceListEventsResponse`                                                                          | [shared.SystemLogServiceListEventsResponse](../../../sdk/models/shared/systemlogservicelisteventsresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |