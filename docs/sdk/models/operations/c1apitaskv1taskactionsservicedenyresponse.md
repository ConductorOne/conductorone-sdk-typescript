# C1ApiTaskV1TaskActionsServiceDenyResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskActionsServiceDenyResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskActionsServiceDenyResponse = {
  contentType: "<value>",
  statusCode: 208876,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `taskActionsServiceDenyResponse`                                                                                          | [shared.TaskActionsServiceDenyResponse](../../../sdk/models/shared/taskactionsservicedenyresponse.md)                     | :heavy_minus_sign:                                                                                                        | The TaskActionsServiceDenyResponse returns a task view with paths indicating the location of expanded items in the array. |