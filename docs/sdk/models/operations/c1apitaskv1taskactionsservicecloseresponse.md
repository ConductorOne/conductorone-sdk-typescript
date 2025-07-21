# C1ApiTaskV1TaskActionsServiceCloseResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskActionsServiceCloseResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskActionsServiceCloseResponse = {
  contentType: "<value>",
  statusCode: 446107,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | HTTP response content type for this operation                                                                              |
| `statusCode`                                                                                                               | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | HTTP response status code for this operation                                                                               |
| `rawResponse`                                                                                                              | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                      | :heavy_check_mark:                                                                                                         | Raw HTTP response; suitable for custom response parsing                                                                    |
| `taskActionsServiceCloseResponse`                                                                                          | [shared.TaskActionsServiceCloseResponse](../../../sdk/models/shared/taskactionsservicecloseresponse.md)                    | :heavy_minus_sign:                                                                                                         | The TaskActionsServiceCloseResponse returns a task view with paths indicating the location of expanded items in the array. |