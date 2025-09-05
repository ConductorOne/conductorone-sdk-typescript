# C1ApiTaskV1TaskActionsServiceRestartResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskActionsServiceRestartResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskActionsServiceRestartResponse = {
  contentType: "<value>",
  statusCode: 894294,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `taskActionsServiceRestartResponse`                                                                         | [shared.TaskActionsServiceRestartResponse](../../../sdk/models/shared/taskactionsservicerestartresponse.md) | :heavy_minus_sign:                                                                                          | Successful response                                                                                         |