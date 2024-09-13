# C1ApiTaskV1TaskActionsServiceApproveResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskActionsServiceApproveResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskActionsServiceApproveResponse = {
  contentType: "<value>",
  statusCode: 102044,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | HTTP response content type for this operation                                                                                |
| `statusCode`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | HTTP response status code for this operation                                                                                 |
| `rawResponse`                                                                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                        | :heavy_check_mark:                                                                                                           | Raw HTTP response; suitable for custom response parsing                                                                      |
| `taskActionsServiceApproveResponse`                                                                                          | [shared.TaskActionsServiceApproveResponse](../../../sdk/models/shared/taskactionsserviceapproveresponse.md)                  | :heavy_minus_sign:                                                                                                           | The TaskActionsServiceApproveResponse returns a task view with paths indicating the location of expanded items in the array. |