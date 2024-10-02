# C1ApiTaskV1TaskActionsServiceCommentResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskActionsServiceCommentResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskActionsServiceCommentResponse = {
  contentType: "<value>",
  statusCode: 501,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | HTTP response content type for this operation                                                                                                          |
| `statusCode`                                                                                                                                           | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | HTTP response status code for this operation                                                                                                           |
| `rawResponse`                                                                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                  | :heavy_check_mark:                                                                                                                                     | Raw HTTP response; suitable for custom response parsing                                                                                                |
| `taskActionsServiceCommentResponse`                                                                                                                    | [shared.TaskActionsServiceCommentResponse](../../../sdk/models/shared/taskactionsservicecommentresponse.md)                                            | :heavy_minus_sign:                                                                                                                                     | Task actions service comment response returns the task view inluding the expanded array of items that are indicated by the expand mask on the request. |