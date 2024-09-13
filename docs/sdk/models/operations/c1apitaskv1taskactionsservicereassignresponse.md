# C1ApiTaskV1TaskActionsServiceReassignResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskActionsServiceReassignResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskActionsServiceReassignResponse = {
  contentType: "<value>",
  statusCode: 161309,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response content type for this operation                                                                                 |
| `statusCode`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response status code for this operation                                                                                  |
| `rawResponse`                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                         | :heavy_check_mark:                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                       |
| `taskActionsServiceReassignResponse`                                                                                          | [shared.TaskActionsServiceReassignResponse](../../../sdk/models/shared/taskactionsservicereassignresponse.md)                 | :heavy_minus_sign:                                                                                                            | The TaskActionsServiceReassignResponse returns a task view with paths indicating the location of expanded items in the array. |