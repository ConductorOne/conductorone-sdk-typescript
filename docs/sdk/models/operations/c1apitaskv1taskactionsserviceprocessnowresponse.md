# C1ApiTaskV1TaskActionsServiceProcessNowResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskActionsServiceProcessNowResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskActionsServiceProcessNowResponse = {
  contentType: "<value>",
  statusCode: 235557,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `taskActionsServiceProcessNowResponse`                                                                            | [shared.TaskActionsServiceProcessNowResponse](../../../sdk/models/shared/taskactionsserviceprocessnowresponse.md) | :heavy_minus_sign:                                                                                                | Successful response                                                                                               |